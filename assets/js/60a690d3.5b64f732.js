'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64340],
 {
  32291: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => r, default: () => d, frontMatter: () => s, metadata: () => a, toc: () => l });
   var o = t(52676),
    i = t(40139);
   const s = { title: 'Mijn omgevingen \xb7 Patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Mijn omgevingen', sidebar_position: 3, pagination_label: 'Mijn omgevingen', description: 'Verzameling van patronen en templates rondom mijn omgevingen.', slug: '/voorbeelden/patronen-en-templates/mijn-omgevingen', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek', 'mijn omgevingen'] },
    r = 'Mijn omgevingen',
    a = { id: 'voorbeelden/patronen-en-templates/mijn-omgevingen', title: 'Mijn omgevingen \xb7 Patronen en templates \xb7 Voorbeelden', description: 'Verzameling van patronen en templates rondom mijn omgevingen.', source: '@site/docs/voorbeelden/patronen-en-templates/mijn-omgevingen.mdx', sourceDirName: 'voorbeelden/patronen-en-templates', slug: '/voorbeelden/patronen-en-templates/mijn-omgevingen', permalink: '/voorbeelden/patronen-en-templates/mijn-omgevingen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen-en-templates/mijn-omgevingen.mdx', tags: [], version: 'current', sidebarPosition: 3, frontMatter: { title: 'Mijn omgevingen \xb7 Patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Mijn omgevingen', sidebar_position: 3, pagination_label: 'Mijn omgevingen', description: 'Verzameling van patronen en templates rondom mijn omgevingen.', slug: '/voorbeelden/patronen-en-templates/mijn-omgevingen', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek', 'mijn omgevingen'] }, sidebar: 'voorbeelden', previous: { title: 'Formulieren', permalink: '/voorbeelden/patronen-en-templates/formulieren' } },
    m = {},
    l = [];
   function g(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'mijn-omgevingen', children: 'Mijn omgevingen' }), '\n', (0, o.jsxs)(n.p, { children: ['We verzamelen patronen en templates rondom mijn omgevingen via ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'GitHub Discussions' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/386', children: 'De overkoepelende GitHub Discussion voor mijn omgevingen' }), ' is een goed startpunt om te beginnen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Heb je inzichten uit onderzoek of vraagstukken die je wilt delen? Voeg ze toe aan de ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/mijn-omgevingen', children: 'GitHub Discussions' }), '. Misschien kan een andere organisatie jouw vraagstuk meenemen in toekomstig onderzoek.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Mis je een patroon of template? Voeg deze zelf toe als GitHub Discussion of ', (0, o.jsx)(n.a, { href: '/project/kernteam', children: 'neem contact op met het kernteam' })] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => r });
   var o = t(75271);
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
