'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12262],
 {
  50295(e, n, t) {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => s, default: () => r, frontMatter: () => l, metadata: () => o, toc: () => f });
   const o = JSON.parse('{"id":"handboek/definition-of-done/hall-of-fame-stappenplan","title":"Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Hall of Fame fase van Definition of Done","source":"@site/docs/handboek/definition-of-done/hall-of-fame-stappenplan.mdx","sourceDirName":"handboek/definition-of-done","slug":"/handboek/estafettemodel/componenten/hall-of-fame","permalink":"/handboek/estafettemodel/componenten/hall-of-fame","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/hall-of-fame-stappenplan.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Hall of Fame","sidebar_position":6,"pagination_label":"Hall of Fame","description":"Stappen voor de Hall of Fame fase van Definition of Done","slug":"/handboek/estafettemodel/componenten/hall-of-fame","keywords":["componenten","design system","estafettemodel","definition of done","hall of fame"]},"sidebar":"handboek","previous":{"title":"5. Publicatiefase","permalink":"/handboek/estafettemodel/componenten/candidate/publicatiefase"},"next":{"title":"Huisstijl vastleggen","permalink":"/handboek/huisstijl-vastleggen/overzicht"}}');
   var a = t(86070),
    i = t(85248);
   const l = { title: 'Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Hall of Fame', sidebar_position: 6, pagination_label: 'Hall of Fame', description: 'Stappen voor de Hall of Fame fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/hall-of-fame', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    s = 'Stappenplan: Hall of Fame',
    d = {},
    f = [];
   function p(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'stappenplan-hall-of-fame', children: 'Stappenplan: Hall of Fame' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dit stappenplan is nog in ontwikkeling.' })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  85248(e, n, t) {
   t.d(n, { R: () => l, x: () => s });
   var o = t(30758);
   const a = {},
    i = o.createContext(a);
   function l(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
