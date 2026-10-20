'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77204],
 {
  6360(e, t, r) {
   r.d(t, { KE: () => u });
   var n = r(15540),
    a = r(69967),
    o = r(86070),
    i = r(30758),
    c = ['children'],
    l = ['dateTime'],
    s = ['value'];
   function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n));
    }
    return r;
   }
   function f(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? d(Object(r), !0).forEach(function (t) {
         (0, n.A)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   var u = (0, i.forwardRef)(function (e, t) {
    var r = e.children,
     n = (0, a.A)(e, c),
     i = (function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return t.filter(Boolean).join(' ');
     })('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(n)
    ) {
     var d = n.dateTime,
      u = (0, a.A)(n, l);
     return (0, o.jsx)('time', f(f({}, u), {}, { dateTime: d, className: i, ref: t, children: r }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(n)
    ) {
     var b = n.value,
      p = (0, a.A)(n, s);
     return (0, o.jsx)('data', f(f({}, p), {}, { value: b, className: i, ref: t, children: r }));
    }
    return (0, o.jsx)('span', f(f({}, n), {}, { className: i, ref: t, children: r }));
   });
   u.displayName = 'DataBadge';
  },
  15089(e, t, r) {
   r.d(t, { A: () => i });
   var n = r(48907),
    a = r(30758),
    o = ['size', 'color'];
   function i(e) {
    var t = e.size,
     r = void 0 === t ? 24 : t,
     i = e.color,
     c = void 0 === i ? 'currentColor' : i,
     l = (0, n.$i)(e, o);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-github', width: r, height: r, viewBox: '0 0 24 24', stroke: c, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' }));
   }
  },
  28377(e, t, r) {
   r.d(t, { A: () => i });
   var n = r(48907),
    a = r(30758),
    o = ['size', 'color'];
   function i(e) {
    var t = e.size,
     r = void 0 === t ? 24 : t,
     i = e.color,
     c = void 0 === i ? 'currentColor' : i,
     l = (0, n.$i)(e, o);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-npm', width: r, height: r, viewBox: '0 0 24 24', stroke: c, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M1 8h22v7h-12v2h-4v-2h-6z' }), a.createElement('path', { d: 'M7 8v7' }), a.createElement('path', { d: 'M14 8v7' }), a.createElement('path', { d: 'M17 11v4' }), a.createElement('path', { d: 'M4 11v4' }), a.createElement('path', { d: 'M11 11v1' }), a.createElement('path', { d: 'M20 11v4' }));
   }
  },
  33648(e, t, r) {
   r.d(t, { A: () => i });
   var n = r(48907),
    a = r(30758),
    o = ['size', 'color'];
   function i(e) {
    var t = e.size,
     r = void 0 === t ? 24 : t,
     i = e.color,
     c = void 0 === i ? 'currentColor' : i,
     l = (0, n.$i)(e, o);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-storybook', width: r, height: r, viewBox: '0 0 24 24', stroke: c, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M5 4l.5 16.5l13.5 .5v-18z' }), a.createElement('path', { d: 'M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985' }), a.createElement('path', { d: 'M16 3.5v1' }));
   }
  },
  38295(e, t, r) {
   r.d(t, { K: () => n.KE });
   var n = r(6360);
   (r(86070), r(30758));
   !(function (e, t) {
    void 0 === t && (t = {});
    var r = t.insertAt;
    if ('undefined' != typeof document) {
     var n = document.head || document.getElementsByTagName('head')[0],
      a = document.createElement('style');
     ((a.type = 'text/css'), 'top' === r && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e)));
    }
   })('.nl-data-badge{background-color:var(--nl-data-badge-background-color);border-color:var(--nl-data-badge-border-color, currentColor);border-radius:var(--nl-data-badge-border-radius, 0);border-style:solid;border-width:var(--nl-data-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-data-badge-color);display:inline-block;font-family:var(--nl-data-badge-font-family);font-size:var(--nl-data-badge-font-size);font-weight:var(--nl-data-badge-font-weight);line-height:var(--nl-data-badge-line-height);max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-data-badge-min-block-size);min-inline-size:var(--nl-data-badge-min-inline-size);padding-block:var(--nl-data-badge-padding-block);padding-inline:var(--nl-data-badge-padding-inline);text-decoration:none}@media screen and (forced-colors: active){.nl-data-badge{border-color:currentColor;border-width:min(var(--nl-data-badge-border-width, 1px),1px)}}\n');
  },
  48907(e, t, r) {
   function n() {
    return (
     (n = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
         }
         return e;
        }),
     n.apply(this, arguments)
    );
   }
   function a(e, t) {
    if (null == e) return {};
    var r,
     n,
     a = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       a = {},
       o = Object.keys(e);
      for (n = 0; n < o.length; n++) ((r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (n = 0; n < o.length; n++) ((r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])));
    }
    return a;
   }
   r.d(t, { $i: () => a, _P: () => n });
  },
  50805(e, t, r) {
   r.d(t, { $n: () => b });
   var n = r(15540),
    a = r(69967),
    o = r(86070),
    i = r(13526),
    c = r(30758),
    l = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n));
    }
    return r;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? s(Object(r), !0).forEach(function (t) {
         (0, n.A)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : s(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   var f = function (e) {
     return function (t) {
      return e.includes(t);
     };
    },
    u = f(['primary', 'secondary', 'subtle']),
    b =
     (f(['positive', 'negative']),
     (0, c.forwardRef)(function (e, t) {
      var r = e.children,
       n = e.className,
       s = e.iconOnly,
       f = e.iconEnd,
       b = e.iconStart,
       p = e.purpose,
       h = e.hint,
       v = e.disabled,
       m = e.htmlDisabled,
       y = e.pressed,
       g = e.busy,
       j = e.type,
       O = void 0 === j ? 'button' : j,
       w = e.label,
       x = e.toggle,
       k = (0, a.A)(e, l),
       E = Boolean(b || f),
       N = (c.Children.toArray(r).some(c.isValidElement) && E) || s;
      return (0, o.jsxs)('button', d(d({ ref: t, type: O, className: (0, i.$)('nl-button', n, { 'nl-button--pressed': y, 'nl-button--busy': g, 'nl-button--disabled': v || m, 'nl-button--primary': 'primary' === p, 'nl-button--secondary': 'secondary' === p, 'nl-button--subtle': 'subtle' === p, 'nl-button--positive': u(p) && 'positive' === h, 'nl-button--negative': u(p) && 'negative' === h, 'nl-button--icon-only': s }), 'aria-pressed': x ? String(Boolean(y)) : void 0, 'aria-disabled': v || g ? 'true' : void 0, disabled: m }, k), {}, { children: [b && (0, o.jsx)('span', { className: 'nl-button__icon-start', children: b }), w && (0, o.jsx)('span', { className: 'nl-button__label', children: w }), N ? (0, o.jsx)('span', { className: s ? 'nl-button__label' : '', children: r }) : r, f && (0, o.jsx)('span', { className: 'nl-button__icon-end', children: f })] }));
     }));
   b.displayName = 'Button';
  },
  63009(e, t, r) {
   r.d(t, { N: () => f });
   var n = r(15540),
    a = r(69967),
    o = r(86070),
    i = r(13526),
    c = r(30758),
    l = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n));
    }
    return r;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? s(Object(r), !0).forEach(function (t) {
         (0, n.A)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : s(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   var f = (0, c.forwardRef)(function (e, t) {
    var r = e.children,
     c = e.className,
     s = e.current,
     f = e.disabled,
     u = e.href,
     b = e.inlineBox,
     p = (0, a.A)(e, l);
    return (0, o.jsx)('a', d(d({ 'aria-current': s || void 0, 'aria-disabled': f, className: (0, i.$)('nl-link', (0, n.A)((0, n.A)((0, n.A)({}, 'nl-link--current', s), 'nl-link--disabled', f), 'nl-link--inline-box', b), c), href: f ? void 0 : u, role: f ? 'link' : void 0, ref: t, tabIndex: f ? 0 : void 0 }, p), {}, { children: r }));
   });
   f.displayName = 'Link';
  },
  74172(e, t, r) {
   r.d(t, { A: () => i });
   var n = r(48907),
    a = r(30758),
    o = ['size', 'color'];
   function i(e) {
    var t = e.size,
     r = void 0 === t ? 24 : t,
     i = e.color,
     c = void 0 === i ? 'currentColor' : i,
     l = (0, n.$i)(e, o);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-figma', width: r, height: r, viewBox: '0 0 24 24', stroke: c, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('circle', { cx: '15', cy: '12', r: '3' }), a.createElement('rect', { x: '6', y: '3', width: '12', height: '6', rx: '3' }), a.createElement('path', { d: 'M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' }));
   }
  },
  76223(e, t, r) {
   r.d(t, { sj: () => E });
   const n = '[object RegExp]',
    a = '[object String]',
    o = '[object Number]',
    i = '[object Boolean]',
    c = '[object Arguments]',
    l = '[object Symbol]',
    s = '[object Date]',
    d = '[object Map]',
    f = '[object Set]',
    u = '[object Array]',
    b = '[object ArrayBuffer]',
    p = '[object Object]',
    h = '[object DataView]',
    v = '[object Uint8Array]',
    m = '[object Uint8ClampedArray]',
    y = '[object Uint16Array]',
    g = '[object Uint32Array]',
    j = '[object Int8Array]',
    O = '[object Int16Array]',
    w = '[object Int32Array]',
    x = '[object Float32Array]',
    k = '[object Float64Array]';
   function E(e, t) {
    return N(e, void 0, e, new Map(), t);
   }
   function N(e, t, r, E = new Map(), P = void 0) {
    const _ = P?.(e, t, r, E);
    if (void 0 !== _) return _;
    if (null == (B = e) || ('object' != typeof B && 'function' != typeof B)) return e;
    var B, z;
    if (E.has(e)) return E.get(e);
    if (Array.isArray(e)) {
     const t = new Array(e.length);
     E.set(e, t);
     for (let n = 0; n < e.length; n++) t[n] = N(e[n], n, r, E, P);
     return (Object.hasOwn(e, 'index') && (t.index = e.index), Object.hasOwn(e, 'input') && (t.input = e.input), t);
    }
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
     const t = new RegExp(e.source, e.flags);
     return ((t.lastIndex = e.lastIndex), t);
    }
    if (e instanceof Map) {
     const t = new Map();
     E.set(e, t);
     for (const [n, a] of e) t.set(n, N(a, n, r, E, P));
     return t;
    }
    if (e instanceof Set) {
     const t = new Set();
     E.set(e, t);
     for (const n of e) t.add(N(n, void 0, r, E, P));
     return t;
    }
    if ('undefined' != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
    if (((z = e), ArrayBuffer.isView(z) && !(z instanceof DataView))) {
     const t = new (Object.getPrototypeOf(e).constructor)(e.length);
     E.set(e, t);
     for (let n = 0; n < e.length; n++) t[n] = N(e[n], n, r, E, P);
     return t;
    }
    if (e instanceof ArrayBuffer || ('undefined' != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)) return e.slice(0);
    if (e instanceof DataView) {
     const t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    if ('undefined' != typeof File && e instanceof File) {
     const t = new File([e], e.name, { type: e.type });
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    if ('undefined' != typeof Blob && e instanceof Blob) {
     const t = new Blob([e], { type: e.type });
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    if (e instanceof Error) {
     const t = structuredClone(e);
     return (E.set(e, t), (t.message = e.message), (t.name = e.name), (t.stack = e.stack), (t.cause = e.cause), (t.constructor = e.constructor), A(t, e, r, E, P), t);
    }
    if (e instanceof Boolean) {
     const t = new Boolean(e.valueOf());
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    if (e instanceof Number) {
     const t = new Number(e.valueOf());
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    if (e instanceof String) {
     const t = new String(e.valueOf());
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    if (
     'object' == typeof e &&
     (function (e) {
      switch (
       (function (e) {
        return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : Object.prototype.toString.call(e);
       })(e)
      ) {
       case c:
       case u:
       case b:
       case h:
       case i:
       case s:
       case x:
       case k:
       case j:
       case O:
       case w:
       case d:
       case o:
       case p:
       case n:
       case f:
       case a:
       case l:
       case v:
       case m:
       case y:
       case g:
        return !0;
       default:
        return !1;
      }
     })(e)
    ) {
     const t = Object.create(Object.getPrototypeOf(e));
     return (E.set(e, t), A(t, e, r, E, P), t);
    }
    return e;
   }
   function A(e, t, r = e, n, a) {
    const o = [...Object.keys(t), ...((i = t), Object.getOwnPropertySymbols(i).filter((e) => Object.prototype.propertyIsEnumerable.call(i, e)))];
    var i;
    for (let c = 0; c < o.length; c++) {
     const i = o[c],
      l = Object.getOwnPropertyDescriptor(e, i);
     (null == l || l.writable) && (e[i] = N(t[i], i, r, n, a));
    }
   }
  },
  83386(e, t, r) {
   r.d(t, { A: () => i });
   var n = r(48907),
    a = r(30758),
    o = ['size', 'color'];
   function i(e) {
    var t = e.size,
     r = void 0 === t ? 24 : t,
     i = e.color,
     c = void 0 === i ? 'currentColor' : i,
     l = (0, n.$i)(e, o);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-external-link', width: r, height: r, viewBox: '0 0 24 24', stroke: c, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' }), a.createElement('line', { x1: '10', y1: '14', x2: '20', y2: '4' }), a.createElement('polyline', { points: '15 4 20 4 20 9' }));
   }
  },
  93237(e, t, r) {
   r.d(t, { Z: () => u });
   var n = r(86070),
    a = r(63009);
   function o(e) {
    var t,
     r,
     n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) e[t] && (r = o(e[t])) && (n && (n += ' '), (n += r));
     } else for (r in e) e[r] && (n && (n += ' '), (n += r));
    return n;
   }
   function i() {
    for (var e, t, r = 0, n = '', a = arguments.length; r < a; r++) (e = arguments[r]) && (t = o(e)) && (n && (n += ' '), (n += t));
    return n;
   }
   const c = ({ ref: e, children: t, className: r, inline: o, ...c }) => (0, n.jsx)(a.N, { ...c, className: i('rhc-link', { 'rhc-link--inline': o }, r), disabled: !1, ref: e, children: t });
   c.displayName = 'Link';
   var l = r(30758);
   function s(e) {
    var t,
     r,
     n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) e[t] && (r = s(e[t])) && (n && (n += ' '), (n += r));
     } else for (r in e) e[r] && (n && (n += ' '), (n += r));
    return n;
   }
   function d() {
    for (var e, t, r = 0, n = '', a = arguments.length; r < a; r++) (e = arguments[r]) && (t = s(e)) && (n && (n += ' '), (n += t));
    return n;
   }
   const f = ({ level: e = 2, children: t, ...r }) => {
     const n = `h${e}`;
     return l.createElement(n, r, t);
    },
    u = (0, l.forwardRef)(({ heading: e, headingLevel: t = 2, subheading: r, description: a, metadata: o, image: i, href: l, target: s, linkLabel: u, title: b, className: p, children: h, ...v }, m) => (0, n.jsxs)('div', { className: d('rhc-card', 'rhc-card--default', p), ref: m, ...v, children: [i && (0, n.jsx)('div', { className: 'rhc-card__image', children: i }), (0, n.jsxs)('div', { className: 'rhc-card__content', children: [(0, n.jsx)(f, { className: 'rhc-card__heading', level: t, children: l ? (0, n.jsx)(c, { className: 'rhc-card__link', href: l, target: s, title: b, children: e }) : e }), r && (0, n.jsx)('p', { className: 'rhc-card__subheading', children: r }), a && (0, n.jsx)('p', { className: 'rhc-card__description', children: a }), o && (0, n.jsx)('p', { className: 'rhc-card__metadata', children: o }), h] }), u && (0, n.jsx)('div', { className: 'rhc-card__footer', children: (0, n.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, n.jsx)(c, { href: l, target: s, title: b, children: u }) }) })] }));
   u.displayName = 'Card';
  },
  96547(e, t, r) {
   r.d(t, { C: () => f });
   var n = r(15540),
    a = r(69967),
    o = r(86070),
    i = r(30758),
    c = ['children', 'className'];
   function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n));
    }
    return r;
   }
   function s(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(r), !0).forEach(function (t) {
         (0, n.A)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : l(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   var d = function () {
     for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
     return t.filter(Boolean).join(' ');
    },
    f = (0, i.forwardRef)(function (e, t) {
     var r = e.children,
      n = e.className,
      i = (0, a.A)(e, c);
     return (0, o.jsx)('code', s(s({ dir: 'ltr', translate: 'no', className: d('nl-code', n) }, i), {}, { ref: t, children: r }));
    });
   f.displayName = 'Code';
   !(function (e, t) {
    void 0 === t && (t = {});
    var r = t.insertAt;
    if ('undefined' != typeof document) {
     var n = document.head || document.getElementsByTagName('head')[0],
      a = document.createElement('style');
     ((a.type = 'text/css'), 'top' === r && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e)));
    }
   })('.nl-code{background-color:var(--nl-code-background-color);color:var(--nl-code-color);font-family:var(--nl-code-font-family, monospace),monospace;font-size:var(--nl-code-font-size, inherit);hyphens:none;white-space:pre-wrap}\n');
  },
 },
]);
