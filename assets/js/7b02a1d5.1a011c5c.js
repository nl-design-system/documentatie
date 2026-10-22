'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33145],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => c });
   var s = o(13526),
    i = o(30758),
    l = o(30662),
    t = o(32065),
    r = o(37168),
    a = o(86070);
   const c = (0, i.forwardRef)(({ as: e, className: n, children: o, ...i }, l) => {
     const t = e || 'div',
      r = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(t, { ref: l, className: r, ...i, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: i, headingLevel: c, headingApperance: d, ...h }) => {
     const v = (0, s.A)('utrecht-accordion__section', e),
      j = (0, s.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: v, ...h, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(t.I, { children: (0, a.jsx)(l.rI, {}) }) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [i && (0, a.jsx)(r.D, { level: c, appearance: d, children: i }), o] })] }) }), (0, a.jsx)('div', { className: j, children: h.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => t, x: () => r });
   var s = o(30758);
   const i = {},
    l = s.createContext(i);
   function t(e) {
    const n = s.useContext(l);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : t(e.components)), s.createElement(l.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => c });
   var s = o(46447),
    i = o(16194),
    l = o(30758),
    t = o(56528);
   const r = {
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
   var a = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: h, type: v } = (0, l.useContext)(t.x),
     j = (0, l.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(i.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: i, getTokenProps: l }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: j, children: ['codevoorbeeld ', v ? `\u201c${v}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': j, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => T, GP: () => N, KC: () => L, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => P, bz: () => z, cB: () => S, e5: () => $, hY: () => F, jK: () => I, jP: () => M, ob: () => D, rI: () => w, t4: () => H, vP: () => V, vg: () => G });
   var s = o(92081),
    i = o(90578),
    l = o(96345),
    t = o(64249),
    r = o(4603),
    a = o(91525),
    c = o(23436),
    d = o(1375),
    h = o(4077),
    v = o(58315),
    j = o(73563),
    p = o(35193),
    g = o(82999),
    m = o(13088),
    u = o(43864),
    b = o(24214),
    x = o(79532),
    y = o(60529),
    k = o(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(s.A, { ...f }),
    N = () => (0, k.jsx)(i.A, { ...f }),
    w = () => (0, k.jsx)(l.A, { ...f }),
    A = () => (0, k.jsx)(t.A, { ...f }),
    z = () => (0, k.jsx)(r.A, { ...f }),
    C = () => (0, k.jsx)(a.A, { ...f }),
    S = () => (0, k.jsx)(c.A, { ...f }),
    V = () => (0, k.jsx)(d.A, { ...f }),
    I = () => (0, k.jsx)(h.A, { ...f }),
    M = () => (0, k.jsx)(v.A, { ...f }),
    H = () => (0, k.jsx)(j.A, { ...f }),
    T = () => (0, k.jsx)(p.A, { ...f }),
    F = () => (0, k.jsx)(g.A, { ...f }),
    L = () => (0, k.jsx)(m.A, { ...f }),
    P = () => (0, k.jsx)(u.A, { ...f }),
    $ = () => (0, k.jsx)(b.A, { ...f }),
    D = () => (0, k.jsx)(x.A, { ...f }),
    G = () => (0, k.jsx)(y.A, { ...f });
  },
  32065(e, n, o) {
   o.d(n, { I: () => s.In });
   var s = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => s.$n });
   var s = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => c });
   var s = o(30662),
    i = o(46447),
    l = o(13526),
    t = o(45795),
    r = o(30758),
    a = o(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: r, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      v = d ? 'figure' : 'div',
      j = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, a.jsx)(t.oz, { components: { a: i.N_ }, children: o }) : o;
     return (0, a.jsxs)(v, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(j, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(i.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(i.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => r, RM: () => l });
   var s = o(86070),
    i = o(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  71147(e, n, o) {
   (o.r(n), o.d(n, { assets: () => h, contentTitle: () => d, default: () => p, frontMatter: () => c, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"richtlijnen/content/video/beschrijving","title":"Beschrijving voor video","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","source":"@site/docs/richtlijnen/content/video/beschrijving.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/beschrijving","permalink":"/richtlijnen/content/video/beschrijving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/beschrijving.mdx","tags":[],"version":"current","frontMatter":{"title":"Beschrijving voor video","title_sm":"Video beschrijving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Video beschrijving","pagination_label":"Video beschrijving","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","slug":"/richtlijnen/content/video/beschrijving","keywords":["video","YouTube","Vimeo","iFrame","alternatieve tekst video","video beschrijving"]},"sidebar":"richtlijnen","previous":{"title":"Audiodescriptie","permalink":"/richtlijnen/content/video/audiodescriptie"},"next":{"title":"Flitsen","permalink":"/richtlijnen/content/video/flitsen"}}');
   var i = o(86070),
    l = o(18439),
    t = o(87682),
    r = o(56528),
    a = o(56672);
   const c = { title: 'Beschrijving voor video', title_sm: 'Video beschrijving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Video beschrijving', pagination_label: 'Video beschrijving', description: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.', slug: '/richtlijnen/content/video/beschrijving', keywords: ['video', 'YouTube', 'Vimeo', 'iFrame', 'alternatieve tekst video', 'video beschrijving'] },
    d = 'Video beschrijving',
    h = {},
    v = [{ value: 'Een beschrijving op de pagina', id: 'een-beschrijving-op-de-pagina', level: 2 }, { value: 'Een beschrijving in de videospeler', id: 'een-beschrijving-in-de-videospeler', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function j(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'video-beschrijving', children: 'Video beschrijving' }) }), '\n', (0, i.jsx)(n.p, { children: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.' }), '\n', (0, i.jsx)(n.h2, { id: 'een-beschrijving-op-de-pagina', children: 'Een beschrijving op de pagina' }), '\n', (0, i.jsx)(n.p, { children: 'Beschrijf b\xf3ven de videospeler op de pagina waar de video over gaat. Dit kan bijvoorbeeld in een beschrijvende paragraaf, of met een kopje. Zo begrijpen alle bezoekers wat zij kunnen verwachten van de video en bepalen of ze de video willen bekijken.' }), '\n', (0, i.jsx)(r.$, { appearance: 'do', title: "Video's op de pagina een beschrijving geven", children: (0, i.jsx)(t.H, { language: 'html', className: 'nlds-not-accessible', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('h1', { children: 'Heartbeat terugkijken' }), (0, i.jsx)('p', { children: 'Heartbeat terugkijken? Op deze pagina vind je de opnames.' }), (0, i.jsx)('h2', { children: '10 juni 2025' }), (0, i.jsx)('p', { children: 'Renate vertelt over de nieuwe richtlijnen voor tekstopmaak en waar je allemaal rekening mee moet houden.' })] }) }) }), '\n', (0, i.jsx)(n.h2, { id: 'een-beschrijving-in-de-videospeler', children: 'Een beschrijving in de videospeler' }), '\n', (0, i.jsxs)(n.p, { children: ['Voor bezoekers die gebruik maken van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' is het belangrijk dat de videospeler ook een beschrijving heeft. Een goede beschrijving van de videospeler is de titel van je video. Zo weet je als bezoeker wat je kunt verwachten.'] }), '\n', (0, i.jsxs)(n.p, { children: ["Video's die je vanaf YouTube en Vimeo op je pagina plaatst, worden meestal in een ", (0, i.jsx)(n.code, { children: 'iFrame' }), ' op de pagina geplaatst. Het is niet altijd nodig om zelf de beschrijving van het ', (0, i.jsx)(n.code, { children: 'iFrame' }), " of een videospeler aan te passen. Vraag bij de beheerder van je contentmanagementsysteem (CMS) na of video's automatisch een beschrijving krijgen. Wordt er niet automatisch een beschrijving meegegeven? Vraag dan na wat de beste manier is om dit in jullie CMS te doen."] }), '\n', (0, i.jsx)(n.p, { children: 'Gebruikt jouw organisatie een eigen videospeler? Het hangt af van welke videospeler jouw organisatie gebruikt of je zelf een beschrijving moet toevoegen en hoe je dat doet. Vraag dit na bij de beheerder van je CMS.' }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Controleer voor iedere video:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Heeft de video een beschrijving op de pagina, bijvoorbeeld in een paragraaf of een kopje?' }), '\n', (0, i.jsx)(n.li, { children: 'Krijgt de videospeler automatisch een beschrijving mee? Vraag dit na bij de beheerder van je CMS. Zo nee, vraag dan na hoe je het beste zelf een beschrijving mee kunt geven. Daar controleer je vervolgens ook of de video een beschrijving heeft, bijvoorbeeld de titel van de video.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, i.jsx)(a.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => _ });
   var s = o(28369),
    i = o(46447),
    l = o(13526),
    t = o(68148),
    r = o(9016),
    a = o(69303),
    c = o(91635),
    d = o(30734),
    h = o(30758),
    v = o(31186),
    j = o(65904),
    p = o.n(j),
    g = o(14881),
    m = o(46847),
    u = o(86070);
   const b = ({ label: e, labelId: n, className: o, colorScheme: s, forcedColorsAdjust: i = !1, children: t, dangerouslySetInnerHTML: r, ...a }) => (0, u.jsxs)('figure', { className: (0, l.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...a, children: [e && (0, u.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, u.jsx)('div', { className: (0, l.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': i }), inert: 'true', dangerouslySetInnerHTML: r, 'aria-hidden': 'true', children: t })] });
   var x = o(68197);
   const y = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(i.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(i.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: s, copyCode: i, colorScheme: t, defaultExpandedCode: r, designTokens: a, forcedColorsAdjust: c = !0, label: d }) => {
       const v = 'string' == typeof o ? o : s || '',
        j = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        y = (0, u.jsx)(x.b, { Component: 'div', className: (0, l.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: a, dangerouslySetInnerHTML: { __html: v } });
       return (0, u.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [d ? (0, u.jsx)(b, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, u.jsx)(g.n, { children: (0, u.jsxs)(g.K, { label: 'Code', open: r, children: [(0, u.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, u.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: j } }) }), 'allow' === i && (0, u.jsx)(m.$, { 'data-copy-code': v, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: j = !0, children: p, container: g = 'document', language: m, designTokens: b }) => {
       const x = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : v.qV(_ || x),
        [w, A] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(o);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: m, plugins: [t.A, r.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let V = h.Fragment;
       return (
        'paragraph' === g ? (V = y) : 'document' === g ? (V = k) : 'surface' === g && (V = f),
        (0, u.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          x && (0, u.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, u.jsx)(V, { children: (0, u.jsx)(i.v$, { children: x }) }) }) }),
          j &&
           (0, u.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, u.jsx)(i.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          j &&
           (0, u.jsxs)('div', {
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, u.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: m, textContent: w, trim: !0 }),
             n &&
              (0, u.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, u.jsx)(i.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
