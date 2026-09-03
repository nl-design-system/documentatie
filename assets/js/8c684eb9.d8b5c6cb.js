'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44684],
 {
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    o = l(16194),
    t = l(30758),
    s = l(51519);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: m } = (0, t.useContext)(s.x),
     p = (0, t.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => a });
   var r = l(30758);
   const o = {},
    t = r.createContext(o);
   function s(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => t });
   var r = l(86070),
    o = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var r = l(4077),
    o = l(58315),
    t = l(46447),
    s = l(13526),
    a = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: i, figure: u }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, c.jsxs)(p, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(t.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var r = l(13526),
    o = l(30758),
    t = l(96345),
    s = l(37168),
    a = l(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, t) => {
     const s = e || 'div',
      i = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(s, { ref: t, className: i, ...o, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: i, headingApperance: c, ...d }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      m = (0, r.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(t.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(s.D, { level: i, appearance: c, children: o }), l] })] }) }), (0, a.jsx)('div', { className: m, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => f });
   var r = l(15175),
    o = l(46447),
    t = l(13526),
    s = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    p = l(65904),
    h = l.n(p),
    g = l(70348),
    v = l(89974),
    j = l(86070);
   const y = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: r, copyCode: o, defaultExpandedCode: s, designTokens: a }) => {
       const i = 'string' == typeof l ? l : r || '',
        c = 'string' == typeof l ? h().highlight(l, h().languages[e], e) : h().highlight(r || '', h().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: s, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === o && (0, j.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: g = 'document', language: v, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || k),
        [N, z] = (0, u.useState)(w),
        [A, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === g ? (D = y) : 'document' === g ? (D = x) : 'surface' === g && (D = b),
        (0, j.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          k && (0, j.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(D, { children: (0, j.jsx)(o.v$, { children: k }) }) }) }),
          p &&
           (0, j.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, j.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
  80859(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => r, toc: () => y }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/multistep/timing/index","title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","source":"@site/docs/richtlijnen/formulieren/multistep/5-timing/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/5-timing","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","permalink":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/5-timing/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden","title_sm":"Duidelijk aangeven verzenden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Duidelijk aangeven verzenden","pagination_label":"Duidelijk aangeven verzenden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"},"next":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"}}');
   var o = l(86070),
    t = l(18439),
    s = l(49539),
    a = l(80731),
    i = l(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Geef duidelijk aan dat een formulier verzonden gaat worden.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('button', { children: 'Versturen' }) }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Gebruik hetzelfde label voor verzenden als voor de navigatie in een meerstappenformulier.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('button', { type: 'submit', children: 'Volgende' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden' }) }), '\n', (0, o.jsx)(n.p, { children: 'Maak duidelijk aan de gebruiker wanneer het formulier echt gaat worden verzonden. Geef ook de gebruiker, als laatste stap, een samenvatting van wat is ingevuld met de mogelijkheid om te wijzigen.' }), '\n', (0, o.jsx)(n.p, { children: 'De tekst van de laatste submitbutton kan dan bijvoorbeeld \u201cVersturen\u201d zijn, afhankelijk van de inhoud van het formulier.' }), '\n', (0, o.jsx)(n.p, { children: 'Dit geeft de gebruiker zekerheid: \u201cik kan nog wat wijzigen\u201d of \u201cnu gaat het formulier echt verzonden worden\u201d.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.4/', children: 'Succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.6/', children: 'Succescriterium 3.3.6 Foutpreventie (alle)' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden', title_sm: 'Duidelijk aangeven verzenden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Duidelijk aangeven verzenden', pagination_label: 'Duidelijk aangeven verzenden', description: 'Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.', slug: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  89974(e, n, l) {
   l.d(n, { $: () => r.$n });
   var r = l(50805);
  },
 },
]);
