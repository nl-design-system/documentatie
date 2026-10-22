'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42564],
 {
  14881(e, n, s) {
   s.d(n, { K: () => d, n: () => c });
   var l = s(13526),
    t = s(30758),
    o = s(30662),
    r = s(32065),
    a = s(37168),
    i = s(86070);
   const c = (0, t.forwardRef)(({ as: e, className: n, children: s, ...t }, o) => {
     const r = e || 'div',
      a = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: o, className: a, ...t, children: s });
    }),
    d = ({ className: e, classNamePanel: n, label: s, heading: t, headingLevel: c, headingApperance: d, ...m }) => {
     const p = (0, l.A)('utrecht-accordion__section', e),
      h = (0, l.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: p, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [t && (0, i.jsx)(a.D, { level: c, appearance: d, children: t }), s] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => a });
   var l = s(30758);
   const t = {},
    o = l.createContext(t);
   function r(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  25965(e, n, s) {
   (s.r(n), s.d(n, { assets: () => m, contentTitle: () => d, default: () => j, frontMatter: () => c, metadata: () => l, toc: () => p }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/summaries","title":"Opsommingen","description":"Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.","source":"@site/docs/richtlijnen/content/tekstopmaak/summaries.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/summaries.mdx","tags":[],"version":"current","frontMatter":{"title":"Opsommingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Opsommingen","pagination_label":"Opsommingen","description":"Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.","slug":"/richtlijnen/content/tekstopmaak/opsommingen","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","opsommingen","geordende","ongeordende","lijst"]},"sidebar":"richtlijnen","previous":{"title":"Citaten","permalink":"/richtlijnen/content/citaten"},"next":{"title":"Tabellen","permalink":"/richtlijnen/content/tekstopmaak/tabellen"}}');
   var t = s(86070),
    o = s(18439),
    r = s(87682),
    a = s(56528),
    i = s(56672);
   const c = { title: 'Opsommingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Opsommingen', pagination_label: 'Opsommingen', description: 'Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.', slug: '/richtlijnen/content/tekstopmaak/opsommingen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'opsommingen', 'geordende', 'ongeordende', 'lijst'] },
    d = 'Opsommingen',
    m = {},
    p = [{ value: 'Lijst-elementen', id: 'lijst-elementen', level: 2 }, { value: 'Genummerde en ongenummerde lijsten', id: 'genummerde-en-ongenummerde-lijsten', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'opsommingen', children: 'Opsommingen' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Met een opsomming maak je informatie overzichtelijk. Dat is handig voor iedereen die snel wil scannen, maar ook belangrijk voor mensen die gebruikmaken van een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een vergroot scherm.'] }), '\n', (0, t.jsx)(n.p, { children: 'Alleen: niet elke lijst is automatisch toegankelijk. Dat hangt af van de manier waarop je de opsomming opmaakt. Een visuele lijst met streepjes of icoontjes wordt niet altijd herkend door hulptechnologie. Ook het type lijst, genummerd of ongenummerd, moet passen bij de inhoud.' }), '\n', (0, t.jsx)(n.p, { children: 'Op deze pagina lees je hoe je opsommingen toegankelijk maakt en welke opmaak je het beste kunt gebruiken.' }), '\n', (0, t.jsx)(n.h2, { id: 'lijst-elementen', children: 'Lijst-elementen' }), '\n', (0, t.jsx)(n.p, { children: 'Stel een lijst in als lijst-element via de contenteditor in je contentmanagementsysteem (CMS). Zo krijgt de lijst de juiste opmaak en de juiste HTML-elementen mee. De meeste CMS-en bieden hier een aparte optie voor aan. Maak niet zelf een lijst door het gebruik van bijvoorbeeld leestekens. Hulpsoftware herkent deze opmaak namelijk niet als een lijst.' }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Zelf sterretjes, streepjes of nummers typen om een lijst te maken.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('p', { children: ['- Dit is geen lijst', (0, t.jsx)('br', {}), '- Dit is geen lijst', (0, t.jsx)('br', {}), '- Dit is geen lijst', (0, t.jsx)('br', {}), '- Dit is geen lijst', (0, t.jsx)('br', {}), (0, t.jsx)('br', {}), '1. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), '2. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), '3. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), '4. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), (0, t.jsx)('br', {})] }) }) }) }), '\n', (0, t.jsx)(n.h2, { id: 'genummerde-en-ongenummerde-lijsten', children: 'Genummerde en ongenummerde lijsten' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Gebruik een genummerde lijst wanneer de nummering de bezoeker helpt met het verwerken van de informatie of als de items in een vaste volgorde staan. Bijvoorbeeld bij een stappenplan. Gebruik anders een ongenummerde lijst met opsommingstekens.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('h2', { children: 'Burrata salade' }), (0, t.jsx)('p', { children: 'Een lekkere salade met burrata en tomaten.' }), (0, t.jsx)('h3', { children: 'Ingredi\xebnten' }), (0, t.jsxs)('ul', { children: [(0, t.jsx)('li', { children: '250 gr (snoep)tomaten' }), (0, t.jsx)('li', { children: '1 bol burrata' }), (0, t.jsx)('li', { children: 'verse basilicum' }), (0, t.jsx)('li', { children: '1 el pesto' }), (0, t.jsx)('li', { children: 'scheutje olijfolie' }), (0, t.jsx)('li', { children: 'handje rucola' }), (0, t.jsx)('li', { children: 'crema di balsamico' }), (0, t.jsx)('li', { children: 'zwarte peper' })] }), (0, t.jsx)('h3', { children: 'Bereiding' }), (0, t.jsxs)('ol', { children: [(0, t.jsx)('li', { children: 'Snijd de tomaten in stukjes.' }), (0, t.jsx)('li', { children: 'Verdeel de rucola over een bord, en voeg ook de tomaten toe.' }), (0, t.jsx)('li', { children: 'Leg de bol burrata in het midden van de salade.' }), (0, t.jsx)('li', { children: 'Verdeel wat peper, olijfolie en crema di balsamico over de salade.' }), (0, t.jsx)('li', { children: 'Maak af met een schepje pesto en wat verse basilicum.' })] })] }) }) }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Lees de pagina door en controleer alle opsommingen. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Bekijk of de tekst is opgemaakt via de opsomknoppen in je CMS, en niet met zelfgetypte streepjes of andere tekens want die worden niet als lijst herkend door hulptechnologie.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of je een genummerde of ongenummerde lijst hebt gekozen die past bij de inhoud.\nGebruik een genummerde lijst als de volgorde belangrijk is (zoals bij stappen). Gebruik een ongenummerde lijst als de volgorde geen rol speelt.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, t.jsx)(i.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => c });
   var l = s(46447),
    t = s(16194),
    o = s(30758),
    r = s(56528);
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
   var i = s(86070);
   function c({ lineNumber: e, syntax: n, textContent: s, trim: c }) {
    let d = s;
    const { title: m, type: p } = (0, o.useContext)(r.x),
     h = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: t, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => O, GP: () => N, KC: () => G, Nd: () => f, Rt: () => z, Vj: () => w, Wk: () => H, bz: () => C, cB: () => S, e5: () => $, hY: () => T, jK: () => I, jP: () => M, ob: () => P, rI: () => A, t4: () => L, vP: () => D, vg: () => F });
   var l = s(92081),
    t = s(90578),
    o = s(96345),
    r = s(64249),
    a = s(4603),
    i = s(91525),
    c = s(23436),
    d = s(1375),
    m = s(4077),
    p = s(58315),
    h = s(73563),
    j = s(35193),
    u = s(82999),
    g = s(13088),
    b = s(43864),
    x = s(24214),
    v = s(79532),
    k = s(60529),
    y = s(86070);
   const _ = { width: '1em', height: '1em' },
    f = () => (0, y.jsx)(l.A, { ..._ }),
    N = () => (0, y.jsx)(t.A, { ..._ }),
    A = () => (0, y.jsx)(o.A, { ..._ }),
    w = () => (0, y.jsx)(r.A, { ..._ }),
    C = () => (0, y.jsx)(a.A, { ..._ }),
    z = () => (0, y.jsx)(i.A, { ..._ }),
    S = () => (0, y.jsx)(c.A, { ..._ }),
    D = () => (0, y.jsx)(d.A, { ..._ }),
    I = () => (0, y.jsx)(m.A, { ..._ }),
    M = () => (0, y.jsx)(p.A, { ..._ }),
    L = () => (0, y.jsx)(h.A, { ..._ }),
    O = () => (0, y.jsx)(j.A, { ..._ }),
    T = () => (0, y.jsx)(u.A, { ..._ }),
    G = () => (0, y.jsx)(g.A, { ..._ }),
    H = () => (0, y.jsx)(b.A, { ..._ }),
    $ = () => (0, y.jsx)(x.A, { ..._ }),
    P = () => (0, y.jsx)(v.A, { ..._ }),
    F = () => (0, y.jsx)(k.A, { ..._ });
  },
  32065(e, n, s) {
   s.d(n, { I: () => l.In });
   var l = s(29181);
  },
  46847(e, n, s) {
   s.d(n, { $: () => l.$n });
   var l = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => c });
   var l = s(30662),
    t = s(46447),
    o = s(13526),
    r = s(45795),
    a = s(30758),
    i = s(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      j = 'string' == typeof s ? (0, i.jsx)(r.oz, { components: { a: t.N_ }, children: s }) : s;
     return (0, i.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(l.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(t.fz, { children: e })] }), j] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => o });
   var l = s(86070),
    t = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, s) {
   s.d(n, { H: () => f });
   var l = s(28369),
    t = s(46447),
    o = s(13526),
    r = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    m = s(30758),
    p = s(31186),
    h = s(65904),
    j = s.n(h),
    u = s(14881),
    g = s(46847),
    b = s(86070);
   const x = ({ label: e, labelId: n, className: s, colorScheme: l, forcedColorsAdjust: t = !1, children: r, dangerouslySetInnerHTML: a, ...i }) => (0, b.jsxs)('figure', { className: (0, o.A)('ma-html-image', s), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, b.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, b.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === l, 'ma-html-image__body--color-scheme-light': 'light' === l, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var v = s(68197);
   const k = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   k.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: l, copyCode: t, colorScheme: r, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const p = 'string' == typeof s ? s : l || '',
        h = 'string' == typeof s ? j().highlight(s, j().languages[e], e) : j().highlight(l || '', j().languages[e], e),
        k = (0, b.jsx)(v.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: i, dangerouslySetInnerHTML: { __html: p } });
       return (0, b.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, b.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: k }) : k, (0, b.jsx)(u.n, { children: (0, b.jsxs)(u.K, { label: 'Code', open: a, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === t && (0, b.jsx)(g.$, { 'data-copy-code': p, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: h = !0, children: j, container: u = 'document', language: g, designTokens: x }) => {
       const v = 'function' == typeof j ? j() : j,
        f = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(f || v),
        [A, w] = (0, m.useState)(N),
        [C, z] = (0, m.useState)(s);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let D = m.Fragment;
       return (
        'paragraph' === u ? (D = k) : 'document' === u ? (D = y) : 'surface' === u && (D = _),
        (0, b.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          v && (0, b.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, b.jsx)(D, { children: (0, b.jsx)(t.v$, { children: v }) }) }) }),
          h &&
           (0, b.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(t.$n, {
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
          h &&
           (0, b.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(t.$n, {
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
