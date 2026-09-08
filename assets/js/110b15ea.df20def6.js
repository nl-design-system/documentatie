'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18227],
 {
  9298(e, n, o) {
   (o.r(n), o.d(n, { assets: () => x, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => s, toc: () => j }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/multistep/location/index","title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier","description":"Richtlijnen over positie van de formulier voortgang.","source":"@site/docs/richtlijnen/formulieren/multistep/2-location/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/2-location","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/2-location/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier","title_sm":"Plaatsing voortgang stappen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing voortgang stappen","pagination_label":"Plaatsing voortgang stappen","description":"Richtlijnen over positie van de formulier voortgang.","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Voortgang stappen tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen"},"next":{"title":"Consistente navigatie","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming"}}');
   var l = o(86070),
    t = o(18439),
    r = o(49539),
    a = o(80731),
    i = o(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Info boven het form element.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('h2', { children: 'Uw gegevens' }), (0, l.jsx)('p', { children: 'Stap 2 van 3' }), (0, l.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje, boven het formulier.', description: 'En deze tekst visueel op een andere regel plaatsen. ', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)('h2', { children: [(0, l.jsx)('span', { class: 'example-progress-indicator', children: 'Stap 2 van 3' }), 'Uw gegevens'] }), (0, l.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'dont', title: 'Info binnen het formulier.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('h2', { children: 'Uw gegevens' }), (0, l.jsxs)('form', { children: [(0, l.jsx)('h3', { children: 'Stap 2 van 3' }), '[... inhoud formulier \u2026]'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Plaats tekst en uitleg die hoort bij het formulier buiten het ', (0, l.jsx)(n.code, { children: '<form>' }), ' element. Dus zet informatie over de stappen ', (0, l.jsx)(n.strong, { children: 'boven' }), ' en niet ', (0, l.jsx)(n.strong, { children: 'binnen' }), ' het ', (0, l.jsx)(n.code, { children: '<form>' }), ' element. Dan is de kans dat gebruikers van ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze informatie missen het kleinst. Het waarom staat uitgelegd bij de richtlijn ', (0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen/', children: 'Koppel een description aan het formulierveld' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Het voordeel van een formulier in meer stappen is, dat je makkelijker uitgebreide informatie per stap kunt toevoegen ', (0, l.jsx)(n.strong, { children: 'boven' }), ' het formulier. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen bij een formulierveld.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier', title_sm: 'Plaatsing voortgang stappen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    x = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b();
   }
  },
  15175(e, n, o) {
   o.d(n, { M: () => c });
   var s = o(46447),
    l = o(16194),
    t = o(30758),
    r = o(51519);
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
   var i = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: p, type: m } = (0, t.useContext)(r.x),
     u = (0, t.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: l, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => a });
   var s = o(30758);
   const l = {},
    t = s.createContext(l);
   function r(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => t });
   var s = o(86070),
    l = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, o) {
   o.d(n, { $: () => p, x: () => d });
   var s = o(4077),
    l = o(58315),
    t = o(46447),
    r = o(13526),
    a = o(66116),
    i = o(30758),
    c = o(86070);
   const d = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: o, children: i, figure: p }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, c.jsx)(a.oz, { components: { a: t.N_ }, children: o }) : o;
     return (0, c.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(t.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  70348(e, n, o) {
   o.d(n, { K: () => c, n: () => i });
   var s = o(13526),
    l = o(30758),
    t = o(96345),
    r = o(37168),
    a = o(86070);
   const i = (0, l.forwardRef)(({ as: e, className: n, children: o, ...l }, t) => {
     const r = e || 'div',
      i = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: t, className: i, ...l, children: o });
    }),
    c = ({ className: e, classNamePanel: n, label: o, heading: l, headingLevel: i, headingApperance: c, ...d }) => {
     const p = (0, s.A)('utrecht-accordion__section', e),
      m = (0, s.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: p, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(t.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [l && (0, a.jsx)(r.D, { level: i, appearance: c, children: l }), o] })] }) }), (0, a.jsx)('div', { className: m, children: d.children })] });
    };
  },
  80731(e, n, o) {
   o.d(n, { H: () => f });
   var s = o(15175),
    l = o(46447),
    t = o(13526),
    r = o(68148),
    a = o(9016),
    i = o(69303),
    c = o(91635),
    d = o(30734),
    p = o(30758),
    m = o(31186),
    u = o(65904),
    h = o.n(u),
    g = o(70348),
    v = o(89974),
    x = o(86070);
   const j = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(l.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(l.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: s, copyCode: l, defaultExpandedCode: r, designTokens: a }) => {
       const i = 'string' == typeof o ? o : s || '',
        c = 'string' == typeof o ? h().highlight(o, h().languages[e], e) : h().highlight(s || '', h().languages[e], e);
       return (0, x.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, x.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, x.jsx)(g.n, { children: (0, x.jsxs)(g.K, { label: 'Code', open: r, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === l && (0, x.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: u = !0, children: h, container: g = 'document', language: v, designTokens: f }) => {
       const _ = 'function' == typeof h ? h() : h,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(k || _),
        [w, A] = (0, p.useState)(N),
        [C, S] = (0, p.useState)(o);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const z = (0, p.useId)();
       let P = p.Fragment;
       return (
        'paragraph' === g ? (P = j) : 'document' === g ? (P = b) : 'surface' === g && (P = y),
        (0, x.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          _ && (0, x.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(P, { children: (0, x.jsx)(l.v$, { children: _ }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(l.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, x.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(l.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   o.d(n, { $: () => s.$n });
   var s = o(50805);
  },
 },
]);
