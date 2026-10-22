'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34531],
 {
  14881(e, n, o) {
   o.d(n, { K: () => c, n: () => d });
   var a = o(13526),
    r = o(30758),
    t = o(30662),
    s = o(32065),
    i = o(37168),
    l = o(86070);
   const d = (0, r.forwardRef)(({ as: e, className: n, children: o, ...r }, t) => {
     const s = e || 'div',
      i = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, l.jsx)(s, { ref: t, className: i, ...r, children: o });
    }),
    c = ({ className: e, classNamePanel: n, label: o, heading: r, headingLevel: d, headingApperance: c, ...p }) => {
     const u = (0, a.A)('utrecht-accordion__section', e),
      k = (0, a.A)('utrecht-accordion__panel', n);
     return (0, l.jsxs)('details', { className: u, ...p, children: [(0, l.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, l.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, l.jsx)('span', { className: 'nl-button__icon-start', children: (0, l.jsx)(s.I, { children: (0, l.jsx)(t.rI, {}) }) }), (0, l.jsxs)('span', { className: 'nl-button__label', children: [r && (0, l.jsx)(i.D, { level: d, appearance: c, children: r }), o] })] }) }), (0, l.jsx)('div', { className: k, children: p.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => i });
   var a = o(30758);
   const r = {},
    t = a.createContext(r);
   function s(e) {
    const n = a.useContext(t);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), a.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => d });
   var a = o(46447),
    r = o(16194),
    t = o(30758),
    s = o(56528);
   const i = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var l = o(86070);
   function d({ lineNumber: e, syntax: n, textContent: o, trim: d }) {
    let c = o;
    const { title: p, type: u } = (0, t.useContext)(s.x),
     k = (0, t.useId)();
    return (d && (c = c.trim()), (0, l.jsx)(r.f4, { theme: i, code: c, language: n || '', children: ({ style: n, tokens: o, getLineProps: r, getTokenProps: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)('span', { hidden: !0, id: k, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, l.jsx)(a.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': k, style: n, children: o.map((n, o) => (0, l.jsxs)('span', { ...r({ line: n }), children: [e && (0, l.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, l.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => H, GP: () => w, KC: () => E, Nd: () => _, Rt: () => C, Vj: () => N, Wk: () => L, bz: () => A, cB: () => S, e5: () => T, hY: () => M, jK: () => K, jP: () => I, ob: () => $, rI: () => z, t4: () => G, vP: () => D, vg: () => V });
   var a = o(92081),
    r = o(90578),
    t = o(96345),
    s = o(64249),
    i = o(4603),
    l = o(91525),
    d = o(23436),
    c = o(1375),
    p = o(4077),
    u = o(58315),
    k = o(73563),
    h = o(35193),
    v = o(82999),
    g = o(13088),
    m = o(43864),
    j = o(24214),
    b = o(79532),
    x = o(60529),
    y = o(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(a.A, { ...f }),
    w = () => (0, y.jsx)(r.A, { ...f }),
    z = () => (0, y.jsx)(t.A, { ...f }),
    N = () => (0, y.jsx)(s.A, { ...f }),
    A = () => (0, y.jsx)(i.A, { ...f }),
    C = () => (0, y.jsx)(l.A, { ...f }),
    S = () => (0, y.jsx)(d.A, { ...f }),
    D = () => (0, y.jsx)(c.A, { ...f }),
    K = () => (0, y.jsx)(p.A, { ...f }),
    I = () => (0, y.jsx)(u.A, { ...f }),
    G = () => (0, y.jsx)(k.A, { ...f }),
    H = () => (0, y.jsx)(h.A, { ...f }),
    M = () => (0, y.jsx)(v.A, { ...f }),
    E = () => (0, y.jsx)(g.A, { ...f }),
    L = () => (0, y.jsx)(m.A, { ...f }),
    T = () => (0, y.jsx)(j.A, { ...f }),
    $ = () => (0, y.jsx)(b.A, { ...f }),
    V = () => (0, y.jsx)(x.A, { ...f });
  },
  32065(e, n, o) {
   o.d(n, { I: () => a.In });
   var a = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => a.$n });
   var a = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => c, x: () => d });
   var a = o(30662),
    r = o(46447),
    t = o(13526),
    s = o(45795),
    i = o(30758),
    l = o(86070);
   const d = (0, i.createContext)({}),
    c = ({ title: e, appearance: n, description: o, children: i, figure: c = !0 }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = c ? 'figure' : 'div',
      k = c ? 'figcaption' : 'div',
      h = 'string' == typeof o ? (0, l.jsx)(s.oz, { components: { a: r.N_ }, children: o }) : o;
     return (0, l.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, l.jsxs)(k, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, l.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, l.jsx)(a.jP, {}) }), (0, l.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, l.jsx)(r.fz, { children: e })] }) : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, l.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, l.jsx)(a.jK, {}) }), (0, l.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, l.jsx)(r.fz, { children: e })] }), h] }), (0, l.jsx)('div', { className: 'nlds-guideline__example', children: (0, l.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => i, RM: () => t });
   var a = o(86070),
    r = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  67738(e, n, o) {
   (o.r(n), o.d(n, { assets: () => p, contentTitle: () => c, default: () => h, frontMatter: () => d, metadata: () => a, toc: () => u }));
   const a = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/headings","title":"Koppen","description":"Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.","source":"@site/docs/richtlijnen/content/tekstopmaak/headings.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/koppen","permalink":"/richtlijnen/content/tekstopmaak/koppen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/headings.mdx","tags":[],"version":"current","frontMatter":{"title":"Koppen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Koppen","pagination_label":"Koppen","description":"Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.","slug":"/richtlijnen/content/tekstopmaak/koppen","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","koppen","koppenstructuur","kopjes","dikgedrukt","kopopmaak","bold","strong"]},"sidebar":"richtlijnen","previous":{"title":"Tekst benadrukken","permalink":"/richtlijnen/content/tekstopmaak/tekst-benadrukken"},"next":{"title":"De juiste taal instellen","permalink":"/richtlijnen/content/tekstopmaak/taal"}}');
   var r = o(86070),
    t = o(18439),
    s = o(87682),
    i = o(56528),
    l = o(56672);
   const d = { title: 'Koppen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppen', pagination_label: 'Koppen', description: 'Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.', slug: '/richtlijnen/content/tekstopmaak/koppen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'koppen', 'koppenstructuur', 'kopjes', 'dikgedrukt', 'kopopmaak', 'bold', 'strong'] },
    c = 'Koppen',
    p = {},
    u = [{ value: 'Voor wie zijn toegankelijke koppen belangrijk?', id: 'voor-wie-zijn-toegankelijke-koppen-belangrijk', level: 2 }, { value: 'Opmaak van koppen', id: 'opmaak-van-koppen', level: 2 }, { value: 'Inhoud van koppen', id: 'inhoud-van-koppen', level: 2 }, { value: 'Kopniveaus', id: 'kopniveaus', level: 2 }, { value: 'Sla geen kopniveaus over', id: 'sla-geen-kopniveaus-over', level: 3 }, { value: 'Kopniveau 1: het begin van de structuur', id: 'kopniveau-1-het-begin-van-de-structuur', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function k(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'koppen', children: 'Koppen' }) }), '\n', (0, r.jsx)(n.p, { children: "Koppen vormen de ruggengraat van de inhoud van een pagina. Aan de hand van koppen kan een gebruiker snel wegwijs worden in de inhoud van een webpagina. Zorg voor een duidelijke structuur van de tekst door gebruik te maken van koppen. Dit is heel belangrijk. Want zo begrijpen bezoekers de inhoud en opbouw van de tekst. Daarnaast maakt het het navigeren op pagina's makkelijker." }), '\n', (0, r.jsx)(n.h2, { id: 'voor-wie-zijn-toegankelijke-koppen-belangrijk', children: 'Voor wie zijn toegankelijke koppen belangrijk?' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen een lijst van koppen oproepen en daarmee snel naar een kopje navigeren. Ook ziende bezoekers scannen de inhoud van een pagina aan de hand van koppen. Daarom is het belangrijk dat een kopje de inhoud onder de kop goed beschrijft. De koppen zijn daarmee een soort inhoudsopgave van de webpagina. Dit helpt mensen om snel de informatie te vinden die ze zoeken.'] }), '\n', (0, r.jsx)(n.p, { children: 'Bezoekers die gebruik maken van een screenreader kunnen ook met sneltoetsen snel door de koppen op een pagina navigeren. Laat koppen daarom ook niet leeg. Ook lege koppen worden herkend door screenreaders. Maar omdat ze geen beschrijvende tekst bevatten scheppen ze vooral verwarring in plaats van verduidelijking.' }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Koppen leeg laten', children: (0, r.jsx)(s.H, { language: 'html', defaultExpandedCode: !0, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: 'Voorzie een kop altijd van een beschrijvende tekst. Zorg ervoor dat koppen niet leeg zijn. Bijvoorbeeld om extra witruimte te cre\xebren.' }), (0, r.jsx)('h2', { children: '\xa0' }), (0, r.jsx)('p', { children: "Zo'n lege kop wordt namelijk wel herkend door hulpsoftware. Maar de gebruiker kan er vervolgens helemaal niks mee. Het schept met name verwarring." })] }) }) }), '\n', (0, r.jsx)(n.p, { children: 'Ook ziende bezoekers maken gebruik van de koppenstructuur op een pagina. Doordat koppen van verschillende niveaus er anders uit zien, is het snel duidelijk hoe de informatie op de pagina gestructureerd is.' }), '\n', (0, r.jsx)(n.h2, { id: 'opmaak-van-koppen', children: 'Opmaak van koppen' }), '\n', (0, r.jsx)(n.p, { children: 'Een koptekst moet opgemaakt zijn als echte kop. Gebruik daarvoor de opties die het contentmanagementsysteem waarin je werkt je biedt. Vaak kun je in een uitklapbaar lijstje kiezen welke opmaak je tekst moet krijgen, bijvoorbeeld een paragraaf of kop van niveau 1 of 2. Gebruik een kop niet enkel en alleen om tekst groot en vet te maken.' }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Tekst dikgedrukt en groter maken en een andere kleur geven zodat het op een kop lijkt.', children: (0, r.jsx)(s.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('strong', { style: { color: 'purple', fontSize: '200%' }, children: 'Dit is geen kop' }), (0, r.jsx)('p', { children: 'Een screenreader herkent deze tekst niet als een kop. Hierdoor verschijnt de tekst ook niet in het overzicht met koppen en kunnen bezoekers geen sneltoetsen gebruiken om tussen de koppen te navigeren.' })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'inhoud-van-koppen', children: 'Inhoud van koppen' }), '\n', (0, r.jsx)(n.p, { children: 'Koppen moeten goed beschrijven waar de tekst onder de kop over gaat. Een duidelijke kop beschrijft de inhoud eronder, als kleine samenvatting. Dit is handig voor mensen die blind of slechtziend zijn, dyslectisch zijn of een cognitieve beperking hebben, en het helpt de scannende gebruikers om snel de informatie te vinden die ze zoeken.' }), '\n', (0, r.jsx)(n.h2, { id: 'kopniveaus', children: 'Kopniveaus' }), '\n', (0, r.jsx)(n.p, { children: 'Koppen kunnen verschillende niveaus hebben. Door de verschillende niveaus zorg je voor een goede volgorde en deel je de tekst overzichtelijk in.' }), '\n', (0, r.jsx)(n.h3, { id: 'sla-geen-kopniveaus-over', children: 'Sla geen kopniveaus over' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik koppen in volgorde. Begin bijvoorbeeld met een kopniveau 2 onder de hoofdkop, daarna een kopniveau 3, dan een kopniveau 4. Sla geen niveaus over. Zet dus geen kopniveau 4 direct onder een kopniveau 2.' }), '\n', (0, r.jsx)(n.p, { children: 'Van boven naar beneden mag je geen niveaus overslaan. Van beneden naar boven wel. Het is prima om na een kopniveau 4 weer een nieuwe sectie te beginnen met een kopniveau 2.' }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Gebruik kopniveaus in de de goede volgorde.', children: (0, r.jsx)(s.H, { language: 'html', className: 'nlds-not-accessible', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('h1', { children: 'Kop met niveau 1' }), (0, r.jsx)('p', { children: 'Kopniveau 1 is de belangrijkste kop van de pagina en die gebruik je maar \xe9\xe9n keer. Kopniveau 1 geeft aan waar de hele pagina over gaat.' }), (0, r.jsx)('h2', { children: 'Kop met niveau 2' }), (0, r.jsx)('p', { children: 'Daaronder komen de koppen van niveau 2 Dit zijn als het ware de hoofdstukken binnen je onderwerp. Elk kopniveau 2 behandelt een belangrijk onderdeel van het onderwerp. Deze koppen kun je meerdere keren op een pagina gebruiken, zolang ze maar allemaal over het hoofdonderwerp gaan.' }), (0, r.jsx)('h3', { children: 'Kop met niveau 3' }), (0, r.jsx)('p', { children: 'Als je in een tekst onder een kopniveau 2 nog wat meer detail wilt aanbrengen, gebruik je een kopniveau 3. Dat is een subkop, die gaat over een onderwerp uit de vorige paragraaf.' }), (0, r.jsx)('h4', { children: 'Kop met niveau 4' }), (0, r.jsx)('p', { children: 'Er zijn koppen van niveau 4, 5 en 6 maar die zijn meestal niet nodig. Die gebruik je alleen als je echt diep in de structuur van je tekst duikt. Voor de meeste webpagina\u2019s zijn kopniveau 1, 2 en 3 genoeg.' }), (0, r.jsx)('h2', { children: 'Kop met niveau 2' }), (0, r.jsx)('p', { children: 'Als je in een tekst weer een nieuw hoofdstuk wilt beginnen dan mag je hier weer kopniveau 2 gebruiken. Terug omhoog mag je wel kopniveaus overslaan.' })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Van boven naar beneden een kopniveau overslaan.', children: (0, r.jsx)(s.H, { language: 'html', className: 'nlds-not-accessible', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('h1', { children: 'Dit is een kop met niveau 1' }), (0, r.jsx)('p', { children: 'Sla, van boven naar beneden, geen niveaus over door bijvoorbeeld een kopniveau 3 onder een kopniveau 1 te plaatsen.' }), (0, r.jsx)('h3', { children: 'Dit is een kop met niveau 3' }), (0, r.jsx)('p', { children: 'Dit is verwarrend voor bezoekers die gebruik maken van hulpsoftware.' })] }) }) }), '\n', (0, r.jsx)(n.h3, { id: 'kopniveau-1-het-begin-van-de-structuur', children: 'Kopniveau 1: het begin van de structuur' }), '\n', (0, r.jsx)(n.p, { children: 'Elke pagina begint met een kopniveau 1. Dit is het startpunt van de kopstructuur en geeft aan waar de pagina over gaat. Voor schermlezers is dit vaak het eerste wat mensen horen. Ook zoekmachines gebruiken kopniveau 1 als belangrijkste kop van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'In veel CMS\u2019en is kopniveau 1 automatisch gekoppeld aan de paginatitel. Soms zie je deze bovenaan de pagina, soms is hij alleen zichtbaar in de code. Als contentmaker heb je hier niet altijd invloed op, maar je kunt het wel controleren. Bekijk de hele pagina, inclusief de koppenstructuur, in de preview of na publicatie. Zo weet je zeker dat de structuur klopt en dat de pagina goed navigeerbaar is voor iedereen.' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik kopniveau 1 maar \xe9\xe9n keer per pagina. Zorg dat de tekst ervan kort, duidelijk en uniek is binnen de site.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Of koppen goed zijn gebruikt, kun je voor een groot deel beoordelen door de pagina te lezen en logisch na te denken over structuur en betekenis. Gebruik onderstaande punten als leidraad:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Beschrijft elke kop de inhoud die eronder valt?\nDe tekst van een kop moet duidelijk maken waar het volgende stukje content over gaat.' }), '\n', (0, r.jsx)(n.li, { children: 'Worden koppen alleen gebruikt om structuur aan te brengen?\nSoms worden visueel opvallende teksten als \u2018kop\u2019 opgemaakt, zonder dat ze inhoud structureren. Dat is verwarrend. Gebruik koppen alleen als ze echt een nieuwe sectie inleiden.' }), '\n', (0, r.jsx)(n.li, { children: 'Is er een duidelijke hi\xebrarchie van kopniveaus (1, 2, 3\u2026)?\nDe volgorde van de koppen moet logisch zijn en geen niveaus overslaan. Een kopniveau 3 mag niet direct onder een kopniveau 1 vallen.' }), '\n', (0, r.jsx)(n.li, { children: 'Is er \xe9\xe9n kopniveau 1 die de inhoud van de pagina beschrijft?\nDeze kop moet uniek zijn per pagina. Een kop met niveau 1 als \u2018Welkom\u2019 of \u2018Nieuws\u2019 op elke pagina helpt niemand.' }), '\n', (0, r.jsx)(n.li, { children: 'Zijn er geen lege of nietszeggende koppen?\nEen kop als \u2018Overzicht\u2019 of \u2018Klik hier\u2019 zegt weinig over de inhoud. Zorg dat elke kop betekenisvol is.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer op lege koppen.\nLet in de preview op opvallende witruimte of lege plekken: dat kan duiden op een kop zonder inhoud. Die wordt wel voorgelezen door screenreaders, maar zegt niets. Vul de kop aan of verwijder \u2018m als hij overbodig is.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.10/', children: 'Succescriterium 2.4.10 Paragraafkoppen' }) }), '\n'] }), '\n', (0, r.jsx)(l.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => _ });
   var a = o(28369),
    r = o(46447),
    t = o(13526),
    s = o(68148),
    i = o(9016),
    l = o(69303),
    d = o(91635),
    c = o(30734),
    p = o(30758),
    u = o(31186),
    k = o(65904),
    h = o.n(k),
    v = o(14881),
    g = o(46847),
    m = o(86070);
   const j = ({ label: e, labelId: n, className: o, colorScheme: a, forcedColorsAdjust: r = !1, children: s, dangerouslySetInnerHTML: i, ...l }) => (0, m.jsxs)('figure', { className: (0, t.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...l, children: [e && (0, m.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, m.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === a, 'ma-html-image__body--color-scheme-light': 'light' === a, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: s })] });
   var b = o(68197);
   const x = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: a, copyCode: r, colorScheme: s, defaultExpandedCode: i, designTokens: l, forcedColorsAdjust: d = !0, label: c }) => {
       const u = 'string' == typeof o ? o : a || '',
        k = 'string' == typeof o ? h().highlight(o, h().languages[e], e) : h().highlight(a || '', h().languages[e], e),
        x = (0, m.jsx)(b.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: l, dangerouslySetInnerHTML: { __html: u } });
       return (0, m.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [c ? (0, m.jsx)(j, { forcedColorsAdjust: d, label: c, labelId: c ? (0, p.useId)() : void 0, children: x }) : x, (0, m.jsx)(v.n, { children: (0, m.jsxs)(v.K, { label: 'Code', open: i, children: [(0, m.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, m.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: k } }) }), 'allow' === r && (0, m.jsx)(g.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: k = !0, children: h, container: v = 'document', language: g, designTokens: j }) => {
       const b = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(_ || b),
        [z, N] = (0, p.useState)(w),
        [A, C] = (0, p.useState)(o);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(w, { parser: g, plugins: [s.A, i.Ay, l.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let D = p.Fragment;
       return (
        'paragraph' === v ? (D = x) : 'document' === v ? (D = y) : 'surface' === v && (D = f),
        (0, m.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          b && (0, m.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: j, children: (0, m.jsx)(D, { children: (0, m.jsx)(r.v$, { children: b }) }) }) }),
          k &&
           (0, m.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, m.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          k &&
           (0, m.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, m.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: z, trim: !0 }),
             n &&
              (0, m.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, m.jsx)(r.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
                },
                children: 'Kopieer',
               }),
              }),
            ],
           }),
         ],
        })
       );
      };
  },
 },
]);
