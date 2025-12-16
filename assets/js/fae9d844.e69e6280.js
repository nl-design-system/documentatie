'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42962],
 {
  1935: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => p, frontMatter: () => s, metadata: () => r, toc: () => d });
   const r = JSON.parse('{"id":"project/klachten","title":"Klachten \xb7 Project","description":"Klachten melden over het project NL Design System.","source":"@site/docs/project/klachten.mdx","sourceDirName":"project","slug":"/project/klachten","permalink":"/project/klachten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/klachten.mdx","tags":[],"version":"current","frontMatter":{"title":"Klachten \xb7 Project","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Klachten","pagination_label":"Klachten","description":"Klachten melden over het project NL Design System.","keywords":["kernteam","klachten"]},"sidebar":"project","previous":{"title":"Links","permalink":"/project/links"},"next":{"title":"Global design systems","permalink":"/project/global-design-system"}}');
   var i = t(86070),
    a = t(85248),
    o = t(68873);
   const s = { title: 'Klachten \xb7 Project', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Klachten', pagination_label: 'Klachten', description: 'Klachten melden over het project NL Design System.', keywords: ['kernteam', 'klachten'] },
    l = 'Klachten',
    c = {},
    d = [{ value: 'Handhavingsprocedure', id: 'handhavingsprocedure', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'klachten', children: 'Klachten' }) }), '\n', (0, i.jsx)(o.fz, { appearance: 'lead', children: (0, i.jsx)(n.p, { children: 'Vind je dat je niet goed behandeld bent, bijvoorbeeld doordat de toegankelijkheid onvoldoende is, kun je deze klacht\ndoorgeven.' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Neem dan contact op via ', (0, i.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Wat kun je van ons verwachten?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Binnen 10 werkdagen krijg je een ontvangstbevestiging.' }), '\n', (0, i.jsx)(n.li, { children: 'We informeren je over de voortgang en de uitkomst.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'handhavingsprocedure', children: 'Handhavingsprocedure' }), '\n', (0, i.jsx)(n.p, { children: 'Ben je niet tevreden met de manier waarop je klacht is behandeld? Of hebben we niet op tijd gereageerd?' }), '\n', (0, i.jsxs)(n.p, { children: ['Dan kun je contact opnemen met ', (0, i.jsx)(n.a, { href: '/project/kernteam/', children: 'de projectleider van dit project' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => s });
   var r = t(30758);
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
