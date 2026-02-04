/*! For license information please see 25ab1beb.762218de.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [40721],
 {
  4258(e, n, i) {
   i.d(n, { L: () => r });
   var s = i(78236),
    t = i(86070);
   const r = ({ id: e, title: n, ...i }) => (0, t.jsx)(s.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...i });
  },
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => l });
   var s = i(30758);
   const t = {},
    r = s.createContext(t);
   function o(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => r });
   var s = i(30758),
    t = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, i, r) => {
    const o = (0, s.forwardRef)(({ color: i = 'currentColor', size: o = 24, stroke: l = 2, title: a, className: d, children: u, ...m }, c) => (0, s.createElement)('svg', { ref: c, ...t[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: l, stroke: i }), ...m }, [a && (0, s.createElement)('title', { key: 'svg-title' }, a), ...r.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(u) ? u : [u])]));
    return ((o.displayName = `${i}`), o);
   };
  },
  64249(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76222(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => m, default: () => p, frontMatter: () => u, metadata: () => s, toc: () => h }));
   const s = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/rijkshuisstijl-community","title":"Rijkshuisstijl Community \xb7 Community Sprints \xb7 Community","description":"Lees meer over de NL Design System Rijkshuisstijl Community Sprint.","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/rijkshuisstijl-community.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/","permalink":"/community/community-sprints/rijkshuisstijl-community/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/rijkshuisstijl-community.mdx","tags":[],"version":"current","frontMatter":{"title":"Rijkshuisstijl Community \xb7 Community Sprints \xb7 Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Rijkshuisstijl Community","pagination_label":"Rijkshuisstijl Community","description":"Lees meer over de NL Design System Rijkshuisstijl Community Sprint.","keywords":["nl design system","community sprints","rijkshuisstijl community"]},"sidebar":"community","previous":{"title":"Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/overzicht"},"next":{"title":"Aanmelden","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden"}}');
   var t = i(86070),
    r = i(18439),
    o = i(4258),
    l = i(88666),
    a = i(64249),
    d = i(46447);
   const u = { title: 'Rijkshuisstijl Community \xb7 Community Sprints \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Rijkshuisstijl Community', pagination_label: 'Rijkshuisstijl Community', description: 'Lees meer over de NL Design System Rijkshuisstijl Community Sprint.', keywords: ['nl design system', 'community sprints', 'rijkshuisstijl community'] },
    m = 'Community Sprint: Rijkshuisstijl Community',
    c = {},
    h = [
     { value: 'Waar gaat deze sprint over?', id: 'waar-gaat-deze-sprint-over', level: 2 },
     { value: 'Denk mee over designkeuzes binnen de Rijkshuisstijl', id: 'denk-mee-over-designkeuzes-binnen-de-rijkshuisstijl', level: 2 },
     { value: 'Werk en resultaten', id: 'werk-en-resultaten', level: 2 },
     { value: 'Code, issues en bijdragen', id: 'code-issues-en-bijdragen', level: 3 },
     { value: 'Ontwerpen: Figma en design tokens', id: 'ontwerpen-figma-en-design-tokens', level: 3 },
     { value: 'GitHub Discussions', id: 'github-discussions', level: 3 },
     { value: 'GitHub projectborden', id: 'github-projectborden', level: 3 },
     { value: '1. Rijkshuisstijl Community Sprintbord', id: '1-rijkshuisstijl-community-sprintbord', level: 4 },
     { value: '2. Rijkshuisstijl Community Backlog', id: '2-rijkshuisstijl-community-backlog', level: 4 },
     { value: '3. Rijkshuisstijl Community Component status', id: '3-rijkshuisstijl-community-component-status', level: 4 },
     { value: 'Voorbeelden en componenten', id: 'voorbeelden-en-componenten', level: 3 },
     { value: 'Video&#39;s', id: 'videos', level: 3 },
     { value: 'Voor wie is dit relevant?', id: 'voor-wie-is-dit-relevant', level: 2 },
     { value: 'Hoe kun je bijdragen of meedoen?', id: 'hoe-kun-je-bijdragen-of-meedoen', level: 2 },
     { value: 'Meepraten of input geven?', id: 'meepraten-of-input-geven', level: 3 },
     { value: 'Meedoen in Figma?', id: 'meedoen-in-figma', level: 3 },
     { value: 'Zelf iets aandragen of checken?', id: 'zelf-iets-aandragen-of-checken', level: 3 },
     { value: 'Vragen of idee\xebn', id: 'vragen-of-idee\xebn', level: 3 },
    ];
   function j(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'community-sprint-rijkshuisstijl-community', children: 'Community Sprint: Rijkshuisstijl Community' }) }), '\n', (0, t.jsxs)(n.p, { children: ['In de zomer van 2024 gingen de eerste Community Sprints van start voor teams die werken aan webapplicaties en websites binnen de Rijkshuisstijl. Deze sprints werden afgetrapt door een kernteam van 7 developers voor de zomer beschikbaar gesteld door ', (0, t.jsx)(n.a, { href: 'https://quintor.nl', children: 'Quintor' }), ', en vormden het begin van een langdurige samenwerking tussen onder andere ', (0, t.jsx)(n.a, { href: 'https://logius.nl', children: 'Logius' }), ', Ministerie van Justitie en Veiligheid, en Rijksinstituut voor Volksgezondheid en Milieu (RIVM).'] }), '\n', (0, t.jsx)(n.h2, { id: 'waar-gaat-deze-sprint-over', children: 'Waar gaat deze sprint over?' }), '\n', (0, t.jsx)(n.p, { children: 'De Rijkshuisstijl Community is een Open Source project waaraan iedereen kan bijdragen ongeacht de organisatie waarvoor je werkt. De Rijkshuisstijl Community Sprint maakt deel uit van een samenwerkingsverband om NL Design System-componenten te ontwikkelen voor projecten die moeten voldoen aan de Rijkshuisstijl.' }), '\n', (0, t.jsx)(n.p, { children: 'Organisaties van de centrale overheid van Nederland (bijvoorbeeld: Belastingdienst, DUO, Logius, SVB) en degenen die door hen zijn ingehuurd voor het ontwikkelen van websites en apps, kunnen via dit project samenwerken.' }), '\n', (0, t.jsx)(n.h2, { id: 'denk-mee-over-designkeuzes-binnen-de-rijkshuisstijl', children: 'Denk mee over designkeuzes binnen de Rijkshuisstijl' }), '\n', (0, t.jsx)(n.p, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar \xe9\xe9n centrale JSON met design tokens. Daarmee kunnen componenten uit het NL Design System eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' }), '\n', (0, t.jsx)(n.p, { children: 'Tijdens dit proces maken we diverse designkeuzes. Om deze keuzes inzichtelijk \xe9n bespreekbaar te maken, zijn we gestart met een aantal GitHub Discussions. Iedereen die werkt met de Rijkshuisstijl of hieraan bijdraagt wordt uitgenodigd om mee te denken.' }), '\n', (0, t.jsx)(n.p, { children: 'Ook als je het eens bent met de voorgestelde keuzes, is een korte bevestiging al waardevol. Heb je zelf al keuzes gemaakt bij het stylen van componenten? Deel dan je overwegingen in de betreffende discussie. Zo brengen we alle kennis en argumentatie op \xe9\xe9n centrale plek samen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Ga naar de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions', children: 'Rijkshuisstijl Community Discussions rondom styling keuzes op GitHub' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'werk-en-resultaten', children: 'Werk en resultaten' }), '\n', (0, t.jsx)(n.p, { children: 'De Rijkshuisstijl Community is een Open Source project en werkt open en transparant. Alles wat we maken, zoals code, ontwerpen, documentatie en discussies, is voor iedereen zichtbaar en te gebruiken.' }), '\n', (0, t.jsx)(n.h3, { id: 'code-issues-en-bijdragen', children: 'Code, issues en bijdragen' }), '\n', (0, t.jsxs)(n.p, { children: ['Bekijk alle code, openstaande issues, pull requests en discussies in de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community', children: 'Rijkshuisstijl Community Repository op GitHub' }), '.\nHier vind je de bron van alle componenten, de richtlijnen en het werk van de community.'] }), '\n', (0, t.jsx)(n.h3, { id: 'ontwerpen-figma-en-design-tokens', children: 'Ontwerpen: Figma en design tokens' }), '\n', (0, t.jsx)(n.p, { children: 'Bekijk en gebruik de Figma bestanden en de design tokens. Deze vormen de basis voor een consistente manier van ontwerpen en implementeren.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community', children: 'NL Design System - Bibliotheek - Rijkshuisstijl Community in Figma' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NL-Design-System---Templates---Rijkshuisstijl', children: 'NL Design System - Templates - Rijkshuisstijl Community in Figma' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/figma/figma.tokens.json', children: 'Design tokens (JSON) in te laden in Token Studio' }) }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'github-discussions', children: 'GitHub Discussions' }), '\n', (0, t.jsx)(n.p, { children: 'In GitHub Discussions denken we samen na over verschillende onderwerpen. Iedereen kan meedoen, reageren of een nieuwe vraag stellen. Iedere bijdrage helpt, van korte bevestiging tot uitgebreid voorstel!' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-2025-interpretatie', children: 'Rijkshuisstijl 2025 styling keuzes' }), (0, t.jsx)(n.br, {}), '\n', 'Discussies over ontwerpkeuzes die nodig zijn voor Rijkshuisstijl 2025 op nieuwe en bestaande componenten.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/component-implementatie', children: 'Component implementaties' }), (0, t.jsx)(n.br, {}), '\n', 'Hier werken we toe naar \xe9\xe9n duidelijke, reproduceerbare beschrijving per component, zodat developers in elk framework dezelfde resultaten kunnen bouwen.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-community-open-hour', children: 'Samenvattingen van de Rijkshuisstijl Community Open Hour' }), (0, t.jsx)(n.br, {}), '\n', 'Overzicht van wat er in de Open Hours is besproken, handig als je een sessie hebt gemist.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'github-projectborden', children: 'GitHub projectborden' }), '\n', (0, t.jsx)(n.p, { children: 'We gebruiken drie GitHub projectborden om het werk te organiseren en inzichtelijk te houden.' }), '\n', (0, t.jsxs)(n.h4, { id: '1-rijkshuisstijl-community-sprintbord', children: ['1. ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/59/views/7?pane=info', children: 'Rijkshuisstijl Community Sprintbord' })] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit bord wordt gebruikt tijdens de tweewekelijkse ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-sprint-planning/', children: 'Rijkshuisstijl Community Sprint planning' }), '.\nHier zie je aan welke issues teams werken en waar samenwerking mogelijk is.'] }), '\n', (0, t.jsx)(n.p, { children: 'Het sprintbord is bedoeld voor iedereen die meedoet aan de sprints of namens een team wil aansluiten. Soms sluit \xe9\xe9n persoon namens een groter team aan, om afstemming te houden zonder dat het hele team aanwezig hoeft te zijn.' }), '\n', (0, t.jsxs)(n.h4, { id: '2-rijkshuisstijl-community-backlog', children: ['2. ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/86/views/1?pane=info', children: 'Rijkshuisstijl Community Backlog' })] }), '\n', (0, t.jsx)(n.p, { children: 'De backlog bevat alle openstaande issues, los van sprints of organisaties.' }), '\n', (0, t.jsx)(n.p, { children: 'Hier vind je onder andere:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Issues die tijdens de tweewekelijkse ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-refinement/', children: 'Rijkshuisstijl Community Refinement' }), ' worden besproken.'] }), '\n', (0, t.jsx)(n.li, { children: 'Issues die iedereen kan oppakken, varierend van "good first issue" tot "help wanted".' }), '\n', (0, t.jsx)(n.li, { children: 'Issues die geschikt zijn voor mensen die niet op Slack zitten of zelfstandig willen bijdragen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'De backlog is de plek om iets te vinden als je wilt bijdragen aan de community, ongeacht je rol of organisatie en zonder dat je actief mee hoeft te doen aan de community.' }), '\n', (0, t.jsxs)(n.h4, { id: '3-rijkshuisstijl-community-component-status', children: ['3. ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/83/views/6?pane=info', children: 'Rijkshuisstijl Community Component status' })] }), '\n', (0, t.jsx)(n.p, { children: 'Dit bord geeft een overzicht van de status van alle componenten.' }), '\n', (0, t.jsx)(n.p, { children: 'Per component zie je onder andere:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De huidige status van vereisten, zoals "Rijkshuisstijl 2025 interpretatie", "Visuele regressietest" en "Code komt overeen met Figma".' }), '\n', (0, t.jsx)(n.li, { children: 'Status en links naar de component in Figma en de Storybook per framework.' }), '\n', (0, t.jsx)(n.li, { children: 'Links naar relevante issues en discussies via de GitHub labels. Zo kan je zien hoe je kunt bijdragen om een component verder te verbeteren.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Het is de snelste manier om alles over een component te vinden.' }), '\n', (0, t.jsx)(n.h3, { id: 'voorbeelden-en-componenten', children: 'Voorbeelden en componenten' }), '\n', (0, t.jsx)(n.p, { children: 'Wil je direct zien hoe componenten eruitzien of hoe je ze kunt gebruiken?' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://rijkshuisstijl-community.vercel.app/', children: 'Rijkshuisstijl Community Storybook' }), (0, t.jsx)(n.br, {}), '\n', 'Een overzicht van alle componenten, varianten en templates.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.rijkshuisstijl-community.nl/', children: 'Rijkshuisstijl Community Website' }), (0, t.jsx)(n.br, {}), '\n', 'Een voorbeeldwebsite die de componenten in praktijk toont en achtergrondinformatie geeft over de community.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'videos', children: "Video's" }), '\n', (0, t.jsx)(n.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates uit de Rijkshuisstijl Community Sprint.' }), '\n', (0, t.jsx)(o.L, { id: 'PLnAxFMscDU3FHVDYR9WvX3d84JdQ5Q3tJ', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-rijkshuisstijl-community-sprint-heartbeat-playlist.png', title: 'Rijkshuisstijl Community updates' }), '\n', (0, t.jsx)(n.h2, { id: 'voor-wie-is-dit-relevant', children: 'Voor wie is dit relevant?' }), '\n', (0, t.jsx)(n.p, { children: 'Deze sprint is bedoeld voor iedereen die werkt aan Rijksoverheidswebsites, en in het bijzonder voor:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Designers die willen bijdragen aan een gedeelde visuele stijl.' }), '\n', (0, t.jsx)(n.li, { children: 'Developers die componenten implementeren volgens Rijkshuisstijl.' }), '\n', (0, t.jsx)(n.li, { children: 'Product Owners die keuzes maken over ontwerpstandaarden.' }), '\n', (0, t.jsx)(n.li, { children: 'Iedereen die bijdraagt aan een toegankelijk, samenhangend digitaal landschap.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-kun-je-bijdragen-of-meedoen', children: 'Hoe kun je bijdragen of meedoen?' }), '\n', (0, t.jsx)(n.h3, { id: 'meepraten-of-input-geven', children: 'Meepraten of input geven?' }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt ons ook vinden op Slack. Meld je aan bij onze ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' en sluit aan bij het #nl-design-system-kanaal.'] }), '\n', (0, t.jsx)(n.p, { children: 'We organiseren de volgende vaste momenten om samen te komen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Elke oneven week op dinsdag om 16:00 uur een ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Elke oneven week op donderdag om 14:00 uur een ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-refinement/', children: 'Rijkshuisstijl Community Refinement' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Elke oneven week op donderdag om 15:00 uur een ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-sprint-planning/', children: 'Rijkshuisstijl Community Sprint planning' })] }), '\n'] }), '\n', (0, t.jsx)(d.e2, { children: (0, t.jsxs)(l.v, { href: '/community/community-sprints/rijkshuisstijl-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, t.jsx)(a.A, {})] }) }), '\n', (0, t.jsxs)(n.p, { children: ['Ook kan je gedurende elke sprint de Rijkshuisstijl Community volgen en deelnemen aan de slowchat in het ', (0, t.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C05AQK9R41G', children: '#rijkshuisstijl-community' }), '-kanaal.'] }), '\n', (0, t.jsx)(n.h3, { id: 'meedoen-in-figma', children: 'Meedoen in Figma?' }), '\n', (0, t.jsxs)(n.p, { children: ['Rijkshuisstijl Community gebruikt in Figma ', (0, t.jsx)(n.a, { href: '/handboek/designer/figma-structuur/#wat-zijn-connected-projects/', children: 'Connected Projects' }), ', een experimentele manier van samenwerken. Hierdoor kunnen ontwerpers van verschillende organisaties, zoals Logius en RVO, eenvoudig de nieuwste versie van componenten, iconen en elementen uit de Rijkshuisstijl bibliotheken gebruiken, zonder handmatig te hoeven updaten.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: 'https://www.figma.com/files/1448979839456618655/team/1547145874815175838', children: 'Bekijk Rijkshuisstijl Community Connected Project' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Werk je als organisatie met de Rijkshuisstijl en wil je bijdragen aan de ontwikkeling van componenten? Dat kan! Laat een bericht achter in het ', (0, t.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C05AQK9R41G', children: '#rijkshuisstijl-community' }), '-kanaal in Slack, dan helpen we je op weg.'] }), '\n', (0, t.jsx)(n.h3, { id: 'zelf-iets-aandragen-of-checken', children: 'Zelf iets aandragen of checken?' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Bekijk het ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/59/views/7?pane=info', children: 'GitHub Sprintbord' }), ' voor de actieve sprint.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Pak direct issues op van de ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/86/views/1?pane=info', children: 'GitHub Backlog' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Dien een ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues', children: 'GitHub issue' }), ' in.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Breng je onderwerp in tijdens de ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/#over-de-rijkshuisstijl-community', children: 'Rijkshuisstijl Community Open Hour' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Rijkshuisstijl Community? Stel je vraag ', (0, t.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: 'via Slack' }), ' of stuur ons een mailtje op ', (0, t.jsx)('a', { href: 'mailto:kernteam@nldesignsystem.nl', children: (0, t.jsx)(n.a, { href: 'mailto:kernteam@nldesignsystem.nl', children: 'kernteam@nldesignsystem.nl' }) })] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
  },
  78236(e, n, i) {
   i.d(n, { A: () => l });
   var s = i(86070),
    t = i(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, n, i, s, t) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == t ? void 0 : t.name) || n, thumbnailUrl: [(null == t ? void 0 : t.thumbnailUrl) || i], embedUrl: (null == t ? void 0 : t.embedUrl) || `${s}/embed/${e}`, contentUrl: (null == t ? void 0 : t.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == t ? void 0 : t.description) && { description: t.description }), ...((null == t ? void 0 : t.uploadDate) && { uploadDate: t.uploadDate }), ...((null == t ? void 0 : t.duration) && { duration: t.duration }) };
    return JSON.stringify(r);
   }
   const l = t.forwardRef(function (e, n) {
    const [i, l] = t.useState(!1),
     [a, d] = t.useState(e.alwaysLoadIframe || !1),
     u = encodeURIComponent(e.id),
     m = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     c = e.title,
     h = e.poster || 'hqdefault',
     j = e.announce || 'Watch',
     p = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     k = t.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(p ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: u } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, i) => {
         n.append(i, e);
        }),
       n
      );
     }, [e.muted, p, e.enableJsApi, e.playlist, u, e.params]),
     g = t.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     v = t.useMemo(() => (e.playlist ? `${g}/embed/videoseries?${k.toString()}` : `${g}/embed/${u}?${k.toString()}`), [e.playlist, g, u, k]),
     y = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
     b = e.webp ? 'webp' : 'jpg',
     f = e.webp ? 'vi_webp' : 'vi',
     x = y
      ? ((e, n, i, s = 'maxresdefault') => {
         const [o, l] = (0, t.useState)('');
         return (
          (0, t.useEffect)(() => {
           const t = `https://img.youtube.com/${n}/${e}/${s}.${i}`,
            o = `https://img.youtube.com/${n}/${e}/hqdefault.${i}`,
            a = r[s],
            d = new Image();
           ((d.onload = () => {
            d.width < a ? l(o) : l(t);
           }),
            (d.onerror = () => l(o)),
            (d.src = t));
          }, [e, n, i, s]),
          o
         );
        })(e.id, f, b, h)
      : null,
     w = t.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${f}/${e.playlist ? m : u}/${h}.${b}`, [e.thumbnail, x, f, e.playlist, m, u, h, b]),
     C = e.activatedClass || 'lyt-activated',
     R = e.adNetwork || !1,
     z = e.aspectHeight || 9,
     S = e.aspectWidth || 16,
     D = e.iframeClass || '',
     H = e.playerClass || 'lty-playbtn',
     L = e.wrapperClass || 'yt-lite',
     $ = t.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     N = e.rel ? 'prefetch' : 'preload',
     I = e.containerElement || 'article',
     O = !1 !== e.noscriptFallback;
    return (
     t.useEffect(() => {
      a && ($(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
     }, [a, $, e.focusOnLoad, n]),
     (0, s.jsxs)(s.Fragment, {
      children: [
       !e.lazyLoad && (0, s.jsx)('link', { rel: N, href: w, as: 'image' }),
       (0, s.jsx)(s.Fragment, { children: i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('link', { rel: 'preconnect', href: g }), (0, s.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), R && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, s.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, s.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, c, w, g, e.seo) } }),
       O && !e.playlist && (0, s.jsx)('noscript', { children: (0, s.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${c} on YouTube`, children: ['Watch "', c, '" on YouTube'] }) }),
       (0, s.jsxs)(I, {
        onPointerOver: () => {
         i || l(!0);
        },
        onClick: () => {
         a || d(!0);
        },
        className: `${L} ${a ? C : ''}`,
        'data-title': c,
        role: a ? void 0 : 'img',
        'aria-label': a ? void 0 : `${c} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (z / S) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !a && (0, s.jsx)('img', { src: w, alt: `${c} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, s.jsx)('button', { type: 'button', className: H, 'aria-label': `${j} ${c}`, 'aria-hidden': a || void 0, tabIndex: a ? -1 : 0, children: (0, s.jsx)('span', { className: 'lty-visually-hidden', children: j }) }), a && (0, s.jsx)('iframe', { ref: n, className: D, title: c, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: v, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  88666(e, n, i) {
   i.d(n, { v: () => o });
   var s = i(63195),
    t = i(13526),
    r = i(86070);
   const o = ({ appearance: e, ...n }) => (0, r.jsx)(s.A, { className: (0, t.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
 },
]);
