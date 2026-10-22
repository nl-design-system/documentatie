'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79837],
 {
  14881(e, n, l) {
   l.d(n, { K: () => i, n: () => d });
   var o = l(13526),
    r = l(30758),
    s = l(30662),
    t = l(32065),
    c = l(37168),
    a = l(86070);
   const d = (0, r.forwardRef)(({ as: e, className: n, children: l, ...r }, s) => {
     const t = e || 'div',
      c = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(t, { ref: s, className: c, ...r, children: l });
    }),
    i = ({ className: e, classNamePanel: n, label: l, heading: r, headingLevel: d, headingApperance: i, ...h }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      p = (0, o.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...h, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(t.I, { children: (0, a.jsx)(s.rI, {}) }) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [r && (0, a.jsx)(c.D, { level: d, appearance: i, children: r }), l] })] }) }), (0, a.jsx)('div', { className: p, children: h.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => c });
   var o = l(30758);
   const r = {},
    s = o.createContext(r);
   function t(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => d });
   var o = l(46447),
    r = l(16194),
    s = l(30758),
    t = l(56528);
   const c = {
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
   var a = l(86070);
   function d({ lineNumber: e, syntax: n, textContent: l, trim: d }) {
    let i = l;
    const { title: h, type: u } = (0, s.useContext)(t.x),
     p = (0, s.useId)();
    return (d && (i = i.trim()), (0, a.jsx)(r.f4, { theme: c, code: i, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...r({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => T, GP: () => N, KC: () => L, Nd: () => k, Rt: () => w, Vj: () => C, Wk: () => D, bz: () => S, cB: () => z, e5: () => $, hY: () => F, jK: () => I, jP: () => R, ob: () => W, rI: () => A, t4: () => M, vP: () => P, vg: () => H });
   var o = l(92081),
    r = l(90578),
    s = l(96345),
    t = l(64249),
    c = l(4603),
    a = l(91525),
    d = l(23436),
    i = l(1375),
    h = l(4077),
    u = l(58315),
    p = l(73563),
    m = l(35193),
    g = l(82999),
    j = l(13088),
    x = l(43864),
    v = l(24214),
    y = l(79532),
    b = l(60529),
    _ = l(86070);
   const f = { width: '1em', height: '1em' },
    k = () => (0, _.jsx)(o.A, { ...f }),
    N = () => (0, _.jsx)(r.A, { ...f }),
    A = () => (0, _.jsx)(s.A, { ...f }),
    C = () => (0, _.jsx)(t.A, { ...f }),
    S = () => (0, _.jsx)(c.A, { ...f }),
    w = () => (0, _.jsx)(a.A, { ...f }),
    z = () => (0, _.jsx)(d.A, { ...f }),
    P = () => (0, _.jsx)(i.A, { ...f }),
    I = () => (0, _.jsx)(h.A, { ...f }),
    R = () => (0, _.jsx)(u.A, { ...f }),
    M = () => (0, _.jsx)(p.A, { ...f }),
    T = () => (0, _.jsx)(m.A, { ...f }),
    F = () => (0, _.jsx)(g.A, { ...f }),
    L = () => (0, _.jsx)(j.A, { ...f }),
    D = () => (0, _.jsx)(x.A, { ...f }),
    $ = () => (0, _.jsx)(v.A, { ...f }),
    W = () => (0, _.jsx)(y.A, { ...f }),
    H = () => (0, _.jsx)(b.A, { ...f });
  },
  32065(e, n, l) {
   l.d(n, { I: () => o.In });
   var o = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => i, x: () => d });
   var o = l(30662),
    r = l(46447),
    s = l(13526),
    t = l(45795),
    c = l(30758),
    a = l(86070);
   const d = (0, c.createContext)({}),
    i = ({ title: e, appearance: n, description: l, children: c, figure: i = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = i ? 'figure' : 'div',
      p = i ? 'figcaption' : 'div',
      m = 'string' == typeof l ? (0, a.jsx)(t.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, a.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(r.fz, { children: e })] }), m] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => c, RM: () => s });
   var o = l(86070),
    r = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  79852(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => j, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => v }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/colour-contrast/index","title":"Zorg voor een goed kleurcontrast van de placeholdertekst","description":"Richtlijnen voor voldoende kleurcontrast.","source":"@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/4-colour-contrast","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een goed kleurcontrast van de placeholdertekst","title_sm":"Placeholder kleurcontrast","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kleurcontrast","pagination_label":"Placeholder kleurcontrast","description":"Richtlijnen voor voldoende kleurcontrast.","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var r = l(86070),
    s = l(18439),
    t = l(56672),
    c = l(87682),
    a = l(56528);
   function d(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'auto', children: 'Welk auto rij je?' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { className: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' }) })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }) }), '\n', (0, r.jsx)(n.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, r.jsxs)(n.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, r.jsx)(n.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Zie ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst', title_sm: 'Placeholder kleurcontrast', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(i, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y();
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var o = l(28369),
    r = l(46447),
    s = l(13526),
    t = l(68148),
    c = l(9016),
    a = l(69303),
    d = l(91635),
    i = l(30734),
    h = l(30758),
    u = l(31186),
    p = l(65904),
    m = l.n(p),
    g = l(14881),
    j = l(46847),
    x = l(86070);
   const v = ({ label: e, labelId: n, className: l, colorScheme: o, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: c, ...a }) => (0, x.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...a, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: c, 'aria-hidden': 'true', children: t })] });
   var y = l(68197);
   const b = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const _ = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   _.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: r, colorScheme: t, defaultExpandedCode: c, designTokens: a, forcedColorsAdjust: d = !0, label: i }) => {
       const u = 'string' == typeof l ? l : o || '',
        p = 'string' == typeof l ? m().highlight(l, m().languages[e], e) : m().highlight(o || '', m().languages[e], e),
        b = (0, x.jsx)(y.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: a, dangerouslySetInnerHTML: { __html: u } });
       return (0, x.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [i ? (0, x.jsx)(v, { forcedColorsAdjust: d, label: i, labelId: i ? (0, h.useId)() : void 0, children: b }) : b, (0, x.jsx)(g.n, { children: (0, x.jsxs)(g.K, { label: 'Code', open: c, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === r && (0, x.jsx)(j.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: g = 'document', language: j, designTokens: v }) => {
       const y = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || y),
        [A, C] = (0, h.useState)(N),
        [S, w] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await i.Ay.format(N, { parser: j, plugins: [t.A, c.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         C(e);
        })();
       }, [N]);
       const z = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === g ? (P = b) : 'document' === g ? (P = _) : 'surface' === g && (P = f),
        (0, x.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          y && (0, x.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, x.jsx)(P, { children: (0, x.jsx)(r.v$, { children: y }) }) }) }),
          p &&
           (0, x.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(r.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              w(!S);
             },
             'aria-expanded': S,
             'aria-controls': z,
             children: S ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, x.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !S,
            children: [
             (0, x.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(r.$n, {
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
