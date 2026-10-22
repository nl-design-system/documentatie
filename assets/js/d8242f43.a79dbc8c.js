'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8238],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => i });
   var s = o(13526),
    l = o(30758),
    t = o(30662),
    r = o(32065),
    a = o(37168),
    c = o(86070);
   const i = (0, l.forwardRef)(({ as: e, className: n, children: o, ...l }, t) => {
     const r = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(r, { ref: t, className: a, ...l, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: l, headingLevel: i, headingApperance: d, ...u }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      m = (0, s.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...u, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.I, { children: (0, c.jsx)(t.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [l && (0, c.jsx)(a.D, { level: i, appearance: d, children: l }), o] })] }) }), (0, c.jsx)('div', { className: m, children: u.children })] });
    };
  },
  18010(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => b, default: () => f, frontMatter: () => g, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/focus-visible/index","title":"Maak toetsenbordfocus goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.","source":"@site/docs/richtlijnen/formulieren/visual-design/4-focus-visible/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/4-focus-visible","slug":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/4-focus-visible/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak toetsenbordfocus goed zichtbaar","title_sm":"Focus goed zichtbaar","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Focus goed zichtbaar","pagination_label":"Focus goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.","slug":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar"},"next":{"title":"Invoerveld goed aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar"}}');
   var l = o(86070),
    t = o(18439),
    r = o(56672),
    a = o(87682),
    c = o(56528);
   function i(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(c.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke visuele focusstijl.', description: 'In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'focus-voorbeeld', children: 'Onderwerp' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { type: 'text', id: 'focus-voorbeeld' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'maak-toetsenbordfocus-goed-zichtbaar', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, l.jsx)(n.p, { children: 'Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.' }), '\n', (0, l.jsxs)(n.p, { children: ['Dit doe je door een minimale dikte van ', (0, l.jsx)(n.strong, { children: '2 pixels' }), ' en een ', (0, l.jsx)(n.strong, { children: 'minimaal contrast van 3:1' }), ' ten opzichte van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component \u2018bovenop\u2019 ligt.'] }), '\n', (0, l.jsx)(n.p, { children: 'Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario\u2019s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.' }), '\n', (0, l.jsxs)(n.p, { children: ['Zorg er ook voor dat de focusring heeft een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, l.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, l.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.7/', children: 'Succescriterium 2.4.7 Focus zichtbaar' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.13/', children: 'Succescriterium 2.4.13 Focusweergave' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Maak toetsenbordfocus goed zichtbaar', title_sm: 'Focus goed zichtbaar', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    j = {},
    v = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x();
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => a });
   var s = o(30758);
   const l = {},
    t = s.createContext(l);
   function r(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => i });
   var s = o(46447),
    l = o(16194),
    t = o(30758),
    r = o(56528);
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
   var c = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: u, type: h } = (0, t.useContext)(r.x),
     m = (0, t.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: l, getTokenProps: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...l({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => L, GP: () => N, KC: () => T, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => $, bz: () => z, cB: () => S, e5: () => D, hY: () => P, jK: () => I, jP: () => M, ob: () => H, rI: () => A, t4: () => R, vP: () => F, vg: () => K });
   var s = o(92081),
    l = o(90578),
    t = o(96345),
    r = o(64249),
    a = o(4603),
    c = o(91525),
    i = o(23436),
    d = o(1375),
    u = o(4077),
    h = o(58315),
    m = o(73563),
    p = o(35193),
    g = o(82999),
    b = o(13088),
    j = o(43864),
    v = o(24214),
    x = o(79532),
    f = o(60529),
    y = o(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(s.A, { ...k }),
    N = () => (0, y.jsx)(l.A, { ...k }),
    A = () => (0, y.jsx)(t.A, { ...k }),
    w = () => (0, y.jsx)(r.A, { ...k }),
    z = () => (0, y.jsx)(a.A, { ...k }),
    C = () => (0, y.jsx)(c.A, { ...k }),
    S = () => (0, y.jsx)(i.A, { ...k }),
    F = () => (0, y.jsx)(d.A, { ...k }),
    I = () => (0, y.jsx)(u.A, { ...k }),
    M = () => (0, y.jsx)(h.A, { ...k }),
    R = () => (0, y.jsx)(m.A, { ...k }),
    L = () => (0, y.jsx)(p.A, { ...k }),
    P = () => (0, y.jsx)(g.A, { ...k }),
    T = () => (0, y.jsx)(b.A, { ...k }),
    $ = () => (0, y.jsx)(j.A, { ...k }),
    D = () => (0, y.jsx)(v.A, { ...k }),
    H = () => (0, y.jsx)(x.A, { ...k }),
    K = () => (0, y.jsx)(f.A, { ...k });
  },
  32065(e, n, o) {
   o.d(n, { I: () => s.In });
   var s = o(29181);
  },
  46847(e, n, o) {
   o.d(n, { $: () => s.$n });
   var s = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => i });
   var s = o(30662),
    l = o(46447),
    t = o(13526),
    r = o(45795),
    a = o(30758),
    c = o(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, c.jsx)(r.oz, { components: { a: l.N_ }, children: o }) : o;
     return (0, c.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(l.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(l.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(l.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(s.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(l.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => t });
   var s = o(86070),
    l = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => _ });
   var s = o(28369),
    l = o(46447),
    t = o(13526),
    r = o(68148),
    a = o(9016),
    c = o(69303),
    i = o(91635),
    d = o(30734),
    u = o(30758),
    h = o(31186),
    m = o(65904),
    p = o.n(m),
    g = o(14881),
    b = o(46847),
    j = o(86070);
   const v = ({ label: e, labelId: n, className: o, colorScheme: s, forcedColorsAdjust: l = !1, children: r, dangerouslySetInnerHTML: a, ...c }) => (0, j.jsxs)('figure', { className: (0, t.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': l }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var x = o(68197);
   const f = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(l.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   f.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(l.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: s, copyCode: l, colorScheme: r, defaultExpandedCode: a, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const h = 'string' == typeof o ? o : s || '',
        m = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        f = (0, j.jsx)(x.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: c, dangerouslySetInnerHTML: { __html: h } });
       return (0, j.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(v, { forcedColorsAdjust: i, label: d, labelId: d ? (0, u.useId)() : void 0, children: f }) : f, (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === l && (0, j.jsx)(b.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: m = !0, children: p, container: g = 'document', language: b, designTokens: v }) => {
       const x = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || x),
        [A, w] = (0, u.useState)(N),
        [z, C] = (0, u.useState)(o);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: b, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === g ? (F = f) : 'document' === g ? (F = y) : 'surface' === g && (F = k),
        (0, j.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          x && (0, j.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, j.jsx)(F, { children: (0, j.jsx)(l.v$, { children: x }) }) }) }),
          m &&
           (0, j.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(l.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, j.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(l.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
