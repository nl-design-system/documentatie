'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [87122],
 {
  9386(e, n, t) {
   t.d(n, { H: () => x });
   var l = t(95822),
    r = t(46447),
    s = t(13526),
    o = t(68148),
    a = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    u = t(31186),
    k = t(65904),
    g = t.n(k),
    p = t(51627),
    m = t(86070);
   const j = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, u.qV)(t)
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
        r = g().highlight(l, g().languages[n], n);
       return (0, m.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, m.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, m.jsx)(p.n, { children: (0, m.jsx)(p.K, { label: 'Code', children: (0, m.jsx)('pre', { className: 'language-html nl-code-block', children: (0, m.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: r } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: k = !0, children: g, container: p = 'document', language: x, designTokens: y }) => {
       const f = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        z = 'string' == typeof e ? e : u.qV(_ || f),
        [w, N] = (0, h.useState)(z),
        [A, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(z, { parser: x, plugins: [o.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [z]);
       const S = (0, h.useId)();
       let K = h.Fragment;
       return (
        'paragraph' === p ? (K = j) : 'document' === p ? (K = b) : 'surface' === p && (K = v),
        (0, m.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, m.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(K, { children: (0, m.jsx)(r.v$, { children: f }) }) }) }),
          k &&
           (0, m.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, m.jsx)(r.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          k &&
           (0, m.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
             n &&
              (0, m.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, m.jsx)(r.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var l = t(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  45563(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => g, frontMatter: () => c, metadata: () => l, toc: () => u }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/colour-contrast","title":"Kleurgebruik in tekst","description":"Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.","source":"@site/docs/richtlijnen/content/tekstopmaak/colour-contrast.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst","permalink":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/colour-contrast.mdx","tags":[],"version":"current","frontMatter":{"title":"Kleurgebruik in tekst","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Kleurgebruik in tekst","pagination_label":"Kleurgebruik in tekst","description":"Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.","slug":"/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst","keywords":["tekstopmaak","kleurgebruik","tekst","kleurcontrast"]},"sidebar":"richtlijnen","previous":{"title":"Content","permalink":"/richtlijnen/content/tekstopmaak"},"next":{"title":"Tekst benadrukken","permalink":"/richtlijnen/content/tekstopmaak/tekst-benadrukken"}}');
   var r = t(86070),
    s = t(18439),
    o = t(9386),
    a = t(88022),
    i = t(78734);
   const c = { title: 'Kleurgebruik in tekst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kleurgebruik in tekst', pagination_label: 'Kleurgebruik in tekst', description: 'Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.', slug: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst', keywords: ['tekstopmaak', 'kleurgebruik', 'tekst', 'kleurcontrast'] },
    d = 'Kleurgebruik in tekst',
    h = {},
    u = [{ value: 'Bewust omgaan met kleurcontrast', id: 'bewust-omgaan-met-kleurcontrast', level: 2 }, { value: 'Gebruik een contrastchecker', id: 'gebruik-een-contrastchecker', level: 2 }, { value: 'Tekstkleur in het CMS', id: 'tekstkleur-in-het-cms', level: 2 }, { value: 'Tekst op afbeeldingen', id: 'tekst-op-afbeeldingen', level: 2 }, { value: 'Meer over kleurgebruik in grafieken', id: 'meer-over-kleurgebruik-in-grafieken', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function k(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'kleurgebruik-in-tekst', children: 'Kleurgebruik in tekst' }) }), '\n', (0, r.jsx)(n.p, { children: 'Kleurgebruik speelt een grote rol in hoe mensen content waarnemen. Niet iedereen ziet kleuren op dezelfde manier. Daarom is het belangrijk dat je informatie nooit alleen met kleur overbrengt, en dat tekst altijd goed leesbaar blijft tegen de achtergrond.' }), '\n', (0, r.jsx)(n.p, { children: 'Als contentmaker heb je misschien geen invloed op het ontwerp of het kleurenschema van de website. Maar er zijn wel degelijk keuzes die je zelf maakt, bijvoorbeeld bij het toevoegen van tekst op een afbeelding, bij het kiezen van een grafiek of het instellen van een tekstkleur in het CMS.' }), '\n', (0, r.jsx)(n.h2, { id: 'bewust-omgaan-met-kleurcontrast', children: 'Bewust omgaan met kleurcontrast' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat tekst altijd goed leesbaar is. Niet alleen voor mensen met een visuele beperking maar ook voor omstandigheden met weinig contrast, zoals fel zonlicht op een mobiel scherm.' }), '\n', (0, r.jsx)(n.p, { children: 'Let op het volgende:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'gebruik een tekstkleur die duidelijk afsteekt tegen de achtergrond;' }), '\n', (0, r.jsx)(n.li, { children: 'zorg voor voldoende verschil in helderheid en kleur;' }), '\n', (0, r.jsx)(n.li, { children: 'vermijd lichte tekst op een lichte afbeelding of vlak.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik kleur altijd bewust. Kleur kan informatie verduidelijken, maar mag nooit de enige manier zijn om iets uit te leggen.\nWil je kleur inzetten in je ontwerp of content? Lees dan meer over ', (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'kleurgebruik met een doel' }), ' en ', (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'voldoende contrast volgens de richtlijnen' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruik-een-contrastchecker', children: 'Gebruik een contrastchecker' }), '\n', (0, r.jsx)(n.p, { children: 'Het is vaak lastig om op het oog te beoordelen of tekst voldoende afsteekt tegen de achtergrond. Je kunt hiervoor een contrastchecker gebruiken. Daarmee controleer je of het kleurcontrast voldoet aan de toegankelijkheidsrichtlijnen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een eenvoudige tool is ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'de contrastchecker op deze website' }), '.\nJe vult daar de kleur van je tekst en de achtergrond in, en je ziet meteen of het contrast voldoende is.'] }), '\n', (0, r.jsx)(n.h2, { id: 'tekstkleur-in-het-cms', children: 'Tekstkleur in het CMS' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige CMS\u2019en bieden de mogelijkheid om zelf tekstkleuren aan te passen. Gebruik die optie alleen als het echt nodig is. Kies dan voor een kleur met voldoende contrast ten opzichte van de achtergrond. Gebruik nooit kleur als enige manier om nadruk te geven.' }), '\n', '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'Vette tekst gebruiken om tekst nadruk te geven', children: (0, r.jsx)(o.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, r.jsx)('strong', { children: 'Pas op!' }), ' Dit is ', (0, r.jsx)('strong', { children: 'erg gevaarlijk' })] }) }) }), '\n', (0, r.jsx)(a.$, { appearance: 'dont', title: 'Kleur gebruiken om tekst nadruk te geven', children: (0, r.jsx)(o.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: ['Je kunt op eigen gelegenheid oversteken.', ' ', (0, r.jsx)('span', { style: { color: '#ce2c31' }, children: 'Pas op!' }), ' ', 'Dit is', ' ', (0, r.jsx)('span', { style: { color: '#ce2c31' }, children: 'erg gevaarlijk' })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'tekst-op-afbeeldingen', children: 'Tekst op afbeeldingen' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik geen complexe of drukke achtergrondafbeeldingen met tekst eroverheen. Is dat toch nodig? Controleer dan extra goed of de tekst nog leesbaar is.' }), '\n', (0, r.jsx)(a.$, { appearance: 'dont', title: 'Tekst over een complexe afbeelding of achtergrond plaatsen', children: (0, r.jsx)(o.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('div', { style: { background: "center center no-repeat url('https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg')" }, children: (0, r.jsx)('h2', { style: { padding: '50px', color: 'white' }, children: 'Kaarten van Nederland' }) }) }) }) }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'Kies een achtergrond die voldoende contrast biedt met de tekst', children: (0, r.jsx)(o.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('div', { style: { background: "center center no-repeat url('https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg')" }, children: (0, r.jsx)('h2', { style: { padding: '50px', color: 'white', backgroundColor: '#00000088' }, children: 'Kaarten van Nederland' }) }) }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'meer-over-kleurgebruik-in-grafieken', children: 'Meer over kleurgebruik in grafieken' }), '\n', (0, r.jsxs)(n.p, { children: ['Kleur speelt ook een belangrijke rol in grafieken en andere informatieve afbeeldingen. Hoe je die toegankelijk maakt, lees je in de ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/grafieken/', children: 'richtlijnen voor grafieken' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'De belangrijkste vuistregel bij gebruik van kleur:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Gebruik nooit alleen kleur om verschil te maken.', (0, r.jsx)(n.br, {}), '\n', 'Gebruik je kleur om iets te benadrukken, zoals belangrijke woorden of het verschil tussen een goed en fout antwoord? Maak belangrijke tekst bijvoorbeeld vet en zorg dat je ook een ander signaal (zoals een icoon met alternatieve tekst, of een tekst) toevoegt.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Zo beoordeel je het contrast:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Lees de tekst op een mobiel scherm in fel licht.', (0, r.jsx)(n.br, {}), '\n', 'Kun je alles nog goed lezen? Lichte tekst op een lichte achtergrond valt in zulke situaties vaak weg.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Gebruik een contrastchecker.', (0, r.jsx)(n.br, {}), '\n', 'Met een ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'contrastchecker' }), ' kun je exact bepalen of kleuren voldoende onderscheidend zijn ten opzichte van elkaar.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Controleer of tekst leesbaar is op afbeeldingen.', (0, r.jsx)(n.br, {}), '\n', 'Staat er tekst over een afbeelding of kleurvlak? Kijk dan of er genoeg contrast is, en of de tekst niet wegvalt.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.1/', children: '1.4.1 Gebruik van kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: '1.4.3 Contrast (minimum)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.11/', children: '1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] }), '\n', (0, r.jsx)(i.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => i, n: () => a });
   var l = t(13526),
    r = t(96345),
    s = t(37168),
    o = t(86070);
   const a = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: t, children: n.children });
    },
    i = ({ className: e, label: n, heading: t, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(r.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [t && (0, o.jsx)(s.D, { level: a, appearance: i, children: t }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => s });
   var l = t(86070),
    r = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => h, x: () => d });
   var l = t(4077),
    r = t(58315),
    s = t(46447),
    o = t(13526),
    a = t(45980),
    i = t(30758),
    c = t(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: n, description: t, children: i, figure: h }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      k = h ? 'figure' : 'div',
      g = h ? 'figcaption' : 'div',
      p = 'string' == typeof t ? (0, c.jsx)(a.oz, { children: t }) : t;
     return (0, c.jsxs)(k, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(s.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    r = t(16194),
    s = t(30758),
    o = t(88022);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: u } = (0, s.useContext)(o.x),
     k = (0, s.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: r, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: k, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': k, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
