'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33083],
 {
  140(e, n, r) {
   (r.r(n), r.d(n, { assets: () => g, contentTitle: () => x, default: () => y, frontMatter: () => j, metadata: () => s, toc: () => b }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/description/associated/index","title":"Koppel een description aan het formulierveld","description":"Richtlijnen voor koppelen van een description aan een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/1-associated/index.mdx","sourceDirName":"richtlijnen/formulieren/description/1-associated","slug":"/richtlijnen/formulieren/descriptions/koppelen","permalink":"/richtlijnen/formulieren/descriptions/koppelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/1-associated/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Koppel een description aan het formulierveld","title_sm":"Koppel description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Koppel description","pagination_label":"Koppel description","description":"Richtlijnen voor koppelen van een description aan een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/koppelen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Descriptions in een formulier","permalink":"/richtlijnen/formulieren/descriptions/"},"next":{"title":"Inhoud description","permalink":"/richtlijnen/formulieren/descriptions/inhoud"}}');
   var l = r(86070),
    o = r(18439),
    i = r(56672),
    c = r(87682),
    t = r(56528);
   function a(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(t.$, { appearance: 'do', title: 'Koppel een description aan het formulierveld, met aria-describedby.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, l.jsx)('p', { id: 'description-wachtwoord', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, l.jsx)(t.$, { appearance: 'dont', title: 'Koppeling weglaten.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'wachtwoord0', children: 'Nieuw wachtwoord' }) }), (0, l.jsx)('p', { children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'wachtwoord0', type: 'password', name: 'nieuw-wachtwoord' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'koppel-een-description-aan-het-formulierveld', children: 'Koppel een description aan het formulierveld' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Voor gebruikers van ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is het belangrijk dat de description samen wordt voorgelezen met het formulierveld.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Waarom? Screenreaders, zoals JAWS, schakelen over naar de \u201cformulierenmodus\u201d wanneer ze inhoud binnen een ', (0, l.jsx)(n.code, { children: '<form>' }), ' element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld ', (0, l.jsx)(n.code, { children: 'aria-describedby' }), '). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt.'] }), '\n', (0, l.jsx)(n.p, { children: 'Meer informatie over de formulierenmodus:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/forms/instructions/', children: 'Form Instructions' }), ', Web Accessibility Initiative.'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: 'https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes', children: 'Browse and focus modes' }), ', Accessibility Developer Guide.'] }), '\n'] }), '\n', (0, l.jsx)(n.p, { children: "Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft." }), '\n', (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: 'Let op:' }), ' De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.'] }), '\n', (0, l.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['Geef description een ID: ', (0, l.jsx)(n.code, { children: 'id="description-name"' }), '.'] }), '\n', (0, l.jsxs)(n.li, { children: ['Verwijs in het formulierveld naar dat ID: ', (0, l.jsx)(n.code, { children: 'aria-describedby="description-name"' }), '.'] }), '\n'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Lees ook: ', (0, l.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'MDN over aria-describedby' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Koppel een description aan het formulierveld', title_sm: 'Koppel description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    g = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function v(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v();
   }
  },
  14881(e, n, r) {
   r.d(n, { K: () => d, n: () => a });
   var s = r(13526),
    l = r(30758),
    o = r(30662),
    i = r(32065),
    c = r(37168),
    t = r(86070);
   const a = (0, l.forwardRef)(({ as: e, className: n, children: r, ...l }, o) => {
     const i = e || 'div',
      c = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, t.jsx)(i, { ref: o, className: c, ...l, children: r });
    }),
    d = ({ className: e, classNamePanel: n, label: r, heading: l, headingLevel: a, headingApperance: d, ...p }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      m = (0, s.A)('utrecht-accordion__panel', n);
     return (0, t.jsxs)('details', { className: h, ...p, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(i.I, { children: (0, t.jsx)(o.rI, {}) }) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [l && (0, t.jsx)(c.D, { level: a, appearance: d, children: l }), r] })] }) }), (0, t.jsx)('div', { className: m, children: p.children })] });
    };
  },
  18439(e, n, r) {
   r.d(n, { R: () => i, x: () => c });
   var s = r(30758);
   const l = {},
    o = s.createContext(l);
   function i(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : i(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, r) {
   r.d(n, { M: () => a });
   var s = r(46447),
    l = r(16194),
    o = r(30758),
    i = r(56528);
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
   var t = r(86070);
   function a({ lineNumber: e, syntax: n, textContent: r, trim: a }) {
    let d = r;
    const { title: p, type: h } = (0, o.useContext)(i.x),
     m = (0, o.useId)();
    return (a && (d = d.trim()), (0, t.jsx)(l.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: r, getLineProps: l, getTokenProps: o }) => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, t.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: r.map((n, r) => (0, t.jsxs)('span', { ...l({ line: n }), children: [e && (0, t.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, t.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  30662(e, n, r) {
   r.d(n, { D4: () => L, GP: () => w, KC: () => M, Nd: () => k, Rt: () => C, Vj: () => N, Wk: () => T, bz: () => z, cB: () => S, e5: () => W, hY: () => F, jK: () => K, jP: () => D, ob: () => $, rI: () => A, t4: () => R, vP: () => I, vg: () => P });
   var s = r(92081),
    l = r(90578),
    o = r(96345),
    i = r(64249),
    c = r(4603),
    t = r(91525),
    a = r(23436),
    d = r(1375),
    p = r(4077),
    h = r(58315),
    m = r(73563),
    u = r(35193),
    j = r(82999),
    x = r(13088),
    g = r(43864),
    b = r(24214),
    v = r(79532),
    y = r(60529),
    f = r(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(s.A, { ..._ }),
    w = () => (0, f.jsx)(l.A, { ..._ }),
    A = () => (0, f.jsx)(o.A, { ..._ }),
    N = () => (0, f.jsx)(i.A, { ..._ }),
    z = () => (0, f.jsx)(c.A, { ..._ }),
    C = () => (0, f.jsx)(t.A, { ..._ }),
    S = () => (0, f.jsx)(a.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    K = () => (0, f.jsx)(p.A, { ..._ }),
    D = () => (0, f.jsx)(h.A, { ..._ }),
    R = () => (0, f.jsx)(m.A, { ..._ }),
    L = () => (0, f.jsx)(u.A, { ..._ }),
    F = () => (0, f.jsx)(j.A, { ..._ }),
    M = () => (0, f.jsx)(x.A, { ..._ }),
    T = () => (0, f.jsx)(g.A, { ..._ }),
    W = () => (0, f.jsx)(b.A, { ..._ }),
    $ = () => (0, f.jsx)(v.A, { ..._ }),
    P = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, r) {
   r.d(n, { I: () => s.In });
   var s = r(29181);
  },
  46847(e, n, r) {
   r.d(n, { $: () => s.$n });
   var s = r(50805);
  },
  56528(e, n, r) {
   r.d(n, { $: () => d, x: () => a });
   var s = r(30662),
    l = r(46447),
    o = r(13526),
    i = r(45795),
    c = r(30758),
    t = r(86070);
   const a = (0, c.createContext)({}),
    d = ({ title: e, appearance: n, description: r, children: c, figure: d = !0 }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof r ? (0, t.jsx)(i.oz, { components: { a: l.N_ }, children: r }) : r;
     return (0, t.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, t.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, t.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, t.jsx)(s.jP, {}) }), (0, t.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, t.jsx)(l.fz, { children: e })] }) : (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, t.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, t.jsx)(s.jK, {}) }), (0, t.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, t.jsx)(l.fz, { children: e })] }), u] }), (0, t.jsx)('div', { className: 'nlds-guideline__example', children: (0, t.jsx)(a.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  56672(e, n, r) {
   r.d(n, { Ay: () => c, RM: () => o });
   var s = r(86070),
    l = r(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
  },
  87682(e, n, r) {
   r.d(n, { H: () => k });
   var s = r(28369),
    l = r(46447),
    o = r(13526),
    i = r(68148),
    c = r(9016),
    t = r(69303),
    a = r(91635),
    d = r(30734),
    p = r(30758),
    h = r(31186),
    m = r(65904),
    u = r.n(m),
    j = r(14881),
    x = r(46847),
    g = r(86070);
   const b = ({ label: e, labelId: n, className: r, colorScheme: s, forcedColorsAdjust: l = !1, children: i, dangerouslySetInnerHTML: c, ...t }) => (0, g.jsxs)('figure', { className: (0, o.A)('ma-html-image', r), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...t, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': l }), inert: 'true', dangerouslySetInnerHTML: c, 'aria-hidden': 'true', children: i })] });
   var v = r(68197);
   const y = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: r = '<p>No code provided</p>', rawCode: s, copyCode: l, colorScheme: i, defaultExpandedCode: c, designTokens: t, forcedColorsAdjust: a = !0, label: d }) => {
       const h = 'string' == typeof r ? r : s || '',
        m = 'string' == typeof r ? u().highlight(r, u().languages[e], e) : u().highlight(s || '', u().languages[e], e),
        y = (0, g.jsx)(v.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === i, 'ma-canvas-astro__example--color-scheme-light': 'light' === i }), style: t, dangerouslySetInnerHTML: { __html: h } });
       return (0, g.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(b, { forcedColorsAdjust: a, label: d, labelId: d ? (0, p.useId)() : void 0, children: y }) : y, (0, g.jsx)(j.n, { children: (0, g.jsxs)(j.K, { label: 'Code', open: c, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === l && (0, g.jsx)(x.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: m = !0, children: u, container: j = 'document', language: x, designTokens: b }) => {
       const v = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(k || v),
        [A, N] = (0, p.useState)(w),
        [z, C] = (0, p.useState)(r);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [i.A, c.Ay, t.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let I = p.Fragment;
       return (
        'paragraph' === j ? (I = y) : 'document' === j ? (I = f) : 'surface' === j && (I = _),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          v && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, g.jsx)(I, { children: (0, g.jsx)(l.v$, { children: v }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(l.$n, {
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
             (0, g.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(l.$n, {
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
