'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30023],
 {
  15175(e, n, o) {
   o.d(n, { M: () => i });
   var t = o(46447),
    s = o(16194),
    l = o(30758),
    r = o(51519);
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
    const { title: u, type: p } = (0, l.useContext)(r.x),
     b = (0, l.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(s.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: s, getTokenProps: l }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': b, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => c });
   var t = o(30758);
   const s = {},
    l = t.createContext(s);
   function r(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => l });
   var t = o(86070),
    s = o(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var t = o(4077),
    s = o(58315),
    l = o(46447),
    r = o(13526),
    c = o(66116),
    a = o(30758),
    i = o(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      b = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      h = 'string' == typeof o ? (0, i.jsx)(c.oz, { components: { a: l.N_ }, children: o }) : o;
     return (0, i.jsxs)(b, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(l.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(l.fz, { children: e })] }), h] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  60702(e, n, o) {
   (o.r(n), o.d(n, { assets: () => v, contentTitle: () => g, default: () => j, frontMatter: () => h, metadata: () => t, toc: () => y }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/button/keyboard/index","title":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","source":"@site/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","sourceDirName":"richtlijnen/formulieren/button/1-keyboard","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","permalink":"/richtlijnen/formulieren/buttons/toetsenbordbediening","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Toetsenbordbediening van een button","title_sm":"Toetsenbordbediening","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toetsenbordbediening","pagination_label":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Buttons in een formulier","permalink":"/richtlijnen/formulieren/buttons"},"next":{"title":"Verstuur niet automatisch","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen"}}');
   var s = o(86070),
    l = o(18439),
    r = o(49539),
    c = o(80731),
    a = o(51519);
   function i(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.', children: (0, s.jsx)(c.H, { language: 'html', children: () => (0, s.jsx)('button', { className: 'doFancyStuff button', children: 'Geef je op' }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Een div gebruiken die alleen met de muis aanklikbaar is.', children: (0, s.jsx)(c.H, { language: 'html', children: () => (0, s.jsx)('div', { className: 'doFancyStuff button', children: 'Geef je op' }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'toetsenbordbediening-van-een-button', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, s.jsx)(n.p, { children: 'Veel gebruikers navigeren door een formulier met hun Tab-toets om van interactief element naar interactief element te springen, zoals buttons, links, invoervelden, radio buttons en checkboxes.' }), '\n', (0, s.jsx)(n.p, { children: 'Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button.' }), '\n', (0, s.jsx)(n.p, { children: 'Zorg ervoor dat de volgorde waarin interactieve elementen focus krijgen logisch is en dat er geen onverwachte veranderingen plaatsvinden als een bezoeker de button activeert.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function b(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b(e);
   }
   const h = { title: 'Toetsenbordbediening van een button', title_sm: 'Toetsenbordbediening', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  70348(e, n, o) {
   o.d(n, { K: () => i, n: () => a });
   var t = o(13526),
    s = o(30758),
    l = o(96345),
    r = o(37168),
    c = o(86070);
   const a = (0, s.forwardRef)(({ as: e, className: n, children: o, ...s }, l) => {
     const r = e || 'div',
      a = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: l, className: a, ...s, children: o });
    }),
    i = ({ className: e, classNamePanel: n, label: o, heading: s, headingLevel: a, headingApperance: i, ...d }) => {
     const u = (0, t.A)('utrecht-accordion__section', e),
      p = (0, t.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: u, ...d, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(l.A, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [s && (0, c.jsx)(r.D, { level: a, appearance: i, children: s }), o] })] }) }), (0, c.jsx)('div', { className: p, children: d.children })] });
    };
  },
  80731(e, n, o) {
   o.d(n, { H: () => f });
   var t = o(15175),
    s = o(46447),
    l = o(13526),
    r = o(68148),
    c = o(9016),
    a = o(69303),
    i = o(91635),
    d = o(30734),
    u = o(30758),
    p = o(31186),
    b = o(65904),
    m = o.n(b),
    h = o(70348),
    g = o(89974),
    v = o(86070);
   const y = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: t, copyCode: s, defaultExpandedCode: r, designTokens: c }) => {
       const a = 'string' == typeof o ? o : t || '',
        i = 'string' == typeof o ? m().highlight(o, m().languages[e], e) : m().highlight(t || '', m().languages[e], e);
       return (0, v.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [(0, v.jsx)('div', { className: 'voorbeeld-theme', style: c, children: (0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, v.jsx)(h.n, { children: (0, v.jsxs)(h.K, { label: 'Code', open: r, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === s && (0, v.jsx)(g.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: m, container: h = 'document', language: g, designTokens: f }) => {
       const _ = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(k || _),
        [w, A] = (0, u.useState)(N),
        [C, z] = (0, u.useState)(o);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let T = u.Fragment;
       return (
        'paragraph' === h ? (T = y) : 'document' === h ? (T = x) : 'surface' === h && (T = j),
        (0, v.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(T, { children: (0, v.jsx)(s.v$, { children: _ }) }) }) }),
          b &&
           (0, v.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          b &&
           (0, v.jsxs)('div', {
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: w, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, o) {
   o.d(n, { $: () => t.$n });
   var t = o(50805);
  },
 },
]);
