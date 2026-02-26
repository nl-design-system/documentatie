'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39898],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const s = {},
    t = r.createContext(s);
   function l(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => o, RM: () => t });
   var r = i(86070),
    s = i(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  91763(e, n, i) {
   (i.r(n), i.d(n, { assets: () => p, contentTitle: () => j, default: () => f, frontMatter: () => m, metadata: () => r, toc: () => g }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/when-which/usability/README","title":"Kies voor het meest gebruiksvriendelijke formulierelement","description":"Richtlijnen om het meest gebruiksvriendelijke formulierelement te kiezen.","source":"@site/docs/richtlijnen/formulieren/when-which/2-usability/README.mdx","sourceDirName":"richtlijnen/formulieren/when-which/2-usability","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/2-usability/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Kies voor het meest gebruiksvriendelijke formulierelement","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Kies gebruiksvriendelijkheid","pagination_label":"Kies het meest gebruiksvriendelijke formulierelement","description":"Richtlijnen om het meest gebruiksvriendelijke formulierelement te kiezen.","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Iedereen kan velden invullen","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen"},"next":{"title":"Introductie WCAG-pagina\'s","permalink":"/wcag"}}');
   var s = i(86070),
    t = i(18439),
    l = i(78734);
   function o(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o();
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'kies-voor-het-meest-gebruiksvriendelijke-formulierelement', children: 'Kies voor het meest gebruiksvriendelijke formulierelement' }) }), '\n', (0, s.jsx)(n.p, { children: 'Deze richtlijn is tevens een opdracht; doe gebruikersonderzoek voor nieuwe formulieren of componenten. Gebruiksvriendelijkheid is afhankelijk van het specifieke doel en de doelgroep van een formulier.' }), '\n', (0, s.jsxs)(n.p, { children: ['Eigen onderzoek is dan altijd belangrijk, maar er is al veel onderzocht.\nOp ', (0, s.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' staan de bevindingen van veel verschillende gebruikersonderzoeken.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Maar er zijn ook gerenommeerde bronnen voor toegankelijkheid en gebruikersonderzoek zoals de ', (0, s.jsx)(n.a, { href: 'https://www.nngroup.com/topic/accessibility/', children: 'Nielsen Norman Group' }), ', ', (0, s.jsx)(n.a, { href: 'https://adrianroselli.com/', children: 'Adrian Roselli' }), ', ', (0, s.jsx)(n.a, { href: 'https://www.a11yproject.com/', children: 'The A11y Project' }), ', ', (0, s.jsx)(n.a, { href: 'https://www.tpgi.com/', children: 'TPGi' }), ', en ', (0, s.jsx)(n.a, { href: 'https://adamsilver.io/blog/', children: 'Adam Silver' }), '. Doe in elk geval ook eigen onderzoek op het formulier wat je ontwikkelt.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Een voorbeeld: wanneer gebruik je een ', (0, s.jsx)(n.code, { children: '<select>' }), ' met opties en wanneer radiobuttons? Of kies je een eigen oplossing? Hierover is (onder andere) het volgende onderzoek gepubliceerd:'] }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=CUkMCQR4TpY', children: 'Burn your select tags' }), ', video van Alice Bartlett.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://adrianroselli.com/2022/05/under-engineered-multi-selects.html', children: 'Under-Engineered Multi-Selects' }), ' van Adrian Roselli.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037', children: 'UX Design: Drop-Downs in Forms' }), ' van Nick Babich.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.nngroup.com/articles/listbox-dropdown/', children: 'Listboxes vs. Dropdown Lists' }), ' van de Nielsen Norman Group.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://uxdworld.com/2018/05/06/7-rules-of-using-radio-buttons-vs-drop-down-menus/', children: '7 Rules of Using Radio Buttons vs Drop-Down Menus' }), ' van UX World.'] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Andere bronnen voor gebruikersonderzoek:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://designnotes.blog.gov.uk/', children: 'Design in government' }), ' van GOV.UK.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://baymard.com/blog', children: 'E-Commerce UX Research Articles' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://lawsofux.com/jakobs-law/', children: 'Jakob\u2019s Law' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Studeer en test met hulpmiddelen en met gebruikers. Dat is de boodschap die we hier willen meegeven.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of Instructies' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   const m = { title: 'Kies voor het meest gebruiksvriendelijke formulierelement', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kies gebruiksvriendelijkheid', pagination_label: 'Kies het meest gebruiksvriendelijke formulierelement', description: 'Richtlijnen om het meest gebruiksvriendelijke formulierelement te kiezen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    p = {},
    g = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function k(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a, {}), '\n', (0, s.jsx)(c, {}), '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(l.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k();
   }
  },
 },
]);
