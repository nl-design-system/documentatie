'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4168],
 {
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    s = l(16194),
    r = l(30758),
    t = l(51519);
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
    const { title: m, type: u } = (0, r.useContext)(t.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
   var o = l(30758);
   const s = {},
    r = o.createContext(s);
   function t(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var o = l(86070),
    s = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var o = l(4077),
    s = l(58315),
    r = l(46447),
    t = l(13526),
    a = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: i, figure: m }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      p = m ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(r.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  65482(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => y }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/questions/why/index","title":"Leg uit waarom informatie nodig is","description":"Richtlijnen over uitleggen waarom informatie nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/1-why/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/1-why","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","permalink":"/richtlijnen/formulieren/vragen/leg-uit-waarom","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/1-why/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Leg uit waarom informatie nodig is","title_sm":"Waarom stel je de vraag","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Waarom stel je de vraag","pagination_label":"Waarom stel je de vraag","description":"Richtlijnen over uitleggen waarom informatie nodig is.","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"},"next":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"}}');
   var s = l(86070),
    r = l(18439),
    t = l(49539),
    a = l(80731),
    i = l(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Leg het doel uit.', description: 'Met uitleg weet de gebruiker waar die aan toe is.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'email', children: 'E-mailadres' }) }), (0, s.jsx)('p', { id: 'email-description', children: 'We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { 'aria-describedby': 'email-description', autoComplete: 'email', id: 'email', type: 'email' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'bsn', children: 'Burgerservicenummer' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'bsn', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'leg-uit-waarom-informatie-nodig-is', children: 'Leg uit waarom informatie nodig is' }) }), '\n', (0, s.jsx)(n.p, { children: 'Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven.' }), '\n', (0, s.jsx)(n.p, { children: 'Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Leg uit waarom informatie nodig is', title_sm: 'Waarom stel je de vraag', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waarom stel je de vraag', pagination_label: 'Waarom stel je de vraag', description: 'Richtlijnen over uitleggen waarom informatie nodig is.', slug: '/richtlijnen/formulieren/vragen/leg-uit-waarom', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var o = l(13526),
    s = l(30758),
    r = l(96345),
    t = l(37168),
    a = l(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, r) => {
     const t = e || 'div',
      i = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(t, { ref: r, className: i, ...s, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: i, headingApperance: c, ...d }) => {
     const m = (0, o.A)('utrecht-accordion__section', e),
      u = (0, o.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: m, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(r.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [s && (0, a.jsx)(t.D, { level: i, appearance: c, children: s }), l] })] }) }), (0, a.jsx)('div', { className: u, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => f });
   var o = l(15175),
    s = l(46447),
    r = l(13526),
    t = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(70348),
    v = l(89974),
    j = l(86070);
   const y = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: s, defaultExpandedCode: t, designTokens: a }) => {
       const i = 'string' == typeof l ? l : o || '',
        c = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(o || '', p().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: t, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === s && (0, j.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: v, designTokens: f }) => {
       const _ = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(k || _),
        [N, A] = (0, m.useState)(w),
        [C, z] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, m.useId)();
       let L = m.Fragment;
       return (
        'paragraph' === g ? (L = y) : 'document' === g ? (L = x) : 'surface' === g && (L = b),
        (0, j.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          _ && (0, j.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(L, { children: (0, j.jsx)(s.v$, { children: _ }) }) }) }),
          h &&
           (0, j.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, j.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, j.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
 },
]);
