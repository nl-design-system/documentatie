"use strict";
exports.id = 2203;
exports.ids = [2203];
exports.modules = {
 /***/ 52203: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_table: () => /* binding */ Table,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);

  const tableCss = ":host{border-collapse:separate;border-color:var(--utrecht-table-border-color, 0);border-spacing:0;border-style:solid;border-width:var(--utrecht-table-border-width, 0);font-family:var(--utrecht-table-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-table-font-size, inherit);inline-size:100%;line-height:var(--utrecht-table-line-height, inherit);margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-table-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-table-margin-block-start, 0));display:table}";

  const Table = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
   }
   render() {
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.H, { role: "table" }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
   }
  };
  Table.style = tableCss;

  //# sourceMappingURL=utrecht-table.entry.js.map

  /***/
 },
};
