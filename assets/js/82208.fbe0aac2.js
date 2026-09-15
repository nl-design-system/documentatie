/*! For license information please see 82208.fbe0aac2.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82208],
 {
  6360(e, r, t) {
   t.d(r, { KE: () => u });
   var n = t(15540),
    a = t(69967),
    i = t(86070),
    o = t(30758),
    l = ['children'],
    c = ['dateTime'],
    s = ['value'];
   function d(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (r &&
      (n = n.filter(function (r) {
       return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, n));
    }
    return t;
   }
   function h(e) {
    for (var r = 1; r < arguments.length; r++) {
     var t = null != arguments[r] ? arguments[r] : {};
     r % 2
      ? d(Object(t), !0).forEach(function (r) {
         (0, n.A)(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (r) {
           Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
    }
    return e;
   }
   var u = (0, o.forwardRef)(function (e, r) {
    var t = e.children,
     n = (0, a.A)(e, l),
     o = (function () {
      for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
      return r.filter(Boolean).join(' ');
     })('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(n)
    ) {
     var d = n.dateTime,
      u = (0, a.A)(n, c);
     return (0, i.jsx)('time', h(h({}, u), {}, { dateTime: d, className: o, ref: r, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(n)
    ) {
     var p = n.value,
      b = (0, a.A)(n, s);
     return (0, i.jsx)('data', h(h({}, b), {}, { value: p, className: o, ref: r, children: t }));
    }
    return (0, i.jsx)('span', h(h({}, n), {}, { className: o, ref: r, children: t }));
   });
   u.displayName = 'DataBadge';
  },
  15089(e, r, t) {
   t.d(r, { A: () => o });
   var n = t(48907),
    a = t(30758),
    i = ['size', 'color'];
   function o(e) {
    var r = e.size,
     t = void 0 === r ? 24 : r,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     c = (0, n.$i)(e, i);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-github', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, c), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' }));
   }
  },
  28377(e, r, t) {
   t.d(r, { A: () => o });
   var n = t(48907),
    a = t(30758),
    i = ['size', 'color'];
   function o(e) {
    var r = e.size,
     t = void 0 === r ? 24 : r,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     c = (0, n.$i)(e, i);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-npm', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, c), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M1 8h22v7h-12v2h-4v-2h-6z' }), a.createElement('path', { d: 'M7 8v7' }), a.createElement('path', { d: 'M14 8v7' }), a.createElement('path', { d: 'M17 11v4' }), a.createElement('path', { d: 'M4 11v4' }), a.createElement('path', { d: 'M11 11v1' }), a.createElement('path', { d: 'M20 11v4' }));
   }
  },
  33648(e, r, t) {
   t.d(r, { A: () => o });
   var n = t(48907),
    a = t(30758),
    i = ['size', 'color'];
   function o(e) {
    var r = e.size,
     t = void 0 === r ? 24 : r,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     c = (0, n.$i)(e, i);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-storybook', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, c), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M5 4l.5 16.5l13.5 .5v-18z' }), a.createElement('path', { d: 'M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985' }), a.createElement('path', { d: 'M16 3.5v1' }));
   }
  },
  48907(e, r, t) {
   function n() {
    return (
     (n = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
         }
         return e;
        }),
     n.apply(this, arguments)
    );
   }
   function a(e, r) {
    if (null == e) return {};
    var t,
     n,
     a = (function (e, r) {
      if (null == e) return {};
      var t,
       n,
       a = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) ((t = i[n]), r.indexOf(t) >= 0 || (a[t] = e[t]));
      return a;
     })(e, r);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) ((t = i[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])));
    }
    return a;
   }
   t.d(r, { $i: () => a, _P: () => n });
  },
  50172(e, r, t) {
   t.d(r, { Z: () => u });
   var n = t(86070),
    a = t(63009);
   function i(e) {
    var r,
     t,
     n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (r = 0; r < a; r++) e[r] && (t = i(e[r])) && (n && (n += ' '), (n += t));
     } else for (t in e) e[t] && (n && (n += ' '), (n += t));
    return n;
   }
   function o() {
    for (var e, r, t = 0, n = '', a = arguments.length; t < a; t++) (e = arguments[t]) && (r = i(e)) && (n && (n += ' '), (n += r));
    return n;
   }
   const l = ({ ref: e, children: r, className: t, inline: i, ...l }) => (0, n.jsx)(a.N, { ...l, className: o('rhc-link', { 'rhc-link--inline': i }, t), disabled: !1, ref: e, children: r });
   l.displayName = 'Link';
   var c = t(30758);
   function s(e) {
    var r,
     t,
     n = '';
    if ('string' == typeof e || 'number' == typeof e) n += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (r = 0; r < a; r++) e[r] && (t = s(e[r])) && (n && (n += ' '), (n += t));
     } else for (t in e) e[t] && (n && (n += ' '), (n += t));
    return n;
   }
   function d() {
    for (var e, r, t = 0, n = '', a = arguments.length; t < a; t++) (e = arguments[t]) && (r = s(e)) && (n && (n += ' '), (n += r));
    return n;
   }
   const h = ({ level: e = 2, children: r, ...t }) => {
     const n = `h${e}`;
     return c.createElement(n, t, r);
    },
    u = (0, c.forwardRef)(({ heading: e, headingLevel: r = 2, subheading: t, description: a, metadata: i, image: o, href: c, target: s, linkLabel: u, title: p, className: b, children: f, ...v }, m) => (0, n.jsxs)('div', { className: d('rhc-card', 'rhc-card--default', b), ref: m, ...v, children: [o && (0, n.jsx)('div', { className: 'rhc-card__image', children: o }), (0, n.jsxs)('div', { className: 'rhc-card__content', children: [(0, n.jsx)(h, { className: 'rhc-card__heading', level: r, children: c ? (0, n.jsx)(l, { className: 'rhc-card__link', href: c, target: s, title: p, children: e }) : e }), t && (0, n.jsx)('p', { className: 'rhc-card__subheading', children: t }), a && (0, n.jsx)('p', { className: 'rhc-card__description', children: a }), i && (0, n.jsx)('p', { className: 'rhc-card__metadata', children: i }), f] }), u && (0, n.jsx)('div', { className: 'rhc-card__footer', children: (0, n.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, n.jsx)(l, { href: c, target: s, title: p, children: u }) }) })] }));
   u.displayName = 'Card';
  },
  50805(e, r, t) {
   t.d(r, { $n: () => p });
   var n = t(15540),
    a = t(69967),
    i = t(86070),
    o = t(13526),
    l = t(30758),
    c = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function s(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (r &&
      (n = n.filter(function (r) {
       return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, n));
    }
    return t;
   }
   function d(e) {
    for (var r = 1; r < arguments.length; r++) {
     var t = null != arguments[r] ? arguments[r] : {};
     r % 2
      ? s(Object(t), !0).forEach(function (r) {
         (0, n.A)(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : s(Object(t)).forEach(function (r) {
           Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
    }
    return e;
   }
   var h = function (e) {
     return function (r) {
      return e.includes(r);
     };
    },
    u = h(['primary', 'secondary', 'subtle']),
    p =
     (h(['positive', 'negative']),
     (0, l.forwardRef)(function (e, r) {
      var t = e.children,
       n = e.className,
       s = e.iconOnly,
       h = e.iconEnd,
       p = e.iconStart,
       b = e.purpose,
       f = e.hint,
       v = e.disabled,
       m = e.htmlDisabled,
       y = e.pressed,
       g = e.busy,
       j = e.type,
       O = void 0 === j ? 'button' : j,
       w = e.label,
       k = e.toggle,
       x = (0, a.A)(e, c),
       _ = Boolean(p || h),
       E = (l.Children.toArray(t).some(l.isValidElement) && _) || s;
      return (0, i.jsxs)('button', d(d({ ref: r, type: O, className: (0, o.$)('nl-button', n, { 'nl-button--pressed': y, 'nl-button--busy': g, 'nl-button--disabled': v || m, 'nl-button--primary': 'primary' === b, 'nl-button--secondary': 'secondary' === b, 'nl-button--subtle': 'subtle' === b, 'nl-button--positive': u(b) && 'positive' === f, 'nl-button--negative': u(b) && 'negative' === f, 'nl-button--icon-only': s }), 'aria-pressed': k ? String(Boolean(y)) : void 0, 'aria-disabled': v || g ? 'true' : void 0, disabled: m }, x), {}, { children: [p && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: p }), w && (0, i.jsx)('span', { className: 'nl-button__label', children: w }), E ? (0, i.jsx)('span', { className: s ? 'nl-button__label' : '', children: t }) : t, h && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: h })] }));
     }));
   p.displayName = 'Button';
  },
  63009(e, r, t) {
   t.d(r, { N: () => h });
   var n = t(15540),
    a = t(69967),
    i = t(86070),
    o = t(13526),
    l = t(30758),
    c = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function s(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (r &&
      (n = n.filter(function (r) {
       return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, n));
    }
    return t;
   }
   function d(e) {
    for (var r = 1; r < arguments.length; r++) {
     var t = null != arguments[r] ? arguments[r] : {};
     r % 2
      ? s(Object(t), !0).forEach(function (r) {
         (0, n.A)(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : s(Object(t)).forEach(function (r) {
           Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
    }
    return e;
   }
   var h = (0, l.forwardRef)(function (e, r) {
    var t = e.children,
     l = e.className,
     s = e.current,
     h = e.disabled,
     u = e.href,
     p = e.inlineBox,
     b = (0, a.A)(e, c);
    return (0, i.jsx)('a', d(d({ 'aria-current': s || void 0, 'aria-disabled': h, className: (0, o.$)('nl-link', (0, n.A)((0, n.A)((0, n.A)({}, 'nl-link--current', s), 'nl-link--disabled', h), 'nl-link--inline-box', p), l), href: h ? void 0 : u, role: h ? 'link' : void 0, ref: r, tabIndex: h ? 0 : void 0 }, b), {}, { children: t }));
   });
   h.displayName = 'Link';
  },
  74172(e, r, t) {
   t.d(r, { A: () => o });
   var n = t(48907),
    a = t(30758),
    i = ['size', 'color'];
   function o(e) {
    var r = e.size,
     t = void 0 === r ? 24 : r,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     c = (0, n.$i)(e, i);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-figma', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, c), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('circle', { cx: '15', cy: '12', r: '3' }), a.createElement('rect', { x: '6', y: '3', width: '12', height: '6', rx: '3' }), a.createElement('path', { d: 'M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' }));
   }
  },
  83386(e, r, t) {
   t.d(r, { A: () => o });
   var n = t(48907),
    a = t(30758),
    i = ['size', 'color'];
   function o(e) {
    var r = e.size,
     t = void 0 === r ? 24 : r,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     c = (0, n.$i)(e, i);
    return a.createElement('svg', (0, n._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-external-link', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, c), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' }), a.createElement('line', { x1: '10', y1: '14', x2: '20', y2: '4' }), a.createElement('polyline', { points: '15 4 20 4 20 9' }));
   }
  },
  96345(e, r, t) {
   t.d(r, { A: () => n });
   const n = (0, t(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
 },
]);
