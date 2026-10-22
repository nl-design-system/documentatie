'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [63986],
 {
  10982(e, l, n) {
   (n.r(l), n.d(l, { assets: () => g, contentTitle: () => j, default: () => y, frontMatter: () => b, metadata: () => r, toc: () => v }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/always-visible/index","title":"Zorg ervoor dat het label altijd zichtbaar is","description":"Richtlijnen voor zichtbaarheid label van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/4-always-visible/index.mdx","sourceDirName":"richtlijnen/formulieren/label/4-always-visible","slug":"/richtlijnen/formulieren/labels/altijd-zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/4-always-visible/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg ervoor dat het label altijd zichtbaar is","title_sm":"Label zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Label zichtbaar","pagination_label":"Label zichtbaar","description":"Richtlijnen voor zichtbaarheid label van een formulierveld.","slug":"/richtlijnen/formulieren/labels/altijd-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"},"next":{"title":"Label bevat alleen tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst"}}');
   var s = n(86070),
    a = n(18439),
    o = n(56672),
    t = n(87682),
    i = n(56528);
   function c(e) {
    const l = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'dier1', children: 'Wat is je lievelingsdier?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?', 'aria-label': 'Wat is je lievelingsdier?' }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }) }), '\n', (0, s.jsx)(l.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, s.jsxs)(l.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, s.jsx)(l.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, s.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, s.jsxs)(l.p, { children: ['Een label vertelt ', (0, s.jsx)(l.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, s.jsx)(l.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, s.jsx)(l.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, s.jsxs)(l.p, { children: ['De ', (0, s.jsx)(l.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, s.jsx)(l.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, s.jsx)(l.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker, als het label altijd zichtbaar is.' })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'Zorg ervoor dat het label altijd zichtbaar is', title_sm: 'Label zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  14881(e, l, n) {
   n.d(l, { K: () => d, n: () => c });
   var r = n(13526),
    s = n(30758),
    a = n(30662),
    o = n(32065),
    t = n(37168),
    i = n(86070);
   const c = (0, s.forwardRef)(({ as: e, className: l, children: n, ...s }, a) => {
     const o = e || 'div',
      t = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, i.jsx)(o, { ref: a, className: t, ...s, children: n });
    }),
    d = ({ className: e, classNamePanel: l, label: n, heading: s, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, r.A)('utrecht-accordion__section', e),
      u = (0, r.A)('utrecht-accordion__panel', l);
     return (0, i.jsxs)('details', { className: m, ...h, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(o.I, { children: (0, i.jsx)(a.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [s && (0, i.jsx)(t.D, { level: c, appearance: d, children: s }), n] })] }) }), (0, i.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, l, n) {
   n.d(l, { R: () => o, x: () => t });
   var r = n(30758);
   const s = {},
    a = r.createContext(s);
   function o(e) {
    const l = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function t(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), r.createElement(a.Provider, { value: l }, e.children));
   }
  },
  28369(e, l, n) {
   n.d(l, { M: () => c });
   var r = n(46447),
    s = n(16194),
    a = n(30758),
    o = n(56528);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: h, type: m } = (0, a.useContext)(o.x),
     u = (0, a.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: t, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: a }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: l, children: n.map((l, n) => (0, i.jsxs)('span', { ...s({ line: l }), children: [e && (0, i.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, i.jsx)('span', { ...a({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => P, GP: () => N, KC: () => M, Nd: () => k, Rt: () => C, Vj: () => w, Wk: () => W, bz: () => z, cB: () => S, e5: () => $, hY: () => D, jK: () => I, jP: () => R, ob: () => T, rI: () => A, t4: () => F, vP: () => L, vg: () => H });
   var r = n(92081),
    s = n(90578),
    a = n(96345),
    o = n(64249),
    t = n(4603),
    i = n(91525),
    c = n(23436),
    d = n(1375),
    h = n(4077),
    m = n(58315),
    u = n(73563),
    p = n(35193),
    b = n(82999),
    j = n(13088),
    g = n(43864),
    v = n(24214),
    x = n(79532),
    y = n(60529),
    f = n(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(r.A, { ..._ }),
    N = () => (0, f.jsx)(s.A, { ..._ }),
    A = () => (0, f.jsx)(a.A, { ..._ }),
    w = () => (0, f.jsx)(o.A, { ..._ }),
    z = () => (0, f.jsx)(t.A, { ..._ }),
    C = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    L = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(h.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    F = () => (0, f.jsx)(u.A, { ..._ }),
    P = () => (0, f.jsx)(p.A, { ..._ }),
    D = () => (0, f.jsx)(b.A, { ..._ }),
    M = () => (0, f.jsx)(j.A, { ..._ }),
    W = () => (0, f.jsx)(g.A, { ..._ }),
    $ = () => (0, f.jsx)(v.A, { ..._ }),
    T = () => (0, f.jsx)(x.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, l, n) {
   n.d(l, { I: () => r.In });
   var r = n(29181);
  },
  46847(e, l, n) {
   n.d(l, { $: () => r.$n });
   var r = n(50805);
  },
  56528(e, l, n) {
   n.d(l, { $: () => d, x: () => c });
   var r = n(30662),
    s = n(46447),
    a = n(13526),
    o = n(45795),
    t = n(30758),
    i = n(86070);
   const c = (0, t.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: t, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, i.jsx)(o.oz, { components: { a: s.N_ }, children: n }) : n;
     return (0, i.jsxs)(m, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(r.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(r.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[l] }, children: t }) })] });
    };
  },
  56672(e, l, n) {
   n.d(l, { Ay: () => t, RM: () => a });
   var r = n(86070),
    s = n(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const l = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.strong, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => k });
   var r = n(28369),
    s = n(46447),
    a = n(13526),
    o = n(68148),
    t = n(9016),
    i = n(69303),
    c = n(91635),
    d = n(30734),
    h = n(30758),
    m = n(31186),
    u = n(65904),
    p = n.n(u),
    b = n(14881),
    j = n(46847),
    g = n(86070);
   const v = ({ label: e, labelId: l, className: n, colorScheme: r, forcedColorsAdjust: s = !1, children: o, dangerouslySetInnerHTML: t, ...i }) => (0, g.jsxs)('figure', { className: (0, a.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...i, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, g.jsx)('div', { className: (0, a.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === r, 'ma-html-image__body--color-scheme-light': 'light' === r, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: o })] });
   var x = n(68197);
   const y = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: r, copyCode: s, colorScheme: o, defaultExpandedCode: t, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof n ? n : r || '',
        u = 'string' == typeof n ? p().highlight(n, p().languages[e], e) : p().highlight(r || '', p().languages[e], e),
        y = (0, g.jsx)(x.b, { Component: 'div', className: (0, a.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === o, 'ma-canvas-astro__example--color-scheme-light': 'light' === o }), style: i, dangerouslySetInnerHTML: { __html: m } });
       return (0, g.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', l), children: [d ? (0, g.jsx)(v, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, g.jsx)(b.n, { children: (0, g.jsxs)(b.K, { label: 'Code', open: t, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === s && (0, g.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: u = !0, children: p, container: b = 'document', language: j, designTokens: v }) => {
       const x = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(k || x),
        [A, w] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [o.A, t.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === b ? (L = y) : 'document' === b ? (L = f) : 'surface' === b && (L = _),
        (0, g.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          x && (0, g.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, g.jsx)(L, { children: (0, g.jsx)(s.v$, { children: x }) }) }) }),
          u &&
           (0, g.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(s.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, g.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             l &&
              (0, g.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(s.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
