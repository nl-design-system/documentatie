'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50290],
 {
  18439(e, t, n) {
   n.d(t, { R: () => a, x: () => s });
   var r = n(30758);
   const i = {},
    o = r.createContext(i);
   function a(e) {
    const t = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(o.Provider, { value: t }, e.children));
   }
  },
  41534(e, t, n) {
   function r(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r in e)
       if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== t.indexOf(r)) continue;
        n[r] = e[r];
       }
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) ((n = o[r]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   n.d(t, { A: () => r });
  },
  48171(e, t, n) {
   function r(e) {
    return (
     (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     r(e)
    );
   }
   function i(e) {
    var t = (function (e, t) {
     if ('object' != r(e) || !e) return e;
     var n = e[Symbol.toPrimitive];
     if (void 0 !== n) {
      var i = n.call(e, t || 'default');
      if ('object' != r(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == r(t) ? t : t + '';
   }
   function o(e, t, n) {
    return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
   }
   n.d(t, { A: () => o });
  },
  52578(e, t, n) {
   (n.r(t), n.d(t, { assets: () => d, contentTitle: () => s, default: () => p, frontMatter: () => a, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"project/schrijfwijzer/video","title":"Video","description":"Video\'s in communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/video.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/video","permalink":"/project/schrijfwijzer/video","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/video.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Video","hide_title":true,"sidebar_label":"Video","sidebar_position":7,"pagination_label":"Video","description":"Video\'s in communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Afbeeldingen","permalink":"/project/schrijfwijzer/afbeeldingen"},"next":{"title":"Beslissingen voor schrijfwijze","permalink":"/project/schrijfwijzer/beslissingen"}}');
   var i = n(86070),
    o = n(18439);
   n(59292);
   const a = { title: 'Video', hide_title: !0, sidebar_label: 'Video', sidebar_position: 7, pagination_label: 'Video', description: "Video's in communicatie vanuit het project NL Design System.", keywords: ['kernteam'] },
    s = 'Video',
    d = {},
    c = [
     { value: 'Ondertitels', id: 'ondertitels', level: 2 },
     { value: 'Link naar video', id: 'link-naar-video', level: 2 },
    ];
   function l(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'video', children: 'Video' }) }), '\n', (0, i.jsxs)(t.p, { children: ['We delen vaak opnames van ', (0, i.jsx)(t.a, { href: '/community/events/overzicht/', children: 'bijeenkomsten in de community' }), ', zodat iedereen op een eigen moment de presentatie kan bekijken.'] }), '\n', (0, i.jsx)(t.p, { children: 'Soms plaatsen we een schermopname in de documentatie, bijvoorbeeld om te laten zien hoe een component of patroon werkt. Overleg met de productmanager voordat je een video publiceert, omdat een video voor documentatie relatief veel werk is om up-to-date te houden.' }), '\n', (0, i.jsx)(t.h2, { id: 'ondertitels', children: 'Ondertitels' }), '\n', (0, i.jsx)(t.p, { children: "Maak altijd ondertitels voor video's die op de website worden gedeeld. Overleg met de projectmanager of de productmanager voordat je video's publiceert, om zeker te weten dat er capaciteit is om ook ondertitels te maken." }), '\n', (0, i.jsx)(t.p, { children: "Voor video's die het kernteam publiceert is een afspraak met een vaste organisatie die de onderitels toevoegt aan YouTube video's. Aan de opnames van de Heartbeat en de Design Systems Week worden de ondertitels automatisch toegevoegd, op initiatief van de ondertitelaar." }), '\n', (0, i.jsx)(t.p, { children: "Voeg ondertitels toe via een bestandformaat voor ondertitels. Gebruik nooit video's met hardcoded ondertitels." }), '\n', (0, i.jsxs)(t.p, { children: ['Lees meer WebVTT-bestanden gebruiken voor ondertitels op het web: ', (0, i.jsx)(t.a, { href: 'https://css-tricks.com/improving-video-accessibility-with-webvtt/', children: 'Improving Video Accessibility with WebVTT \u2014 CSS-tricks' })] }), '\n', (0, i.jsx)(t.h2, { id: 'link-naar-video', children: 'Link naar video' }), '\n', (0, i.jsx)(t.p, { children: "Deel video's door een link te maken naar de webpagina op onze website waar de video staat, in plaats de link naar YouTube delen. Op deze manier blijven de links werken, als we in de toekomst een ander platform gebruiken voor video. Het is ook beter voor privacy: op onze eigen site kunnen we de YouTube Video instellen om geen cookies van derden te gebruiken." })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  59292(e, t, n) {
   n.d(t, { f: () => r.f });
   var r = n(71544);
  },
  71544(e, t, n) {
   n.d(t, { f: () => p });
   var r = n(48171),
    i = n(41534),
    o = n(86070),
    a = n(13526),
    s = n(30758),
    d = ['children', 'className', 'purpose'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
    }
    return n;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
     s = e.className,
     c = e.purpose,
     p = (0, i.A)(e, d);
    return (0, o.jsx)('p', l(l({ className: (0, a.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: t }, p), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
 },
]);
