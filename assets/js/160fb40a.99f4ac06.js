'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [49944],
 {
  69558: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => i, contentTitle: () => s, default: () => c, frontMatter: () => a, metadata: () => l, toc: () => p });
   var o = t(52676),
    r = t(40139);
   const a = { title: 'Introductie patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie patronen en templates', sidebar_position: 0, pagination_label: 'Introductie', description: 'Verzameling van patronen en templates.', slug: '/voorbeelden/patronen-en-templates', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] },
    s = 'Patronen en templates',
    l = { id: 'voorbeelden/patronen-en-templates/overzicht', title: 'Introductie patronen en templates \xb7 Voorbeelden', description: 'Verzameling van patronen en templates.', source: '@site/docs/voorbeelden/patronen-en-templates/overzicht.mdx', sourceDirName: 'voorbeelden/patronen-en-templates', slug: '/voorbeelden/patronen-en-templates', permalink: '/voorbeelden/patronen-en-templates', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen-en-templates/overzicht.mdx', tags: [], version: 'current', sidebarPosition: 0, frontMatter: { title: 'Introductie patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie patronen en templates', sidebar_position: 0, pagination_label: 'Introductie', description: 'Verzameling van patronen en templates.', slug: '/voorbeelden/patronen-en-templates', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] }, sidebar: 'voorbeelden', previous: { title: 'Gebruikersonderzoek', permalink: '/voorbeelden/onderzoek' }, next: { title: 'Introductie', permalink: '/voorbeelden/patronen-en-templates' } },
    i = {},
    p = [];
   function d(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'patronen-en-templates', children: 'Patronen en templates' }), '\n', (0, o.jsx)(n.p, { children: 'Patronen en templates bieden een raamwerk om specifieke gebruikersproblemen op een consistente en doordachte manier op te lossen.' }), '\n', (0, o.jsx)(n.p, { children: 'Momenteel verzamelen we patronen en templates voor:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/voorbeelden/patronen-en-templates/formulieren/', children: 'Formulieren' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/voorbeelden/patronen-en-templates/mijn-omgevingen/', children: 'Mijn omgevingen' }) }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Heb je idee\xebn of relevant onderzoek voor aanvullende patronen of templates? Voeg deze zelf toe als GitHub Discussion of ', (0, o.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' })] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var o = t(75271);
   const r = {},
    a = o.createContext(r);
   function s(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
