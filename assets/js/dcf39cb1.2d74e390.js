'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7966],
 {
  14881(e, l, n) {
   n.d(l, { K: () => d, n: () => i });
   var s = n(13526),
    o = n(30758),
    r = n(30662),
    c = n(32065),
    t = n(37168),
    a = n(86070);
   const i = (0, o.forwardRef)(({ as: e, className: l, children: n, ...o }, r) => {
     const c = e || 'div',
      t = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, a.jsx)(c, { ref: r, className: t, ...o, children: n });
    }),
    d = ({ className: e, classNamePanel: l, label: n, heading: o, headingLevel: i, headingApperance: d, ...h }) => {
     const u = (0, s.A)('utrecht-accordion__section', e),
      m = (0, s.A)('utrecht-accordion__panel', l);
     return (0, a.jsxs)('details', { className: u, ...h, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(c.I, { children: (0, a.jsx)(r.rI, {}) }) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(t.D, { level: i, appearance: d, children: o }), n] })] }) }), (0, a.jsx)('div', { className: m, children: h.children })] });
    };
  },
  18439(e, l, n) {
   n.d(l, { R: () => c, x: () => t });
   var s = n(30758);
   const o = {},
    r = s.createContext(o);
   function c(e) {
    const l = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function t(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : c(e.components)), s.createElement(r.Provider, { value: l }, e.children));
   }
  },
  28369(e, l, n) {
   n.d(l, { M: () => i });
   var s = n(46447),
    o = n(16194),
    r = n(30758),
    c = n(56528);
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
   var a = n(86070);
   function i({ lineNumber: e, syntax: l, textContent: n, trim: i }) {
    let d = n;
    const { title: h, type: u } = (0, r.useContext)(c.x),
     m = (0, r.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(o.f4, { theme: t, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: l, children: n.map((l, n) => (0, a.jsxs)('span', { ...o({ line: l }), children: [e && (0, a.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, a.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => M, GP: () => N, KC: () => T, Nd: () => _, Rt: () => C, Vj: () => z, Wk: () => $, bz: () => w, cB: () => S, e5: () => D, hY: () => F, jK: () => I, jP: () => R, ob: () => H, rI: () => A, t4: () => L, vP: () => P, vg: () => K });
   var s = n(92081),
    o = n(90578),
    r = n(96345),
    c = n(64249),
    t = n(4603),
    a = n(91525),
    i = n(23436),
    d = n(1375),
    h = n(4077),
    u = n(58315),
    m = n(73563),
    p = n(35193),
    j = n(82999),
    x = n(13088),
    b = n(43864),
    g = n(24214),
    y = n(79532),
    v = n(60529),
    f = n(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(s.A, { ...k }),
    N = () => (0, f.jsx)(o.A, { ...k }),
    A = () => (0, f.jsx)(r.A, { ...k }),
    z = () => (0, f.jsx)(c.A, { ...k }),
    w = () => (0, f.jsx)(t.A, { ...k }),
    C = () => (0, f.jsx)(a.A, { ...k }),
    S = () => (0, f.jsx)(i.A, { ...k }),
    P = () => (0, f.jsx)(d.A, { ...k }),
    I = () => (0, f.jsx)(h.A, { ...k }),
    R = () => (0, f.jsx)(u.A, { ...k }),
    L = () => (0, f.jsx)(m.A, { ...k }),
    M = () => (0, f.jsx)(p.A, { ...k }),
    F = () => (0, f.jsx)(j.A, { ...k }),
    T = () => (0, f.jsx)(x.A, { ...k }),
    $ = () => (0, f.jsx)(b.A, { ...k }),
    D = () => (0, f.jsx)(g.A, { ...k }),
    H = () => (0, f.jsx)(y.A, { ...k }),
    K = () => (0, f.jsx)(v.A, { ...k });
  },
  32065(e, l, n) {
   n.d(l, { I: () => s.In });
   var s = n(29181);
  },
  46847(e, l, n) {
   n.d(l, { $: () => s.$n });
   var s = n(50805);
  },
  56528(e, l, n) {
   n.d(l, { $: () => d, x: () => i });
   var s = n(30662),
    o = n(46447),
    r = n(13526),
    c = n(45795),
    t = n(30758),
    a = n(86070);
   const i = (0, t.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: t, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, a.jsx)(c.oz, { components: { a: o.N_ }, children: n }) : n;
     return (0, a.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(o.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: e, type: h[l] }, children: t }) })] });
    };
  },
  56672(e, l, n) {
   n.d(l, { Ay: () => t, RM: () => r });
   var s = n(86070),
    o = n(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function c(e) {
    const l = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(l.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => _ });
   var s = n(28369),
    o = n(46447),
    r = n(13526),
    c = n(68148),
    t = n(9016),
    a = n(69303),
    i = n(91635),
    d = n(30734),
    h = n(30758),
    u = n(31186),
    m = n(65904),
    p = n.n(m),
    j = n(14881),
    x = n(46847),
    b = n(86070);
   const g = ({ label: e, labelId: l, className: n, colorScheme: s, forcedColorsAdjust: o = !1, children: c, dangerouslySetInnerHTML: t, ...a }) => (0, b.jsxs)('figure', { className: (0, r.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...a, children: [e && (0, b.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, b.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: c })] });
   var y = n(68197);
   const v = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: s, copyCode: o, colorScheme: c, defaultExpandedCode: t, designTokens: a, forcedColorsAdjust: i = !0, label: d }) => {
       const u = 'string' == typeof n ? n : s || '',
        m = 'string' == typeof n ? p().highlight(n, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        v = (0, b.jsx)(y.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === c, 'ma-canvas-astro__example--color-scheme-light': 'light' === c }), style: a, dangerouslySetInnerHTML: { __html: u } });
       return (0, b.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', l), children: [d ? (0, b.jsx)(g, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: v }) : v, (0, b.jsx)(j.n, { children: (0, b.jsxs)(j.K, { label: 'Code', open: t, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === o && (0, b.jsx)(x.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: m = !0, children: p, container: j = 'document', language: x, designTokens: g }) => {
       const y = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || y),
        [A, z] = (0, h.useState)(N),
        [w, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [c.A, t.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === j ? (P = v) : 'document' === j ? (P = f) : 'surface' === j && (P = k),
        (0, b.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          y && (0, b.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: g, children: (0, b.jsx)(P, { children: (0, b.jsx)(o.v$, { children: y }) }) }) }),
          m &&
           (0, b.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!w);
             },
             'aria-expanded': w,
             'aria-controls': S,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, b.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !w,
            children: [
             (0, b.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             l &&
              (0, b.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  94409(e, l, n) {
   (n.r(l), n.d(l, { assets: () => b, contentTitle: () => x, default: () => v, frontMatter: () => j, metadata: () => s, toc: () => g }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/search/index","title":"Placeholders en de zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","source":"@site/docs/richtlijnen/formulieren/placeholder/2-search/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/2-search","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/2-search/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Placeholders en de zoekfunctie","title_sm":"Placeholder bij zoekfunctie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder bij zoekfunctie","pagination_label":"Placeholder bij zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder is geen label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label"},"next":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"}}');
   var o = n(86070),
    r = n(18439),
    c = n(56672),
    t = n(87682),
    a = n(56528);
   function i(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'De placeholder samen met tekst van de submitbutton gebruiken zichtbaar label in een kort zoekformulier.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { className: 'sr-only', htmlFor: 'header-search', children: 'Zoek' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'header-search', placeholder: 'Zoek', type: 'search' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Zoek' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i();
   }
   function h(e) {
    const l = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.header, { children: (0, o.jsx)(l.h1, { id: 'placeholders-en-de-zoekfunctie', children: 'Placeholders en de zoekfunctie' }) }), '\n', (0, o.jsx)(l.p, { children: 'Een gebruikelijke opzet voor een zoekoptie in de header is:' }), '\n', (0, o.jsxs)(l.ul, { children: ['\n', (0, o.jsx)(l.li, { children: 'een onzichtbaar label;' }), '\n', (0, o.jsx)(l.li, { children: 'de placeholder als zichtbaar label;' }), '\n', (0, o.jsx)(l.li, { children: 'rechts naast het formulierveld een submitbutton met de tekst "Zoek" en/of een icoontje van een loopje.' }), '\n'] }), '\n', (0, o.jsx)(l.p, { children: 'Hierbij wordt het zoekloopje als zichtbaar label gebruikt over wat in te vullen als de placeholder verdwijnt. Omdat dit een veel gebruikte constructie is, is dit prima. Het is door buttontekst of icoon voldoende duidelijk wat er wordt verwacht.' })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(l.ul, { children: ['\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Placeholders en de zoekfunctie', title_sm: 'Placeholder bij zoekfunctie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder bij zoekfunctie', pagination_label: 'Placeholder bij zoekfunctie', description: 'Richtlijnen over placeholder gebruiken in de zoekfunctie.', slug: '/richtlijnen/formulieren/placeholders/zoekfunctie', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    b = {},
    g = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...c.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(c.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
