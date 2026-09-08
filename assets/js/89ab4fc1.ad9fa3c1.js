/*! For license information please see 89ab4fc1.ad9fa3c1.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9289],
 {
  790(e) {
   e.exports = JSON.parse('[{"uuid":"1bfd50e8-d845-492b-9553-51cae7dafd5b","isoDateTime":"2026-10-26T12:00:00.000Z","speakers":["DrStephDriver"],"subject":"Tracking conformance data within the code-base","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null},{"uuid":"b919f274-381c-41db-9d1d-cc3b6934ce93","isoDateTime":"2026-10-26T14:00:00.000Z","speakers":["EricVanMullekom","MiekeTenDam"],"subject":"Digitale toegankelijkheid van kaartviewers","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":null},{"uuid":"a23217db-b17d-4e97-ad46-1fd7d113c567","isoDateTime":"2026-10-27T14:00:00.000Z","speakers":["MarionCouesnon"],"subject":"Switching design systems without compromising accessibility","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null}]');
  },
  24142(e, n, s) {
   s.d(n, { K: () => t.e2 });
   var t = s(29181);
  },
  31439(e, n, s) {
   s.d(n, { H: () => d });
   var t = s(90578),
    a = s(46447),
    i = s(13526),
    r = s(80883),
    o = s(86070);
   const l = new Date().toISOString(),
    d = ({ lang: e = 'nl', headingLevel: n = 3, allSpeakers: s, videoId: d, children: c, allSessions: m, sessionId: g }) => {
     const h = m?.find(({ uuid: e }) => g === e),
      p = h && h.speakers.map((e) => s[e]).filter(Boolean),
      k = [d, h?.videoId, ...(h?.videoIds ?? [])].filter(Boolean);
     return h ? (0, o.jsxs)('article', { className: (0, i.A)('ma-dsw-session'), children: [(0, o.jsx)(a.DZ, { level: n, className: 'ma-dsw-session__title', id: h.subject.toLowerCase().replace(/\s/gi, '-'), children: h.subject }), (0, o.jsx)(a.fz, { className: 'ma-dsw-session__subtitle', lead: !0, children: p && p.map((e) => (e?.organisation ? `${e.name} - ${e.organisation}` : e.name)).join(' & ') }), k.length > 0 && k.map((e) => (0, o.jsx)(r.L, { id: e, title: h.subject, style: { marginBlock: '20px' } }, e)), h && h.isoDateTime && h.isoDateTime > l ? (0, o.jsx)(a.fz, { children: (0, o.jsx)('time', { dateTime: h.isoDateTime, children: new Intl.DateTimeFormat(e, { dateStyle: 'full', timeStyle: 'nl' === e ? 'short' : 'full', timeZone: 'Europe/Amsterdam' }).format(new Date(h.isoDateTime)) }) }) : (0, o.jsx)(o.Fragment, {}), c, 'nl' === e && p.find(({ language: e }) => 'nl' !== e) && (0, o.jsxs)(a.fz, { children: [(0, o.jsx)('b', { children: 'Goed te weten:' }), ' Deze sessie is in het Engels.'] }), h.captioned ? (h.captionId ? (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(a.fz, { children: ['nl' === e ? (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Bij deze sessie is een schrijftolk aanwezig: ' }) }) : (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Live captioning is available for this session: ' }) }), (0, o.jsxs)('a', { href: `https://text-on-tap.live/#e=${h.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [h.subject, ' '] }), 'nl' === e ? 'in de browser' : 'in the browser'] }), 'nl' === e ? ' of ' : ' or ', (0, o.jsxs)('a', { href: `https://text-on-tap.live/openoverlay.html?e=${h.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [h.subject, ' '] }), 'nl' === e ? 'met de Overlay tool' : 'with the de Overlay tool'] })] }) }) : 'nl' === e ? (0, o.jsx)(a.fz, { children: 'Voor deze sessie hebben we nog geen schrijftolk gevonden' }) : (0, o.jsx)(o.Fragment, {})) : (0, o.jsx)(o.Fragment, {}), (0, o.jsx)('aside', { className: (0, i.A)('ma-dsw-session__speakers'), children: p.map((n, s) => (0, o.jsxs)('div', { className: (0, i.A)('ma-dsw-session__speaker', 'ma-dsw-speaker'), children: [(0, o.jsx)('img', { className: (0, i.A)('ma-dsw-speaker__image'), src: n.image.src, alt: n.image.alt }), (0, o.jsx)(a.fz, { className: (0, i.A)('ma-dsw-speaker__description'), dangerouslySetInnerHTML: { __html: n.description[e] } })] }, s)) }), h && h.icalLink && !d ? (0, o.jsx)(a.fz, { children: (0, o.jsxs)(a.vx, { href: h.icalLink, download: h.icalLink, appearance: 'primary-action-button', children: [(0, o.jsx)(a.In, { children: (0, o.jsx)(t.A, {}) }), (0, o.jsx)('span', { children: 'nl' === e ? (0, o.jsxs)(o.Fragment, { children: ['Zet', (0, o.jsx)('span', { className: 'sr-only', children: h.subject }), ' in je agenda'] }) : (0, o.jsxs)(o.Fragment, { children: ['Add', (0, o.jsx)('span', { className: 'sr-only', children: h.subject }), ' to your calendar'] }) })] }) }) : null] }) : (0, o.jsx)(o.Fragment, {});
    };
  },
  32385(e, n, s) {
   s.d(n, { bo: () => a, KF: () => g, mJ: () => k, VZ: () => x, cR: () => y, Pv: () => u, qZ: () => r, kD: () => w, QQ: () => D, B2: () => h, Pc: () => l, f4: () => o, GT: () => f, fX: () => i, eQ: () => j, B_: () => v, o_: () => b });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    h = (e, n) => k(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    k = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    u = (e) => {
     const n = p(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: a, value: i }) => {
        const r = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === r ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: i, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    b = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function w(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? w(e[s], [...n, s]) : []));
   }
   function f(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
   }
   const y = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    S = new Set(['ics', 'json', 'pdf']),
    D = (e) => {
     const n = e.split('/').pop() ?? '',
      s = n.split('.').pop()?.toLowerCase();
     return void 0 !== s && S.has(s);
    };
  },
  33491(e, n, s) {
   (s.r(n), s.d(n, { assets: () => u, contentTitle: () => k, default: () => j, frontMatter: () => p, metadata: () => t, toc: () => b }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/programma","title":"Programma","description":"Programma voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/programma.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/programma","permalink":"/events/design-systems-week-2026/programma","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/programma.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Programma","description":"Programma voor de Design Systems Week 2026","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Programma","pagination_label":"Programma","sidebar_position":2,"slug":"/events/design-systems-week-2026/programma","translations":{"en":"/events/design-systems-week-2026/en/program/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"},"next":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"}}');
   var a = s(86070),
    i = s(18439),
    r = s(34225),
    o = s(24142),
    l = s(59292),
    d = s(64249),
    c = s(790),
    m = s(86109),
    g = s(31439),
    h = s(51130);
   const p = { title: 'Programma', description: 'Programma voor de Design Systems Week 2026', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Programma', pagination_label: 'Programma', sidebar_position: 2, slug: '/events/design-systems-week-2026/programma', translations: { en: '/events/design-systems-week-2026/en/program/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    k = 'Programma Design Systems Week settings.year',
    u = {},
    b = [];
   function v(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsxs)(n.h1, { id: 'programma-design-systems-week-settingsyear', children: ['Programma Design Systems Week ', h.Ok] }) }), '\n', (0, a.jsx)(l.f, { purpose: 'lead', children: (0, a.jsxs)(n.p, { children: ['NL Design System organiseert in ', h.Ok, ' voor de ', h.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, a.jsx)('strong', { children: h.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, a.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', (0, a.jsxs)(o.K, { children: [(0, a.jsxs)(r.v, { href: `/events/design-systems-week-${h.Ok}/tijdschema`, appearance: 'primary-action', children: ['Bekijk het tijdschema', (0, a.jsx)(d.A, { slot: 'icon-end' })] }), !!h.MX && (0, a.jsxs)(r.v, { href: h.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, a.jsx)(d.A, { slot: 'icon-end' })] })] }), '\n', !h.Ic && (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(l.f, { children: 'Het tijdschema is nog niet definitief. De sessies worden de komende weken verder uitgewerkt en toegevoegd. Houd deze pagina in de gaten voor updates.' }) }), '\n', '\n', (0, a.jsxs)(g.H, { allSpeakers: m, allSessions: c, sessionId: '1bfd50e8-d845-492b-9553-51cae7dafd5b', headingLevel: 2, children: [(0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Informatie over toegankelijkheidsconformiteit wordt vaak vastgelegd in aparte rapporten die snel verouderen. Maar\nwat als toegankelijkheidsgegevens direct naast je code zouden staan?' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'In deze sessie ontdek je hoe het open-source publicatieplatform Janeway zijn toegankelijkheidsproces opnieuw heeft\ningericht door gegevens over conformiteit rechtstreeks in de codebase te integreren. Elke bevinding op het gebied\nvan toegankelijkheid is gekoppeld aan de specifieke commit waarop de audit betrekking had, en wordt in verband\ngebracht met de werkzaamheden die nodig zijn voor verbetering. Dit vormt de basis voor een continu proces van\ngerichte toegankelijkheidsaudits en verbeteringen, in plaats van te vertrouwen op audits die slechts eens in de paar\njaar plaatsvinden.' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Steph vertelt over de beweegredenen achter deze aanpak, de implementatie ervan en de lessen die gaandeweg zijn\ngeleerd. Of je nu ontwikkelaar of toegankelijkheidsspecialist bent, of simpelweg ge\xefnteresseerd bent in het\nverbeteren van workflows rondom toegankelijkheid: deze sessie biedt praktische inzichten in een duurzamere manier om\nconformiteitsgegevens te beheren.' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'De implementatie is open source, waardoor je na de sessie eenvoudig in de technische details kunt duiken.' }) })] }), '\n', (0, a.jsxs)(g.H, { allSpeakers: m, allSessions: c, sessionId: 'b919f274-381c-41db-9d1d-cc3b6934ce93', headingLevel: 2, children: [(0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Hoe maak je interactieve kaarten toegankelijk voor iedereen? Dat is een vraag waar het Kadaster dagelijks aan werkt.' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Op de websites van het Kadaster wordt veel ruimtelijke informatie via kaartviewers aangeboden. Juist deze\ninteractieve toepassingen brengen unieke uitdagingen met zich mee op het gebied van digitale toegankelijkheid.' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'In deze sessie delen Eric en Mieke hoe het Kadaster deze vraagstukken multidisciplinair aanpakt. Aan de hand van\npraktijkvoorbeelden laten zij zien welke uitdagingen zij tegenkwamen, welke oplossingen zij hebben ontwikkeld en\nwelke lessen zij onderweg hebben geleerd.' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Een inspirerende sessie voor iedereen die werkt aan toegankelijke digitale dienstverlening, interactieve interfaces\nof complexe gebruikerservaringen.' }) })] }), '\n', (0, a.jsxs)(g.H, { allSpeakers: m, allSessions: c, sessionId: 'a23217db-b17d-4e97-ad46-1fd7d113c567', headingLevel: 2, children: [(0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Wat gebeurt er als je je eigen design-systeem vervangt door een nieuwe, gedeelde standaard? Hoe zorg je ervoor dat\nde toegankelijkheid er niet op achteruitgaat?' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: "In deze sessie deelt Marion Couesnon van het 'Access to Justice'-team haar ervaringen met de migratie van hun eigen\ndesign-systeem naar het KERN Design System, dat zij zien als de toekomstige standaard voor Duitse overheidsdiensten." }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Je leert hoe het team de migratie vanuit het oogpunt van toegankelijkheid aanpakte, welke controles en beslissingen\nze onderweg namen en welke onverwachte uitdagingen ze toch nog tegenkwamen. Want zelfs als een design-systeem met\ntoegankelijkheid in gedachten is ontwikkeld, biedt de implementatie ervan niet automatisch garantie op een\ntoegankelijk resultaat.' }) }), (0, a.jsx)(l.f, { children: (0, a.jsx)(n.p, { children: 'Een praktische sessie vol geleerde lessen, valkuilen om te vermijden en tips voor teams die een soortgelijke\noverstap plannen.' }) })] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(v, { ...e }) }) : v(e);
   }
  },
  34225(e, n, s) {
   s.d(n, { v: () => o });
   var t = s(94309),
    a = s(13526),
    i = s(86070);
   const r = ({ className: e, children: n, purpose: s, iconStart: t, iconEnd: r, href: o }) => (0, i.jsxs)('a', { className: (0, a.A)('nl-button', e, { 'nl-button--primary': 'primary' === s, 'nl-button--secondary': 'secondary' === s, 'nl-button--subtle': 'subtle' === s }), href: o, children: [t && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, i.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: n, ...s }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, i.jsx)(r, { purpose: t, href: n, ...s }));
       }
     : ({ appearance: e, ...n }) => (0, i.jsx)(t.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  59292(e, n, s) {
   s.d(n, { f: () => t.f });
   var t = s(71544);
  },
  64249(e, n, s) {
   s.d(n, { A: () => t });
   const t = (0, s(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  80883(e, n, s) {
   s.d(n, { L: () => i });
   var t = s(20201),
    a = s(86070);
   const i = ({ id: e, title: n, ...s }) => (0, a.jsx)(t.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...s });
  },
  86109(e) {
   e.exports = JSON.parse('{"DrStephDriver":{"name":"Dr Steph Driver","organisation":"Open Library of Humanities","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-DrStephDriver.jpg","alt":"Dr Steph Driver"},"description":{"en":"Steph is the accessibility-specialist developer at the Open Library of Humanities.  As an assistive technology user herself, she is passionate about making open access truly accessible for everyone. She combines deep technical expertise with a passion for education, helping teams develop smarter workflows and innovative accessibility solutions. With a background spanning natural sciences, creative writing, technology and disability-activism, Steph brings a unique perspective to inclusive digital design.","nl":"Steph is ontwikkelaar en specialist op het gebied van toegankelijkheid bij de Open Library of Humanities. Als gebruiker van ondersteunende technologie zet zij zich vol passie in om open access voor iedereen werkelijk toegankelijk te maken. Ze combineert diepgaande technische expertise met een passie voor onderwijs en helpt teams bij het ontwikkelen van slimmere werkprocessen en innovatieve oplossingen voor toegankelijkheid. Met een achtergrond in de natuurwetenschappen, creatief schrijven, technologie en activisme rondom handicaps brengt Steph een uniek perspectief in op inclusief digitaal ontwerp."},"language":"en"},"MarionCouesnon":{"name":"Marion Couesnon","organisation":"Digitalservice GmbH des Bundes","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MarionCouesnon.jpg","alt":"Marion Couesnon"},"description":{"en":"Marion is an accessibility designer based in Berlin. She has been passionate about design since 2011 and has specialised in accessibility since 2019. She currently works for DigitalService, a company owned by the German federal government. Within the organisation, she implements accessibility practices whilst contributing to the design of services, including the <a target=\\"blank\\" href=\\"https://service.justiz.de\\">Ministry of Justice\u2019s online portal</a>. Outside of work, you might spot Marion at her boxing club or knitting on her sofa.","nl":"Marion is een ontwerper gespecialiseerd in toegankelijkheid, gevestigd in Berlijn. Ze is sinds 2011 gepassioneerd door design en heeft zich sinds 2019 toegelegd op toegankelijkheid. Momenteel werkt ze bij DigitalService, een bedrijf dat eigendom is van de Duitse federale overheid. Binnen de organisatie implementeert ze toegankelijkheidsmaatregelen en draagt ze bij aan het ontwerp van diensten, waaronder het <a target=\\"blank\\" href=\\"https://service.justiz.de\\">online portaal van het ministerie van Justitie</a>. Buiten haar werk kun je Marion tegenkomen bij haar boksclub of breiend op de bank."},"language":"en"},"EricVanMullekom":{"name":"Eric van Mullekom","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-EricVanMullekom.jpg","alt":"Eric van Mullekom"},"description":{"nl":"Erik is sinds 2000 als projectmanager/product owner betrokken bij softwareontwikkeling, met oog voor techniek en gebruikersgemak. Bij het Kadaster is hij als Product Owner verantwoordelijk voor <a target=\\"blank\\" href=\\"https://generiekegeocomponenten.nl\\">generiekegeocomponenten.nl</a>, <a target=\\"blank\\" href=\\"https://kaartenvannederland.nl\\">kaartenvannederland.nl</a> en <a target=\\"blank\\" href=\\"https://verbeterdekaart.nl\\">terugmeldsysteem (o.a. verbeterdekaart.nl)</a>."},"language":"nl"},"MiekeTenDam":{"name":"Mieke ten Dam","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MiekeTenDam.jpg","alt":"Mieke ten Dam"},"description":{"nl":"Mieke werkt sinds 2019 bij het Kadaster als software engineer, met digitale toegankelijkheid als specialisme. Haar scrumteam ontwikkelt en beheert diverse websites, portals en applicaties, waaronder <a target=\\"blank\\" href=\\"https://www.kadaster.nl\\">www.kadaster.nl</a>, <a target=\\"blank\\" href=\\"https://topokaarten.kadaster.nl\\">topokaarten.kadaster.nl</a> en de zakelijke <a target=\\"blank\\" href=\\"https://mijn.kadaster.nl\\">mijn.kadaster.nl</a> omgeving."},"language":"nl"}}');
  },
  94309(e, n, s) {
   s.d(n, { F: () => r, N: () => o });
   var t = s(13526),
    a = s(32385),
    i = s(86070);
   const r = ({ children: e, ...n }) => {
     const { to: s, href: t, ...r } = n;
     let o = s || t;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, a.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...n }) => (0, i.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
