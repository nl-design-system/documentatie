'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43423],
 {
  10948(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => v, default: () => y, frontMatter: () => b, metadata: () => s, toc: () => j }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/label/above-field/index","title":"Zet het label boven het formulierveld","description":"Richtlijnen voor label boven het formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/3-above-field/index.mdx","sourceDirName":"richtlijnen/formulieren/label/3-above-field","slug":"/richtlijnen/formulieren/labels/plaatsing","permalink":"/richtlijnen/formulieren/labels/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/3-above-field/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet het label boven het formulierveld","title_sm":"Plaatsing label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing label","pagination_label":"Plaatsing label","description":"Richtlijnen voor label boven het formulierveld.","slug":"/richtlijnen/formulieren/labels/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"},"next":{"title":"Label zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar"}}');
   var r = l(86070),
    t = l(18439),
    o = l(49539),
    a = l(80731),
    i = l(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Het label inconsequent plaatsen in een formulier (visueel en in code).', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'lievelingskleur', children: 'Wat is je lievelingskleur?' }) }), (0, r.jsx)('p', { children: (0, r.jsxs)('select', { name: 'lievelingskleur', id: 'lievelingskleur', children: [(0, r.jsx)('option', { children: 'Rood' }), (0, r.jsx)('option', { children: 'Blauw' }), (0, r.jsx)('option', { children: 'Wit' })] }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { type: 'text', id: 'dier', name: 'lievelingsdier' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'dier', children: 'Wat is je lievelingsdier?' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zet-het-label-boven-het-formulierveld', children: 'Zet het label boven het formulierveld' }) }), '\n', (0, r.jsx)(n.p, { children: 'Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze plaatsing heeft meerdere voordelen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht.' }), '\n', (0, r.jsx)(n.li, { children: 'Dit werkt beter voor gebruikers die de tekst inzoomen.' }), '\n', (0, r.jsx)(n.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat.' }), '\n', (0, r.jsxs)(n.p, { children: ['Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ', (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/', children: 'de richtlijnen over stijl: Ruimte' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond.' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ', (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/02/material-design-text-fields/', children: (0, r.jsx)('span', { lang: 'en', children: 'Material Design Text Fields Are Badly Designed in Smashing Magazine' }) }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Zet het label boven het formulierveld', title_sm: 'Plaatsing label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing label', pagination_label: 'Plaatsing label', description: 'Richtlijnen voor label boven het formulierveld.', slug: '/richtlijnen/formulieren/labels/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    g = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function x(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x();
   }
  },
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    r = l(16194),
    t = l(30758),
    o = l(51519);
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
    const { title: h, type: u } = (0, t.useContext)(o.x),
     m = (0, t.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => a });
   var s = l(30758);
   const r = {},
    t = s.createContext(r);
   function o(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => t });
   var s = l(86070),
    r = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var s = l(4077),
    r = l(58315),
    t = l(46447),
    o = l(13526),
    a = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: i, figure: h }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      p = h ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, c.jsx)(a.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(t.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var s = l(13526),
    r = l(30758),
    t = l(96345),
    o = l(37168),
    a = l(86070);
   const i = (0, r.forwardRef)(({ as: e, className: n, children: l, ...r }, t) => {
     const o = e || 'div',
      i = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(o, { ref: t, className: i, ...r, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: r, headingLevel: i, headingApperance: c, ...d }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: h, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(t.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [r && (0, a.jsx)(o.D, { level: i, appearance: c, children: r }), l] })] }) }), (0, a.jsx)('div', { className: u, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => f });
   var s = l(15175),
    r = l(46447),
    t = l(13526),
    o = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    u = l(31186),
    m = l(65904),
    p = l.n(m),
    b = l(70348),
    v = l(89974),
    g = l(86070);
   const j = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: r, defaultExpandedCode: o, designTokens: a }) => {
       const i = 'string' == typeof l ? l : s || '',
        c = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(s || '', p().languages[e], e);
       return (0, g.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, g.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, g.jsx)(b.n, { children: (0, g.jsxs)(b.K, { label: 'Code', open: o, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === r && (0, g.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: p, container: b = 'document', language: v, designTokens: f }) => {
       const _ = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || _),
        [w, z] = (0, h.useState)(N),
        [A, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [o.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let R = h.Fragment;
       return (
        'paragraph' === b ? (R = j) : 'document' === b ? (R = x) : 'surface' === b && (R = y),
        (0, g.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          _ && (0, g.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(R, { children: (0, g.jsx)(r.v$, { children: _ }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(r.$n, {
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
          m &&
           (0, g.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, g.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
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
  89974(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
 },
]);
