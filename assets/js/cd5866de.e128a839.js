'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [86681],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var s = t(52676),
    o = t(40139);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  13839: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => c, default: () => j, frontMatter: () => a, metadata: () => d, toc: () => p });
   var s = t(52676),
    o = t(40139),
    l = t(43599),
    r = t(40761),
    i = t(5547);
   const a = { title: 'Opsommingen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Opsommingen', pagination_label: 'Opsommingen', description: 'Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.', slug: '/richtlijnen/content/tekstopmaak/opsommingen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'opsommingen', 'geordende', 'ongeordende', 'lijst'] },
    c = 'Opsommingen',
    d = { id: 'richtlijnen/content/tekstopmaak/summaries', title: 'Opsommingen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', description: 'Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.', source: '@site/docs/richtlijnen/content/tekstopmaak/summaries.md', sourceDirName: 'richtlijnen/content/tekstopmaak', slug: '/richtlijnen/content/tekstopmaak/opsommingen', permalink: '/richtlijnen/content/tekstopmaak/opsommingen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/summaries.md', tags: [], version: 'current', frontMatter: { title: 'Opsommingen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Opsommingen', pagination_label: 'Opsommingen', description: 'Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een screenreader gebruiken.', slug: '/richtlijnen/content/tekstopmaak/opsommingen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'opsommingen', 'geordende', 'ongeordende', 'lijst'] }, sidebar: 'richtlijnen', previous: { title: 'Citaten', permalink: '/richtlijnen/content/citaten' }, next: { title: 'Tabellen', permalink: '/richtlijnen/content/tekstopmaak/tabellen' } },
    m = {},
    p = [
     { value: 'Lijst-elementen', id: 'lijst-elementen', level: 2 },
     { value: 'Genummerde en ongenummerde lijsten', id: 'genummerde-en-ongenummerde-lijsten', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'opsommingen', children: 'Opsommingen' }), '\n', (0, s.jsxs)(n.p, { children: ['Met een opsomming maak je informatie overzichtelijk. Dat is handig voor iedereen die snel wil scannen, maar ook belangrijk voor mensen die gebruikmaken van een ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een vergroot scherm.'] }), '\n', (0, s.jsx)(n.p, { children: 'Alleen: niet elke lijst is automatisch toegankelijk. Dat hangt af van de manier waarop je de opsomming opmaakt. Een visuele lijst met streepjes of icoontjes wordt niet altijd herkend door hulptechnologie. Ook het type lijst, genummerd of ongenummerd, moet passen bij de inhoud.' }), '\n', (0, s.jsx)(n.p, { children: 'Op deze pagina lees je hoe je opsommingen toegankelijk maakt en welke opmaak je het beste kunt gebruiken.' }), '\n', (0, s.jsx)(n.h2, { id: 'lijst-elementen', children: 'Lijst-elementen' }), '\n', (0, s.jsx)(n.p, { children: 'Stel een lijst in als lijst-element via de contenteditor in je contentmanagementsysteem (CMS). Zo krijgt de lijst de juiste opmaak en de juiste HTML-elementen mee. De meeste CMS-en bieden hier een aparte optie voor aan. Maak niet zelf een lijst door het gebruik van bijvoorbeeld leestekens. Hulpsoftware herkent deze opmaak namelijk niet als een lijst.' }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Zelf sterretjes, streepjes of nummers typen om een lijst te maken.', children: (0, s.jsx)(l.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(n.p, { children: ['- Dit is geen lijst', (0, s.jsx)(n.br, {}), '- Dit is geen lijst', (0, s.jsx)(n.br, {}), '- Dit is geen lijst', (0, s.jsx)(n.br, {}), '- Dit is geen lijst', (0, s.jsx)(n.br, {}), (0, s.jsx)(n.br, {}), '1. Dit is \xf3\xf3k geen lijst', (0, s.jsx)(n.br, {}), '2. Dit is \xf3\xf3k geen lijst', (0, s.jsx)(n.br, {}), '3. Dit is \xf3\xf3k geen lijst', (0, s.jsx)(n.br, {}), '4. Dit is \xf3\xf3k geen lijst', (0, s.jsx)(n.br, {}), (0, s.jsx)(n.br, {})] }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'genummerde-en-ongenummerde-lijsten', children: 'Genummerde en ongenummerde lijsten' }), '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'Gebruik een genummerde lijst wanneer de nummering de bezoeker helpt met het verwerken van de informatie of als de items in een vaste volgorde staan. Bijvoorbeeld bij een stappenplan. Gebruik anders een ongenummerde lijst met opsommingstekens.', children: (0, s.jsx)(l.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { children: 'Burrata salade' }), (0, s.jsx)(n.p, { children: 'Een lekkere salade met burrata en tomaten.' }), (0, s.jsx)(n.h3, { children: 'Ingredi\xebnten' }), (0, s.jsxs)(n.ul, { children: [(0, s.jsx)(n.li, { children: '250 gr (snoep)tomaten' }), (0, s.jsx)(n.li, { children: '1 bol burrata' }), (0, s.jsx)(n.li, { children: 'verse basilicum' }), (0, s.jsx)(n.li, { children: '1 el pesto' }), (0, s.jsx)(n.li, { children: 'scheutje olijfolie' }), (0, s.jsx)(n.li, { children: 'handje rucola' }), (0, s.jsx)(n.li, { children: 'crema di balsamico' }), (0, s.jsx)(n.li, { children: 'zwarte peper' })] }), (0, s.jsx)(n.h3, { children: 'Bereiding' }), (0, s.jsxs)(n.ol, { children: [(0, s.jsx)(n.li, { children: 'Snijd de tomaten in stukjes.' }), (0, s.jsx)(n.li, { children: 'Verdeel de rucola over een bord, en voeg ook de tomaten toe.' }), (0, s.jsx)(n.li, { children: 'Leg de bol burrata in het midden van de salade.' }), (0, s.jsx)(n.li, { children: 'Verdeel wat peper, olijfolie en crema di balsamico over de salade.' }), (0, s.jsx)(n.li, { children: 'Maak af met een schepje pesto en wat verse basilicum.' })] })] }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Lees de pagina door en controleer alle opsommingen. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Bekijk of de tekst is opgemaakt via de opsomknoppen in je CMS, en niet met zelfgetypte streepjes of andere tekens want die worden niet als lijst herkend door hulptechnologie.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of je een genummerde of ongenummerde lijst hebt gekozen die past bij de inhoud.\nGebruik een genummerde lijst als de volgorde belangrijk is (zoals bij stappen). Gebruik een ongenummerde lijst als de volgorde geen rol speelt.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, s.jsx)(i.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => b });
   var s = t(41179),
    o = t(28439),
    l = t(4814),
    r = t(64642),
    i = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    m = t(75271),
    p = t(60027),
    u = t(52676);
   const j = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   j.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   h.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: b = !1, displayCode: k = !0, children: v, container: x = 'document', language: y, designTokens: f } = e;
    const _ = 'function' == typeof v ? v() : v,
     w = 'function' == typeof n ? n() : (0, m.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : p.uS(w || _),
     [C, z] = (0, m.useState)(N),
     [Z, S] = (0, m.useState)(b);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: y, plugins: [r.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [N]);
    const D = (0, m.useId)();
    let O = m.Fragment;
    return (
     'paragraph' === x ? (O = j) : 'document' === x ? (O = g) : 'surface' === x && (O = h),
     (0, u.jsxs)('div', {
      className: (0, l.Z)('nlds-canvas'),
      children: [
       _ && (0, u.jsx)('div', { className: (0, l.Z)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, u.jsx)(O, { children: (0, u.jsx)(o.pu, { children: _ }) }) }) }),
       k &&
        (0, u.jsx)('div', {
         className: (0, l.Z)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(o.zx, {
          className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': D,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, u.jsxs)('div', {
         className: (0, l.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: D,
         hidden: !Z,
         children: [
          (0, u.jsx)(s.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: C, trim: !0 }),
          t &&
           (0, u.jsx)('div', {
            className: (0, l.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(o.zx, {
             className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => c });
   var s = t(28439),
    o = t(60648),
    l = t(75271),
    r = t(40761);
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
   var a = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     m = c;
    const { title: p, type: u } = (0, l.useContext)(r.n),
     j = (0, l.useId)();
    return (
     d && (m = m.trim()),
     (0, a.jsx)(o.y$, {
      theme: i,
      code: m,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: l, getTokenProps: r } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: j, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(s.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': j, style: t, children: o.map((e, t) => (0, a.jsxs)('span', { ...l({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var s = t(69244),
    o = t(20061),
    l = t(28439),
    r = t(4814),
    i = t(75271),
    a = t(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: i, children: d, figure: m } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = m ? 'figure' : 'div',
      j = m ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(j, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(l.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(l.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: p[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var s = t(75271);
   const o = {},
    l = s.createContext(o);
   function r(e) {
    const n = s.useContext(l);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
