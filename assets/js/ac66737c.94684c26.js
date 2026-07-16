'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [35235],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => o });
   var t = i(30758);
   const a = {},
    s = t.createContext(a);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  89166(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => r, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"handboek/organisatie/vragen-over-aanbestedingen","title":"Tips voor NL Design System in aanbestedingen","description":"Hoe kun je NL Design System opnemen, welke niveaus kun je kiezen en hoe krijg je de juiste expertise?","source":"@site/docs/handboek/organisatie/vragen-over-aanbestedingen.md","sourceDirName":"handboek/organisatie","slug":"/handboek/organisatie/vragen-over-aanbestedingen","permalink":"/handboek/organisatie/vragen-over-aanbestedingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/organisatie/vragen-over-aanbestedingen.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Tips voor NL Design System in aanbestedingen","title_sm":"Aanbestedingen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Aanbestedingen","sidebar_position":2,"navigation_order":2,"pagination_label":"Aanbestedingen","description":"Hoe kun je NL Design System opnemen, welke niveaus kun je kiezen en hoe krijg je de juiste expertise?","keywords":["leverancier","waarom NL Design System","waarom een design system"]},"sidebar":"handboek","previous":{"title":"Meedoen","permalink":"/handboek/organisatie/meedoen"},"next":{"title":"Beheren van een repository","permalink":"/handboek/organisatie/beheren-van-een-community-repository"}}');
   var a = i(86070),
    s = i(18439);
   const r = { title: 'Tips voor NL Design System in aanbestedingen', title_sm: 'Aanbestedingen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Aanbestedingen', sidebar_position: 2, navigation_order: 2, pagination_label: 'Aanbestedingen', description: 'Hoe kun je NL Design System opnemen, welke niveaus kun je kiezen en hoe krijg je de juiste expertise?', keywords: ['leverancier', 'waarom NL Design System', 'waarom een design system'] },
    o = 'NL Design System in aanbestedingen',
    d = {},
    l = [
     { value: 'Stel ervaring met NL Design System niet verplicht', id: 'stel-ervaring-met-nl-design-system-niet-verplicht', level: 2 },
     { value: 'Voorbereiden op NL Design System in een aanbesteding', id: 'voorbereiden-op-nl-design-system-in-een-aanbesteding', level: 2 },
     { value: 'Deel je huisstijl informatie.', id: 'deel-je-huisstijl-informatie', level: 3 },
     { value: 'Zorg voor afspraken', id: 'zorg-voor-afspraken', level: 3 },
     { value: 'Hulp nodig?', id: 'hulp-nodig', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', ol: 'ol', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'nl-design-system-in-aanbestedingen', children: 'NL Design System in aanbestedingen' }) }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System is niet een volledig kant-en-klaar product, dat voor elk project geschikt is om gelijk in gebruik te nemen. De community zorgt dat NL Design System wordt doorontwikkeld zodat het makkelijker ingezet kan worden in meer situaties.' }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer NL Design System wordt opgenomen in je aanbesteding is het dus belangrijk om duidelijk te zijn richting leveranciers op welke manier je dat bedoelt. Een leverancier kan gebruik maken van de samenwerking van de community, de richtlijnen bij NL Design System, de bestaande componenten die werken met de eigen huisstijl \xf3f een gedeelte van de componenten die nieuw worden ontwikkeld bijdragen aan NL Design System.' }), '\n', (0, a.jsx)(n.p, { children: 'Door het minimale niveau van meedoen te kiezen maak je de verwachtingen duidelijk. Er is niet zoiets als een NL Design System keurmerk of compliance. Wel kunnen we als kernteam per niveau aangeven waar wij zelf op zouden letten.' }), '\n', (0, a.jsx)(n.p, { children: "De niveau's om uit te kiezen zijn:" }), '\n', (0, a.jsxs)(n.ol, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: 'Draag bij aan de open source community' }), ': deel voortgang in de Heartbeat en op Slack, deel code op GitHub, designs in Figma en uitkomsten van gebruikersonderzoek op gebruikersonderzoeken.nl.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: 'Maak de huisstijl beschikbaar en hou deze up-to-date' }), ': Stel de huisstijl beschikbaar als thema voor NL Design System componenten, door een kant-en-klaar pakketje te maken met design tokens. Zorg bij nieuwe projecten dat dit thema up-to-date is zodat er ook een huisstijl is ingesteld voor de nieuwste componenten.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: 'Gebruik de richtlijnen' }), ': Verbeter toegankelijkheid en gebruiksvriendelijkheid door bij de ontwikkeling van nieuwe websites gebruik te maken van de richtlijnen van NL Design System.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: 'Gebruik bestaande componenten' }), ': Maak gebruik van de componenten die al beschikbaar zijn als Community, Candidate of Hall of Fame component.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: 'Help componenten verbeteren' }), ': Zorg dat verbeteringen en uitbreidingen aan bestaande componenten worden bijgedragen aan de Community. Zo kunnen andere projecten en organisaties ook van deze verbeteringen profiteren.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: 'Draag nieuwe componenten bij' }), ': Maak nieuwe componenten in GitHub en Figma volgens de NL Design System aanpak, draag deze bij volgens het Community stappenplan en zorg voor beheer van deze componenten.'] }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Bij\u202f ', (0, a.jsx)(n.a, { href: '/handboek/organisatie/meedoen/', children: 'meedoen met je organisatie' }), '\u202f is opgenomen hoe NL Design System de niveaus beoordeeld.'] }), '\n', (0, a.jsx)(n.h2, { id: 'stel-ervaring-met-nl-design-system-niet-verplicht', children: 'Stel ervaring met NL Design System niet verplicht' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System bestaat nog maar enkele jaren en het is geen standaard die in alle projecten gebruikt wordt. Daarom raden wij aan om ervaring met NL Design System niet verplicht te stellen in je uitvraag, maar wel als wens op te nemen.' }), '\n', (0, a.jsx)(n.p, { children: 'Ervaring met de gebruikte technieken van NL Design System is natuurlijk wel erg waardevol. Denk hierbij aan:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Ervaring met Design Systems' }), '\n', (0, a.jsx)(n.li, { children: 'Ervaring met herbruikbare componenten in Figma' }), '\n', (0, a.jsx)(n.li, { children: 'Ervaring met Design Tokens JSON' }), '\n', (0, a.jsx)(n.li, { children: 'Ervaring met Storybook en Chromatic' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Op aanvraag heeft het kernteam een templates beschikbaar voor de rol van UX-designer en Front-end Developer.' }), '\n', (0, a.jsx)(n.h2, { id: 'voorbereiden-op-nl-design-system-in-een-aanbesteding', children: 'Voorbereiden op NL Design System in een aanbesteding' }), '\n', (0, a.jsx)(n.p, { children: 'Wat kun je zelf doen, zodat een leverancier met NL Design System aan de slag kan?' }), '\n', (0, a.jsx)(n.h3, { id: 'deel-je-huisstijl-informatie', children: 'Deel je huisstijl informatie.' }), '\n', (0, a.jsx)(n.p, { children: 'Is er al een thema beschikbaar? Deel deze dan met de leverancier.' }), '\n', (0, a.jsx)(n.h3, { id: 'zorg-voor-afspraken', children: 'Zorg voor afspraken' }), '\n', (0, a.jsx)(n.p, { children: 'Maak afspraken hoe nieuwe design keuzes mogen worden gemaakt, wie de updates deelt in de Heartbeat, wie vragen stelt in de Open Hours en of gebruikersonderzoeken mogen worden gedeeld.' }), '\n', (0, a.jsx)(n.h2, { id: 'hulp-nodig', children: 'Hulp nodig?' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze documentatie is opgesteld door het kernteam van NL Design System. Heb je hulp nodig om NL Design System te gaan gebruiken in jouw projecten? Kom in ', (0, a.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' of stuur een e-mail naar ', (0, a.jsx)(n.a, { href: 'mailt:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), ' .'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of deze documentatie werkbaar en nuttig is. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
