'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [22144],
 {
  14881(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var r = l(13526),
    s = l(30758),
    o = l(30662),
    t = l(37168),
    i = l(86070);
   const a = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, o) => {
     const t = e || 'div',
      a = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: o, className: a, ...s, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: a, headingApperance: c, ...d }) => {
     const h = (0, r.A)('utrecht-accordion__section', e),
      u = (0, r.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(o.rI, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [s && (0, i.jsx)(t.D, { level: a, appearance: c, children: s }), l] })] }) }), (0, i.jsx)('div', { className: u, children: d.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => i });
   var r = l(30758);
   const s = {},
    o = r.createContext(s);
   function t(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    s = l(16194),
    o = l(30758),
    t = l(56528);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: u } = (0, o.useContext)(t.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => L, GP: () => N, KC: () => $, Nd: () => _, Rt: () => z, Vj: () => A, Wk: () => I, bz: () => C, cB: () => P, e5: () => T, hY: () => M, jK: () => D, jP: () => R, ob: () => G, rI: () => w, t4: () => F, vP: () => S, vg: () => O });
   var r = l(92081),
    s = l(90578),
    o = l(96345),
    t = l(64249),
    i = l(4603),
    a = l(91525),
    c = l(23436),
    d = l(1375),
    h = l(4077),
    u = l(58315),
    m = l(73563),
    p = l(35193),
    v = l(82999),
    j = l(13088),
    g = l(43864),
    x = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(r.A, { ...k }),
    N = () => (0, f.jsx)(s.A, { ...k }),
    w = () => (0, f.jsx)(o.A, { ...k }),
    A = () => (0, f.jsx)(t.A, { ...k }),
    C = () => (0, f.jsx)(i.A, { ...k }),
    z = () => (0, f.jsx)(a.A, { ...k }),
    P = () => (0, f.jsx)(c.A, { ...k }),
    S = () => (0, f.jsx)(d.A, { ...k }),
    D = () => (0, f.jsx)(h.A, { ...k }),
    R = () => (0, f.jsx)(u.A, { ...k }),
    F = () => (0, f.jsx)(m.A, { ...k }),
    L = () => (0, f.jsx)(p.A, { ...k }),
    M = () => (0, f.jsx)(v.A, { ...k }),
    $ = () => (0, f.jsx)(j.A, { ...k }),
    I = () => (0, f.jsx)(g.A, { ...k }),
    T = () => (0, f.jsx)(x.A, { ...k }),
    G = () => (0, f.jsx)(b.A, { ...k }),
    O = () => (0, f.jsx)(y.A, { ...k });
  },
  38953(e, n, l) {
   l.d(n, { H: () => f });
   var r = l(28369),
    s = l(46447),
    o = l(13526),
    t = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    u = l(31186),
    m = l(65904),
    p = l.n(m),
    v = l(14881),
    j = l(46847),
    g = l(86070);
   const x = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: r, copyCode: s, defaultExpandedCode: t, designTokens: i }) => {
       const a = 'string' == typeof l ? l : r || '',
        c = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(r || '', p().languages[e], e);
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, g.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: i, children: (0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, g.jsx)(v.n, { children: (0, g.jsxs)(v.K, { label: 'Code', open: t, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === s && (0, g.jsx)(j.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: p, container: v = 'document', language: j, designTokens: f }) => {
       const k = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || k),
        [w, A] = (0, h.useState)(N),
        [C, z] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const P = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === v ? (S = x) : 'document' === v ? (S = b) : 'surface' === v && (S = y),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          k && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(S, { children: (0, g.jsx)(s.v$, { children: k }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': P,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: P,
            hidden: !C,
            children: [
             (0, g.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(s.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  46847(e, n, l) {
   l.d(n, { $: () => r.$n });
   var r = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var r = l(30662),
    s = l(46447),
    o = l(13526),
    t = l(94988),
    i = l(30758),
    a = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, a.jsx)(t.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, a.jsxs)(u, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(r.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(r.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => o });
   var r = l(86070),
    s = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  71017(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => j, default: () => y, frontMatter: () => v, metadata: () => r, toc: () => x }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/link/above-field/index","title":"Plaats de link boven het gerelateerde formulierveld","description":"Richtlijnen voor link boven het gerelateerde formulierveld.","source":"@site/docs/richtlijnen/formulieren/link/1-above-field/index.mdx","sourceDirName":"richtlijnen/formulieren/link/1-above-field","slug":"/richtlijnen/formulieren/links/plaatsing","permalink":"/richtlijnen/formulieren/links/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/1-above-field/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de link boven het gerelateerde formulierveld","title_sm":"Plaatsing link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing link","pagination_label":"Plaatsing link","description":"Richtlijnen voor link boven het gerelateerde formulierveld.","slug":"/richtlijnen/formulieren/links/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Links in een formulier","permalink":"/richtlijnen/formulieren/links/"},"next":{"title":"Geen link in label","permalink":"/richtlijnen/formulieren/links/niet-in-label"}}');
   var s = l(86070),
    o = l(18439),
    t = l(56672),
    i = l(38953),
    a = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'De link boven het gerelateerde invoerveld plaatsen.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('p', { children: [(0, s.jsx)('a', { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] }), (0, s.jsxs)('p', { children: [(0, s.jsx)('input', { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, s.jsx)('label', { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'De link onder het gerelateerde invoerveld plaatsen.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('p', { children: [(0, s.jsx)('input', { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, s.jsx)('label', { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] }), (0, s.jsxs)('p', { children: [(0, s.jsx)('a', { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: 'Plaats de link boven het gerelateerde formulierveld' }) }), '\n', (0, s.jsx)(n.p, { children: 'Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is.' }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld.' }), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'Let op' }), ': de link moet niet alleen visueel, maar ook in de DOM (Document Object Model) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Plaats de link boven het gerelateerde formulierveld', title_sm: 'Plaatsing link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing link', pagination_label: 'Plaatsing link', description: 'Richtlijnen voor link boven het gerelateerde formulierveld.', slug: '/richtlijnen/formulieren/links/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
 },
]);
