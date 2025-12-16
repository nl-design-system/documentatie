'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39898],
 {
  548: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => p, frontMatter: () => a, metadata: () => r, toc: () => j });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/when-which/usability/README","title":"Kies voor het meest gebruiksvriendelijke formulierelement \xb7 Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen","description":"Richtlijnen om het meest gebruiksvriendelijke formulierelement te kiezen.","source":"@site/docs/richtlijnen/formulieren/when-which/2-usability/README.mdx","sourceDirName":"richtlijnen/formulieren/when-which/2-usability","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/2-usability/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Kies voor het meest gebruiksvriendelijke formulierelement \xb7 Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Kies gebruiksvriendelijkheid","pagination_label":"Kies het meest gebruiksvriendelijke formulierelement","description":"Richtlijnen om het meest gebruiksvriendelijke formulierelement te kiezen.","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Iedereen kan velden invullen","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen"},"next":{"title":"Introductie WCAG-pagina\'s","permalink":"/wcag"}}');
   var t = i(86070),
    s = i(85248),
    l = i(78734);
   function o(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o();
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'kies-voor-het-meest-gebruiksvriendelijke-formulierelement', children: 'Kies voor het meest gebruiksvriendelijke formulierelement' }) }), '\n', (0, t.jsx)(n.p, { children: 'Deze richtlijn is tevens een opdracht; doe gebruikersonderzoek voor nieuwe formulieren of componenten. Gebruiksvriendelijkheid is afhankelijk van het specifieke doel en de doelgroep van een formulier.' }), '\n', (0, t.jsxs)(n.p, { children: ['Eigen onderzoek is dan altijd belangrijk, maar er is al veel onderzocht.\nOp ', (0, t.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' staan de bevindingen van veel verschillende gebruikersonderzoeken.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Maar er zijn ook gerenommeerde bronnen voor toegankelijkheid en gebruikersonderzoek zoals de ', (0, t.jsx)(n.a, { href: 'https://www.nngroup.com/topic/accessibility/', children: 'Nielsen Norman Group' }), ', ', (0, t.jsx)(n.a, { href: 'https://adrianroselli.com/', children: 'Adrian Roselli' }), ', ', (0, t.jsx)(n.a, { href: 'https://www.a11yproject.com/', children: 'The A11y Project' }), ', ', (0, t.jsx)(n.a, { href: 'https://www.tpgi.com/', children: 'TPGi' }), ', en ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/', children: 'Adam Silver' }), '. Doe in elk geval ook eigen onderzoek op het formulier wat je ontwikkelt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een voorbeeld: wanneer gebruik je een ', (0, t.jsx)(n.code, { children: '<select>' }), ' met opties en wanneer radiobuttons? Of kies je een eigen oplossing? Hierover is (onder andere) het volgende onderzoek gepubliceerd:'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=CUkMCQR4TpY', children: 'Burn your select tags' }), ', video van Alice Bartlett.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://adrianroselli.com/2022/05/under-engineered-multi-selects.html', children: 'Under-Engineered Multi-Selects' }), ' van Adrian Roselli.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037', children: 'UX Design: Drop-Downs in Forms' }), ' van Nick Babich.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.nngroup.com/articles/listbox-dropdown/', children: 'Listboxes vs. Dropdown Lists' }), ' van de Nielsen Norman Group.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://uxdworld.com/2018/05/06/7-rules-of-using-radio-buttons-vs-drop-down-menus/', children: '7 Rules of Using Radio Buttons vs Drop-Down Menus' }), ' van UX World.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Andere bronnen voor gebruikersonderzoek:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://designnotes.blog.gov.uk/', children: 'Design in government' }), ' van GOV.UK.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://baymard.com/blog', children: 'E-Commerce UX Research Articles' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://lawsofux.com/jakobs-law/', children: 'Jakob\u2019s Law' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Studeer en test met hulpmiddelen en met gebruikers. Dat is de boodschap die we hier willen meegeven.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   const a = { title: 'Kies voor het meest gebruiksvriendelijke formulierelement \xb7 Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kies gebruiksvriendelijkheid', pagination_label: 'Kies het meest gebruiksvriendelijke formulierelement', description: 'Richtlijnen om het meest gebruiksvriendelijke formulierelement te kiezen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    m = {},
    j = [...l.RM];
   function k(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(l.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k();
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function l(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
