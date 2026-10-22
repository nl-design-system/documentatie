'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19622],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var r = l(13526),
    o = l(30758),
    s = l(30662),
    t = l(32065),
    a = l(37168),
    i = l(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, s) => {
     const t = e || 'div',
      a = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(t, { ref: s, className: a, ...o, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: c, headingApperance: d, ...m }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      h = (0, r.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.I, { children: (0, i.jsx)(s.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [o && (0, i.jsx)(a.D, { level: c, appearance: d, children: o }), l] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
   var r = l(30758);
   const o = {},
    s = r.createContext(o);
   function t(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    o = l(16194),
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
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => N, KC: () => T, Nd: () => k, Rt: () => z, Vj: () => w, Wk: () => $, bz: () => C, cB: () => S, e5: () => V, hY: () => P, jK: () => R, jP: () => F, ob: () => D, rI: () => A, t4: () => L, vP: () => I, vg: () => H });
   var r = l(92081),
    o = l(90578),
    s = l(96345),
    t = l(64249),
    a = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    m = l(4077),
    u = l(58315),
    h = l(73563),
    p = l(35193),
    g = l(82999),
    v = l(13088),
    j = l(43864),
    x = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(r.A, { ..._ }),
    N = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(s.A, { ..._ }),
    w = () => (0, f.jsx)(t.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    z = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    F = () => (0, f.jsx)(u.A, { ..._ }),
    L = () => (0, f.jsx)(h.A, { ..._ }),
    M = () => (0, f.jsx)(p.A, { ..._ }),
    P = () => (0, f.jsx)(g.A, { ..._ }),
    T = () => (0, f.jsx)(v.A, { ..._ }),
    $ = () => (0, f.jsx)(j.A, { ..._ }),
    V = () => (0, f.jsx)(x.A, { ..._ }),
    D = () => (0, f.jsx)(b.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => r.In });
   var r = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => r.$n });
   var r = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var r = l(30662),
    o = l(46447),
    s = l(13526),
    t = l(45795),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, i.jsx)(t.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(r.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(r.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(o.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var r = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  66134(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => x }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/questions/avoid-duplicate-work/index","title":"Vraag niet meerdere keren dezelfde informatie uit","description":"Richtlijnen over het niet meerdere keren uitvragen van dezelfde informatie.","source":"@site/docs/richtlijnen/formulieren/questions/4-avoid-duplicate-work/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/4-avoid-duplicate-work","slug":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/4-avoid-duplicate-work/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vraag niet meerdere keren dezelfde informatie uit","title_sm":"Stel een vraag \xe9\xe9n keer","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Stel een vraag \xe9\xe9n keer","pagination_label":"Stel een vraag \xe9\xe9n keer","description":"Richtlijnen over het niet meerdere keren uitvragen van dezelfde informatie.","slug":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Bied contactmogelijkheden","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact"},"next":{"title":"Geen vaste tekstlengte","permalink":"/richtlijnen/formulieren/vragen/geen-min-max-lengte"}}');
   var o = l(86070),
    s = l(18439),
    t = l(56672),
    a = l(87682),
    i = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Herhaling ter bevestiging.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email1', type: 'email', name: 'email', autoComplete: 'email' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email2', children: 'Herhaal uw e-mailadres' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email2', type: 'email', name: 'email', autoComplete: 'email' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'vraag-niet-meerdere-keren-dezelfde-informatie-uit', children: 'Vraag niet meerdere keren dezelfde informatie uit' }) }), '\n', (0, o.jsx)(n.p, { children: 'Voorkom herhaling: om zeker te weten dat iemand het juiste e-mailadres heeft ingevuld, wordt in sommige formulieren de vraag twee keer gesteld en dan vergeleken. Dit kan gebruiksvriendelijker!' }), '\n', (0, o.jsx)(n.p, { children: 'Als het essentieel is dat de informatie correct is, zijn er deze alternatieven:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'toon dan voor het verzenden nog eens de invoer, bijvoorbeeld op een controlepagina;' }), '\n', (0, o.jsx)(n.li, { children: '(als het om een e-mailadres gaat) stuur een e-mail ter bevestiging om de juistheid van het e-mailadres te controleren.' }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.7/', children: 'succescriterium 3.3.7 Overbodige invoer' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Vraag niet meerdere keren dezelfde informatie uit', title_sm: 'Stel een vraag \xe9\xe9n keer', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Stel een vraag \xe9\xe9n keer', pagination_label: 'Stel een vraag \xe9\xe9n keer', description: 'Richtlijnen over het niet meerdere keren uitvragen van dezelfde informatie.', slug: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var r = l(28369),
    o = l(46447),
    s = l(13526),
    t = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(14881),
    v = l(46847),
    j = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: r, forcedColorsAdjust: o = !1, children: t, dangerouslySetInnerHTML: a, ...i }) => (0, j.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === r, 'ma-html-image__body--color-scheme-light': 'light' === r, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: t })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: r, copyCode: o, colorScheme: t, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : r || '',
        h = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(r || '', p().languages[e], e),
        y = (0, j.jsx)(b.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: i, dangerouslySetInnerHTML: { __html: u } });
       return (0, j.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: a, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === o && (0, j.jsx)(v.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: v, designTokens: x }) => {
       const b = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || b),
        [A, w] = (0, m.useState)(N),
        [C, z] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, j.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          b && (0, j.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, j.jsx)(I, { children: (0, j.jsx)(o.v$, { children: b }) }) }) }),
          h &&
           (0, j.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, j.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, j.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
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
