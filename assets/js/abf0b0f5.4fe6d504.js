'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90037],
 {
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => c });
   var o = t(13526),
    a = t(30758),
    s = t(30662),
    l = t(32065),
    i = t(37168),
    r = t(86070);
   const c = (0, a.forwardRef)(({ as: e, className: n, children: t, ...a }, s) => {
     const l = e || 'div',
      i = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(l, { ref: s, className: i, ...a, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: a, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, o.A)('utrecht-accordion__section', e),
      p = (0, o.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: m, ...h, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(l.I, { children: (0, r.jsx)(s.rI, {}) }) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [a && (0, r.jsx)(i.D, { level: c, appearance: d, children: a }), t] })] }) }), (0, r.jsx)('div', { className: p, children: h.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => i });
   var o = t(30758);
   const a = {},
    s = o.createContext(a);
   function l(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var o = t(46447),
    a = t(16194),
    s = t(30758),
    l = t(56528);
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
   var r = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: m } = (0, s.useContext)(l.x),
     p = (0, s.useId)();
    return (c && (d = d.trim()), (0, r.jsx)(a.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: a, getTokenProps: s }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, r.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, r.jsxs)('span', { ...a({ line: n }), children: [e && (0, r.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => $, GP: () => w, KC: () => E, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => L, bz: () => z, cB: () => S, e5: () => P, hY: () => D, jK: () => M, jP: () => H, ob: () => F, rI: () => N, t4: () => T, vP: () => I, vg: () => G });
   var o = t(92081),
    a = t(90578),
    s = t(96345),
    l = t(64249),
    i = t(4603),
    r = t(91525),
    c = t(23436),
    d = t(1375),
    h = t(4077),
    m = t(58315),
    p = t(73563),
    g = t(35193),
    u = t(82999),
    j = t(13088),
    k = t(43864),
    v = t(24214),
    b = t(79532),
    x = t(60529),
    y = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(o.A, { ...f }),
    w = () => (0, y.jsx)(a.A, { ...f }),
    N = () => (0, y.jsx)(s.A, { ...f }),
    A = () => (0, y.jsx)(l.A, { ...f }),
    z = () => (0, y.jsx)(i.A, { ...f }),
    C = () => (0, y.jsx)(r.A, { ...f }),
    S = () => (0, y.jsx)(c.A, { ...f }),
    I = () => (0, y.jsx)(d.A, { ...f }),
    M = () => (0, y.jsx)(h.A, { ...f }),
    H = () => (0, y.jsx)(m.A, { ...f }),
    T = () => (0, y.jsx)(p.A, { ...f }),
    $ = () => (0, y.jsx)(g.A, { ...f }),
    D = () => (0, y.jsx)(u.A, { ...f }),
    E = () => (0, y.jsx)(j.A, { ...f }),
    L = () => (0, y.jsx)(k.A, { ...f }),
    P = () => (0, y.jsx)(v.A, { ...f }),
    F = () => (0, y.jsx)(b.A, { ...f }),
    G = () => (0, y.jsx)(x.A, { ...f });
  },
  32065(e, n, t) {
   t.d(n, { I: () => o.In });
   var o = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => o.$n });
   var o = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var o = t(30662),
    a = t(46447),
    s = t(13526),
    l = t(45795),
    i = t(30758),
    r = t(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: i, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      g = 'string' == typeof t ? (0, r.jsx)(l.oz, { components: { a: a.N_ }, children: t }) : t;
     return (0, r.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(o.jP, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, r.jsx)(a.fz, { children: e })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(o.jK, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, r.jsx)(a.fz, { children: e })] }), g] }), (0, r.jsx)('div', { className: 'nlds-guideline__example', children: (0, r.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => s });
   var o = t(86070),
    a = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  78841(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => g, frontMatter: () => c, metadata: () => o, toc: () => m }));
   const o = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/quotes","title":"Citaten","description":"Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.","source":"@site/docs/richtlijnen/content/tekstopmaak/quotes.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/citaten","permalink":"/richtlijnen/content/citaten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/quotes.mdx","tags":[],"version":"current","frontMatter":{"title":"Citaten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Citaten","pagination_label":"Citaten","description":"Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.","slug":"/richtlijnen/content/citaten","keywords":["lettergrootte"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten"},"next":{"title":"Opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen"}}');
   var a = t(86070),
    s = t(18439),
    l = t(87682),
    i = t(56528),
    r = t(56672);
   const c = { title: 'Citaten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Citaten', pagination_label: 'Citaten', description: 'Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.', slug: '/richtlijnen/content/citaten', keywords: ['lettergrootte'] },
    d = 'Citaten op een webpagina',
    h = {},
    m = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'citaten-op-een-webpagina', children: 'Citaten op een webpagina' }) }), '\n', (0, a.jsx)(n.p, { children: 'Korte citaten en lange citaten kun je tussen enkele of dubbele aanhalingsteken zetten. Je kunt tekst ook markeren als citaat binnen het systeem waarmee je webpagina\u2019s publiceert. Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.' }), '\n', (0, a.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, a.jsx)(i.$, { appearance: 'do', title: 'Plaats dubbele of enkele aanhalingstekens om een quote aan te geven.', children: (0, a.jsx)(l.H, { language: 'html', children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('p', { children: 'De voorzitter vroeg: \u201cWas dat het antwoord op uw vraag?\u201d' }) }) }) }), '\n', (0, a.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om een citaat als losstaand content-blok te plaatsen op je pagina. Gebruik deze mogelijkheid als je een citaat uit je tekst uit wil lichten." }), '\n', (0, a.jsx)(i.$, { appearance: 'do', title: 'Een citaat uitlichten met de specifiek daarvoor bedoelde mogelijkheid in het CMS.', children: (0, a.jsx)(l.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [' ', (0, a.jsxs)('p', { children: ['Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis.', ' '] }), (0, a.jsx)('blockquote', { children: 'Een vat vol geleerdheid is nog geen druppel wijsheid waard.' }), (0, a.jsx)('p', { children: 'De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, a.jsx)(n.p, { children: 'Gebruik hiervoor geen semantische opmaak die daar niet voor bedoeld is, zoals een kop of dikgedrukte tekst.' }), '\n', (0, a.jsx)(i.$, { appearance: 'dont', title: 'Een citaat uitlichten met opmaak die daar niet voor bedoeld is, zoals een kop.', children: (0, a.jsx)(l.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [' ', (0, a.jsxs)('p', { children: ['Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis.', ' '] }), (0, a.jsx)('h2', { children: 'Een vat vol geleerdheid is nog geen druppel wijsheid waard.' }), (0, a.jsx)('p', { children: 'De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, a.jsx)(n.p, { children: 'Je mag natuurlijk wel een citaat gebruiken in een koptekst als het citaat relevant is voor de tekst die n\xe1 de kop komt. Gebruik dan wel aanhalingstekens om aan te geven dat het om een citaat gaat.' }), '\n', (0, a.jsx)(i.$, { appearance: 'do', title: 'Een citaat uitlichten in een kop die iets zegt over de tekst die volgt.', children: (0, a.jsx)(l.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('h2', { children: '"Een vat vol geleerdheid is nog geen druppel wijsheid waard"' }), (0, a.jsx)('p', { children: 'Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis. De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: 'Lees de pagina door en controleer alle citaten. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Is het citaat opgemaakt met aanhalingstekens? Dan is dat in principe voldoende.' }), '\n', (0, a.jsx)(n.li, { children: 'Is het citaat uitgelicht op de pagina? Controleer dan of de optie voor citaten in het CMS is gebruikt.' }), '\n', (0, a.jsxs)(n.li, { children: ['Controleer of het citaat niet met de functie voor schuingedrukte tekst is opgemaakt om het citaat op te laten vallen. Is dat zo? Pas de opmaak dan aan. Schuingedrukte tekst is bedoeld om ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'tekst te benadrukken' }), ', niet om citaten mee op te maken.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Controleer of het citaat niet met een koptekst is opgemaakt om het citaat uit te lichten. Als dat zo is, pas dit aan. ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen zijn bedoeld voor structuur' }), ', niet voor vormgeving.'] }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, a.jsx)(r.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => _ });
   var o = t(28369),
    a = t(46447),
    s = t(13526),
    l = t(68148),
    i = t(9016),
    r = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    m = t(31186),
    p = t(65904),
    g = t.n(p),
    u = t(14881),
    j = t(46847),
    k = t(86070);
   const v = ({ label: e, labelId: n, className: t, colorScheme: o, forcedColorsAdjust: a = !1, children: l, dangerouslySetInnerHTML: i, ...r }) => (0, k.jsxs)('figure', { className: (0, s.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...r, children: [e && (0, k.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, k.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': a }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: l })] });
   var b = t(68197);
   const x = ({ children: e }) => (0, k.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, k.jsx)(a.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, k.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, k.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, k.jsx)(a.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, k.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: o, copyCode: a, colorScheme: l, defaultExpandedCode: i, designTokens: r, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof t ? t : o || '',
        p = 'string' == typeof t ? g().highlight(t, g().languages[e], e) : g().highlight(o || '', g().languages[e], e),
        x = (0, k.jsx)(b.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === l, 'ma-canvas-astro__example--color-scheme-light': 'light' === l }), style: r, dangerouslySetInnerHTML: { __html: m } });
       return (0, k.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, k.jsx)(v, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: x }) : x, (0, k.jsx)(u.n, { children: (0, k.jsxs)(u.K, { label: 'Code', open: i, children: [(0, k.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, k.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === a && (0, k.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: g, container: u = 'document', language: j, designTokens: v }) => {
       const b = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || b),
        [N, A] = (0, h.useState)(w),
        [z, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [l.A, i.Ay, r.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === u ? (I = x) : 'document' === u ? (I = y) : 'surface' === u && (I = f),
        (0, k.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          b && (0, k.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, k.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, k.jsx)(I, { children: (0, k.jsx)(a.v$, { children: b }) }) }) }),
          p &&
           (0, k.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, k.jsx)(a.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, k.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, k.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, k.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, k.jsx)(a.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
