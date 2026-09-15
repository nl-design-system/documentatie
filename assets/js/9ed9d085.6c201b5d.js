'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65429],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => o });
   var r = t(30758);
   const i = {},
    a = r.createContext(i);
   function s(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  21530(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => s, Wu: () => o, Zp: () => l });
   var r = t(46447),
    i = t(13526),
    a = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, a.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...r, children: n }),
    o = (e) => (0, a.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: s = 'div', background: o, children: l }) => {
     const c = (e) => ('article' === s ? (0, a.jsx)('article', { ...e }) : 'section' === s ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      m = (0, a.jsx)(c, { className: (0, i.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, a.jsx)(r.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: m }) : m;
    },
    c = ({ appearance: e = 'large', children: n, className: t }) => (0, a.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  32385(e, n, t) {
   t.d(n, { bo: () => i, KF: () => p, mJ: () => v, VZ: () => S, cR: () => w, Pv: () => g, qZ: () => s, kD: () => b, QQ: () => _, B2: () => u, Pc: () => l, f4: () => o, GT: () => k, fX: () => a, eQ: () => f, B_: () => j, o_: () => y });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function m(e) {
    return Array.from(new Set(e));
   }
   const d = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return d(m(n));
    },
    u = (e, n) => v(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return d(m(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => d(m(e.projects.flatMap((e) => h(e)))),
    g = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: a }) => {
        const s = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: a, description: o };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    y = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, y(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    S = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    O = new Set(['ics', 'json', 'pdf']),
    _ = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && O.has(t);
    };
  },
  37168(e, n, t) {
   t.d(n, { D: () => c });
   var r = t(15540),
    i = t(69967),
    a = t(30758),
    s = ['level', 'appearance', 'children', 'className'];
   function o(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   var l = function () {
     for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
     return n.filter(Boolean).join(' ');
    },
    c = (0, a.forwardRef)(function (e, n) {
     var t = e.level,
      c = e.appearance,
      m = void 0 === c ? 'level-'.concat(t) : c,
      d = e.children,
      p = e.className,
      u = (0, i.A)(e, s),
      h = 'h'.concat(t);
     return (0, a.createElement)(
      h,
      (function (e) {
       for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
         ? o(Object(t), !0).forEach(function (n) {
            (0, r.A)(e, n, t[n]);
           })
         : Object.getOwnPropertyDescriptors
           ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
           : o(Object(t)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
             });
       }
       return e;
      })({ className: l('nl-heading', 'nl-heading--'.concat(m), p), ref: n }, u),
      d,
     );
    });
   c.displayName = 'Heading';
  },
  56561(e, n, t) {
   t.d(n, { f: () => d });
   var r = t(15540),
    i = t(69967),
    a = t(86070),
    s = t(13526),
    o = t(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function m(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var d = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     c = e.purpose,
     d = (0, i.A)(e, l);
    return (0, a.jsx)('p', m(m({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), o), ref: n }, d), {}, { children: 'lead' === c ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   d.displayName = 'Paragraph';
  },
  59292(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(56561);
  },
  65872(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => v, frontMatter: () => m, metadata: () => r, toc: () => u }));
   const r = JSON.parse('{"id":"community/community-sprints/index","title":"Community Sprints","description":"Uitleg over de NL Design System Community Sprints","source":"@site/docs/community/community-sprints/index.mdx","sourceDirName":"community/community-sprints","slug":"/community/community-sprints/","permalink":"/community/community-sprints/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Community Sprints","hide_title":true,"hide_table_of_contents":false,"navigation_order":3,"sidebar_label":"Community Sprints","pagination_label":"Community Sprints","description":"Uitleg over de NL Design System Community Sprints","slug":"/community/community-sprints/","keywords":["nl design system","community sprints","rijkshuisstijl community","mijn services community","mijnservices community","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Community in cijfers","permalink":"/community/wie-doet-mee"},"next":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"}}');
   var i = t(86070),
    a = t(18439),
    s = t(85068),
    o = t(59292),
    l = t(21530),
    c = t(94309);
   const m = { title: 'Community Sprints', hide_title: !0, hide_table_of_contents: !1, navigation_order: 3, sidebar_label: 'Community Sprints', pagination_label: 'Community Sprints', description: 'Uitleg over de NL Design System Community Sprints', slug: '/community/community-sprints/', keywords: ['nl design system', 'community sprints', 'rijkshuisstijl community', 'mijn services community', 'mijnservices community', 'overheidsbrede portalen community'] },
    d = 'Over Community Sprints',
    p = {},
    u = [
     { value: 'Voordelen', id: 'voordelen', level: 2 },
     { value: 'Aanpak', id: 'aanpak', level: 2 },
     { value: 'Actieve Community Sprints', id: 'actieve-community-sprints', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'over-community-sprints', children: 'Over Community Sprints' }) }), '\n', (0, i.jsx)(n.p, { children: 'In onze community werken veel organisaties mee aan het doorontwikkelen, valideren en toepassen van NL Design System. Op sommige onderwerpen zit daarbij veel overlap. Daarom faciliteert het kernteam vanaf 2024 zogenaamde \u2018Community Sprints\u2019 waar verschillende teams samen kunnen werken aan hetzelfde onderwerp.' }), '\n', (0, i.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'We zorgen dat we zo min mogelijk dubbel werk doen.' }), '\n', (0, i.jsx)(n.li, { children: 'Het kernteam wordt niet overbelast met dezelfde vragen uit verschillende teams.' }), '\n', (0, i.jsx)(n.li, { children: 'Het is fijn om met een groter team van experts effectief samen te werken.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'aanpak', children: 'Aanpak' }), '\n', (0, i.jsxs)(n.p, { children: ['Een Community Sprint gaat over een bepaald onderwerp waar minimaal twee teams uit de community actief op werken. Zij hebben hun eigen sprint planning, maar stemmen deze met elkaar af om dubbel werk te voorkomen. Ze geven een demo in de ', (0, i.jsx)(n.a, { href: '/events/heartbeat/', children: 'heartbeat' }), ' waar ze kort delen wat ze hebben bereikt zodat ook de rest van de community op de hoogte blijft. Het kernteam faciliteert daarnaast af en toe een retrospective, sprint planning of een gefocuste Open Hour. Zo kunnen de teams steeds effectiever samenwerken en wordt het proces zo afgestemd dat meedoen aan een Community Sprint de eigen organisatiedoelen en sprintdoelen niet in de weg zit.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een Community Sprint heeft altijd een onderwerp. Zodra de teams aan een ander onderwerp gaan werken waardoor er niet meer aan het minimaal aantal teams wordt voldaan, dan stoppen de Community Sprints voor dit onderwerp.' }), '\n', (0, i.jsx)(n.h2, { id: 'actieve-community-sprints', children: 'Actieve Community Sprints' }), '\n', (0, i.jsx)(n.p, { children: 'Lees meer over de actieve Community Sprints. Hieronder vind je links naar pagina\u2019s met informatie over het onderwerp van de sprint, het werk en de resultaten, voor wie het relevant is en hoe je kunt meedoen.' }), '\n', (0, i.jsxs)(l.AC, { children: [(0, i.jsx)(l.Zp, { component: 'section', appearance: 'medium', children: (0, i.jsxs)(l.Wu, { children: [(0, i.jsxs)('div', { children: [(0, i.jsx)(s._B, { children: 'Rijkshuisstijl Community' }), (0, i.jsx)(o.f, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar componenten in verschillende frameworks welke voldoen aan de Rijkshuisstijl. Deze componenten zijn huisstijl-onafhankelijk en kunnen eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' })] }), (0, i.jsx)(o.f, { children: (0, i.jsx)(c.N, { to: '/community/community-sprints/rijkshuisstijl-community', children: 'Lees verder over de Rijkshuisstijl Community' }) })] }) }), (0, i.jsx)(l.Zp, { component: 'section', appearance: 'medium', children: (0, i.jsxs)(l.Wu, { children: [(0, i.jsxs)('div', { children: [(0, i.jsx)(s._B, { children: 'MijnServices Community' }), (0, i.jsx)(o.f, { children: 'In deze Community Sprint ontwikkelen we aan een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en Formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.' })] }), (0, i.jsx)(o.f, { children: (0, i.jsx)(c.N, { to: '/community/community-sprints/mijn-services-community', children: 'Lees verder over de MijnServices Community' }) })] }) })] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  85068(e, n, t) {
   t.d(n, { DZ: () => a, _B: () => s });
   var r = t(37168),
    i = t(86070);
   const a = (e) => (0, i.jsx)(r.D, { ...e }),
    s = (e) => (0, i.jsx)(r.D, { ...e, level: 3 });
  },
  94309(e, n, t) {
   t.d(n, { F: () => s, N: () => o });
   var r = t(13526),
    i = t(32385),
    a = t(86070);
   const s = ({ children: e, ...n }) => {
     const { to: t, href: r, ...s } = n;
     let o = t || r;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: o, ...s, children: e }));
    },
    o = ({ className: e, ...n }) => (0, a.jsx)(s, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
