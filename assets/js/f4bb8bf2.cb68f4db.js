'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30347],
 {
  15175(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    t = o(16194),
    r = o(30758),
    s = o(51519);
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
   var c = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: u, type: h } = (0, r.useContext)(s.x),
     p = (0, r.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => a });
   var l = o(30758);
   const t = {},
    r = l.createContext(t);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => r });
   var l = o(86070),
    t = o(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var l = o(4077),
    t = o(58315),
    r = o(46447),
    s = o(13526),
    a = o(66116),
    c = o(30758),
    i = o(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: c, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      v = 'string' == typeof o ? (0, i.jsx)(a.oz, { components: { a: r.N_ }, children: o }) : o;
     return (0, i.jsxs)(p, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.fz, { children: e })] }), v] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  70348(e, n, o) {
   o.d(n, { K: () => i, n: () => c });
   var l = o(13526),
    t = o(30758),
    r = o(96345),
    s = o(37168),
    a = o(86070);
   const c = (0, t.forwardRef)(({ as: e, className: n, children: o, ...t }, r) => {
     const s = e || 'div',
      c = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(s, { ref: r, className: c, ...t, children: o });
    }),
    i = ({ className: e, classNamePanel: n, label: o, heading: t, headingLevel: c, headingApperance: i, ...d }) => {
     const u = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(r.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [t && (0, a.jsx)(s.D, { level: c, appearance: i, children: t }), o] })] }) }), (0, a.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, o) {
   o.d(n, { H: () => y });
   var l = o(15175),
    t = o(46447),
    r = o(13526),
    s = o(68148),
    a = o(9016),
    c = o(69303),
    i = o(91635),
    d = o(30734),
    u = o(30758),
    h = o(31186),
    p = o(65904),
    m = o.n(p),
    v = o(70348),
    g = o(89974),
    b = o(86070);
   const x = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: t, defaultExpandedCode: s, designTokens: a }) => {
       const c = 'string' == typeof o ? o : l || '',
        i = 'string' == typeof o ? m().highlight(o, m().languages[e], e) : m().highlight(l || '', m().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, b.jsx)(v.n, { children: (0, b.jsxs)(v.K, { label: 'Code', open: s, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === t && (0, b.jsx)(g.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: p = !0, children: m, container: v = 'document', language: g, designTokens: y }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || k),
        [w, A] = (0, u.useState)(N),
        [z, C] = (0, u.useState)(o);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [s.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const F = (0, u.useId)();
       let S = u.Fragment;
       return (
        'paragraph' === v ? (S = x) : 'document' === v ? (S = j) : 'surface' === v && (S = f),
        (0, b.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, b.jsx)(S, { children: (0, b.jsx)(t.v$, { children: k }) }) }) }),
          p &&
           (0, b.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': F,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, b.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: F,
            hidden: !z,
            children: [
             (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(t.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  83753(e, n, o) {
   (o.r(n), o.d(n, { assets: () => b, contentTitle: () => g, default: () => f, frontMatter: () => v, metadata: () => l, toc: () => x }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-contrast/index","title":"Geef duidelijk aan waar een invoerveld is","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/1-field-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/1-field-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/1-field-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan waar een invoerveld is","title_sm":"Invoerveld goed zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed zichtbaar","pagination_label":"Invoerveld goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"},"next":{"title":"Tekst goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar"}}');
   var t = o(86070),
    r = o(18439),
    s = o(49539),
    a = o(80731),
    c = o(51519);
   o(46447);
   function i(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, t.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('label', { htmlFor: 'contrast-input-goed', children: 'Voorbeeld invoerveld met goed contrast' }), (0, t.jsx)('input', { type: 'text', id: 'contrast-input-goed' })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, t.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('fieldset', { children: [(0, t.jsx)('legend', { children: 'Kies je kleur' }), (0, t.jsxs)('div', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio1', name: 'kleur' }), (0, t.jsx)('label', { htmlFor: 'radio1', children: 'Blauw' })] }), (0, t.jsxs)('div', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio2', name: 'kleur' }), (0, t.jsx)('label', { htmlFor: 'radio2', children: 'Groen' })] }), (0, t.jsxs)('div', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio3', name: 'kleur' }), (0, t.jsx)('label', { htmlFor: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 1.08:1](/contrast/?color=%23f8f5f1&background-color=%23ffffff)', children: (0, t.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('label', { htmlFor: 'contrast-input-slecht', children: 'Voorbeeld invoerveld met slecht contrast' }), (0, t.jsx)('input', { type: 'text', id: 'contrast-input-slecht' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }) }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const v = { title: 'Geef duidelijk aan waar een invoerveld is', title_sm: 'Invoerveld goed zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    b = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  89974(e, n, o) {
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
 },
]);
