/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/JSInterpreter.ts":
/*!******************************!*\
  !*** ./lib/JSInterpreter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JSInterpreter)
/* harmony export */ });
class JSInterpreter {
    read(filename) {
    }
    async run(code) {
        try {
            return this.runSync(code);
        }
        catch (e) {
            throw e;
        }
    }
    runSync(code) {
        const disableVars = [
            "window", "print", "document"
        ];
        const func = new Function("console", ...disableVars, code);
        const output = [];
        const fakeConsole = new FakeConsole(output);
        func(fakeConsole, ...new Array(disableVars.length));
        return output;
    }
}
class FakeConsole {
    constructor(output) {
        this.output = output;
    }
    log(...args) {
        this.output.push(args.map(_ => {
            if (typeof _ === "undefined")
                return _;
            return `${_}`;
        }).join(" ") + "\n");
    }
}


/***/ }),

/***/ "./lib/Link.tsx":
/*!**********************!*\
  !*** ./lib/Link.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function Link(props) {
    const { children } = props, attrs = __rest(props, ["children"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ target: "_blank", rel: "noreferrer" }, attrs, { children: children }));
}


/***/ }),

/***/ "./lib/ShowMarkerName.tsx":
/*!********************************!*\
  !*** ./lib/ShowMarkerName.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowMarkerName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);


const { anyHover } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;
const { useForceUpdate } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.react;
const style = {
    backgroundColor: "#1A69B5",
    fontFamily: `"Roboto Slab", sans-serif`,
    lineHeight: "36px",
    padding: "0 .5em",
    userSelect: "all",
    verticalAlign: "top"
};
function ShowMarkerName() {
    if (!anyHover)
        return null;
    const script = (0,liqvid__WEBPACK_IMPORTED_MODULE_1__.useScript)();
    (0,liqvid__WEBPACK_IMPORTED_MODULE_1__.useMarkerUpdate)(useForceUpdate(), []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "rp-marker-name", style: style }, { children: script.markerName }), "show-marker-name"));
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    }
    catch (err) {
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


if (true) {
    (function () {
        'use strict';
        var React = __webpack_require__(/*! react */ "react");
        var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
        var REACT_ELEMENT_TYPE = 0xeac7;
        var REACT_PORTAL_TYPE = 0xeaca;
        exports.Fragment = 0xeacb;
        var REACT_STRICT_MODE_TYPE = 0xeacc;
        var REACT_PROFILER_TYPE = 0xead2;
        var REACT_PROVIDER_TYPE = 0xeacd;
        var REACT_CONTEXT_TYPE = 0xeace;
        var REACT_FORWARD_REF_TYPE = 0xead0;
        var REACT_SUSPENSE_TYPE = 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = 0xead8;
        var REACT_MEMO_TYPE = 0xead3;
        var REACT_LAZY_TYPE = 0xead4;
        var REACT_BLOCK_TYPE = 0xead9;
        var REACT_SERVER_BLOCK_TYPE = 0xeada;
        var REACT_FUNDAMENTAL_TYPE = 0xead5;
        var REACT_SCOPE_TYPE = 0xead7;
        var REACT_OPAQUE_ID_TYPE = 0xeae0;
        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
        var REACT_OFFSCREEN_TYPE = 0xeae2;
        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
        if (typeof Symbol === 'function' && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor('react.element');
            REACT_PORTAL_TYPE = symbolFor('react.portal');
            exports.Fragment = symbolFor('react.fragment');
            REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
            REACT_PROFILER_TYPE = symbolFor('react.profiler');
            REACT_PROVIDER_TYPE = symbolFor('react.provider');
            REACT_CONTEXT_TYPE = symbolFor('react.context');
            REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
            REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
            REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
            REACT_MEMO_TYPE = symbolFor('react.memo');
            REACT_LAZY_TYPE = symbolFor('react.lazy');
            REACT_BLOCK_TYPE = symbolFor('react.block');
            REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
            REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
            REACT_SCOPE_TYPE = symbolFor('react.scope');
            REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
            REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
            REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                }
                printWarning('error', format, args);
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([stack]);
                }
                var argsWithFormat = args.map(function (item) {
                    return '' + item;
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            }
            if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                    return true;
                }
            }
            return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || '';
            return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentName(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch (type) {
                case exports.Fragment:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
            }
            if (typeof type === 'object') {
                switch (type.$$typeof) {
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        return getComponentName(type.type);
                    case REACT_BLOCK_TYPE:
                        return getComponentName(type._render);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentName(init(payload));
                            }
                            catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() { }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: _assign({}, props, {
                            value: prevLog
                        }),
                        info: _assign({}, props, {
                            value: prevInfo
                        }),
                        warn: _assign({}, props, {
                            value: prevWarn
                        }),
                        error: _assign({}, props, {
                            value: prevError
                        }),
                        group: _assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: _assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: _assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    }
                    catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function () {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function () {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        }
                        catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    }
                    else {
                        try {
                            Fake.call();
                        }
                        catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                }
                else {
                    try {
                        throw Error();
                    }
                    catch (x) {
                        control = x;
                    }
                    fn();
                }
            }
            catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                        c--;
                    }
                    for (; s >= 1 && c >= 0; s--, c--) {
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                } while (s >= 1 && c >= 0);
                            }
                            break;
                        }
                    }
                }
            }
            finally {
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch (type) {
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch (type.$$typeof) {
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_BLOCK_TYPE:
                        return describeFunctionComponentFrame(type._render);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            }
                            catch (x) { }
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                }
                else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(Object.prototype.hasOwnProperty);
                for (var typeSpecName in typeSpecs) {
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        }
                        catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
            }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                    var componentName = getComponentName(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function defineKeyPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingKey = function () {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
        }
        function defineRefPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingRef = function () {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingRef.isReactWarning = true;
                Object.defineProperty(props, 'ref', {
                    get: warnAboutAccessingRef,
                    configurable: true
                });
            }
        }
        var ReactElement = function (type, key, ref, self, source, owner, props) {
            var element = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key,
                ref: ref,
                props: props,
                _owner: owner
            };
            {
                element._store = {};
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                });
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                });
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
            {
                var propName;
                var props = {};
                var key = null;
                var ref = null;
                if (maybeKey !== undefined) {
                    key = '' + maybeKey;
                }
                if (hasValidKey(config)) {
                    key = '' + config.key;
                }
                if (hasValidRef(config)) {
                    ref = config.ref;
                    warnIfStringRefCannotBeAutoConverted(config, self);
                }
                for (propName in config) {
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for (propName in defaultProps) {
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
                return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                }
                else {
                    ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
            {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
        }
        function getDeclarationErrorAddendum() {
            {
                if (ReactCurrentOwner$1.current) {
                    var name = getComponentName(ReactCurrentOwner$1.current.type);
                    if (name) {
                        return '\n\nCheck the render method of `' + name + '`.';
                    }
                }
                return '';
            }
        }
        function getSourceInfoErrorAddendum(source) {
            {
                if (source !== undefined) {
                    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                    var lineNumber = source.lineNumber;
                    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                }
                return '';
            }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
        }
        function validateExplicitKey(element, parentType) {
            {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                var childOwner = '';
                if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
                }
                setCurrentlyValidatingElement$1(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement$1(null);
            }
        }
        function validateChildKeys(node, parentType) {
            {
                if (typeof node !== 'object') {
                    return;
                }
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                }
                else if (isValidElement(node)) {
                    if (node._store) {
                        node._store.validated = true;
                    }
                }
                else if (node) {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === 'function') {
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while (!(step = iterator.next()).done) {
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
        }
        function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                }
                else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                }
                else {
                    return;
                }
                if (propTypes) {
                    var name = getComponentName(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                }
                else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true;
                    var _name = getComponentName(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement$1(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement$1(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement$1(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement$1(null);
                }
            }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
                var validType = isValidElementType(type);
                if (!validType) {
                    var info = '';
                    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var sourceInfo = getSourceInfoErrorAddendum(source);
                    if (sourceInfo) {
                        info += sourceInfo;
                    }
                    else {
                        info += getDeclarationErrorAddendum();
                    }
                    var typeString;
                    if (type === null) {
                        typeString = 'null';
                    }
                    else if (Array.isArray(type)) {
                        typeString = 'array';
                    }
                    else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                        info = ' Did you accidentally export a JSX literal instead of a component?';
                    }
                    else {
                        typeString = typeof type;
                    }
                    error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
                var element = jsxDEV(type, props, key, source, self);
                if (element == null) {
                    return element;
                }
                if (validType) {
                    var children = props.children;
                    if (children !== undefined) {
                        if (isStaticChildren) {
                            if (Array.isArray(children)) {
                                for (var i = 0; i < children.length; i++) {
                                    validateChildKeys(children[i], type);
                                }
                                if (Object.freeze) {
                                    Object.freeze(children);
                                }
                            }
                            else {
                                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                            }
                        }
                        else {
                            validateChildKeys(children, type);
                        }
                    }
                }
                if (type === exports.Fragment) {
                    validateFragmentProps(element);
                }
                else {
                    validatePropTypes(element);
                }
                return element;
            }
        }
        function jsxWithValidationStatic(type, props, key) {
            {
                return jsxWithValidation(type, props, key, true);
            }
        }
        function jsxWithValidationDynamic(type, props, key) {
            {
                return jsxWithValidation(type, props, key, false);
            }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
    })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (false) {}
else {
    module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/rp-codebooth/rp-codebooth.js":
/*!***************************************************!*\
  !*** ./node_modules/rp-codebooth/rp-codebooth.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (t, e) {  true ? module.exports = e(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! liqvid */ "liqvid"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (t, e, r) { return (() => { var n = { 926: t => { function e(t, e, r, n, o, s, i) { try {
        var a = t[s](i), c = a.value;
    }
    catch (l) {
        return void r(l);
    } a.done ? e(c) : Promise.resolve(c).then(n, o); } t.exports = function (t) { return function () { var r = this, n = arguments; return new Promise((function (o, s) { var i = t.apply(r, n); function a(t) { e(i, o, s, a, c, "next", t); } function c(t) { e(i, o, s, a, c, "throw", t); } a(void 0); })); }; }; }, 154: t => { function e() { return t.exports = e = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    } return t; }, e.apply(this, arguments); } t.exports = e; }, 757: (t, e, r) => { t.exports = r(666); }, 666: t => { var e = function (t) {
        "use strict";
        var e, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, s = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
        function c(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; }
        try {
            c({}, "");
        }
        catch (M) {
            c = function (t, e, r) { return t[e] = r; };
        }
        function l(t, e, r, n) { var o = e && e.prototype instanceof m ? e : m, s = Object.create(o.prototype), i = new N(n || []); return s._invoke = function (t, e, r) { var n = h; return function (o, s) { if (n === d)
            throw new Error("Generator is already running"); if (n === f) {
            if ("throw" === o)
                throw s;
            return P();
        } for (r.method = o, r.arg = s;;) {
            var i = r.delegate;
            if (i) {
                var a = j(i, r);
                if (a) {
                    if (a === y)
                        continue;
                    return a;
                }
            }
            if ("next" === r.method)
                r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
                if (n === h)
                    throw n = f, r.arg;
                r.dispatchException(r.arg);
            }
            else
                "return" === r.method && r.abrupt("return", r.arg);
            n = d;
            var c = u(t, e, r);
            if ("normal" === c.type) {
                if (n = r.done ? f : p, c.arg === y)
                    continue;
                return { value: c.arg, done: r.done };
            }
            "throw" === c.type && (n = f, r.method = "throw", r.arg = c.arg);
        } }; }(t, r, i), s; }
        function u(t, e, r) { try {
            return { type: "normal", arg: t.call(e, r) };
        }
        catch (M) {
            return { type: "throw", arg: M };
        } }
        t.wrap = l;
        var h = "suspendedStart", p = "suspendedYield", d = "executing", f = "completed", y = {};
        function m() { }
        function g() { }
        function v() { }
        var b = {};
        b[s] = function () { return this; };
        var x = Object.getPrototypeOf, w = x && x(x(L([])));
        w && w !== r && n.call(w, s) && (b = w);
        var E = v.prototype = m.prototype = Object.create(b);
        function C(t) { ["next", "throw", "return"].forEach((function (e) { c(t, e, (function (t) { return this._invoke(e, t); })); })); }
        function O(t, e) { function r(o, s, i, a) { var c = u(t[o], t, s); if ("throw" !== c.type) {
            var l = c.arg, h = l.value;
            return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then((function (t) { r("next", t, i, a); }), (function (t) { r("throw", t, i, a); })) : e.resolve(h).then((function (t) { l.value = t, i(l); }), (function (t) { return r("throw", t, i, a); }));
        } a(c.arg); } var o; this._invoke = function (t, n) { function s() { return new e((function (e, o) { r(t, n, e, o); })); } return o = o ? o.then(s, s) : s(); }; }
        function j(t, r) { var n = t.iterator[r.method]; if (n === e) {
            if (r.delegate = null, "throw" === r.method) {
                if (t.iterator.return && (r.method = "return", r.arg = e, j(t, r), "throw" === r.method))
                    return y;
                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return y;
        } var o = u(n, t.iterator, r.arg); if ("throw" === o.type)
            return r.method = "throw", r.arg = o.arg, r.delegate = null, y; var s = o.arg; return s ? s.done ? (r[t.resultName] = s.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : s : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); }
        function S(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); }
        function k(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; }
        function N(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(S, this), this.reset(!0); }
        function L(t) { if (t) {
            var r = t[s];
            if (r)
                return r.call(t);
            if ("function" == typeof t.next)
                return t;
            if (!isNaN(t.length)) {
                var o = -1, i = function r() { for (; ++o < t.length;)
                    if (n.call(t, o))
                        return r.value = t[o], r.done = !1, r; return r.value = e, r.done = !0, r; };
                return i.next = i;
            }
        } return { next: P }; }
        function P() { return { value: e, done: !0 }; }
        return g.prototype = E.constructor = v, v.constructor = g, g.displayName = c(v, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name)); }, t.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, c(t, a, "GeneratorFunction")), t.prototype = Object.create(E), t; }, t.awrap = function (t) { return { __await: t }; }, C(O.prototype), O.prototype[i] = function () { return this; }, t.AsyncIterator = O, t.async = function (e, r, n, o, s) { void 0 === s && (s = Promise); var i = new O(l(e, r, n, o), s); return t.isGeneratorFunction(r) ? i : i.next().then((function (t) { return t.done ? t.value : i.next(); })); }, C(E), c(E, a, "Generator"), E[s] = function () { return this; }, E.toString = function () { return "[object Generator]"; }, t.keys = function (t) { var e = []; for (var r in t)
            e.push(r); return e.reverse(), function r() { for (; e.length;) {
            var n = e.pop();
            if (n in t)
                return r.value = n, r.done = !1, r;
        } return r.done = !0, r; }; }, t.values = L, N.prototype = { constructor: N, reset: function (t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t)
                for (var r in this)
                    "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e); }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type)
                throw t.arg; return this.rval; }, dispatchException: function (t) { if (this.done)
                throw t; var r = this; function o(n, o) { return a.type = "throw", a.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o; } for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                var i = this.tryEntries[s], a = i.completion;
                if ("root" === i.tryLoc)
                    return o("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), l = n.call(i, "finallyLoc");
                    if (c && l) {
                        if (this.prev < i.catchLoc)
                            return o(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc)
                            return o(i.finallyLoc);
                    }
                    else if (c) {
                        if (this.prev < i.catchLoc)
                            return o(i.catchLoc, !0);
                    }
                    else {
                        if (!l)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc)
                            return o(i.finallyLoc);
                    }
                }
            } }, abrupt: function (t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var s = o;
                    break;
                }
            } s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null); var i = s ? s.completion : {}; return i.type = t, i.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, y) : this.complete(i); }, complete: function (t, e) { if ("throw" === t.type)
                throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), k(r), y;
            } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        k(r);
                    }
                    return o;
                }
            } throw new Error("illegal catch attempt"); }, delegateYield: function (t, r, n) { return this.delegate = { iterator: L(t), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = e), y; } }, t;
    }(t.exports); try {
        regeneratorRuntime = e;
    }
    catch (r) {
        Function("r", "regeneratorRuntime = r")(e);
    } }, 916: function (t, e, r) { var n, o; "undefined" != typeof self && self, t.exports = (n = r(888), o = r(576), (() => {
        "use strict";
        var t = { 281: (t, e, r) => { r.r(e), r.d(e, { CodeEditor: () => s, CodeReplay: () => c }); var n = r(888), o = r(576); {
                const t = document.createElement("style");
                t.type = "text/css", document.head.appendChild(t), t.sheet.insertRule(".CodeMirror [contenteditable]{-webkit-user-select: text;user-select: text;}", 0);
            } class s extends n.Component {
                constructor(t, e) { super(t, e), this.player = e, this.ready = new Promise((t => { this.setReady = t; })); }
                async componentDidMount() { const t = Object.assign({ indentUnit: 4, lineNumbers: !0, tabSize: 4 }, (e = this.props, ["mode", "readOnly", "theme"].map((t => t in e ? { [t]: e[t] } : {})).reduce(((t, e) => Object.assign(t, e)), {}))); var e; this.editor = window.CodeMirror((t => { this.placeholder.parentNode.replaceChild(t, this.placeholder); }), t); const r = this.editor.getWrapperElement(); Object.assign(r.style, this.props.style); const n = this.props.className ? this.props.className.split(" ") : []; for (const o of n)
                    r.classList.add(o); r.addEventListener("mouseup", o.Player.preventCanvasClick), this.editor.on("keydown", ((t, e) => { e.key.match(/^[A-Z]$/i) && this.props.hint && this.editor.showHint({ hint: this.props.hint, completeSingle: !1, customKeys: { Down: (t, e) => e.moveFocus(1), Up: (t, e) => e.moveFocus(-1), Tab: (t, e) => e.pick() } }); })), this.editor.on("focus", (() => { this.props.readOnly || this.player.suspendKeyCapture(); })), this.editor.on("blur", (() => { this.props.readOnly || this.player.resumeKeyCapture(); })), this.editor.addKeyMap({ Tab(t) { const e = Array(t.getOption("indentUnit") + 1).join(" "); t.getDoc().replaceSelection(e); } }), this.editor.addKeyMap(this.props.keyMap), this.setReady(); }
                shouldComponentUpdate(t) { if (!this.editor)
                    return; const e = this.editor.getWrapperElement().style; for (const r in this.props.style)
                    t.hasOwnProperty(r) || e.removeProperty(r.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))); return Object.assign(e, t.style), !1; }
                render() { return n.createElement("div", { ref: t => this.placeholder = t }); }
            } s.contextType = o.Player.Context, s.defaultProps = { keyMap: {}, readOnly: !1, style: {} }; const { bind: i } = o.Utils.misc, { parseTime: a } = o.Utils.time; class c extends n.Component {
                constructor(t, e) { super(t, e), this.player = e, i(this, ["blinkCursor", "onTimeUpdate", "poll"]), "string" == typeof t.start ? t.start.match(/^(?:(?:(\d+):)?(\d+):)?(\d+)(?:\.(\d+))?$/) ? this.start = a(t.start) : this.start = this.player.script.markerByName(t.start)[1] : this.start = t.start, this.i = 0, this.lastTime = 0, this.cursorState = { line: 0, ch: 0 }, this.broadcast = t.broadcast, this.replay = this.props.replay, this.times = this.replay.map((t => t[0])); for (let r = 1; r < this.times.length; ++r)
                    this.times[r] += this.times[r - 1]; 0 !== this.replay.length && (this.duration = this.times[this.times.length - 1]); }
                async poll(t) { this.replay.push(...t); let e = 0 === this.times.length ? 0 : this.times[this.times.length - 1]; for (const [r] of t)
                    this.times.push(e + r), e += r; this.duration = this.times[this.times.length - 1]; }
                componentDidMount() { const { playback: t } = this.player; t.hub.on("seek", this.onTimeUpdate), t.hub.on("timeupdate", this.onTimeUpdate), this.codeEditor.ready.then((() => { const t = this.codeEditor.editor, e = t.getWrapperElement().querySelector(".CodeMirror-cursors"); this.cursorDiv = h('\n        <div class="CodeMirror-cursors">\n          <div class="CodeMirror-cursor"> </div>\n        </div>\n      '), this.cursor = this.cursorDiv.firstElementChild, e.parentNode.replaceChild(this.cursorDiv, e), this.setCursor(this.getCursor()), setInterval(this.blinkCursor, t.getOption("cursorBlinkRate")), this.selectionsDiv = h('<div style="position: relative;z-index: 1;"/>'), this.cursorDiv.parentNode.insertBefore(this.selectionsDiv, this.cursorDiv); })); }
                onTimeUpdate(t) { const e = t - this.start, r = this.codeEditor.editor; if (!r)
                    return; const n = { cursor: this.getCursor(), selection: r.getDoc().listSelections()[0], value: r.getValue().split("\n") }, o = this.i; if (this.lastTime <= t && this.i < this.replay.length) {
                    let t = this.i;
                    for (; t < this.replay.length && this.times[t] <= e; ++t) {
                        const [, [e, r]] = this.replay[t];
                        this.fwd({ type: e, data: r, state: n });
                    }
                    this.i = t;
                }
                else if (t < this.lastTime && 0 < this.i) {
                    let t = this.i - 1;
                    for (; 0 <= t && e < this.times[t]; --t) {
                        const [, [e, r]] = this.replay[t];
                        this.back({ type: e, data: r, state: n });
                    }
                    this.i = t + 1;
                } if (this.i !== o) {
                    const { left: t, top: e } = r.getScrollInfo(), o = r.getDoc().listSelections()[0];
                    r.setValue(n.value.join("\n")), this.setSelection(n.selection.anchor, n.selection.head), this.setCursor(n.cursor), r.getDoc().setSelection(o.anchor, o.head), r.scrollTo(t, e);
                } this.lastTime = t; }
                fwd(t) { switch (t.type) {
                    case "command":
                        this.props.command("fwd", t.data, t.state);
                        break;
                    case "cursor":
                        t.state.cursor = t.data;
                        break;
                    case "selection":
                        t.state.selection = t.data;
                        break;
                    case "text": l(t.state.value, t.data.text, t.data.from, t.data.to);
                } }
                back(t) { switch (t.type) {
                    case "command":
                        this.props.command("back", t.data, t.state);
                        break;
                    case "cursor": break;
                    case "text":
                        const e = { line: t.data.from.line, ch: t.data.from.ch }, r = { line: t.data.from.line + t.data.text.length - 1, ch: 1 === t.data.text.length ? t.data.from.ch + t.data.text[0].length : t.data.text[t.data.text.length - 1].length };
                        l(t.state.value, t.data.removed, e, r);
                } }
                blinkCursor() { this.cursorDiv.style.visibility = "hidden" === this.cursorDiv.style.visibility ? "visible" : "hidden"; }
                getCursor() { return this.cursorState; }
                setCursor({ line: t, ch: e }) { const r = this.codeEditor.editor, n = r.cursorCoords({ line: t, ch: e }, "div"), o = Math.max(0, n.bottom - n.top) * r.getOption("cursorHeight"); Object.assign(this.cursor.style, { left: `${n.left}px`, top: `${n.top}px`, height: `${o}px` }), this.cursorState = { line: t, ch: e }; }
                setSelection(t, e) { const r = this.codeEditor.editor; for (; this.selectionsDiv.firstChild;)
                    this.selectionsDiv.lastChild.remove(); const n = r.cursorCoords(t, "div"), o = r.cursorCoords(e, "div"), s = r.cursorCoords({ line: 0, ch: 0 }, "div"), i = Math.max(0, n.bottom - n.top) * r.getOption("cursorHeight"), a = r.getWrapperElement().getBoundingClientRect().width; for (let l = t.line; l <= e.line; ++l) {
                    const r = n.top + (l - t.line) * i, u = (l === t.line ? n : s).left;
                    let h;
                    h = l === t.line ? t.line === e.line ? o.left - n.left : a - n.left : l === e.line ? o.left - s.left : a;
                    const p = c(u, r, h, i);
                    this.selectionsDiv.appendChild(p);
                } function c(t, e, r, n) { const o = h('<div class="CodeMirror-selected" style="position: absolute;"></div>'); return Object.assign(o.style, { left: `${t}px`, top: `${e}px`, width: `${r}px`, height: `${n}px` }), o; } }
                render() { const t = (e = this.props, ["className", "mode", "style", "theme"].map((t => t in e ? { [t]: e[t] } : {})).reduce(((t, e) => Object.assign(t, e)), {})); var e; return n.createElement(s, Object.assign({ ref: t => this.codeEditor = t, readOnly: !0 }, t)); }
            } function l(t, e, r, n) { r = u(t, r), n = u(t, n); const o = t[r.line].slice(0, r.ch), s = t[n.line].slice(n.ch, t[n.line].length), i = 1 === e.length ? [o + e[0] + s] : [o + e[0], ...e.slice(1, e.length - 1), e[e.length - 1] + s]; t.splice(r.line, n.line - r.line + 1, ...i); } function u(t, e) { const r = t.length - 1; return e.line > r ? { line: r, ch: t[r].length } : function (t, e) { return null == t.ch || t.ch > e ? { line: t.line, ch: e } : t.ch < 0 ? { line: t.line, ch: 0 } : t; }(e, t[e.line].length); } function h(t) { const e = document.createElement("template"); return e.innerHTML = t, e.content.cloneNode(!0).firstElementChild; } c.contextType = o.Player.Context, c.defaultProps = { replay: [] }; }, 576: t => { t.exports = o; }, 888: t => { t.exports = n; } }, e = {};
        function r(n) { if (e[n])
            return e[n].exports; var o = e[n] = { exports: {} }; return t[n](o, o.exports, r), o.exports; }
        return r.d = (t, e) => { for (var n in e)
            r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] }); }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r(281);
    })()); }, 996: (t, e, r) => {
        "use strict";
        r.r(e), r.d(e, { CodeBooth: () => f });
        var n = r(888), o = r(742), s = r(916);
        function i(t) { let e; const r = new Set, n = (t, n) => { const o = "function" == typeof t ? t(e) : t; if (o !== e) {
            const t = e;
            e = n ? o : Object.assign({}, e, o), r.forEach((r => r(e, t)));
        } }, o = () => e, s = { setState: n, getState: o, subscribe: (t, n, s) => n || s ? ((t, n = o, s = Object.is) => { let i = n(e); function a() { const r = n(e); if (!s(i, r)) {
                const e = i;
                t(i = r, e);
            } } return r.add(a), () => r.delete(a); })(t, n, s) : (r.add(t), () => r.delete(t)), destroy: () => r.clear() }; return e = t(n, o, s), s; }
        const a = "undefined" == typeof window ? n.useEffect : n.useLayoutEffect;
        const c = function (t) { const e = "function" == typeof t ? i(t) : t, r = (t = e.getState, r = Object.is) => { const [, o] = (0, n.useReducer)((t => t + 1), 0), s = e.getState(), i = (0, n.useRef)(s), c = (0, n.useRef)(t), l = (0, n.useRef)(r), u = (0, n.useRef)(!1), h = (0, n.useRef)(); let p; void 0 === h.current && (h.current = t(s)); let d = !1; (i.current !== s || c.current !== t || l.current !== r || u.current) && (p = t(s), d = !r(h.current, p)), a((() => { d && (h.current = p), i.current = s, c.current = t, l.current = r, u.current = !1; })); const f = (0, n.useRef)(s); return a((() => { const t = () => { try {
            const t = e.getState(), r = c.current(t);
            l.current(h.current, r) || (i.current = t, h.current = r, o());
        }
        catch (t) {
            u.current = !0, o();
        } }, r = e.subscribe(t); return e.getState() !== f.current && t(), r; }), []), d ? p : h.current; }; return Object.assign(r, e), r[Symbol.iterator] = function* () { console.warn("[useStore, api] = create() is deprecated and will be removed in v4"), yield r, yield e; }, r; }((0, r(316).$e)({ messages: [], mode: "javascript", pane: "replay" }, (t => ({})))), { dragHelperReact: l } = o.Utils.interactivity, { constrain: u } = o.Utils.misc;
        function h() { const t = c((t => t.messages)), e = (0, n.useRef)(), r = (0, n.useMemo)((() => l(((t, { x: r }) => { const n = e.current.parentElement, o = n.getBoundingClientRect(); n.style.setProperty("--split", 100 * u(.25, (r - o.left) / o.width, .75) + "%"); }))), []); return n.createElement("pre", { className: "rp-codebooth-output", onMouseUp: o.Player.preventCanvasClick, ref: e }, ["ew"].map((t => n.createElement("div", Object.assign({ key: t }, r, { className: `ui-resizable-handle ui-resizable-${t}`, style: { zIndex: 90 } })))), t.map(((t, e) => n.createElement("span", { key: e, className: t.classNames.join(" ") }, t.text)))); }
        var p = function (t, e) { var r = {}; for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
        } return r; };
        const { onClick: d } = o.Utils.mobile;
        function f(t) { const { interpreter: e, mode: r, recorder: i, replay: a, start: l, theme: u } = t, f = p(t, ["interpreter", "mode", "recorder", "replay", "start", "theme"]), y = (0, n.useRef)(), m = (0, n.useRef)(), g = c((t => t.pane)); i && (0, n.useEffect)((() => { m.current.ready.then((() => { i.connect(m.current); })); }), []); const v = (0, n.useCallback)((t => { const e = t.currentTarget.classList.contains("button-replay") ? "replay" : "playground"; c.setState({ pane: e }); }), []), b = (0, n.useCallback)((t => { m.current.editor.setValue(y.current.codeEditor.editor.getValue()); }), []), x = (0, n.useCallback)(((t, r, n) => { if ("fwd" === t)
            if ("Cmd-Enter" === r || "Ctrl-Enter" === r) {
                const t = n.value.join("\n");
                let r;
                try {
                    const n = e.runSync(t);
                    r = n.map((t => ({ classNames: ["replay"], text: t })));
                }
                catch (o) {
                    r = o.args ? [{ classNames: ["replay", "error"], text: o.args.v[0].v + "\n" }] : [{ classNames: ["replay", "error"], text: o + "\n" }];
                }
                c.setState((t => ({ messages: t.messages.concat(r) })));
            }
            else
                "Cmd-K" === r && c.setState((t => ({ messages: t.messages.filter((t => !t.classNames.includes("replay"))) }))); }), []), w = (0, n.useCallback)((async (t) => { const r = "replay" === c.getState().pane ? y.current.codeEditor.editor : m.current.editor; let n; try {
            const t = await e.run(r.getValue());
            n = t.map((t => ({ classNames: ["user"], text: t })));
        }
        catch (t) {
            console.log(t), n = t.args ? [{ classNames: ["user", "error"], text: t.args.v[0].v + "\n" }] : [{ classNames: ["user", "error"], text: t + "\n" }];
        } c.setState((t => ({ messages: t.messages.concat(n) }))); }), []), E = (0, n.useCallback)((() => c.setState({ messages: [] })), []), C = (0, n.useMemo)((() => d(v)), []), O = (0, n.useMemo)((() => d(b)), []), j = (0, n.useMemo)((() => d(w)), []), S = (0, n.useMemo)((() => d(E)), []), k = (0, n.useMemo)((() => ({ "Cmd-Enter": w, "Ctrl-Enter": w, "Cmd-K": E })), []); return f.className || (f.className = ""), f.className += ` rp-codebooth active-${g}`, n.createElement("div", Object.assign({}, f), i ? n.createElement(s.CodeEditor, { className: "code-playground", keyMap: k, mode: r, recorder: i, ref: m, theme: u }) : n.createElement(n.Fragment, null, n.createElement(s.CodeReplay, { className: "code-replay", command: x, keyMap: k, mode: r, ref: y, replay: a, start: t.start, theme: u }), n.createElement(s.CodeEditor, { className: "code-playground", keyMap: k, mode: r, ref: m, theme: u })), n.createElement("div", { onMouseUp: o.Player.preventCanvasClick }, n.createElement("button", Object.assign({ className: "button-replay" }, C), "Code"), n.createElement("button", Object.assign({ className: "button-playground" }, C), "Playground"), n.createElement("button", Object.assign({ className: "button-copy" }, O), "Copy"), n.createElement("button", Object.assign({ className: "button-run" }, j, { title: "Cmd+Enter" }), "Run"), n.createElement("button", Object.assign({ className: "button-clear" }, S, { title: "Cmd+K" }), "Clear")), n.createElement(h, null)); }
    }, 316: (t, e, r) => {
        "use strict";
        var n = r(757), o = r(926), s = r(154);
        function i(t) { return t && "object" == typeof t && "default" in t ? t : { default: t }; }
        var a = i(n), c = i(o), l = i(s);
        e.$e = function (t, e) { return function (r, n, o) { return Object.assign({}, t, e(r, n, o)); }; };
    }, 742: t => {
        "use strict";
        t.exports = e;
    }, 576: t => {
        "use strict";
        t.exports = r;
    }, 888: e => {
        "use strict";
        e.exports = t;
    } }, o = {}; function s(t) { if (o[t])
    return o[t].exports; var e = o[t] = { exports: {} }; return n[t].call(e.exports, e, e.exports, s), e.exports; } return s.d = (t, e) => { for (var r in e)
    s.o(e, r) && !s.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] }); }, s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, s(996); })(); }));


/***/ }),

/***/ "./node_modules/rp-codemirror/rp-codemirror.recorder.js":
/*!**************************************************************!*\
  !*** ./node_modules/rp-codemirror/rp-codemirror.recorder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player"), __webpack_require__(/*! rp-recording */ "rp-recording")) : 0; }(self, (function (e, t, r) { return (() => {
    "use strict";
    var o = { 502: (e, t, r) => { r.d(t, { default: () => l }); var o = r(888), n = r(576), c = r(798); const { bind: i } = n.Utils.misc, a = o.createElement("g", { transform: "scale(0.5333333333)" }, o.createElement("g", { transform: "translate(-138.61 -857.23)" }, o.createElement("rect", { style: { strokeLinejoin: "round", stroke: "#FFF", strokeLinecap: "round", strokeWidth: 3.8521, fill: "#FFF" }, rx: "9.4681", ry: "14.97", height: "58.455", width: "121.82", y: "931.93", x: "171.45" }), o.createElement("path", { style: { stroke: "#000", strokeDasharray: "4.9175124 4.9175124", strokeWidth: 4.9175, fill: "none" }, d: "m184.06 947.36h94.08" }), o.createElement("path", { style: { stroke: "#000", strokeDasharray: "4.9175124 4.9175124", strokeWidth: 4.9175, fill: "none" }, d: "m184.06 957.05h94.08" }), o.createElement("path", { style: { stroke: "#000", strokeDasharray: "4.9175124 4.9175124", strokeWidth: 4.9175, fill: "none" }, d: "m184.06 966.75h94.08" }), o.createElement("path", { style: { stroke: "#FFF", strokeWidth: 4.9175, fill: "none" }, d: "m184.06 977.23h94.08" }), o.createElement("path", { style: { stroke: "#FFF", strokeLinecap: "round", strokeWidth: 4.3986, fill: "none" }, d: "m278.67 929.84s8.86-13.98-0.31-21.47c-10.76-8.79-20.81 8.66-36.55-3.07" }))); class s extends c.ReplayDataRecorder {
            constructor() { super(), i(this, ["captureCursor", "captureKey", "captureKeySequence"]); }
            connect(e) { this.connectedEditor = e; }
            disconnect() { this.connectedEditor = null; }
            beginRecording() { super.beginRecording(); const e = this.connectedEditor.editor; e.on("change", this.captureKey), e.on("cursorActivity", this.captureCursor), e.on("keyHandled", this.captureKeySequence); }
            endRecording() { const e = this.connectedEditor.editor; e.off("change", this.captureKey), e.off("cursorActivity", this.captureCursor), e.off("keyHandled", this.captureKeySequence); }
            captureCursor(e) { const t = this.manager.getTime(); if (this.manager.paused)
                return; const r = e.getDoc().listSelections()[0], o = u(r.anchor, ["line", "ch"]), n = u(r.head, ["line", "ch"]); o.line === n.line && o.ch === n.ch ? this.capture(t, ["cursor", u(o, ["line", "ch"])]) : this.capture(t, ["selection", { anchor: o, head: n }]); }
            captureKey(e, { from: t, to: r, text: o, removed: n }) { const c = this.manager.getTime(); this.manager.paused || this.capture(c, ["text", { from: u(t, ["line", "ch"]), to: u(r, ["line", "ch"]), text: o, removed: n }]); }
            captureKeySequence(e, t) { const r = this.manager.getTime(); t.startsWith("Cmd-Alt-") || this.manager.paused || this.capture(r, ["command", t]); }
        } const d = new s, l = { enabled: () => !!d.connectedEditor, icon: a, key: "rp-codemirror", name: "Code", recorder: d, saveComponent: function (e) { return o.createElement(o.Fragment, null, o.createElement("textarea", { readOnly: !0, value: JSON.stringify(e.data) })); }, title: "Record code" }; function u(e, t) { const r = {}; for (const o of t)
            o in e && (r[o] = e[o]); return r; } }, 576: e => { e.exports = t; }, 888: t => { t.exports = e; }, 798: e => { e.exports = r; } }, n = {};
    function c(e) { if (n[e])
        return n[e].exports; var t = n[e] = { exports: {} }; return o[e](t, t.exports, c), t.exports; }
    return c.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return c.d(t, { a: t }), t; }, c.d = (e, t) => { for (var r in t)
        c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), c(502);
})().default; }));


/***/ }),

/***/ "./node_modules/rp-cursor/rp-cursor.js":
/*!*********************************************!*\
  !*** ./node_modules/rp-cursor/rp-cursor.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! liqvid */ "liqvid")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var r = { 995: e => { e.exports = t; }, 359: t => { t.exports = e; } }, o = {};
    function n(e) { var t = o[e]; if (void 0 !== t)
        return t.exports; var i = o[e] = { exports: {} }; return r[e](i, i.exports, n), i.exports; }
    n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t; }, n.d = (e, t) => { for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); };
    var i = {};
    return (() => { n.r(i), n.d(i, { default: () => s }); var e = n(359), t = n(995); const { replay: r } = t.Utils.animation, { between: o } = t.Utils.misc; function s(n) { const { playback: i, script: s } = (0, t.usePlayer)(), c = e.useRef(), a = s.parseStart(n.start), u = s.parseEnd(n.end); e.useEffect((() => { const { display: e } = c.current.style; c.current.style.display = "block"; const { height: t, width: o } = c.current.getBoundingClientRect(); c.current.style.display = e; const s = r({ data: n.replay, start: a, end: u, active: ([e, r]) => { Object.assign(c.current.style, { opacity: 1, left: `calc(${e}% - ${o / 2}px)`, top: `calc(${r}% - ${t / 2}px)` }); }, inactive: () => { c.current.style.opacity = "0"; }, compressed: !0 }); return i.hub.on("seek", s), i.hub.on("timeupdate", s), s(i.currentTime), () => { i.hub.off("seek", s), i.hub.off("timeupdate", s); }; }), [c.current]); const l = { pointerEvents: "none", position: "absolute", zIndex: 1e3 }; return o(a, i.currentTime, u) && (l.opacity = 0), e.createElement("img", { className: "rp-cursor", ref: c, src: n.src, style: l }); } })(), i;
})(); }));


/***/ }),

/***/ "./node_modules/rp-cursor/rp-cursor.recorder.js":
/*!******************************************************!*\
  !*** ./node_modules/rp-cursor/rp-cursor.recorder.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, r) {  true ? module.exports = r(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! liqvid */ "liqvid"), __webpack_require__(/*! rp-recording */ "rp-recording")) : 0; }(self, (function (e, r, t) { return (() => {
    "use strict";
    var o = { 995: e => { e.exports = r; }, 359: r => { r.exports = e; }, 687: e => { e.exports = t; } }, n = {};
    function i(e) { var r = n[e]; if (void 0 !== r)
        return r.exports; var t = n[e] = { exports: {} }; return o[e](t, t.exports, i), t.exports; }
    i.n = e => { var r = e && e.__esModule ? () => e.default : () => e; return i.d(r, { a: r }), r; }, i.d = (e, r) => { for (var t in r)
        i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] }); }, i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
    var a = {};
    return (() => { i.d(a, { default: () => s }); var e = i(359), r = i(995), t = i(687); const { bind: o } = r.Utils.misc; class n extends t.ReplayDataRecorder {
        constructor() { super(), o(this, ["captureMouse"]); }
        beginRecording() { super.beginRecording(), document.body.addEventListener("mousemove", this.captureMouse); }
        endRecording() { document.body.removeEventListener("mousemove", this.captureMouse); }
        captureMouse(e) { const r = this.manager.getTime(); if (this.manager.paused)
            return; const { left: t, top: o, height: n, width: i } = this.player.canvas.getBoundingClientRect(); this.capture(r, [u((e.pageX - t) / i * 100), u((e.pageY - o) / n * 100)]); }
    } const s = { icon: e.createElement("g", null, e.createElement("line", { x1: "0", x2: "100", y1: "50", y2: "50", stroke: "#FFF" }), e.createElement("line", { x1: "50", x2: "50", y1: "0", y2: "100", stroke: "#FFF" })), key: "rp-cursor", name: "Cursor", recorder: new n, saveComponent: function (r) { return e.createElement(e.Fragment, null, r.data ? e.createElement("textarea", { readOnly: !0, value: JSON.stringify(r.data) }) : "Cursor data not yet available."); }, title: "Record cursor" }; function u(e) { return parseFloat(e.toFixed(3)); } })(), a = a.default;
})(); }));


/***/ }),

/***/ "./node_modules/rp-paint/rp-paint.js":
/*!*******************************************!*\
  !*** ./node_modules/rp-paint/rp-paint.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! liqvid */ "liqvid")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var n = { 995: e => { e.exports = t; }, 359: t => { t.exports = e; } }, r = {};
    function s(e) { var t = r[e]; if (void 0 !== t)
        return t.exports; var o = r[e] = { exports: {} }; return n[e](o, o.exports, s), o.exports; }
    s.d = (e, t) => { for (var n in t)
        s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); };
    var o = {};
    return (() => { s.r(o), s.d(o, { PaintCanvas: () => te, PaintReplay: () => de }); var e = s(359), t = s(995); function n(e) { const t = {}; for (let n in e)
        t[n] = e[n].current; return t; } const r = { type: "change-sheet", preprocess(e) { return this.state.activeSheet = e.sheet, !0; }, process(e) { const { state: t } = this; if (e.sheet >= this.state.numSheets && (this.state.numSheets = e.sheet + 1), e.sheet !== this.state.activeSheet) {
            const [e, t] = this.consume({ test: e => "change-sheet" !== e.type });
        } return !0; } }, i = { type: "clear", process(e) { const { stable: t } = this.layers; return t.getContext("2d").clearRect(0, 0, t.width, t.height), !0; } }, { ceil: a, floor: c, max: l, min: u } = Math, h = { type: "set-stroke-style", process(e) { for (const t of [this.contexts.stable, this.contexts.temp, this.state])
            t.strokeStyle = e.strokeStyle; return !0; } }, p = { type: "move-to", process(e) { const { lineWidth: t, strokeStyle: n } = this.state, [r, s] = this.consume({ test: e => "line-to" === e.type }), o = [[e.x, e.y], ...r.map((e => [e.x, e.y]))], i = s ? this.layers.stable : this.layers.temp, a = i.getContext("2d"), { height: l, width: u } = i; if (a.lineJoin = a.lineCap = "round", a.strokeStyle = n, a.lineWidth = t, 1 === o.length)
            a.fillStyle = n, a.fillRect(c(u * o[0][0] - t / 2), c(l * o[0][1] - t / 2), t, t);
        else {
            a.beginPath(), a.moveTo(c(o[0][0] * u), c(o[0][1] * l));
            for (let e = 0, t = o.length; e < t - 1; e++) {
                const t = o[e], n = o[e + 1], r = t[0] + (n[0] - t[0]) / 2, s = t[1] + (n[1] - t[1]) / 2;
                a.quadraticCurveTo(c(u * t[0]), c(l * t[1]), c(u * r), c(l * s));
            }
            a.stroke();
        } return s; } }, { ceil: d, floor: m, max: f, min: y } = Math, g = { type: "erase", process(e) { const t = this.layers.stable, n = t.getContext("2d"); return n.save(), n.beginPath(), n.globalCompositeOperation = "destination-out", n.arc(m(e.x * t.width), m(e.y * t.height), m(e.r * t.width), 0, 2 * Math.PI), n.fill(), n.restore(), !0; } }, v = {}; for (const s of [i, g, p, h, r])
        v[s.type] = s; class b {
        constructor(e = {}) { Object.assign(this, { complete: !0, i: 0, index: 0, state: { activeSheet: 0, numSheets: 1, lineWidth: 2, strokeStyle: "#000000" } }, e), this.contexts = {}, this.complete = !0; }
        consume({ test: e }) { const t = []; for (; this.i + 1 < this.feed.length; ++this.i) {
            const n = this.feed[this.i + 1];
            if (!e(n))
                return [t, !0];
            t.push(n);
        } return [t, this.complete]; }
        preprocess() { this.complete = !1; let e = Object.keys(v).filter((e => v[e].preprocess)).length; for (let t = this.feed.length - 1; t >= 0; --t) {
            const n = this.feed[t];
            if (!v.hasOwnProperty(n.type))
                continue;
            const r = v[n.type];
            if (r.hasOwnProperty("preprocess") && (r.preprocess.call(this, n) && e--, 0 === e))
                break;
        } }
        process() { for (; this.i < this.feed.length; ++this.i) {
            const e = this.feed[this.i];
            if (!v.hasOwnProperty(e.type))
                continue;
            const t = v[e.type];
            if (!t.hasOwnProperty("process"))
                continue;
            if (!t.process.call(this, e))
                break;
            this.index = this.i + 1;
        } }
        record(e) { this.feed.push(e); }
        reset() { this.index = 0; for (const e in this.layers) {
            const t = this.layers[e];
            t.getContext("2d").clearRect(0, 0, t.width, t.height);
        } }
        repaint(e = !1) { if (!this.contexts.hasOwnProperty("temp"))
            for (const t in this.layers)
                this.contexts[t] = this.layers[t].getContext("2d"); e && this.reset(), this.i = this.index, this.preprocess(), this.contexts.temp.clearRect(0, 0, this.layers.temp.width, this.layers.temp.height), this.process(); }
    } const k = { name: "draw", down({ consumer: e, layers: t, hit: n }) { const r = t.stable.getBoundingClientRect(), s = { type: "move-to", x: (n.x - r.left) / r.width, y: (n.y - r.top) / r.height }; e.record(s), e.complete = !1, e.repaint(); }, move({ consumer: e, layers: t, hit: n, record: r }) { const s = t.stable.getBoundingClientRect(), o = { type: "line-to", x: (n.x - s.left) / s.width, y: (n.y - s.top) / s.height }; e.record(o), e.repaint(); }, up({ consumer: e }) { e.complete = !0, e.repaint(); } }, { floor: w } = Math, x = { name: "eraser", hover({ layers: e, hit: t }) { const n = e.aid, r = n.getBoundingClientRect(), s = n.getContext("2d"); s.clearRect(0, 0, n.width, n.height), s.lineWidth = 1, s.strokeStyle = "#000", s.setLineDash([6, 4]), s.beginPath(), s.arc(w(t.x - r.left), w(t.y - r.y), w(.02 * r.width), 0, 2 * Math.PI), s.stroke(); }, down({ consumer: e, layers: t, hit: n, record: r }) { const s = t.stable.getBoundingClientRect(), o = { type: "erase", x: (n.x - s.left) / s.width, y: (n.y - s.top) / s.height, r: .02 }; e.record(o), e.repaint(); }, move({ consumer: e, layers: t, hit: n }) { const r = t.stable.getBoundingClientRect(), s = { type: "erase", x: (n.x - r.left) / r.width, y: (n.y - r.top) / r.height, r: .02 }; e.record(s), e.repaint(); } }, E = e.createElement("g", { fill: "#fff" }, e.createElement("path", { d: "m23.2859 93.4398c-.0321-.002-.0563-.0008-.0887-.0029-.3133-.0198-.6378-.0447-.9657-.0753-.328-.0306-.6593-.0666-.9909-.1101-.3318-.0435-.6632-.0936-.988-.1521s-.644-.1257-.951-.2014c-.307-.0756-.6014-.16-.88-.2549-.1392-.0475-.275-.098-.4052-.1507-.1301-.0527-.2545-.1084-.3742-.1666-.1196-.0582-.2338-.1186-.3416-.1826-.1079-.0639-.2101-.1313-.3047-.2013s-.1816-.1425-.2618-.2187c-.0801-.0763-.1531-.1562-.2173-.239l-.1672-.2593c-.047-.0898-.0854-.1829-.1138-.2797-.0286-.0967-.0477-.1972-.0563-.3013-.0085-.1041-.0067-.2113.006-.323.0127-.1118.018-.222.0147-.3289-.0031-.1069-.0145-.2107-.0325-.3129-.018-.102-.0434-.201-.0754-.2984s-.0705-.1925-.1154-.2854c-.0448-.0928-.0956-.1841-.1523-.2724-.0567-.0882-.1187-.1739-.1863-.2578s-.1415-.1652-.2189-.2448c-.0775-.0796-.1592-.158-.2455-.2332-.0864-.0753-.1764-.1477-.2708-.2188-.0942-.0711-.1931-.1401-.2943-.2072-.0419-.0278-.09-.051-.1331-.0782-1.5258 3.321-3.9582 5.3779-8.95801 6.29-.81882.1494-.54858 1.1271 0 1.1271 5.90331 0 12.69441-.0272 17.76821-1.5602z" }), e.createElement("path", { d: "m23.147 78.0639c-3.7321 0-6.8361 2.6364-7.4747 6.1118-.3443 1.2582-.7294 2.3904-1.1966 3.4072.0432.0271.0912.0504.1332.0782.1011.0671.2.136.2943.2072.0943.0711.1843.1435.2707.2187.0863.0752.168.1537.2455.2333.0774.0795.1513.1609.2189.2448s.1296.1696.1863.2578c.0567.0883.1075.1796.1523.2724.0449.0928.0834.188.1154.2854.032.0973.0574.1963.0754.2984s.0294.206.0325.3128c.0033.107-.002.2171-.0147.3289s-.0145.219-.006.3231c.0086.1041.0277.2045.0563.3013.0284.0968.0668.1899.1138.2796.047.0896.1029.1765.1672.2593.0642.0828.1372.1628.2173.239.0802.0763.1672.1488.2618.2188.0946.0699.1969.1373.3047.2013s.222.1243.3416.1825c.1197.0583.2441.1139.3742.1666.1302.0528.266.1033.4052.1507.2786.0949.573.1793.88.255.307.0756.6262.1428.951.2013s.6563.1087.988.1521c.3316.0435.6629.0795.9909.1101.3279.0306.6524.0556.9657.0754.0324.002.0566.0009.0887.0028 2.9268-.8843 5.2842-2.267 6.5652-4.4401.5674-1.0421.8888-2.2334.8888-3.497 0-4.1084-3.3986-7.4388-7.5929-7.4388z" }), e.createElement("path", { d: "m71.302 5.00013c-.1587.0034-.3394.07411-.5029.28538-.232.31688-30.4484 41.40919-37.3275 53.54479.164.0523.332.1059.5014.1651 1.0616.3707 2.235.8774 3.4873 1.5674 1.4894.8207 3.0912 1.9006 4.7534 3.3159 7.5537-11.9997 29.4184-57.63808 29.5882-57.99055.1568-.39472.0022-.67845-.1582-.78806-.0101-.00685-.0209-.01359-.0326-.02029-.0764-.04393-.1857-.08232-.3091-.07967z" }), e.createElement("path", { d: "m32.6403 60.3861c-.1163.2378-.2152.4547-.2957.6475-2.5564 6.1258-6.3889 13.48-7.4496 16.2842 2.033.308 3.799 1.4052 4.962 2.9625 1.9802-2.2656 6.6581-9.0957 10.8541-14.2271.1599-.1956.338-.4317.5309-.7041-1.5083-1.3064-2.9557-2.3097-4.2979-3.0783-1.2986-.7438-2.4989-1.2688-3.5657-1.6414-.2549-.089-.5-.1709-.7381-.2433z" })); function C() { return e.createElement("svg", { viewBox: "0 0 75 75" }, e.createElement("g", { transform: "translate(0, 45) rotate(-40) translate(-31.543342,-132.63477)" }, e.createElement("path", { fill: "#CCC", stroke: "#000", strokeLinejoin: "round", strokeMiterlimit: "4", d: "m 36.072339,133.16377 h 31.680484 v 32.87415 H 36.072339 c -2.215998,0 -3.999997,-1.784 -3.999997,-4 v -24.87415 c 0,-2.216 1.783999,-4 3.999997,-4 z" }), e.createElement("path", { fill: "#D34A4A", stroke: "#000", strokeLinejoin: "round", strokeMiterlimit: "4", d: "m 67.752823,133.16377 h 31.680483 c 2.216004,0 3.999994,1.784 3.999994,4 v 24.87415 c 0,2.216 -1.78399,4 -3.999994,4 H 67.752823 Z" }))); } function S() { return e.createElement("svg", { viewBox: "0 0 100 100" }, e.createElement("rect", { x: "10", y: "40", height: "50", width: "50", rx: "15", ry: "15", fill: "none", stroke: "#FFF", strokeWidth: "3" }), e.createElement("rect", { x: "40", y: "10", height: "50", width: "50", rx: "15", ry: "15", fill: "none", stroke: "#FFF", strokeWidth: "3" })); } const { onClick: R } = t.Utils.mobile, P = 68; function j(t) { const { dispatch: n, $state: r } = (0, e.useContext)(V); (0, e.useEffect)((() => { t.listen((e => { e.altKey && e.keyCode === P && (e.preventDefault(), e.stopPropagation(), n({ type: "set-tool", name: "draw" })); })); }), []); const s = ["rp-paint-tool"]; "draw" === r.current.tool && s.push("selected"); const o = (0, e.useMemo)((() => R((() => { n({ type: "set-tool", name: "draw" }); }))), []); return e.createElement("button", Object.assign({ className: s.join(" ") }, o), e.createElement("svg", { viewBox: "0 0 100 100" }, E)); } const { onClick: O } = t.Utils.mobile, M = 67, N = 69; function U(t) { const { consumer: n, dispatch: r, $state: s } = (0, e.useContext)(V); (0, e.useEffect)((() => { t.listen((e => { e.altKey && !e.metaKey && e.keyCode === N ? (e.preventDefault(), e.stopPropagation(), r({ type: "set-tool", name: "eraser" })) : e.altKey && !e.metaKey && e.keyCode === M && (e.preventDefault(), e.stopPropagation(), n.record({ type: "clear" }), n.repaint()); })); }), []); const o = ["rp-paint-tool"]; "eraser" === s.current.tool && o.push("selected"); const i = (0, e.useMemo)((() => O((() => { r({ type: "set-tool", name: "eraser" }); }))), []); return e.createElement("button", Object.assign({ className: o.join(" ") }, i), e.createElement(C, null)); } const { between: L } = t.Utils.misc, { onClick: B } = t.Utils.mobile; function T(t) { const [n, r] = (0, e.useState)(!1), { consumer: s, $state: o, dispatch: i } = (0, e.useContext)(V), a = o.current, c = (0, e.useRef)(["#ffffff", "#ff0000", "#1a69b5", "#008000", "#ae81ff", "#ff8000", "#ff0080"]), [l, u] = (0, e.useState)(c.current); c.current = l, (0, e.useEffect)((() => { t.listen((e => { if (e.altKey && !e.metaKey && L(49, e.keyCode, 49 + l.length)) {
        e.preventDefault(), e.stopPropagation();
        const t = { type: "set-stroke-style", strokeStyle: c.current[e.keyCode - 49] };
        s.record(t), i(t);
    }
    else
        e.altKey && "h" === e.key && document.querySelectorAll(".rp-paint-replay"); })); }), []); const h = (0, e.useMemo)((() => B((() => { r((e => !e)); }))), []), p = (0, e.useMemo)((() => ({ onChange: e => { const t = e.currentTarget.value, n = e.currentTarget.name.match(/^palette-(\d+)$/)[1]; u((e => { const r = e.slice(); return r[n] = t, r; })); } })), []); return e.createElement(e.Fragment, null, e.createElement("aside", { className: "rp-paint-palette", style: { display: n ? "block" : "none" } }, l.map(((t, n) => e.createElement("div", { className: "rp-paint-color", key: n }, e.createElement("input", Object.assign({}, p, { name: `palette-${n}`, type: "color", value: t })), e.createElement("kbd", null, n + 1))))), e.createElement("button", Object.assign({ className: "rp-paint-tool rp-paint-format" }, h, { style: { backgroundColor: a.strokeStyle } }))); } const { range: W } = t.Utils.misc, { onClick: q } = t.Utils.mobile; function F(t) { const { consumer: n } = (0, e.useContext)(V), [r, s] = (0, e.useState)(!1), o = (0, e.useRef)([]); (0, e.useEffect)((() => { t.listen((e => { if (e.altKey)
        if ("ArrowDown" === e.key) {
            o.current[n.state.activeSheet] = n.layers.stable.toDataURL();
            const e = { type: "change-sheet", sheet: n.state.activeSheet + 1 };
            n.record(e), n.repaint(!0);
        }
        else if ("ArrowUp" === e.key) {
            if (0 === n.state.activeSheet)
                return;
            o.current[n.state.activeSheet] = n.layers.stable.toDataURL();
            const e = { type: "change-sheet", sheet: n.state.activeSheet - 1 };
            n.record(e), n.repaint(!0);
        } })); }), []); const i = (0, e.useMemo)((() => q((() => { s((e => (e || (o.current[n.state.activeSheet] = n.layers.stable.toDataURL()), !e))); }))), []); return e.createElement(e.Fragment, null, e.createElement("aside", { className: "rp-sheets-dialog", style: { display: r ? "block" : "none" } }, e.createElement("ol", null, W(n.state.numSheets).map((t => e.createElement("li", { className: t === n.state.activeSheet ? "selected" : "", key: t }, e.createElement("img", { src: o.current[t] })))))), e.createElement("button", Object.assign({ className: ["rp-paint-tool"].join(" ") }, i), e.createElement(S, null))); } const { replay: z } = t.Utils.animation, { dragHelperReact: D } = t.Utils.interactivity, { between: K } = t.Utils.misc, { onClick: $ } = t.Utils.mobile; function A() { const { consumer: n } = (0, e.useContext)(V), r = ((0, e.useContext)(t.Player.Context), (0, e.useRef)()), [s, o] = (0, e.useState)(!1), i = (0, e.useRef)([]), a = (0, e.useCallback)((e => { i.current.push(e); }), []); (0, e.useEffect)((() => { const e = e => { if ("p" === e.key)
        return o((e => !e)); "h" === e.key ? H(r.current, ".rp-paint-canvas-container").classList.toggle("visible") : "z" === e.key && e.metaKey && n.record({ type: "undo" }); for (const t of i.current)
        t(e); }; return document.body.addEventListener("keydown", e), () => { document.body.removeEventListener("keydown", e); }; }), [s]); const c = (0, e.useMemo)((() => { let e, t; return D(((n, s) => { const o = function (e) { if (void 0 !== e.offsetLeft && void 0 !== e.offsetTop)
        return { left: e.offsetLeft, top: e.offsetTop, width: e.offsetParent.getBoundingClientRect().width, height: e.offsetParent.getBoundingClientRect().height }; const t = e.getBoundingClientRect(); let n = e; for (; n = n.parentNode;) {
        if (!["absolute", "relative"].includes(getComputedStyle(n).position))
            continue;
        const e = n.getBoundingClientRect();
        return { left: t.left - e.left, top: t.top - e.top, width: e.width, height: e.height };
    } return { left: t.left, top: t.top, width: innerWidth, height: innerHeight }; }(r.current), i = o.left + s.x - e, a = o.top + s.y - t, c = i / o.width * 100, l = a / o.height * 100; e = s.x, t = s.y, Object.assign(r.current.style, { left: `${c}%`, top: `${l}%` }); }), ((n, r) => { e = r.x, t = r.y; })); }), []); return e.createElement("aside", { className: "rp-paint-settings", ref: r, style: { display: s ? "block" : "none" } }, e.createElement("div", Object.assign({ className: "rp-paint-drag-handle" }, c)), e.createElement(j, Object.assign({}, { listen: a })), e.createElement(U, Object.assign({}, { listen: a })), e.createElement(T, Object.assign({}, { listen: a })), e.createElement(F, Object.assign({}, { listen: a }))); } function H(e, t) { if (e)
        return e.matches(t) ? e : H(e.parentNode, t); } const { replay: I } = t.Utils.animation, { dragHelperReact: J } = t.Utils.interactivity, { between: _ } = t.Utils.misc, X = { draw: k, eraser: x }, Y = { tool: "draw", strokeStyle: "#000000", lineWidth: 2 }, { floor: Z, max: G, min: Q } = Math, V = e.createContext(null); function ee(e, t) { switch (t.type) {
        case "set-stroke-style": return Object.assign(Object.assign({}, e), { strokeStyle: t.strokeStyle });
        case "set-tool": return Object.assign(Object.assign({}, e), { tool: t.name });
    } return e; } function te(t) { const r = (0, e.useRef)([]), s = { aid: (0, e.useRef)(), stable: (0, e.useRef)(), temp: (0, e.useRef)() }, [o, i] = (0, e.useReducer)(ee, Y), a = (0, e.useRef)(Y); a.current = o; const c = (0, e.useRef)(new b({ feed: r.current, record(e) { var n; null === (n = t.recorder) || void 0 === n || n.captureAction(e), this.feed.push(e); } })), l = c.current, u = { consumer: c.current, dispatch: i, layers: n(s), $state: a }, h = (0, e.useMemo)((() => Object.assign({ onMouseMove: e => { var t; const r = X[a.current.tool]; null === (t = r.hover) || void 0 === t || t.call(r, { layers: n(s), hit: { x: e.clientX, y: e.clientY } }); } }, J(((e, t) => { var r; const o = X[a.current.tool]; null === (r = o.move) || void 0 === r || r.call(o, { e, hit: t, consumer: l, layers: n(s) }); }), ((e, t) => { var r; const o = X[a.current.tool]; null === (r = o.down) || void 0 === r || r.call(o, { e, hit: t, consumer: l, layers: n(s), state: a.current }); }), (e => { var t; const r = X[a.current.tool]; null === (t = r.up) || void 0 === t || t.call(r, { e, consumer: l, layers: n(s) }); })))), []); return e.useEffect((() => { function e() { for (const e in s) {
        const t = s[e].current, n = t.getBoundingClientRect();
        t.height = n.height, t.width = n.width;
    } l.repaint(!0); } return l.layers = n(s), window.addEventListener("resize", e), e(), () => { window.removeEventListener("resize", e); }; }), [s.temp.current, s.stable.current]), e.createElement("div", { className: "rp-paint-canvas-container" }, e.createElement(V.Provider, { value: u }, e.createElement("canvas", { id: "stable", className: "rp-paint-layer noinput", ref: s.stable }), e.createElement("canvas", Object.assign({ id: "temp", className: "rp-paint-layer" }, h, { ref: s.temp })), e.createElement("canvas", { className: "rp-paint-layer noinput", ref: s.aid }), e.createElement(A, null))); } const { ceil: ne, floor: re, max: se, min: oe } = Math; function ie({ action: e, consume: t, stable: n, state: r, temp: s }) { const { lineWidth: o, strokeStyle: i } = r, a = n.getContext("2d"), c = s.getContext("2d"); switch (e.type) {
        case "change-sheet": return e.sheet >= r.sheets.length && (r.sheets.length = e.sheet), e.sheet !== r.activeSheet && a.clearRect(0, 0, n.width, n.height), r.activeSheet = e.sheet, !0;
        case "set-stroke-style": return a.strokeStyle = r.strokeStyle = c.strokeStyle = e.strokeStyle, !0;
        case "clear": return a.clearRect(0, 0, n.width, n.height), !0;
        case "erase": {
            const t = n.getContext("2d");
            return t.save(), t.beginPath(), t.globalCompositeOperation = "destination-out", t.arc(re(e.x * n.width), re(e.y * n.height), re(e.r * n.width), 0, 2 * Math.PI), t.fill(), t.restore(), !0;
        }
        case "move-to":
            const [l, u] = t({ test: e => "line-to" === e.type }), h = [[e.x, e.y], ...l.map((e => [e.x, e.y]))], p = u ? n : s, d = p.getContext("2d"), { height: m, width: f } = p;
            if (d.lineJoin = d.lineCap = "round", d.strokeStyle = r.strokeStyle, d.lineWidth = r.lineWidth, 1 === h.length)
                d.fillStyle = i, d.fillRect(re(f * h[0][0] - o / 2), re(m * h[0][1] - o / 2), o, o);
            else {
                d.beginPath(), d.moveTo(re(h[0][0] * f), re(h[0][1] * m));
                for (let e = 0, t = h.length; e < t - 1; e++) {
                    const t = h[e], n = h[e + 1], r = t[0] + (n[0] - t[0]) / 2, s = t[1] + (n[1] - t[1]) / 2;
                    d.quadraticCurveTo(re(f * t[0]), re(m * t[1]), re(f * r), re(m * s));
                }
                d.stroke();
            }
            return u;
    } } const { replay: ae } = t.Utils.animation, { between: ce } = t.Utils.misc, { floor: le, max: ue, min: he } = Math, pe = { activeSheet: 0, strokeStyle: "#000", lineWidth: 2, sheets: [] }; function de(n) { var r; const { playback: s, script: o } = (0, t.usePlayer)(), i = (0, e.useRef)(null !== (r = n.replay) && void 0 !== r ? r : []), a = (0, e.useRef)(pe), c = ((0, e.useRef)([{ type: "change-sheet", sheet: 0 }, { type: "set-stroke-style", strokeStyle: "#FFF" }]), { stable: (0, e.useRef)(), temp: (0, e.useRef)() }); return e.useEffect((() => { var e; const t = null !== (e = o.parseStart(n.start)) && void 0 !== e ? e : 0; let r = s.currentTime, l = 0, u = 0; function h(e = s.currentTime, n = !1) { const o = c.stable.current, p = o.getContext("2d"), d = c.temp.current, m = d.getContext("2d"), { lineWidth: f, strokeStyle: y } = a.current; if ((e < r || n) && (l = 0, u = 0, p.clearRect(0, 0, o.width, o.height)), r = e, a.current.repaint = h, m.clearRect(0, 0, d.width, d.height), e < t)
        return; let g = l, v = u, b = null, k = null, w = g; for (; g < i.current.length; ++g) {
        const [n, r] = i.current[g];
        if (v += n, e <= t + v)
            break;
        w = g + 1, "set-stroke-style" === r.type ? k = g : "change-sheet" === r.type && (b = g, u = v - n);
    } function x({ test: e }) { const t = []; for (; g + 1 < w; ++g) {
        const [n, r] = i.current[g + 1];
        if (!e(r))
            return [t, !0];
        v += n, t.push(r);
    } return [t, w === i.current.length]; } for (null !== b && (l = b, null !== k && ie({ action: i.current[k][1], consume: x, stable: o, state: a.current, temp: d })), g = l, v = u; g < w; ++g) {
        const [e, t] = i.current[g];
        v += e;
        if (!ie({ action: t, consume: x, stable: o, state: a.current, temp: d }))
            break;
        l = g + 1, u = v;
    } } function p() { const e = c.stable.current.getBoundingClientRect(); c.temp.current.height = c.stable.current.height = e.height, c.temp.current.width = c.stable.current.width = e.width, h(s.currentTime, !0); } return window.addEventListener("resize", p), s.hub.on("seek", h), s.hub.on("timeupdate", h), p(), () => { window.removeEventListener("resize", p), s.hub.off("seek", h), s.hub.off("timeupdate", h); }; }), [c.stable.current, c.temp.current]), e.createElement("div", { className: "rp-paint-view" }, e.createElement("canvas", { className: "rp-paint-layer noinput", ref: c.temp }), e.createElement("canvas", { className: "rp-paint-layer noinput", ref: c.stable })); } })(), o;
})(); }));


/***/ }),

/***/ "./node_modules/rp-paint/rp-paint.recorder.js":
/*!****************************************************!*\
  !*** ./node_modules/rp-paint/rp-paint.recorder.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! rp-recording */ "rp-recording")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var r = { 359: t => { t.exports = e; }, 687: e => { e.exports = t; } }, a = {};
    function n(e) { var t = a[e]; if (void 0 !== t)
        return t.exports; var c = a[e] = { exports: {} }; return r[e](c, c.exports, n), c.exports; }
    n.d = (e, t) => { for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var c = {};
    return (() => { n.d(c, { default: () => o }); var e = n(359), t = n(687); const r = e.createElement("g", { fill: "#fff" }, e.createElement("path", { d: "m23.2859 93.4398c-.0321-.002-.0563-.0008-.0887-.0029-.3133-.0198-.6378-.0447-.9657-.0753-.328-.0306-.6593-.0666-.9909-.1101-.3318-.0435-.6632-.0936-.988-.1521s-.644-.1257-.951-.2014c-.307-.0756-.6014-.16-.88-.2549-.1392-.0475-.275-.098-.4052-.1507-.1301-.0527-.2545-.1084-.3742-.1666-.1196-.0582-.2338-.1186-.3416-.1826-.1079-.0639-.2101-.1313-.3047-.2013s-.1816-.1425-.2618-.2187c-.0801-.0763-.1531-.1562-.2173-.239l-.1672-.2593c-.047-.0898-.0854-.1829-.1138-.2797-.0286-.0967-.0477-.1972-.0563-.3013-.0085-.1041-.0067-.2113.006-.323.0127-.1118.018-.222.0147-.3289-.0031-.1069-.0145-.2107-.0325-.3129-.018-.102-.0434-.201-.0754-.2984s-.0705-.1925-.1154-.2854c-.0448-.0928-.0956-.1841-.1523-.2724-.0567-.0882-.1187-.1739-.1863-.2578s-.1415-.1652-.2189-.2448c-.0775-.0796-.1592-.158-.2455-.2332-.0864-.0753-.1764-.1477-.2708-.2188-.0942-.0711-.1931-.1401-.2943-.2072-.0419-.0278-.09-.051-.1331-.0782-1.5258 3.321-3.9582 5.3779-8.95801 6.29-.81882.1494-.54858 1.1271 0 1.1271 5.90331 0 12.69441-.0272 17.76821-1.5602z" }), e.createElement("path", { d: "m23.147 78.0639c-3.7321 0-6.8361 2.6364-7.4747 6.1118-.3443 1.2582-.7294 2.3904-1.1966 3.4072.0432.0271.0912.0504.1332.0782.1011.0671.2.136.2943.2072.0943.0711.1843.1435.2707.2187.0863.0752.168.1537.2455.2333.0774.0795.1513.1609.2189.2448s.1296.1696.1863.2578c.0567.0883.1075.1796.1523.2724.0449.0928.0834.188.1154.2854.032.0973.0574.1963.0754.2984s.0294.206.0325.3128c.0033.107-.002.2171-.0147.3289s-.0145.219-.006.3231c.0086.1041.0277.2045.0563.3013.0284.0968.0668.1899.1138.2796.047.0896.1029.1765.1672.2593.0642.0828.1372.1628.2173.239.0802.0763.1672.1488.2618.2188.0946.0699.1969.1373.3047.2013s.222.1243.3416.1825c.1197.0583.2441.1139.3742.1666.1302.0528.266.1033.4052.1507.2786.0949.573.1793.88.255.307.0756.6262.1428.951.2013s.6563.1087.988.1521c.3316.0435.6629.0795.9909.1101.3279.0306.6524.0556.9657.0754.0324.002.0566.0009.0887.0028 2.9268-.8843 5.2842-2.267 6.5652-4.4401.5674-1.0421.8888-2.2334.8888-3.497 0-4.1084-3.3986-7.4388-7.5929-7.4388z" }), e.createElement("path", { d: "m71.302 5.00013c-.1587.0034-.3394.07411-.5029.28538-.232.31688-30.4484 41.40919-37.3275 53.54479.164.0523.332.1059.5014.1651 1.0616.3707 2.235.8774 3.4873 1.5674 1.4894.8207 3.0912 1.9006 4.7534 3.3159 7.5537-11.9997 29.4184-57.63808 29.5882-57.99055.1568-.39472.0022-.67845-.1582-.78806-.0101-.00685-.0209-.01359-.0326-.02029-.0764-.04393-.1857-.08232-.3091-.07967z" }), e.createElement("path", { d: "m32.6403 60.3861c-.1163.2378-.2152.4547-.2957.6475-2.5564 6.1258-6.3889 13.48-7.4496 16.2842 2.033.308 3.799 1.4052 4.962 2.9625 1.9802-2.2656 6.6581-9.0957 10.8541-14.2271.1599-.1956.338-.4317.5309-.7041-1.5083-1.3064-2.9557-2.3097-4.2979-3.0783-1.2986-.7438-2.4989-1.2688-3.5657-1.6414-.2549-.089-.5-.1709-.7381-.2433z" })); class a extends t.ReplayDataRecorder {
        beginRecording() { this.push([0, { type: "change-sheet", sheet: 0 }]), this.push([0, { type: "set-stroke-style", strokeStyle: "#FFF" }]); }
        captureAction(e) { this.manager && !this.manager.paused && this.capture(this.manager.getTime(), e); }
    } const o = { key: "rp-paint", icon: r, name: "Paint", recorder: new a, saveComponent: function (t) { return e.createElement(e.Fragment, null, t.data ? e.createElement("textarea", { readOnly: !0, value: JSON.stringify(t.data) }) : "Brush data not yet available."); } }; })(), c = c.default;
})(); }));


/***/ }),

/***/ "./node_modules/rp-prompt/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rp-prompt/dist/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! liqvid */ "liqvid")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var r = { 153: (e, t, r) => { r.d(t, { Z: () => s }); var n = r(318), o = r.n(n), i = r(433), a = r.n(i)()(o()); a.push([e.id, ".rp-prompt{border-radius:2px;color:#fff;position:absolute;width:35em}.rp-prompt > :first-child,.rp-prompt > .rp-prompt-cue.active{border-radius:2px 2px 0 0}.rp-prompt > :last-child{border-radius:0 0 2px 2px}.rp-prompt > *{display:none}.rp-prompt > .active,.rp-prompt .active ~ *{display:block}.rp-prompt > :not(.active){opacity:.2}.rp-prompt-cue{background:#ffa500;font-family:monospace;font-size:.625em;padding:2px 0 2px 1em}.rp-prompt-line{padding:.1em .5em}.rp-prompt-line:nth-of-type(odd){background:#555}.rp-prompt-line:nth-of-type(even){background:#333}.rp-prompt-measure{display:block !important;padding:.1em .5em}", ""]); const s = a; }, 433: e => { e.exports = function (e) { var t = []; return t.toString = function () { return this.map((function (t) { var r = "", n = void 0 !== t[5]; return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), n && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), n && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r; })).join(""); }, t.i = function (e, r, n, o, i) { "string" == typeof e && (e = [[null, e, void 0]]); var a = {}; if (n)
            for (var s = 0; s < this.length; s++) {
                var c = this[s][0];
                null != c && (a[c] = !0);
            } for (var p = 0; p < e.length; p++) {
            var l = [].concat(e[p]);
            n && a[l[0]] || (void 0 !== i && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = i), r && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = r) : l[2] = r), o && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = o) : l[4] = "".concat(o)), t.push(l));
        } }, t; }; }, 318: e => { e.exports = function (e) { return e[1]; }; }, 767: e => { var t = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable; function o(e) { if (null == e)
            throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e); } e.exports = function () { try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, r = 0; r < 10; r++)
                t["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) { return t[e]; })).join(""))
                return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) { n[e] = e; })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
        }
        catch (o) {
            return !1;
        } }() ? Object.assign : function (e, i) { for (var a, s, c = o(e), p = 1; p < arguments.length; p++) {
            for (var l in a = Object(arguments[p]))
                r.call(a, l) && (c[l] = a[l]);
            if (t) {
                s = t(a);
                for (var u = 0; u < s.length; u++)
                    n.call(a, s[u]) && (c[s[u]] = a[s[u]]);
            }
        } return c; }; }, 945: (e, t, r) => { r(767); var n = r(359), o = 60103; if (60107, "function" == typeof Symbol && Symbol.for) {
            var i = Symbol.for;
            o = i("react.element"), i("react.fragment");
        } var a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, c = { key: !0, ref: !0, __self: !0, __source: !0 }; function p(e, t, r) { var n, i = {}, p = null, l = null; for (n in void 0 !== r && (p = "" + r), void 0 !== t.key && (p = "" + t.key), void 0 !== t.ref && (l = t.ref), t)
            s.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]); if (e && e.defaultProps)
            for (n in t = e.defaultProps)
                void 0 === i[n] && (i[n] = t[n]); return { $$typeof: o, type: e, key: p, ref: l, props: i, _owner: a.current }; } t.jsx = p, t.jsxs = p; }, 637: (e, t, r) => { e.exports = r(945); }, 941: e => { var t = []; function r(e) { for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
                r = n;
                break;
            } return r; } function n(e, n) { for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var c = e[s], p = n.base ? c[0] + n.base : c[0], l = i[p] || 0, u = "".concat(p, " ").concat(l);
            i[p] = l + 1;
            var f = r(u), d = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
            if (-1 !== f)
                t[f].references++, t[f].updater(d);
            else {
                var h = o(d, n);
                n.byIndex = s, t.splice(s, 0, { identifier: u, updater: h, references: 1 });
            }
            a.push(u);
        } return a; } function o(e, t) { var r = t.domAPI(t); r.update(e); return function (t) { if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                return;
            r.update(e = t);
        }
        else
            r.remove(); }; } e.exports = function (e, o) { var i = n(e = e || [], o = o || {}); return function (e) { e = e || []; for (var a = 0; a < i.length; a++) {
            var s = r(i[a]);
            t[s].references--;
        } for (var c = n(e, o), p = 0; p < i.length; p++) {
            var l = r(i[p]);
            0 === t[l].references && (t[l].updater(), t.splice(l, 1));
        } i = c; }; }; }, 765: e => { var t = {}; e.exports = function (e, r) { var n = function (e) { if (void 0 === t[e]) {
            var r = document.querySelector(e);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                try {
                    r = r.contentDocument.head;
                }
                catch (n) {
                    r = null;
                }
            t[e] = r;
        } return t[e]; }(e); if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); n.appendChild(r); }; }, 801: e => { e.exports = function (e) { var t = document.createElement("style"); return e.setAttributes(t, e.attributes), e.insert(t, e.options), t; }; }, 24: (e, t, r) => { e.exports = function (e) { var t = r.nc; t && e.setAttribute("nonce", t); }; }, 836: e => { e.exports = function (e) { var t = e.insertStyleElement(e); return { update: function (r) { !function (e, t, r) { var n = ""; r.supports && (n += "@supports (".concat(r.supports, ") {")), r.media && (n += "@media ".concat(r.media, " {")); var o = void 0 !== r.layer; o && (n += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), n += r.css, o && (n += "}"), r.media && (n += "}"), r.supports && (n += "}"); var i = r.sourceMap; i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(n, e, t.options); }(t, e, r); }, remove: function () { !function (e) { if (null === e.parentNode)
                return !1; e.parentNode.removeChild(e); }(t); } }; }; }, 938: e => { e.exports = function (e, t) { if (t.styleSheet)
            t.styleSheet.cssText = e;
        else {
            for (; t.firstChild;)
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
        } }; }, 995: e => { e.exports = t; }, 359: t => { t.exports = e; } }, n = {};
    function o(e) { var t = n[e]; if (void 0 !== t)
        return t.exports; var i = n[e] = { id: e, exports: {} }; return r[e](i, i.exports, o), i.exports; }
    o.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return o.d(t, { a: t }), t; }, o.d = (e, t) => { for (var r in t)
        o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); };
    var i = {};
    return (() => { o.r(i), o.d(i, { Cue: () => n, Prompt: () => l }); var e = o(637), t = o(359); const r = "rp-prompt"; class n extends t.PureComponent {
        constructor(e) { super(e), this.state = { lines: null }; }
        componentDidMount() { if (!this.props.children)
            return; this.ref.normalize(); const e = []; for (const t of Array.from(this.ref.childNodes)) {
            if (!a(t))
                continue;
            const r = t.wholeText.split(" ");
            let n = r.shift(), o = n;
            t.replaceData(0, t.wholeText.length, o);
            let i = this.ref.getBoundingClientRect().height;
            for (const a of r) {
                t.replaceData(0, t.wholeText.length, `${o} ${a}`);
                const r = this.ref.getBoundingClientRect().height;
                r !== i ? (i = r, e.push(n), n = a) : n += ` ${a}`, o += ` ${a}`;
            }
            e.push(n);
        } this.setState({ lines: e }); }
        render() { if (!this.props.children)
            return " | "; const n = [`${r}-cue`], o = [`${r}-line`]; return this.props.active && (n.push("active"), o.push("active")), (0, e.jsxs)(t.Fragment, { children: [(0, e.jsx)("span", Object.assign({ className: n.join(" ") }, { children: this.props.on }), void 0), this.state.lines ? this.state.lines.map(((t, r) => (0, e.jsx)("div", Object.assign({ className: o.join(" ") }, { children: t }), r))) : (0, e.jsx)("div", Object.assign({ className: `${r}-measure`, ref: e => this.ref = e }, { children: this.props.children }), void 0)] }, void 0); }
    } function a(e) { return e.nodeType === e.TEXT_NODE; } var s = o(995), c = function (e, t) { var r = {}; for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    } return r; }; const { dragHelperReact: p } = s.Utils.interactivity; function l(r) { const { script: n } = (0, s.usePlayer)(), o = (0, t.useRef)(), { children: i } = r, a = c(r, ["children"]), [l, u] = (0, t.useState)(t.Children.toArray(i).map((e => e.props.children && n.markerNumberOf(e.props.on) <= n.markerIndex)).lastIndexOf(!0)); (0, t.useEffect)((() => { o.current.style.left || Object.assign(o.current.style, { left: "0%", top: "0%" }), n.hub.on("markerupdate", (() => { u(t.Children.toArray(i).map((e => e.props.children && n.markerNumberOf(e.props.on) <= n.markerIndex)).lastIndexOf(!0)); })); })); const f = (0, t.useMemo)((() => { let e, t; return p(((r, n) => { const i = function (e) { if (void 0 !== e.offsetLeft && void 0 !== e.offsetTop)
        return { left: e.offsetLeft, top: e.offsetTop, width: e.offsetParent.getBoundingClientRect().width, height: e.offsetParent.getBoundingClientRect().height }; const t = e.getBoundingClientRect(); let r = e; for (; r = r.parentNode;) {
        if (!["absolute", "relative"].includes(getComputedStyle(r).position))
            continue;
        const e = r.getBoundingClientRect();
        return { left: t.left - e.left, top: t.top - e.top, width: e.width, height: e.height };
    } return { left: t.left, top: t.top, width: innerWidth, height: innerHeight }; }(o.current), a = i.left + n.x - e, s = i.top + n.y - t, c = a / i.width * 100, p = s / i.height * 100; e = n.x, t = n.y, Object.assign(o.current.style, { left: `${c}%`, top: `${p}%` }); }), ((r, n) => { e = n.x, t = n.y; })); }), []); return (0, e.jsx)("div", Object.assign({ className: "rp-prompt" }, a, f, { ref: o }, { children: t.Children.map(r.children, ((e, r) => t.cloneElement(e, { active: l === r }))) }), void 0); } var u = o(941), f = o.n(u), d = o(836), h = o.n(d), m = o(765), v = o.n(m), y = o(24), g = o.n(y), b = o(801), x = o.n(b), O = o(938), j = o.n(O), w = o(153), P = {}; P.styleTagTransform = j(), P.setAttributes = g(), P.insert = v().bind(null, "head"), P.domAPI = h(), P.insertStyleElement = x(); f()(w.Z, P); w.Z && w.Z.locals && w.Z.locals; })(), i;
})(); }));


/***/ }),

/***/ "./src/@development/controls.tsx":
/*!***************************************!*\
  !*** ./src/@development/controls.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controls": () => (/* binding */ controls)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _lib_ShowMarkerName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/ShowMarkerName */ "./lib/ShowMarkerName.tsx");
/* harmony import */ var rp_codemirror_recorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-codemirror/recorder */ "./node_modules/rp-codemirror/rp-codemirror.recorder.js");
/* harmony import */ var rp_codemirror_recorder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_codemirror_recorder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rp_cursor_recorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rp-cursor/recorder */ "./node_modules/rp-cursor/rp-cursor.recorder.js");
/* harmony import */ var rp_cursor_recorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rp_cursor_recorder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rp_paint_recorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rp-paint/recorder */ "./node_modules/rp-paint/rp-paint.recorder.js");
/* harmony import */ var rp_paint_recorder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rp_paint_recorder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rp_recording__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rp-recording */ "rp-recording");
/* harmony import */ var rp_recording__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rp_recording__WEBPACK_IMPORTED_MODULE_5__);






const controls = [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_ShowMarkerName__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_recording__WEBPACK_IMPORTED_MODULE_5__.RecordingControl, { plugins: [(rp_codemirror_recorder__WEBPACK_IMPORTED_MODULE_2___default()), (rp_cursor_recorder__WEBPACK_IMPORTED_MODULE_3___default()), (rp_paint_recorder__WEBPACK_IMPORTED_MODULE_4___default())] })];


/***/ }),

/***/ "./src/@development/media-url.ts":
/*!***************************************!*\
  !*** ./src/@development/media-url.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MEDIA_URL": () => (/* binding */ MEDIA_URL)
/* harmony export */ });
const MEDIA_URL = ".";


/***/ }),

/***/ "./src/@development/prompts.tsx":
/*!**************************************!*\
  !*** ./src/@development/prompts.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeMirrorPrompt": () => (/* binding */ CodeMirrorPrompt),
/* harmony export */   "CursorPrompt": () => (/* binding */ CursorPrompt),
/* harmony export */   "IntroPrompt": () => (/* binding */ IntroPrompt),
/* harmony export */   "PaintPrompt": () => (/* binding */ PaintPrompt),
/* harmony export */   "PlaybackPrompt": () => (/* binding */ PlaybackPrompt),
/* harmony export */   "PlayerPrompt": () => (/* binding */ PlayerPrompt),
/* harmony export */   "RecordingPrompt": () => (/* binding */ RecordingPrompt),
/* harmony export */   "ScriptPrompt": () => (/* binding */ ScriptPrompt),
/* harmony export */   "UtilsPrompt": () => (/* binding */ UtilsPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var rp_prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rp-prompt */ "./node_modules/rp-prompt/dist/index.js");
/* harmony import */ var rp_prompt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rp_prompt__WEBPACK_IMPORTED_MODULE_1__);


const IntroPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/" }, { children: ["Liqvid is a library for making interactive videos using the same tools you use to make webpages: HTML, CSS, and Javascript in React.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "The video you are watching is not actually a video file, it's HTML and CSS synced up to an audio track using a large quantity of Javascript. For example,"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/fiddle" }, { children: "try changing the background color of this video, or the subtitle. I'll pause the video so you can try that out; just click the play button, or click outside of the white box, to continue." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/pause" }, { children: "Even without interactivity," })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/pros" }, { children: "this format is much smaller than a traditional video, and the video quality is perfect. It's also much easier to" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/edit" }, { children: ["develop and edit videos\u2014even after a video's recorded, you can go and make changes just by changing a few lines of CSS. Making it easier to develop videos was really my original motivation for developing this library, and the interactivity was a happy side effect. In exchange, you have to deal with browser inconsistencies, which is so much fun.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "I use this for"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/epiplexis" }, { children: ["my math site, and you can see more interesting examples there.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "This video is a tutorial for if you want to start making these yourself. It does assume you're pretty comfortable with web development. To get started,"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/get-started" }, { children: "you should clone the repository for this video, and then you can see how this works from the source. The rest of this video will make a lot more sense if you're following along in the source code." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "intro/discord" }, { children: ["I've also created a Discord and you can ask questions there.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "In the rest of this video, I'll show off some of the cool things you can do with this, using the different packages that are available for it. So put the flashy stuff up front. And then I'll go through the fundamental concepts behind it."] }))] })));
const CodeMirrorPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "codemirror/" }, { children: "So here is an interactive coding lesson. I'm typing into the Code tab, and then in the Playground tab is another editor where you can experiment with the code yourself. The copy button will copy whatever's in my buffer into yours. And then you can run the code and clear the output console." })) })));
const CursorPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "cursor/" }, { children: "You can record your cursor pointing to something on the screen while you're talking." })) })));
const PaintPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "paint/" }, { children: ["There's also a package for freehand drawing. You can change colors, erase, and so on.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "So now let me go through how this all works."] })) })));
const PlaybackPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "playback/" }, { children: "The core of the library is the Playback class. This is just" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "playback/loop" }, { children: "a standard requestAnimationFrame loop that simulates a media element being played. It" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "playback/html" }, { children: "imitates the HTMLMediaElement interface to a certain extent, although it doesn't actually implement it. And it dispatches" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "playback/hub" }, { children: "events through an EventEmitter." }))] })));
const ScriptPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "script/" }, { children: "Built on top of Playback is the Script class. A Script takes a Playback and" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "script/markers" }, { children: "partitions the playback time into named segments called *markers*. That way you can say \"start this animation at marker 'my-awesome-animation'\" rather than \"start this animation at 5:41\"." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "script/repeat" }, { children: "Markers are allowed to repeat, but they can't overlap." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "script/ew" }, { children: "There's keyboard controls for this: pressing E will go advance the script by one marker, pressing W will go back one marker. This is very handy when you're developing a ractive, and you'll use it when recording." }))] })));
const PlayerPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "player/" }, { children: "So if those two classes are the engine of the library, the Player class is the shiny exterior." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "player/gui" }, { children: "This is a big fancy GUI that imitates a web video player." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "player/react" }, { children: "It's important to point out this is the first place we use React. This is a React component, this whole library's written in React, and so are all the plugins for it. Eventually it would be good to have a port to Vue and Web Components, etc. But Playback and Script aren't at all aware of React." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "player/hook" }, { children: "This also functions as the global context for the video, you can access it with the usePlayer() hook" }))] })));
const UtilsPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "utils/" }, { children: "There's a large library of utility helpers. Here I'll just mention a few of them, and again look in the source code for how to use these." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "utils/animate" }, { children: "First, Utils.animation.animate is a helper for creating animations. So" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "utils/animate/fire" }, { children: "here's an animated duck." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "utils/authoring" }, { children: "The ones you'll be using the most often are during and from. \"From\" will tell a piece of content to appear at a certain marker, and optionally go away at a certain marker. So like I just revealed this list item; this works a lot like PowerPoint slides. \"During\" is, you give it a prefix, and the content will be visible as long as the marker name starts with that prefix." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "utils/drag" }, { children: ["And then there's also a helper for drag functionality. So here's a pig that you can drag around the screen. I'll give you a few seconds to try that out (or you might want to pause the video).", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "So once you've coded your ractive, you want to record it."] }))] })));
const RecordingPrompt = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Prompt, Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "recording/" }, { children: "So recording is where you record your audio while advancing through the markers, again much like a slide show, so that the audio and markers get synced up." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "recording/npm" }, { children: "Recording functionality is in a separate package called rp-recording." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "recording/control" }, { children: "This is implemented as a custom control, so see index.tsx of this video for how to enable it." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "recording/https" }, { children: "Beware that in order to record audio you have to access the page over HTTPS;" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "recording/link" }, { children: "here's a useful link on how to get that set up on a local domain." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_prompt__WEBPACK_IMPORTED_MODULE_1__.Cue, Object.assign({ on: "recording/plugin" }, { children: "Then there's a plugin API for custom recorders. So the coding, cursor movement, and drawing functionality that we saw at the beginning of the video were all examples of that." }))] })));


/***/ }),

/***/ "./src/CodeMirror.tsx":
/*!****************************!*\
  !*** ./src/CodeMirror.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeMirrorSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rp_codebooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rp-codebooth */ "./node_modules/rp-codebooth/rp-codebooth.js");
/* harmony import */ var rp_codebooth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rp_codebooth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_JSInterpreter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/JSInterpreter */ "./lib/JSInterpreter.ts");
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");



const { getJSON } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.json;



function CodeMirrorSlide() {
    const interpreter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!interpreter.current) {
        interpreter.current = new _lib_JSInterpreter__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-codemirror", "data-during": "codemirror/" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_codebooth__WEBPACK_IMPORTED_MODULE_3__.CodeBooth, { interpreter: interpreter.current, mode: "javascript", replay: getJSON("recordings").code, start: "codemirror/", theme: "monokai" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_5__.CodeMirrorPrompt, {})] })));
}


/***/ }),

/***/ "./src/Cursor.tsx":
/*!************************!*\
  !*** ./src/Cursor.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CursorSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-cursor */ "./node_modules/rp-cursor/rp-cursor.js");
/* harmony import */ var rp_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _env_media_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/media-url */ "./src/@development/media-url.ts");
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");


const { getJSON } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.json;




function CursorSlide() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-cursor", "data-during": "cursor/" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Link__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ href: "https://www.npmjs.com/package/rp-cursor" }, { children: "rp-cursor" })), " package lets you record mouse movements, in case you want to point to something on the screen."] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((rp_cursor__WEBPACK_IMPORTED_MODULE_2___default()), { src: `${_env_media_url__WEBPACK_IMPORTED_MODULE_4__.MEDIA_URL}/img/cursor.png`, start: "cursor/", end: "paint/", replay: getJSON("recordings").cursor }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_5__.CursorPrompt, {})] })));
}


/***/ }),

/***/ "./src/Intro.tsx":
/*!***********************!*\
  !*** ./src/Intro.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _env_media_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/media-url */ "./src/@development/media-url.ts");
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");



const { during, from } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.authoring, { between } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.misc;



function Intro() {
    const player = (0,liqvid__WEBPACK_IMPORTED_MODULE_2__.usePlayer)();
    const onChangeColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e) => {
        player.canvas.style.backgroundColor = e.currentTarget.value;
    }, []);
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("A library for interactive videos in HTML/CSS/JS");
    const onChangeText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e) => {
        setText(e.currentTarget.value);
    }, []);
    const m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => player.script.parseStart("intro/pause"), []);
    const prev = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(player.playback.currentTime);
    const EPSILON = 300;
    (0,liqvid__WEBPACK_IMPORTED_MODULE_2__.useTime)(t => {
        if (between(m - EPSILON, prev.current, m) && between(m, t, m + EPSILON)) {
            player.playback.pause();
        }
        prev.current = t;
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(liqvid__WEBPACK_IMPORTED_MODULE_2__.IdMap, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-intro" }, during("intro/"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { alt: "Liqvid", src: `${_env_media_url__WEBPACK_IMPORTED_MODULE_4__.MEDIA_URL}/img/logo.png` }), "Liqvid"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: text }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "box", id: "fiddle" }, from("intro/fiddle"), { onMouseUp: liqvid__WEBPACK_IMPORTED_MODULE_2__.Player.preventCanvasClick }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Try changing the background color:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { onChange: onChangeColor, type: "color" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Or the subtitle:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", { onBlur: player.resumeKeyCapture, onFocus: player.suspendKeyCapture, onChange: onChangeText, value: text })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "box" }, from("intro/pros"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Much smaller than a traditional video file" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", Object.assign({}, from("intro/edit"), { children: "Very easy to make edits\u2014no waiting for video export" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", Object.assign({}, from("intro/epiplexis"), { children: ["More examples at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Link__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ href: "https://epiplexis.xyz" }, { children: "Epiplexis" }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "box", id: "get-started" }, from("intro/get-started"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Clone this tutorial: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Link__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ href: "https://github.com/ysulyma/lv-tutorial" }, { children: "https://github.com/ysulyma/lv-tutorial" }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", Object.assign({}, from("intro/discord"), { children: ["Discussion: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Link__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ href: "https://discord.gg/u8Qab99zHx" }, { children: "https://discord.gg/u8Qab99zHx" }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_5__.IntroPrompt, {})] })) }));
}


/***/ }),

/***/ "./src/Paint.tsx":
/*!***********************!*\
  !*** ./src/Paint.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaintSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_paint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-paint */ "./node_modules/rp-paint/rp-paint.js");
/* harmony import */ var rp_paint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_paint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");


const { getJSON } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.json;


function PaintSlide() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-paint", "data-during": "paint/" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_paint__WEBPACK_IMPORTED_MODULE_2__.PaintReplay, { replay: getJSON("recordings").paint, start: "paint/" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_3__.PaintPrompt, {})] })));
}


/***/ }),

/***/ "./src/PlaybackSlide.tsx":
/*!*******************************!*\
  !*** ./src/PlaybackSlide.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaybackSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");


const { during, from } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;


function PlaybackSlide() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-playback" }, during("playback/"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Playback" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({}, from("playback/loop"), { children: "animation loop simulating a media element advancing in time" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("playback/html"), { children: ["imitates (but does not fully implement) the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Link__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement" }, { children: "HTMLMediaElement" })), " interface"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("playback/hub"), { children: ["emits events through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Link__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ href: "https://nodejs.org/api/events.html#events_class_eventemitter" }, { children: "EventEmitter" })), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "playback.hub" })] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_3__.PlaybackPrompt, {})] })));
}


/***/ }),

/***/ "./src/PlayerSlide.tsx":
/*!*****************************!*\
  !*** ./src/PlayerSlide.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");


const { during, from } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;

function PlayerSlide() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-player" }, during("player/"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Player" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({}, from("player/gui"), { children: "GUI: scrubber bar, controls, bells, whistles" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("player/react"), { children: ["depends on React (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "Playback" }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "Script" }), " do not!)"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("player/hook"), { children: ["access with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "usePlayer()" })] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_2__.PlayerPrompt, {})] })));
}


/***/ }),

/***/ "./src/RecordingSlide.tsx":
/*!********************************!*\
  !*** ./src/RecordingSlide.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaybackSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");


const { during, from } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;

function PlaybackSlide() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-recording" }, during("recording/"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Recording" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("recording/npm"), { children: ["recording functionality provided by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: "https://www.npmjs.com/package/rp-recording", target: "_blank", rel: "noreferrer" }, { children: "rp-recording" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("recording/control"), { children: ["implemented as custom control, c.f. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "index.tsx" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("recording/https"), { children: ["can only record audio over HTTPS!", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ id: "recording-https-link" }, from("recording/link"), { href: "https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/", target: "_blank", rel: "noreferrer" }, { children: "How to get HTTPS working on your local development environment" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({}, from("recording/plugin"), { children: "plugin API" }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_2__.RecordingPrompt, {})] })));
}


/***/ }),

/***/ "./src/ScriptSlide.tsx":
/*!*****************************!*\
  !*** ./src/ScriptSlide.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScriptSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");


const { during, from } = liqvid__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;

function ScriptSlide() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-script" }, during("script/"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Script" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("script/markers"), { children: ["partitions a Playback into named segments called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dfn", { children: "markers" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({}, from("script/repeat"), { children: "markers can repeat (experimental), cannot overlap" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("script/ew"), { children: ["press ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", { children: "E" }), " to advance a marker, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", { children: "W" }), " to go back one marker"] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_2__.ScriptPrompt, {})] })));
}


/***/ }),

/***/ "./src/UtilsSlide.tsx":
/*!****************************!*\
  !*** ./src/UtilsSlide.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UtilsSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_media_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/media-url */ "./src/@development/media-url.ts");
/* harmony import */ var _env_prompts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/prompts */ "./src/@development/prompts.tsx");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");



const { animate, bezier, easings } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.animation, { during, from } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.authoring, { dragHelperReact } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.interactivity, { constrain } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.misc;



const rotate = animate({
    endValue: 2 * Math.PI,
    startTime: _markers__WEBPACK_IMPORTED_MODULE_5__.script.parseStart("utils/animate/fire"),
    duration: 1000,
    easing: bezier(...easings.easeInSine)
});
function UtilsSlide() {
    const player = (0,liqvid__WEBPACK_IMPORTED_MODULE_2__.usePlayer)();
    const duck = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,liqvid__WEBPACK_IMPORTED_MODULE_2__.useTime)(p => {
        duck.current.style.left = `${35 + 15 * Math.cos(p)}%`;
        duck.current.style.top = `${15 - 12.5 * Math.sin(p)}%`;
    }, rotate, []);
    const pig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const offset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({ x: 0, y: 0 });
    const pigEvents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => dragHelperReact((e, hit) => {
        const left = constrain(0, hit.x - offset.current.x - player.canvas.offsetLeft, player.canvas.offsetWidth - pig.current.offsetWidth) / player.canvas.offsetWidth;
        const top = constrain(0, hit.y - offset.current.y - player.canvas.offsetTop, player.canvas.offsetHeight - pig.current.offsetHeight) / player.canvas.offsetHeight;
        Object.assign(pig.current.style, {
            left: `${left * 100}%`,
            top: `${top * 100}%`
        });
    }, (e, hit) => {
        e.preventDefault();
        const pigDims = pig.current.getBoundingClientRect();
        offset.current.x = hit.x - pigDims.left;
        offset.current.y = hit.y - pigDims.top;
        document.body.classList.add("dragging");
    }, () => {
        document.body.classList.remove("dragging");
    }), []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({ id: "sec-utils" }, during("utils/"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Utils" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("utils/animate"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "Utils.animation.animate" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { alt: "A cartoon duck", id: "utils-duck", src: `${_env_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/img/duck.svg`, ref: duck })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({}, from("utils/authoring"), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "Utils.authoring.{during, from}" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", Object.assign({}, from("utils/drag"), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "Utils.interactivity.dragHelperReact" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", Object.assign({ alt: "A cartoon pig", className: "draggable", id: "utils-pig", src: `${_env_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/img/pig.svg`, ref: pig }, pigEvents))] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_env_prompts__WEBPACK_IMPORTED_MODULE_4__.UtilsPrompt, {})] })));
}


/***/ }),

/***/ "./src/markers.ts":
/*!************************!*\
  !*** ./src/markers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlights": () => (/* binding */ highlights),
/* harmony export */   "markers": () => (/* binding */ markers),
/* harmony export */   "playback": () => (/* binding */ playback),
/* harmony export */   "script": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_0__);

const markers = [
    ["intro/", "0:20.955"],
    ["intro/fiddle", "0:10.532"],
    ["intro/pause", "0:02.86"],
    ["intro/pros", "0:07.839"],
    ["intro/edit", "0:23.233"],
    ["intro/epiplexis", "0:13.506"],
    ["intro/get-started", "0:10.553"],
    ["intro/discord", "0:18.732"],
    ["codemirror/", "1:17.46"],
    ["cursor/", "0:19.917"],
    ["paint/", "0:41.562"],
    ["playback/", "0:05.529"],
    ["playback/loop", "0:06.91"],
    ["playback/html", "0:11.408"],
    ["playback/hub", "0:18.520"],
    ["script/", "0:06.785"],
    ["script/markers", "0:18.733"],
    ["script/repeat", "0:04.978"],
    ["script/ew", "0:13.193"],
    ["player/", "0:07.99"],
    ["player/gui", "0:04.626"],
    ["player/react", "0:22.742"],
    ["player/hook", "0:12.14"],
    ["utils/", "0:10.142"],
    ["utils/animate", "0:06.258"],
    ["utils/animate/fire", "0:02.996"],
    ["utils/authoring", "0:32.398"],
    ["utils/drag", "0:16.945"],
    ["recording/", "0:09.351"],
    ["recording/npm", "0:04.425"],
    ["recording/control", "0:09.547"],
    ["recording/https", "0:09.489"],
    ["recording/link", "0:05.975"],
    ["recording/plugin", "0:12.37"]
];
const script = new liqvid__WEBPACK_IMPORTED_MODULE_0__.Script(markers);
const playback = script.playback;
const highlights = [
    { title: "Codebooth", time: script.parseStart("codemirror/") },
    { title: "Cursor", time: script.parseStart("cursor/") },
    { title: "Paint", time: script.parseStart("paint/") },
    { title: "Playback", time: script.parseStart("playback/") },
    { title: "Script", time: script.parseStart("script/") },
    { title: "Player", time: script.parseStart("player/") },
    { title: "Utils", time: script.parseStart("utils/") },
    { title: "Recording", time: script.parseStart("recording/") }
];


/***/ }),

/***/ "./src/objects.ts":
/*!************************!*\
  !*** ./src/objects.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "dfn-ractives": {
        "data-from-first": "intro/ractives",
        "style": {
            "color": "#333",
            "fontFamily": "Alegreya",
            "fontSize": "2rem",
            "left": "51%",
            "position": "absolute",
            "top": "29%"
        }
    },
    "diamond-age": {
        "data-during": "intro/diamond-age",
        "style": {
            "height": "50%",
            "left": "70%",
            "position": "absolute",
            "top": "35%"
        }
    }
});


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "liqvid":
/*!*************************!*\
  !*** external "Liqvid" ***!
  \*************************/
/***/ ((module) => {

module.exports = Liqvid;

/***/ }),

/***/ "rp-recording":
/*!******************************!*\
  !*** external "RPRecording" ***!
  \******************************/
/***/ ((module) => {

module.exports = RPRecording;

/***/ }),

/***/ "ractive-player":
/*!********************************!*\
  !*** external "RactivePlayer" ***!
  \********************************/
/***/ ((module) => {

module.exports = RactivePlayer;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_media_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/media-url */ "./src/@development/media-url.ts");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects */ "./src/objects.ts");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Intro */ "./src/Intro.tsx");
/* harmony import */ var _CodeMirror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CodeMirror */ "./src/CodeMirror.tsx");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cursor */ "./src/Cursor.tsx");
/* harmony import */ var _Paint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Paint */ "./src/Paint.tsx");
/* harmony import */ var _PlaybackSlide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlaybackSlide */ "./src/PlaybackSlide.tsx");
/* harmony import */ var _ScriptSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScriptSlide */ "./src/ScriptSlide.tsx");
/* harmony import */ var _PlayerSlide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlayerSlide */ "./src/PlayerSlide.tsx");
/* harmony import */ var _UtilsSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UtilsSlide */ "./src/UtilsSlide.tsx");
/* harmony import */ var _RecordingSlide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RecordingSlide */ "./src/RecordingSlide.tsx");
/* harmony import */ var _env_controls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @env/controls */ "./src/@development/controls.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types */ "./src/types.ts");



const { loadAllJSON } = liqvid__WEBPACK_IMPORTED_MODULE_2__.Utils.json;













function Tutorial() {
    const thumbs = {
        frequency: 1,
        path: `${_env_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/thumbs/%s.png`,
        highlights: _markers__WEBPACK_IMPORTED_MODULE_4__.highlights
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(liqvid__WEBPACK_IMPORTED_MODULE_2__.Player, Object.assign({ controls: _env_controls__WEBPACK_IMPORTED_MODULE_15__.controls, script: _markers__WEBPACK_IMPORTED_MODULE_4__.script, thumbs: thumbs }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(liqvid__WEBPACK_IMPORTED_MODULE_2__.IdMap, Object.assign({ map: _objects__WEBPACK_IMPORTED_MODULE_5__["default"] }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(liqvid__WEBPACK_IMPORTED_MODULE_2__.Audio, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", { src: `${_env_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/audio/audio.webm`, type: "audio/webm" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", { src: `${_env_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/audio/audio.mp4`, type: "audio/mp4" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Intro__WEBPACK_IMPORTED_MODULE_6__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CodeMirror__WEBPACK_IMPORTED_MODULE_7__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cursor__WEBPACK_IMPORTED_MODULE_8__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Paint__WEBPACK_IMPORTED_MODULE_9__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaybackSlide__WEBPACK_IMPORTED_MODULE_10__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ScriptSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlayerSlide__WEBPACK_IMPORTED_MODULE_12__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UtilsSlide__WEBPACK_IMPORTED_MODULE_13__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RecordingSlide__WEBPACK_IMPORTED_MODULE_14__["default"], {})] })) })));
}
loadAllJSON().then(() => {
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tutorial, {}), document.querySelector("main"));
});


})();

/******/ })()
;