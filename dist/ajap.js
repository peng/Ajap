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
      str += item;
      console.log(obj[item]);
      str += "=".concat(obj[item], "&");
    } // const endLen = str.length - 1;
    // str = str.substring(0,endLen);


    return str;
  };

  var jsonpGo = function jsonpGo(url, async) {
    var script = document.createElement('script');
    script.src = url;
    script.async = async;
    var oHead = document.querySelector('head');
    oHead.appendChild(script);
  };

  var randNum = function randNum() {
    var oT = new Date().getTime().toString();
    var num = Math.random() * 10000000000;
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
    callback = 'callback_' + randNum();
  }

  var callbackName = option.callbackName;

  if (typeof callbackName == 'undefined') {
    callbackName = 'callback_' + randNum();
  }

  ;
  var success = option.success;

  window[callbackName] = function (data) {
    success && success(data);
  };

  url += dataStr + callback + "=" + callbackName;
  jsonpGo(url, async);
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FqYXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYWphcCIsIm9wdGlvbiIsIm9ialRvVmFsIiwib2JqIiwic3RyIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJqc29ucEdvIiwidXJsIiwiYXN5bmMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvSGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsInJhbmROdW0iLCJvVCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJudW0iLCJNYXRoIiwicmFuZG9tIiwicmFuZFN0ciIsImVycm9yIiwiZGF0YSIsImRhdGFTdHIiLCJ0eXBlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImNhbGxiYWNrIiwiY2FsbGJhY2tOYW1lIiwic3VjY2VzcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hB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T0FBUUEsWUFBUixJQUF5QixXQUE3QixFQUEwQztBQUN4Q0EsZ0JBQVksR0FBRyxjQUFjakIsT0FBTyxFQUFwQztBQUNEOztBQUFBO0FBRUQsTUFBTWtCLE9BQU8sR0FBR25DLE1BQU0sQ0FBQ21DLE9BQXZCOztBQUVBQyxRQUFNLENBQUNGLFlBQUQsQ0FBTixHQUF1QixVQUFDUCxJQUFELEVBQVU7QUFDL0JRLFdBQU8sSUFBSUEsT0FBTyxDQUFDUixJQUFELENBQWxCO0FBQ0QsR0FGRDs7QUFJQW5CLEtBQUcsSUFBS29CLE9BQU8sR0FBQ0ssUUFBUixHQUFpQixHQUFqQixHQUFxQkMsWUFBN0I7QUFFQTNCLFNBQU8sQ0FBQ0MsR0FBRCxFQUFLQyxLQUFMLENBQVA7QUFFRCxDIiwiZmlsZSI6ImFqYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBamFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFqYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWphcChvcHRpb24pIHtcblxuICAvKiBcbiAgICDlsIbmnaXopoHlop7liqAsdXJs5Lit5bey57uP5re75Yqg5Y+C5pWw55qE5pa55rOVXG4gICAgb3B0aW9uID0ge1xuICAgICAgdXJsOnN0cmluZyxcbiAgICAgIGFzeW5jOmJvb2xlYW4sXG4gICAgICBkYXRhOm9iamVjdCxcbiAgICAgIGNhbGxiYWNrOnN0cmluZyxcbiAgICAgIGNhYmJiYWNrTmFtZTpzdHJpbmcsXG4gICAgICBzdWNjZXNzOmZ1bmN0aW9uIC0+IGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgfVxuXG4gICAgdXJsIG11c3QgYmUgaW5wdXQgb3RoZXIgY2FuIGNob29zZS5cbiAgKi9cblxuICBjb25zdCBvYmpUb1ZhbCA9IChvYmopID0+IHtcbiAgICBsZXQgc3RyID0gJz8nO1xuICAgIGZvciAobGV0IGl0ZW0gaW4gb2JqKSB7XG4gICAgICBzdHIgKz0gaXRlbTtcbiAgICAgIGNvbnNvbGUubG9nKG9ialtpdGVtXSk7XG4gICAgICBzdHIgKz0gYD0ke29ialtpdGVtXX0mYDtcbiAgICB9XG4gICAgLy8gY29uc3QgZW5kTGVuID0gc3RyLmxlbmd0aCAtIDE7XG4gICAgLy8gc3RyID0gc3RyLnN1YnN0cmluZygwLGVuZExlbik7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvbnN0IGpzb25wR28gPSAodXJsLCBhc3luYykgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LmFzeW5jID0gYXN5bmM7XG4gICAgY29uc3Qgb0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgb0hlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICB9XG5cbiAgY29uc3QgcmFuZE51bSA9ICgpID0+IHtcbiAgICBjb25zdCBvVCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbnVtID0gTWF0aC5yYW5kb20oKSoxMDAwMDAwMDAwMDtcbiAgICBjb25zdCByYW5kU3RyID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIG9UK3JhbmRTdHI7XG4gIH1cblxuICBsZXQgdXJsID0gb3B0aW9uLnVybDtcblxuICBpZiAodHlwZW9mKHVybCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ1cmwgbXVzdCBpbnB1dCFcIik7XG4gIH1cblxuICBsZXQgYXN5bmMgPSBvcHRpb24uYXN5bmM7XG5cbiAgaWYgKHR5cGVvZihhc3luYykgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhc3luYyA9IHRydWU7XG4gIH1cblxuICBsZXQgZGF0YSA9IG9wdGlvbi5kYXRhLGRhdGFTdHIgPSAnJztcblxuICBpZiAodHlwZW9mIChkYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBkYXRhU3RyID0gb2JqVG9WYWwoZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihcImRhdGEgaXMgbm90IHN0YW5kYXJkIVwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9ICc/JztcbiAgfTtcblxuICBsZXQgY2FsbGJhY2sgPSBvcHRpb24uY2FsbGJhY2s7XG5cbiAgaWYgKHR5cGVvZiAoY2FsbGJhY2spID09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FsbGJhY2sgPSAnY2FsbGJhY2tfJysgcmFuZE51bSgpO1xuICB9XG5cbiAgbGV0IGNhbGxiYWNrTmFtZSA9IG9wdGlvbi5jYWxsYmFja05hbWU7XG5cbiAgaWYgKHR5cGVvZiAoY2FsbGJhY2tOYW1lKSA9PSAndW5kZWZpbmVkJykge1xuICAgIGNhbGxiYWNrTmFtZSA9ICdjYWxsYmFja18nICsgcmFuZE51bSgpO1xuICB9O1xuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBvcHRpb24uc3VjY2VzcztcblxuICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IChkYXRhKSA9PiB7XG4gICAgc3VjY2VzcyAmJiBzdWNjZXNzKGRhdGEpO1xuICB9O1xuXG4gIHVybCArPSAoZGF0YVN0citjYWxsYmFjaytcIj1cIitjYWxsYmFja05hbWUpO1xuXG4gIGpzb25wR28odXJsLGFzeW5jKTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=