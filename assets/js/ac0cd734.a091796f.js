'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94318],
 {
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    s = l(16194),
    o = l(30758),
    a = l(51519);
   const t = {
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
    const { title: h, type: u } = (0, o.useContext)(a.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => a, x: () => t });
   var r = l(30758);
   const s = {},
    o = r.createContext(s);
   function a(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => t, RM: () => o });
   var r = l(86070),
    s = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var r = l(4077),
    s = l(58315),
    o = l(46447),
    a = l(13526),
    t = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: i, figure: h }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      p = h ? 'figcaption' : 'div',
      j = 'string' == typeof l ? (0, c.jsx)(t.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(o.fz, { children: e })] }), j] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var r = l(13526),
    s = l(30758),
    o = l(96345),
    a = l(37168),
    t = l(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, o) => {
     const a = e || 'div',
      i = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, t.jsx)(a, { ref: o, className: i, ...s, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: i, headingApperance: c, ...d }) => {
     const h = (0, r.A)('utrecht-accordion__section', e),
      u = (0, r.A)('utrecht-accordion__panel', n);
     return (0, t.jsxs)('details', { className: h, ...d, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(o.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [s && (0, t.jsx)(a.D, { level: i, appearance: c, children: s }), l] })] }) }), (0, t.jsx)('div', { className: u, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => f });
   var r = l(15175),
    s = l(46447),
    o = l(13526),
    a = l(68148),
    t = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    u = l(31186),
    m = l(65904),
    p = l.n(m),
    j = l(70348),
    g = l(89974),
    x = l(86070);
   const b = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: r, copyCode: s, defaultExpandedCode: a, designTokens: t }) => {
       const i = 'string' == typeof l ? l : r || '',
        c = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(r || '', p().languages[e], e);
       return (0, x.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, x.jsx)('div', { className: 'voorbeeld-theme', style: t, children: (0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === s && (0, x.jsx)(g.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: p, container: j = 'document', language: g, designTokens: f }) => {
       const y = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || y),
        [w, A] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [a.A, t.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let R = h.Fragment;
       return (
        'paragraph' === j ? (R = b) : 'document' === j ? (R = v) : 'surface' === j && (R = k),
        (0, x.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          y && (0, x.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(R, { children: (0, x.jsx)(s.v$, { children: y }) }) }) }),
          m &&
           (0, x.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, x.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, x.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: w, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(s.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89347(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => g, default: () => k, frontMatter: () => j, metadata: () => r, toc: () => b }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/accessible-name/index","title":"Geef een formulierveld een toegankelijke naam met een label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/1-accessible-name/index.mdx","sourceDirName":"richtlijnen/formulieren/label/1-accessible-name","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef een formulierveld een toegankelijke naam met een label","title_sm":"Toegankelijke naam label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke naam label","pagination_label":"Toegankelijke naam label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"},"next":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"}}');
   var s = l(86070),
    o = l(18439),
    a = l(49539),
    t = l(80731),
    i = l(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'kleur3', name: 'lievelingskleur' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsxs)('select', { id: 'kleur4', name: 'lievelingskleur', children: [(0, s.jsx)('option', { children: 'Rood' }), (0, s.jsx)('option', { children: 'Blauw' }), (0, s.jsx)('option', { children: 'Wit' })] }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)('div', { 'data-test-axe': 'false', children: [(0, s.jsx)('div', { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)('input', { type: 'text', id: 'kleur5', name: 'lievelingskleur', 'data-test-axe': 'false' })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)('div', { 'data-test-axe': 'false', children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsxs)('select', { 'data-test-axe': 'false', name: 'lievelingskleur', children: [(0, s.jsx)('option', { children: 'Rood' }), (0, s.jsx)('option', { children: 'Blauw' }), (0, s.jsx)('option', { children: 'Wit' })] }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, s.jsx)(n.code, { children: 'for' }), '/', (0, s.jsx)(n.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, s.jsx)(n.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.'] }), '\n', (0, s.jsx)(n.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, s.jsx)(n.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, s.jsx)(n.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, s.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, s.jsxs)(n.li, { children: ['Geef het label het attribute ', (0, s.jsx)(n.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Let op: De gebruikte ', (0, s.jsx)(n.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, s.jsxs)(n.p, { children: ['Doen: Gekoppeld label met ', (0, s.jsx)(n.code, { children: 'for' }), ' en ', (0, s.jsx)(n.code, { children: 'id' }), '. Het ', (0, s.jsx)(n.code, { children: '<label>' }), '-element heeft een ', (0, s.jsx)(n.code, { children: 'for' }), ' attribuut (of ', (0, s.jsx)(n.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, s.jsx)(n.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, s.jsx)(n.code, { children: '<select>' }), ':'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Geef een formulierveld een toegankelijke naam met een label', title_sm: 'Toegankelijke naam label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    b = [{ value: 'De for/id relatie', id: 'de-forid-relatie', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function v(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(a.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v();
   }
  },
  89974(e, n, l) {
   l.d(n, { $: () => r.$n });
   var r = l(50805);
  },
 },
]);
