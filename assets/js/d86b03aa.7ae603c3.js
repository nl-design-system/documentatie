'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2990],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => i });
   var o = l(13526),
    t = l(30758),
    s = l(30662),
    r = l(32065),
    a = l(37168),
    c = l(86070);
   const i = (0, t.forwardRef)(({ as: e, className: n, children: l, ...t }, s) => {
     const r = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: s, className: a, ...t, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: t, headingLevel: i, headingApperance: d, ...m }) => {
     const h = (0, o.A)('utrecht-accordion__section', e),
      u = (0, o.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...m, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(s.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [t && (0, c.jsx)(a.D, { level: i, appearance: d, children: t }), l] })] }) }), (0, c.jsx)('div', { className: u, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var o = l(30758);
   const t = {},
    s = o.createContext(t);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    t = l(16194),
    s = l(30758),
    r = l(56528);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: m, type: h } = (0, s.useContext)(r.x),
     u = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => L, GP: () => N, KC: () => $, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => P, bz: () => C, cB: () => z, e5: () => T, hY: () => M, jK: () => R, jP: () => F, ob: () => D, rI: () => A, t4: () => B, vP: () => I, vg: () => W });
   var o = l(92081),
    t = l(90578),
    s = l(96345),
    r = l(64249),
    a = l(4603),
    c = l(91525),
    i = l(23436),
    d = l(1375),
    m = l(4077),
    h = l(58315),
    u = l(73563),
    p = l(35193),
    g = l(82999),
    j = l(13088),
    x = l(43864),
    v = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(o.A, { ..._ }),
    N = () => (0, f.jsx)(t.A, { ..._ }),
    A = () => (0, f.jsx)(s.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    z = () => (0, f.jsx)(i.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    F = () => (0, f.jsx)(h.A, { ..._ }),
    B = () => (0, f.jsx)(u.A, { ..._ }),
    L = () => (0, f.jsx)(p.A, { ..._ }),
    M = () => (0, f.jsx)(g.A, { ..._ }),
    $ = () => (0, f.jsx)(j.A, { ..._ }),
    P = () => (0, f.jsx)(x.A, { ..._ }),
    T = () => (0, f.jsx)(v.A, { ..._ }),
    D = () => (0, f.jsx)(b.A, { ..._ }),
    W = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => o.In });
   var o = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
  47515(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => j, default: () => y, frontMatter: () => g, metadata: () => o, toc: () => v }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/questions/contact/index","title":"Biedt verschillende manieren om contact op te nemen","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/3-contact","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Biedt verschillende manieren om contact op te nemen","title_sm":"Bied contactmogelijkheden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bied contactmogelijkheden","pagination_label":"Bied contactmogelijkheden","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"},"next":{"title":"Stel een vraag \xe9\xe9n keer","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk"}}');
   var t = l(86070),
    s = l(18439),
    r = l(56672),
    a = l(87682),
    c = l(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Naast een telefoonnummer ook een e-mailadres uitvragen.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon1', children: 'Uw telefoonnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon1', type: 'tel', name: 'telefoon', autoComplete: 'tel' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email1', type: 'email', name: 'email', autoComplete: 'email' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Alleen een telefoonnummer uitvragen.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon2', children: 'Uw telefoonnummer (verplicht)' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon2', type: 'tel', name: 'telefoon', autoComplete: 'tel', 'aria-required': 'true' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'biedt-verschillende-manieren-om-contact-op-te-nemen', children: 'Biedt verschillende manieren om contact op te nemen' }) }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer.' }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer. Gebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voeg een alternatief toe, bijvoorbeeld een e-mailadres. De blogpost ', (0, t.jsx)(n.a, { href: '/blog/meerdere-manieren-contact/', children: 'Ik wil je wat vragen, maar ik heb geen WhatsApp!' }), ' gaat hier uitgebreid op in.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Biedt verschillende manieren om contact op te nemen', title_sm: 'Bied contactmogelijkheden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bied contactmogelijkheden', pagination_label: 'Bied contactmogelijkheden', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => i });
   var o = l(30662),
    t = l(46447),
    s = l(13526),
    r = l(45795),
    a = l(30758),
    c = l(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(r.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(o.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(o.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(t.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var o = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var o = l(28369),
    t = l(46447),
    s = l(13526),
    r = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    m = l(30758),
    h = l(31186),
    u = l(65904),
    p = l.n(u),
    g = l(14881),
    j = l(46847),
    x = l(86070);
   const v = ({ label: e, labelId: n, className: l, colorScheme: o, forcedColorsAdjust: t = !1, children: r, dangerouslySetInnerHTML: a, ...c }) => (0, x.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: t, colorScheme: r, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const h = 'string' == typeof l ? l : o || '',
        u = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(o || '', p().languages[e], e),
        y = (0, x.jsx)(b.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: h } });
       return (0, x.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(v, { forcedColorsAdjust: i, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, x.jsx)(g.n, { children: (0, x.jsxs)(g.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === t && (0, x.jsx)(j.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: g = 'document', language: j, designTokens: v }) => {
       const b = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || b),
        [A, w] = (0, m.useState)(N),
        [C, S] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, x.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          b && (0, x.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, x.jsx)(I, { children: (0, x.jsx)(t.v$, { children: b }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
 },
]);
