'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82479],
 {
  14881(e, n, o) {
   o.d(n, { K: () => d, n: () => c });
   var l = o(13526),
    t = o(30758),
    r = o(30662),
    s = o(32065),
    a = o(37168),
    i = o(86070);
   const c = (0, t.forwardRef)(({ as: e, className: n, children: o, ...t }, r) => {
     const s = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(s, { ref: r, className: a, ...t, children: o });
    }),
    d = ({ className: e, classNamePanel: n, label: o, heading: t, headingLevel: c, headingApperance: d, ...u }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      m = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...u, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(s.I, { children: (0, i.jsx)(r.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [t && (0, i.jsx)(a.D, { level: c, appearance: d, children: t }), o] })] }) }), (0, i.jsx)('div', { className: m, children: u.children })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => a });
   var l = o(30758);
   const t = {},
    r = l.createContext(t);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, o) {
   o.d(n, { M: () => c });
   var l = o(46447),
    t = o(16194),
    r = o(30758),
    s = o(56528);
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
   var i = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: u, type: h } = (0, r.useContext)(s.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  30662(e, n, o) {
   o.d(n, { D4: () => R, GP: () => w, KC: () => T, Nd: () => k, Rt: () => z, Vj: () => N, Wk: () => D, bz: () => C, cB: () => S, e5: () => P, hY: () => L, jK: () => I, jP: () => G, ob: () => $, rI: () => A, t4: () => M, vP: () => F, vg: () => H });
   var l = o(92081),
    t = o(90578),
    r = o(96345),
    s = o(64249),
    a = o(4603),
    i = o(91525),
    c = o(23436),
    d = o(1375),
    u = o(4077),
    h = o(58315),
    m = o(73563),
    p = o(35193),
    b = o(82999),
    x = o(13088),
    g = o(43864),
    j = o(24214),
    v = o(79532),
    y = o(60529),
    f = o(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(l.A, { ..._ }),
    w = () => (0, f.jsx)(t.A, { ..._ }),
    A = () => (0, f.jsx)(r.A, { ..._ }),
    N = () => (0, f.jsx)(s.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    z = () => (0, f.jsx)(i.A, { ..._ }),
    S = () => (0, f.jsx)(c.A, { ..._ }),
    F = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(u.A, { ..._ }),
    G = () => (0, f.jsx)(h.A, { ..._ }),
    M = () => (0, f.jsx)(m.A, { ..._ }),
    R = () => (0, f.jsx)(p.A, { ..._ }),
    L = () => (0, f.jsx)(b.A, { ..._ }),
    T = () => (0, f.jsx)(x.A, { ..._ }),
    D = () => (0, f.jsx)(g.A, { ..._ }),
    P = () => (0, f.jsx)(j.A, { ..._ }),
    $ = () => (0, f.jsx)(v.A, { ..._ }),
    H = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, o) {
   o.d(n, { I: () => l.In });
   var l = o(29181);
  },
  42825(e, n, o) {
   (o.r(n), o.d(n, { assets: () => g, contentTitle: () => x, default: () => y, frontMatter: () => b, metadata: () => l, toc: () => j }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/tabindex/index","title":"Gebruik geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/index.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour/2-tabindex","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik geen positieve tabindex","title_sm":"Geen positieve tabindex","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen positieve tabindex","pagination_label":"Geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zorg dat een formulier werkt met een toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie"},"next":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"}}');
   var t = o(86070),
    r = o(18439),
    s = o(56672),
    a = o(87682),
    i = o(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Formulier zonder tabindex.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('form', { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'naam1', autoComplete: 'name' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email1', autoComplete: 'email' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('button', { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Formulier met gebruik van een positieve tabindex.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('form', { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'naam2', children: 'Uw naam' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'naam2', autoComplete: 'name', tabIndex: '1' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email2', children: 'Uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email2', autoComplete: 'email' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('button', { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex', children: 'tabindex' }), ' te geven met een waarde groter dan nul, bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'tabindex="1"' }), ' of met gebruik van ', (0, t.jsx)(n.code, { children: 'autofocus' }), '. De gebruiker is meteen klaar om het formulier in te gaan vullen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Maar dit levert problemen op voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en toetsenborden. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.'] }), '\n', (0, t.jsx)(n.p, { children: 'Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.' }), '\n', (0, t.jsx)(n.p, { children: 'Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.' }), '\n', (0, t.jsxs)(n.p, { children: ['Adam Silver geeft hier uitgebreid uitleg over in ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: 'The problem with automatically focusing the first input and what to do instead' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Let wel: ', (0, t.jsx)(n.code, { children: 'tabindex="0"' }), ' en ', (0, t.jsx)(n.code, { children: 'tabindex="-1"' }), ' zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ', (0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: '0 and -1 Values' }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ', (0, t.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }), ' van Andrew Nevins.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focusvolgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Gebruik geen positieve tabindex', title_sm: 'Geen positieve tabindex', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    g = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function v(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v();
   }
  },
  46847(e, n, o) {
   o.d(n, { $: () => l.$n });
   var l = o(50805);
  },
  56528(e, n, o) {
   o.d(n, { $: () => d, x: () => c });
   var l = o(30662),
    t = o(46447),
    r = o(13526),
    s = o(45795),
    a = o(30758),
    i = o(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof o ? (0, i.jsx)(s.oz, { components: { a: t.N_ }, children: o }) : o;
     return (0, i.jsxs)(h, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(t.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  56672(e, n, o) {
   o.d(n, { Ay: () => a, RM: () => r });
   var l = o(86070),
    t = o(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  87682(e, n, o) {
   o.d(n, { H: () => k });
   var l = o(28369),
    t = o(46447),
    r = o(13526),
    s = o(68148),
    a = o(9016),
    i = o(69303),
    c = o(91635),
    d = o(30734),
    u = o(30758),
    h = o(31186),
    m = o(65904),
    p = o.n(m),
    b = o(14881),
    x = o(46847),
    g = o(86070);
   const j = ({ label: e, labelId: n, className: o, colorScheme: l, forcedColorsAdjust: t = !1, children: s, dangerouslySetInnerHTML: a, ...i }) => (0, g.jsxs)('figure', { className: (0, r.A)('ma-html-image', o), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: s })] });
   var v = o(68197);
   const y = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: o = '<p>No code provided</p>', rawCode: l, copyCode: t, colorScheme: s, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const h = 'string' == typeof o ? o : l || '',
        m = 'string' == typeof o ? p().highlight(o, p().languages[e], e) : p().highlight(l || '', p().languages[e], e),
        y = (0, g.jsx)(v.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === s, 'ma-canvas-astro__example--color-scheme-light': 'light' === s }), style: i, dangerouslySetInnerHTML: { __html: h } });
       return (0, g.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(j, { forcedColorsAdjust: c, label: d, labelId: d ? (0, u.useId)() : void 0, children: y }) : y, (0, g.jsx)(b.n, { children: (0, g.jsxs)(b.K, { label: 'Code', open: a, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === t && (0, g.jsx)(x.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: m = !0, children: p, container: b = 'document', language: x, designTokens: j }) => {
       const v = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(k || v),
        [A, N] = (0, u.useState)(w),
        [C, z] = (0, u.useState)(o);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === b ? (F = y) : 'document' === b ? (F = f) : 'surface' === b && (F = _),
        (0, g.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          v && (0, g.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: j, children: (0, g.jsx)(F, { children: (0, g.jsx)(t.v$, { children: v }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(t.$n, {
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
          m &&
           (0, g.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(t.$n, {
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
 },
]);
