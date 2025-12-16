'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37894],
 {
  6440: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => p, default: () => d, frontMatter: () => s, metadata: () => o, toc: () => r });
   const o = JSON.parse('{"id":"handboek/component-bijdragen/community-stappenplan/community-stappenplan","title":"Community stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Community fase van Definition of Done","source":"@site/docs/handboek/component-bijdragen/community-stappenplan/community-stappenplan.mdx","sourceDirName":"handboek/component-bijdragen/community-stappenplan","slug":"/handboek/estafettemodel/componenten/community-stappenplan","permalink":"/handboek/estafettemodel/componenten/community-stappenplan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/component-bijdragen/community-stappenplan/community-stappenplan.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Community stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Community","sidebar_position":3,"pagination_label":"Community","description":"Stappen voor de Community fase van Definition of Done","slug":"/handboek/estafettemodel/componenten/community-stappenplan","keywords":["componenten","design system","estafettemodel","definition of done","help wanted"]},"sidebar":"handboek","previous":{"title":"Help Wanted","permalink":"/handboek/estafettemodel/componenten/help-wanted-stappenplan"},"next":{"title":"Organisaties","permalink":"/handboek/estafettemodel/componenten/community-stappenplan/voor-organisaties"}}');
   var a = t(86070),
    i = t(85248);
   const s = { title: 'Community stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Community', sidebar_position: 3, pagination_label: 'Community', description: 'Stappen voor de Community fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/community-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'help wanted'] },
    p = 'Stappenplan: Community',
    m = {},
    r = [{ value: 'Heb je een vraag?', id: 'heb-je-een-vraag', level: 2 }];
   function l(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', ol: 'ol', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'stappenplan-community', children: 'Stappenplan: Community' }) }), '\n', (0, a.jsx)(n.p, { children: 'Voor de Community status zijn er twee stappenplannen:' }), '\n', (0, a.jsxs)(n.ol, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: 'voor-organisaties/', children: 'Het stappenplan voor organisaties' }), ' die een component willen bijdragen.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: 'voor-kernteam/', children: 'Het stappenplan voor het kernteam' }), ' om een component de Candidate status te geven.'] }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Er kunnen meerdere community implementaties zijn die volledig voldoen, deze staan allemaal op de ', (0, a.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects?query=is%3Aopen+Community+Componenten', children: 'Community Componenten borden op GitHub' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'heb-je-een-vraag', children: 'Heb je een vraag?' }), '\n', (0, a.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en stel je vraag via het ', (0, a.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: '#nl-design-system Slack kanaal' }), ' van CodeForNL of ', (0, a.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => p });
   var o = t(30758);
   const a = {},
    i = o.createContext(a);
   function s(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function p(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
