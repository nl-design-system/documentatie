(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67801],
 {
  14889: (e, t, n) => {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => i, Wu: () => o, Zp: () => a });
   var r = n(68873),
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
  36444: (e, t, n) => {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(68873),
    s = n(13526),
    c = n(75916),
    i = n(86070);
   const o = ({ state: e }) => {
    const t = (0, c.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  42759: (e, t, n) => {
   'use strict';
   n.d(t, { e: () => o });
   var r = n(46563),
    s = n(30758),
    c = n(75916),
    i = n(86070);
   const o = ({ component: e }) => {
    const { title: t } = e,
     o = (0, c.fX)(t),
     a = s.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(a, {}) }) });
   };
  },
  46563: (e, t, n) => {
   'use strict';
   n.d(t, { o: () => h });
   var r = n(85248),
    s = n(68873),
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
      return (e.h1 = () => null), e;
     }
     return o[t];
    },
    h = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: s = '', components: i = {} }) => (0, c.jsx)(r.x, { components: { ...l(t, n), ...a(s), ...i }, children: e });
  },
  50341: (e, t, n) => {
   'use strict';
   n.d(t, { VK: () => x, $9: () => w, mu: () => _, Fc: () => T });
   var r = n(14537),
    s = n(13526),
    c = n(74172),
    i = n(15089),
    o = n(28377),
    a = n(33648),
    l = n(83386),
    h = n(86070);
   const d = { figma: (0, h.jsx)(c.A, {}), github: (0, h.jsx)(i.A, {}), npm: (0, h.jsx)(o.A, {}), storybook: (0, h.jsx)(a.A, {}) },
    u = ({ brand: e }) => (0, h.jsx)(r.In, { children: d[e] || (0, h.jsx)(l.A, {}) });
   var m = n(14889),
    j = n(98274);
   const y = ({ checked: e, unchecked: t }) =>
    (0, h.jsx)(j.A, {
     fallback: (0, h.jsx)(h.Fragment, {}),
     children: () => {
      const r = n(83294).V6;
      return (0, h.jsx)(r, {
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
   var g = n(36444),
    v = n(98584),
    p = n(68873),
    q = n(51797);
   const k = ({ children: e }) => (0, h.jsx)('ul', { className: 'task-list', children: e }),
    f = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, h.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, h.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, h.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, h.jsx)(q.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, h.jsxs)('div', { children: [(0, h.jsx)(p.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }), r, t] })] });
   var b = n(75916);
   const x = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => b.f4.includes(e.id)),
      c = n && b.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, h.jsx)(r.If, { sections: c.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, b.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(k, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, h.jsx)(f, { headingLevel: t + 1, checked: e, title: n, description: (0, b.qZ)(r) }, r)) }), (0, h.jsx)(r.fz, { children: (0, h.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    _ = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !b.f4.includes(e.id));
     return e && n.length
      ? (0, h.jsx)(m.AC, {
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
            c = (0, b.Pv)(e),
            i = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter(({ name: e, value: t }) => i.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, h.jsx)(
            m.Zp,
            {
             className: 'implementation-card',
             children: (0, h.jsxs)(m.Wu, {
              children: [
               (0, h.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, h.jsxs)(r.fz, { children: [(0, h.jsx)(y, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, h.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (o.length > 0 || c.length > 0) && (0, h.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               o.length > 0 &&
                (0, h.jsx)(h.Fragment, {
                 children: (0, h.jsx)(r.dk, {
                  links: o
                   .filter((e) => !!i.get(e.name))
                   .map((e) => {
                    const t = i.get(e.name);
                    return { children: t.desciption, icon: (0, h.jsx)(u, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               c.length > 0 && (0, h.jsx)(h.Fragment, { children: c.map(({ frameworkName: e, tasks: n }) => (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, h.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, h.jsx)(u, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, h.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    w = ({ component: e }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      n = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return e && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, h.jsxs)(r.Xy, { children: [n ? (0, h.jsxs)(r.Er, { children: ['Vul de ', (0, h.jsx)(r.N_, { href: n, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, h.jsxs)(r.Er, { children: [(0, h.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, h.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, h.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, h.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = ({ component: e, headingLevel: t, description: n }) => {
     const s = e && b.bo[e.relayStep];
     return e && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(v.p, { level: t, suffix: s && (0, h.jsx)(g.D, { state: s }), children: e.title }), (0, h.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  51580: (e, t, n) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [46793, 46793], './code-docs/docs/anatomy/anatomy.md': [67733, 67733], './color-sample-docs/docs/anatomy/anatomy.md': [72723, 72723], './data-badge-docs/docs/anatomy/anatomy.md': [24343, 24343], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [1259, 1259], './link-docs/docs/anatomy/anatomy.md': [5779, 5779], './mark-docs/docs/anatomy/anatomy.md': [96029, 96029], './number-badge-docs/docs/anatomy/anatomy.md': [86601, 86601], './paragraph-docs/docs/anatomy/anatomy.md': [13321, 13321], './skip-link-docs/docs/anatomy/anatomy.md': [68019, 68019] };
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
   (s.keys = () => Object.keys(r)), (s.id = 51580), (e.exports = s);
  },
  62254: (e, t, n) => {
   'use strict';
   n.d(t, { H: () => h });
   var r = n(46563),
    s = n(13526),
    c = n(30758),
    i = n(75916),
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
  74111: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [21118, 21118], './utrecht-backdrop.entry.js': [59925, 82306], './utrecht-body.entry.js': [48603, 70984], './utrecht-breadcrumb-nav.entry.js': [35894, 13513], './utrecht-checkbox.entry.js': [32406, 10025], './utrecht-column-layout.entry.js': [28996, 6615], './utrecht-contact-card-template.entry.js': [8469, 30850], './utrecht-custom-checkbox.entry.js': [74796, 52415], './utrecht-data-list-actions.entry.js': [50286, 27905], './utrecht-data-list-item.entry.js': [29722, 7341], './utrecht-data-list-key.entry.js': [22346, 99965], './utrecht-data-list-value.entry.js': [50348, 27967], './utrecht-data-list.entry.js': [26112, 3731], './utrecht-digid-button.entry.js': [3603, 25984], './utrecht-digid-logo.entry.js': [6128, 83747], './utrecht-eherkenning-logo.entry.js': [665, 23046], './utrecht-eidas-logo.entry.js': [31245, 53626], './utrecht-form-field-error-message.entry.js': [50061, 72442], './utrecht-form-toggle.entry.js': [20334, 97953], './utrecht-html-content.entry.js': [96334, 96334], './utrecht-icon-afspraak-maken.entry.js': [77059, 99440], './utrecht-icon-afval-container.entry.js': [40503, 62884], './utrecht-icon-afval-containerpas.entry.js': [82447, 4828], './utrecht-icon-afval-kalender.entry.js': [35440, 13059], './utrecht-icon-afval-pmd.entry.js': [9417, 31798], './utrecht-icon-afval-scheiden.entry.js': [85137, 7518], './utrecht-icon-afval.entry.js': [36373, 58754], './utrecht-icon-afvalkalender.entry.js': [51039, 73420], './utrecht-icon-alleen.entry.js': [51706, 29325], './utrecht-icon-arrow.entry.js': [96722, 19103], './utrecht-icon-auto.entry.js': [23336, 955], './utrecht-icon-begroting.entry.js': [61910, 39529], './utrecht-icon-bestemmingsplan.entry.js': [95466, 73085], './utrecht-icon-betaaldatum.entry.js': [34725, 57106], './utrecht-icon-bewijsstukken.entry.js': [86706, 64325], './utrecht-icon-bijstand.entry.js': [79608, 57227], './utrecht-icon-blad.entry.js': [23396, 1015], './utrecht-icon-bluesky.entry.js': [41230, 18849], './utrecht-icon-bouwproject.entry.js': [71527, 93908], './utrecht-icon-brandgevaar.entry.js': [78336, 55955], './utrecht-icon-brief-betalen.entry.js': [45975, 68356], './utrecht-icon-checkmark.entry.js': [41542, 19161], './utrecht-icon-chevron-down.entry.js': [19997, 42378], './utrecht-icon-chevron-left.entry.js': [3508, 81127], './utrecht-icon-chevron-right.entry.js': [32507, 54888], './utrecht-icon-chevron-up.entry.js': [41032, 18651], './utrecht-icon-close.entry.js': [67295, 89676], './utrecht-icon-college-b-w.entry.js': [49777, 72158], './utrecht-icon-container-bio.entry.js': [71539, 93920], './utrecht-icon-container-glas.entry.js': [29302, 6921], './utrecht-icon-container-groenafval.entry.js': [93948, 71567], './utrecht-icon-container-met-zak.entry.js': [1624, 79243], './utrecht-icon-container-papier.entry.js': [47694, 25313], './utrecht-icon-container-pmd.entry.js': [73840, 51459], './utrecht-icon-container-restafval.entry.js': [44453, 66834], './utrecht-icon-container-textiel.entry.js': [69930, 47549], './utrecht-icon-container.entry.js': [48100, 25719], './utrecht-icon-cross.entry.js': [50587, 72968], './utrecht-icon-dakloos.entry.js': [57056, 34675], './utrecht-icon-dementie.entry.js': [4326, 81945], './utrecht-icon-documenten.entry.js': [85193, 7574], './utrecht-icon-duurzaam.entry.js': [45600, 23219], './utrecht-icon-eenzaamheid.entry.js': [60650, 38269], './utrecht-icon-eikenprocessie.entry.js': [88400, 66019], './utrecht-icon-elektrisch-rijden.entry.js': [2720, 80339], './utrecht-icon-energie-vergoeding.entry.js': [26791, 49172], './utrecht-icon-energietransitie.entry.js': [34383, 56764], './utrecht-icon-error.entry.js': [57205, 79586], './utrecht-icon-evenementen.entry.js': [52447, 74828], './utrecht-icon-facebook.entry.js': [76311, 98692], './utrecht-icon-fiets.entry.js': [11770, 89389], './utrecht-icon-filter.entry.js': [17757, 40138], './utrecht-icon-geboorte.entry.js': [34206, 11825], './utrecht-icon-gebruiker-centraal.entry.js': [67230, 44849], './utrecht-icon-gebruiker-ingelogd.entry.js': [48305, 70686], './utrecht-icon-gegevenswoordenboek.entry.js': [73424, 51043], './utrecht-icon-geluid.entry.js': [11789, 34170], './utrecht-icon-gemeente-locatie.entry.js': [97085, 19466], './utrecht-icon-gemeenteraad.entry.js': [64741, 87122], './utrecht-icon-gereedschap.entry.js': [95044, 72663], './utrecht-icon-gezicht.entry.js': [29497, 51878], './utrecht-icon-gezin.entry.js': [26654, 4273], './utrecht-icon-glas-afval.entry.js': [60819, 83200], './utrecht-icon-glijbaan.entry.js': [18637, 41018], './utrecht-icon-grafiek.entry.js': [26546, 4165], './utrecht-icon-grofvuil-ophalen.entry.js': [58649, 81030], './utrecht-icon-grofvuil.entry.js': [35927, 58308], './utrecht-icon-hamburger-menu.entry.js': [12466, 90085], './utrecht-icon-herdenking.entry.js': [48810, 26429], './utrecht-icon-hondenbelasting.entry.js': [82480, 60099], './utrecht-icon-horeca.entry.js': [74919, 97300], './utrecht-icon-horecavergunning.entry.js': [61636, 39255], './utrecht-icon-huis-en-omgeving.entry.js': [41809, 64190], './utrecht-icon-huis.entry.js': [3444, 81063], './utrecht-icon-huishoudelijk-geweld.entry.js': [57590, 35209], './utrecht-icon-hulp-huishouden.entry.js': [43517, 65898], './utrecht-icon-hulp-vervoer.entry.js': [86248, 63867], './utrecht-icon-hulp-zorg.entry.js': [68565, 90946], './utrecht-icon-hulpmiddelen-gezin.entry.js': [57304, 34923], './utrecht-icon-hulpverlening.entry.js': [72714, 50333], './utrecht-icon-idee.entry.js': [91204, 68823], './utrecht-icon-informatie.entry.js': [96677, 19058], './utrecht-icon-information.entry.js': [43781, 66162], './utrecht-icon-innovatie.entry.js': [47394, 25013], './utrecht-icon-inspraak-inwoners.entry.js': [560, 78179], './utrecht-icon-instagram.entry.js': [20179, 42560], './utrecht-icon-kalender.entry.js': [31401, 53782], './utrecht-icon-kennis.entry.js': [63475, 85856], './utrecht-icon-kerstbomen.entry.js': [10601, 32982], './utrecht-icon-klachten.entry.js': [44359, 66740], './utrecht-icon-kroon.entry.js': [85264, 62883], './utrecht-icon-laadpaal.entry.js': [28283, 50664], './utrecht-icon-language.entry.js': [47513, 69894], './utrecht-icon-lantaarnpaal-oud.entry.js': [48383, 70764], './utrecht-icon-lantaarnpaal.entry.js': [12270, 89889], './utrecht-icon-leren.entry.js': [26235, 81473], './utrecht-icon-let-op.entry.js': [34432, 12051], './utrecht-icon-linkedin.entry.js': [62321, 84702], './utrecht-icon-list-check.entry.js': [14150, 91769], './utrecht-icon-list-number.entry.js': [66693, 89074], './utrecht-icon-list.entry.js': [8815, 31196], './utrecht-icon-loupe.entry.js': [48760, 26379], './utrecht-icon-markt.entry.js': [7224, 84843], './utrecht-icon-mastodon.entry.js': [18956, 96575], './utrecht-icon-melding-boom.entry.js': [49769, 72150], './utrecht-icon-melding-klacht.entry.js': [94525, 16906], './utrecht-icon-melding-openbareruimte.entry.js': [51554, 29173], './utrecht-icon-melding-verlichting.entry.js': [31913, 54294], './utrecht-icon-melding.entry.js': [95625, 18006], './utrecht-icon-menselijk.entry.js': [74647, 97028], './utrecht-icon-menu-dot-open.entry.js': [30823, 53204], './utrecht-icon-menu-dot.entry.js': [65842, 43461], './utrecht-icon-meterkast.entry.js': [74341, 96722], './utrecht-icon-milieu-ontheffing.entry.js': [30533, 52914], './utrecht-icon-milieu-zone.entry.js': [22919, 45300], './utrecht-icon-minus-vertical.entry.js': [11346, 88965], './utrecht-icon-minus.entry.js': [59951, 82332], './utrecht-icon-mobiliteit.entry.js': [22519, 44900], './utrecht-icon-natuur.entry.js': [77430, 55049], './utrecht-icon-nieuw-huis.entry.js': [50659, 5897], './utrecht-icon-nieuwsbrief.entry.js': [20472, 98091], './utrecht-icon-nummerbord.entry.js': [95490, 73109], './utrecht-icon-om-het-huis.entry.js': [77323, 99704], './utrecht-icon-omgeving.entry.js': [68789, 91170], './utrecht-icon-omgevingsvisie.entry.js': [43154, 20773], './utrecht-icon-omgevingswet.entry.js': [94058, 71677], './utrecht-icon-onderhoud.entry.js': [35703, 58084], './utrecht-icon-ondernemen.entry.js': [58848, 36467], './utrecht-icon-openingstijden.entry.js': [2560, 80179], './utrecht-icon-over-de-stad.entry.js': [65860, 43479], './utrecht-icon-overlijden.entry.js': [19583, 41964], './utrecht-icon-panden.entry.js': [40233, 62614], './utrecht-icon-park.entry.js': [41699, 64080], './utrecht-icon-parkeerkaart.entry.js': [50138, 27757], './utrecht-icon-parkeervergunning.entry.js': [48220, 25839], './utrecht-icon-parken.entry.js': [10284, 87903], './utrecht-icon-parkeren-bedrijven.entry.js': [63427, 85808], './utrecht-icon-parkeren-betaalautomaat.entry.js': [79079, 1460], './utrecht-icon-parkeren-betalen.entry.js': [45967, 68348], './utrecht-icon-parkeren.entry.js': [55019, 77400], './utrecht-icon-participatie-campagne.entry.js': [20493, 42874], './utrecht-icon-participatie-like.entry.js': [81042, 58661], './utrecht-icon-participatie-pitch.entry.js': [96203, 18584], './utrecht-icon-paspoort.entry.js': [70771, 93152], './utrecht-icon-presentatie.entry.js': [66819, 89200], './utrecht-icon-prijskaartje.entry.js': [50869, 73250], './utrecht-icon-read-aloud.entry.js': [29333, 51714], './utrecht-icon-rijbewijs.entry.js': [16388, 94007], './utrecht-icon-rioolheffing.entry.js': [67517, 89898], './utrecht-icon-rolstoel.entry.js': [69169, 91550], './utrecht-icon-schild-gemeente-utrecht.entry.js': [76081, 98462], './utrecht-icon-search.entry.js': [57891, 80272], './utrecht-icon-shoppen.entry.js': [82732, 60351], './utrecht-icon-sinterklaas.entry.js': [17030, 94649], './utrecht-icon-slechtziende-hoordende.entry.js': [69228, 46847], './utrecht-icon-sport-en-cultuur.entry.js': [98796, 76415], './utrecht-icon-sport-voetbal.entry.js': [31085, 53466], './utrecht-icon-sport.entry.js': [95485, 17866], './utrecht-icon-stookverbod.entry.js': [47079, 69460], './utrecht-icon-strand.entry.js': [39735, 62116], './utrecht-icon-strooien.entry.js': [92040, 69659], './utrecht-icon-subsidie-gezin.entry.js': [10719, 33100], './utrecht-icon-subsidie.entry.js': [39519, 61900], './utrecht-icon-t-shirt.entry.js': [32838, 10457], './utrecht-icon-threads.entry.js': [36194, 13813], './utrecht-icon-thuiswerken.entry.js': [99276, 76895], './utrecht-icon-toeslag.entry.js': [89064, 66683], './utrecht-icon-trein.entry.js': [43189, 65570], './utrecht-icon-trouwen.entry.js': [31467, 53848], './utrecht-icon-twitter.entry.js': [75360, 52979], './utrecht-icon-user.entry.js': [5632, 83251], './utrecht-icon-uw-wijk.entry.js': [2831, 25212], './utrecht-icon-vaccinatie.entry.js': [10772, 88391], './utrecht-icon-veilige-wijk.entry.js': [13306, 90925], './utrecht-icon-vergaderen.entry.js': [89164, 66783], './utrecht-icon-vergaderendigitaal.entry.js': [31109, 53490], './utrecht-icon-vergoeding.entry.js': [91097, 13478], './utrecht-icon-verhuizen.entry.js': [39473, 61854], './utrecht-icon-verkeerslicht.entry.js': [16718, 94337], './utrecht-icon-verkiezingen.entry.js': [28486, 6105], './utrecht-icon-verslaving.entry.js': [41840, 19459], './utrecht-icon-vervoersvoorziening.entry.js': [63517, 85898], './utrecht-icon-virus.entry.js': [69826, 47445], './utrecht-icon-vluchtelingen.entry.js': [77329, 99710], './utrecht-icon-voorzieningen-vervoer.entry.js': [44904, 22523], './utrecht-icon-vrijwilligerswerk.entry.js': [4045, 26426], './utrecht-icon-vuilnisbak.entry.js': [95691, 18072], './utrecht-icon-vuilniszak.entry.js': [48083, 70464], './utrecht-icon-vuurwerk.entry.js': [22418, 37], './utrecht-icon-wandelstok.entry.js': [84985, 7366], './utrecht-icon-warm.entry.js': [96434, 74053], './utrecht-icon-warning.entry.js': [39295, 61676], './utrecht-icon-werken.entry.js': [53643, 76024], './utrecht-icon-werkzaamheden.entry.js': [63301, 85682], './utrecht-icon-whatsapp.entry.js': [99673, 22054], './utrecht-icon-wonen-kosten.entry.js': [81423, 3804], './utrecht-icon-woning-zoeken.entry.js': [29431, 29431], './utrecht-icon-x.entry.js': [11711, 34092], './utrecht-icon-youtube.entry.js': [76330, 53949], './utrecht-icon-zelfstandig-wonen.entry.js': [52124, 29743], './utrecht-icon-zoom-minus.entry.js': [82693, 5074], './utrecht-icon-zoom-plus.entry.js': [59514, 59514], './utrecht-icon-zoomin.entry.js': [36851, 59232], './utrecht-icon-zoomout.entry.js': [63310, 40929], './utrecht-icon-zorg-huis.entry.js': [72095, 94476], './utrecht-icon-zweefpaal.entry.js': [83280, 60899], './utrecht-icon-zwemmen.entry.js': [53056, 30675], './utrecht-logo-button.entry.js': [23945, 46326], './utrecht-map-marker.entry.js': [65576, 43195], './utrecht-multiline-data.entry.js': [50201, 72582], './utrecht-nav-bar.entry.js': [70626, 48245], './utrecht-number-badge.entry.js': [44892, 22511], './utrecht-page-body.entry.js': [78181, 562], './utrecht-page-footer.entry.js': [7030, 84649], './utrecht-page-layout.entry.js': [57887, 80268], './utrecht-pagination.entry.js': [97911, 20292], './utrecht-preserve-data.entry.js': [31540, 9159], './utrecht-progress-list-item.entry.js': [57493, 2255], './utrecht-progress-list.entry.js': [30781, 53162], './utrecht-progress-sublist-item.entry.js': [70847, 93228], './utrecht-root.entry.js': [53667, 76048], './utrecht-sidenav.entry.js': [611, 22992], './utrecht-surface.entry.js': [61336, 38955], './utrecht-table-body.entry.js': [61912, 39531], './utrecht-table-caption.entry.js': [8296, 85915], './utrecht-table-cell.entry.js': [20760, 98379], './utrecht-table-container.entry.js': [63033, 85414], './utrecht-table-footer.entry.js': [59667, 82048], './utrecht-table-header-cell.entry.js': [2238, 79857], './utrecht-table-header.entry.js': [18705, 41086], './utrecht-table-row.entry.js': [17598, 95217], './utrecht-table.entry.js': [4667, 27048], './utrecht-textarea.entry.js': [7069, 29450], './utrecht-textbox.entry.js': [52563, 74944], './utrecht-top-task-link.entry.js': [61965, 84346], './utrecht-top-task-nav.entry.js': [29199, 29199] };
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
   (s.keys = () => Object.keys(r)), (s.id = 74111), (e.exports = s);
  },
  75916: (e, t, n) => {
   'use strict';
   n.d(t, { B2: () => u, B_: () => v, GT: () => k, KF: () => d, Pc: () => o, Pv: () => y, Rc: () => f, bo: () => r, eQ: () => p, f4: () => i, fX: () => s, kD: () => q, mJ: () => j, o_: () => g, qZ: () => c });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    c = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    a = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function l(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, t) => a.indexOf(e) - a.indexOf(t)),
    d = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return h(l(t));
    },
    u = (e, t) => j(e).includes(t),
    m = (e) => {
     const t = / URL \(([^)]+)\)/;
     return h(l(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    j = (e) => h(l(e.projects.flatMap((e) => m(e)))),
    y = (e) => {
     const t = m(e),
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
    p = (e, t) => t.reduce((e, t) => e?.[t], e);
   function q(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? q(e[n], [...t, n]) : []));
   }
   function k(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, g(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function f(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
  82839: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [23918, 23918], './code-docs/docs/aliases.md': [33874, 33874], './color-sample-docs/docs/aliases.md': [44052, 44052], './data-badge-docs/docs/aliases.md': [58448, 58448], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [57308, 57308], './link-docs/docs/aliases.md': [98100, 98100], './mark-docs/docs/aliases.md': [22314, 22314], './number-badge-docs/docs/aliases.md': [78990, 78990], './paragraph-docs/docs/aliases.md': [52910, 52910], './skip-link-docs/docs/aliases.md': [6196, 6196] };
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
   (s.keys = () => Object.keys(r)), (s.id = 82839), (e.exports = s);
  },
  95160: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => b, component: () => T, contentTitle: () => f, default: () => N, description: () => _, frontMatter: () => k, issueNumber: () => w, metadata: () => r, title: () => x, toc: () => z });
   const r = JSON.parse('{"id":"componenten/heading-5/index","title":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","source":"@site/docs/componenten/heading-5/index.mdx","sourceDirName":"componenten/heading-5","slug":"/heading-5","permalink":"/heading-5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-5/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 5","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 5","pagination_label":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","slug":"/heading-5","keywords":["caption","content","h5","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 4","permalink":"/heading-4"},"next":{"title":"Heading 6","permalink":"/heading-6"}}');
   var s,
    c,
    i,
    o,
    a,
    l,
    h,
    d = n(86070),
    u = n(85248),
    m = n(48976),
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
   const g = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 258v24' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M320.448 269.976v2.064l.032 2.032h.528q1.375 0 2.16-1.12.8-1.135.8-3.216 0-2.112-.8-3.216-.784-1.104-2.144-1.104h-.544l-.032 2v2.56m-3.92-4.624v-.864h4.752q1.712 0 2.928.64a4.4 4.4 0 0 1 1.872 1.792q.656 1.168.656 2.8 0 1.664-.704 2.848t-2 1.808q-1.28.624-3.04.624h-4.464v-.864l1.2-.128q.032-.976.032-1.984v-4.56q0-1.008-.032-1.984zM327.761 275v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368.561 0 .96.368.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.943 9.408q-1.072 0-1.68-.512-.608-.528-.608-1.712v-.768q.016-.368.016-.832v-3.056h-1.04v-.944l1.184-.16.8-2.24h1.632l-.032 2.256h1.68v1.088h-1.68v4.48q0 .56.224.832.24.256.592.256.416 0 .864-.352l.4.384q-.32.608-.896.944-.56.336-1.456.336m6.148-.24v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.719 9.408a5.4 5.4 0 0 1-2.784-.736l.047-1.952h1.281l.272 1.584q.288.112.576.176.288.048.624.048.687 0 1.056-.224.367-.24.367-.72a.88.88 0 0 0-.271-.64q-.273-.272-1.072-.496l-.864-.256q-.928-.272-1.441-.88-.495-.608-.495-1.504 0-1.104.864-1.856.863-.768 2.48-.768.704 0 1.296.176.608.16 1.232.48l-.112 1.744h-1.28l-.32-1.376q-.337-.128-.88-.128-.544 0-.88.224-.32.224-.32.672 0 .32.256.576.255.24 1.088.496l.784.224q1.135.336 1.632.96.495.624.496 1.52 0 1.265-.976 1.968-.96.688-2.656.688m11.855-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m8.311-7.392q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m4.344-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm18.145-7.024v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm7.216 7.264q-1.248 0-2.16-.512a3.63 3.63 0 0 1-1.408-1.456q-.495-.944-.496-2.176 0-1.232.528-2.144a3.86 3.86 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.137 0 2.048.496.929.496 1.472 1.424.544.912.544 2.16t-.496 2.176a3.6 3.6 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m9.157.832q-1.248 0-2.16-.512a3.6 3.6 0 0 1-1.408-1.456q-.496-.944-.496-2.176t.528-2.144a3.84 3.84 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.136 0 2.048.496a3.7 3.7 0 0 1 1.472 1.424q.544.912.544 2.16t-.496 2.176a3.63 3.63 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m4.951.592v-.752l.88-.176q.015-.592.016-1.264v-2.112q0-.448-.016-.736 0-.288-.016-.528 0-.256-.016-.576l-.976-.144v-.624l3.152-1.072.288.176.144 1.888q.336-1.024.944-1.536.607-.528 1.2-.528.528 0 .912.304.384.288.48.88-.017.624-.336.976a1.06 1.06 0 0 1-.8.336q-.672 0-1.232-.752l-.096-.128a4 4 0 0 0-.656.848 4 4 0 0 0-.416 1.072v2.224q0 .64.016 1.2l1.264.272V275zm7.078.016v-.752l.848-.176q.016-.576.016-1.248v-7.936l-.992-.128v-.672l3.312-.72.256.16-.064 2.24v2.256q1.009-1.024 2.32-1.024.88 0 1.584.464.705.448 1.12 1.36.432.896.432 2.224 0 1.296-.48 2.24-.48.928-1.264 1.44a3.03 3.03 0 0 1-1.68.496q-1.311 0-2.112-.944l-.272.928zm4.528-6.608q-.303 0-.576.128a2.6 2.6 0 0 0-.528.336v4.576q.497.448 1.088.448.705 0 1.152-.688.464-.688.464-2.096 0-1.424-.448-2.064-.432-.64-1.152-.64m9.299-.56q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408t-2.016.464m4.046-.24v-.752l.88-.192q.016-.608.016-1.216.016-.607.016-1.2v-6.704l-.992-.16v-.672l3.36-.72.256.16-.064 2.24v7.072l.032 1.216.88.176V275zm7.924-3.824q0 1.312.464 2 .464.672 1.2.672.544 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.736 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.416-.912-.416-2.208 0-1.312.496-2.24.512-.944 1.312-1.44a3.18 3.18 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm12.202-7.2v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm9.344 7.248q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.536 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.191-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m6.084 2.224v-.752l.864-.192q.015-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm17.249-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.496.944-1.344 1.408-.847.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m4.343-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.207-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.282 0v-.752l.864-.192q.015-.576.016-1.248v-7.872l-.992-.16v-.672l3.312-.72.256.16-.064 2.24v2.576q.64-.752 1.232-1.04a2.9 2.9 0 0 1 1.312-.304q1.056 0 1.696.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.208v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.784-.192-1.088-.177-.304-.672-.304-.32 0-.688.192a3.2 3.2 0 0 0-.736.544v3.52q0 .672.016 1.264l.752.16V275zm13.843-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.513-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m10.489-.016q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.535 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.192-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m8.804-1.6q0 1.312.464 2 .463.672 1.2.672.543 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.737 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.417-.912-.416-2.208 0-1.312.496-2.24.511-.944 1.312-1.44a3.17 3.17 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm3.948-.176v-.752l.864-.192q.015-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168a1.4 1.4 0 0 1-.96-.352 1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.399-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m2.902 9.168v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.331-3.584a.89.89 0 0 0 .832-.496q.288-.497.288-1.344t-.288-1.312q-.272-.48-.8-.48-.543 0-.816.48t-.272 1.328.256 1.344q.257.48.8.48m-2.128 4.912q0 .704.528 1.024.528.336 1.616.336 1.2 0 1.808-.352t.608-.88a.94.94 0 0 0-.256-.64q-.255-.272-.912-.272h-1.68q-.88 0-1.456-.144a2.2 2.2 0 0 0-.192.432 1.7 1.7 0 0 0-.064.496m2.144-4.16q-.832 0-1.456-.192a1.46 1.46 0 0 0-.192.736q0 .272.208.448.208.16.72.16h1.872q1.216 0 1.936.304.72.288 1.024.816.32.512.32 1.216 0 .8-.528 1.472-.528.688-1.584 1.088-1.04.416-2.576.416-1.327 0-2.08-.272-.751-.256-1.056-.688a1.56 1.56 0 0 1-.304-.912q0-1.024 1.328-1.648-.495-.208-.72-.544a1.4 1.4 0 0 1-.208-.736q0-.56.32-1.056.337-.512.928-1.024-.655-.336-.976-.896a2.5 2.5 0 0 1-.32-1.248q0-1.12.816-1.856.833-.736 2.528-.736.864 0 1.504.192t1.04.544l1.792-.768.256.16v1.232h-1.52q.288.528.288 1.232 0 1.072-.832 1.824-.815.736-2.528.736' })));
   var v = n(42759),
    p = n(62254),
    q = n(50341);
   const k = { title: 'Heading 5', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 5', pagination_label: 'Heading 5', description: 'Koptekst die in de koppenstructuur op het vijfde niveau staat.', slug: '/heading-5', keywords: ['caption', 'content', 'h5', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 5',
    _ = 'Koptekst die in de koppenstructuur op het vijfde niveau staat.',
    w = 261,
    T = m.find((e) => e.number === w),
    z = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ];
   function A(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(q.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, d.jsx)(v.e, { component: T }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(p.H, { component: T, illustration: g }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(q.VK, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(q.mu, { component: T, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, d.jsx)(q.$9, { component: T, headingLevel: 3 })] });
   }
   function N(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(A, { ...e }) }) : A(e);
   }
  },
  98584: (e, t, n) => {
   'use strict';
   n.d(t, { p: () => c });
   var r = n(13526),
    s = n(86070);
   const c = ({ children: e, className: t, level: n = 1, suffix: c, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), c && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
  },
 },
]);
