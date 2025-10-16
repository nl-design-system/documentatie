'use strict';
exports.id = 7052;
exports.ids = [7052];
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

 /***/ 97052: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_checkbox: () => /* binding */ Checkbox,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26221);

  const checkboxCss = '.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input :focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtCheckboxStyle0 = checkboxCss;

  const Checkbox = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.utrechtBlur = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtBlur', 7);
    this.utrechtChange = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtChange', 7);
    this.utrechtFocus = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtFocus', 7);
    this.utrechtInput = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtInput', 7);
    this.disabled = false;
    this.readOnly = false;
    this.checked = false;
    this.value = '';
   }
   render() {
    const { checked, disabled, value } = this;
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('input', {
     key: '237941bf96815e3a5f4934d79c081c0771f63348',
     class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-checkbox'),
     type: 'checkbox',
     checked: checked,
     disabled: disabled,
     value: value,
     onBlur: (evt) => this.utrechtBlur.emit(evt),
     onChange: (evt) => this.utrechtChange.emit(evt),
     onFocus: (evt) => this.utrechtFocus.emit(evt),
     onInput: (evt) => {
      this.checked = evt.target.checked;
      this.utrechtInput.emit(evt);
     },
    });
   }
  };
  Checkbox.style = UtrechtCheckboxStyle0;

  //# sourceMappingURL=utrecht-checkbox.entry.js.map

  /***/
 },
};
