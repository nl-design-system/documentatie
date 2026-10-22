'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20259],
 {
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => c });
   var l = t(13526),
    s = t(30758),
    o = t(30662),
    r = t(32065),
    i = t(37168),
    a = t(86070);
   const c = (0, s.forwardRef)(({ as: e, className: n, children: t, ...s }, o) => {
     const r = e || 'div',
      i = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: o, className: i, ...s, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: s, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, l.A)('utrecht-accordion__section', e),
      g = (0, l.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: m, ...h, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(r.I, { children: (0, a.jsx)(o.rI, {}) }) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [s && (0, a.jsx)(i.D, { level: c, appearance: d, children: s }), t] })] }) }), (0, a.jsx)('div', { className: g, children: h.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => i });
   var l = t(30758);
   const s = {},
    o = l.createContext(s);
   function r(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, t) {
   t.d(n, { o: () => d });
   var l = t(18439),
    s = t(46447),
    o = t(86070);
   const r = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: l, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + l + s;
     }
     return t.toString();
    },
    i = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, o.jsx)('img', { ...t, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...i[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return i[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: r = {} }) => (0, o.jsx)(l.x, { components: { ...c(n, t), ...a(s), ...r }, children: e });
  },
  24709(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => u, default: () => y, frontMatter: () => p, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/stijl/typography/alignment/index","title":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","source":"@site/docs/richtlijnen/stijl/typography/6-alignment/index.mdx","sourceDirName":"richtlijnen/stijl/typography/6-alignment","slug":"/richtlijnen/stijl/typografie/uitlijning","permalink":"/richtlijnen/stijl/typografie/uitlijning","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/6-alignment/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Uitlijning","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Uitlijning","pagination_label":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","slug":"/richtlijnen/stijl/typografie/uitlijning","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Voorkeursinstellingen voor typografie","permalink":"/richtlijnen/stijl/typografie/voorkeur"},"next":{"title":"Introductie richtlijnen voor kleuren","permalink":"/richtlijnen/stijl/kleuren/"}}');
   var s = t(86070),
    o = t(18439),
    r = t(24703),
    i = t(56672),
    a = t(87682),
    c = t(56528);
   function d(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Gebruik uitlijning aan het begin van de regel.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)('div', { style: { textAlign: 'start' }, children: [(0, s.jsx)('p', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, s.jsx)('p', { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Vermijd het gebruik van uitgevulde tekst (justified).', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)('p', { style: { textAlign: 'justify', hyphens: 'none' }, children: 'Wanneer je uitgelijnde tekst gebruikt in de browser, krijg je moeilijk te lezen teksten met onduidelijke witruimtes. Het is gewoon niet mogelijk om woordafbreking net zo mooi te doen als in print met een vaste breedte mogelijk is. Jammer genoeg is het dan zo dat er een hoop grote witruimtes ontstaan. Zeker met het gebruik van lange woorden zoals het langste woord: kindercarnavalsoptochtvoorbereidingswerkzaamheden.' }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Beperk het gebruik van gecentreerde tekst.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)('div', { style: { textAlign: 'center' }, children: [(0, s.jsx)('p', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, s.jsx)('p', { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d();
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, s.jsx)(n.p, { children: 'Tekst met standaard uitlijning is vrijwel altijd beter leesbaar dan uitgevulde regels (justified) doordat woordafbreking en tekstuitlijning in browsers niet op het niveau zitten van drukwerk.' }), '\n', (0, s.jsx)(n.p, { children: 'Beperk het gebruik van gecentreerde tekst tot een minimum. Hooguit voor een kort tekstje. Bij langere teksten moet iemands oog onlogische sprongen maken om bij het eerst woord van de volgende regel aan te komen.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const p = { title: 'Uitlijning', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Uitlijning', pagination_label: 'Uitlijning', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', slug: '/richtlijnen/stijl/typografie/uitlijning', keywords: ['iconen'] },
    u = 'Uitlijning',
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...i.RM];
   function x(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, s.jsx)(r.o, { omitH1: !0, content: g }), '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e);
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    s = t(16194),
    o = t(30758),
    r = t(56528);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: m } = (0, o.useContext)(r.x),
     g = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': g, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => L, GP: () => A, KC: () => U, Nd: () => _, Rt: () => z, Vj: () => w, Wk: () => M, bz: () => T, cB: () => C, e5: () => $, hY: () => R, jK: () => I, jP: () => D, ob: () => P, rI: () => N, t4: () => H, vP: () => S, vg: () => F });
   var l = t(92081),
    s = t(90578),
    o = t(96345),
    r = t(64249),
    i = t(4603),
    a = t(91525),
    c = t(23436),
    d = t(1375),
    h = t(4077),
    m = t(58315),
    g = t(73563),
    p = t(35193),
    u = t(82999),
    j = t(13088),
    v = t(43864),
    x = t(24214),
    y = t(79532),
    b = t(60529),
    k = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(l.A, { ...f }),
    A = () => (0, k.jsx)(s.A, { ...f }),
    N = () => (0, k.jsx)(o.A, { ...f }),
    w = () => (0, k.jsx)(r.A, { ...f }),
    T = () => (0, k.jsx)(i.A, { ...f }),
    z = () => (0, k.jsx)(a.A, { ...f }),
    C = () => (0, k.jsx)(c.A, { ...f }),
    S = () => (0, k.jsx)(d.A, { ...f }),
    I = () => (0, k.jsx)(h.A, { ...f }),
    D = () => (0, k.jsx)(m.A, { ...f }),
    H = () => (0, k.jsx)(g.A, { ...f }),
    L = () => (0, k.jsx)(p.A, { ...f }),
    R = () => (0, k.jsx)(u.A, { ...f }),
    U = () => (0, k.jsx)(j.A, { ...f }),
    M = () => (0, k.jsx)(v.A, { ...f }),
    $ = () => (0, k.jsx)(x.A, { ...f }),
    P = () => (0, k.jsx)(y.A, { ...f }),
    F = () => (0, k.jsx)(b.A, { ...f });
  },
  32065(e, n, t) {
   t.d(n, { I: () => l.In });
   var l = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => l.$n });
   var l = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var l = t(30662),
    s = t(46447),
    o = t(13526),
    r = t(45795),
    i = t(30758),
    a = t(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: i, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      g = d ? 'figcaption' : 'div',
      p = 'string' == typeof t ? (0, a.jsx)(r.oz, { components: { a: s.N_ }, children: t }) : t;
     return (0, a.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(l.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(l.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => o });
   var l = t(86070),
    s = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => _ });
   var l = t(28369),
    s = t(46447),
    o = t(13526),
    r = t(68148),
    i = t(9016),
    a = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    m = t(31186),
    g = t(65904),
    p = t.n(g),
    u = t(14881),
    j = t(46847),
    v = t(86070);
   const x = ({ label: e, labelId: n, className: t, colorScheme: l, forcedColorsAdjust: s = !1, children: r, dangerouslySetInnerHTML: i, ...a }) => (0, v.jsxs)('figure', { className: (0, o.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...a, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: r })] });
   var y = t(68197);
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: l, copyCode: s, colorScheme: r, defaultExpandedCode: i, designTokens: a, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof t ? t : l || '',
        g = 'string' == typeof t ? p().highlight(t, p().languages[e], e) : p().highlight(l || '', p().languages[e], e),
        b = (0, v.jsx)(y.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: a, dangerouslySetInnerHTML: { __html: m } });
       return (0, v.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: b }) : b, (0, v.jsx)(u.n, { children: (0, v.jsxs)(u.K, { label: 'Code', open: i, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: g } }) }), 'allow' === s && (0, v.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: g = !0, children: p, container: u = 'document', language: j, designTokens: x }) => {
       const y = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : m.qV(_ || y),
        [N, w] = (0, h.useState)(A),
        [T, z] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: j, plugins: [r.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [A]);
       const C = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === u ? (S = b) : 'document' === u ? (S = k) : 'surface' === u && (S = f),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          y && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, v.jsx)(S, { children: (0, v.jsx)(s.v$, { children: y }) }) }) }),
          g &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!T);
             },
             'aria-expanded': T,
             'aria-controls': C,
             children: T ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          g &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !T,
            children: [
             (0, v.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
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
