/*! For license information please see 702.d10bf2d7.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [702],
 {
  69514: (e, n, t) => {
   t.d(n, { Z: () => i });
   const i = () => null;
  },
  41017: (e, n, t) => {
   t.d(n, { Z: () => _ });
   var i = t(75271),
    o = t(52676);
   function s(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = i.Children.toArray(e),
       t = n.find((e) => i.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       s = n.filter((e) => e !== t),
       a = t?.props.children;
      return { mdxAdmonitionTitle: a, rest: s.length > 0 ? (0, o.jsx)(o.Fragment, { children: s }) : null };
     })(e.children),
     s = e.title ?? n;
    return { ...e, ...(s && { title: s }), children: t };
   }
   var a = t(4814),
    l = t(42800),
    r = t(52035);
   const c = { admonition: 'admonition_i9yb', admonitionHeading: 'admonitionHeading_HLhq', admonitionIcon: 'admonitionIcon_Kz3X', admonitionContent: 'admonitionContent_gnu8' };
   function d(e) {
    let { type: n, className: t, children: i } = e;
    return (0, o.jsx)('div', { className: (0, a.Z)(r.k.common.admonition, r.k.common.admonitionType(n), c.admonition, t), children: i });
   }
   function u(e) {
    let { icon: n, title: t } = e;
    return (0, o.jsxs)('div', { className: c.admonitionHeading, children: [(0, o.jsx)('span', { className: c.admonitionIcon, children: n }), t] });
   }
   function m(e) {
    let { children: n } = e;
    return n ? (0, o.jsx)('div', { className: c.admonitionContent, children: n }) : null;
   }
   function h(e) {
    const { type: n, icon: t, title: i, children: s, className: a } = e;
    return (0, o.jsxs)(d, { type: n, className: a, children: [(0, o.jsx)(u, { title: i, icon: t }), (0, o.jsx)(m, { children: s })] });
   }
   function f(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const p = { icon: (0, o.jsx)(f, {}), title: (0, o.jsx)(l.Z, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function x(e) {
    return (0, o.jsx)(h, { ...p, ...e, className: (0, a.Z)('alert alert--secondary', e.className), children: e.children });
   }
   function v(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const g = { icon: (0, o.jsx)(v, {}), title: (0, o.jsx)(l.Z, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function j(e) {
    return (0, o.jsx)(h, { ...g, ...e, className: (0, a.Z)('alert alert--success', e.className), children: e.children });
   }
   function w(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const y = { icon: (0, o.jsx)(w, {}), title: (0, o.jsx)(l.Z, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function N(e) {
    return (0, o.jsx)(h, { ...y, ...e, className: (0, a.Z)('alert alert--info', e.className), children: e.children });
   }
   function k(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const C = { icon: (0, o.jsx)(k, {}), title: (0, o.jsx)(l.Z, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function Z(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const M = { icon: (0, o.jsx)(Z, {}), title: (0, o.jsx)(l.Z, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const b = { icon: (0, o.jsx)(k, {}), title: (0, o.jsx)(l.Z, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const z = {
    ...{
     note: x,
     tip: j,
     info: N,
     warning: function (e) {
      return (0, o.jsx)(h, { ...C, ...e, className: (0, a.Z)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, o.jsx)(h, { ...M, ...e, className: (0, a.Z)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, o.jsx)(x, { title: 'secondary', ...e }),
     important: (e) => (0, o.jsx)(N, { title: 'important', ...e }),
     success: (e) => (0, o.jsx)(j, { title: 'success', ...e }),
     caution: function (e) {
      return (0, o.jsx)(h, { ...b, ...e, className: (0, a.Z)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function _(e) {
    const n = s(e),
     t = ((i = n.type), z[i] || (console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`), z.info));
    var i;
    return (0, o.jsx)(t, { ...n });
   }
  },
  10930: (e, n, t) => {
   t.d(n, { Z: () => f });
   var i = t(75271),
    o = t(4814),
    s = t(75421),
    a = t(64124);
   const l = { details: 'details_KQnh', isBrowser: 'isBrowser_HvhH', collapsibleContent: 'collapsibleContent_Br1U' };
   var r = t(52676);
   function c(e) {
    return !!e && ('SUMMARY' === e.tagName || c(e.parentElement));
   }
   function d(e, n) {
    return !!e && (e === n || d(e.parentElement, n));
   }
   function u(e) {
    let { summary: n, children: t, ...u } = e;
    const m = (0, s.Z)(),
     h = (0, i.useRef)(null),
     { collapsed: f, setCollapsed: p } = (0, a.u)({ initialState: !u.open }),
     [x, v] = (0, i.useState)(u.open),
     g = i.isValidElement(n) ? n : (0, r.jsx)('summary', { children: n ?? 'Details' });
    return (0, r.jsxs)('details', {
     ...u,
     ref: h,
     open: x,
     'data-collapsed': f,
     className: (0, o.Z)(l.details, m && l.isBrowser, u.className),
     onMouseDown: (e) => {
      c(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      c(n) && d(n, h.current) && (e.preventDefault(), f ? (p(!1), v(!0)) : p(!0));
     },
     children: [
      g,
      (0, r.jsx)(a.z, {
       lazy: !1,
       collapsed: f,
       disableSSRStyle: !0,
       onCollapseTransitionEnd: (e) => {
        p(e), v(!e);
       },
       children: (0, r.jsx)('div', { className: l.collapsibleContent, children: t }),
      }),
     ],
    });
   }
   const m = { details: 'details_DRa1' },
    h = 'alert alert--info';
   function f(e) {
    let { ...n } = e;
    return (0, r.jsx)(u, { ...n, className: (0, o.Z)(h, m.details, n.className) });
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => a });
   var i = t(75271);
   const o = {},
    s = i.createContext(o);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  72315: (e, n, t) => {
   t.d(n, { Z: () => s });
   var i = t(75271),
    o = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, t, s) => {
    const a = (0, i.forwardRef)(({ color: t = 'currentColor', size: a = 24, stroke: l = 2, title: r, className: c, children: d, ...u }, m) => (0, i.createElement)('svg', { ref: m, ...o[e], width: a, height: a, className: ['tabler-icon', `tabler-icon-${n}`, c].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: l, stroke: t }), ...u }, [r && (0, i.createElement)('title', { key: 'svg-title' }, r), ...s.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(d) ? d : [d])]));
    return (a.displayName = `${t}`), a;
   };
  },
  20061: (e, n, t) => {
   t.d(n, { Z: () => i });
   var i = (0, t(72315).Z)('outline', 'mood-happy', 'IconMoodHappy', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  69244: (e, n, t) => {
   t.d(n, { Z: () => i });
   var i = (0, t(72315).Z)('outline', 'mood-sad', 'IconMoodSad', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
 },
]);
