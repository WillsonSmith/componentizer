(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("componentizer", [], factory);
	else if(typeof exports === 'object')
		exports["componentizer"] = factory();
	else
		root["componentizer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var storedComponents = {};

	var Component = function () {
	  function Component(name, description) {
	    _classCallCheck(this, Component);

	    var currentComponents = Object.keys(storedComponents);
	    this.name = name;
	    this.id = currentComponents.length;
	    this.description = description;

	    if (currentComponents.includes(name)) {
	      var length = Object.keys(storedComponents[name]).length;
	      storedComponents[name][length] = this;
	      return;
	    }

	    storedComponents[name] = {
	      0: this
	    };
	  }

	  _createClass(Component, null, [{
	    key: 'end',
	    value: function end(component) {
	      var _component = component,
	          name = _component.name,
	          id = _component.id;

	      storedComponents[name][id] = null;
	      delete storedComponents[name][id];
	      component = null;
	    }
	  }, {
	    key: 'stored',
	    value: function stored() {
	      return storedComponents;
	    }
	  }]);

	  return Component;
	}();

	var Cat = function (_Component) {
	  _inherits(Cat, _Component);

	  function Cat(name, description) {
	    _classCallCheck(this, Cat);

	    return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name, description));
	  }

	  _createClass(Cat, [{
	    key: 'what',
	    value: function what() {
	      return this.description;
	    }
	  }]);

	  return Cat;
	}(Component);

	var cat = new Cat('cat', 'bub');
	var cat2 = new Cat('cat', 'bob');

	// export default Component;

/***/ }
/******/ ])
});
;