'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7420],
 {
  14806(e, l, n) {
   (n.r(l), n.d(l, { assets: () => b, contentTitle: () => x, default: () => y, frontMatter: () => g, metadata: () => o, toc: () => j }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/placeholder-contrast/index","title":"Geef placeholders voldoende kleurcontrast","description":"Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/3-placeholder-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef placeholders voldoende kleurcontrast","title_sm":"Placeholder goed zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder goed zichtbaar","pagination_label":"Placeholder goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Tekst goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar"},"next":{"title":"Focus goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar"}}');
   var r = n(86070),
    s = n(18439),
    t = n(56672),
    a = n(87682),
    c = n(56528);
   function d(e) {
    const l = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(c.$, { appearance: 'do', title: 'Maak de placeholder goed leesbaar door voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 6.28:1](/contrast/?color=%23606060&background-color=%23ffffff)', children: (0, r.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#606060' }, forcedColorsAdjust: !1, label: 'Text Input met een Placeholder die voldoende contrast heeft', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('input', { placeholder: 'Zoeken' }) }) }) }), '\n', (0, r.jsx)(c.$, { appearance: 'dont', title: 'Maak de placeholder slecht zichtbaar door te laag contrast.', description: 'Dit voorbeeld heeft [een contrast van 3.54:1](/contrast/?color=%23888888&background-color=%23ffffff)', children: (0, r.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#888888' }, forcedColorsAdjust: !1, label: 'Text Input met een Placeholder die niet goed zichtbaar is, door onvoldoende contrast', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('input', { placeholder: 'Zoeken' }) }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.header, { children: (0, r.jsx)(l.h1, { id: 'geef-placeholders-voldoende-kleurcontrast', children: 'Geef placeholders voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(l.p, { children: 'Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4,5:1 of hoger zijn.' }), '\n', (0, r.jsxs)(l.p, { children: [(0, r.jsx)(l.strong, { children: 'Let op' }), ': sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de richtlijn ', (0, r.jsx)(l.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast/', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Geef placeholders voldoende kleurcontrast', title_sm: 'Placeholder goed zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder goed zichtbaar', pagination_label: 'Placeholder goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function v(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(i, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v();
   }
  },
  14881(e, l, n) {
   n.d(l, { K: () => i, n: () => d });
   var o = n(13526),
    r = n(30758),
    s = n(30662),
    t = n(32065),
    a = n(37168),
    c = n(86070);
   const d = (0, r.forwardRef)(({ as: e, className: l, children: n, ...r }, s) => {
     const t = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, c.jsx)(t, { ref: s, className: a, ...r, children: n });
    }),
    i = ({ className: e, classNamePanel: l, label: n, heading: r, headingLevel: d, headingApperance: i, ...h }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      p = (0, o.A)('utrecht-accordion__panel', l);
     return (0, c.jsxs)('details', { className: u, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(t.I, { children: (0, c.jsx)(s.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [r && (0, c.jsx)(a.D, { level: d, appearance: i, children: r }), n] })] }) }), (0, c.jsx)('div', { className: p, children: h.children })] });
    };
  },
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => a });
   var o = n(30758);
   const r = {},
    s = o.createContext(r);
   function t(e) {
    const l = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function a(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), o.createElement(s.Provider, { value: l }, e.children));
   }
  },
  28369(e, l, n) {
   n.d(l, { M: () => d });
   var o = n(46447),
    r = n(16194),
    s = n(30758),
    t = n(56528);
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
   function d({ lineNumber: e, syntax: l, textContent: n, trim: d }) {
    let i = n;
    const { title: h, type: u } = (0, s.useContext)(t.x),
     p = (0, s.useId)();
    return (d && (i = i.trim()), (0, c.jsx)(r.f4, { theme: a, code: i, language: l || '', children: ({ style: l, tokens: n, getLineProps: r, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...r({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...s({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => M, GP: () => N, KC: () => F, Nd: () => k, Rt: () => C, Vj: () => w, Wk: () => $, bz: () => z, cB: () => S, e5: () => D, hY: () => L, jK: () => P, jP: () => R, ob: () => G, rI: () => A, t4: () => T, vP: () => I, vg: () => H });
   var o = n(92081),
    r = n(90578),
    s = n(96345),
    t = n(64249),
    a = n(4603),
    c = n(91525),
    d = n(23436),
    i = n(1375),
    h = n(4077),
    u = n(58315),
    p = n(73563),
    m = n(35193),
    g = n(82999),
    x = n(13088),
    b = n(43864),
    j = n(24214),
    v = n(79532),
    y = n(60529),
    f = n(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(o.A, { ..._ }),
    N = () => (0, f.jsx)(r.A, { ..._ }),
    A = () => (0, f.jsx)(s.A, { ..._ }),
    w = () => (0, f.jsx)(t.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    C = () => (0, f.jsx)(c.A, { ..._ }),
    S = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(i.A, { ..._ }),
    P = () => (0, f.jsx)(h.A, { ..._ }),
    R = () => (0, f.jsx)(u.A, { ..._ }),
    T = () => (0, f.jsx)(p.A, { ..._ }),
    M = () => (0, f.jsx)(m.A, { ..._ }),
    L = () => (0, f.jsx)(g.A, { ..._ }),
    F = () => (0, f.jsx)(x.A, { ..._ }),
    $ = () => (0, f.jsx)(b.A, { ..._ }),
    D = () => (0, f.jsx)(j.A, { ..._ }),
    G = () => (0, f.jsx)(v.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, l, n) {
   n.d(l, { I: () => o.In });
   var o = n(29181);
  },
  46847(e, l, n) {
   n.d(l, { $: () => o.$n });
   var o = n(50805);
  },
  56528(e, l, n) {
   n.d(l, { $: () => i, x: () => d });
   var o = n(30662),
    r = n(46447),
    s = n(13526),
    t = n(45795),
    a = n(30758),
    c = n(86070);
   const d = (0, a.createContext)({}),
    i = ({ title: e, appearance: l, description: n, children: a, figure: i = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = i ? 'figure' : 'div',
      p = i ? 'figcaption' : 'div',
      m = 'string' == typeof n ? (0, c.jsx)(t.oz, { components: { a: r.N_ }, children: n }) : n;
     return (0, c.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(o.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(o.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(r.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[l] }, children: a }) })] });
    };
  },
  56672(e, l, n) {
   n.d(l, { Ay: () => a, RM: () => s });
   var o = n(86070),
    r = n(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(l.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => k });
   var o = n(28369),
    r = n(46447),
    s = n(13526),
    t = n(68148),
    a = n(9016),
    c = n(69303),
    d = n(91635),
    i = n(30734),
    h = n(30758),
    u = n(31186),
    p = n(65904),
    m = n.n(p),
    g = n(14881),
    x = n(46847),
    b = n(86070);
   const j = ({ label: e, labelId: l, className: n, colorScheme: o, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: a, ...c }) => (0, b.jsxs)('figure', { className: (0, s.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...c, children: [e && (0, b.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, b.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var v = n(68197);
   const y = ({ children: e }) => (0, b.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, b.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, b.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: o, copyCode: r, colorScheme: t, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: d = !0, label: i }) => {
       const u = 'string' == typeof n ? n : o || '',
        p = 'string' == typeof n ? m().highlight(n, m().languages[e], e) : m().highlight(o || '', m().languages[e], e),
        y = (0, b.jsx)(v.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: c, dangerouslySetInnerHTML: { __html: u } });
       return (0, b.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', l), children: [i ? (0, b.jsx)(j, { forcedColorsAdjust: d, label: i, labelId: i ? (0, h.useId)() : void 0, children: y }) : y, (0, b.jsx)(g.n, { children: (0, b.jsxs)(g.K, { label: 'Code', open: a, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === r && (0, b.jsx)(x.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: p = !0, children: m, container: g = 'document', language: x, designTokens: j }) => {
       const v = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || v),
        [A, w] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await i.Ay.format(N, { parser: x, plugins: [t.A, a.Ay, c.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, b.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          v && (0, b.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: j, children: (0, b.jsx)(I, { children: (0, b.jsx)(r.v$, { children: v }) }) }) }),
          p &&
           (0, b.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(r.$n, {
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
           (0, b.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             l &&
              (0, b.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(r.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
