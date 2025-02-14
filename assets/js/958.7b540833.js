'use strict';
exports.id = 958;
exports.ids = [958];
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

 /***/ 958: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_textbox: () => /* binding */ Textbox,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22990);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56600);

  const textboxCss = '.utrecht-textbox{--_utrecht-textbox-value-char:0.667em + 0.334ch;--_utrecht-textbox-max-inline-size:calc(\n    calc(var(--utrecht-textbox-value-max-length) * var(--_utrecht-textbox-value-char)) +\n      var(--utrecht-textbox-padding-inline-end, var(--utrecht-form-control-padding-inline-end, 0)) +\n      var(--utrecht-textbox-padding-inline-start, var(--utrecht-form-control-padding-inline-start, 0)) +\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width, 0)) +\n      var(--utrecht-textbox-autocomplete-ui-size, 44px)\n  );background-color:var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color));block-size:initial;border-width:var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width));border-block-end-width:var(--utrecht-textbox-border-bottom-width, var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width)));border-color:var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color));border-radius:var(--utrecht-textbox-border-radius, var(--utrecht-form-control-border-radius, 0));border-style:solid;box-sizing:border-box;color:var(--utrecht-textbox-color, var(--utrecht-form-control-color));font-family:var(--utrecht-textbox-font-family, var(--utrecht-form-control-font-family));font-size:var(--utrecht-textbox-font-size, var(--utrecht-form-control-font-size, inherit));font-weight:var(--utrecht-textbox-font-weight, var(--utrecht-form-control-font-weight, initial));inline-size:100%;line-height:var(--utrecht-textbox-line-height, var(--utrecht-form-control-line-height, initial));min-block-size:var(--utrecht-pointer-target-min-size, 44px);min-inline-size:var(--utrecht-pointer-target-min-size, 44px);max-inline-size:min(var(--_utrecht-textbox-max-inline-size, 100%), var(--utrecht-textbox-max-inline-size, var(--utrecht-form-control-max-inline-size)));padding-block-end:var(--utrecht-textbox-padding-block-end, var(--utrecht-form-control-padding-block-end, 0));padding-block-start:var(--utrecht-textbox-padding-block-start, var(--utrecht-form-control-padding-block-start, 0));padding-inline-end:var(--utrecht-textbox-padding-inline-end, var(--utrecht-form-control-padding-inline-end, initial));padding-inline-start:var(--utrecht-textbox-padding-inline-start, var(--utrecht-form-control-padding-inline-start, initial))}.utrecht-textbox--invalid{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textbox-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--disabled{background-color:var(--utrecht-textbox-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textbox--focus{background-color:var(--utrecht-textbox-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-textbox--read-only{background-color:var(--utrecht-textbox-read-only-background-color, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox__placeholder{color:var(--utrecht-textbox-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--numeric{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}.utrecht-textbox--password{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--postal-code-nl-size{--utrecht-textbox-value-max-length:7}.utrecht-textbox--house-number-size{--utrecht-textbox-value-max-length:5}.utrecht-textbox--house-letter-size{--utrecht-textbox-value-max-length:1}.utrecht-textbox--house-addition-size{--utrecht-textbox-value-max-length:4}.utrecht-textbox--voorvoegsel-size{--utrecht-textbox-value-max-length:10}.utrecht-textbox--tel-size{--utrecht-textbox-value-max-length:19}.utrecht-textbox--tel-nl-size{--utrecht-textbox-value-max-length:13}.utrecht-textbox--iban-size{--utrecht-textbox-value-max-length:41}.utrecht-textbox--iban-nl-size{--utrecht-textbox-value-max-length:22}.utrecht-textbox--placeholder-ltr::placeholder,.utrecht-textbox--placeholder-ltr:placeholder-shown{direction:ltr}.utrecht-textbox--placeholder-rtl::placeholder,.utrecht-textbox--placeholder-rtl:placeholder-shown{direction:rtl}.utrecht-textbox--url{font-variant-ligatures:none}.utrecht-textbox--html-input{}.utrecht-textbox--html-input:focus{background-color:var(--utrecht-textbox-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-textbox--html-input:invalid,.utrecht-textbox--html-input[aria-invalid=true]{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textbox-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:read-only{background-color:var(--utrecht-textbox-read-only-background-color, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:disabled{background-color:var(--utrecht-textbox-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textbox--html-input::placeholder{color:var(--utrecht-textbox-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--html-input[type=password i]{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--html-input[type=url i],.utrecht-textbox--html-input[type=email i],.utrecht-textbox--html-input[inputMode=email i],.utrecht-textbox--html-input[inputMode=url i]{font-variant-ligatures:none}.utrecht-textbox--html-input[pattern="\\\\d*"],.utrecht-textbox--html-input[pattern="[0-9]*"],.utrecht-textbox--html-input[type=number i],.utrecht-textbox--html-input[type=tel i],.utrecht-textbox--html-input[inputMode=numeric i],.utrecht-textbox--html-input[inputMode=decimal i],.utrecht-textbox--html-input[inputMode=tel i]{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}:host{display:block}:host([hidden]){display:none !important}';
  const UtrechtTextboxStyle0 = textboxCss;

  const Textbox = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.utrechtBlur = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtBlur', 7);
    this.utrechtChange = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtChange', 7);
    this.utrechtFocus = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtFocus', 7);
    this.utrechtInput = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtInput', 7);
    this.autoComplete = '';
    this.disabled = false;
    this.invalid = false;
    this.min = '';
    this.max = '';
    this.pattern = '';
    this.placeholder = '';
    this.readOnly = false;
    this.required = false;
    this.type = '';
    this.value = '';
   }
   render() {
    const { autoComplete, disabled, invalid, min, max, pattern, placeholder, readOnly, required, type, value } = this;
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('input', {
     key: 'd6088a836f89cbe2918e13f8f75424d1f2bf1654',
     class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-textbox', 'utrecht-textbox--html-input', disabled && 'utrecht-textbox--disabled', invalid && 'utrecht-textbox--invalid', readOnly && 'utrecht-textbox--readonly'),
     type: type || 'text',
     autoComplete: autoComplete ? autoComplete : null,
     disabled: disabled,
     dir: 'auto',
     min: typeof min === 'number' ? String(min) : typeof min === 'string' ? min : null,
     max: typeof max === 'number' ? String(max) : typeof max === 'string' ? max : null,
     pattern: pattern ? pattern : null,
     placeholder: placeholder || null,
     readonly: readOnly,
     required: required,
     value: value,
     onBlur: (evt) => this.utrechtBlur.emit(evt),
     onChange: (evt) => this.utrechtChange.emit(evt),
     onFocus: (evt) => this.utrechtFocus.emit(evt),
     onInput: (evt) => {
      this.value = evt.target.value;
      this.utrechtInput.emit(evt);
     },
    });
   }
  };
  Textbox.style = UtrechtTextboxStyle0;

  //# sourceMappingURL=utrecht-textbox.entry.js.map

  /***/
 },
};
