'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [20933],
 {
  22996: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => j, frontMatter: () => c, metadata: () => u, toc: () => g });
   var i = t(52676),
    r = t(24785),
    s = t(91410),
    o = t(88435);
   function l(e) {
    const n = { p: 'p', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet, maar maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een formuliercomponent of -optie selecteert of een invoerveld invult met het toetsenbord of met de muis, veroorzaakt dit niet automatisch een contextwijziging.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': een verandering van ', (0, i.jsx)(n.strong, { children: 'context' }), ' is niet hetzelfde als verandering van ', (0, i.jsx)(n.strong, { children: 'content' }), '.\nDirect aanpassen van de zoekresultaten, waarbij de gebruiker op dezelfde pagina blijft, valt niet onder dit succescriterium.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   const c = { title: 'WCAG-succescriterium 3.2.2 Bij input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.2 Bij input', pagination_label: 'WCAG-succescriterium 3.2.2 Bij input', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', slug: '3.2.2', keywords: ['WCAG'] },
    d = 'WCAG-succescriterium 3.2.2 Bij input',
    u = { id: 'wcag/3.2.02', title: 'WCAG-succescriterium 3.2.2 Bij input', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', source: '@site/docs/wcag/3.2.02.mdx', sourceDirName: 'wcag', slug: '/wcag/3.2.2', permalink: '/en/wcag/3.2.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.2.2 Bij input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.2 Bij input', pagination_label: 'WCAG-succescriterium 3.2.2 Bij input', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', slug: '3.2.2', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.2.1 Bij focus', permalink: '/en/wcag/3.2.1' }, next: { title: 'WCAG-succescriterium 3.2.3 Consistente navigatie', permalink: '/en/wcag/3.2.3' } },
    h = {},
    g = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'wcag-succescriterium-322-bij-input', children: 'WCAG-succescriterium 3.2.2 Bij input' }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#on-input', children: (0, i.jsx)('span', { lang: 'en', children: '3.2.2: On Input' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#bij-input', children: '3.2.2 Bij input' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#on-input', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.2 On Input' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.2: On Input' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, i.jsxs)(n.p, { children: ['Formulieren - Buttons:\n', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld' })] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(s.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Bepaal eerst of er interactieve componenten op de pagina zijn, zoals invoervelden, radiobuttons, selects en checkboxes. En dan:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Selecteer/activeer elk formulierelement.' }), '\n', (0, i.jsx)(n.li, { children: 'Indien van toepassing: vul een formulierveld in en verlaat het veld weer (haal de focus weg).' }), '\n', (0, i.jsx)(n.li, { children: 'Test of er geen onverwachte dingen gebeuren zoals het verzenden van het formulier, het verplaatsen van de focus of het openen van een nieuw venster of tab.' }), '\n', (0, i.jsx)(n.li, { children: 'Test dit met de muis en daarna ook met het toetsenbord.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Buttons en links zijn uitgesloten van deze test, hierbij is een verandering van context bij het selecteren/aanklikken verwacht gedrag.'] }), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  91410: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(52676),
    r = t(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88435: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(52676),
    r = t(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var i = t(75271);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
