'use strict';
exports.id = 5895;
exports.ids = [5895];
exports.modules = {
 /***/ 85895: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_column_layout: () => /* binding */ ColumnLayout,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76603);

  const columnLayoutCss = ':host{column-gap:var(--utrecht-column-layout-gap, 2em);column-width:var(--utrecht-column-layout-column-width, 40ch);display:block}:host([rule]){column-rule-color:var(--utrecht-column-layout-column-rule-color);column-rule-style:solid;column-rule-width:var(--utrecht-column-layout-column-rule-width, 0)}:host([hidden]){display:none !important}';

  const ColumnLayout = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.rule = false;
   }
   render() {
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', null);
   }
  };
  ColumnLayout.style = columnLayoutCss;

  //# sourceMappingURL=utrecht-column-layout.entry.js.map

  /***/
 },
};
