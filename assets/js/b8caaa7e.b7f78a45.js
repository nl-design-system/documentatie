'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [81115],
 {
  52446: (e, t, s) => {
   s.r(t), s.d(t, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => a, metadata: () => h, toc: () => l });
   var n = s(52676),
    i = s(40139);
   const a = { title: "Thema's \xb7 Huisstijl vastleggen \xb7 Handboek", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Thema's", sidebar_position: 1, pagination_label: "Thema's", description: "Introductie van thema's binnen NL Design System.", slug: '/handboek/huisstijl/themas', keywords: ['componenten', 'design system', 'design tokens', "thema's"] },
    o = "Thema's",
    h = { id: 'handboek/huisstijl-vastleggen/themas/themas', title: "Thema's \xb7 Huisstijl vastleggen \xb7 Handboek", description: "Introductie van thema's binnen NL Design System.", source: '@site/docs/handboek/huisstijl-vastleggen/themas/themas.mdx', sourceDirName: 'handboek/huisstijl-vastleggen/themas', slug: '/handboek/huisstijl/themas', permalink: '/handboek/huisstijl/themas', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/themas/themas.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: "Thema's \xb7 Huisstijl vastleggen \xb7 Handboek", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Thema's", sidebar_position: 1, pagination_label: "Thema's", description: "Introductie van thema's binnen NL Design System.", slug: '/handboek/huisstijl/themas', keywords: ['componenten', 'design system', 'design tokens', "thema's"] }, sidebar: 'handboek', previous: { title: 'Design tokens - Introductie', permalink: '/handboek/huisstijl/design-tokens' }, next: { title: 'Start-thema', permalink: '/handboek/huisstijl/themas/start-thema' } },
    d = {},
    l = [];
   function r(e) {
    const t = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.h1, { id: 'themas', children: "Thema's" }), '\n', (0, n.jsx)(t.p, { children: 'Deze documentatie is nog in ontwikkeling.' })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(r, { ...e }) }) : r(e);
   }
  },
  40139: (e, t, s) => {
   s.d(t, { Z: () => h, a: () => o });
   var n = s(75271);
   const i = {},
    a = n.createContext(i);
   function o(e) {
    const t = n.useContext(a);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function h(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), n.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
