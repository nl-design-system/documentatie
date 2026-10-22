'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4168],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var o = l(13526),
    s = l(30758),
    r = l(30662),
    t = l(32065),
    a = l(37168),
    i = l(86070);
   const c = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, r) => {
     const t = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: r, className: a, ...s, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: c, headingApperance: d, ...m }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(r.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [s && (0, i.jsx)(a.D, { level: c, appearance: d, children: s }), l] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  15762(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => j, default: () => y, frontMatter: () => p, metadata: () => o, toc: () => v }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/questions/why/index","title":"Leg uit waarom informatie nodig is","description":"Richtlijnen over uitleggen waarom informatie nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/1-why/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/1-why","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","permalink":"/richtlijnen/formulieren/vragen/leg-uit-waarom","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/1-why/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Leg uit waarom informatie nodig is","title_sm":"Waarom stel je de vraag","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Waarom stel je de vraag","pagination_label":"Waarom stel je de vraag","description":"Richtlijnen over uitleggen waarom informatie nodig is.","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"},"next":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"}}');
   var s = l(86070),
    r = l(18439),
    t = l(56672),
    a = l(87682),
    i = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Leg het doel uit.', description: 'Met uitleg weet de gebruiker waar die aan toe is.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'email', children: 'E-mailadres' }) }), (0, s.jsx)('p', { id: 'email-description', children: 'We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { 'aria-describedby': 'email-description', autoComplete: 'email', id: 'email', type: 'email' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'bsn', children: 'Burgerservicenummer' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'bsn', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'leg-uit-waarom-informatie-nodig-is', children: 'Leg uit waarom informatie nodig is' }) }), '\n', (0, s.jsx)(n.p, { children: 'Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven.' }), '\n', (0, s.jsx)(n.p, { children: 'Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   const p = { title: 'Leg uit waarom informatie nodig is', title_sm: 'Waarom stel je de vraag', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waarom stel je de vraag', pagination_label: 'Waarom stel je de vraag', description: 'Richtlijnen over uitleggen waarom informatie nodig is.', slug: '/richtlijnen/formulieren/vragen/leg-uit-waarom', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(g, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
   var o = l(30758);
   const s = {},
    r = o.createContext(s);
   function t(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    s = l(16194),
    r = l(30758),
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
    const { title: m, type: u } = (0, r.useContext)(t.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => F, GP: () => N, KC: () => P, Nd: () => k, Rt: () => z, Vj: () => A, Wk: () => $, bz: () => C, cB: () => S, e5: () => T, hY: () => M, jK: () => L, jP: () => R, ob: () => D, rI: () => w, t4: () => W, vP: () => I, vg: () => H });
   var o = l(92081),
    s = l(90578),
    r = l(96345),
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
    j = l(13088),
    x = l(43864),
    v = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(o.A, { ..._ }),
    N = () => (0, f.jsx)(s.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    A = () => (0, f.jsx)(t.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    z = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    L = () => (0, f.jsx)(m.A, { ..._ }),
    R = () => (0, f.jsx)(u.A, { ..._ }),
    W = () => (0, f.jsx)(h.A, { ..._ }),
    F = () => (0, f.jsx)(g.A, { ..._ }),
    M = () => (0, f.jsx)(p.A, { ..._ }),
    P = () => (0, f.jsx)(j.A, { ..._ }),
    $ = () => (0, f.jsx)(x.A, { ..._ }),
    T = () => (0, f.jsx)(v.A, { ..._ }),
    D = () => (0, f.jsx)(b.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
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
    s = l(46447),
    r = l(13526),
    t = l(45795),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(t.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(o.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(o.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var o = l(86070),
    s = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var o = l(28369),
    s = l(46447),
    r = l(13526),
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
    j = l(46847),
    x = l(86070);
   const v = ({ label: e, labelId: n, className: l, colorScheme: o, forcedColorsAdjust: s = !1, children: t, dangerouslySetInnerHTML: a, ...i }) => (0, x.jsxs)('figure', { className: (0, r.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: s, colorScheme: t, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : o || '',
        h = 'string' == typeof l ? g().highlight(l, g().languages[e], e) : g().highlight(o || '', g().languages[e], e),
        y = (0, x.jsx)(b.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: u } });
       return (0, x.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(v, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, x.jsx)(p.n, { children: (0, x.jsxs)(p.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === s && (0, x.jsx)(j.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: g, container: p = 'document', language: j, designTokens: v }) => {
       const b = 'function' == typeof g ? g() : g,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || b),
        [w, A] = (0, m.useState)(N),
        [C, z] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === p ? (I = y) : 'document' === p ? (I = f) : 'surface' === p && (I = _),
        (0, x.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          b && (0, x.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, x.jsx)(I, { children: (0, x.jsx)(s.v$, { children: b }) }) }) }),
          h &&
           (0, x.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, x.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, x.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: w, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(s.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
