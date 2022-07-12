(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"demo","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"demo","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"demo","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"demo","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"demo","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/pages.json ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);

/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 11);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!**********************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/store/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 16));

var _vueJsonp = __webpack_require__(/*! vue-jsonp */ 17);



var _http = __webpack_require__(/*! @/static/units/http.js */ 18);



var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ 19));

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  state: {
    // 是否登录
    hasLogin: false,
    // 用户信息
    userInfo: {},
    // 网络状态
    networkState: false,
    // 位置信息
    locationInfo: {
      latitude: null,
      longitude: null,
      city: "",
      address: "" },

    // 腾讯地图请求位置API接口
    qqGeocoder: 'https://apis.map.qq.com/ws/geocoder/v1',
    qqKey: 'MJIBZ-O5EKD-TJK4T-PLOS4-Q5JIF-5KFGO',
    // 星期数组
    weekArr: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    // 当前时间
    nowDate: {
      date: "",
      week: "" },

    // 今天的天气
    todayWeather: {},
    // 七天的天气
    weekWheather: [],
    // 状态栏的高度
    statusBar: 0,
    // 状态栏高度 + 导航栏高度
    customBar: 0 },

  // 异步，对于一些初始请求可以放这里，比如登录
  actions: {
    // 获取定位信息
    getLocation: function getLocation(context) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res, latitude, longitude, url, key, orther, _orther$data$result, address, address_component;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                  (0, _http.http)(uni.getLocation, {
                    type: 'gcj02',
                    highAccuracyExpireTime: 3000,
                    isHighAccuracy: true,
                    geocode: true }));case 3:res = _context.sent;


                latitude =

                res.latitude, longitude = res.longitude;
                url = context.state.qqGeocoder;
                key = context.state.qqKey;_context.next = 9;return (













                  (0, _http.http)(uni.request, {
                    url: url,
                    data: {
                      location: "".concat(latitude, ",").concat(longitude),
                      key: "".concat(key) } }));case 9:orther = _context.sent;_orther$data$result =





                orther.data.result, address = _orther$data$result.address, address_component = _orther$data$result.address_component;

                context.commit('updateAddress', {
                  latitude: latitude,
                  longitude: longitude,
                  city: address_component.city,
                  address: address });_context.next = 16;break;case 14:_context.prev = 14;_context.t0 = _context["catch"](0);case 16:case "end":return _context.stop();}}}, _callee, null, [[0, 14]]);}))();




    },
    // 获取天气
    getWeather: function getWeather(context) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var city, weatherMesg;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

                ///通过经纬度换取地址
                city = context.state.locationInfo.city;_context2.next = 4;return (
                  (0, _http.http)(uni.request, {
                    url: 'https://yiketianqi.com/api',
                    data: {
                      unescape: 1,
                      version: 'v1',
                      appid: 57587959,
                      appsecret: 'z7u3Bomm',
                      city: city.replace('市', '') } }));case 4:weatherMesg = _context2.sent;


                console.log("获取天气=========", weatherMesg);
                context.commit('updateWeather', weatherMesg.data);_context2.next = 11;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](0);case 11:case "end":return _context2.stop();}}}, _callee2, null, [[0, 9]]);}))();



    },
    // 获取状态栏与导航栏的高度
    getBarHeight: function getBarHeight(context) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var e, statusBar, customBar, custom;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;_context3.next = 3;return (

                  (0, _http.http)(uni.getSystemInfo));case 3:e = _context3.sent;
                statusBar = 0;
                customBar = 0;


                statusBar = e.statusBarHeight;
                customBar = e.statusBarHeight + 45;
                if (e.platform === 'android') {
                  customBar = e.statusBarHeight + 50;
                }




                statusBar = e.statusBarHeight;
                // @ts-ignore
                custom = wx.getMenuButtonBoundingClientRect();
                customBar = custom.bottom + custom.top - e.statusBarHeight;
                console.log("info==============MP-WEIXIN", statusBar);























                // 更新
                context.commit('setStatusBar', statusBar);
                context.commit('setCustomBar', customBar);_context3.next = 19;break;case 17:_context3.prev = 17;_context3.t0 = _context3["catch"](0);case 19:case "end":return _context3.stop();}}}, _callee3, null, [[0, 17]]);}))();



    } },

  // 一些公用的方法，可以及时更新state数据
  mutations: {
    // 获取时间
    getDateTime: function getDateTime(state) {
      state.nowDate.date = (0, _dayjs.default)().format('YYYY.MM.DD');
      state.nowDate.week = state.weekArr[(0, _dayjs.default)().get('day')];
    },
    // 更新当前定位的地址
    updateAddress: function updateAddress(state, _ref)




    {var latitude = _ref.latitude,longitude = _ref.longitude,city = _ref.city,address = _ref.address;
      state.locationInfo.latitude = latitude;
      state.locationInfo.longitude = longitude;
      state.locationInfo.city = city;
      state.locationInfo.address = address;
    },
    // 更新当前的天气情况
    updateWeather: function updateWeather(state, weatherMesg) {
      state.weekWheather = weatherMesg.data;
      var now = (0, _dayjs.default)().format('YYYY-MM-DD');
      var nowWeather = weatherMesg.data.filter(function (item) {
        return now == item.date;
      });
      state.todayWeather = nowWeather[0];
    },
    // 设置状态栏高度
    setStatusBar: function setStatusBar(state, height) {
      state.statusBar = height;
    },
    // 状态栏高度 + 导航栏高度
    setCustomBar: function setCustomBar(state, height) {
      state.customBar = height;
    } },

  getters: {},
  modules: {} });exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 17 */
/*!************************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/node_modules/vue-jsonp/dist/index.esm.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.jsonp = o;exports.VueJsonp = void 0;function e(t, n) {t = t.replace(/=/g, "");var o = [];switch (n.constructor) {case String:case Number:case Boolean:o.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));break;case Array:n.forEach(function (n) {o = o.concat(e(t + "[]=", n));});break;case Object:Object.keys(n).forEach(function (r) {var a = n[r];o = o.concat(e(t + "[" + r + "]", a));});}return o;}function t(e) {var n = [];return e.forEach(function (e) {"string" == typeof e ? n.push(e) : n = n.concat(t(e));}), n;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Vue Jsonp.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * # Carry Your World #
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author: LancerComet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @license: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var n = { install: function install(e) {e.prototype.$jsonp = o;} };exports.VueJsonp = n;function o(n, o, r) {if (void 0 === o && (o = {}), "string" != typeof n) throw new Error('[Vue-jsonp] Type of param "url" is not string.');if ("object" != typeof o || !o) throw new Error("[Vue-jsonp] Invalid params, should be an object.");return r = "number" == typeof r ? r : 5e3, new Promise(function (a, c) {var u = "string" == typeof o.callbackQuery ? o.callbackQuery : "callback",i = "string" == typeof o.callbackName ? o.callbackName : "jsonp_" + (Math.floor(1e5 * Math.random()) * Date.now()).toString(16);o[u] = i, delete o.callbackQuery, delete o.callbackName;var s = [];Object.keys(o).forEach(function (t) {s = s.concat(e(t, o[t]));});var l = t(s).join("&"),f = function f() {p(), clearTimeout(m), c({ status: 400, statusText: "Bad Request" });},p = function p() {b.removeEventListener("error", f);},d = function d() {document.body.removeChild(b), delete window[i];},m = null;r > -1 && (m = setTimeout(function () {p(), d(), c({ statusText: "Request Timeout", status: 408 });}, r)), window[i] = function (e) {clearTimeout(m), p(), d(), a(e);};var b = document.createElement("script");b.addEventListener("error", f), b.src = n + (/\?/.test(n) ? "&" : "?") + l, document.body.appendChild(b);});}

/***/ }),
/* 18 */
/*!****************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/units/http.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.http = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var http = function http(fun, params) {
  var promise = new Promise(function (resolve, reject) {
    fun(_objectSpread(_objectSpread({},
    params), {}, {
      success: function success(result) {
        resolve(result);
      },
      fail: function fail(error) {
        reject(error);
      } }));

  });
  return promise;
};exports.http = http;

/***/ }),
/* 19 */
/*!***************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/node_modules/dayjs/dayjs.min.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {"use strict";var t = 1e3,e = 6e4,n = 36e5,r = "millisecond",i = "second",s = "minute",u = "hour",a = "day",o = "week",f = "month",h = "quarter",c = "year",d = "date",$ = "Invalid Date",l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },m = function m(t, e, n) {var r = String(t);return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;},g = { s: m, z: function z(t) {var e = -t.utcOffset(),n = Math.abs(e),r = Math.floor(n / 60),i = n % 60;return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");}, m: function t(e, n) {if (e.date() < n.date()) return -t(n, e);var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),i = e.clone().add(r, f),s = n - i < 0,u = e.clone().add(r + (s ? -1 : 1), f);return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);}, a: function a(t) {return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);}, p: function p(t) {return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "");}, u: function u(t) {return void 0 === t;} },v = "en",D = {};D[v] = M;var p = function p(t) {return t instanceof _;},S = function t(e, n, r) {var i;if (!e) return v;if ("string" == typeof e) {var s = e.toLowerCase();D[s] && (i = s), n && (D[s] = n, i = s);var u = e.split("-");if (!i && u.length > 1) return t(u[0]);} else {var a = e.name;D[a] = e, i = a;}return !r && i && (v = i), i || !r && v;},w = function w(t, e) {if (p(t)) return t.clone();var n = "object" == typeof e ? e : {};return n.date = t, n.args = arguments, new _(n);},O = g;O.l = S, O.i = p, O.w = function (t, e) {return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });};var _ = function () {function M(t) {this.$L = S(t.locale, null, !0), this.parse(t);}var m = M.prototype;return m.parse = function (t) {this.$d = function (t) {var e = t.date,n = t.utc;if (null === e) return new Date(NaN);if (O.u(e)) return new Date();if (e instanceof Date) return new Date(e);if ("string" == typeof e && !/Z$/i.test(e)) {var r = e.match(l);if (r) {var i = r[2] - 1 || 0,s = (r[7] || "0").substring(0, 3);return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);}}return new Date(e);}(t), this.$x = t.x || {}, this.init();}, m.init = function () {var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();}, m.$utils = function () {return O;}, m.isValid = function () {return !(this.$d.toString() === $);}, m.isSame = function (t, e) {var n = w(t);return this.startOf(e) <= n && n <= this.endOf(e);}, m.isAfter = function (t, e) {return w(t) < this.startOf(e);}, m.isBefore = function (t, e) {return this.endOf(e) < w(t);}, m.$g = function (t, e, n) {return O.u(t) ? this[e] : this.set(n, t);}, m.unix = function () {return Math.floor(this.valueOf() / 1e3);}, m.valueOf = function () {return this.$d.getTime();}, m.startOf = function (t, e) {var n = this,r = !!O.u(e) || e,h = O.p(t),$ = function $(t, e) {var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);return r ? i : i.endOf(a);},l = function l(t, e) {return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);},y = this.$W,M = this.$M,m = this.$D,g = "set" + (this.$u ? "UTC" : "");switch (h) {case c:return r ? $(1, 0) : $(31, 11);case f:return r ? $(1, M) : $(0, M + 1);case o:var v = this.$locale().weekStart || 0,D = (y < v ? y + 7 : y) - v;return $(r ? m - D : m + (6 - D), M);case a:case d:return l(g + "Hours", 0);case u:return l(g + "Minutes", 1);case s:return l(g + "Seconds", 2);case i:return l(g + "Milliseconds", 3);default:return this.clone();}}, m.endOf = function (t) {return this.startOf(t, !1);}, m.$set = function (t, e) {var n,o = O.p(t),h = "set" + (this.$u ? "UTC" : ""),$ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],l = o === a ? this.$D + (e - this.$W) : e;if (o === f || o === c) {var y = this.clone().set(d, 1);y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;} else $ && this.$d[$](l);return this.init(), this;}, m.set = function (t, e) {return this.clone().$set(t, e);}, m.get = function (t) {return this[O.p(t)]();}, m.add = function (r, h) {var d,$ = this;r = Number(r);var l = O.p(h),y = function y(t) {var e = w($);return O.w(e.date(e.date() + Math.round(t * r)), $);};if (l === f) return this.set(f, this.$M + r);if (l === c) return this.set(c, this.$y + r);if (l === a) return y(1);if (l === o) return y(7);var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,m = this.$d.getTime() + r * M;return O.w(m, this);}, m.subtract = function (t, e) {return this.add(-1 * t, e);}, m.format = function (t) {var e = this,n = this.$locale();if (!this.isValid()) return n.invalidDate || $;var r = t || "YYYY-MM-DDTHH:mm:ssZ",i = O.z(this),s = this.$H,u = this.$m,a = this.$M,o = n.weekdays,f = n.months,h = function h(t, n, i, s) {return t && (t[n] || t(e, r)) || i[n].slice(0, s);},c = function c(t) {return O.s(s % 12 || 12, t, "0");},d = n.meridiem || function (t, e, n) {var r = t < 12 ? "AM" : "PM";return n ? r.toLowerCase() : r;},l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i };return r.replace(y, function (t, e) {return e || l[t] || i.replace(":", "");});}, m.utcOffset = function () {return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);}, m.diff = function (r, d, $) {var l,y = O.p(d),M = w(r),m = (M.utcOffset() - this.utcOffset()) * e,g = this - M,v = O.m(this, M);return v = (l = {}, l[c] = v / 12, l[f] = v, l[h] = v / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? v : O.a(v);}, m.daysInMonth = function () {return this.endOf(f).$D;}, m.$locale = function () {return D[this.$L];}, m.locale = function (t, e) {if (!t) return this.$L;var n = this.clone(),r = S(t, e, !0);return r && (n.$L = r), n;}, m.clone = function () {return O.w(this.$d, this);}, m.toDate = function () {return new Date(this.valueOf());}, m.toJSON = function () {return this.isValid() ? this.toISOString() : null;}, m.toISOString = function () {return this.$d.toISOString();}, m.toString = function () {return this.$d.toUTCString();}, M;}(),T = _.prototype;return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {T[t[1]] = function (e) {return this.$g(e, t[0], t[1]);};}), w.extend = function (t, e) {return t.$i || (t(e, _, w), t.$i = !0), w;}, w.locale = S, w.isDayjs = p, w.unix = function (t) {return w(1e3 * t);}, w.en = D[v], w.Ls = D, w.p = {}, w;});

/***/ }),
/* 20 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 21);
var parse = __webpack_require__(/*! ./parse */ 24);
var formats = __webpack_require__(/*! ./formats */ 23);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 21 */
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 22);
var formats = __webpack_require__(/*! ./formats */ 23);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 22 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 23 */
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 24 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 22);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/*!**********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/Bitmap-1.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/Bitmap-1.png";

/***/ }),
/* 32 */
/*!**********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/Bitmap-2.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/Bitmap-2.png";

/***/ }),
/* 33 */
/*!**********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/Bitmap-3.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/Bitmap-3.png";

/***/ }),
/* 34 */
/*!**********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/Bitmap-4.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/Bitmap-4.png";

/***/ }),
/* 35 */
/*!**********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/Bitmap-5.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/Bitmap-5.png";

/***/ }),
/* 36 */
/*!*************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brand-1-big.png ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brand-1-big.png";

/***/ }),
/* 37 */
/*!***************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brand-1-small.png ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brand-1-small.png";

/***/ }),
/* 38 */
/*!*************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brand-2-big.png ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brand-2-big.png";

/***/ }),
/* 39 */
/*!***************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brand-2-small.png ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 40 */
/*!*************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brand-3-big.png ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brand-3-big.png";

/***/ }),
/* 41 */
/*!***************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brand-3-small.png ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 42 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-1.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-1.png";

/***/ }),
/* 43 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-2.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-2.png";

/***/ }),
/* 44 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-3.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-3.png";

/***/ }),
/* 45 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-4.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-4.png";

/***/ }),
/* 46 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-5.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-5.png";

/***/ }),
/* 47 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-6.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-6.png";

/***/ }),
/* 48 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-7.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-7.png";

/***/ }),
/* 49 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-8.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-8.png";

/***/ }),
/* 50 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-9.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-9.png";

/***/ }),
/* 51 */
/*!*********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/shop-10.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/shop-10.png";

/***/ }),
/* 52 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brigade-1.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brigade-1.png";

/***/ }),
/* 53 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brigade-2.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brigade-2.png";

/***/ }),
/* 54 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brigade-3.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brigade-3.png";

/***/ }),
/* 55 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brigade-4.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brigade-4.png";

/***/ }),
/* 56 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/brigade-5.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/brigade-5.png";

/***/ }),
/* 57 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/village-1.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/village-1.png";

/***/ }),
/* 58 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/village-2.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/village-2.png";

/***/ }),
/* 59 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/village-3.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/village-3.png";

/***/ }),
/* 60 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/village-4.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/village-4.png";

/***/ }),
/* 61 */
/*!***********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/images/village-5.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/village-5.png";

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/*!*****************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/index.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTM2NjMxNUZCNjIxMUVDQUJGQjlBNTZCMTMzRkM2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMTM2NjMxNkZCNjIxMUVDQUJGQjlBNTZCMTMzRkM2MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExMzY2MzEzRkI2MjExRUNBQkZCOUE1NkIxMzNGQzYwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExMzY2MzE0RkI2MjExRUNBQkZCOUE1NkIxMzNGQzYwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BFUbWQAABWJJREFUeNrsnF1oFFcUx7Mzk2zW7TbBovHjTfGhtAj1xTexYqyKxqImtVQCZjPJ7rQGXAhISxFKpYZg8mBrNruBQh4FH+JzSbVVqqAI2pY+lIgPolS0tN3d7Ed2t/9TZsJ1ahLXnZ25a86Fy83M7Nx77m/Oxz13Z+Mrl8sNXKorCiNgiAyRIXJhiAyRITJELgyRITJEhsiFITJEhrg8ilZtBz6fz3GhksnkYKlUOqEoylo6LpfLD+l0X1/fKafHcmI/1VdtJ05DTCQS59DnJwtMlkD2yQZRKnMeHx//2gbwkamF/z0sVB2QE+wTFyjxePwbQPpYODUDgB0w6z1opwXNlw6kFOZMAFVVNQQTu4dmPyz3FzqemJhYCZgXMdZ24TOOmPYrYc5Qqv8BBLB9FkAqvb29TxFkDuHaZRk1UvEaIJp5gID3M0DtjUQiv9o/KzNIzyBiGXMeEAzLHZh+b1d/f/9vC90jK0hPICIKE8CoYMLThULhIwB8uNS9MoJ0PbAQQEAQAX5fLBaPRKPRPyrpx6lgU3eBBcoyZgN4OZvNflApQNk0UnETIJqIqIH5fP7wwMDA45ftUxaQrpgz5hTH5/pFDaTJEwQnJlGNadeFOT8H4JW5ubmDTgGUQSOVWgNE8wxA1AOGYfzp9FhegqwZREThcdJAYR14BUGkA8uYv2o1plcga+ITCSAmI/qjH3C8LxwO/+OGeVXiI6XcT4zH4wnkwroI0O/37+3u7k67GTFfFKR0gYXMRgQIAX+krSy3Abpt2oqTAElIAeDVVCr1Hnxgxqt0zC2QjphzEoVkFgEiiOzEQjonw1bVYqYthU+EgF+i+UwQ7lpra+uOrq6ufINExQ6S5g0t/QrB7lPPzRmChUUfiPqubACfZ9pkQcVi8ZgUPhHCrDH//L2pqekYfGChQdJCIOGnj+LBz9hkr6poDsrYlslktoyNjQXmO9e0tK7r97wENzk5uTqfz8/LhJRzMzSyWbbofMdsQ4B2AUucu1bFE/8JvqjHK4BYs344Ozs7DRO+ZFUApFR0namJd6SACL/yBWra8jNihcBtEFwfGhoKuQ2QxqSsCfUtHG62KuRaZ/ryFGQ7LQXEaDR6EQIdR71BgtmzAJx7Hb5SdRtiKBTSMPZqQQ4r+BG864AZwwrngjSLbcMwvs3lcvsh3Fb4nC1oz8r0m0GSBRDPkmxot8JyDgBg0qn+HQss5g71YzN72S1bZIbmPYlEIrdr0bfm9eSGh4eDgUBgPYJSRaoLrfIhaDwYHBxMez0HTyFSFgHT+s7UlIq+NvT7/eXGxsaGkZGRnbFY7OmyhQiAYUTPd6rJ24PBIGVMw17Ow9PXSODw/S8TgGzRv2lZm7MtB6fXR+i9nMwSABVo4Oeoe2SRXRqIgFLKZrO3EOX/XuxznZ2dant7u1T5Ob/4zhAZIkPkwhAZ4rKAWLL2ncylnaqqJbcnhty6SMsmYQlVrCuItGMiHDYjzw26DRF5dQhyBKz0EIv0J/W22L6BShu0ryE33ogJnBodHT3T0tKSRr4sPrhmIYXzAfaqZDIZWKzjVCql4B7V2q9A24x72gQNpA5XQPtP4tpGM8tJ4fz1miUKtXrJM5FITOFah3DqEayc9hvFGwI0UeoD1+hlp/svOOwb9ONJc7N1BvdnBHlwurwK18Vv8qZ0XX9/qTxcurRP07QTePqbMKk3zVNrbBN71q8oCn0P83alDxAat2GhB0uA8PfNQqEQq8vo3NPTQ7/N20ZagDbt1FNfqlhjmGNO5XK53YZhzNQ07+f/n8jrRIbIELkwRIbIEBkiF4bIEBkiQ+TCEBkiQ2SIXBiie+VfAQYAQmhBxobj8awAAAAASUVORK5CYII="

/***/ }),
/* 86 */
/*!************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/index-active.png ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOEFBODg1MUZCNjExMUVDQjZBMENDMENGNDRGMkNBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOEFBODg1MkZCNjExMUVDQjZBMENDMENGNDRGMkNBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QUE4ODRGRkI2MTExRUNCNkEwQ0MwQ0Y0NEYyQ0E4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU4QUE4ODUwRkI2MTExRUNCNkEwQ0MwQ0Y0NEYyQ0E4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vb8pawAAKX9JREFUeNrMfXmQ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"

/***/ }),
/* 87 */
/*!********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/newrural.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzUzNzYyRUZCNjIxMUVDOTRFMkU1NzM3OTk2OThBMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMzUzNzYyRkZCNjIxMUVDOTRFMkU1NzM3OTk2OThBMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzNTM3NjJDRkI2MjExRUM5NEUyRTU3Mzc5OTY5OEExIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzNTM3NjJERkI2MjExRUM5NEUyRTU3Mzc5OTY5OEExIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YloKjgAABBpJREFUeNrsms9rE0EUx5sfWxQFgyCKgrY3BbURPIiHmoqChUrTH6DHhKZpwUuunpr/wHooIWmguShYWk2lh+KlFS89telRL4pQ9CBtiqBIfvkdmepSdmN+bJJJ9/tgmNndyWT2M+/NvHk7jlKp1EGpT5xEQIiESIgUQiREQiRECiESIiESIoUQCZEQCZFCiITYVuKutwGHw9G0zsbj8fNOp/MBisNIN5B2isXi3YmJiY1a27Ti84hb9VEGuIsYqFEUR5B7Dzw+iXvLyM+2so+OekeiEZqYTCavQcOG0fYILi9VoE33w+Hwsu01MZFI3AQ0P4qjeLFus8HBsw08W0R+BflDeVvAXradJs7Pz7t2d3d78Xsxvw0hP2emLEjr6OeCSJj/Pktt7cX1W1nn+/b2ticajRZboYlNhYj5TUP9OxLcINIpk6oFpHcw6cXOzs6FYDD41ajS7OzsF2RnZD/6Q6HQyqE057m5uSOFQuEeOjsi5i687AmTl8khWxWmCngvoXHfKmh+EemR/L1YfFYOjTnPzMwc1zRtQC4M/UjHTMD9Qp03AhxApwFur8oFSG/SOzDpU9WatFLmDI3z5PP5KbTnx72ucp22ckU/2B6uP+E65Xa7n2IayLYNRKysXuSruPQo5GJm8W59cH0yykNMpVJCAz8aARRtY4fR0cJDU1loZHc5jVRiYcnlclFooUd2SMxpEYx+qoX+ZgDZtFzAxABHkEdVD0AM6sotBShE/n9Ep2k+5aM4+kWk1QD3BZ5BWte/W8pDVFEqWZUJUTEhREJUQ9zt2OlYLNblcrmmUPQaBGqNAhWlA074JhbB27bVRLE7ggO9CXiBSgAaiAe/64vH4z/sbM4pK7aX2EkdxYCs286chRlDi3r2d0ciEj4+Pr5WpSa/khF00cZV22kizLhLd5mpFqDcEAzptdG2C0s5SSaTl0WAFuk5gH3g6lyDAN5rZOJD1wDy6/QTa4PokLmLfmKNAv/RXywWhzRNe0aINcrY2NgWsi3uWMxX50w+n/9TFiEu7ESewGzTJmbdY+Abnsb9oK7Onu0gihAXwC11/AsERwAzYlTX7GOY/j7KMVsuLNDGgO4zaT0LkPAzH9tyTpQBVx/8QT9AeMuE//UR7T2peT+RvS8UCrHJyckXtl9YQqGQmAvTZs/1kRtoXEM/5TKeSIiESIhGIs7jqPBSImRmtS/YUIjo5N/dgTxtoMLWL6LzBdfaYccyLZRQlqcSicQFdDwNuNlmwxPHWeSptIBukNMN/1+LToVl9iPOKolwysPhsO8/ddSYEzVN81mxi7BYltAvf1MswMqTsnBwBUzRcW8L4QmrSFf66UCJ84kU+omESIiESCFEQiREQqQQIiESIiFSCJEQCZEQKYRIiIRoQ/ktwABFdc5cnHNXVgAAAABJRU5ErkJggg=="

/***/ }),
/* 88 */
/*!***************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/newrural-active.png ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTdGREJERUZCNjIxMUVDQUFFNEI0NTZCQzNFNzg2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMTdGREJERkZCNjIxMUVDQUFFNEI0NTZCQzNFNzg2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxN0ZEQkRDRkI2MjExRUNBQUU0QjQ1NkJDM0U3ODYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxN0ZEQkRERkI2MjExRUNBQUU0QjQ1NkJDM0U3ODYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5+QrcQAAJpJJREFUeNq8fWmQ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"

/***/ }),
/* 89 */
/*!*******************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/farmers.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUNBRjlDQUZCNjIxMUVDODQ0OUI4N0ZCNTUxREExRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUNBRjlDQkZCNjIxMUVDODQ0OUI4N0ZCNTUxREExRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFQ0FGOUM4RkI2MjExRUM4NDQ5Qjg3RkI1NTFEQTFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFQ0FGOUM5RkI2MjExRUM4NDQ5Qjg3RkI1NTFEQTFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+J0cqMAAABXZJREFUeNrsm0tIVFEYx2fujC5m41C4Vqh9JkFUC5UWWRQa0SIQ1HyNK6fWwoxtghY1rcS3AxVkQWMLIwhUCNoUtQlaBCWYmxbOuAjNV/8PzqnjNDPOnbmPc/U7cJn7+s797u9+r3OO+nd3d33cymsGI2CIDJEhcmOIDJEhMkRuDJEhMkSGyI0hMkSGyBC5FdmC5Xbg9/vzXhsdHe3A9QfYDbv0fomenp5bhW6wYlLaX24n+SBOTU2Ft7a2vrkIULYmgFywE2LQLs0BMKoAnMX2ySlqABPGxx0QhzFsC3Y+zzZLHBsbWyWI6D9TUVFR29nZmXbS/BBKFqBbw37WaIUlGja9QIe0QrxIymmA4rlx5TDmxewcU9w67kYgJMuDlS2Kw0Z4RqNnIJKysIJaGQv7+/u/u5VRnLJGw04rpBLDzbTslDVaChGxsI6UFQF7sVBpcZCs0bBY4ahyOK3DaMIJa7QM4vDwMMXBdnG41NvbqwVEJ6zRMoiBQCCqSyx02hotgUhDPHztdhELM8FgcNqnWbPTGi2BiFpQLa4TbhTXblqjJRCh3IACVDsrtNsay4YoprtkcZ10s7h2yxqtmMUZUPbboVi7zzvNkhkewwIXqfN5t2ljibItlVBgx8qQpWRWI/aHypDVByJizXcU2HGTkxUxIbtqVhaxuAVeUCNinVlZmiSpoXJMi8QiAzWUOlHCCOdvSKBa02RdWperryJDkNT1kxYQFUXCYjK2OBcIBjty1Jpm6tK8fe1XTSg17YIWELe3txPKF35QjEWJ2Z7sOi0mztsmSxYrVh8l/IQWEKkuhEs/lNa4ubn5sdALjY+Pt+JF5pVTs1KWzheq3cSE77xv7wKY/IDz1HchWYzv/8qSzlaNrCxbqIKSKfy0KLEyZRhGamdnRxbfdbi3NausGKKkANlpZQaIGi0yTe8jm4RsB2TjWZZJBXVKhhnoUIt+WoX8Hlmhpz4QhasllKXKQskoQ0MwvEhCsZS4iaHYkJqRIRtFn3H0WaU8I99K5B5ZLRfv4VKD6PMqdutzwaN6kOJoruEhxSzEqTjua1WBKOBTtPCVT1ZMx5GFVam60TvCIt9C9m4kEpnL6lc/iKpF4VoP+v8qlE2jFiy6pKC4CvmwWVl8xOtw30eQrZT1qzK2/2/9Weu/gBAKfi11ncUM8Cy3vu8XXxb7d/BDC/i1dr7ngfirsJmZmQAAUulCGwHcBsAufIiYE88Peh3gyMhIKJ1OP4fxXVTi7g0AfOWUDp6GODk5WY0kRYnilDi1jK0ZAD8rtwUKZOrD7c6wwGPItu8kQIAicGdUgGJMXW8nQM9CROZuQMnyDnCOyUkQbOeQxJaVLH0e5dIH3BOyWx/PQaQSBj+vsVWLU8/W19cv9PX1ZRTIEUCle45YVcYcmJiYq4Sh0QcOd0WWrsxkMjSOj8j5EdzzDdePH3pLBAh/vhJGAkwmk0eRpeclQFxfw9aM3R+H3p2phIELP8VuVMD5he0KAE4qLn5yY2PjPYCeFfd8wXYa97w59CVOjhLmJ8bHl7q6ut4rLt6CYd4TmUAA700oFLrW1ta25pSehsYW+F8JA1hnJEBycSSQQey+UADeC4fDzU4C1NYSJyYmTgHYnMzAooRpkRlYuDhZn5y//I3rN+G+j93QVztLpBIGLryYr4ShApqmtXz/JoBXALDJLYDaWWJ2CYOW6O7uvi0zMNz3LPZfYveouP4RQC/DxVfc1NvW+cQyy5p9x7sljIltmU/Uyp3pheSWC458YflrdkxMk7ueiIlikWipHMvOB0eeL2VCgVb3SpnodcSdufH/OzNEhsgQuTFEhsgQGSI3hsgQGSJD5MYQGSJDZIjcGKKj7Y8AAwAm4gnNO6t+EwAAAABJRU5ErkJggg=="

/***/ }),
/* 90 */
/*!**************************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/farmers-active.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRDZEQkVDM0ZCNjExMUVDOEVDRkZGNzQ2NkM2NkU0NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRDZEQkVDNEZCNjExMUVDOEVDRkZGNzQ2NkM2NkU0NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZENkRCRUMxRkI2MTExRUM4RUNGRkY3NDY2QzY2RTQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZENkRCRUMyRkI2MTExRUM4RUNGRkY3NDY2QzY2RTQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FxgZKAAAKz9JREFUeNq8fXmQ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"

/***/ }),
/* 91 */
/*!**************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/my.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQkZERjRDNEZCNjIxMUVDOTgxNkZEODhBRDhGMTJBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQkZERjRDNUZCNjIxMUVDOTgxNkZEODhBRDhGMTJBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCRkRGNEMyRkI2MjExRUM5ODE2RkQ4OEFEOEYxMkEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCRkRGNEMzRkI2MjExRUM5ODE2RkQ4OEFEOEYxMkEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VxqKRQAABhJJREFUeNrsW7ty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"

/***/ }),
/* 92 */
/*!*********************************************************************************************!*\
  !*** C:/Users/feish/Desktop/oypfolder/developmentProject/farmers/static/tabs/my-active.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjdDQTZGQUZCNjExMUVDQTg5OUY3NUEzQUVBNTc0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjdDQTZGQkZCNjExMUVDQTg5OUY3NUEzQUVBNTc0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGN0NBNkY4RkI2MTExRUNBODk5Rjc1QTNBRUE1NzREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGN0NBNkY5RkI2MTExRUNBODk5Rjc1QTNBRUE1NzREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xVSEOQAAK0lJREFUeNrEfXnQ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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map