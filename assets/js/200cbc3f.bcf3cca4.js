'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43952],
 {
  14881(e, n, s) {
   s.d(n, { K: () => d, n: () => a });
   var l = s(13526),
    o = s(30758),
    t = s(30662),
    r = s(32065),
    i = s(37168),
    c = s(86070);
   const a = (0, o.forwardRef)(({ as: e, className: n, children: s, ...o }, t) => {
     const r = e || 'div',
      i = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: t, className: i, ...o, children: s });
    }),
    d = ({ className: e, classNamePanel: n, label: s, heading: o, headingLevel: a, headingApperance: d, ...p }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...p, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(t.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [o && (0, c.jsx)(i.D, { level: a, appearance: d, children: o }), s] })] }) }), (0, c.jsx)('div', { className: m, children: p.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => i });
   var l = s(30758);
   const o = {},
    t = l.createContext(o);
   function r(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), l.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => a });
   var l = s(46447),
    o = s(16194),
    t = s(30758),
    r = s(56528);
   const i = {
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
   var c = s(86070);
   function a({ lineNumber: e, syntax: n, textContent: s, trim: a }) {
    let d = s;
    const { title: p, type: h } = (0, t.useContext)(r.x),
     m = (0, t.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: o, getTokenProps: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: s.map((n, s) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => L, GP: () => N, KC: () => F, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => T, bz: () => C, cB: () => z, e5: () => $, hY: () => M, jK: () => R, jP: () => D, ob: () => K, rI: () => A, t4: () => P, vP: () => I, vg: () => W });
   var l = s(92081),
    o = s(90578),
    t = s(96345),
    r = s(64249),
    i = s(4603),
    c = s(91525),
    a = s(23436),
    d = s(1375),
    p = s(4077),
    h = s(58315),
    m = s(73563),
    u = s(35193),
    g = s(82999),
    j = s(13088),
    x = s(43864),
    b = s(24214),
    v = s(79532),
    y = s(60529),
    f = s(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    N = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(t.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    C = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(p.A, { ..._ }),
    D = () => (0, f.jsx)(h.A, { ..._ }),
    P = () => (0, f.jsx)(m.A, { ..._ }),
    L = () => (0, f.jsx)(u.A, { ..._ }),
    M = () => (0, f.jsx)(g.A, { ..._ }),
    F = () => (0, f.jsx)(j.A, { ..._ }),
    T = () => (0, f.jsx)(x.A, { ..._ }),
    $ = () => (0, f.jsx)(b.A, { ..._ }),
    K = () => (0, f.jsx)(v.A, { ..._ }),
    W = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, s) {
   s.d(n, { I: () => l.In });
   var l = s(29181);
  },
  38029(e, n, s) {
   (s.r(n), s.d(n, { assets: () => x, contentTitle: () => j, default: () => y, frontMatter: () => g, metadata: () => l, toc: () => b }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/description/fieldset/index","title":"Plaats descriptions bij een fieldset tussen legend en eerste item","description":"Richtlijnen voor plaatsing van een descriptions bij een fieldset.","source":"@site/docs/richtlijnen/formulieren/description/5-fieldset/index.mdx","sourceDirName":"richtlijnen/formulieren/description/5-fieldset","slug":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset","permalink":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/5-fieldset/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats descriptions bij een fieldset tussen legend en eerste item","title_sm":"Description bij fieldsets","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Description bij fieldsets","pagination_label":"Description bij fieldsets","description":"Richtlijnen voor plaatsing van een descriptions bij een fieldset.","slug":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Meerdere descriptions","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen"},"next":{"title":"Grootte aanklikbaar gedeelte","permalink":"/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte"}}');
   var o = s(86070),
    t = s(18439),
    r = s(56672),
    i = s(87682),
    c = s(56528);
   function a(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeeld', children: 'Voorbeeld' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Koppel een description aan het fieldset-element, met aria-describedby.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)('fieldset', { 'aria-describedby': 'description-inloggen', children: [(0, o.jsx)('legend', { children: 'Wilt u inloggen?' }), (0, o.jsx)('p', { id: 'description-inloggen', children: 'Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.' }), (0, o.jsxs)('p', { children: [(0, o.jsx)('input', { id: 'inloggen-ja', type: 'radio', name: 'inloggen', value: 'ja' }), (0, o.jsx)('label', { htmlFor: 'inloggen-ja', children: ' Ja' })] }), (0, o.jsxs)('p', { children: [(0, o.jsx)('input', { id: 'inloggen-nee', type: 'radio', name: 'inloggen', value: 'nee' }), (0, o.jsx)('label', { htmlFor: 'inloggen-nee', children: ' Nee' })] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'plaats-descriptions-van-een-fieldset-tussen-de-legend-en-eerste-item', children: 'Plaats descriptions van een fieldset tussen de legend en eerste item' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Radiobuttons, checkboxes en bijvoorbeeld adresgegevens kunnen worden gegroepeerd in een fieldset. De vraag of het onderwerp staat dan in de legend. Plaats de description onder de legend vlak boven het eerste label/formulierveld. De description wordt aan het ', (0, o.jsx)(n.code, { children: 'fieldset' }), '-element gekoppeld met ', (0, o.jsx)(n.code, { children: 'aria-describedby' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Plaats descriptions bij een fieldset tussen legend en eerste item', title_sm: 'Description bij fieldsets', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Description bij fieldsets', pagination_label: 'Description bij fieldsets', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    b = [{ value: 'Voorbeeld', id: 'voorbeeld', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  46847(e, n, s) {
   s.d(n, { $: () => l.$n });
   var l = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => a });
   var l = s(30662),
    o = s(46447),
    t = s(13526),
    r = s(45795),
    i = s(30758),
    c = s(86070);
   const a = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: i, figure: d = !0 }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof s ? (0, c.jsx)(r.oz, { components: { a: o.N_ }, children: s }) : s;
     return (0, c.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(o.fz, { children: e })] }), u] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => i, RM: () => t });
   var l = s(86070),
    o = s(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, s) {
   s.d(n, { H: () => k });
   var l = s(28369),
    o = s(46447),
    t = s(13526),
    r = s(68148),
    i = s(9016),
    c = s(69303),
    a = s(91635),
    d = s(30734),
    p = s(30758),
    h = s(31186),
    m = s(65904),
    u = s.n(m),
    g = s(14881),
    j = s(46847),
    x = s(86070);
   const b = ({ label: e, labelId: n, className: s, colorScheme: l, forcedColorsAdjust: o = !1, children: r, dangerouslySetInnerHTML: i, ...c }) => (0, x.jsxs)('figure', { className: (0, t.A)('ma-html-image', s), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: r })] });
   var v = s(68197);
   const y = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: l, copyCode: o, colorScheme: r, defaultExpandedCode: i, designTokens: c, forcedColorsAdjust: a = !0, label: d }) => {
       const h = 'string' == typeof s ? s : l || '',
        m = 'string' == typeof s ? u().highlight(s, u().languages[e], e) : u().highlight(l || '', u().languages[e], e),
        y = (0, x.jsx)(v.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: h } });
       return (0, x.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(b, { forcedColorsAdjust: a, label: d, labelId: d ? (0, p.useId)() : void 0, children: y }) : y, (0, x.jsx)(g.n, { children: (0, x.jsxs)(g.K, { label: 'Code', open: i, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === o && (0, x.jsx)(j.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: m = !0, children: u, container: g = 'document', language: j, designTokens: b }) => {
       const v = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || v),
        [A, w] = (0, p.useState)(N),
        [C, S] = (0, p.useState)(s);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [r.A, i.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, p.useId)();
       let I = p.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, x.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          v && (0, x.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, x.jsx)(I, { children: (0, x.jsx)(o.v$, { children: v }) }) }) }),
          m &&
           (0, x.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(o.$n, {
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
             (0, x.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(o.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
