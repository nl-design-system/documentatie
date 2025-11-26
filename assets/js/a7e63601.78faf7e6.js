'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66927],
 {
  97619: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => s, default: () => p, frontMatter: () => a, metadata: () => o, toc: () => d });
   var t = i(52676),
    r = i(40139);
   const a = { title: 'Security audit voor npm', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Security audit voor npm', pagination_label: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', keywords: ['GitHub Actions', 'Continuous Integration', 'npm'], slug: '/pnpm-audit' },
    s = 'Security audit voor npm',
    o = { id: 'handboek/developer/pnpm-audit', title: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', source: '@site/docs/handboek/developer/pnpm-audit.md', sourceDirName: 'handboek/developer', slug: '/pnpm-audit', permalink: '/pnpm-audit', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/pnpm-audit.md', tags: [], version: 'current', frontMatter: { title: 'Security audit voor npm', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Security audit voor npm', pagination_label: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', keywords: ['GitHub Actions', 'Continuous Integration', 'npm'], slug: '/pnpm-audit' }, sidebar: 'handboek', previous: { title: 'GitHub', permalink: '/github' }, next: { title: 'Vercel', permalink: '/vercel' } },
    l = {},
    d = [
     { value: 'Snel ingrijpen', id: 'snel-ingrijpen', level: 2 },
     { value: 'Betere versies installeren', id: 'betere-versies-installeren', level: 2 },
     { value: 'Risico accepteren', id: 'risico-accepteren', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'security-audit-voor-npm', children: 'Security audit voor npm' }), '\n', (0, t.jsxs)(n.p, { children: ['Om te voorkomen dat hackers controle kunnen krijgen over de software releases van NL Design System, doen we altijd eerst een security scan met ', (0, t.jsx)(n.code, { children: 'pnpm audit' }), ' voordat ', (0, t.jsx)(n.code, { children: 'pnpm install' }), ' wordt uitgevoerd. In GitHub Actions doen we dat zo:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-yaml', children: '- name: Audit dependencies\n  run: pnpm audit --audit-level critical\n\n- name: Install dependencies\n  run: pnpm install --frozen-lockfile\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Op deze manier stopt de GitHub Action wanneer in de dependencies een npm package is gevonden, waarvan inmiddels bekend is dat het onveilig kan zijn.' }), '\n', (0, t.jsx)(n.h2, { id: 'snel-ingrijpen', children: 'Snel ingrijpen' }), '\n', (0, t.jsxs)(n.p, { children: ['Wanneer een security vulnerability bekend wordt, zoals ', (0, t.jsx)(n.a, { href: 'https://snyk.io/blog/sha1-hulud-npm-supply-chain-incident/', children: 'SHA1-Hulud' }), ', wil je snel kunnen ingrijpen en voorkomen dat de kwaadaardige npm package wordt ge\xefnstalleerd op een plek waar gevoelige "environment secrets" uit kunnen lekken.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Omdat het in de praktijk niet mogelijk is om snel genoeg alle branches van alle repositories te controleren, gebruiken we deze aanpak om automatisch elke ', (0, t.jsx)(n.code, { children: 'pnpm install' }), ' te voorkomen. Wanneer veiligheidsonderzoekers op een centrale plek een melding doen van een critical vulnerability, dan grijpt ', (0, t.jsx)(n.code, { children: 'pnpm audit' }), ' vanaf dat moment automatisch in.'] }), '\n', (0, t.jsx)(n.h2, { id: 'betere-versies-installeren', children: 'Betere versies installeren' }), '\n', (0, t.jsx)(n.p, { children: "Vaak is het probleem al opgelost in een nieuwe versie, en dan is de oplossing om een update te installeren. De makkelijkste manier is om met de command-line de volgende commando's uit te voeren." }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-shell', children: 'pnpm audit --fix\npnpm install --ignore-scripts\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Het eerste commando past de configuratie van pnpm aan, om alleen bepaalde veiligere versies te gebruiken. Het tweede commando installeert de aangepaste dependencies, en past de "lockfile" aan.' }), '\n', (0, t.jsx)(n.p, { children: 'Controleer of met deze wijzigingen de belangrijkste security vulnerabilities zijn opgelost:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-shell', children: 'pnpm audit --audit-level critical\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Commit de wijzigingen aan ', (0, t.jsx)(n.code, { children: 'pnpm-lock.yaml' }), ' en ', (0, t.jsx)(n.code, { children: 'pnpm-workspace.yaml' }), ' en maak een Pull Request met je wijzigingen.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op:' }), ' test goed of je project nog goed werkt na het installeren van de updates, op de voor jou gebruikelijke manier. De updates bevatten meestal niet alleen veiligheidsverbeteringen, maar ook algemene verbeteringen die zijn gedaan sinds je voor het laatst alle updates installeerde.'] }), '\n', (0, t.jsx)(n.h2, { id: 'risico-accepteren', children: 'Risico accepteren' }), '\n', (0, t.jsxs)(n.p, { children: ['Wanneer je GitHub Action niet meer werkt door een security vulnerability, er geen alternatieve versies beschikbaar zijn om op over te stappen, en je zeker weet dat de security vulnerability niet op jouw project van toepassing is, dan kun je het risco accepteren en de melding negeren. Lees hiervoor de documentatie over de ', (0, t.jsxs)(n.a, { href: 'https://pnpm.io/settings#overrides', children: [(0, t.jsx)(n.code, { children: 'overrides' }), ' van ', (0, t.jsx)(n.code, { children: 'pnpm audit' })] }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => s });
   var t = i(75271);
   const r = {},
    a = t.createContext(r);
   function s(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
