'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94318],
 {
  14881(e, l, n) {
   n.d(l, { K: () => d, n: () => c });
   var s = n(13526),
    r = n(30758),
    o = n(30662),
    a = n(32065),
    t = n(37168),
    i = n(86070);
   const c = (0, r.forwardRef)(({ as: e, className: l, children: n, ...r }, o) => {
     const a = e || 'div',
      t = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, i.jsx)(a, { ref: o, className: t, ...r, children: n });
    }),
    d = ({ className: e, classNamePanel: l, label: n, heading: r, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', l);
     return (0, i.jsxs)('details', { className: m, ...h, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(a.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [r && (0, i.jsx)(t.D, { level: c, appearance: d, children: r }), n] })] }) }), (0, i.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18274(e, l, n) {
   (n.r(l), n.d(l, { assets: () => x, contentTitle: () => g, default: () => k, frontMatter: () => j, metadata: () => s, toc: () => b }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/label/accessible-name/index","title":"Geef een formulierveld een toegankelijke naam met een label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/1-accessible-name/index.mdx","sourceDirName":"richtlijnen/formulieren/label/1-accessible-name","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef een formulierveld een toegankelijke naam met een label","title_sm":"Toegankelijke naam label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke naam label","pagination_label":"Toegankelijke naam label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"},"next":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"}}');
   var r = n(86070),
    o = n(18439),
    a = n(56672),
    t = n(87682),
    i = n(56528);
   function c(e) {
    const l = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, r.jsx)(t.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur?' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { type: 'text', id: 'kleur3', name: 'lievelingskleur' }) })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, r.jsx)(t.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur?' }) }), (0, r.jsx)('p', { children: (0, r.jsxs)('select', { id: 'kleur4', name: 'lievelingskleur', children: [(0, r.jsx)('option', { children: 'Rood' }), (0, r.jsx)('option', { children: 'Blauw' }), (0, r.jsx)('option', { children: 'Wit' })] }) })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, r.jsx)(t.H, { language: 'html', children: () => (0, r.jsxs)('div', { 'data-test-axe': 'false', children: [(0, r.jsx)('div', { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, r.jsx)('input', { type: 'text', id: 'kleur5', name: 'lievelingskleur', 'data-test-axe': 'false' })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, r.jsx)(t.H, { language: 'html', children: () => (0, r.jsxs)('div', { 'data-test-axe': 'false', children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { children: 'Wat is je lievelingskleur?' }) }), (0, r.jsx)('p', { children: (0, r.jsxs)('select', { 'data-test-axe': 'false', name: 'lievelingskleur', children: [(0, r.jsx)('option', { children: 'Rood' }), (0, r.jsx)('option', { children: 'Blauw' }), (0, r.jsx)('option', { children: 'Wit' })] }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const l = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.header, { children: (0, r.jsx)(l.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }) }), '\n', (0, r.jsxs)(l.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, r.jsx)(l.code, { children: 'for' }), '/', (0, r.jsx)(l.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, r.jsx)(l.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsxs)(l.li, { children: ['Gebruikers van ', (0, r.jsx)(l.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.'] }), '\n', (0, r.jsx)(l.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, r.jsx)(l.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, r.jsx)(l.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, r.jsx)(l.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, r.jsx)(l.p, { children: 'Opzet in de HTML:' }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsx)(l.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, r.jsxs)(l.li, { children: ['Geef het label het attribute ', (0, r.jsx)(l.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, r.jsx)(l.pre, { children: (0, r.jsx)(l.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, r.jsxs)(l.p, { children: ['Let op: De gebruikte ', (0, r.jsx)(l.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, r.jsx)(l.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, r.jsxs)(l.p, { children: ['Doen: Gekoppeld label met ', (0, r.jsx)(l.code, { children: 'for' }), ' en ', (0, r.jsx)(l.code, { children: 'id' }), '. Het ', (0, r.jsx)(l.code, { children: '<label>' }), '-element heeft een ', (0, r.jsx)(l.code, { children: 'for' }), ' attribuut (of ', (0, r.jsx)(l.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, r.jsx)(l.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, r.jsxs)(l.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, r.jsx)(l.code, { children: '<select>' }), ':'] }), '\n', (0, r.jsx)(l.pre, { children: (0, r.jsx)(l.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'Geef een formulierveld een toegankelijke naam met een label', title_sm: 'Toegankelijke naam label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    x = {},
    b = [{ value: 'De for/id relatie', id: 'de-forid-relatie', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function v(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(a.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v();
   }
  },
  18439(e, l, n) {
   n.d(l, { R: () => a, x: () => t });
   var s = n(30758);
   const r = {},
    o = s.createContext(r);
   function a(e) {
    const l = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function t(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), s.createElement(o.Provider, { value: l }, e.children));
   }
  },
  28369(e, l, n) {
   n.d(l, { M: () => c });
   var s = n(46447),
    r = n(16194),
    o = n(30758),
    a = n(56528);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: h, type: m } = (0, o.useContext)(a.x),
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: t, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: r, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: l, children: n.map((l, n) => (0, i.jsxs)('span', { ...r({ line: l }), children: [e && (0, i.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, i.jsx)('span', { ...o({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  30662(e, l, n) {
   n.d(l, { D4: () => W, GP: () => N, KC: () => F, Nd: () => _, Rt: () => z, Vj: () => w, Wk: () => G, bz: () => C, cB: () => S, e5: () => M, hY: () => L, jK: () => R, jP: () => D, ob: () => $, rI: () => A, t4: () => T, vP: () => I, vg: () => H });
   var s = n(92081),
    r = n(90578),
    o = n(96345),
    a = n(64249),
    t = n(4603),
    i = n(91525),
    c = n(23436),
    d = n(1375),
    h = n(4077),
    m = n(58315),
    u = n(73563),
    p = n(35193),
    j = n(82999),
    g = n(13088),
    x = n(43864),
    b = n(24214),
    v = n(79532),
    k = n(60529),
    f = n(86070);
   const y = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(s.A, { ...y }),
    N = () => (0, f.jsx)(r.A, { ...y }),
    A = () => (0, f.jsx)(o.A, { ...y }),
    w = () => (0, f.jsx)(a.A, { ...y }),
    C = () => (0, f.jsx)(t.A, { ...y }),
    z = () => (0, f.jsx)(i.A, { ...y }),
    S = () => (0, f.jsx)(c.A, { ...y }),
    I = () => (0, f.jsx)(d.A, { ...y }),
    R = () => (0, f.jsx)(h.A, { ...y }),
    D = () => (0, f.jsx)(m.A, { ...y }),
    T = () => (0, f.jsx)(u.A, { ...y }),
    W = () => (0, f.jsx)(p.A, { ...y }),
    L = () => (0, f.jsx)(j.A, { ...y }),
    F = () => (0, f.jsx)(g.A, { ...y }),
    G = () => (0, f.jsx)(x.A, { ...y }),
    M = () => (0, f.jsx)(b.A, { ...y }),
    $ = () => (0, f.jsx)(v.A, { ...y }),
    H = () => (0, f.jsx)(k.A, { ...y });
  },
  32065(e, l, n) {
   n.d(l, { I: () => s.In });
   var s = n(29181);
  },
  46847(e, l, n) {
   n.d(l, { $: () => s.$n });
   var s = n(50805);
  },
  56528(e, l, n) {
   n.d(l, { $: () => d, x: () => c });
   var s = n(30662),
    r = n(46447),
    o = n(13526),
    a = n(45795),
    t = n(30758),
    i = n(86070);
   const c = (0, t.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: t, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof n ? (0, i.jsx)(a.oz, { components: { a: r.N_ }, children: n }) : n;
     return (0, i.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[l] }, children: t }) })] });
    };
  },
  56672(e, l, n) {
   n.d(l, { Ay: () => t, RM: () => o });
   var s = n(86070),
    r = n(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const l = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(l.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  87682(e, l, n) {
   n.d(l, { H: () => _ });
   var s = n(28369),
    r = n(46447),
    o = n(13526),
    a = n(68148),
    t = n(9016),
    i = n(69303),
    c = n(91635),
    d = n(30734),
    h = n(30758),
    m = n(31186),
    u = n(65904),
    p = n.n(u),
    j = n(14881),
    g = n(46847),
    x = n(86070);
   const b = ({ label: e, labelId: l, className: n, colorScheme: s, forcedColorsAdjust: r = !1, children: a, dangerouslySetInnerHTML: t, ...i }) => (0, x.jsxs)('figure', { className: (0, o.A)('ma-html-image', n), role: e ? 'img' : void 0, 'aria-labelledby': e ? l : void 0, ...i, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: l, children: e }), (0, x.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: a })] });
   var v = n(68197);
   const k = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   k.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: l, code: n = '<p>No code provided</p>', rawCode: s, copyCode: r, colorScheme: a, defaultExpandedCode: t, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof n ? n : s || '',
        u = 'string' == typeof n ? p().highlight(n, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        k = (0, x.jsx)(v.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === a, 'ma-canvas-astro__example--color-scheme-light': 'light' === a }), style: i, dangerouslySetInnerHTML: { __html: m } });
       return (0, x.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', l), children: [d ? (0, x.jsx)(b, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: k }) : k, (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: t, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === r && (0, x.jsx)(g.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: u = !0, children: p, container: j = 'document', language: g, designTokens: b }) => {
       const v = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || v),
        [A, w] = (0, h.useState)(N),
        [C, z] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [a.A, t.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === j ? (I = k) : 'document' === j ? (I = f) : 'surface' === j && (I = y),
        (0, x.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          v && (0, x.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, x.jsx)(I, { children: (0, x.jsx)(r.v$, { children: v }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(r.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, x.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             l &&
              (0, x.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(r.$n, {
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
