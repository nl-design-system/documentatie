'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90688],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => d });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  88073(e, n, i) {
   (i.r(n), i.d(n, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => d, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/doelen","title":"Doelen","description":"Doelen voor communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/doelen.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/doelen","permalink":"/project/schrijfwijzer/doelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/doelen.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Doelen","hide_title":true,"sidebar_label":"Doelen","sidebar_position":3,"pagination_label":"Doelen","description":"Doelen voor communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Opbouw van een pagina","permalink":"/project/schrijfwijzer/pagina-opbouw"},"next":{"title":"Doelgroepen","permalink":"/project/schrijfwijzer/doelgroepen"}}');
   var o = i(86070),
    r = i(18439),
    a = i(46447);
   const d = { title: 'Doelen', hide_title: !0, sidebar_label: 'Doelen', sidebar_position: 3, pagination_label: 'Doelen', description: 'Doelen voor communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    l = 'Doelen voor communicatie',
    s = {},
    c = [
     { value: 'Duidelijk', id: 'duidelijk', level: 2 },
     { value: 'Pragmatisch', id: 'pragmatisch', level: 2 },
     { value: 'Breed gedragen', id: 'breed-gedragen', level: 2 },
     { value: 'Positief', id: 'positief', level: 2 },
     { value: 'Open', id: 'open', level: 2 },
     { value: 'Onderbouwd', id: 'onderbouwd', level: 2 },
     { value: 'Begrijpelijk met voorleessoftware', id: 'voorleessoftware', level: 2 },
     { value: 'Vertaalbaar', id: 'vertaalbaar', level: 2 },
    ];
   function p(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'doelen-voor-communicatie', children: 'Doelen voor communicatie' }) }), '\n', (0, o.jsx)(a.fz, { lead: !0, children: (0, o.jsx)(n.p, { children: 'Met duidelijke en positieve communicatie kunnen we mensen overtuigen om hun dienstverlening te verbeteren met onze\nconcrete oplossingen.' }) }), '\n', (0, o.jsx)(n.h2, { id: 'duidelijk', children: 'Duidelijk' }), '\n', (0, o.jsx)(n.p, { children: 'Met duidelijk taalgebruik bereiken we het best onze doelgroep, en een duidelijke boodschap kan goed gedeeld worden via mond-op-mond reclame.' }), '\n', (0, o.jsx)(n.p, { children: 'We willen twijfel en onduidelijkheid voorkomen. We maken abstracte concepten duidelijk door herkenbare voorbeelden te geven.' }), '\n', (0, o.jsx)(n.p, { children: 'We willen geen problemen onder de aandacht brengen, zonder een oplossing te bieden.' }), '\n', (0, o.jsx)(n.h2, { id: 'pragmatisch', children: 'Pragmatisch' }), '\n', (0, o.jsx)(n.p, { children: 'We delen liever pragmatische oplossingen om een doel te halen dan dat we te lang blijven dromen over de ideale oplossing. Zo zorgen we dat mensen verder kunnen, in plaats van dat we ze tegenhouden.' }), '\n', (0, o.jsx)(n.h2, { id: 'breed-gedragen', children: 'Breed gedragen' }), '\n', (0, o.jsx)(n.p, { children: 'We willen zowel mensen met algemene interesse als specialisten bereiken. We zijn inclusief door te beginnen voor een breed publiek, en daarna duidelijk te maken wanneer informatie voor bepaalde specialisten is.' }), '\n', (0, o.jsx)(n.p, { children: 'We spreken de taal die specialisten gewend zijn, en we gebruiken de vaktermen die het meest duidelijk zijn. We bieden aparte communicatiekanalen aan voor specialisten zodat zij hun werk kunnen doen, zonder dat het project de aandacht verliest van anderen door teveel ruis.' }), '\n', (0, o.jsx)(n.h2, { id: 'positief', children: 'Positief' }), '\n', (0, o.jsx)(n.p, { children: 'We willen mensen aanmoedigen om dingen te verbeteren, om vragen te stellen, en om samenwerking op te zoeken voordat iets af is. We willen mensen een veilige omgeving bieden met constructieve communicatie.' }), '\n', (0, o.jsx)(n.h2, { id: 'open', children: 'Open' }), '\n', (0, o.jsx)(n.p, { children: 'We geloven dat open werken leidt tot de beste resultaten, om verschillende perspectieven te hebben bij nieuwe ontwikkelingen. Daarom zijn code, ontwerp en documentatie beschikbaar onder open source licenties en zijn onze vaste bijeenkomsten voor iedereen bij te wonen.' }), '\n', (0, o.jsx)(n.p, { children: 'We zeggen liever dat we het niet weten, dan dat we gehaast met een antwoord komen dat niet onderbouwd is. We vragen actief om verbeteringen voor te stellen en bij te dragen.' }), '\n', (0, o.jsx)(n.h2, { id: 'onderbouwd', children: 'Onderbouwd' }), '\n', (0, o.jsx)(n.p, { children: 'We onderbouwen onze adviezen en oplossingen met gebruikersonderzoek, praktijkervaring en uitleg van experts.' }), '\n', (0, o.jsx)(n.h2, { id: 'voorleessoftware', children: 'Begrijpelijk met voorleessoftware' }), '\n', (0, o.jsx)(n.p, { children: 'We gebruiken zinsconstructies en tekstnotaties die begrijpelijk zijn als ze voorgelezen worden.' }), '\n', (0, o.jsx)(n.h2, { id: 'vertaalbaar', children: 'Vertaalbaar' }), '\n', (0, o.jsx)(n.p, { children: 'Veel mensen die niet Nederlandstalig zijn, willen NL Design System gebruiken of begrijpen. We passen ons taalgebruik aan zodat mensen de teksten kunnen begrijpen met automatische vertaalsoftware.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
