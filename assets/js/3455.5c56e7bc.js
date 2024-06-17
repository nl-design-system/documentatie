"use strict";
exports.id = 3455;
exports.ids = [3455];
exports.modules = {
 /***/ 39026: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ c: () => /* binding */ clsx,
   /* harmony export */
  });
  function r(e) {
   var t,
    f,
    n = "";
   if ("string" == typeof e || "number" == typeof e) n += e;
   else if ("object" == typeof e)
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), (n += f));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
   return n;
  }
  function clsx() {
   for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), (n += t));
   return n;
  }

  //# sourceMappingURL=clsx.m-9f200cc0.js.map

  /***/
 },

 /***/ 63455: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_backdrop: () => /* binding */ Backdrop,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);
  /* harmony import */ var _clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39026);

  const backdropCss = ".utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none;display:block;inset-block-end:0;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;position:absolute;z-index:var(--utrecht-backdrop-z-index)}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-backdrop--reduced-motion{--_utrecht-backdrop-fade-in-animation-duration:0}.utrecht-backdrop--reduced-transparency{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}";

  const Backdrop = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.viewport = undefined;
   }
   render() {
    const { viewport } = this;
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: (0, _clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-backdrop", viewport && "utrecht-backdrop--viewport") }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
   }
  };
  Backdrop.style = backdropCss;

  //# sourceMappingURL=utrecht-backdrop.entry.js.map

  /***/
 },
};
