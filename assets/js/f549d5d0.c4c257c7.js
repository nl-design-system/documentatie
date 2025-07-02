'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [58688],
 {
  4661: (e, t, o) => {
   o.r(t), o.d(t, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => i, metadata: () => r, toc: () => d });
   var n = o(52676),
    s = o(40139);
   const i = { title: 'Voorbeeld-thema \xb7 Huisstijl vastleggen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Voorbeeld-thema', sidebar_position: 2, pagination_label: 'Voorbeeld-thema', description: 'Informatie over het Voorbeeld-thema.', slug: '/handboek/huisstijl/themas/voorbeeld-thema', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'voorbeeld-thema'] },
    a = 'Voorbeeld-thema',
    r = { id: 'handboek/huisstijl-vastleggen/themas/voorbeeld-thema', title: 'Voorbeeld-thema \xb7 Huisstijl vastleggen \xb7 Handboek', description: 'Informatie over het Voorbeeld-thema.', source: '@site/docs/handboek/huisstijl-vastleggen/themas/voorbeeld-thema.mdx', sourceDirName: 'handboek/huisstijl-vastleggen/themas', slug: '/handboek/huisstijl/themas/voorbeeld-thema', permalink: '/handboek/huisstijl/themas/voorbeeld-thema', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/themas/voorbeeld-thema.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Voorbeeld-thema \xb7 Huisstijl vastleggen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Voorbeeld-thema', sidebar_position: 2, pagination_label: 'Voorbeeld-thema', description: 'Informatie over het Voorbeeld-thema.', slug: '/handboek/huisstijl/themas/voorbeeld-thema', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'voorbeeld-thema'] }, sidebar: 'handboek', previous: { title: 'Start-thema', permalink: '/handboek/huisstijl/themas/start-thema' }, next: { title: 'Design tokens - Introductie', permalink: '/handboek/huisstijl/design-tokens' } },
    l = {},
    d = [];
   function h(e) {
    const t = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.h1, { id: 'voorbeeld-thema', children: 'Voorbeeld-thema' }), '\n', (0, n.jsx)(t.p, { children: 'Deze documentatie is nog in ontwikkeling.' })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(h, { ...e }) }) : h(e);
   }
  },
  40139: (e, t, o) => {
   o.d(t, { Z: () => r, a: () => a });
   var n = o(75271);
   const s = {},
    i = n.createContext(s);
   function a(e) {
    const t = n.useContext(i);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), n.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
