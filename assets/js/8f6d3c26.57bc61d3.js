(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50537],
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
  1842(e, t, n) {
   'use strict';
   n.d(t, { VK: () => v, $9: () => k, mu: () => q, Fc: () => f });
   var r = n(29181),
    s = n(13526),
    c = n(1292),
    i = n(90495),
    o = n(30758);
   function a(e) {
    return (function () {
     const [e, t] = (0, o.useState)();
     return ((0, o.useEffect)(() => t(!0), []), e);
    })()
     ? e.children()
     : null;
   }
   var l = n(86070);
   const h = ({ checked: e, unchecked: t }) =>
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
   var d = n(67970),
    u = n(72642),
    m = n(46447),
    j = n(45561);
   const y = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    p = ({ checked: e, children: t, title: n, description: r, headingLevel: c = 3 }) => (0, l.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(j.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [n ? (0, l.jsx)(m.DZ, { appearance: 'utrecht-heading-3', level: c, children: n }) : null, r, t] })] });
   var g = n(33062);
   const v = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => g.f4.includes(e.id)),
      c = n && g.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: c.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, g.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(y, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, l.jsx)(p, { headingLevel: t + 1, checked: e, title: n, description: (0, g.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: t }) => {
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
            s = n?.value,
            o = (0, g.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            d = e.tasks.filter(({ name: e, value: t }) => a.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, l.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(i.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(h, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (d.length > 0 || o.length > 0) && (0, l.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               d.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: d
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const t = a.get(e.name);
                    return { children: t.desciption, icon: (0, l.jsx)(c.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, l.jsx)(l.Fragment, { children: o.map(({ frameworkName: e, tasks: n }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, l.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, l.jsx)(c.r, { brand: e.brand }), href: e.value })) })] })) }),
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
      s = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [s ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    f = ({ component: e, headingLevel: t, description: n }) => {
     const s = e && g.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u.p, { level: t, suffix: s && (0, l.jsx)(d.D, { state: s }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: n })] });
    };
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
   n.d(t, { bo: () => s, KF: () => u, mJ: () => y, VZ: () => w, cR: () => x, Pv: () => p, qZ: () => i, kD: () => k, B2: () => m, Pc: () => a, f4: () => o, GT: () => f, fX: () => c, eQ: () => q, B_: () => v, o_: () => g, Rc: () => b });
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
    q = (e, t) => t.reduce((e, t) => e?.[t], e);
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
  71909(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { assets: () => b, component: () => z, contentTitle: () => f, default: () => A, description: () => w, frontMatter: () => k, issueNumber: () => _, metadata: () => r, title: () => x, toc: () => N }));
   const r = JSON.parse('{"id":"componenten/heading-3/index","title":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","source":"@site/docs/componenten/heading-3/index.mdx","sourceDirName":"componenten/heading-3","slug":"/heading-3","permalink":"/heading-3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-3/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 3","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 3","pagination_label":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","slug":"/heading-3","keywords":["caption","content","h3","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 2","permalink":"/heading-2"},"next":{"title":"Heading 4","permalink":"/heading-4"}}');
   var s,
    c,
    i,
    o,
    a,
    l,
    h,
    d = n(86070),
    u = n(18439),
    m = n(57641),
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
   const p = ({ title: e, titleId: t, ...n }) => j.createElement('svg', y({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? j.createElement('title', { id: t }, e) : null, s || (s = j.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), c || (c = j.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = j.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), a || (a = j.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = j.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), h || (h = j.createElement('path', { fill: '#0A2750', d: 'M322.672 254.464v3.096l.048 3.048h.792q2.064 0 3.24-1.68 1.2-1.704 1.2-4.824 0-3.168-1.2-4.824-1.176-1.656-3.216-1.656h-.816l-.048 3v3.84m-5.88-6.936v-1.296h7.128q2.568 0 4.392.96a6.6 6.6 0 0 1 2.808 2.688q.984 1.752.984 4.2 0 2.496-1.056 4.272t-3 2.712q-1.92.936-4.56.936h-6.696v-1.296l1.8-.192q.048-1.464.048-2.976v-6.84q0-1.512-.048-2.976zM333.642 262v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.914 14.112q-1.608 0-2.52-.768-.912-.792-.912-2.568v-1.152q.024-.552.024-1.248v-4.584h-1.56v-1.416l1.776-.24 1.2-3.36h2.448l-.048 3.384h2.52v1.632h-2.52v6.72q0 .84.336 1.248.36.384.888.384.624 0 1.296-.528l.6.576a3.5 3.5 0 0 1-1.344 1.416q-.84.504-2.184.504m9.222-.36v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.578 14.112q-2.28 0-4.176-1.104l.072-2.928h1.92l.408 2.376q.432.168.864.264.432.072.936.072 1.032 0 1.584-.336.552-.36.552-1.08 0-.552-.408-.96t-1.608-.744l-1.296-.384q-1.392-.408-2.16-1.32-.744-.912-.744-2.256 0-1.656 1.296-2.784 1.296-1.152 3.72-1.152a6.8 6.8 0 0 1 1.944.264q.912.24 1.848.72l-.168 2.616h-1.92l-.48-2.064q-.504-.192-1.32-.192t-1.32.336q-.48.336-.48 1.008 0 .48.384.864.384.36 1.632.744l1.176.336q1.704.504 2.448 1.44t.744 2.28q0 1.896-1.464 2.952-1.44 1.032-3.984 1.032m17.782-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm27.218-10.536v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.176-.24v-1.056h6.816v1.056l-1.512.312 2.256 6.144 2.088-6.168zm10.824 10.896q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m13.734 1.248q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m7.426.888v-1.128l1.32-.264q.024-.888.024-1.896v-3.168q0-.672-.024-1.104 0-.432-.024-.792 0-.384-.024-.864l-1.464-.216v-.936l4.728-1.608.432.264.216 2.832q.504-1.536 1.416-2.304.912-.792 1.8-.792.792 0 1.368.456.576.432.72 1.32-.024.936-.504 1.464-.48.504-1.2.504-1.008 0-1.848-1.128l-.144-.192a6 6 0 0 0-.984 1.272 6 6 0 0 0-.624 1.608v3.336q0 .96.024 1.8l1.896.408V262zm10.619.024v-1.128l1.272-.264q.024-.864.024-1.872v-11.904l-1.488-.192v-1.008l4.968-1.08.384.24-.096 3.36v3.384q1.512-1.536 3.48-1.536 1.32 0 2.376.696 1.056.672 1.68 2.04.648 1.344.648 3.336 0 1.944-.72 3.36-.72 1.392-1.896 2.16a4.55 4.55 0 0 1-2.52.744q-1.968 0-3.168-1.416l-.408 1.392zm6.792-9.912q-.456 0-.864.192a4 4 0 0 0-.792.504v6.864q.744.672 1.632.672 1.056 0 1.728-1.032.696-1.032.696-3.144 0-2.136-.672-3.096-.648-.96-1.728-.96m13.948-.84q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.069-.36v-1.128l1.32-.288q.024-.912.024-1.824a68 68 0 0 0 .024-1.8v-10.056l-1.488-.24v-1.008l5.04-1.08.384.24-.096 3.36v10.608l.048 1.824 1.32.264V262zm11.886-5.736q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V262zm18.303-10.8v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.177-.24v-1.056h6.817v1.056l-1.512.312 2.256 6.144 2.088-6.168zm14.015 10.872q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m9.126 3.336v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm25.874-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.467-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm-293.039 30v-1.128l1.296-.288q.024-.864.024-1.872v-11.808l-1.488-.24v-1.008l4.968-1.08.384.24-.096 3.36v3.864q.96-1.128 1.848-1.56a4.34 4.34 0 0 1 1.968-.456q1.584 0 2.544 1.032t.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.312v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.176-.288-1.632-.264-.456-1.008-.456-.48 0-1.032.288a4.9 4.9 0 0 0-1.104.816v5.28q0 1.008.024 1.896l1.128.24V292zm20.765-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.887-3.384.913-1.392 2.329-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m15.733-.024q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m13.206-2.4q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V292zm5.922-.264v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V292zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528M378.524 292v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V292zm19.997-5.376q.84 0 1.248-.744.432-.744.432-2.016t-.432-1.968q-.408-.72-1.2-.72-.816 0-1.224.72t-.408 1.992.384 2.016q.384.72 1.2.72m-3.192 7.368q0 1.056.792 1.536.792.504 2.424.504 1.8 0 2.712-.528t.912-1.32q0-.528-.384-.96-.384-.408-1.368-.408h-2.52q-1.32 0-2.184-.216-.192.336-.288.648a2.6 2.6 0 0 0-.096.744m3.216-6.24q-1.248 0-2.184-.288a2.2 2.2 0 0 0-.288 1.104q0 .408.312.672.312.24 1.08.24h2.808q1.824 0 2.904.456 1.08.432 1.536 1.224.48.768.48 1.824 0 1.2-.792 2.208-.792 1.032-2.376 1.632-1.56.624-3.864.624-1.992 0-3.12-.408-1.128-.384-1.584-1.032t-.456-1.368q0-1.536 1.992-2.472-.744-.312-1.08-.816a2.06 2.06 0 0 1-.312-1.104q0-.84.48-1.584.504-.768 1.392-1.536-.984-.504-1.464-1.344a3.7 3.7 0 0 1-.48-1.872q0-1.68 1.224-2.784 1.248-1.104 3.792-1.104 1.296 0 2.256.288t1.56.816l2.688-1.152.384.24v1.848h-2.28q.432.792.432 1.848 0 1.608-1.248 2.736-1.224 1.104-3.792 1.104' })));
   var g = n(72401),
    v = n(84068),
    q = n(1842);
   const k = { title: 'Heading 3', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 3', pagination_label: 'Heading 3', description: 'Koptekst die in de koppenstructuur op het derde niveau staat.', slug: '/heading-3', keywords: ['caption', 'content', 'h3', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    f = void 0,
    b = {},
    x = 'Heading 3',
    w = 'Koptekst die in de koppenstructuur op het derde niveau staat.',
    _ = 259,
    z = m.find((e) => e.number === _),
    N = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function T(e) {
    const t = { h2: 'h2', ...(0, u.R)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, d.jsx)(q.Fc, { component: z, headingLevel: 1, description: w }), '\n', (0, d.jsx)(g.e, { component: z }), '\n', (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, d.jsx)(v.H, { component: z, illustration: p }), '\n', (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, d.jsx)(q.VK, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, d.jsx)(q.mu, { component: z, headingLevel: 3 }), '\n', (0, d.jsx)(q.$9, { component: z, headingLevel: 2 })] });
   }
   function A(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(T, { ...e }) }) : T(e);
   }
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
 },
]);
