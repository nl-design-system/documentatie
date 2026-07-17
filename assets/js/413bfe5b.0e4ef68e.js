'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68255],
 {
  9386(e, n, t) {
   t.d(n, { H: () => f });
   var l = t(95822),
    a = t(46447),
    i = t(13526),
    s = t(68148),
    r = t(9016),
    o = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    g = t(31186),
    m = t(65904),
    u = t.n(m),
    p = t(51627),
    b = t(86070);
   const j = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, g.qV)(t)
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
        a = u().highlight(l, u().languages[n], n);
       return (0, b.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, b.jsx)(p.n, { children: (0, b.jsx)(p.K, { label: 'Code', children: (0, b.jsx)('pre', { className: 'language-html nl-code-block', children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: u, container: p = 'document', language: f, designTokens: y }) => {
       const x = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : g.qV(_ || x),
        [w, N] = (0, h.useState)(A),
        [z, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: f, plugins: [s.A, r.Ay, o.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [A]);
       const S = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === p ? (L = j) : 'document' === p ? (L = v) : 'surface' === p && (L = k),
        (0, b.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          x && (0, b.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, b.jsx)(L, { children: (0, b.jsx)(a.v$, { children: x }) }) }) }),
          m &&
           (0, b.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(a.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, b.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(a.$n, {
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
   var l = t(30758);
   const a = {},
    i = l.createContext(a);
   function s(e) {
    const n = l.useContext(i);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), l.createElement(i.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => o, n: () => r });
   var l = t(13526),
    a = t(96345),
    i = t(37168),
    s = t(86070);
   const r = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: t, children: n.children });
    },
    o = ({ className: e, label: n, heading: t, headingLevel: r, headingApperance: o, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...c, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(a.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [t && (0, s.jsx)(i.D, { level: r, appearance: o, children: t }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  59307(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => l, toc: () => g }));
   const l = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/algemene-richtlijnen","title":"Algemene richtlijnen","description":"Algemene richtlijnen voor afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","permalink":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.mdx","tags":[],"version":"current","frontMatter":{"title":"Algemene richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Algemene richtlijnen","pagination_label":"Algemene richtlijnen","description":"Algemene richtlijnen voor afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","alt in cms","mediabibliotheek"]},"sidebar":"richtlijnen","previous":{"title":"Content","permalink":"/richtlijnen/content/afbeeldingen"},"next":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"}}');
   var a = t(86070),
    i = t(18439),
    s = t(9386),
    r = t(88022),
    o = t(78734);
   const c = { title: 'Algemene richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Algemene richtlijnen', pagination_label: 'Algemene richtlijnen', description: 'Algemene richtlijnen voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'alt in cms', 'mediabibliotheek'] },
    d = 'Algemene richtlijnen',
    h = {},
    g = [{ value: 'Als jouw CMS gebruik maakt van een mediabibliotheek', id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', level: 2 }, { value: 'AI en tekstalternatieven', id: 'ai-en-tekstalternatieven', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'algemene-richtlijnen', children: 'Algemene richtlijnen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Ongeacht voor welke afbeelding je een alternatieve tekst gaat schrijven, zijn er een aantal dingen om altijd rekening mee te houden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Zet de belangrijkste informatie vooraan. Zo weet een bezoeker meteen of de rest van de beschrijving nodig is.' }), '\n', (0, a.jsx)(n.li, { children: 'Hou de beschrijving kort, maar wel volledig. Bij voorkeur is een alternatieve tekst maximaal 150 tekens lang, maar het is het belangrijkst dat de beschrijving klopt.' }), '\n', (0, a.jsxs)(n.li, { children: ['Gebruik altijd interpunctie. ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' maken ook gebruik van interpunctie. Een alternatieve tekst met interpunctie is beter te beluisteren. Be\xebindig langere alternateve teksten met een punt. Zo pauzeert een screenreader voordat de rest van de pagina wordt voorgelezen.'] }), '\n', (0, a.jsx)(n.li, { children: "Benoem niet d\xe1t het een afbeelding is, bijvoorbeeld 'afbeelding van een eikenboom' of 'foto van Linda de Vries'. Benoem het alleen als het echt relevant is. Een voorbeeld van wanneer het wel relevant is om te benoemen dat het om een foto gaat, is een foto van een belangrijke historische gebeurtenis. Als de afbeelding een foto is, kan dat aangeven dat het een authentieke, historische opname is. Maar als het een illustratie is, kan dat betekenen dat het een interpretatie of reconstructie is." }), '\n'] }), '\n', (0, a.jsx)(r.$, { appearance: 'dont', title: 'Geen interpunctie gebruiken', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('img', { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Paspoort-id-rijbewijs-illustratie.jpg', alt: 'Paspoort identiteitskaart en rijbewijs illustratie.' }), (0, a.jsx)('p', { children: 'Alternatieve tekst: Paspoort identiteitskaart en rijbewijs illustratie' })] }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', children: 'Als jouw CMS gebruik maakt van een mediabibliotheek' }), '\n', (0, a.jsx)(n.p, { children: "Sommige contentmanagementsystemen (CMS) maken gebruiken van een mediabibliotheek. Een mediabibliotheek is een centrale opslagplaats waar je afbeeldingen, video's, documenten en andere mediabestanden kunt uploaden, beheren en hergebruiken binnen je website. Je hoeft dan niet dezelfde afbeelding meerdere keren te uploaden op je website. Meestal voeg je een alternatieve tekst toe aan de afbeelding in de mediabibliotheek." }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer je die afbeelding dan vervolgens op een pagina gebruikt, krijgt de afbeelding automatisch de alternatieve tekst mee die je eerder hebt toegevoegd. Dat kan er ook voor zorgen dat de alternatieve tekst op de ene pagina toepasselijk is, maar op een andere pagina helemaal niet. Bijvoorbeeld omdat de context op die pagina anders is. Als je de alternatieve tekst niet kunt aanpassen op paginaniveau, kun je het beste meerdere versies van dezelfde afbeelding opslaan. Zo kun je toch per pagina een passende alternatieve tekst toevoegen.' }), '\n', (0, a.jsx)(n.h2, { id: 'ai-en-tekstalternatieven', children: 'AI en tekstalternatieven' }), '\n', (0, a.jsx)(n.p, { children: 'Artificial Intelligence (AI) kan enorm behulpzaam zijn voor blinden en slechtzienden. Er zijn apps en andere hulpmiddelen die een afbeelding kunnen scannen en een feitelijke beschrijving kunnen geven van de afbeelding. Daarmee worden veel mensen een stuk zelfstandiger, omdat ze niemand nodig hebben die even meekijkt.' }), '\n', (0, a.jsx)(n.p, { children: 'Wees wel voorzichtig met AI. Je kunt niet zomaar vertrouwen op een tekstalternatief dat AI voor je genereert. Het kan een goed startpunt zijn, maar AI is op dit moment nog niet zo slim als je zou willen. Er kunnen daardoor fouten staan in een tekstalternatief dat door AI is gegenereerd. Of er kan nadruk komen te liggen op de verkeerde elementen in een afbeelding. En soms is de beschrijving niet relevant in de context waarvoor jij de afbeelding had gekozen. Lees de teksten daarom altijd kritisch na en pas de tekst aan waar nodig.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: "Controleer of je een goed tekstalternatief hebt geschreven door na te gaan of je deze vragen met 'Ja' kunt beantwoorden:" }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Geeft de alt-tekst dezelfde informatie als de afbeelding?' }), '\n', (0, a.jsxs)(n.li, { children: ['Is de alt-tekst in ', (0, a.jsx)(n.a, { href: '/wcag/3.1.2/', children: 'de juiste taal' }), ' geschreven?'] }), '\n', (0, a.jsx)(n.li, { children: 'Is de alternatieve tekst relevant in de context van waarom de afbeelding op de pagina staat?' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Tip:' }), ' Lees de alt-tekst hardop.'] }), '\n', (0, a.jsx)(n.p, { children: 'Begrijp je als lezer (zonder de afbeelding te zien) wat je moet weten? Dan is de alt-tekst duidelijk en functioneel. Bevat de alt-tekst alleen bestandsnamen, omschrijvingen als \u201cafbeelding\u201d, of overbodige details? Dan moet je \u2018m verbeteren.' }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(o.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => i });
   var l = t(86070),
    a = t(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => h, x: () => d });
   var l = t(4077),
    a = t(58315),
    i = t(46447),
    s = t(13526),
    r = t(45980),
    o = t(30758),
    c = t(86070);
   const d = (0, o.createContext)({}),
    h = ({ title: e, appearance: n, description: t, children: o, figure: h }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      u = h ? 'figcaption' : 'div',
      p = 'string' == typeof t ? (0, c.jsx)(r.oz, { children: t }) : t;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, c.jsx)(i.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, c.jsx)(i.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: o }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    a = t(16194),
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
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: g } = (0, i.useContext)(s.x),
     m = (0, i.useId)();
    return (c && (d = d.trim()), (0, o.jsx)(a.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: a, getTokenProps: i }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, o.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, o.jsxs)('span', { ...a({ line: n }), children: [e && (0, o.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
