'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [40557],
 {
  56600: (t, e, r) => {
   function c(t) {
    var e,
     r,
     o = '';
    if ('string' == typeof t || 'number' == typeof t) o += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var u = t.length;
      for (e = 0; e < u; e++) t[e] && (r = c(t[e])) && (o && (o += ' '), (o += r));
     } else for (r in t) t[r] && (o && (o += ' '), (o += r));
    return o;
   }
   function o() {
    for (var t, e, r = 0, o = '', u = arguments.length; r < u; r++) (t = arguments[r]) && (e = c(t)) && (o && (o += ' '), (o += e));
    return o;
   }
   r.d(e, { c: () => o });
  },
  40557: (t, e, r) => {
   r.r(e), r.d(e, { utrecht_checkbox: () => u });
   var c = r(22990),
    o = r(56600);
   const u = class {
    constructor(t) {
     (0, c.r)(this, t), (this.utrechtBlur = (0, c.c)(this, 'utrechtBlur', 7)), (this.utrechtChange = (0, c.c)(this, 'utrechtChange', 7)), (this.utrechtFocus = (0, c.c)(this, 'utrechtFocus', 7)), (this.utrechtInput = (0, c.c)(this, 'utrechtInput', 7)), (this.disabled = !1), (this.readOnly = !1), (this.checked = !1), (this.value = '');
    }
    render() {
     const { checked: t, disabled: e, value: r } = this;
     return (0, c.h)('input', {
      key: 'a89783617f21f10894db81c77cc00eabe46da049',
      class: (0, o.c)('utrecht-checkbox'),
      type: 'checkbox',
      checked: t,
      disabled: e,
      value: r,
      onBlur: (t) => this.utrechtBlur.emit(t),
      onChange: (t) => this.utrechtChange.emit(t),
      onFocus: (t) => this.utrechtFocus.emit(t),
      onInput: (t) => {
       (this.checked = t.target.checked), this.utrechtInput.emit(t);
      },
     });
    }
   };
   u.style = '.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input :focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:1}:host{display:block}:host([hidden]){display:none !important}';
  },
 },
]);
