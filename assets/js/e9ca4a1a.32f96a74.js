'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76558],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var o = l(13526),
    s = l(30758),
    t = l(30662),
    r = l(32065),
    a = l(37168),
    i = l(86070);
   const c = (0, s.forwardRef)(({ as: e, className: n, children: l, ...s }, t) => {
     const r = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: t, className: a, ...s, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: s, headingLevel: c, headingApperance: d, ...m }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.I, { children: (0, i.jsx)(t.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [s && (0, i.jsx)(a.D, { level: c, appearance: d, children: s }), l] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var o = l(30758);
   const s = {},
    t = o.createContext(s);
   function r(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    s = l(16194),
    t = l(30758),
    r = l(56528);
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
    const { title: m, type: u } = (0, t.useContext)(r.x),
     h = (0, t.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => R, GP: () => A, KC: () => T, Nd: () => _, Rt: () => S, Vj: () => N, Wk: () => H, bz: () => C, cB: () => z, e5: () => P, hY: () => D, jK: () => F, jP: () => L, ob: () => $, rI: () => w, t4: () => M, vP: () => I, vg: () => V });
   var o = l(92081),
    s = l(90578),
    t = l(96345),
    r = l(64249),
    a = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    m = l(4077),
    u = l(58315),
    h = l(73563),
    p = l(35193),
    j = l(82999),
    v = l(13088),
    x = l(43864),
    g = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(o.A, { ...k }),
    A = () => (0, f.jsx)(s.A, { ...k }),
    w = () => (0, f.jsx)(t.A, { ...k }),
    N = () => (0, f.jsx)(r.A, { ...k }),
    C = () => (0, f.jsx)(a.A, { ...k }),
    S = () => (0, f.jsx)(i.A, { ...k }),
    z = () => (0, f.jsx)(c.A, { ...k }),
    I = () => (0, f.jsx)(d.A, { ...k }),
    F = () => (0, f.jsx)(m.A, { ...k }),
    L = () => (0, f.jsx)(u.A, { ...k }),
    M = () => (0, f.jsx)(h.A, { ...k }),
    R = () => (0, f.jsx)(p.A, { ...k }),
    D = () => (0, f.jsx)(j.A, { ...k }),
    T = () => (0, f.jsx)(v.A, { ...k }),
    H = () => (0, f.jsx)(x.A, { ...k }),
    P = () => (0, f.jsx)(g.A, { ...k }),
    $ = () => (0, f.jsx)(b.A, { ...k }),
    V = () => (0, f.jsx)(y.A, { ...k });
  },
  32065(e, n, l) {
   l.d(n, { I: () => o.In });
   var o = l(29181);
  },
  37725(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => v, default: () => y, frontMatter: () => j, metadata: () => o, toc: () => g }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/autofill/index","title":"Vul bekende informatie in waar mogelijk","description":"Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.","source":"@site/docs/richtlijnen/formulieren/help/6-autofill/index.mdx","sourceDirName":"richtlijnen/formulieren/help/6-autofill","slug":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","permalink":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/6-autofill/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vul bekende informatie in waar mogelijk","title_sm":"Automatisch invullen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Automatisch invullen","pagination_label":"Automatisch invullen","description":"Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.","slug":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Autocomplete in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete"},"next":{"title":"Controleren en aanpassen","permalink":"/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen"}}');
   var s = l(86070),
    t = l(18439),
    r = l(56672),
    a = l(87682),
    i = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Voeg autocomplete waarden toe aan adresgegevens.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'adres1', children: 'Straat en huisnummer' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'adres1', autoComplete: 'street-address', name: 'adres' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'postcode1', children: 'Postcode' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'postcode1', autoComplete: 'postal-code', name: 'postcode' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'woonplaats1', children: 'Woonplaats' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'woonplaats1', autoComplete: 'address-level2', name: 'woonplaats' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Laat autocomplete waarden weg bij adresgegevens.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'adres2', children: 'Straat en huisnummer' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'adres2', name: 'adres' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'postcode2', children: 'Postcode' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'postcode2', name: 'postcode' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'woonplaats2', children: 'Woonplaats' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'woonplaats2', name: 'woonplaats' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ', (0, s.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'gebruik van DigiD' }), ' is wel aan wettelijke voorwaarden verbonden.'] }), '\n', (0, s.jsx)(n.h3, { id: 'autocomplete', children: 'Autocomplete' }), '\n', (0, s.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, s.jsx)(n.code, { children: 'autocomplete' }), ' maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: 'HTML-attribuut: autocomplete' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ', (0, s.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/#dutch', children: 'autocomplete in Nederlandse formulieren' }), ' toe te passen.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.7/', children: 'succescriterium 3.3.7 Overbodige invoer' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'Vul bekende informatie in waar mogelijk', title_sm: 'Automatisch invullen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    x = {},
    g = [{ value: 'Autocomplete', id: 'autocomplete', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  46847(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var o = l(30662),
    s = l(46447),
    t = l(13526),
    r = l(45795),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, i.jsx)(r.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(o.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(o.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(s.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => t });
   var o = l(86070),
    s = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var o = l(28369),
    s = l(46447),
    t = l(13526),
    r = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    h = l(65904),
    p = l.n(h),
    j = l(14881),
    v = l(46847),
    x = l(86070);
   const g = ({ label: e, labelId: n, className: l, colorScheme: o, forcedColorsAdjust: s = !1, children: r, dangerouslySetInnerHTML: a, ...i }) => (0, x.jsxs)('figure', { className: (0, t.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === o, 'ma-html-image__body--color-scheme-light': 'light' === o, 'ma-html-image__body--forced-colors-adjust': s }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, x.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: s, colorScheme: r, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : o || '',
        h = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(o || '', p().languages[e], e),
        y = (0, x.jsx)(b.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: i, dangerouslySetInnerHTML: { __html: u } });
       return (0, x.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(g, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === s && (0, x.jsx)(v.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: j = 'document', language: v, designTokens: g }) => {
       const b = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : u.qV(_ || b),
        [w, N] = (0, m.useState)(A),
        [C, S] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: v, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [A]);
       const z = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === j ? (I = y) : 'document' === j ? (I = f) : 'surface' === j && (I = k),
        (0, x.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          b && (0, x.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: g, children: (0, x.jsx)(I, { children: (0, x.jsx)(s.v$, { children: b }) }) }) }),
          h &&
           (0, x.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(s.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, x.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(s.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
