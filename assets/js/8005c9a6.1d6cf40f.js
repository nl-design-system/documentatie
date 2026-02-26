'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12543],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  37513(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => a, default: () => j, frontMatter: () => l, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"richtlijnen/stijl/icons/README","title":"Introductie richtlijnen voor iconen","description":"Iconen worden gebruikt om extra betekenis te geven. Ze brengen boodschappen in \xe9\xe9n oogopslag over en vestigen aandacht op belangrijke informatie. Ook kunnen ze hulp bieden aan iemand met een cognitieve beperking of als iemand moeite heeft met taal.","source":"@site/docs/richtlijnen/stijl/icons/README.mdx","sourceDirName":"richtlijnen/stijl/icons","slug":"/richtlijnen/stijl/iconen/","permalink":"/richtlijnen/stijl/iconen/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/icons/README.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Introductie richtlijnen voor iconen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie iconen","sidebar_position":4,"pagination_label":"Introductie richtlijnen voor iconen","description":"Iconen worden gebruikt om extra betekenis te geven. Ze brengen boodschappen in \xe9\xe9n oogopslag over en vestigen aandacht op belangrijke informatie. Ook kunnen ze hulp bieden aan iemand met een cognitieve beperking of als iemand moeite heeft met taal.","slug":"/richtlijnen/stijl/iconen/","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Reserveer ruimte tussen interactieve elementen","permalink":"/richtlijnen/stijl/ruimte/interactieve-elementen"},"next":{"title":"Introductie richtlijnen voor iconen","permalink":"/richtlijnen/stijl/iconen/"}}');
   var o = i(86070),
    r = i(18439),
    s = i(78734);
   const l = { title: 'Introductie richtlijnen voor iconen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie iconen', sidebar_position: 4, pagination_label: 'Introductie richtlijnen voor iconen', description: 'Iconen worden gebruikt om extra betekenis te geven. Ze brengen boodschappen in \xe9\xe9n oogopslag over en vestigen aandacht op belangrijke informatie. Ook kunnen ze hulp bieden aan iemand met een cognitieve beperking of als iemand moeite heeft met taal.', slug: '/richtlijnen/stijl/iconen/', keywords: ['iconen'] },
    a = 'Richtlijnen NL Design System voor iconen',
    c = {},
    d = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Deel je gebruikersonderzoek', id: 'deel-je-gebruikersonderzoek', level: 2 }, ...s.RM];
   function h(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-iconen', children: 'Richtlijnen NL Design System voor iconen' }) }), '\n', (0, o.jsx)(n.p, { children: 'Iconen worden gebruikt om extra betekenis te geven. Ze brengen boodschappen in \xe9\xe9n oogopslag over en vestigen aandacht op belangrijke informatie. Ook kunnen ze hulp bieden aan iemand met een cognitieve beperking of als iemand moeite heeft met taal.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op!' }), ' Tekst zou altijd voorrang moeten krijgen ten opzichte van iconen. Gebruik iconen alleen waar extra duidelijkheid gewenst is.'] }), '\n', (0, o.jsx)(n.p, { children: 'Binnen een Design System is het verstandig om iconen consistent toe te passen. Dat gaat gemakkelijk wanneer je gebruik maakt van een iconenset. Welke iconenset je gebruikt voor jouw organisatie staat je helemaal vrij.' }), '\n', (0, o.jsxs)(n.p, { children: ['Vanuit NL Design System gebruiken we twee iconensets. De iconen in deze sets typeren we als ', (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/functionele-iconen/', children: 'Functionele iconen' }), ' en ', (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/toptaak-iconen/', children: 'Toptaak iconen' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, o.jsx)(i, { excludeDocIDs: ['richtlijnen/stijl/icons/README'] }), '\n', (0, o.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Deze documentatie is onder andere gebaseerd op de ', (0, o.jsx)(n.a, { href: 'https://bbc.github.io/gel/foundations/iconography/', children: 'documentatie rondom iconen van BBC GEL' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography - Bonnie Kate Wolf' }), '.', (0, o.jsx)(n.br, {}), '\n', 'Uitgebreid artikel over het ontwerpen en toepassen van iconen binnen een Design System.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://css-tricks.com/icon-fonts-vs-svg/', children: 'Inline SVG vs Icon Fonts - CSS-tricks' }), '.', (0, o.jsx)(n.br, {}), '\n', 'Artikel over de verschillen tussen \u2018Inline SVG\u2019 en \u2018Icon Fonts\u2019 worden beschreven.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.viget.com/articles/are-hollow-icons-really-harder-to-recognize-a-research-study/', children: 'Are Hollow Icons Really Harder to Recognize Than Solid Icons? - Curt Arledge' }), '.', (0, o.jsx)(n.br, {}), '\n', 'Artikel over een onderzoek naar het gebruik van \u2018outline\u2019 iconen ten opzicht van \u2018solid\u2019 iconen.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://m3.material.io/styles/icons/overview', children: 'Icons - Google Material' }), '.', (0, o.jsx)(n.br, {}), '\n', 'Documentatie over het gebruik van iconen binnen het Material Design System van Google.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.sarasoueidan.com/blog/accessible-icon-buttons/', children: 'Accessible icon buttons - Sara Soueidan' }), '.', (0, o.jsx)(n.br, {}), '\n', 'Artikel over het toegankelijk opzetten van buttons die alleen een icoon tonen. Er komen verschillende methodes aan bod.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://heydonworks.com/article/aria-label-is-a-xenophobe/', children: 'Aria-label is a xenophobe - Heydon Heydon Pickering' }), '.', (0, o.jsx)(n.br, {}), '\n', 'Artikel over het gebruik van Aria-label en de problemen die hierbij kunnen optreden bij het vertalen van een webpagina.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://tabler-icons.io/', children: 'Tabler icons - Codecalm' }), '.', (0, o.jsx)(n.br, {}), '\n', 'De iconenset die we bij NL Design System gebruiken voor de functionele iconen van het Start-thema.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.gemeenteniconen.nl', children: 'Gemeenteniconen.nl' }), '.', (0, o.jsx)(n.br, {}), '\n', 'De iconenset die we bij NL Design System gebruiken voor het Start-thema.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'deel-je-gebruikersonderzoek', children: 'Deel je gebruikersonderzoek' }), '\n', (0, o.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over het gebruik van iconen. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, o.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, o.jsx)(s.Ay, {})] })
    );
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => r });
   var t = i(86070),
    o = i(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
