'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4805],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => g });
   var i = t(16609),
    r = t(68873),
    o = t(13526),
    a = t(58713),
    l = t(87347),
    s = t(39644),
    d = t(92406),
    c = t(63313),
    p = t(30758),
    h = t(31186),
    u = t(86070);
   const v = ({ children: e }) => (0, u.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, u.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const m = ({ children: e }) => (0, u.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   m.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: g = !0, children: k, container: b = 'document', language: x, designTokens: y }) => {
    const f = 'function' == typeof k ? k() : k,
     z = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : h.qV(z || f),
     [w, N] = (0, p.useState)(_),
     [A, C] = (0, p.useState)(t);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(_, { parser: x, plugins: [a.A, l.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [_]);
    const S = (0, p.useId)();
    let V = p.Fragment;
    return (
     'paragraph' === b ? (V = v) : 'document' === b ? (V = j) : 'surface' === b && (V = m),
     (0, u.jsxs)('div', {
      className: (0, o.A)('nlds-canvas'),
      children: [
       f && (0, u.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, u.jsx)(V, { children: (0, u.jsx)(r.v$, { children: f }) }) }) }),
       g &&
        (0, u.jsx)('div', {
         className: (0, o.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(r.$n, {
          className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': S,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, u.jsxs)('div', {
         className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !A,
         children: [
          (0, u.jsx)(i.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(r.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   var i = t(68873),
    r = t(16194),
    o = t(30758),
    a = t(50124);
   const l = {
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
    const { title: p, type: h } = (0, o.useContext)(a.x),
     u = (0, o.useId)();
    return d && (c = c.trim()), (0, s.jsx)(r.f4, { theme: l, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: r, getTokenProps: o }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, s.jsx)(i.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...r({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  36211: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => c, default: () => v, frontMatter: () => d, metadata: () => i, toc: () => h });
   const i = JSON.parse('{"id":"richtlijnen/content/video/transcript","title":"Transcript \xb7 Video \xb7 Content \xb7 Richtlijnen","description":"Richtlijnen voor transcripten bij video\'s binnen NL Design System","source":"@site/docs/richtlijnen/content/video/transcript.md","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/transcript","permalink":"/richtlijnen/content/video/transcript","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/transcript.md","tags":[],"version":"current","frontMatter":{"title":"Transcript \xb7 Video \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Transcript","pagination_label":"Transcript","description":"Richtlijnen voor transcripten bij video\'s binnen NL Design System","slug":"/richtlijnen/content/video/transcript","keywords":["video","youtube","vimeo","transcript","transcriptie","transcriberen","ondertiteling"]},"sidebar":"richtlijnen","previous":{"title":"Ondertiteling","permalink":"/richtlijnen/content/video/ondertiteling"},"next":{"title":"Kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden"}}');
   var r = t(86070),
    o = t(85248),
    a = t(8649),
    l = t(50124),
    s = t(78734);
   const d = { title: 'Transcript \xb7 Video \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Transcript', pagination_label: 'Transcript', description: "Richtlijnen voor transcripten bij video's binnen NL Design System", slug: '/richtlijnen/content/video/transcript', keywords: ['video', 'youtube', 'vimeo', 'transcript', 'transcriptie', 'transcriberen', 'ondertiteling'] },
    c = 'Transcript bij video',
    p = {},
    h = [{ value: 'Voordelen', id: 'voordelen', level: 2 }, { value: 'Wat plaats je in een transcript van een video?', id: 'wat-plaats-je-in-een-transcript-van-een-video', level: 2 }, { value: 'Ondertiteling en audiodescriptie combineren', id: 'ondertiteling-en-audiodescriptie-combineren', level: 3 }, { value: 'De opmaak van een transcript', id: 'de-opmaak-van-een-transcript', level: 2 }, { value: 'Waar plaats je een transcript?', id: 'waar-plaats-je-een-transcript', level: 2 }, { value: 'Een transcript bij een video op je eigen website', id: 'een-transcript-bij-een-video-op-je-eigen-website', level: 3 }, { value: 'Een transcript bij een video op een andere website', id: 'een-transcript-bij-een-video-op-een-andere-website', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function u(e) {
    const n = { a: 'a', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'transcript-bij-video', children: 'Transcript bij video' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een transcript bij een video is een uitgeschreven tekst van de informatie in een video. Het bevat:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Gesproken dialoog.' }), '\n', (0, r.jsx)(n.li, { children: 'Andere belangrijke informatie in audio, zoals omgevingsgeluiden en informatie over wie er aan het woord is.' }), '\n', (0, r.jsx)(n.li, { children: 'Belangrijke visuele informatie in video, zoals de acties van mensen en teksten die in beeld verschijnen.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van een transcript bij een video is voor een grote doelgroep een fijne manier om video toegankelijker te maken. Het helpt mensen die slechthorend of doof zijn, maar ook mensen die de video liever lezen dan kijken. Doofblinde mensen kunnen de tekst in het transcript met een brailleregel uitlezen, zo hebben zij toch toegang tot dezelfde informatie.' }), '\n', (0, r.jsx)(n.p, { children: 'Omdat een transcript uit tekst bestaat, kunnen zoekmachines de informatie ook lezen. Daarnaast zijn transcripten ook handig voor zoeken binnen de website, vertalen en archiveren.' }), '\n', (0, r.jsx)(n.h2, { id: 'wat-plaats-je-in-een-transcript-van-een-video', children: 'Wat plaats je in een transcript van een video?' }), '\n', (0, r.jsx)(n.p, { children: 'Benoem in een transcript bij een video met beeld en geluid:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De gesproken tekst.' }), '\n', (0, r.jsx)(n.li, { children: 'Belangrijke geluiden zoals lachen, een dichtslaande deur of rinkelend glas.' }), '\n', (0, r.jsx)(n.li, { children: 'Informatie over achtergrondmuziek, als dat in de video een verhalende rol heeft.' }), '\n', (0, r.jsx)(n.li, { children: 'Wie er aan het woord is.' }), '\n', (0, r.jsx)(n.li, { children: 'Het volume of de intonatie van de gesproken teksten.' }), '\n', (0, r.jsx)(n.li, { children: 'Bijzondere spraakkenmerken, zoals een accent of dat iemand stottert. Benoem dit daarna alleen nog een keer als het verandert.' }), '\n', (0, r.jsx)(n.li, { children: 'Teksten die in beeld komen, zoals de naam en functie van een spreker. Maar ook titelschermen, hoofdstuknamen en links.' }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: 'Beschrijvingen van belangrijke afbeeldingen' }), ' die in beeld komen, zoals het logo van de organisatie.'] }), '\n', (0, r.jsx)(n.li, { children: 'Beschrijvingen van belangrijke gebeurtenissen die in beeld komen, bijvoorbeeld informatie over wat mensen aan het doen zijn.' }), '\n', (0, r.jsx)(n.li, { children: 'Gezichtsuitdrukkingen en lichaamstaal, als dat relevant is.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Een transcript moet dezelfde informatie bevatten als de video. Pas daarom de zinnen van de gesproken tekst niet aan, ook niet als de grammatica niet klopt of de spreker diens zin niet afmaakt.' }), '\n', (0, r.jsx)(n.h3, { id: 'ondertiteling-en-audiodescriptie-combineren', children: 'Ondertiteling en audiodescriptie combineren' }), '\n', (0, r.jsxs)(n.p, { children: ['Als je al ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/ondertiteling/', children: 'ondertiteling' }), ' en een script voor ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/audiodescriptie/', children: 'audiodescriptie' }), ' hebt geschreven, kun je deze teksten combineren en gebruiken als basis van je transcript. Structureer de informatie per sc\xe8ne en controleer of je geen belangrijke informatie hebt gemist.'] }), '\n', (0, r.jsx)(n.h2, { id: 'de-opmaak-van-een-transcript', children: 'De opmaak van een transcript' }), '\n', (0, r.jsx)(n.p, { children: 'Het is belangrijk om structuur aan te brengen in tekstbestanden om ze toegankelijker en prettiger leesbaar te maken. Voor een transcript is dat niet anders.' }), '\n', (0, r.jsxs)(n.p, { children: ['Maak daarom ook in een transcript gebruik van ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/', children: 'kopjes, paragrafen, leestekens en interpunctie' }), '. Voeg bij een lange video eventueel tijdmarkeringen toe.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Maak onderscheid tussen beschrijvingen en gesproken tekst. Plaats beschrijvingen tussen ronde haakjes te plaatsen of benoem waar de beschrijving over gaat. Bijvoorbeeld: (de kat krabt de krullen van de trap) of In beeld: De kat krabt de krullen van de trap.' }), '\n', (0, r.jsxs)(n.li, { children: ['Als de spreker een woord benadrukt, gebruik dan ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'tekstopmaak om tekst te benadrukken' }), '. Gebruik ', (0, r.jsx)(n.em, { children: 'schuingedrukte tekst' }), ' voor nadruk in uitspraak en ', (0, r.jsx)(n.strong, { children: 'dikgedrukte tekst' }), ' om te benadrukken dat een woord heel belangrijk is.'] }), '\n', (0, r.jsx)(n.li, { children: 'Plaats de naam van de spreker met daarna een dubbele punt v\xf3\xf3r de uitgeschreven gesproken tekst. Bijvoorbeeld: Jeffrey: "Goedemiddag allemaal, welkom bij de Heartbeat van 15 april."' }), '\n'] }), '\n', (0, r.jsx)(l.$, { appearance: 'do', title: 'Breng structuur aan in je transcript en maak onderscheid tussen gesproken dialoog en beschrijvingen', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { children: 'Je verhuizing doorgeven' }), (0, r.jsx)(n.p, { children: '(Logo van de gemeente Luilekkerland verschijnt in beeld, met op de achtergrond een groene heuvel, zonnetje en molen die langzaam draait.)' }), (0, r.jsx)(n.p, { children: '(Vrolijk fluitmuziekje, in middeleeuwse stijl.)' }), (0, r.jsxs)(n.p, { children: ['Voice over Pieter Bruegel (opgewekt): "Welkom, goede nieuwe burgers van Luilekkerland! Verhuist gij binnenkort? Dan dient gij dit te ', (0, r.jsx)(n.strong, { children: 'melden' }), ' bij de gemeente!"'] }), (0, r.jsx)(n.h2, { children: 'Je verhuizing doorgeven via het internet' }), (0, r.jsx)(n.p, { children: '(Pieter zit in een schilderachtige werkkamer op een bureaustoel achter een statig bureau. Hij klapt een laptop open. Op het scherm: luilekkerland.nl/verhuizen.)' }), (0, r.jsxs)(n.p, { children: ['Pieter Bruegel: "De ', (0, r.jsx)(n.em, { children: 'makkelijkste' }), ' manier? Gewoon online! Ga naar onze website, klik op \u2018Verhuizing doorgeven\u2019 en vul uw gegevens in."'] }), (0, r.jsx)(n.p, { children: "(Close-up van het invulformulier. Pieter vult zijn postcode en verhuisdatum in. Hij klikt op 'Verzenden' en er klinkt een bevestigingsgeluidje.)" }), (0, r.jsx)(n.p, { children: 'Pieter Bruegel (lachend): "En hop, uw verhuizing is bekend. U hoeft niet eens uw pantoffels uit te doen!"' }), (0, r.jsx)(n.p, { children: '(Pieter leunt tevreden achterover op zijn bureaustoel. De camera zoomt uit, door het raam naar buiten, totdat het huis van Pieter volledig in beeld is. In de tuin van de buurman eet een man van een berg rijstebrij.)' }), (0, r.jsx)(n.p, { children: '(Vrolijk fluitmuziekje, in middeleeuwse stijl.)' }), (0, r.jsx)(n.p, { children: 'Voice over: "Verhuizen? Geef het door via www.luilekkerland.nl/verhuizen"' }), (0, r.jsx)(n.p, { children: '(Logo van de gemeente Luilekkerland verschijnt in beeld, met daar onder de link www.luilekkerland.nl/verhuizen.)' })] }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'waar-plaats-je-een-transcript', children: 'Waar plaats je een transcript?' }), '\n', (0, r.jsx)(n.p, { children: 'Nu je een transcript van je video hebt gemaakt, is het belangrijk het op een logische plek aan te bieden.' }), '\n', (0, r.jsx)(n.h3, { id: 'een-transcript-bij-een-video-op-je-eigen-website', children: 'Een transcript bij een video op je eigen website' }), '\n', (0, r.jsxs)(n.p, { children: ['Plaats een transcript direct onder je video, als gewone tekst. Als je het transcript niet volledig zichtbaar op je pagina wilt plaatsen, kun je er voor kiezen de tekst in een ', (0, r.jsx)(n.a, { href: '/accordion/', children: 'accordion' }), ' te zetten. Op die manier kunnen bezoekers zelf kiezen of ze de tekst willen lezen of overslaan.'] }), '\n', (0, r.jsxs)(n.p, { children: ["Vergeet niet duidelijk te maken d\xe1t het om een transcript gaat, bijvoorbeeld door 'Transcript' of 'Uitgeschreven tekst' als ", (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'koptekst' }), ' boven je transcript te plaatsen.'] }), '\n', (0, r.jsx)(n.h3, { id: 'een-transcript-bij-een-video-op-een-andere-website', children: 'Een transcript bij een video op een andere website' }), '\n', (0, r.jsx)(n.p, { children: 'Verwijs je bezoekers naar een andere website om je video te bekijken? Plaats dan het transcript op een logische plek in de buurt van de link naar de video.' }), '\n', (0, r.jsx)(n.p, { children: "Soms is het niet handig om een transcript op de pagina zelf te plaatsen, bijvoorbeeld als je een overzichtspagina hebt met links naar meerdere video's. In dat geval kun je er ook voor kiezen om het transcript op een aparte pagina te plaatsen en in het overzicht een link naar je transcript toe te voegen." }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Bepaal voor iedere video:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Is er een transcript aanwezig?' }), '\n', (0, r.jsx)(n.li, { children: 'Staat het transcript op een logische, goed bereikbare plek? Of wordt er op een logische plek naar het transcript verwezen?' }), '\n', (0, r.jsx)(n.li, { children: 'Komt alle dialoog in het transcript voor en is het duidelijk wie er spreekt?' }), '\n', (0, r.jsx)(n.li, { children: 'Komt alle belangrijke visuele informatie voor in het transcript?' }), '\n', (0, r.jsx)(n.li, { children: 'Komt alle belangrijke informatie uit de audio voor in het transcript?' }), '\n', (0, r.jsx)(n.li, { children: 'Heeft het transcript de juiste opmaak en structuur?' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.2.1/', children: 'Succescriterium 1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.2.3/', children: 'Succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.2.8/', children: 'Succescriterium 1.2.8 Media-alternatief (vooraf opgenomen)' }) }), '\n'] }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => d });
   var i = t(54736),
    r = t(26990),
    o = t(68873),
    a = t(13526),
    l = t(30758),
    s = t(86070);
   const d = (0, l.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: l, figure: c }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      u = c ? 'figcaption' : 'div';
     return (0, s.jsxs)(h, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, s.jsx)(o.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, s.jsx)(o.fz, { children: e })] }), t] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: l }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => o });
   var i = t(86070),
    r = t(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => l });
   var i = t(30758);
   const r = {},
    o = i.createContext(r);
   function a(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
