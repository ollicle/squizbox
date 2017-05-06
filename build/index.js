/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__squizbox__ = __webpack_require__(1);
// import 'babel-polyfill';


var squiz = new __WEBPACK_IMPORTED_MODULE_0__squizbox__["a" /* default */]({
  // `target` is the only required option – the element
  // to render the component to
  target: document.querySelector('main'),

  // `data` is optional. A component can also have
  // default data – we'll learn about that later.
  data: { name: 'world' }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__ = __webpack_require__(2);


function create_main_fragment(state, component) {
	var text_1_value;

	var h1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["a" /* createElement */])('h1');
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["b" /* appendNode */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["c" /* createText */])("Hello "), h1);
	var text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["c" /* createText */])(text_1_value = state.name);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["b" /* appendNode */])(text_1, h1);

	return {
		mount: function mount(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["d" /* insertNode */])(h1, target, anchor);
		},

		update: function update(changed, state) {
			if (text_1_value !== (text_1_value = state.name)) {
				text_1.data = text_1_value;
			}
		},

		destroy: function destroy(detach) {
			if (detach) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["e" /* detachNode */])(h1);
			}
		}
	};
}

function Squizbox(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;

	this._fragment = create_main_fragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["f" /* assign */])(Squizbox.prototype, __WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["g" /* proto */]);

Squizbox.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["f" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_ollie_Documents_Projects_squizbox_node_modules_svelte_shared_js__["h" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Squizbox.prototype.teardown = Squizbox.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	this._fragment.destroy(detach !== false);
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Squizbox);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export differs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dispatchObservers; });
/* unused harmony export get */
/* unused harmony export fire */
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export set */
/* unused harmony export _flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return proto; });
/* unused harmony export protoDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return detachNode; });
/* unused harmony export detachBetween */
/* unused harmony export destroyEach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createText; });
/* unused harmony export createComment */
/* unused harmony export addEventListener */
/* unused harmony export removeEventListener */
/* unused harmony export setAttribute */
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export linear */
/* unused harmony export generateKeyframes */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* unused harmony export noop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return assign; });
function noop () {}

function assign ( target ) {
	for ( var i = 1; i < arguments.length; i += 1 ) {
		var source = arguments[i];
		for ( var k in source ) target[k] = source[k];
	}

	return target;
}

function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function detachBetween ( before, after ) {
	while ( before.nextSibling && before.nextSibling !== after ) {
		before.parentNode.removeChild( before.nextSibling );
	}
}

function destroyEach ( iterations, detach, start ) {
	for ( var i = start; i < iterations.length; i += 1 ) {
		iterations[i].destroy( detach );
	}
}

function createElement ( name ) {
	return document.createElement( name );
}

function createSvgElement ( name ) {
	return document.createElementNS( 'http://www.w3.org/2000/svg', name );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function createComment () {
	return document.createComment( '' );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener( event, handler, false );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute( attribute, value );
}

function setXlinkAttribute ( node, attribute, value ) {
	node.setAttributeNS( 'http://www.w3.org/1999/xlink', attribute, value );
}

function getBindingGroupValue ( group ) {
	var value = [];
	for ( var i = 0; i < group.length; i += 1 ) {
		if ( group[i].checked ) value.push( group[i].__value );
	}
	return value;
}

function linear ( t ) {
	return t;
}

function generateKeyframes ( a, b, delta, duration, ease, fn, node, style ) {
	var id = '__svelte' + ~~( Math.random() * 1e9 ); // TODO make this more robust
	var keyframes = '@keyframes ' + id + '{\n';

	for ( var p = 0; p <= 1; p += 16.666 / duration ) {
		var t = a + delta * ease( p );
		keyframes += ( p * 100 ) + '%{' + fn( t ) + '}\n';
	}

	keyframes += '100% {' + fn( b ) + '}\n}';
	style.textContent += keyframes;

	document.head.appendChild( style );

	node.style.animation = node.style.animation.split( ',' )
		.filter( function ( anim ) {
			// when introing, discard old animations if there are any
			return anim && ( delta < 0 || !/__svelte/.test( anim ) );
		})
		.concat( id + ' ' + duration + 'ms linear 1 forwards' )
		.join( ', ' );
}

function wrapTransition ( node, fn, params, intro, outgroup ) {
	var obj = fn( node, params, intro );
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;

	// TODO share <style> tag between all transitions?
	if ( obj.css ) {
		var style = document.createElement( 'style' );
	}

	if ( intro && obj.tick ) obj.tick( 0 );

	return {
		start: null,
		end: null,
		a: null,
		b: null,
		d: null,
		running: false,
		t: intro ? 0 : 1,
		callback: null,
		run: function ( a, b, callback ) {
			this.a = a;
			this.b = b;
			this.delta = b - a;
			this.start = window.performance.now() + ( obj.delay || 0 );
			this.duration = duration * Math.abs( b - a );
			this.end = this.start + this.duration;

			this.callback = callback;

			if ( obj.css ) {
				generateKeyframes( this.a, this.b, this.delta, this.duration, ease, obj.css, node, style );
			}

			if ( !this.running ) {
				this.running = true;
				transitionManager.add( this );
			}
		},
		update: function ( now ) {
			var p = now - this.start;
			this.t = this.a + this.delta * ease( p / this.duration );
			if ( obj.tick ) obj.tick( this.t );
		},
		done: function () {
			if ( obj.tick ) obj.tick( intro ? 1 : 0 );
			if ( obj.css ) document.head.removeChild( style );
			this.callback();
			this.running = false;
		},
		abort: function () {
			if ( !intro && obj.tick ) obj.tick( 1 ); // reset css for intro
			if ( obj.css ) document.head.removeChild( style );
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],

	add: function ( transition ) {
		transitionManager.transitions.push( transition );

		if ( !this.running ) {
			this.running = true;
			this.next();
		}
	},

	next: function () {
		transitionManager.running = false;

		var now = window.performance.now();
		var i = transitionManager.transitions.length;

		while ( i-- ) {
			var transition = transitionManager.transitions[i];

			if ( transition.running ) {
				if ( now >= transition.end ) {
					transition.running = false;
					transition.done();
				} else if ( now > transition.start ) {
					transition.update( now );
				}

				transitionManager.running = true;
			} else {
				transitionManager.transitions.splice( i, 1 );
			}
		}

		if ( transitionManager.running ) {
			requestAnimationFrame( transitionManager.next );
		}
	}
};

function differs ( a, b ) {
	return ( a !== b ) || ( a && ( typeof a === 'object' ) || ( typeof a === 'function' ) );
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( differs( newValue, oldValue ) ) {
			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.post : this._observers.pre;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function observeDev ( key, callback, options ) {
	var c = ( key = '' + key ).search( /[^\w]/ );
	if ( c > -1 ) {
		var message = "The first argument to component.observe(...) must be the name of a top-level property";
		if ( c > 0 ) message += ", i.e. '" + key.slice( 0, c ) + "' rather than '" + key + "'";

		throw new Error( message );
	}

	return observe.call( this, key, callback, options );
}

function on ( eventName, handler ) {
	if ( eventName === 'teardown' ) return this.on( 'destroy', handler );

	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function onDev ( eventName, handler ) {
	if ( eventName === 'teardown' ) {
		console.warn( "Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2" );
		return this.on( 'destroy', handler );
	}

	return on.call( this, eventName, handler );
}

function set ( newState ) {
	this._set( assign( {}, newState ) );
	this._root._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
		this._renderHooks.pop()();
	}
}

var proto = {
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	_flush: _flush
};

var protoDev = {
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: set,
	_flush: _flush
};




/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjcyNWEzMjQ1OTdmOGE3Y2MyNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zcXVpemJveC5odG1sIiwid2VicGFjazovLy8uL34vc3ZlbHRlL3NoYXJlZC5qcyJdLCJuYW1lcyI6WyJzcXVpeiIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGEiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxJQUFJLDBEQUFKLENBQWE7QUFDekI7QUFDQTtBQUNBQyxVQUFRQyxTQUFTQyxhQUFULENBQXdCLE1BQXhCLENBSGlCOztBQUt6QjtBQUNBO0FBQ0FDLFFBQU0sRUFBRUMsTUFBTSxPQUFSO0FBUG1CLENBQWIsQ0FBZCxDOzs7Ozs7Ozs7Ozs7Ozs7cUxDSGdCOzs7Ozs7Ozs7OENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaEI7QUFBQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pELHdDQUF3Qzs7QUFFeEMsaUJBQWlCLFFBQVE7QUFDekI7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEOztBQUVBLHFCQUFxQixnQkFBZ0IsR0FBRztBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI3MjVhMzI0NTk3ZjhhN2NjMjczIiwiLy8gaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgU3F1aXpib3ggZnJvbSAnLi9zcXVpemJveCc7XG5cbmNvbnN0IHNxdWl6ID0gbmV3IFNxdWl6Ym94KHtcbiAgLy8gYHRhcmdldGAgaXMgdGhlIG9ubHkgcmVxdWlyZWQgb3B0aW9uIOKAkyB0aGUgZWxlbWVudFxuICAvLyB0byByZW5kZXIgdGhlIGNvbXBvbmVudCB0b1xuICB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdtYWluJyApLFxuXG4gIC8vIGBkYXRhYCBpcyBvcHRpb25hbC4gQSBjb21wb25lbnQgY2FuIGFsc28gaGF2ZVxuICAvLyBkZWZhdWx0IGRhdGEg4oCTIHdlJ2xsIGxlYXJuIGFib3V0IHRoYXQgbGF0ZXIuXG4gIGRhdGE6IHsgbmFtZTogJ3dvcmxkJyB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIjxoMT5IZWxsbyB7e25hbWV9fTwvaDE+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3F1aXpib3guaHRtbCIsImZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gYXNzaWduICggdGFyZ2V0ICkge1xuXHRmb3IgKCB2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblx0XHRmb3IgKCB2YXIgayBpbiBzb3VyY2UgKSB0YXJnZXRba10gPSBzb3VyY2Vba107XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBhcHBlbmROb2RlICggbm9kZSwgdGFyZ2V0ICkge1xuXHR0YXJnZXQuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZSAoIG5vZGUsIHRhcmdldCwgYW5jaG9yICkge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBub2RlLCBhbmNob3IgKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoTm9kZSAoIG5vZGUgKSB7XG5cdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbm9kZSApO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hCZXR3ZWVuICggYmVmb3JlLCBhZnRlciApIHtcblx0d2hpbGUgKCBiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlciApIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggYmVmb3JlLm5leHRTaWJsaW5nICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2ggKCBpdGVyYXRpb25zLCBkZXRhY2gsIHN0YXJ0ICkge1xuXHRmb3IgKCB2YXIgaSA9IHN0YXJ0OyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRpdGVyYXRpb25zW2ldLmRlc3Ryb3koIGRldGFjaCApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKCBuYW1lICkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggbmFtZSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50ICggbmFtZSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0ICggZGF0YSApIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCBkYXRhICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQgKCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggJycgKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lciAoIG5vZGUsIGV2ZW50LCBoYW5kbGVyICkge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50LCBoYW5kbGVyLCBmYWxzZSApO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyICggbm9kZSwgZXZlbnQsIGhhbmRsZXIgKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnQsIGhhbmRsZXIsIGZhbHNlICk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZSAoIG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGUsIHZhbHVlICk7XG59XG5cbmZ1bmN0aW9uIHNldFhsaW5rQXR0cmlidXRlICggbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUyggJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlICk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlICggZ3JvdXAgKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSApIHtcblx0XHRpZiAoIGdyb3VwW2ldLmNoZWNrZWQgKSB2YWx1ZS5wdXNoKCBncm91cFtpXS5fX3ZhbHVlICk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBsaW5lYXIgKCB0ICkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVLZXlmcmFtZXMgKCBhLCBiLCBkZWx0YSwgZHVyYXRpb24sIGVhc2UsIGZuLCBub2RlLCBzdHlsZSApIHtcblx0dmFyIGlkID0gJ19fc3ZlbHRlJyArIH5+KCBNYXRoLnJhbmRvbSgpICogMWU5ICk7IC8vIFRPRE8gbWFrZSB0aGlzIG1vcmUgcm9idXN0XG5cdHZhciBrZXlmcmFtZXMgPSAnQGtleWZyYW1lcyAnICsgaWQgKyAne1xcbic7XG5cblx0Zm9yICggdmFyIHAgPSAwOyBwIDw9IDE7IHAgKz0gMTYuNjY2IC8gZHVyYXRpb24gKSB7XG5cdFx0dmFyIHQgPSBhICsgZGVsdGEgKiBlYXNlKCBwICk7XG5cdFx0a2V5ZnJhbWVzICs9ICggcCAqIDEwMCApICsgJyV7JyArIGZuKCB0ICkgKyAnfVxcbic7XG5cdH1cblxuXHRrZXlmcmFtZXMgKz0gJzEwMCUgeycgKyBmbiggYiApICsgJ31cXG59Jztcblx0c3R5bGUudGV4dENvbnRlbnQgKz0ga2V5ZnJhbWVzO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHN0eWxlICk7XG5cblx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbi5zcGxpdCggJywnIClcblx0XHQuZmlsdGVyKCBmdW5jdGlvbiAoIGFuaW0gKSB7XG5cdFx0XHQvLyB3aGVuIGludHJvaW5nLCBkaXNjYXJkIG9sZCBhbmltYXRpb25zIGlmIHRoZXJlIGFyZSBhbnlcblx0XHRcdHJldHVybiBhbmltICYmICggZGVsdGEgPCAwIHx8ICEvX19zdmVsdGUvLnRlc3QoIGFuaW0gKSApO1xuXHRcdH0pXG5cdFx0LmNvbmNhdCggaWQgKyAnICcgKyBkdXJhdGlvbiArICdtcyBsaW5lYXIgMSBmb3J3YXJkcycgKVxuXHRcdC5qb2luKCAnLCAnICk7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uICggbm9kZSwgZm4sIHBhcmFtcywgaW50cm8sIG91dGdyb3VwICkge1xuXHR2YXIgb2JqID0gZm4oIG5vZGUsIHBhcmFtcywgaW50cm8gKTtcblx0dmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0dmFyIGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblxuXHQvLyBUT0RPIHNoYXJlIDxzdHlsZT4gdGFnIGJldHdlZW4gYWxsIHRyYW5zaXRpb25zP1xuXHRpZiAoIG9iai5jc3MgKSB7XG5cdFx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuXHR9XG5cblx0aWYgKCBpbnRybyAmJiBvYmoudGljayApIG9iai50aWNrKCAwICk7XG5cblx0cmV0dXJuIHtcblx0XHRzdGFydDogbnVsbCxcblx0XHRlbmQ6IG51bGwsXG5cdFx0YTogbnVsbCxcblx0XHRiOiBudWxsLFxuXHRcdGQ6IG51bGwsXG5cdFx0cnVubmluZzogZmFsc2UsXG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRjYWxsYmFjazogbnVsbCxcblx0XHRydW46IGZ1bmN0aW9uICggYSwgYiwgY2FsbGJhY2sgKSB7XG5cdFx0XHR0aGlzLmEgPSBhO1xuXHRcdFx0dGhpcy5iID0gYjtcblx0XHRcdHRoaXMuZGVsdGEgPSBiIC0gYTtcblx0XHRcdHRoaXMuc3RhcnQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyAoIG9iai5kZWxheSB8fCAwICk7XG5cdFx0XHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gKiBNYXRoLmFicyggYiAtIGEgKTtcblx0XHRcdHRoaXMuZW5kID0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb247XG5cblx0XHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuXHRcdFx0aWYgKCBvYmouY3NzICkge1xuXHRcdFx0XHRnZW5lcmF0ZUtleWZyYW1lcyggdGhpcy5hLCB0aGlzLmIsIHRoaXMuZGVsdGEsIHRoaXMuZHVyYXRpb24sIGVhc2UsIG9iai5jc3MsIG5vZGUsIHN0eWxlICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucnVubmluZyApIHtcblx0XHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIuYWRkKCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggbm93ICkge1xuXHRcdFx0dmFyIHAgPSBub3cgLSB0aGlzLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gdGhpcy5hICsgdGhpcy5kZWx0YSAqIGVhc2UoIHAgLyB0aGlzLmR1cmF0aW9uICk7XG5cdFx0XHRpZiAoIG9iai50aWNrICkgb2JqLnRpY2soIHRoaXMudCApO1xuXHRcdH0sXG5cdFx0ZG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCBvYmoudGljayApIG9iai50aWNrKCBpbnRybyA/IDEgOiAwICk7XG5cdFx0XHRpZiAoIG9iai5jc3MgKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKCBzdHlsZSApO1xuXHRcdFx0dGhpcy5jYWxsYmFjaygpO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fSxcblx0XHRhYm9ydDogZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCAhaW50cm8gJiYgb2JqLnRpY2sgKSBvYmoudGljayggMSApOyAvLyByZXNldCBjc3MgZm9yIGludHJvXG5cdFx0XHRpZiAoIG9iai5jc3MgKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKCBzdHlsZSApO1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSB7XG5cdHJ1bm5pbmc6IGZhbHNlLFxuXHR0cmFuc2l0aW9uczogW10sXG5cblx0YWRkOiBmdW5jdGlvbiAoIHRyYW5zaXRpb24gKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMucHVzaCggdHJhbnNpdGlvbiApO1xuXG5cdFx0aWYgKCAhdGhpcy5ydW5uaW5nICkge1xuXHRcdFx0dGhpcy5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdH1cblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dHJhbnNpdGlvbk1hbmFnZXIucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0dmFyIG5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgaSA9IHRyYW5zaXRpb25NYW5hZ2VyLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uTWFuYWdlci50cmFuc2l0aW9uc1tpXTtcblxuXHRcdFx0aWYgKCB0cmFuc2l0aW9uLnJ1bm5pbmcgKSB7XG5cdFx0XHRcdGlmICggbm93ID49IHRyYW5zaXRpb24uZW5kICkge1xuXHRcdFx0XHRcdHRyYW5zaXRpb24ucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBub3cgPiB0cmFuc2l0aW9uLnN0YXJ0ICkge1xuXHRcdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKCBub3cgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJhbnNpdGlvbk1hbmFnZXIudHJhbnNpdGlvbnMuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2l0aW9uTWFuYWdlci5ydW5uaW5nICkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0cmFuc2l0aW9uTWFuYWdlci5uZXh0ICk7XG5cdFx0fVxuXHR9XG59O1xuXG5mdW5jdGlvbiBkaWZmZXJzICggYSwgYiApIHtcblx0cmV0dXJuICggYSAhPT0gYiApIHx8ICggYSAmJiAoIHR5cGVvZiBhID09PSAnb2JqZWN0JyApIHx8ICggdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgKSApO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE9ic2VydmVycyAoIGNvbXBvbmVudCwgZ3JvdXAsIG5ld1N0YXRlLCBvbGRTdGF0ZSApIHtcblx0Zm9yICggdmFyIGtleSBpbiBncm91cCApIHtcblx0XHRpZiAoICEoIGtleSBpbiBuZXdTdGF0ZSApICkgY29udGludWU7XG5cblx0XHR2YXIgbmV3VmFsdWUgPSBuZXdTdGF0ZVsga2V5IF07XG5cdFx0dmFyIG9sZFZhbHVlID0gb2xkU3RhdGVbIGtleSBdO1xuXG5cdFx0aWYgKCBkaWZmZXJzKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSApIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBncm91cFsga2V5IF07XG5cdFx0XHRpZiAoICFjYWxsYmFja3MgKSBjb250aW51ZTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cdFx0XHRcdGlmICggY2FsbGJhY2suX19jYWxsaW5nICkgY29udGludWU7XG5cblx0XHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29tcG9uZW50LCBuZXdWYWx1ZSwgb2xkVmFsdWUgKTtcblx0XHRcdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldCAoIGtleSApIHtcblx0cmV0dXJuIGtleSA/IHRoaXMuX3N0YXRlWyBrZXkgXSA6IHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBmaXJlICggZXZlbnROYW1lLCBkYXRhICkge1xuXHR2YXIgaGFuZGxlcnMgPSBldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbIGV2ZW50TmFtZSBdLnNsaWNlKCk7XG5cdGlmICggIWhhbmRsZXJzICkgcmV0dXJuO1xuXG5cdGZvciAoIHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxICkge1xuXHRcdGhhbmRsZXJzW2ldLmNhbGwoIHRoaXMsIGRhdGEgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlICgga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApIHtcblx0dmFyIGdyb3VwID0gKCBvcHRpb25zICYmIG9wdGlvbnMuZGVmZXIgKSA/IHRoaXMuX29ic2VydmVycy5wb3N0IDogdGhpcy5fb2JzZXJ2ZXJzLnByZTtcblxuXHQoIGdyb3VwWyBrZXkgXSB8fCAoIGdyb3VwWyBrZXkgXSA9IFtdICkgKS5wdXNoKCBjYWxsYmFjayApO1xuXG5cdGlmICggIW9wdGlvbnMgfHwgb3B0aW9ucy5pbml0ICE9PSBmYWxzZSApIHtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdGNhbGxiYWNrLmNhbGwoIHRoaXMsIHRoaXMuX3N0YXRlWyBrZXkgXSApO1xuXHRcdGNhbGxiYWNrLl9fY2FsbGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpbmRleCA9IGdyb3VwWyBrZXkgXS5pbmRleE9mKCBjYWxsYmFjayApO1xuXHRcdFx0aWYgKCB+aW5kZXggKSBncm91cFsga2V5IF0uc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZURldiAoIGtleSwgY2FsbGJhY2ssIG9wdGlvbnMgKSB7XG5cdHZhciBjID0gKCBrZXkgPSAnJyArIGtleSApLnNlYXJjaCggL1teXFx3XS8gKTtcblx0aWYgKCBjID4gLTEgKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPSBcIlRoZSBmaXJzdCBhcmd1bWVudCB0byBjb21wb25lbnQub2JzZXJ2ZSguLi4pIG11c3QgYmUgdGhlIG5hbWUgb2YgYSB0b3AtbGV2ZWwgcHJvcGVydHlcIjtcblx0XHRpZiAoIGMgPiAwICkgbWVzc2FnZSArPSBcIiwgaS5lLiAnXCIgKyBrZXkuc2xpY2UoIDAsIGMgKSArIFwiJyByYXRoZXIgdGhhbiAnXCIgKyBrZXkgKyBcIidcIjtcblxuXHRcdHRocm93IG5ldyBFcnJvciggbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG9ic2VydmUuY2FsbCggdGhpcywga2V5LCBjYWxsYmFjaywgb3B0aW9ucyApO1xufVxuXG5mdW5jdGlvbiBvbiAoIGV2ZW50TmFtZSwgaGFuZGxlciApIHtcblx0aWYgKCBldmVudE5hbWUgPT09ICd0ZWFyZG93bicgKSByZXR1cm4gdGhpcy5vbiggJ2Rlc3Ryb3knLCBoYW5kbGVyICk7XG5cblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbIGV2ZW50TmFtZSBdIHx8ICggdGhpcy5faGFuZGxlcnNbIGV2ZW50TmFtZSBdID0gW10gKTtcblx0aGFuZGxlcnMucHVzaCggaGFuZGxlciApO1xuXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKCBoYW5kbGVyICk7XG5cdFx0XHRpZiAoIH5pbmRleCApIGhhbmRsZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9uRGV2ICggZXZlbnROYW1lLCBoYW5kbGVyICkge1xuXHRpZiAoIGV2ZW50TmFtZSA9PT0gJ3RlYXJkb3duJyApIHtcblx0XHRjb25zb2xlLndhcm4oIFwiVXNlIGNvbXBvbmVudC5vbignZGVzdHJveScsIC4uLikgaW5zdGVhZCBvZiBjb21wb25lbnQub24oJ3RlYXJkb3duJywgLi4uKSB3aGljaCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIFN2ZWx0ZSAyXCIgKTtcblx0XHRyZXR1cm4gdGhpcy5vbiggJ2Rlc3Ryb3knLCBoYW5kbGVyICk7XG5cdH1cblxuXHRyZXR1cm4gb24uY2FsbCggdGhpcywgZXZlbnROYW1lLCBoYW5kbGVyICk7XG59XG5cbmZ1bmN0aW9uIHNldCAoIG5ld1N0YXRlICkge1xuXHR0aGlzLl9zZXQoIGFzc2lnbigge30sIG5ld1N0YXRlICkgKTtcblx0dGhpcy5fcm9vdC5fZmx1c2goKTtcbn1cblxuZnVuY3Rpb24gX2ZsdXNoICgpIHtcblx0aWYgKCAhdGhpcy5fcmVuZGVySG9va3MgKSByZXR1cm47XG5cblx0d2hpbGUgKCB0aGlzLl9yZW5kZXJIb29rcy5sZW5ndGggKSB7XG5cdFx0dGhpcy5fcmVuZGVySG9va3MucG9wKCkoKTtcblx0fVxufVxuXG52YXIgcHJvdG8gPSB7XG5cdGdldDogZ2V0LFxuXHRmaXJlOiBmaXJlLFxuXHRvYnNlcnZlOiBvYnNlcnZlLFxuXHRvbjogb24sXG5cdHNldDogc2V0LFxuXHRfZmx1c2g6IF9mbHVzaFxufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZURldixcblx0b246IG9uRGV2LFxuXHRzZXQ6IHNldCxcblx0X2ZsdXNoOiBfZmx1c2hcbn07XG5cbmV4cG9ydCB7IGRpZmZlcnMsIGRpc3BhdGNoT2JzZXJ2ZXJzLCBnZXQsIGZpcmUsIG9ic2VydmUsIG9ic2VydmVEZXYsIG9uLCBvbkRldiwgc2V0LCBfZmx1c2gsIHByb3RvLCBwcm90b0RldiwgYXBwZW5kTm9kZSwgaW5zZXJ0Tm9kZSwgZGV0YWNoTm9kZSwgZGV0YWNoQmV0d2VlbiwgZGVzdHJveUVhY2gsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQsIGNyZWF0ZVRleHQsIGNyZWF0ZUNvbW1lbnQsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIsIHNldEF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCBsaW5lYXIsIGdlbmVyYXRlS2V5ZnJhbWVzLCB3cmFwVHJhbnNpdGlvbiwgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N2ZWx0ZS9zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==