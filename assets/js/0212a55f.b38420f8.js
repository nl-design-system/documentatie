'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [47675],
 {
  15175(e, n, t) {
   t.d(n, { M: () => c });
   var r = t(46447),
    l = t(16194),
    o = t(30758),
    s = t(51519);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: u, type: h } = (0, o.useContext)(s.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => i });
   var r = t(30758);
   const l = {},
    o = r.createContext(l);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => o });
   var r = t(86070),
    l = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var r = t(4077),
    l = t(58315),
    o = t(46447),
    s = t(13526),
    i = t(66116),
    a = t(30758),
    c = t(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div',
      v = 'string' == typeof t ? (0, c.jsx)(i.oz, { components: { a: o.N_ }, children: t }) : t;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), v] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  70348(e, n, t) {
   t.d(n, { K: () => c, n: () => a });
   var r = t(13526),
    l = t(30758),
    o = t(96345),
    s = t(37168),
    i = t(86070);
   const a = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, o) => {
     const s = e || 'div',
      a = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(s, { ref: o, className: a, ...l, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: a, headingApperance: c, ...d }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      h = (0, r.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(o.A, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [l && (0, i.jsx)(s.D, { level: a, appearance: c, children: l }), t] })] }) }), (0, i.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, t) {
   t.d(n, { H: () => f });
   var r = t(15175),
    l = t(46447),
    o = t(13526),
    s = t(68148),
    i = t(9016),
    a = t(69303),
    c = t(91635),
    d = t(30734),
    u = t(30758),
    h = t(31186),
    m = t(65904),
    p = t.n(m),
    v = t(70348),
    j = t(89974),
    b = t(86070);
   const g = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: r, copyCode: l, defaultExpandedCode: s, designTokens: i }) => {
       const a = 'string' == typeof t ? t : r || '',
        c = 'string' == typeof t ? p().highlight(t, p().languages[e], e) : p().highlight(r || '', p().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme', style: i, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, b.jsx)(v.n, { children: (0, b.jsxs)(v.K, { label: 'Code', open: s, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === l && (0, b.jsx)(j.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: p, container: v = 'document', language: j, designTokens: f }) => {
       const k = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || k),
        [N, z] = (0, u.useState)(w),
        [A, C] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let R = u.Fragment;
       return (
        'paragraph' === v ? (R = g) : 'document' === v ? (R = x) : 'surface' === v && (R = y),
        (0, b.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(R, { children: (0, b.jsx)(l.v$, { children: k }) }) }) }),
          m &&
           (0, b.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, b.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, b.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(l.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, t) {
   t.d(n, { $: () => r.$n });
   var r = t(50805);
  },
  95701(e, n, t) {
   (t.r(n), t.d(n, { assets: () => b, contentTitle: () => j, default: () => y, frontMatter: () => v, metadata: () => r, toc: () => g }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/button/submit/index","title":"Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld","description":"Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/button/2-submit/index.mdx","sourceDirName":"richtlijnen/formulieren/button/2-submit","slug":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/2-submit/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld","title_sm":"Verstuur niet automatisch","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Verstuur niet automatisch","pagination_label":"Verstuur niet automatisch","description":"Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.","slug":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toetsenbordbediening van een button","permalink":"/richtlijnen/formulieren/buttons/toetsenbordbediening"},"next":{"title":"Plaatsing button","permalink":"/richtlijnen/formulieren/buttons/plaatsing"}}');
   var l = t(86070),
    o = t(18439),
    s = t(49539),
    i = t(80731),
    a = t(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Het formulier wordt verzonden na het kiezen van de submitbutton.', children: (0, l.jsx)(i.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('form', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'kleur1', children: 'Kies een kleur' }) }), (0, l.jsx)('p', { children: (0, l.jsxs)('select', { id: 'kleur1', children: [(0, l.jsx)('option', { name: 'groen', children: 'Groen' }), (0, l.jsx)('option', { name: 'blauw', children: 'Blauw' }), (0, l.jsx)('option', { name: 'rood', children: 'Rood' })] }) }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Verstuur' }) })] }) }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Het formulier wordt automatisch verzonden na het kiezen van van een kleur.', description: 'In dit voorbeeld ontbreekt de submitbutton en wordt het formulier direct verstuurd na het kiezen van een kleur', children: (0, l.jsx)(i.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('form', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'kleur2', children: 'Kies een kleur' }) }), (0, l.jsx)('p', { children: (0, l.jsxs)('select', { id: 'kleur2', children: [(0, l.jsx)('option', { name: 'groen', children: 'Groen' }), (0, l.jsx)('option', { name: 'blauw', children: 'Blauw' }), (0, l.jsx)('option', { name: 'rood', children: 'Rood' })] }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld' }) }), '\n', (0, l.jsx)(n.p, { children: 'Verstuur bij voorkeur alleen het formulier wanneer de gebruiker de submitbutton gebruikt, doe dit niet automatisch met een andere aanleiding. Is het echt noodzakelijk om het formulier op een ander moment te versturen, informeer de gebruiker dan duidelijk vooraf.' }), '\n', (0, l.jsx)(n.p, { children: 'Versturen na bijvoorbeeld het kiezen van een optie kan de gebruiker verrassen: wat gebeurt er, ik wilde nog even checken wat ik had ingevuld, heb ik nu het goede gekozen?' }), '\n', (0, l.jsxs)(n.p, { children: ['Let wel: het gaat hier om het daadwerkelijk versturen van het formulier. Dus als de ', (0, l.jsx)(n.strong, { children: 'context' }), ' verandert. Bijvoorbeeld: je gaat naar een bevestigingspagina.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Het updaten van bijvoorbeeld zoekresultaten waarbij alleen de ', (0, l.jsx)(n.strong, { children: 'content' }), ' verandert valt hier niet onder. Bijvoorbeeld: alleen het aantal zoekresultaten verandert, maar je blijft op dezelfde pagina.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'Succescriterium 3.2.2 Bij input' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld', title_sm: 'Verstuur niet automatisch', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    b = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x();
   }
  },
 },
]);
