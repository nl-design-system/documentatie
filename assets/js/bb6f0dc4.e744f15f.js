'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31466],
 {
  14881(e, l, n) {
   n.d(l, { K: () => d, n: () => i });
   var r = n(13526),
    s = n(30758),
    a = n(30662),
    o = n(32065),
    t = n(37168),
    c = n(86070);
   const i = (0, s.forwardRef)(({ as: e, className: l, children: n, ...s }, a) => {
     const o = e || 'div',
      t = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, c.jsx)(o, { ref: a, className: t, ...s, children: n });
    }),
    d = ({ className: e, classNamePanel: l, label: n, heading: s, headingLevel: i, headingApperance: d, ...h }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      p = (0, r.A)('utrecht-accordion__panel', l);
     return (0, c.jsxs)('details', { className: u, ...h, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(o.I, { children: (0, c.jsx)(a.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [s && (0, c.jsx)(t.D, { level: i, appearance: d, children: s }), n] })] }) }), (0, c.jsx)('div', { className: p, children: h.children })] });
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
   n.d(l, { M: () => i });
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
   var c = n(86070);
   function i({ lineNumber: e, syntax: l, textContent: n, trim: i }) {
    let d = n;
    const { title: h, type: u } = (0, a.useContext)(o.x),
     p = (0, a.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: t, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: a }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...s({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...a({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => $, GP: () => N, KC: () => L, Nd: () => _, Rt: () => S, Vj: () => w, Wk: () => M, bz: () => C, cB: () => z, e5: () => W, hY: () => H, jK: () => I, jP: () => F, ob: () => T, rI: () => A, t4: () => R, vP: () => P, vg: () => D });
   var r = n(92081),
    s = n(90578),
    a = n(96345),
    o = n(64249),
    t = n(4603),
    c = n(91525),
    i = n(23436),
    d = n(1375),
    h = n(4077),
    u = n(58315),
    p = n(73563),
    m = n(35193),
    g = n(82999),
    j = n(13088),
    x = n(43864),
    b = n(24214),
    v = n(79532),
    y = n(60529),
    f = n(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(r.A, { ...k }),
    N = () => (0, f.jsx)(s.A, { ...k }),
    A = () => (0, f.jsx)(a.A, { ...k }),
    w = () => (0, f.jsx)(o.A, { ...k }),
    C = () => (0, f.jsx)(t.A, { ...k }),
    S = () => (0, f.jsx)(c.A, { ...k }),
    z = () => (0, f.jsx)(i.A, { ...k }),
    P = () => (0, f.jsx)(d.A, { ...k }),
    I = () => (0, f.jsx)(h.A, { ...k }),
    F = () => (0, f.jsx)(u.A, { ...k }),
    R = () => (0, f.jsx)(p.A, { ...k }),
    $ = () => (0, f.jsx)(m.A, { ...k }),
    H = () => (0, f.jsx)(g.A, { ...k }),
    L = () => (0, f.jsx)(j.A, { ...k }),
    M = () => (0, f.jsx)(x.A, { ...k }),
    W = () => (0, f.jsx)(b.A, { ...k }),
    T = () => (0, f.jsx)(v.A, { ...k }),
    D = () => (0, f.jsx)(y.A, { ...k });
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
   n.d(l, { $: () => d, x: () => i });
   var r = n(30662),
    s = n(46447),
    a = n(13526),
    o = n(45795),
    t = n(30758),
    c = n(86070);
   const i = (0, t.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: t, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      m = 'string' == typeof n ? (0, c.jsx)(o.oz, { components: { a: s.N_ }, children: n }) : n;
     return (0, c.jsxs)(u, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(r.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(r.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(s.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: h[l] }, children: t }) })] });
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
  83200(e, l, n) {
   (n.r(l), n.d(l, { assets: () => x, contentTitle: () => j, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => b }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/label/index","title":"Een placeholder is geen vervanger van een label","description":"Richtlijnen over placeholder niet gebruiken als vervanger van een label.","source":"@site/docs/richtlijnen/formulieren/placeholder/1-label/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/1-label","slug":"/richtlijnen/formulieren/placeholders/niet-als-label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/1-label/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Een placeholder is geen vervanger van een label","title_sm":"Placeholder is geen label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder is geen label","pagination_label":"Placeholder is geen label","description":"Richtlijnen over placeholder niet gebruiken als vervanger van een label.","slug":"/richtlijnen/formulieren/placeholders/niet-als-label","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"},"next":{"title":"Placeholder bij zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie"}}');
   var s = n(86070),
    a = n(18439),
    o = n(56672),
    t = n(87682),
    c = n(56528);
   function i(e) {
    const l = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Het label altijd tonen en een description gebruiken als aanvullende informatie.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur1', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { id: 'description-kleur1', children: 'Vul de naam van een kleur in.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { 'aria-describedby': 'description-kleur1', id: 'lievelingskleur1', name: 'lievelingskleur', type: 'text' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Het label altijd tonen en een placeholder als korte hint gebruiken.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur2', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur2', type: 'text', name: 'lievelingskleur', placeholder: 'Vul een kleurnaam in' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Het label onzichtbaar maken.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { className: 'sr-only', htmlFor: 'lievelingskleur3', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur3', name: 'lievelingskleur', placeholder: 'Wat is je lievelingskleur?', type: 'text' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur4', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur4', name: 'lievelingskleur', placeholder: 'Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
   function h(e) {
    const l = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: 'Een placeholder is geen vervanger van een label' }) }), '\n', (0, s.jsx)(l.p, { children: 'De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld.' }), '\n', (0, s.jsx)(l.p, { children: 'Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen.' }), '\n', (0, s.jsx)(l.p, { children: 'Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt.' })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.4.10/', children: 'Succescriterium 1.4.10 Reflow' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Een placeholder is geen vervanger van een label', title_sm: 'Placeholder is geen label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function v(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v();
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => _ });
   var r = n(28369),
    s = n(46447),
    a = n(13526),
    o = n(68148),
    t = n(9016),
    c = n(69303),
    i = n(91635),
    d = n(30734),
    h = n(30758),
    u = n(31186),
    p = n(65904),
    m = n.n(p),
    g = n(14881),
    j = n(46847),
    x = n(86070);
   const b = ({ label: e, labelId: l, className: n, colorScheme: r, forcedColorsAdjust: s = !1, children: o, dangerouslySetInnerHTML: t, ...c }) => (0, x.jsxs)('figure', { className: (0, a.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...c, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, x.jsx)('div', { className: (0, a.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === r, 'ma-html-image__body--color-scheme-light': 'light' === r, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: o })] });
   var v = n(68197);
   const y = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: r, copyCode: s, colorScheme: o, defaultExpandedCode: t, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const u = 'string' == typeof n ? n : r || '',
        p = 'string' == typeof n ? m().highlight(n, m().languages[e], e) : m().highlight(r || '', m().languages[e], e),
        y = (0, x.jsx)(v.b, { Component: 'div', className: (0, a.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === o, 'ma-canvas-astro__example--color-scheme-light': 'light' === o }), style: c, dangerouslySetInnerHTML: { __html: u } });
       return (0, x.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', l), children: [d ? (0, x.jsx)(b, { forcedColorsAdjust: i, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, x.jsx)(g.n, { children: (0, x.jsxs)(g.K, { label: 'Code', open: t, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === s && (0, x.jsx)(j.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: p = !0, children: m, container: g = 'document', language: j, designTokens: b }) => {
       const v = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || v),
        [A, w] = (0, h.useState)(N),
        [C, S] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [o.A, t.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === g ? (P = y) : 'document' === g ? (P = f) : 'surface' === g && (P = k),
        (0, x.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          v && (0, x.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, x.jsx)(P, { children: (0, x.jsx)(s.v$, { children: v }) }) }) }),
          p &&
           (0, x.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(s.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, x.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             l &&
              (0, x.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(s.$n, {
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
