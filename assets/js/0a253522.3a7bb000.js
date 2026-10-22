'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45313],
 {
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => c });
   var s = t(13526),
    l = t(30758),
    o = t(30662),
    r = t(32065),
    a = t(37168),
    i = t(86070);
   const c = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, o) => {
     const r = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: o, className: a, ...l, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: c, headingApperance: d, ...p }) => {
     const h = (0, s.A)('utrecht-accordion__section', e),
      g = (0, s.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: h, ...p, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [l && (0, i.jsx)(a.D, { level: c, appearance: d, children: l }), t] })] }) }), (0, i.jsx)('div', { className: g, children: p.children })] });
    };
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
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var s = t(46447),
    l = t(16194),
    o = t(30758),
    r = t(56528);
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
     g = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': g, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => $, GP: () => w, KC: () => R, Nd: () => _, Rt: () => C, Vj: () => N, Wk: () => T, bz: () => z, cB: () => S, e5: () => V, hY: () => L, jK: () => M, jP: () => H, ob: () => D, rI: () => A, t4: () => G, vP: () => I, vg: () => F });
   var s = t(92081),
    l = t(90578),
    o = t(96345),
    r = t(64249),
    a = t(4603),
    i = t(91525),
    c = t(23436),
    d = t(1375),
    p = t(4077),
    h = t(58315),
    g = t(73563),
    m = t(35193),
    u = t(82999),
    j = t(13088),
    v = t(43864),
    x = t(24214),
    b = t(79532),
    y = t(60529),
    f = t(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(s.A, { ...k }),
    w = () => (0, f.jsx)(l.A, { ...k }),
    A = () => (0, f.jsx)(o.A, { ...k }),
    N = () => (0, f.jsx)(r.A, { ...k }),
    z = () => (0, f.jsx)(a.A, { ...k }),
    C = () => (0, f.jsx)(i.A, { ...k }),
    S = () => (0, f.jsx)(c.A, { ...k }),
    I = () => (0, f.jsx)(d.A, { ...k }),
    M = () => (0, f.jsx)(p.A, { ...k }),
    H = () => (0, f.jsx)(h.A, { ...k }),
    G = () => (0, f.jsx)(g.A, { ...k }),
    $ = () => (0, f.jsx)(m.A, { ...k }),
    L = () => (0, f.jsx)(u.A, { ...k }),
    R = () => (0, f.jsx)(j.A, { ...k }),
    T = () => (0, f.jsx)(v.A, { ...k }),
    V = () => (0, f.jsx)(x.A, { ...k }),
    D = () => (0, f.jsx)(b.A, { ...k }),
    F = () => (0, f.jsx)(y.A, { ...k });
  },
  32065(e, n, t) {
   t.d(n, { I: () => s.In });
   var s = t(29181);
  },
  46847(e, n, t) {
   t.d(n, { $: () => s.$n });
   var s = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var s = t(30662),
    l = t(46447),
    o = t(13526),
    r = t(45795),
    a = t(30758),
    i = t(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: a, figure: d = !0 }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      g = d ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, i.jsx)(r.oz, { components: { a: l.N_ }, children: t }) : t;
     return (0, i.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(l.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(l.fz, { children: e })] }), m] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var s = t(86070),
    l = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  59444(e, n, t) {
   (t.r(n), t.d(n, { assets: () => v, contentTitle: () => j, default: () => y, frontMatter: () => u, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/multistep/step-count/index","title":"Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt","description":"Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.","source":"@site/docs/richtlijnen/formulieren/multistep/1-step-count/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/1-step-count","slug":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/1-step-count/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt","title_sm":"Voortgang stappen tonen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Voortgang stappen tonen","pagination_label":"Voortgang stappen tonen","description":"Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.","slug":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"},"next":{"title":"Plaatsing voortgang stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang"}}');
   var l = t(86070),
    o = t(18439),
    r = t(56672),
    a = t(87682),
    i = t(56528);
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
   function g(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Succescriterium 2.4.2 Paginatitel' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g(e);
   }
   const u = { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt', title_sm: 'Voortgang stappen tonen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b();
   }
  },
  87682(e, n, t) {
   t.d(n, { H: () => _ });
   var s = t(28369),
    l = t(46447),
    o = t(13526),
    r = t(68148),
    a = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    p = t(30758),
    h = t(31186),
    g = t(65904),
    m = t.n(g),
    u = t(14881),
    j = t(46847),
    v = t(86070);
   const x = ({ label: e, labelId: n, className: t, colorScheme: s, forcedColorsAdjust: l = !1, children: r, dangerouslySetInnerHTML: a, ...i }) => (0, v.jsxs)('figure', { className: (0, o.A)('ma-html-image', t), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': l }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var b = t(68197);
   const y = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: s, copyCode: l, colorScheme: r, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const h = 'string' == typeof t ? t : s || '',
        g = 'string' == typeof t ? m().highlight(t, m().languages[e], e) : m().highlight(s || '', m().languages[e], e),
        y = (0, v.jsx)(b.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: i, dangerouslySetInnerHTML: { __html: h } });
       return (0, v.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(x, { forcedColorsAdjust: c, label: d, labelId: d ? (0, p.useId)() : void 0, children: y }) : y, (0, v.jsx)(u.n, { children: (0, v.jsxs)(u.K, { label: 'Code', open: a, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: g } }) }), 'allow' === l && (0, v.jsx)(j.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: g = !0, children: m, container: u = 'document', language: j, designTokens: x }) => {
       const b = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || b),
        [A, N] = (0, p.useState)(w),
        [z, C] = (0, p.useState)(t);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: j, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let I = p.Fragment;
       return (
        'paragraph' === u ? (I = y) : 'document' === u ? (I = f) : 'surface' === u && (I = k),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          b && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, v.jsx)(I, { children: (0, v.jsx)(l.v$, { children: b }) }) }) }),
          g &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(l.$n, {
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
          g &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(l.$n, {
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
 },
]);
