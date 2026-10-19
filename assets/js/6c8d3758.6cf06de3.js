'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33083],
 {
  140(e, n, r) {
   (r.r(n), r.d(n, { assets: () => v, contentTitle: () => x, default: () => y, frontMatter: () => j, metadata: () => s, toc: () => g }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/description/associated/index","title":"Koppel een description aan het formulierveld","description":"Richtlijnen voor koppelen van een description aan een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/1-associated/index.mdx","sourceDirName":"richtlijnen/formulieren/description/1-associated","slug":"/richtlijnen/formulieren/descriptions/koppelen","permalink":"/richtlijnen/formulieren/descriptions/koppelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/1-associated/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Koppel een description aan het formulierveld","title_sm":"Koppel description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Koppel description","pagination_label":"Koppel description","description":"Richtlijnen voor koppelen van een description aan een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/koppelen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Descriptions in een formulier","permalink":"/richtlijnen/formulieren/descriptions/"},"next":{"title":"Inhoud description","permalink":"/richtlijnen/formulieren/descriptions/inhoud"}}');
   var o = r(86070),
    l = r(18439),
    i = r(56672),
    t = r(38953),
    c = r(56528);
   function a(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Koppel een description aan het formulierveld, met aria-describedby.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Koppeling weglaten.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord0', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord0', type: 'password', name: 'nieuw-wachtwoord' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'koppel-een-description-aan-het-formulierveld', children: 'Koppel een description aan het formulierveld' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Voor gebruikers van ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is het belangrijk dat de description samen wordt voorgelezen met het formulierveld.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Waarom? Screenreaders, zoals JAWS, schakelen over naar de \u201cformulierenmodus\u201d wanneer ze inhoud binnen een ', (0, o.jsx)(n.code, { children: '<form>' }), ' element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld ', (0, o.jsx)(n.code, { children: 'aria-describedby' }), '). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt.'] }), '\n', (0, o.jsx)(n.p, { children: 'Meer informatie over de formulierenmodus:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/forms/instructions/', children: 'Form Instructions' }), ', Web Accessibility Initiative.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes', children: 'Browse and focus modes' }), ', Accessibility Developer Guide.'] }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: "Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft." }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op:' }), ' De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Geef description een ID: ', (0, o.jsx)(n.code, { children: 'id="description-name"' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Verwijs in het formulierveld naar dat ID: ', (0, o.jsx)(n.code, { children: 'aria-describedby="description-name"' }), '.'] }), '\n'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Lees ook: ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'MDN over aria-describedby' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'Koppel een description aan het formulierveld', title_sm: 'Koppel description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    v = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  14881(e, n, r) {
   r.d(n, { K: () => a, n: () => c });
   var s = r(13526),
    o = r(30758),
    l = r(30662),
    i = r(37168),
    t = r(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: r, ...o }, l) => {
     const i = e || 'div',
      c = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, t.jsx)(i, { ref: l, className: c, ...o, children: r });
    }),
    a = ({ className: e, classNamePanel: n, label: r, heading: o, headingLevel: c, headingApperance: a, ...d }) => {
     const p = (0, s.A)('utrecht-accordion__section', e),
      h = (0, s.A)('utrecht-accordion__panel', n);
     return (0, t.jsxs)('details', { className: p, ...d, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(l.rI, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [o && (0, t.jsx)(i.D, { level: c, appearance: a, children: o }), r] })] }) }), (0, t.jsx)('div', { className: h, children: d.children })] });
    };
  },
  18439(e, n, r) {
   r.d(n, { R: () => i, x: () => t });
   var s = r(30758);
   const o = {},
    l = s.createContext(o);
   function i(e) {
    const n = s.useContext(l);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(l.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, r) {
   r.d(n, { M: () => a });
   var s = r(46447),
    o = r(16194),
    l = r(30758),
    i = r(56528);
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
    return (a && (d = d.trim()), (0, c.jsx)(o.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: r, getLineProps: o, getTokenProps: l }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: r.map((n, r) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  30662(e, n, r) {
   r.d(n, { D4: () => F, GP: () => w, KC: () => M, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => W, bz: () => z, cB: () => S, e5: () => $, hY: () => L, jK: () => I, jP: () => D, ob: () => P, rI: () => N, t4: () => R, vP: () => K, vg: () => T });
   var s = r(92081),
    o = r(90578),
    l = r(96345),
    i = r(64249),
    t = r(4603),
    c = r(91525),
    a = r(23436),
    d = r(1375),
    p = r(4077),
    h = r(58315),
    u = r(73563),
    m = r(35193),
    j = r(82999),
    x = r(13088),
    v = r(43864),
    g = r(24214),
    b = r(79532),
    y = r(60529),
    f = r(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(s.A, { ...k }),
    w = () => (0, f.jsx)(o.A, { ...k }),
    N = () => (0, f.jsx)(l.A, { ...k }),
    A = () => (0, f.jsx)(i.A, { ...k }),
    z = () => (0, f.jsx)(t.A, { ...k }),
    C = () => (0, f.jsx)(c.A, { ...k }),
    S = () => (0, f.jsx)(a.A, { ...k }),
    K = () => (0, f.jsx)(d.A, { ...k }),
    I = () => (0, f.jsx)(p.A, { ...k }),
    D = () => (0, f.jsx)(h.A, { ...k }),
    R = () => (0, f.jsx)(u.A, { ...k }),
    F = () => (0, f.jsx)(m.A, { ...k }),
    L = () => (0, f.jsx)(j.A, { ...k }),
    M = () => (0, f.jsx)(x.A, { ...k }),
    W = () => (0, f.jsx)(v.A, { ...k }),
    $ = () => (0, f.jsx)(g.A, { ...k }),
    P = () => (0, f.jsx)(b.A, { ...k }),
    T = () => (0, f.jsx)(y.A, { ...k });
  },
  38953(e, n, r) {
   r.d(n, { H: () => f });
   var s = r(28369),
    o = r(46447),
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
    j = r(14881),
    x = r(46847),
    v = r(86070);
   const g = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: r = '<p>No code provided</p>', rawCode: s, copyCode: o, defaultExpandedCode: i, designTokens: t }) => {
       const c = 'string' == typeof r ? r : s || '',
        a = 'string' == typeof r ? m().highlight(r, m().languages[e], e) : m().highlight(s || '', m().languages[e], e);
       return (0, v.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [(0, v.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: t, children: (0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, v.jsx)(j.n, { children: (0, v.jsxs)(j.K, { label: 'Code', open: i, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }), 'allow' === o && (0, v.jsx)(x.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
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
          k && (0, v.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(K, { children: (0, v.jsx)(o.v$, { children: k }) }) }) }),
          u &&
           (0, v.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
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
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
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
  46847(e, n, r) {
   r.d(n, { $: () => s.$n });
   var s = r(50805);
  },
  56528(e, n, r) {
   r.d(n, { $: () => d, x: () => a });
   var s = r(30662),
    o = r(46447),
    l = r(13526),
    i = r(94988),
    t = r(30758),
    c = r(86070);
   const a = (0, t.createContext)({}),
    d = ({ title: e, appearance: n, description: r, children: t, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      m = 'string' == typeof r ? (0, c.jsx)(i.oz, { components: { a: o.N_ }, children: r }) : r;
     return (0, c.jsxs)(h, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(o.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: e, type: p[n] }, children: t }) })] });
    };
  },
  56672(e, n, r) {
   r.d(n, { Ay: () => t, RM: () => l });
   var s = r(86070),
    o = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
  },
 },
]);
