'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26425],
 {
  38753: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => s, default: () => c, frontMatter: () => i, metadata: () => a, toc: () => l });
   const a = JSON.parse('{"id":"handboek/component-bijdragen/candidate-stappenplan","title":"Candidate stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Candidate fase van Definition of Done","source":"@site/docs/handboek/component-bijdragen/candidate-stappenplan.mdx","sourceDirName":"handboek/component-bijdragen","slug":"/handboek/estafettemodel/componenten/candidate-stappenplan","permalink":"/handboek/estafettemodel/componenten/candidate-stappenplan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/component-bijdragen/candidate-stappenplan.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Candidate stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Candidate","sidebar_position":5,"pagination_label":"Candidate","description":"Stappen voor de Candidate fase van Definition of Done","slug":"/handboek/estafettemodel/componenten/candidate-stappenplan","keywords":["componenten","design system","estafettemodel","definition of done","candidate"]},"sidebar":"handboek","previous":{"title":"Kernteam","permalink":"/handboek/estafettemodel/componenten/community-stappenplan/voor-kernteam"},"next":{"title":"Hall of Fame","permalink":"/handboek/estafettemodel/componenten/hall-of-fame-stappenplan"}}');
   var o = t(86070),
    d = t(85248);
   const i = { title: 'Candidate stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Candidate', sidebar_position: 5, pagination_label: 'Candidate', description: 'Stappen voor de Candidate fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/candidate-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'candidate'] },
    s = 'Stappenplan: Candidate',
    p = {},
    l = [];
   function r(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, d.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'stappenplan-candidate', children: 'Stappenplan: Candidate' }) }), '\n', (0, o.jsx)(n.p, { children: 'Dit stappenplan is nog in ontwikkeling.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, d.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => i, x: () => s });
   var a = t(30758);
   const o = {},
    d = a.createContext(o);
   function i(e) {
    const n = a.useContext(d);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), a.createElement(d.Provider, { value: n }, e.children);
   }
  },
 },
]);
