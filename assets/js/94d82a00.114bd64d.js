'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82059],
 {
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => s });
   var t = i(30758);
   const r = {},
    a = t.createContext(r);
   function o(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  48164(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => s, default: () => p, frontMatter: () => o, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"handboek/developer/infrastructuur/pnpm-audit","title":"Security audit voor npm","description":"Hoe voorkom je dat je security vulnerabilities installeert?","source":"@site/docs/handboek/developer/05-infrastructuur/07-pnpm-audit.md","sourceDirName":"handboek/developer/05-infrastructuur","slug":"/pnpm-audit","permalink":"/pnpm-audit","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-infrastructuur/07-pnpm-audit.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Security audit voor npm","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Security audit voor npm","pagination_label":"Security audit voor npm","description":"Hoe voorkom je dat je security vulnerabilities installeert?","slug":"/pnpm-audit","keywords":["GitHub Actions","Continuous Integration","npm"]},"sidebar":"handboek","previous":{"title":"Werken met pnpm","permalink":"/handboek/developer/pnpm/"},"next":{"title":"Publiceren van npm packages","permalink":"/handboek/developer/npm-publish/"}}');
   var r = i(86070),
    a = i(18439);
   const o = { title: 'Security audit voor npm', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Security audit voor npm', pagination_label: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', slug: '/pnpm-audit', keywords: ['GitHub Actions', 'Continuous Integration', 'npm'] },
    s = 'Security audit voor npm',
    d = {},
    l = [
     { value: 'Snel ingrijpen', id: 'snel-ingrijpen', level: 2 },
     { value: 'Betere versies installeren', id: 'betere-versies-installeren', level: 2 },
     { value: 'Risico accepteren', id: 'risico-accepteren', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'security-audit-voor-npm', children: 'Security audit voor npm' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Om te voorkomen dat hackers controle kunnen krijgen over de software releases van NL Design System, doen we altijd eerst een security scan met ', (0, r.jsx)(n.code, { children: 'pnpm audit' }), ' voordat ', (0, r.jsx)(n.code, { children: 'pnpm install' }), ' wordt uitgevoerd. In GitHub Actions doen we dat zo:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-yaml', children: '- name: Audit dependencies\n  run: pnpm audit --audit-level critical\n\n- name: Install dependencies\n  run: pnpm install --frozen-lockfile\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Op deze manier stopt de GitHub Action wanneer in de dependencies een npm package is gevonden, waarvan inmiddels bekend is dat het onveilig kan zijn.' }), '\n', (0, r.jsx)(n.admonition, { title: 'Goed om te weten', type: 'info', children: (0, r.jsxs)(n.p, { children: ['Op dit moment (april 2026) zijn er problemen met ', (0, r.jsx)(n.code, { children: 'pnpm audit' }), '; om precies te zijn, het onderliggende npm audit endpoint kan een foutmelding teruggeven ("This endpoint is being retired").\nHet is onduidelijk hoe lang dit gaat spelen.\nDeze melding krijg je bij gebruik van pnpm v10.\nMocht het voorkomen, dan kun je in de audit stap gebruik maken van pnpm v11.\nHiervoor moet in GitHub de ', (0, r.jsx)(n.code, { children: 'ENABLE_PNPM_AUDIT_V11' }), ' op ', (0, r.jsx)(n.code, { children: '1' }), ' worden gezet.\nEen beheerder kan dit op repository- of organisatieniveau voor je instellen.'] }) }), '\n', (0, r.jsx)(n.h2, { id: 'snel-ingrijpen', children: 'Snel ingrijpen' }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer een security vulnerability bekend wordt, zoals ', (0, r.jsx)(n.a, { href: 'https://snyk.io/blog/sha1-hulud-npm-supply-chain-incident/', children: 'SHA1-Hulud' }), ', wil je snel kunnen ingrijpen en voorkomen dat de kwaadaardige npm package wordt ge\xefnstalleerd op een plek waar gevoelige "environment secrets" uit kunnen lekken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Omdat het in de praktijk niet mogelijk is om snel genoeg alle branches van alle repositories te controleren, gebruiken we deze aanpak om automatisch elke ', (0, r.jsx)(n.code, { children: 'pnpm install' }), ' te voorkomen. Wanneer veiligheidsonderzoekers op een centrale plek een melding doen van een critical vulnerability, dan grijpt ', (0, r.jsx)(n.code, { children: 'pnpm audit' }), ' vanaf dat moment automatisch in.'] }), '\n', (0, r.jsx)(n.h2, { id: 'betere-versies-installeren', children: 'Betere versies installeren' }), '\n', (0, r.jsx)(n.p, { children: "Vaak is het probleem al opgelost in een nieuwe versie, en dan is de oplossing om een update te installeren. De makkelijkste manier is om met de command-line de volgende commando's uit te voeren." }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-shell', children: 'pnpm audit --fix\npnpm install --ignore-scripts\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het eerste commando past de configuratie van pnpm aan, om alleen bepaalde veiligere versies te gebruiken. Het tweede commando installeert de aangepaste dependencies, en past de "lockfile" aan.' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer of met deze wijzigingen de belangrijkste security vulnerabilities zijn opgelost:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-shell', children: 'pnpm audit --audit-level critical\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Commit de wijzigingen aan ', (0, r.jsx)(n.code, { children: 'pnpm-lock.yaml' }), ' en ', (0, r.jsx)(n.code, { children: 'pnpm-workspace.yaml' }), ' en maak een Pull Request met je wijzigingen.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op:' }), ' test goed of je project nog goed werkt na het installeren van de updates, op de voor jou gebruikelijke manier. De updates bevatten meestal niet alleen veiligheidsverbeteringen, maar ook algemene verbeteringen die zijn gedaan sinds je voor het laatst alle updates installeerde.'] }), '\n', (0, r.jsx)(n.h2, { id: 'risico-accepteren', children: 'Risico accepteren' }), '\n', (0, r.jsx)(n.p, { children: 'Wanneer je GitHub Action niet meer werkt door een critical security vulnerability dan kan het zijn dat je werk geblokkeerd wordt, als er nog geen betere versie beschikbaar is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als je zeker weet dat de security vulnerability niet op jouw project van toepassing is, dan kun je het risco accepteren en een specifieke security vulnerability (een zogenaamde "', (0, r.jsx)(n.a, { href: 'https://www.cve.org/About/Overview', children: (0, r.jsx)('span', { lang: 'en', children: 'CVE' }) }), '") negeren. Lees hiervoor de documentatie over de ', (0, r.jsxs)(n.a, { href: 'https://pnpm.io/settings#auditconfigignorecves', children: ["ignore CVE ID's van ", (0, r.jsx)(n.code, { children: 'pnpm' })] }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
