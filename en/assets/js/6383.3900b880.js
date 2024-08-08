'use strict';
exports.id = 6383;
exports.ids = [6383];
exports.modules = {
 /***/ 36383: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_digid_button: () => /* binding */ DigidButton,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80830);

  const digidButtonCss = '.utrecht-digid-button{--utrecht-button-min-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-inline-size:var(--utrecht-digid-button-block-size, 50px);block-size:var(--utrecht-digid-button-block-size, 50px);display:inline-flex;gap:var(--utrecht-space-inline-sm)}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtDigidButtonStyle0 = digidButtonCss;

  const DigidButton = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = undefined;
   }
   render() {
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'ecfb79329b3f94db24eef1385a1b9d1b15611217', class: 'utrecht-digid-button' }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('utrecht-digid-logo', { key: 'f15212932bd7d86d173b91ea3afa63fbec73c141', class: 'utrecht-digid-button__logo' }), (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: 'ced08d49c2d267b28be5a1f4168d2f8c3ee9d579' }));
   }
  };
  DigidButton.style = UtrechtDigidButtonStyle0;

  //# sourceMappingURL=utrecht-digid-button.entry.js.map

  /***/
 },
};
