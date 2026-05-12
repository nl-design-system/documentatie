/*! For license information please see 73ce5bea.ab03cb69.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [63390],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => a });
   var s = i(30758);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => o });
   var s = i(30758),
    t = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, n, i, o) => {
    const r = (0, s.forwardRef)(({ color: i = 'currentColor', size: r = 24, stroke: a = 2, title: l, className: d, children: c, ...u }, m) => (0, s.createElement)('svg', { ref: m, ...t[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: a, stroke: i }), ...u }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${i}`), r);
   };
  },
  20698(e, n, i) {
   i.d(n, { v: () => r });
   var s = i(53538),
    t = i(13526),
    o = i(86070);
   const r = ({ appearance: e, ...n }) => (0, o.jsx)(s.F, { className: (0, t.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  32025(e, n, i) {
   (i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => p, frontMatter: () => c, metadata: () => s, toc: () => h }));
   const s = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/index","title":"Rijkshuisstijl Community","description":"Lees meer over de NL Design System Rijkshuisstijl Community Sprint.","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/index.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/","permalink":"/community/community-sprints/rijkshuisstijl-community/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Rijkshuisstijl Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Over Rijkshuisstijl Community","pagination_label":"Over Rijkshuisstijl Community","description":"Lees meer over de NL Design System Rijkshuisstijl Community Sprint.","slug":"/community/community-sprints/rijkshuisstijl-community/","keywords":["nl design system","community sprints","rijkshuisstijl community"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden"},"next":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"}}');
   var t = i(86070),
    o = i(18439),
    r = i(72863),
    a = i(20698),
    l = i(64249),
    d = i(46447);
   const c = { title: 'Rijkshuisstijl Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Over Rijkshuisstijl Community', pagination_label: 'Over Rijkshuisstijl Community', description: 'Lees meer over de NL Design System Rijkshuisstijl Community Sprint.', slug: '/community/community-sprints/rijkshuisstijl-community/', keywords: ['nl design system', 'community sprints', 'rijkshuisstijl community'] },
    u = 'Community Sprint: Rijkshuisstijl Community',
    m = {},
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
    const n = { a: 'a', br: 'br', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'community-sprint-rijkshuisstijl-community', children: 'Community Sprint: Rijkshuisstijl Community' }) }), '\n', (0, t.jsxs)(n.p, { children: ['In de zomer van 2024 gingen de eerste Community Sprints van start voor teams die werken aan webapplicaties en websites binnen de Rijkshuisstijl. Deze sprints vormden het begin van een langdurige samenwerking tussen onder andere ', (0, t.jsx)(n.a, { href: 'https://logius.nl', children: 'Logius' }), ', Ministerie van Justitie en Veiligheid, en Rijksinstituut voor Volksgezondheid en Milieu (RIVM). In 2025 kwam daar een samenwerking met Dienst Publiek en Communicatie (DPC) bij.'] }), '\n', (0, t.jsx)(n.h2, { id: 'waar-gaat-deze-sprint-over', children: 'Waar gaat deze sprint over?' }), '\n', (0, t.jsx)(n.p, { children: 'De Rijkshuisstijl Community Sprint maakt deel uit van een samenwerkingsverband om NL Design System-componenten te ontwikkelen voor projecten die moeten voldoen aan de Rijkshuisstijl.' }), '\n', (0, t.jsx)(n.p, { children: 'Diverse organisaties van de centrale overheid van Nederland (bijvoorbeeld: Belastingdienst, DUO, Logius, SVB) en degenen die door hen zijn ingehuurd, werken in deze community sprint samen aan het ontwerpen en ontwikkelen van websites en webapplicaties.' }), '\n', (0, t.jsx)(n.h2, { id: 'denk-mee-over-designkeuzes-binnen-de-rijkshuisstijl', children: 'Denk mee over designkeuzes binnen de Rijkshuisstijl' }), '\n', (0, t.jsx)(n.p, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar \xe9\xe9n centrale JSON met design tokens. Daarmee kunnen componenten uit het NL Design System eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' }), '\n', (0, t.jsx)(n.p, { children: 'Tijdens dit proces maken we diverse designkeuzes. Om deze keuzes inzichtelijk \xe9n bespreekbaar te maken, zijn we gestart met een aantal GitHub Discussions. Iedereen die werkt met de Rijkshuisstijl of hieraan bijdraagt wordt uitgenodigd om mee te denken.' }), '\n', (0, t.jsx)(n.p, { children: 'Ook als je het eens bent met de voorgestelde keuzes, is een korte bevestiging al waardevol. Heb je zelf al keuzes gemaakt bij het stylen van componenten? Deel dan je overwegingen in de betreffende discussie. Zo brengen we alle kennis en argumentatie op \xe9\xe9n centrale plek samen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Ga naar de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions', children: 'Rijkshuisstijl Community Discussions rondom styling keuzes op GitHub' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'werk-en-resultaten', children: 'Werk en resultaten' }), '\n', (0, t.jsx)(n.p, { children: 'De Rijkshuisstijl Community is een Open Source project en werkt open en transparant. Alles wat we maken, zoals code, ontwerpen, documentatie en discussies, is voor iedereen zichtbaar en te gebruiken.' }), '\n', (0, t.jsx)(n.h3, { id: 'code-issues-en-bijdragen', children: 'Code, issues en bijdragen' }), '\n', (0, t.jsxs)(n.p, { children: ['Bekijk alle code, openstaande issues, pull requests en discussies in de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community', children: 'Rijkshuisstijl Community Repository op GitHub' }), '.\nHier vind je de bron van alle componenten, de richtlijnen en het werk van de community.'] }), '\n', (0, t.jsx)(n.h3, { id: 'ontwerpen-figma-en-design-tokens', children: 'Ontwerpen: Figma en design tokens' }), '\n', (0, t.jsx)(n.p, { children: 'Bekijk en gebruik de Figma bestanden en de design tokens. Deze vormen de basis voor een consistente manier van ontwerpen en implementeren.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community', children: 'NL Design System - Bibliotheek - Rijkshuisstijl Community in Figma' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NL-Design-System---Templates---Rijkshuisstijl', children: 'NL Design System - Templates - Rijkshuisstijl Community in Figma' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/figma/figma.tokens.json', children: 'Design tokens (JSON) in te laden in Token Studio' }) }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'github-discussions', children: 'GitHub Discussions' }), '\n', (0, t.jsx)(n.p, { children: 'In GitHub Discussions denken we samen na over verschillende onderwerpen. Iedereen kan meedoen, reageren of een nieuwe vraag stellen. Iedere bijdrage helpt, van korte bevestiging tot uitgebreid voorstel!' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-2025-interpretatie', children: 'Rijkshuisstijl 2025 styling keuzes' }), (0, t.jsx)(n.br, {}), '\n', 'Discussies over ontwerpkeuzes die nodig zijn voor Rijkshuisstijl 2025 op nieuwe en bestaande componenten.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/component-implementatie', children: 'Component implementaties' }), (0, t.jsx)(n.br, {}), '\n', 'Hier werken we toe naar \xe9\xe9n duidelijke, reproduceerbare beschrijving per component, zodat developers in elk framework dezelfde resultaten kunnen bouwen.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-community-open-hour', children: 'Samenvattingen van de Rijkshuisstijl Community Open Hour' }), (0, t.jsx)(n.br, {}), '\n', 'Overzicht van wat er in de Open Hours is besproken, handig als je een sessie hebt gemist.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'github-projectborden', children: 'GitHub projectborden' }), '\n', (0, t.jsx)(n.p, { children: 'We gebruiken drie GitHub projectborden om het werk te organiseren en inzichtelijk te houden.' }), '\n', (0, t.jsxs)(n.h4, { id: '1-rijkshuisstijl-community-sprintbord', children: ['1. ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/59/views/7?pane=info', children: 'Rijkshuisstijl Community Sprintbord' })] }), '\n', (0, t.jsx)(n.p, { children: 'Hier zie je aan welke issues teams in de community werken en waar samenwerking mogelijk is. Organisaties en teams gebruiken ook veelal hun eigen interne projectborden.' }), '\n', (0, t.jsx)(n.p, { children: 'Het sprintbord is bedoeld voor iedereen die meedoet aan de sprints of namens een team wil aansluiten. Soms sluit \xe9\xe9n persoon namens een groter team aan, om afstemming te houden zonder dat het hele team aanwezig hoeft te zijn.' }), '\n', (0, t.jsxs)(n.h4, { id: '2-rijkshuisstijl-community-backlog', children: ['2. ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/86/views/1?pane=info', children: 'Rijkshuisstijl Community Backlog' })] }), '\n', (0, t.jsx)(n.p, { children: 'De backlog bevat alle openstaande issues, los van sprints of organisaties.' }), '\n', (0, t.jsx)(n.p, { children: 'Hier vind je onder andere:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Issues die iedereen kan oppakken, varierend van "good first issue" tot "help wanted".' }), '\n', (0, t.jsx)(n.li, { children: 'Issues die geschikt zijn voor mensen die niet op Slack zitten of zelfstandig willen bijdragen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'De backlog is de plek om iets te vinden als je wilt bijdragen aan de community, ongeacht je rol of organisatie en zonder dat je actief mee hoeft te doen aan de community.' }), '\n', (0, t.jsxs)(n.h4, { id: '3-rijkshuisstijl-community-component-status', children: ['3. ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/83/views/6?pane=info', children: 'Rijkshuisstijl Community Component status' })] }), '\n', (0, t.jsx)(n.p, { children: 'Dit bord geeft een overzicht van de status van alle componenten.' }), '\n', (0, t.jsx)(n.p, { children: 'Per component zie je onder andere:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De huidige status van vereisten, zoals "Rijkshuisstijl 2025 interpretatie", "Visuele regressietest" en "Code komt overeen met Figma".' }), '\n', (0, t.jsx)(n.li, { children: 'Status en links naar de component in Figma en de Storybook per framework.' }), '\n', (0, t.jsx)(n.li, { children: 'Links naar relevante issues en discussies via de GitHub labels. Zo kan je zien hoe je kunt bijdragen om een component verder te verbeteren.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Het is de snelste manier om alles over een component te vinden.' }), '\n', (0, t.jsx)(n.h3, { id: 'voorbeelden-en-componenten', children: 'Voorbeelden en componenten' }), '\n', (0, t.jsx)(n.p, { children: 'Wil je direct zien hoe componenten eruitzien of hoe je ze kunt gebruiken?' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://rijkshuisstijl-community.vercel.app/', children: 'Rijkshuisstijl Community Storybook' }), (0, t.jsx)(n.br, {}), '\n', 'Een overzicht van alle componenten, varianten en templates.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.rijkshuisstijl-community.nl/', children: 'Rijkshuisstijl Community Website' }), (0, t.jsx)(n.br, {}), '\n', 'Een voorbeeldwebsite die de componenten in praktijk toont en achtergrondinformatie geeft over de community.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'videos', children: "Video's" }), '\n', (0, t.jsx)(n.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates uit de Rijkshuisstijl Community Sprint.' }), '\n', (0, t.jsx)(r.L, { id: 'PLnAxFMscDU3FHVDYR9WvX3d84JdQ5Q3tJ', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-rijkshuisstijl-community-sprint-heartbeat-playlist.png', title: 'Rijkshuisstijl Community updates' }), '\n', (0, t.jsx)(n.h2, { id: 'voor-wie-is-dit-relevant', children: 'Voor wie is dit relevant?' }), '\n', (0, t.jsx)(n.p, { children: 'Deze sprint is bedoeld voor iedereen die werkt aan Rijksoverheidswebsites, en in het bijzonder voor:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Designers die willen bijdragen aan een gedeelde visuele stijl.' }), '\n', (0, t.jsx)(n.li, { children: 'Developers die componenten implementeren volgens Rijkshuisstijl.' }), '\n', (0, t.jsx)(n.li, { children: 'Product Owners die keuzes maken over ontwerpstandaarden.' }), '\n', (0, t.jsx)(n.li, { children: 'Iedereen die bijdraagt aan een toegankelijk, samenhangend digitaal landschap.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-kun-je-bijdragen-of-meedoen', children: 'Hoe kun je bijdragen of meedoen?' }), '\n', (0, t.jsx)(n.h3, { id: 'meepraten-of-input-geven', children: 'Meepraten of input geven?' }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt ons ook vinden op Slack. Meld je aan bij onze ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' en sluit aan bij het #nl-design-system-kanaal.'] }), '\n', (0, t.jsx)(n.p, { children: 'We organiseren de volgende vaste momenten om samen te komen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Elke oneven week op dinsdag om 16:00 uur een ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.e2, { children: (0, t.jsxs)(a.v, { href: '/community/community-sprints/rijkshuisstijl-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, t.jsx)(l.A, {})] }) }), '\n', (0, t.jsxs)(n.p, { children: ['Ook kan je gedurende elke sprint de Rijkshuisstijl Community volgen en deelnemen aan de slowchat op ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, t.jsx)(n.code, { children: '#rijkshuisstijl-community' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'meedoen-in-figma', children: 'Meedoen in Figma?' }), '\n', (0, t.jsxs)(n.p, { children: ['Rijkshuisstijl Community gebruikt in Figma ', (0, t.jsx)(n.a, { href: '/handboek/designer/figma-structuur/#wat-zijn-connected-projects/', children: 'Connected Projects' }), ', een experimentele manier van samenwerken. Hierdoor kunnen ontwerpers van verschillende organisaties, zoals Logius en RVO, eenvoudig de nieuwste versie van componenten, iconen en elementen uit de Rijkshuisstijl bibliotheken gebruiken, zonder handmatig te hoeven updaten.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: 'https://www.figma.com/files/1448979839456618655/team/1547145874815175838', children: 'Bekijk Rijkshuisstijl Community Connected Project' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Werk je als organisatie met de Rijkshuisstijl en wil je bijdragen aan de ontwikkeling van componenten? Dat kan! Laat een bericht achter op ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, t.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ', dan helpen we je op weg.'] }), '\n', (0, t.jsx)(n.h3, { id: 'zelf-iets-aandragen-of-checken', children: 'Zelf iets aandragen of checken?' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Bekijk het ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/59/views/7?pane=info', children: 'GitHub Sprintbord' }), ' voor de actieve sprint.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Pak direct issues op van de ', (0, t.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/86/views/1?pane=info', children: 'GitHub Backlog' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Dien een ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues', children: 'GitHub issue' }), ' in.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Breng je onderwerp in tijdens de ', (0, t.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/#over-de-rijkshuisstijl-community', children: 'Rijkshuisstijl Community Open Hour' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Rijkshuisstijl Community? Stel je vraag op ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' of stuur ons een mailtje op ', (0, t.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
  },
  53538(e, n, i) {
   i.d(n, { F: () => o, N: () => r });
   var s = i(13526),
    t = i(86070);
   const o = ({ children: e, ...n }) => {
     const { to: i, href: s, ...o } = n;
     let r = i || s;
     const a = new URL(r, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (r = a.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, t.jsx)('a', { href: r, ...o, children: e }));
    },
    r = ({ className: e, ...n }) => (0, t.jsx)(o, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  72863(e, n, i) {
   i.d(n, { L: () => l });
   var s = i(86070),
    t = i(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, i, s, t) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: t?.name || n, thumbnailUrl: [t?.thumbnailUrl || i], embedUrl: t?.embedUrl || `${s}/embed/${e}`, contentUrl: t?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(t?.description && { description: t.description }), ...(t?.uploadDate && { uploadDate: t.uploadDate }), ...(t?.duration && { duration: t.duration }) };
    return JSON.stringify(o);
   }
   const a = t.forwardRef(function (e, n) {
     const [i, a] = t.useState(!1),
      [l, d] = t.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      m = e.title,
      h = e.poster || 'hqdefault',
      j = e.announce || 'Watch',
      p = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      k = t.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(p ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, i) => {
          n.append(i, e);
         }),
        n
       );
      }, [e.muted, p, e.enableJsApi, e.playlist, c, e.params]),
      g = t.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      y = t.useMemo(() => (e.playlist ? `${g}/embed/videoseries?${k.toString()}` : `${g}/embed/${c}?${k.toString()}`), [e.playlist, g, c, k]),
      b = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      v = e.webp ? 'webp' : 'jpg',
      f = e.webp ? 'vi_webp' : 'vi',
      w = b
       ? ((e, n, i, s = 'maxresdefault') => {
          const [r, a] = (0, t.useState)('');
          return (
           (0, t.useEffect)(() => {
            const t = `https://img.youtube.com/${n}/${e}/${s}.${i}`,
             r = `https://img.youtube.com/${n}/${e}/hqdefault.${i}`,
             l = o[s],
             d = new Image();
            ((d.onload = () => {
             d.width < l ? a(r) : a(t);
            }),
             (d.onerror = () => a(r)),
             (d.src = t));
           }, [e, n, i, s]),
           r
          );
         })(e.id, f, v, h)
       : null,
      x = t.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${f}/${e.playlist ? u : c}/${h}.${v}`, [e.thumbnail, w, f, e.playlist, u, c, h, v]),
      C = e.activatedClass || 'lyt-activated',
      R = e.adNetwork || !1,
      z = e.aspectHeight || 9,
      S = e.aspectWidth || 16,
      D = e.iframeClass || '',
      L = e.playerClass || 'lty-playbtn',
      P = e.wrapperClass || 'yt-lite',
      $ = t.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      H = e.rel ? 'prefetch' : 'preload',
      O = e.containerElement || 'article',
      E = !1 !== e.noscriptFallback,
      N = () => {
       l || d(!0);
      };
     return (
      t.useEffect(() => {
       l && ($(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [l, $, e.focusOnLoad, n]),
      t.useEffect(() => {
       if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let i = !1,
        s = !1;
       const t = (s) => {
        if ('https://www.youtube.com' !== s.origin && 'https://www.youtube-nocookie.com' !== s.origin) return;
        let t;
        try {
         t = 'string' == typeof s.data ? JSON.parse(s.data) : s.data;
        } catch {
         return;
        }
        switch (t.event) {
         case 'onReady':
          i || ((i = !0), e.onReady && e.onReady({ videoId: e.id, title: m }));
          break;
         case 'infoDelivery':
          if (void 0 !== t.info?.playerState) {
           const i = t.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: i, currentTime: t.info.currentTime, duration: t.info.duration }), i)) {
            case 1:
             e.onPlay?.();
             break;
            case 2:
             e.onPause?.();
             break;
            case 0:
             (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
             break;
            case 3:
             e.onBuffering?.();
           }
          }
          (void 0 !== t.info?.playbackRate && e.onPlaybackRateChange?.(t.info.playbackRate), void 0 !== t.info?.playbackQuality && e.onPlaybackQualityChange?.(t.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== t.info?.playerState) {
           const i = t.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: i, currentTime: t.info.currentTime, duration: t.info.duration }), i)) {
            case 1:
             e.onPlay?.();
             break;
            case 2:
             e.onPause?.();
             break;
            case 0:
             (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
             break;
            case 3:
             e.onBuffering?.();
           }
          }
          break;
         case 'onError':
          if (t.info && 'errorCode' in t.info) {
           const n = t.info.errorCode;
           e.onError && e.onError(n);
          }
          break;
         case 'onPlaybackRateChange':
          void 0 !== t.info?.playbackRate && e.onPlaybackRateChange?.(t.info.playbackRate);
          break;
         case 'onPlaybackQualityChange':
          void 0 !== t.info?.playbackQuality && e.onPlaybackQualityChange?.(t.info.playbackQuality);
        }
       };
       window.addEventListener('message', t);
       const o = [],
        r = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        a = () => {
         s ||
          ((s = !0),
          r(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           o.push(setTimeout(r, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', a), 'complete' === n.current.contentDocument?.readyState && a())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            o.push(setTimeout(r, e));
           }),
        () => {
         (window.removeEventListener('message', t), o.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', a));
        }
       );
      }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, m, n]),
      (0, s.jsxs)(s.Fragment, {
       children: [
        !e.lazyLoad && (0, s.jsx)('link', { rel: H, href: x, as: 'image' }),
        (0, s.jsx)(s.Fragment, { children: i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('link', { rel: 'preconnect', href: g }), (0, s.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), R && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, s.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, s.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, m, x, g, e.seo) } }),
        E && !e.playlist && (0, s.jsx)('noscript', { children: (0, s.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${m} on YouTube`, children: ['Watch "', m, '" on YouTube'] }) }),
        (0, s.jsxs)(O, {
         onPointerOver: () => {
          i || a(!0);
         },
         onClick: N,
         className: `${P} ${l ? C : ''}`,
         'data-title': m,
         role: l || e.lazyLoad ? void 0 : 'img',
         'aria-label': l ? void 0 : `${m} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (z / S) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, s.jsx)('img', { src: x, alt: `${m} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, s.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, s.jsx)('button', { type: 'button', className: L, 'aria-label': `${j} ${m}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: N, children: (0, s.jsx)('span', { className: 'lty-visually-hidden', children: j }) }), l && (0, s.jsx)('iframe', { ref: n, className: D, title: m, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: n, ...i }) => (0, s.jsx)(a, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...i });
  },
 },
]);
