'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [39810],
 {
  16613: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => i, default: () => u, frontMatter: () => d, metadata: () => a, toc: () => c });
   var o = t(52676),
    s = t(24785);
   const d = { title: 'Bedankt voor je aanmelding!', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Design Open Dag', description: 'Je wordt nu op de hoogte gehouden van Design Open Dagen.', slug: '/community/design-open-dag/bedankt', unlisted: !0, keywords: ['nl design system'] },
    i = 'Bedankt!',
    a = { id: 'community/events/design-open-dag-success', title: 'Bedankt voor je aanmelding!', description: 'Je wordt nu op de hoogte gehouden van Design Open Dagen.', source: '@site/docs/community/events/design-open-dag-success.mdx', sourceDirName: 'community/events', slug: '/community/design-open-dag/bedankt', permalink: '/en/community/design-open-dag/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-dag-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding!', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Design Open Dag', description: 'Je wordt nu op de hoogte gehouden van Design Open Dagen.', slug: '/community/design-open-dag/bedankt', unlisted: !0, keywords: ['nl design system'] } },
    r = {},
    c = [];
   function g(e) {
    const n = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, o.jsx)(n.p, { children: 'Je wordt nu op de hoogte gehouden van Design Open Dagen.' }), '\n', (0, o.jsx)(n.p, { children: 'Binnenkort voegen we je toe aan de calendar invites voor deze samenwerkdagen, zodat je in Outlook per dag kunt aangeven of je komt of niet.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => i });
   var o = t(75271);
   const s = {},
    d = o.createContext(s);
   function i(e) {
    const n = o.useContext(d);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), o.createElement(d.Provider, { value: n }, e.children);
   }
  },
 },
]);
