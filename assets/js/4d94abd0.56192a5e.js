'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32141],
 {
  14881(e, n, s) {
   s.d(n, { K: () => d, n: () => a });
   var l = s(13526),
    r = s(30758),
    o = s(30662),
    t = s(32065),
    c = s(37168),
    i = s(86070);
   const a = (0, r.forwardRef)(({ as: e, className: n, children: s, ...r }, o) => {
     const t = e || 'div',
      c = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: o, className: c, ...r, children: s });
    }),
    d = ({ className: e, classNamePanel: n, label: s, heading: r, headingLevel: a, headingApperance: d, ...p }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...p, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [r && (0, i.jsx)(c.D, { level: a, appearance: d, children: r }), s] })] }) }), (0, i.jsx)('div', { className: m, children: p.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => t, x: () => c });
   var l = s(30758);
   const r = {},
    o = l.createContext(r);
   function t(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => a });
   var l = s(46447),
    r = s(16194),
    o = s(30758),
    t = s(56528);
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
   var i = s(86070);
   function a({ lineNumber: e, syntax: n, textContent: s, trim: a }) {
    let d = s;
    const { title: p, type: h } = (0, o.useContext)(t.x),
     m = (0, o.useId)();
    return (a && (d = d.trim()), (0, i.jsx)(r.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: r, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => D, GP: () => w, KC: () => P, Nd: () => k, Rt: () => S, Vj: () => A, Wk: () => T, bz: () => C, cB: () => M, e5: () => $, hY: () => F, jK: () => I, jP: () => R, ob: () => K, rI: () => N, t4: () => L, vP: () => z, vg: () => H });
   var l = s(92081),
    r = s(90578),
    o = s(96345),
    t = s(64249),
    c = s(4603),
    i = s(91525),
    a = s(23436),
    d = s(1375),
    p = s(4077),
    h = s(58315),
    m = s(73563),
    u = s(35193),
    j = s(82999),
    x = s(13088),
    g = s(43864),
    v = s(24214),
    y = s(79532),
    b = s(60529),
    f = s(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    N = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(t.A, { ..._ }),
    C = () => (0, f.jsx)(c.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    M = () => (0, f.jsx)(a.A, { ..._ }),
    z = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(p.A, { ..._ }),
    R = () => (0, f.jsx)(h.A, { ..._ }),
    L = () => (0, f.jsx)(m.A, { ..._ }),
    D = () => (0, f.jsx)(u.A, { ..._ }),
    F = () => (0, f.jsx)(j.A, { ..._ }),
    P = () => (0, f.jsx)(x.A, { ..._ }),
    T = () => (0, f.jsx)(g.A, { ..._ }),
    $ = () => (0, f.jsx)(v.A, { ..._ }),
    K = () => (0, f.jsx)(y.A, { ..._ }),
    H = () => (0, f.jsx)(b.A, { ..._ });
  },
  32065(e, n, s) {
   s.d(n, { I: () => l.In });
   var l = s(29181);
  },
  43912(e, n, s) {
   (s.r(n), s.d(n, { assets: () => g, contentTitle: () => x, default: () => b, frontMatter: () => j, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/description/multiple/index","title":"Meerdere descriptions koppelen","description":"Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/4-multiple/index.mdx","sourceDirName":"richtlijnen/formulieren/description/4-multiple","slug":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/4-multiple/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Meerdere descriptions koppelen","title_sm":"Meerdere descriptions","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Meerdere descriptions","pagination_label":"Meerdere descriptions","description":"Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"},"next":{"title":"Description bij fieldsets","permalink":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset"}}');
   var r = s(86070),
    o = s(18439),
    t = s(56672),
    c = s(87682),
    i = s(56528);
   function a(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Koppel alle descriptions aan het formulierveld.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord5', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord5', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { id: 'error-wachtwoord5', children: 'Je gekozen wachtwoord is te kort.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord5', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord5 error-wachtwoord5' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'meerdere-descriptions-koppelen', children: 'Meerdere descriptions koppelen' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Geef dan ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, r.jsx)(n.code, { children: 'aria-describedby' }), ' is de volgorde waarin het voorgelezen wordt.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Meerdere descriptions koppelen', title_sm: 'Meerdere descriptions', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    g = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y();
   }
  },
  46847(e, n, s) {
   s.d(n, { $: () => l.$n });
   var l = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => a });
   var l = s(30662),
    r = s(46447),
    o = s(13526),
    t = s(45795),
    c = s(30758),
    i = s(86070);
   const a = (0, c.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: c, figure: d = !0 }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof s ? (0, i.jsx)(t.oz, { components: { a: r.N_ }, children: s }) : s;
     return (0, i.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(r.fz, { children: e })] }), u] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(a.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => c, RM: () => o });
   var l = s(86070),
    r = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, s) {
   s.d(n, { H: () => k });
   var l = s(28369),
    r = s(46447),
    o = s(13526),
    t = s(68148),
    c = s(9016),
    i = s(69303),
    a = s(91635),
    d = s(30734),
    p = s(30758),
    h = s(31186),
    m = s(65904),
    u = s.n(m),
    j = s(14881),
    x = s(46847),
    g = s(86070);
   const v = ({ label: e, labelId: n, className: s, colorScheme: l, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: c, ...i }) => (0, g.jsxs)('figure', { className: (0, o.A)('ma-html-image', s), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: c, 'aria-hidden': 'true', children: t })] });
   var y = s(68197);
   const b = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: l, copyCode: r, colorScheme: t, defaultExpandedCode: c, designTokens: i, forcedColorsAdjust: a = !0, label: d }) => {
       const h = 'string' == typeof s ? s : l || '',
        m = 'string' == typeof s ? u().highlight(s, u().languages[e], e) : u().highlight(l || '', u().languages[e], e),
        b = (0, g.jsx)(y.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: h } });
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(v, { forcedColorsAdjust: a, label: d, labelId: d ? (0, p.useId)() : void 0, children: b }) : b, (0, g.jsx)(j.n, { children: (0, g.jsxs)(j.K, { label: 'Code', open: c, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === r && (0, g.jsx)(x.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: m = !0, children: u, container: j = 'document', language: x, designTokens: v }) => {
       const y = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(k || y),
        [N, A] = (0, p.useState)(w),
        [C, S] = (0, p.useState)(s);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [t.A, c.Ay, i.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const M = (0, p.useId)();
       let z = p.Fragment;
       return (
        'paragraph' === j ? (z = b) : 'document' === j ? (z = f) : 'surface' === j && (z = _),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          y && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, g.jsx)(z, { children: (0, g.jsx)(r.v$, { children: y }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(r.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': M,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: M,
            hidden: !C,
            children: [
             (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
