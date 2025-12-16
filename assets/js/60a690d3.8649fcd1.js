'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15732],
 {
  40037: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => a, default: () => d, frontMatter: () => r, metadata: () => o, toc: () => l });
   const o = JSON.parse('{"id":"voorbeelden/patronen-en-templates/mijn-omgevingen","title":"Mijn omgevingen \xb7 Patronen en templates \xb7 Voorbeelden","description":"Verzameling van patronen en templates rondom mijn omgevingen.","source":"@site/docs/voorbeelden/patronen-en-templates/mijn-omgevingen.mdx","sourceDirName":"voorbeelden/patronen-en-templates","slug":"/voorbeelden/patronen-en-templates/mijn-omgevingen","permalink":"/voorbeelden/patronen-en-templates/mijn-omgevingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen-en-templates/mijn-omgevingen.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Mijn omgevingen \xb7 Patronen en templates \xb7 Voorbeelden","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Mijn omgevingen","sidebar_position":3,"pagination_label":"Mijn omgevingen","description":"Verzameling van patronen en templates rondom mijn omgevingen.","slug":"/voorbeelden/patronen-en-templates/mijn-omgevingen","keywords":["voorbeelden","patronen","templates","gebruikersonderzoek","mijn omgevingen"]},"sidebar":"voorbeelden","previous":{"title":"Formulieren","permalink":"/voorbeelden/patronen-en-templates/formulieren"}}');
   var i = t(86070),
    s = t(85248);
   const r = { title: 'Mijn omgevingen \xb7 Patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Mijn omgevingen', sidebar_position: 3, pagination_label: 'Mijn omgevingen', description: 'Verzameling van patronen en templates rondom mijn omgevingen.', slug: '/voorbeelden/patronen-en-templates/mijn-omgevingen', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek', 'mijn omgevingen'] },
    a = 'Mijn omgevingen',
    m = {},
    l = [];
   function g(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'mijn-omgevingen', children: 'Mijn omgevingen' }) }), '\n', (0, i.jsxs)(n.p, { children: ['We verzamelen patronen en templates rondom mijn omgevingen via ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'GitHub Discussions' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/386', children: 'De overkoepelende GitHub Discussion voor mijn omgevingen' }), ' is een goed startpunt om te beginnen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Heb je inzichten uit onderzoek of vraagstukken die je wilt delen? Voeg ze toe aan de ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'GitHub Discussions' }), '. Misschien kan een andere organisatie jouw vraagstuk meenemen in toekomstig onderzoek.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Mis je een patroon of template? Voeg deze zelf toe als GitHub Discussion of ', (0, i.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' })] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => r, x: () => a });
   var o = t(30758);
   const i = {},
    s = o.createContext(i);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
