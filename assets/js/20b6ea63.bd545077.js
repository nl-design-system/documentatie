'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [73694],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => u });
   var t = i(63674),
    o = i(92420),
    r = i(45648),
    a = i(14537),
    d = i(13526),
    s = i(86070);
   function l({ href: e, icon: n = '', title: i, description: t, children: r }) {
    return (0, s.jsxs)('div', { className: 'card', children: [e ? (0, s.jsx)(o.N, { href: e, className: (0, d.A)('cardLink', 'utrecht-link'), children: (0, s.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, s.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, s.jsx)('p', { className: 'cardDescription', children: t }), r] });
   }
   function c({ item: e }) {
    return (0, s.jsx)(l, { title: e.label, description: e.description, children: (0, s.jsx)(a.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, s.jsx)(a.Er, { children: 'link' === e.type ? (0, s.jsx)(o.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, s.jsxs)(o.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, s.jsx)(s.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, r.cC)(e.docId);
    return (0, s.jsx)(l, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function v({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, s.jsx)(h, { item: e });
     case 'category':
      return (0, s.jsx)(c, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, t.$S)();
    return (0, s.jsx)(u, { items: n.items, className: e });
   }
   function u(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, s.jsx)(m, { ...e });
    const o = (0, t.d1)(n);
    return (0, s.jsx)('section', { className: (0, d.A)('row', i), ...e, children: o.map((e, n) => (0, s.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, s.jsx)(v, { item: e }) }, n)) });
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => s });
   var t = i(63674),
    o = i(13526),
    r = i(7361),
    a = i(86070);
   const d = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: d(i.items, n) }] : e), []),
    s = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const s = (0, t.$S)();
     return (0, a.jsx)('div', { ...i, className: (0, o.A)('margin-top--lg', n), children: (0, a.jsx)(r.A, { items: d(s.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => t, d1: () => o });
   i(34374);
   function t(...e) {
    return i(41863).$S(...e);
   }
   function o(...e) {
    return i(41863).d1(...e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => d, RM: () => r });
   var t = i(86070),
    o = i(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => d });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => a });
   var t = i(71170),
    o = i(13526),
    r = i(86070);
   const a = ({ className: e, ...n }) => (0, r.jsx)(t.A, { className: (0, o.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  99949: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => c, contentTitle: () => l, default: () => m, frontMatter: () => s, metadata: () => t, toc: () => h });
   const t = JSON.parse('{"id":"richtlijnen/content/video/README","title":"Introductie richtlijnen voor video","description":"Introductie van de richtlijnen voor video van het NL Design System.","source":"@site/docs/richtlijnen/content/video/README.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video","permalink":"/richtlijnen/content/video","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Introductie richtlijnen voor video","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie video","sidebar_position":2,"pagination_label":"Video","description":"Introductie van de richtlijnen voor video van het NL Design System.","slug":"/richtlijnen/content/video","keywords":["video","audiodescriptie","youtube","vimeo","transcript","ondertiteling","subtitles","captions","gebarentaal","tolk"]},"sidebar":"richtlijnen","previous":{"title":"Tabellen","permalink":"/richtlijnen/content/tekstopmaak/tabellen"},"next":{"title":"Video","permalink":"/richtlijnen/content/video"}}');
   var o = i(86070),
    r = i(85248),
    a = i(78734),
    d = i(49484);
   const s = { title: 'Introductie richtlijnen voor video', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie video', sidebar_position: 2, pagination_label: 'Video', description: 'Introductie van de richtlijnen voor video van het NL Design System.', slug: '/richtlijnen/content/video', keywords: ['video', 'audiodescriptie', 'youtube', 'vimeo', 'transcript', 'ondertiteling', 'subtitles', 'captions', 'gebarentaal', 'tolk'] },
    l = 'Introductie richtlijnen NL Design System voor video',
    c = {},
    h = [{ value: 'Video als communicatiemiddel', id: 'video-als-communicatiemiddel', level: 2 }, { value: 'Voor wie zijn toegankelijke video&#39;s belangrijk?', id: 'voor-wie-zijn-toegankelijke-videos-belangrijk', level: 2 }, { value: 'Help, waar moet ik beginnen?', id: 'help-waar-moet-ik-beginnen', level: 2 }, { value: 'Toegankelijkheidsrichtlijnen', id: 'toegankelijkheidsrichtlijnen', level: 2 }, { value: '1.1.1 Niet-tekstuele content', id: '111-niet-tekstuele-content', level: 3 }, { value: '1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)', id: '121-louter-geluid-en-louter-videobeeld-vooraf-opgenomen', level: 3 }, { value: '1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)', id: '122-ondertitels-voor-doven-en-slechthorenden-vooraf-opgenomen', level: 3 }, { value: '1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)', id: '123-audiodescriptie-of-media-alternatief-vooraf-opgenomen', level: 3 }, { value: '1.2.4 Ondertitels voor doven en slechthorenden (live)', id: '124-ondertitels-voor-doven-en-slechthorenden-live', level: 3 }, { value: '1.2.5 Audiodescriptie (vooraf opgenomen)', id: '125-audiodescriptie-vooraf-opgenomen', level: 3 }, { value: '1.2.6 Gebarentaal (vooraf opgenomen)', id: '126-gebarentaal-vooraf-opgenomen', level: 3 }, { value: '1.2.7 Verlengde audiodescriptie (vooraf opgenomen)', id: '127-verlengde-audiodescriptie-vooraf-opgenomen', level: 3 }, { value: '1.2.8 Media-alternatief (vooraf opgenomen)', id: '128-media-alternatief-vooraf-opgenomen', level: 3 }, { value: '2.3.1 Drie flitsen of beneden drempelwaarde', id: '231-drie-flitsen-of-beneden-drempelwaarde', level: 3 }, ...a.RM];
   function v(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-video', children: 'Introductie richtlijnen NL Design System voor video' }) }), '\n', (0, o.jsx)(n.p, { children: "Het NL Design System geeft richtlijnen voor video's. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek." }), '\n', (0, o.jsx)(n.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, o.jsx)(n.h2, { id: 'video-als-communicatiemiddel', children: 'Video als communicatiemiddel' }), '\n', (0, o.jsx)(n.p, { children: 'Video is een krachtig communicatiemiddel, omdat je in video verschillende vormen van media zoals tekst, geluid en bewegend beeld kunt combineren. Het kan je helpen om complexere onderwerpen begrijpbaar te maken, of juist om mensen te inspireren. Daarnaast kunnen sommige mensen informatie in video-vorm makkelijker verwerken of onthouden dan informatie in alleen geschreven tekst.' }), '\n', (0, o.jsx)(n.p, { children: "Het is daarbij wel belangrijk dat je er rekening mee houdt dat niet iedereen op dezelfde manier toegang heeft tot informatie in video's. Daarom moet je met een aantal dingen rekening houden, zowel voor, tijdens en na het maken van een video." }), '\n', (0, o.jsx)(n.p, { children: "In deze richtlijnen vertellen we je hoe je toegankelijke en gebruiksvriendelijke video's maakt - voor iedereen." }), '\n', (0, o.jsx)(n.h2, { id: 'voor-wie-zijn-toegankelijke-videos-belangrijk', children: "Voor wie zijn toegankelijke video's belangrijk?" }), '\n', (0, o.jsx)(n.p, { children: "Toegankelijke video\u2019s zijn essentieel voor mensen met een auditieve, visuele of cognitieve beperking. Maar ook voor mensen die een andere taal spreken of in een lawaaiige of juist stille omgeving zitten. Door video's toegankelijk te maken, sluit je niemand buiten." }), '\n', (0, o.jsx)(n.h2, { id: 'help-waar-moet-ik-beginnen', children: 'Help, waar moet ik beginnen?' }), '\n', (0, o.jsx)(n.p, { children: "Waarschijnlijk heeft je organisatie in de loop van de tijd een hele hoop video's gepubliceerd. Voordat je aan de slag gaat met het toegankelijk maken van alle bestaande video's, is het handig om te bepalen met welke video's je het beste kunt starten." }), '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsxs)(n.li, { children: ['\n', (0, o.jsx)(n.p, { children: "Maak eerst een volledig overzicht van de video's op jullie website." }), '\n'] }), '\n', (0, o.jsxs)(n.li, { children: ['\n', (0, o.jsx)(n.p, { children: "Sorteer de video's op publicatiedatum. Ga voor oudere video's na of de informatie nog steeds relevant is. Denk bijvoorbeeld aan:" }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: "Video's die te maken hebben met tijdelijke evenementen of projecten." }), '\n', (0, o.jsx)(n.li, { children: "Video's met instructies voor processen of systemen die niet meer in gebruik zijn." }), '\n', (0, o.jsx)(n.li, { children: "Video's die niet meer relevant zijn na wets- of beleidswijzigingen." }), '\n'] }), '\n'] }), '\n', (0, o.jsxs)(n.li, { children: ['\n', (0, o.jsx)(n.p, { children: "Bepaal welke video's aangepast, vervangen of verwijderd moeten worden." }), '\n'] }), '\n', (0, o.jsxs)(n.li, { children: ['\n', (0, o.jsx)(n.p, { children: "Sorteer je overzicht nu op basis van welke video's (en de pagina's waarop de video's staan) het meest bezocht worden." }), '\n'] }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: "Na dit proces hou je - meestal - een kortere lijst aan video's over waarmee je aan de slag kan, op volgorde van urgentie." }), '\n', (0, o.jsx)(n.h2, { id: 'toegankelijkheidsrichtlijnen', children: 'Toegankelijkheidsrichtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Om websites bruikbaar te maken voor mensen met een beperking, gebruiken we de ', (0, o.jsx)(n.a, { href: '/wcag/', children: 'WCAG-richtlijnen' }), ". WCAG staat voor Web Content Accessibility Guidelines. Dit is een set van succescriteria waaraan je kunt toetsen of je website voldoet aan de minimale toegankelijkheidseisen. De WCAG heeft 10 succescriteria die specifiek te maken hebben met video. De succescriteria vallen voornamelijk binnen het principe 'Waarneembaar'. Dit principe houdt in dat content waarneembaar moet zijn voor alle bezoekers, ook voor bezoekers die bijvoorbeeld blind of doof zijn."] }), '\n', (0, o.jsx)(n.h3, { id: '111-niet-tekstuele-content', children: '1.1.1 Niet-tekstuele content' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1' }), " is het allereerste succescriterium in de WCAG. Het legt uit dat 'niet-tekstuele content' een gelijkwaardig tekstalternatief moet hebben."] }), '\n', (0, o.jsxs)(n.p, { children: ['Niet-tekstuele content is een heel brede categorie. Denk aan ', (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: "afbeeldingen zoals foto's, grafieken, en infographics" }), '. Video en audio zijn ook niet-tekstuele content. Deze richtlijnen gaan alleen over video.'] }), '\n', (0, o.jsx)(n.h3, { id: '121-louter-geluid-en-louter-videobeeld-vooraf-opgenomen', children: '1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.1/', children: 'Succescriterium 1.2.1' }), ' gaat over geluid zonder beeld, en beeld zonder geluid.'] }), '\n', (0, o.jsx)(n.p, { children: 'Je moet er voor zorgen dat deze informatie ook op een andere manier beschikbaar is, bijvoorbeeld als uitgeschreven tekst of als audiodescriptie.' }), '\n', (0, o.jsx)(n.h3, { id: '122-ondertitels-voor-doven-en-slechthorenden-vooraf-opgenomen', children: '1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.2/', children: 'Succescriterium 1.2.2' }), ' legt uit dat audio in gesynchroniseerde media, zoals een video, ondertiteling voor doven en slechthorenden moet bevatten.'] }), '\n', (0, o.jsx)(n.p, { children: 'Hierin staat niet alleen de gesproken tekst, maar ook andere belangrijke informatie zoals omgevingsgeluiden.' }), '\n', (0, o.jsx)(n.h3, { id: '123-audiodescriptie-of-media-alternatief-vooraf-opgenomen', children: '1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.3/', children: 'Succescriterium 1.2.3' }), ' schrijft voor dat er voor video content in gesynchroniseerde media een audiodescriptie \xf3f een alternatief zoals een transcript aanwezig moet zijn.'] }), '\n', (0, o.jsx)(n.h3, { id: '124-ondertitels-voor-doven-en-slechthorenden-live', children: '1.2.4 Ondertitels voor doven en slechthorenden (live)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.4/', children: 'Succescriterium 1.2.4' }), ' gaat over het ondertitelen van live video. Bijvoorbeeld tijdens een webinar of ander online evenement.'] }), '\n', (0, o.jsx)(n.p, { children: 'In Nederland is het ondertitelen van live video op het web niet verplicht, maar we geven je toch graag een aantal tips om hier w\xe9l mee aan de slag te gaan.' }), '\n', (0, o.jsx)(n.h3, { id: '125-audiodescriptie-vooraf-opgenomen', children: '1.2.5 Audiodescriptie (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.5/', children: 'Succescriterium 1.2.5' }), ' legt uit dat er voor video content in gesynchroniseerde media een audiodescriptie aanwezig moet zijn.'] }), '\n', (0, o.jsx)(n.p, { children: 'Dit is een belangrijk hulpmiddel voor blinden en slechtzienden om belangrijke visuele informatie in de video te kunnen begrijpen.' }), '\n', (0, o.jsx)(n.p, { children: 'Het verschil met succescriterium 1.2.3 (een succescriterium op niveau A), is dat volgens dit succescriterium (op niveau AA) altijd een audiodescriptie aangeboden moet worden, ook als er al een transcript aanwezig is.' }), '\n', (0, o.jsx)(n.h3, { id: '126-gebarentaal-vooraf-opgenomen', children: '1.2.6 Gebarentaal (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.6/', children: 'Succescriterium 1.2.6' }), " gaat over het toevoegen van gebarentaal aan video's met geluid."] }), '\n', (0, o.jsx)(n.p, { children: 'In Nederland is het niet verplicht om aan dit succescriterium te voldoen, maar geven je toch graag een aantal tips om hier w\xe9l mee aan de slag te gaan.' }), '\n', (0, o.jsx)(n.h3, { id: '127-verlengde-audiodescriptie-vooraf-opgenomen', children: '1.2.7 Verlengde audiodescriptie (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.7/', children: 'Succescriterium 1.2.7' }), ' is een succescriterium op niveau AAA en verschilt van succescriterium 1.2.3 (op AA niveau) door de hoeveelheid audiodescriptie die verplicht is.'] }), '\n', (0, o.jsx)(n.p, { children: 'Het AA succescriterium maakt gebruik van de bestaande pauzes en stiltes in een video, terwijl dit succescriterium ook audiodescriptie vereist als er niet genoeg bestaande pauzes in de video aanwezig zijn.' }), '\n', (0, o.jsx)(n.p, { children: 'In Nederland is het niet verplicht om aan dit succescriterium te voldoen, maar geven je toch graag een aantal tips om hier w\xe9l mee aan de slag te gaan.' }), '\n', (0, o.jsx)(n.h3, { id: '128-media-alternatief-vooraf-opgenomen', children: '1.2.8 Media-alternatief (vooraf opgenomen)' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.8/', children: 'Succescriterium 1.2.8' }), ' gaat over het toevoegen van een media-alternatief, zoals een transcript, \xf3\xf3k als er al audiodescriptie aanwezig is.'] }), '\n', (0, o.jsx)(n.p, { children: 'Dit succescriterium ligt daardoor in het verlengde van succescriteria 1.2.3 en 1.2.5.' }), '\n', (0, o.jsx)(n.p, { children: 'In Nederland is het niet verplicht om aan dit succescriterium te voldoen, maar geven je toch graag een aantal tips om hier w\xe9l mee aan de slag te gaan.' }), '\n', (0, o.jsx)(n.h3, { id: '231-drie-flitsen-of-beneden-drempelwaarde', children: '2.3.1 Drie flitsen of beneden drempelwaarde' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.2.3/', children: 'Succescriterium 3.2.1' }), ' legt uit dat flitsen epileptische aanvallen kunnen veroorzaken bij bezoekers die daar gevoelig voor zijn. Flitsen kunnen ook voorkomen in video-content.'] }), '\n', (0, o.jsx)(d.F, { excludeDocIDs: ['richtlijnen/content/video/README'] }), '\n', (0, o.jsx)(a.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v(e);
   }
  },
 },
]);
