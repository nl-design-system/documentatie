'use strict';
exports.id = 292;
exports.ids = [292];
exports.modules = {
 /***/ 20292: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_digid_button: () => /* binding */ DigidButton,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);

  const digidButtonCss = '.utrecht-digid-button{--utrecht-button-min-block-size:var(--utrecht-digid-button-block-size, 44px);--utrecht-logo-max-block-size:var(--utrecht-digid-button-block-size, 50px);--utrecht-logo-max-inline-size:var(--utrecht-digid-button-block-size, 50px);block-size:var(--utrecht-digid-button-block-size, 50px);display:inline-flex;gap:var(--utrecht-space-inline-sm)}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtDigidButtonStyle0 = digidButtonCss;

  const DigidButton = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = undefined;
   }
   render() {
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'f1212d9f2e58b416ad10adbf9be0f7f13c5ab691', class: 'utrecht-digid-button' }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('utrecht-digid-logo', { key: '422595d281253ee157ea2acd7e5ae014e1ffcf9d', class: 'utrecht-digid-button__logo' }), (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: '665ad8db0714b47d0565d21f586ad1e8d78d1d72' }));
   }
  };
  DigidButton.style = UtrechtDigidButtonStyle0;

  //# sourceMappingURL=utrecht-digid-button.entry.js.map

  /***/
 },
};
