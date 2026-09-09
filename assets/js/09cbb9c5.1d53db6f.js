'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50290],
 {
  18439(e, t, i) {
   i.d(t, { R: () => a, x: () => s });
   var n = i(30758);
   const r = {},
    o = n.createContext(r);
   function a(e) {
    const t = n.useContext(o);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), n.createElement(o.Provider, { value: t }, e.children));
   }
  },
  56561(e, t, i) {
   i.d(t, { f: () => p });
   var n = i(15540),
    r = i(69967),
    o = i(86070),
    a = i(13526),
    s = i(30758),
    d = ['children', 'className', 'purpose'];
   function c(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      i.push.apply(i, n));
    }
    return i;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var i = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(i), !0).forEach(function (t) {
         (0, n.A)(e, t, i[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : c(Object(i)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, t) {
    var i = e.children,
     s = e.className,
     c = e.purpose,
     p = (0, r.A)(e, d);
    return (0, o.jsx)('p', l(l({ className: (0, a.$)('nl-paragraph', (0, n.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: t }, p), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   p.displayName = 'Paragraph';
  },
  58218(e, t, i) {
   (i.r(t), i.d(t, { assets: () => d, contentTitle: () => s, default: () => p, frontMatter: () => a, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"project/schrijfwijzer/video","title":"Video","description":"Video\'s in communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/video.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/video","permalink":"/project/schrijfwijzer/video","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/video.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Video","hide_title":true,"sidebar_label":"Video","sidebar_position":7,"pagination_label":"Video","description":"Video\'s in communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Afbeeldingen","permalink":"/project/schrijfwijzer/afbeeldingen"},"next":{"title":"Beslissingen voor schrijfwijze","permalink":"/project/schrijfwijzer/beslissingen"}}');
   var r = i(86070),
    o = i(18439);
   i(66153);
   const a = { title: 'Video', hide_title: !0, sidebar_label: 'Video', sidebar_position: 7, pagination_label: 'Video', description: "Video's in communicatie vanuit het project NL Design System.", keywords: ['kernteam'] },
    s = 'Video',
    d = {},
    c = [
     { value: 'Ondertitels', id: 'ondertitels', level: 2 },
     { value: 'Link naar video', id: 'link-naar-video', level: 2 },
    ];
   function l(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(t.header, { children: (0, r.jsx)(t.h1, { id: 'video', children: 'Video' }) }), '\n', (0, r.jsxs)(t.p, { children: ['We delen vaak opnames van ', (0, r.jsx)(t.a, { href: '/community/events/overzicht/', children: 'bijeenkomsten in de community' }), ', zodat iedereen op een eigen moment de presentatie kan bekijken.'] }), '\n', (0, r.jsx)(t.p, { children: 'Soms plaatsen we een schermopname in de documentatie, bijvoorbeeld om te laten zien hoe een component of patroon werkt. Overleg met de productmanager voordat je een video publiceert, omdat een video voor documentatie relatief veel werk is om up-to-date te houden.' }), '\n', (0, r.jsx)(t.h2, { id: 'ondertitels', children: 'Ondertitels' }), '\n', (0, r.jsx)(t.p, { children: "Maak altijd ondertitels voor video's die op de website worden gedeeld. Overleg met de projectmanager of de productmanager voordat je video's publiceert, om zeker te weten dat er capaciteit is om ook ondertitels te maken." }), '\n', (0, r.jsx)(t.p, { children: "Voor video's die het kernteam publiceert is een afspraak met een vaste organisatie die de onderitels toevoegt aan YouTube video's. Aan de opnames van de Heartbeat en de Design Systems Week worden de ondertitels automatisch toegevoegd, op initiatief van de ondertitelaar." }), '\n', (0, r.jsx)(t.p, { children: "Voeg ondertitels toe via een bestandformaat voor ondertitels. Gebruik nooit video's met hardcoded ondertitels." }), '\n', (0, r.jsxs)(t.p, { children: ['Lees meer WebVTT-bestanden gebruiken voor ondertitels op het web: ', (0, r.jsx)(t.a, { href: 'https://css-tricks.com/improving-video-accessibility-with-webvtt/', children: 'Improving Video Accessibility with WebVTT \u2014 CSS-tricks' })] }), '\n', (0, r.jsx)(t.h2, { id: 'link-naar-video', children: 'Link naar video' }), '\n', (0, r.jsx)(t.p, { children: "Deel video's door een link te maken naar de webpagina op onze website waar de video staat, in plaats de link naar YouTube delen. Op deze manier blijven de links werken, als we in de toekomst een ander platform gebruiken voor video. Het is ook beter voor privacy: op onze eigen site kunnen we de YouTube Video instellen om geen cookies van derden te gebruiken." })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  66153(e, t, i) {
   i.d(t, { f: () => n.f });
   var n = i(56561);
  },
 },
]);
