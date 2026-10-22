'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18227],
 {
  14881(e, n, s) {
   s.d(n, { K: () => d, n: () => c });
   var l = s(13526),
    o = s(30758),
    r = s(30662),
    t = s(32065),
    a = s(37168),
    i = s(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: s, ...o }, r) => {
     const t = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: r, className: a, ...o, children: s });
    }),
    d = ({ className: e, classNamePanel: n, label: s, heading: o, headingLevel: c, headingApperance: d, ...m }) => {
     const p = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: p, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(r.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [o && (0, i.jsx)(a.D, { level: c, appearance: d, children: o }), s] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => t, x: () => a });
   var l = s(30758);
   const o = {},
    r = l.createContext(o);
   function t(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => c });
   var l = s(46447),
    o = s(16194),
    r = s(30758),
    t = s(56528);
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
   var i = s(86070);
   function c({ lineNumber: e, syntax: n, textContent: s, trim: c }) {
    let d = s;
    const { title: m, type: p } = (0, r.useContext)(t.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: o, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => D, GP: () => N, KC: () => L, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => M, bz: () => C, cB: () => z, e5: () => H, hY: () => F, jK: () => I, jP: () => R, ob: () => T, rI: () => A, t4: () => $, vP: () => P, vg: () => K });
   var l = s(92081),
    o = s(90578),
    r = s(96345),
    t = s(64249),
    a = s(4603),
    i = s(91525),
    c = s(23436),
    d = s(1375),
    m = s(4077),
    p = s(58315),
    h = s(73563),
    u = s(35193),
    g = s(82999),
    v = s(13088),
    j = s(43864),
    x = s(24214),
    b = s(79532),
    y = s(60529),
    f = s(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    N = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(r.A, { ..._ }),
    w = () => (0, f.jsx)(t.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    z = () => (0, f.jsx)(c.A, { ..._ }),
    P = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(m.A, { ..._ }),
    R = () => (0, f.jsx)(p.A, { ..._ }),
    $ = () => (0, f.jsx)(h.A, { ..._ }),
    D = () => (0, f.jsx)(u.A, { ..._ }),
    F = () => (0, f.jsx)(g.A, { ..._ }),
    L = () => (0, f.jsx)(v.A, { ..._ }),
    M = () => (0, f.jsx)(j.A, { ..._ }),
    H = () => (0, f.jsx)(x.A, { ..._ }),
    T = () => (0, f.jsx)(b.A, { ..._ }),
    K = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, s) {
   s.d(n, { I: () => l.In });
   var l = s(29181);
  },
  42574(e, n, s) {
   (s.r(n), s.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => l, toc: () => x }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/multistep/location/index","title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier","description":"Richtlijnen over positie van de formulier voortgang.","source":"@site/docs/richtlijnen/formulieren/multistep/2-location/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/2-location","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/2-location/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier","title_sm":"Plaatsing voortgang stappen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing voortgang stappen","pagination_label":"Plaatsing voortgang stappen","description":"Richtlijnen over positie van de formulier voortgang.","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Voortgang stappen tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen"},"next":{"title":"Consistente navigatie","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming"}}');
   var o = s(86070),
    r = s(18439),
    t = s(56672),
    a = s(87682),
    i = s(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Info boven het form element.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('h2', { children: 'Uw gegevens' }), (0, o.jsx)('p', { children: 'Stap 2 van 3' }), (0, o.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje, boven het formulier.', description: 'En deze tekst visueel op een andere regel plaatsen. ', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('h2', { children: [(0, o.jsx)('span', { class: 'example-progress-indicator', children: 'Stap 2 van 3' }), 'Uw gegevens'] }), (0, o.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Info binnen het formulier.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('h2', { children: 'Uw gegevens' }), (0, o.jsxs)('form', { children: [(0, o.jsx)('h3', { children: 'Stap 2 van 3' }), '[... inhoud formulier \u2026]'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Plaats tekst en uitleg die hoort bij het formulier buiten het ', (0, o.jsx)(n.code, { children: '<form>' }), ' element. Dus zet informatie over de stappen ', (0, o.jsx)(n.strong, { children: 'boven' }), ' en niet ', (0, o.jsx)(n.strong, { children: 'binnen' }), ' het ', (0, o.jsx)(n.code, { children: '<form>' }), ' element. Dan is de kans dat gebruikers van ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze informatie missen het kleinst. Het waarom staat uitgelegd bij de richtlijn ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen/', children: 'Koppel een description aan het formulierveld' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het voordeel van een formulier in meer stappen is, dat je makkelijker uitgebreide informatie per stap kunt toevoegen ', (0, o.jsx)(n.strong, { children: 'boven' }), ' het formulier. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen bij een formulierveld.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier', title_sm: 'Plaatsing voortgang stappen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  46847(e, n, s) {
   s.d(n, { $: () => l.$n });
   var l = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => c });
   var l = s(30662),
    o = s(46447),
    r = s(13526),
    t = s(45795),
    a = s(30758),
    i = s(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      u = 'string' == typeof s ? (0, i.jsx)(t.oz, { components: { a: o.N_ }, children: s }) : s;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(o.fz, { children: e })] }), u] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => r });
   var l = s(86070),
    o = s(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, s) {
   s.d(n, { H: () => k });
   var l = s(28369),
    o = s(46447),
    r = s(13526),
    t = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    m = s(30758),
    p = s(31186),
    h = s(65904),
    u = s.n(h),
    g = s(14881),
    v = s(46847),
    j = s(86070);
   const x = ({ label: e, labelId: n, className: s, colorScheme: l, forcedColorsAdjust: o = !1, children: t, dangerouslySetInnerHTML: a, ...i }) => (0, j.jsxs)('figure', { className: (0, r.A)('ma-html-image', s), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var b = s(68197);
   const y = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: l, copyCode: o, colorScheme: t, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const p = 'string' == typeof s ? s : l || '',
        h = 'string' == typeof s ? u().highlight(s, u().languages[e], e) : u().highlight(l || '', u().languages[e], e),
        y = (0, j.jsx)(b.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: p } });
       return (0, j.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === o && (0, j.jsx)(v.$, { 'data-copy-code': p, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: h = !0, children: u, container: g = 'document', language: v, designTokens: x }) => {
       const b = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(k || b),
        [A, w] = (0, m.useState)(N),
        [C, S] = (0, m.useState)(s);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, m.useId)();
       let P = m.Fragment;
       return (
        'paragraph' === g ? (P = y) : 'document' === g ? (P = f) : 'surface' === g && (P = _),
        (0, j.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          b && (0, j.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, j.jsx)(P, { children: (0, j.jsx)(o.v$, { children: b }) }) }) }),
          h &&
           (0, j.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, j.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, j.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(A).catch((e) => console.error('Copy code failed', e));
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
