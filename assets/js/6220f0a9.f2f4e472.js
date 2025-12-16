'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84093],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => m });
   var i = t(16609),
    o = t(68873),
    l = t(13526),
    r = t(58713),
    d = t(87347),
    s = t(39644),
    a = t(92406),
    c = t(63313),
    g = t(30758),
    h = t(31186),
    v = t(86070);
   const p = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   p.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const u = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   u.displayName = 'SurfaceContainer';
   const m = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: b, container: k = 'document', language: x, designTokens: f }) => {
    const y = 'function' == typeof b ? b() : b,
     z = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(z || y),
     [_, C] = (0, g.useState)(w),
     [O, N] = (0, g.useState)(t);
    (0, g.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: x, plugins: [r.A, d.Ay, s.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [w]);
    const A = (0, g.useId)();
    let D = g.Fragment;
    return (
     'paragraph' === k ? (D = p) : 'document' === k ? (D = j) : 'surface' === k && (D = u),
     (0, v.jsxs)('div', {
      className: (0, l.A)('nlds-canvas'),
      children: [
       y && (0, v.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(D, { children: (0, v.jsx)(o.v$, { children: y }) }) }) }),
       m &&
        (0, v.jsx)('div', {
         className: (0, l.A)('nlds-canvas__toolbar'),
         children: (0, v.jsx)(o.$n, {
          className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           N(!O);
          },
          'aria-expanded': O,
          'aria-controls': A,
          children: O ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       m &&
        (0, v.jsxs)('div', {
         className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: A,
         hidden: !O,
         children: [
          (0, v.jsx)(i.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: _, trim: !0 }),
          n &&
           (0, v.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, v.jsx)(o.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, t) => {
   t.d(n, { M: () => a });
   var i = t(68873),
    o = t(16194),
    l = t(30758),
    r = t(50124);
   const d = {
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
   function a({ lineNumber: e, syntax: n, textContent: t, trim: a }) {
    let c = t;
    const { title: g, type: h } = (0, l.useContext)(r.x),
     v = (0, l.useId)();
    return a && (c = c.trim()), (0, s.jsx)(o.f4, { theme: d, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: l }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, s.jsx)(i.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': v, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...o({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  45043: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => a, contentTitle: () => s, default: () => h, frontMatter: () => d, metadata: () => i, toc: () => c });
   const i = JSON.parse('{"id":"richtlijnen/content/video/ondertiteling","title":"Ondertiteling \xb7 Video \xb7 Content \xb7 Richtlijnen","description":"Richtlijnen voor ondertiteling binnen NL Design System","source":"@site/docs/richtlijnen/content/video/ondertiteling.md","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/ondertiteling","permalink":"/richtlijnen/content/video/ondertiteling","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/ondertiteling.md","tags":[],"version":"current","frontMatter":{"title":"Ondertiteling \xb7 Video \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Ondertiteling","pagination_label":"Ondertiteling","description":"Richtlijnen voor ondertiteling binnen NL Design System","slug":"/richtlijnen/content/video/ondertiteling","keywords":["video","youtube","vimeo","transcript","ondertiteling","subtitles","captions"]},"sidebar":"richtlijnen","previous":{"title":"Gebarentaal","permalink":"/richtlijnen/content/video/gebarentaal"},"next":{"title":"Transcript","permalink":"/richtlijnen/content/video/transcript"}}');
   var o = t(86070),
    l = t(85248),
    r = (t(8649), t(50124), t(78734));
   const d = { title: 'Ondertiteling \xb7 Video \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Ondertiteling', pagination_label: 'Ondertiteling', description: 'Richtlijnen voor ondertiteling binnen NL Design System', slug: '/richtlijnen/content/video/ondertiteling', keywords: ['video', 'youtube', 'vimeo', 'transcript', 'ondertiteling', 'subtitles', 'captions'] },
    s = 'Ondertiteling',
    a = {},
    c = [{ value: 'Ondertiteling als vertaling', id: 'ondertiteling-als-vertaling', level: 2 }, { value: 'Ondertiteling voor doven en slechthorenden', id: 'ondertiteling-voor-doven-en-slechthorenden', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 3 }, { value: 'Ondertiteling voor iedereen', id: 'ondertiteling-voor-iedereen', level: 2 }, { value: 'Gesloten en open ondertiteling', id: 'gesloten-en-open-ondertiteling', level: 2 }, { value: 'Gesloten ondertiteling - Closed Captions', id: 'gesloten-ondertiteling---closed-captions', level: 3 }, { value: 'Voordelen', id: 'voordelen', level: 4 }, { value: 'Open ondertiteling - Open Captions', id: 'open-ondertiteling---open-captions', level: 3 }, { value: 'Voordelen', id: 'voordelen-1', level: 4 }, { value: 'Toegankelijke open ondertiteling', id: 'toegankelijke-open-ondertiteling', level: 4 }, { value: 'Toegankelijke ondertiteling in meerdere talen', id: 'toegankelijke-ondertiteling-in-meerdere-talen', level: 2 }, { value: 'Ondertiteling bij live video', id: 'ondertiteling-bij-live-video', level: 2 }, { value: 'Automatisch gegenereerde ondertiteling', id: 'automatisch-gegenereerde-ondertiteling', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function g(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'ondertiteling', children: 'Ondertiteling' }) }), '\n', (0, o.jsx)(n.p, { children: "Ondertiteling is de leesbare weergave van spraak, geluid, toon en volume in video's. In het Engels bestaan er meerdere woorden voor ondertiteling die een wezenlijk verschil in betekenis hebben. Daarom leggen we in deze richtlijnen ook de Engelse termen uit, om het onderscheid te verduidelijken." }), '\n', (0, o.jsx)(n.p, { children: "We maken onderscheid tussen ondertiteling als vertaling (subtitles) en ondertiteling voor doven en slechthorenden (captions). Daarnaast is er een verschil in 'open ondertiteling' (Open Captions) en 'gesloten ondertiteling' (Closed Captions)." }), '\n', (0, o.jsx)(n.h2, { id: 'ondertiteling-als-vertaling', children: 'Ondertiteling als vertaling' }), '\n', (0, o.jsx)(n.p, { children: 'Ondertiteling als vertaling kom je bijvoorbeeld tegen als de audio in de video Engelstalig is en de ondertiteling Nederlands. Dit zorgt ervoor dat mensen die de taal waarin de audio is opgenomen niet begrijpen, de informatie met behulp van de ondertiteling alsnog kunnen begrijpen.' }), '\n', (0, o.jsx)(n.p, { children: "De Engelse term voor deze vorm van ondertiteling is 'subtitles' en bevat over het algemeen alleen de vertaling van gesproken woord in een video." }), '\n', (0, o.jsx)(n.h2, { id: 'ondertiteling-voor-doven-en-slechthorenden', children: 'Ondertiteling voor doven en slechthorenden' }), '\n', (0, o.jsx)(n.p, { children: 'Ondertiteling voor doven en slechthorenden is uitgebreider en bevat ook geluid en de toon van het geluid, bijvoorbeeld [spannende muziek] of [doffe dreun in de verte]. Dit zorgt ervoor dat bezoekers die de audio helemaal niet kunnen horen ook informatie meekrijgen over wat er gebeurt, ook wanneer er niet gesproken wordt. Daarnaast is deze vorm van ondertiteling in eerste instantie in de taal van de video zelf - het is dus geen vertaling.' }), '\n', (0, o.jsxs)(n.p, { children: ["De Engelse term voor deze vorm van ondertiteling is 'captions'. Dit is de ondertiteling die vereist is binnen de ", (0, o.jsx)(n.a, { href: '/wcag/', children: 'WCAG-richtlijnen' }), ' en die doven en slechthorenden helpen om toegang te hebben tot alle informatie in een video.'] }), '\n', (0, o.jsx)(n.h3, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(n.p, { children: 'Welke informatie moet je in ondertiteling benoemen? Dat ligt er aan welke geluiden belangrijk zijn voor wat je wilt overbrengen in de video. Onthoud dat geluid, volume en toon vaak een belangrijke verhalende rol hebben. Denk aan:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'De gesproken tekst. Dit voeg je altijd toe aan je ondertiteling.' }), '\n', (0, o.jsx)(n.li, { children: 'Belangrijke geluiden zoals lachen, een dichtslaande deur, omgevingsgeluid of muziek.' }), '\n', (0, o.jsx)(n.li, { children: 'Volume of intonatie. Schreeuwt iemand, of fluistert diegene juist? Zegt iemand iets op een sarcastische manier of zelfs spottend?' }), '\n', (0, o.jsx)(n.li, { children: 'De naam of beschrijving van degene die iets zegt. Soms is de spreker niet in beeld maar wel te horen, voeg dan toe om wie het gaat.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Om onderscheid te maken tussen gesproken tekst en de beschrijving van de geluiden, plaats je de beschrijvingen van geluiden tussen vierkante haakjes (bijvoorbeeld [spannende muziek]). De naam van de spreker plaats je boven of aan het begin van een zin, tussen ronde haakjes of gevolgd door een dubbele punt.' }), '\n', (0, o.jsx)(n.h2, { id: 'ondertiteling-voor-iedereen', children: 'Ondertiteling voor iedereen' }), '\n', (0, o.jsx)(n.p, { children: 'Doven en slechthorenden zijn niet de enige mensen die baat hebben bij ondertiteling. Ondertiteling is ook handig:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'voor mensen die in een stiltecoup\xe9 of andere stille ruimte een video willen bekijken zonder een koptelefoon.' }), '\n', (0, o.jsx)(n.li, { children: 'voor mensen die in een rumoerige omgeving werken en daardoor de audio niet goed kunnen horen.' }), '\n', (0, o.jsx)(n.li, { children: 'voor mensen die de gesproken taal niet goed kunnen begrijpen of de taal juist willen leren.' }), '\n', (0, o.jsx)(n.li, { children: 'in situaties waarin de spreker niet duidelijk articuleert of bijvoorbeeld een sterk accent heeft.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Bied daarom altijd ondertiteling aan, zodat iedereen je video goed kan begrijpen.' }), '\n', (0, o.jsx)(n.h2, { id: 'gesloten-en-open-ondertiteling', children: 'Gesloten en open ondertiteling' }), '\n', (0, o.jsx)(n.p, { children: 'Ho\xe9 je ondertiteling aanbiedt kan ook invloed hebben op hoe gebruiksvriendelijk je video is.' }), '\n', (0, o.jsx)(n.h3, { id: 'gesloten-ondertiteling---closed-captions', children: 'Gesloten ondertiteling - Closed Captions' }), '\n', (0, o.jsxs)(n.p, { children: ["Gesloten ondertiteling (Closed Captions) is ondertiteling die de bezoeker zelf aan of uit kan zetten. Meestal staat deze vorm van ondertiteling standaard uit - oftewel 'gesloten'. Je biedt het aan als een los bestand, zoals een ", (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API', children: 'vtt bestand (Engels)' }), ' of een ', (0, o.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/SubRip#SubRip-formaat', children: 'srt bestand' }), '. In veel videospelers kun je deze vorm van ondertiteling aan- of uitzetten met de "CC" knop, de afkorting voor Closed Captions.'] }), '\n', (0, o.jsx)(n.h4, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, o.jsx)(n.p, { children: 'Het gebruik van gesloten ondertiteling heeft een aantal grote voordelen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Bezoekers kiezen zelf of ze er gebruik van willen maken.' }), '\n', (0, o.jsxs)(n.li, { children: ['Daarnaast kan een bezoeker, afhankelijk van met welke videospeler je de video aanbiedt, ook zelf de ', (0, o.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'kleur' }), ', ', (0, o.jsx)(n.a, { href: '/wcag/1.4.4/', children: 'grootte' }), ' en ', (0, o.jsx)(n.a, { href: '/wcag/1.4.12/', children: 'tekstafstand' }), ' aanpassen.'] }), '\n', (0, o.jsx)(n.li, { children: 'De grootte van de ondertiteling wordt bij een aantal bekende videospelers ook automatisch aangepast aan de grootte van het scherm waar de bezoeker de video op bekijkt.' }), '\n', (0, o.jsx)(n.li, { children: 'Omdat de bestanden waarin de ondertiteling staat tekstbestanden zijn, kunnen zoekmachines de bestanden ook lezen.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Dit maakt gesloten ondertiteling veelzijdig en meestal de meest toegankelijke keuze.' }), '\n', (0, o.jsx)(n.h3, { id: 'open-ondertiteling---open-captions', children: 'Open ondertiteling - Open Captions' }), '\n', (0, o.jsx)(n.p, { children: 'Open ondertiteling (Open Captions) is ondertiteling die is opgenomen in het videobestand. De ondertiteling is voor iedereen zichtbaar en bezoekers kunnen de ondertiteling niet zelf aan of uit zetten.' }), '\n', (0, o.jsx)(n.p, { children: "Omdat de ondertiteling 'vast' zit in het bestand, is de tekst van de ondertiteling ook niet doorzoekbaar voor zoekmachines. Een bezoeker kan ook niet de kleur, grootte of tekstafstand aanpassen om de tekst beter leesbaar te maken." }), '\n', (0, o.jsx)(n.h4, { id: 'voordelen-1', children: 'Voordelen' }), '\n', (0, o.jsx)(n.p, { children: 'Het gebruik van open ondertiteling wordt vaak bestempeld als ontoegankelijk, maar het heeft ook voordelen. Als je er zeker van wil zijn dat iedereen altijd ondertiteling ziet, ongeacht op welk platform de bezoeker de video ziet, zijn open captions juist heel praktisch. Bijvoorbeeld als je dezelfde video deelt op social media, waar videospelers niet altijd de optie hebben om ondertiteling aan of uit te zetten.' }), '\n', (0, o.jsx)(n.h4, { id: 'toegankelijke-open-ondertiteling', children: 'Toegankelijke open ondertiteling' }), '\n', (0, o.jsx)(n.p, { children: 'Omdat de bezoeker zelf geen invloed heeft op hoe de tekst van de ondertiteling eruit ziet, is het belangrijk dat je daar zelf op let:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Zorg er voor dat het ', (0, o.jsx)(n.a, { href: '/contrast/', children: 'contrast tussen de tekstkleur en de achtergrond hoog genoeg is' }), '.'] }), '\n', (0, o.jsx)(n.li, { children: 'Maak de tekst groot genoeg. Hier is geen standaard grootte voor, omdat dit afhangt van de grootte van het scherm waar je video voor maakt. Met een klein scherm en een relatief grote kijkafstand, zoals op een mobiele telefoon, moet de ondertiteling een groter deel van het scherm in beslag nemen dan op een desktop monitor of op een bioscoopscherm.' }), '\n', (0, o.jsxs)(n.li, { children: ['Kies een goed ', (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettertype/', children: 'leesbaar lettertype' }), '.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'toegankelijke-ondertiteling-in-meerdere-talen', children: 'Toegankelijke ondertiteling in meerdere talen' }), '\n', (0, o.jsx)(n.p, { children: 'De ondertiteling waar we het over hebben als we het hebben over toegankelijkheid en specifieker over WCAG, is de ondertiteling voor doven en slechthorenden. Maar het aanbieden van ondertiteling in meerdere talen is natuurlijk net zo goed een vorm van toegankelijkheid. Je kunt er voor kiezen om voor iedere taal twee verschillende ondertitelingen aan te bieden, eentje z\xf3nder beschrijvingen en eentje m\xe9t. Zo kunnen je bezoekers zelf kiezen wat het beste bij hen past.' }), '\n', (0, o.jsx)(n.h2, { id: 'ondertiteling-bij-live-video', children: 'Ondertiteling bij live video' }), '\n', (0, o.jsx)(n.p, { children: 'Bied je ook live video aan, zoals webinars of andere livestreams? Ondertiteling bij live video\u2019s is in Nederland niet wettelijk verplicht. Maar het is voor veel mensen prettig als je het wel toevoegt.' }), '\n', (0, o.jsx)(n.p, { children: 'Tegenwoordig zijn hier verschillende opties voor, zoals een schrijftolk, een ondertitelfunctie in software voor online meetings en software die gebruik maakt van AI. Als je vaker live video aanbiedt, vraag dan regelmatig feedback aan je kijkers, zodat je de optie kiest die het beste bij je publiek past.' }), '\n', (0, o.jsx)(n.p, { children: "Plaats je de video n\xe1 het live evenement ook online? Dan gelden weer de richtlijnen voor vooraf opgenomen video's." }), '\n', (0, o.jsx)(n.p, { children: 'Let op: Is live video onderdeel van de service die je aanbiedt en biedt je dat ook in andere landen aan? Zoek dan goed uit welke verplichtingen in dat land gelden, die kunnen afwijken van de regels in Nederland.' }), '\n', (0, o.jsx)(n.h2, { id: 'automatisch-gegenereerde-ondertiteling', children: 'Automatisch gegenereerde ondertiteling' }), '\n', (0, o.jsx)(n.p, { children: 'Een aantal videoplatforms bieden automatisch gegenereerde ondertiteling aan. Ondanks dat de kwaliteit van deze ondertiteling steeds beter wordt, is het nog altijd belangrijk de ondertiteling zelf na te lopen en aan te passen.' }), '\n', (0, o.jsx)(n.p, { children: 'Besteed extra aandacht aan:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Interpunctie. Automatisch gegenereerde ondertiteling bevat vaak geen of slechte interpunctie. Interpunctie is heel belangrijk voor de leesbaarheid van ondertiteling.' }), '\n', (0, o.jsx)(n.li, { children: 'Geluiden, toon en volume. Deze beschrijvingen komen meestal niet voor in automatisch gegenereerde ondertiteling en zul je zelf nog moeten toevoegen.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, o.jsx)(n.p, { children: 'Bepaal voor iedere video:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Heeft de video ondertiteling?' }), '\n', (0, o.jsx)(n.li, { children: 'Komt alle dialoog voor in de video en is het duidelijk wie er spreekt, als diegene niet in beeld is?' }), '\n', (0, o.jsx)(n.li, { children: 'Komt andere belangrijke informatie uit de audio voor in de ondertiteling?' }), '\n', (0, o.jsx)(n.li, { children: 'Heeft de ondertiteling de juiste opmaak?' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.2.2/', children: 'Succescriterium 1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.2.4/', children: 'Succescriterium 1.2.4 Ondertitels voor doven en slechthorenden (live)' }) }), '\n'] }), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => a });
   var i = t(54736),
    o = t(26990),
    l = t(68873),
    r = t(13526),
    d = t(30758),
    s = t(86070);
   const a = (0, d.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: d, figure: c }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      v = c ? 'figcaption' : 'div';
     return (0, s.jsxs)(h, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(l.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, s.jsx)(l.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(l.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, s.jsx)(l.fz, { children: e })] }), t] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(a.Provider, { value: { title: e, type: g[n] }, children: d }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => d, RM: () => l });
   var i = t(86070),
    o = t(85248);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => r, x: () => d });
   var i = t(30758);
   const o = {},
    l = i.createContext(o);
   function r(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
