'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2990],
 {
  15175(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    t = o(16194),
    s = o(30758),
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
    const { title: m, type: h } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(t.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
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
  49539(e, n, o) {
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
  51519(e, n, o) {
   o.d(n, { $: () => m, x: () => d });
   var l = o(4077),
    t = o(58315),
    s = o(46447),
    r = o(13526),
    c = o(66116),
    a = o(30758),
    i = o(86070);
   const d = (0, a.createContext)({}),
    m = ({ title: e, appearance: n, description: o, children: a, figure: m }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      u = m ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, i.jsx)(c.oz, { components: { a: s.N_ }, children: o }) : o;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  57715(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => l, toc: () => x }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/questions/contact/index","title":"Biedt verschillende manieren om contact op te nemen","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/3-contact","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Biedt verschillende manieren om contact op te nemen","title_sm":"Bied contactmogelijkheden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bied contactmogelijkheden","pagination_label":"Bied contactmogelijkheden","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"},"next":{"title":"Stel een vraag \xe9\xe9n keer","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk"}}');
   var t = o(86070),
    s = o(18439),
    r = o(49539),
    c = o(80731),
    a = o(51519);
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
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Biedt verschillende manieren om contact op te nemen', title_sm: 'Bied contactmogelijkheden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bied contactmogelijkheden', pagination_label: 'Bied contactmogelijkheden', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  70348(e, n, o) {
   o.d(n, { K: () => i, n: () => a });
   var l = o(13526),
    t = o(30758),
    s = o(96345),
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
     return (0, c.jsxs)('details', { className: m, ...d, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(s.A, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [t && (0, c.jsx)(r.D, { level: a, appearance: i, children: t }), o] })] }) }), (0, c.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, o) {
   o.d(n, { H: () => f });
   var l = o(15175),
    t = o(46447),
    s = o(13526),
    r = o(68148),
    c = o(9016),
    a = o(69303),
    i = o(91635),
    d = o(30734),
    m = o(30758),
    h = o(31186),
    p = o(65904),
    u = o.n(p),
    g = o(70348),
    v = o(89974),
    j = o(86070);
   const x = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: t, defaultExpandedCode: r, designTokens: c }) => {
       const a = 'string' == typeof o ? o : l || '',
        i = 'string' == typeof o ? u().highlight(o, u().languages[e], e) : u().highlight(l || '', u().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: c, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: r, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === t && (0, j.jsx)(v.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: p = !0, children: u, container: g = 'document', language: v, designTokens: f }) => {
       const _ = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || _),
        [w, A] = (0, m.useState)(N),
        [C, z] = (0, m.useState)(o);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [r.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let R = m.Fragment;
       return (
        'paragraph' === g ? (R = x) : 'document' === g ? (R = y) : 'surface' === g && (R = b),
        (0, j.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          _ && (0, j.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(R, { children: (0, j.jsx)(t.v$, { children: _ }) }) }) }),
          p &&
           (0, j.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(t.$n, {
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
           (0, j.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, j.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
 },
]);
