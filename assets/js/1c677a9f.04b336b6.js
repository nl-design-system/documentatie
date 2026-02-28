'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [83479],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => s });
   var t = i(30758);
   const a = {},
    o = t.createContext(a);
   function r(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  87271(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => s, default: () => c, frontMatter: () => r, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/pagina-opbouw","title":"Opbouw van een pagina","description":"Opbouw van een pagina op de NL Design System website.","source":"@site/docs/project/schrijfwijzer/pagina-opbouw.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/pagina-opbouw","permalink":"/project/schrijfwijzer/pagina-opbouw","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/pagina-opbouw.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Opbouw van een pagina","hide_title":true,"sidebar_label":"Opbouw van een pagina","sidebar_position":2,"pagination_label":"Opbouw van een pagina","description":"Opbouw van een pagina op de NL Design System website.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Schrijfwijzer","permalink":"/project/schrijfwijzer/"},"next":{"title":"Doelen","permalink":"/project/schrijfwijzer/doelen"}}');
   var a = i(86070),
    o = i(18439);
   i(46447);
   const r = { title: 'Opbouw van een pagina', hide_title: !0, sidebar_label: 'Opbouw van een pagina', sidebar_position: 2, pagination_label: 'Opbouw van een pagina', description: 'Opbouw van een pagina op de NL Design System website.', keywords: ['kernteam'] },
    s = 'Opbouw van een pagina',
    d = {},
    l = [
     { value: 'Paginatitel en hoofdkop', id: 'paginatitel-en-hoofdkop', level: 2 },
     { value: 'Introductie-alinea', id: 'introductie-alinea', level: 2 },
     { value: 'Gebruik tussenkoppen', id: 'gebruik-tussenkoppen', level: 2 },
     { value: 'URL', id: 'url', level: 2 },
     { value: 'Metadata', id: 'metadata', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'opbouw-van-een-pagina', children: 'Opbouw van een pagina' }) }), '\n', (0, a.jsx)(n.h2, { id: 'paginatitel-en-hoofdkop', children: 'Paginatitel en hoofdkop' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Gebruik dezelfde tekst voor de paginatitel en de hoofdkop.' }), '\n', (0, a.jsx)(n.li, { children: 'Gebruik een paginatitel die uniek is in de website.' }), '\n', (0, a.jsx)(n.li, { children: 'Gebruik een titel die ook als zoekresultaat duidelijk is.' }), '\n', (0, a.jsx)(n.li, { children: 'Gebruik de belangrijkste zoekterm in de paginatitel, als daar geen bezwaar voor is.' }), '\n'] }), '\n', '\n', (0, a.jsx)(n.h2, { id: 'introductie-alinea', children: 'Introductie-alinea' }), '\n', (0, a.jsx)(n.p, { children: 'Begin elke pagina met een introductie-alinea met een aantrekkelijke tekst die concreet zegt waar de pagina over gaat. Deel gelijk de essentie, maak er geen teaser van.' }), '\n', '\n', (0, a.jsx)(n.h2, { id: 'gebruik-tussenkoppen', children: 'Gebruik tussenkoppen' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Maak tussenkoppen die goed overzicht geven van de inhoud van de pagina.' }), '\n', (0, a.jsx)(n.li, { children: 'Zorg ervoor dat de tussenkop kort, duidelijk en omschrijvend is.' }), '\n', (0, a.jsx)(n.li, { children: 'Gebruik tussenkopjes met het juiste kopniveau.' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Lees meer in de ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'richtlijnen over koppen' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'url', children: 'URL' }), '\n', (0, a.jsx)(n.p, { children: 'Gebruik consistente woorden in de URL en in de paginatitel.' }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.a, { href: 'https://www.w3.org/Provider/Style/URI', children: 'Coole URLs veranderen niet' }), '. Gebruik daarom een korte "slug" met alleen de belangrijkste woorden. Als het onwaarschijnlijk is dat een woord uit de paginatitel verdwijnt, dan is de kans groot dat het lukt om de URL in de toekomst gelijk te houden.'] }), '\n', (0, a.jsx)(n.p, { children: 'De slug is het gedeelte van de URL dat specifiek voor deze pagina komt, die komt na de domeinnaam en het path. De "path" is vergelijkbaar met de Breadcrumb Navigation, en die bestaat uit de "slugs" van die bovenliggende pagina\'s uit de hierarchie.' }), '\n', (0, a.jsxs)(n.p, { children: ['Een pagina kan extra goed gevonden worden, als het zoekwoord in de URL en in de paginatitel staat. Houdt hier rekening mee met kiezen van het woord. Als een woord zowel een Nederlandstalige als Engelstalige zoekterm kan zijn, dan verbetert dit de vindbaarheid. Bijvoorbeeld: ', (0, a.jsx)(n.code, { children: 'cms' }), ', ', (0, a.jsx)(n.code, { children: 'prototypes' }), ' of ', (0, a.jsx)(n.code, { children: 'mailinglist' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'metadata', children: 'Metadata' }), '\n', (0, a.jsx)(n.p, { children: 'Voeg naast de paginatitel een beschrijving toe, die getoond kan worden in zoekresultaten. Gebruik maximaal 160 karakters voor de beschrijving.' }), '\n'] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
