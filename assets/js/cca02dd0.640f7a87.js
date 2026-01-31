'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [70120],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => s });
   var t = i(30758);
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
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  29577(e, n, i) {
   (i.r(n), i.d(n, { assets: () => u, contentTitle: () => m, default: () => j, frontMatter: () => g, metadata: () => t, toc: () => p }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/contact/README","title":"Zorg dat de gebruiker contact op kan nemen bij vragen \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor contact opnement bij vragen.","source":"@site/docs/richtlijnen/formulieren/confirmation/4-contact/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation/4-contact","slug":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen","permalink":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/4-contact/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg dat de gebruiker contact op kan nemen bij vragen \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Contact opnemen","pagination_label":"Contact opnemen","description":"Richtlijnen voor contact opnement bij vragen.","slug":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Benoem vervolgstappen","permalink":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen"},"next":{"title":"Duidelijke succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/succesmelding"}}');
   var r = i(86070),
    o = i(18439),
    a = i(78734);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zorg-dat-de-gebruiker-contact-op-kan-nemen-bij-vragen', children: 'Zorg dat de gebruiker contact op kan nemen bij vragen' }) }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat de gebruiker contact op kan nemen bij vragen. Dit kan in de bevestiging, maar ook via een contactmogelijkheid op de website. Biedt dan niet alleen een telefoonnummer aan als wijze van contact opnemen.' }), '\n', (0, r.jsx)(n.p, { children: 'Telefonisch contact is voor sommige gebruikers niet mogelijk of niet handig. Denk aan gebruikers die doof zijn, stotteren of een vorm van autisme hebben. Of aan gebruikers die heel verlegen zijn, of de Nederlandse taal niet zo goed spreken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voeg een alternatief toe, bijvoorbeeld in de vorm van een e-mailadres of chatfunctionaliteit. De blogpost ', (0, r.jsx)(n.a, { href: '/blog/meerdere-manieren-contact/', children: 'Ik wil je wat vragen, maar ik heb geen WhatsApp!' }), ' gaat hier uitgebreid op in.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   function l(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   const g = { title: 'Zorg dat de gebruiker contact op kan nemen bij vragen \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Contact opnemen', pagination_label: 'Contact opnemen', description: 'Richtlijnen voor contact opnement bij vragen.', slug: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    u = {},
    p = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function h(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(a.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h();
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => o });
   var t = i(86070),
    r = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
