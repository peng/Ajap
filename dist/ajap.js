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
  var objToVal = function objToVal(obj) {
    var str = '?';

    for (var item in obj) {
      str += item; // console.log(obj[item]);

      str += "=".concat(obj[item], "&");
    } // const endLen = str.length - 1;
    // str = str.substring(0,endLen);


    return str;
  };

  var oHead = document.querySelector('head');
  var script = document.createElement('script');

  var jsonpGo = function jsonpGo(url, async) {
    script.src = url;
    script.async = async;
    oHead.appendChild(script);
  };

  var randNum = function randNum() {
    var oT = new Date().getTime().toString();
    var num = Math.ceil(Math.random() * 10000000000);
    var randStr = num.toString();
    return oT + randStr;
  };

  var url = option.url;

  if (typeof url == "undefined") {
    console.error("url must input!");
  }

  var async = option.async;

  if (typeof async == 'undefined') {
    async = true;
  }

  var data = option.data,
      dataStr = '';

  if (typeof data != 'undefined') {
    var type = Object.prototype.toString.call(data); // console.log(type);

    switch (type) {
      case '[object Object]':
        dataStr = objToVal(data);
        break;

      default:
        console.error("data is not standard!");
    }
  } else {
    url += '?';
  }

  ;
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
  jsonpGo(url, async);
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FqYXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYWphcCIsIm9wdGlvbiIsIm9ialRvVmFsIiwib2JqIiwic3RyIiwiaXRlbSIsIm9IZWFkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImpzb25wR28iLCJ1cmwiLCJhc3luYyIsInNyYyIsImFwcGVuZENoaWxkIiwicmFuZE51bSIsIm9UIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsIm51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwicmFuZFN0ciIsImNvbnNvbGUiLCJlcnJvciIsImRhdGEiLCJkYXRhU3RyIiwidHlwZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJjYWxsYmFjayIsImNhbGxiYWNrTmFtZSIsInN1Y2Nlc3MiLCJ3aW5kb3ciLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5Qyxp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QVFBLFlBQVIsSUFBeUIsV0FBN0IsRUFBMEM7QUFDeENBLGdCQUFZLEdBQUcsY0FBY25CLE9BQU8sRUFBcEM7QUFDRDs7QUFBQTtBQUVELE1BQU1vQixPQUFPLEdBQUduQyxNQUFNLENBQUNtQyxPQUF2Qjs7QUFFQUMsUUFBTSxDQUFDRixZQUFELENBQU4sR0FBdUIsVUFBQ1AsSUFBRCxFQUFVO0FBQy9CUSxXQUFPLElBQUlBLE9BQU8sQ0FBQ1IsSUFBRCxDQUFsQjtBQUNBdEIsU0FBSyxDQUFDZ0MsV0FBTixDQUFrQjdCLE1BQWxCLEVBRitCLENBRUo7QUFDNUIsR0FIRDs7QUFLQUcsS0FBRyxJQUFLaUIsT0FBTyxHQUFDSyxRQUFSLEdBQWlCLEdBQWpCLEdBQXFCQyxZQUE3QjtBQUVBeEIsU0FBTyxDQUFDQyxHQUFELEVBQUtDLEtBQUwsQ0FBUDtBQUVELEMiLCJmaWxlIjoiYWphcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFqYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWphcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamFwKG9wdGlvbikge1xuXG4gIC8qIFxuICAgIOWwhuadpeimgeWinuWKoCx1cmzkuK3lt7Lnu4/mt7vliqDlj4LmlbDnmoTmlrnms5VcbiAgICBvcHRpb24gPSB7XG4gICAgICB1cmw6c3RyaW5nLFxuICAgICAgYXN5bmM6Ym9vbGVhbixcbiAgICAgIGRhdGE6b2JqZWN0LFxuICAgICAgY2FsbGJhY2s6c3RyaW5nLFxuICAgICAgY2FiYmJhY2tOYW1lOnN0cmluZyxcbiAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24gLT4gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICB9XG5cbiAgICB1cmwgbXVzdCBiZSBpbnB1dCBvdGhlciBjYW4gY2hvb3NlLlxuICAqL1xuXG4gIGNvbnN0IG9ialRvVmFsID0gKG9iaikgPT4ge1xuICAgIGxldCBzdHIgPSAnPyc7XG4gICAgZm9yIChsZXQgaXRlbSBpbiBvYmopIHtcbiAgICAgIHN0ciArPSBpdGVtO1xuICAgICAgLy8gY29uc29sZS5sb2cob2JqW2l0ZW1dKTtcbiAgICAgIHN0ciArPSBgPSR7b2JqW2l0ZW1dfSZgO1xuICAgIH1cbiAgICAvLyBjb25zdCBlbmRMZW4gPSBzdHIubGVuZ3RoIC0gMTtcbiAgICAvLyBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsZW5kTGVuKTtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIGNvbnN0IG9IZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICBjb25zdCBqc29ucEdvID0gKHVybCwgYXN5bmMpID0+IHtcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgIHNjcmlwdC5hc3luYyA9IGFzeW5jO1xuICAgIFxuICAgIG9IZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgfVxuXG4gIGNvbnN0IHJhbmROdW0gPSAoKSA9PiB7XG4gICAgY29uc3Qgb1QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICAgIGNvbnN0IG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwMDAwMDAwMDAwKTtcbiAgICBjb25zdCByYW5kU3RyID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIG9UK3JhbmRTdHI7XG4gIH1cblxuICBsZXQgdXJsID0gb3B0aW9uLnVybDtcblxuICBpZiAodHlwZW9mKHVybCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ1cmwgbXVzdCBpbnB1dCFcIik7XG4gIH1cblxuICBsZXQgYXN5bmMgPSBvcHRpb24uYXN5bmM7XG5cbiAgaWYgKHR5cGVvZihhc3luYykgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhc3luYyA9IHRydWU7XG4gIH1cblxuICBsZXQgZGF0YSA9IG9wdGlvbi5kYXRhLGRhdGFTdHIgPSAnJztcblxuICBpZiAodHlwZW9mIChkYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBkYXRhU3RyID0gb2JqVG9WYWwoZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihcImRhdGEgaXMgbm90IHN0YW5kYXJkIVwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9ICc/JztcbiAgfTtcblxuICBsZXQgY2FsbGJhY2sgPSBvcHRpb24uY2FsbGJhY2s7XG5cbiAgaWYgKHR5cGVvZiAoY2FsbGJhY2spID09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FsbGJhY2sgPSAnY2FsbGJhY2snOy8vIGlmIGFkZCByYW5kb20gbnVtYmVyIHdpbGwgQ09SQiDlpoLmnpzmt7vliqDpmo/mnLrmlbDkvJrlh7rnjrDot6jln5/mg4XlhrVcbiAgfVxuXG4gIGxldCBjYWxsYmFja05hbWUgPSBvcHRpb24uY2FsbGJhY2tOYW1lO1xuXG4gIGlmICh0eXBlb2YgKGNhbGxiYWNrTmFtZSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWxsYmFja05hbWUgPSAnY2FsbGJhY2tfJyArIHJhbmROdW0oKTtcbiAgfTtcblxuICBjb25zdCBzdWNjZXNzID0gb3B0aW9uLnN1Y2Nlc3M7XG5cbiAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSAoZGF0YSkgPT4ge1xuICAgIHN1Y2Nlc3MgJiYgc3VjY2VzcyhkYXRhKTtcbiAgICBvSGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpOyAvL2RlbGV0ZSBzY3JpcHQgdGFnXG4gIH07XG5cbiAgdXJsICs9IChkYXRhU3RyK2NhbGxiYWNrK1wiPVwiK2NhbGxiYWNrTmFtZSk7XG5cbiAganNvbnBHbyh1cmwsYXN5bmMpO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==