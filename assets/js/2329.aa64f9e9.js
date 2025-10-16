'use strict';
exports.id = 2329;
exports.ids = [2329];
exports.modules = {
 /***/ 26221: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ c: () => /* binding */ clsx,
   /* harmony export */
  });
  function r(e) {
   var t,
    f,
    n = '';
   if ('string' == typeof e || 'number' == typeof e) n += e;
   else if ('object' == typeof e)
    if (Array.isArray(e)) {
     var o = e.length;
     for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
    } else for (f in e) e[f] && (n && (n += ' '), (n += f));
   return n;
  }
  function clsx() {
   for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
   return n;
  }

  //# sourceMappingURL=clsx-eca3fadc.js.map

  /***/
 },

 /***/ 72329: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_progress_sublist_item: () => /* binding */ StepProgressSublistItem,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26221);

  const progressListCss = '.denhaag-process-steps__step{position:relative;padding-block-end:var(--denhaag-process-steps-step-padding-block-end);padding-block-start:var(--denhaag-process-steps-step-padding-block-start)}.denhaag-process-steps__step+.denhaag-process-steps__step{margin-block-start:var(--denhaag-process-steps-step-distance)}.denhaag-process-steps{--denhaag-process-steps-step-distance:40px;--denhaag-process-steps-sub-step-distance:24px;font-family:var(--denhaag-process-steps-font-family);font-size:var(--denhaag-process-steps-font-size);line-height:var(--denhaag-process-steps-line-height);list-style:none;margin-block-start:0;margin-block-end:0;padding-inline-start:0;position:relative}.denhaag-process-steps__step-header{display:flex;align-items:var(--denhaag-process-steps-step-header-align-items);gap:16px}.denhaag-process-steps__step-header-toggle{--utrecht-button-subtle-font-size:inherit;--utrecht-button-subtle-background-color:transparent;--utrecht-button-subtle-color:auto;--utrecht-button-padding-block-end:0;--utrecht-button-padding-block-start:0;--utrecht-button-padding-inline-end:0;--utrecht-button-padding-inline-start:0;--utrecht-button-icon-gap:4px;border:0;background-color:inherit;appearance:none;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;display:flex;align-items:center;gap:0}.denhaag-process-steps__step-heading{display:flex;align-items:center;color:var(--denhaag-process-steps-step-heading-color);font-family:var(--denhaag-process-steps-step-heading-font-family);font-size:var(--denhaag-process-steps-step-heading-font-size);font-weight:var(--denhaag-process-steps-step-heading-font-weight);line-height:var(--denhaag-process-steps-step-heading-line-height);text-align:start;overflow-wrap:var(--denhaag-process-steps-step-heading-overflow-wrap, anywhere);margin-block-start:0;margin-block-end:0}.denhaag-process-steps__step-heading--not-checked{color:var(--denhaag-process-steps-step-heading-not-checked-color)}.denhaag-process-steps__step-heading--checked{color:var(--denhaag-process-steps-step-heading-checked-color);font-size:var(--denhaag-process-steps-step-heading-checked-font-size, var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-checked-font-weight, var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--current{color:var(--denhaag-process-steps-step-heading-current-color);font-size:var(--denhaag-process-steps-step-heading-current-font-size, var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-current-font-weight, var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--warning{color:var(--denhaag-process-steps-step-heading-warning-color)}.denhaag-process-steps__step-heading--error{color:var(--denhaag-process-steps-step-heading-error-color)}.denhaag-process-steps__step-details{display:block}.denhaag-process-steps__step-details--hidden{display:none}.denhaag-process-steps__step-body{position:relative}.denhaag-process-steps__step-meta{position:relative;margin-inline-start:calc(var(--denhaag-step-marker-size) + 16px);font-size:var(--denhaag-process-steps-step-meta-font-size);color:var(--denhaag-process-steps-step-meta-color)}.denhaag-process-steps__step-meta--date{font-size:var(--denhaag-process-steps-step-meta-date-font-size, var(--denhaag-process-steps-step-meta-font-size));color:var(--denhaag-process-steps-step-meta-date-color, var(--denhaag-process-steps-step-meta-color))}.denhaag-process-steps__sub-step{position:relative;align-items:baseline;display:flex;flex-direction:row;gap:23px;margin-block-start:var(--denhaag-process-steps-sub-step-distance)}.denhaag-process-steps__sub-step-heading{margin-block-end:0;margin-block-start:0;}.denhaag-step-marker{position:relative;z-index:1;align-items:center;background-color:var(--denhaag-step-marker-background-color);block-size:var(--denhaag-step-marker-size);border-style:solid;border-width:var(--denhaag-step-marker-border-width);border-color:var(--denhaag-step-marker-border-color, transparent);border-radius:var(--denhaag-step-marker-border-radius, 50%);box-sizing:border-box;color:var(--denhaag-step-marker-color);display:flex;flex-grow:0;font-family:var(--denhaag-step-marker-font-family);font-size:var(--denhaag-step-marker-font-size);font-weight:var(--denhaag-step-marker-font-weight);inline-size:var(--denhaag-step-marker-size);justify-content:center;margin-block-end:var(--denhaag-step-marker-margin);margin-block-start:var(--denhaag-step-marker-margin);padding-inline-end:0;min-inline-size:var(--denhaag-step-marker-min-size, var(--denhaag-step-marker-size));min-block-size:var(--denhaag-step-marker-min-size, var(--denhaag-step-marker-size))}.denhaag-step-marker .denhaag-icon{block-size:var(--denhaag-step-marker-icon-size);inline-size:var(--denhaag-step-marker-icon-size)}.denhaag-step-marker--nested{block-size:var(--denhaag-step-marker-nested-size);min-block-size:var(--denhaag-step-marker-nested-min-size, var(--denhaag-step-marker-nested-size));min-inline-size:var(--denhaag-step-marker-nested-min-size, var(--denhaag-step-marker-nested-size));inline-size:var(--denhaag-step-marker-nested-size);border-width:var(--denhaag-step-marker-nested-border-width, var(--denhaag-step-marker-border-width));margin-inline-start:calc((var(--denhaag-step-marker-size) - var(--denhaag-step-marker-nested-size)) / 2)}.denhaag-step-marker--nested .denhaag-icon{block-size:var(--denhaag-step-marker-nested-icon-size);inline-size:var(--denhaag-step-marker-nested-icon-size)}.denhaag-step-marker--not-checked{background-color:var(--denhaag-step-marker-not-checked-background-color);border-color:var(--denhaag-step-marker-not-checked-border-color);color:var(--denhaag-step-marker-not-checked-color)}.denhaag-step-marker--not-checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-not-checked-nested-background-color, var(--denhaag-step-marker-not-checked-background-color));border-color:var(--denhaag-step-marker-not-checked-nested-border-color, var(--denhaag-step-marker-not-checked-border-color));color:var(--denhaag-step-marker-not-checked-nested-color, var(--denhaag-step-marker-not-checked-color))}.denhaag-step-marker--checked{background-color:var(--denhaag-step-marker-checked-background-color);border-color:var(--denhaag-step-marker-checked-border-color);color:var(--denhaag-step-marker-checked-color)}.denhaag-step-marker--checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-checked-nested-background-color, var(--denhaag-step-marker-checked-background-color));border-color:var(--denhaag-step-marker-checked-nested-border-color, var(--denhaag-step-marker-checked-border-color));color:var(--denhaag-step-marker-checked-nested-color, var(--denhaag-step-marker-checked-color))}.denhaag-step-marker--current{background-color:var(--denhaag-step-marker-current-background-color);border-color:var(--denhaag-step-marker-current-border-color);color:var(--denhaag-step-marker-current-color)}.denhaag-step-marker--current.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-current-nested-background-color, var(--denhaag-step-marker-current-background-color));border-color:var(--denhaag-step-marker-current-nested-border-color, var(--denhaag-step-marker-current-border-color));color:var(--denhaag-step-marker-current-nested-color, var(--denhaag-step-marker-current-color))}.denhaag-step-marker--disabled{background-color:var(--denhaag-step-marker-disabled-background-color);border-color:var(--denhaag-step-marker-disabled-border-color);color:var(--denhaag-step-marker-disabled-color)}.denhaag-step-marker--disabled.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-disabled-nested-background-color, var(--denhaag-step-marker-disabled-background-color));border-color:var(--denhaag-step-marker-disabled-nested-border-color, var(--denhaag-step-marker-disabled-border-color));color:var(--denhaag-step-marker-disabled-nested-color, var(--denhaag-step-marker-disabled-color))}.denhaag-step-marker--warning{background-color:var(--denhaag-step-marker-warning-background-color);border-color:var(--denhaag-step-marker-warning-border-color);color:var(--denhaag-step-marker-warning-color)}.denhaag-step-marker--warning.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-warning-nested-background-color, var(--denhaag-step-marker-warning-background-color));border-color:var(--denhaag-step-marker-warning-nested-border-color, var(--denhaag-step-marker-warning-border-color));color:var(--denhaag-step-marker-warning-nested-color, var(--denhaag-step-marker-warning-color))}.denhaag-step-marker--error{background-color:var(--denhaag-step-marker-error-background-color);border-color:var(--denhaag-step-marker-error-border-color);color:var(--denhaag-step-marker-error-color)}.denhaag-step-marker--error.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-error-nested-background-color, var(--denhaag-step-marker-error-background-color));border-color:var(--denhaag-step-marker-error-nested-border-color, var(--denhaag-step-marker-error-border-color));color:var(--denhaag-step-marker-error-nested-color, var(--denhaag-step-marker-error-color))}.denhaag-step-marker--default{background-color:var(--denhaag-step-marker-default-background-color);border-color:var(--denhaag-step-marker-default-border-color);color:var(--denhaag-step-marker-default-color)}.denhaag-step-marker--default.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-default-nested-background-color, var(--denhaag-step-marker-default-background-color));border-color:var(--denhaag-step-marker-default-nested-border-color, var(--denhaag-step-marker-default-border-color));color:var(--denhaag-step-marker-default-nested-color, var(--denhaag-step-marker-default-color))}.denhaag-step-marker__connector{position:absolute;left:calc(var(--denhaag-step-marker-size) / 2);top:0;height:100%;outline:var(--denhaag-step-marker-connector-width, 1px) var(--denhaag-step-marker-connector-style, dashed) var(--denhaag-step-marker-connector-color)}.denhaag-step-marker__connector--main-to-main{top:calc(-1 * var(--denhaag-step-marker-size) / 2);padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-size))}.denhaag-step-marker__connector--main-to-nested{top:calc(-1 * var(--denhaag-step-marker-size) / 2);padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-nested-size))}.denhaag-step-marker__connector--nested-to-nested{top:var(--denhaag-step-marker-nested-size);padding-block-end:var(--denhaag-process-steps-sub-step-distance)}.denhaag-step-marker__connector--nested-to-main{top:var(--denhaag-step-marker-nested-size);padding-block-end:var(--denhaag-process-steps-step-distance)}.denhaag-step-marker__connector--not-checked{outline-width:var(--denhaag-step-marker-connector-not-checked-outline-width, var(--denhaag-step-marker-connector-outline-width, 1px));outline-style:var(--denhaag-step-marker-connector-not-checked-outline-style, dashed);outline-color:var(--denhaag-step-marker-connector-not-checked-outline-color, var(--denhaag-step-marker-connector-outline-color))}.denhaag-step-marker__connector--checked,.denhaag-step-marker__connector--current{outline-width:var(--denhaag-step-marker-connector-checked-outline-width, var(--denhaag-step-marker-connector-outline-width, 1px));outline-style:var(--denhaag-step-marker-connector-checked-outline-style, solid);outline-color:var(--denhaag-step-marker-connector-checked-outline-color, var(--denhaag-step-marker-connector-outline-color))}.denhaag-step-marker__connector--warning{outline-width:var(--denhaag-step-marker-connector-warning-outline-width, var(--denhaag-step-marker-connector-outline-width, 1px));outline-style:var(--denhaag-step-marker-connector-warning-outline-style, solid);outline-color:var(--denhaag-step-marker-connector-warning-outline-color, var(--denhaag-step-marker-connector-outline-color))}.denhaag-step-marker__connector--error{outline-width:var(--denhaag-step-marker-connector-error-outline-width, var(--denhaag-step-marker-connector-outline-width, 1px));outline-style:var(--denhaag-step-marker-connector-error-outline-style, solid);outline-color:var(--denhaag-step-marker-connector-error-outline-color, var(--denhaag-step-marker-connector-outline-color))}.denhaag-step-marker__connector--default{outline-width:var(--denhaag-step-marker-connector-default-outline-width, var(--denhaag-step-marker-connector-outline-width, 1px));outline-style:var(--denhaag-step-marker-connector-default-outline-style, solid);outline-color:var(--denhaag-step-marker-connector-default-outline-color, var(--denhaag-step-marker-connector-outline-color))}:host{display:contents}:host([hidden]){display:none !important}';
  const UtrechtProgressSublistItemStyle0 = progressListCss;

  const StepProgressSublistItem = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.appearance = undefined;
    this.checked = false;
   }
   render() {
    const { appearance, checked } = this;
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
     'li',
     { key: 'c7f039527c81ed7662740a888be491d63019ec9e', class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('denhaag-process-steps__sub-step', `denhaag-process-steps__sub-step--${appearance}`) },
     (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
      'div',
      { key: '25c339f3d412673b1ab8a9cc7755d04e39e19b88', class: 'denhaag-process-steps__step-header' },
      (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
       'div',
       {
        key: '05956144e7865f07b5a96c782a188a778aae1e95',
        class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('denhaag-step-marker', 'denhaag-step-marker--nested', {
         'denhaag-step-marker--checked': checked,
         'denhaag-step-marker--not-checked': !checked,
        }),
       },
       (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: '1beef6a7c97ac2dee8ea90c0f58ed9291cbe78f2', name: 'marker' }),
       checked && (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('svg', { key: '4f8ebd3f65d6b2da3b9a1723b354924b2e026b95', xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', viewBox: '0 0 24 24', class: 'denhaag-icon', focusable: 'false', 'aria-hidden': 'true', 'shape-rendering': 'auto' }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('path', { key: '09e509a165809b2bd8099e9b70282abaef2200da', d: 'M20.664 5.253a1 1 0 01.083 1.411l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 011.494-1.328l4.586 5.159 9.92-11.16a1 1 0 011.411-.082z', stroke: 'currentColor', 'stroke-width': '1.75' })),
      ),
      (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
       'p',
       {
        key: '24a1245e488c3f201e226e9ff5a13598a46285b9',
        class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('denhaag-process-steps__sub-step-heading', {
         'denhaag-process-steps__sub-step-heading--checked': checked,
        }),
       },
       (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: 'c0774625671d121a01002eeac8f4961db825e3d8' }),
      ),
     ),
    );
   }
  };
  StepProgressSublistItem.style = UtrechtProgressSublistItemStyle0;

  //# sourceMappingURL=utrecht-progress-sublist-item.entry.js.map

  /***/
 },
};
