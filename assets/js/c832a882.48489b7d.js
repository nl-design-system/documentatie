'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [57683],
 {
  11053: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => j, default: () => k, frontMatter: () => u, metadata: () => p, toc: () => m });
   var t = i(52676),
    r = i(40139),
    l = i(57716),
    a = i(46364),
    s = i(37943),
    d = i(21339),
    o = i(92828),
    c = i(38391);
   function h(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: "Webpagina's hebben titels die het onderwerp of doel beschrijven." }), '\n', (0, t.jsxs)(n.p, { children: ['Bij het uitlezen van een webpagina lezen ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze tekst als eerste voor, waardoor screenreadergebruikers direct weten op welke pagina ze zich bevinden. Het wordt ook de naam van het venster of tabblad, en de naamsuggestie bij het opslaan van de pagina als bladwijzer. Daarom is het belangrijk dat de titel goed de inhoud van de pagina beschrijft.'] }), '\n', (0, t.jsx)(n.p, { children: "Voor een tekstpagina is de titel vaak een combinatie van de hoofdkop, een scheidingsteken en de sitenaam. Bijvoorbeeld: 'Waar kan ik grofvuil inleveren? - Gemeente Voorbeeld'." })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 2.4.2 Paginatitel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.2 Paginatitel', pagination_label: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", slug: '2.4.2', keywords: ['WCAG', 'A', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'page titled'] },
    j = void 0,
    p = { id: 'wcag/2.4.02', title: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", source: '@site/docs/wcag/2.4.02.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.2', permalink: '/wcag/2.4.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.2 Paginatitel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.2 Paginatitel', pagination_label: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", slug: '2.4.2', keywords: ['WCAG', 'A', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'page titled'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.1 Blokken omzeilen', permalink: '/wcag/2.4.1' }, next: { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', permalink: '/wcag/2.4.3' } },
    v = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: de titels van alle pagina&#39;s zijn hetzelfde', id: 'fout-de-titels-van-alle-paginas-zijn-hetzelfde', level: 3 },
     { value: 'Fout: de tekst van een titel wordt niet vertaald door een plugin', id: 'fout-de-tekst-van-een-titel-wordt-niet-vertaald-door-een-plugin', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.2 Paginatitel' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsxs)(n.p, { children: ['Deze titels staan in de ', (0, t.jsx)(n.code, { children: '<head>' }), ' sectie van de HTML-code, in het element ', (0, t.jsx)(n.code, { children: '<title>' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Maak deze tekst eenduidig en beschrijvend, zodat je weet welke pagina van welke website je bezoekt. Ook informatie over foutmeldingen en zoekresultaten hoort in de titel thuis.' }), '\n', (0, t.jsx)(n.p, { children: 'Deze tekst staat in de browser-tab, waardoor je makkelijk kunt herkennen welke website er onder welke tab staat. Begin daarom niet met de sitenaam, maar met het onderwerp. Anders lijken alle titels op elkaar wanneer je maar een deel van de tekst ziet in de tab.' }), '\n', (0, t.jsx)(n.p, { children: 'Voorbeelden van goede titels:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "'Gemeente Voorbeeld', voor de voorpagina." }), '\n', (0, t.jsx)(n.li, { children: "'Contact - Gemeente Voorbeeld', voor de contactpagina." }), '\n', (0, t.jsx)(n.li, { children: "'12 zoekresultaten voor rijbewijs - Gemeente Voorbeeld', voor de zoekpagina." }), '\n', (0, t.jsx)(n.li, { children: "'Stap 2 van 3: Uw gegevens - Rijbewijs verlengen - Gemeente Voorbeeld', voor een meerstappenformulier." }), '\n', (0, t.jsx)(n.li, { children: "'2 foutmeldingen - Uw vraag - Gemeente Voorbeeld', voor een formulier met foutmeldingen." }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen/', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback/', children: 'Geef feedback aan screenreadergebruikers' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/kantoorbestanden/', children: 'Kantoorbestanden' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Controleer of er een ', (0, t.jsx)(n.code, { children: 'title' }), '-element in de ', (0, t.jsx)(n.code, { children: 'head' }), ' aanwezig is en deze tekst bevat.'] }), '\n', (0, t.jsx)(n.li, { children: 'Controleer de taal van de titel, is deze hetzelfde als die van de pagina?' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of de titel de pagina beschrijft, met eenduidige liefst unieke tekst binnen de website.' }), '\n', (0, t.jsx)(n.li, { children: 'Zijn er iframes op de pagina? Controleer of deze ook een goede titel bevatten.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-de-titels-van-alle-paginas-zijn-hetzelfde', children: "Fout: de titels van alle pagina's zijn hetzelfde" }), '\n', (0, t.jsxs)(n.p, { children: ['Als alle ', (0, t.jsx)(n.code, { children: 'title' }), '-elementen op een website dezelfde tekst bevatten (bijvoorbeeld de sitenaam) geeft dit geen goede informatie over op welke pagina je je bevindt.'] }), '\n', (0, t.jsx)(n.h3, { id: 'fout-de-tekst-van-een-titel-wordt-niet-vertaald-door-een-plugin', children: 'Fout: de tekst van een titel wordt niet vertaald door een plugin' }), '\n', (0, t.jsx)(n.p, { children: 'Als de titel wordt gegenereerd door een plugin, kan het voorkomen dat de plugin de taal van de website niet volledig ondersteund. Of het kan zijn dat de taal niet goed is ingesteld. Controleer altijd de settings van een plugin en ook de uitvoer: zijn alle gegenereerde teksten, dus ook de titel, in de taal van de website.' }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#page-titled', children: (0, t.jsx)('span', { lang: 'en', children: '2.4.2 Page Titled' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#page-titled', children: '2.4.2 Paginatitel' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#page-titled', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.2 Page Titled' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.2 Page Titled' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(s.CY, { children: (0, t.jsx)(l.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(o.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b(e);
   }
  },
  21339: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(40139);
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  92828: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(40139);
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  38391: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(40139);
   function l(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => l });
   var t = i(4814),
    r = i(52676);
   const l = (e) => {
    let { children: n, className: i, level: l = 1, suffix: a, ...s } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${l}`, i), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), a && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var t = i(40139),
    r = i(37943),
    l = i(52676);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    s = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, l.jsx)('img', { ...t, src: a(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    o = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: a = '', components: s = {} } = e;
     return (0, l.jsx)(t.Z, { components: { ...o(i, r), ...d(a), ...s }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => a });
   var t = i(37943),
    r = i(41757),
    l = i(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: i, ...a } = e;
    return (0, l.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, l.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...a, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => a });
   var t = i(75271);
   const r = {},
    l = t.createContext(r);
   function a(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
