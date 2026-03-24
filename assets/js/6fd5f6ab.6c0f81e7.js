(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [53087],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var i = t(29181),
    s = t(74172),
    r = t(15089),
    a = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(a.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    h = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    s = t(46447),
    r = t(86070);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + s;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: a = {} }) => (0, r.jsx)(i.x, { components: { ...d(n, t), ...l(s), ...a }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => S });
   var i = t(96547),
    s = t(79889),
    r = t(33062),
    a = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    h = t(4603),
    p = t(29181),
    g = t(86070);
   function u({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, g.jsxs)(a.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [o.A, l.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, g.jsx)(p.In, { children: (0, g.jsx)(h.A, {}) })],
       })
     : null;
   }
   var j = t(35193),
    m = t(13088),
    k = t(91525),
    x = t(24214),
    v = t(92081),
    f = t(1375),
    b = t(23436),
    y = t(79532),
    w = t(30758);
   const A = { color: j.A, dimension: m.A, fontFamilies: k.A, fontSizes: x.A, fontWeights: v.A, lineHeights: f.A, other: b.A, textDecoration: y.A },
    N = ({ type: e }) => (0, g.jsx)(p.In, { children: (0, w.createElement)(A[e]) });
   function S({ tokens: e }) {
    const n = (0, r.kD)(e),
     t = (0, r.GT)(n),
     o = t.map((e) => (0, r.B_)(e) + ': ;').join('\n'),
     l = JSON.stringify((0, r.Rc)(t));
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsxs)(a.XI, {
       children: [
        (0, g.jsx)(a.A0, { children: (0, g.jsxs)(a.Hj, { children: [(0, g.jsx)(a.M_, { children: 'name' }), (0, g.jsx)(a.M_, { children: 'type' })] }) }),
        (0, g.jsx)(a.BF, {
         children: t.map((n) => {
          const t = (0, r.o_)(n),
           o = (0, r.eQ)(e, n).$type;
          return (0, g.jsxs)(a.Hj, { children: [(0, g.jsx)(a.nA, { children: (0, g.jsx)(i.C, { children: (0, g.jsx)(a.kf, { children: t }) }) }), (0, g.jsx)(a.nA, { children: (0, g.jsxs)(s.K, { children: [(0, g.jsx)(N, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, g.jsxs)(a.e2, { children: [(0, g.jsx)(u, { content: l, language: 'json', children: 'Kopieer als JSON' }), (0, g.jsx)(u, { content: o, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => p, mJ: () => j, VZ: () => A, cR: () => w, Pv: () => m, qZ: () => a, kD: () => f, B2: () => g, Pc: () => l, f4: () => o, GT: () => b, fX: () => r, eQ: () => v, B_: () => x, o_: () => k, Rc: () => y });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(c(n));
    },
    g = (e, n) => j(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    j = (e) => h(c(e.projects.flatMap((e) => u(e)))),
    m = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: s, value: r }) => {
        const a = /^(.+) URL/.exec(i)[1],
         o = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: i, id: s, value: r, description: o };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    k = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
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
    A = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, i.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => s });
   var i = t(30758);
   function s() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var i = t(46447),
    s = t(13526),
    r = t(33062),
    a = t(86070);
   const o = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, a.jsx)(i.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var i = t(12013),
    s = t(30758),
    r = t(33062),
    a = t(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, r.fX)(n),
     l = s.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, a.jsx)(s.Suspense, { fallback: null, children: (0, a.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, a.jsx)(l, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => r });
   var i = t(13526),
    s = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...a }) => (0, s.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  80506(e, n, t) {
   'use strict';
   t.d(n, { VK: () => j, $9: () => k, mu: () => m, Fc: () => x });
   var i = t(29181),
    s = t(13526),
    r = t(1292),
    a = t(90495),
    o = t(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const i = t(83294).V6;
      return (0, d.jsx)(i, {
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
    g = t(58876),
    u = t(33062);
   const j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => u.f4.includes(e.id)),
      r = t && u.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(i.If, { sections: r.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, u.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(g.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, u.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    m = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(a.AC, {
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
            s = t?.value,
            o = (0, u.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(a.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || o.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: h
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [s ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p.p, { level: n, suffix: s && (0, d.jsx)(h.D, { state: s }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t })] });
    };
  },
  80545(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => L, component: () => F, contentTitle: () => H, default: () => O, description: () => R, frontMatter: () => z, issueNumber: () => M, metadata: () => i, title: () => C, toc: () => G }));
   const i = JSON.parse('{"id":"componenten/heading/index","title":"Heading","description":"Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.","source":"@site/docs/componenten/heading/index.mdx","sourceDirName":"componenten/heading","slug":"/heading","permalink":"/heading","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading","pagination_label":"Heading","description":"Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.","slug":"/heading","keywords":["bold-text","caption","content","h1","h2","h3","h4","h5","h6","header","heading","heading level","headline","hoofdkop","hoofdstuk","hoofdtekst","hyperlink","kop","kopje","kop tekst","koptekst","linktekst","pagina titel","paragraaf titel","sectie","section","structure","titel","title","tussenkop","tussenkopje","url"]},"sidebar":"componenten","previous":{"title":"Form Summary","permalink":"/form-summary"},"next":{"title":"Heading 1","permalink":"/heading-1"}}');
   var s = t(86070),
    r = t(18439),
    a = t(87069),
    o = (t(64164), t(17045)),
    l = t(19776),
    d = t(40808),
    c = t(90495),
    h = t(46447),
    p = t(56421),
    g = t(1292),
    u = t(72401),
    j = t(80506);
   function m(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, s.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, s.jsx)(n.code, { children: 'h6' }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'Voor screenreadergebruikers is een goede koppenstructuur een belangrijk navigatiemiddel. Gebruik daarom een heading-element van het juiste niveau met een tekst die de content van de sectie eronder beschrijft. Op die manier ontstaat een duidelijke inhoudsopgave wanneer een gebruiker met hulpsoftware een koppenlijst opvraagt.' }), '\n', (0, s.jsxs)(n.p, { children: ['Wil je tekst alleen maar vormgeven, bijvoorbeeld groter maken? Gebruik dan CSS in combinatie met bijvoorbeeld een ', (0, s.jsx)(n.code, { children: 'span' }), '- of een ', (0, s.jsx)(n.code, { children: 'p' }), '-element, geen heading-element.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Sla geen kopniveaus over, dus bijvoorbeeld een ', (0, s.jsx)(n.code, { children: 'h3' }), ' na een ', (0, s.jsx)(n.code, { children: 'h1' }), '. Gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen dan het idee krijgen dat ze informatie missen.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Let erop dat je per pagina 1 ', (0, s.jsx)(n.code, { children: 'h1' }), ' gebruikt en dat deze aan het begin van de ', (0, s.jsx)(n.code, { children: 'main' }), '-content staat. Door niet meer dan 1 ', (0, s.jsx)(n.code, { children: 'h1' }), ' te gebruiken, kan een screenreadergebruiker makkelijk naar het begin van de unieke content springen.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Richtlijnen voor koppen' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/relaties/#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   function k(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, s.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, s.jsx)(n.code, { children: 'h6' }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Richtlijnen voor koppen' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/relaties/#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   var x = t(83329),
    v = t(83672),
    f = t(34257);
   function b(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'De tekst van de kop beschrijft kort en bondig waar de tekst eronder over gaat, als een soort samenvatting.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }) }), '\n'] })] });
   }
   var y = t(24838);
   const w = [
     {
      title: 'Het niveau van de kop klopt binnen de koppenstructuur van de pagina.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['contentmaker'],
     },
     { title: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: v.Ay, tags: ['designer', 'contentmaker'] },
     {
      title: 'De koptekst maakt duidelijk waar de sectie over gaat.',
      sc: '2.4.6',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'Als de kop in een andere taal is dan de rest van de pagina, dan heeft het lang-attribuut de juiste taalcode.', sc: '3.1.2', status: '', component: y.Ay, tags: ['contentmaker', 'developer'] },
    ],
    A = [
     {
      title: 'Als tekst er uitziet als een kop, moet dit ook in de HTML een kop zijn.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: f.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: x.Ay, tags: ['developer'] },
    ];
   var N = t(17889),
    S = t(12013);
   function D(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'gebruik-code', children: 'Gebruik Code' }) }), '\n', (0, s.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, s.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css', children: '@nl-design-system-candidate/heading-css' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/heading-css\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/heading-css@1/dist/heading.css" />\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, s.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/heading-css/dist/heading.css" />\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/heading-css/heading.css";\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'heading-level-1', children: 'Heading level 1' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een hoofdkop van een pagina de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-1' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'h1' }), ', element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h1 class="nl-heading nl-heading--level-1">Hoofdkop van de pagina</h1>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'heading-level-2', children: 'Heading level 2' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-2' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'h2' }), ', element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h2 class="nl-heading nl-heading--level-2">\n  Een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat\n</h2>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'heading-level-3', children: 'Heading level 3' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het derde niveau staat de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-3' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'h3' }), ', element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h3 class="nl-heading nl-heading--level-3">Een koptekst die in de koppenstructuur op het derde niveau staat</h3>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'heading-level-4', children: 'Heading level 4' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het vierde niveau staat de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-4' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'h4' }), ', element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h4 class="nl-heading nl-heading--level-4">Een koptekst die in de koppenstructuur op het vierde niveau staat</h4>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'heading-level-5', children: 'Heading level 5' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het vijfde niveau staat de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-5' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'h5' }), ', element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h5 class="nl-heading nl-heading--level-5">Een koptekst die in de koppenstructuur op het vijfde niveau staat</h5>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'heading-level-6', children: 'Heading level 6' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het zesde niveau staat de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-5' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'h6' }), ', element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h6 class="nl-heading nl-heading--level-6">Een koptekst die in de koppenstructuur op het zesde niveau staat</h6>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'kop-gebruiken-met-het-uiterlijk-van-een-ander-level', children: 'Kop gebruiken met het uiterlijk van een ander level' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik voor een koptekst die semantisch op het ene level staat, maar visueel de uitstraling heeft van een ander level de ', (0, s.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, s.jsx)(n.code, { children: 'nl-heading--level-{het visuele level}' }), ' op het semantische heading component naar keuze:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<h2 class="nl-heading nl-heading--level-4">\n  Een koptekst die in de koppenstructuur op het tweede level staat en eruit ziet als het vierde level.\n</h2>\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, s.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react', children: '@nl-design-system-candidate/heading-react' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/heading-react\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-jsx', children: 'import { Heading } from "@nl-design-system-candidate/heading-react";\n\nexport const MyComponent = () => {\n  return (\n    <div>\n      <Heading level={2} appearance="level-4"></Heading>\n    </div>\n  );\n};\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Of inclusief CSS:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-jsx', children: 'import { Heading } from "@nl-design-system-candidate/heading-react/css";\n\nexport const MyComponent = () => {\n  return (\n    <div>\n      <Heading level={2} appearance="level-4"></Heading>\n    </div>\n  );\n};\n' }) })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(D, { ...e }) }) : D(e);
   }
   var T = t(83766);
   const z = { title: 'Heading', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading', pagination_label: 'Heading', description: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.', slug: '/heading', keywords: ['bold-text', 'caption', 'content', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'heading', 'heading level', 'headline', 'hoofdkop', 'hoofdstuk', 'hoofdtekst', 'hyperlink', 'kop', 'kopje', 'kop tekst', 'koptekst', 'linktekst', 'pagina titel', 'paragraaf titel', 'sectie', 'section', 'structure', 'titel', 'title', 'tussenkop', 'tussenkopje', 'url'] },
    H = void 0,
    L = {},
    C = 'Heading',
    R = 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.',
    M = 114,
    F = a.find((e) => e.number === M),
    G = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Heading level 1', id: 'heading-level-1', level: 3 }, { value: 'Heading level 2', id: 'heading-level-2', level: 3 }, { value: 'Heading level 3', id: 'heading-level-3', level: 3 }, { value: 'Heading level 4', id: 'heading-level-4', level: 3 }, { value: 'Heading level 5', id: 'heading-level-5', level: 3 }, { value: 'Heading level 6', id: 'heading-level-6', level: 3 }, { value: 'Kop gebruiken met het uiterlijk van een ander level', id: 'kop-gebruiken-met-het-uiterlijk-van-een-ander-level', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function V(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, r.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || E('Checklist', !0), i || E('ChecklistItem', !0), (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, s.jsx)(j.Fc, { component: F, headingLevel: 1, description: R }), '\n', (0, s.jsx)(u.e, { component: F }), '\n', (0, s.jsx)(c.Zp, { className: 'implementation-card', children: (0, s.jsxs)(c.Wu, { children: [(0, s.jsx)(p.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, s.jsxs)(h.dk, { children: [(0, s.jsxs)(h.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1039', children: [(0, s.jsx)(g.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, s.jsxs)(h.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1039', children: [(0, s.jsx)(g.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, s.jsx)(p.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, s.jsxs)(h.dk, { children: [(0, s.jsxs)(h.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-heading--documentatie', children: [(0, s.jsx)(g.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, s.jsxs)(h.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/heading--documentatie', children: [(0, s.jsx)(g.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, s.jsx)(p.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, s.jsxs)(h.dk, { children: [(0, s.jsxs)(h.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css', children: [(0, s.jsx)(g.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-css'] }), (0, s.jsxs)(h.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react', children: [(0, s.jsx)(g.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-react'] }), (0, s.jsxs)(h.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-tokens', children: [(0, s.jsx)(g.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-tokens'] })] })] }) }), '\n', (0, s.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, s.jsx)(l.Ay, {}), '\n', (0, s.jsx)(t, { headingLevel: '4', children: w.map(({ component: e, ...n }) => (0, s.jsx)(i, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, s.jsx)(o.Ay, {}), '\n', (0, s.jsx)(t, { headingLevel: '4', children: A.map(({ component: e, ...n }) => (0, s.jsx)(i, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(S.o, { omitH1: !0, headingLevel: 2, children: (0, s.jsx)(_, {}) }), '\n', (0, s.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, s.jsx)(N.B, { tokens: T }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(j.VK, { component: F, headingLevel: 3 }), '\n', (0, s.jsx)(j.$9, { component: F, headingLevel: 2 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(j.mu, { component: F, headingLevel: 3 })] }));
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(V, { ...e }) }) : V(e);
   }
   function E(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  82839(e, n, t) {
   var i = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function s(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   ((s.keys = () => Object.keys(i)), (s.id = 82839), (e.exports = s));
  },
  83329(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, i.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => a, Wu: () => o, Zp: () => l });
   var i = t(46447),
    s = t(13526),
    r = t(86070);
   const a = ({ background: e, children: n, className: t, ...i }) => (0, r.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...i, children: n }),
    o = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === a ? (0, r.jsx)('article', { ...e }) : 'section' === a ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, r.jsx)(i.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, r.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
