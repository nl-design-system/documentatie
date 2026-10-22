'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45129],
 {
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => d });
   var i = t(13526),
    r = t(30758),
    a = t(30662),
    s = t(32065),
    l = t(37168),
    o = t(86070);
   const d = (0, r.forwardRef)(({ as: e, className: n, children: t, ...r }, a) => {
     const s = e || 'div',
      l = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, o.jsx)(s, { ref: a, className: l, ...r, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: r, headingLevel: d, headingApperance: c, ...h }) => {
     const p = (0, i.A)('utrecht-accordion__section', e),
      j = (0, i.A)('utrecht-accordion__panel', n);
     return (0, o.jsxs)('details', { className: p, ...h, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.I, { children: (0, o.jsx)(a.rI, {}) }) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [r && (0, o.jsx)(l.D, { level: d, appearance: c, children: r }), t] })] }) }), (0, o.jsx)('div', { className: j, children: h.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => l });
   var i = t(30758);
   const r = {},
    a = i.createContext(r);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => d });
   var i = t(46447),
    r = t(16194),
    a = t(30758),
    s = t(56528);
   const l = {
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
   var o = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: h, type: p } = (0, a.useContext)(s.x),
     j = (0, a.useId)();
    return (d && (c = c.trim()), (0, o.jsx)(r.f4, { theme: l, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: r, getTokenProps: a }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: j, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, o.jsx)(i.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': j, style: n, children: t.map((n, t) => (0, o.jsxs)('span', { ...r({ line: n }), children: [e && (0, o.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => D, GP: () => z, KC: () => V, Nd: () => _, Rt: () => C, Vj: () => N, Wk: () => B, bz: () => A, cB: () => S, e5: () => M, hY: () => H, jK: () => I, jP: () => T, ob: () => W, rI: () => w, t4: () => L, vP: () => P, vg: () => G });
   var i = t(92081),
    r = t(90578),
    a = t(96345),
    s = t(64249),
    l = t(4603),
    o = t(91525),
    d = t(23436),
    c = t(1375),
    h = t(4077),
    p = t(58315),
    j = t(73563),
    u = t(35193),
    m = t(82999),
    v = t(13088),
    g = t(43864),
    b = t(24214),
    k = t(79532),
    x = t(60529),
    y = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(i.A, { ...f }),
    z = () => (0, y.jsx)(r.A, { ...f }),
    w = () => (0, y.jsx)(a.A, { ...f }),
    N = () => (0, y.jsx)(s.A, { ...f }),
    A = () => (0, y.jsx)(l.A, { ...f }),
    C = () => (0, y.jsx)(o.A, { ...f }),
    S = () => (0, y.jsx)(d.A, { ...f }),
    P = () => (0, y.jsx)(c.A, { ...f }),
    I = () => (0, y.jsx)(h.A, { ...f }),
    T = () => (0, y.jsx)(p.A, { ...f }),
    L = () => (0, y.jsx)(j.A, { ...f }),
    D = () => (0, y.jsx)(u.A, { ...f }),
    H = () => (0, y.jsx)(m.A, { ...f }),
    V = () => (0, y.jsx)(v.A, { ...f }),
    B = () => (0, y.jsx)(g.A, { ...f }),
    M = () => (0, y.jsx)(b.A, { ...f }),
    W = () => (0, y.jsx)(k.A, { ...f }),
    G = () => (0, y.jsx)(x.A, { ...f });
  },
  32065(e, n, t) {
   t.d(n, { I: () => i.In });
   var i = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => i.$n });
   var i = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => c, x: () => d });
   var i = t(30662),
    r = t(46447),
    a = t(13526),
    s = t(45795),
    l = t(30758),
    o = t(86070);
   const d = (0, l.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: l, figure: c = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = c ? 'figure' : 'div',
      j = c ? 'figcaption' : 'div',
      u = 'string' == typeof t ? (0, o.jsx)(s.oz, { components: { a: r.N_ }, children: t }) : t;
     return (0, o.jsxs)(p, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, o.jsxs)(j, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(r.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(i.jP, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, o.jsx)(r.fz, { children: e })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(r.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(i.jK, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, o.jsx)(r.fz, { children: e })] }), u] }), (0, o.jsx)('div', { className: 'nlds-guideline__example', children: (0, o.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: l }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => _ });
   var i = t(28369),
    r = t(46447),
    a = t(13526),
    s = t(68148),
    l = t(9016),
    o = t(69303),
    d = t(91635),
    c = t(30734),
    h = t(30758),
    p = t(31186),
    j = t(65904),
    u = t.n(j),
    m = t(14881),
    v = t(46847),
    g = t(86070);
   const b = ({ label: e, labelId: n, className: t, colorScheme: i, forcedColorsAdjust: r = !1, children: s, dangerouslySetInnerHTML: l, ...o }) => (0, g.jsxs)('figure', { className: (0, a.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...o, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, a.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === i, 'ma-html-image__body--color-scheme-light': 'light' === i, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: l, 'aria-hidden': 'true', children: s })] });
   var k = t(68197);
   const x = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: i, copyCode: r, colorScheme: s, defaultExpandedCode: l, designTokens: o, forcedColorsAdjust: d = !0, label: c }) => {
       const p = 'string' == typeof t ? t : i || '',
        j = 'string' == typeof t ? u().highlight(t, u().languages[e], e) : u().highlight(i || '', u().languages[e], e),
        x = (0, g.jsx)(k.b, { Component: 'div', className: (0, a.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: o, dangerouslySetInnerHTML: { __html: p } });
       return (0, g.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', n), children: [c ? (0, g.jsx)(b, { forcedColorsAdjust: d, label: c, labelId: c ? (0, h.useId)() : void 0, children: x }) : x, (0, g.jsx)(m.n, { children: (0, g.jsxs)(m.K, { label: 'Code', open: l, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: j } }) }), 'allow' === r && (0, g.jsx)(v.$, { 'data-copy-code': p, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: j = !0, children: u, container: m = 'document', language: v, designTokens: b }) => {
       const k = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        z = 'string' == typeof e ? e : p.qV(_ || k),
        [w, N] = (0, h.useState)(z),
        [A, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(z, { parser: v, plugins: [s.A, l.Ay, o.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [z]);
       const S = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === m ? (P = x) : 'document' === m ? (P = y) : 'surface' === m && (P = f),
        (0, g.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          k && (0, g.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, g.jsx)(P, { children: (0, g.jsx)(r.v$, { children: k }) }) }) }),
          j &&
           (0, g.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(r.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          j &&
           (0, g.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, g.jsx)(i.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  97107(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => c, default: () => u, frontMatter: () => d, metadata: () => i, toc: () => p }));
   const i = JSON.parse('{"id":"richtlijnen/content/video/transcript","title":"Transcript","description":"Richtlijnen voor transcripten bij video\'s binnen NL Design System","source":"@site/docs/richtlijnen/content/video/transcript.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/transcript","permalink":"/richtlijnen/content/video/transcript","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/transcript.mdx","tags":[],"version":"current","frontMatter":{"title":"Transcript","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Transcript","pagination_label":"Transcript","description":"Richtlijnen voor transcripten bij video\'s binnen NL Design System","slug":"/richtlijnen/content/video/transcript","keywords":["video","youtube","vimeo","transcript","transcriptie","transcriberen","ondertiteling"]},"sidebar":"richtlijnen","previous":{"title":"Ondertiteling","permalink":"/richtlijnen/content/video/ondertiteling"},"next":{"title":"Kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden"}}');
   var r = t(86070),
    a = t(18439),
    s = t(87682),
    l = t(56528),
    o = t(56672);
   const d = { title: 'Transcript', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Transcript', pagination_label: 'Transcript', description: "Richtlijnen voor transcripten bij video's binnen NL Design System", slug: '/richtlijnen/content/video/transcript', keywords: ['video', 'youtube', 'vimeo', 'transcript', 'transcriptie', 'transcriberen', 'ondertiteling'] },
    c = 'Transcript bij video',
    h = {},
    p = [{ value: 'Voordelen', id: 'voordelen', level: 2 }, { value: 'Wat plaats je in een transcript van een video?', id: 'wat-plaats-je-in-een-transcript-van-een-video', level: 2 }, { value: 'Ondertiteling en audiodescriptie combineren', id: 'ondertiteling-en-audiodescriptie-combineren', level: 3 }, { value: 'De opmaak van een transcript', id: 'de-opmaak-van-een-transcript', level: 2 }, { value: 'Waar plaats je een transcript?', id: 'waar-plaats-je-een-transcript', level: 2 }, { value: 'Een transcript bij een video op je eigen website', id: 'een-transcript-bij-een-video-op-je-eigen-website', level: 3 }, { value: 'Een transcript bij een video op een andere website', id: 'een-transcript-bij-een-video-op-een-andere-website', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function j(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'transcript-bij-video', children: 'Transcript bij video' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een transcript bij een video is een uitgeschreven tekst van de informatie in een video. Het bevat:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Gesproken dialoog.' }), '\n', (0, r.jsx)(n.li, { children: 'Andere belangrijke informatie in audio, zoals omgevingsgeluiden en informatie over wie er aan het woord is.' }), '\n', (0, r.jsx)(n.li, { children: 'Belangrijke visuele informatie in video, zoals de acties van mensen en teksten die in beeld verschijnen.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van een transcript bij een video is voor een grote doelgroep een fijne manier om video toegankelijker te maken. Het helpt mensen die slechthorend of doof zijn, maar ook mensen die de video liever lezen dan kijken. Doofblinde mensen kunnen de tekst in het transcript met een brailleregel uitlezen, zo hebben zij toch toegang tot dezelfde informatie.' }), '\n', (0, r.jsx)(n.p, { children: 'Omdat een transcript uit tekst bestaat, kunnen zoekmachines de informatie ook lezen. Daarnaast zijn transcripten ook handig voor zoeken binnen de website, vertalen en archiveren.' }), '\n', (0, r.jsx)(n.h2, { id: 'wat-plaats-je-in-een-transcript-van-een-video', children: 'Wat plaats je in een transcript van een video?' }), '\n', (0, r.jsx)(n.p, { children: 'Benoem in een transcript bij een video met beeld en geluid:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De gesproken tekst.' }), '\n', (0, r.jsx)(n.li, { children: 'Belangrijke geluiden zoals lachen, een dichtslaande deur of rinkelend glas.' }), '\n', (0, r.jsx)(n.li, { children: 'Informatie over achtergrondmuziek, als dat in de video een verhalende rol heeft.' }), '\n', (0, r.jsx)(n.li, { children: 'Wie er aan het woord is.' }), '\n', (0, r.jsx)(n.li, { children: 'Het volume of de intonatie van de gesproken teksten.' }), '\n', (0, r.jsx)(n.li, { children: 'Bijzondere spraakkenmerken, zoals een accent of dat iemand stottert. Benoem dit daarna alleen nog een keer als het verandert.' }), '\n', (0, r.jsx)(n.li, { children: 'Teksten die in beeld komen, zoals de naam en functie van een spreker. Maar ook titelschermen, hoofdstuknamen en links.' }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: 'Beschrijvingen van belangrijke afbeeldingen' }), ' die in beeld komen, zoals het logo van de organisatie.'] }), '\n', (0, r.jsx)(n.li, { children: 'Beschrijvingen van belangrijke gebeurtenissen die in beeld komen, bijvoorbeeld informatie over wat mensen aan het doen zijn.' }), '\n', (0, r.jsx)(n.li, { children: 'Gezichtsuitdrukkingen en lichaamstaal, als dat relevant is.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Een transcript moet dezelfde informatie bevatten als de video. Pas daarom de zinnen van de gesproken tekst niet aan, ook niet als de grammatica niet klopt of de spreker diens zin niet afmaakt.' }), '\n', (0, r.jsx)(n.h3, { id: 'ondertiteling-en-audiodescriptie-combineren', children: 'Ondertiteling en audiodescriptie combineren' }), '\n', (0, r.jsxs)(n.p, { children: ['Als je al ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/ondertiteling/', children: 'ondertiteling' }), ' en een script voor ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/audiodescriptie/', children: 'audiodescriptie' }), ' hebt geschreven, kun je deze teksten combineren en gebruiken als basis van je transcript. Structureer de informatie per sc\xe8ne en controleer of je geen belangrijke informatie hebt gemist.'] }), '\n', (0, r.jsx)(n.h2, { id: 'de-opmaak-van-een-transcript', children: 'De opmaak van een transcript' }), '\n', (0, r.jsx)(n.p, { children: 'Het is belangrijk om structuur aan te brengen in tekstbestanden om ze toegankelijker en prettiger leesbaar te maken. Voor een transcript is dat niet anders.' }), '\n', (0, r.jsxs)(n.p, { children: ['Maak daarom ook in een transcript gebruik van ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/', children: 'kopjes, paragrafen, leestekens en interpunctie' }), '. Voeg bij een lange video eventueel tijdmarkeringen toe.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Maak onderscheid tussen beschrijvingen en gesproken tekst. Plaats beschrijvingen tussen ronde haakjes te plaatsen of benoem waar de beschrijving over gaat. Bijvoorbeeld: (de kat krabt de krullen van de trap) of In beeld: De kat krabt de krullen van de trap.' }), '\n', (0, r.jsxs)(n.li, { children: ['Als de spreker een woord benadrukt, gebruik dan ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'tekstopmaak om tekst te benadrukken' }), '. Gebruik schuingedrukte tekst voor nadruk in uitspraak en dikgedrukte tekst om te benadrukken dat een woord heel belangrijk is.'] }), '\n', (0, r.jsx)(n.li, { children: 'Plaats de naam van de spreker met daarna een dubbele punt v\xf3\xf3r de uitgeschreven gesproken tekst. Bijvoorbeeld: Jeffrey: "Goedemiddag allemaal, welkom bij de Heartbeat van 15 april."' }), '\n'] }), '\n', (0, r.jsx)(l.$, { appearance: 'do', title: 'Breng structuur aan in je transcript en maak onderscheid tussen gesproken dialoog en beschrijvingen', children: (0, r.jsx)(s.H, { language: 'html', className: 'nlds-not-accessible', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('h1', { children: 'Je verhuizing doorgeven' }), (0, r.jsx)('p', { children: '(Logo van de gemeente Luilekkerland verschijnt in beeld, met op de achtergrond een groene heuvel, zonnetje en molen die langzaam draait.)' }), (0, r.jsx)('p', { children: '(Vrolijk fluitmuziekje, in middeleeuwse stijl.)' }), (0, r.jsxs)('p', { children: ['Voice over Pieter Bruegel (opgewekt): "Welkom, goede nieuwe burgers van Luilekkerland! Verhuist gij binnenkort? Dan dient gij dit te ', (0, r.jsx)('strong', { children: 'melden' }), ' bij de gemeente!"'] }), (0, r.jsx)('h2', { children: 'Je verhuizing doorgeven via het internet' }), (0, r.jsx)('p', { children: '(Pieter zit in een schilderachtige werkkamer op een bureaustoel achter een statig bureau. Hij klapt een laptop open. Op het scherm: luilekkerland.nl/verhuizen.)' }), (0, r.jsxs)('p', { children: ['Pieter Bruegel: "De ', (0, r.jsx)('em', { children: 'makkelijkste' }), ' manier? Gewoon online! Ga naar onze website, klik op \u2018Verhuizing doorgeven\u2019 en vul uw gegevens in."'] }), (0, r.jsx)('p', { children: "(Close-up van het invulformulier. Pieter vult zijn postcode en verhuisdatum in. Hij klikt op 'Verzenden' en er klinkt een bevestigingsgeluidje.)" }), (0, r.jsx)('p', { children: 'Pieter Bruegel (lachend): "En hop, uw verhuizing is bekend. U hoeft niet eens uw pantoffels uit te doen!"' }), (0, r.jsx)('p', { children: '(Pieter leunt tevreden achterover op zijn bureaustoel. De camera zoomt uit, door het raam naar buiten, totdat het huis van Pieter volledig in beeld is. In de tuin van de buurman eet een man van een berg rijstebrij.)' }), (0, r.jsx)('p', { children: '(Vrolijk fluitmuziekje, in middeleeuwse stijl.)' }), (0, r.jsx)('p', { children: 'Voice over: "Verhuizen? Geef het door via www.luilekkerland.nl/verhuizen"' }), (0, r.jsx)('p', { children: '(Logo van de gemeente Luilekkerland verschijnt in beeld, met daar onder de link www.luilekkerland.nl/verhuizen.)' })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'waar-plaats-je-een-transcript', children: 'Waar plaats je een transcript?' }), '\n', (0, r.jsx)(n.p, { children: 'Nu je een transcript van je video hebt gemaakt, is het belangrijk het op een logische plek aan te bieden.' }), '\n', (0, r.jsx)(n.h3, { id: 'een-transcript-bij-een-video-op-je-eigen-website', children: 'Een transcript bij een video op je eigen website' }), '\n', (0, r.jsxs)(n.p, { children: ['Plaats een transcript direct onder je video, als gewone tekst. Als je het transcript niet volledig zichtbaar op je pagina wilt plaatsen, kun je er voor kiezen de tekst in een ', (0, r.jsx)(n.a, { href: '/accordion/', children: 'accordion' }), ' te zetten. Op die manier kunnen bezoekers zelf kiezen of ze de tekst willen lezen of overslaan.'] }), '\n', (0, r.jsxs)(n.p, { children: ["Vergeet niet duidelijk te maken d\xe1t het om een transcript gaat, bijvoorbeeld door 'Transcript' of 'Uitgeschreven tekst' als ", (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'koptekst' }), ' boven je transcript te plaatsen.'] }), '\n', (0, r.jsx)(n.h3, { id: 'een-transcript-bij-een-video-op-een-andere-website', children: 'Een transcript bij een video op een andere website' }), '\n', (0, r.jsx)(n.p, { children: 'Verwijs je bezoekers naar een andere website om je video te bekijken? Plaats dan het transcript op een logische plek in de buurt van de link naar de video.' }), '\n', (0, r.jsx)(n.p, { children: "Soms is het niet handig om een transcript op de pagina zelf te plaatsen, bijvoorbeeld als je een overzichtspagina hebt met links naar meerdere video's. In dat geval kun je er ook voor kiezen om het transcript op een aparte pagina te plaatsen en in het overzicht een link naar je transcript toe te voegen." }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Bepaal voor iedere video:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Is er een transcript aanwezig?' }), '\n', (0, r.jsx)(n.li, { children: 'Staat het transcript op een logische, goed bereikbare plek? Of wordt er op een logische plek naar het transcript verwezen?' }), '\n', (0, r.jsx)(n.li, { children: 'Komt alle dialoog in het transcript voor en is het duidelijk wie er spreekt?' }), '\n', (0, r.jsx)(n.li, { children: 'Komt alle belangrijke visuele informatie voor in het transcript?' }), '\n', (0, r.jsx)(n.li, { children: 'Komt alle belangrijke informatie uit de audio voor in het transcript?' }), '\n', (0, r.jsx)(n.li, { children: 'Heeft het transcript de juiste opmaak en structuur?' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.2.1/', children: 'Succescriterium 1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.2.3/', children: 'Succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.2.8/', children: 'Succescriterium 1.2.8 Media-alternatief (vooraf opgenomen)' }) }), '\n'] }), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
