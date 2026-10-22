'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30347],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => i });
   var l = o(13526),
    r = o(30758),
    t = o(30662),
    s = o(32065),
    a = o(37168),
    c = o(86070);
   const i = (0, r.forwardRef)(({ as: e, className: n, children: o, ...r }, t) => {
     const s = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(s, { ref: t, className: a, ...r, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: r, headingLevel: i, headingApperance: d, ...h }) => {
     const u = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: u, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(s.I, { children: (0, c.jsx)(t.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [r && (0, c.jsx)(a.D, { level: i, appearance: d, children: r }), o] })] }) }), (0, c.jsx)('div', { className: m, children: h.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => a });
   var l = o(30758);
   const r = {},
    t = l.createContext(r);
   function s(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    r = o(16194),
    t = o(30758),
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
   var c = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: h, type: u } = (0, t.useContext)(s.x),
     m = (0, t.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: r, getTokenProps: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...r({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => G, GP: () => A, KC: () => L, Nd: () => k, Rt: () => C, Vj: () => w, Wk: () => M, bz: () => z, cB: () => F, e5: () => D, hY: () => $, jK: () => S, jP: () => R, ob: () => P, rI: () => N, t4: () => T, vP: () => I, vg: () => H });
   var l = o(92081),
    r = o(90578),
    t = o(96345),
    s = o(64249),
    a = o(4603),
    c = o(91525),
    i = o(23436),
    d = o(1375),
    h = o(4077),
    u = o(58315),
    m = o(73563),
    p = o(35193),
    v = o(82999),
    g = o(13088),
    x = o(43864),
    j = o(24214),
    b = o(79532),
    f = o(60529),
    y = o(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, y.jsx)(l.A, { ..._ }),
    A = () => (0, y.jsx)(r.A, { ..._ }),
    N = () => (0, y.jsx)(t.A, { ..._ }),
    w = () => (0, y.jsx)(s.A, { ..._ }),
    z = () => (0, y.jsx)(a.A, { ..._ }),
    C = () => (0, y.jsx)(c.A, { ..._ }),
    F = () => (0, y.jsx)(i.A, { ..._ }),
    I = () => (0, y.jsx)(d.A, { ..._ }),
    S = () => (0, y.jsx)(h.A, { ..._ }),
    R = () => (0, y.jsx)(u.A, { ..._ }),
    T = () => (0, y.jsx)(m.A, { ..._ }),
    G = () => (0, y.jsx)(p.A, { ..._ }),
    $ = () => (0, y.jsx)(v.A, { ..._ }),
    L = () => (0, y.jsx)(g.A, { ..._ }),
    M = () => (0, y.jsx)(x.A, { ..._ }),
    D = () => (0, y.jsx)(j.A, { ..._ }),
    P = () => (0, y.jsx)(b.A, { ..._ }),
    H = () => (0, y.jsx)(f.A, { ..._ });
  },
  32065(e, n, o) {
   o.d(n, { I: () => l.In });
   var l = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
  54336(e, n, o) {
   (o.r(n), o.d(n, { assets: () => x, contentTitle: () => g, default: () => f, frontMatter: () => v, metadata: () => l, toc: () => j }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-contrast/index","title":"Geef duidelijk aan waar een invoerveld is","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/1-field-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/1-field-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/1-field-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan waar een invoerveld is","title_sm":"Invoerveld goed zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed zichtbaar","pagination_label":"Invoerveld goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"},"next":{"title":"Tekst goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar"}}');
   var r = o(86070),
    t = o(18439),
    s = o(56672),
    a = o(87682),
    c = o(56528);
   function i(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(c.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, r.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { htmlFor: 'contrast-input-goed', children: 'Voorbeeld invoerveld met goed contrast' }), (0, r.jsx)('input', { type: 'text', id: 'contrast-input-goed' })] }) }) }), '\n', (0, r.jsx)(c.$, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, r.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)('fieldset', { children: [(0, r.jsx)('legend', { children: 'Kies je kleur' }), (0, r.jsxs)('div', { children: [(0, r.jsx)('input', { type: 'radio', id: 'radio1', name: 'kleur' }), (0, r.jsx)('label', { htmlFor: 'radio1', children: 'Blauw' })] }), (0, r.jsxs)('div', { children: [(0, r.jsx)('input', { type: 'radio', id: 'radio2', name: 'kleur' }), (0, r.jsx)('label', { htmlFor: 'radio2', children: 'Groen' })] }), (0, r.jsxs)('div', { children: [(0, r.jsx)('input', { type: 'radio', id: 'radio3', name: 'kleur' }), (0, r.jsx)('label', { htmlFor: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, r.jsx)(c.$, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 1.08:1](/contrast/?color=%23f8f5f1&background-color=%23ffffff)', children: (0, r.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { htmlFor: 'contrast-input-slecht', children: 'Voorbeeld invoerveld met slecht contrast' }), (0, r.jsx)('input', { type: 'text', id: 'contrast-input-slecht' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i();
   }
   function h(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }) }), '\n', (0, r.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Geef duidelijk aan waar een invoerveld is', title_sm: 'Invoerveld goed zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    j = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => i });
   var l = o(30662),
    r = o(46447),
    t = o(13526),
    s = o(45795),
    a = o(30758),
    c = o(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, c.jsx)(s.oz, { components: { a: r.N_ }, children: o }) : o;
     return (0, c.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(r.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => t });
   var l = o(86070),
    r = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => k });
   var l = o(28369),
    r = o(46447),
    t = o(13526),
    s = o(68148),
    a = o(9016),
    c = o(69303),
    i = o(91635),
    d = o(30734),
    h = o(30758),
    u = o(31186),
    m = o(65904),
    p = o.n(m),
    v = o(14881),
    g = o(46847),
    x = o(86070);
   const j = ({ label: e, labelId: n, className: o, colorScheme: l, forcedColorsAdjust: r = !1, children: s, dangerouslySetInnerHTML: a, ...c }) => (0, x.jsxs)('figure', { className: (0, t.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: s })] });
   var b = o(68197);
   const f = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   f.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: r, colorScheme: s, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const u = 'string' == typeof o ? o : l || '',
        m = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(l || '', p().languages[e], e),
        f = (0, x.jsx)(b.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: c, dangerouslySetInnerHTML: { __html: u } });
       return (0, x.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(j, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: f }) : f, (0, x.jsx)(v.n, { children: (0, x.jsxs)(v.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === r && (0, x.jsx)(g.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: m = !0, children: p, container: v = 'document', language: g, designTokens: j }) => {
       const b = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : u.qV(k || b),
        [N, w] = (0, h.useState)(A),
        [z, C] = (0, h.useState)(o);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: g, plugins: [s.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [A]);
       const F = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === v ? (I = f) : 'document' === v ? (I = y) : 'surface' === v && (I = _),
        (0, x.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          b && (0, x.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: j, children: (0, x.jsx)(I, { children: (0, x.jsx)(r.v$, { children: b }) }) }) }),
          m &&
           (0, x.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': F,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, x.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: F,
            hidden: !z,
            children: [
             (0, x.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: N, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(r.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
