"use strict";
exports.id = 5087;
exports.ids = [5087];
exports.modules = {
 /***/ 5087: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_logo_button: () => /* binding */ DigidButton,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);

  const logoButtonCss = ".utrecht-logo-button{--utrecht-icon-size:var(--utrecht-logo-button-icon, 50px);--utrecht-button-min-block-size:var(--utrecht-logo-button-block-size, 50px);--utrecht-logo-max-block-size:var(--utrecht-logo-button-block-size, 50px);--utrecht-logo-max-inline-size:var(--utrecht-logo-button-block-size, 50px);align-items:flex-start;display:inline-flex;gap:var(--utrecht-space-inline-sm)}:host{display:block}:host([hidden]){display:none !important}";

  const DigidButton = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
   }
   render() {
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "utrecht-logo-button" }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
   }
  };
  DigidButton.style = logoButtonCss;

  //# sourceMappingURL=utrecht-logo-button.entry.js.map

  /***/
 },
};
