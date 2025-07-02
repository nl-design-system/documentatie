'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98707],
 {
  44133: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => s, default: () => d, frontMatter: () => i, metadata: () => p, toc: () => r });
   var o = t(52676),
    a = t(40139);
   const i = { title: 'Community stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Community', sidebar_position: 3, pagination_label: 'Community', description: 'Stappen voor de Community fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/community-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'help wanted'] },
    s = 'Stappenplan: Community',
    p = { id: 'handboek/component-bijdragen/community-stappenplan/community-stappenplan', title: 'Community stappenplan \xb7 Component bijdragen \xb7 Handboek', description: 'Stappen voor de Community fase van Definition of Done', source: '@site/docs/handboek/component-bijdragen/community-stappenplan/community-stappenplan.mdx', sourceDirName: 'handboek/component-bijdragen/community-stappenplan', slug: '/handboek/estafettemodel/componenten/community-stappenplan', permalink: '/handboek/estafettemodel/componenten/community-stappenplan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/component-bijdragen/community-stappenplan/community-stappenplan.mdx', tags: [], version: 'current', sidebarPosition: 3, frontMatter: { title: 'Community stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Community', sidebar_position: 3, pagination_label: 'Community', description: 'Stappen voor de Community fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/community-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'help wanted'] }, sidebar: 'handboek', previous: { title: 'Help Wanted', permalink: '/handboek/estafettemodel/componenten/help-wanted-stappenplan' }, next: { title: 'Organisaties', permalink: '/handboek/estafettemodel/componenten/community-stappenplan/voor-organisaties' } },
    m = {},
    r = [{ value: 'Heb je een vraag?', id: 'heb-je-een-vraag', level: 2 }];
   function l(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', ol: 'ol', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.h1, { id: 'stappenplan-community', children: 'Stappenplan: Community' }), '\n', (0, o.jsx)(n.p, { children: 'Voor de Community status zijn er twee stappenplannen:' }), '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'voor-organisaties', children: 'Het stappenplan voor organisaties' }), ' die een component willen bijdragen.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'voor-kernteam', children: 'Het stappenplan voor het kernteam' }), ' om een component de Candidate status te geven.'] }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Er kunnen meerdere community implementaties zijn die volledig voldoen, deze staan allemaal op de ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects?query=is%3Aopen+Community+Componenten', children: 'Community Componenten borden op GitHub' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'heb-je-een-vraag', children: 'Heb je een vraag?' }), '\n', (0, o.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en stel je vraag via het ', (0, o.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: '#nl-design-system Slack kanaal' }), ' van CodeForNL of ', (0, o.jsx)(n.a, { href: '/project/kernteam', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => p, a: () => s });
   var o = t(75271);
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
