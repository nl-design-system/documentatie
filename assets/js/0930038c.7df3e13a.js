'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [82445],
 {
  22765: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => a, contentTitle: () => i, default: () => d, frontMatter: () => s, metadata: () => l, toc: () => m });
   var r = t(52676),
    o = t(40139);
   const s = { title: 'Formulieren \xb7 Patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Formulieren', sidebar_position: 2, pagination_label: 'Formulieren', description: 'Verzameling van patronen en templates rondom formulieren en meerstappenformulieren.', slug: '/voorbeelden/patronen-en-templates/formulieren', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek', 'formulieren', 'meerstappenformulieren'] },
    i = 'Formulieren',
    l = { id: 'voorbeelden/patronen-en-templates/formulieren', title: 'Formulieren \xb7 Patronen en templates \xb7 Voorbeelden', description: 'Verzameling van patronen en templates rondom formulieren en meerstappenformulieren.', source: '@site/docs/voorbeelden/patronen-en-templates/formulieren.mdx', sourceDirName: 'voorbeelden/patronen-en-templates', slug: '/voorbeelden/patronen-en-templates/formulieren', permalink: '/voorbeelden/patronen-en-templates/formulieren', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen-en-templates/formulieren.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Formulieren \xb7 Patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Formulieren', sidebar_position: 2, pagination_label: 'Formulieren', description: 'Verzameling van patronen en templates rondom formulieren en meerstappenformulieren.', slug: '/voorbeelden/patronen-en-templates/formulieren', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek', 'formulieren', 'meerstappenformulieren'] }, sidebar: 'voorbeelden', previous: { title: 'Introductie', permalink: '/voorbeelden/patronen-en-templates' }, next: { title: 'Mijn omgevingen', permalink: '/voorbeelden/patronen-en-templates/mijn-omgevingen' } },
    a = {},
    m = [];
   function p(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'formulieren', children: 'Formulieren' }), '\n', (0, r.jsxs)(n.p, { children: ['We verzamelen patronen en templates rondom formulieren en meerstappenformulieren via ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/formulieren', children: 'GitHub Discussions' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/364', children: 'De overkoepelende GitHub Discussion voor formulieren' }), ' is een goed startpunt om te beginnen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je inzichten uit onderzoek of vraagstukken die je wilt delen? Voeg ze toe aan de ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/formulieren', children: 'GitHub Discussions' }), '. Misschien kan een andere organisatie jouw vraagstuk meenemen in toekomstig onderzoek.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Mis je een patroon of template? Voeg deze zelf toe als GitHub Discussion of ', (0, r.jsx)(n.a, { href: '/project/kernteam', children: 'neem contact op met het kernteam' })] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => i });
   var r = t(75271);
   const o = {},
    s = r.createContext(o);
   function i(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
