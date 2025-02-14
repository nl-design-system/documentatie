'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69578],
 {
  56600: (t, e, r) => {
   function o(t) {
    var e,
     r,
     c = '';
    if ('string' == typeof t || 'number' == typeof t) c += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var l = t.length;
      for (e = 0; e < l; e++) t[e] && (r = o(t[e])) && (c && (c += ' '), (c += r));
     } else for (r in t) t[r] && (c && (c += ' '), (c += r));
    return c;
   }
   function c() {
    for (var t, e, r = 0, c = '', l = arguments.length; r < l; r++) (t = arguments[r]) && (e = o(t)) && (c && (c += ' '), (c += e));
    return c;
   }
   r.d(e, { c: () => c });
  },
  69578: (t, e, r) => {
   r.r(e), r.d(e, { utrecht_form_toggle: () => l });
   var o = r(22990),
    c = r(56600);
   const l = class {
    constructor(t) {
     (0, o.r)(this, t), (this.utrechtBlur = (0, o.c)(this, 'utrechtBlur', 7)), (this.utrechtChange = (0, o.c)(this, 'utrechtChange', 7)), (this.utrechtFocus = (0, o.c)(this, 'utrechtFocus', 7)), (this.utrechtInput = (0, o.c)(this, 'utrechtInput', 7)), (this.disabled = !1), (this.checked = !1);
    }
    render() {
     const { checked: t, disabled: e } = this,
      r = () => {
       this.disabled || ((this.checked = !this.checked), this.utrechtInput.emit(this), this.utrechtChange.emit(this));
      };
     return (0, o.h)(
      'div',
      {
       key: '5fab336353956969278692ab16d49b4670219d7d',
       class: (0, c.c)('utrecht-form-toggle', t && 'utrecht-form-toggle--checked', !t && 'utrecht-form-toggle--not-checked', e && 'utrecht-form-toggle--disabled'),
       tabIndex: e ? null : 0,
       role: 'switch',
       'aria-disabled': e ? 'true' : null,
       onClick: () => {
        r();
       },
       onKeyPress: (t) => {
        ('Space' !== t.code && ' ' !== t.key) || t.preventDefault();
       },
       onKeyUp: (t) => {
        ('Space' !== t.code && ' ' !== t.key) || r();
       },
      },
      (0, o.h)('div', { key: '42ee41122748db652c5d4b8d9b581e3b062f67f8', class: 'utrecht-form-toggle__label utrecht-form-toggle__label--off' }),
      (0, o.h)('div', { key: 'e2f61213f75785fceb109d7aa6e5f8e858082100', class: 'utrecht-form-toggle__label utrecht-form-toggle__label--on' }),
      (0, o.h)('div', { key: 'f9924fd642a74914f8a5ad028c71253fd6aae559', class: (0, c.c)('utrecht-form-toggle__track', t && 'utrecht-form-toggle__track--checked', !t && 'utrecht-form-toggle__track--not-checked', e && 'utrecht-form-toggle__track--disabled') }, (0, o.h)('div', { key: '97b4e2262123e0749147b9b196fbb1ee19003415', class: (0, c.c)('utrecht-form-toggle__thumb', t && 'utrecht-form-toggle__thumb--checked', !t && 'utrecht-form-toggle__thumb--not-checked', e && 'utrecht-form-toggle__thumb--disabled') })),
     );
    }
   };
   l.style = '.utrecht-form-toggle{align-items:center;block-size:var(--utrecht-form-toggle-height, 2em);border-color:var(--utrecht-form-toggle-border-color, currentColor);border-radius:var(--utrecht-form-toggle-border-radius, 999rem);border-style:var(--utrecht-form-toggle-border-style, solid);border-width:var(--utrecht-form-toggle-border-width, 1px);color:var(--utrecht-form-toggle-color);cursor:var(--utrecht-action-activate-cursor, revert);display:flex;inline-size:var(--utrecht-form-toggle-width, 6em);padding-block-end:var(--utrecht-form-toggle-padding-block-end);padding-block-start:var(--utrecht-form-toggle-padding-block-start);padding-inline-end:var(--utrecht-form-toggle-padding-inline-end);padding-inline-start:var(--utrecht-form-toggle-padding-inline-start);position:relative;-webkit-user-select:none;user-select:none}@media screen and (-ms-high-contrast: active), screen and (forced-colors: active){.utrecht-form-toggle{--utrecht-form-toggle-background-color:ButtonFace;--utrecht-form-toggle-border-color:buttonborder;--utrecht-form-toggle-border-width:1px;--utrecht-form-toggle-border-radius:var(--utrecht-form-toggle-track-border-radius);--utrecht-form-toggle-thumb-background-color:ButtonText;--utrecht-form-toggle-thumb-disabled-background-color:GrayText;border-color:var(--utrecht-form-toggle-track-disabled-border-color, var(--utrecht-form-toggle-track-border-color));border-width:min(var(--utrecht-form-toggle-border-width, 1px), 1px);}}.utrecht-form-toggle--focus-visible,.utrecht-form-toggle--html-div:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-form-toggle--hover,.utrecht-form-toggle:not(.utrecht-form-toggle--disabled):not(.utrecht-form-toggle--html-div:disabled):hover{background-color:var(--utrecht-form-toggle-hover-background-color, var(--utrecht-form-toggle-background-color));color:var(--utrecht-form-toggle-hover-color, var(--utrecht-form-toggle-color))}.utrecht-form-toggle--disabled,.utrecht-form-toggle--html-div:disabled{border-color:var(--utrecht-form-toggle-disabled-border-color, var(--utrecht-form-toggle-border-color, currentColor));border-style:var(--utrecht-form-toggle-disabled-border-style, var(--utrecht-form-toggle-border-style, solid));border-width:var(--utrecht-form-toggle-disabled-border-width, var(--utrecht-form-toggle-border-width, 1px));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-form-toggle__thumb{background-color:var(--utrecht-form-toggle-thumb-background-color, currentColor);border-radius:var(--utrecht-form-toggle-thumb-border-radius, 50%);box-shadow:var(--utrecht-form-toggle-thumb-box-shadow);margin-inline-end:var(--utrecht-form-toggle-thumb-margin-inline-end, 0);margin-inline-start:var(--utrecht-form-toggle-thumb-margin-inline-start, 0);min-block-size:var(--utrecht-form-toggle-thumb-min-inline-size, 1.5em);min-inline-size:var(--utrecht-form-toggle-thumb-min-inline-size, 1.5em);z-index:20}.utrecht-form-toggle__thumb--checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:checked~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{margin-inline-start:auto}.utrecht-form-toggle__thumb--not-checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:not(:checked)~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{margin-inline-end:auto}.utrecht-form-toggle__thumb--disabled,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:disabled~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{background-color:var(--utrecht-form-toggle-thumb-disabled-background-color, #aaa);box-shadow:var(--utrecht-form-toggle-thumb-disabled-box-shadow, 0)}.utrecht-form-toggle__track{align-items:center;background-color:var(--utrecht-form-toggle-accent-color);block-size:100%;border-radius:var(--utrecht-form-toggle-track-border-radius, var(--utrecht-form-toggle-border-radius));display:flex;inline-size:100%}.utrecht-form-toggle__track--html-label{cursor:inherit}.utrecht-form-toggle__track--checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:checked~.utrecht-form-toggle__track{background-color:var(--utrecht-form-toggle-checked-accent-color, var(--utrecht-form-toggle-accent-color))}.utrecht-form-toggle__track--disabled,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:disabled~.utrecht-form-toggle__track{background-color:var(--utrecht-form-toggle-disabled-background-color, #ddd);color:var(--utrecht-form-toggle-disabled-color, black)}.utrecht-form-toggle__track--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox{block-size:1px !important;border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;inline-size:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important}.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:focus-visible~.utrecht-form-toggle__track{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:inline-block}:host([hidden]){display:none !important}';
  },
 },
]);
