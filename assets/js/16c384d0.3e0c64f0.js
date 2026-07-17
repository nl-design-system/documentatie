'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42564],
 {
  7393(e, n, s) {
   (s.r(n), s.d(n, { assets: () => m, contentTitle: () => d, default: () => h, frontMatter: () => c, metadata: () => l, toc: () => p }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/summaries","title":"Opsommingen","description":"Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.","source":"@site/docs/richtlijnen/content/tekstopmaak/summaries.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/summaries.mdx","tags":[],"version":"current","frontMatter":{"title":"Opsommingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Opsommingen","pagination_label":"Opsommingen","description":"Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.","slug":"/richtlijnen/content/tekstopmaak/opsommingen","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","opsommingen","geordende","ongeordende","lijst"]},"sidebar":"richtlijnen","previous":{"title":"Citaten","permalink":"/richtlijnen/content/citaten"},"next":{"title":"Tabellen","permalink":"/richtlijnen/content/tekstopmaak/tabellen"}}');
   var t = s(86070),
    o = s(18439),
    r = s(9386),
    a = s(88022),
    i = s(78734);
   const c = { title: 'Opsommingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Opsommingen', pagination_label: 'Opsommingen', description: 'Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.', slug: '/richtlijnen/content/tekstopmaak/opsommingen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'opsommingen', 'geordende', 'ongeordende', 'lijst'] },
    d = 'Opsommingen',
    m = {},
    p = [{ value: 'Lijst-elementen', id: 'lijst-elementen', level: 2 }, { value: 'Genummerde en ongenummerde lijsten', id: 'genummerde-en-ongenummerde-lijsten', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'opsommingen', children: 'Opsommingen' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Met een opsomming maak je informatie overzichtelijk. Dat is handig voor iedereen die snel wil scannen, maar ook belangrijk voor mensen die gebruikmaken van een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een vergroot scherm.'] }), '\n', (0, t.jsx)(n.p, { children: 'Alleen: niet elke lijst is automatisch toegankelijk. Dat hangt af van de manier waarop je de opsomming opmaakt. Een visuele lijst met streepjes of icoontjes wordt niet altijd herkend door hulptechnologie. Ook het type lijst, genummerd of ongenummerd, moet passen bij de inhoud.' }), '\n', (0, t.jsx)(n.p, { children: 'Op deze pagina lees je hoe je opsommingen toegankelijk maakt en welke opmaak je het beste kunt gebruiken.' }), '\n', (0, t.jsx)(n.h2, { id: 'lijst-elementen', children: 'Lijst-elementen' }), '\n', (0, t.jsx)(n.p, { children: 'Stel een lijst in als lijst-element via de contenteditor in je contentmanagementsysteem (CMS). Zo krijgt de lijst de juiste opmaak en de juiste HTML-elementen mee. De meeste CMS-en bieden hier een aparte optie voor aan. Maak niet zelf een lijst door het gebruik van bijvoorbeeld leestekens. Hulpsoftware herkent deze opmaak namelijk niet als een lijst.' }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Zelf sterretjes, streepjes of nummers typen om een lijst te maken.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('p', { children: ['- Dit is geen lijst', (0, t.jsx)('br', {}), '- Dit is geen lijst', (0, t.jsx)('br', {}), '- Dit is geen lijst', (0, t.jsx)('br', {}), '- Dit is geen lijst', (0, t.jsx)('br', {}), (0, t.jsx)('br', {}), '1. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), '2. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), '3. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), '4. Dit is \xf3\xf3k geen lijst', (0, t.jsx)('br', {}), (0, t.jsx)('br', {})] }) }) }) }), '\n', (0, t.jsx)(n.h2, { id: 'genummerde-en-ongenummerde-lijsten', children: 'Genummerde en ongenummerde lijsten' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Gebruik een genummerde lijst wanneer de nummering de bezoeker helpt met het verwerken van de informatie of als de items in een vaste volgorde staan. Bijvoorbeeld bij een stappenplan. Gebruik anders een ongenummerde lijst met opsommingstekens.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('h2', { children: 'Burrata salade' }), (0, t.jsx)('p', { children: 'Een lekkere salade met burrata en tomaten.' }), (0, t.jsx)('h3', { children: 'Ingredi\xebnten' }), (0, t.jsxs)('ul', { children: [(0, t.jsx)('li', { children: '250 gr (snoep)tomaten' }), (0, t.jsx)('li', { children: '1 bol burrata' }), (0, t.jsx)('li', { children: 'verse basilicum' }), (0, t.jsx)('li', { children: '1 el pesto' }), (0, t.jsx)('li', { children: 'scheutje olijfolie' }), (0, t.jsx)('li', { children: 'handje rucola' }), (0, t.jsx)('li', { children: 'crema di balsamico' }), (0, t.jsx)('li', { children: 'zwarte peper' })] }), (0, t.jsx)('h3', { children: 'Bereiding' }), (0, t.jsxs)('ol', { children: [(0, t.jsx)('li', { children: 'Snijd de tomaten in stukjes.' }), (0, t.jsx)('li', { children: 'Verdeel de rucola over een bord, en voeg ook de tomaten toe.' }), (0, t.jsx)('li', { children: 'Leg de bol burrata in het midden van de salade.' }), (0, t.jsx)('li', { children: 'Verdeel wat peper, olijfolie en crema di balsamico over de salade.' }), (0, t.jsx)('li', { children: 'Maak af met een schepje pesto en wat verse basilicum.' })] })] }) }) }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Lees de pagina door en controleer alle opsommingen. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Bekijk of de tekst is opgemaakt via de opsomknoppen in je CMS, en niet met zelfgetypte streepjes of andere tekens want die worden niet als lijst herkend door hulptechnologie.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of je een genummerde of ongenummerde lijst hebt gekozen die past bij de inhoud.\nGebruik een genummerde lijst als de volgorde belangrijk is (zoals bij stappen). Gebruik een ongenummerde lijst als de volgorde geen rol speelt.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, t.jsx)(i.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  9386(e, n, s) {
   s.d(n, { H: () => v });
   var l = s(95822),
    t = s(46447),
    o = s(13526),
    r = s(68148),
    a = s(9016),
    i = s(69303),
    c = s(91635),
    d = s(30734),
    m = s(30758),
    p = s(31186),
    u = s(65904),
    h = s.n(u),
    j = s(51627),
    g = s(86070);
   const b = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const v = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const s = 'function' == typeof e ? e() : e,
        l = (0, p.qV)(s)
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
        t = h().highlight(l, h().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, g.jsx)(j.n, { children: (0, g.jsx)(j.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: u = !0, children: h, container: j = 'document', language: v, designTokens: y }) => {
       const f = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [A, w] = (0, m.useState)(N),
        [z, C] = (0, m.useState)(s);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let D = m.Fragment;
       return (
        'paragraph' === j ? (D = b) : 'document' === j ? (D = k) : 'surface' === j && (D = x),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          f && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, g.jsx)(D, { children: (0, g.jsx)(t.v$, { children: f }) }) }) }),
          u &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(t.$n, {
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
          u &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(t.$n, {
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
  51627(e, n, s) {
   s.d(n, { K: () => i, n: () => a });
   var l = s(13526),
    t = s(96345),
    o = s(37168),
    r = s(86070);
   const a = ({ className: e, ...n }) => {
     const s = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: s, children: n.children });
    },
    i = ({ className: e, label: n, heading: s, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [s && (0, r.jsx)(o.D, { level: a, appearance: i, children: s }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => o });
   var l = s(86070),
    t = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, s) {
   s.d(n, { $: () => m, x: () => d });
   var l = s(4077),
    t = s(58315),
    o = s(46447),
    r = s(13526),
    a = s(45980),
    i = s(30758),
    c = s(86070);
   const d = (0, i.createContext)({}),
    m = ({ title: e, appearance: n, description: s, children: i, figure: m }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = m ? 'figure' : 'div',
      h = m ? 'figcaption' : 'div',
      j = 'string' == typeof s ? (0, c.jsx)(a.oz, { children: s }) : s;
     return (0, c.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(o.fz, { children: e })] }), j] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  95822(e, n, s) {
   s.d(n, { M: () => c });
   var l = s(46447),
    t = s(16194),
    o = s(30758),
    r = s(88022);
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
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: t, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: n, children: s.map((n, s) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
 },
]);
