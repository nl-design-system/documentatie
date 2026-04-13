'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91279],
 {
  1292(e, n, o) {
   o.d(n, { r: () => p });
   var t = o(29181),
    a = o(74172),
    i = o(15089),
    r = o(28377),
    s = o(33648),
    l = o(83386),
    d = o(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(s.A, {}) },
    p = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, n, o) {
   o.d(n, { bo: () => a, KF: () => m, mJ: () => h, VZ: () => A, cR: () => D, Pv: () => f, qZ: () => r, kD: () => x, B2: () => g, Pc: () => l, f4: () => s, GT: () => k, fX: () => i, eQ: () => b, B_: () => j, o_: () => v, Rc: () => _ });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return p(c(n));
    },
    g = (e, n) => h(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: o }) => '' !== o && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => p(c(e.projects.flatMap((e) => u(e)))),
    f = (e) => {
     const n = u(e),
      o = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: o }) => '' !== o && e.includes(n))
       .map(({ name: t, id: a, value: i }) => {
        const r = /^(.+) URL/.exec(t)[1],
         s = 'Storybook' === r ? `${o} (${n}) in Storybook van ${e.title}` : `${o} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: i, description: s };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((o) => ('object' == typeof e[o] && null !== e[o] ? x(e[o], [...n, o]) : []));
   }
   function k(e) {
    const n = new Map();
    function o(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || o(e).localeCompare(o(n)));
   }
   function _(e) {
    const n = {};
    for (const o of e) {
     let e = n;
     for (const n of o) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const D = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, o) {
   o.d(n, { VK: () => f, $9: () => j, mu: () => v, Fc: () => b, K_: () => x });
   var t = o(29181),
    a = o(13526),
    i = o(1292),
    r = o(90495),
    s = o(54565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
   }
   var d = o(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const t = o(83294).V6;
      return (0, d.jsx)(t, {
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
   var p = o(67970),
    m = o(72642),
    g = o(58876),
    u = o(33062);
   const h = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: n }) => {
     const o = e && e.projects.filter((e) => u.f4.includes(e.id)),
      i = o && u.f4.map((e) => o.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: i.map((o) => ({ className: (0, a.A)('definition-of-done', o && `definition-of-done--${(0, u.fX)(o.title)}`), headingLevel: n, expanded: !1, label: o ? `${o.title} - ${o.progress.value} van ${o.progress.max}` : '', body: o && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g._, { children: o.tasks.map(({ checked: e, name: o, id: t }) => (0, d.jsx)(g.Z, { headingLevel: n + 1, checked: e, heading: o, description: (0, u.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${o.url}?filterQuery=${e.title}`, children: [o.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const o = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && o.length
      ? (0, d.jsx)(r.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: o
          .sort((e, n) => {
           const o = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return o === t ? e.title.localeCompare(n.title) : o - t;
          })
          .map((e) => {
           const o = e.tasks.find(({ name: e }) => 'Naam' === e),
            a = o?.value,
            s = (0, u.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || s.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, d.jsx)(d.Fragment, { children: s.map(({ frameworkName: e, tasks: o }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(t.dk, { links: o.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    j = ({ component: e, headingLevel: n }) => {
     const o = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = o?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [a ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: o }) => {
     const a = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: a && (0, d.jsx)(p.D, { state: a }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: o })] });
    },
    x = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, o) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), o < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  41912(e, n, o) {
   (o.r(n), o.d(n, { assets: () => c, component: () => u, contentTitle: () => d, default: () => v, description: () => m, frontMatter: () => l, issueNumber: () => g, metadata: () => t, title: () => p, toc: () => h }));
   const t = JSON.parse('{"id":"componenten/modal-dialog/index","title":"Modal Dialog","description":"Toont een venster over de pagina om de aandacht op een enkele taak of bericht te vestigen. Interactie met onderliggende pagina wordt geblokkeerd.","source":"@site/docs/componenten/modal-dialog/index.mdx","sourceDirName":"componenten/modal-dialog","slug":"/modal-dialog","permalink":"/modal-dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/modal-dialog/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Modal Dialog","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Modal Dialog","pagination_label":"Modal Dialog","description":"Toont een venster over de pagina om de aandacht op een enkele taak of bericht te vestigen. Interactie met onderliggende pagina wordt geblokkeerd.","slug":"/modal-dialog","keywords":["dialog","dialoogvenster","floating window","modaal venster","modale dialoog","modale popup","modale venster","modal","modal dialog","modal popup","modal window","overlay","popup","popup dialog","popup window","venster","window"]},"sidebar":"componenten","previous":{"title":"Mark","permalink":"/mark"},"next":{"title":"Navigation Bar","permalink":"/navigation-bar"}}');
   var a = o(86070),
    i = o(18439),
    r = o(45189),
    s = o(37131);
   const l = { title: 'Modal Dialog', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Modal Dialog', pagination_label: 'Modal Dialog', description: 'Toont een venster over de pagina om de aandacht op een enkele taak of bericht te vestigen. Interactie met onderliggende pagina wordt geblokkeerd.', slug: '/modal-dialog', keywords: ['dialog', 'dialoogvenster', 'floating window', 'modaal venster', 'modale dialoog', 'modale popup', 'modale venster', 'modal', 'modal dialog', 'modal popup', 'modal window', 'overlay', 'popup', 'popup dialog', 'popup window', 'venster', 'window'] },
    d = void 0,
    c = {},
    p = 'Modal Dialog',
    m = 'Toont een venster over de pagina om de aandacht op een enkele taak of bericht te vestigen. Interactie met onderliggende pagina wordt geblokkeerd.',
    g = 66,
    u = r.find((e) => e.number === g),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(s.Fc, { component: u, headingLevel: 1, description: m }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(s.VK, { component: u, headingLevel: 3 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(s.mu, { component: u, headingLevel: 3 }), '\n', (0, a.jsx)(s.K_, { component: u }), '\n', (0, a.jsx)(s.$9, { component: u, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
   }
  },
  54565(e, n, o) {
   o.d(n, { c: () => a });
   var t = o(30758);
   function a() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, o) {
   o.d(n, { D: () => s });
   var t = o(46447),
    a = o(13526),
    i = o(33062),
    r = o(86070);
   const s = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, r.jsx)(t.KE, { className: (0, a.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, o) {
   o.d(n, { p: () => i });
   var t = o(13526),
    a = o(86070);
   const i = ({ children: e, className: n, level: o = 1, suffix: i, ...r }) => (0, a.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${o}`, n), ...r, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  90495(e, n, o) {
   o.d(n, { AC: () => d, Fu: () => r, Wu: () => s, Zp: () => l });
   var t = o(46447),
    a = o(13526),
    i = o(86070);
   const r = ({ background: e, children: n, className: o, ...t }) => (0, i.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, o), ...t, children: n }),
    s = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: o, component: r = 'div', background: s, children: l }) => {
     const d = (e) => ('article' === r ? (0, i.jsx)('article', { ...e }) : 'section' === r ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, a.A)('cardgroup__card', s && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, o), children: l });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: o }) => (0, i.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, o), children: n });
  },
 },
]);
