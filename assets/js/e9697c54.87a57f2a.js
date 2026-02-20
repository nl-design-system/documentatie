'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50967],
 {
  3227(e, t, n) {
   n.d(t, { A: () => u });
   var s = n(60316),
    r = n(45282),
    i = n(2264),
    c = n(29181),
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
   function p({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, l.jsx)(m, { item: e });
     case 'category':
      return (0, l.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const t = (0, s.$S)();
    return (0, l.jsx)(u, { items: t.items, className: e });
   }
   function u(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, l.jsx)(h, { ...e });
    const r = (0, s.d1)(t);
    return (0, l.jsx)('section', { className: (0, o.A)('row', n), ...e, children: r.map((e, t) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(p, { item: e }) }, t)) });
   }
  },
  18439(e, t, n) {
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
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : c(e.components)), s.createElement(i.Provider, { value: t }, e.children));
   }
  },
  45282(e, t, n) {
   n.d(t, { F: () => i, N: () => c });
   var s = n(13526),
    r = n(86070);
   const i = ({ children: e, ...t }) => {
     const { to: n, href: s, ...i } = t;
     let c = n || s;
     const o = new URL(c, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? ((o.pathname = o.pathname.endsWith('/') ? o.pathname : `${o.pathname}/`), (c = o.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: c, ...i, children: e }));
    },
    c = ({ className: e, ...t }) => (0, r.jsx)(i, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  60316(e, t, n) {
   n.d(t, { $S: () => s, d1: () => r });
   n(74147);
   function s(...e) {
    return n(97819).$S(...e);
   }
   function r(...e) {
    return n(97819).d1(...e);
   }
  },
  78521(e, t, n) {
   (n.r(t), n.d(t, { assets: () => d, contentTitle: () => a, default: () => h, frontMatter: () => l, metadata: () => s, toc: () => m }));
   const s = JSON.parse('{"id":"project/README","title":"Project","description":"{/ @license CC0-1.0 /}","source":"@site/docs/project/README.mdx","sourceDirName":"project","slug":"/project/","permalink":"/project/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Project","hide_title":true,"hide_table_of_contents":true},"sidebar":"project","next":{"title":"Over NL Design System","permalink":"/project/over-nl-design-system"}}');
   var r = n(86070),
    i = n(18439),
    c = n(89874),
    o = n(3227);
   const l = { title: 'Project', hide_title: !0, hide_table_of_contents: !0 },
    a = void 0,
    d = {},
    m = [];
   function p(e) {
    const t = { span: 'span', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(c.F, { excludeDocIDs: ['project/README', 'project/global-design-system'] }), '\n', (0, r.jsx)(o.A, { items: [{ type: 'link', href: '/project/global-design-system', label: (0, r.jsx)(t.span, { lang: 'en', children: 'Global Design System' }), description: (0, r.jsx)(t.span, { lang: 'en', children: 'Links to global design systems for governments.' }) }] })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  89874(e, t, n) {
   n.d(t, { F: () => l });
   var s = n(60316),
    r = n(13526),
    i = n(3227),
    c = n(86070);
   const o = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: o(n.items, t) }] : e), []),
    l = ({ excludeDocIDs: e = [], className: t, ...n }) => {
     const l = (0, s.$S)();
     return (0, c.jsx)('div', { ...n, className: (0, r.A)('margin-top--lg', t), children: (0, c.jsx)(i.A, { items: o(l.items, e) }) });
    };
  },
 },
]);
