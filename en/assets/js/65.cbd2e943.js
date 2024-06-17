"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {
 /***/ 60065: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_multiline_data: () => /* binding */ MultilineData,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);

  const multilineDataCss = ".utrecht-multiline-data{white-space:pre-line;white-space-collapse:preserve-breaks}.utrecht-multiline-data--html-pre{font-family:inherit;margin-block-end:0;margin-block-start:0}:host{white-space:pre-line;white-space-collapse:preserve-breaks}:host([hidden]){display:none !important}";

  const MultilineData = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
   }
   render() {
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("pre", { class: "utrecht-multiline-data utrecht-multiline-data--html-pre" }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
   }
  };
  MultilineData.style = multilineDataCss;

  //# sourceMappingURL=utrecht-multiline-data.entry.js.map

  /***/
 },
};
