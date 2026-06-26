'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65429],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  26655(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => a, Zp: () => m });
   var i = t(46447),
    r = t(13526),
    s = t(86070);
   const o = ({ background: e, children: n, className: t, ...i }) => (0, s.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    m = ({ href: e, appearance: n, className: t, component: o = 'div', background: a, children: m }) => {
     const d = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      l = (0, s.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', a && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: m });
     return e ? (0, s.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: l }) : l;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, s.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  53538(e, n, t) {
   t.d(n, { F: () => o, N: () => a });
   var i = t(13526),
    r = t(76097),
    s = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: i, ...o } = n;
     let a = t || i;
     const m = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === m.origin ? (m.pathname.endsWith('/') || (0, r.QQ)(m.pathname) || (m.pathname = `${m.pathname}/`), (a = m.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, s.jsx)(o, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  75344(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => h, frontMatter: () => d, metadata: () => i, toc: () => u }));
   const i = JSON.parse('{"id":"community/community-sprints/index","title":"Community Sprints","description":"Uitleg over de NL Design System Community Sprints","source":"@site/docs/community/community-sprints/index.mdx","sourceDirName":"community/community-sprints","slug":"/community/community-sprints/","permalink":"/community/community-sprints/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Community Sprints","hide_title":true,"hide_table_of_contents":false,"navigation_order":3,"sidebar_label":"Community Sprints","pagination_label":"Community Sprints","description":"Uitleg over de NL Design System Community Sprints","slug":"/community/community-sprints/","keywords":["nl design system","community sprints","rijkshuisstijl community","mijn services community","mijnservices community","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Wie doet mee?","permalink":"/community/wie-doet-mee"},"next":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"}}');
   var r = t(86070),
    s = t(18439),
    o = t(46447),
    a = t(26655),
    m = t(53538);
   const d = { title: 'Community Sprints', hide_title: !0, hide_table_of_contents: !1, navigation_order: 3, sidebar_label: 'Community Sprints', pagination_label: 'Community Sprints', description: 'Uitleg over de NL Design System Community Sprints', slug: '/community/community-sprints/', keywords: ['nl design system', 'community sprints', 'rijkshuisstijl community', 'mijn services community', 'mijnservices community', 'overheidsbrede portalen community'] },
    l = 'Over Community Sprints',
    c = {},
    u = [
     { value: 'Voordelen', id: 'voordelen', level: 2 },
     { value: 'Aanpak', id: 'aanpak', level: 2 },
     { value: 'Actieve Community Sprints', id: 'actieve-community-sprints', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'over-community-sprints', children: 'Over Community Sprints' }) }), '\n', (0, r.jsx)(n.p, { children: 'In onze community werken veel organisaties mee aan het doorontwikkelen, valideren en toepassen van NL Design System. Op sommige onderwerpen zit daarbij veel overlap. Daarom faciliteert het kernteam vanaf 2024 zogenaamde \u2018Community Sprints\u2019 waar verschillende teams samen kunnen werken aan hetzelfde onderwerp.' }), '\n', (0, r.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'We zorgen dat we zo min mogelijk dubbel werk doen.' }), '\n', (0, r.jsx)(n.li, { children: 'Het kernteam wordt niet overbelast met dezelfde vragen uit verschillende teams.' }), '\n', (0, r.jsx)(n.li, { children: 'Het is fijn om met een groter team van experts effectief samen te werken.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'aanpak', children: 'Aanpak' }), '\n', (0, r.jsxs)(n.p, { children: ['Een Community Sprint gaat over een bepaald onderwerp waar minimaal twee teams uit de community actief op werken. Zij hebben hun eigen sprint planning, maar stemmen deze met elkaar af om dubbel werk te voorkomen. Ze geven een demo in de ', (0, r.jsx)(n.a, { href: '/events/heartbeat/', children: 'heartbeat' }), ' waar ze kort delen wat ze hebben bereikt zodat ook de rest van de community op de hoogte blijft. Het kernteam faciliteert daarnaast af en toe een retrospective, sprint planning of een gefocuste Open Hour. Zo kunnen de teams steeds effectiever samenwerken en wordt het proces zo afgestemd dat meedoen aan een Community Sprint de eigen organisatiedoelen en sprintdoelen niet in de weg zit.'] }), '\n', (0, r.jsx)(n.p, { children: 'Een Community Sprint heeft altijd een onderwerp. Zodra de teams aan een ander onderwerp gaan werken waardoor er niet meer aan het minimaal aantal teams wordt voldaan, dan stoppen de Community Sprints voor dit onderwerp.' }), '\n', (0, r.jsx)(n.h2, { id: 'actieve-community-sprints', children: 'Actieve Community Sprints' }), '\n', (0, r.jsx)(n.p, { children: 'Lees meer over de actieve Community Sprints. Hieronder vind je links naar pagina\u2019s met informatie over het onderwerp van de sprint, het werk en de resultaten, voor wie het relevant is en hoe je kunt meedoen.' }), '\n', (0, r.jsxs)(a.AC, { children: [(0, r.jsx)(a.Zp, { component: 'section', appearance: 'medium', children: (0, r.jsxs)(a.Wu, { children: [(0, r.jsxs)('div', { children: [(0, r.jsx)(o._B, { children: 'Rijkshuisstijl Community' }), (0, r.jsx)(o.fz, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar componenten in verschillende frameworks welke voldoen aan de Rijkshuisstijl. Deze componenten zijn huisstijl-onafhankelijk en kunnen eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' })] }), (0, r.jsx)(o.fz, { children: (0, r.jsx)(m.N, { to: '/community/community-sprints/rijkshuisstijl-community', children: 'Lees verder over de Rijkshuisstijl Community' }) })] }) }), (0, r.jsx)(a.Zp, { component: 'section', appearance: 'medium', children: (0, r.jsxs)(a.Wu, { children: [(0, r.jsxs)('div', { children: [(0, r.jsx)(o._B, { children: 'MijnServices Community' }), (0, r.jsx)(o.fz, { children: 'In deze Community Sprint ontwikkelen we aan een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en Formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.' })] }), (0, r.jsx)(o.fz, { children: (0, r.jsx)(m.N, { to: '/community/community-sprints/mijn-services-community', children: 'Lees verder over de MijnServices Community' }) })] }) })] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  76097(e, n, t) {
   t.d(n, { bo: () => r, KF: () => u, mJ: () => v, VZ: () => S, cR: () => w, Pv: () => g, qZ: () => o, kD: () => f, QQ: () => x, B2: () => p, Pc: () => m, f4: () => a, GT: () => b, fX: () => s, eQ: () => k, B_: () => j, o_: () => y });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    m = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function l(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return c(l(n));
    },
    p = (e, n) => v(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(l(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => c(l(e.projects.flatMap((e) => h(e)))),
    g = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: r, value: s }) => {
        const o = /^(.+) URL/.exec(i)[1],
         a = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: r, value: s, description: a };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    y = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, y(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    S = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    _ = new Set(['ics', 'json', 'pdf']),
    x = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && _.has(t);
    };
  },
 },
]);
