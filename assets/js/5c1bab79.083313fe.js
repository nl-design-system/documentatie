'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68879],
 {
  31713(e, n, t) {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => m, frontMatter: () => s, metadata: () => a, toc: () => l });
   const a = JSON.parse('{"id":"handboek/developer/pnpm","title":"Werken met pnpm \xb7 Developer \xb7 Handboek","description":"Werken met pnpm","source":"@site/docs/handboek/developer/17-pnpm.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/pnpm","permalink":"/handboek/developer/pnpm","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/17-pnpm.mdx","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"Werken met pnpm \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Werken met pnpm","pagination_label":"Werken met pnpm","description":"Werken met pnpm","keywords":["developer","pnpm"]},"sidebar":"handboek","previous":{"title":"Werken met Node.js","permalink":"/handboek/developer/node"},"next":{"title":"API conventie","permalink":"/handboek/developer/api-conventie"}}');
   var r = t(86070),
    o = t(85248),
    i = t(33062);
   const s = { title: 'Werken met pnpm \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Werken met pnpm', pagination_label: 'Werken met pnpm', description: 'Werken met pnpm', keywords: ['developer', 'pnpm'] },
    d = 'Werken met pnpm',
    p = {},
    l = [
     { value: 'De juiste pnpm-versie installeren en gebruiken', id: 'de-juiste-pnpm-versie-installeren-en-gebruiken', level: 2 },
     { value: 'pnpm upgraden', id: 'pnpm-upgraden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'werken-met-pnpm', children: 'Werken met pnpm' }) }), '\n', (0, r.jsx)(n.p, { children: 'pnpm is een snelle, effici\xebnte package manager voor Node.js.\nHet is een alternatief voor npm en yarn en staat bekend om zijn zuinige gebruik van schijfruimte en hoge performance.\nDaarnaast biedt pnpm een aantal beveiligingsfeatures waar we gebruik van maken.' }), '\n', (0, r.jsxs)(n.p, { children: ["Ben je npm gewend?\nDe meeste commando's zijn hetzelfde: je gebruikt bijvoorbeeld ", (0, r.jsx)(n.code, { children: 'pnpm install' }), ' in plaats van ', (0, r.jsx)(n.code, { children: 'npm install' }), '.\nBekijk de documentatie op de website van ', (0, r.jsx)(n.a, { href: 'https://pnpm.io/pnpm-cli', children: 'pnpm' }), ' voor uitgebreide informatie.'] }), '\n', (0, r.jsx)(n.h2, { id: 'de-juiste-pnpm-versie-installeren-en-gebruiken', children: 'De juiste pnpm-versie installeren en gebruiken' }), '\n', (0, r.jsxs)(n.p, { children: ['Tegenwoordig hoef je de package manager niet meer los te installeren, maar gebruik je ', (0, r.jsx)(n.a, { href: 'https://github.com/nodejs/corepack', children: 'Corepack' }), '.\nDit is in recente versies van ', (0, r.jsx)(n.a, { href: '/developer/node/', children: 'Node.js' }), ' inbegrepen.\nCorepack gebruikt automatisch de versie van pnpm die in ', (0, r.jsx)(n.code, { children: 'package.json' }), ' staat, zodat teams en CI dezelfde versie gebruiken.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: '# activeer Corepack\ncorepack enable\n\n# controleer de installatie\npnpm -v\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Daarnaast staat de minimumversie van pnpm in ', (0, r.jsx)(n.code, { children: 'package.json' }), ' onder ', (0, r.jsx)(n.code, { children: 'engines.pnpm' }), '.\nOp dit moment is de minimumversie van pnpm ', (0, i.cR)(), '.\nDeze versie bevat een aantal veiligheidsfeatures met betrekking tot ', (0, r.jsx)(n.a, { href: 'https://pnpm.io/settings#minimumreleaseage', children: 'minimum release age' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'pnpm-upgraden', children: 'pnpm upgraden' }), '\n', (0, r.jsxs)(n.p, { children: ['Ook voor upgraden gebruik je Corepack.\nGebruik altijd de ', (0, r.jsx)(n.code, { children: 'corepack' }), ' CLI om de versie in ', (0, r.jsx)(n.code, { children: 'package.json' }), ' te upgraden zodat de hash wordt toegevoegd aan de versie.\nDit is een beveiligingsmaatregel om te verifi\xebren dat exact dezelfde pnpm-binary wordt gebruikt op elke machine.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: '# upgraden naar laatste versie in major range\ncorepack up\n\n# of: upgraden naar specifieke versie\ncorepack use pnpm@10\n' }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => r, KF: () => m, mJ: () => k, VZ: () => D, cR: () => x, Pv: () => h, qZ: () => i, kD: () => j, B2: () => u, Pc: () => d, f4: () => s, GT: () => A, fX: () => o, eQ: () => f, B_: () => v, o_: () => b, Rc: () => _ });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    p = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function l(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => [...e].sort((e, n) => p.indexOf(e) - p.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return c(l(n));
    },
    u = (e, n) => k(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(l(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    k = (e) => c(l(e.projects.flatMap((e) => g(e)))),
    h = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: r, value: o }) => {
        const i = /^(.+) URL/.exec(a)[1],
         s = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: a, id: r, value: o, description: s };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    b = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
   function j(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? j(e[t], [...n, t]) : []));
   }
   function A(e) {
    const n = new Map();
    function t(e) {
     return n.has(e) || n.set(e, b(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function _(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
   const x = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  85248(e, n, t) {
   t.d(n, { R: () => i, x: () => s });
   var a = t(30758);
   const r = {},
    o = a.createContext(r);
   function i(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
