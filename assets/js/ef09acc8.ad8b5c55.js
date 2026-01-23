'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [51626],
 {
  33062(e, n, o) {
   o.d(n, { bo: () => t, KF: () => p, mJ: () => v, VZ: () => D, cR: () => w, Pv: () => j, qZ: () => i, kD: () => f, B2: () => u, Pc: () => a, f4: () => d, GT: () => x, fX: () => r, eQ: () => k, B_: () => b, o_: () => h, Rc: () => N });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    t = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    d = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return m(c(n));
    },
    u = (e, n) => v(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: o }) => '' !== o && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => m(c(e.projects.flatMap((e) => g(e)))),
    j = (e) => {
     const n = g(e),
      o = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: o }) => '' !== o && e.includes(n))
       .map(({ name: s, id: t, value: r }) => {
        const i = /^(.+) URL/.exec(s)[1],
         d = 'Storybook' === i ? `${o} (${n}) in Storybook van ${e.title}` : `${o} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: s, id: t, value: r, description: d };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    h = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((o) => ('object' == typeof e[o] && null !== e[o] ? f(e[o], [...n, o]) : []));
   }
   function x(e) {
    const n = new Map();
    function o(e) {
     return n.has(e) || n.set(e, h(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || o(e).localeCompare(o(n)));
   }
   function N(e) {
    const n = {};
    for (const o of e) {
     let e = n;
     for (const n of o) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
   const w = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  38863(e, n, o) {
   o.r(n), o.d(n, { assets: () => l, contentTitle: () => a, default: () => p, frontMatter: () => d, metadata: () => s, toc: () => c });
   const s = JSON.parse('{"id":"handboek/developer/node","title":"Werken met Node.js \xb7 Developer \xb7 Handboek","description":"Werken met Node.js","source":"@site/docs/handboek/developer/16-node.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/node","permalink":"/handboek/developer/node","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/16-node.mdx","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Werken met Node.js \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Werken met Node.js","pagination_label":"Werken met Node.js","description":"Werken met Node.js","keywords":["developer","node","node.js","nodejs","nvm","versies"]},"sidebar":"handboek","previous":{"title":"Componenten testen","permalink":"/handboek/developer/component-testen"},"next":{"title":"Werken met pnpm","permalink":"/handboek/developer/pnpm"}}');
   var t = o(86070),
    r = o(85248),
    i = o(33062);
   const d = { title: 'Werken met Node.js \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Werken met Node.js', pagination_label: 'Werken met Node.js', description: 'Werken met Node.js', keywords: ['developer', 'node', 'node.js', 'nodejs', 'nvm', 'versies'] },
    a = 'Werken met Node.js',
    l = {},
    c = [
     { value: 'Huidige versie: Node.js getMinimumNodeVersion()', id: 'huidige-versie', level: 2 },
     { value: 'De juiste Node.js-versie installeren en gebruiken', id: 'de-juiste-nodejs-versie-installeren-en-gebruiken', level: 2 },
     { value: 'Upgraden naar een nieuwe versie', id: 'upgraden-naar-een-nieuwe-versie', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'werken-met-nodejs', children: 'Werken met Node.js' }) }), '\n', (0, t.jsx)(n.p, { children: 'Node.js is de JavaScript-runtime voor alles rondom NL Design System: build tooling, component libraries en scripts. Hiermee voer je JavaScript uit buiten de browser. Het vormt de basis van de meeste frontend-ecosystemen.' }), '\n', (0, t.jsxs)(n.h2, { id: 'huidige-versie', children: ['Huidige versie: Node.js ', (0, i.VZ)()] }), '\n', (0, t.jsx)(n.p, { children: 'Voor stabiliteit, veiligheid en voorspelbaarheid gebruikt NL Design System LTS-versies (long-term support) van Node.js. Deze versies ontvangen langere tijd security- en bugfix-updates en hebben betere ondersteuning van tooling en dependencies.' }), '\n', (0, t.jsxs)(n.p, { children: ['Op de ', (0, t.jsx)(n.a, { href: 'https://nodejs.org/', children: 'website van Node.js' }), ' vind je de meest recente LTS-versie en de ', (0, t.jsx)(n.a, { href: 'https://nodejs.org/en/about/previous-releases', children: 'ondersteuningsduur' }), '. Ondersteunen platforms als GitHub of ', (0, t.jsx)(n.a, { href: 'https://vercel.com/docs/functions/runtimes/node-js/node-js-versions', children: 'Vercel' }), ' een nieuwe versie nog niet? We raden dan aan te wachten met upgraden. De ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.nvmrc', children: 'example-repository toont welke Node.js-versie' }), ' NL Design System aanbeveelt.'] }), '\n', (0, t.jsx)(n.h2, { id: 'de-juiste-nodejs-versie-installeren-en-gebruiken', children: 'De juiste Node.js-versie installeren en gebruiken' }), '\n', (0, t.jsxs)(n.p, { children: ['In plaats van Node.js rechtstreeks op jouw machine te installeren, raden we aan om ', (0, t.jsx)(n.code, { children: 'nvm' }), ' (Node Version Manager) te gebruiken. Dit stelt je in staat om makkelijk per project een specifieke versie te gebruiken.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Sla de gewenste versie op in ', (0, t.jsx)(n.code, { children: '.nvmrc' }), ' en voer ', (0, t.jsx)(n.code, { children: 'nvm use' }), ' uit. Op de ', (0, t.jsx)(n.a, { href: 'https://nvm.sh/', children: 'website van nvm' }), ' lees je hoe je dit installeert en gebruikt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['De ondersteunde versierange staat in ', (0, t.jsx)(n.code, { children: 'package.json' }), ' onder ', (0, t.jsx)(n.code, { children: 'engines.node' }), '. Doordat we ', (0, t.jsx)(n.code, { children: 'engine-strict=true' }), ' in ', (0, t.jsx)(n.code, { children: '.npmrc' }), ' hebben geconfigureerd, krijg je een foutmelding als je een andere versie gebruikt. Dit doen we om te voorkomen dat een oudere Node.js-versie wordt gebruikt waarmee niet wordt getest en mogelijk problemen zijn. De versierange staat meestal \xe9\xe9n nieuwere versie van Node.js toe, om mogelijk te maken dat developers op eigen risico een recentere versie van Node.js gebruiken.'] }), '\n', (0, t.jsx)(n.h2, { id: 'upgraden-naar-een-nieuwe-versie', children: 'Upgraden naar een nieuwe versie' }), '\n', (0, t.jsx)(n.p, { children: 'De Node.js-versie staat ingesteld op de meerdere plekken in de code. We proberen de instellingen zo veel mogelijk centraal vast te leggen om upgrades makkelijk te maken. Pas de volgende bestanden aan om de Node.js versie te upgraden:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: '.nvmrc' }) }), '\n', (0, t.jsxs)(n.li, { children: ['GitHub Actions: via ', (0, t.jsx)(n.code, { children: 'actions/setup-node' }), ' gebruiken GitHub Action workflows de versie uit ', (0, t.jsx)(n.code, { children: '.nvmrc' }), '. Sommige actions hanteren een eigen versie; lees hiervoor de documentatie van de action.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'package.json' }), ': in het ', (0, t.jsx)(n.code, { children: 'engines.node' }), '-veld specificeer je de ondersteunde versie-range.'] }), '\n', (0, t.jsxs)(n.li, { children: ['De ', (0, t.jsx)(n.code, { children: '@types/node' }), ' dependency is afgestemd op de Node.js middels de major versie. Bijvoorbeeld: voor Node.js 24 heeft ', (0, t.jsx)(n.code, { children: '@types/node' }), ' ook versie ', (0, t.jsx)(n.code, { children: '24.x' }), '. (Om te voorkomen dat deze automatisch worden ge\xfcpgradet, worden ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.github/dependabot.yml', children: 'dependabot' }), ' en ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.ncurc.major.cjs', children: 'npm-check-updates' }), ' geconfigureerd deze dependency te negeren.)'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'Dockerfile' }), 's: als je project Docker gebruikt, wordt in de Dockerfile gespecificeerd welke Node.js-versie wordt gebruikt aan de hand van de tag van de base image. Kies een tag die overeenkomt, bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'node:24' }), ' of ', (0, t.jsx)(n.code, { children: 'node:24-alpine' }), '.'] }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  85248(e, n, o) {
   o.d(n, { R: () => i, x: () => d });
   var s = o(30758);
   const t = {},
    r = s.createContext(t);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
