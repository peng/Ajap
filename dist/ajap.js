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
      success:function -> callback function
    }
     url must be input other can choose.
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
  var script = document.createElement('script');

  var jsonpGo = function jsonpGo(url) {
    script.src = url;
    oHead.appendChild(script);
  };

  var randNum = function randNum() {
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
    if (url.indexOf('?') != -1) {
      url += '&';
    } else {
      url += '?';
    }
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
  jsonpGo(url);
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FqYXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYWphcCIsIm9wdGlvbiIsInVybCIsIm9ialRvVmFsIiwib2JqIiwic3RyIiwiaW5kZXhPZiIsIml0ZW0iLCJvSGVhZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJqc29ucEdvIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJyYW5kTnVtIiwib1QiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwibnVtIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJyYW5kU3RyIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImRhdGFTdHIiLCJ0eXBlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImNhbGxiYWNrIiwiY2FsbGJhY2tOYW1lIiwic3VjY2VzcyIsIndpbmRvdyIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlD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LE9BQVFBLFlBQVIsSUFBeUIsV0FBN0IsRUFBMEM7QUFDeENBLGdCQUFZLEdBQUcsY0FBY25CLE9BQU8sRUFBcEM7QUFDRDs7QUFBQTtBQUVELE1BQU1vQixPQUFPLEdBQUduQyxNQUFNLENBQUNtQyxPQUF2Qjs7QUFFQUMsUUFBTSxDQUFDRixZQUFELENBQU4sR0FBdUIsVUFBQ1AsSUFBRCxFQUFVO0FBQy9CUSxXQUFPLElBQUlBLE9BQU8sQ0FBQ1IsSUFBRCxDQUFsQjtBQUNBcEIsU0FBSyxDQUFDOEIsV0FBTixDQUFrQjNCLE1BQWxCLEVBRitCLENBRUo7QUFDNUIsR0FIRDs7QUFLQVQsS0FBRyxJQUFLMkIsT0FBTyxHQUFDSyxRQUFSLEdBQWlCLEdBQWpCLEdBQXFCQyxZQUE3QjtBQUVBdEIsU0FBTyxDQUFDWCxHQUFELENBQVA7QUFFRCxDIiwiZmlsZSI6ImFqYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBamFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFqYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWphcChvcHRpb24pIHtcblxuICAvKiBcbiAgICBvcHRpb24gPSB7XG4gICAgICB1cmw6c3RyaW5nLFxuICAgICAgZGF0YTpvYmplY3QsXG4gICAgICBjYWxsYmFjazpzdHJpbmcsXG4gICAgICBjYWJiYmFja05hbWU6c3RyaW5nLFxuICAgICAgc3VjY2VzczpmdW5jdGlvbiAtPiBjYWxsYmFjayBmdW5jdGlvblxuICAgIH1cblxuICAgIHVybCBtdXN0IGJlIGlucHV0IG90aGVyIGNhbiBjaG9vc2UuXG4gICovXG5cbiBsZXQgdXJsID0gb3B0aW9uLnVybDtcblxuICBjb25zdCBvYmpUb1ZhbCA9IChvYmopID0+IHtcbiAgICBsZXQgc3RyID0gJz8nO1xuICAgIGlmICh1cmwuaW5kZXhPZignPycpICE9IC0xKSB7XG4gICAgICBzdHIgPSAnJic7XG4gICAgfVxuICAgIGZvciAobGV0IGl0ZW0gaW4gb2JqKSB7XG4gICAgICBzdHIgKz0gaXRlbTtcbiAgICAgIHN0ciArPSBgPSR7b2JqW2l0ZW1dfSZgO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIGNvbnN0IG9IZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICBjb25zdCBqc29ucEdvID0gKHVybCkgPT4ge1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgb0hlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIGNvbnN0IHJhbmROdW0gPSAoKSA9PiB7XG4gICAgY29uc3Qgb1QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICAgIGNvbnN0IG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwMDAwMDAwMDAwKTtcbiAgICBjb25zdCByYW5kU3RyID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIG9UK3JhbmRTdHI7XG4gIH1cblxuICBpZiAodHlwZW9mKHVybCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ1cmwgbXVzdCBpbnB1dCFcIik7XG4gIH1cblxuICBsZXQgZGF0YSA9IG9wdGlvbi5kYXRhLGRhdGFTdHIgPSAnJztcblxuICBpZiAodHlwZW9mIChkYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBkYXRhU3RyID0gb2JqVG9WYWwoZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihcImRhdGEgaXMgbm90IHN0YW5kYXJkIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xuICAgICAgdXJsICs9ICcmJztcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsICs9ICc/JztcbiAgICB9XG4gIH07XG5cbiAgbGV0IGNhbGxiYWNrID0gb3B0aW9uLmNhbGxiYWNrO1xuXG4gIGlmICh0eXBlb2YgKGNhbGxiYWNrKSA9PSAndW5kZWZpbmVkJykge1xuICAgIGNhbGxiYWNrID0gJ2NhbGxiYWNrJzsvLyBpZiBhZGQgcmFuZG9tIG51bWJlciB3aWxsIENPUkIg5aaC5p6c5re75Yqg6ZqP5py65pWw5Lya5Ye6546w6Leo5Z+f5oOF5Ya1XG4gIH1cblxuICBsZXQgY2FsbGJhY2tOYW1lID0gb3B0aW9uLmNhbGxiYWNrTmFtZTtcblxuICBpZiAodHlwZW9mIChjYWxsYmFja05hbWUpID09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FsbGJhY2tOYW1lID0gJ2NhbGxiYWNrXycgKyByYW5kTnVtKCk7XG4gIH07XG5cbiAgY29uc3Qgc3VjY2VzcyA9IG9wdGlvbi5zdWNjZXNzO1xuXG4gIHdpbmRvd1tjYWxsYmFja05hbWVdID0gKGRhdGEpID0+IHtcbiAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoZGF0YSk7XG4gICAgb0hlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTsgLy9kZWxldGUgc2NyaXB0IHRhZ1xuICB9O1xuXG4gIHVybCArPSAoZGF0YVN0citjYWxsYmFjaytcIj1cIitjYWxsYmFja05hbWUpO1xuXG4gIGpzb25wR28odXJsKTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=