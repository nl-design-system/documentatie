'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [35180],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => j });
   var r = t(16609),
    l = t(68873),
    o = t(13526),
    s = t(58713),
    i = t(87347),
    a = t(39644),
    c = t(92406),
    d = t(63313),
    k = t(30758),
    u = t(31186),
    h = t(86070);
   const g = ({ children: e }) => (0, h.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const p = ({ children: e }) => (0, h.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   p.displayName = 'DocumentContainer';
   const m = ({ children: e }) => (0, h.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   m.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: j = !0, children: b, container: v = 'document', language: x, designTokens: y }) => {
    const f = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, k.isValidElement)(e) ? e : void 0,
     z = 'string' == typeof e ? e : u.qV(_ || f),
     [w, N] = (0, k.useState)(z),
     [C, A] = (0, k.useState)(t);
    (0, k.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(z, { parser: x, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [z]);
    const S = (0, k.useId)();
    let K = k.Fragment;
    return (
     'paragraph' === v ? (K = g) : 'document' === v ? (K = p) : 'surface' === v && (K = m),
     (0, h.jsxs)('div', {
      className: (0, o.A)('nlds-canvas'),
      children: [
       f && (0, h.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, h.jsx)(K, { children: (0, h.jsx)(l.v$, { children: f }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, o.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(l.$n, {
          className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, h.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
   t.d(n, { M: () => c });
   var r = t(68873),
    l = t(16194),
    o = t(30758),
    s = t(50124);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: k, type: u } = (0, o.useContext)(s.x),
     h = (0, o.useId)();
    return c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', k ? ': ' : ' ', k] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: k ? 'region' : void 0, 'aria-labelledby': h, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  46981: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => k, contentTitle: () => d, default: () => g, frontMatter: () => c, metadata: () => r, toc: () => u });
   const r = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/colour-contrast","title":"Kleurgebruik in tekst \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","description":"Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.","source":"@site/docs/richtlijnen/content/tekstopmaak/colour-contrast.md","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst","permalink":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/colour-contrast.md","tags":[],"version":"current","frontMatter":{"title":"Kleurgebruik in tekst \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Kleurgebruik in tekst","pagination_label":"Kleurgebruik in tekst","description":"Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.","slug":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst","keywords":["tekstopmaak","kleurgebruik","tekst","kleurcontrast"]},"sidebar":"richtlijnen","previous":{"title":"Content","permalink":"/richtlijnen/content/tekstopmaak"},"next":{"title":"Tekst benadrukken","permalink":"/richtlijnen/content/tekstopmaak/tekst-benadrukken"}}');
   var l = t(86070),
    o = t(85248),
    s = t(8649),
    i = t(50124),
    a = t(78734);
   const c = { title: 'Kleurgebruik in tekst \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kleurgebruik in tekst', pagination_label: 'Kleurgebruik in tekst', description: 'Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.', slug: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst', keywords: ['tekstopmaak', 'kleurgebruik', 'tekst', 'kleurcontrast'] },
    d = 'Kleurgebruik in tekst',
    k = {},
    u = [{ value: 'Bewust omgaan met kleurcontrast', id: 'bewust-omgaan-met-kleurcontrast', level: 2 }, { value: 'Gebruik een contrastchecker', id: 'gebruik-een-contrastchecker', level: 2 }, { value: 'Tekstkleur in het CMS', id: 'tekstkleur-in-het-cms', level: 2 }, { value: 'Tekst op afbeeldingen', id: 'tekst-op-afbeeldingen', level: 2 }, { value: 'Meer over kleurgebruik in grafieken', id: 'meer-over-kleurgebruik-in-grafieken', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function h(e) {
    const n = { a: 'a', br: 'br', div: 'div', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', span: 'span', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'kleurgebruik-in-tekst', children: 'Kleurgebruik in tekst' }) }), '\n', (0, l.jsx)(n.p, { children: 'Kleurgebruik speelt een grote rol in hoe mensen content waarnemen. Niet iedereen ziet kleuren op dezelfde manier. Daarom is het belangrijk dat je informatie nooit alleen met kleur overbrengt, en dat tekst altijd goed leesbaar blijft tegen de achtergrond.' }), '\n', (0, l.jsx)(n.p, { children: 'Als contentmaker heb je misschien geen invloed op het ontwerp of het kleurenschema van de website. Maar er zijn wel degelijk keuzes die je zelf maakt, bijvoorbeeld bij het toevoegen van tekst op een afbeelding, bij het kiezen van een grafiek of het instellen van een tekstkleur in het CMS.' }), '\n', (0, l.jsx)(n.h2, { id: 'bewust-omgaan-met-kleurcontrast', children: 'Bewust omgaan met kleurcontrast' }), '\n', (0, l.jsx)(n.p, { children: 'Zorg dat tekst altijd goed leesbaar is. Niet alleen voor mensen met een visuele beperking maar ook voor omstandigheden met weinig contrast, zoals fel zonlicht op een mobiel scherm.' }), '\n', (0, l.jsx)(n.p, { children: 'Let op het volgende:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'gebruik een tekstkleur die duidelijk afsteekt tegen de achtergrond;' }), '\n', (0, l.jsx)(n.li, { children: 'zorg voor voldoende verschil in helderheid en kleur;' }), '\n', (0, l.jsx)(n.li, { children: 'vermijd lichte tekst op een lichte afbeelding of vlak.' }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: ['Gebruik kleur altijd bewust. Kleur kan informatie verduidelijken, maar mag nooit de enige manier zijn om iets uit te leggen.\nWil je kleur inzetten in je ontwerp of content? Lees dan meer over ', (0, l.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'kleurgebruik met een doel' }), ' en ', (0, l.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'voldoende contrast volgens de richtlijnen' }), '.'] }), '\n', (0, l.jsx)(n.h2, { id: 'gebruik-een-contrastchecker', children: 'Gebruik een contrastchecker' }), '\n', (0, l.jsx)(n.p, { children: 'Het is vaak lastig om op het oog te beoordelen of tekst voldoende afsteekt tegen de achtergrond. Je kunt hiervoor een contrastchecker gebruiken. Daarmee controleer je of het kleurcontrast voldoet aan de toegankelijkheidsrichtlijnen.' }), '\n', (0, l.jsxs)(n.p, { children: ['Een eenvoudige tool is ', (0, l.jsx)(n.a, { href: '/contrast/', children: 'de contrastchecker op deze website' }), '.\nJe vult daar de kleur van je tekst en de achtergrond in, en je ziet meteen of het contrast voldoende is.'] }), '\n', (0, l.jsx)(n.h2, { id: 'tekstkleur-in-het-cms', children: 'Tekstkleur in het CMS' }), '\n', (0, l.jsx)(n.p, { children: 'Sommige CMS\u2019en bieden de mogelijkheid om zelf tekstkleuren aan te passen. Gebruik die optie alleen als het echt nodig is. Kies dan voor een kleur met voldoende contrast ten opzichte van de achtergrond. Gebruik nooit kleur als enige manier om nadruk te geven.' }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Vette tekst gebruiken om tekst nadruk te geven', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, l.jsx)(n.strong, { children: 'Pas op!' }), ' Dit is ', (0, l.jsx)(n.strong, { children: 'erg gevaarlijk' })] }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'dont', title: 'Kleur gebruiken om tekst nadruk te geven', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, l.jsx)(n.span, { style: { color: 'red' }, children: 'Pas op!' }), ' Dit is ', (0, l.jsx)(n.span, { style: { color: 'red' }, children: 'erg gevaarlijk' })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'tekst-op-afbeeldingen', children: 'Tekst op afbeeldingen' }), '\n', (0, l.jsx)(n.p, { children: 'Gebruik geen complexe of drukke achtergrondafbeeldingen met tekst eroverheen. Is dat toch nodig? Controleer dan extra goed of de tekst nog leesbaar is.' }), '\n', (0, l.jsx)(i.$, { appearance: 'dont', title: 'Tekst over een complexe afbeelding of achtergrond plaatsen', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.div, { style: { background: 'center center no-repeat url("https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg")' }, children: (0, l.jsx)(n.h2, { style: { padding: '50px', color: 'white' }, children: 'Kaarten van Nederland' }) }) }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Kies een achtergrond die voldoende contrast biedt met de tekst', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.div, { style: { background: 'center center no-repeat url("https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg")' }, children: (0, l.jsx)(n.h2, { style: { padding: '50px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }, children: 'Kaarten van Nederland' }) }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'meer-over-kleurgebruik-in-grafieken', children: 'Meer over kleurgebruik in grafieken' }), '\n', (0, l.jsxs)(n.p, { children: ['Kleur speelt ook een belangrijke rol in grafieken en andere informatieve afbeeldingen. Hoe je die toegankelijk maakt, lees je in de ', (0, l.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/grafieken/', children: 'richtlijnen voor grafieken' }), '.'] }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: (0, l.jsx)(n.strong, { children: 'De belangrijkste vuistregel bij gebruik van kleur:' }) }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['Gebruik nooit alleen kleur om verschil te maken.', (0, l.jsx)(n.br, {}), '\n', 'Gebruik je kleur om iets te benadrukken, zoals belangrijke woorden of het verschil tussen een goed en fout antwoord? Maak belangrijke tekst bijvoorbeeld vet en zorg dat je ook een ander signaal (zoals een icoon met alternatieve tekst, of een tekst) toevoegt.'] }), '\n'] }), '\n', (0, l.jsx)(n.p, { children: (0, l.jsx)(n.strong, { children: 'Zo beoordeel je het contrast:' }) }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['Lees de tekst op een mobiel scherm in fel licht.', (0, l.jsx)(n.br, {}), '\n', 'Kun je alles nog goed lezen? Lichte tekst op een lichte achtergrond valt in zulke situaties vaak weg.'] }), '\n', (0, l.jsxs)(n.li, { children: ['Gebruik een contrastchecker.', (0, l.jsx)(n.br, {}), '\n', 'Met een ', (0, l.jsx)(n.a, { href: '/contrast/', children: 'contrastchecker' }), ' kun je exact bepalen of kleuren voldoende onderscheidend zijn ten opzichte van elkaar.'] }), '\n', (0, l.jsxs)(n.li, { children: ['Controleer of tekst leesbaar is op afbeeldingen.', (0, l.jsx)(n.br, {}), '\n', 'Staat er tekst over een afbeelding of kleurvlak? Kijk dan of er genoeg contrast is, en of de tekst niet wegvalt.'] }), '\n'] }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.4.1/', children: '1.4.1 Gebruik van kleur' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.4.3/', children: '1.4.3 Contrast (minimum)' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.4.11/', children: '1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] }), '\n', (0, l.jsx)(a.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => d, x: () => c });
   var r = t(54736),
    l = t(26990),
    o = t(68873),
    s = t(13526),
    i = t(30758),
    a = t(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: i, figure: d }) => {
     const k = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: k.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: k.do })] }), (0, a.jsx)(o.fz, { children: e })] }), t] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: k[n] }, children: i }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => i, RM: () => o });
   var r = t(86070),
    l = t(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => i });
   var r = t(30758);
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
