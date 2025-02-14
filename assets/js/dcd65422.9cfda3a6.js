'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84391],
 {
  53021: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => r, default: () => m, frontMatter: () => d, metadata: () => s, toc: () => l });
   var o = t(52676),
    i = t(40139),
    a = t(97233);
   const d = { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] },
    r = 'Bestaand component inzetten',
    s = { id: 'handboek/developer/component-inzetten', title: 'Component inzetten \xb7 Developer \xb7 Handboek', description: 'Bestaand component inzetten', source: '@site/docs/handboek/developer/05-component-inzetten.mdx', sourceDirName: 'handboek/developer', slug: '/handboek/developer/component-inzetten', permalink: '/handboek/developer/component-inzetten', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-component-inzetten.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Component inzetten \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component inzetten', pagination_label: 'Component inzetten', description: 'Bestaand component inzetten', keywords: ['developer', 'bijdragen', 'component gebruiken'] }, sidebar: 'handboek', previous: { title: 'Component kiezen', permalink: '/handboek/developer/samenwerken-aan-componenten' }, next: { title: 'Component uitbreiden', permalink: '/handboek/developer/component-uitbreiden' } },
    p = {},
    l = [];
   function c(e) {
    const n = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'bestaand-component-inzetten', children: 'Bestaand component inzetten' }), '\n', (0, o.jsx)(n.p, { children: 'We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:' }), '\n', (0, o.jsx)(a.Y, { videoId: '7P6YUT3pmi8' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => r });
   var o = t(4814),
    i = t(95110),
    a = t.n(i),
    d = t(52676);
   const r = (e) => {
    let { videoId: n, className: t, ...i } = e;
    return (0, d.jsx)(a(), { url: `https://youtube.com/watch?v=${n}`, className: (0, o.Z)('video-player', t), width: '100%', height: '100%', controls: !0, ...i, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
