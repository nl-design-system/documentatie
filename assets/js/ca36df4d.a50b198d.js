'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [60917],
 {
  46167: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => r, default: () => d, frontMatter: () => o, metadata: () => a, toc: () => l });
   var s = t(52676),
    i = t(24785);
   const o = {},
    r = '@nl-design-system-unstable/documentation',
    a = { id: 'CHANGELOG', title: '@nl-design-system-unstable/documentation', description: '1.0.0', source: '@site/docs/CHANGELOG.md', sourceDirName: '.', slug: '/CHANGELOG', permalink: '/CHANGELOG', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/CHANGELOG.md', tags: [], version: 'current', frontMatter: {}, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 4.1.3 Statusberichten', permalink: '/wcag/4.1.3' } },
    c = {},
    l = [
     { value: '1.0.0', id: '100', level: 2 },
     { value: 'Major Changes', id: 'major-changes', level: 3 },
    ];
   function u(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'nl-design-system-unstabledocumentation', children: '@nl-design-system-unstable/documentation' }), '\n', (0, s.jsx)(n.h2, { id: '100', children: '1.0.0' }), '\n', (0, s.jsx)(n.h3, { id: 'major-changes', children: 'Major Changes' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: '56665b8: We starten nu met een changelog bijhouden voor de NL Design System documentatie. Laat ons weten of dit handig is!' }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => r });
   var s = t(75271);
   const i = {},
    o = s.createContext(i);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
