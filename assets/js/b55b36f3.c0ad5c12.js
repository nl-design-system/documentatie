'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [66339],
 {
  18439(e, n, o) {
   o.d(n, { R: () => d, x: () => l });
   var i = o(30758);
   const t = {},
    a = i.createContext(t);
   function d(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : d(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  22941(e, n, o) {
   (o.r(n), o.d(n, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => d, metadata: () => i, toc: () => r }));
   const i = JSON.parse('{"id":"handboek/definition-of-done/hall-of-fame-stappenplan/selectiefase","title":"2. Selectiefase \xb7 Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Selectiefase van de Definition of Done voor Hall of Fame","source":"@site/docs/handboek/definition-of-done/hall-of-fame-stappenplan/2-selectiefase.md","sourceDirName":"handboek/definition-of-done/hall-of-fame-stappenplan","slug":"/handboek/estafettemodel/componenten/hall-of-fame/selectiefase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/selectiefase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/hall-of-fame-stappenplan/2-selectiefase.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"2. Selectiefase \xb7 Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2. Selectiefase","sidebar_position":2,"pagination_label":"2. Selectiefase","description":"Stappen voor de Selectiefase van de Definition of Done voor Hall of Fame","slug":"/handboek/estafettemodel/componenten/hall-of-fame/selectiefase","keywords":["componenten","design system","estafettemodel","definition of done","hall of fame"]},"sidebar":"handboek","previous":{"title":"1. Feedbackfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/feedbackfase"},"next":{"title":"3. Voorbereidingsfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/voorbereidingsfase"}}');
   var t = o(86070),
    a = o(18439);
   const d = { title: '2. Selectiefase \xb7 Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2. Selectiefase', sidebar_position: 2, pagination_label: '2. Selectiefase', description: 'Stappen voor de Selectiefase van de Definition of Done voor Hall of Fame', slug: '/handboek/estafettemodel/componenten/hall-of-fame/selectiefase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    l = 'Selectiefase voor Hall of Fame componenten',
    s = {},
    r = [
     { value: 'Productie input', id: 'productie-input', level: 2 },
     { value: 'Doel', id: 'doel', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst', level: 3 },
     { value: 'Huisstijl input', id: 'huisstijl-input', level: 2 },
     { value: 'Doel', id: 'doel-1', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-1', level: 3 },
     { value: 'Gerelateerde componenten input', id: 'gerelateerde-componenten-input', level: 2 },
     { value: 'Doel', id: 'doel-2', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-2', level: 3 },
     { value: 'Toegankelijkheidsaudit input', id: 'toegankelijkheidsaudit-input', level: 2 },
     { value: 'Doel', id: 'doel-3', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-3', level: 3 },
     { value: 'Gebruikersonderzoek input', id: 'gebruikersonderzoek-input', level: 2 },
     { value: 'Doel', id: 'doel-4', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-4', level: 3 },
    ];
   function c(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'selectiefase-voor-hall-of-fame-componenten', children: 'Selectiefase voor Hall of Fame componenten' }) }), '\n', (0, t.jsx)(n.h2, { id: 'productie-input', children: 'Productie input' }), '\n', (0, t.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, t.jsx)(n.p, { children: 'De component krijgt pas de Hall of Fame status wanneer deze is gebruikt in verschillende productieomgevingen, zodat de stabiliteit en bruikbaarheid getest zijn in de praktijk en eventuele problemen in de Candidatefase zijn gevonden en opgelost.' }), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'Het kernteam weet dat de Candidate component in productie is gebruikt in een diversiteit aan projecten. Er is aangetoond dat de component stabiel genoeg is voor kritische toepassingen. Er worden geen grote bugs of ontwerpfouten meer verwacht. Problemen die door eindgebruikers zijn gemeld worden door het kernteam in de Candidate component opgelost, en de nieuwe versie is getest in productie.' }), '\n', (0, t.jsx)(n.h2, { id: 'huisstijl-input', children: 'Huisstijl input' }), '\n', (0, t.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, t.jsx)(n.p, { children: 'De design tokens van de Candidate component werken goed voor verschillende organisaties met verschillende huisstijlen, voordat deze de Hall of Fame status krijgt.' }), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'De Candidate component is succesvol ingesteld voor ten minste 2 verschillende organisaties met verschillende huisstijlen. De design tokens zijn voldoende flexibel en de naamgeving is duidelijk genoeg voor verschillende gebruikers. Eventuele bugs, onduidelijkheden of missende design tokens zijn opgelost.' }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-componenten-input', children: 'Gerelateerde componenten input' }), '\n', (0, t.jsx)(n.h3, { id: 'doel-2', children: 'Doel' }), '\n', (0, t.jsx)(n.p, { children: 'De component staat niet op zichzelf, maar werkt goed samen met andere Candidate en Hall of Fame componenten die in combinatie worden gebruikt. De componenten in samenhang kunnen in de Ontwikkelfase worden gedocumenteerd in patronen die consistent en toegankelijk kunnen worden ingezet.' }), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-2', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'Alle componenten waarmee deze component vaak samen wordt gebruikt zijn ge\xefdentificeerd en hun status is gevalideerd. Waar componenten nog niet als Candidate of Hall of Fame beschikbaar zijn, is besloten of dit blokkerend is voor het Hall of Fame proces of dat er workarounds mogelijk zijn. De relaties tussen componenten zijn gedocumenteerd.' }), '\n', (0, t.jsx)(n.h2, { id: 'toegankelijkheidsaudit-input', children: 'Toegankelijkheidsaudit input' }), '\n', (0, t.jsx)(n.h3, { id: 'doel-3', children: 'Doel' }), '\n', (0, t.jsx)(n.p, { children: 'De Candidate component kan aantoonbaar goed toegankelijk worden gebruikt in verschillende projecten zodat verborgen toegankelijkheidsproblemen in de Hall of Fame component worden voorkomen.' }), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-3', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'De Candidate component is succesvol door ten minste 2 WCAG-EM audits gekomen zonder dat er toegankelijkheidsproblemen met de component zelf zijn gevonden. Hiermee is aangetoond dat de component en de bijbehorende documentatie goed genoeg zijn om toegankelijk te worden ingezet. Eventueel context-afhankelijke problemen die gevonden zijn opgenomen in de checklist voor toegankelijkheid van de component.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek-input', children: 'Gebruikersonderzoek input' }), '\n', (0, t.jsx)(n.p, { children: 'Er is ten minste 1 gebruikersonderzoek beschikbaar waarin dit component voorkwam waarvan de inzichten beschikbaar zijn gemaakt.' }), '\n', (0, t.jsx)(n.h3, { id: 'doel-4', children: 'Doel' }), '\n', (0, t.jsx)(n.p, { children: 'Feedback van eindgebruikers is meegenomen in de Candidate component, zodat de Hall of Fame component niet alleen technisch goed werkt, maar ook bewezen gebruiksvriendelijk is voor de mensen die ermee moeten werken.' }), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-4', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'Er is ten minste 1 gebruikersonderzoek beschikbaar waarin de Candidate component is meegenomen. De inzichten uit dit onderzoek zijn geanalyseerd en waar nodig verwerkt in verbeteringen aan de component of de documentatie. Eventuele onduidelijkheden zijn gedocumenteerd op gebruikersonderzoeken.nl als aandachtspunten voor vervolgonderzoek. Er is besloten of de gevonden problemen blokkerend zijn voor de Hall of Fame.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
