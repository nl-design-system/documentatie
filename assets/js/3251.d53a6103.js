'use strict';
exports.id = 3251;
exports.ids = [3251];
exports.modules = {
 /***/ 56600: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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

 /***/ 83251: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_textarea: () => /* binding */ Textarea,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22990);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56600);

  const textareaCss = '.utrecht-textarea{background-color:var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color));block-size:initial;border-width:var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width));border-block-end-width:var(--utrecht-textarea-border-block-end-width, var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width)));border-color:var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color));border-radius:var(--utrecht-textarea-border-radius, var(--utrecht-form-control-border-radius, 0));border-style:solid;box-sizing:border-box;color:var(--utrecht-textarea-color, var(--utrecht-form-control-color));font-family:var(--utrecht-textarea-font-family, var(--utrecht-form-control-font-family));font-size:var(--utrecht-textarea-font-size, var(--utrecht-form-control-font-size, inherit));font-weight:var(--utrecht-textarea-font-weight, var(--utrecht-form-control-font-weight, initial));inline-size:100%;line-height:var(--utrecht-textarea-line-height, initial);max-inline-size:var(--utrecht-textarea-max-inline-size, var(--utrecht-form-control-max-inline-size));min-block-size:var(--utrecht-textarea-min-block-size, var(--utrecht-pointer-target-min-size, 44px));min-inline-size:var(--utrecht-pointer-target-min-size, 44px);padding-block-end:var(--utrecht-textarea-padding-block-end, var(--utrecht-form-control-padding-block-end, 0));padding-block-start:var(--utrecht-textarea-padding-block-start, var(--utrecht-form-control-padding-block-start, 0));padding-inline-end:var(--utrecht-textarea-padding-inline-end, var(--utrecht-form-control-padding-inline-end, initial));padding-inline-start:var(--utrecht-textarea-padding-inline-start, var(--utrecht-form-control-padding-inline-start, initial));resize:vertical;resize:block}.utrecht-textarea--invalid{--_utrecht-textarea-border-width:var(\n    --utrecht-textarea-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textarea-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textarea-border-width);border-block-end-width:var(--utrecht-textarea-invalid-border-block-end-width, var(--utrecht-form-control-invalid-border-block-end-width, var(--utrecht-textarea-border-block-end-width, var(--utrecht-form-control-border-block-end-width, var(--_utrecht-textarea-border-width)))));border-color:var(--utrecht-textarea-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--disabled{background-color:var(--utrecht-textarea-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textarea--focus{background-color:var(--utrecht-textarea-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-textarea--read-only{background-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textarea-border, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textarea-border, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea__placeholder{color:var(--utrecht-textarea-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textarea--html-textarea{}.utrecht-textarea--html-textarea:focus{background-color:var(--utrecht-textarea-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--html-textarea:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-textarea--html-textarea:invalid,.utrecht-textarea--html-textarea[aria-invalid=true]{--_utrecht-textarea-border-width:var(\n    --utrecht-textarea-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textarea-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textarea-border-width);border-block-end-width:var(--utrecht-textarea-invalid-border-block-end-width, var(--utrecht-form-control-invalid-border-block-end-width, var(--utrecht-textarea-border-block-end-width, var(--utrecht-form-control-border-block-end-width, var(--_utrecht-textarea-border-width)))));border-color:var(--utrecht-textarea-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--html-textarea:read-only{background-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textarea-border, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textarea-border, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--html-textarea:disabled{background-color:var(--utrecht-textarea-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textarea--html-textarea::placeholder{color:var(--utrecht-textarea-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtTextareaStyle0 = textareaCss;

  /**
   * I would prefer to set `rows` and `cols` only when the properties are actually set,
   * and explicitly configure them when they are set.
   *
   * Currently Stencil offers no way to detect of the property value is the default value.
   * `this.hasOwnProperty('cols')` does not work, for example.
   *
   * As a workaround, there is a check if `cols` and `rows` are equal to the
   * `<textarea>` defaults of `2` and `20`.
   */
  const HTML_DEFAULT_COLS = 20;
  const HTML_DEFAULT_ROWS = 2;
  const Textarea = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.utrechtBlur = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtBlur', 7);
    this.utrechtChange = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtChange', 7);
    this.utrechtFocus = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtFocus', 7);
    this.utrechtInput = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtInput', 7);
    this.autocomplete = '';
    this.cols = HTML_DEFAULT_COLS;
    this.spellcheck = false;
    this.disabled = false;
    this.invalid = false;
    this.placeholder = '';
    this.readOnly = false;
    this.required = false;
    this.rows = HTML_DEFAULT_ROWS;
    this.value = '';
   }
   render() {
    const { autocomplete, cols, disabled, invalid, placeholder, readOnly, required, rows, spellcheck, value } = this;
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)(
     'textarea',
     {
      key: 'b8749757c7dfe27176fb2636135b1ba3bd96d31d',
      autoComplete: autocomplete || null,
      class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-textarea', 'utrecht-textarea--html-textarea', disabled && 'utrecht-textarea--disabled', invalid && 'utrecht-textarea--invalid', readOnly && 'utrecht-textarea--readonly'),
      cols: cols !== HTML_DEFAULT_COLS ? cols : null,
      disabled: disabled,
      dir: 'auto',
      placeholder: placeholder || null,
      readonly: readOnly,
      required: required,
      spellcheck: spellcheck || null,
      rows: rows !== HTML_DEFAULT_ROWS ? rows : null,
      value: value,
      onBlur: (evt) => this.utrechtBlur.emit(evt),
      onChange: (evt) => this.utrechtChange.emit(evt),
      onFocus: (evt) => this.utrechtFocus.emit(evt),
      onInput: (evt) => {
       this.value = evt.target.value;
       this.utrechtInput.emit(evt);
      },
     },
     (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('slot', { key: '21937a40aa7063716458d452df6348dac59a5d73' }),
    );
   }
  };
  Textarea.style = UtrechtTextareaStyle0;

  //# sourceMappingURL=utrecht-textarea.entry.js.map

  /***/
 },
};
