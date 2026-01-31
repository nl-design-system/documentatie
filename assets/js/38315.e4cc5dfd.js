'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [38315, 60696],
 {
  60696(t, r, e) {
   (e.r(r), e.d(r, { utrecht_backdrop: () => c }));
   var a = e(29731),
    o = e(70013);
   const c = class {
    constructor(t) {
     ((0, a.r)(this, t), (this.viewport = void 0));
    }
    render() {
     const { viewport: t } = this;
     return (0, a.h)('div', { key: 'a6164e33edca910e3e4723583ade6cfee616cbdc', class: (0, o.c)('utrecht-backdrop', t && 'utrecht-backdrop--viewport') }, (0, a.h)('slot', { key: 'f46cad65a192d1bd5e319eb69e5fb2347205129f' }));
    }
   };
   c.style = '.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none;display:block;inset-block-end:0;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;position:absolute;z-index:var(--utrecht-backdrop-z-index)}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-backdrop--reduced-motion{--_utrecht-backdrop-fade-in-animation-duration:0}.utrecht-backdrop--reduced-transparency{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}';
  },
  70013(t, r, e) {
   function a(t) {
    var r,
     e,
     o = '';
    if ('string' == typeof t || 'number' == typeof t) o += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var c = t.length;
      for (r = 0; r < c; r++) t[r] && (e = a(t[r])) && (o && (o += ' '), (o += e));
     } else for (e in t) t[e] && (o && (o += ' '), (o += e));
    return o;
   }
   function o() {
    for (var t, r, e = 0, o = '', c = arguments.length; e < c; e++) (t = arguments[e]) && (r = a(t)) && (o && (o += ' '), (o += r));
    return o;
   }
   e.d(r, { c: () => o });
  },
 },
]);
