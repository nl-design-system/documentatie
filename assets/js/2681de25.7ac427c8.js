'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [73536],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var l = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24844: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => m, frontMatter: () => i, metadata: () => c, toc: () => j });
   var l = t(52676),
    r = t(40139),
    s = t(43599),
    o = t(40761),
    a = t(66968);
   const i = { title: 'Tabellen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tabellen', pagination_label: 'Tabellen', description: 'Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.', slug: '/richtlijnen/content/tekstopmaak/tabellen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'tabel', 'tabellen', 'tabelopmaak', 'tabelkop', 'tabelbeschrijving', 'tabelstructuur'] },
    d = 'Tabellen',
    c = { id: 'richtlijnen/content/tekstopmaak/tables', title: 'Tabellen \xb7 Content \xb7 Richtlijnen', description: 'Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.', source: '@site/docs/richtlijnen/content/tekstopmaak/tables.md', sourceDirName: 'richtlijnen/content/tekstopmaak', slug: '/richtlijnen/content/tekstopmaak/tabellen', permalink: '/richtlijnen/content/tekstopmaak/tabellen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/tables.md', tags: [], version: 'current', frontMatter: { title: 'Tabellen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tabellen', pagination_label: 'Tabellen', description: 'Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.', slug: '/richtlijnen/content/tekstopmaak/tabellen', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'tabel', 'tabellen', 'tabelopmaak', 'tabelkop', 'tabelbeschrijving', 'tabelstructuur'] }, sidebar: 'richtlijnen', previous: { title: 'Opsommingen', permalink: '/richtlijnen/content/tekstopmaak/opsommingen' }, next: { title: 'Video', permalink: '/richtlijnen/content/video' } },
    h = {},
    j = [
     { value: 'Toegankelijke tabellen maken', id: 'toegankelijke-tabellen-maken', level: 2 },
     { value: 'Begrijpelijke tabellen maken', id: 'begrijpelijke-tabellen-maken', level: 2 },
     { value: 'Doel van de tabel', id: 'doel-van-de-tabel', level: 2 },
     { value: 'Inhoud van de tabel', id: 'inhoud-van-de-tabel', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', br: 'br', caption: 'caption', h1: 'h1', h2: 'h2', img: 'img', li: 'li', p: 'p', strong: 'strong', table: 'table', tbody: 'tbody', td: 'td', th: 'th', thead: 'thead', tr: 'tr', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'tabellen', children: 'Tabellen' }), '\n', (0, l.jsxs)(n.p, { children: ['Met tabellen kun je data op een overzichtelijke manier presenteren. Ze zijn vooral geschikt om gestructureerde informatie te tonen, zoals cijferreeksen of vergelijkingen. Een toegankelijke tabel helpt ook mensen die een ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken: zij moeten bij elke cel kunnen achterhalen wat de bijbehorende kolom- en/of rijkoppen zijn.'] }), '\n', (0, l.jsx)(n.h2, { id: 'toegankelijke-tabellen-maken', children: 'Toegankelijke tabellen maken' }), '\n', (0, l.jsx)(n.p, { children: 'Zorg ervoor dat je in het systeem waarmee je publiceert aangeeft welke cellen kopcellen zijn. Vaak kun je instellen of er kolomkoppen, rijkoppen of beide aanwezig zijn. Screenreaders gebruiken deze informatie om bij elke cel de juiste kop voor te lezen, zodat de structuur en betekenis van de gegevens duidelijk blijven.' }), '\n', (0, l.jsx)(o.X, { appearance: 'do', title: 'Markeer koppen als rijkoppen of kolomkoppen', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.table, { children: [(0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Datum' }), (0, l.jsx)(n.th, { children: 'Evenement' }), (0, l.jsx)(n.th, { children: 'Locatie' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '6 mei 2025' }), (0, l.jsx)(n.td, { children: 'Rolling Stones' }), (0, l.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '10 juli 2025' }), (0, l.jsx)(n.td, { children: 'Beatles' }), (0, l.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] })] }) }) }) }), '\n', (0, l.jsx)(o.X, { appearance: 'dont', title: 'Tussenkopjes gebruiken in de tabel die niet als koppen zijn aangegeven.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.table, { children: [(0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Datum' }), (0, l.jsx)(n.th, { children: 'Evenement' }), (0, l.jsx)(n.th, { children: 'Locatie' })] }), (0, l.jsx)(n.tr, { children: (0, l.jsx)(n.td, { colspan: '3', children: (0, l.jsx)(n.strong, { children: 'Concerten in het voorjaar' }) }) }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '6 mei 2025' }), (0, l.jsx)(n.td, { children: 'Rolling Stones' }), (0, l.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '7 mei 2025' }), (0, l.jsx)(n.td, { children: 'Rolling Stones' }), (0, l.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, l.jsx)(n.tr, { children: (0, l.jsx)(n.td, { colspan: '3', children: (0, l.jsx)(n.strong, { children: 'Concerten in het najaar' }) }) }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '10 oktober 2025' }), (0, l.jsx)(n.td, { children: 'Beatles' }), (0, l.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '11 oktober 2025' }), (0, l.jsx)(n.td, { children: 'Beatles' }), (0, l.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] })] }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'begrijpelijke-tabellen-maken', children: 'Begrijpelijke tabellen maken' }), '\n', (0, l.jsx)(n.p, { children: 'Tabellen zijn een goede manier om relaties tussen gegevens aan te geven. Maar een tabel kan ook snel erg complex worden. Probeer daarom altijd om tabellen overzichtelijk en begrijpelijk te maken, voor iedereen.' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Gebruik een goede logische tabelstructuur.' }), '\n', (0, l.jsx)(n.li, { children: 'Maak tabellen niet te ingewikkeld, dit maakt het moeilijker om tabellen toegankelijk te maken.' }), '\n', (0, l.jsx)(n.li, { children: 'Bedenk goed hoe data zo eenvoudig mogelijk weergegeven kan worden. Splits bijvoorbeeld ingewikkelde tabellen op in eenvoudige tabellen.' }), '\n'] }), '\n', (0, l.jsx)(o.X, { appearance: 'do', title: 'Complexere tabellen opsplitsen', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(n.table, { children: [(0, l.jsx)(n.caption, { children: 'Concerten in het voorjaar' }), (0, l.jsx)(n.thead, { children: (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Datum' }), (0, l.jsx)(n.th, { children: 'Evenement' }), (0, l.jsx)(n.th, { children: 'Locatie' })] }) }), (0, l.jsxs)(n.tbody, { children: [(0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '6 mei 2025' }), (0, l.jsx)(n.td, { children: 'Rolling Stones' }), (0, l.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '7 mei 2025' }), (0, l.jsx)(n.td, { children: 'Rolling Stones' }), (0, l.jsx)(n.td, { children: 'Westerpark, Amsterdam' })] })] })] }), (0, l.jsx)(n.br, {}), (0, l.jsxs)(n.table, { children: [(0, l.jsx)(n.caption, { children: 'Concerten in het najaar' }), (0, l.jsx)(n.thead, { children: (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Datum' }), (0, l.jsx)(n.th, { children: 'Evenement' }), (0, l.jsx)(n.th, { children: 'Locatie' })] }) }), (0, l.jsxs)(n.tbody, { children: [(0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '10 oktober 2025' }), (0, l.jsx)(n.td, { children: 'Beatles' }), (0, l.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: '11 oktober 2025' }), (0, l.jsx)(n.td, { children: 'Beatles' }), (0, l.jsx)(n.td, { children: 'Goffertpark, Nijmegen' })] })] })] })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'doel-van-de-tabel', children: 'Doel van de tabel' }), '\n', (0, l.jsx)(n.p, { children: 'Gebruik tabellen niet alleen voor een mooiere opmaak. Met een tabel geef je namelijk een relatie aan tussen tabelcellen. Iemand die een screenreader gebruikt, krijgt namelijk te horen dat er een tabel aanwezig is. En ook voor iedere cel in welke rij en in welke kolom de cel staat. Als er geen relatie is, is het gebruik van een tabel verwarrend.' }), '\n', (0, l.jsx)(o.X, { appearance: 'dont', title: 'Een tabel gebruiken voor mooiere opmaak', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.table, { children: (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { style: { inlineSize: '50%' }, children: (0, l.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_headings_in_voiceover.png' }) }), (0, l.jsx)(n.td, { children: 'De koppenstructuur zoals die wordt weergegeven door VoiceOver op MacOS' })] }) }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'inhoud-van-de-tabel', children: 'Inhoud van de tabel' }), '\n', (0, l.jsx)(n.p, { children: 'Zorg dat de inhoud van de tabel in een volgorde staat die \xf3\xf3k begrijpelijk is voor een gebruiker met een screenreader. De screenreader leest een tabel voor per rij en van links naar rechts.' }), '\n', (0, l.jsx)(o.X, { appearance: 'dont', title: 'Gerelateerde informatie in verschillende rijen plaatsen', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(n.table, { children: [(0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Naam' }), (0, l.jsx)(n.td, { children: 'Jan' }), (0, l.jsx)(n.td, { children: 'Piet' }), (0, l.jsx)(n.td, { children: 'Kees' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Functie' }), (0, l.jsx)(n.td, { children: 'Docent Natuurkunde' }), (0, l.jsx)(n.td, { children: 'Netwerkbeheerder' }), (0, l.jsx)(n.td, { children: 'Docent Nederlands' })] })] }), (0, l.jsx)(n.p, { children: 'Een screenreader zal in dit geval eerst alle namen voor gaan lezen en daarna pas de functies. Het verband tussen die twee is dan helemaal verdwenen' })] }) }) }), '\n', (0, l.jsx)(o.X, { appearance: 'do', title: 'Gerelateerde informatie in kolommen plaatsen', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(n.table, { children: [(0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.th, { children: 'Naam' }), (0, l.jsx)(n.th, { children: 'Functie' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: 'Jan' }), (0, l.jsx)(n.td, { children: 'Docent Natuurkunde' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: 'Piet' }), (0, l.jsx)(n.td, { children: 'Netwerkbeheerder' })] }), (0, l.jsxs)(n.tr, { children: [(0, l.jsx)(n.td, { children: 'Kees' }), (0, l.jsx)(n.td, { children: 'Docent Nederlands' })] })] }), (0, l.jsx)(n.p, { children: 'Een screenreader zal in dit geval de naam en bijbehorende functie achter elkaar voorlezen.' })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: 'Lees de pagina door en controleer alle tabellen. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Controleer of de tabel is opgemaakt met de tabeloptie van het CMS.\nGebruik de ingebouwde tabelopties van je contentmanagementsysteem om tabellen correct te markeren.' }), '\n', (0, l.jsx)(n.li, { children: 'Controleer of de koppen correct zijn gemarkeerd als kolomkoppen en/of rijkoppen.\nZorg ervoor dat de eerste rij en/of kolom van de tabel is gemarkeerd als kop, zodat hulptechnologie\xebn de structuur van de tabel correct kunnen interpreteren. \ufffc' }), '\n', (0, l.jsx)(n.li, { children: 'Controleer of de tabel niet te complex is.\nVermijd het gebruik van samengevoegde cellen of geneste tabellen, omdat deze de toegankelijkheid kunnen verminderen. Overweeg om complexe tabellen op te splitsen in meerdere eenvoudige tabellen. \ufffc' }), '\n', (0, l.jsx)(n.li, { children: 'Controleer of de tabel niet wordt gebruikt voor opmaakdoeleinden.\nGebruik tabellen alleen voor het presenteren van gestructureerde gegevens, niet voor het cre\xebren van lay-outs of het positioneren van elementen op de pagina.' }), '\n'] }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n'] }), '\n', (0, l.jsx)(a.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => x });
   var l = t(41179),
    r = t(16167),
    s = t(4814),
    o = t(64642),
    a = t(93872),
    i = t(86017),
    d = t(48231),
    c = t(75119),
    h = t(75271),
    j = t(60027),
    p = t(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(r.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const u = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(r.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   u.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: x = !1, displayCode: k = !0, children: g, container: v = 'document', language: y, designTokens: f } = e;
    const _ = 'function' == typeof g ? g() : g,
     w = 'function' == typeof n ? n() : (0, h.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : j.uS(w || _),
     [z, C] = (0, h.useState)(N),
     [S, Z] = (0, h.useState)(x);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(N, { parser: y, plugins: [o.Z, a.ZP, i.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const T = (0, h.useId)();
    let D = h.Fragment;
    return (
     'paragraph' === v ? (D = m) : 'document' === v ? (D = u) : 'surface' === v && (D = b),
     (0, p.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(D, { children: (0, p.jsx)(r.pu, { children: _ }) }) }) }),
       k &&
        (0, p.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(r.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           Z(!S);
          },
          'aria-expanded': S,
          'aria-controls': T,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, p.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: T,
         hidden: !S,
         children: [
          (0, p.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: z, trim: !0 }),
          t &&
           (0, p.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(r.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => d });
   var l = t(16167),
    r = t(60648),
    s = t(75271),
    o = t(40761);
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
   var i = t(52676);
   function d(e) {
    let { lineNumber: n, syntax: t, textContent: d, trim: c } = e,
     h = d;
    const { title: j, type: p } = (0, s.useContext)(o.n),
     m = (0, s.useId)();
    return (
     c && (h = h.trim()),
     (0, i.jsx)(r.y$, {
      theme: a,
      code: h,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: r, getLineProps: s, getTokenProps: o } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', j ? ': ' : ' ', j] }), (0, i.jsx)(l.dn, { tabIndex: 0, role: j ? 'region' : void 0, 'aria-labelledby': m, style: t, children: r.map((e, t) => (0, i.jsxs)('span', { ...s({ line: e }), children: [n && (0, i.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => c, n: () => d });
   var l = t(69244),
    r = t(20061),
    s = t(16167),
    o = t(4814),
    a = t(75271),
    i = t(52676);
   const d = (0, a.createContext)({}),
    c = (e) => {
     let { title: n, appearance: t, description: a, children: c, figure: h } = e;
     const j = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      m = h ? 'figcaption' : 'div';
     return (0, i.jsxs)(p, { className: (0, o.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: j.dont })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: j.do })] }), (0, i.jsx)(s.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: n, type: j[t] }, children: c }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => o });
   var l = t(75271);
   const r = {},
    s = l.createContext(r);
   function o(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
