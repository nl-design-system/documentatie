'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79837],
 {
  15175(e, n, o) {
   o.d(n, { M: () => d });
   var l = o(46447),
    r = o(16194),
    s = o(30758),
    t = o(51519);
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
    const { title: p, type: h } = (0, s.useContext)(t.x),
     u = (0, s.useId)();
    return (d && (i = i.trim()), (0, a.jsx)(r.f4, { theme: c, code: i, language: n || '', children: ({ style: n, tokens: o, getLineProps: r, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...r({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => t, x: () => c });
   var l = o(30758);
   const r = {},
    s = l.createContext(r);
   function t(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => s });
   var l = o(86070),
    r = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  51519(e, n, o) {
   o.d(n, { $: () => p, x: () => i });
   var l = o(4077),
    r = o(58315),
    s = o(46447),
    t = o(13526),
    c = o(66116),
    a = o(30758),
    d = o(86070);
   const i = (0, a.createContext)({}),
    p = ({ title: e, appearance: n, description: o, children: a, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, d.jsx)(c.oz, { components: { a: s.N_ }, children: o }) : o;
     return (0, d.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(s.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(s.fz, { children: e })] }), g] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  70348(e, n, o) {
   o.d(n, { K: () => d, n: () => a });
   var l = o(13526),
    r = o(30758),
    s = o(96345),
    t = o(37168),
    c = o(86070);
   const a = (0, r.forwardRef)(({ as: e, className: n, children: o, ...r }, s) => {
     const t = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(t, { ref: s, className: a, ...r, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: r, headingLevel: a, headingApperance: d, ...i }) => {
     const p = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: p, ...i, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(s.A, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [r && (0, c.jsx)(t.D, { level: a, appearance: d, children: r }), o] })] }) }), (0, c.jsx)('div', { className: h, children: i.children })] });
    };
  },
  80731(e, n, o) {
   o.d(n, { H: () => k });
   var l = o(15175),
    r = o(46447),
    s = o(13526),
    t = o(68148),
    c = o(9016),
    a = o(69303),
    d = o(91635),
    i = o(30734),
    p = o(30758),
    h = o(31186),
    u = o(65904),
    m = o.n(u),
    g = o(70348),
    v = o(89974),
    y = o(86070);
   const x = ({ children: e }) => (0, y.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, y.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, y.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, y.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, y.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, y.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: r, defaultExpandedCode: t, designTokens: c }) => {
       const a = 'string' == typeof o ? o : l || '',
        d = 'string' == typeof o ? m().highlight(o, m().languages[e], e) : m().highlight(l || '', m().languages[e], e);
       return (0, y.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, y.jsx)('div', { className: 'voorbeeld-theme', style: c, children: (0, y.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, y.jsx)(g.n, { children: (0, y.jsxs)(g.K, { label: 'Code', open: t, children: [(0, y.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, y.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: d } }) }), 'allow' === r && (0, y.jsx)(v.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: u = !0, children: m, container: g = 'document', language: v, designTokens: k }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || f),
        [C, w] = (0, p.useState)(N),
        [A, S] = (0, p.useState)(o);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await i.Ay.format(N, { parser: v, plugins: [t.A, c.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, p.useId)();
       let R = p.Fragment;
       return (
        'paragraph' === g ? (R = x) : 'document' === g ? (R = j) : 'surface' === g && (R = b),
        (0, y.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, y.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, y.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, y.jsx)(R, { children: (0, y.jsx)(r.v$, { children: f }) }) }) }),
          u &&
           (0, y.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, y.jsx)(r.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!A);
             },
             'aria-expanded': A,
             'aria-controls': z,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, y.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !A,
            children: [
             (0, y.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: C, trim: !0 }),
             n &&
              (0, y.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, y.jsx)(r.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
  94446(e, n, o) {
   (o.r(n), o.d(n, { assets: () => y, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => l, toc: () => x }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/colour-contrast/index","title":"Zorg voor een goed kleurcontrast van de placeholdertekst","description":"Richtlijnen voor voldoende kleurcontrast.","source":"@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/4-colour-contrast","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een goed kleurcontrast van de placeholdertekst","title_sm":"Placeholder kleurcontrast","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kleurcontrast","pagination_label":"Placeholder kleurcontrast","description":"Richtlijnen voor voldoende kleurcontrast.","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var r = o(86070),
    s = o(18439),
    t = o(49539),
    c = o(80731),
    a = o(51519);
   function d(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'auto', children: 'Welk auto rij je?' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { className: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' }) })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }) }), '\n', (0, r.jsx)(n.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, r.jsxs)(n.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, r.jsx)(n.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Zie ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst', title_sm: 'Placeholder kleurcontrast', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    y = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function j(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(i, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j();
   }
  },
 },
]);
