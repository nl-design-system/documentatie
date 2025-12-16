/*! For license information please see 9563.4b7e333d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9563],
 {
  26990: (e, n, t) => {
   t.d(n, { A: () => i });
   var i = (0, t(99773).A)('outline', 'mood-sad', 'IconMoodSad', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  51786: (e, n, t) => {
   t.d(n, { A: () => E });
   var i = t(30758),
    o = t(86070);
   function s(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = i.Children.toArray(e),
       t = n.find((e) => i.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       s = n.filter((e) => e !== t),
       l = t?.props.children;
      return { mdxAdmonitionTitle: l, rest: s.length > 0 ? (0, o.jsx)(o.Fragment, { children: s }) : null };
     })(e.children),
     s = e.title ?? n;
    return { ...e, ...(s && { title: s }), children: t };
   }
   var l = t(13526),
    a = t(40359),
    r = t(76493);
   const c = 'admonition_hP8f',
    d = 'admonitionHeading_mi1U',
    u = 'admonitionIcon_eIeg',
    h = 'admonitionContent_ivFZ';
   function m({ type: e, className: n, children: t }) {
    return (0, o.jsx)('div', { className: (0, l.A)(r.G.common.admonition, r.G.common.admonitionType(e), c, n), children: t });
   }
   function f({ icon: e, title: n }) {
    return (0, o.jsxs)('div', { className: d, children: [(0, o.jsx)('span', { className: u, children: e }), n] });
   }
   function p({ children: e }) {
    return e ? (0, o.jsx)('div', { className: h, children: e }) : null;
   }
   function x(e) {
    const { type: n, icon: t, title: i, children: s, className: l } = e;
    return (0, o.jsxs)(m, { type: n, className: l, children: [i || t ? (0, o.jsx)(f, { title: i, icon: t }) : null, (0, o.jsx)(p, { children: s })] });
   }
   function v(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const g = { icon: (0, o.jsx)(v, {}), title: (0, o.jsx)(a.A, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function j(e) {
    return (0, o.jsx)(x, { ...g, ...e, className: (0, l.A)('alert alert--secondary', e.className), children: e.children });
   }
   function w(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const y = { icon: (0, o.jsx)(w, {}), title: (0, o.jsx)(a.A, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function A(e) {
    return (0, o.jsx)(x, { ...y, ...e, className: (0, l.A)('alert alert--success', e.className), children: e.children });
   }
   function N(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const M = { icon: (0, o.jsx)(N, {}), title: (0, o.jsx)(a.A, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function k(e) {
    return (0, o.jsx)(x, { ...M, ...e, className: (0, l.A)('alert alert--info', e.className), children: e.children });
   }
   function C(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const b = { icon: (0, o.jsx)(C, {}), title: (0, o.jsx)(a.A, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function z(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const _ = { icon: (0, o.jsx)(z, {}), title: (0, o.jsx)(a.A, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const T = { icon: (0, o.jsx)(C, {}), title: (0, o.jsx)(a.A, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const B = {
    ...{
     note: j,
     tip: A,
     info: k,
     warning: function (e) {
      return (0, o.jsx)(x, { ...b, ...e, className: (0, l.A)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, o.jsx)(x, { ..._, ...e, className: (0, l.A)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, o.jsx)(j, { title: 'secondary', ...e }),
     important: (e) => (0, o.jsx)(k, { title: 'important', ...e }),
     success: (e) => (0, o.jsx)(A, { title: 'success', ...e }),
     caution: function (e) {
      return (0, o.jsx)(x, { ...T, ...e, className: (0, l.A)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function E(e) {
    const n = s(e),
     t = ((i = n.type), B[i] || (console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`), B.info));
    var i;
    return (0, o.jsx)(t, { ...n });
   }
  },
  54736: (e, n, t) => {
   t.d(n, { A: () => i });
   var i = (0, t(99773).A)('outline', 'mood-happy', 'IconMoodHappy', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => a });
   var i = t(30758);
   const o = {},
    s = i.createContext(o);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  87867: (e, n, t) => {
   t.d(n, { A: () => p });
   var i = t(30758),
    o = t(13526),
    s = t(98940),
    l = t(56259),
    a = t(27560);
   const r = { details: 'details_XLKE', isBrowser: 'isBrowser_IoUy', collapsibleContent: 'collapsibleContent_XuFj' };
   var c = t(86070);
   function d(e) {
    return !!e && ('SUMMARY' === e.tagName || d(e.parentElement));
   }
   function u(e, n) {
    return !!e && (e === n || u(e.parentElement, n));
   }
   function h({ summary: e, children: n, ...t }) {
    (0, s.A)().collectAnchor(t.id);
    const h = (0, l.A)(),
     m = (0, i.useRef)(null),
     { collapsed: f, setCollapsed: p } = (0, a.u)({ initialState: !t.open }),
     [x, v] = (0, i.useState)(t.open),
     g = i.isValidElement(e) ? e : (0, c.jsx)('summary', { children: e ?? 'Details' });
    return (0, c.jsxs)('details', {
     ...t,
     ref: m,
     open: x,
     'data-collapsed': f,
     className: (0, o.A)(r.details, h && r.isBrowser, t.className),
     onMouseDown: (e) => {
      d(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      d(n) && u(n, m.current) && (e.preventDefault(), f ? (p(!1), v(!0)) : p(!0));
     },
     children: [
      g,
      (0, c.jsx)(a.N, {
       lazy: !1,
       collapsed: f,
       onCollapseTransitionEnd: (e) => {
        p(e), v(!e);
       },
       children: (0, c.jsx)('div', { className: r.collapsibleContent, children: n }),
      }),
     ],
    });
   }
   const m = { details: 'details_sFN1' },
    f = 'alert alert--info';
   function p({ ...e }) {
    return (0, c.jsx)(h, { ...e, className: (0, o.A)(f, m.details, e.className) });
   }
  },
  99773: (e, n, t) => {
   t.d(n, { A: () => s });
   var i = t(30758),
    o = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, t, s) => {
    const l = (0, i.forwardRef)(({ color: t = 'currentColor', size: l = 24, stroke: a = 2, title: r, className: c, children: d, ...u }, h) => (0, i.createElement)('svg', { ref: h, ...o[e], width: l, height: l, className: ['tabler-icon', `tabler-icon-${n}`, c].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: a, stroke: t }), ...u }, [r && (0, i.createElement)('title', { key: 'svg-title' }, r), ...s.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(d) ? d : [d])]));
    return (l.displayName = `${t}`), l;
   };
  },
 },
]);
