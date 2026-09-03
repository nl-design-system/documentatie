'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [78876],
 {
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    s = l(16194),
    a = l(30758),
    t = l(51519);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: p } = (0, a.useContext)(t.x),
     u = (0, a.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: a }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => r });
   var o = l(30758);
   const s = {},
    a = o.createContext(s);
   function t(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), o.createElement(a.Provider, { value: n }, e.children));
   }
  },
  48116(e, n, l) {
   (l.r(n), l.d(n, { assets: () => b, contentTitle: () => v, default: () => k, frontMatter: () => g, metadata: () => o, toc: () => j }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-size/index","title":"Maak aanklikbare formuliervelden groot genoeg","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","source":"@site/docs/richtlijnen/formulieren/visual-design/5-field-size/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/5-field-size","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/5-field-size/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak aanklikbare formuliervelden groot genoeg","title_sm":"Invoerveld goed aanklikbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed aanklikbaar","pagination_label":"Invoerveld goed aanklikbaar","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Focus goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar"},"next":{"title":"Fouten niet kleurafhankelijk","permalink":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur"}}');
   var s = l(86070),
    a = l(18439),
    t = l(49539),
    r = l(80731),
    i = l(51519);
   function c(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg.', description: 'Dit voorbeeld is het icoontje 50 bij 50 pixels.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: (0, s.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, s.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '50', height: '50', focusable: 'false', children: (0, s.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.', description: 'Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: (0, s.jsxs)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', children: [(0, s.jsx)('span', { children: 'LinkedIn' }), (0, s.jsx)('br', {}), (0, s.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, s.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) })] }) }) }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Maak het aanklikbare te klein.', description: 'Dit voorbeeld is het icoontje 24 bij 24 pixels.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: (0, s.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, s.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '24x24', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, s.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c();
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'maak-interactieve-elementen-groot-genoeg', children: 'Maak interactieve elementen groot genoeg' }) }), '\n', (0, s.jsx)(n.p, { children: 'Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is.' }), '\n', (0, s.jsx)(n.p, { children: 'Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels.' }), '\n', (0, s.jsxs)(n.p, { children: ['Adrian Roselli over doelgrootte in ', (0, s.jsx)(n.a, { href: 'https://adrianroselli.com/2019/06/target-size-and-2-5-5.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Target Size and 2.5.5' }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), '\n', (0, s.jsxs)(n.p, { children: ['In ', (0, s.jsx)(n.a, { href: 'https://ishadeed.com/article/target-size', children: (0, s.jsx)('span', { lang: 'en', children: 'Designing better target sizes' }) }), ' legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels.'] }), '\n', (0, s.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, s.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s', children: (0, s.jsx)('span', { lang: 'en', children: 'Designing A11y with Material Design' }) }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.5.8/', children: 'Succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'Succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Maak aanklikbare formuliervelden groot genoeg', title_sm: 'Invoerveld goed aanklikbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed aanklikbaar', pagination_label: 'Invoerveld goed aanklikbaar', description: 'Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    j = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => a });
   var o = l(86070),
    s = l(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var o = l(4077),
    s = l(58315),
    a = l(46447),
    t = l(13526),
    r = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: i, figure: h }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = h ? 'figure' : 'div',
      m = h ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(r.oz, { components: { a: a.N_ }, children: l }) : l;
     return (0, c.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(a.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(a.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var o = l(13526),
    s = l(30758),
    a = l(96345),
    t = l(37168),
    r = l(86070);
   const i = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, a) => {
     const t = e || 'div',
      i = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(t, { ref: a, className: i, ...s, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: i, headingApperance: c, ...d }) => {
     const h = (0, o.A)('utrecht-accordion__section', e),
      p = (0, o.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: h, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(a.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [s && (0, r.jsx)(t.D, { level: i, appearance: c, children: s }), l] })] }) }), (0, r.jsx)('div', { className: p, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => y });
   var o = l(15175),
    s = l(46447),
    a = l(13526),
    t = l(68148),
    r = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    p = l(31186),
    u = l(65904),
    m = l.n(u),
    g = l(70348),
    v = l(89974),
    b = l(86070);
   const j = ({ children: e }) => (0, b.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, b.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, b.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: s, defaultExpandedCode: t, designTokens: r }) => {
       const i = 'string' == typeof l ? l : o || '',
        c = 'string' == typeof l ? m().highlight(l, m().languages[e], e) : m().highlight(o || '', m().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme', style: r, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, b.jsx)(g.n, { children: (0, b.jsxs)(g.K, { label: 'Code', open: t, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === s && (0, b.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: m, container: g = 'document', language: v, designTokens: y }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : p.qV(_ || f),
        [N, A] = (0, h.useState)(w),
        [z, M] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [t.A, r.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const C = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === g ? (S = j) : 'document' === g ? (S = x) : 'surface' === g && (S = k),
        (0, b.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          f && (0, b.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, b.jsx)(S, { children: (0, b.jsx)(s.v$, { children: f }) }) }) }),
          u &&
           (0, b.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(s.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              M(!z);
             },
             'aria-expanded': z,
             'aria-controls': C,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, b.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, b.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: N, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(s.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
 },
]);
