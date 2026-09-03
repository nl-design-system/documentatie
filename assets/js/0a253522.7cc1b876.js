'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45313],
 {
  15175(e, n, t) {
   t.d(n, { M: () => c });
   var s = t(46447),
    l = t(16194),
    o = t(30758),
    r = t(51519);
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
    const { title: p, type: h } = (0, o.useContext)(r.x),
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
   var s = t(30758);
   const l = {},
    o = s.createContext(l);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var s = t(86070),
    l = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, t) {
   t.d(n, { $: () => p, x: () => d });
   var s = t(4077),
    l = t(58315),
    o = t(46447),
    r = t(13526),
    a = t(66116),
    i = t(30758),
    c = t(86070);
   const d = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: t, children: i, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      g = p ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, c.jsx)(a.oz, { components: { a: o.N_ }, children: t }) : t;
     return (0, c.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  62862(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => m, metadata: () => s, toc: () => b }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/multistep/step-count/index","title":"Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt","description":"Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.","source":"@site/docs/richtlijnen/formulieren/multistep/1-step-count/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/1-step-count","slug":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/1-step-count/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt","title_sm":"Voortgang stappen tonen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Voortgang stappen tonen","pagination_label":"Voortgang stappen tonen","description":"Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.","slug":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"},"next":{"title":"Plaatsing voortgang stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang"}}');
   var l = t(86070),
    o = t(18439),
    r = t(49539),
    a = t(80731),
    i = t(51519);
   function c(e) {
    const n = { h2: 'h2', title: 'title', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Beschrijf in de titel in welke stap van welk formulier de gebruiker is. ', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, l.jsx)(a.H, { language: 'html', code: (0, l.jsx)(n.title, { children: 'Stap 2 van 3, uw gegevens - Gemeente voorbeeld' }), rawCode: '<title>Stap 2 van 3, uw gegevens - Gemeente voorbeeld</title>', defaultCollapsed: !1 }) }), '\n', (0, l.jsx)(i.$, { appearance: 'dont', title: 'Voor elke (volgende) stap / dezelfde titel.', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, l.jsx)(a.H, { language: 'html', code: (0, l.jsx)(n.title, { children: 'Contact opnemen - Gemeente voorbeeld' }), rawCode: '<title>Contact opnemen - Gemeente voorbeeld</title>', defaultCollapsed: !1 }) }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Stap in het kopje van het formulier.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)('h2', { children: 'Stap 2 van 3, uw gegevens' }) }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('h2', { children: 'Uw gegevens' }), (0, l.jsx)('p', { children: 'Stap 2 van 3' })] }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', description: 'Gebruik hgroup om het kopje en de stappen semantisch aan elkaar te koppelen.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('hgroup', { children: [(0, l.jsx)('h2', { children: 'Uw gegevens' }), (0, l.jsx)('p', { children: 'Stap 2 van 3' })] }) }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje.', description: 'En deze visueel op een andere regel plaatsen.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('h2', { children: [(0, l.jsx)('span', { class: 'exmaple-progress-indicator', children: 'Stap 2 van 3' }), 'Titel van de stap'] }) }) }) }), '\n', (0, l.jsx)(i.$, { appearance: 'dont', title: 'In de HTML-code de stap boven het kopje van het formulier plaatsen.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: 'Stap 2 van 3' }), (0, l.jsx)('h2', { children: 'Uw gegevens' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }) }), '\n', (0, l.jsx)(n.p, { children: 'Als een formulier meerdere stappen heeft, is het in veel gevallen wenselijk dat een gebruiker weet in welke stap zij zich bevindt en hoeveel stappen er nog volgen. Dit kan duidelijkheid geven en onzekerheid bij de gebruiker verminderen, met name wanneer uit onderzoek blijkt dat hier behoefte aan is.' }), '\n', (0, l.jsxs)(n.p, { children: ['Een goed patroon in tekst hiervoor is bijvoorbeeld de tekst: ', (0, l.jsx)(n.strong, { children: 'Stap 2 van 6' }), ' of ', (0, l.jsx)(n.strong, { children: 'Vraag 2 van 6' }), '.'] }), '\n', (0, l.jsx)(n.p, { children: 'Voeg deze informatie toe op twee plekken:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['In de ', (0, l.jsx)(n.code, { children: '<title>' }), ' in de ', (0, l.jsx)(n.code, { children: '<head>' }), ' van de pagina.'] }), '\n', (0, l.jsx)(n.li, { children: 'Boven het formulier, bijvoorbeeld in het kopje van het formulier of vlak onder het kopje van het formulier.' }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: ['Aanpassen van de ', (0, l.jsx)(n.code, { children: '<title>' }), ' in de ', (0, l.jsx)(n.code, { children: '<head>' }), ' geldt voor WCAG ook voor dynamisch gegenereerde formulieren en dus ook voor de verschillende stappen. Wanneer de gebruiker technisch gezien op dezelfde pagina blijft, en je met script de volgende formulierstap in beeld brengt, dan moet de paginatitel aangepast worden zodat die klopt bij de stap. Je kunt met script de titel aanpassen:'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-js', children: 'document.title = "Stap 3 van 6: Adresgegevens";\n' }) }), '\n', (0, l.jsx)(n.p, { children: 'De stappen kort uitschrijven als tekst heeft de voorkeur boven een visuele weergave zoals in een progressbar. Tekst schaalt beter mee bij vergroting of op mobiele weergave. Bovendien is het sneller te lezen en wordt het beter gevonden.' }), '\n', (0, l.jsxs)(n.p, { children: ['Lees hierover ', (0, l.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators', children: (0, l.jsx)('span', { lang: 'en', children: 'Using progress indicators' }) }), ' en ', (0, l.jsx)(n.a, { href: 'https://designnotes.blog.gov.uk/2014/07/07/do-less-problems-as-shared-spaces/', children: (0, l.jsx)('span', { lang: 'en', children: 'Do less' }) }), ' op GOV.UK.'] }), '\n', (0, l.jsx)(n.p, { children: "Op dit moment hebben we nog onvoldoende inzichten 'of', danwel 'hoe' dit patroon het best werkt bij formulieren waarbij het aantal stappen afhankelijk is van eerder gegeven antwoorden of gemaakte keuzes. Dit noemen we ook wel 'conditionele stappen'. We leren hier graag meer over op basis van gebruikersonderzoek en praktijkervaringen." }), '\n', (0, l.jsxs)(n.p, { children: ['Heb je inzichten of voorbeelden? Deel ze via de ', (0, l.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/369', children: "GitHub Discussion 'Voortgang indicatie - Meerstappenformulier'" }), ' of op [gebruikersonderzoeken.nl].'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Succescriterium 2.4.2 Paginatitel' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   const m = { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt', title_sm: 'Voortgang stappen tonen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(g, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x();
   }
  },
  70348(e, n, t) {
   t.d(n, { K: () => c, n: () => i });
   var s = t(13526),
    l = t(30758),
    o = t(96345),
    r = t(37168),
    a = t(86070);
   const i = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, o) => {
     const r = e || 'div',
      i = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: o, className: i, ...l, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: i, headingApperance: c, ...d }) => {
     const p = (0, s.A)('utrecht-accordion__section', e),
      h = (0, s.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: p, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(o.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [l && (0, a.jsx)(r.D, { level: i, appearance: c, children: l }), t] })] }) }), (0, a.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, t) {
   t.d(n, { H: () => f });
   var s = t(15175),
    l = t(46447),
    o = t(13526),
    r = t(68148),
    a = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    p = t(30758),
    h = t(31186),
    u = t(65904),
    g = t.n(u),
    m = t(70348),
    v = t(89974),
    j = t(86070);
   const b = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: s, copyCode: l, defaultExpandedCode: r, designTokens: a }) => {
       const i = 'string' == typeof t ? t : s || '',
        c = 'string' == typeof t ? g().highlight(t, g().languages[e], e) : g().highlight(s || '', g().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, j.jsx)(m.n, { children: (0, j.jsxs)(m.K, { label: 'Code', open: r, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === l && (0, j.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: g, container: m = 'document', language: v, designTokens: f }) => {
       const k = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || k),
        [z, N] = (0, p.useState)(w),
        [A, C] = (0, p.useState)(t);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let M = p.Fragment;
       return (
        'paragraph' === m ? (M = b) : 'document' === m ? (M = x) : 'surface' === m && (M = y),
        (0, j.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          k && (0, j.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(M, { children: (0, j.jsx)(l.v$, { children: k }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: z, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(l.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, t) {
   t.d(n, { $: () => s.$n });
   var s = t(50805);
  },
 },
]);
