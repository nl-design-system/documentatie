/*! For license information please see 73ce5bea.80411368.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [63390],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => a });
   var t = i(30758);
   const s = {},
    o = t.createContext(s);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => o });
   var t = i(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, n, i, o) => {
    const r = (0, t.forwardRef)(({ color: i = 'currentColor', size: r = 24, stroke: a = 2, title: l, className: d, children: c, ...u }, m) => (0, t.createElement)('svg', { ref: m, ...s[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: a, stroke: i }), ...u }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${i}`), r);
   };
  },
  20698(e, n, i) {
   i.d(n, { v: () => r });
   var t = i(53538),
    s = i(13526),
    o = i(86070);
   const r = ({ appearance: e, ...n }) => (0, o.jsx)(t.F, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  32025(e, n, i) {
   (i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => p, frontMatter: () => c, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/index","title":"Rijkshuisstijl Community","description":"Lees meer over de NL Design System Rijkshuisstijl Community Sprint.","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/index.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/","permalink":"/community/community-sprints/rijkshuisstijl-community/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Rijkshuisstijl Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Over Rijkshuisstijl Community","pagination_label":"Over Rijkshuisstijl Community","description":"Lees meer over de NL Design System Rijkshuisstijl Community Sprint.","slug":"/community/community-sprints/rijkshuisstijl-community/","keywords":["nl design system","community sprints","rijkshuisstijl community"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/community/community-sprints/mijn-services-community/aanmelden"},"next":{"title":"Over Rijkshuisstijl Community","permalink":"/community/community-sprints/rijkshuisstijl-community/"}}');
   var s = i(86070),
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
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'community-sprint-rijkshuisstijl-community', children: 'Community Sprint: Rijkshuisstijl Community' }) }), '\n', (0, s.jsxs)(n.p, { children: ['In de zomer van 2024 gingen de eerste Community Sprints van start voor teams die werken aan webapplicaties en websites binnen de Rijkshuisstijl. Deze sprints vormden het begin van een langdurige samenwerking tussen onder andere ', (0, s.jsx)(n.a, { href: 'https://logius.nl', children: 'Logius' }), ', Ministerie van Justitie en Veiligheid, en Rijksinstituut voor Volksgezondheid en Milieu (RIVM). In 2025 kwam daar een samenwerking met Dienst Publiek en Communicatie (DPC) bij.'] }), '\n', (0, s.jsx)(n.h2, { id: 'waar-gaat-deze-sprint-over', children: 'Waar gaat deze sprint over?' }), '\n', (0, s.jsx)(n.p, { children: 'De Rijkshuisstijl Community Sprint maakt deel uit van een samenwerkingsverband om NL Design System-componenten te ontwikkelen voor projecten die moeten voldoen aan de Rijkshuisstijl.' }), '\n', (0, s.jsx)(n.p, { children: 'Diverse organisaties van de centrale overheid van Nederland (bijvoorbeeld: Belastingdienst, DUO, Logius, SVB) en degenen die door hen zijn ingehuurd, werken in deze community sprint samen aan het ontwerpen en ontwikkelen van websites en webapplicaties.' }), '\n', (0, s.jsx)(n.h2, { id: 'denk-mee-over-designkeuzes-binnen-de-rijkshuisstijl', children: 'Denk mee over designkeuzes binnen de Rijkshuisstijl' }), '\n', (0, s.jsx)(n.p, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar \xe9\xe9n centrale JSON met design tokens. Daarmee kunnen componenten uit het NL Design System eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' }), '\n', (0, s.jsx)(n.p, { children: 'Tijdens dit proces maken we diverse designkeuzes. Om deze keuzes inzichtelijk \xe9n bespreekbaar te maken, zijn we gestart met een aantal GitHub Discussions. Iedereen die werkt met de Rijkshuisstijl of hieraan bijdraagt wordt uitgenodigd om mee te denken.' }), '\n', (0, s.jsx)(n.p, { children: 'Ook als je het eens bent met de voorgestelde keuzes, is een korte bevestiging al waardevol. Heb je zelf al keuzes gemaakt bij het stylen van componenten? Deel dan je overwegingen in de betreffende discussie. Zo brengen we alle kennis en argumentatie op \xe9\xe9n centrale plek samen.' }), '\n', (0, s.jsxs)(n.p, { children: ['Ga naar de ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions', children: 'Rijkshuisstijl Community Discussions rondom styling keuzes op GitHub' }), '.'] }), '\n', (0, s.jsx)(n.h2, { id: 'werk-en-resultaten', children: 'Werk en resultaten' }), '\n', (0, s.jsx)(n.p, { children: 'De Rijkshuisstijl Community is een Open Source project en werkt open en transparant. Alles wat we maken, zoals code, ontwerpen, documentatie en discussies, is voor iedereen zichtbaar en te gebruiken.' }), '\n', (0, s.jsx)(n.h3, { id: 'code-issues-en-bijdragen', children: 'Code, issues en bijdragen' }), '\n', (0, s.jsxs)(n.p, { children: ['Bekijk alle code, openstaande issues, pull requests en discussies in de ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community', children: 'Rijkshuisstijl Community Repository op GitHub' }), '.\nHier vind je de bron van alle componenten, de richtlijnen en het werk van de community.'] }), '\n', (0, s.jsx)(n.h3, { id: 'ontwerpen-figma-en-design-tokens', children: 'Ontwerpen: Figma en design tokens' }), '\n', (0, s.jsx)(n.p, { children: 'Bekijk en gebruik de Figma bestanden en de design tokens. Deze vormen de basis voor een consistente manier van ontwerpen en implementeren.' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community', children: 'NL Design System - Bibliotheek - Rijkshuisstijl Community in Figma' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NL-Design-System---Templates---Rijkshuisstijl', children: 'NL Design System - Templates - Rijkshuisstijl Community in Figma' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/figma/figma.tokens.json', children: 'Design tokens (JSON) in te laden in Token Studio' }) }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'github-discussions', children: 'GitHub Discussions' }), '\n', (0, s.jsx)(n.p, { children: 'In GitHub Discussions denken we samen na over verschillende onderwerpen. Iedereen kan meedoen, reageren of een nieuwe vraag stellen. Iedere bijdrage helpt, van korte bevestiging tot uitgebreid voorstel!' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-2025-interpretatie', children: 'Rijkshuisstijl 2025 styling keuzes' }), (0, s.jsx)(n.br, {}), '\n', 'Discussies over ontwerpkeuzes die nodig zijn voor Rijkshuisstijl 2025 op nieuwe en bestaande componenten.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/component-implementatie', children: 'Component implementaties' }), (0, s.jsx)(n.br, {}), '\n', 'Hier werken we toe naar \xe9\xe9n duidelijke, reproduceerbare beschrijving per component, zodat developers in elk framework dezelfde resultaten kunnen bouwen.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-community-open-hour', children: 'Samenvattingen van de Rijkshuisstijl Community Open Hour' }), (0, s.jsx)(n.br, {}), '\n', 'Overzicht van wat er in de Open Hours is besproken, handig als je een sessie hebt gemist.'] }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'github-projectborden', children: 'GitHub projectborden' }), '\n', (0, s.jsx)(n.p, { children: 'We gebruiken drie GitHub projectborden om het werk te organiseren en inzichtelijk te houden.' }), '\n', (0, s.jsxs)(n.h4, { id: '1-rijkshuisstijl-community-sprintbord', children: ['1. ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/59/views/7?pane=info', children: 'Rijkshuisstijl Community Sprintbord' })] }), '\n', (0, s.jsx)(n.p, { children: 'Hier zie je aan welke issues teams in de community werken en waar samenwerking mogelijk is. Organisaties en teams gebruiken ook veelal hun eigen interne projectborden.' }), '\n', (0, s.jsx)(n.p, { children: 'Het sprintbord is bedoeld voor iedereen die meedoet aan de sprints of namens een team wil aansluiten. Soms sluit \xe9\xe9n persoon namens een groter team aan, om afstemming te houden zonder dat het hele team aanwezig hoeft te zijn.' }), '\n', (0, s.jsxs)(n.h4, { id: '2-rijkshuisstijl-community-backlog', children: ['2. ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/86/views/1?pane=info', children: 'Rijkshuisstijl Community Backlog' })] }), '\n', (0, s.jsx)(n.p, { children: 'De backlog bevat alle openstaande issues, los van sprints of organisaties.' }), '\n', (0, s.jsx)(n.p, { children: 'Hier vind je onder andere:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Issues die iedereen kan oppakken, varierend van "good first issue" tot "help wanted".' }), '\n', (0, s.jsx)(n.li, { children: 'Issues die geschikt zijn voor mensen die niet op Slack zitten of zelfstandig willen bijdragen.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'De backlog is de plek om iets te vinden als je wilt bijdragen aan de community, ongeacht je rol of organisatie en zonder dat je actief mee hoeft te doen aan de community.' }), '\n', (0, s.jsxs)(n.h4, { id: '3-rijkshuisstijl-community-component-status', children: ['3. ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/83/views/6?pane=info', children: 'Rijkshuisstijl Community Component status' })] }), '\n', (0, s.jsx)(n.p, { children: 'Dit bord geeft een overzicht van de status van alle componenten.' }), '\n', (0, s.jsx)(n.p, { children: 'Per component zie je onder andere:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'De huidige status van vereisten, zoals "Rijkshuisstijl 2025 interpretatie", "Visuele regressietest" en "Code komt overeen met Figma".' }), '\n', (0, s.jsx)(n.li, { children: 'Status en links naar de component in Figma en de Storybook per framework.' }), '\n', (0, s.jsx)(n.li, { children: 'Links naar relevante issues en discussies via de GitHub labels. Zo kan je zien hoe je kunt bijdragen om een component verder te verbeteren.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Het is de snelste manier om alles over een component te vinden.' }), '\n', (0, s.jsx)(n.h3, { id: 'voorbeelden-en-componenten', children: 'Voorbeelden en componenten' }), '\n', (0, s.jsx)(n.p, { children: 'Wil je direct zien hoe componenten eruitzien of hoe je ze kunt gebruiken?' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://rijkshuisstijl-community.vercel.app/', children: 'Rijkshuisstijl Community Storybook' }), (0, s.jsx)(n.br, {}), '\n', 'Een overzicht van alle componenten, varianten en templates.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.rijkshuisstijl-community.nl/', children: 'Rijkshuisstijl Community Website' }), (0, s.jsx)(n.br, {}), '\n', 'Een voorbeeldwebsite die de componenten in praktijk toont en achtergrondinformatie geeft over de community.'] }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'videos', children: "Video's" }), '\n', (0, s.jsx)(n.p, { children: 'Bekijk hieronder de YouTube afspeellijst met updates uit de Rijkshuisstijl Community Sprint.' }), '\n', (0, s.jsx)(r.L, { id: 'PLnAxFMscDU3FHVDYR9WvX3d84JdQ5Q3tJ', playlist: !0, thumbnail: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-rijkshuisstijl-community-sprint-heartbeat-playlist.png', title: 'Rijkshuisstijl Community updates' }), '\n', (0, s.jsx)(n.h2, { id: 'voor-wie-is-dit-relevant', children: 'Voor wie is dit relevant?' }), '\n', (0, s.jsx)(n.p, { children: 'Deze sprint is bedoeld voor iedereen die werkt aan Rijksoverheidswebsites, en in het bijzonder voor:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Designers die willen bijdragen aan een gedeelde visuele stijl.' }), '\n', (0, s.jsx)(n.li, { children: 'Developers die componenten implementeren volgens Rijkshuisstijl.' }), '\n', (0, s.jsx)(n.li, { children: 'Product Owners die keuzes maken over ontwerpstandaarden.' }), '\n', (0, s.jsx)(n.li, { children: 'Iedereen die bijdraagt aan een toegankelijk, samenhangend digitaal landschap.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-kun-je-bijdragen-of-meedoen', children: 'Hoe kun je bijdragen of meedoen?' }), '\n', (0, s.jsx)(n.h3, { id: 'meepraten-of-input-geven', children: 'Meepraten of input geven?' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt ons ook vinden op Slack. Meld je aan bij onze ', (0, s.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' en sluit aan bij het #nl-design-system-kanaal.'] }), '\n', (0, s.jsx)(n.p, { children: 'We organiseren de volgende vaste momenten om samen te komen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Elke oneven week op dinsdag om 16:00 uur een ', (0, s.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(d.e2, { children: (0, s.jsxs)(a.v, { href: '/community/community-sprints/rijkshuisstijl-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, s.jsx)(l.A, {})] }) }), '\n', (0, s.jsxs)(n.p, { children: ['Ook kan je gedurende elke sprint de Rijkshuisstijl Community volgen en deelnemen aan de slowchat op ', (0, s.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, s.jsx)(n.code, { children: '#rijkshuisstijl-community' }), '.'] }), '\n', (0, s.jsx)(n.h3, { id: 'meedoen-in-figma', children: 'Meedoen in Figma?' }), '\n', (0, s.jsxs)(n.p, { children: ['Rijkshuisstijl Community gebruikt in Figma ', (0, s.jsx)(n.a, { href: '/handboek/designer/figma-structuur/#wat-zijn-connected-projects/', children: 'Connected Projects' }), ', een experimentele manier van samenwerken. Hierdoor kunnen ontwerpers van verschillende organisaties, zoals Logius en RVO, eenvoudig de nieuwste versie van componenten, iconen en elementen uit de Rijkshuisstijl bibliotheken gebruiken, zonder handmatig te hoeven updaten.'] }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.figma.com/files/1448979839456618655/team/1547145874815175838', children: 'Bekijk Rijkshuisstijl Community Connected Project' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Werk je als organisatie met de Rijkshuisstijl en wil je bijdragen aan de ontwikkeling van componenten? Dat kan! Laat een bericht achter op ', (0, s.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, s.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ', dan helpen we je op weg.'] }), '\n', (0, s.jsx)(n.h3, { id: 'zelf-iets-aandragen-of-checken', children: 'Zelf iets aandragen of checken?' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Bekijk het ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/59/views/7?pane=info', children: 'GitHub Sprintbord' }), ' voor de actieve sprint.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Pak direct issues op van de ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/86/views/1?pane=info', children: 'GitHub Backlog' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Dien een ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues', children: 'GitHub issue' }), ' in.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Breng je onderwerp in tijdens de ', (0, s.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/#over-de-rijkshuisstijl-community', children: 'Rijkshuisstijl Community Open Hour' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, s.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Rijkshuisstijl Community? Stel je vraag op ', (0, s.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' of stuur ons een mailtje op ', (0, s.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j(e);
   }
  },
  53538(e, n, i) {
   i.d(n, { F: () => r, N: () => a });
   var t = i(13526),
    s = i(76097),
    o = i(86070);
   const r = ({ children: e, ...n }) => {
     const { to: i, href: t, ...r } = n;
     let a = i || t;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, s.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: a, ...r, children: e }));
    },
    a = ({ className: e, ...n }) => (0, o.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, i) {
   i.d(n, { A: () => t });
   const t = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  72863(e, n, i) {
   i.d(n, { L: () => l });
   var t = i(86070),
    s = i(30758);
   const o = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function r(e, n, i, t, s) {
    const o = { '@context': 'https://schema.org', '@type': 'VideoObject', name: s?.name || n, thumbnailUrl: [s?.thumbnailUrl || i], embedUrl: s?.embedUrl || `${t}/embed/${e}`, contentUrl: s?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(s?.description && { description: s.description }), ...(s?.uploadDate && { uploadDate: s.uploadDate }), ...(s?.duration && { duration: s.duration }) };
    return JSON.stringify(o);
   }
   const a = s.forwardRef(function (e, n) {
     const [i, a] = s.useState(!1),
      [l, d] = s.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      m = e.title,
      h = e.poster || 'hqdefault',
      j = e.announce || 'Watch',
      p = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      g = s.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(p ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, i) => {
          n.append(i, e);
         }),
        n
       );
      }, [e.muted, p, e.enableJsApi, e.playlist, c, e.params]),
      k = s.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      y = s.useMemo(() => (e.playlist ? `${k}/embed/videoseries?${g.toString()}` : `${k}/embed/${c}?${g.toString()}`), [e.playlist, k, c, g]),
      b = !e.thumbnail && !e.playlist && 'maxresdefault' === h,
      v = e.webp ? 'webp' : 'jpg',
      f = e.webp ? 'vi_webp' : 'vi',
      w = b
       ? ((e, n, i, t = 'maxresdefault') => {
          const [r, a] = (0, s.useState)('');
          return (
           (0, s.useEffect)(() => {
            const s = `https://img.youtube.com/${n}/${e}/${t}.${i}`,
             r = `https://img.youtube.com/${n}/${e}/hqdefault.${i}`,
             l = o[t],
             d = new Image();
            ((d.onload = () => {
             d.width < l ? a(r) : a(s);
            }),
             (d.onerror = () => a(r)),
             (d.src = s));
           }, [e, n, i, t]),
           r
          );
         })(e.id, f, v, h)
       : null,
      x = s.useMemo(() => e.thumbnail || w || `https://i.ytimg.com/${f}/${e.playlist ? u : c}/${h}.${v}`, [e.thumbnail, w, f, e.playlist, u, c, h, v]),
      C = e.activatedClass || 'lyt-activated',
      S = e.adNetwork || !1,
      R = e.aspectHeight || 9,
      z = e.aspectWidth || 16,
      D = e.iframeClass || '',
      A = e.playerClass || 'lty-playbtn',
      L = e.wrapperClass || 'yt-lite',
      O = s.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      N = e.rel ? 'prefetch' : 'preload',
      P = e.containerElement || 'article',
      T = !1 !== e.noscriptFallback,
      M = () => {
       l || d(!0);
      };
     return (
      s.useEffect(() => {
       l && (O(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [l, O, e.focusOnLoad, n]),
      s.useEffect(() => {
       if (!l || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let i = !1,
        t = !1;
       const s = (t) => {
        if ('https://www.youtube.com' !== t.origin && 'https://www.youtube-nocookie.com' !== t.origin) return;
        let s;
        try {
         s = 'string' == typeof t.data ? JSON.parse(t.data) : t.data;
        } catch {
         return;
        }
        switch (s.event) {
         case 'onReady':
          i || ((i = !0), e.onReady && e.onReady({ videoId: e.id, title: m }));
          break;
         case 'infoDelivery':
          if (void 0 !== s.info?.playerState) {
           const i = s.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: i, currentTime: s.info.currentTime, duration: s.info.duration }), i)) {
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
          (void 0 !== s.info?.playbackRate && e.onPlaybackRateChange?.(s.info.playbackRate), void 0 !== s.info?.playbackQuality && e.onPlaybackQualityChange?.(s.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== s.info?.playerState) {
           const i = s.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: i, currentTime: s.info.currentTime, duration: s.info.duration }), i)) {
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
          if (s.info && 'errorCode' in s.info) {
           const n = s.info.errorCode;
           e.onError && e.onError(n);
          }
          break;
         case 'onPlaybackRateChange':
          void 0 !== s.info?.playbackRate && e.onPlaybackRateChange?.(s.info.playbackRate);
          break;
         case 'onPlaybackQualityChange':
          void 0 !== s.info?.playbackQuality && e.onPlaybackQualityChange?.(s.info.playbackQuality);
        }
       };
       window.addEventListener('message', s);
       const o = [],
        r = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        a = () => {
         t ||
          ((t = !0),
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
         (window.removeEventListener('message', s), o.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', a));
        }
       );
      }, [l, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, m, n]),
      (0, t.jsxs)(t.Fragment, {
       children: [
        !e.lazyLoad && (0, t.jsx)('link', { rel: N, href: x, as: 'image' }),
        (0, t.jsx)(t.Fragment, { children: i && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: k }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), S && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, t.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: r(e.id, m, x, k, e.seo) } }),
        T && !e.playlist && (0, t.jsx)('noscript', { children: (0, t.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${m} on YouTube`, children: ['Watch "', m, '" on YouTube'] }) }),
        (0, t.jsxs)(P, {
         onPointerOver: () => {
          i || a(!0);
         },
         onClick: M,
         className: `${L} ${l ? C : ''}`,
         'data-title': m,
         role: l || e.lazyLoad ? void 0 : 'img',
         'aria-label': l ? void 0 : `${m} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${x})` }), '--aspect-ratio': (R / z) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !l && (0, t.jsx)('img', { src: x, alt: `${m} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !l && (0, t.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && l) && (0, t.jsx)('button', { type: 'button', className: A, 'aria-label': `${j} ${m}`, 'aria-hidden': l || void 0, tabIndex: l ? -1 : 0, onClick: M, children: (0, t.jsx)('span', { className: 'lty-visually-hidden', children: j }) }), l && (0, t.jsx)('iframe', { ref: n, className: D, title: m, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: y, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    l = ({ id: e, title: n, ...i }) => (0, t.jsx)(a, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...i });
  },
  76097(e, n, i) {
   i.d(n, { bo: () => s, KF: () => m, mJ: () => p, VZ: () => x, cR: () => w, Pv: () => g, qZ: () => r, kD: () => v, QQ: () => S, B2: () => h, Pc: () => l, f4: () => a, GT: () => f, fX: () => o, eQ: () => b, B_: () => y, o_: () => k });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => j(e));
     return u(c(n));
    },
    h = (e, n) => p(e).includes(n),
    j = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(c(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => u(c(e.projects.flatMap((e) => j(e)))),
    g = (e) => {
     const n = j(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: t, id: s, value: o }) => {
        const r = /^(.+) URL/.exec(t)[1],
         a = 'Storybook' === r ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: s, value: o, description: a };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    k = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? v(e[i], [...n, i]) : []));
   }
   function f(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   const w = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    C = new Set(['ics', 'json', 'pdf']),
    S = (e) => {
     const n = e.split('/').pop() ?? '',
      i = n.split('.').pop()?.toLowerCase();
     return void 0 !== i && C.has(i);
    };
  },
 },
]);
