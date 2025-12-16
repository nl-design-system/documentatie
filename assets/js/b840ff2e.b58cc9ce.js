'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68342],
 {
  9382: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => l, contentTitle: () => i, default: () => u, frontMatter: () => s, metadata: () => r, toc: () => a });
   const r = JSON.parse('{"id":"voorbeelden/gebruikersonderzoek","title":"Gebruikersonderzoek \xb7 Voorbeelden","description":"Informatie over gebruikersonderzoek.","source":"@site/docs/voorbeelden/gebruikersonderzoek.mdx","sourceDirName":"voorbeelden","slug":"/voorbeelden/onderzoek","permalink":"/voorbeelden/onderzoek","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/gebruikersonderzoek.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Gebruikersonderzoek \xb7 Voorbeelden","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Gebruikersonderzoek","sidebar_position":2,"pagination_label":"Gebruikersonderzoek","description":"Informatie over gebruikersonderzoek.","slug":"/voorbeelden/onderzoek","keywords":["voorbeelden","patronen","templates","gebruikersonderzoek"]},"sidebar":"voorbeelden","previous":{"title":"Index","permalink":"/voorbeelden"},"next":{"title":"Introductie","permalink":"/voorbeelden/patronen-en-templates"}}');
   var t = o(86070),
    d = o(85248);
   const s = { title: 'Gebruikersonderzoek \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Gebruikersonderzoek', sidebar_position: 2, pagination_label: 'Gebruikersonderzoek', description: 'Informatie over gebruikersonderzoek.', slug: '/voorbeelden/onderzoek', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] },
    i = 'Gebruikersonderzoek',
    l = {},
    a = [
     { value: 'Onderzoek delen', id: 'onderzoek-delen', level: 2 },
     { value: 'Lopend onderzoek', id: 'lopend-onderzoek', level: 2 },
    ];
   function k(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, d.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }) }), '\n', (0, t.jsxs)(n.p, { children: ['In de NL Design System-community wordt volop gebruikersonderzoek gedaan. Door onderzoeksresultaten te delen, kunnen we van elkaar leren en vergelijkbaar onderzoek naast elkaar leggen. Daarom verzamelen en publiceren we onderzoeken op een toegankelijke manier via ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'onderzoek-delen', children: 'Onderzoek delen' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je onderzoek gedaan? Deel je resultaten en help anderen verder. ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Lees hoe je onderzoek kunt delen' })] }), '\n', (0, t.jsx)(n.h2, { id: 'lopend-onderzoek', children: 'Lopend onderzoek' }), '\n', (0, t.jsxs)(n.p, { children: ['Ben je bezig met onderzoek, verwerk je net je inzichten, of heb je een ontwerp waarvan je wilt weten of er al onderzoek naar is gedaan? Dan kun je hiervoor de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/backlog/discussions', children: 'GitHub Discussions' }), ' gebruiken.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, d.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => s, x: () => i });
   var r = o(30758);
   const t = {},
    d = r.createContext(t);
   function s(e) {
    const n = r.useContext(d);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(d.Provider, { value: n }, e.children);
   }
  },
 },
]);
