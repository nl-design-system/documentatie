'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [38137],
 {
  18439(e, n, t) {
   t.d(n, { R: () => d, x: () => r });
   var i = t(30758);
   const o = {},
    a = i.createContext(o);
   function d(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  29408(e, n, t) {
   (t.r(n), t.d(n, { assets: () => u, contentTitle: () => p, default: () => v, frontMatter: () => m, metadata: () => i, toc: () => k }));
   const i = JSON.parse('{"id":"handboek/definition-of-done/candidate-stappenplan/selectiefase","title":"1. Selectiefase","description":"Stappen voor de Selectiefase van de Definition of Done voor Candidate","source":"@site/docs/handboek/definition-of-done/candidate-stappenplan/1-selectiefase.mdx","sourceDirName":"handboek/definition-of-done/candidate-stappenplan","slug":"/handboek/estafettemodel/componenten/candidate/selectiefase","permalink":"/handboek/estafettemodel/componenten/candidate/selectiefase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/candidate-stappenplan/1-selectiefase.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"1. Selectiefase","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1. Selectiefase","sidebar_position":1,"pagination_label":"1. Selectiefase","description":"Stappen voor de Selectiefase van de Definition of Done voor Candidate","slug":"/handboek/estafettemodel/componenten/candidate/selectiefase","keywords":["componenten","design system","estafettemodel","definition of done","candidate"]},"sidebar":"handboek","previous":{"title":"Overzicht","permalink":"/handboek/estafettemodel/componenten/candidate"},"next":{"title":"2. Voorbereidingsfase","permalink":"/handboek/estafettemodel/componenten/candidate/Voorbereidingsfase"}}');
   var o = t(86070),
    a = t(18439),
    d = t(76131),
    r = t(89647),
    s = t(51416),
    l = t(57035),
    c = t(57001);
   const m = { title: '1. Selectiefase', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1. Selectiefase', sidebar_position: 1, pagination_label: '1. Selectiefase', description: 'Stappen voor de Selectiefase van de Definition of Done voor Candidate', slug: '/handboek/estafettemodel/componenten/candidate/selectiefase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'candidate'] },
    p = 'Selectiefase voor Candidate componenten',
    u = {},
    k = [{ value: 'Huisstijl input', id: 'huisstijl', level: 2 }, { value: 'Doel', id: 'doel', level: 3 }, ...d.RM, { value: 'Uitkomst', id: 'uitkomst', level: 3 }, { value: 'Kan de community helpen?', id: 'kan-de-community-helpen', level: 3 }, { value: 'Productie input', id: 'productie', level: 2 }, { value: 'Doel', id: 'doel-1', level: 3 }, ...r.RM, { value: 'Uitkomst', id: 'uitkomst-1', level: 3 }, { value: 'Kan de community helpen?', id: 'kan-de-community-helpen-1', level: 3 }, { value: 'WCAG input', id: 'wcag', level: 2 }, ...s.RM, { value: 'Uitkomst', id: 'uitkomst-2', level: 3 }, { value: 'Kan de community helpen?', id: 'kan-de-community-helpen-2', level: 3 }, { value: 'Fast Track?', id: 'fast-track', level: 2 }, { value: 'Doel', id: 'doel-2', level: 3 }, ...l.RM, { value: 'Uitkomst', id: 'uitkomst-3', level: 3 }, { value: 'Hoe kan de community helpen?', id: 'hoe-kan-de-community-helpen', level: 3 }, { value: 'Rond de Selectiefase af', id: 'afronden', level: 2 }, { value: 'Doel', id: 'doel-3', level: 3 }, ...c.RM, { value: 'Uitkomst', id: 'uitkomst-4', level: 3 }];
   function h(e) {
    const n = { h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'selectiefase-voor-candidate-componenten', children: 'Selectiefase voor Candidate componenten' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een component wordt pas door het kernteam opgepakt voor de Candidatefase wanneer deze aan een aantal voorwaarden voldoet. Deze voorwaarden vormen de Selectiefase van de component.' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://github.com/nl-design-system/documentatie/blob/assets/candidate-stappenplan-selectiefase.png?raw=true', alt: 'Een overzicht van de stappen in de Selectiefase. Deze Selectiefase kan op 2 manieren. De normale manier, hier in grijs aangegeven, waarbij er ten minste 1 Community implementatie is, deze goed instelbaar is voor verschillende huisstijlen, de Community inplementatie goed bruikbaar is in diverse projecten en is getest met een WCAG-EM toegankelijkheidsaudit. Alternatief is er de Fast-track, hier in groen aangegeven, waar besloten wordt of de component dringend nodig is voor toegankelijkheid.' }) }), '\n', (0, o.jsx)(n.p, { children: 'De Selectiefase kan op 2 manieren verlopen. Normaal kijkt het kernteam of er ten minste 1 Community implementatie bestaat, die goed bruikbaar is voor verschillende huisstijlen, goed bruikbaar is in diverse projecten en getest is met ten minste 1 WCAG-EM toegankelijkheidsaudit.' }), '\n', (0, o.jsx)(n.p, { children: "Omdat sommige componenten met urgentie toegevoegd moeten worden aan het design system kan bij uitzondering ook gebruik worden gemaakt van de zogenaamde 'Fast Track', deze vervangt dan de andere stappen uit de Selectiefase." }), '\n', (0, o.jsx)(n.h2, { id: 'huisstijl', children: 'Huisstijl input' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam heeft input nodig uit de community om een goede Candidate component te bouwen die te gebruiken is in alle huisstijlen. Het is daarom belangrijk dat ten minste 1 Community implementatie succesvol ingezet wordt in meerdere verschillende huisstijlen.' }), '\n', (0, o.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, o.jsx)(d.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'De community heeft genoeg praktijk-input gegeven welke design tokens noodzakelijk zijn, zodat de Candidate component goed aansluit bij de behoefte uit de community.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam pakt geen componenten op die in de Communityfase nog niet voldoende bruikbaar zijn gebleken voor verschillende huisstijlen.' }), '\n', (0, o.jsx)(n.h3, { id: 'kan-de-community-helpen', children: 'Kan de community helpen?' }), '\n', (0, o.jsx)(n.p, { children: 'Dat kan door je huisstijl in te stellen voor 1 of meer Community implementaties en met het kernteam te delen hoe dat was.' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Deel het resultaat in de GitHub Discussions en in de themes repository.' }), '\n', (0, o.jsx)(n.li, { children: 'Deel eventuele tekortkomingen in de GitHub issues van de Community implementatie.' }), '\n', (0, o.jsx)(n.li, { children: 'Werk samen met de community om verbeteringen op de component door te voeren en deel de resultaten hiervan in de Heartbeat of in de GitHub Discussion van de component.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'productie', children: 'Productie input' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam heeft input nodig uit de community om een Candidate component te bouwen die goed te gebruiken is in meerdere projecten in productie. Het is daarom belangrijk dat een Community component in meer dan 1 project gebruikt is \xe9n in ten minste 1 project ook succesvol in productie is genomen.' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, o.jsx)(r.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'Er is voldoende informatie om te zorgen dat de Candidate component de juiste functionaliteiten en varianten krijgt die noodzakelijk zijn om de component succesvol te gebruiken in verschillende projecten.' }), '\n', (0, o.jsx)(n.p, { children: 'Doordat de component gebruikt is in meerdere producten kan worden aangenomen dat hij niet alleen aan functionele eisen voldoet, maar ook aan de niet-functionele eisen die door verschillende organisaties zijn gesteld.' }), '\n', (0, o.jsx)(n.p, { children: 'Eindgebruikers hebben de kans gehad om problemen te melden. Issues die ontdekt worden door componenten in productie te gebruiken, zijn gevonden en al zoveel mogelijk opgelost.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam selecteert alleen componenten die aantoonbaar nodig zijn en goed werken voor verschillende projecten en daarmee een permanente plek verdienen in het design system.' }), '\n', (0, o.jsx)(n.h3, { id: 'kan-de-community-helpen-1', children: 'Kan de community helpen?' }), '\n', (0, o.jsx)(n.p, { children: 'Dat kan door de beschikbare Community componenten te gebruiken in je projecten, in plaats van deze opnieuw te bouwen.' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Deel waar de component is gebruikt in de Heartbeat of in de GitHub Discussion van de component.' }), '\n', (0, o.jsx)(n.li, { children: 'Maak issues aan voor eventuele verbeteringen in de Community implementatie.' }), '\n', (0, o.jsx)(n.li, { children: 'Werk samen met de community om verbeteringen op de component door te voeren en deel de resultaten hiervan in de Heartbeat of in de GitHub Discussion van de component.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'wcag', children: 'WCAG input' }), '\n', (0, o.jsx)(s.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-2', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'Er is voldoende informatie welke functionaliteit, acceptatiecriteria, tests en documentatie de component nodig heeft om toegankelijk ingezet te kunnen worden.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam selecteert alleen componenten die getest zijn in ten minste 1 WCAG-EM toegankelijkheidsaudit, zodat voldoende informatie beschikbaar is of deze succesvol gebruikt kan worden in productie.' }), '\n', (0, o.jsx)(n.h3, { id: 'kan-de-community-helpen-2', children: 'Kan de community helpen?' }), '\n', (0, o.jsx)(n.p, { children: 'Dat kan door het kernteam te laten weten dat de component gebruikt is op een pagina die meegenomen is in een WCAG-EM audit, of een WCAG test in het algemeen.' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Zet een link naar het toegankelijkheidsrapport in de GitHub Discussion van de component.' }), '\n', (0, o.jsx)(n.li, { children: 'Maak issues aan voor eventueel gevonden problemen in de Community implementatie.' }), '\n', (0, o.jsx)(n.li, { children: 'Stel vragen over het oplossen van de toegankelijkheidsproblemen in Design Open Hour, Developer Open Hour of in Slack.' }), '\n', (0, o.jsx)(n.li, { children: 'Werk samen met de community om verbeteringen op de component door te voeren, zodat deze kunnen worden meegenomen in een hertest en deel de resultaten hiervan in de Heartbeat of in de GitHub Discussion van de component.' }), '\n', (0, o.jsx)(n.li, { children: 'Deel eventuele extra documentatie die jouw organisatie beschikbaar heeft voor het toegankelijk maken of inzetten van de component in de GitHub Discussion van de component.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'fast-track', children: 'Fast Track?' }), '\n', (0, o.jsx)(n.p, { children: 'Een component kan ook z\xf3 belangrijk zijn voor verbetering van toegankelijkheid dat de prioriteit alleen al hierdoor enorm omhoog gaat, waardoor het waardevol is om z\xf3nder de andere selectie-checks de component op te pakken als kernteam.' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-2', children: 'Doel' }), '\n', (0, o.jsx)(l.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-3', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'Componenten die belangrijk zijn voor toegankelijke websites en webapplicaties van de overheid kunnen beschikbaar worden gemaakt voor de community. Ook als er onvoldoende tijd of specialistische kennis beschikbaar is om hiervoor een Community implementatie beschikbaar te maken die voldoet aan alle eisen van de selectiefase.' }), '\n', (0, o.jsx)(n.h3, { id: 'hoe-kan-de-community-helpen', children: 'Hoe kan de community helpen?' }), '\n', (0, o.jsx)(n.p, { children: 'Dat kan door WCAG-audits te delen waarin de component ontoegankelijk gebruikt blijkt te worden en door op Slack, in de Developer Open Hour of Design Open Hour hulp te vragen voor het toegankelijker maken van de component. Hiermee wordt de prioriteit van de component hoger, waardoor de kans op een Fast Track toeneemt.' }), '\n', (0, o.jsx)(n.h2, { id: 'afronden', children: 'Rond de Selectiefase af' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam laat de community weten dat de component is geselecteerd voor het Candidate proces.' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-3', children: 'Doel' }), '\n', (0, o.jsx)(c.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-4', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'De community weet dat het kernteam de component heeft geselecteerd voor het Candidate proces zodat ze ongedocumenteerde problemen nog kunnen vastleggen in de Backlog voor gebruik in de Voorbereidingsfase.' })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
  },
  51416(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => a });
   var i = t(86070),
    o = t(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Component-implementaties die op in productie gebruikt worden op websites waarvoor een toegankelijkheidsverklaring gemaakt is, krijgen prioriteit bij het toewerken naar een stabiele versie.' }), '\n', (0, i.jsx)(n.p, { children: 'Component-implementaties die geen significante toegankelijkheidsproblemen blijken te hebben, krijgen prioriteit bij het toewerken naar een stabiele versie.' }), '\n', (0, i.jsx)(n.p, { children: 'Bestaand onderzoek naar toegankelijkheid van de component is bekend voordat het toewerken naar een stabiele versie begint, zodat die informatie kan worden gebruikt bij de doorontwikkeling van de component.' })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  57001(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => a });
   var i = t(86070),
    o = t(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De Candidate component heeft zo veel mogelijk draagvlak in de community, doordat niet per ongeluk onbekende issues met de bestaande componenten opnieuw in de Candidate component zitten.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  57035(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => a });
   var i = t(86070),
    o = t(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Het kernteam kan bij uitzondering componenten oppakken die nog niet voldoende beschikbaar of bruikbaar zijn als Community implementatie.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  76131(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => a });
   var i = t(86070),
    o = t(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Er is genoeg kennis en kunde beschikbaar uit de community om te bepalen welke design tokens goed werken. Het kernteam hoeft niet zonder praktijkervaring te besluiten welke design tokens nodig zijn om de component voor meerdere huisstijlen goed te laten werken.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  89647(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => a });
   var i = t(86070),
    o = t(18439);
   const a = [];
   function d(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Er is genoeg kennis en kunde beschikbaar uit de community om te bepalen op welke manier een Candidate component goed kan werken voor eindgebruikers. Het kernteam hoeft niet zonder praktijkervaring te besluiten wat ervoor nodig is om dit voor meerdere projecten succesvol te doen.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
