'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33600],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => i });
   var t = l(13526),
    s = l(30758),
    o = l(30662),
    r = l(32065),
    a = l(37168),
    c = l(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, o) => {
     const r = e || 'div',
      a = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: o, className: a, ...s, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: i, headingApperance: d, ...h }) => {
     const m = (0, t.A)('utrecht-accordion__section', e),
      u = (0, t.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: m, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(o.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [s && (0, c.jsx)(a.D, { level: i, appearance: d, children: s }), l] })] }) }), (0, c.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var t = l(30758);
   const s = {},
    o = t.createContext(s);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => i });
   var t = l(46447),
    s = l(16194),
    o = l(30758),
    r = l(56528);
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
    const { title: h, type: m } = (0, o.useContext)(r.x),
     u = (0, o.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => N, KC: () => P, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => $, bz: () => z, cB: () => S, e5: () => D, hY: () => L, jK: () => I, jP: () => F, ob: () => G, rI: () => A, t4: () => R, vP: () => T, vg: () => H });
   var t = l(92081),
    s = l(90578),
    o = l(96345),
    r = l(64249),
    a = l(4603),
    c = l(91525),
    i = l(23436),
    d = l(1375),
    h = l(4077),
    m = l(58315),
    u = l(73563),
    p = l(35193),
    g = l(82999),
    x = l(13088),
    j = l(43864),
    v = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(t.A, { ...k }),
    N = () => (0, f.jsx)(s.A, { ...k }),
    A = () => (0, f.jsx)(o.A, { ...k }),
    w = () => (0, f.jsx)(r.A, { ...k }),
    z = () => (0, f.jsx)(a.A, { ...k }),
    C = () => (0, f.jsx)(c.A, { ...k }),
    S = () => (0, f.jsx)(i.A, { ...k }),
    T = () => (0, f.jsx)(d.A, { ...k }),
    I = () => (0, f.jsx)(h.A, { ...k }),
    F = () => (0, f.jsx)(m.A, { ...k }),
    R = () => (0, f.jsx)(u.A, { ...k }),
    M = () => (0, f.jsx)(p.A, { ...k }),
    L = () => (0, f.jsx)(g.A, { ...k }),
    P = () => (0, f.jsx)(x.A, { ...k }),
    $ = () => (0, f.jsx)(j.A, { ...k }),
    D = () => (0, f.jsx)(v.A, { ...k }),
    G = () => (0, f.jsx)(b.A, { ...k }),
    H = () => (0, f.jsx)(y.A, { ...k });
  },
  31509(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => x, default: () => y, frontMatter: () => g, metadata: () => t, toc: () => v }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/text-contrast/index","title":"Geef tekst voldoende kleurcontrast","description":"Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/2-text-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/2-text-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/2-text-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef tekst voldoende kleurcontrast","title_sm":"Tekst goed zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Tekst goed zichtbaar","pagination_label":"Tekst goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Invoerveld goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar"},"next":{"title":"Placeholder goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar"}}');
   var s = l(86070),
    o = l(18439),
    r = l(56672),
    a = l(87682),
    c = l(56528);
   function i(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Maak het label goed leesbaar door voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, s.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-form-label-color': '#006FA1' }, children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'naam1', autoComplete: 'name' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Maak het label slecht leesbaar door onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 2.62:1](/contrast/?color=%23999999&background-color=%23f8f5f1)', children: (0, s.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-form-label-color': '#999999' }, children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { 'data-test-axe': 'false', htmlFor: 'naam2', children: 'Uw naam' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'naam2', autoComplete: 'name' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i();
   }
   function h(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, s.jsx)(n.p, { children: 'Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen.' }), '\n', (0, s.jsx)(n.p, { children: 'Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4,5:1 of hoger zijn.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Geef tekst voldoende kleurcontrast', title_sm: 'Tekst goed zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    j = {},
    v = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  32065(e, n, l) {
   l.d(n, { I: () => t.In });
   var t = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => t.$n });
   var t = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => i });
   var t = l(30662),
    s = l(46447),
    o = l(13526),
    r = l(45795),
    a = l(30758),
    c = l(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(r.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(t.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(t.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(s.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => o });
   var t = l(86070),
    s = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var t = l(28369),
    s = l(46447),
    o = l(13526),
    r = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    h = l(30758),
    m = l(31186),
    u = l(65904),
    p = l.n(u),
    g = l(14881),
    x = l(46847),
    j = l(86070);
   const v = ({ label: e, labelId: n, className: l, colorScheme: t, forcedColorsAdjust: s = !1, children: r, dangerouslySetInnerHTML: a, ...c }) => (0, j.jsxs)('figure', { className: (0, o.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === t, 'ma-html-image__body--color-scheme-light': 'light' === t, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: t, copyCode: s, colorScheme: r, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const m = 'string' == typeof l ? l : t || '',
        u = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(t || '', p().languages[e], e),
        y = (0, j.jsx)(b.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: m } });
       return (0, j.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(v, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === s && (0, j.jsx)(x.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: g = 'document', language: x, designTokens: v }) => {
       const b = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || b),
        [A, w] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let T = h.Fragment;
       return (
        'paragraph' === g ? (T = y) : 'document' === g ? (T = f) : 'surface' === g && (T = k),
        (0, j.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          b && (0, j.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, j.jsx)(T, { children: (0, j.jsx)(s.v$, { children: b }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, j.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
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
