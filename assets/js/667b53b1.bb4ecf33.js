'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84463],
 {
  1292(e, t, n) {
   n.d(t, { r: () => h });
   var s = n(29181),
    i = n(74172),
    a = n(15089),
    o = n(28377),
    r = n(33648),
    l = n(83386),
    d = n(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(a.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(r.A, {}) },
    h = ({ brand: e }) => (0, d.jsx)(s.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, t, n) {
   n.d(t, { bo: () => i, KF: () => m, mJ: () => u, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => o, kD: () => k, B2: () => g, Pc: () => l, f4: () => r, GT: () => b, fX: () => a, eQ: () => v, B_: () => x, o_: () => j, Rc: () => _ });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, t) => d.indexOf(e) - d.indexOf(t)),
    m = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return h(c(t));
    },
    g = (e, t) => u(e).includes(t),
    p = (e) => {
     const t = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    u = (e) => h(c(e.projects.flatMap((e) => p(e)))),
    f = (e) => {
     const t = p(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const s = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: s, id: i, value: a }) => {
        const o = /^(.+) URL/.exec(s)[1],
         r = 'Storybook' === o ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${o}`;
        return { brand: o.toLowerCase(), name: s, id: i, value: a, description: r };
       });
      return { frameworkName: t, tasks: s };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, t) => t.reduce((e, t) => e?.[t], e);
   function k(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? k(e[n], [...t, n]) : []));
   }
   function b(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, j(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function _(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) (e[t] || (e[t] = {}), (e = e[t]));
    }
    return t;
   }
   const A = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, t, n) {
   n.d(t, { VK: () => f, $9: () => x, mu: () => j, Fc: () => v, K_: () => k });
   var s = n(29181),
    i = n(13526),
    a = n(1292),
    o = n(90495),
    r = n(54565);
   function l(e) {
    return (0, r.c)() ? e.children() : null;
   }
   var d = n(86070);
   const c = ({ checked: e, unchecked: t }) =>
    (0, d.jsx)(l, {
     children: () => {
      const s = n(83294).V6;
      return (0, d.jsx)(s, {
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
   var h = n(67970),
    m = n(72642),
    g = n(58876),
    p = n(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => p.f4.includes(e.id)),
      a = n && p.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, d.jsx)(s.If, { sections: a.map((n) => ({ className: (0, i.A)('definition-of-done', n && `definition-of-done--${(0, p.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g._, { children: n.tasks.map(({ checked: e, name: n, id: s }) => (0, d.jsx)(g.Z, { headingLevel: t + 1, checked: e, heading: n, description: (0, p.qZ)(s) }, s)) }), (0, d.jsx)(s.fz, { children: (0, d.jsxs)(s.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && n.length
      ? (0, d.jsx)(o.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: n
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            s = t.progress.max - t.progress.value;
           return n === s ? e.title.localeCompare(t.title) : n - s;
          })
          .map((e) => {
           const n = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = n?.value,
            r = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: t }) => l.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(s.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(s.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(s.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || r.length > 0) && (0, d.jsx)(s.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(s.dk, {
                  links: h
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const t = l.get(e.name);
                    return { children: t.desciption, icon: (0, d.jsx)(a.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               r.length > 0 && (0, d.jsx)(d.Fragment, { children: r.map(({ frameworkName: e, tasks: n }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.DZ, { level: t + 2, children: [i, ' in ', e] }), (0, d.jsx)(s.dk, { links: n.map((e) => ({ children: e.description, icon: (0, d.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(s.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(s.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(s.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(s.Xy, { children: [i ? (0, d.jsxs)(s.Er, { children: ['Vul de ', (0, d.jsx)(s.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(s.Er, { children: [(0, d.jsxs)(s.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(s.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(s.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(s.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: t, description: n }) => {
     const i = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: t, suffix: i && (0, d.jsx)(h.D, { state: i }), children: e.title }), (0, d.jsx)(s.fz, { lead: !0, children: n })] });
    },
    k = ({ component: e }) => {
     const t = (e && u[e.title]) || [];
     return t.length > 0 && (0, d.jsxs)(s.fz, { children: ['Gerelateerde componenten:', ' ', t.map((e, n) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(s.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), n < t.length - 1 ? ', ' : '.'] }))] });
    };
  },
  44594(e, t, n) {
   n.d(t, { s: () => l });
   var s = n(29181),
    i = n(13526),
    a = n(33062),
    o = n(86070);
   const r = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: t, description: n }) => {
     const l = (0, a.fX)(t),
      d = r[e] ?? e;
     return (0, o.jsxs)(s.WK, { children: [(0, o.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, o.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, o.jsx)('rect', { width: '960', height: '540' }), (0, o.jsx)('rect', { width: '960', height: '540' })] }), (0, o.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, o.jsx)('use', { href: `/svg/componenten_overzicht_${(0, a.fX)(d)}.svg#component-illustration` })] }), (0, o.jsx)(s.$P, { className: 'component-illustration__caption', children: n })] });
    };
  },
  54565(e, t, n) {
   n.d(t, { c: () => i });
   var s = n(30758);
   function i() {
    const [e, t] = (0, s.useState)();
    return ((0, s.useEffect)(() => t(!0), []), e);
   }
  },
  67970(e, t, n) {
   n.d(t, { D: () => r });
   var s = n(46447),
    i = n(13526),
    a = n(33062),
    o = n(86070);
   const r = ({ state: e }) => {
    const t = (0, a.fX)(e);
    return (0, o.jsx)(s.KE, { className: (0, i.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72642(e, t, n) {
   n.d(t, { p: () => a });
   var s = n(13526),
    i = n(86070);
   const a = ({ children: e, className: t, level: n = 1, suffix: a, ...o }) => (0, i.jsxs)('hgroup', { className: (0, s.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  74168(e, t, n) {
   (n.r(t), n.d(t, { assets: () => h, component: () => j, componentName: () => f, contentTitle: () => c, default: () => k, description: () => g, frontMatter: () => d, issueNumber: () => p, metadata: () => s, relayStep: () => u, title: () => m, toc: () => x }));
   const s = JSON.parse('{"id":"componenten/task-list/index","title":"Task List","description":"Lijst met taken die zijn gemarkeerd als voltooid of onvoltooid.","source":"@site/docs/componenten/task-list/index.mdx","sourceDirName":"componenten/task-list","slug":"/task-list","permalink":"/task-list","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/task-list/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Task List","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Task List","pagination_label":"Task List","description":"Lijst met taken die zijn gemarkeerd als voltooid of onvoltooid.","slug":"/task-list","keywords":["checklist","completed","onvoltooide taken","taakbeheer","taaklijst","takenlijst","task list","ticked list","to-do lijst","to-dolist","voltooid vinkje","voltooide taken"]},"sidebar":"componenten","previous":{"title":"Tabs","permalink":"/tabs"},"next":{"title":"Task Navigation","permalink":"/task-navigation"}}');
   var i = n(86070),
    a = n(18439),
    o = n(45189),
    r = n(37131),
    l = n(44594);
   const d = { title: 'Task List', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Task List', pagination_label: 'Task List', description: 'Lijst met taken die zijn gemarkeerd als voltooid of onvoltooid.', slug: '/task-list', keywords: ['checklist', 'completed', 'onvoltooide taken', 'taakbeheer', 'taaklijst', 'takenlijst', 'task list', 'ticked list', 'to-do lijst', 'to-dolist', 'voltooid vinkje', 'voltooide taken'] },
    c = void 0,
    h = {},
    m = 'Task List',
    g = 'Lijst met taken die zijn gemarkeerd als voltooid of onvoltooid.',
    p = 263,
    u = 'help wanted',
    f = 'task-list',
    j = o.find((e) => e.number === p),
    x = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const t = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(r.Fc, { component: j, headingLevel: 1, description: g }), '\n', (0, i.jsx)(l.s, { relayStep: u, description: `Schets van de ${f} component`, name: f }), '\n', (0, i.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(r.VK, { component: j, headingLevel: 3 }), '\n', (0, i.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(r.mu, { component: j, headingLevel: 3 }), '\n', (0, i.jsx)(r.K_, { component: j }), '\n', (0, i.jsx)(r.$9, { component: j, headingLevel: 2 })] });
   }
   function k(e = {}) {
    const { wrapper: t } = { ...(0, a.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
  90495(e, t, n) {
   n.d(t, { AC: () => d, Fu: () => o, Wu: () => r, Zp: () => l });
   var s = n(46447),
    i = n(13526),
    a = n(86070);
   const o = ({ background: e, children: t, className: n, ...s }) => (0, a.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, n), ...s, children: t }),
    r = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: t, className: n, component: o = 'div', background: r, children: l }) => {
     const d = (e) => ('article' === o ? (0, a.jsx)('article', { ...e }) : 'section' === o ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(d, { className: (0, i.A)('cardgroup__card', r && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: l });
     return e ? (0, a.jsx)(s.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: t, className: n }) => (0, a.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
 },
]);
