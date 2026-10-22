'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74865],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => a });
   var s = l(13526),
    t = l(30758),
    o = l(30662),
    r = l(32065),
    i = l(37168),
    c = l(86070);
   const a = (0, t.forwardRef)(({ as: e, className: n, children: l, ...t }, o) => {
     const r = e || 'div',
      i = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: o, className: i, ...t, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: t, headingLevel: a, headingApperance: d, ...u }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      m = (0, s.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...u, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(o.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [t && (0, c.jsx)(i.D, { level: a, appearance: d, children: t }), l] })] }) }), (0, c.jsx)('div', { className: m, children: u.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => i });
   var s = l(30758);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => a });
   var s = l(46447),
    t = l(16194),
    o = l(30758),
    r = l(56528);
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
    const { title: u, type: h } = (0, o.useContext)(r.x),
     m = (0, o.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(t.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  29699(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => g, default: () => b, frontMatter: () => j, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/error/description/index","title":"Schrijf een foutmelding uit in tekst","description":"Richtlijnen voor uitschrijven van een foutmelding in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/2-description/index.mdx","sourceDirName":"richtlijnen/formulieren/error/2-description","slug":"/richtlijnen/formulieren/foutmeldingen/beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/2-description/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een foutmelding uit in tekst","title_sm":"Fouten beschrijven","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Fouten beschrijven","pagination_label":"Fouten beschrijven","description":"Richtlijnen voor uitschrijven van een foutmelding in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/beschrijven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten controleren","permalink":"/richtlijnen/formulieren/foutmeldingen/controleren"},"next":{"title":"Duidelijke foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk"}}');
   var t = l(86070),
    o = l(18439),
    r = l(56672),
    i = l(87682),
    c = l(56528);
   function a(e) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(c.$, { appearance: 'do', title: 'Naast een visuele indicatie ook een foutmelding in tekst tonen.', description: 'In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'passport-validity-1', children: 'Geldig tot' }) }), (0, t.jsx)('p', { id: 'passport-validity-date-1', children: 'Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'passport-validity-1', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-1', 'aria-describedby': 'description-passport-validity-1' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Alleen een visuele indicatie geven dat er iets fout is gegaan.', description: 'In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: 'Schrijf een foutmelding uit in tekst' }) }), '\n', (0, t.jsx)(n.p, { children: 'Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal.' }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt zeker kleur en icoontjes gebruiken, maar niet als ', (0, t.jsx)(n.strong, { children: 'enige' }), ' foutindicatie.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.1/', children: 'Succescriterium 1.4.1 Gebruik van kleur' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Schrijf een foutmelding uit in tekst', title_sm: 'Fouten beschrijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    v = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => N, KC: () => P, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => T, bz: () => C, cB: () => F, e5: () => D, hY: () => $, jK: () => z, jP: () => R, ob: () => G, rI: () => A, t4: () => L, vP: () => I, vg: () => H });
   var s = l(92081),
    t = l(90578),
    o = l(96345),
    r = l(64249),
    i = l(4603),
    c = l(91525),
    a = l(23436),
    d = l(1375),
    u = l(4077),
    h = l(58315),
    m = l(73563),
    p = l(35193),
    j = l(82999),
    g = l(13088),
    x = l(43864),
    v = l(24214),
    y = l(79532),
    b = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(s.A, { ..._ }),
    N = () => (0, f.jsx)(t.A, { ..._ }),
    A = () => (0, f.jsx)(o.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    C = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    F = () => (0, f.jsx)(a.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    z = () => (0, f.jsx)(u.A, { ..._ }),
    R = () => (0, f.jsx)(h.A, { ..._ }),
    L = () => (0, f.jsx)(m.A, { ..._ }),
    M = () => (0, f.jsx)(p.A, { ..._ }),
    $ = () => (0, f.jsx)(j.A, { ..._ }),
    P = () => (0, f.jsx)(g.A, { ..._ }),
    T = () => (0, f.jsx)(x.A, { ..._ }),
    D = () => (0, f.jsx)(v.A, { ..._ }),
    G = () => (0, f.jsx)(y.A, { ..._ }),
    H = () => (0, f.jsx)(b.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => s.In });
   var s = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => a });
   var s = l(30662),
    t = l(46447),
    o = l(13526),
    r = l(45795),
    i = l(30758),
    c = l(86070);
   const a = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(r.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(t.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => o });
   var s = l(86070),
    t = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var s = l(28369),
    t = l(46447),
    o = l(13526),
    r = l(68148),
    i = l(9016),
    c = l(69303),
    a = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    m = l(65904),
    p = l.n(m),
    j = l(14881),
    g = l(46847),
    x = l(86070);
   const v = ({ label: e, labelId: n, className: l, colorScheme: s, forcedColorsAdjust: t = !1, children: r, dangerouslySetInnerHTML: i, ...c }) => (0, x.jsxs)('figure', { className: (0, o.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: r })] });
   var y = l(68197);
   const b = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, x.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: t, colorScheme: r, defaultExpandedCode: i, designTokens: c, forcedColorsAdjust: a = !0, label: d }) => {
       const h = 'string' == typeof l ? l : s || '',
        m = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        b = (0, x.jsx)(y.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: h } });
       return (0, x.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(v, { forcedColorsAdjust: a, label: d, labelId: d ? (0, u.useId)() : void 0, children: b }) : b, (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: i, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === t && (0, x.jsx)(g.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: p, container: j = 'document', language: g, designTokens: v }) => {
       const y = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || y),
        [A, w] = (0, u.useState)(N),
        [C, S] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, i.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const F = (0, u.useId)();
       let I = u.Fragment;
       return (
        'paragraph' === j ? (I = b) : 'document' === j ? (I = f) : 'surface' === j && (I = _),
        (0, x.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          y && (0, x.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, x.jsx)(I, { children: (0, x.jsx)(t.v$, { children: y }) }) }) }),
          m &&
           (0, x.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(t.$n, {
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
          m &&
           (0, x.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: F,
            hidden: !C,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(t.$n, {
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
 },
]);
