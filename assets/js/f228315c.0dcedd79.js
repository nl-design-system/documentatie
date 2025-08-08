'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97824],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var l = t(52676),
    a = t(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
  23412: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => d, default: () => u, frontMatter: () => o, metadata: () => c, toc: () => m });
   var l = t(52676),
    a = t(40139),
    i = t(43599),
    s = t(40761),
    r = t(66968);
   const o = { title: 'Algemene richtlijnen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Algemene richtlijnen', pagination_label: 'Algemene richtlijnen', description: 'Algemene richtlijnen voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'alt in cms', 'mediabibliotheek'] },
    d = 'Algemene richtlijnen',
    c = { id: 'richtlijnen/content/afbeeldingen/algemene-richtlijnen', title: 'Algemene richtlijnen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', description: 'Algemene richtlijnen voor afbeeldingen in NL Design System.', source: '@site/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.md', sourceDirName: 'richtlijnen/content/afbeeldingen', slug: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', permalink: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/algemene-richtlijnen.md', tags: [], version: 'current', frontMatter: { title: 'Algemene richtlijnen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Algemene richtlijnen', pagination_label: 'Algemene richtlijnen', description: 'Algemene richtlijnen voor afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'alt in cms', 'mediabibliotheek'] }, sidebar: 'richtlijnen', previous: { title: 'Content', permalink: '/richtlijnen/content/afbeeldingen' }, next: { title: 'Waar moet een alternatieve tekst staan?', permalink: '/richtlijnen/content/afbeeldingen/alt-plaats' } },
    g = {},
    m = [
     { value: 'Als jouw CMS gebruik maakt van een mediabibliotheek', id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', level: 2 },
     { value: 'AI en tekstalternatieven', id: 'ai-en-tekstalternatieven', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'algemene-richtlijnen', children: 'Algemene richtlijnen' }), '\n', (0, l.jsx)(n.p, { children: 'Ongeacht voor welke afbeelding je een alternatieve tekst gaat schrijven, zijn er een aantal dingen om altijd rekening mee te houden:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Zet de belangrijkste informatie vooraan. Zo weet een bezoeker meteen of de rest van de beschrijving nodig is.' }), '\n', (0, l.jsx)(n.li, { children: 'Hou de beschrijving kort, maar wel volledig. Bij voorkeur is een alternatieve tekst maximaal 150 tekens lang, maar het is het belangrijkst dat de beschrijving klopt.' }), '\n', (0, l.jsxs)(n.li, { children: ['Gebruik altijd interpunctie. ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' maken ook gebruik van interpunctie. Een alternatieve tekst met interpunctie is beter te beluisteren. Be\xebindig langere alternateve teksten met een punt. Zo pauzeert een screenreader voordat de rest van de pagina wordt voorgelezen.'] }), '\n', (0, l.jsx)(n.li, { children: "Benoem niet d\xe1t het een afbeelding is, bijvoorbeeld 'afbeelding van een eikenboom' of 'foto van Linda de Vries'. Benoem het alleen als het echt relevant is. Een voorbeeld van wanneer het wel relevant is om te benoemen dat het om een foto gaat, is een foto van een belangrijke historische gebeurtenis. Als de afbeelding een foto is, kan dat aangeven dat het een authentieke, historische opname is. Maar als het een illustratie is, kan dat betekenen dat het een interpretatie of reconstructie is." }), '\n'] }), '\n', (0, l.jsx)(s.X, { appearance: 'dont', title: 'Geen interpunctie gebruiken', children: (0, l.jsx)(i.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Paspoort-id-rijbewijs-illustratie.jpg', alt: 'Paspoort identiteitskaart en rijbewijs illustratie.' }), (0, l.jsx)(n.p, { children: 'Alternatieve tekst: Paspoort identiteitskaart en rijbewijs illustratie' })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'als-jouw-cms-gebruik-maakt-van-een-mediabibliotheek', children: 'Als jouw CMS gebruik maakt van een mediabibliotheek' }), '\n', (0, l.jsx)(n.p, { children: "Sommige contentmanagementsystemen (CMS) maken gebruiken van een mediabibliotheek. Een mediabibliotheek is een centrale opslagplaats waar je afbeeldingen, video's, documenten en andere mediabestanden kunt uploaden, beheren en hergebruiken binnen je website. Je hoeft dan niet dezelfde afbeelding meerdere keren te uploaden op je website. Meestal voeg je een alternatieve tekst toe aan de afbeelding in de mediabibliotheek." }), '\n', (0, l.jsx)(n.p, { children: 'Wanneer je die afbeelding dan vervolgens op een pagina gebruikt, krijgt de afbeelding automatisch de alternatieve tekst mee die je eerder hebt toegevoegd. Dat kan er ook voor zorgen dat de alternatieve tekst op de ene pagina toepasselijk is, maar op een andere pagina helemaal niet. Bijvoorbeeld omdat de context op die pagina anders is. Als je de alternatieve tekst niet kunt aanpassen op paginaniveau, kun je het beste meerdere versies van dezelfde afbeelding opslaan. Zo kun je toch per pagina een passende alternatieve tekst toevoegen.' }), '\n', (0, l.jsx)(n.h2, { id: 'ai-en-tekstalternatieven', children: 'AI en tekstalternatieven' }), '\n', (0, l.jsx)(n.p, { children: 'Artificial Intelligence (AI) kan enorm behulpzaam zijn voor blinden en slechtzienden. Er zijn apps en andere hulpmiddelen die een afbeelding kunnen scannen en een feitelijke beschrijving kunnen geven van de afbeelding. Daarmee worden veel mensen een stuk zelfstandiger, omdat ze niemand nodig hebben die even meekijkt.' }), '\n', (0, l.jsx)(n.p, { children: 'Wees wel voorzichtig met AI. Je kunt niet zomaar vertrouwen op een tekstalternatief dat AI voor je genereert. Het kan een goed startpunt zijn, maar AI is op dit moment nog niet zo slim als je zou willen. Er kunnen daardoor fouten staan in een tekstalternatief dat door AI is gegenereerd. Of er kan nadruk komen te liggen op de verkeerde elementen in een afbeelding. En soms is de beschrijving niet relevant in de context waarvoor jij de afbeelding had gekozen. Lees de teksten daarom altijd kritisch na en pas de tekst aan waar nodig.' }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: "Controleer of je een goed tekstalternatief hebt geschreven door na te gaan of je deze vragen met 'Ja' kunt beantwoorden:" }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Geeft de alt-tekst dezelfde informatie als de afbeelding?' }), '\n', (0, l.jsxs)(n.li, { children: ['Is de alt-tekst in ', (0, l.jsx)(n.a, { href: '/wcag/3.1.2', children: 'de juiste taal' }), ' geschreven?'] }), '\n', (0, l.jsx)(n.li, { children: 'Is de alternatieve tekst relevant in de context van waarom de afbeelding op de pagina staat?' }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: 'Tip:' }), ' Lees de alt-tekst hardop.'] }), '\n', (0, l.jsx)(n.p, { children: 'Begrijp je als lezer (zonder de afbeelding te zien) wat je moet weten? Dan is de alt-tekst duidelijk en functioneel. Bevat de alt-tekst alleen bestandsnamen, omschrijvingen als \u201cafbeelding\u201d, of overbodige details? Dan moet je \u2018m verbeteren.' }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.1.1', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, l.jsx)(r.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => v });
   var l = t(41179),
    a = t(16167),
    i = t(4814),
    s = t(64642),
    r = t(93872),
    o = t(86017),
    d = t(48231),
    c = t(75119),
    g = t(75271),
    m = t(60027),
    h = t(52676);
   const u = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(a.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(a.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(a.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   u.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(a.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(a.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(a.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   p.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: v = !1, displayCode: j = !0, children: k, container: f = 'document', language: y, designTokens: x } = e;
    const _ = 'function' == typeof k ? k() : k,
     w = 'function' == typeof n ? n() : (0, g.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : m.uS(w || _),
     [N, A] = (0, g.useState)(z),
     [C, S] = (0, g.useState)(v);
    (0, g.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(z, { parser: y, plugins: [s.Z, r.ZP, o.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [z]);
    const Z = (0, g.useId)();
    let P = g.Fragment;
    return (
     'paragraph' === f ? (P = u) : 'document' === f ? (P = b) : 'surface' === f && (P = p),
     (0, h.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, h.jsx)(P, { children: (0, h.jsx)(a.pu, { children: _ }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(a.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': Z,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: Z,
         hidden: !C,
         children: [
          (0, h.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
          t &&
           (0, h.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(a.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => d });
   var l = t(16167),
    a = t(60648),
    i = t(75271),
    s = t(40761);
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
   var o = t(52676);
   function d(e) {
    let { lineNumber: n, syntax: t, textContent: d, trim: c } = e,
     g = d;
    const { title: m, type: h } = (0, i.useContext)(s.n),
     u = (0, i.useId)();
    return (
     c && (g = g.trim()),
     (0, o.jsx)(a.y$, {
      theme: r,
      code: g,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: a, getLineProps: i, getTokenProps: s } = e;
       return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, o.jsx)(l.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: t, children: a.map((e, t) => (0, o.jsxs)('span', { ...i({ line: e }), children: [n && (0, o.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, o.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => c, n: () => d });
   var l = t(69244),
    a = t(20061),
    i = t(16167),
    s = t(4814),
    r = t(75271),
    o = t(52676);
   const d = (0, r.createContext)({}),
    c = (e) => {
     let { title: n, appearance: t, description: r, children: c, figure: g } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = g ? 'figure' : 'div',
      u = g ? 'figcaption' : 'div';
     return (0, o.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, o.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(i.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, o.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, o.jsx)(i.nv, { children: n })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(i.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, o.jsx)(a.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, o.jsx)(i.nv, { children: n })] }), r] }), (0, o.jsx)('div', { className: 'nlds-guideline__example', children: (0, o.jsx)(d.Provider, { value: { title: n, type: m[t] }, children: c }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => s });
   var l = t(75271);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), l.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
