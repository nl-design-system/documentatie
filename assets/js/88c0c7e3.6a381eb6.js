'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [78876],
 {
  14881(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var s = l(13526),
    o = l(30758),
    t = l(30662),
    a = l(37168),
    r = l(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, t) => {
     const a = e || 'div',
      i = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(a, { ref: t, className: i, ...o, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: i, headingApperance: c, ...d }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: h, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.rI, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [o && (0, r.jsx)(a.D, { level: i, appearance: c, children: o }), l] })] }) }), (0, r.jsx)('div', { className: u, children: d.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => a, x: () => r });
   var s = l(30758);
   const o = {},
    t = s.createContext(o);
   function a(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    o = l(16194),
    t = l(30758),
    a = l(56528);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: u } = (0, t.useContext)(a.x),
     p = (0, t.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => F, GP: () => w, KC: () => T, Nd: () => _, Rt: () => M, Vj: () => N, Wk: () => $, bz: () => z, cB: () => C, e5: () => H, hY: () => L, jK: () => I, jP: () => R, ob: () => P, rI: () => A, t4: () => D, vP: () => S, vg: () => G });
   var s = l(92081),
    o = l(90578),
    t = l(96345),
    a = l(64249),
    r = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    h = l(4077),
    u = l(58315),
    p = l(73563),
    m = l(35193),
    g = l(82999),
    v = l(13088),
    j = l(43864),
    x = l(24214),
    b = l(79532),
    k = l(60529),
    y = l(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(s.A, { ...f }),
    w = () => (0, y.jsx)(o.A, { ...f }),
    A = () => (0, y.jsx)(t.A, { ...f }),
    N = () => (0, y.jsx)(a.A, { ...f }),
    z = () => (0, y.jsx)(r.A, { ...f }),
    M = () => (0, y.jsx)(i.A, { ...f }),
    C = () => (0, y.jsx)(c.A, { ...f }),
    S = () => (0, y.jsx)(d.A, { ...f }),
    I = () => (0, y.jsx)(h.A, { ...f }),
    R = () => (0, y.jsx)(u.A, { ...f }),
    D = () => (0, y.jsx)(p.A, { ...f }),
    F = () => (0, y.jsx)(m.A, { ...f }),
    L = () => (0, y.jsx)(g.A, { ...f }),
    T = () => (0, y.jsx)(v.A, { ...f }),
    $ = () => (0, y.jsx)(j.A, { ...f }),
    H = () => (0, y.jsx)(x.A, { ...f }),
    P = () => (0, y.jsx)(b.A, { ...f }),
    G = () => (0, y.jsx)(k.A, { ...f });
  },
  38953(e, n, l) {
   l.d(n, { H: () => y });
   var s = l(28369),
    o = l(46447),
    t = l(13526),
    a = l(68148),
    r = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    u = l(31186),
    p = l(65904),
    m = l.n(p),
    g = l(14881),
    v = l(46847),
    j = l(86070);
   const x = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: o, defaultExpandedCode: a, designTokens: r }) => {
       const i = 'string' == typeof l ? l : s || '',
        c = 'string' == typeof l ? m().highlight(l, m().languages[e], e) : m().highlight(s || '', m().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: r, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === o && (0, j.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: g = 'document', language: v, designTokens: y }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(_ || f),
        [A, N] = (0, h.useState)(w),
        [z, M] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [a.A, r.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const C = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === g ? (S = x) : 'document' === g ? (S = b) : 'surface' === g && (S = k),
        (0, j.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, j.jsx)(S, { children: (0, j.jsx)(o.v$, { children: f }) }) }) }),
          p &&
           (0, j.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              M(!z);
             },
             'aria-expanded': z,
             'aria-controls': C,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, j.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
    t = l(13526),
    a = l(94988),
    r = l(30758),
    i = l(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: r, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      m = 'string' == typeof l ? (0, i.jsx)(a.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(o.fz, { children: e })] }), m] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => t });
   var s = l(86070),
    o = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  79462(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => k, frontMatter: () => g, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-size/index","title":"Maak aanklikbare formuliervelden groot genoeg","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","source":"@site/docs/richtlijnen/formulieren/visual-design/5-field-size/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/5-field-size","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/5-field-size/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak aanklikbare formuliervelden groot genoeg","title_sm":"Invoerveld goed aanklikbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed aanklikbaar","pagination_label":"Invoerveld goed aanklikbaar","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Focus goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar"},"next":{"title":"Fouten niet kleurafhankelijk","permalink":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur"}}');
   var o = l(86070),
    t = l(18439),
    a = l(56672),
    r = l(38953),
    i = l(56528);
   function c(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg.', description: 'Dit voorbeeld is het icoontje 50 bij 50 pixels.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, o.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '50', height: '50', focusable: 'false', children: (0, o.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.', description: 'Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: (0, o.jsxs)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', children: [(0, o.jsx)('span', { children: 'LinkedIn' }), (0, o.jsx)('br', {}), (0, o.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, o.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) })] }) }) }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Maak het aanklikbare te klein.', description: 'Dit voorbeeld is het icoontje 24 bij 24 pixels.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, o.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '24x24', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, o.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c();
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'maak-interactieve-elementen-groot-genoeg', children: 'Maak interactieve elementen groot genoeg' }) }), '\n', (0, o.jsx)(n.p, { children: 'Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is.' }), '\n', (0, o.jsx)(n.p, { children: 'Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels.' }), '\n', (0, o.jsxs)(n.p, { children: ['Adrian Roselli over doelgrootte in ', (0, o.jsx)(n.a, { href: 'https://adrianroselli.com/2019/06/target-size-and-2-5-5.html', children: (0, o.jsx)('span', { lang: 'en', children: 'Target Size and 2.5.5' }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), '\n', (0, o.jsxs)(n.p, { children: ['In ', (0, o.jsx)(n.a, { href: 'https://ishadeed.com/article/target-size', children: (0, o.jsx)('span', { lang: 'en', children: 'Designing better target sizes' }) }), ' legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels.'] }), '\n', (0, o.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, o.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s', children: (0, o.jsx)('span', { lang: 'en', children: 'Designing A11y with Material Design' }) }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.5.8/', children: 'Succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'Succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Maak aanklikbare formuliervelden groot genoeg', title_sm: 'Invoerveld goed aanklikbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed aanklikbaar', pagination_label: 'Invoerveld goed aanklikbaar', description: 'Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(a.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
 },
]);
