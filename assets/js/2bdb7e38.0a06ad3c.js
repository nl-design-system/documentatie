'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33600],
 {
  15175(e, n, t) {
   t.d(n, { M: () => i });
   var l = t(46447),
    o = t(16194),
    s = t(30758),
    r = t(51519);
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
   var c = t(86070);
   function i({ lineNumber: e, syntax: n, textContent: t, trim: i }) {
    let d = t;
    const { title: u, type: h } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
   var l = t(30758);
   const o = {},
    s = l.createContext(o);
   function r(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  47949(e, n, t) {
   (t.r(n), t.d(n, { assets: () => b, contentTitle: () => v, default: () => j, frontMatter: () => g, metadata: () => l, toc: () => x }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/text-contrast/index","title":"Geef tekst voldoende kleurcontrast","description":"Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/2-text-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/2-text-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/2-text-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef tekst voldoende kleurcontrast","title_sm":"Tekst goed zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Tekst goed zichtbaar","pagination_label":"Tekst goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Invoerveld goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar"},"next":{"title":"Placeholder goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar"}}');
   var o = t(86070),
    s = t(18439),
    r = t(49539),
    a = t(80731),
    c = t(51519);
   t(46447);
   function i(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Maak het label goed leesbaar door voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, o.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-form-label-color': '#006FA1' }, children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { type: 'text', id: 'naam1', autoComplete: 'name' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Maak het label slecht leesbaar door onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 2.62:1](/contrast/?color=%23999999&background-color=%23f8f5f1)', children: (0, o.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-form-label-color': '#999999' }, children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { 'data-test-axe': 'false', htmlFor: 'naam2', children: 'Uw naam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { type: 'text', id: 'naam2', autoComplete: 'name' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4,5:1 of hoger zijn.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Geef tekst voldoende kleurcontrast', title_sm: 'Tekst goed zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
  49539(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => s });
   var l = t(86070),
    o = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var l = t(4077),
    o = t(58315),
    s = t(46447),
    r = t(13526),
    a = t(66116),
    c = t(30758),
    i = t(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: c, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      g = 'string' == typeof t ? (0, i.jsx)(a.oz, { components: { a: s.N_ }, children: t }) : t;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  70348(e, n, t) {
   t.d(n, { K: () => i, n: () => c });
   var l = t(13526),
    o = t(30758),
    s = t(96345),
    r = t(37168),
    a = t(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: t, ...o }, s) => {
     const r = e || 'div',
      c = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: s, className: c, ...o, children: t });
    }),
    i = ({ className: e, classNamePanel: n, label: t, heading: o, headingLevel: c, headingApperance: i, ...d }) => {
     const u = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(s.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(r.D, { level: c, appearance: i, children: o }), t] })] }) }), (0, a.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, t) {
   t.d(n, { H: () => f });
   var l = t(15175),
    o = t(46447),
    s = t(13526),
    r = t(68148),
    a = t(9016),
    c = t(69303),
    i = t(91635),
    d = t(30734),
    u = t(30758),
    h = t(31186),
    p = t(65904),
    m = t.n(p),
    g = t(70348),
    v = t(89974),
    b = t(86070);
   const x = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: l, copyCode: o, defaultExpandedCode: r, designTokens: a }) => {
       const c = 'string' == typeof t ? t : l || '',
        i = 'string' == typeof t ? m().highlight(t, m().languages[e], e) : m().highlight(l || '', m().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, b.jsx)(g.n, { children: (0, b.jsxs)(g.K, { label: 'Code', open: r, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === o && (0, b.jsx)(v.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: m, container: g = 'document', language: v, designTokens: f }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || k),
        [w, z] = (0, u.useState)(N),
        [A, C] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let T = u.Fragment;
       return (
        'paragraph' === g ? (T = x) : 'document' === g ? (T = y) : 'surface' === g && (T = j),
        (0, b.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(T, { children: (0, b.jsx)(o.v$, { children: k }) }) }) }),
          p &&
           (0, b.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, b.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(o.$n, {
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
  89974(e, n, t) {
   t.d(n, { $: () => l.$n });
   var l = t(50805);
  },
 },
]);
