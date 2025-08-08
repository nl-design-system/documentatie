'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97118],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var r = t(52676),
    l = t(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  68135: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => k, contentTitle: () => c, default: () => g, frontMatter: () => a, metadata: () => d, toc: () => u });
   var r = t(52676),
    l = t(40139),
    o = t(43599),
    s = t(40761),
    i = t(66968);
   const a = { title: 'Kleurgebruik in tekst \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kleurgebruik in tekst', pagination_label: 'Kleurgebruik in tekst', description: 'Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.', slug: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst', keywords: ['tekstopmaak', 'kleurgebruik', 'tekst', 'kleurcontrast'] },
    c = 'Kleurgebruik in tekst',
    d = { id: 'richtlijnen/content/tekstopmaak/colour-contrast', title: 'Kleurgebruik in tekst \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', description: 'Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.', source: '@site/docs/richtlijnen/content/tekstopmaak/colour-contrast.md', sourceDirName: 'richtlijnen/content/tekstopmaak', slug: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst', permalink: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/colour-contrast.md', tags: [], version: 'current', frontMatter: { title: 'Kleurgebruik in tekst \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kleurgebruik in tekst', pagination_label: 'Kleurgebruik in tekst', description: 'Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.', slug: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst', keywords: ['tekstopmaak', 'kleurgebruik', 'tekst', 'kleurcontrast'] }, sidebar: 'richtlijnen', previous: { title: 'Content', permalink: '/richtlijnen/content/tekstopmaak' }, next: { title: 'Tekst benadrukken', permalink: '/richtlijnen/content/tekstopmaak/tekst-benadrukken' } },
    k = {},
    u = [
     { value: 'Bewust omgaan met kleurcontrast', id: 'bewust-omgaan-met-kleurcontrast', level: 2 },
     { value: 'Gebruik een contrastchecker', id: 'gebruik-een-contrastchecker', level: 2 },
     { value: 'Tekstkleur in het CMS', id: 'tekstkleur-in-het-cms', level: 2 },
     { value: 'Tekst op afbeeldingen', id: 'tekst-op-afbeeldingen', level: 2 },
     { value: 'Meer over kleurgebruik in grafieken', id: 'meer-over-kleurgebruik-in-grafieken', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', br: 'br', div: 'div', h1: 'h1', h2: 'h2', li: 'li', p: 'p', span: 'span', strong: 'strong', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'kleurgebruik-in-tekst', children: 'Kleurgebruik in tekst' }), '\n', (0, r.jsx)(n.p, { children: 'Kleurgebruik speelt een grote rol in hoe mensen content waarnemen. Niet iedereen ziet kleuren op dezelfde manier. Daarom is het belangrijk dat je informatie nooit alleen met kleur overbrengt, en dat tekst altijd goed leesbaar blijft tegen de achtergrond.' }), '\n', (0, r.jsx)(n.p, { children: 'Als contentmaker heb je misschien geen invloed op het ontwerp of het kleurenschema van de website. Maar er zijn wel degelijk keuzes die je zelf maakt, bijvoorbeeld bij het toevoegen van tekst op een afbeelding, bij het kiezen van een grafiek of het instellen van een tekstkleur in het CMS.' }), '\n', (0, r.jsx)(n.h2, { id: 'bewust-omgaan-met-kleurcontrast', children: 'Bewust omgaan met kleurcontrast' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat tekst altijd goed leesbaar is. Niet alleen voor mensen met een visuele beperking maar ook voor omstandigheden met weinig contrast, zoals fel zonlicht op een mobiel scherm.' }), '\n', (0, r.jsx)(n.p, { children: 'Let op het volgende:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'gebruik een tekstkleur die duidelijk afsteekt tegen de achtergrond;' }), '\n', (0, r.jsx)(n.li, { children: 'zorg voor voldoende verschil in helderheid en kleur;' }), '\n', (0, r.jsx)(n.li, { children: 'vermijd lichte tekst op een lichte afbeelding of vlak.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik kleur altijd bewust. Kleur kan informatie verduidelijken, maar mag nooit de enige manier zijn om iets uit te leggen.\nWil je kleur inzetten in je ontwerp of content? Lees dan meer over ', (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel', children: 'kleurgebruik met een doel' }), ' en ', (0, r.jsx)(n.a, { href: '/wcag/1.4.3', children: 'voldoende contrast volgens de richtlijnen' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruik-een-contrastchecker', children: 'Gebruik een contrastchecker' }), '\n', (0, r.jsx)(n.p, { children: 'Het is vaak lastig om op het oog te beoordelen of tekst voldoende afsteekt tegen de achtergrond. Je kunt hiervoor een contrastchecker gebruiken. Daarmee controleer je of het kleurcontrast voldoet aan de toegankelijkheidsrichtlijnen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een eenvoudige tool is ', (0, r.jsx)(n.a, { href: '/contrast', children: 'de contrastchecker op deze website' }), '.\nJe vult daar de kleur van je tekst en de achtergrond in, en je ziet meteen of het contrast voldoende is.'] }), '\n', (0, r.jsx)(n.h2, { id: 'tekstkleur-in-het-cms', children: 'Tekstkleur in het CMS' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige CMS\u2019en bieden de mogelijkheid om zelf tekstkleuren aan te passen. Gebruik die optie alleen als het echt nodig is. Kies dan voor een kleur met voldoende contrast ten opzichte van de achtergrond. Gebruik nooit kleur als enige manier om nadruk te geven.' }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Vette tekst gebruiken om tekst nadruk te geven', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, r.jsx)(n.strong, { children: 'Pas op!' }), ' Dit is ', (0, r.jsx)(n.strong, { children: 'erg gevaarlijk' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'dont', title: 'Kleur gebruiken om tekst nadruk te geven', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, r.jsx)(n.span, { style: { color: 'red' }, children: 'Pas op!' }), ' Dit is ', (0, r.jsx)(n.span, { style: { color: 'red' }, children: 'erg gevaarlijk' })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'tekst-op-afbeeldingen', children: 'Tekst op afbeeldingen' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik geen complexe of drukke achtergrondafbeeldingen met tekst eroverheen. Is dat toch nodig? Controleer dan extra goed of de tekst nog leesbaar is.' }), '\n', (0, r.jsx)(s.X, { appearance: 'dont', title: 'Tekst over een complexe afbeelding of achtergrond plaatsen', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.div, { style: { background: 'center center no-repeat url("https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg")' }, children: (0, r.jsx)(n.h2, { style: { padding: '50px', color: 'white' }, children: 'Kaarten van Nederland' }) }) }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Kies een achtergrond die voldoende contrast biedt met de tekst', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.div, { style: { background: 'center center no-repeat url("https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg")' }, children: (0, r.jsx)(n.h2, { style: { padding: '50px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }, children: 'Kaarten van Nederland' }) }) }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'meer-over-kleurgebruik-in-grafieken', children: 'Meer over kleurgebruik in grafieken' }), '\n', (0, r.jsxs)(n.p, { children: ['Kleur speelt ook een belangrijke rol in grafieken en andere informatieve afbeeldingen. Hoe je die toegankelijk maakt, lees je in de ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/grafieken', children: 'richtlijnen voor grafieken' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'De belangrijkste vuistregel bij gebruik van kleur:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Gebruik nooit alleen kleur om verschil te maken.', (0, r.jsx)(n.br, {}), '\n', 'Gebruik je kleur om iets te benadrukken, zoals belangrijke woorden of het verschil tussen een goed en fout antwoord? Maak belangrijke tekst bijvoorbeeld vet en zorg dat je ook een ander signaal (zoals een icoon met alternatieve tekst, of een tekst) toevoegt.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Zo beoordeel je het contrast:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Lees de tekst op een mobiel scherm in fel licht.', (0, r.jsx)(n.br, {}), '\n', 'Kun je alles nog goed lezen? Lichte tekst op een lichte achtergrond valt in zulke situaties vaak weg.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Gebruik een contrastchecker.', (0, r.jsx)(n.br, {}), '\n', 'Met een ', (0, r.jsx)(n.a, { href: '/contrast', children: 'contrastchecker' }), ' kun je exact bepalen of kleuren voldoende onderscheidend zijn ten opzichte van elkaar.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Controleer of tekst leesbaar is op afbeeldingen.', (0, r.jsx)(n.br, {}), '\n', 'Staat er tekst over een afbeelding of kleurvlak? Kijk dan of er genoeg contrast is, en of de tekst niet wegvalt.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.1', children: '1.4.1 Gebruik van kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3', children: '1.4.3 Contrast (minimum)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.11', children: '1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] }), '\n', (0, r.jsx)(i.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => j });
   var r = t(41179),
    l = t(16167),
    o = t(4814),
    s = t(64642),
    i = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    k = t(75271),
    u = t(60027),
    h = t(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   p.displayName = 'DocumentContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   m.displayName = 'SurfaceContainer';
   const j = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: j = !1, displayCode: b = !0, children: v, container: x = 'document', language: y, designTokens: f } = e;
    const _ = 'function' == typeof v ? v() : v,
     w = 'function' == typeof n ? n() : (0, k.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(w || _),
     [C, N] = (0, k.useState)(z),
     [Z, S] = (0, k.useState)(j);
    (0, k.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(z, { parser: y, plugins: [s.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [z]);
    const K = (0, k.useId)();
    let T = k.Fragment;
    return (
     'paragraph' === x ? (T = g) : 'document' === x ? (T = p) : 'surface' === x && (T = m),
     (0, h.jsxs)('div', {
      className: (0, o.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, o.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(T, { children: (0, h.jsx)(l.pu, { children: _ }) }) }) }),
       b &&
        (0, h.jsx)('div', {
         className: (0, o.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(l.zx, {
          className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': K,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, h.jsxs)('div', {
         className: (0, o.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: K,
         hidden: !Z,
         children: [
          (0, h.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: C, trim: !0 }),
          t &&
           (0, h.jsx)('div', {
            className: (0, o.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(l.zx, {
             className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   var r = t(16167),
    l = t(60648),
    o = t(75271),
    s = t(40761);
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
     k = c;
    const { title: u, type: h } = (0, o.useContext)(s.n),
     g = (0, o.useId)();
    return (
     d && (k = k.trim()),
     (0, a.jsx)(l.y$, {
      theme: i,
      code: k,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: o, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': g, style: t, children: l.map((e, t) => (0, a.jsxs)('span', { ...o({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var r = t(69244),
    l = t(20061),
    o = t(16167),
    s = t(4814),
    i = t(75271),
    a = t(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: i, children: d, figure: k } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = k ? 'figure' : 'div',
      g = k ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(o.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(o.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: u[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => s });
   var r = t(75271);
   const l = {},
    o = r.createContext(l);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
