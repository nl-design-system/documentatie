'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42564],
 {
  14881(e, n, s) {
   s.d(n, { K: () => c, n: () => i });
   var t = s(13526),
    l = s(30758),
    o = s(30662),
    r = s(37168),
    a = s(86070);
   const i = (0, l.forwardRef)(({ as: e, className: n, children: s, ...l }, o) => {
     const r = e || 'div',
      i = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: o, className: i, ...l, children: s });
    }),
    c = ({ className: e, classNamePanel: n, label: s, heading: l, headingLevel: i, headingApperance: c, ...d }) => {
     const m = (0, t.A)('utrecht-accordion__section', e),
      p = (0, t.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: m, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(o.rI, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [l && (0, a.jsx)(r.D, { level: i, appearance: c, children: l }), s] })] }) }), (0, a.jsx)('div', { className: p, children: d.children })] });
    };
  },
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => a });
   var t = s(30758);
   const l = {},
    o = t.createContext(l);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  25965(e, n, s) {
   (s.r(n), s.d(n, { assets: () => m, contentTitle: () => d, default: () => h, frontMatter: () => c, metadata: () => t, toc: () => p }));
   const t = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/summaries","title":"Opsommingen","description":"Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.","source":"@site/docs/richtlijnen/content/tekstopmaak/summaries.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/summaries.mdx","tags":[],"version":"current","frontMatter":{"title":"Opsommingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Opsommingen","pagination_label":"Opsommingen","description":"Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.","slug":"/richtlijnen/content/tekstopmaak/opsommingen","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","opsommingen","geordende","ongeordende","lijst"]},"sidebar":"richtlijnen","previous":{"title":"Citaten","permalink":"/richtlijnen/content/citaten"},"next":{"title":"Tabellen","permalink":"/richtlijnen/content/tekstopmaak/tabellen"}}');
   var l = s(86070),
    o = s(18439),
    r = s(38953),
    a = s(56528),
    i = s(56672);
   const c = { title: 'Opsommingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Opsommingen', pagination_label: 'Opsommingen', description: 'Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.', slug: '/richtlijnen/content/tekstopmaak/opsommingen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'opsommingen', 'geordende', 'ongeordende', 'lijst'] },
    d = 'Opsommingen',
    m = {},
    p = [{ value: 'Lijst-elementen', id: 'lijst-elementen', level: 2 }, { value: 'Genummerde en ongenummerde lijsten', id: 'genummerde-en-ongenummerde-lijsten', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function j(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'opsommingen', children: 'Opsommingen' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Met een opsomming maak je informatie overzichtelijk. Dat is handig voor iedereen die snel wil scannen, maar ook belangrijk voor mensen die gebruikmaken van een ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een vergroot scherm.'] }), '\n', (0, l.jsx)(n.p, { children: 'Alleen: niet elke lijst is automatisch toegankelijk. Dat hangt af van de manier waarop je de opsomming opmaakt. Een visuele lijst met streepjes of icoontjes wordt niet altijd herkend door hulptechnologie. Ook het type lijst, genummerd of ongenummerd, moet passen bij de inhoud.' }), '\n', (0, l.jsx)(n.p, { children: 'Op deze pagina lees je hoe je opsommingen toegankelijk maakt en welke opmaak je het beste kunt gebruiken.' }), '\n', (0, l.jsx)(n.h2, { id: 'lijst-elementen', children: 'Lijst-elementen' }), '\n', (0, l.jsx)(n.p, { children: 'Stel een lijst in als lijst-element via de contenteditor in je contentmanagementsysteem (CMS). Zo krijgt de lijst de juiste opmaak en de juiste HTML-elementen mee. De meeste CMS-en bieden hier een aparte optie voor aan. Maak niet zelf een lijst door het gebruik van bijvoorbeeld leestekens. Hulpsoftware herkent deze opmaak namelijk niet als een lijst.' }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Zelf sterretjes, streepjes of nummers typen om een lijst te maken.', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('p', { children: ['- Dit is geen lijst', (0, l.jsx)('br', {}), '- Dit is geen lijst', (0, l.jsx)('br', {}), '- Dit is geen lijst', (0, l.jsx)('br', {}), '- Dit is geen lijst', (0, l.jsx)('br', {}), (0, l.jsx)('br', {}), '1. Dit is \xf3\xf3k geen lijst', (0, l.jsx)('br', {}), '2. Dit is \xf3\xf3k geen lijst', (0, l.jsx)('br', {}), '3. Dit is \xf3\xf3k geen lijst', (0, l.jsx)('br', {}), '4. Dit is \xf3\xf3k geen lijst', (0, l.jsx)('br', {}), (0, l.jsx)('br', {})] }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'genummerde-en-ongenummerde-lijsten', children: 'Genummerde en ongenummerde lijsten' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Gebruik een genummerde lijst wanneer de nummering de bezoeker helpt met het verwerken van de informatie of als de items in een vaste volgorde staan. Bijvoorbeeld bij een stappenplan. Gebruik anders een ongenummerde lijst met opsommingstekens.', children: (0, l.jsx)(r.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('h2', { children: 'Burrata salade' }), (0, l.jsx)('p', { children: 'Een lekkere salade met burrata en tomaten.' }), (0, l.jsx)('h3', { children: 'Ingredi\xebnten' }), (0, l.jsxs)('ul', { children: [(0, l.jsx)('li', { children: '250 gr (snoep)tomaten' }), (0, l.jsx)('li', { children: '1 bol burrata' }), (0, l.jsx)('li', { children: 'verse basilicum' }), (0, l.jsx)('li', { children: '1 el pesto' }), (0, l.jsx)('li', { children: 'scheutje olijfolie' }), (0, l.jsx)('li', { children: 'handje rucola' }), (0, l.jsx)('li', { children: 'crema di balsamico' }), (0, l.jsx)('li', { children: 'zwarte peper' })] }), (0, l.jsx)('h3', { children: 'Bereiding' }), (0, l.jsxs)('ol', { children: [(0, l.jsx)('li', { children: 'Snijd de tomaten in stukjes.' }), (0, l.jsx)('li', { children: 'Verdeel de rucola over een bord, en voeg ook de tomaten toe.' }), (0, l.jsx)('li', { children: 'Leg de bol burrata in het midden van de salade.' }), (0, l.jsx)('li', { children: 'Verdeel wat peper, olijfolie en crema di balsamico over de salade.' }), (0, l.jsx)('li', { children: 'Maak af met een schepje pesto en wat verse basilicum.' })] })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: 'Lees de pagina door en controleer alle opsommingen. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Bekijk of de tekst is opgemaakt via de opsomknoppen in je CMS, en niet met zelfgetypte streepjes of andere tekens want die worden niet als lijst herkend door hulptechnologie.' }), '\n', (0, l.jsx)(n.li, { children: 'Controleer of je een genummerde of ongenummerde lijst hebt gekozen die past bij de inhoud.\nGebruik een genummerde lijst als de volgorde belangrijk is (zoals bij stappen). Gebruik een ongenummerde lijst als de volgorde geen rol speelt.' }), '\n'] }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, l.jsx)(i.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j(e);
   }
  },
  28369(e, n, s) {
   s.d(n, { M: () => c });
   var t = s(46447),
    l = s(16194),
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
     j = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: l, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: j, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': j, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  30662(e, n, s) {
   s.d(n, { D4: () => G, GP: () => N, KC: () => I, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => P, bz: () => z, cB: () => S, e5: () => T, hY: () => $, jK: () => M, jP: () => L, ob: () => H, rI: () => A, t4: () => O, vP: () => D, vg: () => F });
   var t = s(92081),
    l = s(90578),
    o = s(96345),
    r = s(64249),
    a = s(4603),
    i = s(91525),
    c = s(23436),
    d = s(1375),
    m = s(4077),
    p = s(58315),
    j = s(73563),
    h = s(35193),
    u = s(82999),
    g = s(13088),
    b = s(43864),
    x = s(24214),
    v = s(79532),
    k = s(60529),
    y = s(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(t.A, { ...f }),
    N = () => (0, y.jsx)(l.A, { ...f }),
    A = () => (0, y.jsx)(o.A, { ...f }),
    w = () => (0, y.jsx)(r.A, { ...f }),
    z = () => (0, y.jsx)(a.A, { ...f }),
    C = () => (0, y.jsx)(i.A, { ...f }),
    S = () => (0, y.jsx)(c.A, { ...f }),
    D = () => (0, y.jsx)(d.A, { ...f }),
    M = () => (0, y.jsx)(m.A, { ...f }),
    L = () => (0, y.jsx)(p.A, { ...f }),
    O = () => (0, y.jsx)(j.A, { ...f }),
    G = () => (0, y.jsx)(h.A, { ...f }),
    $ = () => (0, y.jsx)(u.A, { ...f }),
    I = () => (0, y.jsx)(g.A, { ...f }),
    P = () => (0, y.jsx)(b.A, { ...f }),
    T = () => (0, y.jsx)(x.A, { ...f }),
    H = () => (0, y.jsx)(v.A, { ...f }),
    F = () => (0, y.jsx)(k.A, { ...f });
  },
  38953(e, n, s) {
   s.d(n, { H: () => y });
   var t = s(28369),
    l = s(46447),
    o = s(13526),
    r = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    m = s(30758),
    p = s(31186),
    j = s(65904),
    h = s.n(j),
    u = s(14881),
    g = s(46847),
    b = s(86070);
   const x = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: s = '<p>No code provided</p>', rawCode: t, copyCode: l, defaultExpandedCode: r, designTokens: a }) => {
       const i = 'string' == typeof s ? s : t || '',
        c = 'string' == typeof s ? h().highlight(s, h().languages[e], e) : h().highlight(t || '', h().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: a, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, b.jsx)(u.n, { children: (0, b.jsxs)(u.K, { label: 'Code', open: r, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === l && (0, b.jsx)(g.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: j = !0, children: h, container: u = 'document', language: g, designTokens: y }) => {
       const f = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [A, w] = (0, m.useState)(N),
        [z, C] = (0, m.useState)(s);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let D = m.Fragment;
       return (
        'paragraph' === u ? (D = x) : 'document' === u ? (D = v) : 'surface' === u && (D = k),
        (0, b.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          f && (0, b.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, b.jsx)(D, { children: (0, b.jsx)(l.v$, { children: f }) }) }) }),
          j &&
           (0, b.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(l.$n, {
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
          j &&
           (0, b.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(l.$n, {
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
  46847(e, n, s) {
   s.d(n, { $: () => t.$n });
   var t = s(50805);
  },
  56528(e, n, s) {
   s.d(n, { $: () => d, x: () => c });
   var t = s(30662),
    l = s(46447),
    o = s(13526),
    r = s(94988),
    a = s(30758),
    i = s(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: s, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      j = d ? 'figcaption' : 'div',
      h = 'string' == typeof s ? (0, i.jsx)(r.oz, { components: { a: l.N_ }, children: s }) : s;
     return (0, i.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(j, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(t.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(l.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(t.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(l.fz, { children: e })] }), h] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => o });
   var t = s(86070),
    l = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
