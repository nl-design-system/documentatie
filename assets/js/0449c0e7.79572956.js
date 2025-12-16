'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84907],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => p });
   var l = t(16609),
    i = t(68873),
    a = t(13526),
    o = t(58713),
    r = t(87347),
    s = t(39644),
    d = t(92406),
    c = t(63313),
    g = t(30758),
    b = t(31186),
    v = t(86070);
   const h = ({ children: e }) => (0, v.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(i.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(i.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const u = ({ children: e }) => (0, v.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   u.displayName = 'SurfaceContainer';
   const p = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: m, container: j = 'document', language: k, designTokens: y }) => {
    const x = 'function' == typeof m ? m() : m,
     _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : b.qV(_ || x),
     [z, N] = (0, g.useState)(w),
     [A, D] = (0, g.useState)(t);
    (0, g.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: k, plugins: [o.A, r.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const C = (0, g.useId)();
    let S = g.Fragment;
    return (
     'paragraph' === j ? (S = h) : 'document' === j ? (S = f) : 'surface' === j && (S = u),
     (0, v.jsxs)('div', {
      className: (0, a.A)('nlds-canvas'),
      children: [
       x && (0, v.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, v.jsx)(S, { children: (0, v.jsx)(i.v$, { children: x }) }) }) }),
       p &&
        (0, v.jsx)('div', {
         className: (0, a.A)('nlds-canvas__toolbar'),
         children: (0, v.jsx)(i.$n, {
          className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!A);
          },
          'aria-expanded': A,
          'aria-controls': C,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       p &&
        (0, v.jsxs)('div', {
         className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !A,
         children: [
          (0, v.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: z, trim: !0 }),
          n &&
           (0, v.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, v.jsx)(i.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, t) => {
   t.d(n, { M: () => d });
   var l = t(68873),
    i = t(16194),
    a = t(30758),
    o = t(50124);
   const r = {
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
   var s = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: g, type: b } = (0, a.useContext)(o.x),
     v = (0, a.useId)();
    return d && (c = c.trim()), (0, s.jsx)(i.f4, { theme: r, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: i, getTokenProps: a }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, s.jsx)(l.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': v, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...i({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => d });
   var l = t(54736),
    i = t(26990),
    a = t(68873),
    o = t(13526),
    r = t(30758),
    s = t(86070);
   const d = (0, r.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: r, figure: c }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      b = c ? 'figure' : 'div',
      v = c ? 'figcaption' : 'div';
     return (0, s.jsxs)(b, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(a.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, s.jsx)(a.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(a.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, s.jsx)(a.fz, { children: e })] }), t] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: r }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => r, RM: () => a });
   var l = t(86070),
    i = t(85248);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => r });
   var l = t(30758);
   const i = {},
    a = l.createContext(i);
   function o(e) {
    const n = l.useContext(a);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), l.createElement(a.Provider, { value: n }, e.children);
   }
  },
  87819: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => c, default: () => h, frontMatter: () => d, metadata: () => l, toc: () => b });
   const l = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","title":"Decoratieve afbeeldingen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen","description":"Decoratieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.md","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.md","tags":[],"version":"current","frontMatter":{"title":"Decoratieve afbeeldingen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Decoratieve afbeeldingen","pagination_label":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","decoratieve afbeelding","decoratieve afbeeldingen","decoratief"]},"sidebar":"richtlijnen","previous":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"},"next":{"title":"Functionele afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen"}}');
   var i = t(86070),
    a = t(85248),
    o = t(8649),
    r = t(50124),
    s = t(78734);
   const d = { title: 'Decoratieve afbeeldingen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Decoratieve afbeeldingen', pagination_label: 'Decoratieve afbeeldingen', description: 'Decoratieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'decoratieve afbeelding', 'decoratieve afbeeldingen', 'decoratief'] },
    c = 'Decoratieve afbeeldingen',
    g = {},
    b = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Alternatieve teksten verbergen voor hulpsoftware', id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', level: 2 }, { value: 'Sfeerbeelden', id: 'sfeerbeelden', level: 2 }, { value: 'Decoratieve afbeeldingen beschrijven', id: 'decoratieve-afbeeldingen-beschrijven', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function v(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'decoratieve-afbeeldingen', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, i.jsx)(n.p, { children: 'Sommige afbeeldingen op een pagina geven je bezoeker niet m\xe9\xe9r informatie dan de informatie die ook al in de tekst staat. Dit noemen we decoratieve afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeelden van decoratieve afbeeldingen zijn:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Afbeeldingen in de achtergrond van een website.' }), '\n', (0, i.jsx)(n.li, { children: 'Iconen naast een tekst met dezelfde informatie.' }), '\n', (0, i.jsx)(n.li, { children: 'Sfeerbeelden.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Of een afbeelding decoratief is, hangt af van de context en het doel van de afbeelding. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven en heeft dan geen beschrijving nodig. In een artikel over verschillende koeienrassen geeft dezelfde afbeelding wel informatie en hoort er w\xe9l een alternatieve tekst bij.' }), '\n', (0, i.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, i.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een decoratieve afbeelding plaatst:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, i.jsx)(n.li, { children: 'Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?' }), '\n', (0, i.jsx)(n.li, { children: 'Als ik deze afbeelding ni\xe9t zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', children: 'Alternatieve teksten verbergen voor hulpsoftware' }), '\n', (0, i.jsxs)(n.p, { children: ['Gaat er geen informatie verloren? Dan heeft de afbeelding geen beschrijving nodig. Je kunt er dan voor kiezen om de afbeelding te verbergen voor hulpsoftware. Er is dan geen informatie meer beschikbaar over de afbeelding: niet w\xe1t er op de afbeelding staat, maar zelfs niet d\xe1t er een afbeelding staat. Bezoekers die gebruik maken van bijvoorbeeld een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' hoeven dan niet onnodig naar de beschrijving te luisteren. Zorg er wel voor dat je echt zeker weet dat de afbeelding niet informatief is voordat je deze keuze maakt.'] }), '\n', (0, i.jsx)(r.$, { appearance: 'dont', title: 'Informatieve afbeeldingen verbergen voor hulpsoftware door het alt-attribuut leeg te laten.', children: (0, i.jsx)(o.H, { language: 'html', defaultExpandedCode: !0, children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg', alt: '' }) }) }) }), '\n', (0, i.jsx)(n.h2, { id: 'sfeerbeelden', children: 'Sfeerbeelden' }), '\n', (0, i.jsx)(n.p, { children: 'Je plaatst sfeerbeelden voornamelijk omdat ze passen bij de organisatie waar je voor werkt. Ze passen bijvoorbeeld bij jullie kernwaarden of de service die jullie verlenen. Sommige bezoekers die gebruikmaken van hulpsoftware willen daarom juist wel een beschrijving krijgen van decoratieve sfeerbeelden. Je kunt er dus ook voor kiezen om deze afbeeldingen wel een alternatieve tekst te geven. In dat geval beschrijf je inhoudelijk wat er op de afbeelding te zien is.' }), '\n', (0, i.jsx)(n.h2, { id: 'decoratieve-afbeeldingen-beschrijven', children: 'Decoratieve afbeeldingen beschrijven' }), '\n', (0, i.jsx)(n.p, { children: 'Het helpt om je voor te stellen dat je de afbeelding beschrijft aan iemand die hem niet kan zien, bijvoorbeeld iemand aan de telefoon. Denk na over welke kenmerken van een afbeelding belangrijk zijn om te benoemen.' }), '\n', (0, i.jsx)(n.p, { children: 'Mogelijke kenmerken:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Het precieze aantal mensen, dieren of objecten in de afbeelding.' }), '\n', (0, i.jsx)(n.li, { children: 'De gezichtsuitdrukkingen van de mensen in de afbeelding.' }), '\n', (0, i.jsx)(n.li, { children: 'Het geslacht of gender van de mensen in de afbeelding.' }), '\n', (0, i.jsx)(n.li, { children: 'De huidskleur van de mensen in de afbeelding.' }), '\n', (0, i.jsx)(n.li, { children: 'De acties die de mensen in de afbeelding uitvoeren.' }), '\n', (0, i.jsx)(n.li, { children: "Wat er op de achtergrond te zien is en of het voor ziende bezoekers duidelijk is, of moet zijn, wat er te zien is. Benoem je 'de Eiffeltoren' of 'Een hoge metalen constructie die taps toeloopt, met een antenne er op.'?" }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Of iets relevant is om te benoemen ligt aan de context: het doel van de pagina en bijvoorbeeld de kern- en merkwaarden van je organisatie.' }), '\n', (0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, i.jsx)(s.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
 },
]);
