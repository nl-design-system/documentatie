'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39604],
 {
  14881(e, n, l) {
   l.d(n, { K: () => c, n: () => d });
   var t = l(13526),
    a = l(30758),
    i = l(30662),
    o = l(32065),
    s = l(37168),
    r = l(86070);
   const d = (0, a.forwardRef)(({ as: e, className: n, children: l, ...a }, i) => {
     const o = e || 'div',
      s = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(o, { ref: i, className: s, ...a, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: a, headingLevel: d, headingApperance: c, ...g }) => {
     const m = (0, t.A)('utrecht-accordion__section', e),
      h = (0, t.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: m, ...g, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(o.I, { children: (0, r.jsx)(i.rI, {}) }) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [a && (0, r.jsx)(s.D, { level: d, appearance: c, children: a }), l] })] }) }), (0, r.jsx)('div', { className: h, children: g.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => s });
   var t = l(30758);
   const a = {},
    i = t.createContext(a);
   function o(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => d });
   var t = l(46447),
    a = l(16194),
    i = l(30758),
    o = l(56528);
   const s = {
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
   function d({ lineNumber: e, syntax: n, textContent: l, trim: d }) {
    let c = l;
    const { title: g, type: m } = (0, i.useContext)(o.x),
     h = (0, i.useId)();
    return (d && (c = c.trim()), (0, r.jsx)(a.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: l, getLineProps: a, getTokenProps: i }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, r.jsx)(t.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, r.jsxs)('span', { ...a({ line: n }), children: [e && (0, r.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => T, GP: () => N, KC: () => $, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => F, bz: () => I, cB: () => z, e5: () => R, hY: () => M, jK: () => D, jP: () => L, ob: () => G, rI: () => A, t4: () => P, vP: () => S, vg: () => H });
   var t = l(92081),
    a = l(90578),
    i = l(96345),
    o = l(64249),
    s = l(4603),
    r = l(91525),
    d = l(23436),
    c = l(1375),
    g = l(4077),
    m = l(58315),
    h = l(73563),
    b = l(35193),
    f = l(82999),
    p = l(13088),
    v = l(43864),
    u = l(24214),
    j = l(79532),
    x = l(60529),
    y = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(t.A, { ...k }),
    N = () => (0, y.jsx)(a.A, { ...k }),
    A = () => (0, y.jsx)(i.A, { ...k }),
    w = () => (0, y.jsx)(o.A, { ...k }),
    I = () => (0, y.jsx)(s.A, { ...k }),
    C = () => (0, y.jsx)(r.A, { ...k }),
    z = () => (0, y.jsx)(d.A, { ...k }),
    S = () => (0, y.jsx)(c.A, { ...k }),
    D = () => (0, y.jsx)(g.A, { ...k }),
    L = () => (0, y.jsx)(m.A, { ...k }),
    P = () => (0, y.jsx)(h.A, { ...k }),
    T = () => (0, y.jsx)(b.A, { ...k }),
    M = () => (0, y.jsx)(f.A, { ...k }),
    $ = () => (0, y.jsx)(p.A, { ...k }),
    F = () => (0, y.jsx)(v.A, { ...k }),
    R = () => (0, y.jsx)(u.A, { ...k }),
    G = () => (0, y.jsx)(j.A, { ...k }),
    H = () => (0, y.jsx)(x.A, { ...k });
  },
  32065(e, n, l) {
   l.d(n, { I: () => t.In });
   var t = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => t.$n });
   var t = l(50805);
  },
  55742(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => c, default: () => b, frontMatter: () => d, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","title":"Informatieve afbeeldingen","description":"Informatieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Informatieve afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Informatieve afbeeldingen","pagination_label":"Informatieve afbeeldingen","description":"Informatieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","informatieve afbeelding","informatieve afbeeldingen","informatief"]},"sidebar":"richtlijnen","previous":{"title":"Grafieken","permalink":"/richtlijnen/content/afbeeldingen/grafieken"},"next":{"title":"Tekst in een afbeelding","permalink":"/richtlijnen/content/afbeeldingen/tekst-in-afbeelding"}}');
   var a = l(86070),
    i = l(18439),
    o = l(87682),
    s = l(56528),
    r = l(56672);
   const d = { title: 'Informatieve afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informatieve afbeeldingen', pagination_label: 'Informatieve afbeeldingen', description: 'Informatieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'informatieve afbeelding', 'informatieve afbeeldingen', 'informatief'] },
    c = 'Informatieve afbeeldingen',
    g = {},
    m = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Gebruik je een grafiek of diagram?', id: 'gebruik-je-een-grafiek-of-diagram', level: 2 }, ...r.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'informatieve-afbeeldingen', children: 'Informatieve afbeeldingen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Mist iemand die de afbeelding niet ziet informatie als je de afbeelding weglaat? Dan is het waarschijnlijk een informatieve afbeelding. Informatieve afbeeldingen helpen de content op de pagina duidelijker te maken, of geven aanvullende informatie.' }), '\n', (0, a.jsx)(n.p, { children: 'Voorbeelden van informatieve afbeeldingen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Grafieken en infographics' }), '\n', (0, a.jsx)(n.li, { children: "Blauwdrukken en schema's" }), '\n', (0, a.jsx)(n.li, { children: 'Afbeeldingen bij instructies' }), '\n', (0, a.jsx)(n.li, { children: 'Kunst en architectuur' }), '\n', (0, a.jsx)(n.li, { children: "Productfoto's" }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of afbeeldingen informatief zijn, is afhankelijk van de context en het doel van de afbeelding. Een afbeelding van een boom op een pagina over duurzaamheidsinitiatieven kan decoratief zijn, maar in een artikel over schadelijke insecten in specifieke boomsoorten in de gemeente waarschijnlijk niet.' }), '\n', (0, a.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, a.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een informatieve afbeelding plaatst:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, a.jsx)(n.li, { children: 'Wat is het doel van de afbeelding?' }), '\n', (0, a.jsx)(n.li, { children: 'Gaat er informatie verloren als ik de afbeelding niet kan zien?' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Per afbeelding die je plaatst is de beschrijving die je meegeeft anders, omdat het antwoord op deze vragen anders is. Zorg er in ieder geval voor dat de informatie in de afbeelding ook voorkomt in de alternatieve tekst.' }), '\n', (0, a.jsx)(s.$, { appearance: 'do', title: 'Informatieve afbeeldingen een beschrijvende alternatieve tekst geven', children: (0, a.jsx)(o.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('img', { alt: 'De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.', src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Fieldset.png' }), (0, a.jsx)('p', { children: 'Alternatieve tekst: De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.' })] }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'gebruik-je-een-grafiek-of-diagram', children: 'Gebruik je een grafiek of diagram?' }), '\n', (0, a.jsxs)(n.p, { children: ['Bekijk dan ook de ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/grafieken/', children: 'richtlijnen voor grafieken' }), '. Daar lees je hoe je ervoor zorgt dat de informatie ook zonder kleur goed te begrijpen is.'] }), '\n', (0, a.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  56528(e, n, l) {
   l.d(n, { $: () => c, x: () => d });
   var t = l(30662),
    a = l(46447),
    i = l(13526),
    o = l(45795),
    s = l(30758),
    r = l(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: l, children: s, figure: c = !0 }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      m = c ? 'figure' : 'div',
      h = c ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, r.jsx)(o.oz, { components: { a: a.N_ }, children: l }) : l;
     return (0, r.jsxs)(m, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(a.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(t.jP, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, r.jsx)(a.fz, { children: e })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(a.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, r.jsx)(t.jK, {}) }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, r.jsx)(a.fz, { children: e })] }), b] }), (0, r.jsx)('div', { className: 'nlds-guideline__example', children: (0, r.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: s }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => s, RM: () => i });
   var t = l(86070),
    a = l(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var t = l(28369),
    a = l(46447),
    i = l(13526),
    o = l(68148),
    s = l(9016),
    r = l(69303),
    d = l(91635),
    c = l(30734),
    g = l(30758),
    m = l(31186),
    h = l(65904),
    b = l.n(h),
    f = l(14881),
    p = l(46847),
    v = l(86070);
   const u = ({ label: e, labelId: n, className: l, colorScheme: t, forcedColorsAdjust: a = !1, children: o, dangerouslySetInnerHTML: s, ...r }) => (0, v.jsxs)('figure', { className: (0, i.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...r, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, i.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === t, 'ma-html-image__body--color-scheme-light': 'light' === t, 'ma-html-image__body--forced-colors-adjust': a }), inert: 'true', dangerouslySetInnerHTML: s, 'aria-hidden': 'true', children: o })] });
   var j = l(68197);
   const x = ({ children: e }) => (0, v.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, v.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, v.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: t, copyCode: a, colorScheme: o, defaultExpandedCode: s, designTokens: r, forcedColorsAdjust: d = !0, label: c }) => {
       const m = 'string' == typeof l ? l : t || '',
        h = 'string' == typeof l ? b().highlight(l, b().languages[e], e) : b().highlight(t || '', b().languages[e], e),
        x = (0, v.jsx)(j.b, { Component: 'div', className: (0, i.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === o, 'ma-canvas-astro__example--color-scheme-light': 'light' === o }), style: r, dangerouslySetInnerHTML: { __html: m } });
       return (0, v.jsxs)('div', { className: (0, i.A)('ma-canvas-astro', n), children: [c ? (0, v.jsx)(u, { forcedColorsAdjust: d, label: c, labelId: c ? (0, g.useId)() : void 0, children: x }) : x, (0, v.jsx)(f.n, { children: (0, v.jsxs)(f.K, { label: 'Code', open: s, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === a && (0, v.jsx)(p.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: b, container: f = 'document', language: p, designTokens: u }) => {
       const j = 'function' == typeof b ? b() : b,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || j),
        [A, w] = (0, g.useState)(N),
        [I, C] = (0, g.useState)(l);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(N, { parser: p, plugins: [o.A, s.Ay, r.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, g.useId)();
       let S = g.Fragment;
       return (
        'paragraph' === f ? (S = x) : 'document' === f ? (S = y) : 'surface' === f && (S = k),
        (0, v.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          j && (0, v.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: u, children: (0, v.jsx)(S, { children: (0, v.jsx)(a.v$, { children: j }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(a.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!I);
             },
             'aria-expanded': I,
             'aria-controls': z,
             children: I ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, v.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !I,
            children: [
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: p, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(a.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
