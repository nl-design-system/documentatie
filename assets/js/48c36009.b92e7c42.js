'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39306],
 {
  1292(e, n, t) {
   t.d(n, { r: () => u });
   var i = t(29181),
    a = t(74172),
    r = t(15089),
    s = t(28377),
    o = t(33648),
    d = t(83386),
    l = t(86070);
   const c = { figma: (0, l.jsx)(a.A, {}), github: (0, l.jsx)(r.A, {}), npm: (0, l.jsx)(s.A, {}), storybook: (0, l.jsx)(o.A, {}) },
    u = ({ brand: e }) => (0, l.jsx)(i.In, { children: c[e] || (0, l.jsx)(d.A, {}) });
  },
  21909(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, component: () => g, contentTitle: () => l, default: () => v, description: () => m, frontMatter: () => d, issueNumber: () => p, metadata: () => i, title: () => u, toc: () => h }));
   const i = JSON.parse('{"id":"componenten/date-input/index","title":"Date Input","description":"Invoerveld om een datum in te vullen met de mogelijkheden die de browser biedt.","source":"@site/docs/componenten/date-input/index.mdx","sourceDirName":"componenten/date-input","slug":"/date-input","permalink":"/date-input","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/date-input/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Date Input","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Date Input","pagination_label":"Date Input","description":"Invoerveld om een datum in te vullen met de mogelijkheden die de browser biedt.","slug":"/date-input","keywords":["browser","built-in","date","datepicker","date field","date input","date picker","date selection","datum","datum invoer","datumveld","form","form control","formulier","formulierelement","ingebouwd","input","input field","invoerveld","invullen","kalender","native","text field"]},"sidebar":"componenten","previous":{"title":"Data Summary","permalink":"/data-summary"},"next":{"title":"Date Input Group","permalink":"/date-input-group"}}');
   var a = t(86070),
    r = t(18439),
    s = t(45189),
    o = t(80506);
   const d = { title: 'Date Input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Date Input', pagination_label: 'Date Input', description: 'Invoerveld om een datum in te vullen met de mogelijkheden die de browser biedt.', slug: '/date-input', keywords: ['browser', 'built-in', 'date', 'datepicker', 'date field', 'date input', 'date picker', 'date selection', 'datum', 'datum invoer', 'datumveld', 'form', 'form control', 'formulier', 'formulierelement', 'ingebouwd', 'input', 'input field', 'invoerveld', 'invullen', 'kalender', 'native', 'text field'] },
    l = void 0,
    c = {},
    u = 'Date Input',
    m = 'Invoerveld om een datum in te vullen met de mogelijkheden die de browser biedt.',
    p = 188,
    g = s.find((e) => e.number === p),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(o.Fc, { component: g, headingLevel: 1, description: m }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(o.VK, { component: g, headingLevel: 3 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(o.mu, { component: g, headingLevel: 3 }), '\n', (0, a.jsx)(o.$9, { component: g, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => a, KF: () => m, mJ: () => h, VZ: () => D, cR: () => A, Pv: () => f, qZ: () => s, kD: () => x, B2: () => p, Pc: () => d, f4: () => o, GT: () => k, fX: () => r, eQ: () => j, B_: () => b, o_: () => v, Rc: () => _ });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return u(c(n));
    },
    p = (e, n) => h(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => u(c(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: r }) => {
        const s = /^(.+) URL/.exec(i)[1],
         o = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: i, id: a, value: r, description: o };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    v = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
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
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => o });
   var i = t(46447),
    a = t(13526),
    r = t(33062),
    s = t(86070);
   const o = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, s.jsx)(i.KE, { className: (0, a.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var i = t(13526),
    a = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...s }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => h, $9: () => v, mu: () => f, Fc: () => b });
   var i = t(29181),
    a = t(13526),
    r = t(1292),
    s = t(90495),
    o = t(54565);
   function d(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var l = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(d, {
     children: () => {
      const i = t(83294).V6;
      return (0, l.jsx)(i, {
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
    m = t(72642),
    p = t(58876),
    g = t(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      r = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(i.If, { sections: r.map((t) => ({ className: (0, a.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, l.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(i) }, i)) }), (0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(s.AC, {
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
            a = t?.value,
            o = (0, g.Pv)(e),
            d = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => d.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(s.Wu, {
              children: [
               (0, l.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(i.fz, { children: [(0, l.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || o.length > 0) && (0, l.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(i.dk, {
                  links: u
                   .filter((e) => !!d.get(e.name))
                   .map((e) => {
                    const n = d.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, l.jsx)(l.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(i.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, l.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(i.Xy, { children: [a ? (0, l.jsxs)(i.Er, { children: ['Vul de ', (0, l.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(i.Er, { children: [(0, l.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && g.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(m.p, { level: n, suffix: a && (0, l.jsx)(u.D, { state: a }), children: e.title }), (0, l.jsx)(i.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => l, Fu: () => s, Wu: () => o, Zp: () => d });
   var i = t(46447),
    a = t(13526),
    r = t(86070);
   const s = ({ background: e, children: n, className: t, ...i }) => (0, r.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, t), ...i, children: n }),
    o = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: t, component: s = 'div', background: o, children: d }) => {
     const l = (e) => ('article' === s ? (0, r.jsx)('article', { ...e }) : 'section' === s ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(l, { className: (0, a.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: d });
     return e ? (0, r.jsx)(i.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, r.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
