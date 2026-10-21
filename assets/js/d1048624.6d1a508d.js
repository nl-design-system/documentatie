'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65850],
 {
  14881(e, n, r) {
   r.d(n, { K: () => i, n: () => c });
   var l = r(13526),
    o = r(30758),
    s = r(30662),
    t = r(37168),
    a = r(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: r, ...o }, s) => {
     const t = e || 'div',
      c = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(t, { ref: s, className: c, ...o, children: r });
    }),
    i = ({ className: e, classNamePanel: n, label: r, heading: o, headingLevel: c, headingApperance: i, ...d }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: h, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(s.rI, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(t.D, { level: c, appearance: i, children: o }), r] })] }) }), (0, a.jsx)('div', { className: m, children: d.children })] });
    };
  },
  18439(e, n, r) {
   r.d(n, { R: () => t, x: () => a });
   var l = r(30758);
   const o = {},
    s = l.createContext(o);
   function t(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, r) {
   r.d(n, { M: () => i });
   var l = r(46447),
    o = r(16194),
    s = r(30758),
    t = r(56528);
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
   var c = r(86070);
   function i({ lineNumber: e, syntax: n, textContent: r, trim: i }) {
    let d = r;
    const { title: h, type: m } = (0, s.useContext)(t.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: r, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: r.map((n, r) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  30662(e, n, r) {
   r.d(n, { D4: () => D, GP: () => w, KC: () => L, Nd: () => _, Rt: () => z, Vj: () => A, Wk: () => V, bz: () => C, cB: () => S, e5: () => M, hY: () => I, jK: () => R, jP: () => F, ob: () => T, rI: () => N, t4: () => $, vP: () => P, vg: () => H });
   var l = r(92081),
    o = r(90578),
    s = r(96345),
    t = r(64249),
    a = r(4603),
    c = r(91525),
    i = r(23436),
    d = r(1375),
    h = r(4077),
    m = r(58315),
    p = r(73563),
    u = r(35193),
    j = r(82999),
    g = r(13088),
    x = r(43864),
    v = r(24214),
    b = r(79532),
    y = r(60529),
    f = r(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(l.A, { ...k }),
    w = () => (0, f.jsx)(o.A, { ...k }),
    N = () => (0, f.jsx)(s.A, { ...k }),
    A = () => (0, f.jsx)(t.A, { ...k }),
    C = () => (0, f.jsx)(a.A, { ...k }),
    z = () => (0, f.jsx)(c.A, { ...k }),
    S = () => (0, f.jsx)(i.A, { ...k }),
    P = () => (0, f.jsx)(d.A, { ...k }),
    R = () => (0, f.jsx)(h.A, { ...k }),
    F = () => (0, f.jsx)(m.A, { ...k }),
    $ = () => (0, f.jsx)(p.A, { ...k }),
    D = () => (0, f.jsx)(u.A, { ...k }),
    I = () => (0, f.jsx)(j.A, { ...k }),
    L = () => (0, f.jsx)(g.A, { ...k }),
    V = () => (0, f.jsx)(x.A, { ...k }),
    M = () => (0, f.jsx)(v.A, { ...k }),
    T = () => (0, f.jsx)(b.A, { ...k }),
    H = () => (0, f.jsx)(y.A, { ...k });
  },
  38953(e, n, r) {
   r.d(n, { H: () => f });
   var l = r(28369),
    o = r(46447),
    s = r(13526),
    t = r(68148),
    a = r(9016),
    c = r(69303),
    i = r(91635),
    d = r(30734),
    h = r(30758),
    m = r(31186),
    p = r(65904),
    u = r.n(p),
    j = r(14881),
    g = r(46847),
    x = r(86070);
   const v = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: r = '<p>No code provided</p>', rawCode: l, copyCode: o, defaultExpandedCode: t, designTokens: a }) => {
       const c = 'string' == typeof r ? r : l || '',
        i = 'string' == typeof r ? u().highlight(r, u().languages[e], e) : u().highlight(l || '', u().languages[e], e);
       return (0, x.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, x.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: a, children: (0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: t, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === o && (0, x.jsx)(g.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: p = !0, children: u, container: j = 'document', language: g, designTokens: f }) => {
       const k = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || k),
        [N, A] = (0, h.useState)(w),
        [C, z] = (0, h.useState)(r);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: g, plugins: [t.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === j ? (P = v) : 'document' === j ? (P = b) : 'surface' === j && (P = y),
        (0, x.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          k && (0, x.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(P, { children: (0, x.jsx)(o.v$, { children: k }) }) }) }),
          p &&
           (0, x.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, x.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, x.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: N, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(o.$n, {
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
  43668(e, n, r) {
   (r.r(n), r.d(n, { assets: () => x, contentTitle: () => g, default: () => y, frontMatter: () => j, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/clarity/index","title":"Voorkom verwarring bij de gebruiker","description":"Richtlijnen om verwarring bij de gebruiker te voorkomen.","source":"@site/docs/richtlijnen/formulieren/placeholder/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/3-clarity","slug":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Voorkom verwarring bij de gebruiker","title_sm":"Placeholder kan verwarren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kan verwarren","pagination_label":"Placeholder kan verwarren","description":"Richtlijnen om verwarring bij de gebruiker te voorkomen.","slug":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder bij zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie"},"next":{"title":"Placeholder kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast"}}');
   var o = r(86070),
    s = r(18439),
    t = r(56672),
    a = r(38953),
    c = r(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Geen placeholder gebruiken als het label duidelijk genoeg is.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'voornaam1', children: 'Je voornaam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { autoComplete: 'given-name', id: 'voornaam1', name: 'voornaam', type: 'text' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'De labeltekst herhalen in de placeholder.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'voornaam2', children: 'Voornaam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { autoComplete: 'given-name', id: 'voornaam2', name: 'voornaam', placeholder: 'Voornaam', type: 'text' }) })] }) }) })] });
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
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const j = { title: 'Voorkom verwarring bij de gebruiker', title_sm: 'Placeholder kan verwarren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kan verwarren', pagination_label: 'Placeholder kan verwarren', description: 'Richtlijnen om verwarring bij de gebruiker te voorkomen.', slug: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  46847(e, n, r) {
   r.d(n, { $: () => l.$n });
   var l = r(50805);
  },
  56528(e, n, r) {
   r.d(n, { $: () => d, x: () => i });
   var l = r(30662),
    o = r(46447),
    s = r(13526),
    t = r(94988),
    a = r(30758),
    c = r(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: r, children: a, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      u = 'string' == typeof r ? (0, c.jsx)(t.oz, { components: { a: o.N_ }, children: r }) : r;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(l.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), u] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => s });
   var l = r(86070),
    o = r(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
