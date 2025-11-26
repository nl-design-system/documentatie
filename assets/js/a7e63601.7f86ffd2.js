'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66927],
 {
  97619: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => p, frontMatter: () => o, metadata: () => s, toc: () => l });
   var t = i(52676),
    r = i(40139);
   const o = { title: 'Security audit voor npm', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Security audit voor npm', pagination_label: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', keywords: ['GitHub Actions', 'Continuous Integration', 'npm'], slug: '/pnpm-audit' },
    a = 'Security audit voor npm',
    s = { id: 'handboek/developer/pnpm-audit', title: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', source: '@site/docs/handboek/developer/pnpm-audit.md', sourceDirName: 'handboek/developer', slug: '/pnpm-audit', permalink: '/pnpm-audit', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/pnpm-audit.md', tags: [], version: 'current', frontMatter: { title: 'Security audit voor npm', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Security audit voor npm', pagination_label: 'Security audit voor npm', description: 'Hoe voorkom je dat je security vulnerabilities installeert?', keywords: ['GitHub Actions', 'Continuous Integration', 'npm'], slug: '/pnpm-audit' }, sidebar: 'handboek', previous: { title: 'GitHub', permalink: '/github' }, next: { title: 'Vercel', permalink: '/vercel' } },
    d = {},
    l = [
     { value: 'Snel ingrijpen', id: 'snel-ingrijpen', level: 2 },
     { value: 'Andere versie installeren', id: 'andere-versie-installeren', level: 2 },
     { value: 'Risico accepteren', id: 'risico-accepteren', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'security-audit-voor-npm', children: 'Security audit voor npm' }), '\n', (0, t.jsxs)(n.p, { children: ['Om te voorkomen dat hackers controle kunnen krijgen over de software releases van NL Design System, doen we altijd eerst een security scan met ', (0, t.jsx)(n.code, { children: 'pnpm audit' }), ' voordat ', (0, t.jsx)(n.code, { children: 'pnpm install' }), ' wordt uitgevoerd. In GitHub Actions doen we dat zo:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-yaml', children: '- name: Audit dependencies\n  run: pnpm audit --audit-level critical\n\n- name: Install dependencies\n  run: pnpm install --frozen-lockfile\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Op deze manier stopt de GitHub Action wanneer in de dependencies een npm package is gevonden, waarvan inmiddels bekend is dat het onveilig kan zijn.' }), '\n', (0, t.jsx)(n.h2, { id: 'snel-ingrijpen', children: 'Snel ingrijpen' }), '\n', (0, t.jsxs)(n.p, { children: ['Wanneer een security vulnerability bekend wordt, zoals ', (0, t.jsx)(n.a, { href: 'https://snyk.io/blog/sha1-hulud-npm-supply-chain-incident/', children: 'SHA1-Hulud' }), ', wil je snel kunnen ingrijpen en voorkomen dat de kwaadaardige npm package wordt ge\xefnstalleerd op een plek waar gevoelige "environment secrets" uit kunnen lekken.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Omdat het in de praktijk niet mogelijk is om snel genoeg alle branches van alle repositories te controleren, gebruiken we deze aanpak om automatisch elke ', (0, t.jsx)(n.code, { children: 'pnpm install' }), ' te voorkomen. Wanneer veiligheidsonderzoekers op een centrale plek een melding doen van een critical vulnerability, dan grijpt ', (0, t.jsx)(n.code, { children: 'pnpm audit' }), ' vanaf dat moment automatisch in.'] }), '\n', (0, t.jsx)(n.h2, { id: 'andere-versie-installeren', children: 'Andere versie installeren' }), '\n', (0, t.jsx)(n.p, { children: 'De beste oplossing is vaak om de versie met het veiligheidsprobleem te vervangen door een andere versie. Soms is het probleem opgelost in een nieuwe versie, en dan is de oplossing om een update te installeren.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kan ook zijn dat beheerders van die software nog bezig zijn het probleem op te lossen, en ze nog niet zeker weten of ze veilig een nieuwe versie kunnen uitbrengen. In dat geval kun je downgraden naar een oudere versie die nog wel veilig was.' }), '\n', (0, t.jsx)(n.h2, { id: 'risico-accepteren', children: 'Risico accepteren' }), '\n', (0, t.jsxs)(n.p, { children: ['Wanneer je GitHub Action niet meer werkt door een security vulnerability, er geen alternatieve versies beschikbaar zijn om op over te stappen, en je zeker weet dat de security vulnerability niet op jouw project van toepassing is, dan kun je het risco accepteren en de melding negeren. Lees hiervoor de documentatie over de ', (0, t.jsxs)(n.a, { href: 'https://pnpm.io/settings#overrides', children: [(0, t.jsx)(n.code, { children: 'overrides' }), ' van ', (0, t.jsx)(n.code, { children: 'pnpm audit' })] }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => a });
   var t = i(75271);
   const r = {},
    o = t.createContext(r);
   function a(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
