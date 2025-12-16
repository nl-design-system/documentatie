'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39439],
 {
  46242: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => i, contentTitle: () => l, default: () => c, frontMatter: () => s, metadata: () => o, toc: () => d });
   const o = JSON.parse('{"id":"voorbeelden/patronen-en-templates/overzicht","title":"Introductie patronen en templates \xb7 Voorbeelden","description":"Verzameling van patronen en templates.","source":"@site/docs/voorbeelden/patronen-en-templates/overzicht.mdx","sourceDirName":"voorbeelden/patronen-en-templates","slug":"/voorbeelden/patronen-en-templates","permalink":"/voorbeelden/patronen-en-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen-en-templates/overzicht.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introductie patronen en templates \xb7 Voorbeelden","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie patronen en templates","sidebar_position":0,"pagination_label":"Introductie","description":"Verzameling van patronen en templates.","slug":"/voorbeelden/patronen-en-templates","keywords":["voorbeelden","patronen","templates","gebruikersonderzoek"]},"sidebar":"voorbeelden","previous":{"title":"Gebruikersonderzoek","permalink":"/voorbeelden/onderzoek"},"next":{"title":"Introductie","permalink":"/voorbeelden/patronen-en-templates"}}');
   var r = t(86070),
    a = t(85248);
   const s = { title: 'Introductie patronen en templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie patronen en templates', sidebar_position: 0, pagination_label: 'Introductie', description: 'Verzameling van patronen en templates.', slug: '/voorbeelden/patronen-en-templates', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] },
    l = 'Patronen en templates',
    i = {},
    d = [];
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'patronen-en-templates', children: 'Patronen en templates' }) }), '\n', (0, r.jsx)(n.p, { children: 'Patronen en templates bieden een raamwerk om specifieke gebruikersproblemen op een consistente en doordachte manier op te lossen.' }), '\n', (0, r.jsx)(n.p, { children: 'Momenteel verzamelen we patronen en templates voor:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/voorbeelden/patronen-en-templates/formulieren/', children: 'Formulieren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/voorbeelden/patronen-en-templates/mijn-omgevingen/', children: 'Mijn omgevingen' }) }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je idee\xebn of relevant onderzoek voor aanvullende patronen of templates? Voeg deze zelf toe als GitHub Discussion of ', (0, r.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' })] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => l });
   var o = t(30758);
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
