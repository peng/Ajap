(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ajap"] = factory();
	else
		root["Ajap"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajap; });
function ajap(option) {
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
  var url = option.url;

  var objToVal = function objToVal(obj) {
    var str = '?';

    if (url.indexOf('?') != -1) {
      str = '&';
    }

    for (var item in obj) {
      str += item;
      str += "=".concat(obj[item], "&");
    }

    return str;
  };

  var oHead = document.querySelector('head');
  var script = document.createElement('script'); // add load call back methods

  if (option.load && Object.prototype.toString.call(option.load) == "[object Function]") {
    script.addEventListener('load', option.load);
  } else {
    throw "load must be function";
  }

  var jsonpGo = function jsonpGo(url) {
    // insert script tag into head tag
    url = encodeURI(url);
    script.src = url;
    oHead.appendChild(script);
  };

  var randNum = function randNum() {
    // get random number
    var oT = new Date().getTime().toString();
    var num = Math.ceil(Math.random() * 10000000000);
    var randStr = num.toString();
    return oT + randStr;
  };

  if (typeof url == "undefined") {
    console.error("url must input!");
  }

  var data = option.data,
      dataStr = '';

  if (typeof data != 'undefined') {
    var type = Object.prototype.toString.call(data);

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
  }

  ;

  if (option.nocallback == true) {
    url += dataStr;
  } else {
    var callback = option.callback;

    if (typeof callback == 'undefined') {
      callback = 'callback'; // if add random number will CORB 如果添加随机数会出现跨域情况
    }

    var callbackName = option.callbackName;

    if (typeof callbackName == 'undefined') {
      callbackName = 'callback_' + randNum();
    }

    ;
    var success = option.success;

    window[callbackName] = function (data) {
      success && success(data);
      oHead.removeChild(script); //delete script tag
    };

    url += dataStr + callback + "=" + callbackName;
  }

  jsonpGo(url);
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FqYXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYWphcCIsIm9wdGlvbiIsInVybCIsIm9ialRvVmFsIiwib2JqIiwic3RyIiwiaW5kZXhPZiIsIml0ZW0iLCJvSGVhZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJsb2FkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpzb25wR28iLCJlbmNvZGVVUkkiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInJhbmROdW0iLCJvVCIsIkRhdGUiLCJnZXRUaW1lIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJyYW5kU3RyIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImRhdGFTdHIiLCJ0eXBlIiwibm9jYWxsYmFjayIsImNhbGxiYWNrIiwiY2FsbGJhY2tOYW1lIiwic3VjY2VzcyIsIndpbmRvdyIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7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dGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFqYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWphcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamFwKG9wdGlvbikge1xuXG4gIC8qIFxuICAgIG9wdGlvbiA9IHtcbiAgICAgIHVybDpzdHJpbmcsXG4gICAgICBkYXRhOm9iamVjdCxcbiAgICAgIGNhbGxiYWNrOnN0cmluZyxcbiAgICAgIGNhYmJiYWNrTmFtZTpzdHJpbmcsXG4gICAgICBzdWNjZXNzOmZ1bmN0aW9uIC0+IGNhbGxiYWNrIGZ1bmN0aW9uLFxuICAgICAgbG9hZDpmdW5jdGlvbiAtPiBjYWxsYmFjayBmdW5jdGlvbixcbiAgICAgIG5vY2FsbGJhY2s6ZmFsc2UgZGVmYXVsdC4gaWYgdHJ1ZSAsIHdpbGwgbm90IGFkZCBjYWxsYmFja1xuICAgIH1cblxuICAgIHVybCBtdXN0IGJlIGlucHV0IG90aGVyIGNhbiBjaG9vc2UuXG5cbiAgICDmoLzlvI/nsbvlnovvvJpcbiAgICB1cmwgLT4gMS7nuq91cmwgICAgICAgICAgICAgICAgICAgICAgICAgICAgKOW/heWhqylcbiAgICAgICAgICAgMi7luKblj4LmlbDnmoR1cmxcbiAgICBkYXRhIC0+IDEu5a+56LGh57G75Z6LICAgICAgICAgICAgICAgICAgICAgICAgICjlj6/pgIkpXG4gICAgY2FsbGJhY2sgLT4gMS7lrZfnrKbnqpzoh6rlrprkuYnlm57osIPlj4LmlbBrZXkgICAgICAgICjlj6/pgIkpXG4gICAgY2FsbGJhY2tOYW1lIC0+IDEu5a2X56ym56qc6Ieq5a6a5LmJ5Zue6LCD5Y+C5pWwdmFsdWUgICjlj6/pgIkpXG4gICAgc3VjY2VzcyAtPiAxLuivt+axguaIkOWKn+eahOWbnuiwg+WHveaVsCAgICAgICAgICAgICAgKOWPr+mAiSlcbiAgICBsb2FkIC0+IDEu5oiQ5Yqf5Yqg6L2955qE5Zue6LCD5Ye95pWwICAgICAgICAgICAgICAgICAo5Y+v6YCJKSAo55So5LqO6K+35rGC5Zue5p2l5Y+C5pWw6Z2e5omn6KGM5Ye95pWwKVxuICAgIG5vY2FsbGJhY2sgLT4gMS7luIPlsJTlgLzvvIzpu5jorqTkuLpmYWxzZSwg5re75YqgY2FsbGJhY2vnmoRrZXnlkox2YWx1ZeOAguWmguaenOS4unRydWXvvIzliJnkuI3mt7vliqBjYWxsYmFjayxjYWxsYmFja+WSjGNhbGxiYWNrTmFtZeWPguaVsOaXoOaViFxuICAqL1xuXG4gbGV0IHVybCA9IG9wdGlvbi51cmw7XG5cbiAgY29uc3Qgb2JqVG9WYWwgPSAob2JqKSA9PiB7XG4gICAgbGV0IHN0ciA9ICc/JztcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xuICAgICAgc3RyID0gJyYnO1xuICAgIH1cbiAgICBmb3IgKGxldCBpdGVtIGluIG9iaikge1xuICAgICAgc3RyICs9IGl0ZW07XG4gICAgICBzdHIgKz0gYD0ke29ialtpdGVtXX0mYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBjb25zdCBvSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgLy8gYWRkIGxvYWQgY2FsbCBiYWNrIG1ldGhvZHNcbiAgaWYgKG9wdGlvbi5sb2FkICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcHRpb24ubG9hZCkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLG9wdGlvbi5sb2FkKTsgXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgXCJsb2FkIG11c3QgYmUgZnVuY3Rpb25cIlxuICB9XG5cbiAgY29uc3QganNvbnBHbyA9ICh1cmwpID0+IHtcbiAgICAvLyBpbnNlcnQgc2NyaXB0IHRhZyBpbnRvIGhlYWQgdGFnXG4gICAgdXJsID0gZW5jb2RlVVJJKHVybCk7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBvSGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgY29uc3QgcmFuZE51bSA9ICgpID0+IHtcbiAgICAvLyBnZXQgcmFuZG9tIG51bWJlclxuICAgIGNvbnN0IG9UID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDAwMDAwMDAwMCk7XG4gICAgY29uc3QgcmFuZFN0ciA9IG51bS50b1N0cmluZygpO1xuICAgIHJldHVybiBvVCtyYW5kU3RyO1xuICB9XG5cbiAgaWYgKHR5cGVvZih1cmwpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwidXJsIG11c3QgaW5wdXQhXCIpO1xuICB9XG5cbiAgbGV0IGRhdGEgPSBvcHRpb24uZGF0YSxkYXRhU3RyID0gJyc7XG5cbiAgaWYgKHR5cGVvZiAoZGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgICAgZGF0YVN0ciA9IG9ialRvVmFsKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJkYXRhIGlzIG5vdCBzdGFuZGFyZCFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbi5ub2NhbGxiYWNrICE9IHRydWUpIHtcbiAgICAgIGlmICh1cmwuaW5kZXhPZignPycpICE9IC0xKSB7XG4gICAgICAgIHVybCArPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgKz0gJz8nO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAob3B0aW9uLm5vY2FsbGJhY2sgPT0gdHJ1ZSkge1xuICAgIHVybCArPSBkYXRhU3RyO1xuICB9IGVsc2Uge1xuICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbi5jYWxsYmFjaztcblxuICAgIGlmICh0eXBlb2YgKGNhbGxiYWNrKSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FsbGJhY2sgPSAnY2FsbGJhY2snOy8vIGlmIGFkZCByYW5kb20gbnVtYmVyIHdpbGwgQ09SQiDlpoLmnpzmt7vliqDpmo/mnLrmlbDkvJrlh7rnjrDot6jln5/mg4XlhrVcbiAgICB9XG5cbiAgICBsZXQgY2FsbGJhY2tOYW1lID0gb3B0aW9uLmNhbGxiYWNrTmFtZTtcblxuICAgIGlmICh0eXBlb2YgKGNhbGxiYWNrTmFtZSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbGxiYWNrTmFtZSA9ICdjYWxsYmFja18nICsgcmFuZE51bSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWNjZXNzID0gb3B0aW9uLnN1Y2Nlc3M7XG5cbiAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IChkYXRhKSA9PiB7XG4gICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoZGF0YSk7XG4gICAgICBvSGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpOyAvL2RlbGV0ZSBzY3JpcHQgdGFnXG4gICAgfTtcblxuICAgIHVybCArPSAoZGF0YVN0citjYWxsYmFjaytcIj1cIitjYWxsYmFja05hbWUpO1xuXG4gIH1cblxuICBcblxuICBqc29ucEdvKHVybCk7XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9