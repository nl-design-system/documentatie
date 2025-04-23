'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15211],
 {
  26052: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => s, default: () => c, frontMatter: () => t, metadata: () => a, toc: () => l });
   var r = i(52676),
    o = i(40139);
   const t = { title: 'Nieuwe versie publiceren \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Nieuwe versie publiceren', sidebar_position: 7, pagination_label: 'Nieuwe versie publiceren', description: 'Informatie over het bijhouden van wijzigingen in design tokens en Figma bibliotheken voor designers.', keywords: ['versiebeheer', 'changelog', 'semantic versioning', 'major', 'minor', 'patch'] },
    s = 'Nieuwe versie publiceren',
    a = { id: 'handboek/designer/nieuwe-versie-publiceren/index', title: 'Nieuwe versie publiceren \xb7 Designer \xb7 Handboek', description: 'Informatie over het bijhouden van wijzigingen in design tokens en Figma bibliotheken voor designers.', source: '@site/docs/handboek/designer/nieuwe-versie-publiceren/index.md', sourceDirName: 'handboek/designer/nieuwe-versie-publiceren', slug: '/handboek/designer/nieuwe-versie-publiceren/', permalink: '/handboek/designer/nieuwe-versie-publiceren/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/nieuwe-versie-publiceren/index.md', tags: [], version: 'current', sidebarPosition: 7, frontMatter: { title: 'Nieuwe versie publiceren \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Nieuwe versie publiceren', sidebar_position: 7, pagination_label: 'Nieuwe versie publiceren', description: 'Informatie over het bijhouden van wijzigingen in design tokens en Figma bibliotheken voor designers.', keywords: ['versiebeheer', 'changelog', 'semantic versioning', 'major', 'minor', 'patch'] }, sidebar: 'handboek', previous: { title: 'Voorbeeld thema', permalink: '/handboek/designer/community' }, next: { title: 'Versiebeheer voor design tokens', permalink: '/handboek/designer/nieuwe-versie-publiceren/versiebeheer-voor-design-tokens' } },
    d = {},
    l = [
     { value: 'Versiebeheer van design tokens', id: 'versiebeheer-van-design-tokens', level: 2 },
     { value: 'Werken met changelog voor Figma', id: 'werken-met-changelog-voor-figma', level: 2 },
     { value: 'Changelog Figma', id: 'changelog-figma', level: 2 },
    ];
   function g(e) {
    const n = { h1: 'h1', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'nieuwe-versie-publiceren', children: 'Nieuwe versie publiceren' }), '\n', (0, r.jsx)(n.p, { children: 'De Figma bibliotheken en het JSON bestand met de design tokens zijn voortdurend in ontwikkeling. Nieuwe tokens worden toegevoegd, bestaande tokens worden aangepast en ook Figma bibliotheken veranderen mee. Om deze wijzigingen helder te documenteren en goed te communiceren, houden we op verschillende manieren bij wat er verandert, wanneer dat gebeurt en wat dat betekent voor jou als designer.' }), '\n', (0, r.jsx)(n.p, { children: 'Onder deze pagina vind je drie soorten documentatie.' }), '\n', (0, r.jsx)(n.h2, { id: 'versiebeheer-van-design-tokens', children: 'Versiebeheer van design tokens' }), '\n', (0, r.jsx)(n.p, { children: 'We gebruiken semantic versioning, ofwel semver, om aan te geven wat voor soort wijziging er is doorgevoerd: een patch, minor of major. Deze pagina legt uit wat semver inhoudt en hoe we het toepassen op de packages met design tokens.' }), '\n', (0, r.jsx)(n.h2, { id: 'werken-met-changelog-voor-figma', children: 'Werken met changelog voor Figma' }), '\n', (0, r.jsx)(n.p, { children: 'Voor designers die werken met een duplicaat van onze Figma bibliotheken, beschrijven we hoe de changelog werkt: wat je erin kunt vinden, hoe je het leest en wat je ermee kunt doen.' }), '\n', (0, r.jsx)(n.h2, { id: 'changelog-figma', children: 'Changelog Figma' }), '\n', (0, r.jsx)(n.p, { children: 'Het overzicht van alle wijzigingen in de Figma bibliotheken.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => s });
   var r = i(75271);
   const o = {},
    t = r.createContext(o);
   function s(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
