'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [72053],
 {
  57784: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => s, default: () => h, frontMatter: () => o, metadata: () => r, toc: () => l });
   var t = i(52676),
    a = i(40139);
   const o = { title: 'Figma changelog \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Figma changelog', sidebar_position: 6, pagination_label: 'Figma changelog', description: 'Overzicht van de wijzigingen in de Figma bibliotheken.', slug: '/handboek/designer/figma-changelog', keywords: ['versiebeheer', 'changelog', 'semantic versioning', 'major', 'minor', 'patch', 'figma bibliotheek'] },
    s = 'Figma changelog',
    r = { id: 'handboek/designer/werken-met-nl-design-system/figma-changelog', title: 'Figma changelog \xb7 Designer \xb7 Handboek', description: 'Overzicht van de wijzigingen in de Figma bibliotheken.', source: '@site/docs/handboek/designer/werken-met-nl-design-system/figma-changelog.mdx', sourceDirName: 'handboek/designer/werken-met-nl-design-system', slug: '/handboek/designer/figma-changelog', permalink: '/handboek/designer/figma-changelog', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/werken-met-nl-design-system/figma-changelog.mdx', tags: [], version: 'current', sidebarPosition: 6, frontMatter: { title: 'Figma changelog \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Figma changelog', sidebar_position: 6, pagination_label: 'Figma changelog', description: 'Overzicht van de wijzigingen in de Figma bibliotheken.', slug: '/handboek/designer/figma-changelog', keywords: ['versiebeheer', 'changelog', 'semantic versioning', 'major', 'minor', 'patch', 'figma bibliotheek'] }, sidebar: 'handboek', previous: { title: 'Werken met de Figma changelog', permalink: '/handboek/designer/werken-met-figma-changelog' }, next: { title: 'Design tokens versiebeheer', permalink: '/handboek/designer/design-tokens-versiebeheer' } },
    g = {},
    l = [{ value: 'x.x.x', id: 'xxx', level: 2 }];
   function d(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'figma-changelog', children: 'Figma changelog' }), '\n', (0, t.jsx)(n.p, { children: 'Op deze pagina vind je een overzicht van alle wijzigingen in onze Figma bibliotheken.' }), '\n', (0, t.jsx)(n.p, { children: 'Ben je afnemer van de bibliotheken? Dan zie je hier welke updates zijn doorgevoerd, zodat je ze waar nodig ook kunt doorvoeren in de bibliotheek van jouw organisatie. Zo blijf je up-to-date met de laatste versie van de bibliotheek.' }), '\n', (0, t.jsxs)(n.p, { children: ['Wil je meer weten over hoe je deze changelog gebruikt? Bekijk dan de\xa0', (0, t.jsx)(n.a, { href: 'https://nldesignsystem.nl/handboek/designer/nieuwe-versie-publiceren/werken-met-changelog-voor-figma', children: 'uitleg over de changelog voor Figma bibliotheken' }), '. En wil je weten wat de versienummers precies betekenen? Lees dan over\xa0', (0, t.jsx)(n.a, { href: 'https://nldesignsystem.nl/handboek/designer/nieuwe-versie-publiceren/versiebeheer-voor-design-tokens', children: 'versiebeheer' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'xxx', children: 'x.x.x' }), '\n', (0, t.jsx)(n.p, { children: '1 mei 2025' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Korte omschrijving van wijziging 1:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Subitem 1' }), '\n', (0, t.jsx)(n.li, { children: 'Subitem 2' }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.li, { children: 'Korte omschrijving van wijziging 2' }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'url-figma-bibliotheek', children: 'Korte omschrijving van wijziging 3' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => r, a: () => s });
   var t = i(75271);
   const a = {},
    o = t.createContext(a);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
