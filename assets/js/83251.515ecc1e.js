'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [83251],
 {
  56600: (r, t, o) => {
   function e(r) {
    var t,
     o,
     a = '';
    if ('string' == typeof r || 'number' == typeof r) a += r;
    else if ('object' == typeof r)
     if (Array.isArray(r)) {
      var c = r.length;
      for (t = 0; t < c; t++) r[t] && (o = e(r[t])) && (a && (a += ' '), (a += o));
     } else for (o in r) r[o] && (a && (a += ' '), (a += o));
    return a;
   }
   function a() {
    for (var r, t, o = 0, a = '', c = arguments.length; o < c; o++) (r = arguments[o]) && (t = e(r)) && (a && (a += ' '), (a += t));
    return a;
   }
   o.d(t, { c: () => a });
  },
  83251: (r, t, o) => {
   o.r(t), o.d(t, { utrecht_textarea: () => c });
   var e = o(22990),
    a = o(56600);
   const c = class {
    constructor(r) {
     (0, e.r)(this, r), (this.utrechtBlur = (0, e.c)(this, 'utrechtBlur', 7)), (this.utrechtChange = (0, e.c)(this, 'utrechtChange', 7)), (this.utrechtFocus = (0, e.c)(this, 'utrechtFocus', 7)), (this.utrechtInput = (0, e.c)(this, 'utrechtInput', 7)), (this.autocomplete = ''), (this.cols = 20), (this.spellcheck = !1), (this.disabled = !1), (this.invalid = !1), (this.placeholder = ''), (this.readOnly = !1), (this.required = !1), (this.rows = 2), (this.value = '');
    }
    render() {
     const { autocomplete: r, cols: t, disabled: o, invalid: c, placeholder: l, readOnly: u, required: d, rows: n, spellcheck: h, value: i } = this;
     return (0, e.h)(
      'textarea',
      {
       key: 'b8749757c7dfe27176fb2636135b1ba3bd96d31d',
       autoComplete: r || null,
       class: (0, a.c)('utrecht-textarea', 'utrecht-textarea--html-textarea', o && 'utrecht-textarea--disabled', c && 'utrecht-textarea--invalid', u && 'utrecht-textarea--readonly'),
       cols: 20 !== t ? t : null,
       disabled: o,
       dir: 'auto',
       placeholder: l || null,
       readonly: u,
       required: d,
       spellcheck: h || null,
       rows: 2 !== n ? n : null,
       value: i,
       onBlur: (r) => this.utrechtBlur.emit(r),
       onChange: (r) => this.utrechtChange.emit(r),
       onFocus: (r) => this.utrechtFocus.emit(r),
       onInput: (r) => {
        (this.value = r.target.value), this.utrechtInput.emit(r);
       },
      },
      (0, e.h)('slot', { key: '21937a40aa7063716458d452df6348dac59a5d73' }),
     );
    }
   };
   c.style = '.utrecht-textarea{background-color:var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color));block-size:initial;border-width:var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width));border-block-end-width:var(--utrecht-textarea-border-block-end-width, var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width)));border-color:var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color));border-radius:var(--utrecht-textarea-border-radius, var(--utrecht-form-control-border-radius, 0));border-style:solid;box-sizing:border-box;color:var(--utrecht-textarea-color, var(--utrecht-form-control-color));font-family:var(--utrecht-textarea-font-family, var(--utrecht-form-control-font-family));font-size:var(--utrecht-textarea-font-size, var(--utrecht-form-control-font-size, inherit));font-weight:var(--utrecht-textarea-font-weight, var(--utrecht-form-control-font-weight, initial));inline-size:100%;line-height:var(--utrecht-textarea-line-height, initial);max-inline-size:var(--utrecht-textarea-max-inline-size, var(--utrecht-form-control-max-inline-size));min-block-size:var(--utrecht-textarea-min-block-size, var(--utrecht-pointer-target-min-size, 44px));min-inline-size:var(--utrecht-pointer-target-min-size, 44px);padding-block-end:var(--utrecht-textarea-padding-block-end, var(--utrecht-form-control-padding-block-end, 0));padding-block-start:var(--utrecht-textarea-padding-block-start, var(--utrecht-form-control-padding-block-start, 0));padding-inline-end:var(--utrecht-textarea-padding-inline-end, var(--utrecht-form-control-padding-inline-end, initial));padding-inline-start:var(--utrecht-textarea-padding-inline-start, var(--utrecht-form-control-padding-inline-start, initial));resize:vertical;resize:block}.utrecht-textarea--invalid{--_utrecht-textarea-border-width:var(\n    --utrecht-textarea-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textarea-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textarea-border-width);border-block-end-width:var(--utrecht-textarea-invalid-border-block-end-width, var(--utrecht-form-control-invalid-border-block-end-width, var(--utrecht-textarea-border-block-end-width, var(--utrecht-form-control-border-block-end-width, var(--_utrecht-textarea-border-width)))));border-color:var(--utrecht-textarea-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--disabled{background-color:var(--utrecht-textarea-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textarea--focus{background-color:var(--utrecht-textarea-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-textarea--read-only{background-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textarea-border, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textarea-border, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea__placeholder{color:var(--utrecht-textarea-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textarea--html-textarea{}.utrecht-textarea--html-textarea:focus{background-color:var(--utrecht-textarea-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--html-textarea:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-textarea--html-textarea:invalid,.utrecht-textarea--html-textarea[aria-invalid=true]{--_utrecht-textarea-border-width:var(\n    --utrecht-textarea-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textarea-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textarea-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textarea-border-width);border-block-end-width:var(--utrecht-textarea-invalid-border-block-end-width, var(--utrecht-form-control-invalid-border-block-end-width, var(--utrecht-textarea-border-block-end-width, var(--utrecht-form-control-border-block-end-width, var(--_utrecht-textarea-border-width)))));border-color:var(--utrecht-textarea-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--html-textarea:read-only{background-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textarea-border, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-read-only-border, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textarea-border, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))))}.utrecht-textarea--html-textarea:disabled{background-color:var(--utrecht-textarea-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textarea-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textarea-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textarea-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textarea-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textarea--html-textarea::placeholder{color:var(--utrecht-textarea-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textarea-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}:host{display:block}:host([hidden]){display:none !important}';
  },
 },
]);
