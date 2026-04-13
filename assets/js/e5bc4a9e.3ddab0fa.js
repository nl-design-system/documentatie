'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [98603],
 {
  1292(e, n, r) {
   r.d(n, { r: () => p });
   var t = r(29181),
    a = r(74172),
    o = r(15089),
    i = r(28377),
    s = r(33648),
    l = r(83386),
    d = r(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(i.A, {}), storybook: (0, d.jsx)(s.A, {}) },
    p = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  22653(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, component: () => g, contentTitle: () => d, default: () => v, description: () => m, frontMatter: () => l, issueNumber: () => u, metadata: () => t, title: () => p, toc: () => h }));
   const t = JSON.parse('{"id":"componenten/separator/index","title":"Separator","description":"Markering van de plek waar de tekst op een nieuwe manier verdergaat, zoals een nieuwe sc\xe8ne of een ander onderwerp.","source":"@site/docs/componenten/separator/index.mdx","sourceDirName":"componenten/separator","slug":"/separator","permalink":"/separator","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/separator/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Separator","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Separator","pagination_label":"Separator","description":"Markering van de plek waar de tekst op een nieuwe manier verdergaat, zoals een nieuwe sc\xe8ne of een ander onderwerp.","slug":"/separator","keywords":["divider","horizontal rule","line break","page break","rule","section break","separator","splitter","vertical line","vertical rule"]},"sidebar":"componenten","previous":{"title":"Select Combobox","permalink":"/select-combobox"},"next":{"title":"Side Navigation","permalink":"/side-navigation"}}');
   var a = r(86070),
    o = r(18439),
    i = r(64792),
    s = r(37131);
   const l = { title: 'Separator', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Separator', pagination_label: 'Separator', description: 'Markering van de plek waar de tekst op een nieuwe manier verdergaat, zoals een nieuwe sc\xe8ne of een ander onderwerp.', slug: '/separator', keywords: ['divider', 'horizontal rule', 'line break', 'page break', 'rule', 'section break', 'separator', 'splitter', 'vertical line', 'vertical rule'] },
    d = void 0,
    c = {},
    p = 'Separator',
    m = 'Markering van de plek waar de tekst op een nieuwe manier verdergaat, zoals een nieuwe sc\xe8ne of een ander onderwerp.',
    u = 119,
    g = i.find((e) => e.number === u),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(s.Fc, { component: g, headingLevel: 1, description: m }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(s.VK, { component: g, headingLevel: 3 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(s.mu, { component: g, headingLevel: 3 }), '\n', (0, a.jsx)(s.K_, { component: g }), '\n', (0, a.jsx)(s.$9, { component: g, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
   }
  },
  33062(e, n, r) {
   r.d(n, { bo: () => a, KF: () => m, mJ: () => h, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => i, kD: () => x, B2: () => u, Pc: () => l, f4: () => s, GT: () => k, fX: () => o, eQ: () => b, B_: () => j, o_: () => v, Rc: () => _ });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return p(c(n));
    },
    u = (e, n) => h(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: r }) => '' !== r && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => p(c(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const n = g(e),
      r = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: r }) => '' !== r && e.includes(n))
       .map(({ name: t, id: a, value: o }) => {
        const i = /^(.+) URL/.exec(t)[1],
         s = 'Storybook' === i ? `${r} (${n}) in Storybook van ${e.title}` : `${r} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: t, id: a, value: o, description: s };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((r) => ('object' == typeof e[r] && null !== e[r] ? x(e[r], [...n, r]) : []));
   }
   function k(e) {
    const n = new Map();
    function r(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || r(e).localeCompare(r(n)));
   }
   function _(e) {
    const n = {};
    for (const r of e) {
     let e = n;
     for (const n of r) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const A = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, r) {
   r.d(n, { VK: () => f, $9: () => j, mu: () => v, Fc: () => b, K_: () => x });
   var t = r(29181),
    a = r(13526),
    o = r(1292),
    i = r(90495),
    s = r(54565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
   }
   var d = r(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const t = r(83294).V6;
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
   var p = r(67970),
    m = r(72642),
    u = r(58876),
    g = r(33062);
   const h = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => g.f4.includes(e.id)),
      o = r && g.f4.map((e) => r.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: o.map((r) => ({ className: (0, a.A)('definition-of-done', r && `definition-of-done--${(0, g.fX)(r.title)}`), headingLevel: n, expanded: !1, label: r ? `${r.title} - ${r.progress.value} van ${r.progress.max}` : '', body: r && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: r.tasks.map(({ checked: e, name: r, id: t }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: r, description: (0, g.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${r.url}?filterQuery=${e.title}`, children: [r.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && r.length
      ? (0, d.jsx)(i.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: r
          .sort((e, n) => {
           const r = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return r === t ? e.title.localeCompare(n.title) : r - t;
          })
          .map((e) => {
           const r = e.tasks.find(({ name: e }) => 'Naam' === e),
            a = r?.value,
            s = (0, g.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(i.Wu, {
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
                    return { children: n.desciption, icon: (0, d.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, d.jsx)(d.Fragment, { children: s.map(({ frameworkName: e, tasks: r }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(t.dk, { links: r.map((e) => ({ children: e.description, icon: (0, d.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
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
     const r = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = r?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [a ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: r }) => {
     const a = e && g.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: a && (0, d.jsx)(p.D, { state: a }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: r })] });
    },
    x = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, r) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), r < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, r) {
   r.d(n, { c: () => a });
   var t = r(30758);
   function a() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, r) {
   r.d(n, { D: () => s });
   var t = r(46447),
    a = r(13526),
    o = r(33062),
    i = r(86070);
   const s = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, i.jsx)(t.KE, { className: (0, a.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, r) {
   r.d(n, { p: () => o });
   var t = r(13526),
    a = r(86070);
   const o = ({ children: e, className: n, level: r = 1, suffix: o, ...i }) => (0, a.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...i, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  90495(e, n, r) {
   r.d(n, { AC: () => d, Fu: () => i, Wu: () => s, Zp: () => l });
   var t = r(46447),
    a = r(13526),
    o = r(86070);
   const i = ({ background: e, children: n, className: r, ...t }) => (0, o.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, r), ...t, children: n }),
    s = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: r, component: i = 'div', background: s, children: l }) => {
     const d = (e) => ('article' === i ? (0, o.jsx)('article', { ...e }) : 'section' === i ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, a.A)('cardgroup__card', s && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, r), children: l });
     return e ? (0, o.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: r }) => (0, o.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, r), children: n });
  },
 },
]);
