'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [17323],
 {
  40142: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => a, contentTitle: () => l, default: () => p, frontMatter: () => i, metadata: () => t, toc: () => m });
   const t = JSON.parse('{"id":"voorbeelden/patronen-en-templates/formulieren","title":"Formulieren \xb7 Patronen en templates \xb7 Voorbeelden","description":"Verzameling van patronen en templates rondom formulieren en meerstappenformulieren.","source":"@site/docs/voorbeelden/patronen-en-templates/formulieren.mdx","sourceDirName":"voorbeelden/patronen-en-templates","slug":"/voorbeelden/patronen-en-templates/formulieren","permalink":"/voorbeelden/patronen-en-templates/formulieren","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen-en-templates/formulieren.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Formulieren \xb7 Patronen en templates \xb7 Voorbeelden","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Formulieren","sidebar_position":2,"pagination_label":"Formulieren","description":"Verzameling van patronen en templates rondom formulieren en meerstappenformulieren.","slug":"/voorbeelden/patronen-en-templates/formulieren","keywords":["voorbeelden","patronen","templates","gebruikersonderzoek","formulieren","meerstappenformulieren"]},"sidebar":"voorbeelden","previous":{"title":"Introductie","permalink":"/voorbeelden/patronen-en-templates"},"next":{"title":"Mijn omgevingen","permalink":"/voorbeelden/patronen-en-templates/mijn-omgevingen"}}');
   var o = r(86070),
    s = r(85248);
   const i = { title: 'Formulieren \xb7 Patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Formulieren', sidebar_position: 2, pagination_label: 'Formulieren', description: 'Verzameling van patronen en templates rondom formulieren en meerstappenformulieren.', slug: '/voorbeelden/patronen-en-templates/formulieren', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek', 'formulieren', 'meerstappenformulieren'] },
    l = 'Formulieren',
    a = {},
    m = [];
   function d(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'formulieren', children: 'Formulieren' }) }), '\n', (0, o.jsxs)(n.p, { children: ['We verzamelen patronen en templates rondom formulieren en meerstappenformulieren via ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/formulieren', children: 'GitHub Discussions' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/364', children: 'De overkoepelende GitHub Discussion voor formulieren' }), ' is een goed startpunt om te beginnen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Heb je inzichten uit onderzoek of vraagstukken die je wilt delen? Voeg ze toe aan de ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/formulieren', children: 'GitHub Discussions' }), '. Misschien kan een andere organisatie jouw vraagstuk meenemen in toekomstig onderzoek.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Mis je een patroon of template? Voeg deze zelf toe als GitHub Discussion of ', (0, o.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' })] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => i, x: () => l });
   var t = r(30758);
   const o = {},
    s = t.createContext(o);
   function i(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
