'use strict';
exports.id = 3109;
exports.ids = [3109];
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

 /***/ 23109: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_custom_checkbox: () => /* binding */ CustomCheckbox,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26221);

  const customCheckboxCss = ".utrecht-checkbox--custom,.utrecht-custom-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-position:center;background-repeat:no-repeat;background-size:contain;block-size:var(--utrecht-checkbox-size, 1em);border-color:var(--utrecht-checkbox-border-color);border-radius:var(--utrecht-checkbox-border-radius, 0);border-style:solid;border-width:var(--utrecht-checkbox-border-width);cursor:var(--utrecht-action-activate-cursor, revert);inline-size:var(--utrecht-checkbox-size, 1em);margin-block-start:var(--utrecht-checkbox-margin-block-start);min-block-size:24px;min-inline-size:24px;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:top}.utrecht-checkbox--custom.utrecht-checkbox--checked,.utrecht-custom-checkbox--checked{background-color:var(--utrecht-checkbox-checked-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-checked-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-checked-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--disabled,.utrecht-custom-checkbox--disabled{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-disabled-border-width, var(--utrecht-checkbox-border-width));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-checkbox--custom.utrecht-checkbox--disabled:checked,.utrecht-custom-checkbox--disabled:checked{background-color:var(--utrecht-checkbox-disabled-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--disabled:active,.utrecht-custom-checkbox--disabled:active{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--indeterminate,.utrecht-custom-checkbox--indeterminate{background-color:var(--utrecht-checkbox-indeterminate-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-indeterminate-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-indeterminate-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-indeterminate-color, var(--utrecht-checkbox-color))}.utrecht-checkbox--custom.utrecht-checkbox--invalid,.utrecht-custom-checkbox--invalid{border-color:var(--utrecht-checkbox-invalid-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-invalid-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--active,.utrecht-custom-checkbox--active{background-color:var(--utrecht-checkbox-active-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-active-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-active-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-active-color, var(--utrecht-checkbox-color))}.utrecht-checkbox--custom.utrecht-checkbox--hover,.utrecht-custom-checkbox--hover{background-color:var(--utrecht-checkbox-hover-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-hover-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-hover-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--focus,.utrecht-custom-checkbox--focus{background-color:var(--utrecht-checkbox-focus-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-focus-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-focus-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--focus-visible,.utrecht-custom-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled,.utrecht-custom-checkbox--html-input:disabled{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-disabled-border-width, var(--utrecht-checkbox-border-width));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled:checked,.utrecht-custom-checkbox--html-input:disabled:checked{background-color:var(--utrecht-checkbox-disabled-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled:active,.utrecht-custom-checkbox--html-input:disabled:active{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:hover,.utrecht-custom-checkbox--html-input:hover{background-color:var(--utrecht-checkbox-hover-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-hover-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-hover-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:focus,.utrecht-custom-checkbox--html-input:focus{background-color:var(--utrecht-checkbox-focus-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-focus-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-focus-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:focus-visible,.utrecht-custom-checkbox--html-input:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-checkbox--custom.utrecht-checkbox--html-input:invalid,.utrecht-checkbox--custom.utrecht-checkbox--html-input[aria-invalid=true],.utrecht-custom-checkbox--html-input:invalid,.utrecht-custom-checkbox--html-input[aria-invalid=true]{border-color:var(--utrecht-checkbox-invalid-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-invalid-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:active,.utrecht-custom-checkbox--html-input:active{background-color:var(--utrecht-checkbox-active-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-active-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-active-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-active-color, var(--utrecht-checkbox-color))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:checked,.utrecht-custom-checkbox--html-input:checked{background-color:var(--utrecht-checkbox-checked-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-checked-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-checked-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:indeterminate,.utrecht-checkbox--custom.utrecht-checkbox--html-input:checked:indeterminate,.utrecht-custom-checkbox--html-input:indeterminate,.utrecht-custom-checkbox--html-input:checked:indeterminate{background-color:var(--utrecht-checkbox-indeterminate-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-indeterminate-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-indeterminate-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-indeterminate-color, var(--utrecht-checkbox-color))}:host{display:block}:host([hidden]){display:none !important}";
  const UtrechtCustomCheckboxStyle0 = customCheckboxCss;

  const CustomCheckbox = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disabled = undefined;
    this.checked = undefined;
    this.indeterminate = undefined;
    this.invalid = undefined;
    this.required = undefined;
   }
   render() {
    const { checked, required, disabled, indeterminate, invalid } = this;
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('input', { key: '6c3ec0d96df57817493a66f6a93b19727af86206', 'aria-invalid': invalid ? 'true' : null, class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-custom-checkbox', 'utrecht-custom-checkbox--html-input', invalid && 'utrecht-custom-checkbox__box--invalid'), type: 'checkbox', checked: checked, required: required, indeterminate: indeterminate, disabled: disabled });
   }
  };
  CustomCheckbox.style = UtrechtCustomCheckboxStyle0;

  //# sourceMappingURL=utrecht-custom-checkbox.entry.js.map

  /***/
 },
};
