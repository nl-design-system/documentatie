'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4270],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => t });
   var r = i(68873),
    s = i(98584),
    l = i(86070);
   const t = ({ children: e, conformanceLevel: n, ...i }) => (0, l.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, l.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => l });
   var r = i(86070),
    s = i(85248);
   const l = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    s = i(68873),
    l = i(86070);
   const t = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + s;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, l.jsx)('img', { ...i, src: t(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: s = '', components: t = {} }) => (0, l.jsx)(r.x, { components: { ...d(n, i), ...o(s), ...t }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => l });
   var r = i(86070),
    s = i(85248);
   const l = [];
   function t(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => l });
   var r = i(86070),
    s = i(85248);
   const l = [];
   function t(e) {
    const n = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  52305: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => b, frontMatter: () => j, metadata: () => r, toc: () => v });
   const r = JSON.parse('{"id":"wcag/2.4.06","title":"WCAG-succescriterium 2.4.6 Koppen en labels","description":"Koppen en labels beschrijven het onderwerp of het doel.","source":"@site/docs/wcag/2.4.06.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.6","permalink":"/wcag/2.4.6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.06.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.6 Koppen en labels","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.6 Koppen en labels","pagination_label":"WCAG-succescriterium 2.4.6 Koppen en labels","description":"Koppen en labels beschrijven het onderwerp of het doel.","slug":"2.4.6","keywords":["WCAG","AA","bedienbaar","navigeerbaar","operable","navigable","headings and labels"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.5 Meerdere manieren","permalink":"/wcag/2.4.5"},"next":{"title":"2.4.7 Focus zichtbaar","permalink":"/wcag/2.4.7"}}');
   var s = i(86070),
    l = i(85248),
    t = i(46563),
    a = i(19877),
    o = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function p(e) {
    const n = { p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Koppen en labels beschrijven het onderwerp of het doel van de inhoud. Dit succescriterium gaat over duidelijkheid. Wat is de opzet van de pagina, waar gaat een tekst over, wat moet je invullen?' }), '\n', (0, s.jsx)(n.p, { children: 'Alle gebruikers hebben hier baat bij. Zeker als gebruikers de pagina snel scannen om te zoeken wat ze willen weten. Duidelijke labels helpen een gebruiker een formulier makkelijker in te vullen.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const j = { title: 'WCAG-succescriterium 2.4.6 Koppen en labels', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.6 Koppen en labels', pagination_label: 'WCAG-succescriterium 2.4.6 Koppen en labels', description: 'Koppen en labels beschrijven het onderwerp of het doel.', slug: '2.4.6', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'headings and labels'] },
    u = void 0,
    m = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Koppen', id: 'koppen', level: 3 }, { value: 'Labels', id: 'labels', level: 3 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', h3: 'h3', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.6 Koppen en labels' }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(g, {}), '\n', (0, s.jsx)(n.h3, { id: 'koppen', children: 'Koppen' }), '\n', (0, s.jsx)(n.p, { children: 'Koppen vormen de ruggengraat van de inhoud van een pagina. Aan de hand van koppen kan een gebruiker snel wegwijs worden in de inhoud van een webpagina.' }), '\n', (0, s.jsxs)(n.p, { children: ['Het onderwerp van een webpagina staat in het kopje met niveau 1 ', (0, s.jsx)(n.code, { children: '<h1>' }), '. Door \xe9\xe9n duidelijke h1 kan de gebruiker snel beslissen: is dit informatie die ik wil lezen, is dit waar ik naar op zoek ben. Verdeel de overige tekst met de koppen ', (0, s.jsx)(n.code, { children: '<h2>' }), ' tot en met ', (0, s.jsx)(n.code, { children: '<h6>' }), ', afhankelijk van de structuur van de inhoud. Vaak zijn alleen koppen met niveau 1 tot en met 3 nodig.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen een lijst van koppen oproepen en snel naar een kopje navigeren. Dan is het belangrijk dat een kopje de inhoud eronder goed beschrijft. De koppen zijn daarmee een soort inhoudsopgave van de webpagina.'] }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_headings_in_voiceover.png', alt: 'Screenshot web rotor VoiceOver van de voorpagina van deze website' }) }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik een kopje daarom niet enkel en alleen om tekst groot en vet te maken. Maar beschrijf in de koppen de inhoud eronder, als kleine samenvatting. Dit helpt de scannende gebruikers om snel de informatie te vinden die ze zoeken.' }), '\n', (0, s.jsxs)(n.p, { children: ['Dit succescriterium gaat niet alleen over HTML-koppen, maar ook over andere koppen zoals in tabellen. De tabelkop ', (0, s.jsx)(n.code, { children: '<th>' }), ' voor rijen en kolommen moeten ook duidelijk zijn.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Hou de tekst ook kort, krachtig en ', (0, s.jsx)('span', { lang: 'en', children: (0, s.jsx)(n.em, { children: 'to-the-point' }) }), '. Het is niet de bedoeling een hele paragraaf tekst als kopje aan te duiden.'] }), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium gaat over de ', (0, s.jsx)(n.strong, { children: 'tekst' }), ' van koppen.'] }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['WCAG-succescriterium ', (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: '1.3.1 Info en relaties' }), ' gaat over correct gebruik van HTML om koppen aan te geven.'] }), '\n', (0, s.jsxs)(n.li, { children: ['WCAG-succescriterium ', (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: '1.3.2 Betekenisvolle volgorde' }), ' legt uit dat alle inhoud die bij een kopje hoort, in de code onder het kopje moet staan.'] }), '\n', (0, s.jsxs)(n.li, { children: ['WCAG-succescriterium ', (0, s.jsx)(n.a, { href: '/wcag/1.4.2/', children: '2.4.2 Paginatitel' }), ' gaat over de paginatitel, in het element ', (0, s.jsx)(n.code, { children: '<title>' }), ' in de ', (0, s.jsx)(n.code, { children: '<head>' }), ' sectie van de HTML-code'] }), '\n', (0, s.jsxs)(n.li, { children: ['Alleen ', (0, s.jsx)(n.a, { href: '/wcag/2.4.10/', children: 'WCAG-succescriterium 2.4.10 Paragraafkoppen' }), ' op niveau ', (0, s.jsx)(n.strong, { children: 'AAA' }), ' vereist dat koppen gestructureerd zijn. Dit draagt in een belangrijke mate bij aan een goed begrip van de inhoud voor screenreadergebruikers en zoekmachines.'] }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'labels', children: 'Labels' }), '\n', (0, s.jsx)(n.p, { children: 'Duidelijke labels bij een invoerveld zijn voor alle gebruikers belangrijk. Wat moet je precies invullen? Is een veld verplicht of niet-verplicht in te vullen? Moet ik alleen mijn achternaam invullen of ook mijn voornaam?' }), '\n', (0, s.jsxs)(n.p, { children: ['De richtlijnen over ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'Labels' }), ' en ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/', children: 'Voorkom fouten' }), ' gaan hier uitgebreid op in.'] }), '\n', (0, s.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Formulieren: ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'Richtlijnen voor labels in een formulier' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Formulieren: ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/', children: 'Richtlijnen voor het voorkomen van fouten' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Content: ', (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: (0, s.jsx)('span', { lang: 'en', children: 'Accessible heading structure' }) }), ' van Rian Rietveld voor the A11y Project.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.internetacademy.nl/ebooks/handboek-webcontent/headings-voor-betekenisvol-opmaken', children: 'Headings voor betekenisvol opmaken' }), ' in het handboek "Handboek webcontent: meer focus, minder content" van de Internet Academy.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://hidde.blog/heading-structures-are-tables-of-contents/', children: (0, s.jsx)('span', { lang: 'en', children: 'Heading structures are tables of contents' }) }), ' van Hidde de Vries.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Of een kopje of label betekenisvol is, kun je alleen bepalen door de webpagina te lezen en zo te beoordelen of een kopje of label de lading dekt.' }), '\n', (0, s.jsx)(n.p, { children: 'Controleer of teksten betekenisvol en duidelijk zijn voor:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Koppen.' }), '\n', (0, s.jsx)(n.li, { children: 'Labels (inclusief de placeholder).' }), '\n', (0, s.jsx)(n.li, { children: 'Kolomkoppen.' }), '\n', (0, s.jsx)(n.li, { children: 'Alle andere content die eruit ziet als een kopje of een label.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Beschrijft een kopje de inhoud die eronder valt?' }), '\n', (0, s.jsx)(n.p, { children: 'Controleer ook koppen en labels die verborgen zijn voor het zicht, maar wel voorgelezen worden door screenreaders.' }), '\n', (0, s.jsx)(n.p, { children: 'Zijn er geen labels of koppen op de webpagina, dan is dit succescriterium niet van toepassing.' }), '\n', (0, s.jsx)(n.p, { children: 'Een goed hulpmiddel om een overzicht van de koppenstructuur te krijgen is de browseradd-on HeadingsMap:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi', children: 'HeadingsMap voor Chrome' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://addons.mozilla.org/en-US/firefox/addon/headingsmap/', children: 'HeadingsMap voor Firefox' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://microsoftedge.microsoft.com/addons/detail/headingsmap/bokekiiaddinealohkmhjcgfanndmcgo', children: 'HeadingsMap voor Edge' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#headings-and-labels', children: (0, s.jsx)('span', { lang: 'en', children: '2.4.6 Headings and Labels' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#headings-and-labels', children: '2.4.6 Koppen en labels' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.6 Headings and Labels' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.6 Headings and Labels' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(o.K7, { children: (0, s.jsx)(t.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(c.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(t.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => t, x: () => a });
   var r = i(30758);
   const s = {},
    l = r.createContext(s);
   function t(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), r.createElement(l.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => l });
   var r = i(13526),
    s = i(86070);
   const l = ({ children: e, className: n, level: i = 1, suffix: l, ...t }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...t, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), l && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
  },
 },
]);
