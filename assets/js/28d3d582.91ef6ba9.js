'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4657],
 {
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => i });
   var a = t(30758);
   const o = {},
    l = a.createContext(o);
   function s(e) {
    const n = a.useContext(l);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), a.createElement(l.Provider, { value: n }, e.children);
   }
  },
  93046: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => i, default: () => f, frontMatter: () => s, metadata: () => a, toc: () => d });
   const a = JSON.parse('{"id":"handboek/component-bijdragen/hall-of-fame-stappenplan","title":"Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Hall of Fame fase van Definition of Done","source":"@site/docs/handboek/component-bijdragen/hall-of-fame-stappenplan.mdx","sourceDirName":"handboek/component-bijdragen","slug":"/handboek/estafettemodel/componenten/hall-of-fame-stappenplan","permalink":"/handboek/estafettemodel/componenten/hall-of-fame-stappenplan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/component-bijdragen/hall-of-fame-stappenplan.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Hall of Fame","sidebar_position":6,"pagination_label":"Hall of Fame","description":"Stappen voor de Hall of Fame fase van Definition of Done","slug":"/handboek/estafettemodel/componenten/hall-of-fame-stappenplan","keywords":["componenten","design system","estafettemodel","definition of done","hall of fame"]},"sidebar":"handboek","previous":{"title":"Candidate","permalink":"/handboek/estafettemodel/componenten/candidate-stappenplan"},"next":{"title":"Huisstijl vastleggen","permalink":"/handboek/huisstijl-vastleggen/overzicht"}}');
   var o = t(86070),
    l = t(85248);
   const s = { title: 'Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Hall of Fame', sidebar_position: 6, pagination_label: 'Hall of Fame', description: 'Stappen voor de Hall of Fame fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/hall-of-fame-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    i = 'Stappenplan: Hall of Fame',
    p = {},
    d = [];
   function r(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'stappenplan-hall-of-fame', children: 'Stappenplan: Hall of Fame' }) }), '\n', (0, o.jsx)(n.p, { children: 'Dit stappenplan is nog in ontwikkeling.' })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
