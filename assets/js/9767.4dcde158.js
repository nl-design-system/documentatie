'use strict';
exports.id = 9767;
exports.ids = [9767];
exports.modules = {
 /***/ 9767: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_digid_button: () => /* binding */ DigidButton,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22990);

  const digidButtonCss = '.utrecht-digid-button{--utrecht-button-min-block-size:var(--utrecht-digid-button-block-size, 44px);--utrecht-logo-max-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-inline-size:var(--utrecht-digid-button-block-size, 50px);block-size:var(--utrecht-digid-button-block-size, 50px);display:inline-flex;gap:var(--utrecht-space-inline-sm)}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtDigidButtonStyle0 = digidButtonCss;

  const DigidButton = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = undefined;
   }
   render() {
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'e7d1dc537e61280200d578eb38f5420b4619ec77', class: 'utrecht-digid-button' }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('utrecht-digid-logo', { key: '63478652d22ff3f9e99987182578f8a335143860', class: 'utrecht-digid-button__logo' }), (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: '8af7bb8d870f149e0f44ea3e440490a15ac4e2ae' }));
   }
  };
  DigidButton.style = UtrechtDigidButtonStyle0;

  //# sourceMappingURL=utrecht-digid-button.entry.js.map

  /***/
 },
};
