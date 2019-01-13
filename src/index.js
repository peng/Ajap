export default function ajap(option) {

  /* 
    option = {
      url:string,
      data:object,
      callback:string,
      cabbbackName:string,
      success:function -> callback function,
      load:function -> callback function,
      nocallback:false default. if true , will not add callback
    }

    url must be input other can choose.

    格式类型：
    url -> 1.纯url                            (必填)
           2.带参数的url
    data -> 1.对象类型                         (可选)
    callback -> 1.字符窜自定义回调参数key        (可选)
    callbackName -> 1.字符窜自定义回调参数value  (可选)
    success -> 1.请求成功的回调函数              (可选)
    load -> 1.成功加载的回调函数                 (可选) (用于请求回来参数非执行函数)
    nocallback -> 1.布尔值，默认为false, 添加callback的key和value。如果为true，则不添加callback,callback和callbackName参数无效
  */

 let url = option.url;

  const objToVal = (obj) => {
    let str = '?';
    if (url.indexOf('?') != -1) {
      str = '&';
    }
    for (let item in obj) {
      str += item;
      str += `=${obj[item]}&`;
    }
    return str;
  }
  const oHead = document.querySelector('head');
  const script = document.createElement('script');

  // add load call back methods
  if (option.load && Object.prototype.toString.call(option.load) == "[object Function]") {
    script.addEventListener('load',option.load); 
  } else {
    throw "load must be function"
  }

  const jsonpGo = (url) => {
    // insert script tag into head tag
    url = encodeURI(url);
    script.src = url;
    oHead.appendChild(script);
  }

  const randNum = () => {
    // get random number
    const oT = new Date().getTime().toString();
    const num = Math.ceil(Math.random()*10000000000);
    const randStr = num.toString();
    return oT+randStr;
  }

  if (typeof(url) == "undefined") {
    console.error("url must input!");
  }

  let data = option.data,dataStr = '';

  if (typeof (data) != 'undefined') {
    const type = Object.prototype.toString.call(data);
    switch (type) {
      case '[object Object]':
        dataStr = objToVal(data);
        break;
      default:
        console.error("data is not standard!");
        return;
    }
  } else {
    if (option.nocallback != true) {
      if (url.indexOf('?') != -1) {
        url += '&';
      } else {
        url += '?';
      }
    }
  };

  if (option.nocallback == true) {
    url += dataStr;
  } else {
    let callback = option.callback;

    if (typeof (callback) == 'undefined') {
      callback = 'callback';// if add random number will CORB 如果添加随机数会出现跨域情况
    }

    let callbackName = option.callbackName;

    if (typeof (callbackName) == 'undefined') {
      callbackName = 'callback_' + randNum();
    };

    const success = option.success;

    window[callbackName] = (data) => {
      success && success(data);
      oHead.removeChild(script); //delete script tag
    };

    url += (dataStr+callback+"="+callbackName);

  }

  

  jsonpGo(url);

}