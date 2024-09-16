'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [56596],
 {
  41497: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => d, default: () => u, frontMatter: () => s, metadata: () => i, toc: () => r });
   var o = n(52676),
    a = n(24785);
   const s = { title: 'Bedankt voor je aanmelding!', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Je wordt nu op de hoogte gehouden van estafettemodeldagen.', slug: '/community/estafettemodeldag/bedankt', unlisted: !0, keywords: ['nl design system'] },
    d = 'Bedankt!',
    i = { id: 'community/events/estafettemodeldag-success', title: 'Bedankt voor je aanmelding!', description: 'Je wordt nu op de hoogte gehouden van estafettemodeldagen.', source: '@site/docs/community/events/estafettemodeldag-success.mdx', sourceDirName: 'community/events', slug: '/community/estafettemodeldag/bedankt', permalink: '/en/community/estafettemodeldag/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding!', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Je wordt nu op de hoogte gehouden van estafettemodeldagen.', slug: '/community/estafettemodeldag/bedankt', unlisted: !0, keywords: ['nl design system'] } },
    l = {},
    r = [];
   function c(e) {
    const t = { h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(t.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, o.jsx)(t.p, { children: 'Je wordt nu op de hoogte gehouden van estafettemodeldagen.' }), '\n', (0, o.jsx)(t.p, { children: 'Binnenkort voegen we je toe aan de calendar invites voor deze samenwerkdagen, zodat je in Outlook per dag kunt aangeven of je komt of niet.' })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => i, a: () => d });
   var o = n(75271);
   const a = {},
    s = o.createContext(a);
   function d(e) {
    const t = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function i(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : d(e.components)), o.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
