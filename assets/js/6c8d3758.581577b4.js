'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33083],
 {
  14522(e, n, r) {
   (r.r(n), r.d(n, { assets: () => v, contentTitle: () => x, default: () => y, frontMatter: () => j, metadata: () => o, toc: () => g }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/description/associated/index","title":"Koppel een description aan het formulierveld","description":"Richtlijnen voor koppelen van een description aan een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/1-associated/index.mdx","sourceDirName":"richtlijnen/formulieren/description/1-associated","slug":"/richtlijnen/formulieren/descriptions/koppelen","permalink":"/richtlijnen/formulieren/descriptions/koppelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/1-associated/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Koppel een description aan het formulierveld","title_sm":"Koppel description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Koppel description","pagination_label":"Koppel description","description":"Richtlijnen voor koppelen van een description aan een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/koppelen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Descriptions in een formulier","permalink":"/richtlijnen/formulieren/descriptions/"},"next":{"title":"Inhoud description","permalink":"/richtlijnen/formulieren/descriptions/inhoud"}}');
   var s = r(86070),
    l = r(18439),
    i = r(49539),
    t = r(80731),
    c = r(51519);
   function a(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Koppel een description aan het formulierveld, met aria-describedby.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, s.jsx)('p', { id: 'description-wachtwoord', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Koppeling weglaten.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'wachtwoord0', children: 'Nieuw wachtwoord' }) }), (0, s.jsx)('p', { children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'wachtwoord0', type: 'password', name: 'nieuw-wachtwoord' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'koppel-een-description-aan-het-formulierveld', children: 'Koppel een description aan het formulierveld' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Voor gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is het belangrijk dat de description samen wordt voorgelezen met het formulierveld.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Waarom? Screenreaders, zoals JAWS, schakelen over naar de \u201cformulierenmodus\u201d wanneer ze inhoud binnen een ', (0, s.jsx)(n.code, { children: '<form>' }), ' element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld ', (0, s.jsx)(n.code, { children: 'aria-describedby' }), '). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt.'] }), '\n', (0, s.jsx)(n.p, { children: 'Meer informatie over de formulierenmodus:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/forms/instructions/', children: 'Form Instructions' }), ', Web Accessibility Initiative.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes', children: 'Browse and focus modes' }), ', Accessibility Developer Guide.'] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: "Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft." }), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'Let op:' }), ' De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Geef description een ID: ', (0, s.jsx)(n.code, { children: 'id="description-name"' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Verwijs in het formulierveld naar dat ID: ', (0, s.jsx)(n.code, { children: 'aria-describedby="description-name"' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Lees ook: ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'MDN over aria-describedby' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'Koppel een description aan het formulierveld', title_sm: 'Koppel description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    v = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  15175(e, n, r) {
   r.d(n, { M: () => a });
   var o = r(46447),
    s = r(16194),
    l = r(30758),
    i = r(51519);
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
   var c = r(86070);
   function a({ lineNumber: e, syntax: n, textContent: r, trim: a }) {
    let d = r;
    const { title: p, type: h } = (0, l.useContext)(i.x),
     u = (0, l.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(s.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: r, getLineProps: s, getTokenProps: l }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: r.map((n, r) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  18439(e, n, r) {
   r.d(n, { R: () => i, x: () => t });
   var o = r(30758);
   const s = {},
    l = o.createContext(s);
   function i(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), o.createElement(l.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, r) {
   r.d(n, { Ay: () => t, RM: () => l });
   var o = r(86070),
    s = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  51519(e, n, r) {
   r.d(n, { $: () => p, x: () => d });
   var o = r(4077),
    s = r(58315),
    l = r(46447),
    i = r(13526),
    t = r(66116),
    c = r(30758),
    a = r(86070);
   const d = (0, c.createContext)({}),
    p = ({ title: e, appearance: n, description: r, children: c, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      j = 'string' == typeof r ? (0, a.jsx)(t.oz, { components: { a: l.N_ }, children: r }) : r;
     return (0, a.jsxs)(u, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(l.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(l.fz, { children: e })] }), j] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  70348(e, n, r) {
   r.d(n, { K: () => a, n: () => c });
   var o = r(13526),
    s = r(30758),
    l = r(96345),
    i = r(37168),
    t = r(86070);
   const c = (0, s.forwardRef)(({ as: e, className: n, children: r, ...s }, l) => {
     const i = e || 'div',
      c = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, t.jsx)(i, { ref: l, className: c, ...s, children: r });
    }),
    a = ({ className: e, classNamePanel: n, label: r, heading: s, headingLevel: c, headingApperance: a, ...d }) => {
     const p = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, t.jsxs)('details', { className: p, ...d, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(l.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [s && (0, t.jsx)(i.D, { level: c, appearance: a, children: s }), r] })] }) }), (0, t.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, r) {
   r.d(n, { H: () => f });
   var o = r(15175),
    s = r(46447),
    l = r(13526),
    i = r(68148),
    t = r(9016),
    c = r(69303),
    a = r(91635),
    d = r(30734),
    p = r(30758),
    h = r(31186),
    u = r(65904),
    m = r.n(u),
    j = r(70348),
    x = r(89974),
    v = r(86070);
   const g = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: r = '<p>No code provided</p>', rawCode: o, copyCode: s, defaultExpandedCode: i, designTokens: t }) => {
       const c = 'string' == typeof r ? r : o || '',
        a = 'string' == typeof r ? m().highlight(r, m().languages[e], e) : m().highlight(o || '', m().languages[e], e);
       return (0, v.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [(0, v.jsx)('div', { className: 'voorbeeld-theme', style: t, children: (0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, v.jsx)(j.n, { children: (0, v.jsxs)(j.K, { label: 'Code', open: i, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }), 'allow' === s && (0, v.jsx)(x.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: u = !0, children: m, container: j = 'document', language: x, designTokens: f }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || k),
        [N, A] = (0, p.useState)(w),
        [z, C] = (0, p.useState)(r);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [i.A, t.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let K = p.Fragment;
       return (
        'paragraph' === j ? (K = g) : 'document' === j ? (K = b) : 'surface' === j && (K = y),
        (0, v.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(K, { children: (0, v.jsx)(s.v$, { children: k }) }) }) }),
          u &&
           (0, v.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, v.jsxs)('div', {
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, r) {
   r.d(n, { $: () => o.$n });
   var o = r(50805);
  },
 },
]);
