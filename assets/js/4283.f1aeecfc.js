'use strict';
exports.id = 4283;
exports.ids = [4283];
exports.modules = {
 /***/ 74283: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_digid_button: () => /* binding */ DigidButton,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);

  const digidButtonCss = '.utrecht-digid-button{--utrecht-button-min-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-inline-size:var(--utrecht-digid-button-block-size, 50px);block-size:var(--utrecht-digid-button-block-size, 50px);display:inline-flex;gap:var(--utrecht-space-inline-sm)}:host{display:block}:host([hidden]){display:none !important}';

  const DigidButton = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = undefined;
   }
   render() {
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: 'utrecht-digid-button' }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)('utrecht-digid-logo', { class: 'utrecht-digid-button__logo' }), (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', null));
   }
  };
  DigidButton.style = digidButtonCss;

  //# sourceMappingURL=utrecht-digid-button.entry.js.map

  /***/
 },
};
