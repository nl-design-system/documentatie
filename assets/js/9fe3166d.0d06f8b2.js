'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [43694],
 {
  64141: (t, e, s) => {
   s.r(e), s.d(e, { assets: () => h, contentTitle: () => o, default: () => d, frontMatter: () => i, metadata: () => r, toc: () => m });
   var a = s(52676),
    n = s(40139);
   const i = { title: 'Start-thema \xb7 Huisstijl vastleggen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Start-thema', sidebar_position: 2, pagination_label: 'Start-thema', description: 'Informatie over het Start-thema en de basis-tokens.', slug: '/handboek/huisstijl/themas/start-thema', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'start-thema'] },
    o = 'Start-thema',
    r = { id: 'handboek/huisstijl-vastleggen/themas/start-thema', title: 'Start-thema \xb7 Huisstijl vastleggen \xb7 Handboek', description: 'Informatie over het Start-thema en de basis-tokens.', source: '@site/docs/handboek/huisstijl-vastleggen/themas/start-thema.mdx', sourceDirName: 'handboek/huisstijl-vastleggen/themas', slug: '/handboek/huisstijl/themas/start-thema', permalink: '/handboek/huisstijl/themas/start-thema', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/themas/start-thema.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Start-thema \xb7 Huisstijl vastleggen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Start-thema', sidebar_position: 2, pagination_label: 'Start-thema', description: 'Informatie over het Start-thema en de basis-tokens.', slug: '/handboek/huisstijl/themas/start-thema', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'start-thema'] }, sidebar: 'handboek', previous: { title: "Thema's", permalink: '/handboek/huisstijl/themas' }, next: { title: 'Voorbeeld-thema', permalink: '/handboek/huisstijl/themas/voorbeeld-thema' } },
    h = {},
    m = [];
   function l(t) {
    const e = { h1: 'h1', p: 'p', ...(0, n.a)(), ...t.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(e.h1, { id: 'start-thema', children: 'Start-thema' }), '\n', (0, a.jsx)(e.p, { children: 'Deze documentatie is nog in ontwikkeling.' })] });
   }
   function d(t = {}) {
    const { wrapper: e } = { ...(0, n.a)(), ...t.components };
    return e ? (0, a.jsx)(e, { ...t, children: (0, a.jsx)(l, { ...t }) }) : l(t);
   }
  },
  40139: (t, e, s) => {
   s.d(e, { Z: () => r, a: () => o });
   var a = s(75271);
   const n = {},
    i = a.createContext(n);
   function o(t) {
    const e = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof t ? t(e) : { ...e, ...t };
     },
     [e, t],
    );
   }
   function r(t) {
    let e;
    return (e = t.disableParentContext ? ('function' == typeof t.components ? t.components(n) : t.components || n) : o(t.components)), a.createElement(i.Provider, { value: e }, t.children);
   }
  },
 },
]);
