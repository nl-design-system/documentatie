/*! For license information please see 59041.b9e28e48.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [59041],
 {
  1375(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'line-height', 'LineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  4077(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  4603(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'copy', 'Copy', [
    ['path', { d: 'M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  13088(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'ruler', 'Ruler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  18439(e, t, a) {
   a.d(t, { R: () => o, x: () => l });
   var n = a(30758);
   const r = {},
    s = n.createContext(r);
   function o(e) {
    const t = n.useContext(s);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), n.createElement(s.Provider, { value: t }, e.children));
   }
  },
  18652(e, t, a) {
   a.d(t, { A: () => s });
   var n = a(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, t, a, s) => {
    const o = (0, n.forwardRef)(({ color: a = 'currentColor', size: o = 24, stroke: l = 2, title: h, className: d, children: i, ...p }, v) => (0, n.createElement)('svg', { ref: v, ...r[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${t}`, d].join(' '), ...('filled' === e ? { fill: a } : { strokeWidth: l, stroke: a }), ...p }, [h && (0, n.createElement)('title', { key: 'svg-title' }, h), ...s.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(i) ? i : [i])]));
    return ((o.displayName = `${a}`), o);
   };
  },
  23436(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'file-unknown', 'FileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  24214(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'text-size', 'TextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  35193(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'palette', 'Palette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  43864(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'shadow', 'Shadow', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M13 12h5', key: 'svg-1' }],
    ['path', { d: 'M13 15h4', key: 'svg-2' }],
    ['path', { d: 'M13 18h1', key: 'svg-3' }],
    ['path', { d: 'M13 9h4', key: 'svg-4' }],
    ['path', { d: 'M13 6h1', key: 'svg-5' }],
   ]);
  },
  56561(e, t, a) {
   a.d(t, { f: () => p });
   var n = a(15540),
    r = a(69967),
    s = a(86070),
    o = a(13526),
    l = a(30758),
    h = ['children', 'className', 'purpose'];
   function d(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, n));
    }
    return a;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var a = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? d(Object(a), !0).forEach(function (t) {
         (0, n.A)(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : d(Object(a)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
    }
    return e;
   }
   var p = (0, l.forwardRef)(function (e, t) {
    var a = e.children,
     l = e.className,
     d = e.purpose,
     p = (0, r.A)(e, h);
    return (0, s.jsx)('p', i(i({ className: (0, o.$)('nl-paragraph', (0, n.A)({}, 'nl-paragraph--lead', 'lead' === d), l), ref: t }, p), {}, { children: 'lead' === d ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: a }) : a }));
   });
   p.displayName = 'Paragraph';
  },
  58315(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  60529(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'user', 'User', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
  },
  63009(e, t, a) {
   a.d(t, { N: () => p });
   var n = a(15540),
    r = a(69967),
    s = a(86070),
    o = a(13526),
    l = a(30758),
    h = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function d(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, n));
    }
    return a;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var a = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? d(Object(a), !0).forEach(function (t) {
         (0, n.A)(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : d(Object(a)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
    }
    return e;
   }
   var p = (0, l.forwardRef)(function (e, t) {
    var a = e.children,
     l = e.className,
     d = e.current,
     p = e.disabled,
     v = e.href,
     c = e.inlineBox,
     y = (0, r.A)(e, h);
    return (0, s.jsx)('a', i(i({ 'aria-current': d || void 0, 'aria-disabled': p, className: (0, o.$)('nl-link', (0, n.A)((0, n.A)((0, n.A)({}, 'nl-link--current', d), 'nl-link--disabled', p), 'nl-link--inline-box', c), l), href: p ? void 0 : v, role: p ? 'link' : void 0, ref: t, tabIndex: p ? 0 : void 0 }, y), {}, { children: a }));
   });
   p.displayName = 'Link';
  },
  64249(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  73563(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'number', 'Number', [
    ['path', { d: 'M4 17v-10l7 10v-10', key: 'svg-0' }],
    ['path', { d: 'M15 17h5', key: 'svg-1' }],
    ['path', { d: 'M15 10a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0', key: 'svg-2' }],
   ]);
  },
  79532(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'underline', 'Underline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
  82999(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'pointer', 'Pointer', [['path', { d: 'M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563', key: 'svg-0' }]]);
  },
  90578(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
  91525(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'file-typography', 'FileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  92081(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'bold', 'Bold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  96345(e, t, a) {
   a.d(t, { A: () => n });
   const n = (0, a(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
 },
]);
