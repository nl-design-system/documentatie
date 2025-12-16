'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [62333],
 {
  41421: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => a, contentTitle: () => r, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c });
   const t = JSON.parse('{"id":"footer/colofon","title":"Colofon","description":"Colofon - opsomming van de manier waarop deze website tot stand is gekomen","source":"@site/docs/footer/colofon.mdx","sourceDirName":"footer","slug":"/colofon","permalink":"/colofon","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/footer/colofon.mdx","tags":[],"version":"current","frontMatter":{"title":"Colofon","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Colofon","pagination_label":"Colofon","description":"Colofon - opsomming van de manier waarop deze website tot stand is gekomen","slug":"/colofon"}}');
   var s = o(86070),
    i = o(85248);
   const l = { title: 'Colofon', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Colofon', pagination_label: 'Colofon', description: 'Colofon - opsomming van de manier waarop deze website tot stand is gekomen', slug: '/colofon' },
    r = 'Colofon',
    a = {},
    c = [
     { value: 'Over deze website', id: 'over-deze-website', level: 2 },
     { value: 'Open source', id: 'open-source', level: 2 },
    ];
   function d(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'colofon', children: 'Colofon' }) }), '\n', (0, s.jsx)(n.h2, { id: 'over-deze-website', children: 'Over deze website' }), '\n', (0, s.jsxs)(n.p, { children: ['De website wordt gemaakt en onderhouden door het kernteam en is nog volop in ontwikkeling. Mocht u vragen of opmerkingen hebben dan kunt u contact met ons opnemen op ons centrale e-mailadres: ', (0, s.jsx)('a', { href: 'mailto:info@nldesignsystem.nl', children: (0, s.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }) }), '.'] }), '\n', (0, s.jsx)(n.h2, { id: 'open-source', children: 'Open source' }), '\n', (0, s.jsx)(n.p, { children: 'De belangrijkste onderdelen van NL Design System zijn open source. We gebruiken voor twee open source licenties:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/open-source/eupl/', children: 'EUPL 1.2' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/open-source/cc0/', children: 'CC0 1.0 Universeel' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => l, x: () => r });
   var t = o(30758);
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
