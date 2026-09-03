'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74865],
 {
  12417(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => g, default: () => b, frontMatter: () => j, metadata: () => t, toc: () => y }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/error/description/index","title":"Schrijf een foutmelding uit in tekst","description":"Richtlijnen voor uitschrijven van een foutmelding in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/2-description/index.mdx","sourceDirName":"richtlijnen/formulieren/error/2-description","slug":"/richtlijnen/formulieren/foutmeldingen/beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/2-description/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een foutmelding uit in tekst","title_sm":"Fouten beschrijven","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Fouten beschrijven","pagination_label":"Fouten beschrijven","description":"Richtlijnen voor uitschrijven van een foutmelding in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/beschrijven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten controleren","permalink":"/richtlijnen/formulieren/foutmeldingen/controleren"},"next":{"title":"Duidelijke foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk"}}');
   var s = l(86070),
    o = l(18439),
    r = l(49539),
    i = l(80731),
    c = l(51519);
   function a(e) {
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(c.$, { appearance: 'do', title: 'Naast een visuele indicatie ook een foutmelding in tekst tonen.', description: 'In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'passport-validity-1', children: 'Geldig tot' }) }), (0, s.jsx)('p', { id: 'passport-validity-date-1', children: 'Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'passport-validity-1', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-1', 'aria-describedby': 'description-passport-validity-1' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Alleen een visuele indicatie geven dat er iets fout is gegaan.', description: 'In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: 'Schrijf een foutmelding uit in tekst' }) }), '\n', (0, s.jsx)(n.p, { children: 'Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal.' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt zeker kleur en icoontjes gebruiken, maar niet als ', (0, s.jsx)(n.strong, { children: 'enige' }), ' foutindicatie.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.4.1/', children: 'Succescriterium 1.4.1 Gebruik van kleur' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'Schrijf een foutmelding uit in tekst', title_sm: 'Fouten beschrijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    y = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  15175(e, n, l) {
   l.d(n, { M: () => a });
   var t = l(46447),
    s = l(16194),
    o = l(30758),
    r = l(51519);
   const i = {
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
   var c = l(86070);
   function a({ lineNumber: e, syntax: n, textContent: l, trim: a }) {
    let d = l;
    const { title: u, type: p } = (0, o.useContext)(r.x),
     h = (0, o.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => i });
   var t = l(30758);
   const s = {},
    o = t.createContext(s);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => o });
   var t = l(86070),
    s = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var t = l(4077),
    s = l(58315),
    o = l(46447),
    r = l(13526),
    i = l(66116),
    c = l(30758),
    a = l(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: c, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      j = 'string' == typeof l ? (0, a.jsx)(i.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, a.jsxs)(h, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(o.fz, { children: e })] }), j] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => a, n: () => c });
   var t = l(13526),
    s = l(30758),
    o = l(96345),
    r = l(37168),
    i = l(86070);
   const c = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, o) => {
     const r = e || 'div',
      c = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: o, className: c, ...s, children: l });
    }),
    a = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: c, headingApperance: a, ...d }) => {
     const u = (0, t.A)('utrecht-accordion__section', e),
      p = (0, t.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(o.A, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [s && (0, i.jsx)(r.D, { level: c, appearance: a, children: s }), l] })] }) }), (0, i.jsx)('div', { className: p, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => f });
   var t = l(15175),
    s = l(46447),
    o = l(13526),
    r = l(68148),
    i = l(9016),
    c = l(69303),
    a = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    h = l(65904),
    m = l.n(h),
    j = l(70348),
    g = l(89974),
    v = l(86070);
   const y = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: t, copyCode: s, defaultExpandedCode: r, designTokens: i }) => {
       const c = 'string' == typeof l ? l : t || '',
        a = 'string' == typeof l ? m().highlight(l, m().languages[e], e) : m().highlight(t || '', m().languages[e], e);
       return (0, v.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, v.jsx)('div', { className: 'voorbeeld-theme', style: i, children: (0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, v.jsx)(j.n, { children: (0, v.jsxs)(j.K, { label: 'Code', open: r, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }), 'allow' === s && (0, v.jsx)(g.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: m, container: j = 'document', language: g, designTokens: f }) => {
       const _ = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(k || _),
        [A, w] = (0, u.useState)(N),
        [C, S] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, i.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const F = (0, u.useId)();
       let z = u.Fragment;
       return (
        'paragraph' === j ? (z = y) : 'document' === j ? (z = x) : 'surface' === j && (z = b),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(z, { children: (0, v.jsx)(s.v$, { children: _ }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': F,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: F,
            hidden: !C,
            children: [
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, l) {
   l.d(n, { $: () => t.$n });
   var t = l(50805);
  },
 },
]);
