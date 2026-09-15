'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6488],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => a });
   var t = i(30758);
   const r = {},
    l = t.createContext(r);
   function s(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, i) {
   i.d(n, { o: () => c });
   var t = i(18439),
    r = i(46447),
    l = i(86070);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, l.jsx)('img', { ...i, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: s = {} }) => (0, l.jsx)(t.x, { components: { ...d(n, i), ...o(r), ...s }, children: e });
  },
  25431(e, n, i) {
   i.d(n, { Ay: () => a, RM: () => l });
   var t = i(86070),
    r = i(18439);
   const l = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  39512(e, n, i) {
   i.d(n, { Ay: () => a, RM: () => l });
   var t = i(86070),
    r = i(18439);
   const l = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46276(e, n, i) {
   i.d(n, { p: () => l });
   var t = i(13526),
    r = i(86070);
   const l = ({ children: e, className: n, level: i = 1, suffix: l, ...s }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
  },
  61473(e, n, i) {
   i.d(n, { E: () => s });
   var t = i(46447),
    r = i(46276),
    l = i(86070);
   const s = ({ children: e, conformanceLevel: n, ...i }) => (globalThis.isAstro ? null : (0, l.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, l.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e }));
  },
  62356(e, n, i) {
   (i.r(n), i.d(n, { assets: () => v, contentTitle: () => p, default: () => b, frontMatter: () => j, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"wcag/2.4.02","title":"WCAG-succescriterium 2.4.2 Paginatitel","description":"Webpagina\'s hebben titels die het onderwerp of doel beschrijven.","source":"@site/docs/wcag/2.4.02.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.2","permalink":"/wcag/2.4.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.2 Paginatitel","title_sm":"2.4.2 Paginatitel","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.2 Paginatitel","pagination_label":"WCAG-succescriterium 2.4.2 Paginatitel","description":"Webpagina\'s hebben titels die het onderwerp of doel beschrijven.","slug":"2.4.2","conformance_level":"Niveau A","keywords":["WCAG","A","bedienbaar","navigeerbaar","operable","navigable","page titled"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.1 Blokken omzeilen","permalink":"/wcag/2.4.1"},"next":{"title":"WCAG-succescriterium 2.4.3 Focus volgorde","permalink":"/wcag/2.4.3"}}');
   var r = i(86070),
    l = i(18439),
    s = i(24703),
    a = i(61473),
    o = i(66119),
    d = i(25431),
    c = i(39512),
    h = i(66117);
   function g(e) {
    const n = { a: 'a', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Webpagina's hebben titels die het onderwerp of doel beschrijven." }), '\n', (0, r.jsxs)(n.p, { children: ['Bij het uitlezen van een webpagina lezen ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze tekst als eerste voor, waardoor screenreadergebruikers direct weten op welke pagina ze zich bevinden. Het wordt ook de naam van het venster of tabblad, en de naamsuggestie bij het opslaan van de pagina als bladwijzer. Daarom is het belangrijk dat de titel goed de inhoud van de pagina beschrijft.'] }), '\n', (0, r.jsx)(n.p, { children: "Voor een tekstpagina is de titel vaak een combinatie van de hoofdkop, een scheidingsteken en de sitenaam. Bijvoorbeeld: 'Waar kan ik grofvuil inleveren? - Gemeente Voorbeeld'." })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 2.4.2 Paginatitel', title_sm: '2.4.2 Paginatitel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.2 Paginatitel', pagination_label: 'WCAG-succescriterium 2.4.2 Paginatitel', description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.", slug: '2.4.2', conformance_level: 'Niveau A', keywords: ['WCAG', 'A', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'page titled'] },
    p = void 0,
    v = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: de titels van alle pagina&#39;s zijn hetzelfde', id: 'fout-de-titels-van-alle-paginas-zijn-hetzelfde', level: 3 }, { value: 'Fout: de tekst van een titel wordt niet vertaald door een plugin', id: 'fout-de-tekst-van-een-titel-wordt-niet-vertaald-door-een-plugin', level: 3 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function f(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.2 Paginatitel' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsxs)(n.p, { children: ['Deze titels staan in de ', (0, r.jsx)(n.code, { children: '<head>' }), ' sectie van de HTML-code, in het element ', (0, r.jsx)(n.code, { children: '<title>' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Maak deze tekst eenduidig en beschrijvend, zodat je weet welke pagina van welke website je bezoekt. Ook informatie over foutmeldingen en zoekresultaten hoort in de titel thuis.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze tekst staat in de browser-tab, waardoor je makkelijk kunt herkennen welke website er onder welke tab staat. Begin daarom niet met de sitenaam, maar met het onderwerp. Anders lijken alle titels op elkaar wanneer je maar een deel van de tekst ziet in de tab.' }), '\n', (0, r.jsx)(n.p, { children: 'Voorbeelden van goede titels:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "'Gemeente Voorbeeld', voor de voorpagina." }), '\n', (0, r.jsx)(n.li, { children: "'Contact - Gemeente Voorbeeld', voor de contactpagina." }), '\n', (0, r.jsx)(n.li, { children: "'12 zoekresultaten voor rijbewijs - Gemeente Voorbeeld', voor de zoekpagina." }), '\n', (0, r.jsx)(n.li, { children: "'Stap 2 van 3: Uw gegevens - Rijbewijs verlengen - Gemeente Voorbeeld', voor een meerstappenformulier." }), '\n', (0, r.jsx)(n.li, { children: "'2 foutmeldingen - Uw vraag - Gemeente Voorbeeld', voor een formulier met foutmeldingen." }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen/', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback/', children: 'Geef feedback aan screenreadergebruikers' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/kantoorbestanden/', children: 'Kantoorbestanden' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Controleer of er een ', (0, r.jsx)(n.code, { children: 'title' }), '-element in de ', (0, r.jsx)(n.code, { children: 'head' }), ' aanwezig is en deze tekst bevat.'] }), '\n', (0, r.jsx)(n.li, { children: 'Controleer de taal van de titel, is deze hetzelfde als die van de pagina?' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of de titel de pagina beschrijft, met eenduidige liefst unieke tekst binnen de website.' }), '\n', (0, r.jsx)(n.li, { children: 'Zijn er iframes op de pagina? Controleer of deze ook een goede titel bevatten.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, r.jsx)(n.h3, { id: 'fout-de-titels-van-alle-paginas-zijn-hetzelfde', children: "Fout: de titels van alle pagina's zijn hetzelfde" }), '\n', (0, r.jsxs)(n.p, { children: ['Als alle ', (0, r.jsx)(n.code, { children: 'title' }), '-elementen op een website dezelfde tekst bevatten (bijvoorbeeld de sitenaam) geeft dit geen goede informatie over op welke pagina je je bevindt.'] }), '\n', (0, r.jsx)(n.h3, { id: 'fout-de-tekst-van-een-titel-wordt-niet-vertaald-door-een-plugin', children: 'Fout: de tekst van een titel wordt niet vertaald door een plugin' }), '\n', (0, r.jsx)(n.p, { children: 'Als de titel wordt gegenereerd door een plugin, kan het voorkomen dat de plugin de taal van de website niet volledig ondersteund. Of het kan zijn dat de taal niet goed is ingesteld. Controleer altijd de settings van een plugin en ook de uitvoer: zijn alle gegenereerde teksten, dus ook de titel, in de taal van de website.' }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#page-titled', children: (0, r.jsx)('span', { lang: 'en', children: '2.4.2 Page Titled' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#page-titled', children: '2.4.2 Paginatitel' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#page-titled', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.2 Page Titled' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.2 Page Titled' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.K, { children: (0, r.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
   }
  },
  66117(e, n, i) {
   i.d(n, { Ay: () => a, RM: () => l });
   var t = i(86070),
    r = i(18439);
   const l = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  66119(e, n, i) {
   i.d(n, { K: () => o });
   var t = i(86070);
   function r(e) {
    var n,
     i,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var l = e.length;
      for (n = 0; n < l; n++) e[n] && (i = r(e[n])) && (t && (t += ' '), (t += i));
     } else for (i in e) e[i] && (t && (t += ' '), (t += i));
    return t;
   }
   function l() {
    for (var e, n, i = 0, t = '', l = arguments.length; i < l; i++) (e = arguments[i]) && (n = r(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const s = (0, i(30758).forwardRef)(({ aside: e, children: n, className: i, purpose: r, ...s }, a) => {
    const o = { ...s, ref: a, className: l('utrecht-note', { [`utrecht-note--${r}`]: r }, i) };
    return e ? (0, t.jsx)('aside', { ...o, children: n }) : (0, t.jsx)('section', { role: 'note', ...o, children: n });
   });
   s.displayName = 'Note';
   var a = i(29181);
   const o = globalThis.isAstro ? s : a.K7;
  },
 },
]);
