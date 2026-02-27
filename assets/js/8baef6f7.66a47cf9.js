(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41102],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var i = t(29181),
    r = t(74172),
    o = t(15089),
    s = t(28377),
    c = t(33648),
    a = t(83386),
    l = t(86070);
   const d = { figma: (0, l.jsx)(r.A, {}), github: (0, l.jsx)(o.A, {}), npm: (0, l.jsx)(s.A, {}), storybook: (0, l.jsx)(c.A, {}) },
    h = ({ brand: e }) => (0, l.jsx)(i.In, { children: d[e] || (0, l.jsx)(a.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => d });
   var i = t(18439),
    r = t(46447),
    o = t(86070);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    c = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, o.jsx)('img', { ...t, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, n) => {
     if (e) {
      const e = { ...c[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return c[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: s = {} }) => (0, o.jsx)(i.x, { components: { ...l(n, t), ...a(r), ...s }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => o });
   var i = t(86070),
    r = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => o });
   var i = t(86070),
    r = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => r, KF: () => u, mJ: () => p, VZ: () => z, cR: () => w, Pv: () => m, qZ: () => s, kD: () => f, B2: () => j, Pc: () => a, f4: () => c, GT: () => x, fX: () => o, eQ: () => b, B_: () => k, o_: () => v, Rc: () => y });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    c = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return h(d(n));
    },
    j = (e, n) => p(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => h(d(e.projects.flatMap((e) => g(e)))),
    m = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: r, value: o }) => {
        const s = /^(.+) URL/.exec(i)[1],
         c = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: i, id: r, value: o, description: c };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    v = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function y(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const w = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    z = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  38286(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    r = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Een icon kan uit een afbeelding van een letter bestaan (bijvoorbeeld B voor dikgedrukte tekst). Gebruik geen icons van letters om woorden of teksten te maken.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => o });
   var i = t(86070),
    r = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  42962(e, n, t) {
   var i = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
   function r(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     r = n[0];
    return t.e(n[1]).then(() => t(r));
   }
   ((r.keys = () => Object.keys(i)), (r.id = 42962), (e.exports = r));
  },
  44720(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => o });
   var i = t(86070),
    r = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => r });
   var i = t(30758);
   function r() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  55552(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var i = t(86070),
    r = t(18439);
   function o(e) {
    const n = { code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, i.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => c });
   var i = t(46447),
    r = t(13526),
    o = t(33062),
    s = t(86070);
   const c = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(i.KE, { className: (0, r.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => o });
   var i = t(13526),
    r = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...s }) => (0, r.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  82724(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => V, component: () => P, contentTitle: () => M, default: () => Z, description: () => B, frontMatter: () => G, issueNumber: () => H, metadata: () => i, title: () => O, toc: () => U }));
   const i = JSON.parse('{"id":"componenten/icon/index","title":"Icon","description":"Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.","source":"@site/docs/componenten/icon/index.mdx","sourceDirName":"componenten/icon","slug":"/icon","permalink":"/icon","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/icon/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Icon","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Icon","pagination_label":"Icon","description":"Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.","slug":"/icon","keywords":["afbeelding","button icon","caret","emoji","glyph","graphic","icon","icoon","illustratie","illustration","logo","picto","pictogram","plaatje","svg","svg icon","symbol","symbool"]},"sidebar":"componenten","previous":{"title":"Heading Group","permalink":"/heading-group"},"next":{"title":"Image","permalink":"/image"}}');
   var r = t(86070),
    o = t(18439),
    s = t(17045),
    c = t(19776),
    a = t(40808);
   function l(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Een informatief icon is een visueel symbool dat ontworpen is om snel en intu\xeftief specifieke informatie over te brengen, zonder dat daar tekst voor nodig is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als een informatief icon g\xe9\xe9n onderdeel is van een interactief component, zoals een ', (0, r.jsx)(n.code, { children: 'button' }), ' of ', (0, r.jsx)(n.code, { children: 'link' }), ', heeft het icon een alternatieve tekst nodig.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' toe te voegen aan een ', (0, r.jsx)(n.code, { children: 'svg' }), ' icon met ', (0, r.jsx)(n.code, { children: 'role="img"' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat. Een icon is ook decoratief als het onderdeel is van een interactief component met een eigen toegankelijke naam, zoals een ', (0, r.jsx)(n.code, { children: 'button' }), ' of een ', (0, r.jsx)(n.code, { children: 'link' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met ', (0, r.jsx)(n.code, { children: 'aria-hidden="true"' }), ' op de component.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Let op: VoiceOver in combinatie met Safari (in de ', (0, r.jsx)(n.a, { href: '/baseline/2025-07/', children: 'NL Design System Baseline van juli 2025' }), ") negeert Unicode-emoji's met ", (0, r.jsx)(n.code, { children: 'aria-hidden="true"' }), ' w\xe9l in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een ', (0, r.jsx)(n.a, { href: 'https://bugs.webkit.org/show_bug.cgi?id=161740', children: 'bug in WebKit' }), '. Gebruik daarom liever SVG icons.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Informatieve icons kunnen worden voorzien van een beschrijvende alternatieve tekst, doordat ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' of ', (0, r.jsx)(n.code, { children: 'aria-labelledby' }), ' in de component gebruikt kan worden.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Decoratieve icons kunnen verborgen worden voor hulpsoftware, doordat het ', (0, r.jsx)(n.code, { children: 'aria-hidden' }), ' attribuut gebruikt kan worden in de component.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Let op: VoiceOver in combinatie met Safari (in de ', (0, r.jsx)(n.a, { href: '/baseline/2025-07/', children: 'NL Design System Baseline van juli 2025' }), ") negeert Unicode-emoji's met ", (0, r.jsx)(n.code, { children: 'aria-hidden="true"' }), ' w\xe9l in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een ', (0, r.jsx)(n.a, { href: 'https://bugs.webkit.org/show_bug.cgi?id=161740', children: 'bug in WebKit' }), '. Gebruik daarom liever SVG icons.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function v(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Informatieve icons moeten herkenbaar zijn als afbeelding voor gebruikers die hulpsoftware, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', gebruiken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Bijvoorbeeld: een ', (0, r.jsx)(n.code, { children: 'svg' }), ' icon heeft ', (0, r.jsx)(n.code, { children: 'role="img"' }), ' als attribuut.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   var b = t(38286),
    f = t(55552);
   function x(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleur van componenten die visueel betekenis hebben en hun directe omgeving.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals de 3 streepjes voor een menu of een pijltje naar rechts voor de volgende pagina.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icoon dat de status aangeeft van een bericht zoals een oranje driehoek voor een waarschuwing en een groen vinkje voor succes.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het gemeten kleurcontrast tussen het element en de achtergrond moet minstens 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Icons zijn regelmatig onderdeel van een link, m\xe9t of zonder begeleidende linktekst.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg er voor dat het duidelijk is waar de link naar verwijst, in plaats van dat het uiterlijk van het icon beschreven wordt. Dit is belangrijk voor gebruikers die gebruik maken van hulpsoftware, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: "Bijvoorbeeld: Een link met een icon dat aangeeft dat een link naar een externe website verwijst heeft als beschrijving in de accessibility tree 'Gemeente Den Haag (externe website)' en niet 'Gemeente Den Haag klein vierkantje met een pijl die naar rechtsboven wijst'." }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Toegankelijke linkteksten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
   function A(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstuele kop of label, moet het voor de doelgroep duidelijk zijn wat het icon vertegenwoordigt.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een zoekfunctie gebruikt een vergrootglas icon.' }), '\n', (0, r.jsx)(n.li, { children: 'De link naar de homepage in een broodkruimelpad is een huis icon.' }), '\n', (0, r.jsx)(n.li, { children: 'Een knop om een dialoogvenster te sluiten gebruikt een kruis (x) icon.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
   }
   function _(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Componenten of functionaliteiten die op meerdere pagina's voorkomen en die gebruik maken van icons, maken overal gebruik van dezelfde icons. Wees ook zoveel mogelijk consistent in het gebruik van icons. Als je in een component op de ene pagina gebruik maakt van een icon, doe dat dan in datzelfde component op een andere pagina ook." }), '\n', (0, r.jsx)(n.p, { children: 'Dit is belangrijk om snel te navigeren en snel belangrijke functionaliteiten terug te kunnen vinden, zeker voor gebruikers met bijvoorbeeld een cognitieve beperking.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zoekfuncties die consistent gebruik maken van een vergrootglas icon.' }), '\n', (0, r.jsx)(n.li, { children: 'Waarschuwingen die consistent gebruik maken van een uitroepteken icon.' }), '\n', (0, r.jsx)(n.li, { children: 'Informatie-opties, zoals bij mogelijk moeilijke termen, die consistent gebruik maken van een vraagteken icon.' }), '\n', (0, r.jsx)(n.li, { children: 'De optie om vooruit of achteruit te gaan in een proces, die consistent gebruik maakt van pijl-icons.' }), '\n', (0, r.jsx)(n.li, { children: 'De optie om een dialoogvenster te sluiten, maakt overal gebruik van een kruisje.' }), '\n', (0, r.jsx)(n.li, { children: 'Bij een goed ingevuld formulierveld staat overal een vinkje.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(_, { ...e }) }) : _(e);
   }
   function T(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstueel label bij een invoerveld, moet het duidelijk zijn wat de gebruiker moet doen of moet invullen.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icon van een slot in een inlogformulier vraagt om een wachtwoord.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icon van een vergrootglas in een zoekfunctie vraagt om een zoekterm.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(T, { ...e }) }) : T(e);
   }
   var S = t(44720),
    L = t(36059),
    C = t(85825),
    F = t(12013);
   function I(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'iconen', children: 'Iconen' }) }), '\n', (0, r.jsx)(n.p, { children: 'Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.' }), '\n', (0, r.jsx)(n.p, { children: 'Grofweg zijn er twee categorie\xebn iconen; functionele en illustratieve iconen.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk bij functionele iconen bijvoorbeeld aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Chevrons' }), '\n', (0, r.jsx)(n.li, { children: 'Opslaan en download indicatoren' }), '\n', (0, r.jsx)(n.li, { children: 'Een \xd7 om een dialoogvenster te sluiten' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in \xe9\xe9n oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.' }), '\n', (0, r.jsx)(n.h2, { id: 'icoon-en-tekst', children: 'Combinatie van icoon en tekst' }), '\n', (0, r.jsx)(n.p, { children: 'Combineer waar mogelijk een icoon met tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoeveelheid-iconen', children: 'Niet te veel iconen op een pagina' }), '\n', (0, r.jsx)(n.p, { children: 'Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.' }), '\n', (0, r.jsx)(n.p, { children: 'Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z\u2019n doel als navigatiehulp voor de bezoeker.' }), '\n', (0, r.jsx)(n.p, { children: 'Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.' }), '\n', (0, r.jsx)(n.p, { children: 'De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.' }), '\n', (0, r.jsx)(n.h2, { id: 'kleur', children: 'Icoon kleuren' }), '\n', (0, r.jsx)(n.p, { children: 'Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.' }), '\n', (0, r.jsx)(n.p, { children: 'De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essenti\xeble. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.' }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsxs)(n.p, { children: ['Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan screenreaders.'] }), '\n', (0, r.jsx)(n.h3, { id: 'tekstlabels', children: 'Tekstlabels' }), '\n', (0, r.jsx)(n.p, { children: 'Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan dat een tekstverduidelijking wel aan screenreaders aangeboden wordt.' }), '\n', (0, r.jsx)(n.h3, { id: 'contrast', children: 'Contrast' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207', children: 'WCAG techniek G207' }), ' en het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), '. Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Puur decoratieve iconen hoeven niet aan deze eis te voldoen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een ', (0, r.jsx)(n.code, { children: 'alt' }), ' tekst te voorzien, een leeg ', (0, r.jsx)(n.code, { children: 'alt=""' }), ' attribuut is dan voldoende.'] }), '\n', (0, r.jsx)(n.h3, { id: 'interactieve-iconen', children: 'Interactieve iconen' }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een ', (0, r.jsx)(n.code, { children: 'hover' }), ' staat. Voor toetsenbordbediening dient tevens een ', (0, r.jsx)(n.code, { children: 'focus' }), ' staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.' }), '\n', (0, r.jsx)(n.h3, { id: 'klik-tapoppervlakte', children: 'Klik en tapoppervlakte' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen t\xe9 kleine iconen onduidelijk zijn.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hanteer voor een vrijstaand icoon ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html', children: 'een minimale oppervlakte van 44\xd744 dp' }), '. Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.'] }), '\n', (0, r.jsx)(n.h3, { id: 'marge', children: 'Afstanden (marge)' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.' }), '\n', (0, r.jsx)(n.h2, { id: 'inclusiviteit', children: 'Inclusiviteit' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.' }), '\n', (0, r.jsx)(n.h3, { id: 'context', children: 'Context' }), '\n', (0, r.jsx)(n.p, { children: 'In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een \u2018like\u2019 icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'referenties', children: 'Referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/', children: 'Inclusief communiceren met iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a', children: 'Make your design system accessible \u2014 Part 2: Icons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen', children: 'Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen', children: 'Utrecht design system' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/icon-usability/', children: 'Icon Usability' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/', children: 'Icons As Part Of A Great User Experience' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed', children: 'When does iconography start to become useless?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon', children: 'Beelkompas: Wat is een icoon' }) }), '\n'] })] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(I, { ...e }) }) : I(e);
   }
   const G = { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.', slug: '/icon', keywords: ['afbeelding', 'button icon', 'caret', 'emoji', 'glyph', 'graphic', 'icon', 'icoon', 'illustratie', 'illustration', 'logo', 'picto', 'pictogram', 'plaatje', 'svg', 'svg icon', 'symbol', 'symbool'] },
    M = void 0,
    V = {},
    O = 'Icon',
    B = 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.',
    H = 275,
    P = L.find((e) => e.number === H),
    U = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...a.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...c.RM, { value: 'Icons uit icon fonts', id: 'icons-uit-icon-fonts', level: 4 }, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...s.RM, { value: 'Richtlijnen', id: 'richtlijnen', level: 2 }, { value: 'Combinatie van icoon en tekst', id: 'icoon-en-tekst', level: 2 }, { value: 'Niet te veel iconen op een pagina', id: 'hoeveelheid-iconen', level: 2 }, { value: 'Icoon kleuren', id: 'kleur', level: 2 }, { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 }, { value: 'Tekstlabels', id: 'tekstlabels', level: 3 }, { value: 'Contrast', id: 'contrast', level: 3 }, { value: 'Interactieve iconen', id: 'interactieve-iconen', level: 3 }, { value: 'Klik en tapoppervlakte', id: 'klik-tapoppervlakte', level: 3 }, { value: 'Afstanden (marge)', id: 'marge', level: 3 }, { value: 'Inclusiviteit', id: 'inclusiviteit', level: 2 }, { value: 'Context', id: 'context', level: 3 }, { value: 'Referenties', id: 'referenties', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function W(e) {
    const n = { h2: 'h2', h3: 'h3', h4: 'h4', p: 'p', ...(0, o.R)(), ...e.components },
     { Checklist: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('Checklist', !0),
     (0, r.jsxs)(r.Fragment, {
      children: [
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       (0, r.jsx)(C.Fc, { component: P, headingLevel: 1, description: B }),
       '\n',
       (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
       '\n',
       (0, r.jsx)(a.Ay, {}),
       '\n',
       (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
       '\n',
       (0, r.jsx)(c.Ay, {}),
       '\n',
       (0, r.jsx)(t, {
        headingLevel: '4',
        items: [
         { title: 'Informatieve icons hebben een beschrijvende alternatieve tekst.', sc: '1.1.1', status: '', component: (0, r.jsx)(d, {}), tags: ['developer', 'contentmaker'] },
         { title: 'Decoratieve icons zijn verborgen voor hulpsoftware.', sc: '1.1.1', status: '', component: (0, r.jsx)(u, {}), tags: ['developer', 'contentmaker'] },
         { title: 'Als een icon een status aangeeft, is die informatie niet alleen afhankelijk van kleur.', sc: '1.4.1', status: '', component: (0, r.jsx)(S.Ay, {}), tags: ['designer'] },
         { title: 'Gebruik geen icons om teksten te vormen.', sc: '1.4.5', status: '', component: (0, r.jsx)(b.Ay, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Bij zoom overlapt een icon niet met andere content.', sc: '1.4.10', status: '', component: (0, r.jsx)(f.Ay, {}), tags: ['designer', 'developer'] },
         { title: 'Een informatief icon heeft een contrastratio van minimaal 3:1 met de achtergrond.', sc: '1.4.11', status: '', component: (0, r.jsx)(y, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Als een icon onderdeel is van een link, beschrijft de alternatieve tekst het doel van het icon.', sc: '2.4.4', status: '', component: (0, r.jsx)(z, {}), tags: ['developer', 'contentmaker'] },
         { title: 'Als een icon wordt gebruikt als visueel label, is het duidelijk wat de betekenis is.', sc: '2.4.6', status: '', component: (0, r.jsx)(D, {}), tags: ['designer', 'contentmaker'] },
         { title: "Een component met dezelfde functionaliteit die op meerdere pagina's voorkomt, heeft op alle pagina's hetzelfde icon.", sc: '3.2.4', status: '', component: (0, r.jsx)(N, {}), tags: ['developer', 'designer'] },
         { title: 'Als een icon wordt gebruikt als visueel label van een invoermogelijkheid, is het duidelijk welke invoer gevraagd wordt. ', sc: '3.3.2', status: '', component: (0, r.jsx)(R, {}), tags: ['designer', 'contentmaker'] },
        ],
       }),
       '\n',
       (0, r.jsx)(n.h4, { id: 'icons-uit-icon-fonts', children: 'Icons uit icon fonts' }),
       '\n',
       (0, r.jsx)(n.p, { children: 'Gebruik je een icon font in plaats van SVG afbeeldingen? Houdt er dan rekening mee dat niet iedereen de iconen kan zien.\nSommige gebruikers kiezen ervoor om altijd een eigen font te gebruiken, of schakelen web fonts uit om data te besparen.\nWij raden daarom aan om SVG te gebruiken in plaats van een icon font. Als je wel een icon font gebruikt, probeer dan Unicode-karakters te gebruiken.\nDeze icons werken ook als de gebruiker een systeem font gebruikt.' }),
       '\n',
       (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
       '\n',
       (0, r.jsx)(s.Ay, {}),
       '\n',
       (0, r.jsx)(t, {
        headingLevel: '4',
        items: [
         { title: 'Informatieve icons kunnen een alternatieve tekst hebben.', sc: '1.1.1', status: '', component: (0, r.jsx)(g, {}), tags: ['developer'] },
         { title: 'Decoratieve icons kunnen verborgen worden voor hulpsoftware.', sc: '1.1.1', status: '', component: (0, r.jsx)(m, {}), tags: ['developer'] },
         { title: 'Informatieve icons hebben de rol van afbeelding in de accessibility tree.', sc: '1.3.1', status: '', component: (0, r.jsx)(k, {}), tags: ['developer'] },
        ],
       }),
       '\n',
       (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }),
       '\n',
       (0, r.jsx)(F.o, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(E, {}) }),
       '\n',
       (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
       '\n',
       (0, r.jsx)(C.VK, { component: P, headingLevel: 3 }),
       '\n',
       (0, r.jsx)(C.$9, { component: P, headingLevel: 2 }),
       '\n',
       (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
       '\n',
       (0, r.jsx)(C.mu, { component: P, headingLevel: 3 }),
      ],
     })
    );
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(W, { ...e }) }) : W(e);
   }
  },
  85825(e, n, t) {
   'use strict';
   t.d(n, { VK: () => k, $9: () => f, mu: () => b, Fc: () => x });
   var i = t(29181),
    r = t(13526),
    o = t(1292),
    s = t(90495),
    c = t(54565);
   function a(e) {
    return (0, c.c)() ? e.children() : null;
   }
   var l = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(a, {
     children: () => {
      const i = t(83294).V6;
      return (0, l.jsx)(i, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var h = t(67970),
    u = t(72642),
    j = t(46447),
    g = t(45561);
   const p = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    m = ({ checked: e, children: n, title: t, description: i, headingLevel: o = 3 }) => (0, l.jsxs)('li', { className: (0, r.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, r.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(g.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [t ? (0, l.jsx)(j.DZ, { appearance: 'utrecht-heading-3', level: o, children: t }) : null, i, n] })] });
   var v = t(33062);
   const k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => v.f4.includes(e.id)),
      o = t && v.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(i.If, { sections: o.map((t) => ({ className: (0, r.A)('definition-of-done', t && `definition-of-done--${(0, v.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(p, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, l.jsx)(m, { headingLevel: n + 1, checked: e, title: t, description: (0, v.qZ)(i) }, i)) }), (0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !v.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            i = n.progress.max - n.progress.value;
           return t === i ? e.title.localeCompare(n.title) : t - i;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            r = t?.value,
            c = (0, v.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => a.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(s.Wu, {
              children: [
               (0, l.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(i.fz, { children: [(0, l.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || c.length > 0) && (0, l.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(i.dk, {
                  links: h
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const n = a.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               c.length > 0 && (0, l.jsx)(l.Fragment, { children: c.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(i.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, l.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(i.Xy, { children: [r ? (0, l.jsxs)(i.Er, { children: ['Vul de ', (0, l.jsx)(i.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(i.Er, { children: [(0, l.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && v.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u.p, { level: n, suffix: r && (0, l.jsx)(h.D, { state: r }), children: e.title }), (0, l.jsx)(i.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => l, Fu: () => s, Wu: () => c, Zp: () => a });
   var i = t(46447),
    r = t(13526),
    o = t(86070);
   const s = ({ background: e, children: n, className: t, ...i }) => (0, o.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, t), ...i, children: n }),
    c = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: n, className: t, component: s = 'div', background: c, children: a }) => {
     const l = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(l, { className: (0, r.A)('cardgroup__card', c && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: a });
     return e ? (0, o.jsx)(i.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
