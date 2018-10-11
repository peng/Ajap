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
    callback = 'callback';
  }

  var callbackName = option.callbackName;

  if (typeof callbackName == 'undefined') {
    callbackName = 'callback';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BamFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FqYXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYWphcCIsIm9wdGlvbiIsIm9ialRvVmFsIiwib2JqIiwic3RyIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJqc29ucEdvIiwidXJsIiwiYXN5bmMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvSGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwiZGF0YSIsImRhdGFTdHIiLCJ0eXBlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiY2FsbGJhY2siLCJjYWxsYmFja05hbWUiLCJzdWNjZXNzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWUsU0FBU0EsSUFBVCxDQUFjQyxNQUFkLEVBQXNCO0FBRW5DOzs7Ozs7Ozs7OztBQWFBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBUztBQUN4QixRQUFJQyxHQUFHLEdBQUcsR0FBVjs7QUFDQSxTQUFLLElBQUlDLElBQVQsSUFBaUJGLEdBQWpCLEVBQXNCO0FBQ3BCQyxTQUFHLElBQUlDLElBQVA7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0UsSUFBRCxDQUFmO0FBQ0FELFNBQUcsZUFBUUQsR0FBRyxDQUFDRSxJQUFELENBQVgsTUFBSDtBQUNELEtBTnVCLENBT3hCO0FBQ0E7OztBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQVZEOztBQVlBLE1BQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUM5QixRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FGLFVBQU0sQ0FBQ0csR0FBUCxHQUFhTCxHQUFiO0FBQ0FFLFVBQU0sQ0FBQ0QsS0FBUCxHQUFlQSxLQUFmO0FBQ0EsUUFBTUssS0FBSyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBRCxTQUFLLENBQUNFLFdBQU4sQ0FBa0JOLE1BQWxCO0FBRUQsR0FQRDs7QUFTQSxNQUFJRixHQUFHLEdBQUdSLE1BQU0sQ0FBQ1EsR0FBakI7O0FBRUEsTUFBSSxPQUFPQSxHQUFQLElBQWUsV0FBbkIsRUFBZ0M7QUFDOUJILFdBQU8sQ0FBQ1ksS0FBUixDQUFjLGlCQUFkO0FBQ0Q7O0FBRUQsTUFBSVIsS0FBSyxHQUFHVCxNQUFNLENBQUNTLEtBQW5COztBQUVBLE1BQUksT0FBT0EsS0FBUCxJQUFpQixXQUFyQixFQUFrQztBQUNoQ0EsU0FBSyxHQUFHLElBQVI7QUFDRDs7QUFFRCxNQUFJUyxJQUFJLEdBQUdsQixNQUFNLENBQUNrQixJQUFsQjtBQUFBLE1BQXVCQyxPQUFPLEdBQUcsRUFBakM7O0FBRUEsTUFBSSxPQUFRRCxJQUFSLElBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDLFFBQU1FLElBQUksR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JOLElBQS9CLENBQWIsQ0FEZ0MsQ0FFaEM7O0FBQ0EsWUFBUUUsSUFBUjtBQUNFLFdBQUssaUJBQUw7QUFDRUQsZUFBTyxHQUFHbEIsUUFBUSxDQUFDaUIsSUFBRCxDQUFsQjtBQUNBOztBQUNGO0FBQ0ViLGVBQU8sQ0FBQ1ksS0FBUixDQUFjLHVCQUFkO0FBTEo7QUFPRCxHQVZELE1BVU87QUFDTFQsT0FBRyxJQUFJLEdBQVA7QUFDRDs7QUFBQTtBQUVELE1BQUlpQixRQUFRLEdBQUd6QixNQUFNLENBQUN5QixRQUF0Qjs7QUFFQSxNQUFJLE9BQVFBLFFBQVIsSUFBcUIsV0FBekIsRUFBc0M7QUFDcENBLFlBQVEsR0FBRyxVQUFYO0FBQ0Q7O0FBRUQsTUFBSUMsWUFBWSxHQUFHMUIsTUFBTSxDQUFDMEIsWUFBMUI7O0FBRUEsTUFBSSxPQUFRQSxZQUFSLElBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDQSxnQkFBWSxHQUFHLFVBQWY7QUFDRDs7QUFBQTtBQUVELE1BQU1DLE9BQU8sR0FBRzNCLE1BQU0sQ0FBQzJCLE9BQXZCOztBQUVBQyxRQUFNLENBQUNGLFlBQUQsQ0FBTixHQUF1QixVQUFDUixJQUFELEVBQVU7QUFDL0JTLFdBQU8sSUFBSUEsT0FBTyxDQUFDVCxJQUFELENBQWxCO0FBQ0QsR0FGRDs7QUFJQVYsS0FBRyxJQUFLVyxPQUFPLEdBQUNNLFFBQVIsR0FBaUIsR0FBakIsR0FBcUJDLFlBQTdCO0FBRUFuQixTQUFPLENBQUNDLEdBQUQsRUFBS0MsS0FBTCxDQUFQO0FBRUQsQyIsImZpbGUiOiJhamFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWphcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBamFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXAob3B0aW9uKSB7XG5cbiAgLyogXG4gICAgb3B0aW9uID0ge1xuICAgICAgdXJsOnN0cmluZyxcbiAgICAgIGFzeW5jOmJvb2xlYW4sXG4gICAgICBkYXRhOm9iamVjdCxcbiAgICAgIGNhbGxiYWNrOnN0cmluZyxcbiAgICAgIGNhYmJiYWNrTmFtZTpzdHJpbmcsXG4gICAgICBzdWNjZXNzOmZ1bmN0aW9uIC0+IGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgfVxuXG4gICAgdXJsIG11c3QgYmUgaW5wdXQgb3RoZXIgY2FuIGNob29zZS5cbiAgKi9cblxuICBjb25zdCBvYmpUb1ZhbCA9IChvYmopID0+IHtcbiAgICBsZXQgc3RyID0gJz8nO1xuICAgIGZvciAobGV0IGl0ZW0gaW4gb2JqKSB7XG4gICAgICBzdHIgKz0gaXRlbTtcbiAgICAgIGNvbnNvbGUubG9nKG9ialtpdGVtXSk7XG4gICAgICBzdHIgKz0gYD0ke29ialtpdGVtXX0mYDtcbiAgICB9XG4gICAgLy8gY29uc3QgZW5kTGVuID0gc3RyLmxlbmd0aCAtIDE7XG4gICAgLy8gc3RyID0gc3RyLnN1YnN0cmluZygwLGVuZExlbik7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvbnN0IGpzb25wR28gPSAodXJsLCBhc3luYykgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LmFzeW5jID0gYXN5bmM7XG4gICAgY29uc3Qgb0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgb0hlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICB9XG5cbiAgbGV0IHVybCA9IG9wdGlvbi51cmw7XG5cbiAgaWYgKHR5cGVvZih1cmwpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwidXJsIG11c3QgaW5wdXQhXCIpO1xuICB9XG5cbiAgbGV0IGFzeW5jID0gb3B0aW9uLmFzeW5jO1xuXG4gIGlmICh0eXBlb2YoYXN5bmMpID09ICd1bmRlZmluZWQnKSB7XG4gICAgYXN5bmMgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGRhdGEgPSBvcHRpb24uZGF0YSxkYXRhU3RyID0gJyc7XG5cbiAgaWYgKHR5cGVvZiAoZGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgICAgZGF0YVN0ciA9IG9ialRvVmFsKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJkYXRhIGlzIG5vdCBzdGFuZGFyZCFcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHVybCArPSAnPyc7XG4gIH07XG5cbiAgbGV0IGNhbGxiYWNrID0gb3B0aW9uLmNhbGxiYWNrO1xuXG4gIGlmICh0eXBlb2YgKGNhbGxiYWNrKSA9PSAndW5kZWZpbmVkJykge1xuICAgIGNhbGxiYWNrID0gJ2NhbGxiYWNrJztcbiAgfVxuXG4gIGxldCBjYWxsYmFja05hbWUgPSBvcHRpb24uY2FsbGJhY2tOYW1lO1xuXG4gIGlmICh0eXBlb2YgKGNhbGxiYWNrTmFtZSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWxsYmFja05hbWUgPSAnY2FsbGJhY2snO1xuICB9O1xuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBvcHRpb24uc3VjY2VzcztcblxuICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IChkYXRhKSA9PiB7XG4gICAgc3VjY2VzcyAmJiBzdWNjZXNzKGRhdGEpO1xuICB9O1xuXG4gIHVybCArPSAoZGF0YVN0citjYWxsYmFjaytcIj1cIitjYWxsYmFja05hbWUpO1xuXG4gIGpzb25wR28odXJsLGFzeW5jKTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=