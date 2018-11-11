export default function ajap(option) {

  /* 
    option = {
      url:string,
      data:object,
      callback:string,
      cabbbackName:string,
      success:function -> callback function
    }

    url must be input other can choose.
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

  const jsonpGo = (url) => {
    script.src = url;
    oHead.appendChild(script);
  }

  const randNum = () => {
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
    if (url.indexOf('?') != -1) {
      url += '&';
    } else {
      url += '?';
    }
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

  jsonpGo(url);

}