'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55335],
 {
  1292(e, n, t) {
   t.d(n, { r: () => u });
   var o = t(29181),
    r = t(74172),
    s = t(15089),
    a = t(28377),
    i = t(33648),
    l = t(83386),
    c = t(86070);
   const d = { figma: (0, c.jsx)(r.A, {}), github: (0, c.jsx)(s.A, {}), npm: (0, c.jsx)(a.A, {}), storybook: (0, c.jsx)(i.A, {}) },
    u = ({ brand: e }) => (0, c.jsx)(o.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  3222(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, component: () => h, contentTitle: () => c, default: () => v, description: () => p, frontMatter: () => l, illustration: () => m, issueNumber: () => g, metadata: () => o, title: () => u, toc: () => f }));
   const o = JSON.parse('{"id":"componenten/action-group/index","title":"Action Group","description":"Groepeert \xe9\xe9n of meer gerelateerde acties en verzorgt de lay-out van de content.","source":"@site/docs/componenten/action-group/index.mdx","sourceDirName":"componenten/action-group","slug":"/action-group","permalink":"/action-group","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/action-group/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Action Group","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Action Group","pagination_label":"Action Group","description":"Groepeert \xe9\xe9n of meer gerelateerde acties en verzorgt de lay-out van de content.","slug":"/action-group","keywords":["action bar","action group","actions","button","buttons","button container","button dock","button group","button row","buttongroup","form submission","formulier verzenden","knop","knoppen","knoppenbalk","toolbar","werkbalk"]},"sidebar":"componenten","previous":{"title":"Accordion","permalink":"/accordion"},"next":{"title":"Alert","permalink":"/alert"}}');
   var r = t(86070),
    s = t(18439),
    a = t(87069),
    i = t(80506);
   const l = { title: 'Action Group', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Action Group', pagination_label: 'Action Group', description: 'Groepeert \xe9\xe9n of meer gerelateerde acties en verzorgt de lay-out van de content.', slug: '/action-group', keywords: ['action bar', 'action group', 'actions', 'button', 'buttons', 'button container', 'button dock', 'button group', 'button row', 'buttongroup', 'form submission', 'formulier verzenden', 'knop', 'knoppen', 'knoppenbalk', 'toolbar', 'werkbalk'] },
    c = void 0,
    d = {},
    u = 'Action Group',
    p = 'Groepeert \xe9\xe9n of meer gerelateerde acties en verzorgt de lay-out van de content.',
    m = 'ActionGroupSketch',
    g = 153,
    h = a.find((e) => e.number === g),
    f = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function b(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, r.jsx)(i.Fc, { component: h, headingLevel: 1, description: p }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(i.VK, { component: h, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(i.mu, { component: h, headingLevel: 3 }), '\n', (0, r.jsx)(i.$9, { component: h, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => r, KF: () => p, mJ: () => h, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => a, kD: () => x, B2: () => m, Pc: () => l, f4: () => i, GT: () => k, fX: () => s, eQ: () => j, B_: () => v, o_: () => b, Rc: () => _ });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return u(d(n));
    },
    m = (e, n) => h(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => u(d(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: o, id: r, value: s }) => {
        const a = /^(.+) URL/.exec(o)[1],
         i = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: o, id: r, value: s, description: i };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    b = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function _(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const A = () => {
     const e = o.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = o.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => r });
   var o = t(30758);
   function r() {
    const [e, n] = (0, o.useState)();
    return ((0, o.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => i });
   var o = t(46447),
    r = t(13526),
    s = t(33062),
    a = t(86070);
   const i = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, a.jsx)(o.KE, { className: (0, r.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => s });
   var o = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...a }) => (0, r.jsxs)('hgroup', { className: (0, o.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => h, $9: () => b, mu: () => f, Fc: () => v });
   var o = t(29181),
    r = t(13526),
    s = t(1292),
    a = t(90495),
    i = t(54565);
   function l(e) {
    return (0, i.c)() ? e.children() : null;
   }
   var c = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, c.jsx)(l, {
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
   var u = t(67970),
    p = t(72642),
    m = t(58876),
    g = t(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      s = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(o.If, { sections: s.map((t) => ({ className: (0, r.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: o }) => (0, c.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(o) }, o)) }), (0, c.jsx)(o.fz, { children: (0, c.jsxs)(o.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(a.AC, {
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
            i = (0, g.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(a.Wu, {
              children: [
               (0, c.jsx)(o.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(o.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(o.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || i.length > 0) && (0, c.jsx)(o.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(o.dk, {
                  links: u
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               i.length > 0 && (0, c.jsx)(c.Fragment, { children: i.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, c.jsx)(o.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(o.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(o.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(o.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(o.Xy, { children: [r ? (0, c.jsxs)(o.Er, { children: ['Vul de ', (0, c.jsx)(o.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(o.Er, { children: [(0, c.jsxs)(o.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(o.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(o.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(o.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && g.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(p.p, { level: n, suffix: r && (0, c.jsx)(u.D, { state: r }), children: e.title }), (0, c.jsx)(o.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => a, Wu: () => i, Zp: () => l });
   var o = t(46447),
    r = t(13526),
    s = t(86070);
   const a = ({ background: e, children: n, className: t, ...o }) => (0, s.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, t), ...o, children: n }),
    i = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: i, children: l }) => {
     const c = (e) => ('article' === a ? (0, s.jsx)('article', { ...e }) : 'section' === a ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      d = (0, s.jsx)(c, { className: (0, r.A)('cardgroup__card', i && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(o.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
