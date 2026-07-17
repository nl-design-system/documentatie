'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95356],
 {
  9386(e, n, t) {
   t.d(n, { H: () => f });
   var a = t(95822),
    l = t(46447),
    i = t(13526),
    s = t(68148),
    r = t(9016),
    o = t(69303),
    d = t(91635),
    c = t(30734),
    h = t(30758),
    g = t(31186),
    u = t(65904),
    v = t.n(u),
    b = t(51627),
    p = t(86070);
   const m = ({ children: e }) => (0, p.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, p.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, p.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        a = (0, g.qV)(t)
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
        l = v().highlight(a, v().languages[n], n);
       return (0, p.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, p.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }), (0, p.jsx)(b.n, { children: (0, p.jsx)(b.K, { label: 'Code', children: (0, p.jsx)('pre', { className: 'language-html nl-code-block', children: (0, p.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: l } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: v, container: b = 'document', language: f, designTokens: y }) => {
       const x = 'function' == typeof v ? v() : v,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        z = 'string' == typeof e ? e : g.qV(_ || x),
        [w, N] = (0, h.useState)(z),
        [A, S] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(z, { parser: f, plugins: [s.A, r.Ay, o.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [z]);
       const C = (0, h.useId)();
       let D = h.Fragment;
       return (
        'paragraph' === b ? (D = m) : 'document' === b ? (D = j) : 'surface' === b && (D = k),
        (0, p.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          x && (0, p.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, p.jsx)(D, { children: (0, p.jsx)(l.v$, { children: x }) }) }) }),
          u &&
           (0, p.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, p.jsx)(l.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!A);
             },
             'aria-expanded': A,
             'aria-controls': C,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, p.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !A,
            children: [
             (0, p.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: w, trim: !0 }),
             n &&
              (0, p.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, p.jsx)(l.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   t.d(n, { R: () => s, x: () => r });
   var a = t(30758);
   const l = {},
    i = a.createContext(l);
   function s(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), a.createElement(i.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => o, n: () => r });
   var a = t(13526),
    l = t(96345),
    i = t(37168),
    s = t(86070);
   const r = ({ className: e, ...n }) => {
     const t = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: t, children: n.children });
    },
    o = ({ className: e, label: n, heading: t, headingLevel: r, headingApperance: o, ...d }) => {
     const c = (0, a.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: c, ...d, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(l.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [t && (0, s.jsx)(i.D, { level: r, appearance: o, children: t }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: d.children })] });
    };
  },
  68247(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => c, default: () => v, frontMatter: () => d, metadata: () => a, toc: () => g }));
   const a = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/alt-plaats","title":"Waar moet een alternatieve tekst staan?","description":"Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/alt-plaats.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/alt-plaats","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/alt-plaats.mdx","tags":[],"version":"current","frontMatter":{"title":"Waar moet een alternatieve tekst staan?","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Waar moet een alternatieve tekst staan?","pagination_label":"Waar moet een alternatieve tekst staan?","description":"Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/alt-plaats","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","caption","accordion"]},"sidebar":"richtlijnen","previous":{"title":"Algemene richtlijnen","permalink":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen"},"next":{"title":"Decoratieve afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen"}}');
   var l = t(86070),
    i = t(18439),
    s = t(9386),
    r = t(88022),
    o = t(78734);
   const d = { title: 'Waar moet een alternatieve tekst staan?', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waar moet een alternatieve tekst staan?', pagination_label: 'Waar moet een alternatieve tekst staan?', description: 'Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/alt-plaats', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'caption', 'accordion'] },
    c = 'Waar moet een alternatieve tekst staan?',
    h = {},
    g = [{ value: 'Het alt-attribuut van een afbeelding', id: 'het-alt-attribuut-van-een-afbeelding', level: 2 }, { value: 'Onderschrift (caption)', id: 'onderschrift-caption', level: 2 }, { value: 'Een tekst in de buurt van de afbeelding', id: 'een-tekst-in-de-buurt-van-de-afbeelding', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'waar-moet-een-alternatieve-tekst-staan', children: 'Waar moet een alternatieve tekst staan?' }) }), '\n', (0, l.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om op verschillende manieren tekstalternatieven toe te voegen." }), '\n', (0, l.jsx)(n.h2, { id: 'het-alt-attribuut-van-een-afbeelding', children: 'Het alt-attribuut van een afbeelding' }), '\n', (0, l.jsxs)(n.p, { children: ['Bij het invoegen van een afbeelding in je content krijg je meestal de optie om een alternatieve tekst in te vullen. Die wordt dan geplaatst als alt-attribuut bij de afbeelding (in het img -element). Dit is ook de tekst die bezoekers te zien krijgen als de afbeelding niet geladen wordt. Deze tekst is verder niet zichtbaar en zit in de code gekoppeld aan je afbeelding. Daardoor wordt deze tekst bijvoorbeeld door een ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' voorgelezen.'] }), '\n', (0, l.jsx)(n.p, { children: "Als je een decoratieve afbeelding hebt die je g\xe9\xe9n alternatieve tekst wilt geven, bieden de meeste CMS'en daar ook een optie voor. Dan staat er bijvoorbeeld onder of boven het veld waar je de alternatieve tekst kunt invoeren: 'of laat leeg om als decoratief te markeren'. Soms is het is een optie die je aan kunt vinken." }), '\n', (0, l.jsx)(n.p, { children: 'Soms kun je naast de alternatieve tekst ook een titel (title) invoeren. Dit is de tekst die verschijnt als je met je muis over de afbeelding beweegt. Deze titel wordt niet altijd voorgelezen door screenreaders. Daarom is het niet voldoende om hier je alternatieve tekst te plaatsen. Als je zowel de titel als het alt-attribuut invult, kan een screenreader beide teksten voorlezen, wat storend is voor bezoekers. Laat de titel daarom bij voorkeur leeg.' }), '\n', (0, l.jsx)(n.p, { children: 'Vraag om deze functionaliteit bij de beheerder of leverancier van je website als je deze optie niet hebt.' }), '\n', (0, l.jsx)(n.h2, { id: 'onderschrift-caption', children: 'Onderschrift (caption)' }), '\n', (0, l.jsx)(n.p, { children: 'Een andere mogelijkheid die een CMS kan hebben, is het toevoegen van een onderschrift. Dit kan een goede plek zijn om een wat uitgebreidere beschrijving te geven. Als je van deze optie gebruik wilt maken, voeg je altijd eerst een korte beschrijving in het alt-attribuut toe. Uitgebreidere informatie plaats je daarna in het onderschrift. Het voordeel van een onderschrift is dat het voor iedereen zichtbaar is, niet alleen voor mensen die hulpsoftware gebruiken.' }), '\n', (0, l.jsx)(r.$, { appearance: 'do', title: 'Een onderschrift gebruiken voor een langere beschrijving', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('figure', { children: [(0, l.jsx)('img', { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Amersfoortse-Dierentuin.jpg', alt: 'Twee mensen op een terras.' }), (0, l.jsx)('figcaption', { children: '1963 - Op het terras van het caf\xe9 van de Amersfoortse dierentuin krijgen twee bezoekers een kopje koffie geserveerd. Dat is in eerste instantie niet heel bijzonder, maar het feit dat zij allebei een Afrikaans jachtluipaard aan hun voeten hebben liggen waarvan zij zelf de riem vasthouden wel!' })] }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'een-tekst-in-de-buurt-van-de-afbeelding', children: 'Een tekst in de buurt van de afbeelding' }), '\n', (0, l.jsx)(n.p, { children: 'Soms biedt een alt-attribuut of een onderschrift niet voldoende ruimte voor een complete beschrijving van een afbeelding. In dat geval kun je in de beschrijving in het alt-attribuut een korte beschrijving toevoegen en daarin de plek op de pagina beschrijven waar een uitgebreidere beschrijving staat.' }), '\n', (0, l.jsx)(n.p, { children: 'Dit is handig bij bijvoorbeeld uitgebreide grafieken waarin veel informatie is opgenomen. Of bij een infographic.' }), '\n', (0, l.jsx)(n.p, { children: 'Een voorbeeld van de tekst in het alt-attribuut kan dan zijn:' }), '\n', (0, l.jsx)(n.p, { children: 'alt="Infographic migratie Nederland, zie voor een uitgebreide beschrijving de tekst direct onder deze afbeelding"' }), '\n', (0, l.jsx)(n.p, { children: 'Onder de afbeelding plaats je vervolgens een tekst met daarin de informatie uit de infographic. Vergeet niet een kopje toe te voegen boven deze tekst, zodat gebruikers van hulpsoftware de tekst snel kunnen vinden. Als jouw CMS de optie biedt, kun je ervoor kiezen de tekst in een Accordion (uitklapper) te plaatsen. Bezoekers die de tekst willen lezen kunnen daar dan zelf voor kiezen en bezoekers die de tekst niet willen lezen kunnen de tekst overslaan.' }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: 'Stel jezelf, bij elke afbeelding die je hebt geplaatst, de volgende vragen:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['Heb je de alt-tekst ingevuld op de juiste plek in het CMS? \xd2f bewust leeg gelaten omdat het een ', (0, l.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'decoratieve afbeelding' }), ' is?'] }), '\n', (0, l.jsx)(n.li, { children: 'Gebruik je ook een bijschrift? Vertelt het bijschrift dan iets extra\u2019s, is het geen herhaling van de alt-tekst?' }), '\n', (0, l.jsx)(n.li, { children: 'Bevat de afbeelding complexe informatie, zoals een grafiek of schema? Is extra uitleg toegevoegd in de omliggende tekst of onder de afbeelding?' }), '\n', (0, l.jsx)(n.li, { children: 'Heb je in de alt-tekst verwezen naar die toelichting? Zet in de alt-tekst bijvoorbeeld: \u201cToelichting staat onder de afbeelding.\u201d' }), '\n'] }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, l.jsx)(o.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => i });
   var a = t(86070),
    l = t(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => h, x: () => c });
   var a = t(4077),
    l = t(58315),
    i = t(46447),
    s = t(13526),
    r = t(45980),
    o = t(30758),
    d = t(86070);
   const c = (0, o.createContext)({}),
    h = ({ title: e, appearance: n, description: t, children: o, figure: h }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      u = h ? 'figure' : 'div',
      v = h ? 'figcaption' : 'div',
      b = 'string' == typeof t ? (0, d.jsx)(r.oz, { children: t }) : t;
     return (0, d.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, d.jsx)(i.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, d.jsx)(i.fz, { children: e })] }), b] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: g[n] }, children: o }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => d });
   var a = t(46447),
    l = t(16194),
    i = t(30758),
    s = t(88022);
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
   var o = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: h, type: g } = (0, i.useContext)(s.x),
     u = (0, i.useId)();
    return (d && (c = c.trim()), (0, o.jsx)(l.f4, { theme: r, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: i }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, o.jsx)(a.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, o.jsxs)('span', { ...l({ line: n }), children: [e && (0, o.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
