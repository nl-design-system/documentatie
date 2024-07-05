'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90281],
 {
  92291: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => s, metadata: () => o, toc: () => g });
   var i = t(52676),
    r = t(24785),
    l = t(10757),
    a = t(47277);
   const s = { title: 'WCAG-succescriterium 2.4.2 Paginatitel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.2 Paginatitel', pagination_label: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", slug: '2.4.2', keywords: ['WCAG'] },
    d = 'WCAG-succescriterium 2.4.2 Paginatitel',
    o = { id: 'wcag/2.4.2', title: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", source: '@site/docs/wcag/2.4.2.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.2', permalink: '/wcag/2.4.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.2.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.2 Paginatitel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.2 Paginatitel', pagination_label: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", slug: '2.4.2', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: '2.4.13 Focusweergave', permalink: '/wcag/2.4.13' }, next: { title: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', permalink: '/wcag/2.4.4' } },
    c = {},
    g = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: de titels van alle pagina&#39;s zijn hetzelfde', id: 'fout-de-titels-van-alle-paginas-zijn-hetzelfde', level: 3 },
     { value: 'Fout: de tekst van een titel wordt niet vertaald door een plugin', id: 'fout-de-tekst-van-een-titel-wordt-niet-vertaald-door-een-plugin', level: 3 },
    ];
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'wcag-succescriterium-242-paginatitel', children: 'WCAG-succescriterium 2.4.2 Paginatitel' }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#page-titled', children: (0, i.jsx)('span', { lang: 'en', children: '2.4.2 Page Titled' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#paginatitel', children: '2.4.2 Paginatitel' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#page-titled', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.2 Page Titled' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.2 Page Titled' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsxs)(n.p, { children: ["Webpagina's hebben titels die het onderwerp of doel beschrijven.\nDeze titels staan in de ", (0, i.jsx)(n.code, { children: '<head>' }), ' sectie van de HTML-code, in het element ', (0, i.jsx)(n.code, { children: '<title>' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Bij het uitlezen van een webpagina lezen screenreaders deze tekst als eerste voor, waardoor screenreadergebruikers direct weten op welke pagina ze zich bevinden. Het wordt ook de naam van het venster of tabblad, en de naamsuggestie bij het opslaan van de pagina als bladwijzer. Daarom is het belangrijk dat de titel goed de inhoud van de pagina beschrijft.' }), '\n', (0, i.jsx)(n.p, { children: "Voor een tekstpagina is de titel vaak een combinatie van de H1-tekst, een scheidingsteken en de sitenaam. Bijvoorbeeld: 'Waar kan ik grofvuil inleveren? - Gemeente Voorbeeld'." }), '\n', (0, i.jsx)(n.p, { children: 'Maak deze tekst eenduidig en beschrijvend, zodat je weet welke pagina van welke website je bezoekt. Ook informatie over foutmeldingen en zoekresultaten hoort in de titel thuis.' }), '\n', (0, i.jsx)(n.p, { children: 'Deze tekst staat in de browser-tab, waardoor je makkelijk kunt herkennen welke website er onder welke tab staat. Begin daarom niet met de sitenaam, maar met het onderwerp. Anders lijken alle titels op elkaar wanneer je maar een deel van de tekst ziet in de tab.' }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeelden van goede titels:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: "'Gemeente Voorbeeld', voor de voorpagina." }), '\n', (0, i.jsx)(n.li, { children: "'Contact - Gemeente Voorbeeld', voor de contactpagina." }), '\n', (0, i.jsx)(n.li, { children: "'12 zoekresultaten voor rijbewijs - Gemeente Voorbeeld', voor de zoekpagina." }), '\n', (0, i.jsx)(n.li, { children: "'Stap 2 van 3: Uw gegevens - Rijbewijs verlengen - Gemeente Voorbeeld', voor een meerstappenformulier." }), '\n', (0, i.jsx)(n.li, { children: "'2 foutmeldingen - Uw vraag - Gemeente Voorbeeld', voor een formulier met foutmeldingen." }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Meerdere stappen: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen#geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Foutmeldingen: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen#geef-feedback-aan-screenreadergebruikers', children: 'Geef feedback aan screenreadergebruikers' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Bevestigingspagina: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina#maak-de-succesmelding-toegankelijk-voor-alle-gebruikers', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(l.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Controleer of er een ', (0, i.jsx)(n.code, { children: 'title' }), '-element in de ', (0, i.jsx)(n.code, { children: 'head' }), ' aanwezig is en deze tekst bevat.'] }), '\n', (0, i.jsx)(n.li, { children: 'Controleer de taal van de titel, is deze hetzelfde als die van de pagina?' }), '\n', (0, i.jsx)(n.li, { children: 'Controleer of de titel de pagina beschrijft, met eenduidige liefst unieke tekst binnen de website.' }), '\n', (0, i.jsx)(n.li, { children: 'Zijn er iframes op de pagina? Controleer of deze ook een goede titel bevatten.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-de-titels-van-alle-paginas-zijn-hetzelfde', children: "Fout: de titels van alle pagina's zijn hetzelfde" }), '\n', (0, i.jsxs)(n.p, { children: ['Als alle ', (0, i.jsx)(n.code, { children: 'title' }), '-elementen op een website dezelfde tekst bevatten (bijvoorbeeld de sitenaam) geeft dit geen goede informatie over op welke pagina je je bevindt.'] }), '\n', (0, i.jsx)(n.h3, { id: 'fout-de-tekst-van-een-titel-wordt-niet-vertaald-door-een-plugin', children: 'Fout: de tekst van een titel wordt niet vertaald door een plugin' }), '\n', (0, i.jsx)(n.p, { children: 'Als de titel wordt gegenereerd door een plugin, kan het voorkomen dat de plugin de taal van de website niet volledig ondersteund. Of het kan zijn dat de taal niet goed is ingesteld. Controleer altijd de settings van een plugin en ook de uitvoer: zijn alle gegenereerde teksten, dus ook de titel, in de taal van de website.' }), '\n', (0, i.jsx)(a.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  10757: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var i = t(52676),
    r = t(24785);
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  47277: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var i = t(52676),
    r = t(24785);
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var i = t(75271);
   const r = {},
    l = i.createContext(r);
   function a(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
