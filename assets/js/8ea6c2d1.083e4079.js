(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6985],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var r = t(29181),
    s = t(74172),
    i = t(15089),
    o = t(28377),
    c = t(33648),
    a = t(83386),
    l = t(86070);
   const d = { figma: (0, l.jsx)(s.A, {}), github: (0, l.jsx)(i.A, {}), npm: (0, l.jsx)(o.A, {}), storybook: (0, l.jsx)(c.A, {}) },
    h = ({ brand: e }) => (0, l.jsx)(r.In, { children: d[e] || (0, l.jsx)(a.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => d });
   var r = t(18439),
    s = t(46447),
    i = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + s;
     }
     return t.toString();
    },
    c = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, n) => {
     if (e) {
      const e = { ...c[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return c[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: o = {} }) => (0, i.jsx)(r.x, { components: { ...l(n, t), ...a(s), ...o }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => i });
   var r = t(86070),
    s = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => _ });
   var r = t(96547),
    s = t(79889),
    i = t(33062),
    o = t(46447),
    c = t(68148),
    a = t(9016),
    l = t(91635),
    d = t(30734),
    h = t(4603),
    u = t(29181),
    j = t(86070);
   function m({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, j.jsxs)(o.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.Ay.format(n, { parser: t, plugins: [c.A, a.Ay, l.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, j.jsx)(u.In, { children: (0, j.jsx)(h.A, {}) })],
       })
     : null;
   }
   var g = t(35193),
    p = t(13088),
    b = t(91525),
    y = t(24214),
    k = t(92081),
    v = t(1375),
    x = t(23436),
    f = t(79532),
    w = t(30758);
   const N = { color: g.A, dimension: p.A, fontFamilies: b.A, fontSizes: y.A, fontWeights: k.A, lineHeights: v.A, other: x.A, textDecoration: f.A },
    A = ({ type: e }) => (0, j.jsx)(u.In, { children: (0, w.createElement)(N[e]) });
   function _({ tokens: e }) {
    const n = (0, i.kD)(e),
     t = (0, i.GT)(n),
     c = t.map((e) => (0, i.B_)(e) + ': ;').join('\n'),
     a = JSON.stringify((0, i.Rc)(t));
    return (0, j.jsxs)(j.Fragment, {
     children: [
      (0, j.jsxs)(o.XI, {
       children: [
        (0, j.jsx)(o.A0, { children: (0, j.jsxs)(o.Hj, { children: [(0, j.jsx)(o.M_, { children: 'name' }), (0, j.jsx)(o.M_, { children: 'type' })] }) }),
        (0, j.jsx)(o.BF, {
         children: t.map((n) => {
          const t = (0, i.o_)(n),
           c = (0, i.eQ)(e, n).$type;
          return (0, j.jsxs)(o.Hj, { children: [(0, j.jsx)(o.nA, { children: (0, j.jsx)(r.C, { children: (0, j.jsx)(o.kf, { children: t }) }) }), (0, j.jsx)(o.nA, { children: (0, j.jsxs)(s.K, { children: [(0, j.jsx)(A, { type: c }), ' ', c] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, j.jsxs)(o.e2, { children: [(0, j.jsx)(m, { content: a, language: 'json', children: 'Kopieer als JSON' }), (0, j.jsx)(m, { content: c, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => i });
   var r = t(86070),
    s = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    s = t(18439);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => u, mJ: () => g, VZ: () => N, cR: () => w, Pv: () => p, qZ: () => o, kD: () => v, B2: () => j, Pc: () => a, f4: () => c, GT: () => x, fX: () => i, eQ: () => k, B_: () => y, o_: () => b, Rc: () => f });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    c = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return h(d(n));
    },
    j = (e, n) => g(e).includes(n),
    m = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => h(d(e.projects.flatMap((e) => m(e)))),
    p = (e) => {
     const n = m(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: s, value: i }) => {
        const o = /^(.+) URL/.exec(r)[1],
         c = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: r, id: s, value: i, description: c };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    b = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function f(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const w = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    s = t(18439);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => c, RM: () => i });
   var r = t(86070),
    s = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  42962(e, n, t) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
   function s(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   ((s.keys = () => Object.keys(r)), (s.id = 42962), (e.exports = s));
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => s });
   var r = t(30758);
   function s() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  66706(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    s = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => c });
   var r = t(46447),
    s = t(13526),
    i = t(33062),
    o = t(86070);
   const c = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, o.jsx)(r.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => c });
   var r = t(12013),
    s = t(30758),
    i = t(33062),
    o = t(86070);
   const c = ({ component: e }) => {
    const { title: n } = e,
     c = (0, i.fX)(n),
     a = s.lazy(() => t(82839)(`./${c}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(s.Suspense, { fallback: null, children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(a, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => i });
   var r = t(13526),
    s = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...o }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  82839(e, n, t) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function s(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   ((s.keys = () => Object.keys(r)), (s.id = 82839), (e.exports = s));
  },
  83329(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    s = t(18439);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    s = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85825(e, n, t) {
   'use strict';
   t.d(n, { VK: () => y, $9: () => v, mu: () => k, Fc: () => x });
   var r = t(29181),
    s = t(13526),
    i = t(1292),
    o = t(90495),
    c = t(54565);
   function a(e) {
    return (0, c.c)() ? e.children() : null;
   }
   var l = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(a, {
     children: () => {
      const r = t(83294).V6;
      return (0, l.jsx)(r, {
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
    m = t(45561);
   const g = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    p = ({ checked: e, children: n, title: t, description: r, headingLevel: i = 3 }) => (0, l.jsxs)('li', { className: (0, s.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, s.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(m.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [t ? (0, l.jsx)(j.DZ, { appearance: 'utrecht-heading-3', level: i, children: t }) : null, r, n] })] });
   var b = t(33062);
   const y = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => b.f4.includes(e.id)),
      i = t && b.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, b.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(g, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, l.jsx)(p, { headingLevel: n + 1, checked: e, title: t, description: (0, b.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !b.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(o.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            s = t?.value,
            c = (0, b.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => a.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(o.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || c.length > 0) && (0, l.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const n = a.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               c.length > 0 && (0, l.jsx)(l.Fragment, { children: c.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, l.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [s ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && b.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u.p, { level: n, suffix: s && (0, l.jsx)(h.D, { state: s }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  90069(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => T, component: () => B, contentTitle: () => S, default: () => O, description: () => C, frontMatter: () => D, issueNumber: () => R, metadata: () => r, title: () => L, toc: () => M }));
   const r = JSON.parse('{"id":"componenten/number-badge/index","title":"Number Badge","description":"Toont een klein label dat de aandacht trekt en informeert over een aantal.","source":"@site/docs/componenten/number-badge/index.mdx","sourceDirName":"componenten/number-badge","slug":"/number-badge","permalink":"/number-badge","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/number-badge/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Number Badge","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Number Badge","pagination_label":"Number Badge","description":"Toont een klein label dat de aandacht trekt en informeert over een aantal.","slug":"/number-badge","keywords":["aantal","badge","count badge","counter badge","cijfer","chip","counter","label","number","number badge","number label","number marker","notification badge","notification label","pill","stamp","tag"]},"sidebar":"componenten","previous":{"title":"Notification Banner","permalink":"/notification-banner"},"next":{"title":"Number Input","permalink":"/number-input"}}');
   var s = t(86070),
    i = t(18439),
    o = t(36059),
    c = (t(97314), t(17045)),
    a = t(19776),
    l = t(40808);
   function d(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['Visueel heeft de Number Badge een betekenis die duidelijk is. Deze betekenis moet ook duidelijk zijn voor gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ". Het volstaat daarom meestal niet als de Number Badge alleen een cijfer toevoegt aan bijvoorbeeld een tekst 'Inbox'. De visuele layout maakt namelijk duidelijk dat het om nieuwe berichten gaat."] }), '\n', (0, s.jsx)(n.p, { children: 'Geeft dan extra tekstuele context, bijvoorbeeld met een visueel verborgen tekst:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<a href="/inbox">\n  Inbox\n  <data class="utrecht-number-badge" value="4">4</data>\n  <span class="screenreader-only">nieuwe berichten</span>\n</a>\n' }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   var u = t(83329),
    j = t(83672),
    m = t(34257),
    g = t(66706),
    p = t(24838),
    b = t(90495),
    y = t(46447),
    k = t(65947),
    v = t(1292),
    x = t(72401),
    f = t(85825),
    w = t(17889),
    N = t(12013);
   function A(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'gebruik-number-badge', children: 'Gebruik Number Badge' }) }), '\n', (0, s.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, s.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-css', children: '@nl-design-system-candidate/number-badge-css' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik de ', (0, s.jsx)(n.code, { children: 'nl-number-badge' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'span' }), ' element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<span class="nl-number-badge">42</span>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/number-badge-css\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/number-badge-css@1/dist/number-badge.css"\n/>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, s.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/number-badge-css/dist/number-badge.css" />\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/number-badge-css/number-badge.css";\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'number-badge-als-data-component', children: 'Number badge als data component' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt er ook voor kiezen om number badge op een ', (0, s.jsx)(n.code, { children: 'data' }), ' element te gebruiken:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<data class="nl-number-badge" value="42">42</data>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'number-badge-met-een-toegankelijk-label', children: 'Number badge met een toegankelijk label' }), '\n', (0, s.jsx)(n.p, { children: 'Om te zorgen dat de betekenis van een number badge duidelijk is wanneer de pagina wordt voorgelezeg kun je ook een onzichtbaar label toevoegen:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<data value="42" class="nl-number-badge">\n  <span hidden aria-hidden="true" class="nl-number-badge__visible-label">42</span>\n  <span class="nl-number-badge__hidden-label">42 ongelezen berichten</span>\n</data>\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, s.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-react', children: '@nl-design-system-candidate/number-badge-react' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/number-badge-react\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-jsx', children: 'import { NumberBadge } from "@nl-design-system-candidate/number-badge-react";\n\nexport const MyComponent = () => <NumberBadge value="42" />;\n' }) })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(A, { ...e }) }) : A(e);
   }
   var z = t(23071);
   const D = { title: 'Number Badge', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Number Badge', pagination_label: 'Number Badge', description: 'Toont een klein label dat de aandacht trekt en informeert over een aantal.', slug: '/number-badge', keywords: ['aantal', 'badge', 'count badge', 'counter badge', 'cijfer', 'chip', 'counter', 'label', 'number', 'number badge', 'number label', 'number marker', 'notification badge', 'notification label', 'pill', 'stamp', 'tag'] },
    S = void 0,
    T = {},
    L = 'Number Badge',
    C = 'Toont een klein label dat de aandacht trekt en informeert over een aantal.',
    R = 7,
    B = o.find((e) => e.number === R),
    M = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...l.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...a.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...c.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Number badge als data component', id: 'number-badge-als-data-component', level: 3 }, { value: 'Number badge met een toegankelijk label', id: 'number-badge-met-een-toegankelijk-label', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function F(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, i.R)(), ...e.components },
     { Checklist: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('Checklist', !0),
     (0, s.jsxs)(s.Fragment, {
      children: [
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       (0, s.jsx)(f.Fc, { component: B, headingLevel: 1, description: C }),
       '\n',
       (0, s.jsx)(x.e, { component: B }),
       '\n',
       (0, s.jsx)(b.Zp, { className: 'implementation-card', children: (0, s.jsxs)(b.Wu, { children: [(0, s.jsx)(k.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, s.jsxs)(y.dk, { children: [(0, s.jsxs)(y.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=1233-4271', children: [(0, s.jsx)(v.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, s.jsxs)(y.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=1233-4271', children: [(0, s.jsx)(v.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, s.jsx)(k.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, s.jsxs)(y.dk, { children: [(0, s.jsxs)(y.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-number-badge--documentatie', children: [(0, s.jsx)(v.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, s.jsxs)(y.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/number-badge--documentatie', children: [(0, s.jsx)(v.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, s.jsx)(k.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, s.jsxs)(y.dk, { children: [(0, s.jsxs)(y.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-css', children: [(0, s.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/number-badge-css'] }), (0, s.jsxs)(y.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-react', children: [(0, s.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/number-badge-react'] }), (0, s.jsxs)(y.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-tokens', children: [(0, s.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/number-badge-tokens'] })] })] }) }),
       '\n',
       (0, s.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
       '\n',
       (0, s.jsx)(l.Ay, {}),
       '\n',
       (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
       '\n',
       (0, s.jsx)(a.Ay, {}),
       '\n',
       (0, s.jsx)(t, {
        headingLevel: '4',
        items: [
         { title: 'De tekst van de Number Badge heeft voldoende contrast tegen de achtergrond.', sc: '1.4.3', status: '', component: (0, s.jsx)(j.Ay, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Gebruik geen afbeeldingen van tekst voor de Number Badge.', sc: '1.4.5', status: '', component: (0, s.jsx)(g.Ay, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Als een tekst en/of het aria-label in de Number Badge in een andere taal is dan de taal van de pagina, dan heeft de Number Badge een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, s.jsx)(p.Ay, {}), tags: ['developer', 'contentmaker'] },
        ],
       }),
       '\n',
       (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
       '\n',
       (0, s.jsx)(c.Ay, {}),
       '\n',
       (0, s.jsx)(t, {
        headingLevel: '4',
        items: [
         { title: 'Geef de informatie uit de Number Badge ook door aan screenreaders', sc: '1.3.1', status: '', component: (0, s.jsx)(h, {}), tags: ['developer'] },
         { title: 'Als je de tekst van de Number Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: (0, s.jsx)(m.Ay, {}), tags: ['developer'] },
         { title: 'Als je de tekstafstand van de Number Badge vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, s.jsx)(u.Ay, {}), tags: ['developer'] },
        ],
       }),
       '\n',
       (0, s.jsx)(N.o, { omitH1: !0, headingLevel: 3, children: (0, s.jsx)(_, {}) }),
       '\n',
       (0, s.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }),
       '\n',
       (0, s.jsx)(w.B, { tokens: z }),
       '\n',
       (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
       '\n',
       (0, s.jsx)(f.VK, { component: B, headingLevel: 3 }),
       '\n',
       (0, s.jsx)(f.$9, { component: B, headingLevel: 2 }),
       '\n',
       (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
       '\n',
       (0, s.jsx)(f.mu, { component: B, headingLevel: 3 }),
      ],
     })
    );
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(F, { ...e }) }) : F(e);
   }
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => l, Fu: () => o, Wu: () => c, Zp: () => a });
   var r = t(46447),
    s = t(13526),
    i = t(86070);
   const o = ({ background: e, children: n, className: t, ...r }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    c = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: n, className: t, component: o = 'div', background: c, children: a }) => {
     const l = (e) => ('article' === o ? (0, i.jsx)('article', { ...e }) : 'section' === o ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(l, { className: (0, s.A)('cardgroup__card', c && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: a });
     return e ? (0, i.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
