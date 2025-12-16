'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [70738],
 {
  1162: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  19877: (e, n, i) => {
   i.d(n, { E: () => a });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const a = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function a(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    l = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: a = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, i), ...l(t), ...a }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  68380: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => k, default: () => b, frontMatter: () => j, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"wcag/2.4.10","title":"WCAG-succescriterium 2.4.10 Paragraafkoppen","description":"Gebruik paragraafkoppen (kopjes) om de content te structureren.","source":"@site/docs/wcag/2.4.10.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.10","permalink":"/wcag/2.4.10","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.10.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.10 Paragraafkoppen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.10 Paragraafkoppen","pagination_label":"WCAG-succescriterium 2.4.10 Paragraafkoppen","description":"Gebruik paragraafkoppen (kopjes) om de content te structureren.","slug":"2.4.10","keywords":["WCAG","AAA","bedienbaar","navigeerbaar","operable","navigable","section headings"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.9 Linkdoel (alleen link)","permalink":"/wcag/2.4.9"},"next":{"title":"WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)","permalink":"/wcag/2.4.11"}}');
   var t = i(86070),
    s = i(85248),
    a = i(46563),
    o = i(19877),
    l = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(1162),
    p = i(47219);
   function g(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Gebruik koppen om de content te structureren. Aan de hand van de koppenstructuur geef je een goede indruk van de inhoud. Het is dan niet nodig de hele tekst te lezen om te vinden wat je zoekt.' }), '\n', (0, t.jsx)(n.p, { children: "Een paragraaf is gedefinieerd als een 'op zichzelf staand gedeelte van geschreven content die gaat over \xe9\xe9n of meer gerelateerde onderwerpen of idee\xebn'. Dit succescriterium gaat alleen over de indeling en aanduiding de inhoud. Dit kan tekst zijn, maar ook een tabel, lijst of bijvoorbeeld een grafiek." }), '\n', (0, t.jsxs)(n.p, { children: ['De naam is \u2018paragraaf\u2019 in dit succescriterium is een vertaling van het Engelse \u2018section\u2019, het woord paragraaf slaat in deze context dus niet op het HTML-element ', (0, t.jsx)(n.code, { children: '<p>' }), ' alleen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['De gebruikelijke manier om een paragraafkop aan te geven is met een HTML-kopje, van ', (0, t.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, t.jsx)(n.code, { children: 'h6' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 2.4.10 Paragraafkoppen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.10 Paragraafkoppen', pagination_label: 'WCAG-succescriterium 2.4.10 Paragraafkoppen', description: 'Gebruik paragraafkoppen (kopjes) om de content te structureren.', slug: '2.4.10', keywords: ['WCAG', 'AAA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'section headings'] },
    k = void 0,
    v = {},
    m = [...h.RM, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Semantische koppenstructuur', id: 'semantische-koppenstructuur', level: 3 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: ontbrekend h1-kopje', id: 'fout-ontbrekend-h1-kopje', level: 3 }, { value: 'Fout: kopniveau kiezen op grootte', id: 'fout-kopniveau-kiezen-op-grootte', level: 3 }, { value: 'Fout: in plaats van een kopje, vet gemaakt tekst gebruiken', id: 'fout-in-plaats-van-een-kopje-vet-gemaakt-tekst-gebruiken', level: 3 }, { value: 'Fout: dezelfde h1 voor elke pagina binnen de website', id: 'fout-dezelfde-h1-voor-elke-pagina-binnen-de-website', level: 3 }, { value: 'Fout: alle section-kopjes zijn een h1', id: 'fout-alle-section-kopjes-zijn-een-h1', level: 3 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...p.RM];
   function x(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', h3: 'h3', img: 'img', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 2.4.10 Paragraafkoppen' }), '\n', (0, t.jsx)(l.K7, { children: (0, t.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(n.p, { children: 'HTML-koppen vormen de ruggengraat van de inhoud van een pagina. Een goede koppenstructuur is nuttig voor verschillende soorten gebruikers:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "Ziende lezers kunnen 'koppensnellen' om snel informatie te vinden, de pagina via visueel duidelijk onderscheidbare koppen scannen op de gezochte informatie." }), '\n', (0, t.jsxs)(n.li, { children: ['Gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen een lijst van koppen opvragen en zo beslissen welke informatie te gaan lezen.'] }), '\n', (0, t.jsx)(n.li, { children: 'Zoekmachines begrijpen de inhoud van een webpagina beter, als deze is opgedeeld via een semantische koppenstructuur en kunnen zo de inhoud beter indexeren.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium gaat over het beschrijven van lopende tekst en niet over het labelen van componenten zoals formuliervelden, buttons en tabellen, die vallen onder WCAG-succescriterium ', (0, t.jsx)(n.a, { href: '/wcag/4.1.2/', children: '4.1.2 Naam, rol, waarde' }), '.\nWCAG-succescriterium ', (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: '2.4.6 Koppen en labels' }), ' gaat specifiek over de tekst van koppen.'] }), '\n', (0, t.jsx)(n.h3, { id: 'semantische-koppenstructuur', children: 'Semantische koppenstructuur' }), '\n', (0, t.jsx)(n.p, { children: 'In het succescriterium staat eigenlijk alleen: "Paragraafkoppen worden gebruikt om de content te structureren".' }), '\n', (0, t.jsx)(n.p, { children: 'Maar een goede werkwijze voor HTML-koppen is:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Gebruik \xe9\xe9n unieke h1 per pagina die beschrijft waar die pagina over gaat. Deze h1 begint bij voorkeur net boven de hoofdinhoud.' }), '\n', (0, t.jsx)(n.li, { children: 'Maak tekst niet op als HTML-kop om alleen de tekst groter te laten lijken of op te laten vallen. Koppen beschrijven altijd de inhoud eronder.' }), '\n', (0, t.jsx)(n.li, { children: 'Kies een kop niet op basis van de zichtbare grootte, maar op basis van het niveau in de context van de inhoud.' }), '\n', (0, t.jsx)(n.li, { children: 'Sla geen kopniveau over, in de koppenstructuur van boven naar beneden.' }), '\n', (0, t.jsx)(n.li, { children: 'Wees consistent in het opzet van de koppenstructuur binnen de website. Dit maakt het voor gebruikers makkelijker om de structuur van de content te begrijpen en zo sneller te vinden wat ze willen lezen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Voorbeeld van een semantische koppenstructuur:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<h1>Contact met de gemeente Voorbeeld</h1>\n[...]\n<h2>Naam contact op</h2>\n<h3>Telefoonnummers</h3>\n[...]\n<h3>E-mailadressen</h3>\n[...]\n<h3>Postadres</h3>\n[...]\n<h3>Social media</h3>\n[...]\n<h2>Melding, klacht of bezwaar doorgeven</h2>\n[...]\n<h3>Rommel of overlast melden</h3>\n[...]\n<h3>klacht indienen</h3>\n[...]\n<h3>Bezwaar maken</h3>\n[...]\n<h2>Afspraak maken</h2>\n[...]\n<h2>Over deze website</h2>\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['In het artikel ', (0, t.jsx)(n.a, { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: (0, t.jsx)('span', { lang: 'en', children: 'Accessible heading structure' }) }), ' op The A11y Project staat gedetailleerd beschreven hoe koppen te gebruiken in een webpagina.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/samenvatting/', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen/', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.a11yproject.com/posts/how-to-accessible-heading-structure/', children: (0, t.jsx)('span', { lang: 'en', children: 'Accessible heading structure' }) }), ' op The A11y Project.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/semanticstructure/', children: (0, t.jsx)('span', { lang: 'en', children: 'Semantic Structure: Regions, Headings, and Lists' }) }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.internetacademy.nl/ebooks/handboek-webcontent/headings-voor-betekenisvol-opmaken', children: 'Headings voor betekenisvol opmaken' }), ' in het handboek "Handboek webcontent: meer focus, minder content" van de Internet Academy.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.limoengroen.nl/nieuws/toegankelijke-tekst-3-tips-voor-webredacteuren', children: 'Toegankelijke tekst: 3 tips voor webredacteuren' }), ' van Marloes Bosch.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsxs)(n.p, { children: ['Jaarlijks vraagt WebAIM aan screenreadergebruikers (onder andere) hoe zij een website navigeren. In de ', (0, t.jsx)(n.a, { href: 'https://webaim.org/projects/screenreadersurvey10/#heading', children: 'Gebruikersenqu\xeate voor screenreaders #10' }), ' van 2024 vond 88,8% van de respondenten HTML-koppen hierbij zeer of enigszins nuttig. In de ', (0, t.jsx)(n.a, { href: 'https://webaim.org/projects/screenreadersurvey10/#problematic', children: 'top 12 van problemen' }), ' staat op nummer 8: Ontbrekende of onjuiste koppen.'] }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Controleer of koppen alleen worden gebruikt om onderliggende inhoud te beschrijven' }), '\n', (0, t.jsxs)(n.li, { children: ['Alle tekst die bij een kopje hoort, moet in de code, in de ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction', children: 'DOM' }), ', onder het kopje staan. Visueel kan dit afwijken, afhankelijk van het ontwerp, maar voor een screenreadergebruiker moet het duidelijk zijn welke inhoud bij welk kopje hoort.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Is er een ', (0, t.jsx)(n.code, { children: 'h1' }), '-kopje, dat de inhoud van de pagina beschrijft? Controleer ook of deze ', (0, t.jsx)(n.code, { children: 'h1' }), " niet dezelfde inhoud heeft voor alle pagina's binnen de website."] }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of de structuur van de inhoud logisch wordt weergegeven via de koppenstructuur en er geen niveaus worden overgeslagen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'De browserextensie HeadingsMap geeft de koppenstructuur van een webpagina overzichtelijk weer:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi', children: 'HeadingsMap voor Chrome' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://addons.mozilla.org/en-US/firefox/addon/headingsmap/', children: 'HeadingsMap voor Firefox' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://microsoftedge.microsoft.com/addons/detail/headingsmap/bokekiiaddinealohkmhjcgfanndmcgo', children: 'HeadingsMap voor Edge' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_screenshot_headingsmap.png', alt: 'Screenshot de koppensctructuur van de pagina over richtlijnen op deze website' }) }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'Axe DevTools' }), " in 'Best Practice'-mode controleert op onjuiste semantiek voor koppen, zoals het overslaan van een kopniveau of een ontbrekende ", (0, t.jsx)(n.code, { children: 'h1' }), '.\nOok ', (0, t.jsx)(n.a, { href: 'https://wave.webaim.org/', children: 'WAVE' }), ' meldt het overslaan van een kopniveau of een ontbrekende ', (0, t.jsx)(n.code, { children: 'h1' }), ', bij de alerts.'] }), '\n', (0, t.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-ontbrekend-h1-kopje', children: 'Fout: ontbrekend h1-kopje' }), '\n', (0, t.jsxs)(n.p, { children: ['Zeker op de voorpagina kan het in de vormgeving een puzzel zijn waar de ', (0, t.jsx)(n.code, { children: 'h1' }), '-kop te plaatsen. Maar weglaten is geen optie.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een oplossing kan zijn de ', (0, t.jsx)(n.code, { children: 'h1' }), ' visueel te verbergen met CSS, met de classes .sr-only, ', (0, t.jsx)(n.a, { href: 'https://getbootstrap.com/docs/5.3/getting-started/accessibility/#visually-hidden-content', children: '.visually-hidden' }), ' of ', (0, t.jsx)(n.a, { href: 'https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/', children: '.screen-reader-text' }), ' afhankelijk van het CMS of framework wat je gebruikt. Verberg de ', (0, t.jsx)(n.code, { children: 'h1' }), ' niet met ', (0, t.jsx)(n.code, { children: 'display:none' }), ' omdat dit de tekst ook verbergt voor hulpmiddelen zoals een screenreader.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een h1, op elke pagina op dezelfde plek, biedt houvast aan alle gebruikers. Toon de ', (0, t.jsx)(n.code, { children: 'h1' }), ' dus op elke pagina, op dezelfde plek, liefst vlak boven de hoofdinhoud.'] }), '\n', (0, t.jsx)(n.h3, { id: 'fout-kopniveau-kiezen-op-grootte', children: 'Fout: kopniveau kiezen op grootte' }), '\n', (0, t.jsxs)(n.p, { children: ['Een ', (0, t.jsx)(n.em, { children: 'Call to Action' }), ' in een vette grote ', (0, t.jsx)(n.code, { children: 'h1' }), ', dat trekt visueel de aandacht!\nMaar dit is verkeerd gebruik van het kopje en wekt verwarring bij screenreadergebruikers. Waar gaat deze pagina nu over?'] }), '\n', (0, t.jsx)(n.p, { children: 'Wil je tekst groot en vet maken, gebruik dan CSS om de tekst vorm te geven en geen kopje.' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-in-plaats-van-een-kopje-vet-gemaakt-tekst-gebruiken', children: 'Fout: in plaats van een kopje, vet gemaakt tekst gebruiken' }), '\n', (0, t.jsx)(n.p, { children: 'Tekst vet, bold of strong maken om een kopje te maken, geeft alleen visuele informatie weer. Screenreadergebruikers en zoekmachines herkennen dit niet als een kopje en missen zo context.\nAls een kopje te groot is in jouw ogen, vraag aan de webbouwer om aanpassing van de styling en gebruik geen vet om een kopje aan te geven.' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-dezelfde-h1-voor-elke-pagina-binnen-de-website', children: 'Fout: dezelfde h1 voor elke pagina binnen de website' }), '\n', (0, t.jsxs)(n.p, { children: ["Op alle pagina's is het logo een link naar de voorpagina geplaatst binnen een ", (0, t.jsx)(n.code, { children: 'h1' }), '-kopje.'] }), '\n', (0, t.jsx)(n.p, { children: 'In code:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout, niet gebruiken --\x3e\n<h1>\n  <a href="/"><img src="logo.svg" alt="Gemeente Voorbeeld" /></a>\n</h1>\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Deze ', (0, t.jsx)(n.code, { children: 'h1' }), ' geeft geen goede informatie over de inhoud van de pagina als deze zo op elke pagina wordt herhaald. Zet in plaats daarvan een ', (0, t.jsx)(n.code, { children: 'h1' }), '-kopje vlak boven het begin van de inhoud en beschrijf in dat ', (0, t.jsx)(n.code, { children: 'h1' }), '-kopje waar de webpagina over gaat.'] }), '\n', (0, t.jsx)(n.h3, { id: 'fout-alle-section-kopjes-zijn-een-h1', children: 'Fout: alle section-kopjes zijn een h1' }), '\n', (0, t.jsxs)(n.p, { children: ['Het gebruik van meerdere ', (0, t.jsx)(n.code, { children: 'h1' }), '-koppen in de outline van de DOM-structuur wordt niet langer ondersteund in HTML.\nLees hierover: ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page', children: (0, t.jsxs)('span', { lang: 'en', children: ['Avoid using multiple ', (0, t.jsx)(n.code, { children: '<h1>' }), ' elements on one page'] }) }), ' op MDN.'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#section-headings', children: (0, t.jsx)('span', { lang: 'en', children: '2.4.10 Section Headings' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#section-headings', children: '2.4.10 Paragraafkoppen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#section-headings', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.10 Section Headings' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC: 2.4.10 Section Headings' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.K7, { children: (0, t.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(p.Ay, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...a }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...a, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
