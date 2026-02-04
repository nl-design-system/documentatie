'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33909],
 {
  18439(e, n, o) {
   o.d(n, { R: () => d, x: () => s });
   var t = o(30758);
   const i = {},
    a = t.createContext(i);
   function d(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  38989(e, n, o) {
   o.d(n, { Ay: () => s, RM: () => a });
   var t = o(86070),
    i = o(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Gebruikers die al een Community component gebruiken kunnen goed migreren naar de Candidate versie, eventueel met hun eigen extensies. Feedback over de migratie, onduidelijkheden in documentatie of verbeterpunten in de component zijn bekend en opgelost voordat de component de Hall of Fame status krijgt.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  43962(e, n, o) {
   o.d(n, { Ay: () => s, RM: () => a });
   var t = o(86070),
    i = o(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De Candidate component is bewezen bruikbaar voor designers in verschillende organisaties. Eventuele UX-uitdagingen of onduidelijkheden zijn gevonden en opgelost voordat de component de Hall of Fame status krijgt.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  50361(e, n, o) {
   (o.r(n), o.d(n, { assets: () => p, contentTitle: () => m, default: () => k, frontMatter: () => c, metadata: () => t, toc: () => f }));
   const t = JSON.parse('{"id":"handboek/definition-of-done/hall-of-fame-stappenplan/feedbackfase","title":"1. Feedbackfase \xb7 Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Feedbackfase van de Definition of Done voor Hall of Fame","source":"@site/docs/handboek/definition-of-done/hall-of-fame-stappenplan/1-feedbackfase.mdx","sourceDirName":"handboek/definition-of-done/hall-of-fame-stappenplan","slug":"/handboek/estafettemodel/componenten/hall-of-fame/feedbackfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/feedbackfase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/hall-of-fame-stappenplan/1-feedbackfase.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"1. Feedbackfase \xb7 Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1. Feedbackfase","sidebar_position":1,"pagination_label":"1. Feedbackfase","description":"Stappen voor de Feedbackfase van de Definition of Done voor Hall of Fame","slug":"/handboek/estafettemodel/componenten/hall-of-fame/feedbackfase","keywords":["componenten","design system","estafettemodel","definition of done","hall of fame"]},"sidebar":"handboek","previous":{"title":"Overzicht","permalink":"/handboek/estafettemodel/componenten/hall-of-fame"},"next":{"title":"2. Selectiefase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/selectiefase"}}');
   var i = o(86070),
    a = o(18439),
    d = o(43962),
    s = o(89399),
    r = o(38989),
    l = o(75972);
   const c = { title: '1. Feedbackfase \xb7 Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1. Feedbackfase', sidebar_position: 1, pagination_label: '1. Feedbackfase', description: 'Stappen voor de Feedbackfase van de Definition of Done voor Hall of Fame', slug: '/handboek/estafettemodel/componenten/hall-of-fame/feedbackfase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    m = 'Feedbackfase voor Candidate componenten',
    p = {},
    f = [{ value: 'Designer feedback', id: 'designer-feedback', level: 2 }, { value: 'Doel', id: 'doel', level: 3 }, ...d.RM, { value: 'Uitkomst', id: 'uitkomst', level: 3 }, { value: 'Developer feedback', id: 'developer-feedback', level: 2 }, { value: 'Doel', id: 'doel-1', level: 3 }, ...s.RM, { value: 'Uitkomst', id: 'uitkomst-1', level: 3 }, { value: 'Migratie naar Candidate gelukt', id: 'migratie-naar-candidate-gelukt', level: 2 }, { value: 'Doel', id: 'doel-2', level: 3 }, ...r.RM, { value: 'Uitkomst', id: 'uitkomst-2', level: 3 }, { value: 'Uitfasering Community component besproken', id: 'uitfasering-community-component-besproken', level: 2 }, { value: 'Doel', id: 'doel-3', level: 3 }, ...l.RM, { value: 'Uitkomst', id: 'uitkomst-3', level: 3 }];
   function u(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'feedbackfase-voor-candidate-componenten', children: 'Feedbackfase voor Candidate componenten' }) }), '\n', (0, i.jsx)(n.p, { children: 'Het kernteam verbetert continu de Candidate componenten op basis van feedback uit de Community, die de componenten in de praktijk gebruiken.' }), '\n', (0, i.jsx)(n.h2, { id: 'designer-feedback', children: 'Designer feedback' }), '\n', (0, i.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'Designers uit de community hebben de Candidate component gebruikt in hun designs en prototypes. Feedback over de bruikbaarheid in Figma, onduidelijkheden in de design tokens en verbeterpunten voor de UX-documentatie is verzameld en verwerkt. De component kan goed gebruikt worden door designers met verschillende ervaringsniveaus.' }), '\n', (0, i.jsx)(n.h2, { id: 'developer-feedback', children: 'Developer feedback' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, i.jsx)(s.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'Developers uit de community hebben de Candidate component gebruikt in hun projecten, met diverse tech-stacks. Feedback over de implementatie, onduidelijkheden in de documentatie, verbeterpunten voor de API en performance is verzameld en verwerkt. De component is geoptimaliseerd voor gebruik door developers met verschillende ervaringsniveaus en in diverse tech-stacks.' }), '\n', (0, i.jsx)(n.h2, { id: 'migratie-naar-candidate-gelukt', children: 'Migratie naar Candidate gelukt' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-2', children: 'Doel' }), '\n', (0, i.jsx)(r.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-2', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'Het kernteam heeft samengewerkt met ten minste 1 team om van de Community component over te stappen op de Candidate component. Documentatie en voorbeelden zijn beschikbaar gemaakt voor andere gebruikers die ook willen migreren en breaking changes of onduidelijkheden zijn gedocumenteerd en opgelost.' }), '\n', (0, i.jsx)(n.h2, { id: 'uitfasering-community-component-besproken', children: 'Uitfasering Community component besproken' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-3', children: 'Doel' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-3', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De Candidate component is besproken met de maintainers van de Community implementaties, waardoor draagvlak is ontstaan voor het overstappen op de Candidate component en uitfaseren van de Community component. Waar mogelijk is er een stappenplan voor de uitfasering van de Community component, inclusief een tijdlijn en afspraken over ondersteuning tijdens de overgangsperiode.' })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  75972(e, n, o) {
   o.d(n, { Ay: () => s, RM: () => a });
   var t = o(86070),
    i = o(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Maintainers van Community implementaties van de component hebben een plan voor de uitfasering van de Community component. De Community component zorgt niet voor verwarring bij gebruikers die een component moeten kiezen en de Community component hoeft niet onnodig te worden onderhouden.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  89399(e, n, o) {
   o.d(n, { Ay: () => s, RM: () => a });
   var t = o(86070),
    i = o(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De Candidate component is bewezen bruikbaar voor developers in verschillende organisaties. Eventuele technische uitdagingen, onduidelijkheden in de API of documentatie zijn gevonden en opgelost voordat de component de Hall of Fame status krijgt.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
