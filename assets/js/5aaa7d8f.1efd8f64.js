'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4476],
 {
  1292(e, t, n) {
   n.d(t, { r: () => p });
   var r = n(29181),
    s = n(74172),
    i = n(15089),
    a = n(28377),
    o = n(33648),
    l = n(83386),
    c = n(86070);
   const d = { figma: (0, c.jsx)(s.A, {}), github: (0, c.jsx)(i.A, {}), npm: (0, c.jsx)(a.A, {}), storybook: (0, c.jsx)(o.A, {}) },
    p = ({ brand: e }) => (0, c.jsx)(r.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  24422(e, t, n) {
   (n.r(t), n.d(t, { assets: () => p, component: () => j, componentName: () => f, contentTitle: () => d, default: () => b, description: () => m, frontMatter: () => c, issueNumber: () => g, metadata: () => r, relayStep: () => u, title: () => h, toc: () => x }));
   const r = JSON.parse('{"id":"componenten/superscript/index","title":"Superscript","description":"Toont tekst met een kleiner lettertype met een verhoogde letterlijn.","source":"@site/docs/componenten/superscript/index.mdx","sourceDirName":"componenten/superscript","slug":"/superscript","permalink":"/superscript","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/superscript/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Superscript","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Superscript","pagination_label":"Superscript","description":"Toont tekst met een kleiner lettertype met een verhoogde letterlijn.","slug":"/superscript","keywords":["exponent","footnote","hoge tekst","kleine hoge tekst","kubieke","kwadraat","math","power","subscript","sup","supscript","superscript","tot de macht","tweetje","vierkante","voetnoot"]},"sidebar":"componenten","previous":{"title":"Subscript","permalink":"/subscript"},"next":{"title":"Switch","permalink":"/switch"}}');
   var s = n(86070),
    i = n(18439),
    a = n(45189),
    o = n(37131),
    l = n(44594);
   const c = { title: 'Superscript', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Superscript', pagination_label: 'Superscript', description: 'Toont tekst met een kleiner lettertype met een verhoogde letterlijn.', slug: '/superscript', keywords: ['exponent', 'footnote', 'hoge tekst', 'kleine hoge tekst', 'kubieke', 'kwadraat', 'math', 'power', 'subscript', 'sup', 'supscript', 'superscript', 'tot de macht', 'tweetje', 'vierkante', 'voetnoot'] },
    d = void 0,
    p = {},
    h = 'Superscript',
    m = 'Toont tekst met een kleiner lettertype met een verhoogde letterlijn.',
    g = 337,
    u = 'help wanted',
    f = 'superscript',
    j = a.find((e) => e.number === g),
    x = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const t = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, s.jsx)(o.Fc, { component: j, headingLevel: 1, description: m }), '\n', (0, s.jsx)(l.s, { relayStep: u, description: `Schets van de ${f} component`, name: f }), '\n', (0, s.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(o.VK, { component: j, headingLevel: 3 }), '\n', (0, s.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(o.mu, { component: j, headingLevel: 3 }), '\n', (0, s.jsx)(o.K_, { component: j }), '\n', (0, s.jsx)(o.$9, { component: j, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v(e);
   }
  },
  33062(e, t, n) {
   n.d(t, { bo: () => s, KF: () => h, mJ: () => u, VZ: () => A, cR: () => w, Pv: () => f, qZ: () => a, kD: () => b, B2: () => m, Pc: () => l, f4: () => o, GT: () => k, fX: () => i, eQ: () => v, B_: () => x, o_: () => j, Rc: () => _ });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, t) => c.indexOf(e) - c.indexOf(t)),
    h = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return p(d(t));
    },
    m = (e, t) => u(e).includes(t),
    g = (e) => {
     const t = / URL \(([^)]+)\)/;
     return p(d(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    u = (e) => p(d(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const t = g(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: s, value: i }) => {
        const a = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === a ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${a}`;
        return { brand: a.toLowerCase(), name: r, id: s, value: i, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, t) => t.reduce((e, t) => e?.[t], e);
   function b(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? b(e[n], [...t, n]) : []));
   }
   function k(e) {
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
   const w = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, t, n) {
   n.d(t, { VK: () => f, $9: () => x, mu: () => j, Fc: () => v, K_: () => b });
   var r = n(29181),
    s = n(13526),
    i = n(1292),
    a = n(90495),
    o = n(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var c = n(86070);
   const d = ({ checked: e, unchecked: t }) =>
    (0, c.jsx)(l, {
     children: () => {
      const r = n(83294).V6;
      return (0, c.jsx)(r, {
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
   var p = n(67970),
    h = n(72642),
    m = n(58876),
    g = n(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => g.f4.includes(e.id)),
      i = n && g.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, c.jsx)(r.If, { sections: i.map((n) => ({ className: (0, s.A)('definition-of-done', n && `definition-of-done--${(0, g.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m._, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, c.jsx)(m.Z, { headingLevel: t + 1, checked: e, heading: n, description: (0, g.qZ)(r) }, r)) }), (0, c.jsx)(r.fz, { children: (0, c.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && n.length
      ? (0, c.jsx)(a.AC, {
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
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: t }) => l.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, c.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(a.Wu, {
              children: [
               (0, c.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(r.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || o.length > 0) && (0, c.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(r.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const t = l.get(e.name);
                    return { children: t.desciption, icon: (0, c.jsx)(i.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, c.jsx)(c.Fragment, { children: o.map(({ frameworkName: e, tasks: n }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.DZ, { level: t + 2, children: [s, ' in ', e] }), (0, c.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, c.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(r.Xy, { children: [s ? (0, c.jsxs)(r.Er, { children: ['Vul de ', (0, c.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(r.Er, { children: [(0, c.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: t, description: n }) => {
     const s = e && g.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(h.p, { level: t, suffix: s && (0, c.jsx)(p.D, { state: s }), children: e.title }), (0, c.jsx)(r.fz, { lead: !0, children: n })] });
    },
    b = ({ component: e }) => {
     const t = (e && u[e.title]) || [];
     return t.length > 0 && (0, c.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', t.map((e, n) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), n < t.length - 1 ? ', ' : '.'] }))] });
    };
  },
  44594(e, t, n) {
   n.d(t, { s: () => l });
   var r = n(29181),
    s = n(13526),
    i = n(33062),
    a = n(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: t, description: n }) => {
     const l = (0, i.fX)(t),
      c = o[e] ?? e;
     return (0, a.jsxs)(r.WK, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, i.fX)(c)}.svg#component-illustration` })] }), (0, a.jsx)(r.$P, { className: 'component-illustration__caption', children: n })] });
    };
  },
  54565(e, t, n) {
   n.d(t, { c: () => s });
   var r = n(30758);
   function s() {
    const [e, t] = (0, r.useState)();
    return ((0, r.useEffect)(() => t(!0), []), e);
   }
  },
  67970(e, t, n) {
   n.d(t, { D: () => o });
   var r = n(46447),
    s = n(13526),
    i = n(33062),
    a = n(86070);
   const o = ({ state: e }) => {
    const t = (0, i.fX)(e);
    return (0, a.jsx)(r.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72642(e, t, n) {
   n.d(t, { p: () => i });
   var r = n(13526),
    s = n(86070);
   const i = ({ children: e, className: t, level: n = 1, suffix: i, ...a }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...a, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  90495(e, t, n) {
   n.d(t, { AC: () => c, Fu: () => a, Wu: () => o, Zp: () => l });
   var r = n(46447),
    s = n(13526),
    i = n(86070);
   const a = ({ background: e, children: t, className: n, ...r }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    o = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: t, className: n, component: a = 'div', background: o, children: l }) => {
     const c = (e) => ('article' === a ? (0, i.jsx)('article', { ...e }) : 'section' === a ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(c, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: l });
     return e ? (0, i.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: t, className: n }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
 },
]);
