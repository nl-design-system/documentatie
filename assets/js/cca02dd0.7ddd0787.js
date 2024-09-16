'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [45638],
 {
  23680: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  56942: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => p, frontMatter: () => s, metadata: () => g, toc: () => m });
   var t = i(52676),
    r = i(24785);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'zorg-dat-de-gebruiker-contact-op-kan-nemen-bij-vragen', children: 'Zorg dat de gebruiker contact op kan nemen bij vragen' }), '\n', (0, t.jsx)(n.p, { children: 'Zorg dat de gebruiker contact op kan nemen bij vragen. Dit kan in de bevestiging, maar ook via een contactmogelijkheid op de website. Biedt dan niet alleen een telefoonnummer aan als wijze van contact opnemen.' }), '\n', (0, t.jsx)(n.p, { children: 'Telefonisch contact is voor sommige gebruikers niet mogelijk of niet handig. Denk aan gebruikers die doof zijn, stotteren of een vorm van autisme hebben. Of aan gebruikers die heel verlegen zijn, of de Nederlandse taal niet zo goed spreken.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voeg een alternatief toe, bijvoorbeeld in de vorm van een e-mailadres of chatfunctionaliteit. De blogpost ', (0, t.jsx)(n.a, { href: '/blog/meerdere-manieren-contact', children: 'Ik wil je wat vragen, maar ik heb geen WhatsApp!' }), ' gaat hier uitgebreid op in.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
   var c = i(23680);
   const s = { title: 'Zorg dat de gebruiker contact op kan nemen bij vragen | Bevestigingspagina van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Contact opnemen', pagination_label: 'Contact opnemen', description: 'Richtlijnen voor contact opnement bij vragen.', slug: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen', keywords: ['labels', 'formulier', 'design', 'code'] },
    l = void 0,
    g = { id: 'richtlijnen/formulieren/confirmation/contact/README', title: 'Zorg dat de gebruiker contact op kan nemen bij vragen | Bevestigingspagina van een formulier | Richtlijnen', description: 'Richtlijnen voor contact opnement bij vragen.', source: '@site/docs/richtlijnen/formulieren/confirmation/4-contact/README.mdx', sourceDirName: 'richtlijnen/formulieren/confirmation/4-contact', slug: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen', permalink: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/4-contact/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg dat de gebruiker contact op kan nemen bij vragen | Bevestigingspagina van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Contact opnemen', pagination_label: 'Contact opnemen', description: 'Richtlijnen voor contact opnement bij vragen.', slug: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Benoem vervolgstappen', permalink: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen' }, next: { title: 'Duidelijke succesmelding', permalink: '/richtlijnen/formulieren/bevestigingspagina/succesmelding' } },
    d = {},
    m = [];
   function u(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(c.ZP, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u();
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => c, a: () => a });
   var t = i(75271);
   const r = {},
    o = t.createContext(r);
   function a(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
