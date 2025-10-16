'use strict';
exports.id = 4138;
exports.ids = [4138];
exports.modules = {
 /***/ 4138: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_number_badge: () => /* binding */ NumberBadge,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);

  const numberBadgeCss = '.utrecht-number-badge{background-color:var(--utrecht-number-badge-background-color, var(--utrecht-badge-background-color, hsl(0, 0%, 0%)));border-color:var(--utrecht-number-badge-border-color, var(--utrecht-badge-border-color));border-radius:var(--utrecht-number-badge-border-radius, var(--utrecht-badge-border-radius, 0.5ch));border-style:solid;border-width:max(var(--utrecht-number-badge-border-width, var(--utrecht-badge-border-width, 0)), var(--_utrecht-number-badge-min-border-width, 0));color:var(--utrecht-number-badge-color, var(--utrecht-badge-color, hsl(0, 0%, 100%)));display:inline-block;font-family:var(--utrecht-number-badge-font-family, var(--utrecht-badge-font-family, var(--utrecht-document-font-family, sans-serif)));font-size:var(--utrecht-number-badge-font-size, var(--utrecht-badge-font-size));font-style:var(--utrecht-number-badge-font-style, normal);font-weight:var(--utrecht-number-badge-font-weight, var(--utrecht-badge-font-weight, bold));line-height:1;max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--utrecht-number-badge-min-block-size, var(--utrecht-number-badge-min-inline-size, var(--utrecht-number-badge-min-size, 1em)));min-inline-size:var(--utrecht-number-badge-min-inline-size, var(--utrecht-number-badge-min-size, 1em));padding-block-end:var(--utrecht-number-badge-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-block-start:var(--utrecht-number-badge-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-inline-end:var(--utrecht-number-badge-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));padding-inline-start:var(--utrecht-number-badge-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));text-align:center;text-decoration:none;white-space:nowrap}@media screen and (forced-colors: active){.utrecht-number-badge{--_utrecht-number-badge-min-border-width:1px;border-color:currentColor}}:host{display:inline-block}:host([hidden]){display:none !important}';
  const UtrechtNumberBadgeStyle0 = numberBadgeCss;

  const NumberBadge = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.value = undefined;
    this.max = undefined;
    this.locale = undefined;
   }
   render() {
    const { locale, max, value } = this;
    const limited = typeof max === 'number' && typeof value === 'number' && Number(value) > Number(max);
    const formatNumber = (n) => (locale ? Intl.NumberFormat(locale).format(n) : String(n));
    const textContent = limited ? `${formatNumber(max)}+` : typeof value === 'number' ? formatNumber(value) : '';
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'b87b41d6b285380d0bca7429067a4acbee35eccd', class: 'utrecht-number-badge' }, textContent ? textContent : (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', null));
   }
  };
  NumberBadge.style = UtrechtNumberBadgeStyle0;

  //# sourceMappingURL=utrecht-number-badge.entry.js.map

  /***/
 },
};
