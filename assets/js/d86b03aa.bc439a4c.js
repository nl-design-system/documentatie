'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2990],
 {
  14881(e, n, o) {
   o.d(n, { K: () => i, n: () => a });
   var l = o(13526),
    t = o(30758),
    s = o(30662),
    r = o(37168),
    c = o(86070);
   const a = (0, t.forwardRef)(({ as: e, className: n, children: o, ...t }, s) => {
     const r = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: s, className: a, ...t, children: o });
    }),
    i = ({ className: e, classNamePanel: n, label: o, heading: t, headingLevel: a, headingApperance: i, ...d }) => {
     const m = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: m, ...d, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(s.rI, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [t && (0, c.jsx)(r.D, { level: a, appearance: i, children: t }), o] })] }) }), (0, c.jsx)('div', { className: h, children: d.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => c });
   var l = o(30758);
   const t = {},
    s = l.createContext(t);
   function r(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    t = o(16194),
    s = o(30758),
    r = o(56528);
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
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: m, type: h } = (0, s.useContext)(r.x),
     u = (0, s.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(t.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => P, GP: () => N, KC: () => L, Nd: () => k, Rt: () => z, Vj: () => w, Wk: () => M, bz: () => C, cB: () => S, e5: () => D, hY: () => I, jK: () => F, jP: () => B, ob: () => T, rI: () => A, t4: () => $, vP: () => R, vg: () => W });
   var l = o(92081),
    t = o(90578),
    s = o(96345),
    r = o(64249),
    c = o(4603),
    a = o(91525),
    i = o(23436),
    d = o(1375),
    m = o(4077),
    h = o(58315),
    u = o(73563),
    p = o(35193),
    j = o(82999),
    g = o(13088),
    x = o(43864),
    v = o(24214),
    y = o(79532),
    b = o(60529),
    f = o(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    N = () => (0, f.jsx)(t.A, { ..._ }),
    A = () => (0, f.jsx)(s.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    C = () => (0, f.jsx)(c.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    R = () => (0, f.jsx)(d.A, { ..._ }),
    F = () => (0, f.jsx)(m.A, { ..._ }),
    B = () => (0, f.jsx)(h.A, { ..._ }),
    $ = () => (0, f.jsx)(u.A, { ..._ }),
    P = () => (0, f.jsx)(p.A, { ..._ }),
    I = () => (0, f.jsx)(j.A, { ..._ }),
    L = () => (0, f.jsx)(g.A, { ..._ }),
    M = () => (0, f.jsx)(x.A, { ..._ }),
    D = () => (0, f.jsx)(v.A, { ..._ }),
    T = () => (0, f.jsx)(y.A, { ..._ }),
    W = () => (0, f.jsx)(b.A, { ..._ });
  },
  38953(e, n, o) {
   o.d(n, { H: () => f });
   var l = o(28369),
    t = o(46447),
    s = o(13526),
    r = o(68148),
    c = o(9016),
    a = o(69303),
    i = o(91635),
    d = o(30734),
    m = o(30758),
    h = o(31186),
    u = o(65904),
    p = o.n(u),
    j = o(14881),
    g = o(46847),
    x = o(86070);
   const v = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: t, defaultExpandedCode: r, designTokens: c }) => {
       const a = 'string' == typeof o ? o : l || '',
        i = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(l || '', p().languages[e], e);
       return (0, x.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, x.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: c, children: (0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: r, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === t && (0, x.jsx)(g.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: u = !0, children: p, container: j = 'document', language: g, designTokens: f }) => {
       const _ = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || _),
        [A, w] = (0, m.useState)(N),
        [C, z] = (0, m.useState)(o);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let R = m.Fragment;
       return (
        'paragraph' === j ? (R = v) : 'document' === j ? (R = y) : 'surface' === j && (R = b),
        (0, x.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          _ && (0, x.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(R, { children: (0, x.jsx)(t.v$, { children: _ }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(t.$n, {
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
          u &&
           (0, x.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, x.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  47515(e, n, o) {
   (o.r(n), o.d(n, { assets: () => x, contentTitle: () => g, default: () => b, frontMatter: () => j, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/questions/contact/index","title":"Biedt verschillende manieren om contact op te nemen","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/3-contact","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Biedt verschillende manieren om contact op te nemen","title_sm":"Bied contactmogelijkheden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bied contactmogelijkheden","pagination_label":"Bied contactmogelijkheden","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"},"next":{"title":"Stel een vraag \xe9\xe9n keer","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk"}}');
   var t = o(86070),
    s = o(18439),
    r = o(56672),
    c = o(38953),
    a = o(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Naast een telefoonnummer ook een e-mailadres uitvragen.', children: (0, t.jsx)(c.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon1', children: 'Uw telefoonnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon1', type: 'tel', name: 'telefoon', autoComplete: 'tel' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email1', type: 'email', name: 'email', autoComplete: 'email' }) })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Alleen een telefoonnummer uitvragen.', children: (0, t.jsx)(c.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon2', children: 'Uw telefoonnummer (verplicht)' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon2', type: 'tel', name: 'telefoon', autoComplete: 'tel', 'aria-required': 'true' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'biedt-verschillende-manieren-om-contact-op-te-nemen', children: 'Biedt verschillende manieren om contact op te nemen' }) }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer.' }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer. Gebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voeg een alternatief toe, bijvoorbeeld een e-mailadres. De blogpost ', (0, t.jsx)(n.a, { href: '/blog/meerdere-manieren-contact/', children: 'Ik wil je wat vragen, maar ik heb geen WhatsApp!' }), ' gaat hier uitgebreid op in.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'Biedt verschillende manieren om contact op te nemen', title_sm: 'Bied contactmogelijkheden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bied contactmogelijkheden', pagination_label: 'Bied contactmogelijkheden', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => i });
   var l = o(30662),
    t = o(46447),
    s = o(13526),
    r = o(94988),
    c = o(30758),
    a = o(86070);
   const i = (0, c.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: c, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, a.jsx)(r.oz, { components: { a: t.N_ }, children: o }) : o;
     return (0, a.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(l.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(t.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(l.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(t.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: e, type: m[n] }, children: c }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => s });
   var l = o(86070),
    t = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
