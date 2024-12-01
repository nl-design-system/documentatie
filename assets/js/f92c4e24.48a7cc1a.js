'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [74160],
 {
  28040: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => b, frontMatter: () => g, metadata: () => j, toc: () => k });
   var r = i(52676),
    s = i(87118),
    t = i(57716),
    l = i(46364),
    o = i(31916),
    a = i(57705),
    d = i(7140),
    c = i(39745);
   function h(e) {
    const n = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Koppen en labels beschrijven het onderwerp of het doel van de inhoud. Dit succescriterium gaat over duidelijkheid. Wat is de opzet van de pagina, waar gaat een tekst over, wat moet je invullen?' }), '\n', (0, r.jsx)(n.p, { children: 'Alle gebruikers hebben hier baat bij. Zeker als gebruikers de pagina snel scannen om te zoeken wat ze willen weten. Duidelijke labels helpen een gebruiker een formulier makkelijker in te vullen.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 2.4.6 Koppen en labels', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.6 Koppen en labels', pagination_label: 'WCAG-succescriterium 2.4.6 Koppen en labels', description: 'Koppen en labels beschrijven het onderwerp of het doel.', slug: '2.4.6', keywords: ['WCAG'] },
    u = void 0,
    j = { id: 'wcag/2.4.06', title: 'WCAG-succescriterium 2.4.6 Koppen en labels', description: 'Koppen en labels beschrijven het onderwerp of het doel.', source: '@site/docs/wcag/2.4.06.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.6', permalink: '/wcag/2.4.6', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.06.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.6 Koppen en labels', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.6 Koppen en labels', pagination_label: 'WCAG-succescriterium 2.4.6 Koppen en labels', description: 'Koppen en labels beschrijven het onderwerp of het doel.', slug: '2.4.6', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.5 Meerdere manieren', permalink: '/wcag/2.4.5' }, next: { title: '2.4.7 Focus zichtbaar', permalink: '/wcag/2.4.7' } },
    m = {},
    k = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Koppen', id: 'koppen', level: 3 },
     { value: 'Labels', id: 'labels', level: 3 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function v(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', h3: 'h3', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.6 Koppen en labels' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(n.h3, { id: 'koppen', children: 'Koppen' }), '\n', (0, r.jsx)(n.p, { children: 'Koppen vormen de ruggengraat van de inhoud van een pagina. Aan de hand van koppen kan een gebruiker snel wegwijs worden in de inhoud van een webpagina.' }), '\n', (0, r.jsxs)(n.p, { children: ['Het onderwerp van een webpagina staat in het kopje met niveau 1 ', (0, r.jsx)(n.code, { children: '<h1>' }), '. Door \xe9\xe9n duidelijke h1 kan de gebruiker snel beslissen: is dit informatie die ik wil lezen, is dit waar ik naar op zoek ben. Verdeel de overige tekst met de koppen ', (0, r.jsx)(n.code, { children: '<h2>' }), ' tot en met ', (0, r.jsx)(n.code, { children: '<h6>' }), ', afhankelijk van de structuur van de inhoud. Vaak zijn alleen koppen met niveau 1 tot en met 3 nodig.'] }), '\n', (0, r.jsx)(n.p, { children: 'Screenreadergebruikers kunnen een lijst van koppen oproepen en snel naar een kopje navigeren. Dan is het belangrijk dat een kopje de inhoud eronder goed beschrijft. De koppen zijn daarmee een soort inhoudsopgave van de webpagina.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_headings_in_voiceover.png', alt: 'Screenshot web rotor VoiceOver van de voorpagina van deze website' }) }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik een kopje daarom niet enkel en alleen om tekst groot en vet te maken. Maar beschrijf in de koppen de inhoud eronder, als kleine samenvatting. Dit helpt de scannende gebruikers om snel de informatie te vinden die ze zoeken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dit succescriterium gaat niet alleen over HTML-koppen, maar ook over andere koppen zoals in tabellen. De tabelkop ', (0, r.jsx)(n.code, { children: '<th>' }), ' voor rijen en kolommen moeten ook duidelijk zijn.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hou de tekst ook kort, krachtig en ', (0, r.jsx)('span', { lang: 'en', children: (0, r.jsx)(n.em, { children: 'to-the-point' }) }), '. Het is niet de bedoeling een hele paragraaf tekst als kopje aan te duiden.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium gaat over de ', (0, r.jsx)(n.strong, { children: 'tekst' }), ' van koppen.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' gaat over correct gebruik van HTML om koppen aan te geven.'] }), '\n', (0, r.jsxs)(n.li, { children: ['WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/1.3.2', children: '1.3.2 Betekenisvolle volgorde' }), ' legt uit dat alle inhoud die bij een kopje hoort, in de code onder het kopje moet staan.'] }), '\n', (0, r.jsxs)(n.li, { children: ['WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/1.4.2', children: '2.4.2 Paginatitel' }), ' gaat over de paginatitel, in het element ', (0, r.jsx)(n.code, { children: '<title>' }), ' in de ', (0, r.jsx)(n.code, { children: '<head>' }), ' sectie van de HTML-code'] }), '\n', (0, r.jsxs)(n.li, { children: ['Alleen ', (0, r.jsx)(n.a, { href: '/wcag/2.4.10', children: 'WCAG-succescriterium 2.4.10 Paragraafkoppen' }), ' op niveau ', (0, r.jsx)(n.strong, { children: 'AAA' }), ' vereist dat koppen gestructureerd zijn. Dit draagt in een belangrijke mate bij aan een goed begrip van de inhoud voor screenreadergebruikers en zoekmachines.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'labels', children: 'Labels' }), '\n', (0, r.jsx)(n.p, { children: 'Duidelijke labels bij een invoerveld zijn voor alle gebruikers belangrijk. Wat moet je precies invullen? Is een veld verplicht of niet-verplicht in te vullen? Moet ik alleen mijn achternaam invullen of ook mijn voornaam?' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen over ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels', children: 'Labels' }), ' en ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten', children: 'Voorkom fouten' }), ' gaan hier uitgebreid op in.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels', children: 'Labels' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten', children: 'Voorkom fouten' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: (0, r.jsx)('span', { lang: 'en', children: 'Accessible heading structure' }) }), ' van Rian Rietveld voor the A11y Project.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.internetacademy.nl/ebooks/handboek-webcontent/headings-voor-betekenisvol-opmaken', children: 'Headings voor betekenisvol opmaken' }), ' in het handboek "Handboek webcontent: meer focus, minder content" van de Internet Academy.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://hidde.blog/heading-structures-are-tables-of-contents/', children: (0, r.jsx)('span', { lang: 'en', children: 'Heading structures are tables of contents' }) }), ' van Hidde de Vries.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Of een kopje of label betekenisvol is, kun je alleen bepalen door de webpagina te lezen en zo te beoordelen of een kopje of label de lading dekt.' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer of teksten betekenisvol en duidelijk zijn voor:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Koppen.' }), '\n', (0, r.jsx)(n.li, { children: 'Labels (inclusief de placeholder).' }), '\n', (0, r.jsx)(n.li, { children: 'Kolomkoppen.' }), '\n', (0, r.jsx)(n.li, { children: 'Alle andere content die eruit ziet als een kopje of een label.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Beschrijft een kopje de inhoud die eronder valt?' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer ook koppen en labels die verborgen zijn voor het zicht, maar wel voorgelezen worden door screenreaders.' }), '\n', (0, r.jsx)(n.p, { children: 'Zijn er geen labels of koppen op de webpagina, dan is dit succescriterium niet van toepassing.' }), '\n', (0, r.jsx)(n.p, { children: 'Een goed hulpmiddel om een overzicht van de koppenstructuur te krijgen is de browseradd-on HeadingsMap:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi', children: 'HeadingsMap voor Chrome' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://addons.mozilla.org/en-US/firefox/addon/headingsmap/', children: 'HeadingsMap voor Firefox' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://microsoftedge.microsoft.com/addons/detail/headingsmap/bokekiiaddinealohkmhjcgfanndmcgo', children: 'HeadingsMap voor Edge' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#headings-and-labels', children: (0, r.jsx)('span', { lang: 'en', children: '2.4.6 Headings and Labels' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#koppen-en-labels', children: '2.4.6 Koppen en labels' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.6 Headings and Labels' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.6 Headings and Labels' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.CY, { children: (0, r.jsx)(t.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(t.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
  },
  57705: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    s = i(87118);
   function t(e) {
    const n = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  7140: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    s = i(87118);
   function t(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  39745: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    s = i(87118);
   function t(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => t });
   var r = i(4814),
    s = i(52676);
   const t = (e) => {
    let { children: n, className: i, level: t = 1, suffix: l, ...o } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${t}`, i), ...o, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(87118),
    s = i(31916),
    t = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + s;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: s.XJ, h2: s.aC, h3: s.k8, h4: s.by, h5: s.Cd }, 3: { h1: s.aC, h2: s.k8, h3: s.by, h4: s.Cd, h5: s.Cd }, 4: { h1: s.k8, h2: s.by, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 5: { h1: s.by, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 6: { h1: s.Cd, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, t.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: s = 1, baseUrl: l = '' } = e;
     return (0, t.jsx)(r.Z, { components: { ...d(i, s), ...a(l) }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(31916),
    s = i(41757),
    t = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, t.jsx)(s.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, t.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  87118: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var r = i(75271);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
