'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6325],
 {
  84208: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => h, frontMatter: () => o, metadata: () => s, toc: () => d });
   var r = t(52676),
    a = t(40139);
   const o = { title: 'Vercel \xb7 Developer \xb7 Handboek', slug: '/vercel', hide_table_of_contents: !1, sidebar_label: 'Vercel', pagination_label: 'Vercel', description: 'Waarom gebruikt NL Design System de tool Vercel?', keywords: ['GitHub Actions', 'Vercel', 'Deployment'] },
    i = 'Vercel',
    s = { id: 'handboek/developer/vercel', title: 'Vercel \xb7 Developer \xb7 Handboek', description: 'Waarom gebruikt NL Design System de tool Vercel?', source: '@site/docs/handboek/developer/vercel.md', sourceDirName: 'handboek/developer', slug: '/vercel', permalink: '/vercel', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/vercel.md', tags: [], version: 'current', frontMatter: { title: 'Vercel \xb7 Developer \xb7 Handboek', slug: '/vercel', hide_table_of_contents: !1, sidebar_label: 'Vercel', pagination_label: 'Vercel', description: 'Waarom gebruikt NL Design System de tool Vercel?', keywords: ['GitHub Actions', 'Vercel', 'Deployment'] }, sidebar: 'handboek', previous: { title: 'GitHub', permalink: '/github' }, next: { title: 'Voor organisaties', permalink: '/handboek/organisatie/overzicht' } },
    l = {},
    d = [
     { value: 'Feature branch deployments', id: 'feature-branch-deployments', level: 2 },
     { value: 'Veelvoorkomende vragen', id: 'veelvoorkomende-vragen', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'vercel', children: 'Vercel' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System maakt gebruik van Vercel voor het hosten van diverse projecten, zowel eigen projecten als de projecten van deelnemende organisaties. Op deze manier wordt het samenwerken makkelijker gemaakt doordat de resultaten van alle werkzaamheden direct beschikbaar komen. Het NL Design System kernteam kan de logs van Vercel inzien om fouten en problemen op te lossen.' }), '\n', (0, r.jsx)(n.h2, { id: 'feature-branch-deployments', children: 'Feature branch deployments' }), '\n', (0, r.jsx)(n.p, { children: 'Je hebt hard gewerkt aan een nieuwe feature en wil die graag laten zien. Ook is het erg handig wanneer een Pull Request reviewer niet pers\xe9 de branch hoeft uit te checken en het systeem zelf hoeft te draaien om de wijzigingen terug te zien.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hiervoor maakt NL Design System gebruik van ', (0, r.jsx)(n.a, { href: 'https://vercel.com/docs/deployments/environments#preview-environment-pre-production', children: 'feature branch (preview) deployments' }), '.\nNL Design System maakt gebruik van Branch-specific URLs, niet van Commit-specific URLs.'] }), '\n', (0, r.jsx)(n.p, { children: 'Voor elke branch die je aanmaakt wordt dus een URL beschikbaar gemaakt, zodra je bij deze branch een PR opent. De URL van de branch wordt via een commentaar aan de PR toegevoegd.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als voorbeeld de feature branch ', (0, r.jsx)(n.code, { children: 'feat/vercel' }), ' krijgt de URL:\n', (0, r.jsx)(n.a, { href: 'https://documentatie-git-feat-vercel-nl-design-system.vercel.app/', children: 'https://documentatie-git-feat-vercel-nl-design-system.vercel.app/' })] }), '\n', (0, r.jsxs)(n.p, { children: ['In de URL is ', (0, r.jsx)(n.code, { children: 'feat-vercel' }), ' terug te lezen naar de branch naam, op basis daarvan heeft elke branch een unieke URL.'] }), '\n', (0, r.jsx)(n.h2, { id: 'veelvoorkomende-vragen', children: 'Veelvoorkomende vragen' }), '\n', (0, r.jsxs)(n.p, { children: ['Het komt vaak voor dat er iets fout gaat in de Github Actions pipelines, maar dat de onderliggende fout niet zichtbaar is omdat het in Vercel afspeelt.\nWat vaak aan de hand is dat de Node versie van het project is ge\xfcpdatet naar een nieuwere versie, maar bij de Vercel configuratie nog niet. Dit kan opgelost worden door de versie te updaten via Terraform. Hiervoor zou je zelf een PR als suggestie kunnen aanbieden via ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/terraform/pulls', children: 'de repostory van Terraform' }), ', of hulp vragen via het hier beneden benoemde Slack kanaal.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Andere foutmeldingen komen ook uit Vercel, maar zijn in de Github Actions output volledig te lezen. Hiervoor hoef je dus geen toegang te hebben tot de logs in Vercel.\nKom je er toch niet uit en wil je graag inzage in de logs? Stuur dan een berichtje in ', (0, r.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01DAT4TRPF', children: '#nl-design-system-developers' }), ' en dan zullen de juiste kernteamleden antwoord geven.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => i });
   var r = t(75271);
   const a = {},
    o = r.createContext(a);
   function i(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
