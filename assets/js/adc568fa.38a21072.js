'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20277],
 {
  8649: (e, n, i) => {
   i.d(n, { H: () => g });
   var o = i(16609),
    t = i(68873),
    d = i(13526),
    a = i(58713),
    r = i(87347),
    s = i(39644),
    l = i(92406),
    c = i(63313),
    v = i(30758),
    u = i(31186),
    p = i(86070);
   const h = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.yo, { className: (0, d.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.yo, { className: (0, d.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const m = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   m.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: i = !1, displayCode: g = !0, children: k, container: b = 'document', language: x, designTokens: f }) => {
    const y = 'function' == typeof k ? k() : k,
     z = 'function' == typeof e ? e() : (0, v.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(z || y),
     [_, A] = (0, v.useState)(w),
     [N, C] = (0, v.useState)(i);
    (0, v.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: x, plugins: [a.A, r.Ay, s.Ay, l.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const S = (0, v.useId)();
    let D = v.Fragment;
    return (
     'paragraph' === b ? (D = h) : 'document' === b ? (D = j) : 'surface' === b && (D = m),
     (0, p.jsxs)('div', {
      className: (0, d.A)('nlds-canvas'),
      children: [
       y && (0, p.jsx)('div', { className: (0, d.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(D, { children: (0, p.jsx)(t.v$, { children: y }) }) }) }),
       g &&
        (0, p.jsx)('div', {
         className: (0, d.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(t.$n, {
          className: (0, d.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!N);
          },
          'aria-expanded': N,
          'aria-controls': S,
          children: N ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, p.jsxs)('div', {
         className: (0, d.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !N,
         children: [
          (0, p.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: _, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, d.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(t.$n, {
             className: (0, d.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(_).catch((e) => console.error('Copy code failed', e));
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
  16609: (e, n, i) => {
   i.d(n, { M: () => l });
   var o = i(68873),
    t = i(16194),
    d = i(30758),
    a = i(50124);
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
   var s = i(86070);
   function l({ lineNumber: e, syntax: n, textContent: i, trim: l }) {
    let c = i;
    const { title: v, type: u } = (0, d.useContext)(a.x),
     p = (0, d.useId)();
    return l && (c = c.trim()), (0, s.jsx)(t.f4, { theme: r, code: c, language: n || '', children: ({ style: n, tokens: i, getLineProps: t, getTokenProps: d }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', v ? ': ' : ' ', v] }), (0, s.jsx)(o.NG, { tabIndex: 0, role: v ? 'region' : void 0, 'aria-labelledby': p, style: n, children: i.map((n, i) => (0, s.jsxs)('span', { ...t({ line: n }), children: [e && (0, s.jsx)('span', { children: i + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...d({ token: e }) }, n)), '\n'] }, i)) })] }) });
   }
  },
  31182: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => c, default: () => h, frontMatter: () => l, metadata: () => o, toc: () => u });
   const o = JSON.parse('{"id":"richtlijnen/content/video/audiodescriptie","title":"Audiodescriptie \xb7 Video \xb7 Content \xb7 Richtlijnen","description":"Richtlijnen voor Audiodescriptie binnen NL Design System","source":"@site/docs/richtlijnen/content/video/audiodescriptie.md","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/audiodescriptie","permalink":"/richtlijnen/content/video/audiodescriptie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/audiodescriptie.md","tags":[],"version":"current","frontMatter":{"title":"Audiodescriptie \xb7 Video \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Audiodescriptie","pagination_label":"Audiodescriptie","description":"Richtlijnen voor Audiodescriptie binnen NL Design System","slug":"/richtlijnen/content/video/audiodescriptie","keywords":["video","YouTube","Vimeo","audiodescriptie","audiodescription","audio","beschrijving bij video","video beschrijving","videobeschrijving"]},"sidebar":"richtlijnen","previous":{"title":"Video","permalink":"/richtlijnen/content/video"},"next":{"title":"Video beschrijving","permalink":"/richtlijnen/content/video/beschrijving"}}');
   var t = i(86070),
    d = i(85248),
    a = i(8649),
    r = i(50124),
    s = i(78734);
   const l = { title: 'Audiodescriptie \xb7 Video \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Audiodescriptie', pagination_label: 'Audiodescriptie', description: 'Richtlijnen voor Audiodescriptie binnen NL Design System', slug: '/richtlijnen/content/video/audiodescriptie', keywords: ['video', 'YouTube', 'Vimeo', 'audiodescriptie', 'audiodescription', 'audio', 'beschrijving bij video', 'video beschrijving', 'videobeschrijving'] },
    c = 'Audiodescriptie bij video',
    v = {},
    u = [{ value: 'Voordelen', id: 'voordelen', level: 2 }, { value: 'Is audiodescriptie altijd nodig?', id: 'is-audiodescriptie-altijd-nodig', level: 2 }, { value: 'Video als alternatief voor tekst', id: 'video-als-alternatief-voor-tekst', level: 3 }, { value: 'Audiodescriptie als onderdeel van de video of als los bestand', id: 'audiodescriptie-als-onderdeel-van-de-video-of-als-los-bestand', level: 2 }, { value: 'Tekst-naar-spraak of audio', id: 'tekst-naar-spraak-of-audio', level: 3 }, { value: 'Wat plaats je in de audiodescriptie van een video?', id: 'wat-plaats-je-in-de-audiodescriptie-van-een-video', level: 2 }, { value: 'Help, ik heb geen ruimte voor audiodescriptie!', id: 'help-ik-heb-geen-ruimte-voor-audiodescriptie', level: 2 }, { value: 'Audiodescriptie voor een nieuwe video', id: 'audiodescriptie-voor-een-nieuwe-video', level: 3 }, { value: 'Audiodescriptie voor een bestaande video', id: 'audiodescriptie-voor-een-bestaande-video', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, d.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'audiodescriptie-bij-video', children: 'Audiodescriptie bij video' }) }), '\n', (0, t.jsx)(n.p, { children: 'Audiodescriptie bij een video is een hoorbare, gesproken beschrijving van belangrijke informatie die je ziet in een video, maar niet hoort. Voorbeelden hiervan zijn:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Informatie over tekst in beeld (zoals de namen en functies van sprekers, slogans en links).' }), '\n', (0, t.jsx)(n.li, { children: 'Belangrijke visuele informatie in video, zoals de acties en kenmerken van personages, gebeurtenissen en sc\xe8newisselingen.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, t.jsx)(n.p, { children: 'Het aanbieden van audiodescriptie bij een video is vooral belangrijk voor blinde en slechtziende bezoekers - zij kunnen de video niet of niet goed zien en missen belangrijke informatie als er geen audiodescriptie aanwezig is.' }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast hebben ook andere doelgroepen, zoals mensen met een cognitieve beperking, baat bij audiodescriptie. Bijvoorbeeld omdat zij audio makkelijker kunnen verwerken dan visuele informatie, of omdat zij moeite hebben met het interpreteren van bijvoorbeeld gezichtsuitdrukkingen.' }), '\n', (0, t.jsx)(n.h2, { id: 'is-audiodescriptie-altijd-nodig', children: 'Is audiodescriptie altijd nodig?' }), '\n', (0, t.jsx)(n.p, { children: 'Je voegt audiodescriptie toe aan een video als er informatie zichtbaar is die niet hoorbaar is. Bezoekers die de video niet (goed) kunnen zien missen dan informatie. Dat is niet bij iedere video het geval, bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Wanneer de informatie in de audio al overeenkomt met de informatie in beeld.' }), '\n', (0, t.jsx)(n.li, { children: "Wanneer de informatie in beeld tijdens de video niet verandert. Bijvoorbeeld: er is maar \xe9\xe9n spreker en de spreker kijkt en spreekt gedurende de video rechtstreeks in de camera (een zogenaamde 'talking head-video')." }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Als er daarnaast andere informatie voorkomt in de video, zoals tekst die in beeld komt, is audiodescriptie natuurlijk alsnog w\xe9l nodig.' }), '\n', (0, t.jsx)(n.h3, { id: 'video-als-alternatief-voor-tekst', children: 'Video als alternatief voor tekst' }), '\n', (0, t.jsxs)(n.p, { children: ['In de ', (0, t.jsx)(n.a, { href: '/wcag/', children: 'WCAG-richtlijnen' }), " is een uitzondering opgenomen voor video's die een alternatief zijn voor tekst op een pagina. Je moet dan wel duidelijk aangeven d\xe1t de video een alternatief is voor de tekst. De informatie in de tekst en in de video moeten dan wel overeenkomen - je mag geen nieuwe of afwijkende informatie toevoegen."] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': dit geldt dus niet andersom - een tekstalternatief voor video, zoals een transcript, is nooit een toegankelijk alternatief voor een video.'] }), '\n', (0, t.jsx)(n.p, { children: "Het is bij deze video's gebruiksvriendelijker om toch audiodescriptie toe te voegen. Video's worden vaak los van de content op de pagina waar ze staan gedeeld. Bijvoorbeeld omdat ze ook op een videoplatform zoals YouTube of Vimeo staan, of omdat ze gedeeld worden op social media." }), '\n', (0, t.jsx)(n.h2, { id: 'audiodescriptie-als-onderdeel-van-de-video-of-als-los-bestand', children: 'Audiodescriptie als onderdeel van de video of als los bestand' }), '\n', (0, t.jsxs)(n.p, { children: ['Veel mensen hebben baat bij audiodescriptie, maar voor een deel van je bezoekers is audiodescriptie juist erg overprikkelend. Daarom is het aanbieden van audiodescriptie als los bestand in de videospeler een gebruiksvriendelijke keuze. Zo kan je bezoeker zelf kiezen om er gebruik van te maken, net als bij ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/ondertiteling/#gesloten-en-open-ondertiteling', children: 'gesloten ondertiteling' }), '. Of je de audiodescriptie als los audiobestand kunt toevoegen, hangt af van welke videospeler je organisatie gebruikt.'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast kun je de audiodescriptie integreren in de video. Dit houdt dan wel in dat \xe1lle bezoekers de audiodescriptie horen. Je kunt er ook voor kiezen om dezelfde video als een versie m\xe9t en een versie z\xf3nder audiodescriptie aan te bieden.' }), '\n', (0, t.jsx)(n.h3, { id: 'tekst-naar-spraak-of-audio', children: 'Tekst-naar-spraak of audio' }), '\n', (0, t.jsx)(n.p, { children: 'Als je de audiodescriptie als los bestand aanbiedt, heb je twee opties: de audiodescriptie aanbieden als tekst-naar-spraak of als audio.' }), '\n', (0, t.jsxs)(n.p, { children: ['Als de videospeler tekst-naar-spraak bestanden ondersteunt, is dit meestal met een ', (0, t.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/WebVTT', children: 'WebVTT-bestand' }), '. Dit is een tekstbestand met tijdstempels, waardoor de audiodescriptie op het juiste moment wordt voorgelezen. Dit is een relatief makkelijke en snelle manier om audiodescriptie te maken, maar de kwaliteit van de voorleesstem is afhankelijk van de videospeler.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt de audiodescriptie ook toevoegen als audiobestand. Je neemt dan een extra audiobestand op met een eigen voorlezer. Deze methode vraagt meer tijd en is mogelijk ook duurder, maar je hebt de kwaliteit dan wel volledig zelf in de hand. Je levert het audiobestand aan in een formaat dat ondersteund wordt door je videospeler, zoals een [MP3]-(', (0, t.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/MP3', children: 'https://nl.wikipedia.org/wiki/MP3' }), ') of ', (0, t.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/WAV', children: 'WAV' }), '-bestand.'] }), '\n', (0, t.jsx)(n.h2, { id: 'wat-plaats-je-in-de-audiodescriptie-van-een-video', children: 'Wat plaats je in de audiodescriptie van een video?' }), '\n', (0, t.jsx)(n.p, { children: 'Benoem in de audiodescriptie van een video:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Wie er aan het woord is.' }), '\n', (0, t.jsx)(n.li, { children: 'Teksten die in beeld komen, zoals de naam en functie van een spreker, titelschermen en links.' }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: 'Beschrijvingen van belangrijke afbeeldingen' }), ' die in beeld komen, zoals het logo van de organisatie.'] }), '\n', (0, t.jsx)(n.li, { children: 'Beschrijvingen van belangrijke gebeurtenissen die in beeld komen, bijvoorbeeld informatie over wat mensen aan het doen zijn.' }), '\n', (0, t.jsx)(n.li, { children: 'Gezichtsuitdrukkingen en lichaamstaal, als dat relevant is.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Deze informatie kun je vervolgens ook gebruiken bij het samenstellen van een ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/transcript/', children: 'transcript voor de video.' })] }), '\n', (0, t.jsx)(n.h2, { id: 'help-ik-heb-geen-ruimte-voor-audiodescriptie', children: 'Help, ik heb geen ruimte voor audiodescriptie!' }), '\n', (0, t.jsx)(n.p, { children: 'Het kan lastig zijn om audiodescriptie toe te voegen aan een video, zeker als het om een bestaande video gaat. Gelukkig zijn er een aantal concrete stappen die je kunt nemen om ruimte te maken voor audiodescriptie.' }), '\n', (0, t.jsx)(n.h3, { id: 'audiodescriptie-voor-een-nieuwe-video', children: 'Audiodescriptie voor een nieuwe video' }), '\n', (0, t.jsx)(n.p, { children: 'Ga of laat je een nieuwe video maken? Door vooraf rekening te houden met audiodescriptie maak je de audiodescriptie een natuurlijk onderdeel van de video. Als je in het script rekening houdt met welke informatie er in het audiospoor moet voorkomen, hoef je daarna vaak minder of geen extra audiodescriptie toe te voegen. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Laat de presentator zichzelf en de spreker met naam en functie voorstellen.' }), '\n', (0, t.jsx)(n.li, { children: 'Laat de sprekers elkaar bij naam noemen bij het stellen van een vraag.' }), '\n', (0, t.jsx)(n.li, { children: 'Laat sprekers benoemen welke acties ze uitvoeren, als dat op een natuurlijke manier kan.' }), '\n', (0, t.jsx)(n.li, { children: 'Laat de presentator of spreker belangrijke kenmerken van de omgeving benoemen.' }), '\n', (0, t.jsx)(n.li, { children: 'Laat de spreker de tekst in beeld benoemen, bijvoorbeeld in een opname van een webinar waar de spreker gebruikt maakt van slides met tekst.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast kun je in het script rekening houden met audiodescriptie door te zorgen voor voldoende natuurlijke pauzes:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Laat de spreker niet direct praten aan het begin van de opname, maar pas na een paar seconden.' }), '\n', (0, t.jsx)(n.li, { children: 'Stop niet direct met filmen als de spreker klaar is met spreken, maar film nog een paar seconden door.' }), '\n', (0, t.jsx)(n.li, { children: 'Maak opvul beeld, door bijvoorbeeld de omgeving te filmen.' }), '\n', (0, t.jsx)(n.li, { children: 'Maak notities over waar nog meer audiodescriptie toegevoegd moet worden, zoals bij titelschermen, zodat de editor hier rekening mee kan houden.' }), '\n'] }), '\n', (0, t.jsx)(r.$, { appearance: 'do', title: 'Laat de sprekers in de video zichzelf en anderen voorstellen', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.p, { children: '"Hallo dames en heren, mijn naam is Pieter Bruegel. Ik sta hier vandaag voor het prachtige historische gemeentehuis van de gemeente Luilekkerland. Ik ga in gesprek met Peeter Baltens, beleidsmedewerker bij de gemeente Luilekkerland, en hij gaat mij gaat uitleggen hoe ik mijn verhuizing doorgeef aan de balie van het gemeentehuis. Laten we naar binnen gaan, zodat we aan de slag kunnen. Dag Peeter, wat fijn dat je er bent! Kun je mij vertellen wat ik als eerste moet doen?"' }) }) }) }), '\n', (0, t.jsx)(n.h3, { id: 'audiodescriptie-voor-een-bestaande-video', children: 'Audiodescriptie voor een bestaande video' }), '\n', (0, t.jsx)(n.p, { children: 'Over het algemeen plaats je de audiodescriptie in de natuurlijke pauzes in de video. Maar soms heeft de video waar je audiodescriptie voor maakt geen of niet voldoende natuurlijke pauzes. Of je hier achteraf nog makkelijk iets aan kunt doen, hangt af van in hoeverre je de video nog kunt bewerken.' }), '\n', (0, t.jsx)(n.p, { children: 'Als je niet over de bestanden beschikt die gemaakt zijn om de video te maken, zijn je opties beperkt. In dat geval kun je er voor kiezen om het beeld tijdelijk te pauzeren of om de audiodescriptie (deels) te laten overlappen met de audio in de video, om toch voldoende ruimte te cre\xebren. Als dit je enige optie is, is het goed om na te gaan welke visuele informatie essentieel is. Soms is het namelijk beter om er voor te kiezen de audiodescriptie iets in te korten, in plaats van geluid door elkaar heen te laten lopen.' }), '\n', (0, t.jsx)(n.p, { children: 'Als je over de oorspronkelijke bestanden beschikt, kun je vrij makkelijk ruimte cre\xebren door de overgangen in de video te verlengen. Bijvoorbeeld door:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Titelschermen toe te voegen, bijvoorbeeld tussen de hoofdstukken in een video. Ook aan het begin en einde van de video kun je hierdoor makkelijk secondes toevoegen aan je video.' }), '\n', (0, t.jsx)(n.li, { children: 'Overgangseffecten tussen de sc\xe8nes toe te voegen, bijvoorbeeld door twee stilstaande beelden in elkaar over te laten vloeien, of door het beeld naar zwart te laten vervagen voordat de volgende sc\xe8ne begint.' }), '\n', (0, t.jsx)(n.li, { children: 'Extra beeldmateriaal - die je eerder uit de video zou hebben gesneden - nog enkele tellen door te laten lopen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Wil je muziek toevoegen aan de overgangen? Let er dan wel op dat het volume laag genoeg is om de audiodescriptie duidelijk te kunnen horen.' }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Bepaal voor iedere video:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Is er audiodescriptie aanwezig?' }), '\n', (0, t.jsx)(n.li, { children: 'Is het duidelijk wie er aan het woord is?' }), '\n', (0, t.jsxs)(n.li, { children: ['Komt belangrijke visuele informatie voor in de audiodescriptie? Denk aan:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Teksten die in beeld komen.' }), '\n', (0, t.jsx)(n.li, { children: "Afbeeldingen/logo's die in beeld komen." }), '\n', (0, t.jsx)(n.li, { children: 'Beschrijvingen van gebeurtenissen.' }), '\n', (0, t.jsx)(n.li, { children: 'Beschrijvingen van gezichtsuitdrukkingen en lichaamstaal.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG-succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.2.1/', children: 'Succescriterium 1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.2.3/', children: 'Succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.2.5/', children: 'Succescriterium 1.2.5 Audiodescriptie (vooraf opgenomen)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.2.7/', children: 'Succescriterium 1.2.7 Verlengde audiodescriptie (vooraf opgenomen)' }) }), '\n'] }), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, d.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  50124: (e, n, i) => {
   i.d(n, { $: () => c, x: () => l });
   var o = i(54736),
    t = i(26990),
    d = i(68873),
    a = i(13526),
    r = i(30758),
    s = i(86070);
   const l = (0, r.createContext)({}),
    c = ({ title: e, appearance: n, description: i, children: r, figure: c }) => {
     const v = { do: 'Doen', dont: 'Niet doen' },
      u = c ? 'figure' : 'div',
      p = c ? 'figcaption' : 'div';
     return (0, s.jsxs)(u, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(d.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: v.dont })] }), (0, s.jsx)(d.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(d.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: v.do })] }), (0, s.jsx)(d.fz, { children: e })] }), i] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(l.Provider, { value: { title: e, type: v[n] }, children: r }) })] });
    };
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => r, RM: () => d });
   var o = i(86070),
    t = i(85248);
   const d = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => r });
   var o = i(30758);
   const t = {},
    d = o.createContext(t);
   function a(e) {
    const n = o.useContext(d);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), o.createElement(d.Provider, { value: n }, e.children);
   }
  },
 },
]);
