'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16110],
 {
  21468: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => m, frontMatter: () => l, metadata: () => u, toc: () => g });
   var i = t(52676),
    r = t(24785),
    s = t(10757),
    o = t(47277);
   function c(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   const l = { title: 'WCAG-succescriterium 3.2.1 Bij focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.1 Bij focus', pagination_label: 'WCAG-succescriterium 3.2.1 Bij focus', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', slug: '3.2.1', keywords: ['WCAG'] },
    d = 'WCAG-succescriterium 3.2.1 Bij focus',
    u = { id: 'wcag/3.2.01', title: 'WCAG-succescriterium 3.2.1 Bij focus', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', source: '@site/docs/wcag/3.2.01.mdx', sourceDirName: 'wcag', slug: '/wcag/3.2.1', permalink: '/wcag/3.2.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.2.1 Bij focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.1 Bij focus', pagination_label: 'WCAG-succescriterium 3.2.1 Bij focus', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', slug: '3.2.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', permalink: '/wcag/3.1.2' }, next: { title: 'WCAG-succescriterium 3.2.2 Bij input', permalink: '/wcag/3.2.2' } },
    h = {},
    g = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'wcag-succescriterium-321-bij-focus', children: 'WCAG-succescriterium 3.2.1 Bij focus' }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#on-focus', children: (0, i.jsx)('span', { lang: 'en', children: '3.2.1 On focus' }) })] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#bij-focus', children: '3.2.2 Bij focus' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#on-focus', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.1 On Focus' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.1: On Input' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Als er onverwacht een dialog opent met bijvoorbeeld een advertentie of oproep om je aan te melden voor de nieuwsbrief, valt dit niet onder dit succescriterium. Dit omdat het openen niet het gevolg is van een actie van de gebruiker, maar door de website zelf wordt gestart.'] }), '\n', (0, i.jsx)(n.p, { children: 'Ook een onverwachte actie wanneer een gebruiker met de muis over een element gaat, valt niet onder dit succescriterium. Bijvoorbeeld door het openen van een modal als een gebruiker alleen over een button hovert en het geen focus geeft.' }), '\n', (0, i.jsx)(n.p, { children: "Onverwacht gedrag door de website zelf of muisbeweging valt strict genomen niet onder dit WCAG-succescriterium. We raden wel aan om ook in die gevallen onverwacht gedrag te vermijden, in lijn met de intentie van WCAG-richtlijn 3.2 Voorspelbaar: 'Maak het uiterlijk en de bediening van webpagina's voorspelbaar'." }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(s.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Bepaal eerst of er interactieve elementen op de pagina zijn, zoals formuliervelden, knoppen of links. En dan:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Tab met het toetsenbord door elk interactief element, geef ook aanwezige radiobuttons en select-opties toetsenbordfocus.' }), '\n', (0, i.jsx)(n.li, { children: 'Klik met de muis interactieve elementen aan, ook aanwezige select-opties.' }), '\n', (0, i.jsx)(n.li, { children: 'Test of er geen onverwachte dingen gebeuren zoals het verzenden van het formulier, het verplaatsen van de focus of het openen van een nieuw venster of tab.' }), '\n'] }), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  10757: (e, n, t) => {
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
  47277: (e, n, t) => {
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
   t.d(n, { Z: () => c, a: () => o });
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
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
