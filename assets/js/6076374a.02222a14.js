'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70374],
 {
  38533: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => a, contentTitle: () => l, default: () => f, frontMatter: () => i, metadata: () => r, toc: () => c });
   var t = o(52676),
    s = o(40139);
   const i = { title: 'Colofon', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Colofon', pagination_label: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', slug: '/colofon' },
    l = 'Colofon',
    r = { id: 'footer/colofon', title: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', source: '@site/docs/footer/colofon.mdx', sourceDirName: 'footer', slug: '/colofon', permalink: '/colofon', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/footer/colofon.mdx', tags: [], version: 'current', frontMatter: { title: 'Colofon', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Colofon', pagination_label: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', slug: '/colofon' } },
    a = {},
    c = [
     { value: 'Over deze website', id: 'over-deze-website', level: 2 },
     { value: 'Open source', id: 'open-source', level: 2 },
    ];
   function d(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'colofon', children: 'Colofon' }), '\n', (0, t.jsx)(n.h2, { id: 'over-deze-website', children: 'Over deze website' }), '\n', (0, t.jsxs)(n.p, { children: ['De website wordt gemaakt en onderhouden door het kernteam en is nog volop in ontwikkeling. Mocht u vragen of opmerkingen hebben dan kunt u contact met ons opnemen op ons centrale e-mailadres: ', (0, t.jsx)('a', { href: 'mailto:info@nldesignsystem.nl', children: (0, t.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }) }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'open-source', children: 'Open source' }), '\n', (0, t.jsx)(n.p, { children: 'De belangrijkste onderdelen van NL Design System zijn open source. We gebruiken voor twee open source licenties:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/open-source/eupl', children: 'EUPL 1.2' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/open-source/cc0', children: 'CC0 1.0 Universeel' }) }), '\n'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => r, a: () => l });
   var t = o(75271);
   const s = {},
    i = t.createContext(s);
   function l(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), t.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
