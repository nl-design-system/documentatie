'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [11341],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => i });
   var l = o(13526),
    s = o(30758),
    t = o(30662),
    r = o(32065),
    a = o(37168),
    c = o(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: o, ...s }, t) => {
     const r = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: t, className: a, ...s, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: s, headingLevel: i, headingApperance: d, ...p }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...p, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(t.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [s && (0, c.jsx)(a.D, { level: i, appearance: d, children: s }), o] })] }) }), (0, c.jsx)('div', { className: m, children: p.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => a });
   var l = o(30758);
   const s = {},
    t = l.createContext(s);
   function r(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), l.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    s = o(16194),
    t = o(30758),
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
    const { title: p, type: h } = (0, t.useContext)(r.x),
     m = (0, t.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: s, getTokenProps: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => W, GP: () => w, KC: () => F, Nd: () => _, Rt: () => S, Vj: () => A, Wk: () => P, bz: () => C, cB: () => z, e5: () => $, hY: () => M, jK: () => R, jP: () => L, ob: () => D, rI: () => N, t4: () => T, vP: () => I, vg: () => K });
   var l = o(92081),
    s = o(90578),
    t = o(96345),
    r = o(64249),
    a = o(4603),
    c = o(91525),
    i = o(23436),
    d = o(1375),
    p = o(4077),
    h = o(58315),
    m = o(73563),
    u = o(35193),
    j = o(82999),
    g = o(13088),
    x = o(43864),
    v = o(24214),
    y = o(79532),
    b = o(60529),
    k = o(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(l.A, { ...f }),
    w = () => (0, k.jsx)(s.A, { ...f }),
    N = () => (0, k.jsx)(t.A, { ...f }),
    A = () => (0, k.jsx)(r.A, { ...f }),
    C = () => (0, k.jsx)(a.A, { ...f }),
    S = () => (0, k.jsx)(c.A, { ...f }),
    z = () => (0, k.jsx)(i.A, { ...f }),
    I = () => (0, k.jsx)(d.A, { ...f }),
    R = () => (0, k.jsx)(p.A, { ...f }),
    L = () => (0, k.jsx)(h.A, { ...f }),
    T = () => (0, k.jsx)(m.A, { ...f }),
    W = () => (0, k.jsx)(u.A, { ...f }),
    M = () => (0, k.jsx)(j.A, { ...f }),
    F = () => (0, k.jsx)(g.A, { ...f }),
    P = () => (0, k.jsx)(x.A, { ...f }),
    $ = () => (0, k.jsx)(v.A, { ...f }),
    D = () => (0, k.jsx)(y.A, { ...f }),
    K = () => (0, k.jsx)(b.A, { ...f });
  },
  32065(e, n, o) {
   o.d(n, { I: () => l.In });
   var l = o(29181);
  },
  45560(e, n, o) {
   (o.r(n), o.d(n, { assets: () => x, contentTitle: () => g, default: () => b, frontMatter: () => j, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/help/allow-copy-paste/index","title":"Sta knippen en plakken van een wachtwoord toe","description":"Richtlijnen om knippen en plakken van een wachtwoord toe te staan.","source":"@site/docs/richtlijnen/formulieren/help/2-allow-copy-paste/index.mdx","sourceDirName":"richtlijnen/formulieren/help/2-allow-copy-paste","slug":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","permalink":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/2-allow-copy-paste/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Sta knippen en plakken van een wachtwoord toe","title_sm":"Wachtwoord plakken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Wachtwoord plakken","pagination_label":"Wachtwoord plakken","description":"Richtlijnen om knippen en plakken van een wachtwoord toe te staan.","slug":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Optioneel of verplicht","permalink":"/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/"},"next":{"title":"Keur niet te snel af","permalink":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af"}}');
   var s = o(86070),
    t = o(18439),
    r = o(56672),
    a = o(87682),
    c = o(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Sta kopi\xebren van een wachtwoord toe.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('label', { htmlFor: 'pw1', children: 'Uw nieuwe wachtwoord' }), (0, s.jsx)('input', { type: 'password', id: 'pw1', autoComplete: 'new-password', name: 'wachtwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: 'Sta knippen en plakken van een wachtwoord toe' }) }), '\n', (0, s.jsx)(n.p, { children: 'Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling.' }), '\n', (0, s.jsx)(n.p, { children: 'Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen.' }), '\n', (0, s.jsxs)(n.p, { children: ['Zoals het Britse ', (0, s.jsx)('span', { lang: 'en', children: 'National Cyber Security Centre' }), ' uitlegt in ', (0, s.jsx)(n.a, { href: 'https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords', children: (0, s.jsx)('span', { lang: 'en', children: 'Let them paste passwords' }) }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.8/', children: 'Succescriterium 3.3.8 Toegankelijke authenticatie (minimum)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.9/', children: 'Succescriterium 3.3.9 Toegankelijke authenticatie (uitgebreid)' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Sta knippen en plakken van een wachtwoord toe', title_sm: 'Wachtwoord plakken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Wachtwoord plakken', pagination_label: 'Wachtwoord plakken', description: 'Richtlijnen om knippen en plakken van een wachtwoord toe te staan.', slug: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y();
   }
  },
  46847(e, n, o) {
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => i });
   var l = o(30662),
    s = o(46447),
    t = o(13526),
    r = o(45795),
    a = o(30758),
    c = o(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d = !0 }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof o ? (0, c.jsx)(r.oz, { components: { a: s.N_ }, children: o }) : o;
     return (0, c.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(s.fz, { children: e })] }), u] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => t });
   var l = o(86070),
    s = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => _ });
   var l = o(28369),
    s = o(46447),
    t = o(13526),
    r = o(68148),
    a = o(9016),
    c = o(69303),
    i = o(91635),
    d = o(30734),
    p = o(30758),
    h = o(31186),
    m = o(65904),
    u = o.n(m),
    j = o(14881),
    g = o(46847),
    x = o(86070);
   const v = ({ label: e, labelId: n, className: o, colorScheme: l, forcedColorsAdjust: s = !1, children: r, dangerouslySetInnerHTML: a, ...c }) => (0, x.jsxs)('figure', { className: (0, t.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var y = o(68197);
   const b = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: s, colorScheme: r, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const h = 'string' == typeof o ? o : l || '',
        m = 'string' == typeof o ? u().highlight(o, u().languages[e], e) : u().highlight(l || '', u().languages[e], e),
        b = (0, x.jsx)(y.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: h } });
       return (0, x.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(v, { forcedColorsAdjust: i, label: d, labelId: d ? (0, p.useId)() : void 0, children: b }) : b, (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === s && (0, x.jsx)(g.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: m = !0, children: u, container: j = 'document', language: g, designTokens: v }) => {
       const y = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || y),
        [N, A] = (0, p.useState)(w),
        [C, S] = (0, p.useState)(o);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: g, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const z = (0, p.useId)();
       let I = p.Fragment;
       return (
        'paragraph' === j ? (I = b) : 'document' === j ? (I = k) : 'surface' === j && (I = f),
        (0, x.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          y && (0, x.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, x.jsx)(I, { children: (0, x.jsx)(s.v$, { children: y }) }) }) }),
          m &&
           (0, x.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(s.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, x.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: N, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(s.$n, {
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
