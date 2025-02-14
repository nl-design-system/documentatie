'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [38934],
 {
  6386: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => a, contentTitle: () => d, default: () => u, frontMatter: () => i, metadata: () => s, toc: () => l });
   var r = o(52676),
    t = o(40139);
   const i = { title: 'Gebruikersonderzoek \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Gebruikersonderzoek', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Gebruikersonderzoek', keywords: ['index', 'onderzoek'] },
    d = 'Gebruikersonderzoek',
    s = { id: 'voorbeelden/onderzoek/README', title: 'Gebruikersonderzoek \xb7 Voorbeelden', description: 'Gebruikersonderzoek', source: '@site/docs/voorbeelden/onderzoek/README.md', sourceDirName: 'voorbeelden/onderzoek', slug: '/voorbeelden/onderzoek/', permalink: '/voorbeelden/onderzoek/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/onderzoek/README.md', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Gebruikersonderzoek \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Gebruikersonderzoek', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Gebruikersonderzoek', keywords: ['index', 'onderzoek'] }, sidebar: 'voorbeelden', previous: { title: 'Overzicht', permalink: '/voorbeelden/' }, next: { title: 'Patronen', permalink: '/voorbeelden/patronen' } },
    a = {},
    l = [{ value: 'Lopend onderzoek', id: 'lopend-onderzoek', level: 2 }];
   function k(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(n.p, { children: 'In de community wordt veel gebruikersonderzoek gedaan. Omdat je veel van elkaars onderzoeksresultaten kan leren en onderzoeken over hetzelfde onderwerp kan vergelijken is de NL Design System community begonnen met het verzamelen en publiceren op een toegankelijke manier.' }), '\n', (0, r.jsxs)(n.p, { children: ['De onderzoeken die al gedeeld zijn kan je vinden op ', (0, r.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl', children: 'gebruikersonderzoeken.nl' })] }), '\n', (0, r.jsxs)(n.p, { children: ['Heb jij ook gebruikersonderzoek gedaan en wil je de uitkomsten delen? Dat kan via een issue op ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/gebruikersonderzoeken', children: 'gebruikersonderzoeken op GitHub' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'lopend-onderzoek', children: 'Lopend onderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['Ga je onderzoek doen, ben je bezig van het uitwerken van resultaten of heb je een design waarvan je je afvraagt of iemand daar al onderzoek naar heeft gedaan? Dan kun je hiervoor de ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/backlog/discussions', children: 'discussies op GitHub' }), ' gebruiken.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => s, a: () => d });
   var r = o(75271);
   const t = {},
    i = r.createContext(t);
   function d(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : d(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
