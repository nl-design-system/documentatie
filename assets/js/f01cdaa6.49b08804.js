'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74309],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var o = l(13526),
    r = l(30758),
    s = l(30662),
    t = l(32065),
    a = l(37168),
    i = l(86070);
   const c = (0, r.forwardRef)(({ as: e, className: n, children: l, ...r }, s) => {
     const t = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: s, className: a, ...r, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: r, headingLevel: c, headingApperance: d, ...m }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(s.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [r && (0, i.jsx)(a.D, { level: c, appearance: d, children: r }), l] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
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
   function a(e) {
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
    const { title: m, type: u } = (0, s.useContext)(t.x),
     h = (0, s.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => N, KC: () => T, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => P, bz: () => C, cB: () => z, e5: () => $, hY: () => F, jK: () => R, jP: () => D, ob: () => E, rI: () => A, t4: () => L, vP: () => I, vg: () => H });
   var o = l(92081),
    r = l(90578),
    s = l(96345),
    t = l(64249),
    a = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    m = l(4077),
    u = l(58315),
    h = l(73563),
    g = l(35193),
    p = l(82999),
    v = l(13088),
    j = l(43864),
    x = l(24214),
    f = l(79532),
    b = l(60529),
    y = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, y.jsx)(o.A, { ..._ }),
    N = () => (0, y.jsx)(r.A, { ..._ }),
    A = () => (0, y.jsx)(s.A, { ..._ }),
    w = () => (0, y.jsx)(t.A, { ..._ }),
    C = () => (0, y.jsx)(a.A, { ..._ }),
    S = () => (0, y.jsx)(i.A, { ..._ }),
    z = () => (0, y.jsx)(c.A, { ..._ }),
    I = () => (0, y.jsx)(d.A, { ..._ }),
    R = () => (0, y.jsx)(m.A, { ..._ }),
    D = () => (0, y.jsx)(u.A, { ..._ }),
    L = () => (0, y.jsx)(h.A, { ..._ }),
    M = () => (0, y.jsx)(g.A, { ..._ }),
    F = () => (0, y.jsx)(p.A, { ..._ }),
    T = () => (0, y.jsx)(v.A, { ..._ }),
    P = () => (0, y.jsx)(j.A, { ..._ }),
    $ = () => (0, y.jsx)(x.A, { ..._ }),
    E = () => (0, y.jsx)(f.A, { ..._ }),
    H = () => (0, y.jsx)(b.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => o.In });
   var o = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var o = l(30662),
    r = l(46447),
    s = l(13526),
    t = l(45795),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(t.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(o.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(o.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(r.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var o = l(86070),
    r = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  69540(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => b, frontMatter: () => p, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/error/summary/index","title":"Zet een samenvatting van de foutmeldingen boven het formulier","description":"Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.","source":"@site/docs/richtlijnen/formulieren/error/6-summary/index.mdx","sourceDirName":"richtlijnen/formulieren/error/6-summary","slug":"/richtlijnen/formulieren/foutmeldingen/samenvatting","permalink":"/richtlijnen/formulieren/foutmeldingen/samenvatting","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/6-summary/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet een samenvatting van de foutmeldingen boven het formulier","title_sm":"Samenvatting fouten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Samenvatting fouten","pagination_label":"Samenvatting fouten","description":"Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/samenvatting","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"HTML-formuliervalidatie","permalink":"/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie"},"next":{"title":"Screenreaderfeedback","permalink":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback"}}');
   var r = l(86070),
    s = l(18439),
    t = l(56672),
    a = l(87682),
    i = l(56528);
   function c(e) {
    return (0, r.jsx)(i.$, { appearance: 'do', title: 'Een samenvatting van de fouten boven het formulier.', description: 'Verplaats focus naar de samenvatting of de kop van de samenvatting.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('h2', { children: 'Invoerfouten gevonden in het formulier' }), (0, r.jsxs)('ul', { children: [(0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '#naam', children: 'Vul uw naam in.' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '#email', children: 'Vul uw e-mailadres in.' }) })] }), (0, r.jsx)('form', { children: (0, r.jsx)('p', { children: '[...]' }) })] }) }) });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c();
   }
   function m(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'een samenvatting boven het formulier en;' }), '\n', (0, r.jsx)(n.li, { children: 'per formulierveld de foutmelding herhalen.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding.' }), '\n', (0, r.jsx)(n.p, { children: 'De constructie is als volgt:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Na het versturen van een formulier met fouten wordt ', (0, r.jsx)(n.strong, { children: 'boven' }), ' het formulier een lijst met fouten getoond.'] }), '\n', (0, r.jsx)(n.li, { children: 'Deze lijst heeft een kopje met bijvoorbeeld de tekst:\n"Er was een probleem met je inzending. Verbeter de fouten voor je verder gaat.".' }), '\n', (0, r.jsx)(n.li, { children: 'Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld.' }), '\n', (0, r.jsxs)(n.li, { children: ['Het kopje boven de fouten krijgt de toetsenbordfocus. Dan staat het meteen in beeld, wordt het voorgelezen door ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en is de tabvolgorde logisch: de links naar de betreffende velden zijn de eerstvolgende items.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['GOV.UK geeft hiervan enkele duidelijke voorbeelden op ', (0, r.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-summary/', children: (0, r.jsx)('span', { lang: 'en', children: 'Components Error summary' }) }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Duidelijke foutmeldingen zijn nodig om te voldoen aan het ', (0, r.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'WCAG-succescriterium 3.3.1 Foutidentificatie' }), ' (niveau A).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const p = { title: 'Zet een samenvatting van de foutmeldingen boven het formulier', title_sm: 'Samenvatting fouten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Samenvatting fouten', pagination_label: 'Samenvatting fouten', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function f(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(g, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f();
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var o = l(28369),
    r = l(46447),
    s = l(13526),
    t = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    h = l(65904),
    g = l.n(h),
    p = l(14881),
    v = l(46847),
    j = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: o, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: a, ...i }) => (0, j.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var f = l(68197);
   const b = ({ children: e }) => (0, j.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, j.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: r, colorScheme: t, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : o || '',
        h = 'string' == typeof l ? g().highlight(l, g().languages[e], e) : g().highlight(o || '', g().languages[e], e),
        b = (0, j.jsx)(f.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: u } });
       return (0, j.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: b }) : b, (0, j.jsx)(p.n, { children: (0, j.jsxs)(p.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === r && (0, j.jsx)(v.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: g, container: p = 'document', language: v, designTokens: x }) => {
       const f = 'function' == typeof g ? g() : g,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || f),
        [A, w] = (0, m.useState)(N),
        [C, S] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === p ? (I = b) : 'document' === p ? (I = y) : 'surface' === p && (I = _),
        (0, j.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, j.jsx)(I, { children: (0, j.jsx)(r.v$, { children: f }) }) }) }),
          h &&
           (0, j.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(r.$n, {
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
           (0, j.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, j.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(r.$n, {
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
