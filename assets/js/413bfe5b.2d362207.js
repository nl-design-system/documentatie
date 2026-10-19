'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68255],
 {
  14881(e, n, t) {
   t.d(n, { K: () => c, n: () => o });
   var l = t(13526),
    a = t(30758),
    s = t(30662),
    i = t(37168),
    r = t(86070);
   const o = (0, a.forwardRef)(({ as: e, className: n, children: t, ...a }, s) => {
     const i = e || 'div',
      o = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(i, { ref: s, className: o, ...a, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: a, headingLevel: o, headingApperance: c, ...d }) => {
     const h = (0, l.A)('utrecht-accordion__section', e),
      g = (0, l.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: h, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(s.rI, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [a && (0, r.jsx)(i.D, { level: o, appearance: c, children: a }), t] })] }) }), (0, r.jsx)('div', { className: g, children: d.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => i, x: () => r });
   var l = t(30758);
   const a = {},
    s = l.createContext(a);
   function i(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    a = t(16194),
    s = t(30758),
    i = t(56528);
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
    const { title: h, type: g } = (0, s.useContext)(i.x),
     m = (0, s.useId)();
    return (c && (d = d.trim()), (0, o.jsx)(a.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: a, getTokenProps: s }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, o.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, o.jsxs)('span', { ...a({ line: n }), children: [e && (0, o.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => P, GP: () => A, KC: () => E, Nd: () => _, Rt: () => C, Vj: () => w, Wk: () => T, bz: () => z, cB: () => S, e5: () => W, hY: () => $, jK: () => L, jP: () => D, ob: () => B, rI: () => N, t4: () => M, vP: () => I, vg: () => H });
   var l = t(92081),
    a = t(90578),
    s = t(96345),
    i = t(64249),
    r = t(4603),
    o = t(91525),
    c = t(23436),
    d = t(1375),
    h = t(4077),
    g = t(58315),
    m = t(73563),
    u = t(35193),
    j = t(82999),
    p = t(13088),
    b = t(43864),
    v = t(24214),
    k = t(79532),
    x = t(60529),
    f = t(86070);
   const y = { width: '1em', height: '1em' },
    _ = () => (0, f.jsx)(l.A, { ...y }),
    A = () => (0, f.jsx)(a.A, { ...y }),
    N = () => (0, f.jsx)(s.A, { ...y }),
    w = () => (0, f.jsx)(i.A, { ...y }),
    z = () => (0, f.jsx)(r.A, { ...y }),
    C = () => (0, f.jsx)(o.A, { ...y }),
    S = () => (0, f.jsx)(c.A, { ...y }),
    I = () => (0, f.jsx)(d.A, { ...y }),
    L = () => (0, f.jsx)(h.A, { ...y }),
    D = () => (0, f.jsx)(g.A, { ...y }),
    M = () => (0, f.jsx)(m.A, { ...y }),
    P = () => (0, f.jsx)(u.A, { ...y }),
    $ = () => (0, f.jsx)(j.A, { ...y }),
    E = () => (0, f.jsx)(p.A, { ...y }),
    T = () => (0, f.jsx)(b.A, { ...y }),
    W = () => (0, f.jsx)(v.A, { ...y }),
    B = () => (0, f.jsx)(k.A, { ...y }),
    H = () => (0, f.jsx)(x.A, { ...y });
  },
  38953(e, n, t) {
   t.d(n, { H: () => f });
   var l = t(28369),
    a = t(46447),
    s = t(13526),
    i = t(68148),
    r = t(9016),
    o = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    g = t(31186),
    m = t(65904),
    u = t.n(m),
    j = t(14881),
    p = t(46847),
    b = t(86070);
   const v = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: l, copyCode: a, defaultExpandedCode: i, designTokens: r }) => {
       const o = 'string' == typeof t ? t : l || '',
        c = 'string' == typeof t ? u().highlight(t, u().languages[e], e) : u().highlight(l || '', u().languages[e], e);
       return (0, b.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, b.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: r, children: (0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }) }), (0, b.jsx)(j.n, { children: (0, b.jsxs)(j.K, { label: 'Code', open: i, children: [(0, b.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === a && (0, b.jsx)(p.$, { 'data-copy-code': o, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: u, container: j = 'document', language: p, designTokens: f }) => {
       const y = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        A = 'string' == typeof e ? e : g.qV(_ || y),
        [N, w] = (0, h.useState)(A),
        [z, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(A, { parser: p, plugins: [i.A, r.Ay, o.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [A]);
       const S = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === j ? (I = v) : 'document' === j ? (I = k) : 'surface' === j && (I = x),
        (0, b.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          y && (0, b.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(I, { children: (0, b.jsx)(a.v$, { children: y }) }) }) }),
          m &&
           (0, b.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(a.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: p, textContent: N, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(a.$n, {
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
  39569(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => l, toc: () => g }));
   const l = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/algemene-richtlijnen","title":"Algemene richtlijnen","description":"Algemene richtlijnen voor afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","permalink":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.mdx","tags":[],"version":"current","frontMatter":{"title":"Algemene richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Algemene richtlijnen","pagination_label":"Algemene richtlijnen","description":"Algemene richtlijnen voor afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","alt in cms","mediabibliotheek"]},"sidebar":"richtlijnen","previous":{"title":"Content","permalink":"/richtlijnen/content/afbeeldingen"},"next":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"}}');
   var a = t(86070),
    s = t(18439),
    i = t(38953),
    r = t(56528),
    o = t(56672);
   const c = { title: 'Algemene richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Algemene richtlijnen', pagination_label: 'Algemene richtlijnen', description: 'Algemene richtlijnen voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'alt in cms', 'mediabibliotheek'] },
    d = 'Algemene richtlijnen',
    h = {},
    g = [{ value: 'Als jouw CMS gebruik maakt van een mediabibliotheek', id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', level: 2 }, { value: 'AI en tekstalternatieven', id: 'ai-en-tekstalternatieven', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'algemene-richtlijnen', children: 'Algemene richtlijnen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Ongeacht voor welke afbeelding je een alternatieve tekst gaat schrijven, zijn er een aantal dingen om altijd rekening mee te houden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Zet de belangrijkste informatie vooraan. Zo weet een bezoeker meteen of de rest van de beschrijving nodig is.' }), '\n', (0, a.jsx)(n.li, { children: 'Hou de beschrijving kort, maar wel volledig. Bij voorkeur is een alternatieve tekst maximaal 150 tekens lang, maar het is het belangrijkst dat de beschrijving klopt.' }), '\n', (0, a.jsxs)(n.li, { children: ['Gebruik altijd interpunctie. ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' maken ook gebruik van interpunctie. Een alternatieve tekst met interpunctie is beter te beluisteren. Be\xebindig langere alternateve teksten met een punt. Zo pauzeert een screenreader voordat de rest van de pagina wordt voorgelezen.'] }), '\n', (0, a.jsx)(n.li, { children: "Benoem niet d\xe1t het een afbeelding is, bijvoorbeeld 'afbeelding van een eikenboom' of 'foto van Linda de Vries'. Benoem het alleen als het echt relevant is. Een voorbeeld van wanneer het wel relevant is om te benoemen dat het om een foto gaat, is een foto van een belangrijke historische gebeurtenis. Als de afbeelding een foto is, kan dat aangeven dat het een authentieke, historische opname is. Maar als het een illustratie is, kan dat betekenen dat het een interpretatie of reconstructie is." }), '\n'] }), '\n', (0, a.jsx)(r.$, { appearance: 'dont', title: 'Geen interpunctie gebruiken', children: (0, a.jsx)(i.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('img', { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Paspoort-id-rijbewijs-illustratie.jpg', alt: 'Paspoort identiteitskaart en rijbewijs illustratie.' }), (0, a.jsx)('p', { children: 'Alternatieve tekst: Paspoort identiteitskaart en rijbewijs illustratie' })] }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', children: 'Als jouw CMS gebruik maakt van een mediabibliotheek' }), '\n', (0, a.jsx)(n.p, { children: "Sommige contentmanagementsystemen (CMS) maken gebruiken van een mediabibliotheek. Een mediabibliotheek is een centrale opslagplaats waar je afbeeldingen, video's, documenten en andere mediabestanden kunt uploaden, beheren en hergebruiken binnen je website. Je hoeft dan niet dezelfde afbeelding meerdere keren te uploaden op je website. Meestal voeg je een alternatieve tekst toe aan de afbeelding in de mediabibliotheek." }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer je die afbeelding dan vervolgens op een pagina gebruikt, krijgt de afbeelding automatisch de alternatieve tekst mee die je eerder hebt toegevoegd. Dat kan er ook voor zorgen dat de alternatieve tekst op de ene pagina toepasselijk is, maar op een andere pagina helemaal niet. Bijvoorbeeld omdat de context op die pagina anders is. Als je de alternatieve tekst niet kunt aanpassen op paginaniveau, kun je het beste meerdere versies van dezelfde afbeelding opslaan. Zo kun je toch per pagina een passende alternatieve tekst toevoegen.' }), '\n', (0, a.jsx)(n.h2, { id: 'ai-en-tekstalternatieven', children: 'AI en tekstalternatieven' }), '\n', (0, a.jsx)(n.p, { children: 'Artificial Intelligence (AI) kan enorm behulpzaam zijn voor blinden en slechtzienden. Er zijn apps en andere hulpmiddelen die een afbeelding kunnen scannen en een feitelijke beschrijving kunnen geven van de afbeelding. Daarmee worden veel mensen een stuk zelfstandiger, omdat ze niemand nodig hebben die even meekijkt.' }), '\n', (0, a.jsx)(n.p, { children: 'Wees wel voorzichtig met AI. Je kunt niet zomaar vertrouwen op een tekstalternatief dat AI voor je genereert. Het kan een goed startpunt zijn, maar AI is op dit moment nog niet zo slim als je zou willen. Er kunnen daardoor fouten staan in een tekstalternatief dat door AI is gegenereerd. Of er kan nadruk komen te liggen op de verkeerde elementen in een afbeelding. En soms is de beschrijving niet relevant in de context waarvoor jij de afbeelding had gekozen. Lees de teksten daarom altijd kritisch na en pas de tekst aan waar nodig.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: "Controleer of je een goed tekstalternatief hebt geschreven door na te gaan of je deze vragen met 'Ja' kunt beantwoorden:" }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Geeft de alt-tekst dezelfde informatie als de afbeelding?' }), '\n', (0, a.jsxs)(n.li, { children: ['Is de alt-tekst in ', (0, a.jsx)(n.a, { href: '/wcag/3.1.2/', children: 'de juiste taal' }), ' geschreven?'] }), '\n', (0, a.jsx)(n.li, { children: 'Is de alternatieve tekst relevant in de context van waarom de afbeelding op de pagina staat?' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Tip:' }), ' Lees de alt-tekst hardop.'] }), '\n', (0, a.jsx)(n.p, { children: 'Begrijp je als lezer (zonder de afbeelding te zien) wat je moet weten? Dan is de alt-tekst duidelijk en functioneel. Bevat de alt-tekst alleen bestandsnamen, omschrijvingen als \u201cafbeelding\u201d, of overbodige details? Dan moet je \u2018m verbeteren.' }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(o.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  46847(e, n, t) {
   t.d(n, { $: () => l.$n });
   var l = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => d, x: () => c });
   var l = t(30662),
    a = t(46447),
    s = t(13526),
    i = t(94988),
    r = t(30758),
    o = t(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: r, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      g = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div',
      u = 'string' == typeof t ? (0, o.jsx)(i.oz, { components: { a: a.N_ }, children: t }) : t;
     return (0, o.jsxs)(g, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, o.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(l.jP, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, o.jsx)(a.fz, { children: e })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(l.jK, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, o.jsx)(a.fz, { children: e })] }), u] }), (0, o.jsx)('div', { className: 'nlds-guideline__example', children: (0, o.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => s });
   var l = t(86070),
    a = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
 },
]);
