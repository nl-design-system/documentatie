'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [63481],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => v });
   var l = t(16609),
    a = t(68873),
    i = t(13526),
    s = t(58713),
    o = t(87347),
    r = t(39644),
    d = t(92406),
    c = t(63313),
    g = t(30758),
    h = t(31186),
    m = t(86070);
   const b = ({ children: e }) => (0, m.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const u = ({ children: e }) => (0, m.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   u.displayName = 'DocumentContainer';
   const p = ({ children: e }) => (0, m.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   p.displayName = 'SurfaceContainer';
   const v = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: v = !0, children: j, container: k = 'document', language: f, designTokens: y }) => {
    const x = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
     A = 'string' == typeof e ? e : h.qV(_ || x),
     [w, z] = (0, g.useState)(A),
     [N, C] = (0, g.useState)(t);
    (0, g.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(A, { parser: f, plugins: [s.A, o.Ay, r.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [A]);
    const S = (0, g.useId)();
    let D = g.Fragment;
    return (
     'paragraph' === k ? (D = b) : 'document' === k ? (D = u) : 'surface' === k && (D = p),
     (0, m.jsxs)('div', {
      className: (0, i.A)('nlds-canvas'),
      children: [
       x && (0, m.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(D, { children: (0, m.jsx)(a.v$, { children: x }) }) }) }),
       v &&
        (0, m.jsx)('div', {
         className: (0, i.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(a.$n, {
          className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!N);
          },
          'aria-expanded': N,
          'aria-controls': S,
          children: N ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, m.jsxs)('div', {
         className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !N,
         children: [
          (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: w, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(a.$n, {
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
  16609: (e, n, t) => {
   t.d(n, { M: () => d });
   var l = t(68873),
    a = t(16194),
    i = t(30758),
    s = t(50124);
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
   var r = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: g, type: h } = (0, i.useContext)(s.x),
     m = (0, i.useId)();
    return d && (c = c.trim()), (0, r.jsx)(a.f4, { theme: o, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: a, getTokenProps: i }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, r.jsx)(l.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, r.jsxs)('span', { ...a({ line: n }), children: [e && (0, r.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => d });
   var l = t(54736),
    a = t(26990),
    i = t(68873),
    s = t(13526),
    o = t(30758),
    r = t(86070);
   const d = (0, o.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: o, figure: c }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      m = c ? 'figcaption' : 'div';
     return (0, r.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, r.jsx)(i.fz, { children: e })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(i.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, r.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, r.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, r.jsx)(i.fz, { children: e })] }), t] }), (0, r.jsx)('div', { className: 'nlds-guideline__example', children: (0, r.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: o }) })] });
    };
  },
  72402: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => c, default: () => b, frontMatter: () => d, metadata: () => l, toc: () => h });
   const l = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/algemene-richtlijnen","title":"Algemene richtlijnen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen","description":"Algemene richtlijnen voor afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.md","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","permalink":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.md","tags":[],"version":"current","frontMatter":{"title":"Algemene richtlijnen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Algemene richtlijnen","pagination_label":"Algemene richtlijnen","description":"Algemene richtlijnen voor afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/algemene-richtlijnen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","alt in cms","mediabibliotheek"]},"sidebar":"richtlijnen","previous":{"title":"Content","permalink":"/richtlijnen/content/afbeeldingen"},"next":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"}}');
   var a = t(86070),
    i = t(85248),
    s = t(8649),
    o = t(50124),
    r = t(78734);
   const d = { title: 'Algemene richtlijnen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Algemene richtlijnen', pagination_label: 'Algemene richtlijnen', description: 'Algemene richtlijnen voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'alt in cms', 'mediabibliotheek'] },
    c = 'Algemene richtlijnen',
    g = {},
    h = [{ value: 'Als jouw CMS gebruik maakt van een mediabibliotheek', id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', level: 2 }, { value: 'AI en tekstalternatieven', id: 'ai-en-tekstalternatieven', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'algemene-richtlijnen', children: 'Algemene richtlijnen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Ongeacht voor welke afbeelding je een alternatieve tekst gaat schrijven, zijn er een aantal dingen om altijd rekening mee te houden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Zet de belangrijkste informatie vooraan. Zo weet een bezoeker meteen of de rest van de beschrijving nodig is.' }), '\n', (0, a.jsx)(n.li, { children: 'Hou de beschrijving kort, maar wel volledig. Bij voorkeur is een alternatieve tekst maximaal 150 tekens lang, maar het is het belangrijkst dat de beschrijving klopt.' }), '\n', (0, a.jsxs)(n.li, { children: ['Gebruik altijd interpunctie. ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' maken ook gebruik van interpunctie. Een alternatieve tekst met interpunctie is beter te beluisteren. Be\xebindig langere alternateve teksten met een punt. Zo pauzeert een screenreader voordat de rest van de pagina wordt voorgelezen.'] }), '\n', (0, a.jsx)(n.li, { children: "Benoem niet d\xe1t het een afbeelding is, bijvoorbeeld 'afbeelding van een eikenboom' of 'foto van Linda de Vries'. Benoem het alleen als het echt relevant is. Een voorbeeld van wanneer het wel relevant is om te benoemen dat het om een foto gaat, is een foto van een belangrijke historische gebeurtenis. Als de afbeelding een foto is, kan dat aangeven dat het een authentieke, historische opname is. Maar als het een illustratie is, kan dat betekenen dat het een interpretatie of reconstructie is." }), '\n'] }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Geen interpunctie gebruiken', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Paspoort-id-rijbewijs-illustratie.jpg', alt: 'Paspoort identiteitskaart en rijbewijs illustratie.' }), (0, a.jsx)(n.p, { children: 'Alternatieve tekst: Paspoort identiteitskaart en rijbewijs illustratie' })] }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', children: 'Als jouw CMS gebruik maakt van een mediabibliotheek' }), '\n', (0, a.jsx)(n.p, { children: "Sommige contentmanagementsystemen (CMS) maken gebruiken van een mediabibliotheek. Een mediabibliotheek is een centrale opslagplaats waar je afbeeldingen, video's, documenten en andere mediabestanden kunt uploaden, beheren en hergebruiken binnen je website. Je hoeft dan niet dezelfde afbeelding meerdere keren te uploaden op je website. Meestal voeg je een alternatieve tekst toe aan de afbeelding in de mediabibliotheek." }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer je die afbeelding dan vervolgens op een pagina gebruikt, krijgt de afbeelding automatisch de alternatieve tekst mee die je eerder hebt toegevoegd. Dat kan er ook voor zorgen dat de alternatieve tekst op de ene pagina toepasselijk is, maar op een andere pagina helemaal niet. Bijvoorbeeld omdat de context op die pagina anders is. Als je de alternatieve tekst niet kunt aanpassen op paginaniveau, kun je het beste meerdere versies van dezelfde afbeelding opslaan. Zo kun je toch per pagina een passende alternatieve tekst toevoegen.' }), '\n', (0, a.jsx)(n.h2, { id: 'ai-en-tekstalternatieven', children: 'AI en tekstalternatieven' }), '\n', (0, a.jsx)(n.p, { children: 'Artificial Intelligence (AI) kan enorm behulpzaam zijn voor blinden en slechtzienden. Er zijn apps en andere hulpmiddelen die een afbeelding kunnen scannen en een feitelijke beschrijving kunnen geven van de afbeelding. Daarmee worden veel mensen een stuk zelfstandiger, omdat ze niemand nodig hebben die even meekijkt.' }), '\n', (0, a.jsx)(n.p, { children: 'Wees wel voorzichtig met AI. Je kunt niet zomaar vertrouwen op een tekstalternatief dat AI voor je genereert. Het kan een goed startpunt zijn, maar AI is op dit moment nog niet zo slim als je zou willen. Er kunnen daardoor fouten staan in een tekstalternatief dat door AI is gegenereerd. Of er kan nadruk komen te liggen op de verkeerde elementen in een afbeelding. En soms is de beschrijving niet relevant in de context waarvoor jij de afbeelding had gekozen. Lees de teksten daarom altijd kritisch na en pas de tekst aan waar nodig.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: "Controleer of je een goed tekstalternatief hebt geschreven door na te gaan of je deze vragen met 'Ja' kunt beantwoorden:" }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Geeft de alt-tekst dezelfde informatie als de afbeelding?' }), '\n', (0, a.jsxs)(n.li, { children: ['Is de alt-tekst in ', (0, a.jsx)(n.a, { href: '/wcag/3.1.2/', children: 'de juiste taal' }), ' geschreven?'] }), '\n', (0, a.jsx)(n.li, { children: 'Is de alternatieve tekst relevant in de context van waarom de afbeelding op de pagina staat?' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Tip:' }), ' Lees de alt-tekst hardop.'] }), '\n', (0, a.jsx)(n.p, { children: 'Begrijp je als lezer (zonder de afbeelding te zien) wat je moet weten? Dan is de alt-tekst duidelijk en functioneel. Bevat de alt-tekst alleen bestandsnamen, omschrijvingen als \u201cafbeelding\u201d, of overbodige details? Dan moet je \u2018m verbeteren.' }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => i });
   var l = t(86070),
    a = t(85248);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => o });
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
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), l.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
