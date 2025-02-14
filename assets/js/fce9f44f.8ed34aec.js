'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5211],
 {
  66968: (e, n, i) => {
   i.d(n, { ZP: () => d });
   var t = i(52676),
    l = i(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52720: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => c, default: () => m, frontMatter: () => a, metadata: () => p, toc: () => g });
   var t = i(52676),
    l = i(40139),
    s = i(66968),
    d = i(97233);
   function r(e) {
    const n = { code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'legends-bij-een-fieldset', children: 'Legends bij een fieldset' }), '\n', (0, t.jsxs)(n.p, { children: ['Een ', (0, t.jsx)(n.code, { children: '<legend>' }), ' dient als de naam van de groep. Screenreaders lezen deze legend voor bij elk invoerveld in de fieldset (groep), zodat deze koppeling ook duidelijk is zonder de visuele informatie.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.code, { children: '<legend>Uw adresgegevens</legend>' }) }), '\n', (0, t.jsx)(n.p, { children: 'Maak de inhoud van de legend kort en omschrijvend.' }), '\n', (0, t.jsx)(n.p, { children: 'In onderstaande video leest VoiceOver in Safari drie verschillende fieldsets voor, een groep met keuzerondjes (radio buttons) en een bezorg- en factuuradres. De legend wordt steeds bij het formulierveld voorgelezen.\nVoiceOver leest de legend twee keer voor bij het eerste veld van een groep, dit is een bug van VoiceOver.' }), '\n', (0, t.jsx)(d.Y, { videoId: 'WMa7LToyZVc' }), '\n', (0, t.jsx)(n.h2, { id: 'koppen-in-een-legend', children: 'Koppen in een legend' }), '\n', (0, t.jsxs)(n.p, { children: ['Een fieldset kan ook een kopje bevatten. Zorg er wel voor dat het niveau van deze kopjes klopt in de ', (0, t.jsx)('a', { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: 'hi\xebrarchische koppenstructuur' }), ' van de hele pagina.'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend><h3>Bezorgadres<h3></legend>\n    <label for="shipping-street">Straat en huisnummer</label>\n    <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1">\n    <label for="shipping-postal-code">Postcode</label>\n    <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code"></div>\n    <label for="shipping-city">Stad</label>\n    <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2">\n</fieldset>\n\n<fieldset>\n  <legend><h3>Factuuradres<h3></legend>\n    <label for="billing-street">Straat en huisnummer</label>\n    <input type="text" name="shipping-street" id="billing-street" autocomplete="billing address-line1">\n    <label for="billing-postal-code">Postcode</label>\n    <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code">\n    <label for="billing-city">Stad</label>\n    <input type="text" name="billing-city" id="billing-city" autocomplete=" billingaddress-level2">\n</fieldset>\n' }) })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
   const a = { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] },
    c = void 0,
    p = { id: 'richtlijnen/formulieren/fieldset/legend/README', title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', description: 'Richtlijnen voor legends in een fieldset in een formulier.', source: '@site/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx', sourceDirName: 'richtlijnen/formulieren/fieldset/1-legend', slug: '/richtlijnen/formulieren/fieldsets/legends', permalink: '/richtlijnen/formulieren/fieldsets/legends', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/1-legend/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Legends \xb7 Fieldsets \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Legends in een fieldset', pagination_label: 'Legends in een fieldset', description: 'Richtlijnen voor legends in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/legends', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Fieldsets', permalink: '/richtlijnen/formulieren/fieldsets/' }, next: { title: 'Descriptions in een fieldset', permalink: '/richtlijnen/formulieren/fieldsets/descriptions' } },
    h = {},
    g = [];
   function u(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(o, {}), '\n', (0, t.jsx)(s.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u();
   }
  },
  97233: (e, n, i) => {
   i.d(n, { Y: () => r });
   var t = i(4814),
    l = i(95110),
    s = i.n(l),
    d = i(52676);
   const r = (e) => {
    let { videoId: n, className: i, ...l } = e;
    return (0, d.jsx)(s(), { url: `https://youtube.com/watch?v=${n}`, className: (0, t.Z)('video-player', i), width: '100%', height: '100%', controls: !0, ...l, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
