'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56701],
 {
  17419(e, n, o) {
   o.d(n, { Ay: () => d, RM: () => r });
   var i = o(86070),
    t = o(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: "Bekende security-risico's bij het gebruik van de component zijn ge\xefdentificeerd en gedocumenteerd, zodat gebruikers deze risico's kunnen beperken bij de implementatie." });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => d });
   var i = o(30758);
   const t = {},
    r = i.createContext(t);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children));
   }
  },
  34996(e, n, o) {
   (o.r(n), o.d(n, { assets: () => f, contentTitle: () => p, default: () => u, frontMatter: () => m, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"handboek/definition-of-done/hall-of-fame-stappenplan/voorbereidingsfase","title":"3. Voorbereidingsfase","description":"Stappen voor de Voorbereidingsfase van de Definition of Done voor Hall of Fame","source":"@site/docs/handboek/definition-of-done/hall-of-fame-stappenplan/3-voorbereidingsfase.mdx","sourceDirName":"handboek/definition-of-done/hall-of-fame-stappenplan","slug":"/handboek/estafettemodel/componenten/hall-of-fame/voorbereidingsfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/voorbereidingsfase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/hall-of-fame-stappenplan/3-voorbereidingsfase.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"3. Voorbereidingsfase","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3. Voorbereidingsfase","sidebar_position":3,"pagination_label":"3. Voorbereidingsfase","description":"Stappen voor de Voorbereidingsfase van de Definition of Done voor Hall of Fame","slug":"/handboek/estafettemodel/componenten/hall-of-fame/voorbereidingsfase","keywords":["componenten","design system","estafettemodel","definition of done","hall of fame"]},"sidebar":"handboek","previous":{"title":"2. Selectiefase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/selectiefase"},"next":{"title":"4. Ontwikkelfase","permalink":"/handboek/estafettemodel/componenten/hall-of-fame/ontwikkelfase"}}');
   var t = o(86070),
    r = o(18439),
    s = o(17419),
    d = o(73505),
    a = o(48920),
    l = o(68426),
    c = o(59761);
   const m = { title: '3. Voorbereidingsfase', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3. Voorbereidingsfase', sidebar_position: 3, pagination_label: '3. Voorbereidingsfase', description: 'Stappen voor de Voorbereidingsfase van de Definition of Done voor Hall of Fame', slug: '/handboek/estafettemodel/componenten/hall-of-fame/voorbereidingsfase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    p = 'Voorbereidingsfase voor Hall of Fame componenten',
    f = {},
    h = [{ value: 'Security-risico&#39;s', id: 'security-risicos', level: 2 }, { value: 'Doel', id: 'doel', level: 3 }, ...s.RM, { value: 'Uitkomst', id: 'uitkomst', level: 3 }, { value: 'Privacy-risico&#39;s', id: 'privacy-risicos', level: 2 }, { value: 'Doel', id: 'doel-1', level: 3 }, ...d.RM, { value: 'Uitkomst', id: 'uitkomst-1', level: 3 }, { value: 'UX risico&#39;s', id: 'ux-risicos', level: 2 }, { value: 'Doel', id: 'doel-2', level: 3 }, ...a.RM, { value: 'Uitkomst', id: 'uitkomst-2', level: 3 }, { value: 'Screenreader-gedrag', id: 'screenreader-gedrag', level: 2 }, { value: 'Doel', id: 'doel-3', level: 3 }, ...l.RM, { value: 'Uitkomst', id: 'uitkomst-3', level: 3 }, { value: 'Component combinaties', id: 'component-combinaties', level: 2 }, { value: 'Doel', id: 'doel-4', level: 3 }, ...c.RM, { value: 'Uitkomst', id: 'uitkomst-4', level: 3 }];
   function v(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'voorbereidingsfase-voor-hall-of-fame-componenten', children: 'Voorbereidingsfase voor Hall of Fame componenten' }) }), '\n', (0, t.jsx)(n.h2, { id: 'security-risicos', children: "Security-risico's" }), '\n', (0, t.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, t.jsx)(s.Ay, {}), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: "Alle relevante security-risico's die specifiek zijn voor deze component zijn in kaart gebracht. Voor elk risico is bepaald of het in de component zelf kan worden aangepakt of dat het door de implementerende organisatie moet worden opgelost. Eventuele extra acceptatiecriteria voor security zijn vastgelegd en er is documentatie beschikbaar om developers en designers te waarschuwen voor situaties waarin extra oplettendheid nodig is." }), '\n', (0, t.jsx)(n.h2, { id: 'privacy-risicos', children: "Privacy-risico's" }), '\n', (0, t.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: "Alle relevante privacy-risico's die specifiek zijn voor deze component zijn in kaart gebracht. Voor elk risico is bepaald of het in de component zelf kan worden aangepakt of dat het door de implementerende organisatie moet worden opgelost. Eventuele extra acceptatiecriteria voor privacy zijn vastgelegd en er is documentatie beschikbaar over hoe de component AVG-conform kan worden ingezet." }), '\n', (0, t.jsx)(n.h2, { id: 'ux-risicos', children: "UX risico's" }), '\n', (0, t.jsx)(n.h3, { id: 'doel-2', children: 'Doel' }), '\n', (0, t.jsx)(a.Ay, {}), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-2', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: "Veelvoorkomende manieren waarop de component verkeerd wordt gebruikt zijn ge\xefdentificeerd door feedback uit de community en gebruikersonderzoek. Voor elk verkeerd gebruikspatroon is de goede manier bepaald en zijn do's en don'ts vastgesteld die in de Ontwikkelfase kunnen worden opgenomen." }), '\n', (0, t.jsx)(n.h2, { id: 'screenreader-gedrag', children: 'Screenreader-gedrag' }), '\n', (0, t.jsx)(n.h3, { id: 'doel-3', children: 'Doel' }), '\n', (0, t.jsx)(l.Ay, {}), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-3', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'Het verwachte screenreader-gedrag voor alle varianten en states van de component is bepaald en vastgelegd. Er zijn duidelijke acceptatiecriteria opgesteld voor hoe de component moet worden aangekondigd door verschillende screenreaders. Het kernteam weet nu precies wat er getest moet worden en wat het verwachte gedrag is bij screenreaders zoals NVDA, JAWS en VoiceOver.' }), '\n', (0, t.jsx)(n.h2, { id: 'component-combinaties', children: 'Component combinaties' }), '\n', (0, t.jsx)(n.h3, { id: 'doel-4', children: 'Doel' }), '\n', (0, t.jsx)(c.Ay, {}), '\n', (0, t.jsx)(n.h3, { id: 'uitkomst-4', children: 'Uitkomst' }), '\n', (0, t.jsx)(n.p, { children: 'De veelvoorkomende combinaties met de component zijn ge\xefdentificeerd en gedocumenteerd. De component is opgenomen in het overzicht van parent/child relaties van alle componenten in het design system. Er zijn concrete voorbeelden beschikbaar in Storybook die laten zien hoe de component in combinatie met andere componenten moet worden gebruikt, zodat gebruikers consistent patronen kunnen implementeren.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
   }
  },
  48920(e, n, o) {
   o.d(n, { Ay: () => d, RM: () => r });
   var i = o(86070),
    t = o(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: "Gebruikers zetten de component niet op een gebruiksonvriendelijke manier in, doordat veelvoorkomende fouten van tevoren zijn bepaald en in de Ontwikkelfase kunnen worden gedocumenteerd met concrete do's en don'ts." });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  59761(e, n, o) {
   o.d(n, { Ay: () => d, RM: () => r });
   var i = o(86070),
    t = o(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De Hall of Fame component werkt aantoonbaar goed in combinatie met andere Hall of Fame en Candidate componenten doordat deze combinaties worden getest en gedocumenteerd met concrete voorbeelden.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  68426(e, n, o) {
   o.d(n, { Ay: () => d, RM: () => r });
   var i = o(86070),
    t = o(18439);
   const r = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Er is vastgelegd op welke manier de gebruikerservaring voor screenreader-gebruikers is geoptimaliseerd.' }), '\n', (0, i.jsx)(n.p, { children: 'De kwaliteit van de screenreader-gebruikerservaring blijft stabiel, doordat regressies in screenreader-gebruikerservaring worden ontdekt bij het testen nieuwe versies van de component, en de component op tijd wordt verbeterd.' }), '\n', (0, i.jsxs)(n.p, { children: ['Er wordt herkend dat de component aangepast moet worden, wanneer de ongewijzigde component minder goed werkt in nieuwe versies van browsers en hulpmiddelen, wanneer getest wordt met een nieuwe versie van de ', (0, i.jsx)(n.a, { href: 'baseline/', children: 'NL Design System Baseline' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  73505(e, n, o) {
   o.d(n, { Ay: () => d, RM: () => r });
   var i = o(86070),
    t = o(18439);
   const r = [];
   function s(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: "Bekende privacy-risico's bij het gebruik van de component zijn ge\xefdentificeerd en gedocumenteerd, zodat developers en designers weten wat ze moeten doen om de component in te zetten zonder onbedoeld AVG privacywetgeving te overtreden." });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
