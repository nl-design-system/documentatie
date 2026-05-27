'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50290],
 {
  13642(e, i, t) {
   (t.r(i), t.d(i, { assets: () => a, contentTitle: () => d, default: () => p, frontMatter: () => s, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"project/schrijfwijzer/video","title":"Video","description":"Video\'s in communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/video.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/video","permalink":"/project/schrijfwijzer/video","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/video.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Video","hide_title":true,"sidebar_label":"Video","sidebar_position":7,"pagination_label":"Video","description":"Video\'s in communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Afbeeldingen","permalink":"/project/schrijfwijzer/afbeeldingen"},"next":{"title":"Beslissingen voor schrijfwijze","permalink":"/project/schrijfwijzer/beslissingen"}}');
   var o = t(86070),
    r = t(18439);
   t(46447);
   const s = { title: 'Video', hide_title: !0, sidebar_label: 'Video', sidebar_position: 7, pagination_label: 'Video', description: "Video's in communicatie vanuit het project NL Design System.", keywords: ['kernteam'] },
    d = 'Video',
    a = {},
    c = [
     { value: 'Ondertitels', id: 'ondertitels', level: 2 },
     { value: 'Link naar video', id: 'link-naar-video', level: 2 },
    ];
   function l(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(i.header, { children: (0, o.jsx)(i.h1, { id: 'video', children: 'Video' }) }), '\n', (0, o.jsxs)(i.p, { children: ['We delen vaak opnames van ', (0, o.jsx)(i.a, { href: '/community/events/overzicht/', children: 'bijeenkomsten in de community' }), ', zodat iedereen op een eigen moment de presentatie kan bekijken.'] }), '\n', (0, o.jsx)(i.p, { children: 'Soms plaatsen we een schermopname in de documentatie, bijvoorbeeld om te laten zien hoe een component of patroon werkt. Overleg met de productmanager voordat je een video publiceert, omdat een video voor documentatie relatief veel werk is om up-to-date te houden.' }), '\n', (0, o.jsx)(i.h2, { id: 'ondertitels', children: 'Ondertitels' }), '\n', (0, o.jsx)(i.p, { children: "Maak altijd ondertitels voor video's die op de website worden gedeeld. Overleg met de projectmanager of de productmanager voordat je video's publiceert, om zeker te weten dat er capaciteit is om ook ondertitels te maken." }), '\n', (0, o.jsx)(i.p, { children: "Voor video's die het kernteam publiceert is een afspraak met een vaste organisatie die de onderitels toevoegt aan YouTube video's. Aan de opnames van de Heartbeat en de Design Systems Week worden de ondertitels automatisch toegevoegd, op initiatief van de ondertitelaar." }), '\n', (0, o.jsx)(i.p, { children: "Voeg ondertitels toe via een bestandformaat voor ondertitels. Gebruik nooit video's met hardcoded ondertitels." }), '\n', (0, o.jsxs)(i.p, { children: ['Lees meer WebVTT-bestanden gebruiken voor ondertitels op het web: ', (0, o.jsx)(i.a, { href: 'https://css-tricks.com/improving-video-accessibility-with-webvtt/', children: 'Improving Video Accessibility with WebVTT \u2014 CSS-tricks' })] }), '\n', (0, o.jsx)(i.h2, { id: 'link-naar-video', children: 'Link naar video' }), '\n', (0, o.jsx)(i.p, { children: "Deel video's door een link te maken naar de webpagina op onze website waar de video staat, in plaats de link naar YouTube delen. Op deze manier blijven de links werken, als we in de toekomst een ander platform gebruiken voor video. Het is ook beter voor privacy: op onze eigen site kunnen we de YouTube Video instellen om geen cookies van derden te gebruiken." })] });
   }
   function p(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, o.jsx)(i, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  18439(e, i, t) {
   t.d(i, { R: () => s, x: () => d });
   var n = t(30758);
   const o = {},
    r = n.createContext(o);
   function s(e) {
    const i = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function d(e) {
    let i;
    return ((i = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), n.createElement(r.Provider, { value: i }, e.children));
   }
  },
 },
]);
