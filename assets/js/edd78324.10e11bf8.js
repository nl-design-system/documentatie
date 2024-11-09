'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [92040],
 {
  48860: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => m, contentTitle: () => p, default: () => b, frontMatter: () => u, metadata: () => j, toc: () => k });
   var i = r(52676),
    o = r(24785),
    s = r(57716),
    t = r(73381),
    l = r(71595),
    d = r(46506),
    a = r(45054),
    c = r(52057),
    h = r(78836);
   function g(e) {
    const n = { p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat iedereen de tekst van een webpagina kan volgen en dat het begrip hiervan niet alleen afhankelijk is van de visuele presentatie.' }), '\n', (0, i.jsx)(n.p, { children: 'Wanneer een gebruiker de webpagina inzoomt, of met een screenreader de inhoud van boven naar beneden leest, moet de informatie en de volgorde van de informatie logisch en begrijpelijk zijn.' })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   const u = { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.2 Betekenisvolle volgorde', pagination_label: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '1.3.2', keywords: ['WCAG', 'Meaningful sequence', 'Niveau A'] },
    p = void 0,
    j = { id: 'wcag/1.3.02', title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', source: '@site/docs/wcag/1.3.02.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.2', permalink: '/wcag/1.3.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.2 Betekenisvolle volgorde', pagination_label: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '1.3.2', keywords: ['WCAG', 'Meaningful sequence', 'Niveau A'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.3.1 Info en relaties', permalink: '/wcag/1.3.1' }, next: { title: 'WCAG-succescriterium 1.3.3 Zintuiglijke eigenschappen', permalink: '/wcag/1.3.3' } },
    m = {},
    k = [
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
   function x(e) {
    const n = { a: 'a', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(v, {}), '\n', (0, i.jsxs)(n.p, { children: ['Screenreadergebruikers lezen informatie op een webpagina van boven naar beneden. Dan is het belangrijk dat de informatie ook in deze leesvolgorde in de gegenereerde code, de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), ', staat.'] }), '\n', (0, i.jsx)(n.p, { children: 'Screenreadergebruikers kunnen een lijst met de kopjes oproepen en een kopje kiezen vanwaar te lezen op een pagina.\nAls er gerelateerde informatie boven een kopje staat, mist de screenreadergebruiker deze inhoud.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:\nIn een lijst met evenementen staat de categorie en de datum van het evenement boven het kopje. Alleen een visueel kader rondom de gegevens van het evenement, is duidelijk wat bij elkaar hoort. De screenreadergebruiker mist dan de juiste categorie en datum bij dat evenement als deze vanaf het kopje gaat lezen. Dit wordt gedemonstreerd met de screenreader VoiceOver in de onderstaande video.' }), '\n', (0, i.jsx)(n.h3, { id: 'demo-betekenisvolle-volgorde-in-de-screenreader-voiceover', children: 'Demo betekenisvolle volgorde in de screenreader VoiceOver' }), '\n', (0, i.jsx)(t.Y, { videoId: 'OEe1wkRK2jg' }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Meerdere stappen: ', (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Visueel ontwerp: ', (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bron', children: 'Bron' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://adrianroselli.com/2015/09/source-order-matters.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Source Order Matters' }) }), ' van Adrian Roselli.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(a.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'De handigste manier om dit goed te testen is met een screenreader, zoals VoiceOver voor de Mac of NVDA voor Windows.' }), '\n', (0, i.jsx)(n.p, { children: 'Nuttige links voor het testen met screenreaders:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-voiceover-macos', children: 'Zelf testen met screenreaders - VoiceOver (macOS)' }), ' op Toegankelijk Online.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-nvda-windows', children: 'Zelf testen met screenreaders - NVDA (Windows)' }), ' op Toegankelijk Online.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing', children: (0, i.jsx)('span', { lang: 'en', children: 'Screen reader testing' }) }), ' op GOV.UK.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://dequeuniversity.com/screenreaders/', children: (0, i.jsx)('span', { lang: 'en', children: 'Screen Reader Keyboard Shortcuts and Gestures' }) }), ' op Deque University.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Controleer ook de HTML-structuur met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Je kunt ook testen door CSS uit te schakelen. Let daarbij wel op verschillen in leesvolgorde in de DOM en visuele volgorde. In CSS kan de leesvolgorde namelijk aangepast worden, bijvoorbeeld met ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout', children: 'CSS grid layout' }), ' en ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox', children: 'Flexbox' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['CSS uitschakelen is het makkelijkst in Firefox. Kies in het menu ', (0, i.jsx)('span', { lang: 'en', children: "'View' > 'Page style' > 'No style'" }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': dit succescriterium gaat alleen over de leesvolgorde. De volgorde van de toetsenbordfocus valt onder het ', (0, i.jsx)(n.a, { href: '/wcag/2.4.3', children: 'WCAG-succescriterium Focus volgorde' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Test:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Is de volgorde waarin de inhoud van boven naar beneden wordt voorgelezen begrijpelijk als je het scherm niet ziet? Met andere woorden, is het begrip van de inhoud onafhankelijk van het visueel ontwerp?' }), '\n', (0, i.jsx)(n.li, { children: 'Wordt alle inhoud die bij een kopje hoort ook n\xe1 het kopje voorgelezen?' }), '\n', (0, i.jsx)(n.li, { children: 'Is het begrijpelijk welke metadata, zoals auteur, categorie of datum, bij welke inhoud hoort?' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Test de volgorde van de inhoud ook in verschillende responsieve weergaves en ori\xebntaties. Zoom ook in tot 400%. Verandert de volgorde van de inhoud? Is de voorgelezen inhoud nog steeds logisch en betekenisvol?' }), '\n', (0, i.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-de-volgorde-van-de-inhoud-is-niet-meer-logisch-voor-kleine-schermgroottes', children: 'Fout: de volgorde van de inhoud is niet meer logisch voor kleine schermgroottes' }), '\n', (0, i.jsx)(n.p, { children: 'De leesvolgorde is anders voor ingezoomde weergaves dan voor de desktopweergave. Controleer de leesvolgorde voor de verschillende breedtes en ori\xebntaties en zoom ook in tot 400%. Overleg dit ook met de designer.' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-er-staat-content-boven-een-gerelateerd-kopje', children: 'Fout: er staat content boven een gerelateerd kopje' }), '\n', (0, i.jsx)(n.p, { children: 'Het is voor dit criterium van belang dat content die bij een kopje hoort zich onder dat kopje bevindt, in ieder geval in de leesvolgorde. Maar soms wordt in het ontwerp gekozen om content die bij een kopje hoort visueel boven dat kopje te plaatsen. Overleg dan met de designer of dit eventueel anders kan, of pas de volgorde aan met CSS (zie hieronder).' }), '\n', (0, i.jsxs)(n.p, { children: ['Het is mogelijk om de visuele volgorde met CSS-code aan te passen zodat de inhoud anders wordt voorgelezen van de visuele volgorde, maar pas hierbij op. De ', (0, i.jsx)(n.strong, { children: 'visuele' }), ' volgorde van de toetsenbordfocus moet ook betekenisvol zijn, zie hiervoor het ', (0, i.jsx)(n.a, { href: '/wcag/2.4.3', children: 'WCAG-succescriterium 2.4.3 Focusvolgorde' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#meaningful-sequence', children: (0, i.jsx)('span', { lang: 'en', children: '1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#betekenisvolle-volgorde', children: '1.3.2 Betekenisvolle volgorde' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(d.CY, { children: (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(c.ZP, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(h.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  45054: (e, n, r) => {
   r.d(n, { ZP: () => t });
   var i = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52057: (e, n, r) => {
   r.d(n, { ZP: () => t });
   var i = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  78836: (e, n, r) => {
   r.d(n, { ZP: () => t });
   var i = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72657: (e, n, r) => {
   r.d(n, { V: () => t });
   var i = r(4814);
   r(75271);
   const o = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = r(52676);
   const t = (e) => {
    let { children: n, className: r, level: t = 1, suffix: l, ...d } = e;
    return (0, s.jsxs)('hgroup', { className: (0, i.Z)(o['nlds-inline-heading-group'], `utrecht-heading-${t}`, r), ...d, children: [(0, s.jsx)('h1', { className: (0, i.Z)(o['nlds-inline-heading-group__heading']), children: n }), l && (0, s.jsxs)('p', { className: (0, i.Z)(o['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, r) => {
   r.d(n, { U: () => c });
   var i = r(24785),
    o = r(46506),
    s = (r(75271), r(52676));
   const t = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: o } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + o;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: o.XJ, h2: o.aC, h3: o.k8, h4: o.by, h5: o.Cd }, 3: { h1: o.aC, h2: o.k8, h3: o.by, h4: o.Cd, h5: o.Cd }, 4: { h1: o.k8, h2: o.by, h3: o.Cd, h4: o.Cd, h5: o.Cd }, 5: { h1: o.by, h2: o.Cd, h3: o.Cd, h4: o.Cd, h5: o.Cd }, 6: { h1: o.Cd, h2: o.Cd, h3: o.Cd, h4: o.Cd, h5: o.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: r, ...i } = n;
      return (0, s.jsx)('img', { ...i, src: t(e, r), className: 'utrecht-img utrecht-img--fit' });
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
     let { children: n, omitH1: r = !1, headingLevel: o = 1, baseUrl: t = '' } = e;
     return (0, s.jsx)(i.Z, { components: { ...a(r, o), ...d(t) }, children: n });
    };
  },
  73381: (e, n, r) => {
   r.d(n, { Y: () => d });
   var i = r(4814),
    o = (r(75271), r(95110)),
    s = r.n(o);
   const t = { 'video-player': 'video-player__6fg' };
   var l = r(52676);
   const d = (e) => {
    let { videoId: n, className: r, ...o } = e;
    return (0, l.jsx)(s(), { url: `https://youtube.com/watch?v=${n}`, className: `${(0, i.Z)(t['video-player'])} ${r}`, width: '100%', height: '100%', controls: !0, ...o, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
  71595: (e, n, r) => {
   r.d(n, { j: () => d });
   var i = r(46506),
    o = (r(75271), r(72657));
   const s = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    t = 'nlds-inline-heading-group__badge_TgvT';
   var l = r(52676);
   const d = (e) => {
    let { children: n, conformanceLevel: r, ...d } = e;
    return (0, l.jsx)(o.V, { className: s, suffix: r && (0, l.jsx)(i.Ou, { className: t, children: r }), ...d, children: n });
   };
  },
 },
]);
