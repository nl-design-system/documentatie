'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [99261],
 {
  5522: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => s, default: () => p, frontMatter: () => o, metadata: () => c, toc: () => d });
   var r = t(52676),
    i = t(40139),
    a = t(37943);
   const o = { title: 'Klachten \xb7 Project', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Klachten', pagination_label: 'Klachten', description: 'Klachten melden over het project NL Design System.', keywords: ['kernteam', 'klachten'] },
    s = 'Klachten',
    c = { id: 'project/klachten', title: 'Klachten \xb7 Project', description: 'Klachten melden over het project NL Design System.', source: '@site/docs/project/klachten.mdx', sourceDirName: 'project', slug: '/project/klachten', permalink: '/project/klachten', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/klachten.mdx', tags: [], version: 'current', frontMatter: { title: 'Klachten \xb7 Project', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Klachten', pagination_label: 'Klachten', description: 'Klachten melden over het project NL Design System.', keywords: ['kernteam', 'klachten'] }, sidebar: 'project', previous: { title: 'Links', permalink: '/project/links' }, next: { title: 'Global design systems', permalink: '/project/global-design-system' } },
    l = {},
    d = [{ value: 'Handhavingsprocedure', id: 'handhavingsprocedure', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'klachten', children: 'Klachten' }), '\n', (0, r.jsx)(a.nv, { appearance: 'lead', children: (0, r.jsx)(n.p, { children: 'Vind je dat je niet goed behandeld bent, bijvoorbeeld doordat de toegankelijkheid onvoldoende is, kun je deze klacht\ndoorgeven.' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Neem dan contact op via ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Wat kun je van ons verwachten?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Binnen 10 werkdagen krijg je een ontvangstbevestiging.' }), '\n', (0, r.jsx)(n.li, { children: 'We informeren je over de voortgang en de uitkomst.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'handhavingsprocedure', children: 'Handhavingsprocedure' }), '\n', (0, r.jsx)(n.p, { children: 'Ben je niet tevreden met de manier waarop je klacht is behandeld? Of hebben we niet op tijd gereageerd?' }), '\n', (0, r.jsxs)(n.p, { children: ['Dan kun je contact opnemen met ', (0, r.jsx)(n.a, { href: '/project/kernteam/', children: 'de projectleider van dit project' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => o });
   var r = t(75271);
   const i = {},
    a = r.createContext(i);
   function o(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
