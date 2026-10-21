'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79837],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => a });
   var l = o(13526),
    s = o(30758),
    r = o(30662),
    t = o(37168),
    c = o(86070);
   const a = (0, s.forwardRef)(({ as: e, className: n, children: o, ...s }, r) => {
     const t = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(t, { ref: r, className: a, ...s, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: s, headingLevel: a, headingApperance: d, ...i }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      p = (0, l.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...i, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.rI, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [s && (0, c.jsx)(t.D, { level: a, appearance: d, children: s }), o] })] }) }), (0, c.jsx)('div', { className: p, children: i.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => t, x: () => c });
   var l = o(30758);
   const s = {},
    r = l.createContext(s);
   function t(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => d });
   var l = o(46447),
    s = o(16194),
    r = o(30758),
    t = o(56528);
   const c = {
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
   var a = o(86070);
   function d({ lineNumber: e, syntax: n, textContent: o, trim: d }) {
    let i = o;
    const { title: h, type: p } = (0, r.useContext)(t.x),
     u = (0, r.useId)();
    return (d && (i = i.trim()), (0, a.jsx)(s.f4, { theme: c, code: i, language: n || '', children: ({ style: n, tokens: o, getLineProps: s, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => M, GP: () => N, KC: () => $, Nd: () => _, Rt: () => S, Vj: () => C, Wk: () => L, bz: () => w, cB: () => z, e5: () => W, hY: () => T, jK: () => R, jP: () => F, ob: () => I, rI: () => A, t4: () => D, vP: () => P, vg: () => K });
   var l = o(92081),
    s = o(90578),
    r = o(96345),
    t = o(64249),
    c = o(4603),
    a = o(91525),
    d = o(23436),
    i = o(1375),
    h = o(4077),
    p = o(58315),
    u = o(73563),
    m = o(35193),
    g = o(82999),
    x = o(13088),
    j = o(43864),
    v = o(24214),
    y = o(79532),
    b = o(60529),
    k = o(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(l.A, { ...f }),
    N = () => (0, k.jsx)(s.A, { ...f }),
    A = () => (0, k.jsx)(r.A, { ...f }),
    C = () => (0, k.jsx)(t.A, { ...f }),
    w = () => (0, k.jsx)(c.A, { ...f }),
    S = () => (0, k.jsx)(a.A, { ...f }),
    z = () => (0, k.jsx)(d.A, { ...f }),
    P = () => (0, k.jsx)(i.A, { ...f }),
    R = () => (0, k.jsx)(h.A, { ...f }),
    F = () => (0, k.jsx)(p.A, { ...f }),
    D = () => (0, k.jsx)(u.A, { ...f }),
    M = () => (0, k.jsx)(m.A, { ...f }),
    T = () => (0, k.jsx)(g.A, { ...f }),
    $ = () => (0, k.jsx)(x.A, { ...f }),
    L = () => (0, k.jsx)(j.A, { ...f }),
    W = () => (0, k.jsx)(v.A, { ...f }),
    I = () => (0, k.jsx)(y.A, { ...f }),
    K = () => (0, k.jsx)(b.A, { ...f });
  },
  38953(e, n, o) {
   o.d(n, { H: () => k });
   var l = o(28369),
    s = o(46447),
    r = o(13526),
    t = o(68148),
    c = o(9016),
    a = o(69303),
    d = o(91635),
    i = o(30734),
    h = o(30758),
    p = o(31186),
    u = o(65904),
    m = o.n(u),
    g = o(14881),
    x = o(46847),
    j = o(86070);
   const v = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: s, defaultExpandedCode: t, designTokens: c }) => {
       const a = 'string' == typeof o ? o : l || '',
        d = 'string' == typeof o ? m().highlight(o, m().languages[e], e) : m().highlight(l || '', m().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: c, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: t, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: d } }) }), 'allow' === s && (0, j.jsx)(x.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: u = !0, children: m, container: g = 'document', language: x, designTokens: k }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [A, C] = (0, h.useState)(N),
        [w, S] = (0, h.useState)(o);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await i.Ay.format(N, { parser: x, plugins: [t.A, c.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         C(e);
        })();
       }, [N]);
       const z = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === g ? (P = v) : 'document' === g ? (P = y) : 'surface' === g && (P = b),
        (0, j.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, j.jsx)(P, { children: (0, j.jsx)(s.v$, { children: f }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!w);
             },
             'aria-expanded': w,
             'aria-controls': z,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !w,
            children: [
             (0, j.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
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
  46847(e, n, o) {
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => i, x: () => d });
   var l = o(30662),
    s = o(46447),
    r = o(13526),
    t = o(94988),
    c = o(30758),
    a = o(86070);
   const d = (0, c.createContext)({}),
    i = ({ title: e, appearance: n, description: o, children: c, figure: i }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = i ? 'figure' : 'div',
      u = i ? 'figcaption' : 'div',
      m = 'string' == typeof o ? (0, a.jsx)(t.oz, { components: { a: s.N_ }, children: o }) : o;
     return (0, a.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(l.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(l.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.fz, { children: e })] }), m] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => r });
   var l = o(86070),
    s = o(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  79852(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => x, default: () => b, frontMatter: () => g, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/colour-contrast/index","title":"Zorg voor een goed kleurcontrast van de placeholdertekst","description":"Richtlijnen voor voldoende kleurcontrast.","source":"@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/4-colour-contrast","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een goed kleurcontrast van de placeholdertekst","title_sm":"Placeholder kleurcontrast","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kleurcontrast","pagination_label":"Placeholder kleurcontrast","description":"Richtlijnen voor voldoende kleurcontrast.","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var s = o(86070),
    r = o(18439),
    t = o(56672),
    c = o(38953),
    a = o(56528);
   function d(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, s.jsx)(c.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'auto', children: 'Welk auto rij je?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { className: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' }) })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }) }), '\n', (0, s.jsx)(n.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, s.jsxs)(n.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, s.jsx)(n.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Zie ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst', title_sm: 'Placeholder kleurcontrast', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(i, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
