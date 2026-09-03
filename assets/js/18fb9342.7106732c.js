'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1754],
 {
  15175(e, n, s) {
   s.d(n, { M: () => c });
   var t = s(46447),
    o = s(16194),
    l = s(30758),
    r = s(51519);
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
   var i = s(86070);
   function c({ lineNumber: e, syntax: n, textContent: s, trim: c }) {
    let d = s;
    const { title: p, type: u } = (0, l.useContext)(r.x),
     m = (0, l.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: o, getTokenProps: l }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => a });
   var t = s(30758);
   const o = {},
    l = t.createContext(o);
   function r(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => l });
   var t = s(86070),
    o = s(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, s) {
   s.d(n, { $: () => p, x: () => d });
   var t = s(4077),
    o = s(58315),
    l = s(46447),
    r = s(13526),
    a = s(66116),
    i = s(30758),
    c = s(86070);
   const d = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: s, children: i, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div',
      g = 'string' == typeof s ? (0, c.jsx)(a.oz, { components: { a: l.N_ }, children: s }) : s;
     return (0, c.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(l.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(l.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(l.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(l.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  70348(e, n, s) {
   s.d(n, { K: () => c, n: () => i });
   var t = s(13526),
    o = s(30758),
    l = s(96345),
    r = s(37168),
    a = s(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: s, ...o }, l) => {
     const r = e || 'div',
      i = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: l, className: i, ...o, children: s });
    }),
    c = ({ className: e, classNamePanel: n, label: s, heading: o, headingLevel: i, headingApperance: c, ...d }) => {
     const p = (0, t.A)('utrecht-accordion__section', e),
      u = (0, t.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: p, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(l.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(r.D, { level: i, appearance: c, children: o }), s] })] }) }), (0, a.jsx)('div', { className: u, children: d.children })] });
    };
  },
  78248(e, n, s) {
   (s.r(n), s.d(n, { assets: () => b, contentTitle: () => v, default: () => j, frontMatter: () => g, metadata: () => t, toc: () => x }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/multistep/consistency/index","title":"Zorg voor een consistente navigatie en benaming van links en buttons","description":"Richtlijnen over consistente benaming van navigatie, links en buttons.","source":"@site/docs/richtlijnen/formulieren/multistep/3-consistency/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/3-consistency","slug":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/3-consistency/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een consistente navigatie en benaming van links en buttons","title_sm":"Consistente navigatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Consistente navigatie","pagination_label":"Consistente navigatie","description":"Richtlijnen over consistente benaming van navigatie, links en buttons.","slug":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing voortgang stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang"},"next":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"}}');
   var o = s(86070),
    l = s(18439),
    r = s(49539),
    a = s(80731),
    i = s(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Benoem de stappen consistent.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://example.com/stap-1', children: 'Vorige stap' }) }), (0, o.jsx)('p', { children: '[...]' }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Volgende stap' }) })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Verschillen tussen hoe de vorige en volgende stap worden benoemd.', description: 'Gebruik ofwel \u2018terug\u2019/\u2018verder\u2019 ofwel \u2018Vorige stap\u2019/\u2018Volgende stap\u2019.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://example.com/stap-1', children: 'Terug' }) }), (0, o.jsx)('p', { children: '[...]' }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Volgende stap' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }) }), '\n', (0, o.jsx)(n.p, { children: 'Geef op een consistente plek, met een consistente benaming, aan hoe de gebruiker navigeert binnen de stappen, bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: '"Vorige stap", boven het formulier' }), '\n', (0, o.jsx)(n.li, { children: '"Volgende stap" (of als laatste stap: "Versturen") als submitbutton' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Zorg er dus voor dat links en buttons binnen de formulieren op dezelfde plaats staan en dat ze ook een consistente naam hebben. Door consistentie heeft de gebruiker minder moeite de navigatie te begrijpen en weet ook beter wat er gaat komen na een keuze.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.2.4/', children: 'Succescriterium 3.2.4 Consistente identificatie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Zorg voor een consistente navigatie en benaming van links en buttons', title_sm: 'Consistente navigatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Consistente navigatie', pagination_label: 'Consistente navigatie', description: 'Richtlijnen over consistente benaming van navigatie, links en buttons.', slug: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
  80731(e, n, s) {
   s.d(n, { H: () => f });
   var t = s(15175),
    o = s(46447),
    l = s(13526),
    r = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    p = s(30758),
    u = s(31186),
    m = s(65904),
    h = s.n(m),
    g = s(70348),
    v = s(89974),
    b = s(86070);
   const x = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: t, copyCode: o, defaultExpandedCode: r, designTokens: a }) => {
       const i = 'string' == typeof s ? s : t || '',
        c = 'string' == typeof s ? h().highlight(s, h().languages[e], e) : h().highlight(t || '', h().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, b.jsx)(g.n, { children: (0, b.jsxs)(g.K, { label: 'Code', open: r, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === o && (0, b.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: m = !0, children: h, container: g = 'document', language: v, designTokens: f }) => {
       const _ = 'function' == typeof h ? h() : h,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || _),
        [w, C] = (0, p.useState)(N),
        [A, z] = (0, p.useState)(s);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         C(e);
        })();
       }, [N]);
       const S = (0, p.useId)();
       let R = p.Fragment;
       return (
        'paragraph' === g ? (R = x) : 'document' === g ? (R = y) : 'surface' === g && (R = j),
        (0, b.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          _ && (0, b.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(R, { children: (0, b.jsx)(o.v$, { children: _ }) }) }) }),
          m &&
           (0, b.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(o.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, b.jsxs)('div', {
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, b.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(o.$n, {
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
  89974(e, n, s) {
   s.d(n, { $: () => t.$n });
   var t = s(50805);
  },
 },
]);
