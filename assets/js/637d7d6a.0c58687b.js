'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [36401],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => c });
   var l = o(13526),
    t = o(30758),
    r = o(30662),
    s = o(32065),
    a = o(37168),
    i = o(86070);
   const c = (0, t.forwardRef)(({ as: e, className: n, children: o, ...t }, r) => {
     const s = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(s, { ref: r, className: a, ...t, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: t, headingLevel: c, headingApperance: d, ...u }) => {
     const m = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: m, ...u, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(s.I, { children: (0, i.jsx)(r.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [t && (0, i.jsx)(a.D, { level: c, appearance: d, children: t }), o] })] }) }), (0, i.jsx)('div', { className: h, children: u.children })] });
    };
  },
  18423(e, n, o) {
   (o.r(n), o.d(n, { assets: () => b, contentTitle: () => g, default: () => y, frontMatter: () => j, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/help/autocomplete/index","title":"Autocomplete in een formulier","description":"Richtlijnen voor het gebruik van het autocomplete-attribuut.","source":"@site/docs/richtlijnen/formulieren/help/5-autocomplete/index.mdx","sourceDirName":"richtlijnen/formulieren/help/5-autocomplete","slug":"/richtlijnen/formulieren/voorkom-fouten/autocomplete","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/5-autocomplete/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Autocomplete in een formulier","title_sm":"Autocomplete","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Autocomplete","pagination_label":"Autocomplete in een formulier","description":"Richtlijnen voor het gebruik van het autocomplete-attribuut.","slug":"/richtlijnen/formulieren/voorkom-fouten/autocomplete","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geef geldige waardes aan een invoerveld","permalink":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes"},"next":{"title":"Automatisch invullen","permalink":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen"}}');
   var t = o(86070),
    r = o(18439),
    s = o(56672),
    a = o(87682),
    i = o(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Het autocomplete-attribuut gebruiken.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'voornaam', children: 'Je voornaam' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'voornaam', type: 'text', autoComplete: 'given-name' }) })] }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Het autocomplete-attribuut niet gebruiken.', description: 'Het input type alleen is hier niet voldoende om te voldoen aan WCAG.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon', children: 'Uw telefoonnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon', type: 'tel' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'autocomplete-in-een-formulier', children: 'Autocomplete in een formulier' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' })] }), ' vertelt aan de browser welke waarde verwacht wordt bij het invullen van een formulierveld. Browsers kunnen voor gebruikers onthouden wat ze eerder hebben ingevuld.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Die opgeslagen waarden kunnen browsers gebruiken om velden vast in te vullen, door het ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' attribuut weten ze welke velden dat moeten zijn. Gegevens zoals namen, adres en telefoonnummer kunnen dan automatisch worden ingevuld door de browser.'] }), '\n', (0, t.jsx)(n.p, { children: 'Autocomplete is fijn voor gebruikers die moeite hebben met typen, problemen hebben met hun geheugen en voor gebruikers die moeite hebben met taal.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd', children: 'Gebruik autocomplete als er een waarde voor is gedefinieerd' }), '\n', (0, t.jsxs)(n.p, { children: ['WCAG bevat een volledige ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'lijst van waarden voor autocomplete' }), '. Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie' }), ' gemaakt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/altijd-zichtbaar/', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete', children: 'aria-autocomplete' }), ' heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. ', (0, t.jsx)(n.code, { children: 'aria-autocomplete' }), ' wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'Autocomplete in een formulier', title_sm: 'Autocomplete', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Autocomplete', pagination_label: 'Autocomplete in een formulier', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', keywords: ['informatie', 'formulier', 'design', 'code'] },
    g = void 0,
    b = {},
    v = [{ value: 'Gebruik autocomplete als er een waarde voor is gedefinieerd', id: 'gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x();
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => a });
   var l = o(30758);
   const t = {},
    r = l.createContext(t);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => c });
   var l = o(46447),
    t = o(16194),
    r = o(30758),
    s = o(56528);
   const a = {
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
   var i = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: u, type: m } = (0, r.useContext)(s.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => M, GP: () => A, KC: () => F, Nd: () => k, Rt: () => z, Vj: () => N, Wk: () => G, bz: () => C, cB: () => S, e5: () => W, hY: () => T, jK: () => R, jP: () => L, ob: () => $, rI: () => w, t4: () => H, vP: () => I, vg: () => P });
   var l = o(92081),
    t = o(90578),
    r = o(96345),
    s = o(64249),
    a = o(4603),
    i = o(91525),
    c = o(23436),
    d = o(1375),
    u = o(4077),
    m = o(58315),
    h = o(73563),
    p = o(35193),
    j = o(82999),
    g = o(13088),
    b = o(43864),
    v = o(24214),
    x = o(79532),
    y = o(60529),
    f = o(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    A = () => (0, f.jsx)(t.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    N = () => (0, f.jsx)(s.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    z = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(u.A, { ..._ }),
    L = () => (0, f.jsx)(m.A, { ..._ }),
    H = () => (0, f.jsx)(h.A, { ..._ }),
    M = () => (0, f.jsx)(p.A, { ..._ }),
    T = () => (0, f.jsx)(j.A, { ..._ }),
    F = () => (0, f.jsx)(g.A, { ..._ }),
    G = () => (0, f.jsx)(b.A, { ..._ }),
    W = () => (0, f.jsx)(v.A, { ..._ }),
    $ = () => (0, f.jsx)(x.A, { ..._ }),
    P = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, o) {
   o.d(n, { I: () => l.In });
   var l = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => c });
   var l = o(30662),
    t = o(46447),
    r = o(13526),
    s = o(45795),
    a = o(30758),
    i = o(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, i.jsx)(s.oz, { components: { a: t.N_ }, children: o }) : o;
     return (0, i.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(t.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => r });
   var l = o(86070),
    t = o(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => k });
   var l = o(28369),
    t = o(46447),
    r = o(13526),
    s = o(68148),
    a = o(9016),
    i = o(69303),
    c = o(91635),
    d = o(30734),
    u = o(30758),
    m = o(31186),
    h = o(65904),
    p = o.n(h),
    j = o(14881),
    g = o(46847),
    b = o(86070);
   const v = ({ label: e, labelId: n, className: o, colorScheme: l, forcedColorsAdjust: t = !1, children: s, dangerouslySetInnerHTML: a, ...i }) => (0, b.jsxs)('figure', { className: (0, r.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, b.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, b.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: s })] });
   var x = o(68197);
   const y = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: t, colorScheme: s, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof o ? o : l || '',
        h = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(l || '', p().languages[e], e),
        y = (0, b.jsx)(x.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: i, dangerouslySetInnerHTML: { __html: m } });
       return (0, b.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [d ? (0, b.jsx)(v, { forcedColorsAdjust: c, label: d, labelId: d ? (0, u.useId)() : void 0, children: y }) : y, (0, b.jsx)(j.n, { children: (0, b.jsxs)(j.K, { label: 'Code', open: a, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === t && (0, b.jsx)(g.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: h = !0, children: p, container: j = 'document', language: g, designTokens: v }) => {
       const x = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : m.qV(k || x),
        [w, N] = (0, u.useState)(A),
        [C, z] = (0, u.useState)(o);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: g, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [A]);
       const S = (0, u.useId)();
       let I = u.Fragment;
       return (
        'paragraph' === j ? (I = y) : 'document' === j ? (I = f) : 'surface' === j && (I = _),
        (0, b.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          x && (0, b.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, b.jsx)(I, { children: (0, b.jsx)(t.v$, { children: x }) }) }) }),
          h &&
           (0, b.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, b.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(t.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
