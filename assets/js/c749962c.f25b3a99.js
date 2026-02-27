'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [27044],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => m });
   var o = t(30758);
   const i = {},
    a = o.createContext(i);
   function s(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function m(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(a.Provider, { value: n }, e.children));
   }
  },
  52996(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => m, default: () => p, frontMatter: () => s, metadata: () => o, toc: () => l }));
   const o = JSON.parse('{"id":"handboek/definition-of-done/community-stappenplan/community-stappenplan","title":"Community stappenplan","description":"Stappen voor de Community fase van Definition of Done","source":"@site/docs/handboek/definition-of-done/community-stappenplan/community-stappenplan.mdx","sourceDirName":"handboek/definition-of-done/community-stappenplan","slug":"/handboek/estafettemodel/componenten/community","permalink":"/handboek/estafettemodel/componenten/community","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/community-stappenplan/community-stappenplan.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Community stappenplan","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Community","sidebar_position":3,"pagination_label":"Community","description":"Stappen voor de Community fase van Definition of Done","slug":"/handboek/estafettemodel/componenten/community","keywords":["componenten","design system","estafettemodel","definition of done","help wanted"]},"sidebar":"handboek","previous":{"title":"Help Wanted","permalink":"/handboek/estafettemodel/componenten/help-wanted"},"next":{"title":"Organisaties","permalink":"/handboek/estafettemodel/componenten/community/voor-organisaties"}}');
   var i = t(86070),
    a = t(18439);
   const s = { title: 'Community stappenplan', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Community', sidebar_position: 3, pagination_label: 'Community', description: 'Stappen voor de Community fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/community', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'help wanted'] },
    m = 'Stappenplan: Community',
    d = {},
    l = [{ value: 'Heb je een vraag?', id: 'heb-je-een-vraag', level: 2 }];
   function r(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', ol: 'ol', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'stappenplan-community', children: 'Stappenplan: Community' }) }), '\n', (0, i.jsx)(n.p, { children: 'Voor de Community status zijn er twee stappenplannen:' }), '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'voor-organisaties/', children: 'Het stappenplan voor organisaties' }), ' die een component willen bijdragen.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'voor-kernteam/', children: 'Het stappenplan voor het kernteam' }), ' om een component de Candidate status te geven.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Er kunnen meerdere community implementaties zijn die volledig voldoen, deze staan allemaal op de ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects?query=is%3Aopen+Community+Componenten', children: 'Community Componenten borden op GitHub' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'heb-je-een-vraag', children: 'Heb je een vraag?' }), '\n', (0, i.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en stel je vraag op ', (0, i.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, i.jsx)(n.code, { children: '#nl-design-system' }), ' of neem contact op met ', (0, i.jsx)(n.a, { href: '/project/kernteam/', children: 'het kernteam' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
