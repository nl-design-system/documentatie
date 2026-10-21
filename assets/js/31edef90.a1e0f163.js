'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25974],
 {
  14881(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var s = l(13526),
    o = l(30758),
    r = l(30662),
    t = l(37168),
    i = l(86070);
   const a = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, r) => {
     const t = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: r, className: a, ...o, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: a, headingApperance: c, ...d }) => {
     const u = (0, s.A)('utrecht-accordion__section', e),
      p = (0, s.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.rI, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [o && (0, i.jsx)(t.D, { level: a, appearance: c, children: o }), l] })] }) }), (0, i.jsx)('div', { className: p, children: d.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => i });
   var s = l(30758);
   const o = {},
    r = s.createContext(o);
   function t(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    o = l(16194),
    r = l(30758),
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
    const { title: u, type: p } = (0, r.useContext)(t.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...o({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => $, GP: () => N, KC: () => P, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => L, bz: () => z, cB: () => S, e5: () => M, hY: () => G, jK: () => F, jP: () => R, ob: () => H, rI: () => A, t4: () => I, vP: () => D, vg: () => T });
   var s = l(92081),
    o = l(90578),
    r = l(96345),
    t = l(64249),
    i = l(4603),
    a = l(91525),
    c = l(23436),
    d = l(1375),
    u = l(4077),
    p = l(58315),
    m = l(73563),
    h = l(35193),
    j = l(82999),
    g = l(13088),
    v = l(43864),
    x = l(24214),
    y = l(79532),
    f = l(60529),
    b = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, b.jsx)(s.A, { ...k }),
    N = () => (0, b.jsx)(o.A, { ...k }),
    A = () => (0, b.jsx)(r.A, { ...k }),
    w = () => (0, b.jsx)(t.A, { ...k }),
    z = () => (0, b.jsx)(i.A, { ...k }),
    C = () => (0, b.jsx)(a.A, { ...k }),
    S = () => (0, b.jsx)(c.A, { ...k }),
    D = () => (0, b.jsx)(d.A, { ...k }),
    F = () => (0, b.jsx)(u.A, { ...k }),
    R = () => (0, b.jsx)(p.A, { ...k }),
    I = () => (0, b.jsx)(m.A, { ...k }),
    $ = () => (0, b.jsx)(h.A, { ...k }),
    G = () => (0, b.jsx)(j.A, { ...k }),
    P = () => (0, b.jsx)(g.A, { ...k }),
    L = () => (0, b.jsx)(v.A, { ...k }),
    M = () => (0, b.jsx)(x.A, { ...k }),
    H = () => (0, b.jsx)(y.A, { ...k }),
    T = () => (0, b.jsx)(f.A, { ...k });
  },
  38953(e, n, l) {
   l.d(n, { H: () => b });
   var s = l(28369),
    o = l(46447),
    r = l(13526),
    t = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    m = l(65904),
    h = l.n(m),
    j = l(14881),
    g = l(46847),
    v = l(86070);
   const x = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const b = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: o, defaultExpandedCode: t, designTokens: i }) => {
       const a = 'string' == typeof l ? l : s || '',
        c = 'string' == typeof l ? h().highlight(l, h().languages[e], e) : h().highlight(s || '', h().languages[e], e);
       return (0, v.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, v.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: i, children: (0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, v.jsx)(j.n, { children: (0, v.jsxs)(j.K, { label: 'Code', open: t, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === o && (0, v.jsx)(g.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: h, container: j = 'document', language: g, designTokens: b }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || k),
        [A, w] = (0, u.useState)(N),
        [z, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === j ? (D = x) : 'document' === j ? (D = y) : 'surface' === j && (D = f),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, v.jsx)(D, { children: (0, v.jsx)(o.v$, { children: k }) }) }) }),
          m &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, v.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
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
  46847(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var s = l(30662),
    o = l(46447),
    r = l(13526),
    t = l(94988),
    i = l(30758),
    a = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      h = 'string' == typeof l ? (0, a.jsx)(t.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, a.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(o.fz, { children: e })] }), h] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => r });
   var s = l(86070),
    o = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  77205(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => g, default: () => f, frontMatter: () => j, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/error/clarity/index","title":"Schrijf een duidelijke foutmelding","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/error/3-clarity","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een duidelijke foutmelding","title_sm":"Duidelijke foutmeldingen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Duidelijke foutmeldingen","pagination_label":"Duidelijke foutmeldingen","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven"},"next":{"title":"Plaatsing foutmelding","permalink":"/richtlijnen/formulieren/foutmeldingen/plaatsing"}}');
   var o = l(86070),
    r = l(18439),
    t = l(56672),
    i = l(38953),
    a = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Leg uit waarom een datum wordt afgekeurd.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'description-passport-validity', children: 'Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity', type: 'text', name: 'passport-validity', 'aria-describedby': 'description-passport-validity' }) })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Geef een voorbeeld van wat er verwacht wordt.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email', children: 'E-mail' }) }), (0, o.jsx)('p', { id: 'description-email', children: 'Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email', type: 'email', name: 'email', 'aria-describedby': 'description-email' }) })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'description-passport-validity-2', children: 'Invoerfout: Dit veld is verplicht.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'false', type: 'text', name: 'passport-validity-2', 'aria-describedby': 'description-passport-validity-2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'schrijf-een-duidelijke-foutmelding', children: 'Schrijf een duidelijke foutmelding' }) }), '\n', (0, o.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), '\n', (0, o.jsx)(n.p, { children: 'Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen.' }), '\n', (0, o.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Vul een geldig e-mailadres in, bijvoorbeeld ', (0, o.jsx)(n.a, { href: 'mailto:naam@voorbeeld.nl', children: 'naam@voorbeeld.nl' }), '.'] }), '\n', (0, o.jsx)(n.li, { children: 'De geldigheidsdatum van uw paspoort moet in de toekomst zijn.' }), '\n', (0, o.jsx)(n.li, { children: 'Vul het huisnummer in zodat wij je bestelling kunnen opsturen.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' even en is het duidelijker dat de foutmelding apart een zin is.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ', (0, o.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, o.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '. In de video ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/videos/usability-heuristic-recognize-errors/', children: (0, o.jsx)('span', { lang: 'en', children: 'Help Users Recognize, Diagnose, and Recover from Errors' }) }), ' geeft de Nielsen Norman Group tips voor goede hulp aan gebruikers voor het verhelpen van fouten.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Schrijf een duidelijke foutmelding', title_sm: 'Duidelijke foutmeldingen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Duidelijke foutmeldingen', pagination_label: 'Duidelijke foutmeldingen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
