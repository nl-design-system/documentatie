'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [88471],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => s });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function a(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  66245(e, n, i) {
   (i.r(n), i.d(n, { assets: () => l, contentTitle: () => d, default: () => h, frontMatter: () => s, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"handboek/organisatie/beheren-van-een-community-repository","title":"Beheren van een community repository","description":"Wat komt er kijken bij het beheren van een community repository binnen NL Design System?","source":"@site/docs/handboek/organisatie/beheren-van-een-community-repository.mdx","sourceDirName":"handboek/organisatie","slug":"/handboek/organisatie/beheren-van-een-community-repository","permalink":"/handboek/organisatie/beheren-van-een-community-repository","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/organisatie/beheren-van-een-community-repository.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Beheren van een community repository","title_sm":"Beheren van een repository","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Beheren van een repository","sidebar_position":3,"navigation_order":3,"pagination_label":"Beheren van een repository","description":"Wat komt er kijken bij het beheren van een community repository binnen NL Design System?","keywords":["maintainer","maintenance","beheer","repository"]},"sidebar":"handboek","previous":{"title":"Aanbestedingen","permalink":"/handboek/organisatie/vragen-over-aanbestedingen"},"next":{"title":"Voor leveranciers","permalink":"/handboek/leverancier/introductie"}}');
   var r = i(86070),
    o = i(18439),
    a = i(29181);
   const s = { title: 'Beheren van een community repository', title_sm: 'Beheren van een repository', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Beheren van een repository', sidebar_position: 3, navigation_order: 3, pagination_label: 'Beheren van een repository', description: 'Wat komt er kijken bij het beheren van een community repository binnen NL Design System?', keywords: ['maintainer', 'maintenance', 'beheer', 'repository'] },
    d = 'Beheren van een repository',
    l = {},
    c = [
     { value: 'Geautomatiseerd build- en releaseproces', id: 'geautomatiseerd-build--en-releaseproces', level: 2 },
     { value: 'Transparantie en community', id: 'transparantie-en-community', level: 2 },
     { value: 'Vers &amp; veilig houden van de repository en dependencies', id: 'vers--veilig-houden-van-de-repository-en-dependencies', level: 2 },
     { value: 'Documentatie van componenten', id: 'documentatie-van-componenten', level: 2 },
     { value: 'Bewaak kwaliteit en volg conventies', id: 'bewaak-kwaliteit-en-volg-conventies', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'beheren-van-een-repository', children: 'Beheren van een repository' }) }), '\n', (0, r.jsx)(a.fz, { lead: !0, children: (0, r.jsx)(n.p, { children: 'Met een repository binnen de organisatie wordt deze onderdeel van het NL Design System ecosysteem, waarop anderen\nkunnen vertrouwen en voortbouwen. Dit komt met een bepaalde verantwoordelijkheid en vraagt om actief onderhoud. Op\ndeze pagina lichten we toe wat daarbij komt kijken.' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Repositories sluiten aan op de NL Design System standaarden voor ontwikkeling, onderhoud en publicatie.\nDeze standaarden zijn gebaseerd op gangbare ', (0, r.jsx)(n.em, { children: 'best practices' }), ' en zijn bedoeld om onderhoud eenvoudiger te maken, samenwerking te verbeteren en de kwaliteit van onze software hoog te houden.\nEr is altijd ruimte voor uitzonderingen - sommige projecten hebben specifieke eisen waardoor een afwijkende inrichting logisch is.\nAansluiten op de standaard is altijd het uitgangspunt.\nZie je mogelijkheden om de standaard organisatiebreed te verbeteren?\nDat moedigen we aan - bespreek het met de community, zodat iedereen ervan kan profiteren.'] }), '\n', (0, r.jsx)(n.h2, { id: 'geautomatiseerd-build--en-releaseproces', children: 'Geautomatiseerd build- en releaseproces' }), '\n', (0, r.jsx)(n.p, { children: 'We verwachten dat repositories aansluiten op de standaard build- en releaseketen.\nWe automatiseren zoveel mogelijk, voor transparantie in het proces en om de kans op fouten te minimaliseren.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Sluit aan op tooling zoals pnpm en TypeScript.' }), '\n', (0, r.jsx)(n.li, { children: 'Implementeer een CI/CD pipeline die via de code in de repository zelf wordt beheerd; publiceren van packages gebeurt alleen via een CI/CD workflow.\nGebruik bijvoorbeeld GitHub Actions, Forgejo Actions of GitLab Pipelines.' }), '\n', (0, r.jsx)(n.li, { children: 'Changesets worden gebruikt om automatisch de changelog bij te werken.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Door packages of componenten te publiceren, kunnen anderen hiervan afhankelijk worden, en dat brengt verantwoordelijkheid met zich mee.\nBij het publiceren van een package geldt daarom bovendien:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'volg semantic versioning' }), '\n', (0, r.jsx)(n.li, { children: 'gebruik deprecation wanneer functionaliteit wordt uitgefaseerd' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Release early, release often: kleine, regelmatige releases zijn eenvoudiger te testen en reviewen (en eventueel terug te draaien) dan grote wijzigingen.' }), '\n', (0, r.jsx)(n.h2, { id: 'transparantie-en-community', children: 'Transparantie en community' }), '\n', (0, r.jsx)(n.p, { children: 'We verwachten dat maintainers bekende bugs zichtbaar maken, feature requests transparent beheren en duidelijk communiceren over breaking changes.\nDoor gebruikers ook tijdig te informeren wanneer functionaliteit wordt uitgefaseerd zorgen we voor een voorspelbare upgrade-ervaring.' }), '\n', (0, r.jsxs)(n.p, { children: ['Organiseer een veilige werkomgeving door onze ', (0, r.jsx)(n.a, { href: '/coc/', children: 'Code of Conduct' }), ' zichtbaar te maken en toe te passen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'vers--veilig-houden-van-de-repository-en-dependencies', children: 'Vers & veilig houden van de repository en dependencies' }), '\n', (0, r.jsx)(n.p, { children: 'Omdat software continu veroudert moeten dependencies periodiek worden gecontroleerd en bijgewerkt.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Van pnpm maken we gebruik van alle beveiligingsfunctionaliteit; onder andere ', (0, r.jsx)(n.a, { href: '/pnpm-audit/', children: (0, r.jsx)(n.code, { children: 'pnpm audit' }) })] }), '\n', (0, r.jsx)(n.li, { children: 'Dependabot wordt ingezet om automatisch PRs aan te maken.\nControleer en merge deze regelmatig.\nVoor handmatige upgrades is npm-check-updates in te zetten.' }), '\n', (0, r.jsx)(n.li, { children: 'Met zizmor auditen we de GitHub Actions workflows op veiligheid.\nLos bevindingen zo snel mogelijk op.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Door het onderhoud van dependencies als standaardwerkzaamheden te beschouwen voorkom je proactief technical debt.\nDoor dezelfde tooling als de community te gebruiken kunnen upgrades vaak eenvoudig van andere repositories worden opgenomen.' }), '\n', (0, r.jsx)(n.h2, { id: 'documentatie-van-componenten', children: 'Documentatie van componenten' }), '\n', (0, r.jsxs)(n.p, { children: ['Componenten worden ', (0, r.jsx)(n.em, { children: 'white-label' }), ' opgezet en alles wat nodig is om het component te implementeren en te gebruiken, wordt beschreven zodat gebruikers er optimaal mee aan de slag kunnen.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Documenteer de componenten in Storybook.\nLaat alle relevante varianten zien, beschrijf de publieke API (props) en geef richtlijnen voor het gebruik en de implementatie van het component.' }), '\n', (0, r.jsx)(n.li, { children: 'Documentatie wordt online gepubliceerd (bijvoorbeeld via GitHub Pages of Vercel) zodat gebruikers altijd de meest recente versie kunnen raadplegen zonder de repository lokaal te hoeven starten.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bewaak-kwaliteit-en-volg-conventies', children: 'Bewaak kwaliteit en volg conventies' }), '\n', (0, r.jsx)(n.p, { children: 'Maak het eenvoudig om goede bijdragen te leveren en om kwaliteit vast te houden.\nSluit aan op code conventies.\nDit verlaagt de mentale overhead om jouw code te begrijpen.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Pas ', (0, r.jsx)(n.a, { href: '/linting-en-code-formatting/', children: 'linting en formatting' }), ' toe.'] }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik Chromatic om visuele regressietests te doen.\nHiermee worden onbedoelde visuele wijzigingen gedetecteerd voordat ze in een release terechtkomen.' }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
