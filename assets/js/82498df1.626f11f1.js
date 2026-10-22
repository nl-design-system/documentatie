'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30023],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => i });
   var t = o(13526),
    s = o(30758),
    l = o(30662),
    r = o(32065),
    a = o(37168),
    c = o(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: o, ...s }, l) => {
     const r = e || 'div',
      a = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: l, className: a, ...s, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: s, headingLevel: i, headingApperance: d, ...u }) => {
     const m = (0, t.A)('utrecht-accordion__section', e),
      h = (0, t.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: m, ...u, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(l.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [s && (0, c.jsx)(a.D, { level: i, appearance: d, children: s }), o] })] }) }), (0, c.jsx)('div', { className: h, children: u.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => a });
   var t = o(30758);
   const s = {},
    l = t.createContext(s);
   function r(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => i });
   var t = o(46447),
    s = o(16194),
    l = o(30758),
    r = o(56528);
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
   var c = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: u, type: m } = (0, l.useContext)(r.x),
     h = (0, l.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: s, getTokenProps: l }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => M, GP: () => N, KC: () => F, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => P, bz: () => C, cB: () => z, e5: () => D, hY: () => $, jK: () => I, jP: () => R, ob: () => G, rI: () => A, t4: () => L, vP: () => T, vg: () => H });
   var t = o(92081),
    s = o(90578),
    l = o(96345),
    r = o(64249),
    a = o(4603),
    c = o(91525),
    i = o(23436),
    d = o(1375),
    u = o(4077),
    m = o(58315),
    h = o(73563),
    b = o(35193),
    p = o(82999),
    g = o(13088),
    j = o(43864),
    v = o(24214),
    x = o(79532),
    y = o(60529),
    f = o(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(t.A, { ..._ }),
    N = () => (0, f.jsx)(s.A, { ..._ }),
    A = () => (0, f.jsx)(l.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    z = () => (0, f.jsx)(i.A, { ..._ }),
    T = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(u.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    L = () => (0, f.jsx)(h.A, { ..._ }),
    M = () => (0, f.jsx)(b.A, { ..._ }),
    $ = () => (0, f.jsx)(p.A, { ..._ }),
    F = () => (0, f.jsx)(g.A, { ..._ }),
    P = () => (0, f.jsx)(j.A, { ..._ }),
    D = () => (0, f.jsx)(v.A, { ..._ }),
    G = () => (0, f.jsx)(x.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, o) {
   o.d(n, { I: () => t.In });
   var t = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => t.$n });
   var t = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => i });
   var t = o(30662),
    s = o(46447),
    l = o(13526),
    r = o(45795),
    a = o(30758),
    c = o(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      b = 'string' == typeof o ? (0, c.jsx)(r.oz, { components: { a: s.N_ }, children: o }) : o;
     return (0, c.jsxs)(m, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(t.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(t.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(s.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => l });
   var t = o(86070),
    s = o(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  73052(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => g, default: () => y, frontMatter: () => p, metadata: () => t, toc: () => v }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/button/keyboard/index","title":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","source":"@site/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","sourceDirName":"richtlijnen/formulieren/button/1-keyboard","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","permalink":"/richtlijnen/formulieren/buttons/toetsenbordbediening","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Toetsenbordbediening van een button","title_sm":"Toetsenbordbediening","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toetsenbordbediening","pagination_label":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Buttons in een formulier","permalink":"/richtlijnen/formulieren/buttons"},"next":{"title":"Verstuur niet automatisch","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen"}}');
   var s = o(86070),
    l = o(18439),
    r = o(56672),
    a = o(87682),
    c = o(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)('button', { className: 'doFancyStuff button', children: 'Geef je op' }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Een div gebruiken die alleen met de muis aanklikbaar is.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)('div', { className: 'doFancyStuff button', children: 'Geef je op' }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'toetsenbordbediening-van-een-button', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, s.jsx)(n.p, { children: 'Veel gebruikers navigeren door een formulier met hun Tab-toets om van interactief element naar interactief element te springen, zoals buttons, links, invoervelden, radio buttons en checkboxes.' }), '\n', (0, s.jsx)(n.p, { children: 'Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button.' }), '\n', (0, s.jsx)(n.p, { children: 'Zorg ervoor dat de volgorde waarin interactieve elementen focus krijgen logisch is en dat er geen onverwachte veranderingen plaatsvinden als een bezoeker de button activeert.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   const p = { title: 'Toetsenbordbediening van een button', title_sm: 'Toetsenbordbediening', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(b, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => k });
   var t = o(28369),
    s = o(46447),
    l = o(13526),
    r = o(68148),
    a = o(9016),
    c = o(69303),
    i = o(91635),
    d = o(30734),
    u = o(30758),
    m = o(31186),
    h = o(65904),
    b = o.n(h),
    p = o(14881),
    g = o(46847),
    j = o(86070);
   const v = ({ label: e, labelId: n, className: o, colorScheme: t, forcedColorsAdjust: s = !1, children: r, dangerouslySetInnerHTML: a, ...c }) => (0, j.jsxs)('figure', { className: (0, l.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, l.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === t, 'ma-html-image__body--color-scheme-light': 'light' === t, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var x = o(68197);
   const y = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: t, copyCode: s, colorScheme: r, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const m = 'string' == typeof o ? o : t || '',
        h = 'string' == typeof o ? b().highlight(o, b().languages[e], e) : b().highlight(t || '', b().languages[e], e),
        y = (0, j.jsx)(x.b, { Component: 'div', className: (0, l.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: m } });
       return (0, j.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(v, { forcedColorsAdjust: i, label: d, labelId: d ? (0, u.useId)() : void 0, children: y }) : y, (0, j.jsx)(p.n, { children: (0, j.jsxs)(p.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === s && (0, j.jsx)(g.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: h = !0, children: b, container: p = 'document', language: g, designTokens: v }) => {
       const x = 'function' == typeof b ? b() : b,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(k || x),
        [A, w] = (0, u.useState)(N),
        [C, S] = (0, u.useState)(o);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, u.useId)();
       let T = u.Fragment;
       return (
        'paragraph' === p ? (T = y) : 'document' === p ? (T = f) : 'surface' === p && (T = _),
        (0, j.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          x && (0, j.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, j.jsx)(T, { children: (0, j.jsx)(s.v$, { children: x }) }) }) }),
          h &&
           (0, j.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, j.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
