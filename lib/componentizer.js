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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(1);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cat = function (_Component) {
	  _inherits(Cat, _Component);
	
	  function Cat(node, name, props) {
	    _classCallCheck(this, Cat);
	
	    return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, node, name, props));
	  }
	
	  _createClass(Cat, [{
	    key: 'what',
	    value: function what() {
	      return this.props;
	    }
	  }]);
	
	  return Cat;
	}(_component2.default);
	
	var cats = Array.from(document.getElementsByClassName('cat'));
	
	var catClasses = cats.map(function (cat) {
	  return new Cat(cat, 'cat', ['age', 'color']);
	});
	window.catClasses = catClasses;
	// const cat = new Cat(document.getElementById('cat'), 'cat', ['age', 'color']);
	
	// cat.update('age', 7);
	// window.cat = cat;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var storedComponents = {};
	
	var Component = function () {
	  function Component(node, name, props) {
	    var _this = this;
	
	    _classCallCheck(this, Component);
	
	    var currentComponents = Object.keys(storedComponents);
	    this.node = node;
	    this.name = name;
	    this.props = {};
	    this.id = currentComponents.length;
	
	    if (props) {
	      this.props = props.reduce(function (propList, prop) {
	        propList[prop] = {
	          value: node.getAttribute("data-prop-" + prop),
	          dependents: Array.from(node.querySelectorAll(_this.name + "-" + prop))
	        };
	
	        return propList;
	      }, {});
	
	      Object.keys(this.props).forEach(function (prop) {
	        return _this.update(prop, _this.props[prop].value);
	      });
	    }
	
	    if (currentComponents.includes(name)) {
	      var length = Object.keys(storedComponents[name]).length;
	      storedComponents[name][length] = this;
	      return;
	    }
	
	    storedComponents[name] = {
	      0: this
	    };
	  }
	
	  _createClass(Component, [{
	    key: "update",
	    value: function update(prop, value) {
	      if (!value) {
	        return;
	      }
	      this.props[prop].value = value;
	      this.props[prop].dependents.forEach(function (dependent) {
	        dependent.textContent = value;
	      });
	      this.node.setAttribute("data-prop-" + prop, value);
	      // modify this to use requestAnimationFrame for batching
	      // what about on non-tag elements, what if want on a button etc
	      // thinking some data attribute
	    }
	  }], [{
	    key: "destroy",
	    value: function destroy(component) {
	      var _component = component,
	          name = _component.name,
	          id = _component.id;
	
	      storedComponents[name][id] = null;
	      delete storedComponents[name][id];
	      component = null;
	    }
	  }, {
	    key: "stored",
	    value: function stored() {
	      return storedComponents;
	    }
	  }]);
	
	  return Component;
	}();
	
	exports.default = Component;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=componentizer.js.map