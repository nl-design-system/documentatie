'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28737],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var s = l(13526),
    r = l(30758),
    a = l(30662),
    t = l(32065),
    i = l(37168),
    o = l(86070);
   const c = (0, r.forwardRef)(({ as: e, className: n, children: l, ...r }, a) => {
     const t = e || 'div',
      i = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, o.jsx)(t, { ref: a, className: i, ...r, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: r, headingLevel: c, headingApperance: d, ...h }) => {
     const u = (0, s.A)('utrecht-accordion__section', e),
      p = (0, s.A)('utrecht-accordion__panel', n);
     return (0, o.jsxs)('details', { className: u, ...h, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(t.I, { children: (0, o.jsx)(a.rI, {}) }) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [r && (0, o.jsx)(i.D, { level: c, appearance: d, children: r }), l] })] }) }), (0, o.jsx)('div', { className: p, children: h.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => i });
   var s = l(30758);
   const r = {},
    a = s.createContext(r);
   function t(e) {
    const n = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), s.createElement(a.Provider, { value: n }, e.children));
   }
  },
  18826(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => j, default: () => k, frontMatter: () => b, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/link/in-new-tab/index","title":"Geef aan als een link in een nieuwe tab opent","description":"Richtlijnen voor aangeven als een link een nieuwe tab opent.","source":"@site/docs/richtlijnen/formulieren/link/3-in-new-tab/index.mdx","sourceDirName":"richtlijnen/formulieren/link/3-in-new-tab","slug":"/richtlijnen/formulieren/links/nieuwe-tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/3-in-new-tab/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef aan als een link in een nieuwe tab opent","title_sm":"Link in nieuwe tab","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Link in nieuwe tab","pagination_label":"Link in nieuwe tab","description":"Richtlijnen voor aangeven als een link een nieuwe tab opent.","slug":"/richtlijnen/formulieren/links/nieuwe-tab","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen link in label","permalink":"/richtlijnen/formulieren/links/niet-in-label"},"next":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"}}');
   var r = l(86070),
    a = l(18439),
    t = l(56672),
    i = l(87682),
    o = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Alle informatie als zichtbare tekst in de link plaatsen.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', target: '_blank', children: 'Lees het privacybeleid (opent in een nieuwe tab)' }), '.'] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsxs)('a', { href: '#', target: '_blank', className: 'nlds-icon-ext', children: ['Lees het privacybeleid', (0, r.jsx)('span', { className: 'sr-only', children: ', opent in een nieuwe tab' })] }), '.'] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Zichtbaar icoontje plus een aria-label voor screenreaders.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsx)('p', { children: (0, r.jsx)('a', { href: '#', target: '_blank', className: 'nlds-icon-ext', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }) }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', target: '_blank', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }), '.'] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab voor iedereen weglaten.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', target: '_blank', children: 'Lees het privacybeleid' }), '.'] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: 'Geef aan als een link in een nieuwe tab opent' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster.' }), '\n', (0, r.jsxs)(n.p, { children: ['In de HTML kan dit met het attribuut ', (0, r.jsx)(n.code, { children: 'target="_blank"' }), ' in de link.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is dit extra belangrijk.'] }), '\n', (0, r.jsx)(n.p, { children: 'Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hiermee volg je de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#predictable', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), '\n', (0, r.jsx)(n.h2, { id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', children: 'Technieken voor een link openen in een nieuwe tab of venster' }), '\n', (0, r.jsx)(n.p, { children: 'Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel (in context)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.9/', children: 'Succescriterium 2.4.9 Linkdoel (alleen link)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'Succescriterium 3.2.2 Bij input' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const b = { title: 'Geef aan als een link in een nieuwe tab opent', title_sm: 'Link in nieuwe tab', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    x = [{ value: 'Technieken voor een link openen in een nieuwe tab of venster', id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function v(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v();
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    r = l(16194),
    a = l(30758),
    t = l(56528);
   const i = {
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
   var o = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: u } = (0, a.useContext)(t.x),
     p = (0, a.useId)();
    return (c && (d = d.trim()), (0, o.jsx)(r.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: a }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, o.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, o.jsxs)('span', { ...r({ line: n }), children: [e && (0, o.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => w, KC: () => $, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => G, bz: () => z, cB: () => L, e5: () => P, hY: () => T, jK: () => I, jP: () => R, ob: () => D, rI: () => N, t4: () => H, vP: () => S, vg: () => F });
   var s = l(92081),
    r = l(90578),
    a = l(96345),
    t = l(64249),
    i = l(4603),
    o = l(91525),
    c = l(23436),
    d = l(1375),
    h = l(4077),
    u = l(58315),
    p = l(73563),
    m = l(35193),
    b = l(82999),
    j = l(13088),
    g = l(43864),
    x = l(24214),
    v = l(79532),
    k = l(60529),
    y = l(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(s.A, { ...f }),
    w = () => (0, y.jsx)(r.A, { ...f }),
    N = () => (0, y.jsx)(a.A, { ...f }),
    A = () => (0, y.jsx)(t.A, { ...f }),
    z = () => (0, y.jsx)(i.A, { ...f }),
    C = () => (0, y.jsx)(o.A, { ...f }),
    L = () => (0, y.jsx)(c.A, { ...f }),
    S = () => (0, y.jsx)(d.A, { ...f }),
    I = () => (0, y.jsx)(h.A, { ...f }),
    R = () => (0, y.jsx)(u.A, { ...f }),
    H = () => (0, y.jsx)(p.A, { ...f }),
    M = () => (0, y.jsx)(m.A, { ...f }),
    T = () => (0, y.jsx)(b.A, { ...f }),
    $ = () => (0, y.jsx)(j.A, { ...f }),
    G = () => (0, y.jsx)(g.A, { ...f }),
    P = () => (0, y.jsx)(x.A, { ...f }),
    D = () => (0, y.jsx)(v.A, { ...f }),
    F = () => (0, y.jsx)(k.A, { ...f });
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
    r = l(46447),
    a = l(13526),
    t = l(45795),
    i = l(30758),
    o = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      m = 'string' == typeof l ? (0, o.jsx)(t.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, o.jsxs)(u, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, o.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(r.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(s.jP, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, o.jsx)(r.fz, { children: e })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(r.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(s.jK, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, o.jsx)(r.fz, { children: e })] }), m] }), (0, o.jsx)('div', { className: 'nlds-guideline__example', children: (0, o.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => a });
   var s = l(86070),
    r = l(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var s = l(28369),
    r = l(46447),
    a = l(13526),
    t = l(68148),
    i = l(9016),
    o = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    u = l(31186),
    p = l(65904),
    m = l.n(p),
    b = l(14881),
    j = l(46847),
    g = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: s, forcedColorsAdjust: r = !1, children: t, dangerouslySetInnerHTML: i, ...o }) => (0, g.jsxs)('figure', { className: (0, a.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...o, children: [e && (0, g.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, g.jsx)('div', { className: (0, a.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: t })] });
   var v = l(68197);
   const k = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   k.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: r, colorScheme: t, defaultExpandedCode: i, designTokens: o, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : s || '',
        p = 'string' == typeof l ? m().highlight(l, m().languages[e], e) : m().highlight(s || '', m().languages[e], e),
        k = (0, g.jsx)(v.b, { Component: 'div', className: (0, a.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === t, 'ma-canvas-astro__example--color-scheme-light': 'light' === t }), style: o, dangerouslySetInnerHTML: { __html: u } });
       return (0, g.jsxs)('div', { className: (0, a.A)('ma-canvas-astro', n), children: [d ? (0, g.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: k }) : k, (0, g.jsx)(b.n, { children: (0, g.jsxs)(b.K, { label: 'Code', open: i, children: [(0, g.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === r && (0, g.jsx)(j.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: b = 'document', language: j, designTokens: x }) => {
       const v = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(_ || v),
        [N, A] = (0, h.useState)(w),
        [z, C] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [t.A, i.Ay, o.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const L = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === b ? (S = k) : 'document' === b ? (S = y) : 'surface' === b && (S = f),
        (0, g.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          v && (0, g.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, g.jsx)(S, { children: (0, g.jsx)(r.v$, { children: v }) }) }) }),
          p &&
           (0, g.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(r.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': L,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, g.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: L,
            hidden: !z,
            children: [
             (0, g.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
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
 },
]);
