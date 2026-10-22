'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65844],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => i });
   var t = o(13526),
    a = o(30758),
    l = o(30662),
    s = o(32065),
    r = o(37168),
    c = o(86070);
   const i = (0, a.forwardRef)(({ as: e, className: n, children: o, ...a }, l) => {
     const s = e || 'div',
      r = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(s, { ref: l, className: r, ...a, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: a, headingLevel: i, headingApperance: d, ...h }) => {
     const m = (0, t.A)('utrecht-accordion__section', e),
      u = (0, t.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: m, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(s.I, { children: (0, c.jsx)(l.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [a && (0, c.jsx)(r.D, { level: i, appearance: d, children: a }), o] })] }) }), (0, c.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => r });
   var t = o(30758);
   const a = {},
    l = t.createContext(a);
   function s(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => i });
   var t = o(46447),
    a = o(16194),
    l = o(30758),
    s = o(56528);
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
   var c = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: h, type: m } = (0, l.useContext)(s.x),
     u = (0, l.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(a.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: a, getTokenProps: l }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...a({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => M, GP: () => N, KC: () => T, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => L, bz: () => z, cB: () => S, e5: () => $, hY: () => P, jK: () => K, jP: () => D, ob: () => H, rI: () => A, t4: () => W, vP: () => I, vg: () => F });
   var t = o(92081),
    a = o(90578),
    l = o(96345),
    s = o(64249),
    r = o(4603),
    c = o(91525),
    i = o(23436),
    d = o(1375),
    h = o(4077),
    m = o(58315),
    u = o(73563),
    p = o(35193),
    j = o(82999),
    g = o(13088),
    b = o(43864),
    k = o(24214),
    v = o(79532),
    x = o(60529),
    y = o(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(t.A, { ...f }),
    N = () => (0, y.jsx)(a.A, { ...f }),
    A = () => (0, y.jsx)(l.A, { ...f }),
    w = () => (0, y.jsx)(s.A, { ...f }),
    z = () => (0, y.jsx)(r.A, { ...f }),
    C = () => (0, y.jsx)(c.A, { ...f }),
    S = () => (0, y.jsx)(i.A, { ...f }),
    I = () => (0, y.jsx)(d.A, { ...f }),
    K = () => (0, y.jsx)(h.A, { ...f }),
    D = () => (0, y.jsx)(m.A, { ...f }),
    W = () => (0, y.jsx)(u.A, { ...f }),
    M = () => (0, y.jsx)(p.A, { ...f }),
    P = () => (0, y.jsx)(j.A, { ...f }),
    T = () => (0, y.jsx)(g.A, { ...f }),
    L = () => (0, y.jsx)(b.A, { ...f }),
    $ = () => (0, y.jsx)(k.A, { ...f }),
    H = () => (0, y.jsx)(v.A, { ...f }),
    F = () => (0, y.jsx)(x.A, { ...f });
  },
  32065(e, n, o) {
   o.d(n, { I: () => t.In });
   var t = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => t.$n });
   var t = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => i });
   var t = o(30662),
    a = o(46447),
    l = o(13526),
    s = o(45795),
    r = o(30758),
    c = o(86070);
   const i = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: r, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, c.jsx)(s.oz, { components: { a: a.N_ }, children: o }) : o;
     return (0, c.jsxs)(m, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(t.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(a.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(t.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(a.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => r, RM: () => l });
   var t = o(86070),
    a = o(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => _ });
   var t = o(28369),
    a = o(46447),
    l = o(13526),
    s = o(68148),
    r = o(9016),
    c = o(69303),
    i = o(91635),
    d = o(30734),
    h = o(30758),
    m = o(31186),
    u = o(65904),
    p = o.n(u),
    j = o(14881),
    g = o(46847),
    b = o(86070);
   const k = ({ label: e, labelId: n, className: o, colorScheme: t, forcedColorsAdjust: a = !1, children: s, dangerouslySetInnerHTML: r, ...c }) => (0, b.jsxs)('figure', { className: (0, l.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, b.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, b.jsx)('div', { className: (0, l.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === t, 'ma-html-image__body--color-scheme-light': 'light' === t, 'ma-html-image__body--forced-colors-adjust': a }), inert: 'true', dangerouslySetInnerHTML: r, 'aria-hidden': 'true', children: s })] });
   var v = o(68197);
   const x = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: t, copyCode: a, colorScheme: s, defaultExpandedCode: r, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const m = 'string' == typeof o ? o : t || '',
        u = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(t || '', p().languages[e], e),
        x = (0, b.jsx)(v.b, { Component: 'div', className: (0, l.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: c, dangerouslySetInnerHTML: { __html: m } });
       return (0, b.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [d ? (0, b.jsx)(k, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: x }) : x, (0, b.jsx)(j.n, { children: (0, b.jsxs)(j.K, { label: 'Code', open: r, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === a && (0, b.jsx)(g.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: u = !0, children: p, container: j = 'document', language: g, designTokens: k }) => {
       const v = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || v),
        [A, w] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(o);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [s.A, r.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === j ? (I = x) : 'document' === j ? (I = y) : 'surface' === j && (I = f),
        (0, b.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          v && (0, b.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, b.jsx)(I, { children: (0, b.jsx)(a.v$, { children: v }) }) }) }),
          u &&
           (0, b.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(a.$n, {
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
          u &&
           (0, b.jsxs)('div', {
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(a.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  87976(e, n, o) {
   (o.r(n), o.d(n, { assets: () => h, contentTitle: () => d, default: () => p, frontMatter: () => i, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"richtlijnen/content/office-docs","title":"Kantoorbestanden","description":"...","source":"@site/docs/richtlijnen/content/office-docs.mdx","sourceDirName":"richtlijnen/content","slug":"/richtlijnen/content/kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/office-docs.mdx","tags":[],"version":"current","frontMatter":{"title":"Kantoorbestanden","hide_title":true,"hide_table_of_contents":false,"navigation_order":4,"sidebar_label":"Kantoorbestanden","pagination_label":"Kantoorbestanden","description":"...","slug":"/richtlijnen/content/kantoorbestanden","keywords":["links","documenten"]},"sidebar":"richtlijnen","previous":{"title":"Transcript","permalink":"/richtlijnen/content/video/transcript"},"next":{"title":"Introductie","permalink":"/richtlijnen/formulieren"}}');
   var a = o(86070),
    l = o(18439),
    s = o(87682),
    r = o(56528),
    c = o(56672);
   const i = { title: 'Kantoorbestanden', hide_title: !0, hide_table_of_contents: !1, navigation_order: 4, sidebar_label: 'Kantoorbestanden', pagination_label: 'Kantoorbestanden', description: '...', slug: '/richtlijnen/content/kantoorbestanden', keywords: ['links', 'documenten'] },
    d = 'Kantoorbestanden',
    h = {},
    m = [{ value: 'Ook kantoorbestanden moeten toegankelijk zijn', id: 'ook-kantoorbestanden-moeten-toegankelijk-zijn', level: 2 }, { value: 'Waar kun je als contentmaker op letten?', id: 'waar-kun-je-als-contentmaker-op-letten', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...c.RM];
   function u(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'kantoorbestanden', children: 'Kantoorbestanden' }) }), '\n', (0, a.jsx)(n.p, { children: 'Soms link je naar een bestand buiten de webpagina \u2014 bijvoorbeeld een PDF of Word-bestand. Maar zulke bestanden zijn niet altijd goed toegankelijk. Waarschijnlijk maak je deze bestanden niet zelf, maar publiceer je ze w\xe9l. Daarom is het belangrijk dat je alert bent op de toegankelijkheid ervan.' }), '\n', (0, a.jsx)(n.h2, { id: 'ook-kantoorbestanden-moeten-toegankelijk-zijn', children: 'Ook kantoorbestanden moeten toegankelijk zijn' }), '\n', (0, a.jsx)(n.p, { children: 'Kantoorbestanden die je op de website zet of waar je naar verwijst, zoals pdf\u2019s of Word-bestanden, moeten net zo goed toegankelijk zijn als de rest van je content. Denk aan koppenstructuur, duidelijke leesvolgorde, alternatieve teksten en toegankelijke formulieren. Als contentmaker kun je vaak niet alles zelf controleren, maar je kunt w\xe9l kritisch meekijken en vragen stellen.' }), '\n', (0, a.jsx)(n.h2, { id: 'waar-kun-je-als-contentmaker-op-letten', children: 'Waar kun je als contentmaker op letten?' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: ['Is het echt nodig om een kantoorbestand te gebruiken?', (0, a.jsx)(n.br, {}), '\n', 'Kun je de inhoud ook gewoon als webpagina aanbieden? Dat is bijna altijd gebruiksvriendelijker \xe9n beter toegankelijk.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Is het kantoorbestand goed opgemaakt?', (0, a.jsx)(n.br, {}), '\n', 'Vraag na of de maker het kantoorbestand toegankelijk heeft gemaakt. Gebruik hierbij ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/aan-de-slag/tips/kantoorbestanden', children: 'de documentatie over kantoorbestanden van DigiToegankelijk' }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Heb je een duidelijke linktekst gebruikt?', (0, a.jsx)(n.br, {}), '\n', 'Vermeld wat voor document het is (zoals \u2018pdf\u2019 of \u2018Word\u2019) en geef aan waar het over gaat. Bijvoorbeeld:\nJaarverslag 2024 (pdf) of Aanvraagformulier (Word)'] }), '\n', (0, a.jsxs)(n.li, { children: ['Bied je alternatieven aan?', (0, a.jsx)(n.br, {}), '\n', 'Kan iemand die het kantoorbestand niet kan openen, de informatie op een andere manier krijgen? Biedt de inhoud bijvoorbeeld ook als een webpagina aan, of biedt contactgegevens aan waarmee bezoekers de informatie kunnen opvragen.'] }), '\n'] }), '\n', (0, a.jsx)(r.$, { appearance: 'do', title: 'In de linktekst vermelden om wat voor document het gaat', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('a', { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)' }) }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: 'Ook kantoorbestanden zoals pdf\u2019s vallen onder dezelfde toegankelijkheidsprincipes als webpagina\u2019s. Veel verschillende WCAG-richtlijnen kunnen daarom van toepassing zijn. Hieronder staan een paar succescriteria waarop het het vaakst misgaat in bestanden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Successcriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Successcriterium 1.3.1 Info en relaties' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Successcriterium 2.4.2 Paginatitel' }) }), '\n'] }), '\n', (0, a.jsx)(c.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
