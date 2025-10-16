'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [19419],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var a = t(52676),
    l = t(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  86166: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => d, default: () => h, frontMatter: () => s, metadata: () => c, toc: () => v });
   var a = t(52676),
    l = t(40139),
    i = t(43599),
    r = t(40761),
    o = t(5547);
   const s = { title: 'Waar moet een alternatieve tekst staan? \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waar moet een alternatieve tekst staan?', pagination_label: 'Waar moet een alternatieve tekst staan?', description: 'Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/alt-plaats', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'caption', 'accordion'] },
    d = 'Waar moet een alternatieve tekst staan?',
    c = { id: 'richtlijnen/content/afbeeldingen/alt-plaats', title: 'Waar moet een alternatieve tekst staan? \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', description: 'Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.', source: '@site/docs/richtlijnen/content/afbeeldingen/alt-plaats.md', sourceDirName: 'richtlijnen/content/afbeeldingen', slug: '/richtlijnen/content/afbeeldingen/alt-plaats', permalink: '/richtlijnen/content/afbeeldingen/alt-plaats', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/alt-plaats.md', tags: [], version: 'current', frontMatter: { title: 'Waar moet een alternatieve tekst staan? \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waar moet een alternatieve tekst staan?', pagination_label: 'Waar moet een alternatieve tekst staan?', description: 'Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/alt-plaats', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'caption', 'accordion'] }, sidebar: 'richtlijnen', previous: { title: 'Algemene richtlijnen', permalink: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen' }, next: { title: 'Decoratieve afbeeldingen', permalink: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen' } },
    g = {},
    v = [
     { value: 'Het alt-attribuut van een afbeelding', id: 'het-alt-attribuut-van-een-afbeelding', level: 2 },
     { value: 'Onderschrift (caption)', id: 'onderschrift-caption', level: 2 },
     { value: 'Een tekst in de buurt van de afbeelding', id: 'een-tekst-in-de-buurt-van-de-afbeelding', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', figcaption: 'figcaption', figure: 'figure', h1: 'h1', h2: 'h2', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'waar-moet-een-alternatieve-tekst-staan', children: 'Waar moet een alternatieve tekst staan?' }), '\n', (0, a.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om op verschillende manieren tekstalternatieven toe te voegen." }), '\n', (0, a.jsx)(n.h2, { id: 'het-alt-attribuut-van-een-afbeelding', children: 'Het alt-attribuut van een afbeelding' }), '\n', (0, a.jsxs)(n.p, { children: ['Bij het invoegen van een afbeelding in je content krijg je meestal de optie om een alternatieve tekst in te vullen. Die wordt dan geplaatst als alt-attribuut bij de afbeelding (in het img -element). Dit is ook de tekst die bezoekers te zien krijgen als de afbeelding niet geladen wordt. Deze tekst is verder niet zichtbaar en zit in de code gekoppeld aan je afbeelding. Daardoor wordt deze tekst bijvoorbeeld door een ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' voorgelezen.'] }), '\n', (0, a.jsx)(n.p, { children: "Als je een decoratieve afbeelding hebt die je g\xe9\xe9n alternatieve tekst wilt geven, bieden de meeste CMS'en daar ook een optie voor. Dan staat er bijvoorbeeld onder of boven het veld waar je de alternatieve tekst kunt invoeren: 'of laat leeg om als decoratief te markeren'. Soms is het is een optie die je aan kunt vinken." }), '\n', (0, a.jsx)(n.p, { children: 'Soms kun je naast de alternatieve tekst ook een titel (title) invoeren. Dit is de tekst die verschijnt als je met je muis over de afbeelding beweegt. Deze titel wordt niet altijd voorgelezen door screenreaders. Daarom is het niet voldoende om hier je alternatieve tekst te plaatsen. Als je zowel de titel als het alt-attribuut invult, kan een screenreader beide teksten voorlezen, wat storend is voor bezoekers. Laat de titel daarom bij voorkeur leeg.' }), '\n', (0, a.jsx)(n.p, { children: 'Vraag om deze functionaliteit bij de beheerder of leverancier van je website als je deze optie niet hebt.' }), '\n', (0, a.jsx)(n.h2, { id: 'onderschrift-caption', children: 'Onderschrift (caption)' }), '\n', (0, a.jsx)(n.p, { children: 'Een andere mogelijkheid die een CMS kan hebben, is het toevoegen van een onderschrift. Dit kan een goede plek zijn om een wat uitgebreidere beschrijving te geven. Als je van deze optie gebruik wilt maken, voeg je altijd eerst een korte beschrijving in het alt-attribuut toe. Uitgebreidere informatie plaats je daarna in het onderschrift. Het voordeel van een onderschrift is dat het voor iedereen zichtbaar is, niet alleen voor mensen die hulpsoftware gebruiken.' }), '\n', (0, a.jsx)(r.X, { appearance: 'do', title: 'Een onderschrift gebruiken voor een langere beschrijving', children: (0, a.jsx)(i.X, { language: 'html', children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(n.figure, { children: [(0, a.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Amersfoortse-Dierentuin.jpg', alt: 'Twee mensen op een terras.' }), (0, a.jsx)(n.figcaption, { children: '1963 - Op het terras van het caf\xe9 van de Amersfoortse dierentuin krijgen twee bezoekers een kopje koffie geserveerd. Dat is in eerste instantie niet heel bijzonder, maar het feit dat zij allebei een Afrikaans jachtluipaard aan hun voeten hebben liggen waarvan zij zelf de riem vasthouden wel!' })] }) }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'een-tekst-in-de-buurt-van-de-afbeelding', children: 'Een tekst in de buurt van de afbeelding' }), '\n', (0, a.jsx)(n.p, { children: 'Soms biedt een alt-attribuut of een onderschrift niet voldoende ruimte voor een complete beschrijving van een afbeelding. In dat geval kun je in de beschrijving in het alt-attribuut een korte beschrijving toevoegen en daarin de plek op de pagina beschrijven waar een uitgebreidere beschrijving staat.' }), '\n', (0, a.jsx)(n.p, { children: 'Dit is handig bij bijvoorbeeld uitgebreide grafieken waarin veel informatie is opgenomen. Of bij een infographic.' }), '\n', (0, a.jsx)(n.p, { children: 'Een voorbeeld van de tekst in het alt-attribuut kan dan zijn:' }), '\n', (0, a.jsx)(n.p, { children: 'alt="Infographic migratie Nederland, zie voor een uitgebreide beschrijving de tekst direct onder deze afbeelding"' }), '\n', (0, a.jsx)(n.p, { children: 'Onder de afbeelding plaats je vervolgens een tekst met daarin de informatie uit de infographic. Vergeet niet een kopje toe te voegen boven deze tekst, zodat gebruikers van hulpsoftware de tekst snel kunnen vinden. Als jouw CMS de optie biedt, kun je ervoor kiezen de tekst in een Accordion (uitklapper) te plaatsen. Bezoekers die de tekst willen lezen kunnen daar dan zelf voor kiezen en bezoekers die de tekst niet willen lezen kunnen de tekst overslaan.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: 'Stel jezelf, bij elke afbeelding die je hebt geplaatst, de volgende vragen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: ['Heb je de alt-tekst ingevuld op de juiste plek in het CMS? \xd2f bewust leeg gelaten omdat het een ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'decoratieve afbeelding' }), ' is?'] }), '\n', (0, a.jsx)(n.li, { children: 'Gebruik je ook een bijschrift? Vertelt het bijschrift dan iets extra\u2019s, is het geen herhaling van de alt-tekst?' }), '\n', (0, a.jsx)(n.li, { children: 'Bevat de afbeelding complexe informatie, zoals een grafiek of schema? Is extra uitleg toegevoegd in de omliggende tekst of onder de afbeelding?' }), '\n', (0, a.jsx)(n.li, { children: 'Heb je in de alt-tekst verwezen naar die toelichting? Zet in de alt-tekst bijvoorbeeld: \u201cToelichting staat onder de afbeelding.\u201d' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(o.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(b, { ...e }) }) : b(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => m });
   var a = t(41179),
    l = t(37943),
    i = t(4814),
    r = t(64642),
    o = t(93872),
    s = t(86017),
    d = t(48231),
    c = t(75119),
    g = t(75271),
    v = t(60027),
    b = t(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const u = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   u.displayName = 'DocumentContainer';
   const p = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   p.displayName = 'SurfaceContainer';
   const m = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: m = !1, displayCode: j = !0, children: k, container: f = 'document', language: y, designTokens: x } = e;
    const _ = 'function' == typeof k ? k() : k,
     w = 'function' == typeof n ? n() : (0, g.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : v.uS(w || _),
     [N, C] = (0, g.useState)(z),
     [S, D] = (0, g.useState)(m);
    (0, g.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(z, { parser: y, plugins: [r.Z, o.ZP, s.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [z]);
    const Z = (0, g.useId)();
    let A = g.Fragment;
    return (
     'paragraph' === f ? (A = h) : 'document' === f ? (A = u) : 'surface' === f && (A = p),
     (0, b.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       _ && (0, b.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, b.jsx)(A, { children: (0, b.jsx)(l.pu, { children: _ }) }) }) }),
       j &&
        (0, b.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, b.jsx)(l.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!S);
          },
          'aria-expanded': S,
          'aria-controls': Z,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, b.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: Z,
         hidden: !S,
         children: [
          (0, b.jsx)(a.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
          t &&
           (0, b.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, b.jsx)(l.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => d });
   var a = t(37943),
    l = t(60648),
    i = t(75271),
    r = t(40761);
   const o = {
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
   var s = t(52676);
   function d(e) {
    let { lineNumber: n, syntax: t, textContent: d, trim: c } = e,
     g = d;
    const { title: v, type: b } = (0, i.useContext)(r.n),
     h = (0, i.useId)();
    return (
     c && (g = g.trim()),
     (0, s.jsx)(l.y$, {
      theme: o,
      code: g,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: i, getTokenProps: r } = e;
       return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', v ? ': ' : ' ', v] }), (0, s.jsx)(a.dn, { tabIndex: 0, role: v ? 'region' : void 0, 'aria-labelledby': h, style: t, children: l.map((e, t) => (0, s.jsxs)('span', { ...i({ line: e }), children: [n && (0, s.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => c, n: () => d });
   var a = t(69244),
    l = t(20061),
    i = t(37943),
    r = t(4814),
    o = t(75271),
    s = t(52676);
   const d = (0, o.createContext)({}),
    c = (e) => {
     let { title: n, appearance: t, description: o, children: c, figure: g } = e;
     const v = { do: 'Doen', dont: 'Niet doen' },
      b = g ? 'figure' : 'div',
      h = g ? 'figcaption' : 'div';
     return (0, s.jsxs)(b, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, s.jsx)(a.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: v.dont })] }), (0, s.jsx)(i.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, s.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: v.do })] }), (0, s.jsx)(i.nv, { children: n })] }), o] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: n, type: v[t] }, children: c }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => r });
   var a = t(75271);
   const l = {},
    i = a.createContext(l);
   function r(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
