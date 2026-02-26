'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [66018],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => l });
   var o = t(30758);
   const i = {},
    s = o.createContext(i);
   function a(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  35636(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => r, metadata: () => o, toc: () => f }));
   const o = JSON.parse('{"id":"handboek/definition-of-done/hall-of-fame-stappenplan/testfase","title":"5. Testfase","description":"Stappen voor de Testfase van de Definition of Done voor Hall of Fame","source":"@site/docs/handboek/definition-of-done/hall-of-fame-stappenplan/5-testfase.mdx","sourceDirName":"handboek/definition-of-done/hall-of-fame-stappenplan","slug":"/handboek/estafettemodel/componenten/hall-of-fame/testfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/testfase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/hall-of-fame-stappenplan/5-testfase.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"5. Testfase","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"5. Testfase","sidebar_position":5,"pagination_label":"5. Testfase","description":"Stappen voor de Testfase van de Definition of Done voor Hall of Fame","slug":"/handboek/estafettemodel/componenten/hall-of-fame/testfase","keywords":["componenten","design system","estafettemodel","definition of done","hall of fame"]},"sidebar":"handboek","previous":{"title":"4. Ontwikkelfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/ontwikkelfase"},"next":{"title":"6. Publicatiefase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/publicatiefase"}}');
   var i = t(86070),
    s = t(18439),
    a = t(59246),
    l = t(94291);
   const r = { title: '5. Testfase', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '5. Testfase', sidebar_position: 5, pagination_label: '5. Testfase', description: 'Stappen voor de Testfase van de Definition of Done voor Hall of Fame', slug: '/handboek/estafettemodel/componenten/hall-of-fame/testfase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    d = 'Testfase voor Hall of Fame componenten',
    c = {},
    f = [{ value: 'Richtlijnen getest', id: 'richtlijnen-getest', level: 2 }, { value: 'Doel', id: 'doel', level: 3 }, ...a.RM, { value: 'Uitkomst', id: 'uitkomst', level: 3 }, { value: 'Baseline getest', id: 'baseline-getest', level: 2 }, { value: 'Doel', id: 'doel-1', level: 3 }, ...l.RM, { value: 'Uitkomst', id: 'uitkomst-1', level: 3 }];
   function m(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'testfase-voor-hall-of-fame-componenten', children: 'Testfase voor Hall of Fame componenten' }) }), '\n', (0, i.jsx)(n.h2, { id: 'richtlijnen-getest', children: 'Richtlijnen getest' }), '\n', (0, i.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, i.jsx)(a.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De nieuwe richtlijnen zijn succesvol getest met een representatieve groep gebruikers uit de community: redacteuren voor contentrichtlijnen, designers voor design token richtlijnen en developers voor implementatierichtlijnen. Feedback over onduidelijkheden, missende informatie of adviezen die tegengesteld zijn aan adviezen van de verschillende organisaties is verzameld en verwerkt.' }), '\n', (0, i.jsx)(n.p, { children: 'De richtlijnen zijn nu gevalideerd als begrijpelijk en toepasbaar voor de doelgroep en gebruikers kunnen de component zelfstandig correct inzetten.' }), '\n', (0, i.jsx)(n.h2, { id: 'baseline-getest', children: 'Baseline getest' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De component is uitgebreid getest volgens de laatste versie van de NL Design System Baseline. De component is niet alleen in isolatie getest in Storybook, maar ook in relevante templates en patronen. Alle acceptatiecriteria uit de Voorbereidingsfase (voor accessibility, security, privacy, UX, screenreader-gedrag en component-combinaties) zijn systematisch gevalideerd. Gevonden problemen zijn opgelost en de component voldoet nu aantoonbaar aan alle kwaliteitseisen. Er is een testrapport beschikbaar dat laat zien dat de component door alle tests heen is gekomen, zodat gebruikers vertrouwen hebben in de kwaliteit en stabiliteit van de component.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  59246(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'De nieuw geschreven richtlijnen voor redacteuren, designers en developers zijn duidelijk, compleet en praktisch bruikbaar.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  94291(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Er is aangetoond dat de component goed werkt in de browsers en hulpmiddelen die eindgebruikers op dit moment gebruiken, zoals die zijn vastgelegd in de ', (0, o.jsx)(n.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'De component is getest in meer browsers en met meer hulpmiddelen dan gebruikelijk is voor kleinere projecten.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
