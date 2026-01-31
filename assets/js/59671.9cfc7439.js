'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [59671, 82052],
 {
  59671(t, r, o) {
   (o.r(r), o.d(r, { utrecht_button_group: () => e }));
   var n = o(29731),
    u = o(70013);
   const e = class {
    constructor(t) {
     ((0, n.r)(this, t), (this.direction = void 0));
    }
    render() {
     const { direction: t } = this;
     return (0, n.h)('div', { key: '258c21fc35ddbf114a92037b6fd7cc9c4c9f2945', class: (0, u.c)('utrecht-button-group', { 'utrecht-button-group--column': 'column' === t, 'utrecht-button-group--row': 'row' === t }) }, (0, n.h)('slot', { key: '9a0570f8b24822702be5d0b74ab8cc5b315d41bc' }));
    }
   };
   e.style = '.utrecht-button-group{align-items:baseline;background-color:var(--utrecht-button-group-background-color);break-inside:avoid;display:flex;flex-wrap:wrap;gap:var(--utrecht-button-group-inline-gap, 1em);margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-button-group-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-button-group-margin-block-start, 0));min-block-size:var(--utrecht-button-block-size);padding-block-end:var(--utrecht-button-group-padding-block-end);padding-block-start:var(--utrecht-button-group-padding-block-start)}.utrecht-button-group--distanced{--utrecht-space-around:1}.utrecht-button-group__link-button--row,.utrecht-button-group--row .utrecht-link-button,.utrecht-button-group:not(.utrecht-button-group--column) .utrecht-link-button{--utrecht-button-padding-inline-end:0;--utrecht-button-padding-inline-start:0}.utrecht-button-group--column{flex-direction:column;gap:var(--utrecht-button-group-block-gap, 1em)}:host{display:block}:host([hidden]){display:none !important}';
  },
  70013(t, r, o) {
   function n(t) {
    var r,
     o,
     u = '';
    if ('string' == typeof t || 'number' == typeof t) u += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var e = t.length;
      for (r = 0; r < e; r++) t[r] && (o = n(t[r])) && (u && (u += ' '), (u += o));
     } else for (o in t) t[o] && (u && (u += ' '), (u += o));
    return u;
   }
   function u() {
    for (var t, r, o = 0, u = '', e = arguments.length; o < e; o++) (t = arguments[o]) && (r = n(t)) && (u && (u += ' '), (u += r));
    return u;
   }
   o.d(r, { c: () => u });
  },
 },
]);
