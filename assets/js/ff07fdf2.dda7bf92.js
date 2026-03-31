'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33710],
 {
  1292(e, n, t) {
   t.d(n, { r: () => m });
   var s = t(29181),
    i = t(74172),
    r = t(15089),
    o = t(28377),
    l = t(33648),
    a = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(s.In, { children: c[e] || (0, d.jsx)(a.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => i, KF: () => u, mJ: () => h, VZ: () => N, cR: () => A, Pv: () => j, qZ: () => o, kD: () => x, B2: () => p, Pc: () => a, f4: () => l, GT: () => _, fX: () => r, eQ: () => b, B_: () => v, o_: () => f, Rc: () => k });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return m(c(n));
    },
    p = (e, n) => h(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(c(e.projects.flatMap((e) => g(e)))),
    j = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: s, id: i, value: r }) => {
        const o = /^(.+) URL/.exec(s)[1],
         l = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: s, id: i, value: r, description: l };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    f = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function _(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
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
   const A = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  51019(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, component: () => g, contentTitle: () => d, default: () => f, description: () => u, frontMatter: () => a, issueNumber: () => p, metadata: () => s, title: () => m, toc: () => h }));
   const s = JSON.parse('{"id":"componenten/unordered-list/index","title":"Unordered List","description":"Opsomming waar de volgorde van items in de lijst niet van belang is.","source":"@site/docs/componenten/unordered-list/index.mdx","sourceDirName":"componenten/unordered-list","slug":"/unordered-list","permalink":"/unordered-list","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/unordered-list/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Unordered List","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Unordered List","pagination_label":"Unordered List","description":"Opsomming waar de volgorde van items in de lijst niet van belang is.","slug":"/unordered-list","keywords":["bolletjes lijst","bullet list","bullet points","bulleted list","bullets","items","itemslijst","lijst","lijst met volgorde","lijstje","lijsten","list","list items","nested list","numbered list","ongeordend","ongeordende lijst","ongesorteerde lijst","opsomming","opsommingslijst","order","ordered list","punten","punt","sequence","ul","unordered","unordered list","vertical list"]},"sidebar":"componenten","previous":{"title":"Toggletip","permalink":"/toggletip"},"next":{"title":"Video","permalink":"/video"}}');
   var i = t(86070),
    r = t(18439),
    o = t(45189),
    l = t(80506);
   const a = { title: 'Unordered List', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Unordered List', pagination_label: 'Unordered List', description: 'Opsomming waar de volgorde van items in de lijst niet van belang is.', slug: '/unordered-list', keywords: ['bolletjes lijst', 'bullet list', 'bullet points', 'bulleted list', 'bullets', 'items', 'itemslijst', 'lijst', 'lijst met volgorde', 'lijstje', 'lijsten', 'list', 'list items', 'nested list', 'numbered list', 'ongeordend', 'ongeordende lijst', 'ongesorteerde lijst', 'opsomming', 'opsommingslijst', 'order', 'ordered list', 'punten', 'punt', 'sequence', 'ul', 'unordered', 'unordered list', 'vertical list'] },
    d = void 0,
    c = {},
    m = 'Unordered List',
    u = 'Opsomming waar de volgorde van items in de lijst niet van belang is.',
    p = 116,
    g = o.find((e) => e.number === p),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function j(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(l.Fc, { component: g, headingLevel: 1, description: u }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(l.VK, { component: g, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(l.mu, { component: g, headingLevel: 3 }), '\n', (0, i.jsx)(l.$9, { component: g, headingLevel: 2 })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
  54565(e, n, t) {
   t.d(n, { c: () => i });
   var s = t(30758);
   function i() {
    const [e, n] = (0, s.useState)();
    return ((0, s.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => l });
   var s = t(46447),
    i = t(13526),
    r = t(33062),
    o = t(86070);
   const l = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, o.jsx)(s.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var s = t(13526),
    i = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...o }) => (0, i.jsxs)('hgroup', { className: (0, s.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => h, $9: () => f, mu: () => j, Fc: () => v });
   var s = t(29181),
    i = t(13526),
    r = t(1292),
    o = t(90495),
    l = t(54565);
   function a(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(a, {
     children: () => {
      const s = t(83294).V6;
      return (0, d.jsx)(s, {
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
    u = t(72642),
    p = t(58876),
    g = t(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      r = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(s.If, { sections: r.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: s }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(s) }, s)) }), (0, d.jsx)(s.fz, { children: (0, d.jsxs)(s.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(o.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            s = n.progress.max - n.progress.value;
           return t === s ? e.title.localeCompare(n.title) : t - s;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            l = (0, g.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => a.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(s.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(s.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(s.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || l.length > 0) && (0, d.jsx)(s.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(s.dk, {
                  links: m
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const n = a.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(s.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(s.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(s.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(s.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(s.Xy, { children: [i ? (0, d.jsxs)(s.Er, { children: ['Vul de ', (0, d.jsx)(s.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(s.Er, { children: [(0, d.jsxs)(s.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(s.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(s.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(s.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && g.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: i && (0, d.jsx)(m.D, { state: i }), children: e.title }), (0, d.jsx)(s.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => a });
   var s = t(46447),
    i = t(13526),
    r = t(86070);
   const o = ({ background: e, children: n, className: t, ...s }) => (0, r.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...s, children: n }),
    l = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: n, className: t, component: o = 'div', background: l, children: a }) => {
     const d = (e) => ('article' === o ? (0, r.jsx)('article', { ...e }) : 'section' === o ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, i.A)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: a });
     return e ? (0, r.jsx)(s.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, r.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
