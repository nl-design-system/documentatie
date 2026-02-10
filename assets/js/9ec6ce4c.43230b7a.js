(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67801],
 {
  1292(e, t, n) {
   'use strict';
   n.d(t, { r: () => d });
   var r = n(29181),
    s = n(74172),
    c = n(15089),
    i = n(28377),
    o = n(33648),
    a = n(83386),
    l = n(86070);
   const h = { figma: (0, l.jsx)(s.A, {}), github: (0, l.jsx)(c.A, {}), npm: (0, l.jsx)(i.A, {}), storybook: (0, l.jsx)(o.A, {}) },
    d = ({ brand: e }) => (0, l.jsx)(r.In, { children: h[e] || (0, l.jsx)(a.A, {}) });
  },
  12013(e, t, n) {
   'use strict';
   n.d(t, { o: () => h });
   var r = n(18439),
    s = n(46447),
    c = n(86070);
   const i = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: s } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + s;
     }
     return n.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: t, ...n }) => (0, c.jsx)('img', { ...n, src: i(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, t) => {
     if (e) {
      const e = { ...o[t - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[t];
    },
    h = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: s = '', components: i = {} }) => (0, c.jsx)(r.x, { components: { ...l(t, n), ...a(s), ...i }, children: e });
  },
  33062(e, t, n) {
   'use strict';
   n.d(t, { bo: () => s, KF: () => u, mJ: () => y, VZ: () => w, cR: () => x, Pv: () => p, qZ: () => i, kD: () => q, B2: () => m, Pc: () => a, f4: () => o, GT: () => f, fX: () => c, eQ: () => k, B_: () => v, o_: () => g, Rc: () => b });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    c = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function h(e) {
    return Array.from(new Set(e));
   }
   const d = (e) => [...e].sort((e, t) => l.indexOf(e) - l.indexOf(t)),
    u = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => j(e));
     return d(h(t));
    },
    m = (e, t) => y(e).includes(t),
    j = (e) => {
     const t = / URL \(([^)]+)\)/;
     return d(h(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    y = (e) => d(h(e.projects.flatMap((e) => j(e)))),
    p = (e) => {
     const t = j(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: s, value: c }) => {
        const i = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: s, value: c, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    k = (e, t) => t.reduce((e, t) => e?.[t], e);
   function q(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? q(e[n], [...t, n]) : []));
   }
   function f(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, g(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function b(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) (e[t] || (e[t] = {}), (e = e[t]));
    }
    return t;
   }
   const x = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  42962(e, t, n) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   ((s.keys = () => Object.keys(r)), (s.id = 42962), (e.exports = s));
  },
  51580(e, t, n) {
   var r = { './button-docs/docs/anatomy/anatomy.md': [46106, 46106], './code-block-docs/docs/anatomy/anatomy.md': [91631, 91631], './code-docs/docs/anatomy/anatomy.md': [69367, 69367], './color-sample-docs/docs/anatomy/anatomy.md': [73940, 73940], './data-badge-docs/docs/anatomy/anatomy.md': [69506, 69506], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [64417, 64417], './link-docs/docs/anatomy/anatomy.md': [33185, 33185], './mark-docs/docs/anatomy/anatomy.md': [91171, 91171], './number-badge-docs/docs/anatomy/anatomy.md': [87231, 87231], './paragraph-docs/docs/anatomy/anatomy.md': [19961, 19961], './skip-link-docs/docs/anatomy/anatomy.md': [63513, 63513] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   ((s.keys = () => Object.keys(r)), (s.id = 51580), (e.exports = s));
  },
  67568(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { assets: () => b, component: () => z, contentTitle: () => f, default: () => A, description: () => w, frontMatter: () => q, issueNumber: () => _, metadata: () => r, title: () => x, toc: () => N }));
   const r = JSON.parse('{"id":"componenten/heading-5/index","title":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","source":"@site/docs/componenten/heading-5/index.mdx","sourceDirName":"componenten/heading-5","slug":"/heading-5","permalink":"/heading-5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-5/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 5","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 5","pagination_label":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","slug":"/heading-5","keywords":["caption","content","h5","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 4","permalink":"/heading-4"},"next":{"title":"Heading 6","permalink":"/heading-6"}}');
   var s,
    c,
    i,
    o,
    a,
    l,
    h,
    d = n(86070),
    u = n(18439),
    m = n(78742),
    j = n(30758);
   function y() {
    return (
     (y = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
         }
         return e;
        }),
     y.apply(null, arguments)
    );
   }
   const p = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 258v24' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M320.448 269.976v2.064l.032 2.032h.528q1.375 0 2.16-1.12.8-1.135.8-3.216 0-2.112-.8-3.216-.784-1.104-2.144-1.104h-.544l-.032 2v2.56m-3.92-4.624v-.864h4.752q1.712 0 2.928.64a4.4 4.4 0 0 1 1.872 1.792q.656 1.168.656 2.8 0 1.664-.704 2.848t-2 1.808q-1.28.624-3.04.624h-4.464v-.864l1.2-.128q.032-.976.032-1.984v-4.56q0-1.008-.032-1.984zM327.761 275v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368.561 0 .96.368.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.943 9.408q-1.072 0-1.68-.512-.608-.528-.608-1.712v-.768q.016-.368.016-.832v-3.056h-1.04v-.944l1.184-.16.8-2.24h1.632l-.032 2.256h1.68v1.088h-1.68v4.48q0 .56.224.832.24.256.592.256.416 0 .864-.352l.4.384q-.32.608-.896.944-.56.336-1.456.336m6.148-.24v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.719 9.408a5.4 5.4 0 0 1-2.784-.736l.047-1.952h1.281l.272 1.584q.288.112.576.176.288.048.624.048.687 0 1.056-.224.367-.24.367-.72a.88.88 0 0 0-.271-.64q-.273-.272-1.072-.496l-.864-.256q-.928-.272-1.441-.88-.495-.608-.495-1.504 0-1.104.864-1.856.863-.768 2.48-.768.704 0 1.296.176.608.16 1.232.48l-.112 1.744h-1.28l-.32-1.376q-.337-.128-.88-.128-.544 0-.88.224-.32.224-.32.672 0 .32.256.576.255.24 1.088.496l.784.224q1.135.336 1.632.96.495.624.496 1.52 0 1.265-.976 1.968-.96.688-2.656.688m11.855-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m8.311-7.392q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m4.344-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm18.145-7.024v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm7.216 7.264q-1.248 0-2.16-.512a3.63 3.63 0 0 1-1.408-1.456q-.495-.944-.496-2.176 0-1.232.528-2.144a3.86 3.86 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.137 0 2.048.496.929.496 1.472 1.424.544.912.544 2.16t-.496 2.176a3.6 3.6 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m9.157.832q-1.248 0-2.16-.512a3.6 3.6 0 0 1-1.408-1.456q-.496-.944-.496-2.176t.528-2.144a3.84 3.84 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.136 0 2.048.496a3.7 3.7 0 0 1 1.472 1.424q.544.912.544 2.16t-.496 2.176a3.63 3.63 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m4.951.592v-.752l.88-.176q.015-.592.016-1.264v-2.112q0-.448-.016-.736 0-.288-.016-.528 0-.256-.016-.576l-.976-.144v-.624l3.152-1.072.288.176.144 1.888q.336-1.024.944-1.536.607-.528 1.2-.528.528 0 .912.304.384.288.48.88-.017.624-.336.976a1.06 1.06 0 0 1-.8.336q-.672 0-1.232-.752l-.096-.128a4 4 0 0 0-.656.848 4 4 0 0 0-.416 1.072v2.224q0 .64.016 1.2l1.264.272V275zm7.078.016v-.752l.848-.176q.016-.576.016-1.248v-7.936l-.992-.128v-.672l3.312-.72.256.16-.064 2.24v2.256q1.009-1.024 2.32-1.024.88 0 1.584.464.705.448 1.12 1.36.432.896.432 2.224 0 1.296-.48 2.24-.48.928-1.264 1.44a3.03 3.03 0 0 1-1.68.496q-1.311 0-2.112-.944l-.272.928zm4.528-6.608q-.303 0-.576.128a2.6 2.6 0 0 0-.528.336v4.576q.497.448 1.088.448.705 0 1.152-.688.464-.688.464-2.096 0-1.424-.448-2.064-.432-.64-1.152-.64m9.299-.56q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408t-2.016.464m4.046-.24v-.752l.88-.192q.016-.608.016-1.216.016-.607.016-1.2v-6.704l-.992-.16v-.672l3.36-.72.256.16-.064 2.24v7.072l.032 1.216.88.176V275zm7.924-3.824q0 1.312.464 2 .464.672 1.2.672.544 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.736 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.416-.912-.416-2.208 0-1.312.496-2.24.512-.944 1.312-1.44a3.18 3.18 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm12.202-7.2v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm9.344 7.248q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.536 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.191-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m6.084 2.224v-.752l.864-.192q.015-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm17.249-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.496.944-1.344 1.408-.847.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m4.343-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.207-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.282 0v-.752l.864-.192q.015-.576.016-1.248v-7.872l-.992-.16v-.672l3.312-.72.256.16-.064 2.24v2.576q.64-.752 1.232-1.04a2.9 2.9 0 0 1 1.312-.304q1.056 0 1.696.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.208v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.784-.192-1.088-.177-.304-.672-.304-.32 0-.688.192a3.2 3.2 0 0 0-.736.544v3.52q0 .672.016 1.264l.752.16V275zm13.843-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.513-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m10.489-.016q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.535 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.192-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m8.804-1.6q0 1.312.464 2 .463.672 1.2.672.543 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.737 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.417-.912-.416-2.208 0-1.312.496-2.24.511-.944 1.312-1.44a3.17 3.17 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm3.948-.176v-.752l.864-.192q.015-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168a1.4 1.4 0 0 1-.96-.352 1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.399-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m2.902 9.168v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.331-3.584a.89.89 0 0 0 .832-.496q.288-.497.288-1.344t-.288-1.312q-.272-.48-.8-.48-.543 0-.816.48t-.272 1.328.256 1.344q.257.48.8.48m-2.128 4.912q0 .704.528 1.024.528.336 1.616.336 1.2 0 1.808-.352t.608-.88a.94.94 0 0 0-.256-.64q-.255-.272-.912-.272h-1.68q-.88 0-1.456-.144a2.2 2.2 0 0 0-.192.432 1.7 1.7 0 0 0-.064.496m2.144-4.16q-.832 0-1.456-.192a1.46 1.46 0 0 0-.192.736q0 .272.208.448.208.16.72.16h1.872q1.216 0 1.936.304.72.288 1.024.816.32.512.32 1.216 0 .8-.528 1.472-.528.688-1.584 1.088-1.04.416-2.576.416-1.327 0-2.08-.272-.751-.256-1.056-.688a1.56 1.56 0 0 1-.304-.912q0-1.024 1.328-1.648-.495-.208-.72-.544a1.4 1.4 0 0 1-.208-.736q0-.56.32-1.056.337-.512.928-1.024-.655-.336-.976-.896a2.5 2.5 0 0 1-.32-1.248q0-1.12.816-1.856.833-.736 2.528-.736.864 0 1.504.192t1.04.544l1.792-.768.256.16v1.232h-1.52q.288.528.288 1.232 0 1.072-.832 1.824-.815.736-2.528.736' })));
   var g = n(72401),
    v = n(84068),
    k = n(99630);
   const q = { title: 'Heading 5', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 5', pagination_label: 'Heading 5', description: 'Koptekst die in de koppenstructuur op het vijfde niveau staat.', slug: '/heading-5', keywords: ['caption', 'content', 'h5', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 5',
    w = 'Koptekst die in de koppenstructuur op het vijfde niveau staat.',
    _ = 261,
    z = m.find((e) => e.number === _),
    N = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function T(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(k.Fc, { component: z, headingLevel: 1, description: w }), '\n', (0, d.jsx)(g.e, { component: z }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(v.H, { component: z, illustration: p }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(k.VK, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(k.mu, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(k.$9, { component: z, headingLevel: 2 })] });
   }
   function A(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(T, { ...e }) }) : T(e);
   }
  },
  67970(e, t, n) {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(46447),
    s = n(13526),
    c = n(33062),
    i = n(86070);
   const o = ({ state: e }) => {
    const t = (0, c.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72401(e, t, n) {
   'use strict';
   n.d(t, { e: () => o });
   var r = n(12013),
    s = n(30758),
    c = n(33062),
    i = n(86070);
   const o = ({ component: e }) => {
    const { title: t } = e,
     o = (0, c.fX)(t),
     a = s.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(a, {}) }) });
   };
  },
  72642(e, t, n) {
   'use strict';
   n.d(t, { p: () => c });
   var r = n(13526),
    s = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
  82839(e, t, n) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   ((s.keys = () => Object.keys(r)), (s.id = 82839), (e.exports = s));
  },
  84068(e, t, n) {
   'use strict';
   n.d(t, { H: () => h });
   var r = n(12013),
    s = n(13526),
    c = n(30758),
    i = n(33062),
    o = n(86070);
   const a = ({ children: e }) => (0, o.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    l = ({ children: e }) => (0, o.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    h = ({ component: e, illustration: t }) => {
     const { title: h } = e,
      d = (0, i.fX)(h),
      u = c.lazy(() => n(51580)(`./${d}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, o.jsx)(c.Suspense, { fallback: null, children: (0, o.jsxs)('figure', { className: (0, s.A)('component-anatomy'), children: [t && (0, o.jsx)(t, { height: null, className: (0, s.A)('component-anatomy__illustration') }), t && u && (0, o.jsx)('figcaption', { children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, o.jsx)(a, { children: e }), li: ({ children: e }) => (0, o.jsx)(l, { children: e }) }, children: (0, o.jsx)(u, {}) }) })] }) });
    };
  },
  90495(e, t, n) {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => i, Wu: () => o, Zp: () => a });
   var r = n(46447),
    s = n(13526),
    c = n(86070);
   const i = ({ background: e, children: t, className: n, ...r }) => (0, c.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    o = (e) => (0, c.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: i = 'div', background: o, children: a }) => {
     const l = (e) => ('article' === i ? (0, c.jsx)('article', { ...e }) : 'section' === i ? (0, c.jsx)('section', { ...e }) : (0, c.jsx)('div', { ...e })),
      h = (0, c.jsx)(l, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: a });
     return e ? (0, c.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: h }) : h;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, c.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  99630(e, t, n) {
   'use strict';
   n.d(t, { VK: () => g, $9: () => k, mu: () => v, Fc: () => q });
   var r = n(29181),
    s = n(13526),
    c = n(1292),
    i = n(90495),
    o = n(37241),
    a = n(86070);
   const l = ({ checked: e, unchecked: t }) =>
    (0, a.jsx)(o.A, {
     fallback: (0, a.jsx)(a.Fragment, {}),
     children: () => {
      const r = n(83294).V6;
      return (0, a.jsx)(r, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: t, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var h = n(67970),
    d = n(72642),
    u = n(46447),
    m = n(45561);
   const j = ({ children: e }) => (0, a.jsx)('ul', { className: 'task-list', children: e }),
    y = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, a.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, a.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, a.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, a.jsx)(m.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, a.jsxs)('div', { children: [n ? (0, a.jsx)(u.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }) : null, r, t] })] });
   var p = n(33062);
   const g = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => p.f4.includes(e.id)),
      c = n && p.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, a.jsx)(r.If, { sections: c.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, p.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(j, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, a.jsx)(y, { headingLevel: t + 1, checked: e, title: n, description: (0, p.qZ)(r) }, r)) }), (0, a.jsx)(r.fz, { children: (0, a.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && n.length
      ? (0, a.jsx)(i.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: n
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const n = e.tasks.find(({ name: e }) => 'Naam' === e),
            s = n?.value,
            o = (0, p.Pv)(e),
            h = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            d = e.tasks.filter(({ name: e, value: t }) => h.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, a.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, a.jsxs)(i.Wu, {
              children: [
               (0, a.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, a.jsxs)(r.fz, { children: [(0, a.jsx)(l, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, a.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (d.length > 0 || o.length > 0) && (0, a.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               d.length > 0 &&
                (0, a.jsx)(a.Fragment, {
                 children: (0, a.jsx)(r.dk, {
                  links: d
                   .filter((e) => !!h.get(e.name))
                   .map((e) => {
                    const t = h.get(e.name);
                    return { children: t.desciption, icon: (0, a.jsx)(c.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, a.jsx)(a.Fragment, { children: o.map(({ frameworkName: e, tasks: n }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, a.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, a.jsx)(c.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, a.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, a.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, a.jsxs)(r.Xy, { children: [s ? (0, a.jsxs)(r.Er, { children: ['Vul de ', (0, a.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, a.jsxs)(r.Er, { children: [(0, a.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, a.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, a.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, a.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    q = ({ component: e, headingLevel: t, description: n }) => {
     const s = e && p.bo[e.relayStep];
     return e && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(d.p, { level: t, suffix: s && (0, a.jsx)(h.D, { state: s }), children: e.title }), (0, a.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
 },
]);
