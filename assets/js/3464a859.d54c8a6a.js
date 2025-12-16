(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [49717],
 {
  14889: (e, t, n) => {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => s, Wu: () => o, Zp: () => a });
   var r = n(68873),
    i = n(13526),
    c = n(86070);
   const s = ({ background: e, children: t, className: n, ...r }) => (0, c.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    o = (e) => (0, c.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: t, className: n, component: s = 'div', background: o, children: a }) => {
     const l = (e) => ('article' === s ? (0, c.jsx)('article', { ...e }) : 'section' === s ? (0, c.jsx)('section', { ...e }) : (0, c.jsx)('div', { ...e })),
      u = (0, c.jsx)(l, { className: (0, i.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: a });
     return e ? (0, c.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: u }) : u;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, c.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  36444: (e, t, n) => {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(68873),
    i = n(13526),
    c = n(75916),
    s = n(86070);
   const o = ({ state: e }) => {
    const t = (0, c.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, i.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  50341: (e, t, n) => {
   'use strict';
   n.d(t, { VK: () => _, $9: () => N, mu: () => w, Fc: () => A });
   var r = n(14537),
    i = n(13526),
    c = n(74172),
    s = n(15089),
    o = n(28377),
    a = n(33648),
    l = n(83386),
    u = n(86070);
   const h = { figma: (0, u.jsx)(c.A, {}), github: (0, u.jsx)(s.A, {}), npm: (0, u.jsx)(o.A, {}), storybook: (0, u.jsx)(a.A, {}) },
    d = ({ brand: e }) => (0, u.jsx)(r.In, { children: h[e] || (0, u.jsx)(l.A, {}) });
   var j = n(14889),
    y = n(98274);
   const g = ({ checked: e, unchecked: t }) =>
    (0, u.jsx)(y.A, {
     fallback: (0, u.jsx)(u.Fragment, {}),
     children: () => {
      const r = n(83294).V6;
      return (0, u.jsx)(r, {
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
   var m = n(36444),
    p = n(98584),
    v = n(68873),
    b = n(51797);
   const k = ({ children: e }) => (0, u.jsx)('ul', { className: 'task-list', children: e }),
    f = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, u.jsxs)('li', { className: (0, i.A)('task-list-item'), children: [(0, u.jsxs)('div', { className: (0, i.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, u.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, u.jsx)(b.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, u.jsxs)('div', { children: [(0, u.jsx)(v.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }), r, t] })] });
   var x = n(75916);
   const _ = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => x.f4.includes(e.id)),
      c = n && x.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, u.jsx)(r.If, { sections: c.map((n) => ({ className: (0, i.A)('definition-of-done', n && `definition-of-done--${(0, x.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(k, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, u.jsx)(f, { headingLevel: t + 1, checked: e, title: n, description: (0, x.qZ)(r) }, r)) }), (0, u.jsx)(r.fz, { children: (0, u.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    w = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !x.f4.includes(e.id));
     return e && n.length
      ? (0, u.jsx)(j.AC, {
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
            i = n?.value,
            c = (0, x.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter(({ name: e, value: t }) => s.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, u.jsx)(
            j.Zp,
            {
             className: 'implementation-card',
             children: (0, u.jsxs)(j.Wu, {
              children: [
               (0, u.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, u.jsxs)(r.fz, { children: [(0, u.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, u.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (o.length > 0 || c.length > 0) && (0, u.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               o.length > 0 &&
                (0, u.jsx)(u.Fragment, {
                 children: (0, u.jsx)(r.dk, {
                  links: o
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const t = s.get(e.name);
                    return { children: t.desciption, icon: (0, u.jsx)(d, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               c.length > 0 && (0, u.jsx)(u.Fragment, { children: c.map(({ frameworkName: e, tasks: n }) => (0, u.jsxs)(u.Fragment, { children: [(0, u.jsxs)(r.DZ, { level: t + 2, children: [i, ' in ', e] }), (0, u.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, u.jsx)(d, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, u.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    N = ({ component: e }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      n = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return e && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, u.jsxs)(r.Xy, { children: [n ? (0, u.jsxs)(r.Er, { children: ['Vul de ', (0, u.jsx)(r.N_, { href: n, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, u.jsxs)(r.Er, { children: [(0, u.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, u.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, u.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, u.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    A = ({ component: e, headingLevel: t, description: n }) => {
     const i = e && x.bo[e.relayStep];
     return e && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(p.p, { level: t, suffix: i && (0, u.jsx)(m.D, { state: i }), children: e.title }), (0, u.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  70440: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => u, component: () => y, contentTitle: () => l, default: () => p, description: () => d, frontMatter: () => a, issueNumber: () => j, metadata: () => r, title: () => h, toc: () => g });
   const r = JSON.parse('{"id":"componenten/page-header/index","title":"Page Header","description":"Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.","source":"@site/docs/componenten/page-header/index.mdx","sourceDirName":"componenten/page-header","slug":"/page-header","permalink":"/page-header","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/page-header/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Page Header","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Page Header","pagination_label":"Page Header","description":"Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.","slug":"/page-header","keywords":["branding","global","global header","header","language","logo","main header","masthead","merk","navigation","navigation bar","pageheader","page header","section header","toolbar","top header","top bar"]},"sidebar":"componenten","previous":{"title":"Page Footer","permalink":"/page-footer"},"next":{"title":"Page Number Navigation","permalink":"/page-number-navigation"}}');
   var i = n(86070),
    c = n(85248),
    s = n(48976),
    o = n(50341);
   const a = { title: 'Page Header', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Page Header', pagination_label: 'Page Header', description: 'Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.', slug: '/page-header', keywords: ['branding', 'global', 'global header', 'header', 'language', 'logo', 'main header', 'masthead', 'merk', 'navigation', 'navigation bar', 'pageheader', 'page header', 'section header', 'toolbar', 'top header', 'top bar'] },
    l = void 0,
    u = {},
    h = 'Page Header',
    d = 'Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.',
    j = 55,
    y = s.find((e) => e.number === j),
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ];
   function m(e) {
    const t = { h2: 'h2', ...(0, c.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(o.Fc, { component: y, headingLevel: 1, description: d }), '\n', (0, i.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(o.VK, { component: y, headingLevel: 3 }), '\n', (0, i.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(o.mu, { component: y, headingLevel: 3 }), '\n', (0, i.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, i.jsx)(o.$9, { component: y, headingLevel: 3 })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, c.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  74111: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [21118, 21118], './utrecht-backdrop.entry.js': [59925, 82306], './utrecht-body.entry.js': [48603, 70984], './utrecht-breadcrumb-nav.entry.js': [35894, 13513], './utrecht-checkbox.entry.js': [32406, 10025], './utrecht-column-layout.entry.js': [28996, 6615], './utrecht-contact-card-template.entry.js': [8469, 30850], './utrecht-custom-checkbox.entry.js': [74796, 52415], './utrecht-data-list-actions.entry.js': [50286, 27905], './utrecht-data-list-item.entry.js': [29722, 7341], './utrecht-data-list-key.entry.js': [22346, 99965], './utrecht-data-list-value.entry.js': [50348, 27967], './utrecht-data-list.entry.js': [26112, 3731], './utrecht-digid-button.entry.js': [3603, 25984], './utrecht-digid-logo.entry.js': [6128, 83747], './utrecht-eherkenning-logo.entry.js': [665, 23046], './utrecht-eidas-logo.entry.js': [31245, 53626], './utrecht-form-field-error-message.entry.js': [50061, 72442], './utrecht-form-toggle.entry.js': [20334, 97953], './utrecht-html-content.entry.js': [96334, 96334], './utrecht-icon-afspraak-maken.entry.js': [77059, 99440], './utrecht-icon-afval-container.entry.js': [40503, 62884], './utrecht-icon-afval-containerpas.entry.js': [82447, 4828], './utrecht-icon-afval-kalender.entry.js': [35440, 13059], './utrecht-icon-afval-pmd.entry.js': [9417, 31798], './utrecht-icon-afval-scheiden.entry.js': [85137, 7518], './utrecht-icon-afval.entry.js': [36373, 58754], './utrecht-icon-afvalkalender.entry.js': [51039, 73420], './utrecht-icon-alleen.entry.js': [51706, 29325], './utrecht-icon-arrow.entry.js': [96722, 19103], './utrecht-icon-auto.entry.js': [23336, 955], './utrecht-icon-begroting.entry.js': [61910, 39529], './utrecht-icon-bestemmingsplan.entry.js': [95466, 73085], './utrecht-icon-betaaldatum.entry.js': [34725, 57106], './utrecht-icon-bewijsstukken.entry.js': [86706, 64325], './utrecht-icon-bijstand.entry.js': [79608, 57227], './utrecht-icon-blad.entry.js': [23396, 1015], './utrecht-icon-bluesky.entry.js': [41230, 18849], './utrecht-icon-bouwproject.entry.js': [71527, 93908], './utrecht-icon-brandgevaar.entry.js': [78336, 55955], './utrecht-icon-brief-betalen.entry.js': [45975, 68356], './utrecht-icon-checkmark.entry.js': [41542, 19161], './utrecht-icon-chevron-down.entry.js': [19997, 42378], './utrecht-icon-chevron-left.entry.js': [3508, 81127], './utrecht-icon-chevron-right.entry.js': [32507, 54888], './utrecht-icon-chevron-up.entry.js': [41032, 18651], './utrecht-icon-close.entry.js': [67295, 89676], './utrecht-icon-college-b-w.entry.js': [49777, 72158], './utrecht-icon-container-bio.entry.js': [71539, 93920], './utrecht-icon-container-glas.entry.js': [29302, 6921], './utrecht-icon-container-groenafval.entry.js': [93948, 71567], './utrecht-icon-container-met-zak.entry.js': [1624, 79243], './utrecht-icon-container-papier.entry.js': [47694, 25313], './utrecht-icon-container-pmd.entry.js': [73840, 51459], './utrecht-icon-container-restafval.entry.js': [44453, 66834], './utrecht-icon-container-textiel.entry.js': [69930, 47549], './utrecht-icon-container.entry.js': [48100, 25719], './utrecht-icon-cross.entry.js': [50587, 72968], './utrecht-icon-dakloos.entry.js': [57056, 34675], './utrecht-icon-dementie.entry.js': [4326, 81945], './utrecht-icon-documenten.entry.js': [85193, 7574], './utrecht-icon-duurzaam.entry.js': [45600, 23219], './utrecht-icon-eenzaamheid.entry.js': [60650, 38269], './utrecht-icon-eikenprocessie.entry.js': [88400, 66019], './utrecht-icon-elektrisch-rijden.entry.js': [2720, 80339], './utrecht-icon-energie-vergoeding.entry.js': [26791, 49172], './utrecht-icon-energietransitie.entry.js': [34383, 56764], './utrecht-icon-error.entry.js': [57205, 79586], './utrecht-icon-evenementen.entry.js': [52447, 74828], './utrecht-icon-facebook.entry.js': [76311, 98692], './utrecht-icon-fiets.entry.js': [11770, 89389], './utrecht-icon-filter.entry.js': [17757, 40138], './utrecht-icon-geboorte.entry.js': [34206, 11825], './utrecht-icon-gebruiker-centraal.entry.js': [67230, 44849], './utrecht-icon-gebruiker-ingelogd.entry.js': [48305, 70686], './utrecht-icon-gegevenswoordenboek.entry.js': [73424, 51043], './utrecht-icon-geluid.entry.js': [11789, 34170], './utrecht-icon-gemeente-locatie.entry.js': [97085, 19466], './utrecht-icon-gemeenteraad.entry.js': [64741, 87122], './utrecht-icon-gereedschap.entry.js': [95044, 72663], './utrecht-icon-gezicht.entry.js': [29497, 51878], './utrecht-icon-gezin.entry.js': [26654, 4273], './utrecht-icon-glas-afval.entry.js': [60819, 83200], './utrecht-icon-glijbaan.entry.js': [18637, 41018], './utrecht-icon-grafiek.entry.js': [26546, 4165], './utrecht-icon-grofvuil-ophalen.entry.js': [58649, 81030], './utrecht-icon-grofvuil.entry.js': [35927, 58308], './utrecht-icon-hamburger-menu.entry.js': [12466, 90085], './utrecht-icon-herdenking.entry.js': [48810, 26429], './utrecht-icon-hondenbelasting.entry.js': [82480, 60099], './utrecht-icon-horeca.entry.js': [74919, 97300], './utrecht-icon-horecavergunning.entry.js': [61636, 39255], './utrecht-icon-huis-en-omgeving.entry.js': [41809, 64190], './utrecht-icon-huis.entry.js': [3444, 81063], './utrecht-icon-huishoudelijk-geweld.entry.js': [57590, 35209], './utrecht-icon-hulp-huishouden.entry.js': [43517, 65898], './utrecht-icon-hulp-vervoer.entry.js': [86248, 63867], './utrecht-icon-hulp-zorg.entry.js': [68565, 90946], './utrecht-icon-hulpmiddelen-gezin.entry.js': [57304, 34923], './utrecht-icon-hulpverlening.entry.js': [72714, 50333], './utrecht-icon-idee.entry.js': [91204, 68823], './utrecht-icon-informatie.entry.js': [96677, 19058], './utrecht-icon-information.entry.js': [43781, 66162], './utrecht-icon-innovatie.entry.js': [47394, 25013], './utrecht-icon-inspraak-inwoners.entry.js': [560, 78179], './utrecht-icon-instagram.entry.js': [20179, 42560], './utrecht-icon-kalender.entry.js': [31401, 53782], './utrecht-icon-kennis.entry.js': [63475, 85856], './utrecht-icon-kerstbomen.entry.js': [10601, 32982], './utrecht-icon-klachten.entry.js': [44359, 66740], './utrecht-icon-kroon.entry.js': [85264, 62883], './utrecht-icon-laadpaal.entry.js': [28283, 50664], './utrecht-icon-language.entry.js': [47513, 69894], './utrecht-icon-lantaarnpaal-oud.entry.js': [48383, 70764], './utrecht-icon-lantaarnpaal.entry.js': [12270, 89889], './utrecht-icon-leren.entry.js': [26235, 81473], './utrecht-icon-let-op.entry.js': [34432, 12051], './utrecht-icon-linkedin.entry.js': [62321, 84702], './utrecht-icon-list-check.entry.js': [14150, 91769], './utrecht-icon-list-number.entry.js': [66693, 89074], './utrecht-icon-list.entry.js': [8815, 31196], './utrecht-icon-loupe.entry.js': [48760, 26379], './utrecht-icon-markt.entry.js': [7224, 84843], './utrecht-icon-mastodon.entry.js': [18956, 96575], './utrecht-icon-melding-boom.entry.js': [49769, 72150], './utrecht-icon-melding-klacht.entry.js': [94525, 16906], './utrecht-icon-melding-openbareruimte.entry.js': [51554, 29173], './utrecht-icon-melding-verlichting.entry.js': [31913, 54294], './utrecht-icon-melding.entry.js': [95625, 18006], './utrecht-icon-menselijk.entry.js': [74647, 97028], './utrecht-icon-menu-dot-open.entry.js': [30823, 53204], './utrecht-icon-menu-dot.entry.js': [65842, 43461], './utrecht-icon-meterkast.entry.js': [74341, 96722], './utrecht-icon-milieu-ontheffing.entry.js': [30533, 52914], './utrecht-icon-milieu-zone.entry.js': [22919, 45300], './utrecht-icon-minus-vertical.entry.js': [11346, 88965], './utrecht-icon-minus.entry.js': [59951, 82332], './utrecht-icon-mobiliteit.entry.js': [22519, 44900], './utrecht-icon-natuur.entry.js': [77430, 55049], './utrecht-icon-nieuw-huis.entry.js': [50659, 5897], './utrecht-icon-nieuwsbrief.entry.js': [20472, 98091], './utrecht-icon-nummerbord.entry.js': [95490, 73109], './utrecht-icon-om-het-huis.entry.js': [77323, 99704], './utrecht-icon-omgeving.entry.js': [68789, 91170], './utrecht-icon-omgevingsvisie.entry.js': [43154, 20773], './utrecht-icon-omgevingswet.entry.js': [94058, 71677], './utrecht-icon-onderhoud.entry.js': [35703, 58084], './utrecht-icon-ondernemen.entry.js': [58848, 36467], './utrecht-icon-openingstijden.entry.js': [2560, 80179], './utrecht-icon-over-de-stad.entry.js': [65860, 43479], './utrecht-icon-overlijden.entry.js': [19583, 41964], './utrecht-icon-panden.entry.js': [40233, 62614], './utrecht-icon-park.entry.js': [41699, 64080], './utrecht-icon-parkeerkaart.entry.js': [50138, 27757], './utrecht-icon-parkeervergunning.entry.js': [48220, 25839], './utrecht-icon-parken.entry.js': [10284, 87903], './utrecht-icon-parkeren-bedrijven.entry.js': [63427, 85808], './utrecht-icon-parkeren-betaalautomaat.entry.js': [79079, 1460], './utrecht-icon-parkeren-betalen.entry.js': [45967, 68348], './utrecht-icon-parkeren.entry.js': [55019, 77400], './utrecht-icon-participatie-campagne.entry.js': [20493, 42874], './utrecht-icon-participatie-like.entry.js': [81042, 58661], './utrecht-icon-participatie-pitch.entry.js': [96203, 18584], './utrecht-icon-paspoort.entry.js': [70771, 93152], './utrecht-icon-presentatie.entry.js': [66819, 89200], './utrecht-icon-prijskaartje.entry.js': [50869, 73250], './utrecht-icon-read-aloud.entry.js': [29333, 51714], './utrecht-icon-rijbewijs.entry.js': [16388, 94007], './utrecht-icon-rioolheffing.entry.js': [67517, 89898], './utrecht-icon-rolstoel.entry.js': [69169, 91550], './utrecht-icon-schild-gemeente-utrecht.entry.js': [76081, 98462], './utrecht-icon-search.entry.js': [57891, 80272], './utrecht-icon-shoppen.entry.js': [82732, 60351], './utrecht-icon-sinterklaas.entry.js': [17030, 94649], './utrecht-icon-slechtziende-hoordende.entry.js': [69228, 46847], './utrecht-icon-sport-en-cultuur.entry.js': [98796, 76415], './utrecht-icon-sport-voetbal.entry.js': [31085, 53466], './utrecht-icon-sport.entry.js': [95485, 17866], './utrecht-icon-stookverbod.entry.js': [47079, 69460], './utrecht-icon-strand.entry.js': [39735, 62116], './utrecht-icon-strooien.entry.js': [92040, 69659], './utrecht-icon-subsidie-gezin.entry.js': [10719, 33100], './utrecht-icon-subsidie.entry.js': [39519, 61900], './utrecht-icon-t-shirt.entry.js': [32838, 10457], './utrecht-icon-threads.entry.js': [36194, 13813], './utrecht-icon-thuiswerken.entry.js': [99276, 76895], './utrecht-icon-toeslag.entry.js': [89064, 66683], './utrecht-icon-trein.entry.js': [43189, 65570], './utrecht-icon-trouwen.entry.js': [31467, 53848], './utrecht-icon-twitter.entry.js': [75360, 52979], './utrecht-icon-user.entry.js': [5632, 83251], './utrecht-icon-uw-wijk.entry.js': [2831, 25212], './utrecht-icon-vaccinatie.entry.js': [10772, 88391], './utrecht-icon-veilige-wijk.entry.js': [13306, 90925], './utrecht-icon-vergaderen.entry.js': [89164, 66783], './utrecht-icon-vergaderendigitaal.entry.js': [31109, 53490], './utrecht-icon-vergoeding.entry.js': [91097, 13478], './utrecht-icon-verhuizen.entry.js': [39473, 61854], './utrecht-icon-verkeerslicht.entry.js': [16718, 94337], './utrecht-icon-verkiezingen.entry.js': [28486, 6105], './utrecht-icon-verslaving.entry.js': [41840, 19459], './utrecht-icon-vervoersvoorziening.entry.js': [63517, 85898], './utrecht-icon-virus.entry.js': [69826, 47445], './utrecht-icon-vluchtelingen.entry.js': [77329, 99710], './utrecht-icon-voorzieningen-vervoer.entry.js': [44904, 22523], './utrecht-icon-vrijwilligerswerk.entry.js': [4045, 26426], './utrecht-icon-vuilnisbak.entry.js': [95691, 18072], './utrecht-icon-vuilniszak.entry.js': [48083, 70464], './utrecht-icon-vuurwerk.entry.js': [22418, 37], './utrecht-icon-wandelstok.entry.js': [84985, 7366], './utrecht-icon-warm.entry.js': [96434, 74053], './utrecht-icon-warning.entry.js': [39295, 61676], './utrecht-icon-werken.entry.js': [53643, 76024], './utrecht-icon-werkzaamheden.entry.js': [63301, 85682], './utrecht-icon-whatsapp.entry.js': [99673, 22054], './utrecht-icon-wonen-kosten.entry.js': [81423, 3804], './utrecht-icon-woning-zoeken.entry.js': [29431, 29431], './utrecht-icon-x.entry.js': [11711, 34092], './utrecht-icon-youtube.entry.js': [76330, 53949], './utrecht-icon-zelfstandig-wonen.entry.js': [52124, 29743], './utrecht-icon-zoom-minus.entry.js': [82693, 5074], './utrecht-icon-zoom-plus.entry.js': [59514, 59514], './utrecht-icon-zoomin.entry.js': [36851, 59232], './utrecht-icon-zoomout.entry.js': [63310, 40929], './utrecht-icon-zorg-huis.entry.js': [72095, 94476], './utrecht-icon-zweefpaal.entry.js': [83280, 60899], './utrecht-icon-zwemmen.entry.js': [53056, 30675], './utrecht-logo-button.entry.js': [23945, 46326], './utrecht-map-marker.entry.js': [65576, 43195], './utrecht-multiline-data.entry.js': [50201, 72582], './utrecht-nav-bar.entry.js': [70626, 48245], './utrecht-number-badge.entry.js': [44892, 22511], './utrecht-page-body.entry.js': [78181, 562], './utrecht-page-footer.entry.js': [7030, 84649], './utrecht-page-layout.entry.js': [57887, 80268], './utrecht-pagination.entry.js': [97911, 20292], './utrecht-preserve-data.entry.js': [31540, 9159], './utrecht-progress-list-item.entry.js': [57493, 2255], './utrecht-progress-list.entry.js': [30781, 53162], './utrecht-progress-sublist-item.entry.js': [70847, 93228], './utrecht-root.entry.js': [53667, 76048], './utrecht-sidenav.entry.js': [611, 22992], './utrecht-surface.entry.js': [61336, 38955], './utrecht-table-body.entry.js': [61912, 39531], './utrecht-table-caption.entry.js': [8296, 85915], './utrecht-table-cell.entry.js': [20760, 98379], './utrecht-table-container.entry.js': [63033, 85414], './utrecht-table-footer.entry.js': [59667, 82048], './utrecht-table-header-cell.entry.js': [2238, 79857], './utrecht-table-header.entry.js': [18705, 41086], './utrecht-table-row.entry.js': [17598, 95217], './utrecht-table.entry.js': [4667, 27048], './utrecht-textarea.entry.js': [7069, 29450], './utrecht-textbox.entry.js': [52563, 74944], './utrecht-top-task-link.entry.js': [61965, 84346], './utrecht-top-task-nav.entry.js': [29199, 29199] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 74111), (e.exports = i);
  },
  75916: (e, t, n) => {
   'use strict';
   n.d(t, { B2: () => h, B_: () => m, GT: () => b, KF: () => u, Pc: () => o, Pv: () => y, Rc: () => k, bo: () => r, eQ: () => p, f4: () => s, fX: () => i, kD: () => v, mJ: () => j, o_: () => g, qZ: () => c });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    c = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function a(e) {
    return Array.from(new Set(e));
   }
   const l = (e) => {
     const t = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
     return [...e].sort((e, n) => t.indexOf(e) - t.indexOf(n));
    },
    u = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => d(e));
     return l(a(t));
    },
    h = (e, t) => j(e).includes(t),
    d = (e) => {
     const t = / URL \(([^)]+)\)/;
     return l(a(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    j = (e) => l(a(e.projects.flatMap((e) => d(e)))),
    y = (e) => {
     const t = d(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: i, value: c }) => {
        const s = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === s ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: c, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    m = (e) => '--' + e.join('-'),
    p = (e, t) => t.reduce((e, t) => e?.[t], e);
   function v(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? v(e[n], [...t, n]) : []));
   }
   function b(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, g(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function k(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
  98584: (e, t, n) => {
   'use strict';
   n.d(t, { p: () => c });
   var r = n(13526),
    i = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...s }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
 },
]);
