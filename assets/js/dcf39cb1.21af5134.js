'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7966],
 {
  14881(e, n, l) {
   l.d(n, { K: () => i, n: () => a });
   var s = l(13526),
    o = l(30758),
    r = l(30662),
    t = l(37168),
    c = l(86070);
   const a = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, r) => {
     const t = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, c.jsx)(t, { ref: r, className: a, ...o, children: l });
    }),
    i = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: a, headingApperance: i, ...d }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', n);
     return (0, c.jsxs)('details', { className: h, ...d, children: [(0, c.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, c.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, c.jsx)('span', { className: 'nl-button__icon-start', children: (0, c.jsx)(r.rI, {}) }), (0, c.jsxs)('span', { className: 'nl-button__label', children: [o && (0, c.jsx)(t.D, { level: a, appearance: i, children: o }), l] })] }) }), (0, c.jsx)('div', { className: u, children: d.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => c });
   var s = l(30758);
   const o = {},
    r = s.createContext(o);
   function t(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => i });
   var s = l(46447),
    o = l(16194),
    r = l(30758),
    t = l(56528);
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
   var a = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: h, type: u } = (0, r.useContext)(t.x),
     p = (0, r.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(o.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...o({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => $, GP: () => N, KC: () => M, Nd: () => _, Rt: () => C, Vj: () => z, Wk: () => D, bz: () => w, cB: () => P, e5: () => T, hY: () => I, jK: () => R, jP: () => F, ob: () => H, rI: () => A, t4: () => L, vP: () => S, vg: () => K });
   var s = l(92081),
    o = l(90578),
    r = l(96345),
    t = l(64249),
    c = l(4603),
    a = l(91525),
    i = l(23436),
    d = l(1375),
    h = l(4077),
    u = l(58315),
    p = l(73563),
    m = l(35193),
    j = l(82999),
    x = l(13088),
    b = l(43864),
    g = l(24214),
    y = l(79532),
    v = l(60529),
    f = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(s.A, { ...k }),
    N = () => (0, f.jsx)(o.A, { ...k }),
    A = () => (0, f.jsx)(r.A, { ...k }),
    z = () => (0, f.jsx)(t.A, { ...k }),
    w = () => (0, f.jsx)(c.A, { ...k }),
    C = () => (0, f.jsx)(a.A, { ...k }),
    P = () => (0, f.jsx)(i.A, { ...k }),
    S = () => (0, f.jsx)(d.A, { ...k }),
    R = () => (0, f.jsx)(h.A, { ...k }),
    F = () => (0, f.jsx)(u.A, { ...k }),
    L = () => (0, f.jsx)(p.A, { ...k }),
    $ = () => (0, f.jsx)(m.A, { ...k }),
    I = () => (0, f.jsx)(j.A, { ...k }),
    M = () => (0, f.jsx)(x.A, { ...k }),
    D = () => (0, f.jsx)(b.A, { ...k }),
    T = () => (0, f.jsx)(g.A, { ...k }),
    H = () => (0, f.jsx)(y.A, { ...k }),
    K = () => (0, f.jsx)(v.A, { ...k });
  },
  38953(e, n, l) {
   l.d(n, { H: () => f });
   var s = l(28369),
    o = l(46447),
    r = l(13526),
    t = l(68148),
    c = l(9016),
    a = l(69303),
    i = l(91635),
    d = l(30734),
    h = l(30758),
    u = l(31186),
    p = l(65904),
    m = l.n(p),
    j = l(14881),
    x = l(46847),
    b = l(86070);
   const g = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, b.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: o, defaultExpandedCode: t, designTokens: c }) => {
       const a = 'string' == typeof l ? l : s || '',
        i = 'string' == typeof l ? m().highlight(l, m().languages[e], e) : m().highlight(s || '', m().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: c, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, b.jsx)(j.n, { children: (0, b.jsxs)(j.K, { label: 'Code', open: t, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === o && (0, b.jsx)(x.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: j = 'document', language: x, designTokens: f }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || k),
        [A, z] = (0, h.useState)(N),
        [w, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [t.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const P = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === j ? (S = g) : 'document' === j ? (S = y) : 'surface' === j && (S = v),
        (0, b.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(S, { children: (0, b.jsx)(o.v$, { children: k }) }) }) }),
          p &&
           (0, b.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!w);
             },
             'aria-expanded': w,
             'aria-controls': P,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, b.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: P,
            hidden: !w,
            children: [
             (0, b.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  46847(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => i });
   var s = l(30662),
    o = l(46447),
    r = l(13526),
    t = l(94988),
    c = l(30758),
    a = l(86070);
   const i = (0, c.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: c, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      m = 'string' == typeof l ? (0, a.jsx)(t.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, a.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(o.fz, { children: e })] }), m] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => c, RM: () => r });
   var s = l(86070),
    o = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  94409(e, n, l) {
   (l.r(n), l.d(n, { assets: () => b, contentTitle: () => x, default: () => v, frontMatter: () => j, metadata: () => s, toc: () => g }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/search/index","title":"Placeholders en de zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","source":"@site/docs/richtlijnen/formulieren/placeholder/2-search/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/2-search","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/2-search/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Placeholders en de zoekfunctie","title_sm":"Placeholder bij zoekfunctie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder bij zoekfunctie","pagination_label":"Placeholder bij zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder is geen label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label"},"next":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"}}');
   var o = l(86070),
    r = l(18439),
    t = l(56672),
    c = l(38953),
    a = l(56528);
   function i(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'De placeholder samen met tekst van de submitbutton gebruiken zichtbaar label in een kort zoekformulier.', children: (0, o.jsx)(c.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { className: 'sr-only', htmlFor: 'header-search', children: 'Zoek' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'header-search', placeholder: 'Zoek', type: 'search' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Zoek' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i();
   }
   function h(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'placeholders-en-de-zoekfunctie', children: 'Placeholders en de zoekfunctie' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een gebruikelijke opzet voor een zoekoptie in de header is:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'een onzichtbaar label;' }), '\n', (0, o.jsx)(n.li, { children: 'de placeholder als zichtbaar label;' }), '\n', (0, o.jsx)(n.li, { children: 'rechts naast het formulierveld een submitbutton met de tekst "Zoek" en/of een icoontje van een loopje.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Hierbij wordt het zoekloopje als zichtbaar label gebruikt over wat in te vullen als de placeholder verdwijnt. Omdat dit een veel gebruikte constructie is, is dit prima. Het is door buttontekst of icoon voldoende duidelijk wat er wordt verwacht.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const j = { title: 'Placeholders en de zoekfunctie', title_sm: 'Placeholder bij zoekfunctie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder bij zoekfunctie', pagination_label: 'Placeholder bij zoekfunctie', description: 'Richtlijnen over placeholder gebruiken in de zoekfunctie.', slug: '/richtlijnen/formulieren/placeholders/zoekfunctie', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    b = {},
    g = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
