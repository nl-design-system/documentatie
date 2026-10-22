'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [47675],
 {
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => c });
   var l = t(13526),
    r = t(30758),
    o = t(30662),
    s = t(32065),
    a = t(37168),
    i = t(86070);
   const c = (0, r.forwardRef)(({ as: e, className: n, children: t, ...r }, o) => {
     const s = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(s, { ref: o, className: a, ...r, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: r, headingLevel: c, headingApperance: d, ...u }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...u, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(s.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [r && (0, i.jsx)(a.D, { level: c, appearance: d, children: r }), t] })] }) }), (0, i.jsx)('div', { className: m, children: u.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => a });
   var l = t(30758);
   const r = {},
    o = l.createContext(r);
   function s(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    r = t(16194),
    o = t(30758),
    s = t(56528);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: u, type: h } = (0, o.useContext)(s.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: r, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => L, GP: () => N, KC: () => M, Nd: () => k, Rt: () => C, Vj: () => A, Wk: () => P, bz: () => z, cB: () => S, e5: () => $, hY: () => T, jK: () => R, jP: () => V, ob: () => H, rI: () => w, t4: () => F, vP: () => I, vg: () => D });
   var l = t(92081),
    r = t(90578),
    o = t(96345),
    s = t(64249),
    a = t(4603),
    i = t(91525),
    c = t(23436),
    d = t(1375),
    u = t(4077),
    h = t(58315),
    m = t(73563),
    p = t(35193),
    j = t(82999),
    v = t(13088),
    g = t(43864),
    b = t(24214),
    x = t(79532),
    y = t(60529),
    f = t(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    N = () => (0, f.jsx)(r.A, { ..._ }),
    w = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(s.A, { ..._ }),
    z = () => (0, f.jsx)(a.A, { ..._ }),
    C = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    R = () => (0, f.jsx)(u.A, { ..._ }),
    V = () => (0, f.jsx)(h.A, { ..._ }),
    F = () => (0, f.jsx)(m.A, { ..._ }),
    L = () => (0, f.jsx)(p.A, { ..._ }),
    T = () => (0, f.jsx)(j.A, { ..._ }),
    M = () => (0, f.jsx)(v.A, { ..._ }),
    P = () => (0, f.jsx)(g.A, { ..._ }),
    $ = () => (0, f.jsx)(b.A, { ..._ }),
    H = () => (0, f.jsx)(x.A, { ..._ }),
    D = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, t) {
   t.d(n, { I: () => l.In });
   var l = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => l.$n });
   var l = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var l = t(30662),
    r = t(46447),
    o = t(13526),
    s = t(45795),
    a = t(30758),
    i = t(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: a, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof t ? (0, i.jsx)(s.oz, { components: { a: r.N_ }, children: t }) : t;
     return (0, i.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(r.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var l = t(86070),
    r = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  86359(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, contentTitle: () => v, default: () => y, frontMatter: () => j, metadata: () => l, toc: () => b }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/button/submit/index","title":"Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld","description":"Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/button/2-submit/index.mdx","sourceDirName":"richtlijnen/formulieren/button/2-submit","slug":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/2-submit/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld","title_sm":"Verstuur niet automatisch","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Verstuur niet automatisch","pagination_label":"Verstuur niet automatisch","description":"Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.","slug":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toetsenbordbediening van een button","permalink":"/richtlijnen/formulieren/buttons/toetsenbordbediening"},"next":{"title":"Plaatsing button","permalink":"/richtlijnen/formulieren/buttons/plaatsing"}}');
   var r = t(86070),
    o = t(18439),
    s = t(56672),
    a = t(87682),
    i = t(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Het formulier wordt verzonden na het kiezen van de submitbutton.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)('form', { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'kleur1', children: 'Kies een kleur' }) }), (0, r.jsx)('p', { children: (0, r.jsxs)('select', { id: 'kleur1', children: [(0, r.jsx)('option', { name: 'groen', children: 'Groen' }), (0, r.jsx)('option', { name: 'blauw', children: 'Blauw' }), (0, r.jsx)('option', { name: 'rood', children: 'Rood' })] }) }), (0, r.jsx)('p', { children: (0, r.jsx)('button', { children: 'Verstuur' }) })] }) }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Het formulier wordt automatisch verzonden na het kiezen van van een kleur.', description: 'In dit voorbeeld ontbreekt de submitbutton en wordt het formulier direct verstuurd na het kiezen van een kleur', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)('form', { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'kleur2', children: 'Kies een kleur' }) }), (0, r.jsx)('p', { children: (0, r.jsxs)('select', { id: 'kleur2', children: [(0, r.jsx)('option', { name: 'groen', children: 'Groen' }), (0, r.jsx)('option', { name: 'blauw', children: 'Blauw' }), (0, r.jsx)('option', { name: 'rood', children: 'Rood' })] }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld' }) }), '\n', (0, r.jsx)(n.p, { children: 'Verstuur bij voorkeur alleen het formulier wanneer de gebruiker de submitbutton gebruikt, doe dit niet automatisch met een andere aanleiding. Is het echt noodzakelijk om het formulier op een ander moment te versturen, informeer de gebruiker dan duidelijk vooraf.' }), '\n', (0, r.jsx)(n.p, { children: 'Versturen na bijvoorbeeld het kiezen van een optie kan de gebruiker verrassen: wat gebeurt er, ik wilde nog even checken wat ik had ingevuld, heb ik nu het goede gekozen?' }), '\n', (0, r.jsxs)(n.p, { children: ['Let wel: het gaat hier om het daadwerkelijk versturen van het formulier. Dus als de ', (0, r.jsx)(n.strong, { children: 'context' }), ' verandert. Bijvoorbeeld: je gaat naar een bevestigingspagina.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het updaten van bijvoorbeeld zoekresultaten waarbij alleen de ', (0, r.jsx)(n.strong, { children: 'content' }), ' verandert valt hier niet onder. Bijvoorbeeld: alleen het aantal zoekresultaten verandert, maar je blijft op dezelfde pagina.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'Succescriterium 3.2.2 Bij input' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld', title_sm: 'Verstuur niet automatisch', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    g = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x();
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => k });
   var l = t(28369),
    r = t(46447),
    o = t(13526),
    s = t(68148),
    a = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    u = t(30758),
    h = t(31186),
    m = t(65904),
    p = t.n(m),
    j = t(14881),
    v = t(46847),
    g = t(86070);
   const b = ({ label: e, labelId: n, className: t, colorScheme: l, forcedColorsAdjust: r = !1, children: s, dangerouslySetInnerHTML: a, ...i }) => (0, g.jsxs)('figure', { className: (0, o.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: s })] });
   var x = t(68197);
   const y = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: l, copyCode: r, colorScheme: s, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const h = 'string' == typeof t ? t : l || '',
        m = 'string' == typeof t ? p().highlight(t, p().languages[e], e) : p().highlight(l || '', p().languages[e], e),
        y = (0, g.jsx)(x.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: i, dangerouslySetInnerHTML: { __html: h } });
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(b, { forcedColorsAdjust: c, label: d, labelId: d ? (0, u.useId)() : void 0, children: y }) : y, (0, g.jsx)(j.n, { children: (0, g.jsxs)(j.K, { label: 'Code', open: a, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === r && (0, g.jsx)(v.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: p, container: j = 'document', language: v, designTokens: b }) => {
       const x = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || x),
        [w, A] = (0, u.useState)(N),
        [z, C] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let I = u.Fragment;
       return (
        'paragraph' === j ? (I = y) : 'document' === j ? (I = f) : 'surface' === j && (I = _),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          x && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, g.jsx)(I, { children: (0, g.jsx)(r.v$, { children: x }) }) }) }),
          m &&
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
          m &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
