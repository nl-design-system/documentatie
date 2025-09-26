'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [71022],
 {
  65446: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => o, metadata: () => a, toc: () => m });
   var s = n(52676),
    r = n(40139),
    i = n(21004),
    c = n(39772);
   const o = { title: 'Project', hide_title: !0, hide_table_of_contents: !0 },
    l = void 0,
    a = { id: 'project/README', title: 'Project', description: '{/ @license CC0-1.0 /}', source: '@site/docs/project/README.mdx', sourceDirName: 'project', slug: '/project/', permalink: '/project/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Project', hide_title: !0, hide_table_of_contents: !0 }, sidebar: 'project', next: { title: 'Over NL Design System', permalink: '/project/over-nl-design-system' } },
    d = {},
    m = [];
   function p(e) {
    const t = { span: 'span', ...(0, r.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(i.l, { excludeDocIDs: ['project/README', 'project/global-design-system'] }), '\n', (0, s.jsx)(c.Z, { items: [{ type: 'link', href: '/project/global-design-system', label: (0, s.jsx)(t.span, { lang: 'en', children: 'Global Design System' }), description: (0, s.jsx)(t.span, { lang: 'en', children: 'Links to global design systems for governments.' }) }] })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, r.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  21004: (e, t, n) => {
   n.d(t, { l: () => l });
   var s = n(17542),
    r = n(4814),
    i = n(39772),
    c = n(52676);
   const o = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: o(n.items, t) }] : e), []),
    l = (e) => {
     let { excludeDocIDs: t = [], className: n, ...l } = e;
     const a = (0, s.jA)();
     return (0, c.jsx)('div', { ...l, className: (0, r.Z)('margin-top--lg', n), children: (0, c.jsx)(i.Z, { items: o(a.items, t) }) });
    };
  },
  39772: (e, t, n) => {
   n.d(t, { Z: () => u });
   var s = n(17542),
    r = n(57229),
    i = n(35076),
    c = n(4814),
    o = n(52676);
   function l(e) {
    let { href: t, icon: n = '', title: s, description: i, children: l } = e;
    return (0, o.jsxs)('div', { className: 'card', children: [t ? (0, o.jsx)(r.r, { href: t, className: (0, c.Z)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', s] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', s] }), i && (0, o.jsx)('p', { className: 'cardDescription', children: i }), l] });
   }
   function a(e) {
    let { item: t } = e;
    return (0, o.jsx)(l, { title: t.label, description: t.description, children: (0, o.jsx)(i.QI, { children: t.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, o.jsx)(i.AS, { children: 'link' === e.type ? (0, o.jsx)(r.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, t)) }) });
   }
   function d(e) {
    let { item: t } = e;
    const n = (0, s.xz)(t.docId);
    return (0, o.jsx)(l, { href: t.href, title: t.label, description: t.description ?? n?.description });
   }
   function m(e) {
    let { item: t } = e;
    switch (t.type) {
     case 'link':
      return (0, o.jsx)(d, { item: t });
     case 'category':
      return (0, o.jsx)(a, { item: t });
     default:
      throw new Error(`unknown item type ${JSON.stringify(t)}`);
    }
   }
   function p(e) {
    let { className: t } = e;
    const n = (0, s.jA)();
    return (0, o.jsx)(u, { items: n.items, className: t });
   }
   function u(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, o.jsx)(p, { ...e });
    const r = (0, s.MN)(t);
    return (0, o.jsx)('section', { className: (0, c.Z)('row', n), children: r.map((e, t) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(m, { item: e }) }, t)) });
   }
  },
  40139: (e, t, n) => {
   n.d(t, { Z: () => o, a: () => c });
   var s = n(75271);
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
 },
]);
