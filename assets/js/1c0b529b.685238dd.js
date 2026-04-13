'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44125],
 {
  1292(e, n, t) {
   t.d(n, { r: () => p });
   var o = t(29181),
    i = t(74172),
    r = t(15089),
    a = t(28377),
    s = t(33648),
    l = t(83386),
    c = t(86070);
   const d = { figma: (0, c.jsx)(i.A, {}), github: (0, c.jsx)(r.A, {}), npm: (0, c.jsx)(a.A, {}), storybook: (0, c.jsx)(s.A, {}) },
    p = ({ brand: e }) => (0, c.jsx)(o.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => i, KF: () => m, mJ: () => g, VZ: () => N, cR: () => A, Pv: () => k, qZ: () => a, kD: () => b, B2: () => u, Pc: () => l, f4: () => s, GT: () => j, fX: () => r, eQ: () => x, B_: () => v, o_: () => f, Rc: () => _ });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return p(d(n));
    },
    u = (e, n) => g(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => p(d(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: o, id: i, value: r }) => {
        const a = /^(.+) URL/.exec(o)[1],
         s = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: o, id: i, value: r, description: s };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    f = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function j(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
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
  37131(e, n, t) {
   t.d(n, { VK: () => k, $9: () => v, mu: () => f, Fc: () => x, K_: () => b });
   var o = t(29181),
    i = t(13526),
    r = t(1292),
    a = t(90495),
    s = t(54565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
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
   var p = t(67970),
    m = t(72642),
    u = t(58876),
    h = t(33062);
   const g = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      r = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(o.If, { sections: r.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, h.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: o }) => (0, c.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(o) }, o)) }), (0, c.jsx)(o.fz, { children: (0, c.jsxs)(o.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
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
            i = t?.value,
            s = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(a.Wu, {
              children: [
               (0, c.jsx)(o.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(o.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(o.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || s.length > 0) && (0, c.jsx)(o.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(o.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, c.jsx)(c.Fragment, { children: s.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, c.jsx)(o.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(o.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(o.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(o.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(o.Xy, { children: [i ? (0, c.jsxs)(o.Er, { children: ['Vul de ', (0, c.jsx)(o.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(o.Er, { children: [(0, c.jsxs)(o.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(o.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(o.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(o.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && h.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m.p, { level: n, suffix: i && (0, c.jsx)(p.D, { state: i }), children: e.title }), (0, c.jsx)(o.fz, { lead: !0, children: t })] });
    },
    b = ({ component: e }) => {
     const n = (e && g[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(o.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(o.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  37815(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, component: () => h, contentTitle: () => c, default: () => f, description: () => m, frontMatter: () => l, issueNumber: () => u, metadata: () => o, title: () => p, toc: () => g }));
   const o = JSON.parse('{"id":"componenten/checkbox/index","title":"Checkbox","description":"Invoerveld voor het kiezen van een optie uit een groep van opties, of om te kiezen tussen \\"wel\\" of \\"niet\\".","source":"@site/docs/componenten/checkbox/index.mdx","sourceDirName":"componenten/checkbox","slug":"/checkbox","permalink":"/checkbox","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/checkbox/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Checkbox","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Checkbox","pagination_label":"Checkbox","description":"Invoerveld voor het kiezen van een optie uit een groep van opties, of om te kiezen tussen \\"wel\\" of \\"niet\\".","slug":"/checkbox","keywords":["aankruisvakje","aankruisen","aanvinken","afvinken","aria-disabled","aria-checked","aria-invalid","aria-required","check","checked","check box","checkbox","checkboxes","checkbox button","form control","form","formulier","indeterminate","invoerveld","kruis","kruisje","meerkeuze","niet","optie","option","optional","optioneel","option box","required","select","selecteren","selectievakje","selection box","uncheck","unchecked","verplicht","vink","vinkje","wel","X mark"]},"sidebar":"componenten","previous":{"title":"Case Card","permalink":"/case-card"},"next":{"title":"Checkbox Group","permalink":"/checkbox-group"}}');
   var i = t(86070),
    r = t(18439),
    a = t(64792),
    s = t(37131);
   const l = { title: 'Checkbox', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Checkbox', pagination_label: 'Checkbox', description: 'Invoerveld voor het kiezen van een optie uit een groep van opties, of om te kiezen tussen "wel" of "niet".', slug: '/checkbox', keywords: ['aankruisvakje', 'aankruisen', 'aanvinken', 'afvinken', 'aria-disabled', 'aria-checked', 'aria-invalid', 'aria-required', 'check', 'checked', 'check box', 'checkbox', 'checkboxes', 'checkbox button', 'form control', 'form', 'formulier', 'indeterminate', 'invoerveld', 'kruis', 'kruisje', 'meerkeuze', 'niet', 'optie', 'option', 'optional', 'optioneel', 'option box', 'required', 'select', 'selecteren', 'selectievakje', 'selection box', 'uncheck', 'unchecked', 'verplicht', 'vink', 'vinkje', 'wel', 'X mark'] },
    c = void 0,
    d = {},
    p = 'Checkbox',
    m = 'Invoerveld voor het kiezen van een optie uit een groep van opties, of om te kiezen tussen "wel" of "niet".',
    u = 64,
    h = a.find((e) => e.number === u),
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function k(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(s.Fc, { component: h, headingLevel: 1, description: m }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(s.VK, { component: h, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(s.mu, { component: h, headingLevel: 3 }), '\n', (0, i.jsx)(s.K_, { component: h }), '\n', (0, i.jsx)(s.$9, { component: h, headingLevel: 2 })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
  },
  54565(e, n, t) {
   t.d(n, { c: () => i });
   var o = t(30758);
   function i() {
    const [e, n] = (0, o.useState)();
    return ((0, o.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => s });
   var o = t(46447),
    i = t(13526),
    r = t(33062),
    a = t(86070);
   const s = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, a.jsx)(o.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var o = t(13526),
    i = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...a }) => (0, i.jsxs)('hgroup', { className: (0, o.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  90495(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => a, Wu: () => s, Zp: () => l });
   var o = t(46447),
    i = t(13526),
    r = t(86070);
   const a = ({ background: e, children: n, className: t, ...o }) => (0, r.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...o, children: n }),
    s = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: s, children: l }) => {
     const c = (e) => ('article' === a ? (0, r.jsx)('article', { ...e }) : 'section' === a ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, i.A)('cardgroup__card', s && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, r.jsx)(o.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, r.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
