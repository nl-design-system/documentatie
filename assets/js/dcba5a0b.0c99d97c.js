'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26179],
 {
  85248: (e, n, s) => {
   s.d(n, { R: () => o, x: () => t });
   var i = s(30758);
   const r = {},
    d = i.createContext(r);
   function o(e) {
    const n = i.useContext(d);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(d.Provider, { value: n }, e.children);
   }
  },
  95669: (e, n, s) => {
   s.r(n), s.d(n, { assets: () => a, contentTitle: () => t, default: () => j, frontMatter: () => o, metadata: () => i, toc: () => l });
   const i = JSON.parse('{"id":"handboek/developer/node","title":"Werken met Node.js \xb7 Developer \xb7 Handboek","description":"Werken met Node.js","source":"@site/docs/handboek/developer/16-node.md","sourceDirName":"handboek/developer","slug":"/handboek/developer/node","permalink":"/handboek/developer/node","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/16-node.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Werken met Node.js \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Werken met Node.js","pagination_label":"Werken met Node.js","description":"Werken met Node.js","keywords":["developer","node","node.js","nodejs","nvm","versies"]},"sidebar":"handboek","previous":{"title":"Componenten testen","permalink":"/handboek/developer/component-testen"},"next":{"title":"API conventie","permalink":"/handboek/developer/api-conventie"}}');
   var r = s(86070),
    d = s(85248);
   const o = { title: 'Werken met Node.js \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Werken met Node.js', pagination_label: 'Werken met Node.js', description: 'Werken met Node.js', keywords: ['developer', 'node', 'node.js', 'nodejs', 'nvm', 'versies'] },
    t = 'Werken met Node.js',
    a = {},
    l = [
     { value: 'Huidige versie: Node.js 24', id: 'huidige-versie', level: 2 },
     { value: 'De juiste Node.js-versie installeren en gebruiken', id: 'de-juiste-nodejs-versie-installeren-en-gebruiken', level: 2 },
     { value: 'Upgraden naar een nieuwe versie', id: 'upgraden-naar-een-nieuwe-versie', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, d.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'werken-met-nodejs', children: 'Werken met Node.js' }) }), '\n', (0, r.jsx)(n.p, { children: 'Node.js is de JavaScript-runtime voor alles rondom NL Design System: build tooling, component libraries en scripts. Hiermee voer je JavaScript uit buiten de browser. Het vormt de basis van de meeste frontend-ecosystemen.' }), '\n', (0, r.jsx)(n.h2, { id: 'huidige-versie', children: 'Huidige versie: Node.js 24' }), '\n', (0, r.jsx)(n.p, { children: 'Voor stabiliteit, veiligheid en voorspelbaarheid gebruikt NL Design System LTS-versies (long-term support) van Node.js. Deze versies ontvangen langere tijd security- en bugfix-updates en hebben betere ondersteuning van tooling en dependencies.' }), '\n', (0, r.jsxs)(n.p, { children: ['Op de ', (0, r.jsx)(n.a, { href: 'https://nodejs.org/', children: 'website van Node.js' }), ' vind je de meest recente LTS-versie en de ', (0, r.jsx)(n.a, { href: 'https://nodejs.org/en/about/previous-releases', children: 'ondersteuningsduur' }), '. Ondersteunen platforms als GitHub of ', (0, r.jsx)(n.a, { href: 'https://vercel.com/docs/functions/runtimes/node-js/node-js-versions', children: 'Vercel' }), ' een nieuwe versie nog niet? We raden dan aan te wachten met upgraden. De ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.nvmrc', children: 'example-repository toont welke Node.js-versie' }), ' NL Design System aanbeveelt.'] }), '\n', (0, r.jsx)(n.h2, { id: 'de-juiste-nodejs-versie-installeren-en-gebruiken', children: 'De juiste Node.js-versie installeren en gebruiken' }), '\n', (0, r.jsxs)(n.p, { children: ['In plaats van Node.js rechtstreeks op jouw machine te installeren, raden we aan om ', (0, r.jsx)(n.code, { children: 'nvm' }), ' (Node Version Manager) te gebruiken. Dit stelt je in staat om makkelijk per project een specifieke versie te gebruiken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Sla de gewenste versie op in ', (0, r.jsx)(n.code, { children: '.nvmrc' }), ' en voer ', (0, r.jsx)(n.code, { children: 'nvm use' }), ' uit. Op de ', (0, r.jsx)(n.a, { href: 'https://nvm.sh/', children: 'website van nvm' }), ' lees je hoe je dit installeert en gebruikt.'] }), '\n', (0, r.jsxs)(n.p, { children: ['De ondersteunde versierange staat in ', (0, r.jsx)(n.code, { children: 'package.json' }), ' onder ', (0, r.jsx)(n.code, { children: 'engines.node' }), '. Doordat we ', (0, r.jsx)(n.code, { children: 'engine-strict=true' }), ' in ', (0, r.jsx)(n.code, { children: '.npmrc' }), ' hebben geconfigureerd, krijg je een foutmelding als je een andere versie gebruikt. Dit doen we om te voorkomen dat een oudere Node.js-versie wordt gebruikt waarmee niet wordt getest en mogelijk problemen zijn. De versierange staat meestal \xe9\xe9n nieuwere versie van Node.js toe, om mogelijk te maken dat developers op eigen risico een recentere versie van Node.js gebruiken.'] }), '\n', (0, r.jsx)(n.h2, { id: 'upgraden-naar-een-nieuwe-versie', children: 'Upgraden naar een nieuwe versie' }), '\n', (0, r.jsx)(n.p, { children: 'De Node.js-versie staat ingesteld op de meerdere plekken in de code. We proberen de instellingen zo veel mogelijk centraal vast te leggen om upgrades makkelijk te maken. Pas de volgende bestanden aan om de Node.js versie te upgraden:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '.nvmrc' }) }), '\n', (0, r.jsxs)(n.li, { children: ['GitHub Actions: via ', (0, r.jsx)(n.code, { children: 'actions/setup-node' }), ' gebruiken GitHub Action workflows de versie uit ', (0, r.jsx)(n.code, { children: '.nvmrc' }), '. Sommige actions hanteren een eigen versie; lees hiervoor de documentatie van de action.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'package.json' }), ': in het ', (0, r.jsx)(n.code, { children: 'engines.node' }), '-veld specificeer je de ondersteunde versie-range.'] }), '\n', (0, r.jsxs)(n.li, { children: ['De ', (0, r.jsx)(n.code, { children: '@types/node' }), ' dependency is afgestemd op de Node.js middels de major versie. Bijvoorbeeld: voor Node.js 24 heeft ', (0, r.jsx)(n.code, { children: '@types/node' }), ' ook versie ', (0, r.jsx)(n.code, { children: '24.x' }), '. (Om te voorkomen dat deze automatisch worden ge\xfcpgradet, worden ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.github/dependabot.yml', children: 'dependabot' }), ' en ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.ncurc.major.cjs', children: 'npm-check-updates' }), ' geconfigureerd deze dependency te negeren.)'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'Dockerfile' }), 's: als je project Docker gebruikt, wordt in de Dockerfile gespecificeerd welke Node.js-versie wordt gebruikt aan de hand van de tag van de base image. Kies een tag die overeenkomt, bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'node:24' }), ' of ', (0, r.jsx)(n.code, { children: 'node:24-alpine' }), '.'] }), '\n'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, d.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
