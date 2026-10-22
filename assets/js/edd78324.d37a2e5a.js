'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [13014],
 {
  7891(e, n, r) {
   r.d(n, { L: () => a });
   var i = r(20201);
   const o = { nl: { skipLink: 'Naar de inhoud', mainNavLabel: 'Hoofdmenu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Sluiten', open: 'Open', search: 'Zoeken', searchAriaLabel: 'Zoekterm', searchRequiredError: 'Dit veld is verplicht, maar het is niet ingevuld.', breadcrumbLabel: 'Kruimelpad', logoAlt: 'Logo van NL Design System', logoLinkAlt: 'Logo van NL Design System, naar de homepage', watch: 'Bekijk', subnavigation: 'subnavigatie' }, en: { skipLink: 'To main content', mainNavLabel: 'Main menu', footerNavLabel: 'Submenu', menu: 'Menu', close: 'Close', open: 'Open', search: 'Search', searchAriaLabel: 'Searchterm', searchRequiredError: 'This field is required, but it was left empty.', breadcrumbLabel: 'Breadcrumbs', logoAlt: 'Logo of NL Design System', logoLinkAlt: 'Logo of NL Design System, to the homepage', watch: 'Watch', subnavigation: 'subnavigation' } };
   var t = r(86070);
   const a = ({ id: e, title: n, lang: r = 'nl', ...a }) => (0, t.jsx)(i.Ay, { lazyLoad: !0, adNetwork: !1, announce: o[r].watch, cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...a });
  },
  15814(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => t });
   var i = r(86070),
    o = r(18439);
   const t = [];
   function a(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een bezoeker die een screenreader gebruikt, hoort de content van een pagina in de volgorde waarin die in de HTML staat. Die volgorde komt overeen met wat een ziende bezoeker op het scherm ziet. Zo begrijpt iedereen welke informatie bij welk onderdeel hoort, ongeacht hoe iemand de pagina gebruikt.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24703(e, n, r) {
   r.d(n, { o: () => c });
   var i = r(18439),
    o = r(46447),
    t = r(86070);
   const a = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: o } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + o;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: o.fV, h2: o._B, h3: o.f_, h4: o.mM, h5: o.TT }, 3: { h1: o._B, h2: o.f_, h3: o.mM, h4: o.TT, h5: o.TT }, 4: { h1: o.f_, h2: o.mM, h3: o.TT, h4: o.TT, h5: o.TT }, 5: { h1: o.mM, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT }, 6: { h1: o.TT, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT } },
    d = (e) => ({ img: ({ src: n, ...r }) => (0, t.jsx)('img', { ...r, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    s = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: o = '', components: a = {} }) => (0, t.jsx)(i.x, { components: { ...s(n, r), ...d(o), ...a }, children: e });
  },
  25431(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => t });
   var i = r(86070),
    o = r(18439);
   const t = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  29882(e, n, r) {
   r.d(n, { Ay: () => a });
   var i = r(86070),
    o = r(18439);
   function t(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  30662(e, n, r) {
   r.d(n, { D4: () => D, GP: () => z, KC: () => H, Nd: () => A, Rt: () => N, Vj: () => T, Wk: () => V, bz: () => L, cB: () => C, e5: () => B, hY: () => G, jK: () => W, jP: () => _, ob: () => R, rI: () => S, t4: () => M, vP: () => y, vg: () => E });
   var i = r(92081),
    o = r(90578),
    t = r(96345),
    a = r(64249),
    l = r(4603),
    d = r(91525),
    s = r(23436),
    c = r(1375),
    h = r(4077),
    g = r(58315),
    v = r(73563),
    p = r(35193),
    j = r(82999),
    u = r(13088),
    m = r(43864),
    x = r(24214),
    k = r(79532),
    b = r(60529),
    f = r(86070);
   const w = { width: '1em', height: '1em' },
    A = () => (0, f.jsx)(i.A, { ...w }),
    z = () => (0, f.jsx)(o.A, { ...w }),
    S = () => (0, f.jsx)(t.A, { ...w }),
    T = () => (0, f.jsx)(a.A, { ...w }),
    L = () => (0, f.jsx)(l.A, { ...w }),
    N = () => (0, f.jsx)(d.A, { ...w }),
    C = () => (0, f.jsx)(s.A, { ...w }),
    y = () => (0, f.jsx)(c.A, { ...w }),
    W = () => (0, f.jsx)(h.A, { ...w }),
    _ = () => (0, f.jsx)(g.A, { ...w }),
    M = () => (0, f.jsx)(v.A, { ...w }),
    D = () => (0, f.jsx)(p.A, { ...w }),
    G = () => (0, f.jsx)(j.A, { ...w }),
    H = () => (0, f.jsx)(u.A, { ...w }),
    V = () => (0, f.jsx)(m.A, { ...w }),
    B = () => (0, f.jsx)(x.A, { ...w }),
    R = () => (0, f.jsx)(k.A, { ...w }),
    E = () => (0, f.jsx)(b.A, { ...w });
  },
  46276(e, n, r) {
   r.d(n, { p: () => t });
   var i = r(13526),
    o = r(86070);
   const t = ({ children: e, className: n, level: r = 1, suffix: t, ...a }) => (0, o.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...a, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), t && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [t ? ' ' : '', t] })] });
  },
  56528(e, n, r) {
   r.d(n, { $: () => c, x: () => s });
   var i = r(30662),
    o = r(46447),
    t = r(13526),
    a = r(45795),
    l = r(30758),
    d = r(86070);
   const s = (0, l.createContext)({}),
    c = ({ title: e, appearance: n, description: r, children: l, figure: c = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      g = c ? 'figure' : 'div',
      v = c ? 'figcaption' : 'div',
      p = 'string' == typeof r ? (0, d.jsx)(a.oz, { components: { a: o.N_ }, children: r }) : r;
     return (0, d.jsxs)(g, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, d.jsx)(i.jP, {}) }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(o.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, d.jsx)(i.jK, {}) }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(o.fz, { children: e })] }), p] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(s.Provider, { value: { title: e, type: h[n] }, children: l }) })] });
    };
  },
  61473(e, n, r) {
   r.d(n, { E: () => a });
   var i = r(46447),
    o = r(46276),
    t = r(86070);
   const a = ({ children: e, conformanceLevel: n, ...r }) => (globalThis.isAstro ? null : (0, t.jsx)(o.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, t.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e }));
  },
  61856(e, n, r) {
   (r.r(n), r.d(n, { assets: () => m, contentTitle: () => u, default: () => b, frontMatter: () => j, metadata: () => i, toc: () => x }));
   const i = JSON.parse('{"id":"wcag/1.3.02","title":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","description":"Als het belangrijk is dat de inhoud van een pagina in een bepaalde volgorde wordt gelezen, moet hulpsoftware die volgorde ook kunnen volgen.","source":"@site/docs/wcag/1.3.02.mdx","sourceDirName":"wcag","slug":"/wcag/1.3.2","permalink":"/wcag/1.3.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","title_sm":"WCAG 1.3.2: Betekenisvolle volgorde","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.3.2 Betekenisvolle volgorde","pagination_label":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","description":"Als het belangrijk is dat de inhoud van een pagina in een bepaalde volgorde wordt gelezen, moet hulpsoftware die volgorde ook kunnen volgen.","slug":"1.3.2","conformance_level":"Niveau A","keywords":["WCAG","Niveau A","waarneembaar","aanpasbaar","perceivable","adaptable","meaningful sequence","leesvolgorde","betekenisvolle volgorde","DOM-volgorde","screenreader","schermlezer","CSS-volgorde","toegankelijkheid","WCAG 1.3.2"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.3.1 Info en relaties","permalink":"/wcag/1.3.1"},"next":{"title":"WCAG-succescriterium 1.3.3 Zintuiglijke eigenschappen","permalink":"/wcag/1.3.3"}}');
   var o = r(86070),
    t = r(18439),
    a = r(56528),
    l = r(24703),
    d = r(7891),
    s = r(61473),
    c = r(93681),
    h = r(25431),
    g = r(88275),
    v = r(29882),
    p = r(15814);
   const j = { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', title_sm: 'WCAG 1.3.2: Betekenisvolle volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.2 Betekenisvolle volgorde', pagination_label: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', description: 'Als het belangrijk is dat de inhoud van een pagina in een bepaalde volgorde wordt gelezen, moet hulpsoftware die volgorde ook kunnen volgen.', slug: '1.3.2', conformance_level: 'Niveau A', keywords: ['WCAG', 'Niveau A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'meaningful sequence', 'leesvolgorde', 'betekenisvolle volgorde', 'DOM-volgorde', 'screenreader', 'schermlezer', 'CSS-volgorde', 'toegankelijkheid', 'WCAG 1.3.2'] },
    u = void 0,
    m = {},
    x = [...p.RM, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Metadata staat boven de kop van een artikel', id: 'metadata-staat-boven-de-kop-van-een-artikel', level: 3 }, { value: 'Kolommen waarvan de inhoud door elkaar loopt', id: 'kolommen-waarvan-de-inhoud-door-elkaar-loopt', level: 3 }, { value: 'Visuele volgorde wijkt af van de code door CSS', id: 'visuele-volgorde-wijkt-af-van-de-code-door-css', level: 3 }, { value: 'Tabelgegevens die los van elkaar worden voorgelezen', id: 'tabelgegevens-die-los-van-elkaar-worden-voorgelezen', level: 3 }, { value: 'Navigatieknoppen in een carrousel staan voor de inhoud', id: 'navigatieknoppen-in-een-carrousel-staan-voor-de-inhoud', level: 3 }, { value: 'Grafiek of diagram wordt in een onlogische volgorde voorgelezen', id: 'grafiek-of-diagram-wordt-in-een-onlogische-volgorde-voorgelezen', level: 3 }, { value: 'Uitklapbare content verschijnt op de verkeerde plek', id: 'uitklapbare-content-verschijnt-op-de-verkeerde-plek', level: 3 }, { value: 'Dialoogvenster laat de achterliggende pagina voorlezen', id: 'dialoogvenster-laat-de-achterliggende-pagina-voorlezen', level: 3 }, { value: 'Verborgen content wordt toch voorgelezen', id: 'verborgen-content-wordt-toch-voorgelezen', level: 3 }, { value: 'Demo lees- en focusvolgorde in de screenreader VoiceOver', id: 'demo-lees--en-focusvolgorde-in-de-screenreader-voiceover', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Voor iedereen', id: 'voor-iedereen', level: 3 }, { value: 'Voor developers', id: 'voor-developers', level: 3 }, { value: 'Gerelateerde succescriteria', id: 'gerelateerde-succescriteria', level: 2 }, { value: 'Relevante bronnen', id: 'relevante-bronnen', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...h.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function k(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', ol: 'ol', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(s.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), '\n', (0, o.jsx)(p.Ay, {}), '\n', (0, o.jsx)(n.p, { children: 'CSS kan elementen visueel verplaatsen zonder de HTML-volgorde te veranderen. Een datum die visueel bij een evenement hoort maar in de code erboven staat, wordt voorgelezen als onderdeel van het vorige evenement. Een navigatieknop die visueel na de content staat, maar in de code ervoor, wordt voorgelezen voordat de bezoeker weet wat de content is. De leesvolgorde mag afwijken van de visuele volgorde, maar de betekenis moet hetzelfde blijven.' }), '\n', (0, o.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, o.jsx)(n.h3, { id: 'metadata-staat-boven-de-kop-van-een-artikel', children: 'Metadata staat boven de kop van een artikel' }), '\n', (0, o.jsx)(n.p, { children: 'Alle inhoud die onder een kop staat, hoort bij die kop. Bezoekers die een screenreader gebruiken, navigeren van kop naar kop om de structuur van een pagina te begrijpen. Staat informatie zoals een datum of categorie boven de kop in de HTML, dan lijkt die informatie bij het vorige artikel te horen.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' inspecteer de HTML-volgorde in de DevTools. Staat de kop bovenaan in elk artikel, gevolgd door metadata en inhoud?'] }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Datum en categorie staan boven de kop', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<article>\n  <span class="datum">15 maart 2026</span>\n  <span class="categorie">Workshops</span>\n  <h3>Toegankelijkheid voor developers</h3>\n  <p>Leer hoe je toegankelijke componenten bouwt.</p>\n</article>\n' }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Kop staat bovenaan, gevolgd door metadata', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<article>\n  <h3>Toegankelijkheid voor developers</h3>\n  <span class="datum">15 maart 2026</span>\n  <span class="categorie">Workshops</span>\n  <p>Leer hoe je toegankelijke componenten bouwt.</p>\n</article>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer past de HTML-volgorde aan.'] }), '\n', (0, o.jsx)(n.h3, { id: 'kolommen-waarvan-de-inhoud-door-elkaar-loopt', children: 'Kolommen waarvan de inhoud door elkaar loopt' }), '\n', (0, o.jsx)(n.p, { children: 'Een pagina met twee kolommen groepeert de afbeelding en de beschrijving per kolom. De HTML bevat niet de afbeelding en de beschrijving, maar eerst alle afbeeldingen en daarna alle beschrijvingen. Dan begrijpt een screenreadergebruiker niet welke beschrijving bij welke afbeelding hoort.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' schakel CSS uit in de browser (Firefox: View > Page Style > No Style). Staat de informatie die bij elkaar hoort ook bij elkaar in de HTML?'] }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Alle afbeeldingen eerst, dan alle beschrijvingen', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="kolommen">\n  <img src="project-a.jpg" alt="Screenshot van Project A" />\n  <img src="project-b.jpg" alt="Screenshot van Project B" />\n  <p>Project A is een webapplicatie voor gemeenten.</p>\n  <p>Project B is een designsysteem voor de overheid.</p>\n</div>\n' }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Afbeelding en beschrijving bij elkaar', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="kolommen">\n  <div class="kolom">\n    <img src="project-a.jpg" alt="Screenshot van Project A" />\n    <p>Project A is een webapplicatie voor gemeenten.</p>\n  </div>\n  <div class="kolom">\n    <img src="project-b.jpg" alt="Screenshot van Project B" />\n    <p>Project B is een designsysteem voor de overheid.</p>\n  </div>\n</div>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer groepeert de content per kolom in de HTML.'] }), '\n', (0, o.jsx)(n.h3, { id: 'visuele-volgorde-wijkt-af-van-de-code-door-css', children: 'Visuele volgorde wijkt af van de code door CSS' }), '\n', (0, o.jsxs)(n.p, { children: ['Met CSS Grid en Flexbox kun je elementen visueel herschikken zonder de HTML aan te passen. Een screenreader volgt de HTML-volgorde, niet de visuele volgorde. Als de volgorde betekenis heeft, pas je de HTML aan in plaats van CSS ', (0, o.jsx)(n.code, { children: 'order' }), ' te gebruiken.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' zoek in de CSS naar ', (0, o.jsx)(n.code, { children: 'order' }), ', ', (0, o.jsx)(n.code, { children: 'flex-direction: row-reverse' }), ', ', (0, o.jsx)(n.code, { children: 'flex-direction: column-reverse' }), ' en ', (0, o.jsx)(n.code, { children: 'grid-row' }), '/', (0, o.jsx)(n.code, { children: 'grid-column' }), '. Controleer of de HTML-volgorde logisch blijft.'] }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'HTML-volgorde wijkt af door CSS order', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="stappen">\n  <div style="order: 2;">Stap 2: Kies een template</div>\n  <div style="order: 3;">Stap 3: Publiceer</div>\n  <div style="order: 1;">Stap 1: Maak een account</div>\n</div>\n' }) }) }), '\n', (0, o.jsx)(n.p, { children: 'Een screenreader leest hier: "Stap 2", "Stap 3", "Stap 1".' }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'HTML-volgorde komt overeen met de betekenisvolle volgorde', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="stappen">\n  <div>Stap 1: Maak een account</div>\n  <div>Stap 2: Kies een template</div>\n  <div>Stap 3: Publiceer</div>\n</div>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer past de HTML-volgorde aan zodat die overeenkomt met de betekenisvolle volgorde.'] }), '\n', (0, o.jsx)(n.h3, { id: 'tabelgegevens-die-los-van-elkaar-worden-voorgelezen', children: 'Tabelgegevens die los van elkaar worden voorgelezen' }), '\n', (0, o.jsxs)(n.p, { children: ['Een tabel koppelt gegevens aan elkaar: een dag aan een openingstijd, een naam aan een functie. Een correcte ', (0, o.jsx)(n.code, { children: '<table>' }), ' met ', (0, o.jsx)(n.code, { children: '<tr>' }), ', ', (0, o.jsx)(n.code, { children: '<th>' }), ' en ', (0, o.jsx)(n.code, { children: '<td>' }), ' behoudt die koppeling. Een tabel nagebouwd met ', (0, o.jsx)(n.code, { children: '<div>' }), '-elementen en CSS kan ertoe leiden dat een screenreader eerst alle dagen voorleest en daarna pas alle tijden.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' gebruik de ', (0, o.jsx)('span', { lang: 'en', children: 'Web Developer' }), '-extensie (tab Miscellaneous > Linearize Page) om de tabel te lineariseren. Klopt de koppeling tussen de gegevens nog?'] }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Correcte tabel behoudt de koppeling tussen gegevens', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<table>\n  <tr>\n    <th>Dag</th>\n    <th>Openingstijden</th>\n  </tr>\n  <tr>\n    <td>Maandag</td>\n    <td>09:00 - 17:00</td>\n  </tr>\n  <tr>\n    <td>Dinsdag</td>\n    <td>09:00 - 17:00</td>\n  </tr>\n</table>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer bouwt de tabel met correcte HTML-elementen.'] }), '\n', (0, o.jsx)(n.h3, { id: 'navigatieknoppen-in-een-carrousel-staan-voor-de-inhoud', children: 'Navigatieknoppen in een carrousel staan voor de inhoud' }), '\n', (0, o.jsx)(n.p, { children: 'De inhoud van een carrousel is belangrijk voor de bezoeker. Staan de vorige- en volgende-knoppen boven de slides in de HTML, dan leest een screenreader eerst "vorige", "volgende" en daarna pas de inhoud. De bezoeker weet dan nog niet wat de slides bevatten.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' inspecteer de HTML-volgorde in de DevTools. Staat de slide-content voor de navigatieknoppen?'] }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Knoppen staan voor de content', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="carrousel">\n  <button>Vorige</button>\n  <button>Volgende</button>\n  <div class="slide">Slide 1: Onze diensten</div>\n</div>\n' }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Content eerst, dan de knoppen', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="carrousel">\n  <div class="slide">Slide 1: Onze diensten</div>\n  <button>Vorige</button>\n  <button>Volgende</button>\n</div>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer past de HTML-volgorde aan.'] }), '\n', (0, o.jsx)(n.h3, { id: 'grafiek-of-diagram-wordt-in-een-onlogische-volgorde-voorgelezen', children: 'Grafiek of diagram wordt in een onlogische volgorde voorgelezen' }), '\n', (0, o.jsx)(n.p, { children: 'SVG-elementen die tekst bevatten, worden voorgelezen in de volgorde waarin ze in de code staan. Dat kan betekenen: eerst de waarden van de X-as, dan de Y-as als losse getallen, en pas daarna de uitleg van de assen. Bied bij complexe grafieken een tekstueel alternatief aan, zoals een tabel met dezelfde data.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' navigeer met een screenreader door de grafiek. Is de volgorde begrijpelijk? Zo niet, controleer of er een alternatief zoals een tabel beschikbaar is.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer voegt een tekstueel alternatief toe, bijvoorbeeld een ', (0, o.jsx)(n.a, { href: '/table/', children: 'tabel' }), '.'] }), '\n', (0, o.jsx)(n.h3, { id: 'uitklapbare-content-verschijnt-op-de-verkeerde-plek', children: 'Uitklapbare content verschijnt op de verkeerde plek' }), '\n', (0, o.jsxs)(n.p, { children: ['Content die verschijnt na interactie staat direct na het element dat de content opent. Bij een ', (0, o.jsx)(n.a, { href: '/accordion/', children: 'Accordion' }), ' staat de inhoud van een paneel direct na de knop die het paneel opent. Bij ', (0, o.jsx)(n.a, { href: '/tabs/', children: 'Tabs' }), ' staat de inhoud van het actieve tabpaneel direct na de tablijst. Staat de content ergens anders in de HTML, dan leest een screenreader die op een onverwacht moment voor.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' open een accordion, tabpaneel of ander uitklapbaar element. Inspecteer de HTML-volgorde in de DevTools. Staat de content direct na de bijbehorende trigger?'] }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Accordion met content direct na de knop', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<div class="accordion">\n  <h3>\n    <button aria-expanded="true" aria-controls="paneel-1">\n      Veelgestelde vragen\n    </button>\n  </h3>\n  <div id="paneel-1">\n    <p>Hier staat het antwoord dat direct na de knop wordt voorgelezen.</p>\n  </div>\n</div>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer plaatst de content direct na de trigger in de HTML.'] }), '\n', (0, o.jsx)(n.h3, { id: 'dialoogvenster-laat-de-achterliggende-pagina-voorlezen', children: 'Dialoogvenster laat de achterliggende pagina voorlezen' }), '\n', (0, o.jsx)(n.p, { children: 'Een dialoogvenster dat de pagina bedekt, beperkt de screenreader tot de inhoud van dat venster. De achterliggende pagina wordt niet voorgelezen zolang het venster open is. Bij sluiten keert de focus terug naar het element dat het venster opende.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' open het dialoogvenster en navigeer met een screenreader. Kun je content achter het venster bereiken? Zo ja, dan is het venster niet goed afgeschermd.'] }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Dialog met aria-modal voorkomt dat de achtergrond wordt gelezen', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<dialog aria-modal="true" aria-label="Bevestig verwijdering">\n  <h2>Weet je het zeker?</h2>\n  <p>Dit item wordt permanent verwijderd.</p>\n  <button>Annuleren</button>\n  <button>Verwijderen</button>\n</dialog>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik het ', (0, o.jsx)(n.code, { children: '<dialog>' }), '-element met ', (0, o.jsx)(n.code, { children: 'aria-modal="true"' }), ', of beheer de focus handmatig en gebruik ', (0, o.jsx)(n.code, { children: 'aria-hidden="true"' }), ' op de achterliggende content.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer implementeert het dialoogvenster met het ', (0, o.jsx)(n.code, { children: '<dialog>' }), '-element of met correcte focus- en ARIA-afhandeling.'] }), '\n', (0, o.jsx)(n.h3, { id: 'verborgen-content-wordt-toch-voorgelezen', children: 'Verborgen content wordt toch voorgelezen' }), '\n', (0, o.jsxs)(n.p, { children: ['Een mobiel menu dat visueel verborgen is, is ook verborgen voor screenreaders. Verberg het met ', (0, o.jsx)(n.code, { children: 'display: none' }), ' of ', (0, o.jsx)(n.code, { children: 'visibility: hidden' }), '. Gebruik niet alleen ', (0, o.jsx)(n.code, { children: 'opacity: 0' }), ' of een negatieve positie, want dan vindt een screenreader het menu alsnog.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Hoe te testen:' }), ' navigeer met een screenreader door de pagina. Hoor je content die niet op het scherm zichtbaar is?'] }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Menu verborgen met alleen opacity', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<nav class="mobiel-menu" style="opacity: 0; position: absolute; left: -9999px;">\n  \x3c!-- screenreader vindt dit alsnog --\x3e\n</nav>\n' }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'display: none verbergt het voor iedereen', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<nav class="mobiel-menu" style="display: none;">\n  \x3c!-- ... --\x3e\n</nav>\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Wie kan dit oplossen:' }), ' een developer past de manier van verbergen aan.'] }), '\n', (0, o.jsx)(n.h3, { id: 'demo-lees--en-focusvolgorde-in-de-screenreader-voiceover', children: 'Demo lees- en focusvolgorde in de screenreader VoiceOver' }), '\n', (0, o.jsx)(d.L, { id: 'OEe1wkRK2jg', title: 'Demo betekenisvolle volgorde in de screenreader VoiceOver' }), '\n', (0, o.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, o.jsx)(n.h3, { id: 'voor-iedereen', children: 'Voor iedereen' }), '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsx)(n.li, { children: 'Lees de pagina van boven naar beneden zonder naar de lay-out te kijken. Is de volgorde van de informatie logisch? Begrijp je bij welk onderdeel elke tekst hoort?' }), '\n', (0, o.jsx)(n.li, { children: "Let op pagina's met meerdere kolommen, kaarten of lijsten. Zou de informatie nog kloppen als je alles onder elkaar zet?" }), '\n', (0, o.jsx)(n.li, { children: 'Open een accordion, tabpaneel of dialoogvenster. Wordt de nieuwe content op een logische plek getoond?' }), '\n', (0, o.jsx)(n.li, { children: 'Verklein het browservenster of draai je telefoon. Verandert de volgorde van de content? Is die nog steeds begrijpelijk?' }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'voor-developers', children: 'Voor developers' }), '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsx)(n.li, { children: 'Schakel CSS uit. In Firefox: kies in het menu View > Page Style > No Style. Bekijk of de content in een begrijpelijke volgorde staat.' }), '\n', (0, o.jsxs)(n.li, { children: ['Bekijk de ', (0, o.jsx)('span', { lang: 'en', children: 'Accessibility Tree' }), ' in de DevTools. Controleer of de volgorde overeenkomt met de visuele volgorde.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Zoek in je CSS naar ', (0, o.jsx)(n.code, { children: 'order' }), ', ', (0, o.jsx)(n.code, { children: 'flex-direction: row-reverse' }), ', ', (0, o.jsx)(n.code, { children: 'flex-direction: column-reverse' }), ' en ', (0, o.jsx)(n.code, { children: 'grid-row' }), '/', (0, o.jsx)(n.code, { children: 'grid-column' }), ' die de visuele volgorde veranderen. Controleer of de HTML-volgorde logisch blijft.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Lineariseer tabellen met de ', (0, o.jsx)('span', { lang: 'en', children: 'Web Developer' }), '-extensie (tab Miscellaneous > Linearize Page). Controleer of de informatie nog klopt.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Test dynamische content met een screenreader. Open een accordion, tab of dialoogvenster en controleer of de content in de juiste volgorde wordt voorgelezen. Lees de handleiding ', (0, o.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-voiceover-macos', children: 'Zelf testen met screenreaders - VoiceOver (macOS)' }), ' of ', (0, o.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-nvda-windows', children: 'NVDA (Windows)' }), ' op Toegankelijk Online als je daar nog niet mee hebt gewerkt.'] }), '\n', (0, o.jsx)(n.li, { children: 'Test in verschillende responsieve weergaves en zoom tot 400%. Controleer of de leesvolgorde intact blijft.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'gerelateerde-succescriteria', children: 'Gerelateerde succescriteria' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: '1.3.1 Info en relaties' }), ': de structuur van de content moet programmatisch bepaalbaar zijn.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: '2.4.3 Focusvolgorde' }), ': de volgorde van interactieve elementen bij toetsenbordnavigatie.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/4.1.2/', children: '4.1.2 Naam, rol, waarde' }), ': interactieve elementen moeten correct zijn geprogrammeerd.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'relevante-bronnen', children: 'Relevante bronnen' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#betekenisvolle-volgorde', children: 'WCAG 2.2: Succescriterium 1.3.2 Betekenisvolle volgorde' }), ' \u2014 de offici\xeble Nederlandstalige vertaling van het succescriterium. Gebruik dit als referentie voor de exacte eisen.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html', children: 'Understanding SC 1.3.2: Meaningful Sequence' }), ' \u2014 de W3C-uitleg bij het succescriterium, met technieken en voorbeelden (Engels).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-voiceover-macos', children: 'Zelf testen met screenreaders - VoiceOver (macOS)' }), ' \u2014 stap-voor-stap handleiding om met VoiceOver te testen op macOS. Handig voor het controleren van de leesvolgorde.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://toegankelijkonline.nl/artikelen/zelf-testen-met-screenreaders-nvda-windows', children: 'Zelf testen met screenreaders - NVDA (Windows)' }), ' \u2014 stap-voor-stap handleiding om met NVDA te testen op Windows.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://dequeuniversity.com/screenreaders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Screen Reader Keyboard Shortcuts and Gestures' }) }), ' \u2014 overzicht van toetsenbordsneltoetsen en gebaren per screenreader op Deque University (Engels).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://adrianroselli.com/2015/09/source-order-matters.html', children: (0, o.jsx)('span', { lang: 'en', children: 'Source Order Matters' }) }), ' \u2014 artikel van Adrian Roselli over waarom de broncodevolgorde ertoe doet (Engels).'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Formulieren: ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang/', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Formulieren: ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Content: ', (0, o.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }), '.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, o.jsx)(h.Ay, {}), '\n', (0, o.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#meaningful-sequence', children: (0, o.jsx)('span', { lang: 'en', children: '1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#meaningful-sequence', children: '1.3.2 Betekenisvolle volgorde' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, o.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence', children: (0, o.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html', children: (0, o.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.2 Meaningful Sequence' }) }), '.'] }), '\n'] }), '\n', (0, o.jsx)(c.K, { children: (0, o.jsx)(l.o, { omitH1: !0, headingLevel: 3, content: g.Ay }) }), '\n', (0, o.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, o.jsx)(l.o, { omitH1: !0, headingLevel: 3, content: v.Ay })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(k, { ...e }) }) : k(e);
   }
  },
  88275(e, n, r) {
   r.d(n, { Ay: () => a });
   var i = r(86070),
    o = r(18439);
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  93681(e, n, r) {
   r.d(n, { K: () => t });
   var i = r(88547),
    o = r(29181);
   const t = globalThis.isAstro ? i.L : o.K7;
  },
 },
]);
