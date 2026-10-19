'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20259],
 {
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => a });
   var s = t(13526),
    l = t(30758),
    o = t(30662),
    r = t(37168),
    i = t(86070);
   const a = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, o) => {
     const r = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: o, className: a, ...l, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: a, headingApperance: c, ...d }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      p = (0, s.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(o.rI, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [l && (0, i.jsx)(r.D, { level: a, appearance: c, children: l }), t] })] }) }), (0, i.jsx)('div', { className: p, children: d.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => i });
   var s = t(30758);
   const l = {},
    o = s.createContext(l);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, t) {
   t.d(n, { o: () => d });
   var s = t(18439),
    l = t(46447),
    o = t(86070);
   const r = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: s, hash: l } = new URL(n, new URL(e, 'http://example.com/'));
      return t + s + l;
     }
     return t.toString();
    },
    i = { 1: {}, 2: { h1: l.fV, h2: l._B, h3: l.f_, h4: l.mM, h5: l.TT }, 3: { h1: l._B, h2: l.f_, h3: l.mM, h4: l.TT, h5: l.TT }, 4: { h1: l.f_, h2: l.mM, h3: l.TT, h4: l.TT, h5: l.TT }, 5: { h1: l.mM, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT }, 6: { h1: l.TT, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, o.jsx)('img', { ...t, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...i[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return i[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: l = '', components: r = {} }) => (0, o.jsx)(s.x, { components: { ...c(n, t), ...a(l), ...r }, children: e });
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var s = t(46447),
    l = t(16194),
    o = t(30758),
    r = t(56528);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: p } = (0, o.useContext)(r.x),
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => H, GP: () => N, KC: () => $, Nd: () => _, Rt: () => z, Vj: () => w, Wk: () => M, bz: () => T, cB: () => C, e5: () => P, hY: () => L, jK: () => R, jP: () => D, ob: () => I, rI: () => A, t4: () => U, vP: () => S, vg: () => V });
   var s = t(92081),
    l = t(90578),
    o = t(96345),
    r = t(64249),
    i = t(4603),
    a = t(91525),
    c = t(23436),
    d = t(1375),
    h = t(4077),
    p = t(58315),
    u = t(73563),
    g = t(35193),
    m = t(82999),
    j = t(13088),
    x = t(43864),
    v = t(24214),
    y = t(79532),
    b = t(60529),
    k = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(s.A, { ...f }),
    N = () => (0, k.jsx)(l.A, { ...f }),
    A = () => (0, k.jsx)(o.A, { ...f }),
    w = () => (0, k.jsx)(r.A, { ...f }),
    T = () => (0, k.jsx)(i.A, { ...f }),
    z = () => (0, k.jsx)(a.A, { ...f }),
    C = () => (0, k.jsx)(c.A, { ...f }),
    S = () => (0, k.jsx)(d.A, { ...f }),
    R = () => (0, k.jsx)(h.A, { ...f }),
    D = () => (0, k.jsx)(p.A, { ...f }),
    U = () => (0, k.jsx)(u.A, { ...f }),
    H = () => (0, k.jsx)(g.A, { ...f }),
    L = () => (0, k.jsx)(m.A, { ...f }),
    $ = () => (0, k.jsx)(j.A, { ...f }),
    M = () => (0, k.jsx)(x.A, { ...f }),
    P = () => (0, k.jsx)(v.A, { ...f }),
    I = () => (0, k.jsx)(y.A, { ...f }),
    V = () => (0, k.jsx)(b.A, { ...f });
  },
  38953(e, n, t) {
   t.d(n, { H: () => k });
   var s = t(28369),
    l = t(46447),
    o = t(13526),
    r = t(68148),
    i = t(9016),
    a = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    p = t(31186),
    u = t(65904),
    g = t.n(u),
    m = t(14881),
    j = t(46847),
    x = t(86070);
   const v = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: s, copyCode: l, defaultExpandedCode: r, designTokens: i }) => {
       const a = 'string' == typeof t ? t : s || '',
        c = 'string' == typeof t ? g().highlight(t, g().languages[e], e) : g().highlight(s || '', g().languages[e], e);
       return (0, x.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, x.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: i, children: (0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, x.jsx)(m.n, { children: (0, x.jsxs)(m.K, { label: 'Code', open: r, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === l && (0, x.jsx)(j.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: g, container: m = 'document', language: j, designTokens: k }) => {
       const f = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [A, w] = (0, h.useState)(N),
        [T, z] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [r.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const C = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === m ? (S = v) : 'document' === m ? (S = y) : 'surface' === m && (S = b),
        (0, x.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          f && (0, x.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, x.jsx)(S, { children: (0, x.jsx)(l.v$, { children: f }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!T);
             },
             'aria-expanded': T,
             'aria-controls': C,
             children: T ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, x.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !T,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(l.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  46847(e, n, t) {
   t.d(n, { $: () => s.$n });
   var s = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var s = t(30662),
    l = t(46447),
    o = t(13526),
    r = t(94988),
    i = t(30758),
    a = t(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: i, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      g = 'string' == typeof t ? (0, a.jsx)(r.oz, { components: { a: l.N_ }, children: t }) : t;
     return (0, a.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(l.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(l.fz, { children: e })] }), g] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => o });
   var s = t(86070),
    l = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  85731(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => y, frontMatter: () => g, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/stijl/typography/alignment/index","title":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","source":"@site/docs/richtlijnen/stijl/typography/6-alignment/index.mdx","sourceDirName":"richtlijnen/stijl/typography/6-alignment","slug":"/richtlijnen/stijl/typografie/uitlijning","permalink":"/richtlijnen/stijl/typografie/uitlijning","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/6-alignment/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Uitlijning","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Uitlijning","pagination_label":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","slug":"/richtlijnen/stijl/typografie/uitlijning","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Voorkeursinstellingen voor typografie","permalink":"/richtlijnen/stijl/typografie/voorkeur"},"next":{"title":"Introductie richtlijnen voor kleuren","permalink":"/richtlijnen/stijl/kleuren/"}}');
   var l = t(86070),
    o = t(18439),
    r = t(24703),
    i = t(56672),
    a = t(38953),
    c = t(56528);
   function d(e) {
    const n = { h1: 'h1', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'voorbeelden-voor-uitlijning', children: 'Voorbeelden voor uitlijning' }) }), '\n', (0, l.jsx)(c.$, { appearance: 'do', title: 'Gebruik uitlijning aan het begin van de regel.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)('div', { style: { textAlign: 'start' }, children: [(0, l.jsx)('p', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, l.jsx)('p', { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) }), '\n', (0, l.jsx)(c.$, { appearance: 'dont', title: 'Vermijd het gebruik van uitgevulde tekst (justified).', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsx)('p', { style: { textAlign: 'justify', hyphens: 'none' }, children: 'Wanneer je uitgelijnde tekst gebruikt in de browser, krijg je moeilijk te lezen teksten met onduidelijke witruimtes. Het is gewoon niet mogelijk om woordafbreking net zo mooi te doen als in print met een vaste breedte mogelijk is. Jammer genoeg is het dan zo dat er een hoop grote witruimtes ontstaan. Zeker met het gebruik van lange woorden zoals het langste woord: kindercarnavalsoptochtvoorbereidingswerkzaamheden.' }) }) }), '\n', (0, l.jsx)(c.$, { appearance: 'dont', title: 'Beperk het gebruik van gecentreerde tekst.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)('div', { style: { textAlign: 'center' }, children: [(0, l.jsx)('p', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, l.jsx)('p', { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, l.jsx)(n.p, { children: 'Tekst met standaard uitlijning is vrijwel altijd beter leesbaar dan uitgevulde regels (justified) doordat woordafbreking en tekstuitlijning in browsers niet op het niveau zitten van drukwerk.' }), '\n', (0, l.jsx)(n.p, { children: 'Beperk het gebruik van gecentreerde tekst tot een minimum. Hooguit voor een kort tekstje. Bij langere teksten moet iemands oog onlogische sprongen maken om bij het eerst woord van de volgende regel aan te komen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Uitlijning', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Uitlijning', pagination_label: 'Uitlijning', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', slug: '/richtlijnen/stijl/typografie/uitlijning', keywords: ['iconen'] },
    m = 'Uitlijning',
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...i.RM];
   function v(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, l.jsx)(r.o, { omitH1: !0, children: (0, l.jsx)(u, {}) }), '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(r.o, { omitH1: !0, children: (0, l.jsx)(h, {}) }), '\n', (0, l.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v(e);
   }
  },
 },
]);
