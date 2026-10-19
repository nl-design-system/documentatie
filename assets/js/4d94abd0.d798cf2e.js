'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32141],
 {
  14881(e, n, s) {
   s.d(n, { K: () => a, n: () => i });
   var r = s(13526),
    l = s(30758),
    o = s(30662),
    t = s(37168),
    c = s(86070);
   const i = (0, l.forwardRef)(({ as: e, className: n, children: s, ...l }, o) => {
     const t = e || 'div',
      i = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(t, { ref: o, className: i, ...l, children: s });
    }),
    a = ({ className: e, classNamePanel: n, label: s, heading: l, headingLevel: i, headingApperance: a, ...d }) => {
     const p = (0, r.A)('utrecht-accordion__section', e),
      h = (0, r.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: p, ...d, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(o.rI, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [l && (0, c.jsx)(t.D, { level: i, appearance: a, children: l }), s] })] }) }), (0, c.jsx)('div', { className: h, children: d.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => t, x: () => c });
   var r = s(30758);
   const l = {},
    o = r.createContext(l);
   function t(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : t(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => a });
   var r = s(46447),
    l = s(16194),
    o = s(30758),
    t = s(56528);
   const c = {
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
   function a({ lineNumber: e, syntax: n, textContent: s, trim: a }) {
    let d = s;
    const { title: p, type: h } = (0, o.useContext)(t.x),
     u = (0, o.useId)();
    return (a && (d = d.trim()), (0, i.jsx)(l.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: l, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => I, GP: () => w, KC: () => L, Nd: () => k, Rt: () => S, Vj: () => A, Wk: () => $, bz: () => C, cB: () => z, e5: () => K, hY: () => P, jK: () => R, jP: () => D, ob: () => T, rI: () => N, t4: () => F, vP: () => M, vg: () => W });
   var r = s(92081),
    l = s(90578),
    o = s(96345),
    t = s(64249),
    c = s(4603),
    i = s(91525),
    a = s(23436),
    d = s(1375),
    p = s(4077),
    h = s(58315),
    u = s(73563),
    m = s(35193),
    j = s(82999),
    x = s(13088),
    g = s(43864),
    v = s(24214),
    y = s(79532),
    b = s(60529),
    f = s(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(r.A, { ..._ }),
    w = () => (0, f.jsx)(l.A, { ..._ }),
    N = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(t.A, { ..._ }),
    C = () => (0, f.jsx)(c.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    M = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(p.A, { ..._ }),
    D = () => (0, f.jsx)(h.A, { ..._ }),
    F = () => (0, f.jsx)(u.A, { ..._ }),
    I = () => (0, f.jsx)(m.A, { ..._ }),
    P = () => (0, f.jsx)(j.A, { ..._ }),
    L = () => (0, f.jsx)(x.A, { ..._ }),
    $ = () => (0, f.jsx)(g.A, { ..._ }),
    K = () => (0, f.jsx)(v.A, { ..._ }),
    T = () => (0, f.jsx)(y.A, { ..._ }),
    W = () => (0, f.jsx)(b.A, { ..._ });
  },
  38953(e, n, s) {
   s.d(n, { H: () => f });
   var r = s(28369),
    l = s(46447),
    o = s(13526),
    t = s(68148),
    c = s(9016),
    i = s(69303),
    a = s(91635),
    d = s(30734),
    p = s(30758),
    h = s(31186),
    u = s(65904),
    m = s.n(u),
    j = s(14881),
    x = s(46847),
    g = s(86070);
   const v = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: r, copyCode: l, defaultExpandedCode: t, designTokens: c }) => {
       const i = 'string' == typeof s ? s : r || '',
        a = 'string' == typeof s ? m().highlight(s, m().languages[e], e) : m().highlight(r || '', m().languages[e], e);
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, g.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: c, children: (0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, g.jsx)(j.n, { children: (0, g.jsxs)(j.K, { label: 'Code', open: t, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }), 'allow' === l && (0, g.jsx)(x.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: u = !0, children: m, container: j = 'document', language: x, designTokens: f }) => {
       const _ = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(k || _),
        [N, A] = (0, p.useState)(w),
        [C, S] = (0, p.useState)(s);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [t.A, c.Ay, i.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const z = (0, p.useId)();
       let M = p.Fragment;
       return (
        'paragraph' === j ? (M = v) : 'document' === j ? (M = y) : 'surface' === j && (M = b),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          _ && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(M, { children: (0, g.jsx)(l.v$, { children: _ }) }) }) }),
          u &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, g.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(l.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  43912(e, n, s) {
   (s.r(n), s.d(n, { assets: () => g, contentTitle: () => x, default: () => b, frontMatter: () => j, metadata: () => r, toc: () => v }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/multiple/index","title":"Meerdere descriptions koppelen","description":"Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/4-multiple/index.mdx","sourceDirName":"richtlijnen/formulieren/description/4-multiple","slug":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/4-multiple/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Meerdere descriptions koppelen","title_sm":"Meerdere descriptions","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Meerdere descriptions","pagination_label":"Meerdere descriptions","description":"Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"},"next":{"title":"Description bij fieldsets","permalink":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset"}}');
   var l = s(86070),
    o = s(18439),
    t = s(56672),
    c = s(38953),
    i = s(56528);
   function a(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Koppel alle descriptions aan het formulierveld.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'wachtwoord5', children: 'Nieuw wachtwoord' }) }), (0, l.jsx)('p', { id: 'description-wachtwoord5', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)('p', { id: 'error-wachtwoord5', children: 'Je gekozen wachtwoord is te kort.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'wachtwoord5', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord5 error-wachtwoord5' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'meerdere-descriptions-koppelen', children: 'Meerdere descriptions koppelen' }) }), '\n', (0, l.jsx)(n.p, { children: 'Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is.' }), '\n', (0, l.jsxs)(n.p, { children: ['Geef dan ', (0, l.jsx)(n.code, { children: 'aria-describedby' }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, l.jsx)(n.code, { children: 'aria-describedby' }), ' is de volgorde waarin het voorgelezen wordt.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'Meerdere descriptions koppelen', title_sm: 'Meerdere descriptions', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    g = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y();
   }
  },
  46847(e, n, s) {
   s.d(n, { $: () => r.$n });
   var r = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => a });
   var r = s(30662),
    l = s(46447),
    o = s(13526),
    t = s(94988),
    c = s(30758),
    i = s(86070);
   const a = (0, c.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: c, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      m = 'string' == typeof s ? (0, i.jsx)(t.oz, { components: { a: l.N_ }, children: s }) : s;
     return (0, i.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(r.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(l.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(r.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(l.fz, { children: e })] }), m] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(a.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => c, RM: () => o });
   var r = s(86070),
    l = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
