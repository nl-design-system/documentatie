(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67801],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => m });
   var a = t(29181),
    s = t(74172),
    i = t(15089),
    l = t(28377),
    o = t(33648),
    r = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(l.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(r.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var a = t(18439),
    s = t(46447),
    i = t(86070);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + s;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    r = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: l = {} }) => (0, i.jsx)(a.x, { components: { ...d(n, t), ...r(s), ...l }, children: e });
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => h, mJ: () => u, VZ: () => A, cR: () => _, Pv: () => g, qZ: () => l, kD: () => x, B2: () => p, Pc: () => r, f4: () => o, GT: () => b, fX: () => i, eQ: () => j, B_: () => f, o_: () => q, Rc: () => k });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    r = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => v(e));
     return m(c(n));
    },
    p = (e, n) => u(e).includes(n),
    v = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => v(e)))),
    g = (e) => {
     const n = v(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: s, value: i }) => {
        const l = /^(.+) URL/.exec(a)[1],
         o = 'Storybook' === l ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${l}`;
        return { brand: l.toLowerCase(), name: a, id: s, value: i, description: o };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    q = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, q(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function k(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const _ = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, t) {
   'use strict';
   t.d(n, { VK: () => g, $9: () => f, mu: () => q, Fc: () => j, K_: () => x });
   var a = t(29181),
    s = t(13526),
    i = t(1292),
    l = t(90495),
    o = t(54565);
   function r(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(r, {
     children: () => {
      const a = t(83294).V6;
      return (0, d.jsx)(a, {
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
   var m = t(67970),
    h = t(72642),
    p = t(58876),
    v = t(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    g = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => v.f4.includes(e.id)),
      i = t && v.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, v.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, v.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !v.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(l.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            a = n.progress.max - n.progress.value;
           return t === a ? e.title.localeCompare(n.title) : t - a;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            s = t?.value,
            o = (0, v.Pv)(e),
            r = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => r.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            l.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(l.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || o.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: m
                   .filter((e) => !!r.get(e.name))
                   .map((e) => {
                    const n = r.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(a.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [s ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && v.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: s && (0, d.jsx)(m.D, { state: s }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    x = ({ component: e }) => {
     const n = (e && u[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => s });
   var a = t(30758);
   function s() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  67568(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => b, component: () => T, contentTitle: () => x, default: () => w, description: () => _, frontMatter: () => j, issueNumber: () => A, metadata: () => a, title: () => k, toc: () => D }));
   const a = JSON.parse('{"id":"componenten/heading-5/index","title":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","source":"@site/docs/componenten/heading-5/index.mdx","sourceDirName":"componenten/heading-5","slug":"/heading-5","permalink":"/heading-5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-5/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 5","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 5","pagination_label":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","slug":"/heading-5","keywords":["caption","content","h5","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 4","permalink":"/heading-4"},"next":{"title":"Heading 6","permalink":"/heading-6"}}');
   var s,
    i,
    l,
    o,
    r,
    d,
    c,
    m = t(86070),
    h = t(18439),
    p = t(64792),
    v = t(30758);
   function u() {
    return (
     (u = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
         }
         return e;
        }),
     u.apply(null, arguments)
    );
   }
   const g = ({ title: e, titleId: n, ...t }) => v.createElement('svg', u({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? v.createElement('title', { id: n }, e) : null, s || (s = v.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = v.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), l || (l = v.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 258v24' })), o || (o = v.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = v.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = v.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), c || (c = v.createElement('path', { fill: '#0A2750', d: 'M320.448 269.976v2.064l.032 2.032h.528q1.375 0 2.16-1.12.8-1.135.8-3.216 0-2.112-.8-3.216-.784-1.104-2.144-1.104h-.544l-.032 2v2.56m-3.92-4.624v-.864h4.752q1.712 0 2.928.64a4.4 4.4 0 0 1 1.872 1.792q.656 1.168.656 2.8 0 1.664-.704 2.848t-2 1.808q-1.28.624-3.04.624h-4.464v-.864l1.2-.128q.032-.976.032-1.984v-4.56q0-1.008-.032-1.984zM327.761 275v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368.561 0 .96.368.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.943 9.408q-1.072 0-1.68-.512-.608-.528-.608-1.712v-.768q.016-.368.016-.832v-3.056h-1.04v-.944l1.184-.16.8-2.24h1.632l-.032 2.256h1.68v1.088h-1.68v4.48q0 .56.224.832.24.256.592.256.416 0 .864-.352l.4.384q-.32.608-.896.944-.56.336-1.456.336m6.148-.24v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.719 9.408a5.4 5.4 0 0 1-2.784-.736l.047-1.952h1.281l.272 1.584q.288.112.576.176.288.048.624.048.687 0 1.056-.224.367-.24.367-.72a.88.88 0 0 0-.271-.64q-.273-.272-1.072-.496l-.864-.256q-.928-.272-1.441-.88-.495-.608-.495-1.504 0-1.104.864-1.856.863-.768 2.48-.768.704 0 1.296.176.608.16 1.232.48l-.112 1.744h-1.28l-.32-1.376q-.337-.128-.88-.128-.544 0-.88.224-.32.224-.32.672 0 .32.256.576.255.24 1.088.496l.784.224q1.135.336 1.632.96.495.624.496 1.52 0 1.265-.976 1.968-.96.688-2.656.688m11.855-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m8.311-7.392q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m4.344-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm18.145-7.024v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm7.216 7.264q-1.248 0-2.16-.512a3.63 3.63 0 0 1-1.408-1.456q-.495-.944-.496-2.176 0-1.232.528-2.144a3.86 3.86 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.137 0 2.048.496.929.496 1.472 1.424.544.912.544 2.16t-.496 2.176a3.6 3.6 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m9.157.832q-1.248 0-2.16-.512a3.6 3.6 0 0 1-1.408-1.456q-.496-.944-.496-2.176t.528-2.144a3.84 3.84 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.136 0 2.048.496a3.7 3.7 0 0 1 1.472 1.424q.544.912.544 2.16t-.496 2.176a3.63 3.63 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m4.951.592v-.752l.88-.176q.015-.592.016-1.264v-2.112q0-.448-.016-.736 0-.288-.016-.528 0-.256-.016-.576l-.976-.144v-.624l3.152-1.072.288.176.144 1.888q.336-1.024.944-1.536.607-.528 1.2-.528.528 0 .912.304.384.288.48.88-.017.624-.336.976a1.06 1.06 0 0 1-.8.336q-.672 0-1.232-.752l-.096-.128a4 4 0 0 0-.656.848 4 4 0 0 0-.416 1.072v2.224q0 .64.016 1.2l1.264.272V275zm7.078.016v-.752l.848-.176q.016-.576.016-1.248v-7.936l-.992-.128v-.672l3.312-.72.256.16-.064 2.24v2.256q1.009-1.024 2.32-1.024.88 0 1.584.464.705.448 1.12 1.36.432.896.432 2.224 0 1.296-.48 2.24-.48.928-1.264 1.44a3.03 3.03 0 0 1-1.68.496q-1.311 0-2.112-.944l-.272.928zm4.528-6.608q-.303 0-.576.128a2.6 2.6 0 0 0-.528.336v4.576q.497.448 1.088.448.705 0 1.152-.688.464-.688.464-2.096 0-1.424-.448-2.064-.432-.64-1.152-.64m9.299-.56q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408t-2.016.464m4.046-.24v-.752l.88-.192q.016-.608.016-1.216.016-.607.016-1.2v-6.704l-.992-.16v-.672l3.36-.72.256.16-.064 2.24v7.072l.032 1.216.88.176V275zm7.924-3.824q0 1.312.464 2 .464.672 1.2.672.544 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.736 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.416-.912-.416-2.208 0-1.312.496-2.24.512-.944 1.312-1.44a3.18 3.18 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm12.202-7.2v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm9.344 7.248q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.536 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.191-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m6.084 2.224v-.752l.864-.192q.015-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm17.249-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.496.944-1.344 1.408-.847.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m4.343-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.207-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.282 0v-.752l.864-.192q.015-.576.016-1.248v-7.872l-.992-.16v-.672l3.312-.72.256.16-.064 2.24v2.576q.64-.752 1.232-1.04a2.9 2.9 0 0 1 1.312-.304q1.056 0 1.696.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.208v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.784-.192-1.088-.177-.304-.672-.304-.32 0-.688.192a3.2 3.2 0 0 0-.736.544v3.52q0 .672.016 1.264l.752.16V275zm13.843-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.513-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m10.489-.016q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.535 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.192-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m8.804-1.6q0 1.312.464 2 .463.672 1.2.672.543 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.737 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.417-.912-.416-2.208 0-1.312.496-2.24.511-.944 1.312-1.44a3.17 3.17 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm3.948-.176v-.752l.864-.192q.015-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168a1.4 1.4 0 0 1-.96-.352 1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.399-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m2.902 9.168v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.331-3.584a.89.89 0 0 0 .832-.496q.288-.497.288-1.344t-.288-1.312q-.272-.48-.8-.48-.543 0-.816.48t-.272 1.328.256 1.344q.257.48.8.48m-2.128 4.912q0 .704.528 1.024.528.336 1.616.336 1.2 0 1.808-.352t.608-.88a.94.94 0 0 0-.256-.64q-.255-.272-.912-.272h-1.68q-.88 0-1.456-.144a2.2 2.2 0 0 0-.192.432 1.7 1.7 0 0 0-.064.496m2.144-4.16q-.832 0-1.456-.192a1.46 1.46 0 0 0-.192.736q0 .272.208.448.208.16.72.16h1.872q1.216 0 1.936.304.72.288 1.024.816.32.512.32 1.216 0 .8-.528 1.472-.528.688-1.584 1.088-1.04.416-2.576.416-1.327 0-2.08-.272-.751-.256-1.056-.688a1.56 1.56 0 0 1-.304-.912q0-1.024 1.328-1.648-.495-.208-.72-.544a1.4 1.4 0 0 1-.208-.736q0-.56.32-1.056.337-.512.928-1.024-.655-.336-.976-.896a2.5 2.5 0 0 1-.32-1.248q0-1.12.816-1.856.833-.736 2.528-.736.864 0 1.504.192t1.04.544l1.792-.768.256.16v1.232h-1.52q.288.528.288 1.232 0 1.072-.832 1.824-.815.736-2.528.736' })));
   var q = t(72401),
    f = t(37131);
   const j = { title: 'Heading 5', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 5', pagination_label: 'Heading 5', description: 'Koptekst die in de koppenstructuur op het vijfde niveau staat.', slug: '/heading-5', keywords: ['caption', 'content', 'h5', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    b = {},
    k = 'Heading 5',
    _ = 'Koptekst die in de koppenstructuur op het vijfde niveau staat.',
    A = 261,
    T = p.find((e) => e.number === A),
    D = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function N(e) {
    const n = { h2: 'h2', ...(0, h.R)(), ...e.components },
     { ComponentAnatomy: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, m.jsxs)(m.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, m.jsx)(f.Fc, { component: T, headingLevel: 1, description: _ }), '\n', (0, m.jsx)(q.e, { component: T }), '\n', (0, m.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, m.jsx)(t, { component: T, illustration: g }), '\n', (0, m.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, m.jsx)(f.VK, { component: T, headingLevel: 3 }), '\n', (0, m.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, m.jsx)(f.mu, { component: T, headingLevel: 3 }), '\n', (0, m.jsx)(f.K_, { component: T }), '\n', (0, m.jsx)(f.$9, { component: T, headingLevel: 2 })] })
    );
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, h.R)(), ...e.components };
    return n ? (0, m.jsx)(n, { ...e, children: (0, m.jsx)(N, { ...e }) }) : N(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var a = t(46447),
    s = t(13526),
    i = t(33062),
    l = t(86070);
   const o = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, l.jsx)(a.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var a = t(12013),
    s = t(30758),
    i = t(33062),
    l = t(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, i.fX)(n),
     r = s.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, l.jsx)(s.Suspense, { fallback: null, children: (0, l.jsx)(a.o, { omitH1: !0, headingLevel: 1, children: (0, l.jsx)(r, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => i });
   var a = t(13526),
    s = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...l }) => (0, s.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  82839(e, n, t) {
   var a = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function s(e) {
    if (!t.o(a, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = a[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   ((s.keys = () => Object.keys(a)), (s.id = 82839), (e.exports = s));
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => l, Wu: () => o, Zp: () => r });
   var a = t(46447),
    s = t(13526),
    i = t(86070);
   const l = ({ background: e, children: n, className: t, ...a }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...a, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    r = ({ href: e, appearance: n, className: t, component: l = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === l ? (0, i.jsx)('article', { ...e }) : 'section' === l ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: r });
     return e ? (0, i.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
