(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7971],
 {
  1292(e, t, n) {
   'use strict';
   n.d(t, { r: () => h });
   var r = n(29181),
    o = n(74172),
    c = n(15089),
    i = n(28377),
    s = n(33648),
    a = n(83386),
    l = n(86070);
   const u = { figma: (0, l.jsx)(o.A, {}), github: (0, l.jsx)(c.A, {}), npm: (0, l.jsx)(i.A, {}), storybook: (0, l.jsx)(s.A, {}) },
    h = ({ brand: e }) => (0, l.jsx)(r.In, { children: u[e] || (0, l.jsx)(a.A, {}) });
  },
  33062(e, t, n) {
   'use strict';
   n.d(t, { bo: () => o, KF: () => d, mJ: () => m, VZ: () => _, cR: () => w, Pv: () => p, qZ: () => i, kD: () => k, B2: () => j, Pc: () => a, f4: () => s, GT: () => f, fX: () => c, eQ: () => v, B_: () => b, o_: () => g, Rc: () => x });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    c = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function u(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, t) => l.indexOf(e) - l.indexOf(t)),
    d = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => y(e));
     return h(u(t));
    },
    j = (e, t) => m(e).includes(t),
    y = (e) => {
     const t = / URL \(([^)]+)\)/;
     return h(u(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    m = (e) => h(u(e.projects.flatMap((e) => y(e)))),
    p = (e) => {
     const t = y(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: o, value: c }) => {
        const i = /^(.+) URL/.exec(r)[1],
         s = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: o, value: c, description: s };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    v = (e, t) => t.reduce((e, t) => e?.[t], e);
   function k(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? k(e[n], [...t, n]) : []));
   }
   function f(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, g(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function x(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) (e[t] || (e[t] = {}), (e = e[t]));
    }
    return t;
   }
   const w = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    _ = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  42962(e, t, n) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
   function o(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     o = t[0];
    return n.e(t[1]).then(() => n(o));
   }
   ((o.keys = () => Object.keys(r)), (o.id = 42962), (e.exports = o));
  },
  54565(e, t, n) {
   'use strict';
   n.d(t, { c: () => o });
   var r = n(30758);
   function o() {
    const [e, t] = (0, r.useState)();
    return ((0, r.useEffect)(() => t(!0), []), e);
   }
  },
  62943(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { assets: () => u, component: () => y, contentTitle: () => l, default: () => g, description: () => d, frontMatter: () => a, issueNumber: () => j, metadata: () => r, title: () => h, toc: () => m }));
   const r = JSON.parse('{"id":"componenten/select-combobox/index","title":"Select Combobox","description":"Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.","source":"@site/docs/componenten/select-combobox/index.mdx","sourceDirName":"componenten/select-combobox","slug":"/select-combobox","permalink":"/select-combobox","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/select-combobox/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Select Combobox","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Select Combobox","pagination_label":"Select Combobox","description":"Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.","slug":"/select-combobox","keywords":["autocomplete","automatisch aanvullen","combo box","combobox","dropdown","dropdown list","dropdown menu","dropdown with filter","filter","keuzeveld","multiselect","opties","options","option list","optie kiezen","option selector","select","select field","select input","select combobox","selection box","typeahead"]},"sidebar":"componenten","previous":{"title":"Select","permalink":"/select"},"next":{"title":"Separator","permalink":"/separator"}}');
   var o = n(86070),
    c = n(18439),
    i = n(36059),
    s = n(85825);
   const a = { title: 'Select Combobox', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Select Combobox', pagination_label: 'Select Combobox', description: 'Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.', slug: '/select-combobox', keywords: ['autocomplete', 'automatisch aanvullen', 'combo box', 'combobox', 'dropdown', 'dropdown list', 'dropdown menu', 'dropdown with filter', 'filter', 'keuzeveld', 'multiselect', 'opties', 'options', 'option list', 'optie kiezen', 'option selector', 'select', 'select field', 'select input', 'select combobox', 'selection box', 'typeahead'] },
    l = void 0,
    u = {},
    h = 'Select Combobox',
    d = 'Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.',
    j = 341,
    y = i.find((e) => e.number === j),
    m = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function p(e) {
    const t = { h2: 'h2', ...(0, c.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, o.jsx)(s.Fc, { component: y, headingLevel: 1, description: d }), '\n', (0, o.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, o.jsx)(s.VK, { component: y, headingLevel: 3 }), '\n', (0, o.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, o.jsx)(s.mu, { component: y, headingLevel: 3 }), '\n', (0, o.jsx)(s.$9, { component: y, headingLevel: 2 })] });
   }
   function g(e = {}) {
    const { wrapper: t } = { ...(0, c.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  67970(e, t, n) {
   'use strict';
   n.d(t, { D: () => s });
   var r = n(46447),
    o = n(13526),
    c = n(33062),
    i = n(86070);
   const s = ({ state: e }) => {
    const t = (0, c.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, o.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72642(e, t, n) {
   'use strict';
   n.d(t, { p: () => c });
   var r = n(13526),
    o = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...i }) => (0, o.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...i, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
  85825(e, t, n) {
   'use strict';
   n.d(t, { VK: () => b, $9: () => k, mu: () => v, Fc: () => f });
   var r = n(29181),
    o = n(13526),
    c = n(1292),
    i = n(90495),
    s = n(54565);
   function a(e) {
    return (0, s.c)() ? e.children() : null;
   }
   var l = n(86070);
   const u = ({ checked: e, unchecked: t }) =>
    (0, l.jsx)(a, {
     children: () => {
      const r = n(83294).V6;
      return (0, l.jsx)(r, {
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
    j = n(46447),
    y = n(45561);
   const m = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    p = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, l.jsxs)('li', { className: (0, o.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, o.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(y.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [n ? (0, l.jsx)(j.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }) : null, r, t] })] });
   var g = n(33062);
   const b = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => g.f4.includes(e.id)),
      c = n && g.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: c.map((n) => ({ className: (0, o.A)('definition-of-done', n && `definition-of-done--${(0, g.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(m, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, l.jsx)(p, { headingLevel: t + 1, checked: e, title: n, description: (0, g.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && n.length
      ? (0, l.jsx)(i.AC, {
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
            o = n?.value,
            s = (0, g.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: t }) => a.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, l.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(i.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(u, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || s.length > 0) && (0, l.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const t = a.get(e.name);
                    return { children: t.desciption, icon: (0, l.jsx)(c.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, l.jsx)(l.Fragment, { children: s.map(({ frameworkName: e, tasks: n }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: t + 2, children: [o, ' in ', e] }), (0, l.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, l.jsx)(c.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      o = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [o ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: o, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    f = ({ component: e, headingLevel: t, description: n }) => {
     const o = e && g.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(d.p, { level: t, suffix: o && (0, l.jsx)(h.D, { state: o }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  90495(e, t, n) {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => i, Wu: () => s, Zp: () => a });
   var r = n(46447),
    o = n(13526),
    c = n(86070);
   const i = ({ background: e, children: t, className: n, ...r }) => (0, c.jsx)('div', { className: (0, o.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    s = (e) => (0, c.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: i = 'div', background: s, children: a }) => {
     const l = (e) => ('article' === i ? (0, c.jsx)('article', { ...e }) : 'section' === i ? (0, c.jsx)('section', { ...e }) : (0, c.jsx)('div', { ...e })),
      u = (0, c.jsx)(l, { className: (0, o.A)('cardgroup__card', s && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: a });
     return e ? (0, c.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: u }) : u;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, c.jsx)('div', { className: (0, o.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
 },
]);
