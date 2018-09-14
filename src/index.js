export default function ajap(option) {

  /* 
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

  const jsonpGo = (url, async) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = async;
    const oHead = document.querySelector('head');
    oHead.appendChild(script);

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
  };

  let callback = option.callback;

  if (typeof (callback) == 'undefined') {
    callback = 'callback';
  }

  let callbackName = option.callbackName;

  if (typeof (callbackName) == 'undefined') {
    callbackName = 'callback';
  };

  const success = option.success;

  window[callbackName] = (data) => {
    success && success(data);
  };

  url += (dataStr+callback+"="+callbackName);

  jsonpGo(url,async);

}