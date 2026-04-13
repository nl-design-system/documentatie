(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [49189],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var o = t(29181),
    r = t(74172),
    s = t(15089),
    i = t(28377),
    a = t(33648),
    d = t(83386),
    c = t(86070);
   const l = { figma: (0, c.jsx)(r.A, {}), github: (0, c.jsx)(s.A, {}), npm: (0, c.jsx)(i.A, {}), storybook: (0, c.jsx)(a.A, {}) },
    h = ({ brand: e }) => (0, c.jsx)(o.In, { children: l[e] || (0, c.jsx)(d.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => l });
   var o = t(18439),
    r = t(46447),
    s = t(86070);
   const i = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: o, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + o + r;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    d = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: i(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    l = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: i = {} }) => (0, s.jsx)(o.x, { components: { ...c(n, t), ...d(r), ...i }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var o = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => N });
   var o = t(96547),
    r = t(79889),
    s = t(33062),
    i = t(46447),
    a = t(68148),
    d = t(9016),
    c = t(91635),
    l = t(30734),
    h = t(4603),
    p = t(29181),
    m = t(86070);
   function g({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(i.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await l.Ay.format(n, { parser: t, plugins: [a.A, d.Ay, c.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, m.jsx)(p.In, { children: (0, m.jsx)(h.A, {}) })],
       })
     : null;
   }
   var u = t(35193),
    j = t(13088),
    x = t(91525),
    k = t(24214),
    v = t(92081),
    f = t(1375),
    b = t(23436),
    y = t(79532),
    w = t(30758);
   const A = { color: u.A, dimension: j.A, fontFamilies: x.A, fontSizes: k.A, fontWeights: v.A, lineHeights: f.A, other: b.A, textDecoration: y.A },
    D = ({ type: e }) => (0, m.jsx)(p.In, { children: (0, w.createElement)(A[e]) });
   function N({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, s.GT)(n),
     a = t.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify((0, s.Rc)(t));
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(i.XI, {
       children: [
        (0, m.jsx)(i.A0, { children: (0, m.jsxs)(i.Hj, { children: [(0, m.jsx)(i.M_, { children: 'name' }), (0, m.jsx)(i.M_, { children: 'type' })] }) }),
        (0, m.jsx)(i.BF, {
         children: t.map((n) => {
          const t = (0, s.o_)(n),
           a = (0, s.eQ)(e, n).$type;
          return (0, m.jsxs)(i.Hj, { children: [(0, m.jsx)(i.nA, { children: (0, m.jsx)(o.C, { children: (0, m.jsx)(i.kf, { children: t }) }) }), (0, m.jsx)(i.nA, { children: (0, m.jsxs)(r.K, { children: [(0, m.jsx)(D, { type: a }), ' ', a] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(i.e2, { children: [(0, m.jsx)(g, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(g, { content: a, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var o = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => r, KF: () => p, mJ: () => u, VZ: () => A, cR: () => w, Pv: () => j, qZ: () => i, kD: () => f, B2: () => m, Pc: () => d, f4: () => a, GT: () => b, fX: () => s, eQ: () => v, B_: () => k, o_: () => x, Rc: () => y });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function l(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return h(l(n));
    },
    m = (e, n) => u(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(l(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => h(l(e.projects.flatMap((e) => g(e)))),
    j = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: o, id: r, value: s }) => {
        const i = /^(.+) URL/.exec(o)[1],
         a = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: o, id: r, value: s, description: a };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    x = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
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
     const e = o.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = o.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var o = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, o.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, o.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, o.jsx)(n.code, { children: 'em' }), ' of ', (0, o.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, o.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, o.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, o.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, o.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  35437(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var o = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Als je het ', (0, o.jsx)(n.code, { children: 'code' }), '-element gebruikt en met CSS een eigen kleur definieert voor ', (0, o.jsx)(n.code, { children: 'background-color' }), ', dan moet deze achtergrondkleur een contrastverhouding hebben van minimaal 3:1 met de achtergrondkleur van de pagina.'] }), '\n', (0, o.jsx)(n.p, { children: 'Dit geldt niet als je de achtergrondkleur niet zelf definieert, maar overlaat aan de browser. Daarvoor bestaat namelijk een uitzondering in het WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content.' }), '\n', (0, o.jsxs)(n.p, { children: ['Dit geldt ook niet als het lettertype of de weergave van de code duidelijke te onderscheiden is als code, door bijvoorbeeld het kiezen van een ', (0, o.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/List_of_monospaced_typefaces', children: 'monospace lettertype' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  37131(e, n, t) {
   'use strict';
   t.d(n, { VK: () => j, $9: () => k, mu: () => x, Fc: () => v, K_: () => f });
   var o = t(29181),
    r = t(13526),
    s = t(1292),
    i = t(90495),
    a = t(54565);
   function d(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var c = t(86070);
   const l = ({ checked: e, unchecked: n }) =>
    (0, c.jsx)(d, {
     children: () => {
      const o = t(83294).V6;
      return (0, c.jsx)(o, {
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
    p = t(72642),
    m = t(58876),
    g = t(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      s = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(o.If, { sections: s.map((t) => ({ className: (0, r.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: o }) => (0, c.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(o) }, o)) }), (0, c.jsx)(o.fz, { children: (0, c.jsxs)(o.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(i.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            o = n.progress.max - n.progress.value;
           return t === o ? e.title.localeCompare(n.title) : t - o;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            r = t?.value,
            a = (0, g.Pv)(e),
            d = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => d.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(i.Wu, {
              children: [
               (0, c.jsx)(o.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(o.fz, { children: [(0, c.jsx)(l, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(o.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || a.length > 0) && (0, c.jsx)(o.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(o.dk, {
                  links: h
                   .filter((e) => !!d.get(e.name))
                   .map((e) => {
                    const n = d.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, c.jsx)(c.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, c.jsx)(o.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(o.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(o.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(o.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(o.Xy, { children: [r ? (0, c.jsxs)(o.Er, { children: ['Vul de ', (0, c.jsx)(o.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(o.Er, { children: [(0, c.jsxs)(o.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(o.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(o.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(o.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && g.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(p.p, { level: n, suffix: r && (0, c.jsx)(h.D, { state: r }), children: e.title }), (0, c.jsx)(o.fz, { lead: !0, children: t })] });
    },
    f = ({ component: e }) => {
     const n = (e && u[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(o.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(o.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var o = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  44720(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var o = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, o.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => r });
   var o = t(30758);
   function r() {
    const [e, n] = (0, o.useState)();
    return ((0, o.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => a });
   var o = t(46447),
    r = t(13526),
    s = t(33062),
    i = t(86070);
   const a = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, i.jsx)(o.KE, { className: (0, r.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => a });
   var o = t(12013),
    r = t(30758),
    s = t(33062),
    i = t(86070);
   const a = ({ component: e }) => {
    const { title: n } = e,
     a = (0, s.fX)(n),
     d = r.lazy(() => t(82839)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(o.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(d, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var o = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...i }) => (0, r.jsxs)('hgroup', { className: (0, o.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...i, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  79239(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => T, component: () => R, contentTitle: () => C, default: () => H, description: () => L, frontMatter: () => _, issueNumber: () => M, metadata: () => o, title: () => z, toc: () => F }));
   const o = JSON.parse('{"id":"componenten/code/index","title":"Code","description":"Computercode die onderdeel is van lopende tekst.","source":"@site/docs/componenten/code/index.mdx","sourceDirName":"componenten/code","slug":"/code","permalink":"/code","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/code/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Code","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Code","pagination_label":"Code","description":"Computercode die onderdeel is van lopende tekst.","slug":"/code","keywords":["actie","action","code","codeblock","code block","code markering","code fences","code snippet","code voorbeeld","coded language","codetaal","css","example","html","java","inline code","mono","monotype","monospace","plaintext","pre","samp","source code","src","voorbeeld"]},"sidebar":"componenten","previous":{"title":"Checkbox Group","permalink":"/checkbox-group"},"next":{"title":"Code Block","permalink":"/code-block"}}');
   var r = t(86070),
    s = t(18439),
    i = t(45189),
    a = (t(57514), t(17045)),
    d = t(19776),
    c = t(40808);
   function l(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Gebruik voor tekst gemarkeerd als code semantische HTML. In het geval van de component Code is dat het HTML-element ', (0, r.jsx)(n.code, { children: 'code' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dus niet zo:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\nEen zin over het element <span class="code">button</span> met een achtergrondkleur in CSS.\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Maar zo:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: 'Een zin over het element `<code>button</code>` met een achtergrondkleur in CSS.\n' }) }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Het element ', (0, r.jsx)(n.code, { children: '<code>' }), ' wordt op het moment van schrijven (2025) nog niet ondersteund door alle hulpsoftware. Dat betekent niet dat bezoekers die bijvoorbeeld een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken de inhoud van het element niet horen, alleen dat er op dit moment niet wordt aangegeven dat het om een ', (0, r.jsx)(n.code, { children: 'code' }), ' element gaat.'] })] });
   }
   var h = t(35437),
    p = t(83329),
    m = t(83672),
    g = t(34257);
   const u = [
     { title: 'De code is niet alleen herkenbaar aan een andere achtergrondkleur.', sc: '1.4.1', status: '', component: t(44720).Ay, tags: ['designer', 'contentmaker', 'developer'] },
     { title: 'De code heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: m.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Wanneer de achtergrondkleur van de Code component anders is dan de default browserkleur, dan heeft deze een kleurcontrast van minimaal 3:1 met de achtergrondkleur van de pagina.', sc: '1.4.11', status: '', component: h.Ay, tags: ['designer', 'contentmaker'] },
    ],
    j = [
     {
      title: 'Het juiste HTML-element voor de Code component is toegepast.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je inzoomt naar 200% blijft alle tekst leesbaar.', sc: '1.4.4', status: '', component: g.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: p.Ay, tags: ['developer'] },
    ];
   var x = t(90495),
    k = t(46447),
    v = t(56421),
    f = t(1292),
    b = t(72401),
    y = t(37131),
    w = t(17889),
    A = t(12013);
   function D(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'gebruik-code', children: 'Gebruik Code' }) }), '\n', (0, r.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, r.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: '@nl-design-system-candidate/code-css' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.code, { children: 'nl-code' }), ' class name op een ', (0, r.jsx)(n.code, { children: 'code' }), ' element:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<code dir="ltr" translate="no" class="nl-code"> import { Code } from \'@nl-design-system-candidate/code-react\'; </code>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-css\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/code-css/code.css";\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, r.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: '@nl-design-system-candidate/code-react' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-react\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: 'import { Code } from "@nl-design-system-candidate/code-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Code>import {Code} from \'@nl-design-system-candidate/code-react\';</Code>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(D, { ...e }) }) : D(e);
   }
   var S = t(6610);
   const _ = { title: 'Code', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Code', pagination_label: 'Code', description: 'Computercode die onderdeel is van lopende tekst.', slug: '/code', keywords: ['actie', 'action', 'code', 'codeblock', 'code block', 'code markering', 'code fences', 'code snippet', 'code voorbeeld', 'coded language', 'codetaal', 'css', 'example', 'html', 'java', 'inline code', 'mono', 'monotype', 'monospace', 'plaintext', 'pre', 'samp', 'source code', 'src', 'voorbeeld'] },
    C = void 0,
    T = {},
    z = 'Code',
    L = 'Computercode die onderdeel is van lopende tekst.',
    M = 326,
    R = i.find((e) => e.number === M),
    F = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...c.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...d.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function V(e) {
    const n = { a: 'a', admonition: 'admonition', h2: 'h2', h3: 'h3', p: 'p', ...(0, s.R)(), ...e.components },
     { Checklist: t, ChecklistItem: o } = n;
    return (t || O('Checklist', !0), o || O('ChecklistItem', !0), (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(y.Fc, { component: R, headingLevel: 1, description: L }), '\n', (0, r.jsx)(b.e, { component: R }), '\n', (0, r.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.a, { href: '/code-block/', children: 'Code Block' }), ' component als de code meerdere regels beslaat.'] }) }), '\n', (0, r.jsx)(x.Zp, { className: 'implementation-card', children: (0, r.jsxs)(x.Wu, { children: [(0, r.jsx)(v.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, r.jsxs)(k.dk, { children: [(0, r.jsxs)(k.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, r.jsx)(f.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, r.jsxs)(k.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, r.jsx)(f.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, r.jsx)(v.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, r.jsxs)(k.dk, { children: [(0, r.jsxs)(k.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-code--documentatie', children: [(0, r.jsx)(f.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, r.jsxs)(k.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/code--documentatie', children: [(0, r.jsx)(f.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, r.jsx)(v.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, r.jsxs)(k.dk, { children: [(0, r.jsxs)(k.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: [(0, r.jsx)(f.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-css'] }), (0, r.jsxs)(k.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: [(0, r.jsx)(f.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-react'] }), (0, r.jsxs)(k.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-tokens', children: [(0, r.jsx)(f.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-tokens'] })] })] }) }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(c.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: u.map(({ component: e, ...n }) => (0, r.jsx)(o, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(a.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: j.map(({ component: e, ...n }) => (0, r.jsx)(o, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(A.o, { omitH1: !0, headingLevel: 2, children: (0, r.jsx)(N, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, r.jsx)(w.B, { tokens: S }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(y.VK, { component: R, headingLevel: 3 }), '\n', (0, r.jsx)(y.$9, { component: R, headingLevel: 2 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(y.mu, { component: R, headingLevel: 3 }), '\n', (0, r.jsx)(y.K_, { component: R })] }));
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(V, { ...e }) }) : V(e);
   }
   function O(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  82839(e, n, t) {
   var o = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function r(e) {
    if (!t.o(o, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = o[e],
     r = n[0];
    return t.e(n[1]).then(() => t(r));
   }
   ((r.keys = () => Object.keys(o)), (r.id = 82839), (e.exports = r));
  },
  83329(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var o = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, o.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, o.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, o.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, o.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, o.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, o.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, o.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, o.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, o.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, o.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, o.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, o.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var o = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, o.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, o.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, o.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => c, Fu: () => i, Wu: () => a, Zp: () => d });
   var o = t(46447),
    r = t(13526),
    s = t(86070);
   const i = ({ background: e, children: n, className: t, ...o }) => (0, s.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, t), ...o, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: t, component: i = 'div', background: a, children: d }) => {
     const c = (e) => ('article' === i ? (0, s.jsx)('article', { ...e }) : 'section' === i ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      l = (0, s.jsx)(c, { className: (0, r.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: d });
     return e ? (0, s.jsx)(o.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: l }) : l;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
