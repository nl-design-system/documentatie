(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6985],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var r = t(29181),
    s = t(74172),
    a = t(15089),
    i = t(28377),
    o = t(33648),
    d = t(83386),
    l = t(86070);
   const c = { figma: (0, l.jsx)(s.A, {}), github: (0, l.jsx)(a.A, {}), npm: (0, l.jsx)(i.A, {}), storybook: (0, l.jsx)(o.A, {}) },
    h = ({ brand: e }) => (0, l.jsx)(r.In, { children: c[e] || (0, l.jsx)(d.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var r = t(18439),
    s = t(46447),
    a = t(86070);
   const i = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + s;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    d = (e) => ({ img: ({ src: n, ...t }) => (0, a.jsx)('img', { ...t, src: i(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: i = {} }) => (0, a.jsx)(r.x, { components: { ...l(n, t), ...d(s), ...i }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var r = t(86070),
    s = t(18439);
   const a = [];
   function i(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => _ });
   var r = t(96547),
    s = t(79889),
    a = t(33062),
    i = t(46447),
    o = t(68148),
    d = t(9016),
    l = t(91635),
    c = t(30734),
    h = t(4603),
    m = t(29181),
    g = t(86070);
   function u({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, g.jsxs)(i.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [o.A, d.Ay, l.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, g.jsx)(m.In, { children: (0, g.jsx)(h.A, {}) })],
       })
     : null;
   }
   var p = t(35193),
    j = t(13088),
    b = t(91525),
    x = t(24214),
    k = t(92081),
    v = t(1375),
    f = t(23436),
    y = t(79532),
    w = t(30758);
   const N = { color: p.A, dimension: j.A, fontFamilies: b.A, fontSizes: x.A, fontWeights: k.A, lineHeights: v.A, other: f.A, textDecoration: y.A },
    A = ({ type: e }) => (0, g.jsx)(m.In, { children: (0, w.createElement)(N[e]) });
   function _({ tokens: e }) {
    const n = (0, a.kD)(e),
     t = (0, a.GT)(n),
     o = t.map((e) => (0, a.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify((0, a.Rc)(t));
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsxs)(i.XI, {
       children: [
        (0, g.jsx)(i.A0, { children: (0, g.jsxs)(i.Hj, { children: [(0, g.jsx)(i.M_, { children: 'name' }), (0, g.jsx)(i.M_, { children: 'type' })] }) }),
        (0, g.jsx)(i.BF, {
         children: t.map((n) => {
          const t = (0, a.o_)(n),
           o = (0, a.eQ)(e, n).$type;
          return (0, g.jsxs)(i.Hj, { children: [(0, g.jsx)(i.nA, { children: (0, g.jsx)(r.C, { children: (0, g.jsx)(i.kf, { children: t }) }) }), (0, g.jsx)(i.nA, { children: (0, g.jsxs)(s.K, { children: [(0, g.jsx)(A, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, g.jsxs)(i.e2, { children: [(0, g.jsx)(u, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, g.jsx)(u, { content: o, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var r = t(86070),
    s = t(18439);
   const a = [];
   function i(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var r = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => m, mJ: () => p, VZ: () => N, cR: () => w, Pv: () => j, qZ: () => i, kD: () => v, B2: () => g, Pc: () => d, f4: () => o, GT: () => f, fX: () => a, eQ: () => k, B_: () => x, o_: () => b, Rc: () => y });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(c(n));
    },
    g = (e, n) => p(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => h(c(e.projects.flatMap((e) => u(e)))),
    j = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: s, value: a }) => {
        const i = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: s, value: a, description: o };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    b = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
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
   t.d(n, { Ay: () => i });
   var r = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var r = t(86070),
    s = t(18439);
   const a = [];
   function i(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
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
   t.d(n, { Ay: () => i });
   var r = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var r = t(46447),
    s = t(13526),
    a = t(33062),
    i = t(86070);
   const o = ({ state: e }) => {
    const n = (0, a.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var r = t(12013),
    s = t(30758),
    a = t(33062),
    i = t(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, a.fX)(n),
     d = s.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(d, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => a });
   var r = t(13526),
    s = t(86070);
   const a = ({ children: e, className: n, level: t = 1, suffix: a, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  80506(e, n, t) {
   'use strict';
   t.d(n, { VK: () => p, $9: () => b, mu: () => j, Fc: () => x });
   var r = t(29181),
    s = t(13526),
    a = t(1292),
    i = t(90495),
    o = t(54565);
   function d(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var l = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(d, {
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
    m = t(72642),
    g = t(58876),
    u = t(33062);
   const p = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => u.f4.includes(e.id)),
      a = t && u.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: a.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, u.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(g._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, l.jsx)(g.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, u.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(i.AC, {
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
            o = (0, u.Pv)(e),
            d = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => d.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(i.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || o.length > 0) && (0, l.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!d.get(e.name))
                   .map((e) => {
                    const n = d.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(a.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, l.jsx)(l.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, l.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [s ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && u.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(m.p, { level: n, suffix: s && (0, l.jsx)(h.D, { state: s }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: t })] });
    };
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
   t.d(n, { Ay: () => i });
   var r = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var r = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  88722(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => C, component: () => M, contentTitle: () => z, default: () => O, description: () => R, frontMatter: () => T, issueNumber: () => B, metadata: () => r, title: () => L, toc: () => F }));
   const r = JSON.parse('{"id":"componenten/number-badge/index","title":"Number Badge","description":"Toont een klein label dat de aandacht trekt en informeert over een aantal.","source":"@site/docs/componenten/number-badge/index.mdx","sourceDirName":"componenten/number-badge","slug":"/number-badge","permalink":"/number-badge","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/number-badge/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Number Badge","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Number Badge","pagination_label":"Number Badge","description":"Toont een klein label dat de aandacht trekt en informeert over een aantal.","slug":"/number-badge","keywords":["aantal","badge","count badge","counter badge","cijfer","chip","counter","label","number","number badge","number label","number marker","notification badge","notification label","pill","stamp","tag"]},"sidebar":"componenten","previous":{"title":"Notification Banner","permalink":"/notification-banner"},"next":{"title":"Number Input","permalink":"/number-input"}}');
   var s = t(86070),
    a = t(18439),
    i = t(45189),
    o = (t(97314), t(17045)),
    d = t(19776),
    l = t(40808);
   function c(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['Visueel heeft de Number Badge een betekenis die duidelijk is. Deze betekenis moet ook duidelijk zijn voor gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ". Het volstaat daarom meestal niet als de Number Badge alleen een cijfer toevoegt aan bijvoorbeeld een tekst 'Inbox'. De visuele layout maakt namelijk duidelijk dat het om nieuwe berichten gaat."] }), '\n', (0, s.jsx)(n.p, { children: 'Geeft dan extra tekstuele context, bijvoorbeeld met een visueel verborgen tekst:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<a href="/inbox">\n  Inbox\n  <data class="utrecht-number-badge" value="4">4</data>\n  <span class="screenreader-only">nieuwe berichten</span>\n</a>\n' }) })] });
   }
   var h = t(83329),
    m = t(83672),
    g = t(34257),
    u = t(66706),
    p = t(24838);
   const j = [
     { title: 'De tekst van de Number Badge heeft voldoende contrast tegen de achtergrond.', sc: '1.4.3', status: '', component: m.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Gebruik geen afbeeldingen van tekst voor de Number Badge.', sc: '1.4.5', status: '', component: u.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als een tekst en/of het aria-label in de Number Badge in een andere taal is dan de taal van de pagina, dan heeft de Number Badge een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: p.Ay, tags: ['developer', 'contentmaker'] },
    ],
    b = [
     {
      title: 'Geef de informatie uit de Number Badge ook door aan screenreaders',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst van de Number Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: g.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand van de Number Badge vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: h.Ay, tags: ['developer'] },
    ];
   var x = t(90495),
    k = t(46447),
    v = t(56421),
    f = t(1292),
    y = t(72401),
    w = t(80506),
    N = t(17889),
    A = t(12013);
   function _(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'gebruik-number-badge', children: 'Gebruik Number Badge' }) }), '\n', (0, s.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, s.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-css', children: '@nl-design-system-candidate/number-badge-css' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik de ', (0, s.jsx)(n.code, { children: 'nl-number-badge' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'span' }), ' element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<span class="nl-number-badge">42</span>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/number-badge-css\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/number-badge-css@1/dist/number-badge.css"\n/>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, s.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/number-badge-css/dist/number-badge.css" />\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/number-badge-css/number-badge.css";\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'number-badge-als-data-component', children: 'Number badge als data component' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt er ook voor kiezen om number badge op een ', (0, s.jsx)(n.code, { children: 'data' }), ' element te gebruiken:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<data class="nl-number-badge" value="42">42</data>\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'number-badge-met-een-toegankelijk-label', children: 'Number badge met een toegankelijk label' }), '\n', (0, s.jsx)(n.p, { children: 'Om te zorgen dat de betekenis van een number badge duidelijk is wanneer de pagina wordt voorgelezeg kun je ook een onzichtbaar label toevoegen:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<data value="42" class="nl-number-badge">\n  <span hidden aria-hidden="true" class="nl-number-badge__visible-label">42</span>\n  <span class="nl-number-badge__hidden-label">42 ongelezen berichten</span>\n</data>\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, s.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-react', children: '@nl-design-system-candidate/number-badge-react' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/number-badge-react\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-jsx', children: 'import { NumberBadge } from "@nl-design-system-candidate/number-badge-react";\n\nexport const MyComponent = () => <NumberBadge value="42" />;\n' }) })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(_, { ...e }) }) : _(e);
   }
   var S = t(23071);
   const T = { title: 'Number Badge', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Number Badge', pagination_label: 'Number Badge', description: 'Toont een klein label dat de aandacht trekt en informeert over een aantal.', slug: '/number-badge', keywords: ['aantal', 'badge', 'count badge', 'counter badge', 'cijfer', 'chip', 'counter', 'label', 'number', 'number badge', 'number label', 'number marker', 'notification badge', 'notification label', 'pill', 'stamp', 'tag'] },
    z = void 0,
    C = {},
    L = 'Number Badge',
    R = 'Toont een klein label dat de aandacht trekt en informeert over een aantal.',
    B = 7,
    M = i.find((e) => e.number === B),
    F = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...l.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...d.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Number badge als data component', id: 'number-badge-als-data-component', level: 3 }, { value: 'Number badge met een toegankelijk label', id: 'number-badge-met-een-toegankelijk-label', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function V(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, a.R)(), ...e.components },
     { Checklist: t, ChecklistItem: r } = n;
    return (t || H('Checklist', !0), r || H('ChecklistItem', !0), (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, s.jsx)(w.Fc, { component: M, headingLevel: 1, description: R }), '\n', (0, s.jsx)(y.e, { component: M }), '\n', (0, s.jsx)(x.Zp, { className: 'implementation-card', children: (0, s.jsxs)(x.Wu, { children: [(0, s.jsx)(v.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, s.jsxs)(k.dk, { children: [(0, s.jsxs)(k.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, s.jsx)(f.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, s.jsxs)(k.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, s.jsx)(f.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, s.jsx)(v.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, s.jsxs)(k.dk, { children: [(0, s.jsxs)(k.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-number-badge--documentatie', children: [(0, s.jsx)(f.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, s.jsxs)(k.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/number-badge--documentatie', children: [(0, s.jsx)(f.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, s.jsx)(v.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, s.jsxs)(k.dk, { children: [(0, s.jsxs)(k.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-css', children: [(0, s.jsx)(f.r, { brand: 'npm' }), ' @nl-design-system-candidate/number-badge-css'] }), (0, s.jsxs)(k.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-react', children: [(0, s.jsx)(f.r, { brand: 'npm' }), ' @nl-design-system-candidate/number-badge-react'] }), (0, s.jsxs)(k.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-tokens', children: [(0, s.jsx)(f.r, { brand: 'npm' }), ' @nl-design-system-candidate/number-badge-tokens'] })] })] }) }), '\n', (0, s.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, s.jsx)(l.Ay, {}), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(t, { headingLevel: '4', children: j.map(({ component: e, ...n }) => (0, s.jsx)(r, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, s.jsx)(o.Ay, {}), '\n', (0, s.jsx)(t, { headingLevel: '4', children: b.map(({ component: e, ...n }) => (0, s.jsx)(r, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(A.o, { omitH1: !0, headingLevel: 3, children: (0, s.jsx)(D, {}) }), '\n', (0, s.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, s.jsx)(N.B, { tokens: S }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(w.VK, { component: M, headingLevel: 3 }), '\n', (0, s.jsx)(w.$9, { component: M, headingLevel: 2 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(w.mu, { component: M, headingLevel: 3 })] }));
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(V, { ...e }) }) : V(e);
   }
   function H(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => l, Fu: () => i, Wu: () => o, Zp: () => d });
   var r = t(46447),
    s = t(13526),
    a = t(86070);
   const i = ({ background: e, children: n, className: t, ...r }) => (0, a.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    o = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: t, component: i = 'div', background: o, children: d }) => {
     const l = (e) => ('article' === i ? (0, a.jsx)('article', { ...e }) : 'section' === i ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(l, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: d });
     return e ? (0, a.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, a.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
