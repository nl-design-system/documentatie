'use strict';
exports.id = 3588;
exports.ids = [3588];
exports.modules = {
 /***/ 43588: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_preserve_data: () => /* binding */ PreserveData,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);

  const preserveDataCss = ':host{display:inline;unicode-bidi:isolate;white-space-collapse:preserve-spaces}:host([hidden]){display:none !important}';
  const UtrechtPreserveDataStyle0 = preserveDataCss;

  const PreserveData = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dateTime = undefined;
    this.value = undefined;
   }
   render() {
    const { dateTime, value } = this;
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '0af80ca8f8d5649a10e1ad32f93e55f8b826f251', translate: 'no' }, typeof dateTime !== 'undefined' ? (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('time', { dateTime: dateTime }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', null)) : typeof value !== 'undefined' ? (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('data', { value: value }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', null)) : (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', null));
   }
  };
  PreserveData.style = UtrechtPreserveDataStyle0;

  //# sourceMappingURL=utrecht-preserve-data.entry.js.map

  /***/
 },
};
