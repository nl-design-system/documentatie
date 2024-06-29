'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63455],
 {
  39026: (t, r, e) => {
   function a(t) {
    var r,
     e,
     o = '';
    if ('string' == typeof t || 'number' == typeof t) o += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (e = a(t[r])) && (o && (o += ' '), (o += e));
     else for (r in t) t[r] && (o && (o += ' '), (o += r));
    return o;
   }
   function o() {
    for (var t, r, e = 0, o = ''; e < arguments.length; ) (t = arguments[e++]) && (r = a(t)) && (o && (o += ' '), (o += r));
    return o;
   }
   e.d(r, { c: () => o });
  },
  63455: (t, r, e) => {
   e.r(r), e.d(r, { utrecht_backdrop: () => c });
   var a = e(79058),
    o = e(39026);
   const c = class {
    constructor(t) {
     (0, a.r)(this, t), (this.viewport = void 0);
    }
    render() {
     const { viewport: t } = this;
     return (0, a.h)('div', { class: (0, o.c)('utrecht-backdrop', t && 'utrecht-backdrop--viewport') }, (0, a.h)('slot', null));
    }
   };
   c.style = '.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none;display:block;inset-block-end:0;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;position:absolute;z-index:var(--utrecht-backdrop-z-index)}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-backdrop--reduced-motion{--_utrecht-backdrop-fade-in-animation-duration:0}.utrecht-backdrop--reduced-transparency{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}';
  },
 },
]);
