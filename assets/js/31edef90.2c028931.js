'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25974],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var s = l(13526),
    o = l(30758),
    r = l(30662),
    i = l(32065),
    t = l(37168),
    a = l(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, r) => {
     const i = e || 'div',
      t = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(i, { ref: r, className: t, ...o, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: c, headingApperance: d, ...u }) => {
     const m = (0, s.A)('utrecht-accordion__section', e),
      h = (0, s.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: m, ...u, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(i.I, { children: (0, a.jsx)(r.rI, {}) }) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(t.D, { level: c, appearance: d, children: o }), l] })] }) }), (0, a.jsx)('div', { className: h, children: u.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => i, x: () => t });
   var s = l(30758);
   const o = {},
    r = s.createContext(o);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    o = l(16194),
    r = l(30758),
    i = l(56528);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: m } = (0, r.useContext)(i.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(o.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...o({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => L, GP: () => N, KC: () => $, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => G, bz: () => C, cB: () => z, e5: () => H, hY: () => M, jK: () => I, jP: () => F, ob: () => P, rI: () => A, t4: () => R, vP: () => D, vg: () => T });
   var s = l(92081),
    o = l(90578),
    r = l(96345),
    i = l(64249),
    t = l(4603),
    a = l(91525),
    c = l(23436),
    d = l(1375),
    u = l(4077),
    m = l(58315),
    h = l(73563),
    p = l(35193),
    g = l(82999),
    j = l(13088),
    v = l(43864),
    x = l(24214),
    y = l(79532),
    b = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(s.A, { ..._ }),
    N = () => (0, f.jsx)(o.A, { ..._ }),
    A = () => (0, f.jsx)(r.A, { ..._ }),
    w = () => (0, f.jsx)(i.A, { ..._ }),
    C = () => (0, f.jsx)(t.A, { ..._ }),
    S = () => (0, f.jsx)(a.A, { ..._ }),
    z = () => (0, f.jsx)(c.A, { ..._ }),
    D = () => (0, f.jsx)(d.A, { ..._ }),
    I = () => (0, f.jsx)(u.A, { ..._ }),
    F = () => (0, f.jsx)(m.A, { ..._ }),
    R = () => (0, f.jsx)(h.A, { ..._ }),
    L = () => (0, f.jsx)(p.A, { ..._ }),
    M = () => (0, f.jsx)(g.A, { ..._ }),
    $ = () => (0, f.jsx)(j.A, { ..._ }),
    G = () => (0, f.jsx)(v.A, { ..._ }),
    H = () => (0, f.jsx)(x.A, { ..._ }),
    P = () => (0, f.jsx)(y.A, { ..._ }),
    T = () => (0, f.jsx)(b.A, { ..._ });
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
    r = l(13526),
    i = l(45795),
    t = l(30758),
    a = l(86070);
   const c = (0, t.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: t, figure: d = !0 }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, a.jsx)(i.oz, { components: { a: o.N_ }, children: l }) : l;
     return (0, a.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(s.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(o.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: t }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => t, RM: () => r });
   var s = l(86070),
    o = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
  },
  77205(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => j, default: () => b, frontMatter: () => g, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/error/clarity/index","title":"Schrijf een duidelijke foutmelding","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/error/3-clarity","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een duidelijke foutmelding","title_sm":"Duidelijke foutmeldingen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Duidelijke foutmeldingen","pagination_label":"Duidelijke foutmeldingen","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven"},"next":{"title":"Plaatsing foutmelding","permalink":"/richtlijnen/formulieren/foutmeldingen/plaatsing"}}');
   var o = l(86070),
    r = l(18439),
    i = l(56672),
    t = l(87682),
    a = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Leg uit waarom een datum wordt afgekeurd.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'description-passport-validity', children: 'Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity', type: 'text', name: 'passport-validity', 'aria-describedby': 'description-passport-validity' }) })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Geef een voorbeeld van wat er verwacht wordt.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email', children: 'E-mail' }) }), (0, o.jsx)('p', { id: 'description-email', children: 'Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email', type: 'email', name: 'email', 'aria-describedby': 'description-email' }) })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'description-passport-validity-2', children: 'Invoerfout: Dit veld is verplicht.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'false', type: 'text', name: 'passport-validity-2', 'aria-describedby': 'description-passport-validity-2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'schrijf-een-duidelijke-foutmelding', children: 'Schrijf een duidelijke foutmelding' }) }), '\n', (0, o.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), '\n', (0, o.jsx)(n.p, { children: 'Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen.' }), '\n', (0, o.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Vul een geldig e-mailadres in, bijvoorbeeld ', (0, o.jsx)(n.a, { href: 'mailto:naam@voorbeeld.nl', children: 'naam@voorbeeld.nl' }), '.'] }), '\n', (0, o.jsx)(n.li, { children: 'De geldigheidsdatum van uw paspoort moet in de toekomst zijn.' }), '\n', (0, o.jsx)(n.li, { children: 'Vul het huisnummer in zodat wij je bestelling kunnen opsturen.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' even en is het duidelijker dat de foutmelding apart een zin is.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ', (0, o.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, o.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '. In de video ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/videos/usability-heuristic-recognize-errors/', children: (0, o.jsx)('span', { lang: 'en', children: 'Help Users Recognize, Diagnose, and Recover from Errors' }) }), ' geeft de Nielsen Norman Group tips voor goede hulp aan gebruikers voor het verhelpen van fouten.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Schrijf een duidelijke foutmelding', title_sm: 'Duidelijke foutmeldingen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Duidelijke foutmeldingen', pagination_label: 'Duidelijke foutmeldingen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(i.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var s = l(28369),
    o = l(46447),
    r = l(13526),
    i = l(68148),
    t = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(14881),
    j = l(46847),
    v = l(86070);
   const x = ({ label: e, labelId: n, className: l, colorScheme: s, forcedColorsAdjust: o = !1, children: i, dangerouslySetInnerHTML: t, ...a }) => (0, v.jsxs)('figure', { className: (0, r.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...a, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, r.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': o }), inert: 'true', dangerouslySetInnerHTML: t, 'aria-hidden': 'true', children: i })] });
   var y = l(68197);
   const b = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: o, colorScheme: i, defaultExpandedCode: t, designTokens: a, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof l ? l : s || '',
        h = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        b = (0, v.jsx)(y.b, { Component: 'div', className: (0, r.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === i, 'ma-canvas-astro__example--color-scheme-light': 'light' === i }), style: a, dangerouslySetInnerHTML: { __html: m } });
       return (0, v.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, u.useId)() : void 0, children: b }) : b, (0, v.jsx)(g.n, { children: (0, v.jsxs)(g.K, { label: 'Code', open: t, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === o && (0, v.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: j, designTokens: x }) => {
       const y = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(k || y),
        [A, w] = (0, u.useState)(N),
        [C, S] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [i.A, t.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === g ? (D = b) : 'document' === g ? (D = f) : 'surface' === g && (D = _),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          y && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, v.jsx)(D, { children: (0, v.jsx)(o.v$, { children: y }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, v.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
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
