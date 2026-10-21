'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33145],
 {
  14881(e, n, s) {
   s.d(n, { K: () => c, n: () => a });
   var o = s(13526),
    i = s(30758),
    t = s(30662),
    l = s(37168),
    r = s(86070);
   const a = (0, i.forwardRef)(({ as: e, className: n, children: s, ...i }, t) => {
     const l = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(l, { ref: t, className: a, ...i, children: s });
    }),
    c = ({ className: e, classNamePanel: n, label: s, heading: i, headingLevel: a, headingApperance: c, ...d }) => {
     const h = (0, o.A)('utrecht-accordion__section', e),
      v = (0, o.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: h, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.rI, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [i && (0, r.jsx)(l.D, { level: a, appearance: c, children: i }), s] })] }) }), (0, r.jsx)('div', { className: v, children: d.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => l, x: () => r });
   var o = s(30758);
   const i = {},
    t = o.createContext(i);
   function l(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => c });
   var o = s(46447),
    i = s(16194),
    t = s(30758),
    l = s(56528);
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
   var a = s(86070);
   function c({ lineNumber: e, syntax: n, textContent: s, trim: c }) {
    let d = s;
    const { title: h, type: v } = (0, t.useContext)(l.x),
     j = (0, t.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(i.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: i, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: j, children: ['codevoorbeeld ', v ? `\u201c${v}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': j, style: n, children: s.map((n, s) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => T, GP: () => N, KC: () => $, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => D, bz: () => z, cB: () => S, e5: () => G, hY: () => P, jK: () => M, jP: () => F, ob: () => L, rI: () => w, t4: () => H, vP: () => V, vg: () => E });
   var o = s(92081),
    i = s(90578),
    t = s(96345),
    l = s(64249),
    r = s(4603),
    a = s(91525),
    c = s(23436),
    d = s(1375),
    h = s(4077),
    v = s(58315),
    j = s(73563),
    p = s(35193),
    g = s(82999),
    u = s(13088),
    b = s(43864),
    m = s(24214),
    x = s(79532),
    y = s(60529),
    k = s(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(o.A, { ...f }),
    N = () => (0, k.jsx)(i.A, { ...f }),
    w = () => (0, k.jsx)(t.A, { ...f }),
    A = () => (0, k.jsx)(l.A, { ...f }),
    z = () => (0, k.jsx)(r.A, { ...f }),
    C = () => (0, k.jsx)(a.A, { ...f }),
    S = () => (0, k.jsx)(c.A, { ...f }),
    V = () => (0, k.jsx)(d.A, { ...f }),
    M = () => (0, k.jsx)(h.A, { ...f }),
    F = () => (0, k.jsx)(v.A, { ...f }),
    H = () => (0, k.jsx)(j.A, { ...f }),
    T = () => (0, k.jsx)(p.A, { ...f }),
    P = () => (0, k.jsx)(g.A, { ...f }),
    $ = () => (0, k.jsx)(u.A, { ...f }),
    D = () => (0, k.jsx)(b.A, { ...f }),
    G = () => (0, k.jsx)(m.A, { ...f }),
    L = () => (0, k.jsx)(x.A, { ...f }),
    E = () => (0, k.jsx)(y.A, { ...f });
  },
  38953(e, n, s) {
   s.d(n, { H: () => k });
   var o = s(28369),
    i = s(46447),
    t = s(13526),
    l = s(68148),
    r = s(9016),
    a = s(69303),
    c = s(91635),
    d = s(30734),
    h = s(30758),
    v = s(31186),
    j = s(65904),
    p = s.n(j),
    g = s(14881),
    u = s(46847),
    b = s(86070);
   const m = ({ children: e }) => (0, b.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(i.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, b.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(i.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, b.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: o, copyCode: i, defaultExpandedCode: l, designTokens: r }) => {
       const a = 'string' == typeof s ? s : o || '',
        c = 'string' == typeof s ? p().highlight(s, p().languages[e], e) : p().highlight(o || '', p().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: r, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, b.jsx)(g.n, { children: (0, b.jsxs)(g.K, { label: 'Code', open: l, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === i && (0, b.jsx)(u.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: j = !0, children: p, container: g = 'document', language: u, designTokens: k }) => {
       const f = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : v.qV(_ || f),
        [w, A] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(s);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: u, plugins: [l.A, r.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let V = h.Fragment;
       return (
        'paragraph' === g ? (V = m) : 'document' === g ? (V = x) : 'surface' === g && (V = y),
        (0, b.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          f && (0, b.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, b.jsx)(V, { children: (0, b.jsx)(i.v$, { children: f }) }) }) }),
          j &&
           (0, b.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(i.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, b.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: u, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(i.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  46847(e, n, s) {
   s.d(n, { $: () => o.$n });
   var o = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => c });
   var o = s(30662),
    i = s(46447),
    t = s(13526),
    l = s(94988),
    r = s(30758),
    a = s(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: r, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      v = d ? 'figure' : 'div',
      j = d ? 'figcaption' : 'div',
      p = 'string' == typeof s ? (0, a.jsx)(l.oz, { components: { a: i.N_ }, children: s }) : s;
     return (0, a.jsxs)(v, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(j, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(i.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(i.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => r, RM: () => t });
   var o = s(86070),
    i = s(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  71147(e, n, s) {
   (s.r(n), s.d(n, { assets: () => h, contentTitle: () => d, default: () => p, frontMatter: () => c, metadata: () => o, toc: () => v }));
   const o = JSON.parse('{"id":"richtlijnen/content/video/beschrijving","title":"Beschrijving voor video","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","source":"@site/docs/richtlijnen/content/video/beschrijving.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/beschrijving","permalink":"/richtlijnen/content/video/beschrijving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/beschrijving.mdx","tags":[],"version":"current","frontMatter":{"title":"Beschrijving voor video","title_sm":"Video beschrijving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Video beschrijving","pagination_label":"Video beschrijving","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","slug":"/richtlijnen/content/video/beschrijving","keywords":["video","YouTube","Vimeo","iFrame","alternatieve tekst video","video beschrijving"]},"sidebar":"richtlijnen","previous":{"title":"Audiodescriptie","permalink":"/richtlijnen/content/video/audiodescriptie"},"next":{"title":"Flitsen","permalink":"/richtlijnen/content/video/flitsen"}}');
   var i = s(86070),
    t = s(18439),
    l = s(38953),
    r = s(56528),
    a = s(56672);
   const c = { title: 'Beschrijving voor video', title_sm: 'Video beschrijving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Video beschrijving', pagination_label: 'Video beschrijving', description: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.', slug: '/richtlijnen/content/video/beschrijving', keywords: ['video', 'YouTube', 'Vimeo', 'iFrame', 'alternatieve tekst video', 'video beschrijving'] },
    d = 'Video beschrijving',
    h = {},
    v = [{ value: 'Een beschrijving op de pagina', id: 'een-beschrijving-op-de-pagina', level: 2 }, { value: 'Een beschrijving in de videospeler', id: 'een-beschrijving-in-de-videospeler', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function j(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'video-beschrijving', children: 'Video beschrijving' }) }), '\n', (0, i.jsx)(n.p, { children: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.' }), '\n', (0, i.jsx)(n.h2, { id: 'een-beschrijving-op-de-pagina', children: 'Een beschrijving op de pagina' }), '\n', (0, i.jsx)(n.p, { children: 'Beschrijf b\xf3ven de videospeler op de pagina waar de video over gaat. Dit kan bijvoorbeeld in een beschrijvende paragraaf, of met een kopje. Zo begrijpen alle bezoekers wat zij kunnen verwachten van de video en bepalen of ze de video willen bekijken.' }), '\n', (0, i.jsx)(r.$, { appearance: 'do', title: "Video's op de pagina een beschrijving geven", children: (0, i.jsx)(l.H, { language: 'html', className: 'nlds-not-accessible', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('h1', { children: 'Heartbeat terugkijken' }), (0, i.jsx)('p', { children: 'Heartbeat terugkijken? Op deze pagina vind je de opnames.' }), (0, i.jsx)('h2', { children: '10 juni 2025' }), (0, i.jsx)('p', { children: 'Renate vertelt over de nieuwe richtlijnen voor tekstopmaak en waar je allemaal rekening mee moet houden.' })] }) }) }), '\n', (0, i.jsx)(n.h2, { id: 'een-beschrijving-in-de-videospeler', children: 'Een beschrijving in de videospeler' }), '\n', (0, i.jsxs)(n.p, { children: ['Voor bezoekers die gebruik maken van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' is het belangrijk dat de videospeler ook een beschrijving heeft. Een goede beschrijving van de videospeler is de titel van je video. Zo weet je als bezoeker wat je kunt verwachten.'] }), '\n', (0, i.jsxs)(n.p, { children: ["Video's die je vanaf YouTube en Vimeo op je pagina plaatst, worden meestal in een ", (0, i.jsx)(n.code, { children: 'iFrame' }), ' op de pagina geplaatst. Het is niet altijd nodig om zelf de beschrijving van het ', (0, i.jsx)(n.code, { children: 'iFrame' }), " of een videospeler aan te passen. Vraag bij de beheerder van je contentmanagementsysteem (CMS) na of video's automatisch een beschrijving krijgen. Wordt er niet automatisch een beschrijving meegegeven? Vraag dan na wat de beste manier is om dit in jullie CMS te doen."] }), '\n', (0, i.jsx)(n.p, { children: 'Gebruikt jouw organisatie een eigen videospeler? Het hangt af van welke videospeler jouw organisatie gebruikt of je zelf een beschrijving moet toevoegen en hoe je dat doet. Vraag dit na bij de beheerder van je CMS.' }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Controleer voor iedere video:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Heeft de video een beschrijving op de pagina, bijvoorbeeld in een paragraaf of een kopje?' }), '\n', (0, i.jsx)(n.li, { children: 'Krijgt de videospeler automatisch een beschrijving mee? Vraag dit na bij de beheerder van je CMS. Zo nee, vraag dan na hoe je het beste zelf een beschrijving mee kunt geven. Daar controleer je vervolgens ook of de video een beschrijving heeft, bijvoorbeeld de titel van de video.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, i.jsx)(a.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
