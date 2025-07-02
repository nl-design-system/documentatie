'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [19497],
 {
  59774: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => s, default: () => h, frontMatter: () => o, metadata: () => r, toc: () => d });
   var a = t(52676),
    i = t(40139);
   const o = { title: 'Zelf een thema maken \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zelf een thema maken', sidebar_position: 3, pagination_label: 'Zelf een thema maken', description: 'Informatie voor designers over zelf een kan thema maken.', slug: '/handboek/designer/zelf-thema-maken', keywords: ['index', 'designer', 'meedoen', 'componenten', 'figma', 'thema'] },
    s = 'Zelf een thema maken',
    r = { id: 'handboek/designer/zelf-thema-maken', title: 'Zelf een thema maken \xb7 Designer \xb7 Handboek', description: 'Informatie voor designers over zelf een kan thema maken.', source: '@site/docs/handboek/designer/zelf-thema-maken.mdx', sourceDirName: 'handboek/designer', slug: '/handboek/designer/zelf-thema-maken', permalink: '/handboek/designer/zelf-thema-maken', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/zelf-thema-maken.mdx', tags: [], version: 'current', sidebarPosition: 3, frontMatter: { title: 'Zelf een thema maken \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zelf een thema maken', sidebar_position: 3, pagination_label: 'Zelf een thema maken', description: 'Informatie voor designers over zelf een kan thema maken.', slug: '/handboek/designer/zelf-thema-maken', keywords: ['index', 'designer', 'meedoen', 'componenten', 'figma', 'thema'] }, sidebar: 'handboek', previous: { title: 'Design tokens versiebeheer', permalink: '/handboek/designer/design-tokens-versiebeheer' }, next: { title: 'Zelf componenten maken', permalink: '/handboek/designer/zelf-componenten-maken' } },
    m = {},
    d = [];
   function l(e) {
    const n = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'zelf-een-thema-maken', children: 'Zelf een thema maken' }), '\n', (0, a.jsx)(n.p, { children: 'Deze documentatie is nog in ontwikkeling.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => s });
   var a = t(75271);
   const i = {},
    o = a.createContext(i);
   function s(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
