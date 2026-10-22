'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44684],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => i });
   var r = l(13526),
    o = l(30758),
    s = l(30662),
    t = l(32065),
    a = l(37168),
    c = l(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, s) => {
     const t = e || 'div',
      a = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(t, { ref: s, className: a, ...o, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: i, headingApperance: d, ...u }) => {
     const m = (0, r.A)('utrecht-accordion__section', e),
      h = (0, r.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: m, ...u, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(t.I, { children: (0, c.jsx)(s.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [o && (0, c.jsx)(a.D, { level: i, appearance: d, children: o }), l] })] }) }), (0, c.jsx)('div', { className: h, children: u.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
   var r = l(30758);
   const o = {},
    s = r.createContext(o);
   function t(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => i });
   var r = l(46447),
    o = l(16194),
    s = l(30758),
    t = l(56528);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: m } = (0, s.useContext)(t.x),
     h = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => w, KC: () => L, Nd: () => k, Rt: () => C, Vj: () => A, Wk: () => P, bz: () => z, cB: () => S, e5: () => $, hY: () => G, jK: () => D, jP: () => R, ob: () => T, rI: () => N, t4: () => F, vP: () => I, vg: () => H });
   var r = l(92081),
    o = l(90578),
    s = l(96345),
    t = l(64249),
    a = l(4603),
    c = l(91525),
    i = l(23436),
    d = l(1375),
    u = l(4077),
    m = l(58315),
    h = l(73563),
    p = l(35193),
    g = l(82999),
    j = l(13088),
    v = l(43864),
    x = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(r.A, { ..._ }),
    w = () => (0, f.jsx)(o.A, { ..._ }),
    N = () => (0, f.jsx)(s.A, { ..._ }),
    A = () => (0, f.jsx)(t.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    C = () => (0, f.jsx)(c.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    D = () => (0, f.jsx)(u.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    F = () => (0, f.jsx)(h.A, { ..._ }),
    M = () => (0, f.jsx)(p.A, { ..._ }),
    G = () => (0, f.jsx)(g.A, { ..._ }),
    L = () => (0, f.jsx)(j.A, { ..._ }),
    P = () => (0, f.jsx)(v.A, { ..._ }),
    $ = () => (0, f.jsx)(x.A, { ..._ }),
    T = () => (0, f.jsx)(b.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => r.In });
   var r = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => r.$n });
   var r = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => i });
   var r = l(30662),
    o = l(46447),
    s = l(13526),
    t = l(45795),
    a = l(30758),
    c = l(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(t.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(r.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(r.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(o.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var r = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  68032(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => j, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => x }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/multistep/timing/index","title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","source":"@site/docs/richtlijnen/formulieren/multistep/5-timing/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/5-timing","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","permalink":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/5-timing/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden","title_sm":"Duidelijk aangeven verzenden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Duidelijk aangeven verzenden","pagination_label":"Duidelijk aangeven verzenden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"},"next":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"}}');
   var o = l(86070),
    s = l(18439),
    t = l(56672),
    a = l(87682),
    c = l(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Geef duidelijk aan dat een formulier verzonden gaat worden.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('button', { children: 'Versturen' }) }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Gebruik hetzelfde label voor verzenden als voor de navigatie in een meerstappenformulier.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('button', { type: 'submit', children: 'Volgende' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden' }) }), '\n', (0, o.jsx)(n.p, { children: 'Maak duidelijk aan de gebruiker wanneer het formulier echt gaat worden verzonden. Geef ook de gebruiker, als laatste stap, een samenvatting van wat is ingevuld met de mogelijkheid om te wijzigen.' }), '\n', (0, o.jsx)(n.p, { children: 'De tekst van de laatste submitbutton kan dan bijvoorbeeld \u201cVersturen\u201d zijn, afhankelijk van de inhoud van het formulier.' }), '\n', (0, o.jsx)(n.p, { children: 'Dit geeft de gebruiker zekerheid: \u201cik kan nog wat wijzigen\u201d of \u201cnu gaat het formulier echt verzonden worden\u201d.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.4/', children: 'Succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.6/', children: 'Succescriterium 3.3.6 Foutpreventie (alle)' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden', title_sm: 'Duidelijk aangeven verzenden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Duidelijk aangeven verzenden', pagination_label: 'Duidelijk aangeven verzenden', description: 'Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.', slug: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var r = l(28369),
    o = l(46447),
    s = l(13526),
    t = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(14881),
    j = l(46847),
    v = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: r, forcedColorsAdjust: o = !1, children: t, dangerouslySetInnerHTML: a, ...c }) => (0, v.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === r, 'ma-html-image__body--color-scheme-light': 'light' === r, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: r, copyCode: o, colorScheme: t, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const m = 'string' == typeof l ? l : r || '',
        h = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(r || '', p().languages[e], e),
        y = (0, v.jsx)(b.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: c, dangerouslySetInnerHTML: { __html: m } });
       return (0, v.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(x, { forcedColorsAdjust: i, label: d, labelId: d ? (0, u.useId)() : void 0, children: y }) : y, (0, v.jsx)(g.n, { children: (0, v.jsxs)(g.K, { label: 'Code', open: a, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === o && (0, v.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: j, designTokens: x }) => {
       const b = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(k || b),
        [N, A] = (0, u.useState)(w),
        [z, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [t.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let I = u.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          b && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, v.jsx)(I, { children: (0, v.jsx)(o.v$, { children: b }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
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
          h &&
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
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
