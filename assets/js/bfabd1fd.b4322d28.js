'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [85229],
 {
  66968: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  86076: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => u, contentTitle: () => d, default: () => g, frontMatter: () => l, metadata: () => m, toc: () => c });
   var i = r(52676),
    t = r(40139),
    o = r(66968);
   function s(e) {
    const n = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'informeer-ingezoomde-gebruikers-over-het-statusbericht', children: 'Informeer ingezoomde gebruikers over het statusbericht' }), '\n', (0, i.jsx)(n.p, { children: 'Als een statusbericht visueel niet in de buurt staat van het element waar de melding bij hoort, kan deze worden gemist door gebruikers die zijn ingezoomd.' }), '\n', (0, i.jsx)(n.p, { children: 'Zet bij elkaar wat bij elkaar hoort. Is er een statusbericht, zet deze dan vlak bij waar de gebruiker op dat moment aan het werk is. Zodat het bericht in beeld is voor ingezoomde gebruikers.' }), '\n', (0, i.jsx)(n.p, { children: 'Zet dynamisch gegenereerde meldingen voor een formulier altijd vlak bij het formulierveld of bijvoorbeeld bovenaan de pagina, afhankelijk van waar en wanneer de foutmelding getoond wordt. Zoals de melding over het totaal aantal ingevoerde karakters voor een tekstveld of de totaalprijs in een berekening.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
   const l = { title: 'Informeer ingezoomde gebruikers \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer ingezoomde gebruikers', pagination_label: 'Informeer ingezoomde gebruikers', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', slug: '/richtlijnen/formulieren/status/zoom', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = void 0,
    m = { id: 'richtlijnen/formulieren/status/zoomed-in/README', title: 'Informeer ingezoomde gebruikers \xb7 Status in een formulier \xb7 Richtlijnen', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', source: '@site/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx', sourceDirName: 'richtlijnen/formulieren/status/2-zoomed-in', slug: '/richtlijnen/formulieren/status/zoom', permalink: '/richtlijnen/formulieren/status/zoom', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Informeer ingezoomde gebruikers \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer ingezoomde gebruikers', pagination_label: 'Informeer ingezoomde gebruikers', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', slug: '/richtlijnen/formulieren/status/zoom', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Informeer screenreaders', permalink: '/richtlijnen/formulieren/status/screenreaders' }, next: { title: 'Geef gebruikers voldoende tijd', permalink: '/richtlijnen/formulieren/status/enough-time' } },
    u = {},
    c = [];
   function h(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h();
   }
  },
  40139: (e, n, r) => {
   r.d(n, { Z: () => a, a: () => s });
   var i = r(75271);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
