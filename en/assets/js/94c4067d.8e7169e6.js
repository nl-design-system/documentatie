'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [38352],
 {
  6141: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => c, contentTitle: () => a, default: () => g, frontMatter: () => o, metadata: () => d, toc: () => h });
   var r = i(52676),
    t = i(24785),
    s = i(10757),
    l = i(47277);
   const o = { title: 'WCAG-succescriterium 1.3.1 Info en relaties', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.1 Info en relaties', pagination_label: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', slug: '1.3.1', keywords: ['WCAG'] },
    a = 'WCAG-succescriterium 1.3.1 Info en relaties',
    d = { id: 'wcag/1.3.1', title: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', source: '@site/docs/wcag/1.3.1.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.1', permalink: '/en/wcag/1.3.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.1.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.1 Info en relaties', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.1 Info en relaties', pagination_label: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', slug: '1.3.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content', permalink: '/en/wcag/1.1.1' }, next: { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', permalink: '/en/wcag/1.3.5' } },
    c = {},
    h = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'wcag-succescriterium-131-info-en-relaties', children: 'WCAG-succescriterium 1.3.1 Info en relaties' }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#info-and-relationships', children: (0, r.jsx)('span', { lang: 'en', children: '1.3.1 Info and Relationships' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl//#info-en-relaties', children: '1.3.1 Info en relaties' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.1 Info and Relationships' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.1 Info and Relationships' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(n.p, { children: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.' }), '\n', (0, r.jsx)(n.p, { children: 'Info en relaties?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Info betekent informatie, tekstueel of visueel. Zoals een kopje boven een paragraaf aangeeft waar de inhoud eronder over gaat.' }), '\n', (0, r.jsx)(n.li, { children: 'Relatie betekent gerelateerde of gekoppelde inhoud. Zoals een label of foutmelding in de HTML gekoppeld moet zijn aan het bijbehorende formulierveld.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat informatie en relaties die zichtbaar zijn, ook beschikbaar zijn voor hulpmiddelen, zoals een screenreader. Dan kunnen hulpmiddelen de informatie ook interpreteren en aan gebruikers overbrengen.\u2019' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Als tekst er uitziet als een kopje, moet dit ook in de HTML een kopje (heading) zijn en geen vet gemaakte tekst. Het kopjesniveau wordt voorgelezen door screenreaders.' }), '\n', (0, r.jsx)(n.li, { children: 'Als informatie in een tabel staat, moet de informatie begrijpbaar zijn voor screenreadersgebruikers, door het gebruik van table headings (th\u2019s). De table heading wordt voorgelezen bij de waarde van een bijbehorende table cell.' }), '\n', (0, r.jsxs)(n.li, { children: ['In een formulier moeten invoervelden en labels aan elkaar gekoppeld zijn met een ', (0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/labels#geef-een-formulierveld-toegankelijke-naam-met-een-label', children: 'for/id-relatie' }), '. Dan wordt het label voorgelezen als het invoerveld de focus krijgt.'] }), '\n', (0, r.jsx)(n.li, { children: 'Staan gegevens in een lijst, gebruik dan ook in de HTML een lijst (ul) en niet alleen streepjes voor de items. Een screenreader leest dan voor dat het een lijst is, hoeveel items er zijn in de lijst en bij welk item de lezer zich op dat moment bevindt.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik je een afbeelding om informatie te geven, zorg er dan voor dat de alternatieve tekst van de afbeelding de juiste informatie bevat, of voeg de informatie vlakbij de afbeelding in tekst toe.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Geef via de juiste HTML of alternatieve teksten betekenis aan structuur, relaties, visuele informatie en opmaak, dan begrijpen gebruikers van hulpmiddelen deze informatie ook.' }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons#de-toegankelijke-naam-van-een-button', children: 'De toegankelijke naam van een button' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Labels: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels#geef-een-formulierveld-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld toegankelijke naam met een label' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Foutmeldingen: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen#schrijf-een-foutmelding-uit-in-tekst', children: 'Schrijf een foutmelding uit in tekst' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Bevestigingspagina: ', (0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/bevestigingspagina/#maak-de-succesmelding-toegankelijk-voor-alle-gebruikers', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ["De rapportage van het 'Onderzoek online meldingen' geeft het belang van goede informatie voor screenreadergebruikers aan: ", (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/utrecht-online-meldingen#blinden-en-slechtzienden-lopen-vast-in-het-proces', children: 'Blinden en slechtzienden lopen vast in het proces' }), '.'] }), '\n', (0, r.jsxs)(n.blockquote, { children: ['\n', (0, r.jsx)(n.p, { children: 'Het is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.' }), '\n'] }), '\n', (0, r.jsx)(s.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'De pagina doorlezen met een screenreader is een goede manier om dit succescriterium te testen. Wordt de informatie die je ziet ook goed voorgelezen.' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer of de HTML semantisch is opgemaakt, zoals bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Kopjes' }), ' (headings): ziet tekst eruit als een kopje, is deze opgemaakt als HTML-kopje (h1, h2, h3 etc)? En andersom: worden kopjes niet gebruikt om tekst alleen groot te maken?'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Lijsten' }), ': is tekst opgemaakt als een genummerde of ongenummerde lijst, is deze in de HTML dan ook opgemaakt als een genummerde (', (0, r.jsx)(n.code, { children: '<ol>' }), ') of ongenummerde lijst (', (0, r.jsx)(n.code, { children: '<ul>' }), ')?'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Tabellen' }), ' voor het weergeven van data: is het duidelijk welke data precies wordt weergegeven? Bijvoorbeeld door het gebruik van table headings (th\u2019s) en scope.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Test voor formuliervelden:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Is het label en de description gekoppeld aan het invoerveld?' }), '\n', (0, r.jsx)(n.li, { children: 'Weet een screenreadergebruiker ook dat een veld verplicht is?' }), '\n', (0, r.jsx)(n.li, { children: 'Worden fout- en succesmeldingen voorgelezen door een screenreader?' }), '\n'] }), '\n', (0, r.jsx)(l.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  10757: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  47277: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var r = i(75271);
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
