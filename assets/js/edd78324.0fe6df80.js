'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [13014],
 {
  8683(e, n, r) {
   (r.r(n), r.d(n, { assets: () => m, contentTitle: () => v, default: () => b, frontMatter: () => p, metadata: () => i, toc: () => j }));
   const i = JSON.parse('{"id":"wcag/1.3.02","title":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","description":"Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.","source":"@site/docs/wcag/1.3.02.mdx","sourceDirName":"wcag","slug":"/wcag/1.3.2","permalink":"/wcag/1.3.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.3.2 Betekenisvolle volgorde","pagination_label":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","description":"Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.","slug":"1.3.2","keywords":["WCAG","A","waarneembaar","aanpasbaar","perceivable","adaptable","meaningful sequence"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.3.1 Info en relaties","permalink":"/wcag/1.3.1"},"next":{"title":"WCAG-succescriterium 1.3.3 Zintuiglijke eigenschappen","permalink":"/wcag/1.3.3"}}');
   var t = r(86070),
    o = r(18439),
    s = r(12013),
    l = r(75397),
    a = r(80003),
    d = r(46447),
    c = r(52105),
    h = r(28890),
    u = r(47219),
    g = r(92544);
   const p = { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.2 Betekenisvolle volgorde', pagination_label: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '1.3.2', keywords: ['WCAG', 'A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'meaningful sequence'] },
    v = void 0,
    m = {},
    j = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, ...g.RM, { value: 'Demo betekenisvolle volgorde in de screenreader VoiceOver', id: 'demo-betekenisvolle-volgorde-in-de-screenreader-voiceover', level: 3 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bron', id: 'bron', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: de volgorde van de inhoud is niet meer logisch voor kleine schermgroottes', id: 'fout-de-volgorde-van-de-inhoud-is-niet-meer-logisch-voor-kleine-schermgroottes', level: 3 }, { value: 'Fout: er staat content boven een gerelateerd kopje', id: 'fout-er-staat-content-boven-een-gerelateerd-kopje', level: 3 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...h.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...u.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g.Ay, {}), '\n', (0, t.jsxs)(n.p, { children: ['Gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' lezen informatie op een webpagina van boven naar beneden. Dan is het belangrijk dat de informatie ook in deze leesvolgorde in de gegenereerde code, de ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), ', staat.'] }), '\n', (0, t.jsx)(n.p, { children: 'Screenreadergebruikers kunnen een lijst met de kopjes oproepen en een kopje kiezen vanwaar te lezen op een pagina.\nAls er gerelateerde informatie boven een kopje staat, mist de screenreadergebruiker deze inhoud.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:\nIn een lijst met evenementen staat de categorie en de datum van het evenement boven het kopje. Alleen een visueel kader rondom de gegevens van het evenement, is duidelijk wat bij elkaar hoort. De screenreadergebruiker mist dan de juiste categorie en datum bij dat evenement als deze vanaf het kopje gaat lezen. Dit wordt gedemonstreerd met de screenreader VoiceOver in de onderstaande video.' }), '\n', (0, t.jsx)(n.h3, { id: 'demo-betekenisvolle-volgorde-in-de-screenreader-voiceover', children: 'Demo betekenisvolle volgorde in de screenreader VoiceOver' }), '\n', (0, t.jsx)(l.L, { id: 'OEe1wkRK2jg', title: 'Demo betekenisvolle volgorde in de screenreader VoiceOver' }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang/', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'bron', children: 'Bron' }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: 'https://adrianroselli.com/2015/09/source-order-matters.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Source Order Matters' }) }), ' van Adrian Roselli.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(c.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'De handigste manier om dit goed te testen is met een screenreader, zoals VoiceOver voor de Mac of NVDA voor Windows.' }), '\n', (0, t.jsx)(n.p, { children: 'Nuttige links voor het testen met screenreaders:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-voiceover-macos', children: 'Zelf testen met screenreaders - VoiceOver (macOS)' }), ' op Toegankelijk Online.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-nvda-windows', children: 'Zelf testen met screenreaders - NVDA (Windows)' }), ' op Toegankelijk Online.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing', children: (0, t.jsx)('span', { lang: 'en', children: 'Screenreader testing' }) }), ' op GOV.UK.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://dequeuniversity.com/screenreaders/', children: (0, t.jsx)('span', { lang: 'en', children: 'Screen Reader Keyboard Shortcuts and Gestures' }) }), ' op Deque University.'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Controleer ook de HTML-structuur met een ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt ook testen door CSS uit te schakelen. Let daarbij wel op verschillen in leesvolgorde in de DOM en visuele volgorde. In CSS kan de leesvolgorde namelijk aangepast worden, bijvoorbeeld met ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout', children: 'CSS grid layout' }), ' en ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox', children: 'Flexbox' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['CSS uitschakelen is het makkelijkst in Firefox. Kies in het menu ', (0, t.jsx)('span', { lang: 'en', children: "'View' > 'Page style' > 'No style'" }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': dit succescriterium gaat alleen over de leesvolgorde. De volgorde van de toetsenbordfocus valt onder het ', (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'WCAG-succescriterium Focus volgorde' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Test:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Is de volgorde waarin de inhoud van boven naar beneden wordt voorgelezen begrijpelijk als je het scherm niet ziet? Met andere woorden, is het begrip van de inhoud onafhankelijk van het visueel ontwerp?' }), '\n', (0, t.jsx)(n.li, { children: 'Wordt alle inhoud die bij een kopje hoort ook n\xe1 het kopje voorgelezen?' }), '\n', (0, t.jsx)(n.li, { children: 'Is het begrijpelijk welke metadata, zoals auteur, categorie of datum, bij welke inhoud hoort?' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Test de volgorde van de inhoud ook in verschillende responsieve weergaves en ori\xebntaties. Zoom ook in tot 400%. Verandert de volgorde van de inhoud? Is de voorgelezen inhoud nog steeds logisch en betekenisvol?' }), '\n', (0, t.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-de-volgorde-van-de-inhoud-is-niet-meer-logisch-voor-kleine-schermgroottes', children: 'Fout: de volgorde van de inhoud is niet meer logisch voor kleine schermgroottes' }), '\n', (0, t.jsx)(n.p, { children: 'De leesvolgorde is anders voor ingezoomde weergaves dan voor de desktopweergave. Controleer de leesvolgorde voor de verschillende breedtes en ori\xebntaties en zoom ook in tot 400%. Overleg dit ook met de designer.' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-er-staat-content-boven-een-gerelateerd-kopje', children: 'Fout: er staat content boven een gerelateerd kopje' }), '\n', (0, t.jsx)(n.p, { children: 'Het is voor dit criterium van belang dat content die bij een kopje hoort zich onder dat kopje bevindt, in ieder geval in de leesvolgorde. Maar soms wordt in het ontwerp gekozen om content die bij een kopje hoort visueel boven dat kopje te plaatsen. Overleg dan met de designer of dit eventueel anders kan, of pas de volgorde aan met CSS (zie hieronder).' }), '\n', (0, t.jsxs)(n.p, { children: ['Het is mogelijk om de visuele volgorde met CSS-code aan te passen zodat de inhoud anders wordt voorgelezen van de visuele volgorde, maar pas hierbij op. De ', (0, t.jsx)(n.strong, { children: 'visuele' }), ' volgorde van de toetsenbordfocus moet ook betekenisvol zijn, zie hiervoor het ', (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'WCAG-succescriterium 2.4.3 Focusvolgorde' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#meaningful-sequence', children: (0, t.jsx)('span', { lang: 'en', children: '1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#meaningful-sequence', children: '1.3.2 Betekenisvolle volgorde' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.K7, { children: (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(u.Ay, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k(e);
   }
  },
  12013(e, n, r) {
   r.d(n, { o: () => c });
   var i = r(18439),
    t = r(46447),
    o = r(86070);
   const s = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...r }) => (0, o.jsx)('img', { ...r, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: s = {} }) => (0, o.jsx)(i.x, { components: { ...d(n, r), ...a(t), ...s }, children: e });
  },
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => l });
   var i = r(30758);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28890(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  47219(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52105(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72642(e, n, r) {
   r.d(n, { p: () => o });
   var i = r(13526),
    t = r(86070);
   const o = ({ children: e, className: n, level: r = 1, suffix: o, ...s }) => (0, t.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  75397(e, n, r) {
   r.d(n, { L: () => a });
   var i = r(86070),
    t = r(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function s(e, n, r, i, t) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == t ? void 0 : t.name) || n, thumbnailUrl: [(null == t ? void 0 : t.thumbnailUrl) || r], embedUrl: (null == t ? void 0 : t.embedUrl) || `${i}/embed/${e}`, contentUrl: (null == t ? void 0 : t.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == t ? void 0 : t.description) && { description: t.description }), ...((null == t ? void 0 : t.uploadDate) && { uploadDate: t.uploadDate }), ...((null == t ? void 0 : t.duration) && { duration: t.duration }) };
    return JSON.stringify(o);
   }
   const l = t.forwardRef(function (e, n) {
     const [r, l] = t.useState(!1),
      [a, d] = t.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      u = e.title,
      g = e.poster || 'hqdefault',
      p = e.announce || 'Watch',
      v = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      m = t.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(v ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, r) => {
          n.append(r, e);
         }),
        n
       );
      }, [e.muted, v, e.enableJsApi, e.playlist, c, e.params]),
      j = t.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      k = t.useMemo(() => (e.playlist ? `${j}/embed/videoseries?${m.toString()}` : `${j}/embed/${c}?${m.toString()}`), [e.playlist, j, c, m]),
      b = !e.thumbnail && !e.playlist && 'maxresdefault' === g,
      f = e.webp ? 'webp' : 'jpg',
      x = e.webp ? 'vi_webp' : 'vi',
      w = b
       ? ((e, n, r, i = 'maxresdefault') => {
          const [s, l] = (0, t.useState)('');
          return (
           (0, t.useEffect)(() => {
            const t = `https://img.youtube.com/${n}/${e}/${i}.${r}`,
             s = `https://img.youtube.com/${n}/${e}/hqdefault.${r}`,
             a = o[i],
             d = new Image();
            ((d.onload = () => {
             d.width < a ? l(s) : l(t);
            }),
             (d.onerror = () => l(s)),
             (d.src = t));
           }, [e, n, r, i]),
           s
          );
         })(e.id, x, f, g)
       : null,
      y = t.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${x}/${e.playlist ? h : c}/${g}.${f}`, [e.thumbnail, w, x, e.playlist, h, c, g, f]),
      C = e.activatedClass || 'lyt-activated',
      S = e.adNetwork || !1,
      z = e.aspectHeight || 9,
      _ = e.aspectWidth || 16,
      T = e.iframeClass || '',
      A = e.playerClass || 'lty-playbtn',
      W = e.wrapperClass || 'yt-lite',
      G = t.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      R = e.rel ? 'prefetch' : 'preload',
      D = e.containerElement || 'article',
      M = !1 !== e.noscriptFallback;
     return (
      t.useEffect(() => {
       a && (G(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
      }, [a, G, e.focusOnLoad, n]),
      (0, i.jsxs)(i.Fragment, {
       children: [
        !e.lazyLoad && (0, i.jsx)('link', { rel: R, href: y, as: 'image' }),
        (0, i.jsx)(i.Fragment, { children: r && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: j }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, i.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: s(e.id, u, y, j, e.seo) } }),
        M && !e.playlist && (0, i.jsx)('noscript', { children: (0, i.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
        (0, i.jsxs)(D, {
         onPointerOver: () => {
          r || l(!0);
         },
         onClick: () => {
          a || d(!0);
         },
         className: `${W} ${a ? C : ''}`,
         'data-title': u,
         role: a ? void 0 : 'img',
         'aria-label': a ? void 0 : `${u} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${y})` }), '--aspect-ratio': (z / _) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !a && (0, i.jsx)('img', { src: y, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, i.jsx)('button', { type: 'button', className: A, 'aria-label': `${p} ${u}`, 'aria-hidden': a || void 0, tabIndex: a ? -1 : 0, children: (0, i.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), a && (0, i.jsx)('iframe', { ref: n, className: T, title: u, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: k, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    a = ({ id: e, title: n, ...r }) => (0, i.jsx)(l, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...r });
  },
  80003(e, n, r) {
   r.d(n, { E: () => s });
   var i = r(46447),
    t = r(72642),
    o = r(86070);
   const s = ({ children: e, conformanceLevel: n, ...r }) => (0, o.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, o.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e });
  },
  92544(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat iedereen de tekst van een webpagina kan volgen en dat het begrip hiervan niet alleen afhankelijk is van de visuele presentatie.' }), '\n', (0, i.jsxs)(n.p, { children: ['Wanneer een gebruiker de webpagina inzoomt, of met een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' de inhoud van boven naar beneden leest, moet de informatie en de volgorde van de informatie logisch en begrijpelijk zijn.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
