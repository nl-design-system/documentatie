'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1754],
 {
  14881(e, n, s) {
   s.d(n, { K: () => d, n: () => c });
   var t = s(13526),
    l = s(30758),
    o = s(30662),
    r = s(32065),
    a = s(37168),
    i = s(86070);
   const c = (0, l.forwardRef)(({ as: e, className: n, children: s, ...l }, o) => {
     const r = e || 'div',
      a = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: o, className: a, ...l, children: s });
    }),
    d = ({ className: e, classNamePanel: n, label: s, heading: l, headingLevel: c, headingApperance: d, ...m }) => {
     const p = (0, t.A)('utrecht-accordion__section', e),
      h = (0, t.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: p, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [l && (0, i.jsx)(a.D, { level: c, appearance: d, children: l }), s] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => a });
   var t = s(30758);
   const l = {},
    o = t.createContext(l);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => c });
   var t = s(46447),
    l = s(16194),
    o = s(30758),
    r = s(56528);
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
   var i = s(86070);
   function c({ lineNumber: e, syntax: n, textContent: s, trim: c }) {
    let d = s;
    const { title: m, type: p } = (0, o.useContext)(r.x),
     h = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: l, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => M, GP: () => N, KC: () => T, Nd: () => k, Rt: () => S, Vj: () => C, Wk: () => $, bz: () => w, cB: () => z, e5: () => F, hY: () => P, jK: () => R, jP: () => V, ob: () => D, rI: () => A, t4: () => L, vP: () => I, vg: () => H });
   var t = s(92081),
    l = s(90578),
    o = s(96345),
    r = s(64249),
    a = s(4603),
    i = s(91525),
    c = s(23436),
    d = s(1375),
    m = s(4077),
    p = s(58315),
    h = s(73563),
    u = s(35193),
    g = s(82999),
    b = s(13088),
    v = s(43864),
    x = s(24214),
    j = s(79532),
    y = s(60529),
    f = s(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(t.A, { ..._ }),
    N = () => (0, f.jsx)(l.A, { ..._ }),
    A = () => (0, f.jsx)(o.A, { ..._ }),
    C = () => (0, f.jsx)(r.A, { ..._ }),
    w = () => (0, f.jsx)(a.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    z = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    V = () => (0, f.jsx)(p.A, { ..._ }),
    L = () => (0, f.jsx)(h.A, { ..._ }),
    M = () => (0, f.jsx)(u.A, { ..._ }),
    P = () => (0, f.jsx)(g.A, { ..._ }),
    T = () => (0, f.jsx)(b.A, { ..._ }),
    $ = () => (0, f.jsx)(v.A, { ..._ }),
    F = () => (0, f.jsx)(x.A, { ..._ }),
    D = () => (0, f.jsx)(j.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, s) {
   s.d(n, { I: () => t.In });
   var t = s(29181);
  },
  46847(e, n, s) {
   s.d(n, { $: () => t.$n });
   var t = s(50805);
  },
  47682(e, n, s) {
   (s.r(n), s.d(n, { assets: () => v, contentTitle: () => b, default: () => y, frontMatter: () => g, metadata: () => t, toc: () => x }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/multistep/consistency/index","title":"Zorg voor een consistente navigatie en benaming van links en buttons","description":"Richtlijnen over consistente benaming van navigatie, links en buttons.","source":"@site/docs/richtlijnen/formulieren/multistep/3-consistency/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/3-consistency","slug":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/3-consistency/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een consistente navigatie en benaming van links en buttons","title_sm":"Consistente navigatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Consistente navigatie","pagination_label":"Consistente navigatie","description":"Richtlijnen over consistente benaming van navigatie, links en buttons.","slug":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing voortgang stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang"},"next":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"}}');
   var l = s(86070),
    o = s(18439),
    r = s(56672),
    a = s(87682),
    i = s(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Benoem de stappen consistent.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('a', { href: 'https://example.com/stap-1', children: 'Vorige stap' }) }), (0, l.jsx)('p', { children: '[...]' }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Volgende stap' }) })] }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'dont', title: 'Verschillen tussen hoe de vorige en volgende stap worden benoemd.', description: 'Gebruik ofwel \u2018terug\u2019/\u2018verder\u2019 ofwel \u2018Vorige stap\u2019/\u2018Volgende stap\u2019.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('a', { href: 'https://example.com/stap-1', children: 'Terug' }) }), (0, l.jsx)('p', { children: '[...]' }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Volgende stap' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }) }), '\n', (0, l.jsx)(n.p, { children: 'Geef op een consistente plek, met een consistente benaming, aan hoe de gebruiker navigeert binnen de stappen, bijvoorbeeld:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: '"Vorige stap", boven het formulier' }), '\n', (0, l.jsx)(n.li, { children: '"Volgende stap" (of als laatste stap: "Versturen") als submitbutton' }), '\n'] }), '\n', (0, l.jsx)(n.p, { children: 'Zorg er dus voor dat links en buttons binnen de formulieren op dezelfde plaats staan en dat ze ook een consistente naam hebben. Door consistentie heeft de gebruiker minder moeite de navigatie te begrijpen en weet ook beter wat er gaat komen na een keuze.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.4/', children: 'Succescriterium 3.2.4 Consistente identificatie' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Zorg voor een consistente navigatie en benaming van links en buttons', title_sm: 'Consistente navigatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Consistente navigatie', pagination_label: 'Consistente navigatie', description: 'Richtlijnen over consistente benaming van navigatie, links en buttons.', slug: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function j(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j();
   }
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => c });
   var t = s(30662),
    l = s(46447),
    o = s(13526),
    r = s(45795),
    a = s(30758),
    i = s(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      u = 'string' == typeof s ? (0, i.jsx)(r.oz, { components: { a: l.N_ }, children: s }) : s;
     return (0, i.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(t.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(l.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(t.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(l.fz, { children: e })] }), u] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => o });
   var t = s(86070),
    l = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, s) {
   s.d(n, { H: () => k });
   var t = s(28369),
    l = s(46447),
    o = s(13526),
    r = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    m = s(30758),
    p = s(31186),
    h = s(65904),
    u = s.n(h),
    g = s(14881),
    b = s(46847),
    v = s(86070);
   const x = ({ label: e, labelId: n, className: s, colorScheme: t, forcedColorsAdjust: l = !1, children: r, dangerouslySetInnerHTML: a, ...i }) => (0, v.jsxs)('figure', { className: (0, o.A)('ma-html-image', s), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === t, 'ma-html-image__body--color-scheme-light': 'light' === t, 'ma-html-image__body--forced-colors-adjust': l }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var j = s(68197);
   const y = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: t, copyCode: l, colorScheme: r, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const p = 'string' == typeof s ? s : t || '',
        h = 'string' == typeof s ? u().highlight(s, u().languages[e], e) : u().highlight(t || '', u().languages[e], e),
        y = (0, v.jsx)(j.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: i, dangerouslySetInnerHTML: { __html: p } });
       return (0, v.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, v.jsx)(g.n, { children: (0, v.jsxs)(g.K, { label: 'Code', open: a, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === l && (0, v.jsx)(b.$, { 'data-copy-code': p, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: h = !0, children: u, container: g = 'document', language: b, designTokens: x }) => {
       const j = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(k || j),
        [A, C] = (0, m.useState)(N),
        [w, S] = (0, m.useState)(s);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: b, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         C(e);
        })();
       }, [N]);
       const z = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          j && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, v.jsx)(I, { children: (0, v.jsx)(l.v$, { children: j }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!w);
             },
             'aria-expanded': w,
             'aria-controls': z,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !w,
            children: [
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(l.$n, {
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
