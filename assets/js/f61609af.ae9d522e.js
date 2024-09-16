'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8932],
 {
  76557: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => s, default: () => c, frontMatter: () => i, metadata: () => r, toc: () => m });
   var o = t(52676),
    a = t(24785);
   const i = { title: 'Community stappenplan voor organisaties', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Organisaties', sidebar_position: 4, pagination_label: 'Organisaties', description: 'Stappen van organisaties voor de Community fase van Definition of Done', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'help wanted'] },
    s = 'Stappenplan: Community voor organisaties',
    r = { id: 'handboek/component-bijdragen/community-stappenplan-voor-organisaties', title: 'Community stappenplan voor organisaties', description: 'Stappen van organisaties voor de Community fase van Definition of Done', source: '@site/docs/handboek/component-bijdragen/community-stappenplan-voor-organisaties.mdx', sourceDirName: 'handboek/component-bijdragen', slug: '/handboek/component-bijdragen/community-stappenplan-voor-organisaties', permalink: '/handboek/component-bijdragen/community-stappenplan-voor-organisaties', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/component-bijdragen/community-stappenplan-voor-organisaties.mdx', tags: [], version: 'current', sidebarPosition: 4, frontMatter: { title: 'Community stappenplan voor organisaties', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Organisaties', sidebar_position: 4, pagination_label: 'Organisaties', description: 'Stappen van organisaties voor de Community fase van Definition of Done', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'help wanted'] }, sidebar: 'handboek', previous: { title: 'Community', permalink: '/handboek/component-bijdragen/community-stappenplan' }, next: { title: 'Candidate', permalink: '/handboek/component-bijdragen/candidate-stappenplan' } },
    p = {},
    m = [];
   function d(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.h1, { id: 'stappenplan-community-voor-organisaties', children: 'Stappenplan: Community voor organisaties' }), '\n', (0, o.jsxs)(n.p, { children: ['Als je als organisatie een component wilt bijdragen aan NL Design System kun je dit stappenplan volgen. Heb je nog geen eigen ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects?query=is%3Aopen+Community+Componenten', children: 'Community Componenten bord op GitHub' }), '? Vraag dan aan het kernteam om er een aan te maken.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en stel je vraag via het ', (0, o.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: '#nl-design-system Slack kanaal' }), ' van CodeForNL of ', (0, o.jsx)(n.a, { href: '/project/kernteam', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => s });
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
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
