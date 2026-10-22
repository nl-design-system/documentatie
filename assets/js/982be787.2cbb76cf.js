'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43423],
 {
  14881(e, l, n) {
   n.d(l, { K: () => d, n: () => c });
   var s = n(13526),
    r = n(30758),
    o = n(30662),
    t = n(32065),
    a = n(37168),
    i = n(86070);
   const c = (0, r.forwardRef)(({ as: e, className: l, children: n, ...r }, o) => {
     const t = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, i.jsx)(t, { ref: o, className: a, ...r, children: n });
    }),
    d = ({ className: e, classNamePanel: l, label: n, heading: r, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', l);
     return (0, i.jsxs)('details', { className: m, ...h, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [r && (0, i.jsx)(a.D, { level: c, appearance: d, children: r }), n] })] }) }), (0, i.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => a });
   var s = n(30758);
   const r = {},
    o = s.createContext(r);
   function t(e) {
    const l = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function a(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), s.createElement(o.Provider, { value: l }, e.children));
   }
  },
  28369(e, l, n) {
   n.d(l, { M: () => c });
   var s = n(46447),
    r = n(16194),
    o = n(30758),
    t = n(56528);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: h, type: m } = (0, o.useContext)(t.x),
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: r, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: l, children: n.map((l, n) => (0, i.jsxs)('span', { ...r({ line: l }), children: [e && (0, i.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, i.jsx)('span', { ...o({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => L, GP: () => N, KC: () => F, Nd: () => k, Rt: () => C, Vj: () => w, Wk: () => T, bz: () => z, cB: () => S, e5: () => H, hY: () => M, jK: () => P, jP: () => R, ob: () => W, rI: () => A, t4: () => D, vP: () => I, vg: () => $ });
   var s = n(92081),
    r = n(90578),
    o = n(96345),
    t = n(64249),
    a = n(4603),
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
    k = () => (0, f.jsx)(s.A, { ..._ }),
    N = () => (0, f.jsx)(r.A, { ..._ }),
    A = () => (0, f.jsx)(o.A, { ..._ }),
    w = () => (0, f.jsx)(t.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    C = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    P = () => (0, f.jsx)(h.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    D = () => (0, f.jsx)(u.A, { ..._ }),
    L = () => (0, f.jsx)(p.A, { ..._ }),
    M = () => (0, f.jsx)(b.A, { ..._ }),
    F = () => (0, f.jsx)(j.A, { ..._ }),
    T = () => (0, f.jsx)(g.A, { ..._ }),
    H = () => (0, f.jsx)(v.A, { ..._ }),
    W = () => (0, f.jsx)(x.A, { ..._ }),
    $ = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, l, n) {
   n.d(l, { I: () => s.In });
   var s = n(29181);
  },
  46847(e, l, n) {
   n.d(l, { $: () => s.$n });
   var s = n(50805);
  },
  56528(e, l, n) {
   n.d(l, { $: () => d, x: () => c });
   var s = n(30662),
    r = n(46447),
    o = n(13526),
    t = n(45795),
    a = n(30758),
    i = n(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: a, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, i.jsx)(t.oz, { components: { a: r.N_ }, children: n }) : n;
     return (0, i.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[l] }, children: a }) })] });
    };
  },
  56672(e, l, n) {
   n.d(l, { Ay: () => a, RM: () => o });
   var s = n(86070),
    r = n(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(l.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  71980(e, l, n) {
   (n.r(l), n.d(l, { assets: () => g, contentTitle: () => j, default: () => y, frontMatter: () => b, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/label/above-field/index","title":"Zet het label boven het formulierveld","description":"Richtlijnen voor label boven het formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/3-above-field/index.mdx","sourceDirName":"richtlijnen/formulieren/label/3-above-field","slug":"/richtlijnen/formulieren/labels/plaatsing","permalink":"/richtlijnen/formulieren/labels/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/3-above-field/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet het label boven het formulierveld","title_sm":"Plaatsing label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing label","pagination_label":"Plaatsing label","description":"Richtlijnen voor label boven het formulierveld.","slug":"/richtlijnen/formulieren/labels/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"},"next":{"title":"Label zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar"}}');
   var r = n(86070),
    o = n(18439),
    t = n(56672),
    a = n(87682),
    i = n(56528);
   function c(e) {
    const l = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Het label inconsequent plaatsen in een formulier (visueel en in code).', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'lievelingskleur', children: 'Wat is je lievelingskleur?' }) }), (0, r.jsx)('p', { children: (0, r.jsxs)('select', { name: 'lievelingskleur', id: 'lievelingskleur', children: [(0, r.jsx)('option', { children: 'Rood' }), (0, r.jsx)('option', { children: 'Blauw' }), (0, r.jsx)('option', { children: 'Wit' })] }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { type: 'text', id: 'dier', name: 'lievelingsdier' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'dier', children: 'Wat is je lievelingsdier?' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.header, { children: (0, r.jsx)(l.h1, { id: 'zet-het-label-boven-het-formulierveld', children: 'Zet het label boven het formulierveld' }) }), '\n', (0, r.jsx)(l.p, { children: 'Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd.' }), '\n', (0, r.jsx)(l.p, { children: 'Deze plaatsing heeft meerdere voordelen:' }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsx)(l.li, { children: 'Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht.' }), '\n', (0, r.jsx)(l.li, { children: 'Dit werkt beter voor gebruikers die de tekst inzoomen.' }), '\n', (0, r.jsx)(l.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), '\n'] }), '\n', (0, r.jsx)(l.p, { children: 'Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat.' }), '\n', (0, r.jsxs)(l.p, { children: ['Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ', (0, r.jsx)(l.a, { href: '/richtlijnen/stijl/ruimte/', children: 'de richtlijnen over stijl: Ruimte' }), '.'] }), '\n', (0, r.jsx)(l.p, { children: 'Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond.' }), '\n', (0, r.jsxs)(l.p, { children: ['Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ', (0, r.jsx)(l.a, { href: 'https://www.smashingmagazine.com/2021/02/material-design-text-fields/', children: (0, r.jsx)('span', { lang: 'en', children: 'Material Design Text Fields Are Badly Designed in Smashing Magazine' }) }), '.'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'Zet het label boven het formulierveld', title_sm: 'Plaatsing label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing label', pagination_label: 'Plaatsing label', description: 'Richtlijnen voor label boven het formulierveld.', slug: '/richtlijnen/formulieren/labels/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x();
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => k });
   var s = n(28369),
    r = n(46447),
    o = n(13526),
    t = n(68148),
    a = n(9016),
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
   const v = ({ label: e, labelId: l, className: n, colorScheme: s, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: a, ...i }) => (0, g.jsxs)('figure', { className: (0, o.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...i, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, g.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var x = n(68197);
   const y = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: s, copyCode: r, colorScheme: t, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof n ? n : s || '',
        u = 'string' == typeof n ? p().highlight(n, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        y = (0, g.jsx)(x.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: m } });
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', l), children: [d ? (0, g.jsx)(v, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, g.jsx)(b.n, { children: (0, g.jsxs)(b.K, { label: 'Code', open: a, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === r && (0, g.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: u = !0, children: p, container: b = 'document', language: j, designTokens: v }) => {
       const x = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(k || x),
        [A, w] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === b ? (I = y) : 'document' === b ? (I = f) : 'surface' === b && (I = _),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          x && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, g.jsx)(I, { children: (0, g.jsx)(r.v$, { children: x }) }) }) }),
          u &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(r.$n, {
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
          u &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             l &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
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
