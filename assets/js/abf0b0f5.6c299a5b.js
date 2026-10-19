'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90037],
 {
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => r });
   var o = t(13526),
    s = t(30758),
    a = t(30662),
    l = t(37168),
    i = t(86070);
   const r = (0, s.forwardRef)(({ as: e, className: n, children: t, ...s }, a) => {
     const l = e || 'div',
      r = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(l, { ref: a, className: r, ...s, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: s, headingLevel: r, headingApperance: c, ...d }) => {
     const h = (0, o.A)('utrecht-accordion__section', e),
      p = (0, o.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(a.rI, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [s && (0, i.jsx)(l.D, { level: r, appearance: c, children: s }), t] })] }) }), (0, i.jsx)('div', { className: p, children: d.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => i });
   var o = t(30758);
   const s = {},
    a = o.createContext(s);
   function l(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), o.createElement(a.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var o = t(46447),
    s = t(16194),
    a = t(30758),
    l = t(56528);
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
   var r = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: p } = (0, a.useContext)(l.x),
     m = (0, a.useId)();
    return (c && (d = d.trim()), (0, r.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: a }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, r.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, r.jsxs)('span', { ...s({ line: n }), children: [e && (0, r.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => H, GP: () => w, KC: () => P, Nd: () => _, Rt: () => C, Vj: () => z, Wk: () => T, bz: () => A, cB: () => S, e5: () => L, hY: () => I, jK: () => $, jP: () => D, ob: () => F, rI: () => N, t4: () => E, vP: () => M, vg: () => G });
   var o = t(92081),
    s = t(90578),
    a = t(96345),
    l = t(64249),
    i = t(4603),
    r = t(91525),
    c = t(23436),
    d = t(1375),
    h = t(4077),
    p = t(58315),
    m = t(73563),
    u = t(35193),
    g = t(82999),
    j = t(13088),
    k = t(43864),
    v = t(24214),
    x = t(79532),
    b = t(60529),
    y = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(o.A, { ...f }),
    w = () => (0, y.jsx)(s.A, { ...f }),
    N = () => (0, y.jsx)(a.A, { ...f }),
    z = () => (0, y.jsx)(l.A, { ...f }),
    A = () => (0, y.jsx)(i.A, { ...f }),
    C = () => (0, y.jsx)(r.A, { ...f }),
    S = () => (0, y.jsx)(c.A, { ...f }),
    M = () => (0, y.jsx)(d.A, { ...f }),
    $ = () => (0, y.jsx)(h.A, { ...f }),
    D = () => (0, y.jsx)(p.A, { ...f }),
    E = () => (0, y.jsx)(m.A, { ...f }),
    H = () => (0, y.jsx)(u.A, { ...f }),
    I = () => (0, y.jsx)(g.A, { ...f }),
    P = () => (0, y.jsx)(j.A, { ...f }),
    T = () => (0, y.jsx)(k.A, { ...f }),
    L = () => (0, y.jsx)(v.A, { ...f }),
    F = () => (0, y.jsx)(x.A, { ...f }),
    G = () => (0, y.jsx)(b.A, { ...f });
  },
  38953(e, n, t) {
   t.d(n, { H: () => y });
   var o = t(28369),
    s = t(46447),
    a = t(13526),
    l = t(68148),
    i = t(9016),
    r = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    p = t(31186),
    m = t(65904),
    u = t.n(m),
    g = t(14881),
    j = t(46847),
    k = t(86070);
   const v = ({ children: e }) => (0, k.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, k.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, k.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, k.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, k.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, k.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: o, copyCode: s, defaultExpandedCode: l, designTokens: i }) => {
       const r = 'string' == typeof t ? t : o || '',
        c = 'string' == typeof t ? u().highlight(t, u().languages[e], e) : u().highlight(o || '', u().languages[e], e);
       return (0, k.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', n), children: [(0, k.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: i, children: (0, k.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }) }), (0, k.jsx)(g.n, { children: (0, k.jsxs)(g.K, { label: 'Code', open: l, children: [(0, k.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, k.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === s && (0, k.jsx)(j.$, { 'data-copy-code': r, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: u, container: g = 'document', language: j, designTokens: y }) => {
       const f = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : p.qV(_ || f),
        [N, z] = (0, h.useState)(w),
        [A, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [l.A, i.Ay, r.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let M = h.Fragment;
       return (
        'paragraph' === g ? (M = v) : 'document' === g ? (M = x) : 'surface' === g && (M = b),
        (0, k.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          f && (0, k.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, k.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, k.jsx)(M, { children: (0, k.jsx)(s.v$, { children: f }) }) }) }),
          m &&
           (0, k.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, k.jsx)(s.$n, {
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
          m &&
           (0, k.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, k.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, k.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, k.jsx)(s.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  46847(e, n, t) {
   t.d(n, { $: () => o.$n });
   var o = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var o = t(30662),
    s = t(46447),
    a = t(13526),
    l = t(94988),
    i = t(30758),
    r = t(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: i, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof t ? (0, r.jsx)(l.oz, { components: { a: s.N_ }, children: t }) : t;
     return (0, r.jsxs)(p, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(o.jP, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, r.jsx)(s.fz, { children: e })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(o.jK, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, r.jsx)(s.fz, { children: e })] }), u] }), (0, r.jsx)('div', { className: 'nlds-guideline__example', children: (0, r.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => a });
   var o = t(86070),
    s = t(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  78841(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => o, toc: () => p }));
   const o = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/quotes","title":"Citaten","description":"Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.","source":"@site/docs/richtlijnen/content/tekstopmaak/quotes.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/citaten","permalink":"/richtlijnen/content/citaten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/quotes.mdx","tags":[],"version":"current","frontMatter":{"title":"Citaten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Citaten","pagination_label":"Citaten","description":"Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.","slug":"/richtlijnen/content/citaten","keywords":["lettergrootte"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten"},"next":{"title":"Opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen"}}');
   var s = t(86070),
    a = t(18439),
    l = t(38953),
    i = t(56528),
    r = t(56672);
   const c = { title: 'Citaten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Citaten', pagination_label: 'Citaten', description: 'Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.', slug: '/richtlijnen/content/citaten', keywords: ['lettergrootte'] },
    d = 'Citaten op een webpagina',
    h = {},
    p = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'citaten-op-een-webpagina', children: 'Citaten op een webpagina' }) }), '\n', (0, s.jsx)(n.p, { children: 'Korte citaten en lange citaten kun je tussen enkele of dubbele aanhalingsteken zetten. Je kunt tekst ook markeren als citaat binnen het systeem waarmee je webpagina\u2019s publiceert. Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.' }), '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Plaats dubbele of enkele aanhalingstekens om een quote aan te geven.', children: (0, s.jsx)(l.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: 'De voorzitter vroeg: \u201cWas dat het antwoord op uw vraag?\u201d' }) }) }) }), '\n', (0, s.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om een citaat als losstaand content-blok te plaatsen op je pagina. Gebruik deze mogelijkheid als je een citaat uit je tekst uit wil lichten." }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Een citaat uitlichten met de specifiek daarvoor bedoelde mogelijkheid in het CMS.', children: (0, s.jsx)(l.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [' ', (0, s.jsxs)('p', { children: ['Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis.', ' '] }), (0, s.jsx)('blockquote', { children: 'Een vat vol geleerdheid is nog geen druppel wijsheid waard.' }), (0, s.jsx)('p', { children: 'De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik hiervoor geen semantische opmaak die daar niet voor bedoeld is, zoals een kop of dikgedrukte tekst.' }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Een citaat uitlichten met opmaak die daar niet voor bedoeld is, zoals een kop.', children: (0, s.jsx)(l.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [' ', (0, s.jsxs)('p', { children: ['Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis.', ' '] }), (0, s.jsx)('h2', { children: 'Een vat vol geleerdheid is nog geen druppel wijsheid waard.' }), (0, s.jsx)('p', { children: 'De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, s.jsx)(n.p, { children: 'Je mag natuurlijk wel een citaat gebruiken in een koptekst als het citaat relevant is voor de tekst die n\xe1 de kop komt. Gebruik dan wel aanhalingstekens om aan te geven dat het om een citaat gaat.' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Een citaat uitlichten in een kop die iets zegt over de tekst die volgt.', children: (0, s.jsx)(l.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('h2', { children: '"Een vat vol geleerdheid is nog geen druppel wijsheid waard"' }), (0, s.jsx)('p', { children: 'Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis. De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Lees de pagina door en controleer alle citaten. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Is het citaat opgemaakt met aanhalingstekens? Dan is dat in principe voldoende.' }), '\n', (0, s.jsx)(n.li, { children: 'Is het citaat uitgelicht op de pagina? Controleer dan of de optie voor citaten in het CMS is gebruikt.' }), '\n', (0, s.jsxs)(n.li, { children: ['Controleer of het citaat niet met de functie voor schuingedrukte tekst is opgemaakt om het citaat op te laten vallen. Is dat zo? Pas de opmaak dan aan. Schuingedrukte tekst is bedoeld om ', (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'tekst te benadrukken' }), ', niet om citaten mee op te maken.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Controleer of het citaat niet met een koptekst is opgemaakt om het citaat uit te lichten. Als dat zo is, pas dit aan. ', (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen zijn bedoeld voor structuur' }), ', niet voor vormgeving.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
