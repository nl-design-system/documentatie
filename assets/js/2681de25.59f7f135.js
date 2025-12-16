'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6548],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => k });
   var l = t(16609),
    r = t(68873),
    s = t(13526),
    a = t(58713),
    o = t(87347),
    i = t(39644),
    d = t(92406),
    c = t(63313),
    h = t(30758),
    j = t(31186),
    p = t(86070);
   const m = ({ children: e }) => (0, p.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const u = ({ children: e }) => (0, p.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   u.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, p.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const k = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: k = !0, children: x, container: g = 'document', language: v, designTokens: y }) => {
    const f = 'function' == typeof x ? x() : x,
     _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : j.qV(_ || f),
     [N, z] = (0, h.useState)(w),
     [C, A] = (0, h.useState)(t);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: v, plugins: [a.A, o.Ay, i.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [w]);
    const S = (0, h.useId)();
    let T = h.Fragment;
    return (
     'paragraph' === g ? (T = m) : 'document' === g ? (T = u) : 'surface' === g && (T = b),
     (0, p.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       f && (0, p.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, p.jsx)(T, { children: (0, p.jsx)(r.v$, { children: f }) }) }) }),
       k &&
        (0, p.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(r.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, p.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, p.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: N, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(r.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, t) => {
   t.d(n, { M: () => d });
   var l = t(68873),
    r = t(16194),
    s = t(30758),
    a = t(50124);
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
   var i = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: h, type: j } = (0, s.useContext)(a.x),
     p = (0, s.useId)();
    return d && (c = c.trim()), (0, i.jsx)(r.f4, { theme: o, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: r, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', j ? `\u201c${j}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  38733: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => c, default: () => m, frontMatter: () => d, metadata: () => l, toc: () => j });
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/tables","title":"Tabellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","description":"Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.","source":"@site/docs/richtlijnen/content/tekstopmaak/tables.md","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/tabellen","permalink":"/richtlijnen/content/tekstopmaak/tabellen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/tables.md","tags":[],"version":"current","frontMatter":{"title":"Tabellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Tabellen","pagination_label":"Tabellen","description":"Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.","slug":"/richtlijnen/content/tekstopmaak/tabellen","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","tabel","tabellen","tabelopmaak","tabelkop","tabelbeschrijving","tabelstructuur"]},"sidebar":"richtlijnen","previous":{"title":"Opsommingen","permalink":"/richtlijnen/content/tekstopmaak/opsommingen"},"next":{"title":"Video","permalink":"/richtlijnen/content/video"}}');
   var r = t(86070),
    s = t(85248),
    a = t(8649),
    o = t(50124),
    i = t(78734);
   const d = { title: 'Tabellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tabellen', pagination_label: 'Tabellen', description: 'Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.', slug: '/richtlijnen/content/tekstopmaak/tabellen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'tabel', 'tabellen', 'tabelopmaak', 'tabelkop', 'tabelbeschrijving', 'tabelstructuur'] },
    c = 'Tabellen',
    h = {},
    j = [{ value: 'Toegankelijke tabellen maken', id: 'toegankelijke-tabellen-maken', level: 2 }, { value: 'Begrijpelijke tabellen maken', id: 'begrijpelijke-tabellen-maken', level: 2 }, { value: 'Doel van de tabel', id: 'doel-van-de-tabel', level: 2 }, { value: 'Inhoud van de tabel', id: 'inhoud-van-de-tabel', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function p(e) {
    const n = { a: 'a', br: 'br', caption: 'caption', h1: 'h1', h2: 'h2', header: 'header', img: 'img', li: 'li', p: 'p', strong: 'strong', table: 'table', tbody: 'tbody', td: 'td', th: 'th', thead: 'thead', tr: 'tr', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'tabellen', children: 'Tabellen' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Met tabellen kun je data op een overzichtelijke manier presenteren. Ze zijn vooral geschikt om gestructureerde informatie te tonen, zoals cijferreeksen of vergelijkingen. Een toegankelijke tabel helpt ook mensen die een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken: zij moeten bij elke cel kunnen achterhalen wat de bijbehorende kolom- en/of rijkoppen zijn.'] }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijke-tabellen-maken', children: 'Toegankelijke tabellen maken' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat je in het systeem waarmee je publiceert aangeeft welke cellen kopcellen zijn. Vaak kun je instellen of er kolomkoppen, rijkoppen of beide aanwezig zijn. Screenreaders gebruiken deze informatie om bij elke cel de juiste kop voor te lezen, zodat de structuur en betekenis van de gegevens duidelijk blijven.' }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Markeer koppen als rijkoppen of kolomkoppen', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.table, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Datum' }), (0, r.jsx)(n.th, { children: 'Evenement' }), (0, r.jsx)(n.th, { children: 'Locatie' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '6 mei 2025' }), (0, r.jsx)(n.td, { children: 'Rolling Stones' }), (0, r.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '10 juli 2025' }), (0, r.jsx)(n.td, { children: 'Beatles' }), (0, r.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] })] }) }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Tussenkopjes gebruiken in de tabel die niet als koppen zijn aangegeven.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.table, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Datum' }), (0, r.jsx)(n.th, { children: 'Evenement' }), (0, r.jsx)(n.th, { children: 'Locatie' })] }), (0, r.jsx)(n.tr, { children: (0, r.jsx)(n.td, { colspan: '3', children: (0, r.jsx)(n.strong, { children: 'Concerten in het voorjaar' }) }) }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '6 mei 2025' }), (0, r.jsx)(n.td, { children: 'Rolling Stones' }), (0, r.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '7 mei 2025' }), (0, r.jsx)(n.td, { children: 'Rolling Stones' }), (0, r.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, r.jsx)(n.tr, { children: (0, r.jsx)(n.td, { colspan: '3', children: (0, r.jsx)(n.strong, { children: 'Concerten in het najaar' }) }) }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '10 oktober 2025' }), (0, r.jsx)(n.td, { children: 'Beatles' }), (0, r.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '11 oktober 2025' }), (0, r.jsx)(n.td, { children: 'Beatles' }), (0, r.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] })] }) }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'begrijpelijke-tabellen-maken', children: 'Begrijpelijke tabellen maken' }), '\n', (0, r.jsx)(n.p, { children: 'Tabellen zijn een goede manier om relaties tussen gegevens aan te geven. Maar een tabel kan ook snel erg complex worden. Probeer daarom altijd om tabellen overzichtelijk en begrijpelijk te maken, voor iedereen.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Gebruik een goede logische tabelstructuur.' }), '\n', (0, r.jsx)(n.li, { children: 'Maak tabellen niet te ingewikkeld, dit maakt het moeilijker om tabellen toegankelijk te maken.' }), '\n', (0, r.jsx)(n.li, { children: 'Bedenk goed hoe data zo eenvoudig mogelijk weergegeven kan worden. Splits bijvoorbeeld ingewikkelde tabellen op in eenvoudige tabellen.' }), '\n'] }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Complexere tabellen opsplitsen', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.table, { children: [(0, r.jsx)(n.caption, { children: 'Concerten in het voorjaar' }), (0, r.jsx)(n.thead, { children: (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Datum' }), (0, r.jsx)(n.th, { children: 'Evenement' }), (0, r.jsx)(n.th, { children: 'Locatie' })] }) }), (0, r.jsxs)(n.tbody, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '6 mei 2025' }), (0, r.jsx)(n.td, { children: 'Rolling Stones' }), (0, r.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '7 mei 2025' }), (0, r.jsx)(n.td, { children: 'Rolling Stones' }), (0, r.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] })] })] }), (0, r.jsx)(n.br, {}), (0, r.jsxs)(n.table, { children: [(0, r.jsx)(n.caption, { children: 'Concerten in het najaar' }), (0, r.jsx)(n.thead, { children: (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Datum' }), (0, r.jsx)(n.th, { children: 'Evenement' }), (0, r.jsx)(n.th, { children: 'Locatie' })] }) }), (0, r.jsxs)(n.tbody, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '10 oktober 2025' }), (0, r.jsx)(n.td, { children: 'Beatles' }), (0, r.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: '11 oktober 2025' }), (0, r.jsx)(n.td, { children: 'Beatles' }), (0, r.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] })] })] })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'doel-van-de-tabel', children: 'Doel van de tabel' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik tabellen niet alleen voor een mooiere opmaak. Met een tabel geef je namelijk een relatie aan tussen tabelcellen. Iemand die een screenreader gebruikt, krijgt namelijk te horen dat er een tabel aanwezig is. En ook voor iedere cel in welke rij en in welke kolom de cel staat. Als er geen relatie is, is het gebruik van een tabel verwarrend.' }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Een tabel gebruiken voor mooiere opmaak', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.table, { children: (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { style: { inlineSize: '50%' }, children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_headings_in_voiceover.png' }) }), (0, r.jsx)(n.td, { children: 'De koppenstructuur zoals die wordt weergegeven door VoiceOver op MacOS' })] }) }) }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'inhoud-van-de-tabel', children: 'Inhoud van de tabel' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat de inhoud van de tabel in een volgorde staat die \xf3\xf3k begrijpelijk is voor een gebruiker met een screenreader. De screenreader leest een tabel voor per rij en van links naar rechts.' }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Gerelateerde informatie in verschillende rijen plaatsen', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.table, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Naam' }), (0, r.jsx)(n.td, { children: 'Jan' }), (0, r.jsx)(n.td, { children: 'Piet' }), (0, r.jsx)(n.td, { children: 'Kees' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Functie' }), (0, r.jsx)(n.td, { children: 'Docent Natuurkunde' }), (0, r.jsx)(n.td, { children: 'Netwerkbeheerder' }), (0, r.jsx)(n.td, { children: 'Docent Nederlands' })] })] }), (0, r.jsx)(n.p, { children: 'Een screenreader zal in dit geval eerst alle namen voor gaan lezen en daarna pas de functies. Het verband tussen die twee is dan helemaal verdwenen' })] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Gerelateerde informatie in kolommen plaatsen', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.table, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'Naam' }), (0, r.jsx)(n.th, { children: 'Functie' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'Jan' }), (0, r.jsx)(n.td, { children: 'Docent Natuurkunde' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'Piet' }), (0, r.jsx)(n.td, { children: 'Netwerkbeheerder' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'Kees' }), (0, r.jsx)(n.td, { children: 'Docent Nederlands' })] })] }), (0, r.jsx)(n.p, { children: 'Een screenreader zal in dit geval de naam en bijbehorende functie achter elkaar voorlezen.' })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Lees de pagina door en controleer alle tabellen. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Controleer of de tabel is opgemaakt met de tabeloptie van het CMS.\nGebruik de ingebouwde tabelopties van je contentmanagementsysteem om tabellen correct te markeren.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of de koppen correct zijn gemarkeerd als kolomkoppen en/of rijkoppen.\nZorg ervoor dat de eerste rij en/of kolom van de tabel is gemarkeerd als kop, zodat hulptechnologie\xebn de structuur van de tabel correct kunnen interpreteren. \ufffc' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of de tabel niet te complex is.\nVermijd het gebruik van samengevoegde cellen of geneste tabellen, omdat deze de toegankelijkheid kunnen verminderen. Overweeg om complexe tabellen op te splitsen in meerdere eenvoudige tabellen. \ufffc' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of de tabel niet wordt gebruikt voor opmaakdoeleinden.\nGebruik tabellen alleen voor het presenteren van gestructureerde gegevens, niet voor het cre\xebren van lay-outs of het positioneren van elementen op de pagina.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n'] }), '\n', (0, r.jsx)(i.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => d });
   var l = t(54736),
    r = t(26990),
    s = t(68873),
    a = t(13526),
    o = t(30758),
    i = t(86070);
   const d = (0, o.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: o, figure: c }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      j = c ? 'figure' : 'div',
      p = c ? 'figcaption' : 'div';
     return (0, i.jsxs)(j, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), t] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: o }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => s });
   var l = t(86070),
    r = t(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => o });
   var l = t(30758);
   const r = {},
    s = l.createContext(r);
   function a(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
