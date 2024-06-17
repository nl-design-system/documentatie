"use strict";
exports.id = 66;
exports.ids = [66];
exports.modules = {
 /***/ 66: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_table_header_cell: () => /* binding */ TableHeaderCell,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);

  const tableHeaderCellCss = ":host{--utrecht-icon-size:var(--utrecht-table-cell-icon-size);block-size:var(--utrecht-table-cell-line-height, 1em);line-height:var(--utrecht-table-cell-line-height, inherit);padding-block-end:var(--utrecht-table-cell-padding-block-end, 0);padding-block-start:var(--utrecht-table-cell-padding-block-start, 0);padding-inline-end:var(--utrecht-table-cell-padding-inline-end, 0);padding-inline-start:var(--utrecht-table-cell-padding-inline-start, 0);text-align:start;color:var(--utrecht-table-header-cell-color);font-size:var(--utrecht-table-header-cell-font-size);font-weight:var(--utrecht-table-header-cell-font-weight, bold);text-transform:var(--utrecht-table-header-cell-text-transform);vertical-align:var(--_utrecht-table-header-cell-vertical-align, top);z-index:var(--_utrecht-table-header-cell-z-index);display:table-cell}";

  const TableHeaderCell = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scope = undefined;
   }
   render() {
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.H, { role: this.scope === "col" ? "columnheader" : this.scope === "row" ? "rowheader" : "cell" }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
   }
  };
  TableHeaderCell.style = tableHeaderCellCss;

  //# sourceMappingURL=utrecht-table-header-cell.entry.js.map

  /***/
 },
};
