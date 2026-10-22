'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65850],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => i });
   var r = l(13526),
    o = l(30758),
    s = l(30662),
    a = l(32065),
    t = l(37168),
    c = l(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, s) => {
     const a = e || 'div',
      t = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(a, { ref: s, className: t, ...o, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: i, headingApperance: d, ...h }) => {
     const m = (0, r.A)('utrecht-accordion__section', e),
      u = (0, r.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: m, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(a.I, { children: (0, c.jsx)(s.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [o && (0, c.jsx)(t.D, { level: i, appearance: d, children: o }), l] })] }) }), (0, c.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => a, x: () => t });
   var r = l(30758);
   const o = {},
    s = r.createContext(o);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => i });
   var r = l(46447),
    o = l(16194),
    s = l(30758),
    a = l(56528);
   const t = {
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
    const { title: h, type: m } = (0, s.useContext)(a.x),
     u = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => L, GP: () => w, KC: () => T, Nd: () => _, Rt: () => S, Vj: () => A, Wk: () => $, bz: () => C, cB: () => z, e5: () => D, hY: () => M, jK: () => I, jP: () => R, ob: () => V, rI: () => N, t4: () => F, vP: () => P, vg: () => H });
   var r = l(92081),
    o = l(90578),
    s = l(96345),
    a = l(64249),
    t = l(4603),
    c = l(91525),
    i = l(23436),
    d = l(1375),
    h = l(4077),
    m = l(58315),
    u = l(73563),
    p = l(35193),
    g = l(82999),
    j = l(13088),
    v = l(43864),
    x = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(r.A, { ...k }),
    w = () => (0, f.jsx)(o.A, { ...k }),
    N = () => (0, f.jsx)(s.A, { ...k }),
    A = () => (0, f.jsx)(a.A, { ...k }),
    C = () => (0, f.jsx)(t.A, { ...k }),
    S = () => (0, f.jsx)(c.A, { ...k }),
    z = () => (0, f.jsx)(i.A, { ...k }),
    P = () => (0, f.jsx)(d.A, { ...k }),
    I = () => (0, f.jsx)(h.A, { ...k }),
    R = () => (0, f.jsx)(m.A, { ...k }),
    F = () => (0, f.jsx)(u.A, { ...k }),
    L = () => (0, f.jsx)(p.A, { ...k }),
    M = () => (0, f.jsx)(g.A, { ...k }),
    T = () => (0, f.jsx)(j.A, { ...k }),
    $ = () => (0, f.jsx)(v.A, { ...k }),
    D = () => (0, f.jsx)(x.A, { ...k }),
    V = () => (0, f.jsx)(b.A, { ...k }),
    H = () => (0, f.jsx)(y.A, { ...k });
  },
  32065(e, n, l) {
   l.d(n, { I: () => r.In });
   var r = l(29181);
  },
  43668(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => j, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => x }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/clarity/index","title":"Voorkom verwarring bij de gebruiker","description":"Richtlijnen om verwarring bij de gebruiker te voorkomen.","source":"@site/docs/richtlijnen/formulieren/placeholder/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/3-clarity","slug":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Voorkom verwarring bij de gebruiker","title_sm":"Placeholder kan verwarren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kan verwarren","pagination_label":"Placeholder kan verwarren","description":"Richtlijnen om verwarring bij de gebruiker te voorkomen.","slug":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder bij zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie"},"next":{"title":"Placeholder kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast"}}');
   var o = l(86070),
    s = l(18439),
    a = l(56672),
    t = l(87682),
    c = l(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Geen placeholder gebruiken als het label duidelijk genoeg is.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'voornaam1', children: 'Je voornaam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { autoComplete: 'given-name', id: 'voornaam1', name: 'voornaam', type: 'text' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'De labeltekst herhalen in de placeholder.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'voornaam2', children: 'Voornaam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { autoComplete: 'given-name', id: 'voornaam2', name: 'voornaam', placeholder: 'Voornaam', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'voorkom-verwarring-bij-de-gebruiker', children: 'Voorkom verwarring bij de gebruiker' }) }), '\n', (0, o.jsxs)(n.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is een veld al ingevuld? De combinatie van een label met een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'description' }), ' is een betere manier om de gebruiker te vertellen hoe een veld in te vullen. Herhaal nooit de labeltekst in de placeholder, dat geeft geen extra informatie en is dus zinloos.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zie het onderzoek ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group en ', (0, o.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-placeholders-and-what-to-do-instead/', children: 'The problem with placeholders and what to do instead' }), ' van Adam Silver.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Voorkom verwarring bij de gebruiker', title_sm: 'Placeholder kan verwarren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kan verwarren', pagination_label: 'Placeholder kan verwarren', description: 'Richtlijnen om verwarring bij de gebruiker te voorkomen.', slug: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(a.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
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
    a = l(45795),
    t = l(30758),
    c = l(86070);
   const i = (0, t.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: t, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(a.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(r.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(r.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: t }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => t, RM: () => s });
   var r = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var r = l(28369),
    o = l(46447),
    s = l(13526),
    a = l(68148),
    t = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    h = l(30758),
    m = l(31186),
    u = l(65904),
    p = l.n(u),
    g = l(14881),
    j = l(46847),
    v = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: r, forcedColorsAdjust: o = !1, children: a, dangerouslySetInnerHTML: t, ...c }) => (0, v.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === r, 'ma-html-image__body--color-scheme-light': 'light' === r, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: a })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: r, copyCode: o, colorScheme: a, defaultExpandedCode: t, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const m = 'string' == typeof l ? l : r || '',
        u = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(r || '', p().languages[e], e),
        y = (0, v.jsx)(b.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === a, 'ma-canvas-astro__example--color-scheme-light': 'light' === a }), style: c, dangerouslySetInnerHTML: { __html: m } });
       return (0, v.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(x, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, v.jsx)(g.n, { children: (0, v.jsxs)(g.K, { label: 'Code', open: t, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === o && (0, v.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: g = 'document', language: j, designTokens: x }) => {
       const b = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || b),
        [N, A] = (0, h.useState)(w),
        [C, S] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [a.A, t.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const z = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === g ? (P = y) : 'document' === g ? (P = f) : 'surface' === g && (P = k),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          b && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, v.jsx)(P, { children: (0, v.jsx)(o.v$, { children: b }) }) }) }),
          u &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
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
