'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [92040],
 {
  62473: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => p, contentTitle: () => u, default: () => x, frontMatter: () => v, metadata: () => j, toc: () => m });
   var i = r(52676),
    t = r(40139),
    o = r(57716),
    s = r(97233),
    l = r(46364),
    d = r(16167),
    a = r(60256),
    c = r(99042),
    h = r(91114),
    g = r(2281);
   const v = { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.2 Betekenisvolle volgorde', pagination_label: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '1.3.2', keywords: ['WCAG', 'A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'meaningful sequence'] },
    u = void 0,
    j = { id: 'wcag/1.3.02', title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', source: '@site/docs/wcag/1.3.02.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.2', permalink: '/wcag/1.3.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.2 Betekenisvolle volgorde', pagination_label: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '1.3.2', keywords: ['WCAG', 'A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'meaningful sequence'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.3.1 Info en relaties', permalink: '/wcag/1.3.1' }, next: { title: 'WCAG-succescriterium 1.3.3 Zintuiglijke eigenschappen', permalink: '/wcag/1.3.3' } },
    p = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Demo betekenisvolle volgorde in de screenreader VoiceOver', id: 'demo-betekenisvolle-volgorde-in-de-screenreader-voiceover', level: 3 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bron', id: 'bron', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: de volgorde van de inhoud is niet meer logisch voor kleine schermgroottes', id: 'fout-de-volgorde-van-de-inhoud-is-niet-meer-logisch-voor-kleine-schermgroottes', level: 3 },
     { value: 'Fout: er staat content boven een gerelateerd kopje', id: 'fout-er-staat-content-boven-een-gerelateerd-kopje', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function k(e) {
    const n = { a: 'a', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(g.ZP, {}), '\n', (0, i.jsxs)(n.p, { children: ['Gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' lezen informatie op een webpagina van boven naar beneden. Dan is het belangrijk dat de informatie ook in deze leesvolgorde in de gegenereerde code, de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), ', staat.'] }), '\n', (0, i.jsx)(n.p, { children: 'Screenreadergebruikers kunnen een lijst met de kopjes oproepen en een kopje kiezen vanwaar te lezen op een pagina.\nAls er gerelateerde informatie boven een kopje staat, mist de screenreadergebruiker deze inhoud.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:\nIn een lijst met evenementen staat de categorie en de datum van het evenement boven het kopje. Alleen een visueel kader rondom de gegevens van het evenement, is duidelijk wat bij elkaar hoort. De screenreadergebruiker mist dan de juiste categorie en datum bij dat evenement als deze vanaf het kopje gaat lezen. Dit wordt gedemonstreerd met de screenreader VoiceOver in de onderstaande video.' }), '\n', (0, i.jsx)(n.h3, { id: 'demo-betekenisvolle-volgorde-in-de-screenreader-voiceover', children: 'Demo betekenisvolle volgorde in de screenreader VoiceOver' }), '\n', (0, i.jsx)(s.Y, { videoId: 'OEe1wkRK2jg' }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren: ', (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren: ', (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen', children: 'Tabellen' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bron', children: 'Bron' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://adrianroselli.com/2015/09/source-order-matters.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Source Order Matters' }) }), ' van Adrian Roselli.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(a.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'De handigste manier om dit goed te testen is met een screenreader, zoals VoiceOver voor de Mac of NVDA voor Windows.' }), '\n', (0, i.jsx)(n.p, { children: 'Nuttige links voor het testen met screenreaders:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-voiceover-macos', children: 'Zelf testen met screenreaders - VoiceOver (macOS)' }), ' op Toegankelijk Online.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-nvda-windows', children: 'Zelf testen met screenreaders - NVDA (Windows)' }), ' op Toegankelijk Online.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing', children: (0, i.jsx)('span', { lang: 'en', children: 'Screenreader testing' }) }), ' op GOV.UK.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://dequeuniversity.com/screenreaders/', children: (0, i.jsx)('span', { lang: 'en', children: 'Screen Reader Keyboard Shortcuts and Gestures' }) }), ' op Deque University.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Controleer ook de HTML-structuur met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Je kunt ook testen door CSS uit te schakelen. Let daarbij wel op verschillen in leesvolgorde in de DOM en visuele volgorde. In CSS kan de leesvolgorde namelijk aangepast worden, bijvoorbeeld met ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout', children: 'CSS grid layout' }), ' en ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox', children: 'Flexbox' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['CSS uitschakelen is het makkelijkst in Firefox. Kies in het menu ', (0, i.jsx)('span', { lang: 'en', children: "'View' > 'Page style' > 'No style'" }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': dit succescriterium gaat alleen over de leesvolgorde. De volgorde van de toetsenbordfocus valt onder het ', (0, i.jsx)(n.a, { href: '/wcag/2.4.3', children: 'WCAG-succescriterium Focus volgorde' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Test:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Is de volgorde waarin de inhoud van boven naar beneden wordt voorgelezen begrijpelijk als je het scherm niet ziet? Met andere woorden, is het begrip van de inhoud onafhankelijk van het visueel ontwerp?' }), '\n', (0, i.jsx)(n.li, { children: 'Wordt alle inhoud die bij een kopje hoort ook n\xe1 het kopje voorgelezen?' }), '\n', (0, i.jsx)(n.li, { children: 'Is het begrijpelijk welke metadata, zoals auteur, categorie of datum, bij welke inhoud hoort?' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Test de volgorde van de inhoud ook in verschillende responsieve weergaves en ori\xebntaties. Zoom ook in tot 400%. Verandert de volgorde van de inhoud? Is de voorgelezen inhoud nog steeds logisch en betekenisvol?' }), '\n', (0, i.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-de-volgorde-van-de-inhoud-is-niet-meer-logisch-voor-kleine-schermgroottes', children: 'Fout: de volgorde van de inhoud is niet meer logisch voor kleine schermgroottes' }), '\n', (0, i.jsx)(n.p, { children: 'De leesvolgorde is anders voor ingezoomde weergaves dan voor de desktopweergave. Controleer de leesvolgorde voor de verschillende breedtes en ori\xebntaties en zoom ook in tot 400%. Overleg dit ook met de designer.' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-er-staat-content-boven-een-gerelateerd-kopje', children: 'Fout: er staat content boven een gerelateerd kopje' }), '\n', (0, i.jsx)(n.p, { children: 'Het is voor dit criterium van belang dat content die bij een kopje hoort zich onder dat kopje bevindt, in ieder geval in de leesvolgorde. Maar soms wordt in het ontwerp gekozen om content die bij een kopje hoort visueel boven dat kopje te plaatsen. Overleg dan met de designer of dit eventueel anders kan, of pas de volgorde aan met CSS (zie hieronder).' }), '\n', (0, i.jsxs)(n.p, { children: ['Het is mogelijk om de visuele volgorde met CSS-code aan te passen zodat de inhoud anders wordt voorgelezen van de visuele volgorde, maar pas hierbij op. De ', (0, i.jsx)(n.strong, { children: 'visuele' }), ' volgorde van de toetsenbordfocus moet ook betekenisvol zijn, zie hiervoor het ', (0, i.jsx)(n.a, { href: '/wcag/2.4.3', children: 'WCAG-succescriterium 2.4.3 Focusvolgorde' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#meaningful-sequence', children: (0, i.jsx)('span', { lang: 'en', children: '1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#betekenisvolle-volgorde', children: '1.3.2 Betekenisvolle volgorde' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(d.CY, { children: (0, i.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(c.ZP, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(h.ZP, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
  },
  60256: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(40139);
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  99042: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(40139);
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  91114: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(40139);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  2281: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var i = r(52676),
    t = r(40139);
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat iedereen de tekst van een webpagina kan volgen en dat het begrip hiervan niet alleen afhankelijk is van de visuele presentatie.' }), '\n', (0, i.jsxs)(n.p, { children: ['Wanneer een gebruiker de webpagina inzoomt, of met een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' de inhoud van boven naar beneden leest, moet de informatie en de volgorde van de informatie logisch en begrijpelijk zijn.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  41757: (e, n, r) => {
   r.d(n, { V: () => o });
   var i = r(4814),
    t = r(52676);
   const o = (e) => {
    let { children: n, className: r, level: o = 1, suffix: s, ...l } = e;
    return (0, t.jsxs)('hgroup', { className: (0, i.Z)('nlds-inline-heading-group', `utrecht-heading-${o}`, r), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
   };
  },
  57716: (e, n, r) => {
   r.d(n, { U: () => c });
   var i = r(40139),
    t = r(16167),
    o = r(52676);
   const s = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: r, ...i } = n;
      return (0, o.jsx)('img', { ...i, src: s(e, r), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    a = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = (e) => {
     let { children: n, omitH1: r = !1, headingLevel: t = 1, baseUrl: s = '', components: l = {} } = e;
     return (0, o.jsx)(i.Z, { components: { ...a(r, t), ...d(s), ...l }, children: n });
    };
  },
  97233: (e, n, r) => {
   r.d(n, { Y: () => l });
   var i = r(4814),
    t = r(95110),
    o = r.n(t),
    s = r(52676);
   const l = (e) => {
    let { videoId: n, className: r, ...t } = e;
    return (0, s.jsx)(o(), { url: `https://youtube.com/watch?v=${n}`, className: (0, i.Z)('video-player', r), width: '100%', height: '100%', controls: !0, ...t, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
  46364: (e, n, r) => {
   r.d(n, { j: () => s });
   var i = r(16167),
    t = r(41757),
    o = r(52676);
   const s = (e) => {
    let { children: n, conformanceLevel: r, ...s } = e;
    return (0, o.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: r && (0, o.jsx)(i.Ou, { className: 'nlds-inline-heading-group__badge', children: r }), ...s, children: n });
   };
  },
 },
]);
