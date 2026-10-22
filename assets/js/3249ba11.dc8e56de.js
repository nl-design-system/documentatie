'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25640],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var a = l(13526),
    t = l(30758),
    s = l(30662),
    o = l(32065),
    i = l(37168),
    r = l(86070);
   const c = (0, t.forwardRef)(({ as: e, className: n, children: l, ...t }, s) => {
     const o = e || 'div',
      i = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(o, { ref: s, className: i, ...t, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: t, headingLevel: c, headingApperance: d, ...g }) => {
     const h = (0, a.A)('utrecht-accordion__section', e),
      m = (0, a.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: h, ...g, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(o.I, { children: (0, r.jsx)(s.rI, {}) }) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [t && (0, r.jsx)(i.D, { level: c, appearance: d, children: t }), l] })] }) }), (0, r.jsx)('div', { className: m, children: g.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => i });
   var a = l(30758);
   const t = {},
    s = a.createContext(t);
   function o(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), a.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var a = l(46447),
    t = l(16194),
    s = l(30758),
    o = l(56528);
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
   var r = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: g, type: h } = (0, s.useContext)(o.x),
     m = (0, s.useId)();
    return (c && (d = d.trim()), (0, r.jsx)(t.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, r.jsx)(a.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, r.jsxs)('span', { ...t({ line: n }), children: [e && (0, r.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => N, KC: () => W, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => H, bz: () => z, cB: () => S, e5: () => P, hY: () => T, jK: () => D, jP: () => F, ob: () => $, rI: () => w, t4: () => I, vP: () => L, vg: () => E });
   var a = l(92081),
    t = l(90578),
    s = l(96345),
    o = l(64249),
    i = l(4603),
    r = l(91525),
    c = l(23436),
    d = l(1375),
    g = l(4077),
    h = l(58315),
    m = l(73563),
    p = l(35193),
    u = l(82999),
    b = l(13088),
    j = l(43864),
    v = l(24214),
    f = l(79532),
    x = l(60529),
    k = l(86070);
   const y = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(a.A, { ...y }),
    N = () => (0, k.jsx)(t.A, { ...y }),
    w = () => (0, k.jsx)(s.A, { ...y }),
    A = () => (0, k.jsx)(o.A, { ...y }),
    z = () => (0, k.jsx)(i.A, { ...y }),
    C = () => (0, k.jsx)(r.A, { ...y }),
    S = () => (0, k.jsx)(c.A, { ...y }),
    L = () => (0, k.jsx)(d.A, { ...y }),
    D = () => (0, k.jsx)(g.A, { ...y }),
    F = () => (0, k.jsx)(h.A, { ...y }),
    I = () => (0, k.jsx)(m.A, { ...y }),
    M = () => (0, k.jsx)(p.A, { ...y }),
    T = () => (0, k.jsx)(u.A, { ...y }),
    W = () => (0, k.jsx)(b.A, { ...y }),
    H = () => (0, k.jsx)(j.A, { ...y }),
    P = () => (0, k.jsx)(v.A, { ...y }),
    $ = () => (0, k.jsx)(f.A, { ...y }),
    E = () => (0, k.jsx)(x.A, { ...y });
  },
  32065(e, n, l) {
   l.d(n, { I: () => a.In });
   var a = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => a.$n });
   var a = l(50805);
  },
  54876(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => d, default: () => p, frontMatter: () => c, metadata: () => a, toc: () => h }));
   const a = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/functionele-afbeeldingen","title":"Functionele afbeeldingen","description":"Functionele afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/functionele-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/functionele-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Functionele afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Functionele afbeeldingen","pagination_label":"Functionele afbeeldingen","description":"Functionele afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen"]},"sidebar":"richtlijnen","previous":{"title":"Decoratieve afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen"},"next":{"title":"Grafieken","permalink":"/richtlijnen/content/afbeeldingen/grafieken"}}');
   var t = l(86070),
    s = l(18439),
    o = l(87682),
    i = l(56528),
    r = l(56672);
   const c = { title: 'Functionele afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Functionele afbeeldingen', pagination_label: 'Functionele afbeeldingen', description: 'Functionele afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen'] },
    d = 'Functionele afbeeldingen',
    g = {},
    h = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Logo als link naar de homepage', id: 'logo-als-link-naar-de-homepage', level: 2 }, { value: 'Waar stel je de alternatieve tekst van het logo als link naar de homepage in?', id: 'waar-stel-je-de-alternatieve-tekst-van-het-logo-als-link-naar-de-homepage-in', level: 3 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'functionele-afbeeldingen', children: 'Functionele afbeeldingen' }) }), '\n', (0, t.jsx)(n.p, { children: 'Afbeeldingen hebben soms een functie. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Een afbeelding waar je op kan klikken om naar een andere pagina te gaan. De afbeelding is dan een link geworden.' }), '\n', (0, t.jsx)(n.li, { children: 'De afbeelding opent in het groot in een dialoogvenster op de pagina. De afbeelding is dan een knop geworden.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, t.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een functionele afbeelding plaatst:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, t.jsx)(n.li, { children: 'Wat is het doel van de afbeelding?' }), '\n', (0, t.jsx)(n.li, { children: 'Wat gebeurt er als een bezoeker op de afbeelding klikt?' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Hier beschrijf je niet wat op de afbeelding staat, maar wat de bezoeker ermee kan doen. De bezoeker weet anders niet wat er gaat gebeuren na het klikken op de link of knop.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "Een vergrootglas in een knop naast een zoekfunctie heeft als alternatieve tekst 'Zoeken', in plaats van 'Vergrootglas'." }), '\n', (0, t.jsx)(n.li, { children: "Een prullenbak in een knop naast een ge\xfcpload bestand heeft als alternatieve tekst 'Bestand overzicht.pdf verwijderen', in plaats van 'Rode prullenbak'." }), '\n', (0, t.jsx)(n.li, { children: "Een icoon in een link dat aangeeft dat een link naar een externe pagina gaat heeft als alternatieve tekst '(gaat naar externe pagina)', in plaats van 'Vierkant met daarin een pijl die naar rechtsboven wijst'." }), '\n', (0, t.jsx)(n.li, { children: "Een huis in een link in het broodkruimelpad waarmee je naar de homepage kunt navigeren heeft als alternatieve tekst 'Terug naar de homepage', in plaats van 'Blauw huisje'." }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'logo-als-link-naar-de-homepage', children: 'Logo als link naar de homepage' }), '\n', (0, t.jsx)(n.p, { children: 'Veel websites hebben een logo dat ook een link is naar de homepage. Dit logo staat dan bovenaan iedere pagina, meestal naast het navigatiemenu. Hier is het belangrijk om zowel te benoemen dat het een logo is, als waar de link naar de naartoe gaat. In die zin is een logo zowel een informatieve als een functionele afbeelding.' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Benoem de organisatie, dat het om een logo gaat en waar de link naar verwijst', children: (0, t.jsx)(o.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('img', { alt: 'NL Design System logo, naar de homepage', src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/9e5331b623e1bbd5bea950c934a20459e13b64bf/logo.svg' }), (0, t.jsx)('p', { children: 'Alternatieve tekst: NL Design System logo, naar de homepage' })] }) }) }), '\n', (0, t.jsxs)(n.p, { children: ['Lees ook onze ', (0, t.jsx)(n.a, { href: '/blog/toegankelijke-naam-link-logo-header/', children: 'blog "De toegankelijke naam van een link op een logo in de header"' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'waar-stel-je-de-alternatieve-tekst-van-het-logo-als-link-naar-de-homepage-in', children: 'Waar stel je de alternatieve tekst van het logo als link naar de homepage in?' }), '\n', (0, t.jsx)(n.p, { children: 'Het verschilt per contentmanagementsysteem (CMS) waar je dit aan kunt passen en of je dit als contentmaker zelf kunt doen. Meestal zit deze optie in de thema-instellingen van het CMS. Het kan daarom zijn dat je geen rechten hebt om de alternatieve tekst van het logo bovenaan iedere pagina zelf aan te passen. Vraag dit dan aan de beheerder of leverancier van je website.' }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel (in context)' }) }), '\n'] }), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var a = l(30662),
    t = l(46447),
    s = l(13526),
    o = l(45795),
    i = l(30758),
    r = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d = !0 }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, r.jsx)(o.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, r.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(a.jP, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, r.jsx)(t.fz, { children: e })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(a.jK, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, r.jsx)(t.fz, { children: e })] }), p] }), (0, r.jsx)('div', { className: 'nlds-guideline__example', children: (0, r.jsx)(c.Provider, { value: { title: e, type: g[n] }, children: i }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => s });
   var a = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var a = l(28369),
    t = l(46447),
    s = l(13526),
    o = l(68148),
    i = l(9016),
    r = l(69303),
    c = l(91635),
    d = l(30734),
    g = l(30758),
    h = l(31186),
    m = l(65904),
    p = l.n(m),
    u = l(14881),
    b = l(46847),
    j = l(86070);
   const v = ({ label: e, labelId: n, className: l, colorScheme: a, forcedColorsAdjust: t = !1, children: o, dangerouslySetInnerHTML: i, ...r }) => (0, j.jsxs)('figure', { className: (0, s.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...r, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, s.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === a, 'ma-html-image__body--color-scheme-light': 'light' === a, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: i, 'aria-hidden': 'true', children: o })] });
   var f = l(68197);
   const x = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: a, copyCode: t, colorScheme: o, defaultExpandedCode: i, designTokens: r, forcedColorsAdjust: c = !0, label: d }) => {
       const h = 'string' == typeof l ? l : a || '',
        m = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(a || '', p().languages[e], e),
        x = (0, j.jsx)(f.b, { Component: 'div', className: (0, s.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === o, 'ma-canvas-astro__example--color-scheme-light': 'light' === o }), style: r, dangerouslySetInnerHTML: { __html: h } });
       return (0, j.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [d ? (0, j.jsx)(v, { forcedColorsAdjust: c, label: d, labelId: d ? (0, g.useId)() : void 0, children: x }) : x, (0, j.jsx)(u.n, { children: (0, j.jsxs)(u.K, { label: 'Code', open: i, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: m } }) }), 'allow' === t && (0, j.jsx)(b.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: p, container: u = 'document', language: b, designTokens: v }) => {
       const f = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || f),
        [w, A] = (0, g.useState)(N),
        [z, C] = (0, g.useState)(l);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: b, plugins: [o.A, i.Ay, r.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, g.useId)();
       let L = g.Fragment;
       return (
        'paragraph' === u ? (L = x) : 'document' === u ? (L = k) : 'surface' === u && (L = y),
        (0, j.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: v, children: (0, j.jsx)(L, { children: (0, j.jsx)(t.v$, { children: f }) }) }) }),
          m &&
           (0, j.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, j.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, j.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: w, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
