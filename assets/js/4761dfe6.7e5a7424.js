'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26592],
 {
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => i });
   var l = t(13526),
    s = t(30758),
    o = t(30662),
    r = t(37168),
    a = t(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: t, ...s }, o) => {
     const r = e || 'div',
      i = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: o, className: i, ...s, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: s, headingLevel: i, headingApperance: c, ...d }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      k = (0, l.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: h, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(o.rI, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [s && (0, a.jsx)(r.D, { level: i, appearance: c, children: s }), t] })] }) }), (0, a.jsx)('div', { className: k, children: d.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
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
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    s = t(16194),
    o = t(30758),
    r = t(56528);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: k } = (0, o.useContext)(r.x),
     p = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', k ? `\u201c${k}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => M, GP: () => w, KC: () => H, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => I, bz: () => z, cB: () => S, e5: () => R, hY: () => P, jK: () => D, jP: () => L, ob: () => W, rI: () => N, t4: () => $, vP: () => T, vg: () => F });
   var l = t(92081),
    s = t(90578),
    o = t(96345),
    r = t(64249),
    a = t(4603),
    i = t(91525),
    c = t(23436),
    d = t(1375),
    h = t(4077),
    k = t(58315),
    p = t(73563),
    m = t(35193),
    u = t(82999),
    j = t(13088),
    g = t(43864),
    x = t(24214),
    b = t(79532),
    v = t(60529),
    y = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(l.A, { ...f }),
    w = () => (0, y.jsx)(s.A, { ...f }),
    N = () => (0, y.jsx)(o.A, { ...f }),
    A = () => (0, y.jsx)(r.A, { ...f }),
    z = () => (0, y.jsx)(a.A, { ...f }),
    C = () => (0, y.jsx)(i.A, { ...f }),
    S = () => (0, y.jsx)(c.A, { ...f }),
    T = () => (0, y.jsx)(d.A, { ...f }),
    D = () => (0, y.jsx)(h.A, { ...f }),
    L = () => (0, y.jsx)(k.A, { ...f }),
    $ = () => (0, y.jsx)(p.A, { ...f }),
    M = () => (0, y.jsx)(m.A, { ...f }),
    P = () => (0, y.jsx)(u.A, { ...f }),
    H = () => (0, y.jsx)(j.A, { ...f }),
    I = () => (0, y.jsx)(g.A, { ...f }),
    R = () => (0, y.jsx)(x.A, { ...f }),
    W = () => (0, y.jsx)(b.A, { ...f }),
    F = () => (0, y.jsx)(v.A, { ...f });
  },
  38953(e, n, t) {
   t.d(n, { H: () => y });
   var l = t(28369),
    s = t(46447),
    o = t(13526),
    r = t(68148),
    a = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    k = t(31186),
    p = t(65904),
    m = t.n(p),
    u = t(14881),
    j = t(46847),
    g = t(86070);
   const x = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: l, copyCode: s, defaultExpandedCode: r, designTokens: a }) => {
       const i = 'string' == typeof t ? t : l || '',
        c = 'string' == typeof t ? m().highlight(t, m().languages[e], e) : m().highlight(l || '', m().languages[e], e);
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, g.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: a, children: (0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, g.jsx)(u.n, { children: (0, g.jsxs)(u.K, { label: 'Code', open: r, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === s && (0, g.jsx)(j.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: m, container: u = 'document', language: j, designTokens: y }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : k.qV(_ || f),
        [N, A] = (0, h.useState)(w),
        [z, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let T = h.Fragment;
       return (
        'paragraph' === u ? (T = x) : 'document' === u ? (T = b) : 'surface' === u && (T = v),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          f && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, g.jsx)(T, { children: (0, g.jsx)(s.v$, { children: f }) }) }) }),
          p &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(s.$n, {
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
  46847(e, n, t) {
   t.d(n, { $: () => l.$n });
   var l = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var l = t(30662),
    s = t(46447),
    o = t(13526),
    r = t(94988),
    a = t(30758),
    i = t(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: a, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      k = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, i.jsx)(r.oz, { components: { a: s.N_ }, children: t }) : t;
     return (0, i.jsxs)(k, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), m] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var l = t(86070),
    s = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  80593(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => m, frontMatter: () => c, metadata: () => l, toc: () => k }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/link-text","title":"Toegankelijke linkteksten","description":"Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.","source":"@site/docs/richtlijnen/content/tekstopmaak/link-text.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/link-text.mdx","tags":[],"version":"current","frontMatter":{"title":"Toegankelijke linkteksten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke linkteksten","pagination_label":"Toegankelijke linkteksten","description":"Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.","slug":"/richtlijnen/content/tekstopmaak/linkteksten","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","links"]},"sidebar":"richtlijnen","previous":{"title":"De juiste taal instellen","permalink":"/richtlijnen/content/tekstopmaak/taal"},"next":{"title":"Citaten","permalink":"/richtlijnen/content/citaten"}}');
   var s = t(86070),
    o = t(18439),
    r = t(38953),
    a = t(56528),
    i = t(56672);
   const c = { title: 'Toegankelijke linkteksten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke linkteksten', pagination_label: 'Toegankelijke linkteksten', description: 'Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.', slug: '/richtlijnen/content/tekstopmaak/linkteksten', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'links'] },
    d = 'Toegankelijke linkteksten',
    h = {},
    k = [{ value: 'Wat werkt wel (en wat niet)?', id: 'wat-werkt-wel-en-wat-niet', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'toegankelijke-linkteksten', children: 'Toegankelijke linkteksten' }) }), '\n', (0, s.jsx)(n.p, { children: 'Veel gebruikers krijgen links te zien of te horen los van de rest van de tekst. Een link als \u2018klik hier\u2019 of \u2018lees meer\u2019 zegt dan niets. Zorg daarom dat de linktekst op zichzelf duidelijk is. Dat maakt je content toegankelijker \xe9n beter vindbaar in zoekmachines.' }), '\n', (0, s.jsxs)(n.p, { children: ['Linkteksten moeten duidelijk maken waar een link naartoe gaat. Dat helpt iedereen die snel door een pagina scant, en is extra belangrijk voor mensen die niet alle context kunnen zien of horen \u2014 bijvoorbeeld omdat ze een ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken, het scherm sterk vergroten, of moeite hebben met lezen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Op deze pagina lees je hoe je goede linkteksten schrijft en welke fouten je beter kunt vermijden.' }), '\n', (0, s.jsx)(n.p, { children: 'Hieronder zie je voorbeelden van wat wel werkt en wat je beter kunt laten.' }), '\n', (0, s.jsx)(n.h2, { id: 'wat-werkt-wel-en-wat-niet', children: 'Wat werkt wel (en wat niet)?' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Schrijf goede toegankelijke linkteksten waaruit blijkt wat er gebeurt als je erop klikt.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('ul', { children: [(0, s.jsxs)('li', { children: ['Meer informatie staat op de pagina ', (0, s.jsx)('a', { href: 'https://example.com/', children: 'Rechten van mensen met een beperking' })] }), (0, s.jsx)('li', { children: (0, s.jsx)('a', { href: 'https://example.com/', children: 'Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)' }) }), (0, s.jsxs)('li', { children: ['Stuur een mail naar ', (0, s.jsx)('a', { href: 'https://example.com/', children: 'test@test.nl' })] })] }) }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Onduidelijke linkteksten gebruiken waaruit niet blijkt wat er gebeurt als je erop klikt.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('ul', { children: [(0, s.jsxs)('li', { children: [(0, s.jsx)('a', { href: 'https://example.com/', children: 'Klik hier' }), ' voor meer informatie over de rechten van mensen met een beperking'] }), (0, s.jsxs)('li', { children: [(0, s.jsx)('a', { href: 'https://example.com/', children: 'Lees meer' }), ' over digitale toegankelijkheid'] })] }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Lees de pagina door en controleer alle linkteksten. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Controleer of de linktekst duidelijk maakt waar de link naartoe leidt.\nVermijd vage teksten zoals \u2018klik hier\u2019 of \u2018lees meer\u2019. De linktekst moet zelfstandig begrijpelijk zijn, zodat gebruikers weten wat ze kunnen verwachten.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of links naar verschillende bestemmingen unieke en beschrijvende linkteksten hebben.\nDit voorkomt verwarring, vooral voor gebruikers van screenreaders die een lijst van links opvragen.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel(in context)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.9/', children: 'Succescriterium 2.4.9 Linkdoel (alleen link)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'Succescriterium 2.5.3 Label in naam' }) }), '\n'] }), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
