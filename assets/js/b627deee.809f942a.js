'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12781],
 {
  14881(e, n, l) {
   l.d(n, { K: () => c, n: () => d });
   var t = l(13526),
    a = l(30758),
    i = l(30662),
    r = l(32065),
    o = l(37168),
    s = l(86070);
   const d = (0, a.forwardRef)(({ as: e, className: n, children: l, ...a }, i) => {
     const r = e || 'div',
      o = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, s.jsx)(r, { ref: i, className: o, ...a, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: a, headingLevel: d, headingApperance: c, ...g }) => {
     const h = (0, t.A)('utrecht-accordion__section', e),
      b = (0, t.A)('utrecht-accordion__panel', n);
     return (0, s.jsxs)('details', { className: h, ...g, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(r.I, { children: (0, s.jsx)(i.rI, {}) }) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [a && (0, s.jsx)(o.D, { level: d, appearance: c, children: a }), l] })] }) }), (0, s.jsx)('div', { className: b, children: g.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => o });
   var t = l(30758);
   const a = {},
    i = t.createContext(a);
   function r(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => d });
   var t = l(46447),
    a = l(16194),
    i = l(30758),
    r = l(56528);
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
   var s = l(86070);
   function d({ lineNumber: e, syntax: n, textContent: l, trim: d }) {
    let c = l;
    const { title: g, type: h } = (0, i.useContext)(r.x),
     b = (0, i.useId)();
    return (d && (c = c.trim()), (0, s.jsx)(a.f4, { theme: o, code: c, language: n || '', children: ({ style: n, tokens: l, getLineProps: a, getTokenProps: i }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, s.jsx)(t.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': b, style: n, children: l.map((n, l) => (0, s.jsxs)('span', { ...a({ line: n }), children: [e && (0, s.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => P, GP: () => w, KC: () => $, Nd: () => _, Rt: () => C, Vj: () => A, Wk: () => H, bz: () => z, cB: () => D, e5: () => W, hY: () => T, jK: () => I, jP: () => L, ob: () => E, rI: () => N, t4: () => M, vP: () => S, vg: () => F });
   var t = l(92081),
    a = l(90578),
    i = l(96345),
    r = l(64249),
    o = l(4603),
    s = l(91525),
    d = l(23436),
    c = l(1375),
    g = l(4077),
    h = l(58315),
    b = l(73563),
    v = l(35193),
    m = l(82999),
    u = l(13088),
    j = l(43864),
    f = l(24214),
    p = l(79532),
    x = l(60529),
    y = l(86070);
   const k = { width: '1em', height: '1em' },
    _ = () => (0, y.jsx)(t.A, { ...k }),
    w = () => (0, y.jsx)(a.A, { ...k }),
    N = () => (0, y.jsx)(i.A, { ...k }),
    A = () => (0, y.jsx)(r.A, { ...k }),
    z = () => (0, y.jsx)(o.A, { ...k }),
    C = () => (0, y.jsx)(s.A, { ...k }),
    D = () => (0, y.jsx)(d.A, { ...k }),
    S = () => (0, y.jsx)(c.A, { ...k }),
    I = () => (0, y.jsx)(g.A, { ...k }),
    L = () => (0, y.jsx)(h.A, { ...k }),
    M = () => (0, y.jsx)(b.A, { ...k }),
    P = () => (0, y.jsx)(v.A, { ...k }),
    T = () => (0, y.jsx)(m.A, { ...k }),
    $ = () => (0, y.jsx)(u.A, { ...k }),
    H = () => (0, y.jsx)(j.A, { ...k }),
    W = () => (0, y.jsx)(f.A, { ...k }),
    E = () => (0, y.jsx)(p.A, { ...k }),
    F = () => (0, y.jsx)(x.A, { ...k });
  },
  32065(e, n, l) {
   l.d(n, { I: () => t.In });
   var t = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => t.$n });
   var t = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => c, x: () => d });
   var t = l(30662),
    a = l(46447),
    i = l(13526),
    r = l(45795),
    o = l(30758),
    s = l(86070);
   const d = (0, o.createContext)({}),
    c = ({ title: e, appearance: n, description: l, children: o, figure: c = !0 }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      b = c ? 'figcaption' : 'div',
      v = 'string' == typeof l ? (0, s.jsx)(r.oz, { components: { a: a.N_ }, children: l }) : l;
     return (0, s.jsxs)(h, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(a.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, s.jsx)(t.jP, {}) }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, s.jsx)(a.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(a.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, s.jsx)(t.jK, {}) }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, s.jsx)(a.fz, { children: e })] }), v] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: o }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => o, RM: () => i });
   var t = l(86070),
    a = l(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  68214(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => c, default: () => v, frontMatter: () => d, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","title":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Decoratieve afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Decoratieve afbeeldingen","pagination_label":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","decoratieve afbeelding","decoratieve afbeeldingen","decoratief"]},"sidebar":"richtlijnen","previous":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"},"next":{"title":"Functionele afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen"}}');
   var a = l(86070),
    i = l(18439),
    r = l(87682),
    o = l(56528),
    s = l(56672);
   const d = { title: 'Decoratieve afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Decoratieve afbeeldingen', pagination_label: 'Decoratieve afbeeldingen', description: 'Decoratieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'decoratieve afbeelding', 'decoratieve afbeeldingen', 'decoratief'] },
    c = 'Decoratieve afbeeldingen',
    g = {},
    h = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Alternatieve teksten verbergen voor hulpsoftware', id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', level: 2 }, { value: 'Sfeerbeelden', id: 'sfeerbeelden', level: 2 }, { value: 'Decoratieve afbeeldingen beschrijven', id: 'decoratieve-afbeeldingen-beschrijven', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function b(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'decoratieve-afbeeldingen', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Sommige afbeeldingen op een pagina geven je bezoeker niet m\xe9\xe9r informatie dan de informatie die ook al in de tekst staat. Dit noemen we decoratieve afbeeldingen.' }), '\n', (0, a.jsx)(n.p, { children: 'Voorbeelden van decoratieve afbeeldingen zijn:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Afbeeldingen in de achtergrond van een website.' }), '\n', (0, a.jsx)(n.li, { children: 'Iconen naast een tekst met dezelfde informatie.' }), '\n', (0, a.jsx)(n.li, { children: 'Sfeerbeelden.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of een afbeelding decoratief is, hangt af van de context en het doel van de afbeelding. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven en heeft dan geen beschrijving nodig. In een artikel over verschillende koeienrassen geeft dezelfde afbeelding wel informatie en hoort er w\xe9l een alternatieve tekst bij.' }), '\n', (0, a.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, a.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een decoratieve afbeelding plaatst:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, a.jsx)(n.li, { children: 'Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?' }), '\n', (0, a.jsx)(n.li, { children: 'Als ik deze afbeelding ni\xe9t zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', children: 'Alternatieve teksten verbergen voor hulpsoftware' }), '\n', (0, a.jsxs)(n.p, { children: ['Gaat er geen informatie verloren? Dan heeft de afbeelding geen beschrijving nodig. Je kunt er dan voor kiezen om de afbeelding te verbergen voor hulpsoftware. Er is dan geen informatie meer beschikbaar over de afbeelding: niet w\xe1t er op de afbeelding staat, maar zelfs niet d\xe1t er een afbeelding staat. Bezoekers die gebruik maken van bijvoorbeeld een ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' hoeven dan niet onnodig naar de beschrijving te luisteren. Zorg er wel voor dat je echt zeker weet dat de afbeelding niet informatief is voordat je deze keuze maakt.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Informatieve afbeeldingen verbergen voor hulpsoftware door het alt-attribuut leeg te laten.', children: (0, a.jsx)(r.H, { language: 'html', defaultExpandedCode: !0, children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('img', { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg', alt: '' }) }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'sfeerbeelden', children: 'Sfeerbeelden' }), '\n', (0, a.jsx)(n.p, { children: 'Je plaatst sfeerbeelden voornamelijk omdat ze passen bij de organisatie waar je voor werkt. Ze passen bijvoorbeeld bij jullie kernwaarden of de service die jullie verlenen. Sommige bezoekers die gebruikmaken van hulpsoftware willen daarom juist wel een beschrijving krijgen van decoratieve sfeerbeelden. Je kunt er dus ook voor kiezen om deze afbeeldingen wel een alternatieve tekst te geven. In dat geval beschrijf je inhoudelijk wat er op de afbeelding te zien is.' }), '\n', (0, a.jsx)(n.h2, { id: 'decoratieve-afbeeldingen-beschrijven', children: 'Decoratieve afbeeldingen beschrijven' }), '\n', (0, a.jsx)(n.p, { children: 'Het helpt om je voor te stellen dat je de afbeelding beschrijft aan iemand die hem niet kan zien, bijvoorbeeld iemand aan de telefoon. Denk na over welke kenmerken van een afbeelding belangrijk zijn om te benoemen.' }), '\n', (0, a.jsx)(n.p, { children: 'Mogelijke kenmerken:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Het precieze aantal mensen, dieren of objecten in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De gezichtsuitdrukkingen van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'Het geslacht of gender van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De huidskleur van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De acties die de mensen in de afbeelding uitvoeren.' }), '\n', (0, a.jsx)(n.li, { children: "Wat er op de achtergrond te zien is en of het voor ziende bezoekers duidelijk is, of moet zijn, wat er te zien is. Benoem je 'de Eiffeltoren' of 'Een hoge metalen constructie die taps toeloopt, met een antenne er op.'?" }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of iets relevant is om te benoemen ligt aan de context: het doel van de pagina en bijvoorbeeld de kern- en merkwaarden van je organisatie.' }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(s.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(b, { ...e }) }) : b(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var t = l(28369),
    a = l(46447),
    i = l(13526),
    r = l(68148),
    o = l(9016),
    s = l(69303),
    d = l(91635),
    c = l(30734),
    g = l(30758),
    h = l(31186),
    b = l(65904),
    v = l.n(b),
    m = l(14881),
    u = l(46847),
    j = l(86070);
   const f = ({ label: e, labelId: n, className: l, colorScheme: t, forcedColorsAdjust: a = !1, children: r, dangerouslySetInnerHTML: o, ...s }) => (0, j.jsxs)('figure', { className: (0, i.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...s, children: [e && (0, j.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, j.jsx)('div', { className: (0, i.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === t, 'ma-html-image__body--color-scheme-light': 'light' === t, 'ma-html-image__body--forced-colors-adjust': a }), inert: 'true', dangerouslySetInnerHTML: o, 'aria-hidden': 'true', children: r })] });
   var p = l(68197);
   const x = ({ children: e }) => (0, j.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, j.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: t, copyCode: a, colorScheme: r, defaultExpandedCode: o, designTokens: s, forcedColorsAdjust: d = !0, label: c }) => {
       const h = 'string' == typeof l ? l : t || '',
        b = 'string' == typeof l ? v().highlight(l, v().languages[e], e) : v().highlight(t || '', v().languages[e], e),
        x = (0, j.jsx)(p.b, { Component: 'div', className: (0, i.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: s, dangerouslySetInnerHTML: { __html: h } });
       return (0, j.jsxs)('div', { className: (0, i.A)('ma-canvas-astro', n), children: [c ? (0, j.jsx)(f, { forcedColorsAdjust: d, label: c, labelId: c ? (0, g.useId)() : void 0, children: x }) : x, (0, j.jsx)(m.n, { children: (0, j.jsxs)(m.K, { label: 'Code', open: o, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: b } }) }), 'allow' === a && (0, j.jsx)(u.$, { 'data-copy-code': h, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: b = !0, children: v, container: m = 'document', language: u, designTokens: f }) => {
       const p = 'function' == typeof v ? v() : v,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || p),
        [N, A] = (0, g.useState)(w),
        [z, C] = (0, g.useState)(l);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(w, { parser: u, plugins: [r.A, o.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const D = (0, g.useId)();
       let S = g.Fragment;
       return (
        'paragraph' === m ? (S = x) : 'document' === m ? (S = y) : 'surface' === m && (S = k),
        (0, j.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          p && (0, j.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(S, { children: (0, j.jsx)(a.v$, { children: p }) }) }) }),
          b &&
           (0, j.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(a.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': D,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          b &&
           (0, j.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: D,
            hidden: !z,
            children: [
             (0, j.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: u, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(a.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
 },
]);
