'use strict';
exports.id = 6373;
exports.ids = [6373];
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

 /***/ 36373: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_form_toggle: () => /* binding */ FormToggle,
   /* harmony export */
  });
  /* harmony import */ var _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93267);
  /* harmony import */ var _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26221);

  const formToggleCss = '.utrecht-form-toggle{align-items:center;block-size:var(--utrecht-form-toggle-height, 2em);border-color:var(--utrecht-form-toggle-border-color, currentColor);border-radius:var(--utrecht-form-toggle-border-radius, 999rem);border-style:var(--utrecht-form-toggle-border-style, solid);border-width:var(--utrecht-form-toggle-border-width, 1px);color:var(--utrecht-form-toggle-color);cursor:var(--utrecht-action-activate-cursor, revert);display:flex;inline-size:var(--utrecht-form-toggle-width, 6em);padding-block-end:var(--utrecht-form-toggle-padding-block-end);padding-block-start:var(--utrecht-form-toggle-padding-block-start);padding-inline-end:var(--utrecht-form-toggle-padding-inline-end);padding-inline-start:var(--utrecht-form-toggle-padding-inline-start);position:relative;-webkit-user-select:none;user-select:none}@media screen and (-ms-high-contrast: active), screen and (forced-colors: active){.utrecht-form-toggle{--utrecht-form-toggle-background-color:ButtonFace;--utrecht-form-toggle-border-color:buttonborder;--utrecht-form-toggle-border-width:1px;--utrecht-form-toggle-border-radius:var(--utrecht-form-toggle-track-border-radius);--utrecht-form-toggle-thumb-background-color:ButtonText;--utrecht-form-toggle-thumb-disabled-background-color:GrayText;border-color:var(--utrecht-form-toggle-track-disabled-border-color, var(--utrecht-form-toggle-track-border-color));border-width:min(var(--utrecht-form-toggle-border-width, 1px), 1px);}}.utrecht-form-toggle--focus-visible,.utrecht-form-toggle--html-div:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-form-toggle--hover,.utrecht-form-toggle:not(.utrecht-form-toggle--disabled):not(.utrecht-form-toggle--html-div:disabled):hover{background-color:var(--utrecht-form-toggle-hover-background-color, var(--utrecht-form-toggle-background-color));color:var(--utrecht-form-toggle-hover-color, var(--utrecht-form-toggle-color))}.utrecht-form-toggle--disabled,.utrecht-form-toggle--html-div:disabled{border-color:var(--utrecht-form-toggle-disabled-border-color, var(--utrecht-form-toggle-border-color, currentColor));border-style:var(--utrecht-form-toggle-disabled-border-style, var(--utrecht-form-toggle-border-style, solid));border-width:var(--utrecht-form-toggle-disabled-border-width, var(--utrecht-form-toggle-border-width, 1px));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-form-toggle__thumb{background-color:var(--utrecht-form-toggle-thumb-background-color, currentColor);border-radius:var(--utrecht-form-toggle-thumb-border-radius, 50%);box-shadow:var(--utrecht-form-toggle-thumb-box-shadow);margin-inline-end:var(--utrecht-form-toggle-thumb-margin-inline-end, 0);margin-inline-start:var(--utrecht-form-toggle-thumb-margin-inline-start, 0);min-block-size:var(--utrecht-form-toggle-thumb-min-inline-size, 1.5em);min-inline-size:var(--utrecht-form-toggle-thumb-min-inline-size, 1.5em);z-index:20}.utrecht-form-toggle__thumb--checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:checked~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{margin-inline-start:auto}.utrecht-form-toggle__thumb--not-checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:not(:checked)~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{margin-inline-end:auto}.utrecht-form-toggle__thumb--disabled,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:disabled~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{background-color:var(--utrecht-form-toggle-thumb-disabled-background-color, #aaa);box-shadow:var(--utrecht-form-toggle-thumb-disabled-box-shadow, 0)}.utrecht-form-toggle__track{align-items:center;background-color:var(--utrecht-form-toggle-accent-color);block-size:100%;border-radius:var(--utrecht-form-toggle-track-border-radius, var(--utrecht-form-toggle-border-radius));display:flex;inline-size:100%}.utrecht-form-toggle__track--html-label{cursor:inherit}.utrecht-form-toggle__track--checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:checked~.utrecht-form-toggle__track{background-color:var(--utrecht-form-toggle-checked-accent-color, var(--utrecht-form-toggle-accent-color))}.utrecht-form-toggle__track--disabled,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:disabled~.utrecht-form-toggle__track{background-color:var(--utrecht-form-toggle-disabled-background-color, #ddd);color:var(--utrecht-form-toggle-disabled-color, black)}.utrecht-form-toggle__track--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox{block-size:1px !important;border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;inline-size:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important}.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:focus-visible~.utrecht-form-toggle__track{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:inline-block}:host([hidden]){display:none !important}';
  const UtrechtFormToggleStyle0 = formToggleCss;

  const FormToggle = class {
   constructor(hostRef) {
    (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.utrechtBlur = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtBlur', 7);
    this.utrechtChange = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtChange', 7);
    this.utrechtFocus = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtFocus', 7);
    this.utrechtInput = (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, 'utrechtInput', 7);
    this.disabled = false;
    this.checked = false;
   }
   render() {
    const { checked, disabled } = this;
    const toggleInteraction = () => {
     if (!this.disabled) {
      this.checked = !this.checked;
      this.utrechtInput.emit(this);
      this.utrechtChange.emit(this);
     }
    };
    const handleClick = () => {
     toggleInteraction();
    };
    const handleKeyPress = (evt) => {
     if (evt.code === 'Space' || evt.key === ' ') {
      // Do not scroll the page using Space when the toggle is focussed
      evt.preventDefault();
     }
    };
    const handleKeyUp = (evt) => {
     if (evt.code === 'Space' || evt.key === ' ') {
      toggleInteraction();
     }
    };
    return (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'be20682f616eb7b0d14a213f46612a8a09292e2e', class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-form-toggle', checked && 'utrecht-form-toggle--checked', !checked && 'utrecht-form-toggle--not-checked', disabled && 'utrecht-form-toggle--disabled'), tabIndex: disabled ? null : 0, role: 'switch', 'aria-disabled': disabled ? 'true' : null, onClick: handleClick, onKeyPress: handleKeyPress, onKeyUp: handleKeyUp }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'a39f6ea33b38051b0cc321a85d830839d8f526db', class: 'utrecht-form-toggle__label utrecht-form-toggle__label--off' }), (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: '2a817a7018427997e3ec410076aa58ac27f1b93e', class: 'utrecht-form-toggle__label utrecht-form-toggle__label--on' }), (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: '9db9333631a9392b5af650bd40febc6d559e80a9', class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-form-toggle__track', checked && 'utrecht-form-toggle__track--checked', !checked && 'utrecht-form-toggle__track--not-checked', disabled && 'utrecht-form-toggle__track--disabled') }, (0, _index_593361c2_js__WEBPACK_IMPORTED_MODULE_0__.h)('div', { key: 'd468c947a90b4aec924c658b8d36f84f8eb27bc7', class: (0, _clsx_eca3fadc_js__WEBPACK_IMPORTED_MODULE_1__.c)('utrecht-form-toggle__thumb', checked && 'utrecht-form-toggle__thumb--checked', !checked && 'utrecht-form-toggle__thumb--not-checked', disabled && 'utrecht-form-toggle__thumb--disabled') })));
   }
  };
  FormToggle.style = UtrechtFormToggleStyle0;

  //# sourceMappingURL=utrecht-form-toggle.entry.js.map

  /***/
 },
};
