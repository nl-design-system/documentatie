'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22116],
 {
  5597: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => l, contentTitle: () => i, default: () => u, frontMatter: () => d, metadata: () => s, toc: () => a });
   var r = o(52676),
    t = o(40139);
   const d = { title: 'Gebruikersonderzoek \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Gebruikersonderzoek', sidebar_position: 2, pagination_label: 'Gebruikersonderzoek', description: 'Informatie over gebruikersonderzoek.', slug: '/voorbeelden/onderzoek', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] },
    i = 'Gebruikersonderzoek',
    s = { id: 'voorbeelden/gebruikersonderzoek', title: 'Gebruikersonderzoek \xb7 Voorbeelden', description: 'Informatie over gebruikersonderzoek.', source: '@site/docs/voorbeelden/gebruikersonderzoek.mdx', sourceDirName: 'voorbeelden', slug: '/voorbeelden/onderzoek', permalink: '/voorbeelden/onderzoek', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/gebruikersonderzoek.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Gebruikersonderzoek \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Gebruikersonderzoek', sidebar_position: 2, pagination_label: 'Gebruikersonderzoek', description: 'Informatie over gebruikersonderzoek.', slug: '/voorbeelden/onderzoek', keywords: ['voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] }, sidebar: 'voorbeelden', previous: { title: 'Index', permalink: '/voorbeelden' }, next: { title: 'Introductie', permalink: '/voorbeelden/patronen-en-templates' } },
    l = {},
    a = [
     { value: 'Onderzoek delen', id: 'onderzoek-delen', level: 2 },
     { value: 'Lopend onderzoek', id: 'lopend-onderzoek', level: 2 },
    ];
   function k(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['In de NL Design System-community wordt volop gebruikersonderzoek gedaan. Door onderzoeksresultaten te delen, kunnen we van elkaar leren en vergelijkbaar onderzoek naast elkaar leggen. Daarom verzamelen en publiceren we onderzoeken op een toegankelijke manier via ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'onderzoek-delen', children: 'Onderzoek delen' }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je onderzoek gedaan? Deel je resultaten en help anderen verder. ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Lees hoe je onderzoek kunt delen' })] }), '\n', (0, r.jsx)(n.h2, { id: 'lopend-onderzoek', children: 'Lopend onderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['Ben je bezig met onderzoek, verwerk je net je inzichten, of heb je een ontwerp waarvan je wilt weten of er al onderzoek naar is gedaan? Dan kun je hiervoor de ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/backlog/discussions', children: 'GitHub Discussions' }), ' gebruiken.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => s, a: () => i });
   var r = o(75271);
   const t = {},
    d = r.createContext(t);
   function i(e) {
    const n = r.useContext(d);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), r.createElement(d.Provider, { value: n }, e.children);
   }
  },
 },
]);
