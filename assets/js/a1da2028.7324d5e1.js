'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65648],
 {
  85248: (e, n, i) => {
   i.d(n, { R: () => r, x: () => s });
   var o = i(30758);
   const t = {},
    a = o.createContext(t);
   function r(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
  85311: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => s, default: () => h, frontMatter: () => r, metadata: () => o, toc: () => l });
   const o = JSON.parse('{"id":"handboek/designer/werken-met-nl-design-system/changelog-voor-figma","title":"Werken met de Figma changelog \xb7 Designer \xb7 Handboek","description":"Informatie voor designers over het werken met de Figma changelog.","source":"@site/docs/handboek/designer/werken-met-nl-design-system/changelog-voor-figma.mdx","sourceDirName":"handboek/designer/werken-met-nl-design-system","slug":"/handboek/designer/werken-met-figma-changelog","permalink":"/handboek/designer/werken-met-figma-changelog","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/werken-met-nl-design-system/changelog-voor-figma.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Werken met de Figma changelog \xb7 Designer \xb7 Handboek","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Werken met de Figma changelog","sidebar_position":5,"pagination_label":"Werken met de Figma changelog","description":"Informatie voor designers over het werken met de Figma changelog.","slug":"/handboek/designer/werken-met-figma-changelog","keywords":["versiebeheer","changelog","semantic versioning","major","minor","patch","figma bibliotheek"]},"sidebar":"handboek","previous":{"title":"Figma hygi\xebne","permalink":"/handboek/designer/figma-hygiene"},"next":{"title":"Figma changelog","permalink":"/handboek/designer/figma-changelog"}}');
   var t = i(86070),
    a = i(85248);
   const r = { title: 'Werken met de Figma changelog \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Werken met de Figma changelog', sidebar_position: 5, pagination_label: 'Werken met de Figma changelog', description: 'Informatie voor designers over het werken met de Figma changelog.', slug: '/handboek/designer/werken-met-figma-changelog', keywords: ['versiebeheer', 'changelog', 'semantic versioning', 'major', 'minor', 'patch', 'figma bibliotheek'] },
    s = 'Werken met de Figma changelog',
    d = {},
    l = [
     { value: 'Soort wijzigingen', id: 'soort-wijzigingen', level: 2 },
     { value: 'Major', id: 'major', level: 3 },
     { value: 'Minor', id: 'minor', level: 3 },
     { value: 'Patch', id: 'patch', level: 3 },
     { value: 'Links naar handige onderdelen', id: 'links-naar-handige-onderdelen', level: 2 },
     { value: 'Op de hoogte blijven', id: 'op-de-hoogte-blijven', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'werken-met-de-figma-changelog', children: 'Werken met de Figma changelog' }) }), '\n', (0, t.jsx)(n.p, { children: 'De changelog is bedoeld voor designers die werken met een eigen duplicaat van de Figma bibliotheken. In de changelog zie je welke onderdelen zijn aangepast, toegevoegd of verbeterd. Zo weet je snel of je iets moet bijwerken in de bibliotheken van jouw organisatie. Op deze manier blijf je up-to-date met de laatste versie van NL Design System.' }), '\n', (0, t.jsx)(n.h2, { id: 'soort-wijzigingen', children: 'Soort wijzigingen' }), '\n', (0, t.jsx)(n.p, { children: 'Voor onze Figma bibliotheken gebruiken we semantic versioning. Dit helpt om inzicht te geven in het soort wijziging dat is doorgevoerd: gaat het om iets groots dat impact heeft op je bibliotheek, of om een kleine correctie?' }), '\n', (0, t.jsxs)(n.p, { children: ['Elke wijziging krijgt een versienummer in het formaat ', (0, t.jsx)(n.code, { children: 'major.minor.patch' }), ' (bijvoorbeeld ', (0, t.jsx)(n.code, { children: '1.3.0' }), '). We vermelden dit versienummer ook op de cover van onze Figma bibliotheken. Zo zie je altijd direct met welke versie je werkt.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/handboek/designer/design-tokens-versiebeheer/', children: 'Lees meer over versiebeheer' }) }), '\n', (0, t.jsx)(n.h3, { id: 'major', children: 'Major' }), '\n', (0, t.jsx)(n.p, { children: 'Grote wijzigingen die invloed hebben op het gebruik van componenten, zoals:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Verwijderde componenten.' }), '\n', (0, t.jsx)(n.li, { children: 'Design tokens die zijn hernoemd of verwijderd.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Impact:' }), ' Je moet iets aanpassen in de bibliotheek van jouw organisatie.'] }), '\n', (0, t.jsx)(n.h3, { id: 'minor', children: 'Minor' }), '\n', (0, t.jsx)(n.p, { children: 'Nieuwe toevoegingen die compatibel zijn, zoals:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Nieuwe componenten.' }), '\n', (0, t.jsx)(n.li, { children: 'Extra varianten van een bestaand component.' }), '\n', (0, t.jsx)(n.li, { children: 'Kleine uitbreidingen binnen een component.' }), '\n', (0, t.jsx)(n.li, { children: 'Design tokens die zijn toegevoegd.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Impact:' }), ' Je hoeft niet aan te passen, maar je kunt de nieuwe onderdelen gebruiken.'] }), '\n', (0, t.jsx)(n.h3, { id: 'patch', children: 'Patch' }), '\n', (0, t.jsx)(n.p, { children: 'Kleine correcties of verfijningen, zoals:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Tekstuele aanpassingen.' }), '\n', (0, t.jsx)(n.li, { children: 'Kleine aanpassingen in lay-out of spacing.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Impact:' }), ' Lage impact. Alleen relevant als je de bibliotheek van jouw organisatie volledig up-to-date wilt houden.'] }), '\n', (0, t.jsx)(n.h2, { id: 'links-naar-handige-onderdelen', children: 'Links naar handige onderdelen' }), '\n', (0, t.jsx)(n.p, { children: 'Sommige items in de changelog bevatten een link. Deze verwijzen direct naar het bijbehorende onderdeel in Figma, zodat je snel kunt zien wat er precies is aangepast. Bij complexere wijzigingen linken we soms naar een korte video waarin we de wijziging toelichten of demonstreren in Figma.' }), '\n', (0, t.jsx)(n.h2, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt altijd de changelog pagina blijven bekijken om de bibliotheek up-to-date te houden. Daarnaast sturen wij uiterlijk elk kwartaal een reminder via Slack in het kanaal ', (0, t.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01D78C2E4E', children: '#nl-design-system-designers' }), '. Zo ben je altijd op de hoogte van de laatste wijzigingen en hoef je niets te missen.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
