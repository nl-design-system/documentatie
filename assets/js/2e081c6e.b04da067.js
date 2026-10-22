'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [22151],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var o = l(13526),
    r = l(30758),
    s = l(30662),
    t = l(32065),
    i = l(37168),
    a = l(86070);
   const c = (0, r.forwardRef)(({ as: e, className: n, children: l, ...r }, s) => {
     const t = e || 'div',
      i = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(t, { ref: s, className: i, ...r, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: r, headingLevel: c, headingApperance: d, ...m }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...m, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(t.I, { children: (0, a.jsx)(s.rI, {}) }) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [r && (0, a.jsx)(i.D, { level: c, appearance: d, children: r }), l] })] }) }), (0, a.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => i });
   var o = l(30758);
   const r = {},
    s = o.createContext(r);
   function t(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    r = l(16194),
    s = l(30758),
    t = l(56528);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: m, type: u } = (0, s.useContext)(t.x),
     h = (0, s.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(r.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...r({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => L, GP: () => w, KC: () => T, Nd: () => k, Rt: () => S, Vj: () => A, Wk: () => $, bz: () => C, cB: () => z, e5: () => D, hY: () => M, jK: () => P, jP: () => R, ob: () => H, rI: () => N, t4: () => F, vP: () => I, vg: () => K });
   var o = l(92081),
    r = l(90578),
    s = l(96345),
    t = l(64249),
    i = l(4603),
    a = l(91525),
    c = l(23436),
    d = l(1375),
    m = l(4077),
    u = l(58315),
    h = l(73563),
    p = l(35193),
    g = l(82999),
    j = l(13088),
    x = l(43864),
    f = l(24214),
    b = l(79532),
    v = l(60529),
    y = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, y.jsx)(o.A, { ..._ }),
    w = () => (0, y.jsx)(r.A, { ..._ }),
    N = () => (0, y.jsx)(s.A, { ..._ }),
    A = () => (0, y.jsx)(t.A, { ..._ }),
    C = () => (0, y.jsx)(i.A, { ..._ }),
    S = () => (0, y.jsx)(a.A, { ..._ }),
    z = () => (0, y.jsx)(c.A, { ..._ }),
    I = () => (0, y.jsx)(d.A, { ..._ }),
    P = () => (0, y.jsx)(m.A, { ..._ }),
    R = () => (0, y.jsx)(u.A, { ..._ }),
    F = () => (0, y.jsx)(h.A, { ..._ }),
    L = () => (0, y.jsx)(p.A, { ..._ }),
    M = () => (0, y.jsx)(g.A, { ..._ }),
    T = () => (0, y.jsx)(j.A, { ..._ }),
    $ = () => (0, y.jsx)(x.A, { ..._ }),
    D = () => (0, y.jsx)(f.A, { ..._ }),
    H = () => (0, y.jsx)(b.A, { ..._ }),
    K = () => (0, y.jsx)(v.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => o.In });
   var o = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
  50287(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => j, default: () => v, frontMatter: () => g, metadata: () => o, toc: () => f }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/error/location/index","title":"Zet de foutmeldingen bij de betreffende formuliervelden","description":"Richtlijnen voor positie van foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/4-location/index.mdx","sourceDirName":"richtlijnen/formulieren/error/4-location","slug":"/richtlijnen/formulieren/foutmeldingen/plaatsing","permalink":"/richtlijnen/formulieren/foutmeldingen/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/4-location/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet de foutmeldingen bij de betreffende formuliervelden","title_sm":"Plaatsing foutmelding","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing foutmelding","pagination_label":"Plaatsing foutmelding","description":"Richtlijnen voor positie van foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk"},"next":{"title":"HTML-formuliervalidatie","permalink":"/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie"}}');
   var r = l(86070),
    s = l(18439),
    t = l(56672),
    i = l(87682),
    a = l(56528);
   function c(e) {
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(a.$, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { id: 'error-wachtwoord2', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' }) })] }) }) }), '\n', (0, r.jsx)(a.$, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }) }), (0, r.jsx)('p', { id: 'error-wachtwoord4', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c();
   }
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zet-de-foutmeldingen-bij-de-betreffende-formuliervelden', children: 'Zet de foutmeldingen bij de betreffende formuliervelden' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Voor foutmeldingen geldt hetzelfde als voor descriptions: de beste locatie is boven het formulierveld. Bovendien moet de foutmelding ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), ' gekoppeld zijn aan het formulierveld.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hoe dit te doen is beschreven bij de richtlijn ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing/', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Zet de foutmeldingen bij de betreffende formuliervelden', title_sm: 'Plaatsing foutmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing foutmelding', pagination_label: 'Plaatsing foutmelding', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    f = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var o = l(30662),
    r = l(46447),
    s = l(13526),
    t = l(45795),
    i = l(30758),
    a = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, a.jsx)(t.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, a.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(o.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(r.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => s });
   var o = l(86070),
    r = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var o = l(28369),
    r = l(46447),
    s = l(13526),
    t = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(14881),
    j = l(46847),
    x = l(86070);
   const f = ({ label: e, labelId: n, className: l, colorScheme: o, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: i, ...a }) => (0, x.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...a, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: t })] });
   var b = l(68197);
   const v = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: r, colorScheme: t, defaultExpandedCode: i, designTokens: a, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : o || '',
        h = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(o || '', p().languages[e], e),
        v = (0, x.jsx)(b.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: a, dangerouslySetInnerHTML: { __html: u } });
       return (0, x.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(f, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: v }) : v, (0, x.jsx)(g.n, { children: (0, x.jsxs)(g.K, { label: 'Code', open: i, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === r && (0, x.jsx)(j.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: j, designTokens: f }) => {
       const b = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(k || b),
        [N, A] = (0, m.useState)(w),
        [C, S] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const z = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === g ? (I = v) : 'document' === g ? (I = y) : 'surface' === g && (I = _),
        (0, x.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          b && (0, x.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(I, { children: (0, x.jsx)(r.v$, { children: b }) }) }) }),
          h &&
           (0, x.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(r.$n, {
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
          h &&
           (0, x.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(r.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
 },
]);
