'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14428],
 {
  16764(e, n, s) {
   s.d(n, { B: () => N });
   var t = s(96547),
    a = s(79889),
    i = s(76097),
    o = s(46447),
    l = s(68148),
    r = s(9016),
    d = s(91635),
    c = s(30734),
    h = s(4603),
    b = s(29181),
    p = s(86070);
   function u({ children: e, content: n, language: s }) {
    return 'clipboard' in navigator
     ? (0, p.jsxs)(o.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: s, plugins: [l.A, r.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, p.jsx)(b.In, { children: (0, p.jsx)(h.A, {}) })],
       })
     : null;
   }
   var k = s(43864),
    m = s(35193),
    g = s(82999),
    j = s(13088),
    A = s(91525),
    v = s(24214),
    f = s(92081),
    _ = s(1375),
    x = s(73563),
    S = s(23436),
    y = s(79532),
    T = s(30758);
   const O = { boxShadow: k.A, color: m.A, cursor: g.A, dimension: j.A, fontFamily: A.A, fontFamilies: A.A, fontSize: v.A, fontSizes: v.A, fontWeight: f.A, fontWeights: f.A, lineHeight: _.A, lineHeights: _.A, number: x.A, other: S.A, textDecoration: y.A },
    M = ({ type: e }) => {
     const n = Object.hasOwn(O, e) ? e : 'other';
     return (0, p.jsx)(b.In, { children: (0, T.createElement)(O[n]) });
    };
   var w = s(76223);
   function N({ tokens: e }) {
    const n = (0, i.kD)(e),
     s = (0, w.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     l = (0, i.GT)(n),
     r = l.map((e) => (0, i.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(s);
    return (0, p.jsxs)(p.Fragment, {
     children: [
      (0, p.jsxs)(o.XI, {
       children: [
        (0, p.jsx)(o.A0, { children: (0, p.jsxs)(o.Hj, { children: [(0, p.jsx)(o.M_, { children: 'name' }), (0, p.jsx)(o.M_, { children: 'type' })] }) }),
        (0, p.jsx)(o.BF, {
         children: l.map((n) => {
          const s = (0, i.o_)(n),
           l = (0, i.eQ)(e, n).$type;
          return (0, p.jsxs)(o.Hj, { children: [(0, p.jsx)(o.nA, { children: (0, p.jsx)(t.C, { children: (0, p.jsx)(o.kf, { children: s }) }) }), (0, p.jsx)(o.nA, { children: (0, p.jsxs)(a.K, { children: [(0, p.jsx)(M, { type: l }), ' ', l] }) })] }, s);
         }),
        }),
       ],
      }),
      (0, p.jsxs)(o.e2, { children: [(0, p.jsx)(u, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, p.jsx)(u, { content: r, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  76097(e, n, s) {
   s.d(n, { bo: () => a, KF: () => b, mJ: () => k, VZ: () => x, cR: () => _, Pv: () => m, qZ: () => o, kD: () => v, B2: () => p, Pc: () => r, f4: () => l, GT: () => f, fX: () => i, eQ: () => A, B_: () => j, o_: () => g });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    r = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    b = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(c(n));
    },
    p = (e, n) => k(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    k = (e) => h(c(e.projects.flatMap((e) => u(e)))),
    m = (e) => {
     const n = u(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: a, value: i }) => {
        const o = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === o ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: t, id: a, value: i, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    g = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    A = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? v(e[s], [...n, s]) : []));
   }
   function f(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, g(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
   }
   const _ = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  83127(e, n, s) {
   (s.r(n), s.d(n, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => r, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"handboek/huisstijl-vastleggen/basis-tokens/alle-basis-tokens","title":"Alle basis-tokens","description":"Een overzicht van alle beschikbare basis-tokens.","source":"@site/docs/handboek/huisstijl-vastleggen/basis-tokens/alle-basis-tokens.mdx","sourceDirName":"handboek/huisstijl-vastleggen/basis-tokens","slug":"/handboek/huisstijl/basis-tokens/alle-basis-tokens","permalink":"/handboek/huisstijl/basis-tokens/alle-basis-tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/basis-tokens/alle-basis-tokens.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Alle basis-tokens","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Alle basis-tokens","sidebar_position":1,"navigation_order":1,"pagination_label":"Alle basis-tokens","description":"Een overzicht van alle beschikbare basis-tokens.","slug":"/handboek/huisstijl/basis-tokens/alle-basis-tokens","keywords":["design system","design tokens","basis tokens","thema\'s"]},"sidebar":"handboek","previous":{"title":"Basis-tokens","permalink":"/handboek/huisstijl/basis-tokens"},"next":{"title":"Thema\'s","permalink":"/handboek/huisstijl/themas"}}');
   var a = s(86070),
    i = s(18439),
    o = s(92584),
    l = s(16764);
   const r = { title: 'Alle basis-tokens', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Alle basis-tokens', sidebar_position: 1, navigation_order: 1, pagination_label: 'Alle basis-tokens', description: 'Een overzicht van alle beschikbare basis-tokens.', slug: '/handboek/huisstijl/basis-tokens/alle-basis-tokens', keywords: ['design system', 'design tokens', 'basis tokens', "thema's"] },
    d = 'Alle basis-tokens',
    c = {},
    h = [
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'alle-basis-tokens', children: 'Alle basis-tokens' }) }), '\n', (0, a.jsx)(n.p, { children: 'Op deze pagina vind je een overzicht van alle beschikbare basis-tokens, inclusief de mogelijkheid om deze te kopi\xebren als JSON of CSS.' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: '/handboek/huisstijl/basis-tokens/', children: 'Meer informatie over basis-tokens' }) }), '\n', (0, a.jsx)(l.B, { tokens: o }), '\n', (0, a.jsx)(n.hr, {}), '\n', (0, a.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, a.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, a.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, a.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(b, { ...e }) }) : b(e);
   }
  },
 },
]);
