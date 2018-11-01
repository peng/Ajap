export default function ajap(option) {

  /* 
    将来要增加,url中已经添加参数的方法
    option = {
      url:string,
      async:boolean,
      data:object,
      callback:string,
      cabbbackName:string,
      success:function -> callback function
    }

    url must be input other can choose.
  */

  const objToVal = (obj) => {
    let str = '?';
    for (let item in obj) {
      str += item;
      console.log(obj[item]);
      str += `=${obj[item]}&`;
    }
    // const endLen = str.length - 1;
    // str = str.substring(0,endLen);
    return str;
  }
  const oHead = document.querySelector('head');
  const script = document.createElement('script');

  const jsonpGo = (url, async) => {
    script.src = url;
    script.async = async;
    
    oHead.appendChild(script);

  }

  const randNum = () => {
    const oT = new Date().getTime().toString();
    const num = Math.ceil(Math.random()*10000000000);
    const randStr = num.toString();
    return oT+randStr;
  }

  let url = option.url;

  if (typeof(url) == "undefined") {
    console.error("url must input!");
  }

  let async = option.async;

  if (typeof(async) == 'undefined') {
    async = true;
  }

  let data = option.data,dataStr = '';

  if (typeof (data) != 'undefined') {
    const type = Object.prototype.toString.call(data);
    // console.log(type);
    switch (type) {
      case '[object Object]':
        dataStr = objToVal(data);
        break;
      default:
        console.error("data is not standard!");
    }
  } else {
    url += '?';
  };

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

  jsonpGo(url,async);

}