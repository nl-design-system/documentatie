'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [191],
 {
  13707: (t, r, e) => {
   function a(t) {
    var r,
     e,
     c = '';
    if ('string' == typeof t || 'number' == typeof t) c += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) {
      var o = t.length;
      for (r = 0; r < o; r++) t[r] && (e = a(t[r])) && (c && (c += ' '), (c += e));
     } else for (e in t) t[e] && (c && (c += ' '), (c += e));
    return c;
   }
   function c() {
    for (var t, r, e = 0, c = '', o = arguments.length; e < o; e++) (t = arguments[e]) && (r = a(t)) && (c && (c += ' '), (c += r));
    return c;
   }
   e.d(r, { c: () => c });
  },
  191: (t, r, e) => {
   e.r(r), e.d(r, { utrecht_backdrop: () => o });
   var a = e(80830),
    c = e(13707);
   const o = class {
    constructor(t) {
     (0, a.r)(this, t), (this.viewport = void 0);
    }
    render() {
     const { viewport: t } = this;
     return (0, a.h)('div', { key: '975b9ab5ac84c138731aafa73e8b207b896d4786', class: (0, c.c)('utrecht-backdrop', t && 'utrecht-backdrop--viewport') }, (0, a.h)('slot', { key: '99f7705d41d1e685baf5ba7e6b19b8ec58e2c64e' }));
    }
   };
   o.style = '.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-opacity);--_utrecht-backdrop-fade-in-animation-duration:var(--utrecht-backdrop-fade-in-animation-duration, 0);animation-duration:min(var(--utrecht-motion-max-animation-duration, var(--_utrecht-backdrop-fade-in-animation-duration)), var(--_utrecht-backdrop-fade-in-animation-duration, 0));animation-name:utrecht-backdrop-fade-in;animation-timing-function:ease-in-out;background-color:var(--utrecht-backdrop-background-color);color:var(--utrecht-backdrop-color);opacity:var(--_utrecht-backdrop-opacity);-webkit-user-select:none;user-select:none;display:block;inset-block-end:0;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;position:absolute;z-index:var(--utrecht-backdrop-z-index)}@keyframes utrecht-backdrop-fade-in{from{opacity:0%}to{opacity:var(--_utrecht-backdrop-opacity)}}@media (prefers-reduced-motion: reduce){.utrecht-backdrop{--_utrecht-backdrop-fade-in-animation-duration:0}}@media (prefers-reduced-transparency: reduce){.utrecht-backdrop{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}}.utrecht-backdrop--reduced-motion{--_utrecht-backdrop-fade-in-animation-duration:0}.utrecht-backdrop--reduced-transparency{--_utrecht-backdrop-opacity:var(--utrecht-backdrop-reduced-transparency-opacity, 100%)}.utrecht-backdrop--viewport{position:fixed}:host{display:block}:host([hidden]){display:none !important}';
  },
 },
]);
