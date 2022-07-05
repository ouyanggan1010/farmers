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
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

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


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet };

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
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
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

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

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

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

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
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
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
 * (c) 2014-2022 Evan You
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
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
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
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
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
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
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
/*!********************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/*!*******************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/index.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTM2NjMxNUZCNjIxMUVDQUJGQjlBNTZCMTMzRkM2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMTM2NjMxNkZCNjIxMUVDQUJGQjlBNTZCMTMzRkM2MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExMzY2MzEzRkI2MjExRUNBQkZCOUE1NkIxMzNGQzYwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExMzY2MzE0RkI2MjExRUNBQkZCOUE1NkIxMzNGQzYwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BFUbWQAABWJJREFUeNrsnF1oFFcUx7Mzk2zW7TbBovHjTfGhtAj1xTexYqyKxqImtVQCZjPJ7rQGXAhISxFKpYZg8mBrNruBQh4FH+JzSbVVqqAI2pY+lIgPolS0tN3d7Ed2t/9TZsJ1ahLXnZ25a86Fy83M7Nx77m/Oxz13Z+Mrl8sNXKorCiNgiAyRIXJhiAyRITJELgyRITJEhsiFITJEhrg8ilZtBz6fz3GhksnkYKlUOqEoylo6LpfLD+l0X1/fKafHcmI/1VdtJ05DTCQS59DnJwtMlkD2yQZRKnMeHx//2gbwkamF/z0sVB2QE+wTFyjxePwbQPpYODUDgB0w6z1opwXNlw6kFOZMAFVVNQQTu4dmPyz3FzqemJhYCZgXMdZ24TOOmPYrYc5Qqv8BBLB9FkAqvb29TxFkDuHaZRk1UvEaIJp5gID3M0DtjUQiv9o/KzNIzyBiGXMeEAzLHZh+b1d/f/9vC90jK0hPICIKE8CoYMLThULhIwB8uNS9MoJ0PbAQQEAQAX5fLBaPRKPRPyrpx6lgU3eBBcoyZgN4OZvNflApQNk0UnETIJqIqIH5fP7wwMDA45ftUxaQrpgz5hTH5/pFDaTJEwQnJlGNadeFOT8H4JW5ubmDTgGUQSOVWgNE8wxA1AOGYfzp9FhegqwZREThcdJAYR14BUGkA8uYv2o1plcga+ITCSAmI/qjH3C8LxwO/+OGeVXiI6XcT4zH4wnkwroI0O/37+3u7k67GTFfFKR0gYXMRgQIAX+krSy3Abpt2oqTAElIAeDVVCr1Hnxgxqt0zC2QjphzEoVkFgEiiOzEQjonw1bVYqYthU+EgF+i+UwQ7lpra+uOrq6ufINExQ6S5g0t/QrB7lPPzRmChUUfiPqubACfZ9pkQcVi8ZgUPhHCrDH//L2pqekYfGChQdJCIOGnj+LBz9hkr6poDsrYlslktoyNjQXmO9e0tK7r97wENzk5uTqfz8/LhJRzMzSyWbbofMdsQ4B2AUucu1bFE/8JvqjHK4BYs344Ozs7DRO+ZFUApFR0namJd6SACL/yBWra8jNihcBtEFwfGhoKuQ2QxqSsCfUtHG62KuRaZ/ryFGQ7LQXEaDR6EQIdR71BgtmzAJx7Hb5SdRtiKBTSMPZqQQ4r+BG864AZwwrngjSLbcMwvs3lcvsh3Fb4nC1oz8r0m0GSBRDPkmxot8JyDgBg0qn+HQss5g71YzN72S1bZIbmPYlEIrdr0bfm9eSGh4eDgUBgPYJSRaoLrfIhaDwYHBxMez0HTyFSFgHT+s7UlIq+NvT7/eXGxsaGkZGRnbFY7OmyhQiAYUTPd6rJ24PBIGVMw17Ow9PXSODw/S8TgGzRv2lZm7MtB6fXR+i9nMwSABVo4Oeoe2SRXRqIgFLKZrO3EOX/XuxznZ2dant7u1T5Ob/4zhAZIkPkwhAZ4rKAWLL2ncylnaqqJbcnhty6SMsmYQlVrCuItGMiHDYjzw26DRF5dQhyBKz0EIv0J/W22L6BShu0ryE33ogJnBodHT3T0tKSRr4sPrhmIYXzAfaqZDIZWKzjVCql4B7V2q9A24x72gQNpA5XQPtP4tpGM8tJ4fz1miUKtXrJM5FITOFah3DqEayc9hvFGwI0UeoD1+hlp/svOOwb9ONJc7N1BvdnBHlwurwK18Vv8qZ0XX9/qTxcurRP07QTePqbMKk3zVNrbBN71q8oCn0P83alDxAat2GhB0uA8PfNQqEQq8vo3NPTQ7/N20ZagDbt1FNfqlhjmGNO5XK53YZhzNQ07+f/n8jrRIbIELkwRIbIEBkiF4bIEBkiQ+TCEBkiQ2SIXBiie+VfAQYAQmhBxobj8awAAAAASUVORK5CYII="

/***/ }),
/* 42 */
/*!**************************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/index-active.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOEFBODg1MUZCNjExMUVDQjZBMENDMENGNDRGMkNBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOEFBODg1MkZCNjExMUVDQjZBMENDMENGNDRGMkNBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QUE4ODRGRkI2MTExRUNCNkEwQ0MwQ0Y0NEYyQ0E4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU4QUE4ODUwRkI2MTExRUNCNkEwQ0MwQ0Y0NEYyQ0E4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vb8pawAAKX9JREFUeNrMfXmQ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"

/***/ }),
/* 43 */
/*!**********************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/newrural.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzUzNzYyRUZCNjIxMUVDOTRFMkU1NzM3OTk2OThBMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMzUzNzYyRkZCNjIxMUVDOTRFMkU1NzM3OTk2OThBMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzNTM3NjJDRkI2MjExRUM5NEUyRTU3Mzc5OTY5OEExIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzNTM3NjJERkI2MjExRUM5NEUyRTU3Mzc5OTY5OEExIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YloKjgAABBpJREFUeNrsms9rE0EUx5sfWxQFgyCKgrY3BbURPIiHmoqChUrTH6DHhKZpwUuunpr/wHooIWmguShYWk2lh+KlFS89telRL4pQ9CBtiqBIfvkdmepSdmN+bJJJ9/tgmNndyWT2M+/NvHk7jlKp1EGpT5xEQIiESIgUQiREQiRECiESIiESIoUQCZEQCZFCiITYVuKutwGHw9G0zsbj8fNOp/MBisNIN5B2isXi3YmJiY1a27Ti84hb9VEGuIsYqFEUR5B7Dzw+iXvLyM+2so+OekeiEZqYTCavQcOG0fYILi9VoE33w+Hwsu01MZFI3AQ0P4qjeLFus8HBsw08W0R+BflDeVvAXradJs7Pz7t2d3d78Xsxvw0hP2emLEjr6OeCSJj/Pktt7cX1W1nn+/b2ticajRZboYlNhYj5TUP9OxLcINIpk6oFpHcw6cXOzs6FYDD41ajS7OzsF2RnZD/6Q6HQyqE057m5uSOFQuEeOjsi5i687AmTl8khWxWmCngvoXHfKmh+EemR/L1YfFYOjTnPzMwc1zRtQC4M/UjHTMD9Qp03AhxApwFur8oFSG/SOzDpU9WatFLmDI3z5PP5KbTnx72ucp22ckU/2B6uP+E65Xa7n2IayLYNRKysXuSruPQo5GJm8W59cH0yykNMpVJCAz8aARRtY4fR0cJDU1loZHc5jVRiYcnlclFooUd2SMxpEYx+qoX+ZgDZtFzAxABHkEdVD0AM6sotBShE/n9Ep2k+5aM4+kWk1QD3BZ5BWte/W8pDVFEqWZUJUTEhREJUQ9zt2OlYLNblcrmmUPQaBGqNAhWlA074JhbB27bVRLE7ggO9CXiBSgAaiAe/64vH4z/sbM4pK7aX2EkdxYCs286chRlDi3r2d0ciEj4+Pr5WpSa/khF00cZV22kizLhLd5mpFqDcEAzptdG2C0s5SSaTl0WAFuk5gH3g6lyDAN5rZOJD1wDy6/QTa4PokLmLfmKNAv/RXywWhzRNe0aINcrY2NgWsi3uWMxX50w+n/9TFiEu7ESewGzTJmbdY+Abnsb9oK7Onu0gihAXwC11/AsERwAzYlTX7GOY/j7KMVsuLNDGgO4zaT0LkPAzH9tyTpQBVx/8QT9AeMuE//UR7T2peT+RvS8UCrHJyckXtl9YQqGQmAvTZs/1kRtoXEM/5TKeSIiESIhGIs7jqPBSImRmtS/YUIjo5N/dgTxtoMLWL6LzBdfaYccyLZRQlqcSicQFdDwNuNlmwxPHWeSptIBukNMN/1+LToVl9iPOKolwysPhsO8/ddSYEzVN81mxi7BYltAvf1MswMqTsnBwBUzRcW8L4QmrSFf66UCJ84kU+omESIiESCFEQiREQqQQIiESIiFSCJEQCZEQKYRIiIRoQ/ktwABFdc5cnHNXVgAAAABJRU5ErkJggg=="

/***/ }),
/* 44 */
/*!*****************************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/newrural-active.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTdGREJERUZCNjIxMUVDQUFFNEI0NTZCQzNFNzg2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMTdGREJERkZCNjIxMUVDQUFFNEI0NTZCQzNFNzg2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxN0ZEQkRDRkI2MjExRUNBQUU0QjQ1NkJDM0U3ODYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxN0ZEQkRERkI2MjExRUNBQUU0QjQ1NkJDM0U3ODYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5+QrcQAAJpJJREFUeNq8fWmQ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"

/***/ }),
/* 45 */
/*!*********************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/farmers.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUNBRjlDQUZCNjIxMUVDODQ0OUI4N0ZCNTUxREExRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUNBRjlDQkZCNjIxMUVDODQ0OUI4N0ZCNTUxREExRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFQ0FGOUM4RkI2MjExRUM4NDQ5Qjg3RkI1NTFEQTFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFQ0FGOUM5RkI2MjExRUM4NDQ5Qjg3RkI1NTFEQTFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+J0cqMAAABXZJREFUeNrsm0tIVFEYx2fujC5m41C4Vqh9JkFUC5UWWRQa0SIQ1HyNK6fWwoxtghY1rcS3AxVkQWMLIwhUCNoUtQlaBCWYmxbOuAjNV/8PzqnjNDPOnbmPc/U7cJn7+s797u9+r3OO+nd3d33cymsGI2CIDJEhcmOIDJEhMkRuDJEhMkSGyI0hMkSGyBC5FdmC5Xbg9/vzXhsdHe3A9QfYDbv0fomenp5bhW6wYlLaX24n+SBOTU2Ft7a2vrkIULYmgFywE2LQLs0BMKoAnMX2ySlqABPGxx0QhzFsC3Y+zzZLHBsbWyWI6D9TUVFR29nZmXbS/BBKFqBbw37WaIUlGja9QIe0QrxIymmA4rlx5TDmxewcU9w67kYgJMuDlS2Kw0Z4RqNnIJKysIJaGQv7+/u/u5VRnLJGw04rpBLDzbTslDVaChGxsI6UFQF7sVBpcZCs0bBY4ahyOK3DaMIJa7QM4vDwMMXBdnG41NvbqwVEJ6zRMoiBQCCqSyx02hotgUhDPHztdhELM8FgcNqnWbPTGi2BiFpQLa4TbhTXblqjJRCh3IACVDsrtNsay4YoprtkcZ10s7h2yxqtmMUZUPbboVi7zzvNkhkewwIXqfN5t2ljibItlVBgx8qQpWRWI/aHypDVByJizXcU2HGTkxUxIbtqVhaxuAVeUCNinVlZmiSpoXJMi8QiAzWUOlHCCOdvSKBa02RdWperryJDkNT1kxYQFUXCYjK2OBcIBjty1Jpm6tK8fe1XTSg17YIWELe3txPKF35QjEWJ2Z7sOi0mztsmSxYrVh8l/IQWEKkuhEs/lNa4ubn5sdALjY+Pt+JF5pVTs1KWzheq3cSE77xv7wKY/IDz1HchWYzv/8qSzlaNrCxbqIKSKfy0KLEyZRhGamdnRxbfdbi3NausGKKkANlpZQaIGi0yTe8jm4RsB2TjWZZJBXVKhhnoUIt+WoX8Hlmhpz4QhasllKXKQskoQ0MwvEhCsZS4iaHYkJqRIRtFn3H0WaU8I99K5B5ZLRfv4VKD6PMqdutzwaN6kOJoruEhxSzEqTjua1WBKOBTtPCVT1ZMx5GFVam60TvCIt9C9m4kEpnL6lc/iKpF4VoP+v8qlE2jFiy6pKC4CvmwWVl8xOtw30eQrZT1qzK2/2/9Weu/gBAKfi11ncUM8Cy3vu8XXxb7d/BDC/i1dr7ngfirsJmZmQAAUulCGwHcBsAufIiYE88Peh3gyMhIKJ1OP4fxXVTi7g0AfOWUDp6GODk5WY0kRYnilDi1jK0ZAD8rtwUKZOrD7c6wwGPItu8kQIAicGdUgGJMXW8nQM9CROZuQMnyDnCOyUkQbOeQxJaVLH0e5dIH3BOyWx/PQaQSBj+vsVWLU8/W19cv9PX1ZRTIEUCle45YVcYcmJiYq4Sh0QcOd0WWrsxkMjSOj8j5EdzzDdePH3pLBAh/vhJGAkwmk0eRpeclQFxfw9aM3R+H3p2phIELP8VuVMD5he0KAE4qLn5yY2PjPYCeFfd8wXYa97w59CVOjhLmJ8bHl7q6ut4rLt6CYd4TmUAA700oFLrW1ta25pSehsYW+F8JA1hnJEBycSSQQey+UADeC4fDzU4C1NYSJyYmTgHYnMzAooRpkRlYuDhZn5y//I3rN+G+j93QVztLpBIGLryYr4ShApqmtXz/JoBXALDJLYDaWWJ2CYOW6O7uvi0zMNz3LPZfYveouP4RQC/DxVfc1NvW+cQyy5p9x7sljIltmU/Uyp3pheSWC458YflrdkxMk7ueiIlikWipHMvOB0eeL2VCgVb3SpnodcSdufH/OzNEhsgQuTFEhsgQGSI3hsgQGSJD5MYQGSJDZIjcGKKj7Y8AAwAm4gnNO6t+EwAAAABJRU5ErkJggg=="

/***/ }),
/* 46 */
/*!****************************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/farmers-active.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRDZEQkVDM0ZCNjExMUVDOEVDRkZGNzQ2NkM2NkU0NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRDZEQkVDNEZCNjExMUVDOEVDRkZGNzQ2NkM2NkU0NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZENkRCRUMxRkI2MTExRUM4RUNGRkY3NDY2QzY2RTQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZENkRCRUMyRkI2MTExRUM4RUNGRkY3NDY2QzY2RTQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FxgZKAAAKz9JREFUeNq8fXmQ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"

/***/ }),
/* 47 */
/*!****************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/my.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQkZERjRDNEZCNjIxMUVDOTgxNkZEODhBRDhGMTJBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQkZERjRDNUZCNjIxMUVDOTgxNkZEODhBRDhGMTJBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCRkRGNEMyRkI2MjExRUM5ODE2RkQ4OEFEOEYxMkEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCRkRGNEMzRkI2MjExRUM5ODE2RkQ4OEFEOEYxMkEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VxqKRQAABhJJREFUeNrsW7ty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"

/***/ }),
/* 48 */
/*!***********************************************************************!*\
  !*** C:/Users/11478/Desktop/vsCode/farmers/static/tabs/my-active.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjdDQTZGQUZCNjExMUVDQTg5OUY3NUEzQUVBNTc0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjdDQTZGQkZCNjExMUVDQTg5OUY3NUEzQUVBNTc0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGN0NBNkY4RkI2MTExRUNBODk5Rjc1QTNBRUE1NzREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGN0NBNkY5RkI2MTExRUNBODk5Rjc1QTNBRUE1NzREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xVSEOQAAK0lJREFUeNrEfXnQ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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map