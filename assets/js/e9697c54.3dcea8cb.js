'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50967],
 {
  7361: (e, t, n) => {
   n.d(t, { A: () => h });
   var s = n(63674),
    r = n(92420),
    i = n(45648),
    c = n(14537),
    o = n(13526),
    l = n(86070);
   function a({ href: e, icon: t = '', title: n, description: s, children: i }) {
    return (0, l.jsxs)('div', { className: 'card', children: [e ? (0, l.jsx)(r.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }), s && (0, l.jsx)('p', { className: 'cardDescription', children: s }), i] });
   }
   function d({ item: e }) {
    return (0, l.jsx)(a, { title: e.label, description: e.description, children: (0, l.jsx)(c.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, l.jsx)(c.Er, { children: 'link' === e.type ? (0, l.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, i.cC)(e.docId);
    return (0, l.jsx)(a, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, l.jsx)(m, { item: e });
     case 'category':
      return (0, l.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function p({ className: e }) {
    const t = (0, s.$S)();
    return (0, l.jsx)(h, { items: t.items, className: e });
   }
   function h(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, l.jsx)(p, { ...e });
    const r = (0, s.d1)(t);
    return (0, l.jsx)('section', { className: (0, o.A)('row', n), ...e, children: r.map((e, t) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(u, { item: e }) }, t)) });
   }
  },
  49484: (e, t, n) => {
   n.d(t, { F: () => l });
   var s = n(63674),
    r = n(13526),
    i = n(7361),
    c = n(86070);
   const o = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: o(n.items, t) }] : e), []),
    l = ({ excludeDocIDs: e = [], className: t, ...n }) => {
     const l = (0, s.$S)();
     return (0, c.jsx)('div', { ...n, className: (0, r.A)('margin-top--lg', t), children: (0, c.jsx)(i.A, { items: o(l.items, e) }) });
    };
  },
  63674: (e, t, n) => {
   n.d(t, { $S: () => s, d1: () => r });
   n(34374);
   function s(...e) {
    return n(41863).$S(...e);
   }
   function r(...e) {
    return n(41863).d1(...e);
   }
  },
  78521: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => a, default: () => p, frontMatter: () => l, metadata: () => s, toc: () => m });
   const s = JSON.parse('{"id":"project/README","title":"Project","description":"{/ @license CC0-1.0 /}","source":"@site/docs/project/README.mdx","sourceDirName":"project","slug":"/project/","permalink":"/project/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Project","hide_title":true,"hide_table_of_contents":true},"sidebar":"project","next":{"title":"Over NL Design System","permalink":"/project/over-nl-design-system"}}');
   var r = n(86070),
    i = n(85248),
    c = n(49484),
    o = n(7361);
   const l = { title: 'Project', hide_title: !0, hide_table_of_contents: !0 },
    a = void 0,
    d = {},
    m = [];
   function u(e) {
    const t = { span: 'span', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(c.F, { excludeDocIDs: ['project/README', 'project/global-design-system'] }), '\n', (0, r.jsx)(o.A, { items: [{ type: 'link', href: '/project/global-design-system', label: (0, r.jsx)(t.span, { lang: 'en', children: 'Global Design System' }), description: (0, r.jsx)(t.span, { lang: 'en', children: 'Links to global design systems for governments.' }) }] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => c, x: () => o });
   var s = n(30758);
   const r = {},
    i = s.createContext(r);
   function c(e) {
    const t = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : c(e.components)), s.createElement(i.Provider, { value: t }, e.children);
   }
  },
  92420: (e, t, n) => {
   n.d(t, { N: () => c });
   var s = n(71170),
    r = n(13526),
    i = n(86070);
   const c = ({ className: e, ...t }) => (0, i.jsx)(s.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
 },
]);
