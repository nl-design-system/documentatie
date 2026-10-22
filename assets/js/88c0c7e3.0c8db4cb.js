'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [78876],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var s = l(13526),
    o = l(30758),
    a = l(30662),
    r = l(32065),
    t = l(37168),
    i = l(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, a) => {
     const r = e || 'div',
      t = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: a, className: t, ...o, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: m, ...h, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.I, { children: (0, i.jsx)(a.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [o && (0, i.jsx)(t.D, { level: c, appearance: d, children: o }), l] })] }) }), (0, i.jsx)('div', { className: u, children: h.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => t });
   var s = l(30758);
   const o = {},
    a = s.createContext(o);
   function r(e) {
    const n = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(a.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    o = l(16194),
    a = l(30758),
    r = l(56528);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: m } = (0, a.useContext)(r.x),
     u = (0, a.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: a }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => D, GP: () => w, KC: () => F, Nd: () => _, Rt: () => C, Vj: () => N, Wk: () => H, bz: () => z, cB: () => M, e5: () => $, hY: () => T, jK: () => S, jP: () => R, ob: () => P, rI: () => A, t4: () => L, vP: () => I, vg: () => G });
   var s = l(92081),
    o = l(90578),
    a = l(96345),
    r = l(64249),
    t = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    h = l(4077),
    m = l(58315),
    u = l(73563),
    p = l(35193),
    g = l(82999),
    v = l(13088),
    j = l(43864),
    x = l(24214),
    b = l(79532),
    k = l(60529),
    y = l(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(s.A, { ...f }),
    w = () => (0, y.jsx)(o.A, { ...f }),
    A = () => (0, y.jsx)(a.A, { ...f }),
    N = () => (0, y.jsx)(r.A, { ...f }),
    z = () => (0, y.jsx)(t.A, { ...f }),
    C = () => (0, y.jsx)(i.A, { ...f }),
    M = () => (0, y.jsx)(c.A, { ...f }),
    I = () => (0, y.jsx)(d.A, { ...f }),
    S = () => (0, y.jsx)(h.A, { ...f }),
    R = () => (0, y.jsx)(m.A, { ...f }),
    L = () => (0, y.jsx)(u.A, { ...f }),
    D = () => (0, y.jsx)(p.A, { ...f }),
    T = () => (0, y.jsx)(g.A, { ...f }),
    F = () => (0, y.jsx)(v.A, { ...f }),
    H = () => (0, y.jsx)(j.A, { ...f }),
    $ = () => (0, y.jsx)(x.A, { ...f }),
    P = () => (0, y.jsx)(b.A, { ...f }),
    G = () => (0, y.jsx)(k.A, { ...f });
  },
  32065(e, n, l) {
   l.d(n, { I: () => s.In });
   var s = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var s = l(30662),
    o = l(46447),
    a = l(13526),
    r = l(45795),
    t = l(30758),
    i = l(86070);
   const c = (0, t.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: t, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, i.jsx)(r.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, i.jsxs)(m, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(o.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: t }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => t, RM: () => a });
   var s = l(86070),
    o = l(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  79462(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => k, frontMatter: () => g, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-size/index","title":"Maak aanklikbare formuliervelden groot genoeg","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","source":"@site/docs/richtlijnen/formulieren/visual-design/5-field-size/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/5-field-size","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/5-field-size/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak aanklikbare formuliervelden groot genoeg","title_sm":"Invoerveld goed aanklikbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed aanklikbaar","pagination_label":"Invoerveld goed aanklikbaar","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Focus goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar"},"next":{"title":"Fouten niet kleurafhankelijk","permalink":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur"}}');
   var o = l(86070),
    a = l(18439),
    r = l(56672),
    t = l(87682),
    i = l(56528);
   function c(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg.', description: 'Dit voorbeeld is het icoontje 50 bij 50 pixels.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, o.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '50', height: '50', focusable: 'false', children: (0, o.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.', description: 'Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: (0, o.jsxs)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', children: [(0, o.jsx)('span', { children: 'LinkedIn' }), (0, o.jsx)('br', {}), (0, o.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, o.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) })] }) }) }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Maak het aanklikbare te klein.', description: 'Dit voorbeeld is het icoontje 24 bij 24 pixels.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, o.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '24x24', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, o.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c();
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'maak-interactieve-elementen-groot-genoeg', children: 'Maak interactieve elementen groot genoeg' }) }), '\n', (0, o.jsx)(n.p, { children: 'Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is.' }), '\n', (0, o.jsx)(n.p, { children: 'Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels.' }), '\n', (0, o.jsxs)(n.p, { children: ['Adrian Roselli over doelgrootte in ', (0, o.jsx)(n.a, { href: 'https://adrianroselli.com/2019/06/target-size-and-2-5-5.html', children: (0, o.jsx)('span', { lang: 'en', children: 'Target Size and 2.5.5' }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), '\n', (0, o.jsxs)(n.p, { children: ['In ', (0, o.jsx)(n.a, { href: 'https://ishadeed.com/article/target-size', children: (0, o.jsx)('span', { lang: 'en', children: 'Designing better target sizes' }) }), ' legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels.'] }), '\n', (0, o.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, o.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s', children: (0, o.jsx)('span', { lang: 'en', children: 'Designing A11y with Material Design' }) }), '.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.5.8/', children: 'Succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'Succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Maak aanklikbare formuliervelden groot genoeg', title_sm: 'Invoerveld goed aanklikbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed aanklikbaar', pagination_label: 'Invoerveld goed aanklikbaar', description: 'Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var s = l(28369),
    o = l(46447),
    a = l(13526),
    r = l(68148),
    t = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    m = l(31186),
    u = l(65904),
    p = l.n(u),
    g = l(14881),
    v = l(46847),
    j = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: s, forcedColorsAdjust: o = !1, children: r, dangerouslySetInnerHTML: t, ...i }) => (0, j.jsxs)('figure', { className: (0, a.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, a.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: r })] });
   var b = l(68197);
   const k = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   k.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: o, colorScheme: r, defaultExpandedCode: t, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof l ? l : s || '',
        u = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        k = (0, j.jsx)(b.b, { Component: 'div', className: (0, a.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: i, dangerouslySetInnerHTML: { __html: m } });
       return (0, j.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: k }) : k, (0, j.jsx)(g.n, { children: (0, j.jsxs)(g.K, { label: 'Code', open: t, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: u } }) }), 'allow' === o && (0, j.jsx)(v.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: g = 'document', language: v, designTokens: x }) => {
       const b = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || b),
        [A, N] = (0, h.useState)(w),
        [z, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [r.A, t.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const M = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === g ? (I = k) : 'document' === g ? (I = y) : 'surface' === g && (I = f),
        (0, j.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          b && (0, j.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, j.jsx)(I, { children: (0, j.jsx)(o.v$, { children: b }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': M,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: M,
            hidden: !z,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
