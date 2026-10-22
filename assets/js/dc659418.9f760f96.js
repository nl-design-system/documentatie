'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [88963],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => i });
   var a = l(13526),
    o = l(30758),
    s = l(30662),
    t = l(32065),
    r = l(37168),
    c = l(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, s) => {
     const t = e || 'div',
      r = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(t, { ref: s, className: r, ...o, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: i, headingApperance: d, ...m }) => {
     const h = (0, a.A)('utrecht-accordion__section', e),
      u = (0, a.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...m, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(t.I, { children: (0, c.jsx)(s.rI, {}) }) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [o && (0, c.jsx)(r.D, { level: i, appearance: d, children: o }), l] })] }) }), (0, c.jsx)('div', { className: u, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => r });
   var a = l(30758);
   const o = {},
    s = a.createContext(o);
   function t(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), a.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => i });
   var a = l(46447),
    o = l(16194),
    s = l(30758),
    t = l(56528);
   const r = {
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
    const { title: m, type: h } = (0, s.useContext)(t.x),
     u = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(a.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => A, KC: () => $, Nd: () => _, Rt: () => C, Vj: () => z, Wk: () => F, bz: () => w, cB: () => S, e5: () => P, hY: () => T, jK: () => R, jP: () => D, ob: () => H, rI: () => N, t4: () => L, vP: () => I, vg: () => W });
   var a = l(92081),
    o = l(90578),
    s = l(96345),
    t = l(64249),
    r = l(4603),
    c = l(91525),
    i = l(23436),
    d = l(1375),
    m = l(4077),
    h = l(58315),
    u = l(73563),
    p = l(35193),
    b = l(82999),
    j = l(13088),
    g = l(43864),
    x = l(24214),
    v = l(79532),
    y = l(60529),
    k = l(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(a.A, { ...f }),
    A = () => (0, k.jsx)(o.A, { ...f }),
    N = () => (0, k.jsx)(s.A, { ...f }),
    z = () => (0, k.jsx)(t.A, { ...f }),
    w = () => (0, k.jsx)(r.A, { ...f }),
    C = () => (0, k.jsx)(c.A, { ...f }),
    S = () => (0, k.jsx)(i.A, { ...f }),
    I = () => (0, k.jsx)(d.A, { ...f }),
    R = () => (0, k.jsx)(m.A, { ...f }),
    D = () => (0, k.jsx)(h.A, { ...f }),
    L = () => (0, k.jsx)(u.A, { ...f }),
    M = () => (0, k.jsx)(p.A, { ...f }),
    T = () => (0, k.jsx)(b.A, { ...f }),
    $ = () => (0, k.jsx)(j.A, { ...f }),
    F = () => (0, k.jsx)(g.A, { ...f }),
    P = () => (0, k.jsx)(x.A, { ...f }),
    H = () => (0, k.jsx)(v.A, { ...f }),
    W = () => (0, k.jsx)(y.A, { ...f });
  },
  32065(e, n, l) {
   l.d(n, { I: () => a.In });
   var a = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => a.$n });
   var a = l(50805);
  },
  55832(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => j, default: () => y, frontMatter: () => b, metadata: () => a, toc: () => x }));
   const a = JSON.parse('{"id":"richtlijnen/formulieren/label/visible-acccessible-name/index","title":"De zichtbare naam moet overeenkomen met de toegankelijke naam","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/index.mdx","sourceDirName":"richtlijnen/formulieren/label/2-visible-acccessible-name","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/index.mdx","tags":[],"version":"current","frontMatter":{"title":"De zichtbare naam moet overeenkomen met de toegankelijke naam","title_sm":"Zichtbare naam label","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Zichtbare naam label","pagination_label":"Zichtbare naam label","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke naam label","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam"},"next":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"}}');
   var o = l(86070),
    s = l(18439),
    t = l(56672),
    r = l(87682),
    c = l(56528);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'hond', children: 'Hoe heet je hond' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { type: 'text', id: 'hond', name: 'hond' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsx)('p', { children: (0, o.jsx)('input', { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: 'Zoek' }), (0, o.jsx)('input', { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, o.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, o.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'Succescriterium 2.5.3: Label in naam' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam', title_sm: 'Zichtbare naam label', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => i });
   var a = l(30662),
    o = l(46447),
    s = l(13526),
    t = l(45795),
    r = l(30758),
    c = l(86070);
   const i = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: r, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(t.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(a.jP, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, c.jsx)(a.jK, {}) }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(o.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: m[n] }, children: r }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => s });
   var a = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var a = l(28369),
    o = l(46447),
    s = l(13526),
    t = l(68148),
    r = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    m = l(30758),
    h = l(31186),
    u = l(65904),
    p = l.n(u),
    b = l(14881),
    j = l(46847),
    g = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: a, forcedColorsAdjust: o = !1, children: t, dangerouslySetInnerHTML: r, ...c }) => (0, g.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...c, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === a, 'ma-html-image__body--color-scheme-light': 'light' === a, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: r, 'aria-hidden': 'true', children: t })] });
   var v = l(68197);
   const y = ({ children: e }) => (0, g.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, g.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, g.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: a, copyCode: o, colorScheme: t, defaultExpandedCode: r, designTokens: c, forcedColorsAdjust: i = !0, label: d }) => {
       const h = 'string' == typeof l ? l : a || '',
        u = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(a || '', p().languages[e], e),
        y = (0, g.jsx)(v.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: c, dangerouslySetInnerHTML: { __html: h } });
       return (0, g.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(x, { forcedColorsAdjust: i, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, g.jsx)(b.n, { children: (0, g.jsxs)(b.K, { label: 'Code', open: r, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === o && (0, g.jsx)(j.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: b = 'document', language: j, designTokens: x }) => {
       const v = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : h.qV(_ || v),
        [N, z] = (0, m.useState)(A),
        [w, C] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: j, plugins: [t.A, r.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [A]);
       const S = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === b ? (I = y) : 'document' === b ? (I = k) : 'surface' === b && (I = f),
        (0, g.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          v && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, g.jsx)(I, { children: (0, g.jsx)(o.v$, { children: v }) }) }) }),
          u &&
           (0, g.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!w);
             },
             'aria-expanded': w,
             'aria-controls': S,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, g.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !w,
            children: [
             (0, g.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(o.$n, {
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
