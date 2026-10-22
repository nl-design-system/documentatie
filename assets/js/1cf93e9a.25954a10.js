'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [53342],
 {
  14881(e, n, s) {
   s.d(n, { K: () => d, n: () => c });
   var l = s(13526),
    o = s(30758),
    r = s(30662),
    t = s(32065),
    a = s(37168),
    i = s(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: s, ...o }, r) => {
     const t = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: r, className: a, ...o, children: s });
    }),
    d = ({ className: e, classNamePanel: n, label: s, heading: o, headingLevel: c, headingApperance: d, ...h }) => {
     const p = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: p, ...h, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(r.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [o && (0, i.jsx)(a.D, { level: c, appearance: d, children: o }), s] })] }) }), (0, i.jsx)('div', { className: m, children: h.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => t, x: () => a });
   var l = s(30758);
   const o = {},
    r = l.createContext(o);
   function t(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => c });
   var l = s(46447),
    o = s(16194),
    r = s(30758),
    t = s(56528);
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
   var i = s(86070);
   function c({ lineNumber: e, syntax: n, textContent: s, trim: c }) {
    let d = s;
    const { title: h, type: p } = (0, r.useContext)(t.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: o, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => L, GP: () => k, KC: () => $, Nd: () => _, Rt: () => S, Vj: () => A, Wk: () => K, bz: () => C, cB: () => P, e5: () => T, hY: () => M, jK: () => F, jP: () => I, ob: () => D, rI: () => N, t4: () => R, vP: () => z, vg: () => H });
   var l = s(92081),
    o = s(90578),
    r = s(96345),
    t = s(64249),
    a = s(4603),
    i = s(91525),
    c = s(23436),
    d = s(1375),
    h = s(4077),
    p = s(58315),
    m = s(73563),
    u = s(35193),
    j = s(82999),
    x = s(13088),
    g = s(43864),
    b = s(24214),
    v = s(79532),
    y = s(60529),
    f = s(86070);
   const w = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(l.A, { ...w }),
    k = () => (0, f.jsx)(o.A, { ...w }),
    N = () => (0, f.jsx)(r.A, { ...w }),
    A = () => (0, f.jsx)(t.A, { ...w }),
    C = () => (0, f.jsx)(a.A, { ...w }),
    S = () => (0, f.jsx)(i.A, { ...w }),
    P = () => (0, f.jsx)(c.A, { ...w }),
    z = () => (0, f.jsx)(d.A, { ...w }),
    F = () => (0, f.jsx)(h.A, { ...w }),
    I = () => (0, f.jsx)(p.A, { ...w }),
    R = () => (0, f.jsx)(m.A, { ...w }),
    L = () => (0, f.jsx)(u.A, { ...w }),
    M = () => (0, f.jsx)(j.A, { ...w }),
    $ = () => (0, f.jsx)(x.A, { ...w }),
    K = () => (0, f.jsx)(g.A, { ...w }),
    T = () => (0, f.jsx)(b.A, { ...w }),
    D = () => (0, f.jsx)(v.A, { ...w }),
    H = () => (0, f.jsx)(y.A, { ...w });
  },
  32065(e, n, s) {
   s.d(n, { I: () => l.In });
   var l = s(29181);
  },
  44527(e, n, s) {
   (s.r(n), s.d(n, { assets: () => g, contentTitle: () => x, default: () => y, frontMatter: () => j, metadata: () => l, toc: () => b }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/description/placement/index","title":"Plaats descriptions tussen label en formulierveld","description":"Richtlijnen voor plaatsing van een description bij een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/2-placement/index.mdx","sourceDirName":"richtlijnen/formulieren/description/2-placement","slug":"/richtlijnen/formulieren/descriptions/plaatsing","permalink":"/richtlijnen/formulieren/descriptions/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-placement/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats descriptions tussen label en formulierveld","title_sm":"Plaatsing description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing description","pagination_label":"Plaatsing description","description":"Richtlijnen voor plaatsing van een description bij een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Inhoud description","permalink":"/richtlijnen/formulieren/descriptions/inhoud"},"next":{"title":"Meerdere descriptions","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen"}}');
   var o = s(86070),
    r = s(18439),
    t = s(56672),
    a = s(87682),
    i = s(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord1', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord1', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord1', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord1' }) })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)('p', { id: 'error-wachtwoord2', children: 'Je gekozen wachtwoord is te kort.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' }) })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Description onder het formulierveld plaatsen.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord3', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord3', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord3' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord3', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }) }), (0, o.jsx)('p', { id: 'error-wachtwoord4', children: 'Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: 'Plaats descriptions tussen label en formulierveld' }) }), '\n', (0, o.jsx)(n.p, { children: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde.' }), '\n', (0, o.jsxs)(n.p, { children: ['Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ', (0, o.jsx)(n.a, { href: 'https://adrianroselli.com/2017/01/avoid-messages-under-fields.html', children: (0, o.jsx)('span', { lang: 'en', children: 'Avoid Messages Under Fields' }) }), ' van Adrian Roselli.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Plaats descriptions tussen label en formulierveld', title_sm: 'Plaatsing description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    g = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  46847(e, n, s) {
   s.d(n, { $: () => l.$n });
   var l = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => c });
   var l = s(30662),
    o = s(46447),
    r = s(13526),
    t = s(45795),
    a = s(30758),
    i = s(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: a, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof s ? (0, i.jsx)(t.oz, { components: { a: o.N_ }, children: s }) : s;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(o.fz, { children: e })] }), u] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => r });
   var l = s(86070),
    o = s(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, s) {
   s.d(n, { H: () => _ });
   var l = s(28369),
    o = s(46447),
    r = s(13526),
    t = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    h = s(30758),
    p = s(31186),
    m = s(65904),
    u = s.n(m),
    j = s(14881),
    x = s(46847),
    g = s(86070);
   const b = ({ label: e, labelId: n, className: s, colorScheme: l, forcedColorsAdjust: o = !1, children: t, dangerouslySetInnerHTML: a, ...i }) => (0, g.jsxs)('figure', { className: (0, r.A)('ma-html-image', s), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var v = s(68197);
   const y = ({ children: e }) => (0, g.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const w = ({ children: e }) => (0, g.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   w.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: l, copyCode: o, colorScheme: t, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const p = 'string' == typeof s ? s : l || '',
        m = 'string' == typeof s ? u().highlight(s, u().languages[e], e) : u().highlight(l || '', u().languages[e], e),
        y = (0, g.jsx)(v.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: p } });
       return (0, g.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(b, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, g.jsx)(j.n, { children: (0, g.jsxs)(j.K, { label: 'Code', open: a, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === o && (0, g.jsx)(x.$, { 'data-copy-code': p, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: m = !0, children: u, container: j = 'document', language: x, designTokens: b }) => {
       const v = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        k = 'string' == typeof e ? e : p.qV(_ || v),
        [N, A] = (0, h.useState)(k),
        [C, S] = (0, h.useState)(s);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(k, { parser: x, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [k]);
       const P = (0, h.useId)();
       let z = h.Fragment;
       return (
        'paragraph' === j ? (z = y) : 'document' === j ? (z = f) : 'surface' === j && (z = w),
        (0, g.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          v && (0, g.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, g.jsx)(z, { children: (0, g.jsx)(o.v$, { children: v }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': P,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, g.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: P,
            hidden: !C,
            children: [
             (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
