/*! For license information please see 9255.0d6cda47.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9255],
 {
  884(e, n, t) {
   t.d(n, { A: () => d });
   t(30758);
   var i = t(13526),
    a = t(63195);
   const s = 'tag_eJ8H',
    l = 'tagRegular_aRNb',
    r = 'tagWithCount_DbHZ';
   var o = t(86070);
   function d({ permalink: e, label: n, count: t, description: d }) {
    return (0, o.jsxs)(a.A, { rel: 'tag', href: e, title: d, className: (0, i.A)(s, t ? r : l), children: [n, t && (0, o.jsx)('span', { children: t })] });
   }
  },
  4077(e, n, t) {
   t.d(n, { A: () => i });
   const i = (0, t(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  5784(e, n, t) {
   t.d(n, { A: () => f });
   var i = t(30758),
    a = t(13526),
    s = t(9270),
    l = t(69914),
    r = t(88014);
   const o = 'details_zu1M',
    d = 'isBrowser_ldlA',
    c = 'collapsibleContent_T_Y9';
   var h = t(86070);
   function u(e) {
    return !!e && ('SUMMARY' === e.tagName || u(e.parentElement));
   }
   function m(e, n) {
    return !!e && (e === n || m(e.parentElement, n));
   }
   function p({ summary: e, children: n, ...t }) {
    (0, s.A)().collectAnchor(t.id);
    const p = (0, l.A)(),
     x = (0, i.useRef)(null),
     { collapsed: f, setCollapsed: v } = (0, r.u)({ initialState: !t.open }),
     [g, j] = (0, i.useState)(t.open),
     A = i.isValidElement(e) ? e : (0, h.jsx)('summary', { children: e ?? 'Details' });
    return (0, h.jsxs)('details', {
     ...t,
     ref: x,
     open: g,
     'data-collapsed': f,
     className: (0, a.A)(o, p && d, t.className),
     onMouseDown: (e) => {
      u(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      u(n) && m(n, x.current) && (e.preventDefault(), f ? (v(!1), j(!0)) : v(!0));
     },
     children: [
      A,
      (0, h.jsx)(r.N, {
       lazy: !1,
       collapsed: f,
       onCollapseTransitionEnd: (e) => {
        (v(e), j(!e));
       },
       children: (0, h.jsx)('div', { className: c, children: n }),
      }),
     ],
    });
   }
   const x = 'details_tXwP';
   function f({ ...e }) {
    return (0, h.jsx)(p, { ...e, className: (0, a.A)('alert alert--info', x, e.className) });
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => r });
   var i = t(30758);
   const a = {},
    s = i.createContext(a);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => s });
   var i = t(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, t, s) => {
    const l = (0, i.forwardRef)(({ color: t = 'currentColor', size: l = 24, stroke: r = 2, title: o, className: d, children: c, ...h }, u) => (0, i.createElement)('svg', { ref: u, ...a[e], width: l, height: l, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: r, stroke: t }), ...h }, [o && (0, i.createElement)('title', { key: 'svg-title' }, o), ...s.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((l.displayName = `${t}`), l);
   };
  },
  29307(e, n, t) {
   t.d(n, { A: () => v });
   t(30758);
   var i = t(13526),
    a = t(18236),
    s = t(71639),
    l = t(63195);
   const r = 'iconEdit__SPV';
   var o = t(86070);
   function d({ className: e, ...n }) {
    return (0, o.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, i.A)(r, e), 'aria-hidden': 'true', ...n, children: (0, o.jsx)('g', { children: (0, o.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function c({ editUrl: e }) {
    return (0, o.jsxs)(l.A, { to: e, className: s.G.common.editThisPage, children: [(0, o.jsx)(d, {}), (0, o.jsx)(a.A, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
   var h = t(43242);
   function u({ lastUpdatedAt: e }) {
    const n = new Date(e),
     t = (0, h.i)({ day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(n);
    return (0, o.jsx)(a.A, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, o.jsx)('b', { children: (0, o.jsx)('time', { dateTime: n.toISOString(), itemProp: 'dateModified', children: t }) }) }, children: ' on {date}' });
   }
   function m({ lastUpdatedBy: e }) {
    return (0, o.jsx)(a.A, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, o.jsx)('b', { children: e }) }, children: ' by {user}' });
   }
   function p({ lastUpdatedAt: e, lastUpdatedBy: n }) {
    return (0, o.jsxs)('span', { className: s.G.common.lastUpdated, children: [(0, o.jsx)(a.A, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: e ? (0, o.jsx)(u, { lastUpdatedAt: e }) : '', byUser: n ? (0, o.jsx)(m, { lastUpdatedBy: n }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   const x = 'lastUpdated_t6HD',
    f = 'noPrint_BL5k';
   function v({ className: e, editUrl: n, lastUpdatedAt: t, lastUpdatedBy: a }) {
    return (0, o.jsxs)('div', { className: (0, i.A)('row', e), children: [(0, o.jsx)('div', { className: (0, i.A)('col', f), children: n && (0, o.jsx)(c, { editUrl: n }) }), (0, o.jsx)('div', { className: (0, i.A)('col', x), children: (t || a) && (0, o.jsx)(p, { lastUpdatedAt: t, lastUpdatedBy: a }) })] });
   }
  },
  43242(e, n, t) {
   t.d(n, { i: () => a });
   var i = t(74147);
   function a(e = {}) {
    const {
      i18n: { currentLocale: n },
     } = (0, i.A)(),
     t = (function () {
      const {
       i18n: { currentLocale: e, localeConfigs: n },
      } = (0, i.A)();
      return n[e].calendar;
     })();
    return new Intl.DateTimeFormat(n, { calendar: t, ...e });
   }
  },
  52266(e, n, t) {
   t.d(n, { A: () => l });
   t(30758);
   var i = t(13526),
    a = t(63195),
    s = t(86070);
   function l(e) {
    const { permalink: n, title: t, subLabel: l, isNext: r } = e;
    return (0, s.jsxs)(a.A, { className: (0, i.A)('pagination-nav__link', r ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: n, children: [l && (0, s.jsx)('div', { className: 'pagination-nav__sublabel', children: l }), (0, s.jsx)('div', { className: 'pagination-nav__label', children: t })] });
   }
  },
  58315(e, n, t) {
   t.d(n, { A: () => i });
   const i = (0, t(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  60316(e, n, t) {
   t.d(n, { $S: () => i, d1: () => a });
   t(74147);
   function i(...e) {
    return t(97819).$S(...e);
   }
   function a(...e) {
    return t(97819).d1(...e);
   }
  },
  76713(e, n, t) {
   t.d(n, { A: () => B });
   var i = t(30758),
    a = t(86070);
   function s(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = i.Children.toArray(e),
       t = n.find((e) => i.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       s = n.filter((e) => e !== t),
       l = t?.props.children;
      return { mdxAdmonitionTitle: l, rest: s.length > 0 ? (0, a.jsx)(a.Fragment, { children: s }) : null };
     })(e.children),
     s = e.title ?? n;
    return { ...e, ...(s && { title: s }), children: t };
   }
   var l = t(13526),
    r = t(18236),
    o = t(71639);
   const d = 'admonition_raOx',
    c = 'admonitionHeading_LcOG',
    h = 'admonitionIcon_RjEs',
    u = 'admonitionContent_HpCY';
   function m({ type: e, className: n, children: t }) {
    return (0, a.jsx)('div', { className: (0, l.A)(o.G.common.admonition, o.G.common.admonitionType(e), d, n), children: t });
   }
   function p({ icon: e, title: n }) {
    return (0, a.jsxs)('div', { className: c, children: [(0, a.jsx)('span', { className: h, children: e }), n] });
   }
   function x({ children: e }) {
    return e ? (0, a.jsx)('div', { className: u, children: e }) : null;
   }
   function f(e) {
    const { type: n, icon: t, title: i, children: s, className: l } = e;
    return (0, a.jsxs)(m, { type: n, className: l, children: [i || t ? (0, a.jsx)(p, { title: i, icon: t }) : null, (0, a.jsx)(x, { children: s })] });
   }
   function v(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const g = { icon: (0, a.jsx)(v, {}), title: (0, a.jsx)(r.A, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function j(e) {
    return (0, a.jsx)(f, { ...g, ...e, className: (0, l.A)('alert alert--secondary', e.className), children: e.children });
   }
   function A(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const N = { icon: (0, a.jsx)(A, {}), title: (0, a.jsx)(r.A, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function y(e) {
    return (0, a.jsx)(f, { ...N, ...e, className: (0, l.A)('alert alert--success', e.className), children: e.children });
   }
   function w(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const b = { icon: (0, a.jsx)(w, {}), title: (0, a.jsx)(r.A, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function _(e) {
    return (0, a.jsx)(f, { ...b, ...e, className: (0, l.A)('alert alert--info', e.className), children: e.children });
   }
   function k(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const C = { icon: (0, a.jsx)(k, {}), title: (0, a.jsx)(r.A, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function M(e) {
    return (0, a.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, a.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const T = { icon: (0, a.jsx)(M, {}), title: (0, a.jsx)(r.A, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const U = { icon: (0, a.jsx)(k, {}), title: (0, a.jsx)(r.A, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const z = {
    ...{
     note: j,
     tip: y,
     info: _,
     warning: function (e) {
      return (0, a.jsx)(f, { ...C, ...e, className: (0, l.A)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, a.jsx)(f, { ...T, ...e, className: (0, l.A)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, a.jsx)(j, { title: 'secondary', ...e }),
     important: (e) => (0, a.jsx)(_, { title: 'important', ...e }),
     success: (e) => (0, a.jsx)(y, { title: 'success', ...e }),
     caution: function (e) {
      return (0, a.jsx)(f, { ...U, ...e, className: (0, l.A)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function B(e) {
    const n = s(e),
     t = ((i = n.type), z[i] || (console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`), z.info));
    var i;
    return (0, a.jsx)(t, { ...n });
   }
  },
  97068(e, n, t) {
   t.d(n, { A: () => d });
   t(30758);
   var i = t(13526),
    a = t(18236),
    s = t(884);
   const l = 'tags_LNv3',
    r = 'tag_p0ch';
   var o = t(86070);
   function d({ tags: e }) {
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('b', { children: (0, o.jsx)(a.A, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }), (0, o.jsx)('ul', { className: (0, i.A)(l, 'padding--none', 'margin-left--sm'), children: e.map((e) => (0, o.jsx)('li', { className: r, children: (0, o.jsx)(s.A, { ...e }) }, e.permalink)) })] });
   }
  },
 },
]);
