'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90037],
 {
  9386(e, n, t) {
   t.d(n, { H: () => y });
   var l = t(95822),
    o = t(46447),
    a = t(13526),
    s = t(68148),
    i = t(9016),
    r = t(69303),
    c = t(91635),
    d = t(30734),
    p = t(30758),
    h = t(31186),
    m = t(65904),
    u = t.n(m),
    g = t(51627),
    k = t(86070);
   const j = ({ children: e }) => (0, k.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, k.jsx)(o.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, k.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, k.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, k.jsx)(o.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, k.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, h.qV)(t)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        o = u().highlight(l, u().languages[n], n);
       return (0, k.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, k.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, k.jsx)(g.n, { children: (0, k.jsx)(g.K, { label: 'Code', children: (0, k.jsx)('pre', { className: 'language-html nl-code-block', children: (0, k.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: u, container: g = 'document', language: y, designTokens: x }) => {
       const f = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || f),
        [z, N] = (0, p.useState)(w),
        [A, C] = (0, p.useState)(t);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [s.A, i.Ay, r.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let M = p.Fragment;
       return (
        'paragraph' === g ? (M = j) : 'document' === g ? (M = v) : 'surface' === g && (M = b),
        (0, k.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          f && (0, k.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, k.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, k.jsx)(M, { children: (0, k.jsx)(o.v$, { children: f }) }) }) }),
          m &&
           (0, k.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, k.jsx)(o.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, k.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, k.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: z, trim: !0 }),
             n &&
              (0, k.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, k.jsx)(o.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => i });
   var l = t(30758);
   const o = {},
    a = l.createContext(o);
   function s(e) {
    const n = l.useContext(a);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), l.createElement(a.Provider, { value: n }, e.children));
   }
  },
  30705(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => l, toc: () => h }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/quotes","title":"Citaten","description":"Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.","source":"@site/docs/richtlijnen/content/tekstopmaak/quotes.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/citaten","permalink":"/richtlijnen/content/citaten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/quotes.mdx","tags":[],"version":"current","frontMatter":{"title":"Citaten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Citaten","pagination_label":"Citaten","description":"Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.","slug":"/richtlijnen/content/citaten","keywords":["lettergrootte"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten"},"next":{"title":"Opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen"}}');
   var o = t(86070),
    a = t(18439),
    s = t(9386),
    i = t(88022),
    r = t(78734);
   const c = { title: 'Citaten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Citaten', pagination_label: 'Citaten', description: 'Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.', slug: '/richtlijnen/content/citaten', keywords: ['lettergrootte'] },
    d = 'Citaten op een webpagina',
    p = {},
    h = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'citaten-op-een-webpagina', children: 'Citaten op een webpagina' }) }), '\n', (0, o.jsx)(n.p, { children: 'Korte citaten en lange citaten kun je tussen enkele of dubbele aanhalingsteken zetten. Je kunt tekst ook markeren als citaat binnen het systeem waarmee je webpagina\u2019s publiceert. Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.' }), '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Plaats dubbele of enkele aanhalingstekens om een quote aan te geven.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('p', { children: 'De voorzitter vroeg: \u201cWas dat het antwoord op uw vraag?\u201d' }) }) }) }), '\n', (0, o.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om een citaat als losstaand content-blok te plaatsen op je pagina. Gebruik deze mogelijkheid als je een citaat uit je tekst uit wil lichten." }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Een citaat uitlichten met de specifiek daarvoor bedoelde mogelijkheid in het CMS.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [' ', (0, o.jsxs)('p', { children: ['Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis.', ' '] }), (0, o.jsx)('blockquote', { children: 'Een vat vol geleerdheid is nog geen druppel wijsheid waard.' }), (0, o.jsx)('p', { children: 'De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik hiervoor geen semantische opmaak die daar niet voor bedoeld is, zoals een kop of dikgedrukte tekst.' }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Een citaat uitlichten met opmaak die daar niet voor bedoeld is, zoals een kop.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [' ', (0, o.jsxs)('p', { children: ['Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis.', ' '] }), (0, o.jsx)('h2', { children: 'Een vat vol geleerdheid is nog geen druppel wijsheid waard.' }), (0, o.jsx)('p', { children: 'De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, o.jsx)(n.p, { children: 'Je mag natuurlijk wel een citaat gebruiken in een koptekst als het citaat relevant is voor de tekst die n\xe1 de kop komt. Gebruik dan wel aanhalingstekens om aan te geven dat het om een citaat gaat.' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Een citaat uitlichten in een kop die iets zegt over de tekst die volgt.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('h2', { children: '"Een vat vol geleerdheid is nog geen druppel wijsheid waard"' }), (0, o.jsx)('p', { children: 'Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis. De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.' })] }) }) }), '\n', (0, o.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, o.jsx)(n.p, { children: 'Lees de pagina door en controleer alle citaten. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Is het citaat opgemaakt met aanhalingstekens? Dan is dat in principe voldoende.' }), '\n', (0, o.jsx)(n.li, { children: 'Is het citaat uitgelicht op de pagina? Controleer dan of de optie voor citaten in het CMS is gebruikt.' }), '\n', (0, o.jsxs)(n.li, { children: ['Controleer of het citaat niet met de functie voor schuingedrukte tekst is opgemaakt om het citaat op te laten vallen. Is dat zo? Pas de opmaak dan aan. Schuingedrukte tekst is bedoeld om ', (0, o.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'tekst te benadrukken' }), ', niet om citaten mee op te maken.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Controleer of het citaat niet met een koptekst is opgemaakt om het citaat uit te lichten. Als dat zo is, pas dit aan. ', (0, o.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen zijn bedoeld voor structuur' }), ', niet voor vormgeving.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => r, n: () => i });
   var l = t(13526),
    o = t(96345),
    a = t(37168),
    s = t(86070);
   const i = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: t, children: n.children });
    },
    r = ({ className: e, label: n, heading: t, headingLevel: i, headingApperance: r, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...c, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(o.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [t && (0, s.jsx)(a.D, { level: i, appearance: r, children: t }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => a });
   var l = t(86070),
    o = t(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => p, x: () => d });
   var l = t(4077),
    o = t(58315),
    a = t(46447),
    s = t(13526),
    i = t(45980),
    r = t(30758),
    c = t(86070);
   const d = (0, r.createContext)({}),
    p = ({ title: e, appearance: n, description: t, children: r, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      u = p ? 'figcaption' : 'div',
      g = 'string' == typeof t ? (0, c.jsx)(i.oz, { children: t }) : t;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(a.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(a.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    o = t(16194),
    a = t(30758),
    s = t(88022);
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
   var r = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: p, type: h } = (0, a.useContext)(s.x),
     m = (0, a.useId)();
    return (c && (d = d.trim()), (0, r.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: a }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, r.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, r.jsxs)('span', { ...o({ line: n }), children: [e && (0, r.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
