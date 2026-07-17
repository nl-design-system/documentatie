'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12781],
 {
  9386(e, n, l) {
   l.d(n, { H: () => k });
   var t = l(95822),
    a = l(46447),
    i = l(13526),
    r = l(68148),
    o = l(9016),
    s = l(69303),
    c = l(91635),
    d = l(30734),
    g = l(30758),
    b = l(31186),
    h = l(65904),
    v = l.n(h),
    u = l(51627),
    p = l(86070);
   const m = ({ children: e }) => (0, p.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, p.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, p.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        t = (0, b.qV)(l)
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
        a = v().highlight(t, v().languages[n], n);
       return (0, p.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, p.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: t } }), (0, p.jsx)(u.n, { children: (0, p.jsx)(u.K, { label: 'Code', children: (0, p.jsx)('pre', { className: 'language-html nl-code-block', children: (0, p.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: v, container: u = 'document', language: k, designTokens: y }) => {
       const x = 'function' == typeof v ? v() : v,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : b.qV(_ || x),
        [z, N] = (0, g.useState)(w),
        [A, D] = (0, g.useState)(l);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: k, plugins: [r.A, o.Ay, s.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, g.useId)();
       let C = g.Fragment;
       return (
        'paragraph' === u ? (C = m) : 'document' === u ? (C = f) : 'surface' === u && (C = j),
        (0, p.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          x && (0, p.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, p.jsx)(C, { children: (0, p.jsx)(a.v$, { children: x }) }) }) }),
          h &&
           (0, p.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, p.jsx)(a.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              D(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, p.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, p.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: z, trim: !0 }),
             n &&
              (0, p.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, p.jsx)(a.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  51627(e, n, l) {
   l.d(n, { K: () => s, n: () => o });
   var t = l(13526),
    a = l(96345),
    i = l(37168),
    r = l(86070);
   const o = ({ className: e, ...n }) => {
     const l = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    s = ({ className: e, label: n, heading: l, headingLevel: o, headingApperance: s, ...c }) => {
     const d = (0, t.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(a.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(i.D, { level: o, appearance: s, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  57601(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => d, default: () => v, frontMatter: () => c, metadata: () => t, toc: () => b }));
   const t = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","title":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Decoratieve afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Decoratieve afbeeldingen","pagination_label":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","decoratieve afbeelding","decoratieve afbeeldingen","decoratief"]},"sidebar":"richtlijnen","previous":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"},"next":{"title":"Functionele afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen"}}');
   var a = l(86070),
    i = l(18439),
    r = l(9386),
    o = l(88022),
    s = l(78734);
   const c = { title: 'Decoratieve afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Decoratieve afbeeldingen', pagination_label: 'Decoratieve afbeeldingen', description: 'Decoratieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'decoratieve afbeelding', 'decoratieve afbeeldingen', 'decoratief'] },
    d = 'Decoratieve afbeeldingen',
    g = {},
    b = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Alternatieve teksten verbergen voor hulpsoftware', id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', level: 2 }, { value: 'Sfeerbeelden', id: 'sfeerbeelden', level: 2 }, { value: 'Decoratieve afbeeldingen beschrijven', id: 'decoratieve-afbeeldingen-beschrijven', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'decoratieve-afbeeldingen', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Sommige afbeeldingen op een pagina geven je bezoeker niet m\xe9\xe9r informatie dan de informatie die ook al in de tekst staat. Dit noemen we decoratieve afbeeldingen.' }), '\n', (0, a.jsx)(n.p, { children: 'Voorbeelden van decoratieve afbeeldingen zijn:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Afbeeldingen in de achtergrond van een website.' }), '\n', (0, a.jsx)(n.li, { children: 'Iconen naast een tekst met dezelfde informatie.' }), '\n', (0, a.jsx)(n.li, { children: 'Sfeerbeelden.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of een afbeelding decoratief is, hangt af van de context en het doel van de afbeelding. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven en heeft dan geen beschrijving nodig. In een artikel over verschillende koeienrassen geeft dezelfde afbeelding wel informatie en hoort er w\xe9l een alternatieve tekst bij.' }), '\n', (0, a.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, a.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een decoratieve afbeelding plaatst:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, a.jsx)(n.li, { children: 'Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?' }), '\n', (0, a.jsx)(n.li, { children: 'Als ik deze afbeelding ni\xe9t zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', children: 'Alternatieve teksten verbergen voor hulpsoftware' }), '\n', (0, a.jsxs)(n.p, { children: ['Gaat er geen informatie verloren? Dan heeft de afbeelding geen beschrijving nodig. Je kunt er dan voor kiezen om de afbeelding te verbergen voor hulpsoftware. Er is dan geen informatie meer beschikbaar over de afbeelding: niet w\xe1t er op de afbeelding staat, maar zelfs niet d\xe1t er een afbeelding staat. Bezoekers die gebruik maken van bijvoorbeeld een ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' hoeven dan niet onnodig naar de beschrijving te luisteren. Zorg er wel voor dat je echt zeker weet dat de afbeelding niet informatief is voordat je deze keuze maakt.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Informatieve afbeeldingen verbergen voor hulpsoftware door het alt-attribuut leeg te laten.', children: (0, a.jsx)(r.H, { language: 'html', defaultExpandedCode: !0, children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('img', { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg', alt: '' }) }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'sfeerbeelden', children: 'Sfeerbeelden' }), '\n', (0, a.jsx)(n.p, { children: 'Je plaatst sfeerbeelden voornamelijk omdat ze passen bij de organisatie waar je voor werkt. Ze passen bijvoorbeeld bij jullie kernwaarden of de service die jullie verlenen. Sommige bezoekers die gebruikmaken van hulpsoftware willen daarom juist wel een beschrijving krijgen van decoratieve sfeerbeelden. Je kunt er dus ook voor kiezen om deze afbeeldingen wel een alternatieve tekst te geven. In dat geval beschrijf je inhoudelijk wat er op de afbeelding te zien is.' }), '\n', (0, a.jsx)(n.h2, { id: 'decoratieve-afbeeldingen-beschrijven', children: 'Decoratieve afbeeldingen beschrijven' }), '\n', (0, a.jsx)(n.p, { children: 'Het helpt om je voor te stellen dat je de afbeelding beschrijft aan iemand die hem niet kan zien, bijvoorbeeld iemand aan de telefoon. Denk na over welke kenmerken van een afbeelding belangrijk zijn om te benoemen.' }), '\n', (0, a.jsx)(n.p, { children: 'Mogelijke kenmerken:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Het precieze aantal mensen, dieren of objecten in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De gezichtsuitdrukkingen van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'Het geslacht of gender van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De huidskleur van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De acties die de mensen in de afbeelding uitvoeren.' }), '\n', (0, a.jsx)(n.li, { children: "Wat er op de achtergrond te zien is en of het voor ziende bezoekers duidelijk is, of moet zijn, wat er te zien is. Benoem je 'de Eiffeltoren' of 'Een hoge metalen constructie die taps toeloopt, met een antenne er op.'?" }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of iets relevant is om te benoemen ligt aan de context: het doel van de pagina en bijvoorbeeld de kern- en merkwaarden van je organisatie.' }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(s.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => o, RM: () => i });
   var t = l(86070),
    a = l(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => g, x: () => d });
   var t = l(4077),
    a = l(58315),
    i = l(46447),
    r = l(13526),
    o = l(45980),
    s = l(30758),
    c = l(86070);
   const d = (0, s.createContext)({}),
    g = ({ title: e, appearance: n, description: l, children: s, figure: g }) => {
     const b = { do: 'Doen', dont: 'Niet doen' },
      h = g ? 'figure' : 'div',
      v = g ? 'figcaption' : 'div',
      u = 'string' == typeof l ? (0, c.jsx)(o.oz, { children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: b.dont })] }), (0, c.jsx)(i.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: b.do })] }), (0, c.jsx)(i.fz, { children: e })] }), u] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: b[n] }, children: s }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    a = l(16194),
    i = l(30758),
    r = l(88022);
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
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: g, type: b } = (0, i.useContext)(r.x),
     h = (0, i.useId)();
    return (c && (d = d.trim()), (0, s.jsx)(a.f4, { theme: o, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: a, getTokenProps: i }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, s.jsx)(t.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, s.jsxs)('span', { ...a({ line: n }), children: [e && (0, s.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
