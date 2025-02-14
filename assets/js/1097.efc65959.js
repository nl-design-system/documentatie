'use strict';
exports.id = 1097;
exports.ids = [1097];
exports.modules = {
 /***/ 91097: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_column_layout: () => /* binding */ ColumnLayout,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22990);

  const columnLayoutCss = ':host{column-gap:var(--utrecht-column-layout-gap, 2em);column-width:var(--utrecht-column-layout-column-width, 40ch);display:block}:host([rule]){column-rule-color:var(--utrecht-column-layout-column-rule-color);column-rule-style:solid;column-rule-width:var(--utrecht-column-layout-column-rule-width, 0)}:host([hidden]){display:none !important}';
  const UtrechtColumnLayoutStyle0 = columnLayoutCss;

  const ColumnLayout = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.rule = false;
   }
   render() {
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: '3c7303a54624fe137e2624fa0619c14545ced78e' });
   }
  };
  ColumnLayout.style = UtrechtColumnLayoutStyle0;

  //# sourceMappingURL=utrecht-column-layout.entry.js.map

  /***/
 },
};
