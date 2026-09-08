'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65429],
 {
  14277(e, n, t) {
   t.d(n, { D: () => c });
   var r = t(48171),
    i = t(41534),
    o = t(30758),
    a = ['level', 'appearance', 'children', 'className'];
   function s(e, n) {
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
    c = (0, o.forwardRef)(function (e, n) {
     var t = e.level,
      c = e.appearance,
      m = void 0 === c ? 'level-'.concat(t) : c,
      d = e.children,
      u = e.className,
      p = (0, i.A)(e, a),
      h = 'h'.concat(t);
     return (0, o.createElement)(
      h,
      (function (e) {
       for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
         ? s(Object(t), !0).forEach(function (n) {
            (0, r.A)(e, n, t[n]);
           })
         : Object.getOwnPropertyDescriptors
           ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
           : s(Object(t)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
             });
       }
       return e;
      })({ className: l('nl-heading', 'nl-heading--'.concat(m), u), ref: n }, p),
      d,
     );
    });
   c.displayName = 'Heading';
  },
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => s });
   var r = t(30758);
   const i = {},
    o = r.createContext(i);
   function a(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  21530(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => a, Wu: () => s, Zp: () => l });
   var r = t(46447),
    i = t(13526),
    o = t(86070);
   const a = ({ background: e, children: n, className: t, ...r }) => (0, o.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...r, children: n }),
    s = (e) => (0, o.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: s, children: l }) => {
     const c = (e) => ('article' === a ? (0, o.jsx)('article', { ...e }) : 'section' === a ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      m = (0, o.jsx)(c, { className: (0, i.A)('ma-cardgroup__card', s && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, o.jsx)(r.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: m }) : m;
    },
    c = ({ appearance: e = 'large', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  32385(e, n, t) {
   t.d(n, { bo: () => i, KF: () => u, mJ: () => y, VZ: () => S, cR: () => w, Pv: () => f, qZ: () => a, kD: () => b, QQ: () => _, B2: () => p, Pc: () => l, f4: () => s, GT: () => k, fX: () => o, eQ: () => j, B_: () => g, o_: () => v });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function m(e) {
    return Array.from(new Set(e));
   }
   const d = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return d(m(n));
    },
    p = (e, n) => y(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return d(m(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    y = (e) => d(m(e.projects.flatMap((e) => h(e)))),
    f = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: o }) => {
        const a = /^(.+) URL/.exec(r)[1],
         s = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: r, id: i, value: o, description: s };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    v = (e) => e.join('.'),
    g = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
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
  41534(e, n, t) {
   function r(e, n) {
    if (null == e) return {};
    var t,
     r,
     i = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var r in e)
       if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== n.indexOf(r)) continue;
        t[r] = e[r];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) ((t = o[r]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   t.d(n, { A: () => r });
  },
  48171(e, n, t) {
   function r(e) {
    return (
     (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     r(e)
    );
   }
   function i(e) {
    var n = (function (e, n) {
     if ('object' != r(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var i = t.call(e, n || 'default');
      if ('object' != r(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == r(n) ? n : n + '';
   }
   function o(e, n, t) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => o });
  },
  59292(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(71544);
  },
  65872(e, n, t) {
   (t.r(n), t.d(n, { assets: () => u, contentTitle: () => d, default: () => y, frontMatter: () => m, metadata: () => r, toc: () => p }));
   const r = JSON.parse('{"id":"community/community-sprints/index","title":"Community Sprints","description":"Uitleg over de NL Design System Community Sprints","source":"@site/docs/community/community-sprints/index.mdx","sourceDirName":"community/community-sprints","slug":"/community/community-sprints/","permalink":"/community/community-sprints/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Community Sprints","hide_title":true,"hide_table_of_contents":false,"navigation_order":3,"sidebar_label":"Community Sprints","pagination_label":"Community Sprints","description":"Uitleg over de NL Design System Community Sprints","slug":"/community/community-sprints/","keywords":["nl design system","community sprints","rijkshuisstijl community","mijn services community","mijnservices community","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Community in cijfers","permalink":"/community/wie-doet-mee"},"next":{"title":"Over MijnServices Community","permalink":"/community/community-sprints/mijn-services-community/"}}');
   var i = t(86070),
    o = t(18439),
    a = t(85068),
    s = t(59292),
    l = t(21530),
    c = t(94309);
   const m = { title: 'Community Sprints', hide_title: !0, hide_table_of_contents: !1, navigation_order: 3, sidebar_label: 'Community Sprints', pagination_label: 'Community Sprints', description: 'Uitleg over de NL Design System Community Sprints', slug: '/community/community-sprints/', keywords: ['nl design system', 'community sprints', 'rijkshuisstijl community', 'mijn services community', 'mijnservices community', 'overheidsbrede portalen community'] },
    d = 'Over Community Sprints',
    u = {},
    p = [
     { value: 'Voordelen', id: 'voordelen', level: 2 },
     { value: 'Aanpak', id: 'aanpak', level: 2 },
     { value: 'Actieve Community Sprints', id: 'actieve-community-sprints', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'over-community-sprints', children: 'Over Community Sprints' }) }), '\n', (0, i.jsx)(n.p, { children: 'In onze community werken veel organisaties mee aan het doorontwikkelen, valideren en toepassen van NL Design System. Op sommige onderwerpen zit daarbij veel overlap. Daarom faciliteert het kernteam vanaf 2024 zogenaamde \u2018Community Sprints\u2019 waar verschillende teams samen kunnen werken aan hetzelfde onderwerp.' }), '\n', (0, i.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'We zorgen dat we zo min mogelijk dubbel werk doen.' }), '\n', (0, i.jsx)(n.li, { children: 'Het kernteam wordt niet overbelast met dezelfde vragen uit verschillende teams.' }), '\n', (0, i.jsx)(n.li, { children: 'Het is fijn om met een groter team van experts effectief samen te werken.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'aanpak', children: 'Aanpak' }), '\n', (0, i.jsxs)(n.p, { children: ['Een Community Sprint gaat over een bepaald onderwerp waar minimaal twee teams uit de community actief op werken. Zij hebben hun eigen sprint planning, maar stemmen deze met elkaar af om dubbel werk te voorkomen. Ze geven een demo in de ', (0, i.jsx)(n.a, { href: '/events/heartbeat/', children: 'heartbeat' }), ' waar ze kort delen wat ze hebben bereikt zodat ook de rest van de community op de hoogte blijft. Het kernteam faciliteert daarnaast af en toe een retrospective, sprint planning of een gefocuste Open Hour. Zo kunnen de teams steeds effectiever samenwerken en wordt het proces zo afgestemd dat meedoen aan een Community Sprint de eigen organisatiedoelen en sprintdoelen niet in de weg zit.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een Community Sprint heeft altijd een onderwerp. Zodra de teams aan een ander onderwerp gaan werken waardoor er niet meer aan het minimaal aantal teams wordt voldaan, dan stoppen de Community Sprints voor dit onderwerp.' }), '\n', (0, i.jsx)(n.h2, { id: 'actieve-community-sprints', children: 'Actieve Community Sprints' }), '\n', (0, i.jsx)(n.p, { children: 'Lees meer over de actieve Community Sprints. Hieronder vind je links naar pagina\u2019s met informatie over het onderwerp van de sprint, het werk en de resultaten, voor wie het relevant is en hoe je kunt meedoen.' }), '\n', (0, i.jsxs)(l.AC, { children: [(0, i.jsx)(l.Zp, { component: 'section', appearance: 'medium', children: (0, i.jsxs)(l.Wu, { children: [(0, i.jsxs)('div', { children: [(0, i.jsx)(a._B, { children: 'Rijkshuisstijl Community' }), (0, i.jsx)(s.f, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar componenten in verschillende frameworks welke voldoen aan de Rijkshuisstijl. Deze componenten zijn huisstijl-onafhankelijk en kunnen eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' })] }), (0, i.jsx)(s.f, { children: (0, i.jsx)(c.N, { to: '/community/community-sprints/rijkshuisstijl-community', children: 'Lees verder over de Rijkshuisstijl Community' }) })] }) }), (0, i.jsx)(l.Zp, { component: 'section', appearance: 'medium', children: (0, i.jsxs)(l.Wu, { children: [(0, i.jsxs)('div', { children: [(0, i.jsx)(a._B, { children: 'MijnServices Community' }), (0, i.jsx)(s.f, { children: 'In deze Community Sprint ontwikkelen we aan een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en Formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.' })] }), (0, i.jsx)(s.f, { children: (0, i.jsx)(c.N, { to: '/community/community-sprints/mijn-services-community', children: 'Lees verder over de MijnServices Community' }) })] }) })] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  71544(e, n, t) {
   t.d(n, { f: () => d });
   var r = t(48171),
    i = t(41534),
    o = t(86070),
    a = t(13526),
    s = t(30758),
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
   var d = (0, s.forwardRef)(function (e, n) {
    var t = e.children,
     s = e.className,
     c = e.purpose,
     d = (0, i.A)(e, l);
    return (0, o.jsx)('p', m(m({ className: (0, a.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: n }, d), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   d.displayName = 'Paragraph';
  },
  85068(e, n, t) {
   t.d(n, { DZ: () => o, _B: () => a });
   var r = t(14277),
    i = t(86070);
   const o = (e) => (0, i.jsx)(r.D, { ...e }),
    a = (e) => (0, i.jsx)(r.D, { ...e, level: 3 });
  },
  94309(e, n, t) {
   t.d(n, { F: () => a, N: () => s });
   var r = t(13526),
    i = t(32385),
    o = t(86070);
   const a = ({ children: e, ...n }) => {
     const { to: t, href: r, ...a } = n;
     let s = t || r;
     const l = new URL(s, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (s = l.toString().replace('https://nldesignsystem.nl', ''))) : ((a.target = '_blank'), (a.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: s, ...a, children: e }));
    },
    s = ({ className: e, ...n }) => (0, o.jsx)(a, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
