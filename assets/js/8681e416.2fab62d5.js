'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34950],
 {
  14881(e, l, n) {
   n.d(l, { K: () => d, n: () => i });
   var s = n(13526),
    t = n(30758),
    o = n(30662),
    r = n(32065),
    a = n(37168),
    c = n(86070);
   const i = (0, t.forwardRef)(({ as: e, className: l, children: n, ...t }, o) => {
     const r = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, c.jsx)(r, { ref: o, className: a, ...t, children: n });
    }),
    d = ({ className: e, classNamePanel: l, label: n, heading: t, headingLevel: i, headingApperance: d, ...h }) => {
     const m = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', l);
     return (0, c.jsxs)('details', { className: m, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(o.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [t && (0, c.jsx)(a.D, { level: i, appearance: d, children: t }), n] })] }) }), (0, c.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, l, n) {
   n.d(l, { R: () => r, x: () => a });
   var s = n(30758);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const l = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function a(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: l }, e.children));
   }
  },
  28369(e, l, n) {
   n.d(l, { M: () => i });
   var s = n(46447),
    t = n(16194),
    o = n(30758),
    r = n(56528);
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
   var c = n(86070);
   function i({ lineNumber: e, syntax: l, textContent: n, trim: i }) {
    let d = n;
    const { title: h, type: m } = (0, o.useContext)(r.x),
     u = (0, o.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: t, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...t({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...o({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => F, GP: () => N, KC: () => $, Nd: () => _, Rt: () => z, Vj: () => w, Wk: () => P, bz: () => C, cB: () => S, e5: () => T, hY: () => M, jK: () => I, jP: () => R, ob: () => H, rI: () => A, t4: () => D, vP: () => L, vg: () => K });
   var s = n(92081),
    t = n(90578),
    o = n(96345),
    r = n(64249),
    a = n(4603),
    c = n(91525),
    i = n(23436),
    d = n(1375),
    h = n(4077),
    m = n(58315),
    u = n(73563),
    p = n(35193),
    b = n(82999),
    j = n(13088),
    x = n(43864),
    v = n(24214),
    g = n(79532),
    y = n(60529),
    f = n(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(s.A, { ...k }),
    N = () => (0, f.jsx)(t.A, { ...k }),
    A = () => (0, f.jsx)(o.A, { ...k }),
    w = () => (0, f.jsx)(r.A, { ...k }),
    C = () => (0, f.jsx)(a.A, { ...k }),
    z = () => (0, f.jsx)(c.A, { ...k }),
    S = () => (0, f.jsx)(i.A, { ...k }),
    L = () => (0, f.jsx)(d.A, { ...k }),
    I = () => (0, f.jsx)(h.A, { ...k }),
    R = () => (0, f.jsx)(m.A, { ...k }),
    D = () => (0, f.jsx)(u.A, { ...k }),
    F = () => (0, f.jsx)(p.A, { ...k }),
    M = () => (0, f.jsx)(b.A, { ...k }),
    $ = () => (0, f.jsx)(j.A, { ...k }),
    P = () => (0, f.jsx)(x.A, { ...k }),
    T = () => (0, f.jsx)(v.A, { ...k }),
    H = () => (0, f.jsx)(g.A, { ...k }),
    K = () => (0, f.jsx)(y.A, { ...k });
  },
  32065(e, l, n) {
   n.d(l, { I: () => s.In });
   var s = n(29181);
  },
  46847(e, l, n) {
   n.d(l, { $: () => s.$n });
   var s = n(50805);
  },
  56528(e, l, n) {
   n.d(l, { $: () => d, x: () => i });
   var s = n(30662),
    t = n(46447),
    o = n(13526),
    r = n(45795),
    a = n(30758),
    c = n(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: a, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, c.jsx)(r.oz, { components: { a: t.N_ }, children: n }) : n;
     return (0, c.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(t.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[l] }, children: a }) })] });
    };
  },
  56672(e, l, n) {
   n.d(l, { Ay: () => a, RM: () => o });
   var s = n(86070),
    t = n(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const l = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(l.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, t.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  63468(e, l, n) {
   (n.r(l), n.d(l, { assets: () => x, contentTitle: () => j, default: () => y, frontMatter: () => b, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/label/only-text/index","title":"Zet alleen tekst in het label","description":"Richtlijnen voor alleen tekst in een label van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/5-only-text/index.mdx","sourceDirName":"richtlijnen/formulieren/label/5-only-text","slug":"/richtlijnen/formulieren/labels/alleen-tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/5-only-text/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet alleen tekst in het label","title_sm":"Label bevat alleen tekst","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Label bevat alleen tekst","pagination_label":"Label bevat alleen tekst","description":"Richtlijnen voor alleen tekst in een label van een formulierveld.","slug":"/richtlijnen/formulieren/labels/alleen-tekst","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Label zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar"},"next":{"title":"Duidelijke tekst label","permalink":"/richtlijnen/formulieren/labels/duidelijke-tekst"}}');
   var t = n(86070),
    o = n(18439),
    r = n(56672),
    a = n(87682),
    c = n(56528);
   function i(e) {
    const l = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'De link buiten het label plaatsen.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('a', { href: '#', children: 'Onze algemene leveringsvoorwaarden' }) }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { id: 'alv1', type: 'checkbox' }), (0, t.jsx)('label', { htmlFor: 'alv1', children: 'Ik ga akkoord met de algemene leveringsvoorwaarden' })] })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'De link binnen het label plaatsen.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { id: 'alv2', type: 'checkbox' }), (0, t.jsxs)('label', { htmlFor: 'alv2', children: ['Ik ga akkoord met de ', (0, t.jsx)('a', { href: '#', children: 'algemene leveringsvoorwaarden' })] })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function h(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.header, { children: (0, t.jsx)(l.h1, { id: 'zet-alleen-tekst-in-het-label', children: 'Zet alleen tekst in het label' }) }), '\n', (0, t.jsx)(l.p, { children: 'Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes.' }), '\n', (0, t.jsxs)(l.p, { children: ['Dit geeft problemen bij het voorlezen van het label door ', (0, t.jsx)(l.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en het activeren via voice recognition.'] }), '\n', (0, t.jsx)(l.p, { children: 'Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips.' }), '\n', (0, t.jsxs)(l.p, { children: ['Lees ook de ', (0, t.jsx)(l.a, { href: '/richtlijnen/formulieren/links/', children: 'richtlijnen voor links in formulieren' }), '.'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(l.ul, { children: ['\n', (0, t.jsx)(l.li, { children: (0, t.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(l.li, { children: (0, t.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'Zet alleen tekst in het label', title_sm: 'Label bevat alleen tekst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label bevat alleen tekst', pagination_label: 'Label bevat alleen tekst', description: 'Richtlijnen voor alleen tekst in een label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/alleen-tekst', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => _ });
   var s = n(28369),
    t = n(46447),
    o = n(13526),
    r = n(68148),
    a = n(9016),
    c = n(69303),
    i = n(91635),
    d = n(30734),
    h = n(30758),
    m = n(31186),
    u = n(65904),
    p = n.n(u),
    b = n(14881),
    j = n(46847),
    x = n(86070);
   const v = ({ label: e, labelId: l, className: n, colorScheme: s, forcedColorsAdjust: t = !1, children: r, dangerouslySetInnerHTML: a, ...c }) => (0, x.jsxs)('figure', { className: (0, o.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, x.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var g = n(68197);
   const y = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: s, copyCode: t, colorScheme: r, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const m = 'string' == typeof n ? n : s || '',
        u = 'string' == typeof n ? p().highlight(n, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        y = (0, x.jsx)(g.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: m } });
       return (0, x.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', l), children: [d ? (0, x.jsx)(v, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, x.jsx)(b.n, { children: (0, x.jsxs)(b.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === t && (0, x.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: u = !0, children: p, container: b = 'document', language: j, designTokens: v }) => {
       const g = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || g),
        [A, w] = (0, h.useState)(N),
        [C, z] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === b ? (L = y) : 'document' === b ? (L = f) : 'surface' === b && (L = k),
        (0, x.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          g && (0, x.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, x.jsx)(L, { children: (0, x.jsx)(t.v$, { children: g }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, x.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             l &&
              (0, x.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(t.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
