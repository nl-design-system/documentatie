'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76352],
 {
  8649: (e, n, o) => {
   o.d(n, { H: () => m });
   var a = o(16609),
    t = o(68873),
    r = o(13526),
    i = o(58713),
    s = o(87347),
    l = o(39644),
    d = o(92406),
    c = o(63313),
    p = o(30758),
    k = o(31186),
    u = o(86070);
   const h = ({ children: e }) => (0, u.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, u.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, u.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const m = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: m = !0, children: j, container: b = 'document', language: x, designTokens: y }) => {
    const f = 'function' == typeof j ? j() : j,
     w = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     z = 'string' == typeof e ? e : k.qV(w || f),
     [_, N] = (0, p.useState)(z),
     [D, A] = (0, p.useState)(o);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(z, { parser: x, plugins: [i.A, s.Ay, l.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [z]);
    const C = (0, p.useId)();
    let S = p.Fragment;
    return (
     'paragraph' === b ? (S = h) : 'document' === b ? (S = v) : 'surface' === b && (S = g),
     (0, u.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       f && (0, u.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, u.jsx)(S, { children: (0, u.jsx)(t.v$, { children: f }) }) }) }),
       m &&
        (0, u.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(t.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!D);
          },
          'aria-expanded': D,
          'aria-controls': C,
          children: D ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       m &&
        (0, u.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !D,
         children: [
          (0, u.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: _, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(_).catch((e) => console.error('Copy code failed', e));
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
  16609: (e, n, o) => {
   o.d(n, { M: () => d });
   var a = o(68873),
    t = o(16194),
    r = o(30758),
    i = o(50124);
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
   var l = o(86070);
   function d({ lineNumber: e, syntax: n, textContent: o, trim: d }) {
    let c = o;
    const { title: p, type: k } = (0, r.useContext)(i.x),
     u = (0, r.useId)();
    return d && (c = c.trim()), (0, l.jsx)(t.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: r }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', k ? `\u201c${k}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, l.jsx)(a.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, l.jsxs)('span', { ...t({ line: n }), children: [e && (0, l.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, l.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) });
   }
  },
  50124: (e, n, o) => {
   o.d(n, { $: () => c, x: () => d });
   var a = o(54736),
    t = o(26990),
    r = o(68873),
    i = o(13526),
    s = o(30758),
    l = o(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: o, children: s, figure: c }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      k = c ? 'figure' : 'div',
      u = c ? 'figcaption' : 'div';
     return (0, l.jsxs)(k, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, l.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, l.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, l.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, l.jsx)(r.fz, { children: e })] }) : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, l.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, l.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, l.jsx)(r.fz, { children: e })] }), o] }), (0, l.jsx)('div', { className: 'nlds-guideline__example', children: (0, l.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: s }) })] });
    };
  },
  66109: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => p, contentTitle: () => c, default: () => h, frontMatter: () => d, metadata: () => a, toc: () => k });
   const a = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/headings","title":"Koppen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","description":"Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.","source":"@site/docs/richtlijnen/content/tekstopmaak/headings.md","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/koppen","permalink":"/richtlijnen/content/tekstopmaak/koppen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/headings.md","tags":[],"version":"current","frontMatter":{"title":"Koppen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Koppen","pagination_label":"Koppen","description":"Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.","slug":"/richtlijnen/content/tekstopmaak/koppen","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","koppen","koppenstructuur","kopjes","dikgedrukt","kopopmaak","bold","strong"]},"sidebar":"richtlijnen","previous":{"title":"Tekst benadrukken","permalink":"/richtlijnen/content/tekstopmaak/tekst-benadrukken"},"next":{"title":"De juiste taal instellen","permalink":"/richtlijnen/content/tekstopmaak/taal"}}');
   var t = o(86070),
    r = o(85248),
    i = o(8649),
    s = o(50124),
    l = o(78734);
   const d = { title: 'Koppen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppen', pagination_label: 'Koppen', description: 'Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.', slug: '/richtlijnen/content/tekstopmaak/koppen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'koppen', 'koppenstructuur', 'kopjes', 'dikgedrukt', 'kopopmaak', 'bold', 'strong'] },
    c = 'Koppen',
    p = {},
    k = [{ value: 'Voor wie zijn toegankelijke koppen belangrijk?', id: 'voor-wie-zijn-toegankelijke-koppen-belangrijk', level: 2 }, { value: 'Opmaak van koppen', id: 'opmaak-van-koppen', level: 2 }, { value: 'Inhoud van koppen', id: 'inhoud-van-koppen', level: 2 }, { value: 'Kopniveaus', id: 'kopniveaus', level: 2 }, { value: 'Sla geen kopniveaus over', id: 'sla-geen-kopniveaus-over', level: 3 }, { value: 'Kopniveau 1: het begin van de structuur', id: 'kopniveau-1-het-begin-van-de-structuur', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'koppen', children: 'Koppen' }) }), '\n', (0, t.jsx)(n.p, { children: "Koppen vormen de ruggengraat van de inhoud van een pagina. Aan de hand van koppen kan een gebruiker snel wegwijs worden in de inhoud van een webpagina. Zorg voor een duidelijke structuur van de tekst door gebruik te maken van koppen. Dit is heel belangrijk. Want zo begrijpen bezoekers de inhoud en opbouw van de tekst. Daarnaast maakt het het navigeren op pagina's makkelijker." }), '\n', (0, t.jsx)(n.h2, { id: 'voor-wie-zijn-toegankelijke-koppen-belangrijk', children: 'Voor wie zijn toegankelijke koppen belangrijk?' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen een lijst van koppen oproepen en daarmee snel naar een kopje navigeren. Ook ziende bezoekers scannen de inhoud van een pagina aan de hand van koppen. Daarom is het belangrijk dat een kopje de inhoud onder de kop goed beschrijft. De koppen zijn daarmee een soort inhoudsopgave van de webpagina. Dit helpt mensen om snel de informatie te vinden die ze zoeken.'] }), '\n', (0, t.jsx)(n.p, { children: 'Bezoekers die gebruik maken van een screenreader kunnen ook met sneltoetsen snel door de koppen op een pagina navigeren. Laat koppen daarom ook niet leeg. Ook lege koppen worden herkend door screenreaders. Maar omdat ze geen beschrijvende tekst bevatten scheppen ze vooral verwarring in plaats van verduidelijking.' }), '\n', (0, t.jsx)(s.$, { appearance: 'dont', title: 'Koppen leeg laten', children: (0, t.jsx)(i.H, { language: 'html', defaultExpandedCode: !0, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Voorzie een kop altijd van een beschrijvende tekst. Zorg ervoor dat koppen niet leeg zijn. Bijvoorbeeld om extra witruimte te cre\xebren.' }), (0, t.jsx)(n.h2, { children: '\xa0' }), (0, t.jsx)(n.p, { children: "Zo'n lege kop wordt namelijk wel herkend door hulpsoftware. Maar de gebruiker kan er vervolgens helemaal niks mee. Het schept met name verwarring." })] }) }) }), '\n', (0, t.jsx)(n.p, { children: 'Ook ziende bezoekers maken gebruik van de koppenstructuur op een pagina. Doordat koppen van verschillende niveaus er anders uit zien, is het snel duidelijk hoe de informatie op de pagina gestructureerd is.' }), '\n', (0, t.jsx)(n.h2, { id: 'opmaak-van-koppen', children: 'Opmaak van koppen' }), '\n', (0, t.jsx)(n.p, { children: 'Een koptekst moet opgemaakt zijn als echte kop. Gebruik daarvoor de opties die het contentmanagementsysteem waarin je werkt je biedt. Vaak kun je in een uitklapbaar lijstje kiezen welke opmaak je tekst moet krijgen, bijvoorbeeld een paragraaf of kop van niveau 1 of 2. Gebruik een kop niet enkel en alleen om tekst groot en vet te maken.' }), '\n', (0, t.jsx)(s.$, { appearance: 'dont', title: 'Tekst dikgedrukt en groter maken en een andere kleur geven zodat het op een kop lijkt.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.strong, { style: { color: 'purple', fontSize: '200%' }, children: 'Dit is geen kop' }), (0, t.jsx)(n.p, { children: 'Een [screenreader](/woordenlijst/#screenreader) herkent deze tekst niet als een kop. Hierdoor verschijnt de tekst ook niet in het overzicht met koppen en kunnen bezoekers geen sneltoetsen gebruiken om tussen de koppen te navigeren.' })] }) }) }), '\n', (0, t.jsx)(n.h2, { id: 'inhoud-van-koppen', children: 'Inhoud van koppen' }), '\n', (0, t.jsx)(n.p, { children: 'Koppen moeten goed beschrijven waar de tekst onder de kop over gaat. Een duidelijke kop beschrijft de inhoud eronder, als kleine samenvatting. Dit is handig voor mensen die blind of slechtziend zijn, dyslectisch zijn of een cognitieve beperking hebben, en het helpt de scannende gebruikers om snel de informatie te vinden die ze zoeken.' }), '\n', (0, t.jsx)(n.h2, { id: 'kopniveaus', children: 'Kopniveaus' }), '\n', (0, t.jsx)(n.p, { children: 'Koppen kunnen verschillende niveaus hebben. Door de verschillende niveaus zorg je voor een goede volgorde en deel je de tekst overzichtelijk in.' }), '\n', (0, t.jsx)(n.h3, { id: 'sla-geen-kopniveaus-over', children: 'Sla geen kopniveaus over' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik koppen in volgorde. Begin bijvoorbeeld met een kopniveau 2 onder de hoofdkop, daarna een kopniveau 3, dan een kopniveau 4. Sla geen niveaus over. Zet dus geen kopniveau 4 direct onder een kopniveau 2.' }), '\n', (0, t.jsx)(n.p, { children: 'Van boven naar beneden mag je geen niveaus overslaan. Van beneden naar boven wel. Het is prima om na een kopniveau 4 weer een nieuwe sectie te beginnen met een kopniveau 2.' }), '\n', (0, t.jsx)(s.$, { appearance: 'do', title: 'Gebruik kopniveaus in de de goede volgorde.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { children: 'Kop met niveau 1' }), (0, t.jsx)(n.p, { children: 'Kopniveau 1 is de belangrijkste kop van de pagina en die gebruik je maar \xe9\xe9n keer. Kopniveau 1 geeft aan waar de hele pagina over gaat.' }), (0, t.jsx)(n.h2, { children: 'Kop met niveau 2' }), (0, t.jsx)(n.p, { children: 'Daaronder komen de koppen van niveau 2 Dit zijn als het ware de hoofdstukken binnen je onderwerp. Elk kopniveau 2 behandelt een belangrijk onderdeel van het onderwerp. Deze koppen kun je meerdere keren op een pagina gebruiken, zolang ze maar allemaal over het hoofdonderwerp gaan.' }), (0, t.jsx)(n.h3, { children: 'Kop met niveau 3' }), (0, t.jsx)(n.p, { children: 'Als je in een tekst onder een kopniveau 2 nog wat meer detail wilt aanbrengen, gebruik je een kopniveau 3. Dat is een subkop, die gaat over een onderwerp uit de vorige paragraaf.' }), (0, t.jsx)(n.h4, { children: 'Kop met niveau 4' }), (0, t.jsx)(n.p, { children: 'Er zijn koppen van niveau 4, 5 en 6 maar die zijn meestal niet nodig. Die gebruik je alleen als je echt diep in de structuur van je tekst duikt. Voor de meeste webpagina\u2019s zijn kopniveau 1, 2 en 3 genoeg.' }), (0, t.jsx)(n.h2, { children: 'Kop met niveau 2' }), (0, t.jsx)(n.p, { children: 'Als je in een tekst weer een nieuw hoofdstuk wilt beginnen dan mag je hier weer kopniveau 2 gebruiken. Terug omhoog mag je wel kopniveaus overslaan.' })] }) }) }), '\n', (0, t.jsx)(s.$, { appearance: 'dont', title: 'Van boven naar beneden een kopniveau overslaan.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { children: 'Dit is een kop met niveau 1' }), (0, t.jsx)(n.p, { children: 'Sla, van boven naar beneden, geen niveaus over door bijvoorbeeld een kopniveau 3 onder een kopniveau 1 te plaatsen.' }), (0, t.jsx)(n.h3, { children: 'Dit is een kop met niveau 3' }), (0, t.jsx)(n.p, { children: 'Dit is verwarrend voor bezoekers die gebruik maken van hulpsoftware.' })] }) }) }), '\n', (0, t.jsx)(n.h3, { id: 'kopniveau-1-het-begin-van-de-structuur', children: 'Kopniveau 1: het begin van de structuur' }), '\n', (0, t.jsx)(n.p, { children: 'Elke pagina begint met een kopniveau 1. Dit is het startpunt van de kopstructuur en geeft aan waar de pagina over gaat. Voor schermlezers is dit vaak het eerste wat mensen horen. Ook zoekmachines gebruiken kopniveau 1 als belangrijkste kop van de pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'In veel CMS\u2019en is kopniveau 1 automatisch gekoppeld aan de paginatitel. Soms zie je deze bovenaan de pagina, soms is hij alleen zichtbaar in de code. Als contentmaker heb je hier niet altijd invloed op, maar je kunt het wel controleren. Bekijk de hele pagina, inclusief de koppenstructuur, in de preview of na publicatie. Zo weet je zeker dat de structuur klopt en dat de pagina goed navigeerbaar is voor iedereen.' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik kopniveau 1 maar \xe9\xe9n keer per pagina. Zorg dat de tekst ervan kort, duidelijk en uniek is binnen de site.' }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Of koppen goed zijn gebruikt, kun je voor een groot deel beoordelen door de pagina te lezen en logisch na te denken over structuur en betekenis. Gebruik onderstaande punten als leidraad:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Beschrijft elke kop de inhoud die eronder valt?\nDe tekst van een kop moet duidelijk maken waar het volgende stukje content over gaat.' }), '\n', (0, t.jsx)(n.li, { children: 'Worden koppen alleen gebruikt om structuur aan te brengen?\nSoms worden visueel opvallende teksten als \u2018kop\u2019 opgemaakt, zonder dat ze inhoud structureren. Dat is verwarrend. Gebruik koppen alleen als ze echt een nieuwe sectie inleiden.' }), '\n', (0, t.jsx)(n.li, { children: 'Is er een duidelijke hi\xebrarchie van kopniveaus (1, 2, 3\u2026)?\nDe volgorde van de koppen moet logisch zijn en geen niveaus overslaan. Een kopniveau 3 mag niet direct onder een kopniveau 1 vallen.' }), '\n', (0, t.jsx)(n.li, { children: 'Is er \xe9\xe9n kopniveau 1 die de inhoud van de pagina beschrijft?\nDeze kop moet uniek zijn per pagina. Een kop met niveau 1 als \u2018Welkom\u2019 of \u2018Nieuws\u2019 op elke pagina helpt niemand.' }), '\n', (0, t.jsx)(n.li, { children: 'Zijn er geen lege of nietszeggende koppen?\nEen kop als \u2018Overzicht\u2019 of \u2018Klik hier\u2019 zegt weinig over de inhoud. Zorg dat elke kop betekenisvol is.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer op lege koppen.\nLet in de preview op opvallende witruimte of lege plekken: dat kan duiden op een kop zonder inhoud. Die wordt wel voorgelezen door screenreaders, maar zegt niets. Vul de kop aan of verwijder \u2018m als hij overbodig is.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.10/', children: 'Succescriterium 2.4.10 Paragraafkoppen' }) }), '\n'] }), '\n', (0, t.jsx)(l.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  78734: (e, n, o) => {
   o.d(n, { Ay: () => s, RM: () => r });
   var a = o(86070),
    t = o(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => i, x: () => s });
   var a = o(30758);
   const t = {},
    r = a.createContext(t);
   function i(e) {
    const n = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), a.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
