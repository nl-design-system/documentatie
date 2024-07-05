'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [60917],
 {
  46167: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => r, toc: () => d });
   var s = t(52676),
    o = t(24785);
   const i = {},
    a = '@nl-design-system-unstable/documentation',
    r = { id: 'CHANGELOG', title: '@nl-design-system-unstable/documentation', description: '1.0.0', source: '@site/docs/CHANGELOG.md', sourceDirName: '.', slug: '/CHANGELOG', permalink: '/en/CHANGELOG', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/CHANGELOG.md', tags: [], version: 'current', frontMatter: {} },
    c = {},
    d = [
     { value: '1.0.0', id: '100', level: 2 },
     { value: 'Major Changes', id: 'major-changes', level: 3 },
    ];
   function l(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'nl-design-system-unstabledocumentation', children: '@nl-design-system-unstable/documentation' }), '\n', (0, s.jsx)(n.h2, { id: '100', children: '1.0.0' }), '\n', (0, s.jsx)(n.h3, { id: 'major-changes', children: 'Major Changes' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: '56665b8: We starten nu met een changelog bijhouden voor de NL Design System documentatie. Laat ons weten of dit handig is!' }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var s = t(75271);
   const o = {},
    i = s.createContext(o);
   function a(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), s.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
