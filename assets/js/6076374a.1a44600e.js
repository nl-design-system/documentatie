'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70374],
 {
  40822: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => a, contentTitle: () => r, default: () => p, frontMatter: () => s, metadata: () => l, toc: () => c });
   var t = o(52676),
    i = o(87118);
   const s = { title: 'Colofon', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Colofon', pagination_label: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', slug: '/colofon' },
    r = 'Colofon',
    l = { id: 'footer/colofon', title: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', source: '@site/docs/footer/colofon.mdx', sourceDirName: 'footer', slug: '/colofon', permalink: '/colofon', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/footer/colofon.mdx', tags: [], version: 'current', frontMatter: { title: 'Colofon', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Colofon', pagination_label: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', slug: '/colofon' } },
    a = {},
    c = [
     { value: 'Over deze website', id: 'over-deze-website', level: 2 },
     { value: 'Iconen', id: 'iconen', level: 2 },
     { value: 'Open source', id: 'open-source', level: 2 },
    ];
   function d(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'colofon', children: 'Colofon' }), '\n', (0, t.jsx)(n.h2, { id: 'over-deze-website', children: 'Over deze website' }), '\n', (0, t.jsxs)(n.p, { children: ['De website wordt gemaakt en onderhouden door het kernteam en is nog volop in ontwikkeling. Mocht u vragen of opmerkingen hebben dan kunt u contact met ons opnemen op ons centrale e-mailadres: ', (0, t.jsx)('a', { href: 'mailto:kernteam@nldesignsystem.nl', children: (0, t.jsx)(n.a, { href: 'mailto:kernteam@nldesignsystem.nl', children: 'kernteam@nldesignsystem.nl' }) }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'iconen', children: 'Iconen' }), '\n', (0, t.jsxs)(n.p, { children: ['De toptaak iconen op onze homepage zijn gemaakt door ', (0, t.jsx)('a', { href: 'https://www.opengemeenten.nl/producten/iconenset', target: '_top', children: 'OpenGemeenten' }), '. Deze iconenset is vrij te gebruiken en valt onder de CC BY-SA 4.0-licentie.'] }), '\n', (0, t.jsx)(n.h2, { id: 'open-source', children: 'Open source' }), '\n', (0, t.jsx)(n.p, { children: 'De belangrijkste onderdelen van NL Design System zijn open source. We gebruiken voor twee open source licenties:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/open-source/eupl', children: 'EUPL 1.2' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/open-source/cc0', children: 'CC0 1.0 Universeel' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  87118: (e, n, o) => {
   o.d(n, { Z: () => l, a: () => r });
   var t = o(75271);
   const i = {},
    s = t.createContext(i);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
