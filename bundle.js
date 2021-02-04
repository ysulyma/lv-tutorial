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
/* harmony export */   "default": () => /* binding */ JSInterpreter
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
/* harmony export */   "default": () => /* binding */ Link
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
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
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", Object.assign({ onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick, target: "_blank" }, attrs), children);
}


/***/ }),

/***/ "./lib/rebind-arrow-keys.ts":
/*!**********************************!*\
  !*** ./lib/rebind-arrow-keys.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((player) => {
    const { keymap, script } = player;
    for (const h of keymap.getHandlers("ArrowLeft"))
        keymap.unbind("ArrowLeft", h);
    for (const h of keymap.getHandlers("ArrowRight"))
        keymap.unbind("ArrowRight", h);
    keymap.bind("ArrowRight", script.forward);
});


/***/ }),

/***/ "./lib/seekonload.ts":
/*!***************************!*\
  !*** ./lib/seekonload.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_0__);

const { timeRegexp } = ractive_player__WEBPACK_IMPORTED_MODULE_0__.Utils.time;
const rgx = new RegExp("(?:^\\?|&)t=(" +
    timeRegexp.toString().replace(/^\/\^|\$\/$/g, "") +
    ")");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((playback) => {
    const $_ = parent.location.search.match(rgx);
    if ($_) {
        playback.seek($_[1]);
    }
});


/***/ }),

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/***/ ((module) => {


var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C(aA1) { return 3.0 * aA1; }
function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }
function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
module.exports = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
    }
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function BezierEasing(x) {
        if (x === 0) {
            return 0;
        }
        if (x === 1) {
            return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
    };
};


/***/ }),

/***/ "./node_modules/rp-codebooth/rp-codebooth.js":
/*!***************************************************!*\
  !*** ./node_modules/rp-codebooth/rp-codebooth.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (t, e) {  true ? module.exports = e(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (t, e) { return (() => { var r = { 926: t => { function e(t, e, r, n, o, s, i) { try {
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
            return L();
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
        var x = Object.getPrototypeOf, w = x && x(x(P([])));
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
        function P(t) { if (t) {
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
        } return { next: L }; }
        function L() { return { value: e, done: !0 }; }
        return g.prototype = E.constructor = v, v.constructor = g, g.displayName = c(v, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name)); }, t.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, c(t, a, "GeneratorFunction")), t.prototype = Object.create(E), t; }, t.awrap = function (t) { return { __await: t }; }, C(O.prototype), O.prototype[i] = function () { return this; }, t.AsyncIterator = O, t.async = function (e, r, n, o, s) { void 0 === s && (s = Promise); var i = new O(l(e, r, n, o), s); return t.isGeneratorFunction(r) ? i : i.next().then((function (t) { return t.done ? t.value : i.next(); })); }, C(E), c(E, a, "Generator"), E[s] = function () { return this; }, E.toString = function () { return "[object Generator]"; }, t.keys = function (t) { var e = []; for (var r in t)
            e.push(r); return e.reverse(), function r() { for (; e.length;) {
            var n = e.pop();
            if (n in t)
                return r.value = n, r.done = !1, r;
        } return r.done = !0, r; }; }, t.values = P, N.prototype = { constructor: N, reset: function (t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t)
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
            } throw new Error("illegal catch attempt"); }, delegateYield: function (t, r, n) { return this.delegate = { iterator: P(t), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = e), y; } }, t;
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
        var n = r(888), o = r(576), s = r(916);
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
        } c.setState((t => ({ messages: t.messages.concat(n) }))); }), []), E = (0, n.useCallback)((() => c.setState({ messages: [] })), []), C = (0, n.useMemo)((() => d(v)), []), O = (0, n.useMemo)((() => d(b)), []), j = (0, n.useMemo)((() => d(w)), []), S = (0, n.useMemo)((() => d(E)), []), k = (0, n.useMemo)((() => ({ "Cmd-Enter": w, "Ctrl-Enter": w, "Cmd-K": E })), []); return f.className || (f.className = ""), f.className += ` rp-codebooth active-${g}`, n.createElement("div", Object.assign({}, f), i ? n.createElement(s.CodeEditor, { className: "code-playground", keyMap: k, mode: r, recorder: i, ref: m, theme: u }) : n.createElement(n.Fragment, null, n.createElement(s.CodeReplay, { className: "code-replay", command: x, keyMap: k, mode: r, ref: y, replay: a, start: "codemirror/", theme: u }), n.createElement(s.CodeEditor, { className: "code-playground", keyMap: k, mode: r, ref: m, theme: u })), n.createElement("div", { onMouseUp: o.Player.preventCanvasClick }, n.createElement("button", Object.assign({ className: "button-replay" }, C), "Code"), n.createElement("button", Object.assign({ className: "button-playground" }, C), "Playground"), n.createElement("button", Object.assign({ className: "button-copy" }, O), "Copy"), n.createElement("button", Object.assign({ className: "button-run" }, j, { title: "Cmd+Enter" }), "Run"), n.createElement("button", Object.assign({ className: "button-clear" }, S, { title: "Cmd+K" }), "Clear")), n.createElement(h, null)); }
    }, 316: (t, e, r) => {
        "use strict";
        var n = r(757), o = r(926), s = r(154);
        function i(t) { return t && "object" == typeof t && "default" in t ? t : { default: t }; }
        var a = i(n), c = i(o), l = i(s);
        e.$e = function (t, e) { return function (r, n, o) { return Object.assign({}, t, e(r, n, o)); }; };
    }, 576: t => {
        "use strict";
        t.exports = e;
    }, 888: e => {
        "use strict";
        e.exports = t;
    } }, n = {}; function o(t) { if (n[t])
    return n[t].exports; var e = n[t] = { exports: {} }; return r[t].call(e.exports, e, e.exports, o), e.exports; } return o.d = (t, e) => { for (var r in e)
    o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] }); }, o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), o.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, o(996); })(); }));


/***/ }),

/***/ "./node_modules/rp-cursor/rp-cursor.js":
/*!*********************************************!*\
  !*** ./node_modules/rp-cursor/rp-cursor.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var r = { 838: (e, t, r) => { r.r(t), r.d(t, { default: () => s }); var o = r(888), n = r(576); const { replay: a } = n.Utils.animation, { between: c } = n.Utils.misc; function s(e) { const { playback: t, script: r } = (0, n.usePlayer)(), s = o.useRef(), i = r.parseStart(e.start), u = r.parseEnd(e.end); o.useEffect((() => { const { display: r } = s.current.style; s.current.style.display = "block"; const { height: o, width: n } = s.current.getBoundingClientRect(); s.current.style.display = r; const c = a({ data: e.replay, start: i, end: u, active: ([e, t]) => { Object.assign(s.current.style, { opacity: 1, left: `calc(${e}% - ${n / 2}px)`, top: `calc(${t}% - ${o / 2}px)` }); }, inactive: () => { s.current.style.opacity = "0"; }, compressed: !0 }); return t.hub.on("seek", c), t.hub.on("timeupdate", c), c(t.currentTime), () => { t.hub.off("seek", c), t.hub.off("timeupdate", c); }; }), [s.current]); const p = { pointerEvents: "none", position: "absolute", zIndex: 1e3 }; return c(i, t.currentTime, u) && (p.opacity = 0), o.createElement("img", { className: "rp-cursor", ref: s, src: e.src, style: p }); } }, 576: e => { e.exports = t; }, 888: t => { t.exports = e; } }, o = {};
    function n(e) { if (o[e])
        return o[e].exports; var t = o[e] = { exports: {} }; return r[e](t, t.exports, n), t.exports; }
    return n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t; }, n.d = (e, t) => { for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n(838);
})(); }));


/***/ }),

/***/ "./node_modules/rp-paint/rp-paint.js":
/*!*******************************************!*\
  !*** ./node_modules/rp-paint/rp-paint.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var n = { 829: (e, t, n) => { n.r(t), n.d(t, { PaintCanvas: () => ne, PaintReplay: () => me }); var r = n(888), s = n(576); function o(e) { const t = {}; for (let n in e)
            t[n] = e[n].current; return t; } const i = { type: "change-sheet", preprocess(e) { return this.state.activeSheet = e.sheet, !0; }, process(e) { const { state: t } = this; if (e.sheet >= this.state.numSheets && (this.state.numSheets = e.sheet + 1), e.sheet !== this.state.activeSheet) {
                const [e, t] = this.consume({ test: e => "change-sheet" !== e.type });
            } return !0; } }, a = { type: "clear", process(e) { const { stable: t } = this.layers; return t.getContext("2d").clearRect(0, 0, t.width, t.height), !0; } }, { ceil: c, floor: l, max: u, min: h } = Math, p = { type: "set-stroke-style", process(e) { for (const t of [this.contexts.stable, this.contexts.temp, this.state])
                t.strokeStyle = e.strokeStyle; return !0; } }, d = { type: "move-to", process(e) { const { lineWidth: t, strokeStyle: n } = this.state, [r, s] = this.consume({ test: e => "line-to" === e.type }), o = [[e.x, e.y], ...r.map((e => [e.x, e.y]))], i = s ? this.layers.stable : this.layers.temp, a = i.getContext("2d"), { height: c, width: u } = i; if (a.lineJoin = a.lineCap = "round", a.strokeStyle = n, a.lineWidth = t, 1 === o.length)
                a.fillStyle = n, a.fillRect(l(u * o[0][0] - t / 2), l(c * o[0][1] - t / 2), t, t);
            else {
                a.beginPath(), a.moveTo(l(o[0][0] * u), l(o[0][1] * c));
                for (let e = 0, t = o.length; e < t - 1; e++) {
                    const t = o[e], n = o[e + 1], r = t[0] + (n[0] - t[0]) / 2, s = t[1] + (n[1] - t[1]) / 2;
                    a.quadraticCurveTo(l(u * t[0]), l(c * t[1]), l(u * r), l(c * s));
                }
                a.stroke();
            } return s; } }, { ceil: m, floor: f, max: y, min: g } = Math, v = { type: "erase", process(e) { const t = this.layers.stable, n = t.getContext("2d"); return n.save(), n.beginPath(), n.globalCompositeOperation = "destination-out", n.arc(f(e.x * t.width), f(e.y * t.height), f(e.r * t.width), 0, 2 * Math.PI), n.fill(), n.restore(), !0; } }, b = {}; for (const fe of [a, v, d, p, i])
            b[fe.type] = fe; class k {
            constructor(e = {}) { Object.assign(this, { complete: !0, i: 0, index: 0, state: { activeSheet: 0, numSheets: 1, lineWidth: 2, strokeStyle: "#000000" } }, e), this.contexts = {}, this.complete = !0; }
            consume({ test: e }) { const t = []; for (; this.i + 1 < this.feed.length; ++this.i) {
                const n = this.feed[this.i + 1];
                if (!e(n))
                    return [t, !0];
                t.push(n);
            } return [t, this.complete]; }
            preprocess() { this.complete = !1; let e = Object.keys(b).filter((e => b[e].preprocess)).length; for (let t = this.feed.length - 1; t >= 0; --t) {
                const n = this.feed[t];
                if (!b.hasOwnProperty(n.type))
                    continue;
                const r = b[n.type];
                if (r.hasOwnProperty("preprocess") && (r.preprocess.call(this, n) && e--, 0 === e))
                    break;
            } }
            process() { for (; this.i < this.feed.length; ++this.i) {
                const e = this.feed[this.i];
                if (!b.hasOwnProperty(e.type))
                    continue;
                const t = b[e.type];
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
        } const w = { name: "draw", down({ consumer: e, layers: t, hit: n }) { const r = t.stable.getBoundingClientRect(), s = { type: "move-to", x: (n.x - r.left) / r.width, y: (n.y - r.top) / r.height }; e.record(s), e.complete = !1, e.repaint(); }, move({ consumer: e, layers: t, hit: n, record: r }) { const s = t.stable.getBoundingClientRect(), o = { type: "line-to", x: (n.x - s.left) / s.width, y: (n.y - s.top) / s.height }; e.record(o), e.repaint(); }, up({ consumer: e }) { e.complete = !0, e.repaint(); } }, { floor: x } = Math, E = { name: "eraser", hover({ layers: e, hit: t }) { const n = e.aid, r = n.getBoundingClientRect(), s = n.getContext("2d"); s.clearRect(0, 0, n.width, n.height), s.lineWidth = 1, s.strokeStyle = "#000", s.setLineDash([6, 4]), s.beginPath(), s.arc(x(t.x - r.left), x(t.y - r.y), x(.02 * r.width), 0, 2 * Math.PI), s.stroke(); }, down({ consumer: e, layers: t, hit: n, record: r }) { const s = t.stable.getBoundingClientRect(), o = { type: "erase", x: (n.x - s.left) / s.width, y: (n.y - s.top) / s.height, r: .02 }; e.record(o), e.repaint(); }, move({ consumer: e, layers: t, hit: n }) { const r = t.stable.getBoundingClientRect(), s = { type: "erase", x: (n.x - r.left) / r.width, y: (n.y - r.top) / r.height, r: .02 }; e.record(s), e.repaint(); } }, C = r.createElement("g", { fill: "#fff" }, r.createElement("path", { d: "m23.2859 93.4398c-.0321-.002-.0563-.0008-.0887-.0029-.3133-.0198-.6378-.0447-.9657-.0753-.328-.0306-.6593-.0666-.9909-.1101-.3318-.0435-.6632-.0936-.988-.1521s-.644-.1257-.951-.2014c-.307-.0756-.6014-.16-.88-.2549-.1392-.0475-.275-.098-.4052-.1507-.1301-.0527-.2545-.1084-.3742-.1666-.1196-.0582-.2338-.1186-.3416-.1826-.1079-.0639-.2101-.1313-.3047-.2013s-.1816-.1425-.2618-.2187c-.0801-.0763-.1531-.1562-.2173-.239l-.1672-.2593c-.047-.0898-.0854-.1829-.1138-.2797-.0286-.0967-.0477-.1972-.0563-.3013-.0085-.1041-.0067-.2113.006-.323.0127-.1118.018-.222.0147-.3289-.0031-.1069-.0145-.2107-.0325-.3129-.018-.102-.0434-.201-.0754-.2984s-.0705-.1925-.1154-.2854c-.0448-.0928-.0956-.1841-.1523-.2724-.0567-.0882-.1187-.1739-.1863-.2578s-.1415-.1652-.2189-.2448c-.0775-.0796-.1592-.158-.2455-.2332-.0864-.0753-.1764-.1477-.2708-.2188-.0942-.0711-.1931-.1401-.2943-.2072-.0419-.0278-.09-.051-.1331-.0782-1.5258 3.321-3.9582 5.3779-8.95801 6.29-.81882.1494-.54858 1.1271 0 1.1271 5.90331 0 12.69441-.0272 17.76821-1.5602z" }), r.createElement("path", { d: "m23.147 78.0639c-3.7321 0-6.8361 2.6364-7.4747 6.1118-.3443 1.2582-.7294 2.3904-1.1966 3.4072.0432.0271.0912.0504.1332.0782.1011.0671.2.136.2943.2072.0943.0711.1843.1435.2707.2187.0863.0752.168.1537.2455.2333.0774.0795.1513.1609.2189.2448s.1296.1696.1863.2578c.0567.0883.1075.1796.1523.2724.0449.0928.0834.188.1154.2854.032.0973.0574.1963.0754.2984s.0294.206.0325.3128c.0033.107-.002.2171-.0147.3289s-.0145.219-.006.3231c.0086.1041.0277.2045.0563.3013.0284.0968.0668.1899.1138.2796.047.0896.1029.1765.1672.2593.0642.0828.1372.1628.2173.239.0802.0763.1672.1488.2618.2188.0946.0699.1969.1373.3047.2013s.222.1243.3416.1825c.1197.0583.2441.1139.3742.1666.1302.0528.266.1033.4052.1507.2786.0949.573.1793.88.255.307.0756.6262.1428.951.2013s.6563.1087.988.1521c.3316.0435.6629.0795.9909.1101.3279.0306.6524.0556.9657.0754.0324.002.0566.0009.0887.0028 2.9268-.8843 5.2842-2.267 6.5652-4.4401.5674-1.0421.8888-2.2334.8888-3.497 0-4.1084-3.3986-7.4388-7.5929-7.4388z" }), r.createElement("path", { d: "m71.302 5.00013c-.1587.0034-.3394.07411-.5029.28538-.232.31688-30.4484 41.40919-37.3275 53.54479.164.0523.332.1059.5014.1651 1.0616.3707 2.235.8774 3.4873 1.5674 1.4894.8207 3.0912 1.9006 4.7534 3.3159 7.5537-11.9997 29.4184-57.63808 29.5882-57.99055.1568-.39472.0022-.67845-.1582-.78806-.0101-.00685-.0209-.01359-.0326-.02029-.0764-.04393-.1857-.08232-.3091-.07967z" }), r.createElement("path", { d: "m32.6403 60.3861c-.1163.2378-.2152.4547-.2957.6475-2.5564 6.1258-6.3889 13.48-7.4496 16.2842 2.033.308 3.799 1.4052 4.962 2.9625 1.9802-2.2656 6.6581-9.0957 10.8541-14.2271.1599-.1956.338-.4317.5309-.7041-1.5083-1.3064-2.9557-2.3097-4.2979-3.0783-1.2986-.7438-2.4989-1.2688-3.5657-1.6414-.2549-.089-.5-.1709-.7381-.2433z" })); function S() { return r.createElement("svg", { viewBox: "0 0 75 75" }, r.createElement("g", { transform: "translate(0, 45) rotate(-40) translate(-31.543342,-132.63477)" }, r.createElement("path", { fill: "#CCC", stroke: "#000", strokeLinejoin: "round", strokeMiterlimit: "4", d: "m 36.072339,133.16377 h 31.680484 v 32.87415 H 36.072339 c -2.215998,0 -3.999997,-1.784 -3.999997,-4 v -24.87415 c 0,-2.216 1.783999,-4 3.999997,-4 z" }), r.createElement("path", { fill: "#D34A4A", stroke: "#000", strokeLinejoin: "round", strokeMiterlimit: "4", d: "m 67.752823,133.16377 h 31.680483 c 2.216004,0 3.999994,1.784 3.999994,4 v 24.87415 c 0,2.216 -1.78399,4 -3.999994,4 H 67.752823 Z" }))); } function R() { return r.createElement("svg", { viewBox: "0 0 100 100" }, r.createElement("rect", { x: "10", y: "40", height: "50", width: "50", rx: "15", ry: "15", fill: "none", stroke: "#FFF", strokeWidth: "3" }), r.createElement("rect", { x: "40", y: "10", height: "50", width: "50", rx: "15", ry: "15", fill: "none", stroke: "#FFF", strokeWidth: "3" })); } const { onClick: P } = s.Utils.mobile, j = 68; function O(e) { const { dispatch: t, $state: n } = (0, r.useContext)(ee); (0, r.useEffect)((() => { e.listen((e => { e.altKey && e.keyCode === j && (e.preventDefault(), e.stopPropagation(), t({ type: "set-tool", name: "draw" })); })); }), []); const s = ["rp-paint-tool"]; "draw" === n.current.tool && s.push("selected"); const o = (0, r.useMemo)((() => P((() => { t({ type: "set-tool", name: "draw" }); }))), []); return r.createElement("button", Object.assign({ className: s.join(" ") }, o), r.createElement("svg", { viewBox: "0 0 100 100" }, C)); } const { onClick: M } = s.Utils.mobile, N = 67, U = 69; function L(e) { const { consumer: t, dispatch: n, $state: s } = (0, r.useContext)(ee); (0, r.useEffect)((() => { e.listen((e => { e.altKey && !e.metaKey && e.keyCode === U ? (e.preventDefault(), e.stopPropagation(), n({ type: "set-tool", name: "eraser" })) : e.altKey && !e.metaKey && e.keyCode === N && (e.preventDefault(), e.stopPropagation(), t.record({ type: "clear" }), t.repaint()); })); }), []); const o = ["rp-paint-tool"]; "eraser" === s.current.tool && o.push("selected"); const i = (0, r.useMemo)((() => M((() => { n({ type: "set-tool", name: "eraser" }); }))), []); return r.createElement("button", Object.assign({ className: o.join(" ") }, i), r.createElement(S, null)); } const { between: B } = s.Utils.misc, { onClick: T } = s.Utils.mobile; function W(e) { const [t, n] = (0, r.useState)(!1), { consumer: s, $state: o, dispatch: i } = (0, r.useContext)(ee), a = o.current, c = (0, r.useRef)(["#ffffff", "#ff0000", "#1a69b5", "#008000", "#ae81ff", "#ff8000", "#ff0080"]), [l, u] = (0, r.useState)(c.current); c.current = l, (0, r.useEffect)((() => { e.listen((e => { if (e.altKey && !e.metaKey && B(49, e.keyCode, 49 + l.length)) {
            e.preventDefault(), e.stopPropagation();
            const t = { type: "set-stroke-style", strokeStyle: c.current[e.keyCode - 49] };
            s.record(t), i(t);
        }
        else
            e.altKey && "h" === e.key && document.querySelectorAll(".rp-paint-replay"); })); }), []); const h = (0, r.useMemo)((() => T((() => { n((e => !e)); }))), []), p = (0, r.useMemo)((() => ({ onChange: e => { const t = e.currentTarget.value, n = e.currentTarget.name.match(/^palette-(\d+)$/)[1]; u((e => { const r = e.slice(); return r[n] = t, r; })); } })), []); return r.createElement(r.Fragment, null, r.createElement("aside", { className: "rp-paint-palette", style: { display: t ? "block" : "none" } }, l.map(((e, t) => r.createElement("div", { className: "rp-paint-color", key: t }, r.createElement("input", Object.assign({}, p, { name: `palette-${t}`, type: "color", value: e })), r.createElement("kbd", null, t + 1))))), r.createElement("button", Object.assign({ className: "rp-paint-tool rp-paint-format" }, h, { style: { backgroundColor: a.strokeStyle } }))); } const { range: F } = s.Utils.misc, { onClick: z } = s.Utils.mobile; function D(e) { const { consumer: t } = (0, r.useContext)(ee), [n, s] = (0, r.useState)(!1), o = (0, r.useRef)([]); (0, r.useEffect)((() => { e.listen((e => { if (e.altKey)
            if ("ArrowDown" === e.key) {
                o.current[t.state.activeSheet] = t.layers.stable.toDataURL();
                const e = { type: "change-sheet", sheet: t.state.activeSheet + 1 };
                t.record(e), t.repaint(!0);
            }
            else if ("ArrowUp" === e.key) {
                if (0 === t.state.activeSheet)
                    return;
                o.current[t.state.activeSheet] = t.layers.stable.toDataURL();
                const e = { type: "change-sheet", sheet: t.state.activeSheet - 1 };
                t.record(e), t.repaint(!0);
            } })); }), []); const i = (0, r.useMemo)((() => z((() => { s((e => (e || (o.current[t.state.activeSheet] = t.layers.stable.toDataURL()), !e))); }))), []); return r.createElement(r.Fragment, null, r.createElement("aside", { className: "rp-sheets-dialog", style: { display: n ? "block" : "none" } }, r.createElement("ol", null, F(t.state.numSheets).map((e => r.createElement("li", { className: e === t.state.activeSheet ? "selected" : "", key: e }, r.createElement("img", { src: o.current[e] })))))), r.createElement("button", Object.assign({ className: ["rp-paint-tool"].join(" ") }, i), r.createElement(R, null))); } const { replay: K } = s.Utils.animation, { dragHelperReact: $ } = s.Utils.interactivity, { between: q } = s.Utils.misc, { onClick: A } = s.Utils.mobile; function H() { const { consumer: e } = (0, r.useContext)(ee), t = ((0, r.useContext)(s.Player.Context), (0, r.useRef)()), [n, o] = (0, r.useState)(!1), i = (0, r.useRef)([]), a = (0, r.useCallback)((e => { i.current.push(e); }), []); (0, r.useEffect)((() => { const n = n => { if ("p" === n.key)
            return o((e => !e)); "h" === n.key ? I(t.current, ".rp-paint-canvas-container").classList.toggle("visible") : "z" === n.key && n.metaKey && e.record({ type: "undo" }); for (const e of i.current)
            e(n); }; return document.body.addEventListener("keydown", n), () => { document.body.removeEventListener("keydown", n); }; }), [n]); const c = (0, r.useMemo)((() => { let e, n; return $(((r, s) => { const o = function (e) { if (void 0 !== e.offsetLeft && void 0 !== e.offsetTop)
            return { left: e.offsetLeft, top: e.offsetTop, width: e.offsetParent.getBoundingClientRect().width, height: e.offsetParent.getBoundingClientRect().height }; const t = e.getBoundingClientRect(); let n = e; for (; n = n.parentNode;) {
            if (!["absolute", "relative"].includes(getComputedStyle(n).position))
                continue;
            const e = n.getBoundingClientRect();
            return { left: t.left - e.left, top: t.top - e.top, width: e.width, height: e.height };
        } return { left: t.left, top: t.top, width: innerWidth, height: innerHeight }; }(t.current), i = o.left + s.x - e, a = o.top + s.y - n, c = i / o.width * 100, l = a / o.height * 100; e = s.x, n = s.y, Object.assign(t.current.style, { left: `${c}%`, top: `${l}%` }); }), ((t, r) => { e = r.x, n = r.y; })); }), []); return r.createElement("aside", { className: "rp-paint-settings", ref: t, style: { display: n ? "block" : "none" } }, r.createElement("div", Object.assign({ className: "rp-paint-drag-handle" }, c)), r.createElement(O, Object.assign({}, { listen: a })), r.createElement(L, Object.assign({}, { listen: a })), r.createElement(W, Object.assign({}, { listen: a })), r.createElement(D, Object.assign({}, { listen: a }))); } function I(e, t) { if (e)
            return e.matches(t) ? e : I(e.parentNode, t); } const { replay: J } = s.Utils.animation, { dragHelperReact: _ } = s.Utils.interactivity, { between: X } = s.Utils.misc, Y = { draw: w, eraser: E }, Z = { tool: "draw", strokeStyle: "#000000", lineWidth: 2 }, { floor: G, max: Q, min: V } = Math, ee = r.createContext(null); function te(e, t) { switch (t.type) {
            case "set-stroke-style": return Object.assign(Object.assign({}, e), { strokeStyle: t.strokeStyle });
            case "set-tool": return Object.assign(Object.assign({}, e), { tool: t.name });
        } return e; } function ne(e) { const t = (0, r.useRef)([]), n = { aid: (0, r.useRef)(), stable: (0, r.useRef)(), temp: (0, r.useRef)() }, [s, i] = (0, r.useReducer)(te, Z), a = (0, r.useRef)(Z); a.current = s; const c = (0, r.useRef)(new k({ feed: t.current, record(t) { var n; null === (n = e.recorder) || void 0 === n || n.captureAction(t), this.feed.push(t); } })), l = c.current, u = { consumer: c.current, dispatch: i, layers: o(n), $state: a }, h = (0, r.useMemo)((() => Object.assign({ onMouseMove: e => { var t; const r = Y[a.current.tool]; null === (t = r.hover) || void 0 === t || t.call(r, { layers: o(n), hit: { x: e.clientX, y: e.clientY } }); } }, _(((e, t) => { var r; const s = Y[a.current.tool]; null === (r = s.move) || void 0 === r || r.call(s, { e, hit: t, consumer: l, layers: o(n) }); }), ((e, t) => { var r; const s = Y[a.current.tool]; null === (r = s.down) || void 0 === r || r.call(s, { e, hit: t, consumer: l, layers: o(n), state: a.current }); }), (e => { var t; const r = Y[a.current.tool]; null === (t = r.up) || void 0 === t || t.call(r, { e, consumer: l, layers: o(n) }); })))), []); return r.useEffect((() => { function e() { for (const e in n) {
            const t = n[e].current, r = t.getBoundingClientRect();
            t.height = r.height, t.width = r.width;
        } l.repaint(!0); } return l.layers = o(n), window.addEventListener("resize", e), e(), () => { window.removeEventListener("resize", e); }; }), [n.temp.current, n.stable.current]), r.createElement("div", { className: "rp-paint-canvas-container" }, r.createElement(ee.Provider, { value: u }, r.createElement("canvas", { id: "stable", className: "rp-paint-layer noinput", ref: n.stable }), r.createElement("canvas", Object.assign({ id: "temp", className: "rp-paint-layer" }, h, { ref: n.temp })), r.createElement("canvas", { className: "rp-paint-layer noinput", ref: n.aid }), r.createElement(H, null))); } const { ceil: re, floor: se, max: oe, min: ie } = Math; function ae({ action: e, consume: t, stable: n, state: r, temp: s }) { const { lineWidth: o, strokeStyle: i } = r, a = n.getContext("2d"), c = s.getContext("2d"); switch (e.type) {
            case "change-sheet": return e.sheet >= r.sheets.length && (r.sheets.length = e.sheet), e.sheet !== r.activeSheet && a.clearRect(0, 0, n.width, n.height), r.activeSheet = e.sheet, !0;
            case "set-stroke-style": return a.strokeStyle = r.strokeStyle = c.strokeStyle = e.strokeStyle, !0;
            case "clear": return a.clearRect(0, 0, n.width, n.height), !0;
            case "erase": {
                const t = n.getContext("2d");
                return t.save(), t.beginPath(), t.globalCompositeOperation = "destination-out", t.arc(se(e.x * n.width), se(e.y * n.height), se(e.r * n.width), 0, 2 * Math.PI), t.fill(), t.restore(), !0;
            }
            case "move-to":
                const [l, u] = t({ test: e => "line-to" === e.type }), h = [[e.x, e.y], ...l.map((e => [e.x, e.y]))], p = u ? n : s, d = p.getContext("2d"), { height: m, width: f } = p;
                if (d.lineJoin = d.lineCap = "round", d.strokeStyle = r.strokeStyle, d.lineWidth = r.lineWidth, 1 === h.length)
                    d.fillStyle = i, d.fillRect(se(f * h[0][0] - o / 2), se(m * h[0][1] - o / 2), o, o);
                else {
                    d.beginPath(), d.moveTo(se(h[0][0] * f), se(h[0][1] * m));
                    for (let e = 0, t = h.length; e < t - 1; e++) {
                        const t = h[e], n = h[e + 1], r = t[0] + (n[0] - t[0]) / 2, s = t[1] + (n[1] - t[1]) / 2;
                        d.quadraticCurveTo(se(f * t[0]), se(m * t[1]), se(f * r), se(m * s));
                    }
                    d.stroke();
                }
                return u;
        } } const { replay: ce } = s.Utils.animation, { between: le } = s.Utils.misc, { floor: ue, max: he, min: pe } = Math, de = { activeSheet: 0, strokeStyle: "#000", lineWidth: 2, sheets: [] }; function me(e) { var t; const { playback: n, script: o } = (0, s.usePlayer)(), i = (0, r.useRef)(null !== (t = e.replay) && void 0 !== t ? t : []), a = (0, r.useRef)(de), c = ((0, r.useRef)([{ type: "change-sheet", sheet: 0 }, { type: "set-stroke-style", strokeStyle: "#FFF" }]), { stable: (0, r.useRef)(), temp: (0, r.useRef)() }); return r.useEffect((() => { var t; const r = null !== (t = o.parseStart(e.start)) && void 0 !== t ? t : 0; let s = n.currentTime, l = 0, u = 0; function h(e = n.currentTime, t = !1) { const o = c.stable.current, p = o.getContext("2d"), d = c.temp.current, m = d.getContext("2d"), { lineWidth: f, strokeStyle: y } = a.current; if ((e < s || t) && (l = 0, u = 0, p.clearRect(0, 0, o.width, o.height)), s = e, a.current.repaint = h, m.clearRect(0, 0, d.width, d.height), e < r)
            return; let g = l, v = u, b = null, k = null, w = g; for (; g < i.current.length; ++g) {
            const [t, n] = i.current[g];
            if (v += t, e <= r + v)
                break;
            w = g + 1, "set-stroke-style" === n.type ? k = g : "change-sheet" === n.type && (b = g, u = v - t);
        } function x({ test: e }) { const t = []; for (; g + 1 < w; ++g) {
            const [n, r] = i.current[g + 1];
            if (!e(r))
                return [t, !0];
            v += n, t.push(r);
        } return [t, w === i.current.length]; } for (null !== b && (l = b, null !== k && ae({ action: i.current[k][1], consume: x, stable: o, state: a.current, temp: d })), g = l, v = u; g < w; ++g) {
            const [e, t] = i.current[g];
            v += e;
            if (!ae({ action: t, consume: x, stable: o, state: a.current, temp: d }))
                break;
            l = g + 1, u = v;
        } } function p() { const e = c.stable.current.getBoundingClientRect(); c.temp.current.height = c.stable.current.height = e.height, c.temp.current.width = c.stable.current.width = e.width, h(n.currentTime, !0); } return window.addEventListener("resize", p), n.hub.on("seek", h), n.hub.on("timeupdate", h), p(), () => { window.removeEventListener("resize", p), n.hub.off("seek", h), n.hub.off("timeupdate", h); }; }), [c.stable.current, c.temp.current]), r.createElement("div", { className: "rp-paint-view" }, r.createElement("canvas", { className: "rp-paint-layer noinput", ref: c.temp }), r.createElement("canvas", { className: "rp-paint-layer noinput", ref: c.stable })); } }, 576: e => { e.exports = t; }, 888: t => { t.exports = e; } }, r = {};
    function s(e) { if (r[e])
        return r[e].exports; var t = r[e] = { exports: {} }; return n[e](t, t.exports, s), t.exports; }
    return s.d = (e, t) => { for (var n in t)
        s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, s(829);
})(); }));


/***/ }),

/***/ "./src/CodeMirror.tsx":
/*!****************************!*\
  !*** ./src/CodeMirror.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CodeMirrorSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_codebooth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-codebooth */ "./node_modules/rp-codebooth/rp-codebooth.js");
/* harmony import */ var rp_codebooth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_codebooth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_JSInterpreter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/JSInterpreter */ "./lib/JSInterpreter.ts");
/* harmony import */ var _recordings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recordings */ "./src/recordings.ts");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");



const { during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring, { dragHelperReact } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.interactivity, { constrain } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.misc, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;




function CodeMirrorSlide() {
    const interpreter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (!interpreter.current) {
        interpreter.current = new _lib_JSInterpreter__WEBPACK_IMPORTED_MODULE_3__.default();
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-codemirror" }, during("codemirror/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_codebooth__WEBPACK_IMPORTED_MODULE_2__.CodeBooth, { interpreter: interpreter.current, mode: "javascript", replay: _recordings__WEBPACK_IMPORTED_MODULE_4__.codeRecording, start: "codemirror/", theme: "monokai" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_5__.CodeMirrorPrompt, null)));
}


/***/ }),

/***/ "./src/Cursor.tsx":
/*!************************!*\
  !*** ./src/Cursor.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CursorSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-cursor */ "./node_modules/rp-cursor/rp-cursor.js");
/* harmony import */ var rp_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-url */ "./src/media-url.ts");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");
/* harmony import */ var _recordings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recordings */ "./src/recordings.ts");


const { during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;





function CursorSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-cursor" }, during("cursor/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
            "The ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_3__.default, { href: "https://www.npmjs.com/package/rp-cursor" }, "rp-cursor"),
            " package lets you record mouse movements, in case you want to point to something on the screen."),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement((rp_cursor__WEBPACK_IMPORTED_MODULE_2___default()), { src: `${_media_url__WEBPACK_IMPORTED_MODULE_4__.MEDIA_URL}/img/cursor.png`, start: "cursor/", end: "paint/", replay: _recordings__WEBPACK_IMPORTED_MODULE_6__.cursorReplay }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_5__.CursorPrompt, null)));
}


/***/ }),

/***/ "./src/Intro.tsx":
/*!***********************!*\
  !*** ./src/Intro.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Intro
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-url */ "./src/media-url.ts");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");



const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring, { between } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.misc;



function Intro() {
    const player = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const onChangeColor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        player.canvas.style.backgroundColor = e.currentTarget.value;
    }, []);
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("A library for interactive videos in HTML/CSS/JS");
    const onChangeText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        setText(e.currentTarget.value);
    }, []);
    const m = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => player.script.parseStart("intro/pause"), []);
    const prev = react__WEBPACK_IMPORTED_MODULE_0__.useRef(player.playback.currentTime);
    const EPSILON = 300;
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.useTimeUpdate)(t => {
        if (between(m - EPSILON, prev.current, m) && between(m, t, m + EPSILON)) {
            player.playback.pause();
        }
        prev.current = t;
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_1__.IdMap, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-intro" }, during("intro/")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "ractive" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { alt: "R", src: `${_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/img/R.svg` }),
                    "active"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "player" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { alt: "P", src: `${_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/img/P.svg` }),
                    "layer")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, text),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("dfn", { id: "dfn-ractives" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://en.wikipedia.org/wiki/The_Diamond_Age" }, "(ractives)")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({ className: "box", id: "fiddle" }, from("intro/fiddle"), { onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                    "Try changing the background color:",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onChange: onChangeColor, type: "color" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Or the subtitle:"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { onBlur: player.resumeKeyCapture, onFocus: player.suspendKeyCapture, onChange: onChangeText, value: text })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({ className: "box" }, from("intro/pros")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Much smaller than a traditional video file"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("intro/edit")), "Very easy to make edits\u2014no waiting for video export"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("intro/lmqm")),
                    "More examples at ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://lmqm.xyz" }, "La mer qui monte"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({ className: "box", id: "get-started" }, from("intro/get-started")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                    "Clone this tutorial: ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://github.com/ysulyma/rp-tutorial" }, "https://github.com/ysulyma/rp-tutorial")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("intro/reddit")),
                    "Discussion: ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://reddit.com/r/ractive_player/" }, "https://reddit.com/r/ractive_player/"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_4__.IntroPrompt, null))));
}


/***/ }),

/***/ "./src/Paint.tsx":
/*!***********************!*\
  !*** ./src/Paint.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PaintSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_paint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-paint */ "./node_modules/rp-paint/rp-paint.js");
/* harmony import */ var rp_paint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_paint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recordings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordings */ "./src/recordings.ts");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");


const { animate } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.animation, { during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;



function PaintSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-paint" }, during("paint/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_paint__WEBPACK_IMPORTED_MODULE_2__.PaintReplay, { replay: _recordings__WEBPACK_IMPORTED_MODULE_3__.paintReplay, start: "paint/" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_4__.PaintPrompt, null)));
}


/***/ }),

/***/ "./src/PlaybackSlide.tsx":
/*!*******************************!*\
  !*** ./src/PlaybackSlide.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlaybackSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");


const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;


function PlaybackSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-playback" }, during("playback/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Playback"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("playback/loop")), "animation loop simulating a media element advancing in time"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("playback/html")),
                "imitates (but does not fully implement) the ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement" }, "HTMLMediaElement"),
                " interface"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("playback/hub")),
                "emits events through ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://nodejs.org/api/events.html#events_class_eventemitter" }, "EventEmitter"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "playback.hub"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_3__.PlaybackPrompt, null)));
}


/***/ }),

/***/ "./src/PlayerSlide.tsx":
/*!*****************************!*\
  !*** ./src/PlayerSlide.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlayerSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");


const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;

function PlayerSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-player" }, during("player/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Player"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("player/gui")), "GUI: scrubber bar, controls, bells, whistles"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("player/react")),
                "depends on React (",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Playback"),
                " and ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Script"),
                " do not!)"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("player/hook")),
                "access with ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "usePlayer()"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_2__.PlayerPrompt, null)));
}


/***/ }),

/***/ "./src/RecordingSlide.tsx":
/*!********************************!*\
  !*** ./src/RecordingSlide.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlaybackSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");


const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;


function PlaybackSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-recording" }, during("recording/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Recording"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/npm")),
                "recording functionality provided by ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://www.npmjs.com/package/rp-recording" }, "rp-recording")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/control")),
                "implemented as custom control, c.f. ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "index.tsx")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/https")),
                "can only record audio over HTTPS!",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({ id: "recording-https-link" }, from("recording/link"), { href: "https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/" }), "How to get HTTPS working on your local development environment")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/plugin")), "plugin API")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_3__.RecordingPrompt, null)));
}


/***/ }),

/***/ "./src/ScriptSlide.tsx":
/*!*****************************!*\
  !*** ./src/ScriptSlide.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ScriptSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");


const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;

function ScriptSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-script" }, during("script/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Script"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("script/markers")),
                "partitions a Playback into named segments called ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("dfn", null, "markers")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("script/repeat")), "markers can repeat (experimental), cannot overlap"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("script/ew")),
                "press ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", null, "E"),
                " to advance a marker, ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", null, "W"),
                " to go back one marker")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_2__.ScriptPrompt, null)));
}


/***/ }),

/***/ "./src/UtilsSlide.tsx":
/*!****************************!*\
  !*** ./src/UtilsSlide.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ UtilsSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-url */ "./src/media-url.ts");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");



const { animate } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.animation, { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring, { dragHelperReact } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.interactivity, { constrain } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.misc;

const easeInSine = [0.47, 0, 0.745, 0.715];


function UtilsSlide() {
    const player = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const duck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const rotate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        endValue: 2 * Math.PI,
        startTime: player.script.parseStart("utils/animate/fire"),
        duration: 1000,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(...easeInSine)
    }), []);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.useTimeUpdate)(t => {
        const p = rotate(t);
        duck.current.style.left = `${35 + 15 * Math.cos(p)}%`;
        duck.current.style.top = `${15 - 12.5 * Math.sin(p)}%`;
    }, []);
    const pig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const offset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({ x: 0, y: 0 });
    const pigEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => dragHelperReact((e, hit) => {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-utils" }, during("utils/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Utils"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("utils/animate")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Utils.animation.animate"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { id: "utils-duck", src: `${_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/img/duck.svg`, ref: duck })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("utils/authoring")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Utils.authoring.{during, from}")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("utils/drag")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Utils.interactivity.dragHelperReact"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", Object.assign({ className: "draggable", id: "utils-pig", src: `${_media_url__WEBPACK_IMPORTED_MODULE_3__.MEDIA_URL}/img/pig.svg`, ref: pig }, pigEvents)))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_4__.UtilsPrompt, null)));
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_rebind_arrow_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/rebind-arrow-keys */ "./lib/rebind-arrow-keys.ts");
/* harmony import */ var _lib_seekonload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/seekonload */ "./lib/seekonload.ts");
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-url */ "./src/media-url.ts");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects */ "./src/objects.ts");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Intro */ "./src/Intro.tsx");
/* harmony import */ var _CodeMirror__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CodeMirror */ "./src/CodeMirror.tsx");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cursor */ "./src/Cursor.tsx");
/* harmony import */ var _Paint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Paint */ "./src/Paint.tsx");
/* harmony import */ var _PlaybackSlide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlaybackSlide */ "./src/PlaybackSlide.tsx");
/* harmony import */ var _ScriptSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ScriptSlide */ "./src/ScriptSlide.tsx");
/* harmony import */ var _PlayerSlide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PlayerSlide */ "./src/PlayerSlide.tsx");
/* harmony import */ var _UtilsSlide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UtilsSlide */ "./src/UtilsSlide.tsx");
/* harmony import */ var _RecordingSlide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RecordingSlide */ "./src/RecordingSlide.tsx");

















const controls = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player.defaultControlsLeft,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "rp-controls-right" }, ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player.defaultControlsRight)));
function Ractive() {
    const playerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const player = playerRef.current;
        (0,_lib_rebind_arrow_keys__WEBPACK_IMPORTED_MODULE_3__.default)(player);
        player.canPlay.then(() => {
            (0,_lib_seekonload__WEBPACK_IMPORTED_MODULE_4__.default)(player.playback);
            player.ready();
        });
    }, []);
    const script = new ractive_player__WEBPACK_IMPORTED_MODULE_2__.Script(_markers__WEBPACK_IMPORTED_MODULE_6__.default);
    const ps = script.parseStart;
    const highlights = [
        { title: "Codebooth", time: ps("codemirror/") },
        { title: "Cursor", time: ps("cursor/") },
        { title: "Paint", time: ps("paint/") },
        { title: "Playback", time: ps("playback/") },
        { title: "Script", time: ps("script/") },
        { title: "Player", time: ps("player/") },
        { title: "Utils", time: ps("utils/") },
        { title: "Recording", time: ps("recording/") }
    ];
    const thumbData = {
        cols: 5,
        rows: 5,
        height: 100,
        width: 160,
        frequency: 4,
        path: `${_media_url__WEBPACK_IMPORTED_MODULE_5__.MEDIA_URL}/thumbs/%s.png`,
        highlights
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player, { controls: controls, ref: playerRef, script: script, thumbs: thumbData },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.IdMap, { map: _objects__WEBPACK_IMPORTED_MODULE_7__.default },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Audio, { start: 0 },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", { src: `${_media_url__WEBPACK_IMPORTED_MODULE_5__.MEDIA_URL}/audio/audio.webm`, type: "audio/webm" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", { src: `${_media_url__WEBPACK_IMPORTED_MODULE_5__.MEDIA_URL}/audio/audio.mp4`, type: "audio/mp4" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Intro__WEBPACK_IMPORTED_MODULE_8__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeMirror__WEBPACK_IMPORTED_MODULE_9__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cursor__WEBPACK_IMPORTED_MODULE_10__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paint__WEBPACK_IMPORTED_MODULE_11__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlaybackSlide__WEBPACK_IMPORTED_MODULE_12__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScriptSlide__WEBPACK_IMPORTED_MODULE_13__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlayerSlide__WEBPACK_IMPORTED_MODULE_14__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UtilsSlide__WEBPACK_IMPORTED_MODULE_15__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RecordingSlide__WEBPACK_IMPORTED_MODULE_16__.default, null))));
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ractive, null), document.querySelector("main"));


/***/ }),

/***/ "./src/markers.ts":
/*!************************!*\
  !*** ./src/markers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    ["intro/", "0:05.126"],
    ["intro/ractives", "0:17.646"],
    ["intro/fiddle", "0:07.889"],
    ["intro/pause", "0:02.567"],
    ["intro/pros", "0:07.985"],
    ["intro/edit", "0:22.973"],
    ["intro/lmqm", "0:13.669"],
    ["intro/get-started", "0:08.924"],
    ["intro/reddit", "0:14.373"],
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
]);


/***/ }),

/***/ "./src/media-url.ts":
/*!**************************!*\
  !*** ./src/media-url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MEDIA_URL": () => /* binding */ MEDIA_URL
/* harmony export */ });
const MEDIA_URL = "https://d2og9lpzrymesl.cloudfront.net/r/rp-tutorial";


/***/ }),

/***/ "./src/objects.ts":
/*!************************!*\
  !*** ./src/objects.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
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

/***/ "./src/prompts.tsx":
/*!*************************!*\
  !*** ./src/prompts.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPrompt": () => /* binding */ IntroPrompt,
/* harmony export */   "CodeMirrorPrompt": () => /* binding */ CodeMirrorPrompt,
/* harmony export */   "CursorPrompt": () => /* binding */ CursorPrompt,
/* harmony export */   "PaintPrompt": () => /* binding */ PaintPrompt,
/* harmony export */   "PlaybackPrompt": () => /* binding */ PlaybackPrompt,
/* harmony export */   "ScriptPrompt": () => /* binding */ ScriptPrompt,
/* harmony export */   "PlayerPrompt": () => /* binding */ PlayerPrompt,
/* harmony export */   "AnimationPrompt": () => /* binding */ AnimationPrompt,
/* harmony export */   "RecordingPrompt": () => /* binding */ RecordingPrompt,
/* harmony export */   "UtilsPrompt": () => /* binding */ UtilsPrompt
/* harmony export */ });
const IntroPrompt = () => null;
const CodeMirrorPrompt = () => null;
const CursorPrompt = () => null;
const PaintPrompt = () => null;
const PlaybackPrompt = () => null;
const ScriptPrompt = () => null;
const PlayerPrompt = () => null;
const AnimationPrompt = () => null;
const RecordingPrompt = () => null;
const UtilsPrompt = () => null;


/***/ }),

/***/ "./src/recordings.ts":
/*!***************************!*\
  !*** ./src/recordings.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "codeRecording": () => /* binding */ codeRecording,
/* harmony export */   "cursorReplay": () => /* binding */ cursorReplay,
/* harmony export */   "paintReplay": () => /* binding */ paintReplay
/* harmony export */ });
const codeRecording = [[800, ["text", { "from": { "line": 0, "ch": 0 }, "to": { "line": 0, "ch": 0 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 1 }]], [116, ["text", { "from": { "line": 0, "ch": 1 }, "to": { "line": 0, "ch": 1 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 2 }]], [88, ["text", { "from": { "line": 0, "ch": 2 }, "to": { "line": 0, "ch": 2 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 3 }]], [128, ["text", { "from": { "line": 0, "ch": 3 }, "to": { "line": 0, "ch": 3 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 4 }]], [64, ["text", { "from": { "line": 0, "ch": 4 }, "to": { "line": 0, "ch": 4 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 5 }]], [160, ["text", { "from": { "line": 0, "ch": 5 }, "to": { "line": 0, "ch": 5 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 6 }]], [104, ["text", { "from": { "line": 0, "ch": 6 }, "to": { "line": 0, "ch": 6 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 7 }]], [103, ["text", { "from": { "line": 0, "ch": 7 }, "to": { "line": 0, "ch": 7 }, "text": ["."], "removed": [""] }]], [1, ["cursor", { "line": 0, "ch": 8 }]], [209, ["text", { "from": { "line": 0, "ch": 8 }, "to": { "line": 0, "ch": 8 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 9 }]], [143, ["text", { "from": { "line": 0, "ch": 9 }, "to": { "line": 0, "ch": 9 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 10 }]], [89, ["text", { "from": { "line": 0, "ch": 10 }, "to": { "line": 0, "ch": 10 }, "text": ["g"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 11 }]], [247, ["text", { "from": { "line": 0, "ch": 11 }, "to": { "line": 0, "ch": 11 }, "text": ["("], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 12 }]], [216, ["text", { "from": { "line": 0, "ch": 12 }, "to": { "line": 0, "ch": 12 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 13 }]], [285, ["text", { "from": { "line": 0, "ch": 13 }, "to": { "line": 0, "ch": 13 }, "text": ["H"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 14 }]], [115, ["text", { "from": { "line": 0, "ch": 14 }, "to": { "line": 0, "ch": 14 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 15 }]], [86, ["text", { "from": { "line": 0, "ch": 15 }, "to": { "line": 0, "ch": 15 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 16 }]], [133, ["text", { "from": { "line": 0, "ch": 16 }, "to": { "line": 0, "ch": 16 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 17 }]], [188, ["text", { "from": { "line": 0, "ch": 17 }, "to": { "line": 0, "ch": 17 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 18 }]], [112, ["text", { "from": { "line": 0, "ch": 18 }, "to": { "line": 0, "ch": 18 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 19 }]], [145, ["text", { "from": { "line": 0, "ch": 19 }, "to": { "line": 0, "ch": 19 }, "text": ["W"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 20 }]], [176, ["text", { "from": { "line": 0, "ch": 20 }, "to": { "line": 0, "ch": 20 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 21 }]], [104, ["text", { "from": { "line": 0, "ch": 21 }, "to": { "line": 0, "ch": 21 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 22 }]], [88, ["text", { "from": { "line": 0, "ch": 22 }, "to": { "line": 0, "ch": 22 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 23 }]], [143, ["text", { "from": { "line": 0, "ch": 23 }, "to": { "line": 0, "ch": 23 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 24 }]], [256, ["text", { "from": { "line": 0, "ch": 24 }, "to": { "line": 0, "ch": 24 }, "text": ["!"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 25 }]], [273, ["text", { "from": { "line": 0, "ch": 25 }, "to": { "line": 0, "ch": 25 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 26 }]], [495, ["text", { "from": { "line": 0, "ch": 26 }, "to": { "line": 0, "ch": 26 }, "text": [")"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 27 }]], [497, ["text", { "from": { "line": 0, "ch": 27 }, "to": { "line": 0, "ch": 27 }, "text": [";"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 28 }]], [384, ["command", "Cmd-Enter"]], [7365, ["command", "Ctrl-A"]], [0, ["cursor", { "line": 0, "ch": 0 }]], [337, ["text", { "from": { "line": 0, "ch": 0 }, "to": { "line": 0, "ch": 0 }, "text": ["", ""], "removed": [""] }]], [0, ["command", "Enter"]], [0, ["cursor", { "line": 1, "ch": 0 }]], [146, ["text", { "from": { "line": 1, "ch": 0 }, "to": { "line": 1, "ch": 0 }, "text": ["", ""], "removed": [""] }]], [0, ["command", "Enter"]], [0, ["cursor", { "line": 2, "ch": 0 }]], [414, ["command", "Ctrl-P"]], [0, ["cursor", { "line": 1, "ch": 0 }]], [118, ["command", "Ctrl-P"]], [0, ["cursor", { "line": 0, "ch": 0 }]], [361, ["text", { "from": { "line": 0, "ch": 0 }, "to": { "line": 0, "ch": 0 }, "text": ["/"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 1 }]], [163, ["text", { "from": { "line": 0, "ch": 1 }, "to": { "line": 0, "ch": 1 }, "text": ["/"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 2 }]], [117, ["text", { "from": { "line": 0, "ch": 2 }, "to": { "line": 0, "ch": 2 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 3 }]], [1592, ["text", { "from": { "line": 0, "ch": 3 }, "to": { "line": 0, "ch": 3 }, "text": ["C"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 4 }]], [152, ["text", { "from": { "line": 0, "ch": 4 }, "to": { "line": 0, "ch": 4 }, "text": ["O"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 5 }]], [120, ["text", { "from": { "line": 0, "ch": 5 }, "to": { "line": 0, "ch": 5 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 6 }]], [103, ["text", { "from": { "line": 0, "ch": 6 }, "to": { "line": 0, "ch": 6 }, "text": ["i"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 7 }]], [42, ["text", { "from": { "line": 0, "ch": 7 }, "to": { "line": 0, "ch": 7 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 8 }]], [78, ["text", { "from": { "line": 0, "ch": 8 }, "to": { "line": 0, "ch": 8 }, "text": ["g"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 9 }]], [107, ["text", { "from": { "line": 0, "ch": 9 }, "to": { "line": 0, "ch": 9 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 10 }]], [382, ["text", { "from": { "line": 0, "ch": 10 }, "to": { "line": 0, "ch": 10 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 11 }]], [72, ["text", { "from": { "line": 0, "ch": 11 }, "to": { "line": 0, "ch": 11 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 12 }]], [134, ["text", { "from": { "line": 0, "ch": 12 }, "to": { "line": 0, "ch": 12 }, "text": ["p"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 13 }]], [41, ["text", { "from": { "line": 0, "ch": 13 }, "to": { "line": 0, "ch": 13 }, "text": ["l"], "removed": [""] }]], [1, ["cursor", { "line": 0, "ch": 14 }]], [168, ["text", { "from": { "line": 0, "ch": 14 }, "to": { "line": 0, "ch": 14 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 15 }]], [128, ["text", { "from": { "line": 0, "ch": 15 }, "to": { "line": 0, "ch": 15 }, "text": ["y"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 16 }]], [81, ["text", { "from": { "line": 0, "ch": 16 }, "to": { "line": 0, "ch": 16 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 17 }]], [1283, ["text", { "from": { "line": 0, "ch": 17 }, "to": { "line": 0, "ch": 17 }, "text": ["p"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 18 }]], [100, ["text", { "from": { "line": 0, "ch": 18 }, "to": { "line": 0, "ch": 18 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 19 }]], [96, ["text", { "from": { "line": 0, "ch": 19 }, "to": { "line": 0, "ch": 19 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 20 }]], [144, ["text", { "from": { "line": 0, "ch": 20 }, "to": { "line": 0, "ch": 20 }, "text": ["v"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 21 }]], [104, ["text", { "from": { "line": 0, "ch": 21 }, "to": { "line": 0, "ch": 21 }, "text": ["i"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 22 }]], [104, ["text", { "from": { "line": 0, "ch": 22 }, "to": { "line": 0, "ch": 22 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 23 }]], [160, ["text", { "from": { "line": 0, "ch": 23 }, "to": { "line": 0, "ch": 23 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 24 }]], [152, ["text", { "from": { "line": 0, "ch": 24 }, "to": { "line": 0, "ch": 24 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 25 }]], [240, ["text", { "from": { "line": 0, "ch": 25 }, "to": { "line": 0, "ch": 25 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 26 }]], [2776, ["text", { "from": { "line": 0, "ch": 26 }, "to": { "line": 0, "ch": 26 }, "text": ["b"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 27 }]], [176, ["text", { "from": { "line": 0, "ch": 27 }, "to": { "line": 0, "ch": 27 }, "text": ["y"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 28 }]], [120, ["text", { "from": { "line": 0, "ch": 28 }, "to": { "line": 0, "ch": 28 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 29 }]], [455, ["text", { "from": { "line": 0, "ch": 29 }, "to": { "line": 0, "ch": 29 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 30 }]], [101, ["text", { "from": { "line": 0, "ch": 30 }, "to": { "line": 0, "ch": 30 }, "text": ["p"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 31 }]], [204, ["text", { "from": { "line": 0, "ch": 31 }, "to": { "line": 0, "ch": 31 }, "text": ["-"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 32 }]], [120, ["text", { "from": { "line": 0, "ch": 32 }, "to": { "line": 0, "ch": 32 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 33 }]], [135, ["text", { "from": { "line": 0, "ch": 33 }, "to": { "line": 0, "ch": 33 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 34 }]], [193, ["text", { "from": { "line": 0, "ch": 34 }, "to": { "line": 0, "ch": 34 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 35 }]], [160, ["text", { "from": { "line": 0, "ch": 35 }, "to": { "line": 0, "ch": 35 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 36 }]], [104, ["text", { "from": { "line": 0, "ch": 36 }, "to": { "line": 0, "ch": 36 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 37 }]], [88, ["text", { "from": { "line": 0, "ch": 37 }, "to": { "line": 0, "ch": 37 }, "text": ["i"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 38 }]], [889, ["text", { "from": { "line": 0, "ch": 38 }, "to": { "line": 0, "ch": 38 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 39 }]], [185, ["text", { "from": { "line": 0, "ch": 39 }, "to": { "line": 0, "ch": 39 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 40 }]], [149, ["text", { "from": { "line": 0, "ch": 40 }, "to": { "line": 0, "ch": 40 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 41 }]], [137, ["text", { "from": { "line": 0, "ch": 41 }, "to": { "line": 0, "ch": 41 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 42 }]], [112, ["text", { "from": { "line": 0, "ch": 42 }, "to": { "line": 0, "ch": 42 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 43 }]], [144, ["text", { "from": { "line": 0, "ch": 43 }, "to": { "line": 0, "ch": 43 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 44 }]], [96, ["text", { "from": { "line": 0, "ch": 44 }, "to": { "line": 0, "ch": 44 }, "text": ["n"], "removed": [""] }]], [1, ["cursor", { "line": 0, "ch": 45 }]], [71, ["text", { "from": { "line": 0, "ch": 45 }, "to": { "line": 0, "ch": 45 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 46 }]], [104, ["text", { "from": { "line": 0, "ch": 46 }, "to": { "line": 0, "ch": 46 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 47 }]], [136, ["text", { "from": { "line": 0, "ch": 47 }, "to": { "line": 0, "ch": 47 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 48 }]], [84, ["text", { "from": { "line": 0, "ch": 48 }, "to": { "line": 0, "ch": 48 }, "text": ["p"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 49 }]], [188, ["text", { "from": { "line": 0, "ch": 49 }, "to": { "line": 0, "ch": 49 }, "text": ["-"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 50 }]], [624, ["text", { "from": { "line": 0, "ch": 50 }, "to": { "line": 0, "ch": 50 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 51 }]], [248, ["text", { "from": { "line": 0, "ch": 51 }, "to": { "line": 0, "ch": 51 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 52 }]], [72, ["text", { "from": { "line": 0, "ch": 52 }, "to": { "line": 0, "ch": 52 }, "text": ["d"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 53 }]], [176, ["text", { "from": { "line": 0, "ch": 53 }, "to": { "line": 0, "ch": 53 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 54 }]], [192, ["text", { "from": { "line": 0, "ch": 54 }, "to": { "line": 0, "ch": 54 }, "text": ["b"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 55 }]], [128, ["text", { "from": { "line": 0, "ch": 55 }, "to": { "line": 0, "ch": 55 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 56 }]], [139, ["text", { "from": { "line": 0, "ch": 56 }, "to": { "line": 0, "ch": 56 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 57 }]], [125, ["text", { "from": { "line": 0, "ch": 57 }, "to": { "line": 0, "ch": 57 }, "text": ["t"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 58 }]], [121, ["text", { "from": { "line": 0, "ch": 58 }, "to": { "line": 0, "ch": 58 }, "text": ["h"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 59 }]], [351, ["command", "Ctrl-A"]], [0, ["cursor", { "line": 0, "ch": 0 }]], [305, ["command", "Alt-Right"]], [0, ["cursor", { "line": 0, "ch": 2 }]], [239, ["command", "Right"]], [0, ["cursor", { "line": 0, "ch": 3 }]], [170, ["command", "Right"]], [0, ["cursor", { "line": 0, "ch": 4 }]], [262, ["text", { "from": { "line": 0, "ch": 4 }, "to": { "line": 0, "ch": 5 }, "text": [""], "removed": ["O"] }]], [0, ["command", "Ctrl-D"]], [0, ["cursor", { "line": 0, "ch": 4 }]], [232, ["text", { "from": { "line": 0, "ch": 4 }, "to": { "line": 0, "ch": 4 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 0, "ch": 5 }]], [543, ["command", "Ctrl-N"]], [0, ["cursor", { "line": 1, "ch": 0 }]], [162, ["command", "Ctrl-N"]], [0, ["cursor", { "line": 2, "ch": 5 }]], [150, ["command", "Ctrl-N"]], [0, ["cursor", { "line": 2, "ch": 28 }]], [1289, ["command", "Cmd-Left"]], [0, ["selection", { "anchor": { "line": 2, "ch": 28 }, "head": { "line": 2, "ch": 0 } }]], [753, ["text", { "from": { "line": 2, "ch": 0 }, "to": { "line": 2, "ch": 28 }, "text": ["c"], "removed": ["console.log(\"Hello World!\");"] }]], [0, ["cursor", { "line": 2, "ch": 1 }]], [167, ["text", { "from": { "line": 2, "ch": 1 }, "to": { "line": 2, "ch": 1 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 2 }]], [72, ["text", { "from": { "line": 2, "ch": 2 }, "to": { "line": 2, "ch": 2 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 3 }]], [88, ["text", { "from": { "line": 2, "ch": 3 }, "to": { "line": 2, "ch": 3 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 4 }]], [192, ["text", { "from": { "line": 2, "ch": 4 }, "to": { "line": 2, "ch": 4 }, "text": ["t"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 5 }]], [136, ["text", { "from": { "line": 2, "ch": 5 }, "to": { "line": 2, "ch": 5 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 6 }]], [537, ["command", "Cmd-K"]], [543, ["text", { "from": { "line": 2, "ch": 6 }, "to": { "line": 2, "ch": 6 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 7 }]], [112, ["text", { "from": { "line": 2, "ch": 7 }, "to": { "line": 2, "ch": 7 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 8 }]], [80, ["text", { "from": { "line": 2, "ch": 8 }, "to": { "line": 2, "ch": 8 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 9 }]], [88, ["text", { "from": { "line": 2, "ch": 9 }, "to": { "line": 2, "ch": 9 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 10 }]], [152, ["text", { "from": { "line": 2, "ch": 10 }, "to": { "line": 2, "ch": 10 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 11 }]], [120, ["text", { "from": { "line": 2, "ch": 11 }, "to": { "line": 2, "ch": 11 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 12 }]], [96, ["text", { "from": { "line": 2, "ch": 12 }, "to": { "line": 2, "ch": 12 }, "text": ["="], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 13 }]], [80, ["text", { "from": { "line": 2, "ch": 13 }, "to": { "line": 2, "ch": 13 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 14 }]], [432, ["text", { "from": { "line": 2, "ch": 14 }, "to": { "line": 2, "ch": 14 }, "text": ["{"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 15 }]], [392, ["text", { "from": { "line": 2, "ch": 15 }, "to": { "line": 2, "ch": 15 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 16 }]], [255, ["text", { "from": { "line": 2, "ch": 15 }, "to": { "line": 2, "ch": 16 }, "text": [""], "removed": ["\""] }]], [0, ["command", "Backspace"]], [0, ["cursor", { "line": 2, "ch": 15 }]], [139, ["text", { "from": { "line": 2, "ch": 14 }, "to": { "line": 2, "ch": 15 }, "text": [""], "removed": ["{"] }]], [0, ["command", "Backspace"]], [0, ["cursor", { "line": 2, "ch": 14 }]], [215, ["text", { "from": { "line": 2, "ch": 14 }, "to": { "line": 2, "ch": 14 }, "text": ["["], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 15 }]], [480, ["text", { "from": { "line": 2, "ch": 15 }, "to": { "line": 2, "ch": 15 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 16 }]], [174, ["text", { "from": { "line": 2, "ch": 16 }, "to": { "line": 2, "ch": 16 }, "text": ["A"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 17 }]], [600, ["text", { "from": { "line": 2, "ch": 17 }, "to": { "line": 2, "ch": 17 }, "text": ["l"], "removed": [""] }]], [1, ["cursor", { "line": 2, "ch": 18 }]], [103, ["text", { "from": { "line": 2, "ch": 18 }, "to": { "line": 2, "ch": 18 }, "text": ["i"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 19 }]], [57, ["text", { "from": { "line": 2, "ch": 19 }, "to": { "line": 2, "ch": 19 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 20 }]], [72, ["text", { "from": { "line": 2, "ch": 20 }, "to": { "line": 2, "ch": 20 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 21 }]], [184, ["text", { "from": { "line": 2, "ch": 21 }, "to": { "line": 2, "ch": 21 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 22 }]], [272, ["text", { "from": { "line": 2, "ch": 22 }, "to": { "line": 2, "ch": 22 }, "text": [","], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 23 }]], [112, ["text", { "from": { "line": 2, "ch": 23 }, "to": { "line": 2, "ch": 23 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 24 }]], [175, ["text", { "from": { "line": 2, "ch": 24 }, "to": { "line": 2, "ch": 24 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 25 }]], [216, ["text", { "from": { "line": 2, "ch": 25 }, "to": { "line": 2, "ch": 25 }, "text": ["B"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 26 }]], [449, ["text", { "from": { "line": 2, "ch": 26 }, "to": { "line": 2, "ch": 26 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 27 }]], [144, ["text", { "from": { "line": 2, "ch": 27 }, "to": { "line": 2, "ch": 27 }, "text": ["b"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 28 }]], [256, ["text", { "from": { "line": 2, "ch": 28 }, "to": { "line": 2, "ch": 28 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 29 }]], [248, ["text", { "from": { "line": 2, "ch": 29 }, "to": { "line": 2, "ch": 29 }, "text": [","], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 30 }]], [104, ["text", { "from": { "line": 2, "ch": 30 }, "to": { "line": 2, "ch": 30 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 31 }]], [408, ["text", { "from": { "line": 2, "ch": 31 }, "to": { "line": 2, "ch": 31 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 32 }]], [448, ["text", { "from": { "line": 2, "ch": 32 }, "to": { "line": 2, "ch": 32 }, "text": ["C"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 33 }]], [168, ["text", { "from": { "line": 2, "ch": 33 }, "to": { "line": 2, "ch": 33 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 34 }]], [160, ["text", { "from": { "line": 2, "ch": 34 }, "to": { "line": 2, "ch": 34 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 35 }]], [64, ["text", { "from": { "line": 2, "ch": 35 }, "to": { "line": 2, "ch": 35 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 36 }]], [209, ["text", { "from": { "line": 2, "ch": 36 }, "to": { "line": 2, "ch": 36 }, "text": ["\""], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 37 }]], [263, ["text", { "from": { "line": 2, "ch": 37 }, "to": { "line": 2, "ch": 37 }, "text": ["]"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 38 }]], [256, ["text", { "from": { "line": 2, "ch": 38 }, "to": { "line": 2, "ch": 38 }, "text": [";"], "removed": [""] }]], [0, ["cursor", { "line": 2, "ch": 39 }]], [265, ["text", { "from": { "line": 2, "ch": 39 }, "to": { "line": 2, "ch": 39 }, "text": ["", ""], "removed": [""] }]], [0, ["command", "Enter"]], [0, ["cursor", { "line": 3, "ch": 0 }]], [129, ["text", { "from": { "line": 3, "ch": 0 }, "to": { "line": 3, "ch": 0 }, "text": ["", ""], "removed": [""] }]], [0, ["command", "Enter"]], [0, ["cursor", { "line": 4, "ch": 0 }]], [110, ["text", { "from": { "line": 4, "ch": 0 }, "to": { "line": 4, "ch": 0 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 1 }]], [88, ["text", { "from": { "line": 4, "ch": 1 }, "to": { "line": 4, "ch": 1 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 2 }]], [80, ["text", { "from": { "line": 4, "ch": 2 }, "to": { "line": 4, "ch": 2 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 3 }]], [168, ["text", { "from": { "line": 4, "ch": 3 }, "to": { "line": 4, "ch": 3 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 4 }]], [39, ["text", { "from": { "line": 4, "ch": 4 }, "to": { "line": 4, "ch": 4 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 5 }]], [210, ["text", { "from": { "line": 4, "ch": 5 }, "to": { "line": 4, "ch": 5 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 6 }]], [95, ["text", { "from": { "line": 4, "ch": 6 }, "to": { "line": 4, "ch": 6 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 7 }]], [120, ["text", { "from": { "line": 4, "ch": 7 }, "to": { "line": 4, "ch": 7 }, "text": ["."], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 8 }]], [167, ["text", { "from": { "line": 4, "ch": 8 }, "to": { "line": 4, "ch": 8 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 9 }]], [169, ["text", { "from": { "line": 4, "ch": 9 }, "to": { "line": 4, "ch": 9 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 10 }]], [112, ["text", { "from": { "line": 4, "ch": 10 }, "to": { "line": 4, "ch": 10 }, "text": ["g"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 11 }]], [151, ["text", { "from": { "line": 4, "ch": 11 }, "to": { "line": 4, "ch": 11 }, "text": ["("], "removed": [""] }]], [1, ["cursor", { "line": 4, "ch": 12 }]], [272, ["text", { "from": { "line": 4, "ch": 12 }, "to": { "line": 4, "ch": 12 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 13 }]], [464, ["text", { "from": { "line": 4, "ch": 13 }, "to": { "line": 4, "ch": 13 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 14 }]], [80, ["text", { "from": { "line": 4, "ch": 14 }, "to": { "line": 4, "ch": 14 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 15 }]], [87, ["text", { "from": { "line": 4, "ch": 15 }, "to": { "line": 4, "ch": 15 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 16 }]], [153, ["text", { "from": { "line": 4, "ch": 16 }, "to": { "line": 4, "ch": 16 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 17 }]], [96, ["text", { "from": { "line": 4, "ch": 17 }, "to": { "line": 4, "ch": 17 }, "text": ["["], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 18 }]], [128, ["text", { "from": { "line": 4, "ch": 18 }, "to": { "line": 4, "ch": 18 }, "text": ["1"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 19 }]], [143, ["text", { "from": { "line": 4, "ch": 19 }, "to": { "line": 4, "ch": 19 }, "text": ["]"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 20 }]], [225, ["text", { "from": { "line": 4, "ch": 20 }, "to": { "line": 4, "ch": 20 }, "text": [")"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 21 }]], [233, ["text", { "from": { "line": 4, "ch": 21 }, "to": { "line": 4, "ch": 21 }, "text": [";"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 22 }]], [352, ["command", "Cmd-Enter"]], [2543, ["cursor", { "line": 4, "ch": 19 }]], [464, ["text", { "from": { "line": 4, "ch": 18 }, "to": { "line": 4, "ch": 19 }, "text": [""], "removed": ["1"] }]], [0, ["command", "Backspace"]], [0, ["cursor", { "line": 4, "ch": 18 }]], [408, ["text", { "from": { "line": 4, "ch": 18 }, "to": { "line": 4, "ch": 18 }, "text": ["0"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 19 }]], [529, ["command", "Cmd-Enter"]], [2595, ["cursor", { "line": 4, "ch": 22 }]], [1290, ["command", "Cmd-Left"]], [0, ["selection", { "anchor": { "line": 4, "ch": 22 }, "head": { "line": 4, "ch": 0 } }]], [1105, ["text", { "from": { "line": 4, "ch": 0 }, "to": { "line": 4, "ch": 22 }, "text": ["c"], "removed": ["console.log(names[0]);"] }]], [0, ["cursor", { "line": 4, "ch": 1 }]], [64, ["text", { "from": { "line": 4, "ch": 1 }, "to": { "line": 4, "ch": 1 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 2 }]], [63, ["text", { "from": { "line": 4, "ch": 2 }, "to": { "line": 4, "ch": 2 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 3 }]], [64, ["text", { "from": { "line": 4, "ch": 3 }, "to": { "line": 4, "ch": 3 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 4 }]], [184, ["text", { "from": { "line": 4, "ch": 4 }, "to": { "line": 4, "ch": 4 }, "text": ["t"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 5 }]], [144, ["text", { "from": { "line": 4, "ch": 5 }, "to": { "line": 4, "ch": 5 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 6 }]], [288, ["text", { "from": { "line": 4, "ch": 6 }, "to": { "line": 4, "ch": 6 }, "text": ["f"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 7 }]], [112, ["text", { "from": { "line": 4, "ch": 7 }, "to": { "line": 4, "ch": 7 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 8 }]], [88, ["text", { "from": { "line": 4, "ch": 8 }, "to": { "line": 4, "ch": 8 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 9 }]], [226, ["text", { "from": { "line": 4, "ch": 9 }, "to": { "line": 4, "ch": 9 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 10 }]], [319, ["text", { "from": { "line": 4, "ch": 6 }, "to": { "line": 4, "ch": 10 }, "text": [""], "removed": ["for "] }]], [0, ["command", "Alt-Backspace"]], [0, ["cursor", { "line": 4, "ch": 6 }]], [151, ["text", { "from": { "line": 4, "ch": 0 }, "to": { "line": 4, "ch": 6 }, "text": [""], "removed": ["const "] }]], [0, ["command", "Alt-Backspace"]], [0, ["cursor", { "line": 4, "ch": 0 }]], [512, ["text", { "from": { "line": 4, "ch": 0 }, "to": { "line": 4, "ch": 0 }, "text": ["f"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 1 }]], [112, ["text", { "from": { "line": 4, "ch": 1 }, "to": { "line": 4, "ch": 1 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 2 }]], [111, ["text", { "from": { "line": 4, "ch": 2 }, "to": { "line": 4, "ch": 2 }, "text": ["r"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 3 }]], [89, ["text", { "from": { "line": 4, "ch": 3 }, "to": { "line": 4, "ch": 3 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 4 }]], [184, ["text", { "from": { "line": 4, "ch": 4 }, "to": { "line": 4, "ch": 4 }, "text": ["("], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 5 }]], [257, ["command", "Cmd-K"]], [231, ["text", { "from": { "line": 4, "ch": 5 }, "to": { "line": 4, "ch": 5 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 6 }]], [97, ["text", { "from": { "line": 4, "ch": 6 }, "to": { "line": 4, "ch": 6 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 7 }]], [55, ["text", { "from": { "line": 4, "ch": 7 }, "to": { "line": 4, "ch": 7 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 8 }]], [48, ["text", { "from": { "line": 4, "ch": 8 }, "to": { "line": 4, "ch": 8 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 9 }]], [136, ["text", { "from": { "line": 4, "ch": 9 }, "to": { "line": 4, "ch": 9 }, "text": ["t"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 10 }]], [120, ["text", { "from": { "line": 4, "ch": 10 }, "to": { "line": 4, "ch": 10 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 11 }]], [64, ["text", { "from": { "line": 4, "ch": 11 }, "to": { "line": 4, "ch": 11 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 12 }]], [200, ["text", { "from": { "line": 4, "ch": 12 }, "to": { "line": 4, "ch": 12 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 13 }]], [384, ["text", { "from": { "line": 4, "ch": 12 }, "to": { "line": 4, "ch": 13 }, "text": [""], "removed": ["m"] }]], [0, ["command", "Backspace"]], [0, ["cursor", { "line": 4, "ch": 12 }]], [120, ["text", { "from": { "line": 4, "ch": 12 }, "to": { "line": 4, "ch": 12 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 13 }]], [55, ["text", { "from": { "line": 4, "ch": 13 }, "to": { "line": 4, "ch": 13 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 14 }]], [120, ["text", { "from": { "line": 4, "ch": 14 }, "to": { "line": 4, "ch": 14 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 15 }]], [96, ["text", { "from": { "line": 4, "ch": 15 }, "to": { "line": 4, "ch": 15 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 16 }]], [145, ["text", { "from": { "line": 4, "ch": 16 }, "to": { "line": 4, "ch": 16 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 17 }]], [128, ["text", { "from": { "line": 4, "ch": 17 }, "to": { "line": 4, "ch": 17 }, "text": ["f"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 18 }]], [80, ["text", { "from": { "line": 4, "ch": 18 }, "to": { "line": 4, "ch": 18 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 19 }]], [376, ["text", { "from": { "line": 4, "ch": 19 }, "to": { "line": 4, "ch": 19 }, "text": ["n"], "removed": [""] }]], [1, ["cursor", { "line": 4, "ch": 20 }]], [102, ["text", { "from": { "line": 4, "ch": 20 }, "to": { "line": 4, "ch": 20 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 21 }]], [105, ["text", { "from": { "line": 4, "ch": 21 }, "to": { "line": 4, "ch": 21 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 22 }]], [56, ["text", { "from": { "line": 4, "ch": 22 }, "to": { "line": 4, "ch": 22 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 23 }]], [289, ["text", { "from": { "line": 4, "ch": 23 }, "to": { "line": 4, "ch": 23 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 24 }]], [239, ["text", { "from": { "line": 4, "ch": 24 }, "to": { "line": 4, "ch": 24 }, "text": [")"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 25 }]], [176, ["text", { "from": { "line": 4, "ch": 25 }, "to": { "line": 4, "ch": 25 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 26 }]], [160, ["text", { "from": { "line": 4, "ch": 26 }, "to": { "line": 4, "ch": 26 }, "text": ["{"], "removed": [""] }]], [0, ["cursor", { "line": 4, "ch": 27 }]], [205, ["text", { "from": { "line": 4, "ch": 27 }, "to": { "line": 4, "ch": 27 }, "text": ["", ""], "removed": [""] }]], [0, ["text", { "from": { "line": 5, "ch": 0 }, "to": { "line": 5, "ch": 0 }, "text": ["    "], "removed": [""] }]], [0, ["command", "Enter"]], [0, ["cursor", { "line": 5, "ch": 4 }]], [230, ["text", { "from": { "line": 5, "ch": 4 }, "to": { "line": 5, "ch": 4 }, "text": ["", ""], "removed": [""] }]], [0, ["text", { "from": { "line": 6, "ch": 0 }, "to": { "line": 6, "ch": 0 }, "text": ["    "], "removed": [""] }]], [0, ["command", "Enter"]], [0, ["cursor", { "line": 6, "ch": 4 }]], [221, ["text", { "from": { "line": 6, "ch": 4 }, "to": { "line": 6, "ch": 4 }, "text": ["}"], "removed": [""] }]], [0, ["text", { "from": { "line": 6, "ch": 0 }, "to": { "line": 6, "ch": 4 }, "text": [""], "removed": ["    "] }]], [0, ["cursor", { "line": 6, "ch": 1 }]], [313, ["command", "Ctrl-P"]], [0, ["cursor", { "line": 5, "ch": 1 }]], [167, ["command", "Ctrl-E"]], [0, ["cursor", { "line": 5, "ch": 4 }]], [272, ["text", { "from": { "line": 5, "ch": 4 }, "to": { "line": 5, "ch": 4 }, "text": ["c"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 5 }]], [96, ["text", { "from": { "line": 5, "ch": 5 }, "to": { "line": 5, "ch": 5 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 6 }]], [72, ["text", { "from": { "line": 5, "ch": 6 }, "to": { "line": 5, "ch": 6 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 7 }]], [48, ["text", { "from": { "line": 5, "ch": 7 }, "to": { "line": 5, "ch": 7 }, "text": ["s"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 8 }]], [112, ["text", { "from": { "line": 5, "ch": 8 }, "to": { "line": 5, "ch": 8 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 9 }]], [160, ["text", { "from": { "line": 5, "ch": 9 }, "to": { "line": 5, "ch": 9 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 10 }]], [95, ["text", { "from": { "line": 5, "ch": 10 }, "to": { "line": 5, "ch": 10 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 11 }]], [121, ["text", { "from": { "line": 5, "ch": 11 }, "to": { "line": 5, "ch": 11 }, "text": ["."], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 12 }]], [176, ["text", { "from": { "line": 5, "ch": 12 }, "to": { "line": 5, "ch": 12 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 13 }]], [177, ["text", { "from": { "line": 5, "ch": 13 }, "to": { "line": 5, "ch": 13 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 14 }]], [102, ["text", { "from": { "line": 5, "ch": 14 }, "to": { "line": 5, "ch": 14 }, "text": ["g"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 15 }]], [233, ["text", { "from": { "line": 5, "ch": 15 }, "to": { "line": 5, "ch": 15 }, "text": ["("], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 16 }]], [256, ["text", { "from": { "line": 5, "ch": 16 }, "to": { "line": 5, "ch": 16 }, "text": ["`"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 17 }]], [472, ["text", { "from": { "line": 5, "ch": 17 }, "to": { "line": 5, "ch": 17 }, "text": ["H"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 18 }]], [168, ["text", { "from": { "line": 5, "ch": 18 }, "to": { "line": 5, "ch": 18 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 19 }]], [72, ["text", { "from": { "line": 5, "ch": 19 }, "to": { "line": 5, "ch": 19 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 20 }]], [131, ["text", { "from": { "line": 5, "ch": 20 }, "to": { "line": 5, "ch": 20 }, "text": ["l"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 21 }]], [157, ["text", { "from": { "line": 5, "ch": 21 }, "to": { "line": 5, "ch": 21 }, "text": ["o"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 22 }]], [64, ["text", { "from": { "line": 5, "ch": 22 }, "to": { "line": 5, "ch": 22 }, "text": [" "], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 23 }]], [144, ["text", { "from": { "line": 5, "ch": 23 }, "to": { "line": 5, "ch": 23 }, "text": ["$"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 24 }]], [120, ["text", { "from": { "line": 5, "ch": 24 }, "to": { "line": 5, "ch": 24 }, "text": ["{"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 25 }]], [223, ["text", { "from": { "line": 5, "ch": 25 }, "to": { "line": 5, "ch": 25 }, "text": ["n"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 26 }]], [305, ["text", { "from": { "line": 5, "ch": 26 }, "to": { "line": 5, "ch": 26 }, "text": ["a"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 27 }]], [72, ["text", { "from": { "line": 5, "ch": 27 }, "to": { "line": 5, "ch": 27 }, "text": ["m"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 28 }]], [104, ["text", { "from": { "line": 5, "ch": 28 }, "to": { "line": 5, "ch": 28 }, "text": ["e"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 29 }]], [224, ["text", { "from": { "line": 5, "ch": 29 }, "to": { "line": 5, "ch": 29 }, "text": ["}"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 30 }]], [120, ["text", { "from": { "line": 5, "ch": 30 }, "to": { "line": 5, "ch": 30 }, "text": ["!"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 31 }]], [737, ["text", { "from": { "line": 5, "ch": 31 }, "to": { "line": 5, "ch": 31 }, "text": ["`"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 32 }]], [287, ["text", { "from": { "line": 5, "ch": 32 }, "to": { "line": 5, "ch": 32 }, "text": [")"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 33 }]], [200, ["text", { "from": { "line": 5, "ch": 33 }, "to": { "line": 5, "ch": 33 }, "text": [";"], "removed": [""] }]], [0, ["cursor", { "line": 5, "ch": 34 }]], [361, ["command", "Cmd-Enter"]]];
const cursorReplay = [[34, [50.313, 23]], [15, [50.234, 22.875]], [17, [50.156, 22.75]], [16, [50.078, 22.625]], [17, [49.922, 22.5]], [17, [49.766, 22.375]], [16, [49.688, 22.125]], [16, [49.453, 22]], [17, [49.219, 21.75]], [18, [49.063, 21.625]], [16, [48.906, 21.5]], [15, [48.75, 21.25]], [18, [48.594, 21.125]], [17, [48.594, 21.125]], [16, [48.516, 21.125]], [366, [48.516, 21.25]], [32, [48.516, 21.25]], [50, [48.516, 21.375]], [153, [48.438, 21.375]], [13, [48.359, 21.375]], [18, [48.203, 21.375]], [16, [47.813, 21.375]], [17, [47.422, 21.375]], [16, [47.109, 21.625]], [17, [46.563, 21.625]], [17, [45.938, 21.625]], [17, [45.156, 21.75]], [18, [44.453, 21.75]], [15, [43.359, 21.75]], [17, [42.031, 21.75]], [17, [40.469, 21.5]], [16, [38.828, 20.875]], [16, [37.266, 20.25]], [17, [35.234, 19.125]], [16, [34.063, 18.5]], [17, [33.047, 18]], [17, [32.266, 17.875]], [16, [31.563, 17.625]], [16, [31.016, 17.5]], [18, [30.625, 17.5]], [16, [30.469, 17.5]], [17, [30.391, 17.5]], [17, [30.391, 17.375]], [16, [30.391, 17.375]], [16, [30.391, 17.25]], [17, [30.391, 17]], [17, [30.391, 16.875]], [17, [30.391, 16.75]], [16, [30.391, 16.625]], [16, [30.391, 16.375]], [17, [30.391, 16.25]], [17, [30.391, 16.125]], [18, [30.391, 16]], [16, [30.391, 16]], [16, [30.391, 15.75]], [16, [30.391, 15.5]], [17, [30.312, 15.125]], [17, [30.156, 14.75]], [17, [30, 14.25]], [17, [29.922, 14]], [15, [29.844, 13.875]], [18, [29.844, 13.625]], [15, [29.766, 13.5]], [19, [29.766, 13.5]], [15, [29.766, 13.375]], [17, [29.688, 13.25]], [17, [29.688, 13.25]], [17, [29.688, 13.25]], [231, [29.688, 13.5]], [17, [29.688, 13.625]], [18, [29.766, 13.875]], [16, [29.844, 14.125]], [17, [29.922, 14.25]], [17, [30.156, 14.5]], [15, [30.234, 14.625]], [18, [30.469, 14.75]], [15, [30.938, 15.25]], [17, [31.484, 15.75]], [19, [32.109, 16.25]], [15, [32.656, 16.625]], [16, [33.281, 17]], [17, [33.984, 17.375]], [18, [34.531, 17.625]], [16, [34.922, 17.75]], [16, [35.547, 18]], [17, [36.25, 18.25]], [17, [37.188, 18.25]], [15, [38.125, 18.25]], [18, [39.141, 18.25]], [16, [40.234, 18.25]], [18, [41.25, 18.25]], [18, [42.891, 18.125]], [14, [44.609, 17.875]], [17, [46.406, 17.625]], [17, [48.281, 17.25]], [16, [50.859, 16.625]], [16, [52.812, 16.125]], [17, [53.594, 15.75]], [16, [56.484, 14.875]], [18, [58.281, 14.25]], [16, [59.844, 13.75]], [17, [60.703, 13.375]], [17, [61.953, 12.75]], [17, [62.578, 12.25]], [16, [63.125, 11.75]], [16, [63.672, 11.375]], [18, [64.141, 11]], [17, [64.688, 10.875]], [15, [65.469, 10.75]], [17, [66.563, 10.625]], [16, [67.578, 10.625]], [17, [68.75, 10.625]], [17, [69.844, 10.625]], [17, [70.703, 10.625]], [16, [71.484, 10.75]], [17, [72.188, 10.875]], [17, [72.422, 11.125]], [16, [72.578, 11.25]], [17, [72.656, 11.5]], [17, [72.656, 11.75]], [16, [72.813, 12.125]], [17, [72.813, 12.5]], [17, [72.813, 12.625]], [15, [72.813, 12.75]], [17, [72.813, 12.875]], [18, [72.813, 13]], [15, [72.813, 13]], [16, [72.813, 13.125]], [18, [72.813, 13.25]], [16, [72.813, 13.375]], [17, [72.813, 13.5]], [17, [72.813, 13.5]], [18, [72.813, 13.625]], [65, [72.813, 13.5]], [16, [72.813, 13.375]], [16, [72.813, 13.25]], [18, [72.813, 13.25]], [16, [72.813, 13.125]], [18, [72.656, 12.75]], [747, [72.656, 12.625]], [33, [72.656, 12.625]], [34, [72.656, 12.5]], [51, [72.578, 12.5]], [48, [72.578, 12.5]], [34, [72.578, 12.5]], [33, [72.5, 12.5]], [34, [72.5, 12.625]], [15, [72.5, 12.75]], [17, [72.5, 13]], [16, [72.5, 13.25]], [17, [72.5, 13.625]], [18, [72.5, 14.125]], [16, [72.5, 14.5]], [16, [72.5, 14.875]], [17, [72.5, 15.375]], [16, [72.5, 16.125]], [17, [72.5, 17.125]], [17, [72.344, 18.625]], [17, [72.109, 19.5]], [16, [72.031, 20.25]], [17, [71.875, 21]], [16, [71.797, 21.5]], [17, [71.641, 21.875]], [16, [71.641, 22]], [17, [71.641, 22.125]], [17, [71.563, 22.25]], [16, [71.563, 22.5]], [17, [71.484, 22.875]], [17, [71.406, 23.875]], [16, [71.25, 25.5]], [17, [71.094, 26.625]], [17, [70.859, 28]], [17, [70.625, 29]], [15, [70.547, 29.5]], [19, [70.547, 29.75]], [14, [70.547, 30]], [18, [70.547, 30.125]], [49, [70.625, 30.125]], [17, [70.859, 30]], [17, [71.328, 29.625]], [17, [71.953, 29.25]], [16, [72.813, 28.75]], [17, [73.984, 28]], [17, [75.391, 27]], [16, [76.719, 26.125]], [17, [77.5, 25.5]], [17, [78.203, 24.875]], [16, [78.75, 24.375]], [18, [79.063, 24.125]], [15, [79.219, 23.75]], [17, [79.375, 23.5]], [16, [79.453, 23.375]], [16, [79.453, 23.25]], [17, [79.531, 23.125]], [50, [79.531, 23.125]], [34, [79.531, 23]], [67, [79.531, 23]], [17, [79.531, 22.875]], [17, [79.531, 22.75]], [16, [79.531, 22.75]], [16, [79.531, 22.75]], [17, [79.531, 22.625]], [33, [79.531, 22.625]], [17, [79.453, 22.625]], [17, [79.219, 22.625]], [16, [79.063, 22.625]]];
const paintReplay = [[0, { "type": "change-sheet", "sheet": 0 }], [0, { "type": "set-stroke-style", "strokeStyle": "#000" }], [1632, { "type": "move-to", "x": 0.07265625, "y": 0.08 }], [23, { "type": "line-to", "x": 0.0734375, "y": 0.0825 }], [17, { "type": "line-to", "x": 0.0734375, "y": 0.08375 }], [14, { "type": "line-to", "x": 0.07421875, "y": 0.08375 }], [17, { "type": "line-to", "x": 0.07421875, "y": 0.08375 }], [16, { "type": "line-to", "x": 0.07421875, "y": 0.0825 }], [17, { "type": "line-to", "x": 0.07421875, "y": 0.07875 }], [17, { "type": "line-to", "x": 0.07109375, "y": 0.0675 }], [16, { "type": "line-to", "x": 0.0671875, "y": 0.0575 }], [20, { "type": "line-to", "x": 0.06328125, "y": 0.05 }], [13, { "type": "line-to", "x": 0.06015625, "y": 0.04625 }], [17, { "type": "line-to", "x": 0.05703125, "y": 0.0475 }], [18, { "type": "line-to", "x": 0.05546875, "y": 0.05375 }], [16, { "type": "line-to", "x": 0.0546875, "y": 0.07 }], [16, { "type": "line-to", "x": 0.05625, "y": 0.08875 }], [18, { "type": "line-to", "x": 0.059375, "y": 0.11125 }], [17, { "type": "line-to", "x": 0.06328125, "y": 0.14 }], [15, { "type": "line-to", "x": 0.065625, "y": 0.15375 }], [17, { "type": "line-to", "x": 0.06796875, "y": 0.16375 }], [17, { "type": "line-to", "x": 0.06953125, "y": 0.17125 }], [15, { "type": "line-to", "x": 0.06953125, "y": 0.17625 }], [17, { "type": "line-to", "x": 0.0671875, "y": 0.17625 }], [9, { "type": "line-to", "x": 0.065625, "y": 0.175 }], [121, { "type": "move-to", "x": 0.04609375, "y": 0.14125 }], [22, { "type": "line-to", "x": 0.0484375, "y": 0.14 }], [15, { "type": "line-to", "x": 0.05234375, "y": 0.13625 }], [16, { "type": "line-to", "x": 0.0625, "y": 0.12875 }], [18, { "type": "line-to", "x": 0.06875, "y": 0.1225 }], [15, { "type": "line-to", "x": 0.07421875, "y": 0.11875 }], [16, { "type": "line-to", "x": 0.07734375, "y": 0.1175 }], [387, { "type": "move-to", "x": 0.08828125, "y": 0.12625 }], [14, { "type": "line-to", "x": 0.08828125, "y": 0.13 }], [17, { "type": "line-to", "x": 0.08984375, "y": 0.13375 }], [14, { "type": "line-to", "x": 0.09140625, "y": 0.1425 }], [18, { "type": "line-to", "x": 0.0921875, "y": 0.15125 }], [17, { "type": "line-to", "x": 0.09375, "y": 0.165 }], [17, { "type": "line-to", "x": 0.09375, "y": 0.17125 }], [15, { "type": "line-to", "x": 0.09375, "y": 0.1725 }], [19, { "type": "line-to", "x": 0.09375, "y": 0.17125 }], [16, { "type": "line-to", "x": 0.09375, "y": 0.16375 }], [16, { "type": "line-to", "x": 0.0953125, "y": 0.14625 }], [16, { "type": "line-to", "x": 0.09609375, "y": 0.14125 }], [18, { "type": "line-to", "x": 0.09921875, "y": 0.12875 }], [15, { "type": "line-to", "x": 0.10234375, "y": 0.1275 }], [18, { "type": "line-to", "x": 0.10703125, "y": 0.1325 }], [17, { "type": "line-to", "x": 0.11015625, "y": 0.13875 }], [16, { "type": "line-to", "x": 0.11328125, "y": 0.14375 }], [19, { "type": "line-to", "x": 0.11640625, "y": 0.145 }], [13, { "type": "line-to", "x": 0.11953125, "y": 0.14625 }], [144, { "type": "move-to", "x": 0.121875, "y": 0.145 }], [40, { "type": "line-to", "x": 0.121875, "y": 0.14625 }], [16, { "type": "line-to", "x": 0.1234375, "y": 0.1475 }], [17, { "type": "line-to", "x": 0.12421875, "y": 0.1475 }], [18, { "type": "line-to", "x": 0.12734375, "y": 0.1425 }], [16, { "type": "line-to", "x": 0.12890625, "y": 0.13625 }], [16, { "type": "line-to", "x": 0.1296875, "y": 0.13 }], [16, { "type": "line-to", "x": 0.128125, "y": 0.12625 }], [17, { "type": "line-to", "x": 0.12578125, "y": 0.125 }], [17, { "type": "line-to", "x": 0.12265625, "y": 0.13 }], [16, { "type": "line-to", "x": 0.11796875, "y": 0.14375 }], [19, { "type": "line-to", "x": 0.1171875, "y": 0.16375 }], [16, { "type": "line-to", "x": 0.11796875, "y": 0.16875 }], [16, { "type": "line-to", "x": 0.12109375, "y": 0.17375 }], [16, { "type": "line-to", "x": 0.12890625, "y": 0.175 }], [16, { "type": "line-to", "x": 0.134375, "y": 0.1725 }], [5, { "type": "line-to", "x": 0.13671875, "y": 0.17125 }], [312, { "type": "move-to", "x": 0.14140625, "y": 0.14375 }], [16, { "type": "line-to", "x": 0.14453125, "y": 0.145 }], [17, { "type": "line-to", "x": 0.14609375, "y": 0.145 }], [16, { "type": "line-to", "x": 0.15, "y": 0.1425 }], [16, { "type": "line-to", "x": 0.15546875, "y": 0.135 }], [18, { "type": "line-to", "x": 0.15625, "y": 0.13 }], [17, { "type": "line-to", "x": 0.15546875, "y": 0.125 }], [16, { "type": "line-to", "x": 0.15, "y": 0.12125 }], [17, { "type": "line-to", "x": 0.1453125, "y": 0.12375 }], [17, { "type": "line-to", "x": 0.14140625, "y": 0.1325 }], [15, { "type": "line-to", "x": 0.13984375, "y": 0.145 }], [17, { "type": "line-to", "x": 0.14140625, "y": 0.16 }], [17, { "type": "line-to", "x": 0.15390625, "y": 0.17125 }], [16, { "type": "line-to", "x": 0.1578125, "y": 0.17125 }], [19, { "type": "line-to", "x": 0.1671875, "y": 0.16375 }], [454, { "type": "move-to", "x": 0.15859375, "y": 0.055 }], [27, { "type": "line-to", "x": 0.16015625, "y": 0.055 }], [16, { "type": "line-to", "x": 0.16171875, "y": 0.0575 }], [17, { "type": "line-to", "x": 0.1625, "y": 0.0625 }], [19, { "type": "line-to", "x": 0.1640625, "y": 0.0725 }], [15, { "type": "line-to", "x": 0.1671875, "y": 0.08875 }], [15, { "type": "line-to", "x": 0.1703125, "y": 0.10875 }], [16, { "type": "line-to", "x": 0.175, "y": 0.1375 }], [18, { "type": "line-to", "x": 0.17734375, "y": 0.15125 }], [18, { "type": "line-to", "x": 0.178125, "y": 0.16125 }], [16, { "type": "line-to", "x": 0.178125, "y": 0.165 }], [15, { "type": "line-to", "x": 0.178125, "y": 0.16125 }], [17, { "type": "line-to", "x": 0.1765625, "y": 0.15125 }], [18, { "type": "line-to", "x": 0.175, "y": 0.1375 }], [15, { "type": "line-to", "x": 0.175, "y": 0.125 }], [17, { "type": "line-to", "x": 0.1765625, "y": 0.1175 }], [18, { "type": "line-to", "x": 0.18203125, "y": 0.1175 }], [16, { "type": "line-to", "x": 0.1859375, "y": 0.12125 }], [15, { "type": "line-to", "x": 0.18984375, "y": 0.13 }], [19, { "type": "line-to", "x": 0.19375, "y": 0.1425 }], [15, { "type": "line-to", "x": 0.1953125, "y": 0.14875 }], [16, { "type": "line-to", "x": 0.19765625, "y": 0.1675 }], [19, { "type": "line-to", "x": 0.19765625, "y": 0.16875 }], [16, { "type": "line-to", "x": 0.19765625, "y": 0.16625 }], [163, { "type": "move-to", "x": 0.2140625, "y": 0.12125 }], [19, { "type": "line-to", "x": 0.21328125, "y": 0.11875 }], [17, { "type": "line-to", "x": 0.2109375, "y": 0.1175 }], [16, { "type": "line-to", "x": 0.20859375, "y": 0.1225 }], [18, { "type": "line-to", "x": 0.20625, "y": 0.13125 }], [16, { "type": "line-to", "x": 0.2046875, "y": 0.14 }], [16, { "type": "line-to", "x": 0.20390625, "y": 0.14875 }], [17, { "type": "line-to", "x": 0.20703125, "y": 0.1525 }], [17, { "type": "line-to", "x": 0.21015625, "y": 0.15 }], [17, { "type": "line-to", "x": 0.21328125, "y": 0.1425 }], [15, { "type": "line-to", "x": 0.21484375, "y": 0.135 }], [17, { "type": "line-to", "x": 0.21484375, "y": 0.125 }], [18, { "type": "line-to", "x": 0.21484375, "y": 0.12125 }], [17, { "type": "line-to", "x": 0.215625, "y": 0.12 }], [14, { "type": "line-to", "x": 0.2171875, "y": 0.12375 }], [18, { "type": "line-to", "x": 0.2203125, "y": 0.1375 }], [17, { "type": "line-to", "x": 0.22265625, "y": 0.145 }], [16, { "type": "line-to", "x": 0.22421875, "y": 0.14875 }], [16, { "type": "line-to", "x": 0.2265625, "y": 0.15125 }], [18, { "type": "line-to", "x": 0.22734375, "y": 0.15125 }], [123, { "type": "move-to", "x": 0.2296875, "y": 0.1175 }], [13, { "type": "line-to", "x": 0.2296875, "y": 0.1175 }], [14, { "type": "line-to", "x": 0.2296875, "y": 0.11625 }], [16, { "type": "line-to", "x": 0.23046875, "y": 0.12 }], [17, { "type": "line-to", "x": 0.23046875, "y": 0.12625 }], [16, { "type": "line-to", "x": 0.23125, "y": 0.13375 }], [17, { "type": "line-to", "x": 0.23203125, "y": 0.14125 }], [15, { "type": "line-to", "x": 0.2328125, "y": 0.14625 }], [19, { "type": "line-to", "x": 0.23359375, "y": 0.14875 }], [16, { "type": "line-to", "x": 0.234375, "y": 0.1475 }], [17, { "type": "line-to", "x": 0.23515625, "y": 0.14 }], [17, { "type": "line-to", "x": 0.23671875, "y": 0.13125 }], [15, { "type": "line-to", "x": 0.23984375, "y": 0.11875 }], [18, { "type": "line-to", "x": 0.24375, "y": 0.11625 }], [18, { "type": "line-to", "x": 0.24609375, "y": 0.1175 }], [15, { "type": "line-to", "x": 0.2484375, "y": 0.1225 }], [15, { "type": "line-to", "x": 0.24921875, "y": 0.13125 }], [18, { "type": "line-to", "x": 0.25, "y": 0.1425 }], [16, { "type": "line-to", "x": 0.25, "y": 0.1475 }], [17, { "type": "line-to", "x": 0.25, "y": 0.15 }], [11, { "type": "line-to", "x": 0.25, "y": 0.15125 }], [226, { "type": "move-to", "x": 0.26796875, "y": 0.1175 }], [30, { "type": "line-to", "x": 0.26796875, "y": 0.1175 }], [15, { "type": "line-to", "x": 0.2671875, "y": 0.115 }], [19, { "type": "line-to", "x": 0.265625, "y": 0.115 }], [16, { "type": "line-to", "x": 0.2640625, "y": 0.115 }], [16, { "type": "line-to", "x": 0.26171875, "y": 0.1175 }], [15, { "type": "line-to", "x": 0.25859375, "y": 0.1275 }], [18, { "type": "line-to", "x": 0.25703125, "y": 0.1375 }], [17, { "type": "line-to", "x": 0.2578125, "y": 0.1475 }], [17, { "type": "line-to", "x": 0.26015625, "y": 0.155 }], [15, { "type": "line-to", "x": 0.26640625, "y": 0.1575 }], [18, { "type": "line-to", "x": 0.271875, "y": 0.155 }], [15, { "type": "line-to", "x": 0.27578125, "y": 0.15 }], [20, { "type": "line-to", "x": 0.27890625, "y": 0.1425 }], [13, { "type": "line-to", "x": 0.2796875, "y": 0.13375 }], [17, { "type": "line-to", "x": 0.2796875, "y": 0.12125 }], [17, { "type": "line-to", "x": 0.27734375, "y": 0.095 }], [18, { "type": "line-to", "x": 0.275, "y": 0.07875 }], [17, { "type": "line-to", "x": 0.27265625, "y": 0.065 }], [15, { "type": "line-to", "x": 0.26953125, "y": 0.055 }], [18, { "type": "line-to", "x": 0.26796875, "y": 0.0525 }], [16, { "type": "line-to", "x": 0.2671875, "y": 0.05 }], [18, { "type": "line-to", "x": 0.2671875, "y": 0.05 }], [15, { "type": "line-to", "x": 0.2671875, "y": 0.05125 }], [18, { "type": "line-to", "x": 0.26875, "y": 0.055 }], [16, { "type": "line-to", "x": 0.2734375, "y": 0.07375 }], [16, { "type": "line-to", "x": 0.2765625, "y": 0.09375 }], [18, { "type": "line-to", "x": 0.27890625, "y": 0.1175 }], [14, { "type": "line-to", "x": 0.2828125, "y": 0.1425 }], [17, { "type": "line-to", "x": 0.28515625, "y": 0.15375 }], [18, { "type": "line-to", "x": 0.28671875, "y": 0.1575 }], [17, { "type": "line-to", "x": 0.2875, "y": 0.15875 }], [520, { "type": "move-to", "x": 0.3484375, "y": 0.0975 }], [11, { "type": "line-to", "x": 0.3484375, "y": 0.09625 }], [17, { "type": "line-to", "x": 0.3484375, "y": 0.09625 }], [15, { "type": "line-to", "x": 0.3484375, "y": 0.09875 }], [19, { "type": "line-to", "x": 0.34921875, "y": 0.11 }], [16, { "type": "line-to", "x": 0.35078125, "y": 0.1225 }], [17, { "type": "line-to", "x": 0.35390625, "y": 0.13375 }], [16, { "type": "line-to", "x": 0.35859375, "y": 0.14125 }], [17, { "type": "line-to", "x": 0.36484375, "y": 0.145 }], [17, { "type": "line-to", "x": 0.375, "y": 0.1425 }], [16, { "type": "line-to", "x": 0.38046875, "y": 0.135 }], [16, { "type": "line-to", "x": 0.384375, "y": 0.12625 }], [16, { "type": "line-to", "x": 0.384375, "y": 0.115 }], [18, { "type": "line-to", "x": 0.38125, "y": 0.1 }], [15, { "type": "line-to", "x": 0.37890625, "y": 0.09625 }], [19, { "type": "line-to", "x": 0.37734375, "y": 0.10125 }], [17, { "type": "line-to", "x": 0.37734375, "y": 0.11 }], [15, { "type": "line-to", "x": 0.3796875, "y": 0.12125 }], [17, { "type": "line-to", "x": 0.384375, "y": 0.13125 }], [17, { "type": "line-to", "x": 0.38828125, "y": 0.135 }], [17, { "type": "line-to", "x": 0.39140625, "y": 0.13375 }], [16, { "type": "line-to", "x": 0.39296875, "y": 0.13 }], [15, { "type": "line-to", "x": 0.39375, "y": 0.11875 }], [18, { "type": "line-to", "x": 0.39140625, "y": 0.1075 }], [18, { "type": "line-to", "x": 0.3890625, "y": 0.09375 }], [16, { "type": "line-to", "x": 0.38671875, "y": 0.085 }], [15, { "type": "line-to", "x": 0.38515625, "y": 0.08625 }], [16, { "type": "line-to", "x": 0.38515625, "y": 0.0975 }], [17, { "type": "line-to", "x": 0.3875, "y": 0.105 }], [254, { "type": "move-to", "x": 0.415625, "y": 0.1075 }], [14, { "type": "line-to", "x": 0.4171875, "y": 0.11 }], [15, { "type": "line-to", "x": 0.41875, "y": 0.115 }], [16, { "type": "line-to", "x": 0.42109375, "y": 0.1275 }], [18, { "type": "line-to", "x": 0.421875, "y": 0.135 }], [19, { "type": "line-to", "x": 0.421875, "y": 0.14125 }], [14, { "type": "line-to", "x": 0.42109375, "y": 0.1425 }], [17, { "type": "line-to", "x": 0.42109375, "y": 0.13625 }], [16, { "type": "line-to", "x": 0.42109375, "y": 0.12625 }], [17, { "type": "line-to", "x": 0.42109375, "y": 0.115 }], [18, { "type": "line-to", "x": 0.42265625, "y": 0.1025 }], [17, { "type": "line-to", "x": 0.42421875, "y": 0.0975 }], [15, { "type": "line-to", "x": 0.42734375, "y": 0.10125 }], [16, { "type": "line-to", "x": 0.43046875, "y": 0.10625 }], [19, { "type": "line-to", "x": 0.43359375, "y": 0.11125 }], [9, { "type": "line-to", "x": 0.43515625, "y": 0.1125 }], [100, { "type": "move-to", "x": 0.44375, "y": 0.11875 }], [6, { "type": "line-to", "x": 0.44296875, "y": 0.12125 }], [15, { "type": "line-to", "x": 0.44296875, "y": 0.1275 }], [19, { "type": "line-to", "x": 0.44296875, "y": 0.13375 }], [17, { "type": "line-to", "x": 0.44375, "y": 0.1375 }], [14, { "type": "line-to", "x": 0.44453125, "y": 0.1375 }], [19, { "type": "line-to", "x": 0.4453125, "y": 0.13125 }], [121, { "type": "move-to", "x": 0.434375, "y": 0.06625 }], [10, { "type": "line-to", "x": 0.43515625, "y": 0.06625 }], [18, { "type": "line-to", "x": 0.4390625, "y": 0.06625 }], [15, { "type": "line-to", "x": 0.4421875, "y": 0.065 }], [12, { "type": "line-to", "x": 0.44375, "y": 0.06375 }], [178, { "type": "move-to", "x": 0.46484375, "y": 0.045 }], [10, { "type": "line-to", "x": 0.4640625, "y": 0.0475 }], [16, { "type": "line-to", "x": 0.4640625, "y": 0.0525 }], [18, { "type": "line-to", "x": 0.4640625, "y": 0.06125 }], [16, { "type": "line-to", "x": 0.46484375, "y": 0.07625 }], [17, { "type": "line-to", "x": 0.4671875, "y": 0.09375 }], [16, { "type": "line-to", "x": 0.46875, "y": 0.11125 }], [18, { "type": "line-to", "x": 0.471875, "y": 0.13 }], [17, { "type": "line-to", "x": 0.47421875, "y": 0.1375 }], [17, { "type": "line-to", "x": 0.47578125, "y": 0.14125 }], [118, { "type": "move-to", "x": 0.4515625, "y": 0.09875 }], [14, { "type": "line-to", "x": 0.45546875, "y": 0.1 }], [17, { "type": "line-to", "x": 0.46171875, "y": 0.1 }], [16, { "type": "line-to", "x": 0.4703125, "y": 0.0975 }], [16, { "type": "line-to", "x": 0.4828125, "y": 0.095 }], [17, { "type": "line-to", "x": 0.48984375, "y": 0.09375 }], [13, { "type": "line-to", "x": 0.4921875, "y": 0.09375 }], [113, { "type": "move-to", "x": 0.4984375, "y": 0.10375 }], [7, { "type": "line-to", "x": 0.4984375, "y": 0.10625 }], [17, { "type": "line-to", "x": 0.49921875, "y": 0.11375 }], [17, { "type": "line-to", "x": 0.49921875, "y": 0.12125 }], [16, { "type": "line-to", "x": 0.5, "y": 0.1275 }], [15, { "type": "line-to", "x": 0.50078125, "y": 0.13125 }], [19, { "type": "line-to", "x": 0.5015625, "y": 0.12875 }], [134, { "type": "move-to", "x": 0.490625, "y": 0.05625 }], [14, { "type": "line-to", "x": 0.4921875, "y": 0.05875 }], [20, { "type": "line-to", "x": 0.49375, "y": 0.06125 }], [11, { "type": "line-to", "x": 0.49453125, "y": 0.06125 }], [157, { "type": "move-to", "x": 0.5078125, "y": 0.0825 }], [29, { "type": "line-to", "x": 0.50859375, "y": 0.08375 }], [16, { "type": "line-to", "x": 0.509375, "y": 0.09125 }], [17, { "type": "line-to", "x": 0.509375, "y": 0.105 }], [16, { "type": "line-to", "x": 0.51015625, "y": 0.115 }], [19, { "type": "line-to", "x": 0.5109375, "y": 0.12125 }], [14, { "type": "line-to", "x": 0.51171875, "y": 0.12375 }], [17, { "type": "line-to", "x": 0.51171875, "y": 0.12125 }], [16, { "type": "line-to", "x": 0.51328125, "y": 0.115 }], [20, { "type": "line-to", "x": 0.51484375, "y": 0.10375 }], [16, { "type": "line-to", "x": 0.51796875, "y": 0.09125 }], [15, { "type": "line-to", "x": 0.52265625, "y": 0.08375 }], [18, { "type": "line-to", "x": 0.52421875, "y": 0.0875 }], [15, { "type": "line-to", "x": 0.525, "y": 0.095 }], [17, { "type": "line-to", "x": 0.5265625, "y": 0.10375 }], [18, { "type": "line-to", "x": 0.5296875, "y": 0.10875 }], [16, { "type": "line-to", "x": 0.53515625, "y": 0.1125 }], [126, { "type": "move-to", "x": 0.5453125, "y": 0.085 }], [23, { "type": "line-to", "x": 0.5421875, "y": 0.08375 }], [18, { "type": "line-to", "x": 0.53984375, "y": 0.08375 }], [15, { "type": "line-to", "x": 0.53671875, "y": 0.09 }], [17, { "type": "line-to", "x": 0.53515625, "y": 0.09875 }], [16, { "type": "line-to", "x": 0.534375, "y": 0.11 }], [18, { "type": "line-to", "x": 0.53828125, "y": 0.1175 }], [16, { "type": "line-to", "x": 0.54375, "y": 0.1175 }], [16, { "type": "line-to", "x": 0.54921875, "y": 0.1125 }], [17, { "type": "line-to", "x": 0.55234375, "y": 0.105 }], [17, { "type": "line-to", "x": 0.55390625, "y": 0.0925 }], [16, { "type": "line-to", "x": 0.553125, "y": 0.0875 }], [18, { "type": "line-to", "x": 0.55234375, "y": 0.08625 }], [17, { "type": "line-to", "x": 0.5515625, "y": 0.0925 }], [15, { "type": "line-to", "x": 0.5515625, "y": 0.1025 }], [16, { "type": "line-to", "x": 0.55390625, "y": 0.1225 }], [18, { "type": "line-to", "x": 0.55625, "y": 0.1375 }], [17, { "type": "line-to", "x": 0.5578125, "y": 0.15125 }], [15, { "type": "line-to", "x": 0.55859375, "y": 0.16375 }], [16, { "type": "line-to", "x": 0.55703125, "y": 0.18125 }], [18, { "type": "line-to", "x": 0.553125, "y": 0.18875 }], [18, { "type": "line-to", "x": 0.54609375, "y": 0.1925 }], [15, { "type": "line-to", "x": 0.5375, "y": 0.1925 }], [16, { "type": "line-to", "x": 0.53046875, "y": 0.18875 }], [16, { "type": "line-to", "x": 0.521875, "y": 0.1825 }], [19, { "type": "line-to", "x": 0.51953125, "y": 0.17875 }], [12, { "type": "line-to", "x": 0.51953125, "y": 0.175 }], [526, { "type": "move-to", "x": 0.615625, "y": 0.07875 }], [27, { "type": "line-to", "x": 0.61484375, "y": 0.07875 }], [17, { "type": "line-to", "x": 0.61484375, "y": 0.08 }], [15, { "type": "line-to", "x": 0.61640625, "y": 0.095 }], [16, { "type": "line-to", "x": 0.61875, "y": 0.11375 }], [17, { "type": "line-to", "x": 0.621875, "y": 0.135 }], [17, { "type": "line-to", "x": 0.62421875, "y": 0.1575 }], [17, { "type": "line-to", "x": 0.6265625, "y": 0.1875 }], [17, { "type": "line-to", "x": 0.628125, "y": 0.20125 }], [149, { "type": "move-to", "x": 0.61640625, "y": 0.07625 }], [16, { "type": "line-to", "x": 0.61796875, "y": 0.0725 }], [18, { "type": "line-to", "x": 0.61875, "y": 0.0725 }], [17, { "type": "line-to", "x": 0.61953125, "y": 0.07375 }], [16, { "type": "line-to", "x": 0.62421875, "y": 0.07625 }], [16, { "type": "line-to", "x": 0.63046875, "y": 0.0775 }], [17, { "type": "line-to", "x": 0.6375, "y": 0.08125 }], [17, { "type": "line-to", "x": 0.64453125, "y": 0.0875 }], [17, { "type": "line-to", "x": 0.65, "y": 0.09625 }], [15, { "type": "line-to", "x": 0.65, "y": 0.10875 }], [18, { "type": "line-to", "x": 0.6453125, "y": 0.11625 }], [17, { "type": "line-to", "x": 0.6375, "y": 0.12125 }], [16, { "type": "line-to", "x": 0.62890625, "y": 0.12375 }], [7, { "type": "line-to", "x": 0.62265625, "y": 0.1225 }], [10, { "type": "line-to", "x": 0.62109375, "y": 0.12 }], [16, { "type": "line-to", "x": 0.6203125, "y": 0.115 }], [404, { "type": "move-to", "x": 0.66640625, "y": 0.085 }], [28, { "type": "line-to", "x": 0.66484375, "y": 0.09375 }], [8, { "type": "line-to", "x": 0.66484375, "y": 0.0975 }], [9, { "type": "line-to", "x": 0.6640625, "y": 0.105 }], [16, { "type": "line-to", "x": 0.66328125, "y": 0.11125 }], [18, { "type": "line-to", "x": 0.66328125, "y": 0.11375 }], [16, { "type": "line-to", "x": 0.66328125, "y": 0.11375 }], [18, { "type": "line-to", "x": 0.66328125, "y": 0.1075 }], [13, { "type": "line-to", "x": 0.66328125, "y": 0.10375 }], [1, { "type": "line-to", "x": 0.6640625, "y": 0.09875 }], [19, { "type": "line-to", "x": 0.665625, "y": 0.08875 }], [16, { "type": "line-to", "x": 0.66953125, "y": 0.08125 }], [16, { "type": "line-to", "x": 0.67265625, "y": 0.07875 }], [16, { "type": "line-to", "x": 0.6765625, "y": 0.08125 }], [17, { "type": "line-to", "x": 0.68046875, "y": 0.08875 }], [19, { "type": "line-to", "x": 0.68359375, "y": 0.09375 }], [121, { "type": "move-to", "x": 0.69921875, "y": 0.085 }], [10, { "type": "line-to", "x": 0.69921875, "y": 0.0875 }], [17, { "type": "line-to", "x": 0.6984375, "y": 0.0925 }], [11, { "type": "line-to", "x": 0.6984375, "y": 0.09625 }], [8, { "type": "line-to", "x": 0.6984375, "y": 0.1 }], [14, { "type": "line-to", "x": 0.69921875, "y": 0.11125 }], [15, { "type": "line-to", "x": 0.70234375, "y": 0.115 }], [19, { "type": "line-to", "x": 0.7046875, "y": 0.11625 }], [16, { "type": "line-to", "x": 0.70703125, "y": 0.11375 }], [17, { "type": "line-to", "x": 0.70703125, "y": 0.10875 }], [16, { "type": "line-to", "x": 0.70625, "y": 0.1025 }], [16, { "type": "line-to", "x": 0.703125, "y": 0.09375 }], [18, { "type": "line-to", "x": 0.69765625, "y": 0.085 }], [15, { "type": "line-to", "x": 0.69453125, "y": 0.08375 }], [17, { "type": "line-to", "x": 0.69375, "y": 0.085 }], [9, { "type": "line-to", "x": 0.69375, "y": 0.08625 }], [279, { "type": "move-to", "x": 0.71953125, "y": 0.07875 }], [12, { "type": "line-to", "x": 0.7203125, "y": 0.08 }], [15, { "type": "line-to", "x": 0.72109375, "y": 0.08625 }], [18, { "type": "line-to", "x": 0.721875, "y": 0.1 }], [17, { "type": "line-to", "x": 0.7234375, "y": 0.11 }], [15, { "type": "line-to", "x": 0.72578125, "y": 0.1175 }], [19, { "type": "line-to", "x": 0.728125, "y": 0.12 }], [16, { "type": "line-to", "x": 0.73203125, "y": 0.11625 }], [17, { "type": "line-to", "x": 0.73359375, "y": 0.10875 }], [17, { "type": "line-to", "x": 0.73515625, "y": 0.09875 }], [16, { "type": "line-to", "x": 0.7359375, "y": 0.09 }], [16, { "type": "line-to", "x": 0.7375, "y": 0.085 }], [17, { "type": "line-to", "x": 0.7390625, "y": 0.085 }], [15, { "type": "line-to", "x": 0.74140625, "y": 0.0875 }], [89, { "type": "move-to", "x": 0.75078125, "y": 0.0925 }], [13, { "type": "line-to", "x": 0.75078125, "y": 0.09625 }], [16, { "type": "line-to", "x": 0.75078125, "y": 0.10375 }], [16, { "type": "line-to", "x": 0.75234375, "y": 0.11375 }], [17, { "type": "line-to", "x": 0.753125, "y": 0.11625 }], [18, { "type": "line-to", "x": 0.7546875, "y": 0.11375 }], [9, { "type": "line-to", "x": 0.75546875, "y": 0.11125 }], [106, { "type": "move-to", "x": 0.75, "y": 0.0675 }], [17, { "type": "line-to", "x": 0.7515625, "y": 0.07 }], [17, { "type": "line-to", "x": 0.75546875, "y": 0.0725 }], [15, { "type": "line-to", "x": 0.76015625, "y": 0.075 }], [13, { "type": "line-to", "x": 0.7625, "y": 0.0775 }], [117, { "type": "move-to", "x": 0.77890625, "y": 0.08375 }], [20, { "type": "line-to", "x": 0.7765625, "y": 0.085 }], [16, { "type": "line-to", "x": 0.7734375, "y": 0.09 }], [18, { "type": "line-to", "x": 0.7703125, "y": 0.1 }], [15, { "type": "line-to", "x": 0.7703125, "y": 0.1075 }], [18, { "type": "line-to", "x": 0.7734375, "y": 0.1125 }], [17, { "type": "line-to", "x": 0.77734375, "y": 0.11375 }], [15, { "type": "line-to", "x": 0.78359375, "y": 0.10625 }], [18, { "type": "line-to", "x": 0.7859375, "y": 0.09625 }], [17, { "type": "line-to", "x": 0.7875, "y": 0.08375 }], [17, { "type": "line-to", "x": 0.7875, "y": 0.0675 }], [16, { "type": "line-to", "x": 0.7859375, "y": 0.05125 }], [16, { "type": "line-to", "x": 0.784375, "y": 0.03875 }], [18, { "type": "line-to", "x": 0.78203125, "y": 0.03375 }], [19, { "type": "line-to", "x": 0.78203125, "y": 0.035 }], [13, { "type": "line-to", "x": 0.7828125, "y": 0.0425 }], [17, { "type": "line-to", "x": 0.78671875, "y": 0.06125 }], [16, { "type": "line-to", "x": 0.7890625, "y": 0.07875 }], [17, { "type": "line-to", "x": 0.79140625, "y": 0.0975 }], [18, { "type": "line-to", "x": 0.7953125, "y": 0.11125 }], [16, { "type": "line-to", "x": 0.79921875, "y": 0.11875 }], [16, { "type": "line-to", "x": 0.803125, "y": 0.12 }], [1615, { "type": "move-to", "x": 0.809375, "y": 0.105 }], [13, { "type": "line-to", "x": 0.81015625, "y": 0.10625 }], [19, { "type": "line-to", "x": 0.81171875, "y": 0.10625 }], [18, { "type": "line-to", "x": 0.81953125, "y": 0.1025 }], [15, { "type": "line-to", "x": 0.82265625, "y": 0.1 }], [16, { "type": "line-to", "x": 0.83046875, "y": 0.09 }], [16, { "type": "line-to", "x": 0.83125, "y": 0.08375 }], [18, { "type": "line-to", "x": 0.82734375, "y": 0.08125 }], [17, { "type": "line-to", "x": 0.821875, "y": 0.08125 }], [15, { "type": "line-to", "x": 0.81640625, "y": 0.0875 }], [18, { "type": "line-to", "x": 0.8109375, "y": 0.105 }], [15, { "type": "line-to", "x": 0.8109375, "y": 0.1175 }], [18, { "type": "line-to", "x": 0.8140625, "y": 0.125 }], [16, { "type": "line-to", "x": 0.8203125, "y": 0.12875 }], [16, { "type": "line-to", "x": 0.82890625, "y": 0.12625 }], [7, { "type": "line-to", "x": 0.83125, "y": 0.125 }], [138, { "type": "move-to", "x": 0.85703125, "y": 0.095 }], [5, { "type": "line-to", "x": 0.85703125, "y": 0.0925 }], [18, { "type": "line-to", "x": 0.85546875, "y": 0.08875 }], [16, { "type": "line-to", "x": 0.85390625, "y": 0.0875 }], [17, { "type": "line-to", "x": 0.85, "y": 0.0875 }], [16, { "type": "line-to", "x": 0.8453125, "y": 0.0925 }], [16, { "type": "line-to", "x": 0.840625, "y": 0.10875 }], [17, { "type": "line-to", "x": 0.84296875, "y": 0.125 }], [17, { "type": "line-to", "x": 0.84765625, "y": 0.12875 }], [17, { "type": "line-to", "x": 0.85390625, "y": 0.1275 }], [15, { "type": "line-to", "x": 0.86171875, "y": 0.115 }], [19, { "type": "line-to", "x": 0.8640625, "y": 0.10125 }], [16, { "type": "line-to", "x": 0.8640625, "y": 0.08375 }], [17, { "type": "line-to", "x": 0.86328125, "y": 0.06375 }], [15, { "type": "line-to", "x": 0.86171875, "y": 0.04625 }], [18, { "type": "line-to", "x": 0.8578125, "y": 0.0375 }], [16, { "type": "line-to", "x": 0.85625, "y": 0.0425 }], [17, { "type": "line-to", "x": 0.85546875, "y": 0.05625 }], [18, { "type": "line-to", "x": 0.85625, "y": 0.0775 }], [14, { "type": "line-to", "x": 0.8578125, "y": 0.105 }], [17, { "type": "line-to", "x": 0.8609375, "y": 0.13625 }], [17, { "type": "line-to", "x": 0.86328125, "y": 0.15125 }], [18, { "type": "line-to", "x": 0.865625, "y": 0.1625 }], [769, { "type": "move-to", "x": 0.07109375, "y": 0.2575 }], [28, { "type": "line-to", "x": 0.07421875, "y": 0.2625 }], [18, { "type": "line-to", "x": 0.07734375, "y": 0.27375 }], [16, { "type": "line-to", "x": 0.08046875, "y": 0.29125 }], [16, { "type": "line-to", "x": 0.08359375, "y": 0.3075 }], [16, { "type": "line-to", "x": 0.0859375, "y": 0.32125 }], [16, { "type": "line-to", "x": 0.0875, "y": 0.3275 }], [18, { "type": "line-to", "x": 0.08828125, "y": 0.325 }], [16, { "type": "line-to", "x": 0.08984375, "y": 0.31625 }], [17, { "type": "line-to", "x": 0.09453125, "y": 0.305 }], [16, { "type": "line-to", "x": 0.09921875, "y": 0.2975 }], [17, { "type": "line-to", "x": 0.10703125, "y": 0.29875 }], [17, { "type": "line-to", "x": 0.11015625, "y": 0.30625 }], [17, { "type": "line-to", "x": 0.11015625, "y": 0.315 }], [17, { "type": "line-to", "x": 0.10703125, "y": 0.32375 }], [15, { "type": "line-to", "x": 0.096875, "y": 0.33375 }], [19, { "type": "line-to", "x": 0.090625, "y": 0.335 }], [15, { "type": "line-to", "x": 0.08671875, "y": 0.3325 }], [17, { "type": "line-to", "x": 0.0875, "y": 0.3275 }], [15, { "type": "line-to", "x": 0.0921875, "y": 0.32125 }], [167, { "type": "move-to", "x": 0.12421875, "y": 0.29 }], [18, { "type": "line-to", "x": 0.1234375, "y": 0.29125 }], [16, { "type": "line-to", "x": 0.1234375, "y": 0.2975 }], [17, { "type": "line-to", "x": 0.12421875, "y": 0.3075 }], [15, { "type": "line-to", "x": 0.128125, "y": 0.32125 }], [17, { "type": "line-to", "x": 0.1328125, "y": 0.32375 }], [17, { "type": "line-to", "x": 0.13828125, "y": 0.32125 }], [16, { "type": "line-to", "x": 0.1421875, "y": 0.3125 }], [18, { "type": "line-to", "x": 0.1453125, "y": 0.30375 }], [16, { "type": "line-to", "x": 0.146875, "y": 0.29375 }], [17, { "type": "line-to", "x": 0.14765625, "y": 0.2925 }], [17, { "type": "line-to", "x": 0.15, "y": 0.2975 }], [15, { "type": "line-to", "x": 0.153125, "y": 0.30875 }], [16, { "type": "line-to", "x": 0.15625, "y": 0.32375 }], [17, { "type": "line-to", "x": 0.16015625, "y": 0.34875 }], [18, { "type": "line-to", "x": 0.16015625, "y": 0.36625 }], [18, { "type": "line-to", "x": 0.15546875, "y": 0.38125 }], [16, { "type": "line-to", "x": 0.14765625, "y": 0.39375 }], [16, { "type": "line-to", "x": 0.13359375, "y": 0.4 }], [16, { "type": "line-to", "x": 0.12578125, "y": 0.39375 }], [16, { "type": "line-to", "x": 0.12265625, "y": 0.38375 }], [19, { "type": "line-to", "x": 0.1234375, "y": 0.37625 }], [17, { "type": "line-to", "x": 0.12734375, "y": 0.37125 }], [6, { "type": "line-to", "x": 0.1296875, "y": 0.37 }], [258, { "type": "set-stroke-style", "strokeStyle": "#ff0000" }], [305, { "type": "move-to", "x": 0.1984375, "y": 0.2875 }], [12, { "type": "line-to", "x": 0.19921875, "y": 0.2875 }], [17, { "type": "line-to", "x": 0.2015625, "y": 0.2925 }], [16, { "type": "line-to", "x": 0.20390625, "y": 0.29875 }], [17, { "type": "line-to", "x": 0.20625, "y": 0.30875 }], [16, { "type": "line-to", "x": 0.20859375, "y": 0.31875 }], [16, { "type": "line-to", "x": 0.209375, "y": 0.3275 }], [17, { "type": "line-to", "x": 0.209375, "y": 0.33 }], [16, { "type": "line-to", "x": 0.209375, "y": 0.33125 }], [16, { "type": "line-to", "x": 0.20859375, "y": 0.32 }], [18, { "type": "line-to", "x": 0.209375, "y": 0.30625 }], [16, { "type": "line-to", "x": 0.21171875, "y": 0.2925 }], [17, { "type": "line-to", "x": 0.21484375, "y": 0.285 }], [16, { "type": "line-to", "x": 0.21875, "y": 0.285 }], [17, { "type": "line-to", "x": 0.21953125, "y": 0.2875 }], [16, { "type": "line-to", "x": 0.221875, "y": 0.29625 }], [18, { "type": "line-to", "x": 0.2234375, "y": 0.29875 }], [99, { "type": "set-stroke-style", "strokeStyle": "#1a69b5" }], [203, { "type": "move-to", "x": 0.23984375, "y": 0.2875 }], [14, { "type": "line-to", "x": 0.23984375, "y": 0.2875 }], [15, { "type": "line-to", "x": 0.2390625, "y": 0.2925 }], [18, { "type": "line-to", "x": 0.240625, "y": 0.29625 }], [16, { "type": "line-to", "x": 0.24375, "y": 0.3075 }], [17, { "type": "line-to", "x": 0.246875, "y": 0.3225 }], [17, { "type": "line-to", "x": 0.25234375, "y": 0.34625 }], [15, { "type": "line-to", "x": 0.2546875, "y": 0.36 }], [17, { "type": "line-to", "x": 0.25546875, "y": 0.37 }], [18, { "type": "line-to", "x": 0.25546875, "y": 0.3725 }], [17, { "type": "line-to", "x": 0.2546875, "y": 0.36875 }], [16, { "type": "line-to", "x": 0.25234375, "y": 0.3575 }], [16, { "type": "line-to", "x": 0.25078125, "y": 0.32875 }], [17, { "type": "line-to", "x": 0.25, "y": 0.305 }], [17, { "type": "line-to", "x": 0.2515625, "y": 0.2875 }], [16, { "type": "line-to", "x": 0.25390625, "y": 0.28 }], [17, { "type": "line-to", "x": 0.2578125, "y": 0.28125 }], [16, { "type": "line-to", "x": 0.259375, "y": 0.28625 }], [17, { "type": "line-to", "x": 0.26015625, "y": 0.29375 }], [17, { "type": "line-to", "x": 0.259375, "y": 0.30125 }], [17, { "type": "line-to", "x": 0.25390625, "y": 0.3125 }], [16, { "type": "line-to", "x": 0.25, "y": 0.315 }], [17, { "type": "line-to", "x": 0.246875, "y": 0.31375 }], [16, { "type": "line-to", "x": 0.24609375, "y": 0.3125 }], [4, { "type": "line-to", "x": 0.24609375, "y": 0.31 }], [148, { "type": "set-stroke-style", "strokeStyle": "#008000" }], [234, { "type": "move-to", "x": 0.28203125, "y": 0.28375 }], [30, { "type": "line-to", "x": 0.2828125, "y": 0.285 }], [17, { "type": "line-to", "x": 0.2890625, "y": 0.285 }], [16, { "type": "line-to", "x": 0.296875, "y": 0.28375 }], [18, { "type": "line-to", "x": 0.3046875, "y": 0.28 }], [14, { "type": "line-to", "x": 0.3125, "y": 0.2775 }], [16, { "type": "line-to", "x": 0.31328125, "y": 0.2775 }], [528, { "type": "set-stroke-style", "strokeStyle": "#ae81ff" }], [253, { "type": "move-to", "x": 0.3296875, "y": 0.2775 }], [19, { "type": "line-to", "x": 0.33046875, "y": 0.2775 }], [18, { "type": "line-to", "x": 0.33203125, "y": 0.2825 }], [17, { "type": "line-to", "x": 0.3359375, "y": 0.29875 }], [14, { "type": "line-to", "x": 0.33828125, "y": 0.31375 }], [18, { "type": "line-to", "x": 0.33984375, "y": 0.32875 }], [17, { "type": "line-to", "x": 0.34140625, "y": 0.34125 }], [16, { "type": "line-to", "x": 0.3421875, "y": 0.34875 }], [16, { "type": "line-to", "x": 0.3421875, "y": 0.35 }], [18, { "type": "line-to", "x": 0.340625, "y": 0.3425 }], [17, { "type": "line-to", "x": 0.3375, "y": 0.32875 }], [16, { "type": "line-to", "x": 0.334375, "y": 0.3075 }], [15, { "type": "line-to", "x": 0.33203125, "y": 0.27875 }], [18, { "type": "line-to", "x": 0.33515625, "y": 0.26875 }], [17, { "type": "line-to", "x": 0.340625, "y": 0.26625 }], [17, { "type": "line-to", "x": 0.346875, "y": 0.2675 }], [16, { "type": "line-to", "x": 0.3515625, "y": 0.2725 }], [17, { "type": "line-to", "x": 0.35390625, "y": 0.27875 }], [16, { "type": "line-to", "x": 0.35, "y": 0.28875 }], [19, { "type": "line-to", "x": 0.34375, "y": 0.295 }], [13, { "type": "line-to", "x": 0.3375, "y": 0.29875 }], [17, { "type": "line-to", "x": 0.33515625, "y": 0.3 }], [17, { "type": "line-to", "x": 0.3390625, "y": 0.29625 }], [283, { "type": "set-stroke-style", "strokeStyle": "#ff8000" }], [231, { "type": "move-to", "x": 0.37890625, "y": 0.265 }], [20, { "type": "line-to", "x": 0.3765625, "y": 0.26625 }], [16, { "type": "line-to", "x": 0.371875, "y": 0.27 }], [16, { "type": "line-to", "x": 0.36796875, "y": 0.275 }], [17, { "type": "line-to", "x": 0.36640625, "y": 0.2825 }], [15, { "type": "line-to", "x": 0.365625, "y": 0.29125 }], [17, { "type": "line-to", "x": 0.36796875, "y": 0.30375 }], [18, { "type": "line-to", "x": 0.37265625, "y": 0.30625 }], [16, { "type": "line-to", "x": 0.37734375, "y": 0.30375 }], [16, { "type": "line-to", "x": 0.38046875, "y": 0.295 }], [16, { "type": "line-to", "x": 0.3828125, "y": 0.28125 }], [17, { "type": "line-to", "x": 0.3828125, "y": 0.27625 }], [17, { "type": "line-to", "x": 0.38203125, "y": 0.2675 }], [17, { "type": "line-to", "x": 0.38203125, "y": 0.265 }], [17, { "type": "line-to", "x": 0.38359375, "y": 0.26625 }], [16, { "type": "line-to", "x": 0.38828125, "y": 0.2775 }], [18, { "type": "line-to", "x": 0.3921875, "y": 0.285 }], [17, { "type": "line-to", "x": 0.3953125, "y": 0.29125 }], [15, { "type": "line-to", "x": 0.3984375, "y": 0.2925 }], [16, { "type": "line-to", "x": 0.4, "y": 0.29125 }], [205, { "type": "set-stroke-style", "strokeStyle": "#ff0080" }], [241, { "type": "move-to", "x": 0.409375, "y": 0.265 }], [21, { "type": "line-to", "x": 0.409375, "y": 0.2725 }], [16, { "type": "line-to", "x": 0.41015625, "y": 0.28 }], [18, { "type": "line-to", "x": 0.41171875, "y": 0.28625 }], [15, { "type": "line-to", "x": 0.41328125, "y": 0.29 }], [16, { "type": "line-to", "x": 0.4140625, "y": 0.2925 }], [17, { "type": "line-to", "x": 0.4140625, "y": 0.29125 }], [15, { "type": "line-to", "x": 0.4140625, "y": 0.28875 }], [97, { "type": "move-to", "x": 0.40234375, "y": 0.23125 }], [21, { "type": "line-to", "x": 0.4015625, "y": 0.23375 }], [17, { "type": "line-to", "x": 0.40390625, "y": 0.2375 }], [17, { "type": "line-to", "x": 0.40625, "y": 0.2375 }], [17, { "type": "line-to", "x": 0.4078125, "y": 0.2375 }], [16, { "type": "line-to", "x": 0.409375, "y": 0.23875 }], [272, { "type": "set-stroke-style", "strokeStyle": "#ff0000" }], [213, { "type": "move-to", "x": 0.43515625, "y": 0.26375 }], [13, { "type": "line-to", "x": 0.43515625, "y": 0.26625 }], [18, { "type": "line-to", "x": 0.4359375, "y": 0.27125 }], [18, { "type": "line-to", "x": 0.4375, "y": 0.27875 }], [14, { "type": "line-to", "x": 0.43828125, "y": 0.28625 }], [18, { "type": "line-to", "x": 0.43984375, "y": 0.2925 }], [16, { "type": "line-to", "x": 0.43984375, "y": 0.29625 }], [17, { "type": "line-to", "x": 0.43984375, "y": 0.29625 }], [16, { "type": "line-to", "x": 0.43984375, "y": 0.29375 }], [18, { "type": "line-to", "x": 0.44140625, "y": 0.28625 }], [16, { "type": "line-to", "x": 0.44609375, "y": 0.27 }], [17, { "type": "line-to", "x": 0.44921875, "y": 0.26375 }], [17, { "type": "line-to", "x": 0.45234375, "y": 0.2625 }], [16, { "type": "line-to", "x": 0.4546875, "y": 0.26875 }], [15, { "type": "line-to", "x": 0.45625, "y": 0.2825 }], [17, { "type": "line-to", "x": 0.45703125, "y": 0.28875 }], [17, { "type": "line-to", "x": 0.4578125, "y": 0.29125 }], [17, { "type": "line-to", "x": 0.45859375, "y": 0.29 }], [10, { "type": "line-to", "x": 0.459375, "y": 0.28875 }], [212, { "type": "set-stroke-style", "strokeStyle": "#1a69b5" }], [58, { "type": "move-to", "x": 0.46953125, "y": 0.205 }], [19, { "type": "line-to", "x": 0.4703125, "y": 0.20375 }], [16, { "type": "line-to", "x": 0.47109375, "y": 0.20375 }], [17, { "type": "line-to", "x": 0.4734375, "y": 0.2075 }], [17, { "type": "line-to", "x": 0.475, "y": 0.22625 }], [18, { "type": "line-to", "x": 0.47578125, "y": 0.2425 }], [16, { "type": "line-to", "x": 0.47578125, "y": 0.26 }], [15, { "type": "line-to", "x": 0.4765625, "y": 0.28125 }], [17, { "type": "line-to", "x": 0.4796875, "y": 0.29375 }], [16, { "type": "line-to", "x": 0.48125, "y": 0.295 }], [18, { "type": "line-to", "x": 0.484375, "y": 0.29625 }], [17, { "type": "line-to", "x": 0.4875, "y": 0.2925 }], [15, { "type": "line-to", "x": 0.49140625, "y": 0.28125 }], [18, { "type": "line-to", "x": 0.4921875, "y": 0.275 }], [16, { "type": "line-to", "x": 0.49140625, "y": 0.26875 }], [104, { "type": "move-to", "x": 0.46171875, "y": 0.25625 }], [12, { "type": "line-to", "x": 0.46171875, "y": 0.2575 }], [19, { "type": "line-to", "x": 0.46640625, "y": 0.2575 }], [16, { "type": "line-to", "x": 0.4703125, "y": 0.2575 }], [15, { "type": "line-to", "x": 0.478125, "y": 0.25375 }], [17, { "type": "line-to", "x": 0.48515625, "y": 0.25 }], [17, { "type": "line-to", "x": 0.4921875, "y": 0.24625 }], [359, { "type": "set-stroke-style", "strokeStyle": "#000000" }], [286, { "type": "move-to", "x": 0.5671875, "y": 0.24875 }], [20, { "type": "line-to", "x": 0.565625, "y": 0.24875 }], [15, { "type": "line-to", "x": 0.565625, "y": 0.25125 }], [18, { "type": "line-to", "x": 0.5671875, "y": 0.2625 }], [17, { "type": "line-to", "x": 0.56953125, "y": 0.27625 }], [18, { "type": "line-to", "x": 0.5734375, "y": 0.29625 }], [15, { "type": "line-to", "x": 0.5765625, "y": 0.31875 }], [16, { "type": "line-to", "x": 0.58046875, "y": 0.34875 }], [17, { "type": "line-to", "x": 0.58125, "y": 0.36125 }], [17, { "type": "line-to", "x": 0.58125, "y": 0.3675 }], [16, { "type": "line-to", "x": 0.58046875, "y": 0.3675 }], [17, { "type": "line-to", "x": 0.57890625, "y": 0.3575 }], [17, { "type": "line-to", "x": 0.57734375, "y": 0.32875 }], [16, { "type": "line-to", "x": 0.57578125, "y": 0.3 }], [18, { "type": "line-to", "x": 0.575, "y": 0.27375 }], [16, { "type": "line-to", "x": 0.575, "y": 0.2575 }], [15, { "type": "line-to", "x": 0.57734375, "y": 0.25 }], [18, { "type": "line-to", "x": 0.58125, "y": 0.24875 }], [16, { "type": "line-to", "x": 0.5859375, "y": 0.25125 }], [17, { "type": "line-to", "x": 0.590625, "y": 0.2575 }], [16, { "type": "line-to", "x": 0.59375, "y": 0.2675 }], [18, { "type": "line-to", "x": 0.58984375, "y": 0.28125 }], [17, { "type": "line-to", "x": 0.58359375, "y": 0.28875 }], [18, { "type": "line-to", "x": 0.578125, "y": 0.2925 }], [16, { "type": "line-to", "x": 0.57421875, "y": 0.29125 }], [14, { "type": "line-to", "x": 0.57578125, "y": 0.28125 }], [16, { "type": "line-to", "x": 0.57890625, "y": 0.2775 }], [99, { "type": "move-to", "x": 0.6140625, "y": 0.24875 }], [19, { "type": "line-to", "x": 0.61328125, "y": 0.24875 }], [16, { "type": "line-to", "x": 0.61171875, "y": 0.2525 }], [17, { "type": "line-to", "x": 0.60859375, "y": 0.2625 }], [17, { "type": "line-to", "x": 0.6078125, "y": 0.2725 }], [17, { "type": "line-to", "x": 0.6078125, "y": 0.2775 }], [17, { "type": "line-to", "x": 0.61015625, "y": 0.27875 }], [15, { "type": "line-to", "x": 0.61484375, "y": 0.27125 }], [18, { "type": "line-to", "x": 0.6171875, "y": 0.26375 }], [16, { "type": "line-to", "x": 0.6171875, "y": 0.25625 }], [18, { "type": "line-to", "x": 0.6171875, "y": 0.2525 }], [15, { "type": "line-to", "x": 0.6171875, "y": 0.2525 }], [15, { "type": "line-to", "x": 0.6171875, "y": 0.2575 }], [19, { "type": "line-to", "x": 0.61875, "y": 0.27 }], [17, { "type": "line-to", "x": 0.621875, "y": 0.275 }], [16, { "type": "line-to", "x": 0.6265625, "y": 0.27625 }], [11, { "type": "line-to", "x": 0.62890625, "y": 0.27625 }], [506, { "type": "move-to", "x": 0.65234375, "y": 0.24375 }], [16, { "type": "line-to", "x": 0.65078125, "y": 0.24 }], [17, { "type": "line-to", "x": 0.646875, "y": 0.24 }], [15, { "type": "line-to", "x": 0.640625, "y": 0.245 }], [18, { "type": "line-to", "x": 0.63671875, "y": 0.25375 }], [16, { "type": "line-to", "x": 0.63515625, "y": 0.26375 }], [16, { "type": "line-to", "x": 0.6359375, "y": 0.2725 }], [16, { "type": "line-to", "x": 0.64375, "y": 0.2775 }], [17, { "type": "line-to", "x": 0.65078125, "y": 0.27625 }], [16, { "type": "line-to", "x": 0.65625, "y": 0.27 }], [170, { "type": "move-to", "x": 0.65625, "y": 0.18625 }], [15, { "type": "line-to", "x": 0.65546875, "y": 0.1875 }], [15, { "type": "line-to", "x": 0.65625, "y": 0.19625 }], [18, { "type": "line-to", "x": 0.65859375, "y": 0.20875 }], [15, { "type": "line-to", "x": 0.66171875, "y": 0.2275 }], [17, { "type": "line-to", "x": 0.66484375, "y": 0.2475 }], [18, { "type": "line-to", "x": 0.66640625, "y": 0.265 }], [15, { "type": "line-to", "x": 0.66875, "y": 0.28125 }], [18, { "type": "line-to", "x": 0.66875, "y": 0.285 }], [16, { "type": "line-to", "x": 0.66875, "y": 0.2825 }], [17, { "type": "line-to", "x": 0.66875, "y": 0.27625 }], [15, { "type": "line-to", "x": 0.66953125, "y": 0.26875 }], [17, { "type": "line-to", "x": 0.67265625, "y": 0.26375 }], [18, { "type": "line-to", "x": 0.67578125, "y": 0.265 }], [16, { "type": "line-to", "x": 0.67890625, "y": 0.27 }], [17, { "type": "line-to", "x": 0.68203125, "y": 0.27625 }], [16, { "type": "line-to", "x": 0.6859375, "y": 0.28125 }], [17, { "type": "line-to", "x": 0.68671875, "y": 0.28125 }], [18, { "type": "line-to", "x": 0.68671875, "y": 0.27875 }], [79, { "type": "move-to", "x": 0.66484375, "y": 0.25375 }], [22, { "type": "line-to", "x": 0.66484375, "y": 0.255 }], [13, { "type": "line-to", "x": 0.66875, "y": 0.25375 }], [18, { "type": "line-to", "x": 0.67578125, "y": 0.25 }], [16, { "type": "line-to", "x": 0.68359375, "y": 0.24625 }], [18, { "type": "line-to", "x": 0.69140625, "y": 0.24375 }], [16, { "type": "line-to", "x": 0.69765625, "y": 0.24375 }], [92, { "type": "move-to", "x": 0.715625, "y": 0.2375 }], [24, { "type": "line-to", "x": 0.71328125, "y": 0.23625 }], [18, { "type": "line-to", "x": 0.7109375, "y": 0.2375 }], [14, { "type": "line-to", "x": 0.70859375, "y": 0.2425 }], [18, { "type": "line-to", "x": 0.703125, "y": 0.255 }], [17, { "type": "line-to", "x": 0.70234375, "y": 0.26375 }], [16, { "type": "line-to", "x": 0.70390625, "y": 0.26625 }], [18, { "type": "line-to", "x": 0.7078125, "y": 0.265 }], [15, { "type": "line-to", "x": 0.71328125, "y": 0.255 }], [16, { "type": "line-to", "x": 0.71484375, "y": 0.2475 }], [18, { "type": "line-to", "x": 0.715625, "y": 0.24125 }], [16, { "type": "line-to", "x": 0.715625, "y": 0.2375 }], [17, { "type": "line-to", "x": 0.715625, "y": 0.24 }], [16, { "type": "line-to", "x": 0.715625, "y": 0.245 }], [17, { "type": "line-to", "x": 0.71796875, "y": 0.25625 }], [17, { "type": "line-to", "x": 0.721875, "y": 0.26 }], [17, { "type": "line-to", "x": 0.72578125, "y": 0.2625 }], [18, { "type": "line-to", "x": 0.7296875, "y": 0.2625 }], [316, { "type": "move-to", "x": 0.7578125, "y": 0.23125 }], [15, { "type": "line-to", "x": 0.7578125, "y": 0.23 }], [16, { "type": "line-to", "x": 0.75546875, "y": 0.22875 }], [17, { "type": "line-to", "x": 0.75234375, "y": 0.23 }], [17, { "type": "line-to", "x": 0.74765625, "y": 0.235 }], [15, { "type": "line-to", "x": 0.74140625, "y": 0.25 }], [18, { "type": "line-to", "x": 0.740625, "y": 0.25875 }], [17, { "type": "line-to", "x": 0.74453125, "y": 0.26125 }], [15, { "type": "line-to", "x": 0.7515625, "y": 0.25875 }], [18, { "type": "line-to", "x": 0.7578125, "y": 0.25125 }], [16, { "type": "line-to", "x": 0.76328125, "y": 0.23875 }], [17, { "type": "line-to", "x": 0.76328125, "y": 0.2325 }], [17, { "type": "line-to", "x": 0.76171875, "y": 0.23 }], [16, { "type": "line-to", "x": 0.76015625, "y": 0.23 }], [15, { "type": "line-to", "x": 0.7578125, "y": 0.23375 }], [19, { "type": "line-to", "x": 0.7578125, "y": 0.23625 }], [16, { "type": "line-to", "x": 0.7578125, "y": 0.2375 }], [16, { "type": "line-to", "x": 0.7578125, "y": 0.2375 }], [16, { "type": "line-to", "x": 0.7578125, "y": 0.2375 }], [18, { "type": "line-to", "x": 0.75859375, "y": 0.2375 }], [17, { "type": "line-to", "x": 0.75859375, "y": 0.2375 }], [17, { "type": "line-to", "x": 0.759375, "y": 0.24 }], [16, { "type": "line-to", "x": 0.76015625, "y": 0.2475 }], [16, { "type": "line-to", "x": 0.76328125, "y": 0.265 }], [17, { "type": "line-to", "x": 0.765625, "y": 0.28 }], [18, { "type": "line-to", "x": 0.7671875, "y": 0.29625 }], [15, { "type": "line-to", "x": 0.76875, "y": 0.31375 }], [16, { "type": "line-to", "x": 0.76875, "y": 0.33 }], [18, { "type": "line-to", "x": 0.765625, "y": 0.3475 }], [16, { "type": "line-to", "x": 0.7609375, "y": 0.355 }], [16, { "type": "line-to", "x": 0.7546875, "y": 0.35875 }], [17, { "type": "line-to", "x": 0.74609375, "y": 0.35625 }], [18, { "type": "line-to", "x": 0.73515625, "y": 0.34375 }], [15, { "type": "line-to", "x": 0.73046875, "y": 0.3325 }], [17, { "type": "line-to", "x": 0.728125, "y": 0.3225 }], [18, { "type": "line-to", "x": 0.728125, "y": 0.3125 }], [10, { "type": "line-to", "x": 0.7296875, "y": 0.30875 }], [262, { "type": "move-to", "x": 0.77734375, "y": 0.25375 }], [10, { "type": "line-to", "x": 0.778125, "y": 0.25375 }], [16, { "type": "line-to", "x": 0.77890625, "y": 0.255 }], [17, { "type": "line-to", "x": 0.78046875, "y": 0.255 }], [15, { "type": "line-to", "x": 0.78203125, "y": 0.25625 }], [17, { "type": "line-to", "x": 0.78359375, "y": 0.255 }], [18, { "type": "line-to", "x": 0.7859375, "y": 0.2525 }], [15, { "type": "line-to", "x": 0.7875, "y": 0.24875 }], [17, { "type": "line-to", "x": 0.7875, "y": 0.24375 }], [17, { "type": "line-to", "x": 0.78515625, "y": 0.23875 }], [19, { "type": "line-to", "x": 0.78125, "y": 0.23625 }], [16, { "type": "line-to", "x": 0.77578125, "y": 0.24125 }], [16, { "type": "line-to", "x": 0.775, "y": 0.24625 }], [16, { "type": "line-to", "x": 0.77421875, "y": 0.25625 }], [16, { "type": "line-to", "x": 0.7796875, "y": 0.27 }], [17, { "type": "line-to", "x": 0.78671875, "y": 0.2725 }], [17, { "type": "line-to", "x": 0.79375, "y": 0.2725 }], [18, { "type": "line-to", "x": 0.79921875, "y": 0.26875 }], [2, { "type": "line-to", "x": 0.8, "y": 0.26625 }], [3256, { "type": "erase", "x": 0.8671875, "y": 0.0525, "r": 0.02 }], [17, { "type": "erase", "x": 0.865625, "y": 0.0525, "r": 0.02 }], [17, { "type": "erase", "x": 0.8640625, "y": 0.0525, "r": 0.02 }], [16, { "type": "erase", "x": 0.8640625, "y": 0.055, "r": 0.02 }], [19, { "type": "erase", "x": 0.865625, "y": 0.065, "r": 0.02 }], [15, { "type": "erase", "x": 0.86640625, "y": 0.08, "r": 0.02 }], [15, { "type": "erase", "x": 0.86640625, "y": 0.0975, "r": 0.02 }], [17, { "type": "erase", "x": 0.86640625, "y": 0.11625, "r": 0.02 }], [17, { "type": "erase", "x": 0.8640625, "y": 0.1325, "r": 0.02 }], [16, { "type": "erase", "x": 0.86015625, "y": 0.15125, "r": 0.02 }], [17, { "type": "erase", "x": 0.859375, "y": 0.1575, "r": 0.02 }], [19, { "type": "erase", "x": 0.8609375, "y": 0.15875, "r": 0.02 }], [16, { "type": "erase", "x": 0.86328125, "y": 0.15375, "r": 0.02 }], [16, { "type": "erase", "x": 0.8671875, "y": 0.14375, "r": 0.02 }], [15, { "type": "erase", "x": 0.87265625, "y": 0.1275, "r": 0.02 }], [17, { "type": "erase", "x": 0.87421875, "y": 0.1175, "r": 0.02 }], [17, { "type": "erase", "x": 0.87421875, "y": 0.1075, "r": 0.02 }], [17, { "type": "erase", "x": 0.87265625, "y": 0.0975, "r": 0.02 }], [17, { "type": "erase", "x": 0.86953125, "y": 0.085, "r": 0.02 }], [15, { "type": "erase", "x": 0.86796875, "y": 0.08125, "r": 0.02 }], [19, { "type": "erase", "x": 0.86796875, "y": 0.0825, "r": 0.02 }], [16, { "type": "erase", "x": 0.86796875, "y": 0.09125, "r": 0.02 }], [16, { "type": "erase", "x": 0.86875, "y": 0.105, "r": 0.02 }], [16, { "type": "erase", "x": 0.86953125, "y": 0.12625, "r": 0.02 }], [17, { "type": "erase", "x": 0.86796875, "y": 0.13625, "r": 0.02 }], [18, { "type": "erase", "x": 0.8671875, "y": 0.14125, "r": 0.02 }], [16, { "type": "erase", "x": 0.86640625, "y": 0.1425, "r": 0.02 }], [16, { "type": "erase", "x": 0.86640625, "y": 0.1375, "r": 0.02 }], [17, { "type": "erase", "x": 0.86796875, "y": 0.1225, "r": 0.02 }], [17, { "type": "erase", "x": 0.86875, "y": 0.1125, "r": 0.02 }], [17, { "type": "erase", "x": 0.86796875, "y": 0.10625, "r": 0.02 }], [16, { "type": "erase", "x": 0.86640625, "y": 0.10375, "r": 0.02 }], [16, { "type": "erase", "x": 0.86328125, "y": 0.105, "r": 0.02 }], [17, { "type": "erase", "x": 0.86171875, "y": 0.1075, "r": 0.02 }], [17, { "type": "erase", "x": 0.8609375, "y": 0.11, "r": 0.02 }], [17, { "type": "erase", "x": 0.86015625, "y": 0.1125, "r": 0.02 }], [15, { "type": "erase", "x": 0.86015625, "y": 0.115, "r": 0.02 }], [17, { "type": "erase", "x": 0.85859375, "y": 0.11875, "r": 0.02 }], [17, { "type": "erase", "x": 0.8578125, "y": 0.12, "r": 0.02 }], [18, { "type": "erase", "x": 0.8578125, "y": 0.12, "r": 0.02 }], [15, { "type": "erase", "x": 0.8578125, "y": 0.1175, "r": 0.02 }], [18, { "type": "erase", "x": 0.8578125, "y": 0.115, "r": 0.02 }], [16, { "type": "erase", "x": 0.859375, "y": 0.1125, "r": 0.02 }], [16, { "type": "erase", "x": 0.859375, "y": 0.11125, "r": 0.02 }], [17, { "type": "erase", "x": 0.859375, "y": 0.11, "r": 0.02 }], [15, { "type": "erase", "x": 0.859375, "y": 0.11, "r": 0.02 }], [17, { "type": "erase", "x": 0.8578125, "y": 0.1125, "r": 0.02 }], [17, { "type": "erase", "x": 0.85625, "y": 0.12, "r": 0.02 }], [19, { "type": "erase", "x": 0.85546875, "y": 0.12375, "r": 0.02 }], [15, { "type": "erase", "x": 0.85625, "y": 0.12625, "r": 0.02 }], [17, { "type": "erase", "x": 0.859375, "y": 0.1275, "r": 0.02 }], [15, { "type": "erase", "x": 0.8625, "y": 0.1275, "r": 0.02 }], [18, { "type": "erase", "x": 0.86484375, "y": 0.12875, "r": 0.02 }], [18, { "type": "erase", "x": 0.865625, "y": 0.13125, "r": 0.02 }], [15, { "type": "erase", "x": 0.86640625, "y": 0.1375, "r": 0.02 }], [19, { "type": "erase", "x": 0.865625, "y": 0.15, "r": 0.02 }], [1152, { "type": "move-to", "x": 0.86328125, "y": 0.09125 }], [25, { "type": "line-to", "x": 0.86328125, "y": 0.09125 }], [16, { "type": "line-to", "x": 0.86328125, "y": 0.09125 }], [17, { "type": "line-to", "x": 0.86328125, "y": 0.09125 }], [18, { "type": "line-to", "x": 0.86171875, "y": 0.09125 }], [16, { "type": "line-to", "x": 0.86015625, "y": 0.09125 }], [19, { "type": "line-to", "x": 0.85625, "y": 0.09125 }], [16, { "type": "line-to", "x": 0.8515625, "y": 0.095 }], [15, { "type": "line-to", "x": 0.846875, "y": 0.10125 }], [17, { "type": "line-to", "x": 0.84453125, "y": 0.11375 }], [16, { "type": "line-to", "x": 0.84609375, "y": 0.12 }], [18, { "type": "line-to", "x": 0.85078125, "y": 0.1225 }], [15, { "type": "line-to", "x": 0.85859375, "y": 0.1225 }], [17, { "type": "line-to", "x": 0.86796875, "y": 0.115 }], [16, { "type": "line-to", "x": 0.86953125, "y": 0.11 }], [17, { "type": "line-to", "x": 0.86875, "y": 0.10625 }], [170, { "type": "move-to", "x": 0.86015625, "y": 0.045 }], [12, { "type": "line-to", "x": 0.86015625, "y": 0.04375 }], [17, { "type": "line-to", "x": 0.85859375, "y": 0.04125 }], [17, { "type": "line-to", "x": 0.85859375, "y": 0.04125 }], [17, { "type": "line-to", "x": 0.8578125, "y": 0.04125 }], [17, { "type": "line-to", "x": 0.8578125, "y": 0.04125 }], [16, { "type": "line-to", "x": 0.8578125, "y": 0.04125 }], [17, { "type": "line-to", "x": 0.85859375, "y": 0.04875 }], [16, { "type": "line-to", "x": 0.859375, "y": 0.05375 }], [19, { "type": "line-to", "x": 0.8625, "y": 0.075 }], [14, { "type": "line-to", "x": 0.8640625, "y": 0.085 }], [18, { "type": "line-to", "x": 0.8671875, "y": 0.115 }], [16, { "type": "line-to", "x": 0.86953125, "y": 0.13375 }], [17, { "type": "line-to", "x": 0.87109375, "y": 0.13875 }], [17, { "type": "line-to", "x": 0.871875, "y": 0.14125 }]];


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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.tsx");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;