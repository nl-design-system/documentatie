(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65954],
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
   t.d(n, { bo: () => s, KF: () => h, mJ: () => u, VZ: () => A, cR: () => _, Pv: () => g, qZ: () => l, kD: () => x, B2: () => v, Pc: () => r, f4: () => o, GT: () => b, fX: () => i, eQ: () => j, B_: () => f, o_: () => q, Rc: () => k });
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
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    v = (e, n) => u(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    g = (e) => {
     const n = p(e),
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
    v = t(58876),
    p = t(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    g = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(v._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(v.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    q = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
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
            o = (0, p.Pv)(e),
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
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [s ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: s && (0, d.jsx)(m.D, { state: s }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    x = ({ component: e }) => {
     const n = (e && u[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  50487(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => b, component: () => T, contentTitle: () => x, default: () => w, description: () => _, frontMatter: () => j, issueNumber: () => A, metadata: () => a, title: () => k, toc: () => D }));
   const a = JSON.parse('{"id":"componenten/heading-4/index","title":"Heading 4","description":"Koptekst die in de koppenstructuur op het vierde niveau staat.","source":"@site/docs/componenten/heading-4/index.mdx","sourceDirName":"componenten/heading-4","slug":"/heading-4","permalink":"/heading-4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-4/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 4","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 4","pagination_label":"Heading 4","description":"Koptekst die in de koppenstructuur op het vierde niveau staat.","slug":"/heading-4","keywords":["caption","content","h4","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 3","permalink":"/heading-3"},"next":{"title":"Heading 5","permalink":"/heading-5"}}');
   var s,
    i,
    l,
    o,
    r,
    d,
    c,
    m = t(86070),
    h = t(18439),
    v = t(45189),
    p = t(30758);
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
   const g = ({ title: e, titleId: n, ...t }) => p.createElement('svg', u({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, t), e ? p.createElement('title', { id: n }, e) : null, s || (s = p.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = p.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), l || (l = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = p.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = p.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = p.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), c || (c = p.createElement('path', { fill: '#0A2750', d: 'M321.56 254.72v2.58l.04 2.54h.66q1.72 0 2.7-1.4 1-1.42 1-4.02 0-2.64-1-4.02-.98-1.38-2.68-1.38h-.68l-.04 2.5v3.2m-4.9-5.78v-1.08h5.94q2.14 0 3.66.8a5.5 5.5 0 0 1 2.34 2.24q.82 1.46.82 3.5 0 2.08-.88 3.56t-2.5 2.26q-1.6.78-3.8.78h-5.58v-1.08l1.5-.16q.04-1.22.04-2.48v-5.7q0-1.26-.04-2.48zM330.702 261v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46.699 0 1.2.46.5.44.5 1.14 0 .68-.5 1.14-.501.44-1.2.44m7.428 11.76q-1.341 0-2.1-.64-.76-.66-.76-2.14v-.96q.02-.46.02-1.04v-3.82h-1.3v-1.18l1.48-.2 1-2.8h2.04l-.04 2.82h2.1v1.36h-2.1v5.6q0 .7.28 1.04.3.32.74.32.519 0 1.08-.44l.5.48q-.4.76-1.12 1.18-.7.42-1.82.42m7.685-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46t1.2.46q.5.44.5 1.14 0 .68-.5 1.14-.5.44-1.2.44m7.148 11.76q-1.9 0-3.48-.92l.06-2.44h1.6l.34 1.98q.36.14.72.22.36.06.78.06.86 0 1.32-.28.46-.3.46-.9 0-.46-.34-.8t-1.34-.62l-1.08-.32q-1.16-.34-1.8-1.1-.62-.76-.62-1.88 0-1.38 1.08-2.32 1.08-.96 3.1-.96.88 0 1.62.22.76.2 1.54.6l-.14 2.18h-1.6l-.4-1.72q-.42-.16-1.1-.16t-1.1.28q-.4.28-.4.84 0 .4.32.72.32.3 1.36.62l.98.28q1.42.42 2.04 1.2t.62 1.9q0 1.58-1.22 2.46-1.2.86-3.32.86m14.819-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m5.429-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm22.682-8.78v-.88h3.78v.88l-1.16.22-3.3 8.6h-1.52l-3.6-8.62-.98-.2v-.88h5.68v.88l-1.26.26 1.88 5.12 1.74-5.14zm9.02 9.08q-1.56 0-2.7-.64a4.53 4.53 0 0 1-1.76-1.82q-.62-1.18-.62-2.72t.66-2.68a4.8 4.8 0 0 1 1.84-1.78q1.16-.64 2.58-.64t2.56.62a4.63 4.63 0 0 1 1.84 1.78q.68 1.14.68 2.7t-.62 2.72-1.76 1.82q-1.14.64-2.7.64m0-1.04q.84 0 1.26-.98t.42-3.1q0-2.14-.42-3.12t-1.26-.98q-.86 0-1.28.98t-.42 3.12q0 2.12.42 3.1t1.28.98m11.445 1.04q-1.56 0-2.7-.64a4.54 4.54 0 0 1-1.76-1.82q-.62-1.18-.62-2.72t.66-2.68a4.8 4.8 0 0 1 1.84-1.78q1.161-.64 2.58-.64t2.56.62a4.6 4.6 0 0 1 1.84 1.78q.68 1.14.68 2.7t-.62 2.72-1.76 1.82q-1.14.64-2.7.64m0-1.04q.84 0 1.26-.98t.42-3.1q0-2.14-.42-3.12t-1.26-.98q-.86 0-1.28.98t-.42 3.12q0 2.12.42 3.1t1.28.98m6.189.74v-.94l1.1-.22q.02-.74.02-1.58v-2.64q0-.56-.02-.92 0-.36-.02-.66 0-.32-.02-.72l-1.22-.18v-.78l3.94-1.34.36.22.18 2.36q.42-1.28 1.18-1.92.76-.66 1.5-.66.66 0 1.14.38.48.36.6 1.1-.02.78-.42 1.22-.4.42-1 .42-.84 0-1.54-.94l-.12-.16q-.44.42-.82 1.06a5 5 0 0 0-.52 1.34v2.78q0 .8.02 1.5l1.58.34v.94zm8.848.02v-.94l1.06-.22q.02-.72.02-1.56v-9.92l-1.24-.16v-.84l4.14-.9.32.2-.08 2.8v2.82q1.26-1.28 2.9-1.28 1.101 0 1.98.58.88.56 1.4 1.7.54 1.12.54 2.78 0 1.62-.6 2.8-.6 1.16-1.58 1.8-.96.62-2.1.62-1.64 0-2.64-1.18l-.34 1.16zm5.66-8.26q-.38 0-.72.16a3.3 3.3 0 0 0-.66.42v5.72q.62.56 1.36.56.88 0 1.44-.86.58-.86.58-2.62 0-1.78-.56-2.58-.54-.8-1.44-.8m11.624-.7q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48-.399-.48-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.87 4.87 0 0 1 1.94-1.74q1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76-1.059.58-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m5.058-.3v-.94l1.1-.24q.02-.76.02-1.52.02-.76.02-1.5v-8.38l-1.24-.2v-.84l4.2-.9.32.2-.08 2.8v8.84l.04 1.52 1.1.22v.94zm9.904-4.78q0 1.64.58 2.5.58.84 1.5.84.68 0 1.24-.46v-5.96a1.88 1.88 0 0 0-1.18-.42q-.92 0-1.54.86-.6.86-.6 2.64m3.58 5-.16-1.14q-1.16 1.22-2.82 1.22a3.75 3.75 0 0 1-2.04-.58q-.9-.58-1.42-1.7-.52-1.14-.52-2.76 0-1.64.62-2.8.64-1.18 1.64-1.8 1.02-.64 2.14-.64.78 0 1.36.28.58.26 1.06.78v-3.66l-1.4-.2v-.84l4.22-.9.32.2-.08 2.8v10.38l.98.2v.94zm15.253-9v-.88h3.78v.88l-1.16.22-3.3 8.6h-1.52l-3.6-8.62-.98-.2v-.88h5.68v.88l-1.26.26 1.88 5.12 1.74-5.14zm11.679 9.06q-1.74 0-2.2-1.44a7.3 7.3 0 0 1-1.24 1.08q-.579.38-1.62.38-1.16 0-1.9-.66-.72-.66-.72-1.9 0-.72.32-1.3t1.16-1.08 2.38-.94q.3-.1.7-.2t.82-.2v-.66q0-1.34-.34-1.82-.32-.48-1.28-.48h-.26q-.12 0-.28.02l-.1.88q-.02.98-.46 1.42-.42.44-1 .44-1.1 0-1.34-1 .081-1.24 1.26-2.02t3.34-.78q1.92 0 2.74.88.84.88.84 2.9v4.48q0 .58.44.58a.6.6 0 0 0 .3-.08q.141-.1.3-.36l.54.36q-.36.8-.94 1.16-.56.34-1.46.34m-4.72-3.06q0 .74.34 1.1a1.17 1.17 0 0 0 1.32.26q.24-.1.76-.46v-3.24a8 8 0 0 0-.52.18q-.24.08-.42.16a2.56 2.56 0 0 0-1.08.8q-.4.5-.4 1.2m7.605 2.78v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm21.562-8.94q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.46 0-2.58-.6a4.47 4.47 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82.76-1.16 1.94-1.74 1.18-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.62 1.18-1.68 1.76t-2.52.58m10.39-9.24q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m5.429-.3v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zM316.56 291v-.94l1.08-.24q.02-.72.02-1.56v-9.84l-1.24-.2v-.84l4.14-.9.32.2-.08 2.8v3.22q.8-.94 1.54-1.3a3.6 3.6 0 0 1 1.64-.38q1.32 0 2.12.86t.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.26v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.98-.24-1.36-.22-.38-.84-.38-.4 0-.86.24t-.92.68v4.4q0 .84.02 1.58l.94.2v.94zm17.304-8.94q-.56 0-1.04.7-.46.68-.52 2.52h1.7q.72 0 .96-.28.26-.3.26-.98 0-1-.4-1.48t-.96-.48m.04 9.24q-1.461 0-2.58-.6a4.46 4.46 0 0 1-1.76-1.76q-.64-1.16-.64-2.76 0-1.68.74-2.82a4.85 4.85 0 0 1 1.94-1.74q1.179-.6 2.46-.6 1.32 0 2.24.56.94.56 1.42 1.52.48.94.48 2.16 0 .58-.12 1.06h-5.78q.1 1.58.86 2.34.78.74 1.82.74.82 0 1.4-.3a4.2 4.2 0 0 0 1.02-.78l.7.64q-.621 1.18-1.68 1.76-1.06.58-2.52.58m13.111-.02q-1.74 0-2.2-1.44-.64.68-1.24 1.08-.58.38-1.62.38-1.16 0-1.9-.66-.72-.66-.72-1.9 0-.72.32-1.3t1.16-1.08 2.38-.94q.3-.1.7-.2t.82-.2v-.66q0-1.34-.34-1.82-.32-.48-1.28-.48h-.26q-.12 0-.28.02l-.1.88q-.02.98-.46 1.42-.42.44-1 .44-1.1 0-1.34-1 .08-1.24 1.26-2.02t3.34-.78q1.92 0 2.74.88.84.88.84 2.9v4.48q0 .58.44.58a.6.6 0 0 0 .3-.08q.14-.1.3-.36l.54.36q-.36.8-.94 1.16-.56.34-1.46.34m-4.72-3.06q0 .74.34 1.1a1.17 1.17 0 0 0 1.32.26q.24-.1.76-.46v-3.24a8 8 0 0 0-.52.18q-.24.08-.42.16a2.56 2.56 0 0 0-1.08.8q-.4.5-.4 1.2m11.005-2q0 1.64.58 2.5.58.84 1.5.84.68 0 1.24-.46v-5.96a1.88 1.88 0 0 0-1.18-.42q-.92 0-1.54.86-.6.86-.6 2.64m3.58 5-.16-1.14q-1.16 1.22-2.82 1.22a3.74 3.74 0 0 1-2.04-.58q-.9-.58-1.42-1.7-.52-1.14-.52-2.76 0-1.64.62-2.8.64-1.18 1.64-1.8 1.02-.64 2.14-.64.78 0 1.36.28.58.26 1.06.78v-3.66l-1.4-.2v-.84l4.22-.9.32.2-.08 2.8v10.38l.98.2v.94zm4.935-.22v-.94l1.08-.24q.02-.72.02-1.56v-2.42q0-.82-.02-1.36 0-.56-.04-1.16l-1.24-.18v-.78l4.2-1.34.34.22-.06 2.9v4.14q0 .84.02 1.58l1 .2v.94zm2.66-11.46q-.7 0-1.2-.44a1.49 1.49 0 0 1-.5-1.14q0-.7.5-1.14.5-.46 1.2-.46t1.2.46q.5.44.5 1.14 0 .68-.5 1.14-.5.44-1.2.44m3.628 11.46v-.94l1.08-.24q.02-.72.02-1.56v-2.62q0-.82-.02-1.26 0-.46-.04-1.06l-1.22-.18v-.78l3.94-1.34.36.22.12 1.44q.78-.92 1.54-1.28a3.75 3.75 0 0 1 1.66-.38q1.3 0 2.08.86.8.86.8 2.58v3.84q0 .82.02 1.56l1 .2v.94h-5.28v-.94l1.04-.22q.02-.74.02-1.56v-3.58q0-.96-.26-1.34-.26-.4-.84-.4-.78 0-1.72.72v4.6q0 .84.02 1.58l.94.2v.94zm16.664-4.48q.7 0 1.04-.62.36-.62.36-1.68t-.36-1.64q-.34-.6-1-.6-.68 0-1.02.6t-.34 1.66.32 1.68q.32.6 1 .6m-2.66 6.14q0 .88.66 1.28.66.42 2.02.42 1.5 0 2.26-.44t.76-1.1q0-.44-.32-.8-.32-.34-1.14-.34h-2.1q-1.1 0-1.82-.18a2.8 2.8 0 0 0-.24.54q-.08.26-.08.62m2.68-5.2q-1.04 0-1.82-.24-.24.42-.24.92 0 .34.26.56.261.2.9.2h2.34q1.52 0 2.42.38.9.36 1.28 1.02.4.64.4 1.52 0 1-.66 1.84-.66.86-1.98 1.36-1.3.52-3.22.52-1.66 0-2.6-.34-.939-.32-1.32-.86-.38-.54-.38-1.14 0-1.28 1.66-2.06-.62-.26-.9-.68a1.7 1.7 0 0 1-.26-.92q0-.7.4-1.32.42-.64 1.16-1.28-.82-.42-1.22-1.12a3.1 3.1 0 0 1-.4-1.56q0-1.4 1.02-2.32 1.04-.92 3.16-.92 1.08 0 1.88.24t1.3.68l2.24-.96.32.2v1.54h-1.9q.36.66.36 1.54 0 1.34-1.04 2.28-1.02.92-3.16.92' })));
   var q = t(72401),
    f = t(37131);
   const j = { title: 'Heading 4', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 4', pagination_label: 'Heading 4', description: 'Koptekst die in de koppenstructuur op het vierde niveau staat.', slug: '/heading-4', keywords: ['caption', 'content', 'h4', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    b = {},
    k = 'Heading 4',
    _ = 'Koptekst die in de koppenstructuur op het vierde niveau staat.',
    A = 260,
    T = v.find((e) => e.number === A),
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
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => s });
   var a = t(30758);
   function s() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
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
