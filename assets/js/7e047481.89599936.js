'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46608],
 {
  55400: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var s = i(52676),
    t = i(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  66284: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => c, default: () => h, frontMatter: () => a, metadata: () => d, toc: () => u });
   var s = i(52676),
    t = i(24785),
    r = i(55400);
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'maak-de-succesmelding-toegankelijk-voor-alle-gebruikers', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '\n', (0, s.jsxs)(n.p, { children: ['Net zoals bij de foutmeldingen is het belangrijk dat de gebruiker de succesmelding ziet en/of hoort. Dit kan met dezelfde technieken die zijn beschrijven bij de richtlijnen voor ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen', children: 'foutmeldingen' }), ' zoals:'] }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Screenreaderfeedback en focusmanagement na submit.' }), '\n', (0, s.jsxs)(n.li, { children: ['Update van de ', (0, s.jsx)(n.code, { children: '<title>' }), ' in het ', (0, s.jsx)(n.code, { children: '<head>' }), '-element.'] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'De succesmelding toegankelijk te maken voor alle gebruikers is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/wcag/2.4.2', children: '2.4.2 Paginatitel' }), ' (niveau A).'] }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
   const a = { title: 'Maak de succesmelding toegankelijk voor alle gebruikers \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke succesmelding', pagination_label: 'Toegankelijke succesmelding', description: 'Richtlijnen voor succesmelding die toegankelijk is voor alle gebruikers.', slug: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding', keywords: ['labels', 'formulier', 'design', 'code'] },
    c = void 0,
    d = { id: 'richtlijnen/formulieren/confirmation/accessibility/README', title: 'Maak de succesmelding toegankelijk voor alle gebruikers \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor succesmelding die toegankelijk is voor alle gebruikers.', source: '@site/docs/richtlijnen/formulieren/confirmation/2-accessibility/README.mdx', sourceDirName: 'richtlijnen/formulieren/confirmation/2-accessibility', slug: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding', permalink: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/2-accessibility/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Maak de succesmelding toegankelijk voor alle gebruikers \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke succesmelding', pagination_label: 'Toegankelijke succesmelding', description: 'Richtlijnen voor succesmelding die toegankelijk is voor alle gebruikers.', slug: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Bevestigingspagina', permalink: '/richtlijnen/formulieren/bevestigingspagina/' }, next: { title: 'Benoem vervolgstappen', permalink: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen' } },
    g = {},
    u = [];
   function m(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(o, {}), '\n', (0, s.jsx)(r.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m();
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var s = i(75271);
   const t = {},
    r = s.createContext(t);
   function l(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
