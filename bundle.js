/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../rp-cursor/rp-cursor.js":
/*!*********************************!*\
  !*** ../rp-cursor/rp-cursor.js ***!
  \*********************************/
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
    keymap.bind("ArrowLeft", script.back);
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

/***/ "./src/AnimationSlide.tsx":
/*!********************************!*\
  !*** ./src/AnimationSlide.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AnimationSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_2__);



const { animate } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.animation, { during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;

const easeInSine = [0.47, 0, 0.745, 0.715];
function AnimationSlide() {
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const rotate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        endValue: 2 * Math.PI,
        startTime: script.parseStart("animation/fire"),
        duration: 1000,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(...easeInSine)
    }), []);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.useTimeUpdate)(t => {
        const p = rotate(t);
        ref.current.style.left = `${50 + 20 * Math.cos(p)}%`;
        ref.current.style.top = `${50 - 20 * Math.sin(p)}%`;
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-animation" }, during("animation/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { ref: ref, style: { position: "absolute", left: "50%", top: "50%", textAlign: "center" } }, "whoa")));
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
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({ className: "box" }, from("intro/lmqm")),
                "More examples at ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://lmqm.xyz" }, "La mer qui monte")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({ className: "box", id: "get-started" }, from("intro/get-started")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                    "Clone this tutorial: ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://github.com/ysulyma/rp-tutorial" }, "https://github.com/ysulyma/rp-tutorial")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("intro/reddit")),
                    "Discussion: ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://reddit.com/r/ractive_player/" }, "https://reddit.com/r/ractive_player/"))))));
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "playback.hub")))));
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "usePlayer()")))));
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
/* harmony import */ var rp_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-cursor */ "../rp-cursor/rp-cursor.js");
/* harmony import */ var rp_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-url */ "./src/media-url.ts");
/* harmony import */ var _recordings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordings */ "./src/recordings.ts");



const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;




function PlaybackSlide() {
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const start = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => script.parseStart("recording/cursor") + 4000, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-recording" }, during("recording/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Recording"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/npm")),
                "recording functionality provided by ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_3__.default, { href: "https://www.npmjs.com/package/rp-recording" }, "rp-recording")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/control")),
                "implemented as custom control, c.f. ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "index.tsx")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/https")),
                "can only record audio over HTTPS!",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_3__.default, Object.assign({ id: "recording-https-link" }, from("recording/link"), { href: "https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/" }), "How to get HTTPS working on your local development environment")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("recording/cursor")),
                "plugin API, e.g. ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_3__.default, { href: "https://www.npmjs.com/package/rp-cursor" }, "rp-cursor"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement((rp_cursor__WEBPACK_IMPORTED_MODULE_2___default()), { src: `${_media_url__WEBPACK_IMPORTED_MODULE_4__.MEDIA_URL}/img/cursor.svg`, start: start, end: "recording/cursor", replay: _recordings__WEBPACK_IMPORTED_MODULE_5__.cursorReplay })));
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
                " to go back one marker"))));
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
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects */ "./src/objects.ts");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Intro */ "./src/Intro.tsx");
/* harmony import */ var _PlaybackSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PlaybackSlide */ "./src/PlaybackSlide.tsx");
/* harmony import */ var _ScriptSlide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScriptSlide */ "./src/ScriptSlide.tsx");
/* harmony import */ var _PlayerSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PlayerSlide */ "./src/PlayerSlide.tsx");
/* harmony import */ var _AnimationSlide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AnimationSlide */ "./src/AnimationSlide.tsx");
/* harmony import */ var _RecordingSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RecordingSlide */ "./src/RecordingSlide.tsx");














const controls = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player.defaultControlsLeft,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "rp-controls-right" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Controls.Settings, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Controls.FullScreen, null))));
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
    const script = new ractive_player__WEBPACK_IMPORTED_MODULE_2__.Script(_markers__WEBPACK_IMPORTED_MODULE_7__.default);
    const ps = script.parseStart;
    const highlights = [
        { title: "Playback", time: ps("playback/") },
        { title: "Script", time: ps("script/") },
        { title: "Player", time: ps("player/") },
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Audio, { start: 0 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", { src: `${_media_url__WEBPACK_IMPORTED_MODULE_5__.MEDIA_URL}/audio/audio.webm`, type: "audio/webm" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", { src: `${_media_url__WEBPACK_IMPORTED_MODULE_5__.MEDIA_URL}/audio/audio.mp4`, type: "audio/mp4" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.IdMap, { map: _objects__WEBPACK_IMPORTED_MODULE_6__.default },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Intro__WEBPACK_IMPORTED_MODULE_8__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlaybackSlide__WEBPACK_IMPORTED_MODULE_9__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScriptSlide__WEBPACK_IMPORTED_MODULE_10__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlayerSlide__WEBPACK_IMPORTED_MODULE_11__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnimationSlide__WEBPACK_IMPORTED_MODULE_12__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RecordingSlide__WEBPACK_IMPORTED_MODULE_13__.default, null))));
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
    ["intro/", "0:04.953"],
    ["intro/ractives", "0:15.249"],
    ["intro/fiddle", "0:10.101"],
    ["intro/pause", "0:02.265"],
    ["intro/lmqm", "0:09.581"],
    ["intro/get-started", "0:09.610"],
    ["intro/reddit", "0:09.734"],
    ["playback/", "0:04.357"],
    ["playback/loop", "0:05.491"],
    ["playback/html", "0:06.542"],
    ["playback/hub", "0:14.339"],
    ["script/", "0:06.202"],
    ["script/markers", "0:13.309"],
    ["script/repeat", "0:07.835"],
    ["script/ew", "0:16.613"],
    ["player/", "0:06.810"],
    ["player/gui", "0:05.244"],
    ["player/react", "0:28.95"],
    ["player/hook", "0:08.66"],
    ["animation/", "0:04.953"],
    ["animation/fire", "0:02.728"],
    ["recording/", "0:10.665"],
    ["recording/npm", "0:04.824"],
    ["recording/control", "0:07.58"],
    ["recording/https", "0:06.100"],
    ["recording/link", "0:05.275"],
    ["recording/cursor", "0:13.324"]
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

/***/ "./src/recordings.ts":
/*!***************************!*\
  !*** ./src/recordings.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursorReplay": () => /* binding */ cursorReplay
/* harmony export */ });
const cursorReplay = [[0, [83.984, 73.25]], [16, [83.984, 73.125]], [17, [83.984, 73.125]], [16, [83.984, 73]], [17, [83.984, 72.875]], [16, [83.984, 72.5]], [19, [84.063, 72.125]], [15, [84.141, 71.5]], [17, [84.219, 71.125]], [17, [84.297, 70.875]], [16, [84.297, 70.625]], [17, [84.375, 70.25]], [17, [84.453, 70]], [17, [84.609, 69.625]], [16, [84.766, 69.5]], [17, [84.844, 69.375]], [16, [84.922, 69.25]], [100, [84.922, 69.375]], [16, [84.922, 69.75]], [17, [84.922, 70.75]], [18, [85, 72.625]], [15, [85.078, 75.25]], [17, [85.078, 78]], [17, [85.078, 81]], [15, [85.078, 83.125]], [16, [85, 85.25]], [17, [84.922, 85.875]], [18, [84.844, 86]], [16, [84.844, 86.125]], [17, [84.844, 86]], [16, [85, 83.5]], [18, [85.859, 77.875]], [16, [86.953, 70.125]], [17, [87.891, 64.375]], [15, [88.594, 57.375]], [19, [88.906, 53.875]], [16, [89.219, 47.125]], [16, [89.219, 44.5]], [16, [88.75, 42.625]], [17, [88.125, 41]], [17, [87.578, 40]], [17, [86.953, 39]], [17, [86.484, 38.375]], [16, [86.172, 38.125]], [18, [86.016, 37.75]], [15, [85.938, 37.625]], [33, [86.406, 38.625]], [17, [87.969, 43]], [17, [88.828, 47.125]], [16, [89.297, 52]], [16, [89.297, 57.625]], [17, [88.828, 61.25]], [17, [87.344, 64.625]], [19, [85.469, 67.125]], [14, [83.516, 68.75]], [18, [79.219, 71.5]], [15, [75.547, 72.75]], [17, [71.641, 73.75]], [16, [64.609, 74.5]], [16, [55.625, 74.5]], [18, [49.063, 74.5]], [17, [43.047, 74.25]], [17, [37.891, 73.5]], [15, [35, 73.125]], [18, [33.125, 72.875]], [16, [31.719, 72.75]], [18, [31.328, 72.5]], [16, [31.25, 72.375]], [249, [31.25, 73.625]], [16, [31.172, 74.5]], [17, [30.859, 75.625]], [16, [30.547, 76.5]], [19, [30.156, 77.375]], [15, [29.844, 77.875]], [17, [29.531, 78.25]], [15, [29.297, 78.5]], [17, [28.828, 78.875]], [17, [28.672, 79]], [16, [28.203, 79.25]], [18, [27.5, 79.75]], [16, [27.266, 79.875]], [17, [27.109, 79.875]], [16, [27.109, 79.875]], [16, [27.109, 79.625]], [17, [27.187, 78.75]], [18, [28.125, 77.75]], [17, [29.922, 77.25]], [15, [31.875, 77.25]], [18, [33.906, 77.25]], [15, [34.453, 77.5]], [18, [35.234, 78.25]], [16, [35.391, 78.375]], [17, [35.391, 78.5]], [17, [35.469, 78.5]], [33, [35.391, 78.5]], [15, [35.234, 78.5]], [18, [35.156, 78.625]], [17, [34.844, 79]], [16, [34.453, 79.375]], [17, [34.141, 79.75]], [15, [33.672, 80]], [17, [33.438, 80.125]], [17, [33.281, 80.125]], [18, [33.281, 79.75]], [16, [33.281, 79.125]], [17, [33.281, 78.375]], [17, [33.359, 77.875]], [16, [33.438, 77.625]], [16, [33.516, 77.625]], [150, [33.516, 77.75]], [19, [33.75, 78.25]], [15, [34.219, 79]], [17, [34.766, 79.625]], [17, [35.625, 80.125]], [14, [36.172, 80.25]], [18, [36.953, 80.5]], [15, [37.813, 80.5]], [18, [38.125, 80.5]], [16, [38.438, 80.375]], [18, [38.672, 80.125]], [16, [38.984, 79.625]], [17, [39.219, 79.375]], [17, [39.297, 79.125]], [16, [39.531, 78.625]], [17, [39.688, 78.125]], [18, [39.844, 77.5]], [14, [40.078, 77.125]], [17, [40.156, 77]], [16, [40.234, 76.875]], [19, [40.313, 76.875]], [49, [40.313, 76.875]], [17, [40.234, 76.875]], [16, [40.234, 76.875]], [199, [40.547, 77.375]], [18, [42.5, 78.875]], [14, [42.969, 79.125]], [18, [44.844, 79.625]], [17, [46.719, 78.875]], [16, [47.422, 77.5]], [16, [47.891, 75.375]], [17, [48.281, 72.625]], [17, [48.281, 70.125]], [17, [48.281, 68.75]], [18, [48.281, 67.25]], [16, [47.656, 66.125]], [16, [46.797, 65.5]], [16, [45.469, 64.75]], [16, [43.047, 63.375]], [16, [38.438, 62]], [18, [36.328, 61.5]], [17, [34.219, 61]], [17, [32.734, 60.75]], [16, [31.406, 60.5]], [17, [29.922, 60.375]], [17, [28.984, 60.25]], [16, [27.891, 60.125]], [17, [27.266, 60]], [16, [26.875, 59.875]], [16, [26.719, 59.875]], [17, [26.719, 59.75]], [17, [26.641, 59.75]], [84, [26.641, 59.5]], [17, [26.719, 59]], [16, [26.719, 58.375]], [17, [26.484, 56.25]], [16, [25.703, 54.125]], [18, [24.766, 52]], [15, [23.828, 50]], [16, [23.281, 49.125]], [18, [22.5, 48.125]], [16, [21.719, 47.25]], [17, [21.094, 46.5]], [16, [20.703, 46]], [18, [20.234, 45.25]], [16, [19.844, 44.875]], [17, [19.375, 44.5]], [15, [19.141, 44.375]], [17, [18.672, 44.25]], [16, [17.969, 44.125]], [18, [17.656, 44.125]], [17, [17.344, 44.125]], [16, [17.188, 44.25]], [17, [17.031, 44.375]], [16, [17.031, 44.5]], [16, [16.953, 44.625]], [17, [16.797, 44.875]], [18, [16.719, 45.125]], [16, [16.406, 45.875]], [17, [16.172, 46.625]], [17, [15.703, 47.75]], [15, [15.078, 49.5]], [17, [15, 49.875]], [17, [14.766, 50.75]], [16, [14.766, 51.375]], [17, [14.766, 52.25]], [18, [15.781, 54]], [15, [16.719, 55.25]], [16, [17.578, 56.5]], [20, [18.359, 57.375]], [13, [18.828, 57.75]], [17, [19.453, 57.875]], [16, [19.922, 57.5]], [17, [20.625, 56.5]], [18, [21.172, 55.875]], [16, [21.641, 54.875]], [17, [22.031, 53.5]], [18, [22.188, 51.875]], [17, [22.188, 50.75]], [15, [22.188, 49.375]], [16, [22.109, 49]], [16, [21.719, 48.625]], [18, [21.094, 48.5]], [16, [20.234, 48.5]], [17, [18.203, 48.375]], [17, [16.953, 47.75]], [17, [16.016, 47.375]], [16, [14.922, 46.75]], [18, [14.219, 46.5]], [15, [13.672, 46.375]], [17, [13.359, 46.375]], [16, [13.125, 46.375]], [17, [12.891, 46.375]], [16, [12.734, 46.625]], [17, [12.656, 47]], [17, [12.578, 48.375]], [18, [13.125, 49.875]], [15, [14.219, 51.5]], [17, [15.703, 53.375]], [17, [16.875, 54.375]], [16, [18.438, 55.25]], [17, [19.297, 55.375]], [17, [19.922, 55.125]], [18, [20.703, 54.25]], [15, [21.484, 53]], [17, [21.953, 52.375]], [15, [22.578, 51.25]], [17, [22.813, 50.75]], [17, [22.813, 50.125]], [17, [22.656, 49.625]], [17, [22.109, 48.875]], [17, [21.25, 48.25]], [16, [20.313, 47.625]], [16, [19.063, 47.25]], [18, [18.281, 47]], [15, [17.344, 46.875]], [16, [16.172, 46.875]], [17, [15.703, 46.875]], [18, [15.469, 46.875]], [17, [15.391, 46.875]], [16, [15.313, 47]], [17, [15.156, 47.625]], [16, [15.156, 48.75]], [16, [15.156, 51.125]], [19, [15.156, 54.75]], [15, [15.703, 56.75]], [17, [16.25, 58]], [16, [16.797, 58.75]], [16, [17.422, 58.875]], [16, [17.734, 58.875]], [19, [18.672, 57.25]], [15, [19.375, 55.875]], [16, [20, 54.125]], [18, [20.391, 52.25]], [17, [20.625, 50.875]], [17, [20.781, 49.625]], [15, [20.781, 48.375]], [19, [20.781, 47.875]], [16, [20.547, 47.5]], [16, [19.922, 47]], [16, [19.063, 46.75]], [16, [17.969, 46.125]], [17, [17.031, 45.5]], [16, [16.641, 45.25]], [18, [16.563, 45.125]], [16, [16.484, 45.125]]];


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