'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25640],
 {
  9386(e, n, l) {
   l.d(n, { H: () => k });
   var a = l(95822),
    t = l(46447),
    s = l(13526),
    o = l(68148),
    i = l(9016),
    r = l(69303),
    c = l(91635),
    d = l(30734),
    g = l(30758),
    h = l(31186),
    p = l(65904),
    u = l.n(p),
    b = l(51627),
    m = l(86070);
   const v = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        a = (0, h.qV)(l)
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
        t = u().highlight(a, u().languages[n], n);
       return (0, m.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, m.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }), (0, m.jsx)(b.n, { children: (0, m.jsx)(b.K, { label: 'Code', children: (0, m.jsx)('pre', { className: 'language-html nl-code-block', children: (0, m.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: u, container: b = 'document', language: k, designTokens: y }) => {
       const x = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || x),
        [N, A] = (0, g.useState)(w),
        [z, S] = (0, g.useState)(l);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: k, plugins: [o.A, i.Ay, r.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const C = (0, g.useId)();
       let D = g.Fragment;
       return (
        'paragraph' === b ? (D = v) : 'document' === b ? (D = f) : 'surface' === b && (D = j),
        (0, m.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          x && (0, m.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(D, { children: (0, m.jsx)(t.v$, { children: x }) }) }) }),
          p &&
           (0, m.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, m.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!z);
             },
             'aria-expanded': z,
             'aria-controls': C,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, m.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, m.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
             n &&
              (0, m.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, m.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => i });
   var a = l(30758);
   const t = {},
    s = a.createContext(t);
   function o(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), a.createElement(s.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => r, n: () => i });
   var a = l(13526),
    t = l(96345),
    s = l(37168),
    o = l(86070);
   const i = ({ className: e, ...n }) => {
     const l = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: l, children: n.children });
    },
    r = ({ className: e, label: n, heading: l, headingLevel: i, headingApperance: r, ...c }) => {
     const d = (0, a.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(t.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [l && (0, o.jsx)(s.D, { level: i, appearance: r, children: l }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => s });
   var a = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => g, x: () => d });
   var a = l(4077),
    t = l(58315),
    s = l(46447),
    o = l(13526),
    i = l(45980),
    r = l(30758),
    c = l(86070);
   const d = (0, r.createContext)({}),
    g = ({ title: e, appearance: n, description: l, children: r, figure: g }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = g ? 'figure' : 'div',
      u = g ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, c.jsx)(i.oz, { children: l }) : l;
     return (0, c.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(s.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var a = l(46447),
    t = l(16194),
    s = l(30758),
    o = l(88022);
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
   var r = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: g, type: h } = (0, s.useContext)(o.x),
     p = (0, s.useId)();
    return (c && (d = d.trim()), (0, r.jsx)(t.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, r.jsx)(a.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, r.jsxs)('span', { ...t({ line: n }), children: [e && (0, r.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  98066(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => a, toc: () => h }));
   const a = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/functionele-afbeeldingen","title":"Functionele afbeeldingen","description":"Functionele afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/functionele-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/functionele-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Functionele afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Functionele afbeeldingen","pagination_label":"Functionele afbeeldingen","description":"Functionele afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen"]},"sidebar":"richtlijnen","previous":{"title":"Decoratieve afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen"},"next":{"title":"Grafieken","permalink":"/richtlijnen/content/afbeeldingen/grafieken"}}');
   var t = l(86070),
    s = l(18439),
    o = l(9386),
    i = l(88022),
    r = l(78734);
   const c = { title: 'Functionele afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Functionele afbeeldingen', pagination_label: 'Functionele afbeeldingen', description: 'Functionele afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen'] },
    d = 'Functionele afbeeldingen',
    g = {},
    h = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Logo als link naar de homepage', id: 'logo-als-link-naar-de-homepage', level: 2 }, { value: 'Waar stel je de alternatieve tekst van het logo als link naar de homepage in?', id: 'waar-stel-je-de-alternatieve-tekst-van-het-logo-als-link-naar-de-homepage-in', level: 3 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'functionele-afbeeldingen', children: 'Functionele afbeeldingen' }) }), '\n', (0, t.jsx)(n.p, { children: 'Afbeeldingen hebben soms een functie. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Een afbeelding waar je op kan klikken om naar een andere pagina te gaan. De afbeelding is dan een link geworden.' }), '\n', (0, t.jsx)(n.li, { children: 'De afbeelding opent in het groot in een dialoogvenster op de pagina. De afbeelding is dan een knop geworden.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, t.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een functionele afbeelding plaatst:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, t.jsx)(n.li, { children: 'Wat is het doel van de afbeelding?' }), '\n', (0, t.jsx)(n.li, { children: 'Wat gebeurt er als een bezoeker op de afbeelding klikt?' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Hier beschrijf je niet wat op de afbeelding staat, maar wat de bezoeker ermee kan doen. De bezoeker weet anders niet wat er gaat gebeuren na het klikken op de link of knop.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "Een vergrootglas in een knop naast een zoekfunctie heeft als alternatieve tekst 'Zoeken', in plaats van 'Vergrootglas'." }), '\n', (0, t.jsx)(n.li, { children: "Een prullenbak in een knop naast een ge\xfcpload bestand heeft als alternatieve tekst 'Bestand overzicht.pdf verwijderen', in plaats van 'Rode prullenbak'." }), '\n', (0, t.jsx)(n.li, { children: "Een icoon in een link dat aangeeft dat een link naar een externe pagina gaat heeft als alternatieve tekst '(gaat naar externe pagina)', in plaats van 'Vierkant met daarin een pijl die naar rechtsboven wijst'." }), '\n', (0, t.jsx)(n.li, { children: "Een huis in een link in het broodkruimelpad waarmee je naar de homepage kunt navigeren heeft als alternatieve tekst 'Terug naar de homepage', in plaats van 'Blauw huisje'." }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'logo-als-link-naar-de-homepage', children: 'Logo als link naar de homepage' }), '\n', (0, t.jsx)(n.p, { children: 'Veel websites hebben een logo dat ook een link is naar de homepage. Dit logo staat dan bovenaan iedere pagina, meestal naast het navigatiemenu. Hier is het belangrijk om zowel te benoemen dat het een logo is, als waar de link naar de naartoe gaat. In die zin is een logo zowel een informatieve als een functionele afbeelding.' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Benoem de organisatie, dat het om een logo gaat en waar de link naar verwijst', children: (0, t.jsx)(o.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('img', { alt: 'NL Design System logo, naar de homepage', src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/9e5331b623e1bbd5bea950c934a20459e13b64bf/logo.svg' }), (0, t.jsx)('p', { children: 'Alternatieve tekst: NL Design System logo, naar de homepage' })] }) }) }), '\n', (0, t.jsxs)(n.p, { children: ['Lees ook onze ', (0, t.jsx)(n.a, { href: '/blog/toegankelijke-naam-link-logo-header/', children: 'blog "De toegankelijke naam van een link op een logo in de header"' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'waar-stel-je-de-alternatieve-tekst-van-het-logo-als-link-naar-de-homepage-in', children: 'Waar stel je de alternatieve tekst van het logo als link naar de homepage in?' }), '\n', (0, t.jsx)(n.p, { children: 'Het verschilt per contentmanagementsysteem (CMS) waar je dit aan kunt passen en of je dit als contentmaker zelf kunt doen. Meestal zit deze optie in de thema-instellingen van het CMS. Het kan daarom zijn dat je geen rechten hebt om de alternatieve tekst van het logo bovenaan iedere pagina zelf aan te passen. Vraag dit dan aan de beheerder of leverancier van je website.' }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel (in context)' }) }), '\n'] }), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
