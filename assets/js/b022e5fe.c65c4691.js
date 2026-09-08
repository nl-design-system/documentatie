'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90688],
 {
  18439(e, n, r) {
   r.d(n, { R: () => a, x: () => l });
   var t = r(30758);
   const i = {},
    o = t.createContext(i);
   function a(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, r) {
   function t(e, n) {
    if (null == e) return {};
    var r,
     t,
     i = (function (e, n) {
      if (null == e) return {};
      var r = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        r[t] = e[t];
       }
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (t = 0; t < o.length; t++) ((r = o[t]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
    }
    return i;
   }
   r.d(n, { A: () => t });
  },
  48171(e, n, r) {
   function t(e) {
    return (
     (t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     t(e)
    );
   }
   function i(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var i = r.call(e, n || 'default');
      if ('object' != t(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function o(e, n, r) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => o });
  },
  59292(e, n, r) {
   r.d(n, { f: () => t.f });
   var t = r(71544);
  },
  71544(e, n, r) {
   r.d(n, { f: () => p });
   var t = r(48171),
    i = r(41534),
    o = r(86070),
    a = r(13526),
    l = r(30758),
    s = ['children', 'className', 'purpose'];
   function d(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, t));
    }
    return r;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(r), !0).forEach(function (n) {
         (0, t.A)(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d(Object(r)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
   }
   var p = (0, l.forwardRef)(function (e, n) {
    var r = e.children,
     l = e.className,
     d = e.purpose,
     p = (0, i.A)(e, s);
    return (0, o.jsx)('p', c(c({ className: (0, a.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), l), ref: n }, p), {}, { children: 'lead' === d ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   p.displayName = 'Paragraph';
  },
  91680(e, n, r) {
   (r.r(n), r.d(n, { assets: () => d, contentTitle: () => s, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/doelen","title":"Doelen","description":"Doelen voor communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/doelen.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/doelen","permalink":"/project/schrijfwijzer/doelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/doelen.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Doelen","hide_title":true,"sidebar_label":"Doelen","sidebar_position":3,"navigation_order":3,"pagination_label":"Doelen","description":"Doelen voor communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"WCAG-pagina\'s","permalink":"/project/schrijfwijzer/wcag"},"next":{"title":"Doelgroepen","permalink":"/project/schrijfwijzer/doelgroepen"}}');
   var i = r(86070),
    o = r(18439),
    a = r(59292);
   const l = { title: 'Doelen', hide_title: !0, sidebar_label: 'Doelen', sidebar_position: 3, navigation_order: 3, pagination_label: 'Doelen', description: 'Doelen voor communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    s = 'Doelen voor communicatie',
    d = {},
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
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'doelen-voor-communicatie', children: 'Doelen voor communicatie' }) }), '\n', (0, i.jsx)(a.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'Met duidelijke en positieve communicatie kunnen we mensen overtuigen om hun dienstverlening te verbeteren met onze\nconcrete oplossingen.' }) }), '\n', (0, i.jsx)(n.h2, { id: 'duidelijk', children: 'Duidelijk' }), '\n', (0, i.jsx)(n.p, { children: 'Met duidelijk taalgebruik bereiken we het best onze doelgroep, en een duidelijke boodschap kan goed gedeeld worden via mond-tot-mondreclame.' }), '\n', (0, i.jsx)(n.p, { children: 'We willen twijfel en onduidelijkheid voorkomen. We maken abstracte concepten duidelijk door herkenbare voorbeelden te geven.' }), '\n', (0, i.jsx)(n.p, { children: 'We willen geen problemen onder de aandacht brengen, zonder een oplossing te bieden.' }), '\n', (0, i.jsx)(n.h2, { id: 'pragmatisch', children: 'Pragmatisch' }), '\n', (0, i.jsx)(n.p, { children: 'We delen liever pragmatische oplossingen om een doel te halen dan dat we te lang blijven dromen over de ideale oplossing. Zo zorgen we dat mensen verder kunnen, in plaats van dat we ze tegenhouden.' }), '\n', (0, i.jsx)(n.h2, { id: 'breed-gedragen', children: 'Breed gedragen' }), '\n', (0, i.jsx)(n.p, { children: 'We willen zowel mensen met algemene interesse als specialisten bereiken. We zijn inclusief door te beginnen voor een breed publiek, en daarna duidelijk te maken wanneer informatie voor bepaalde specialisten is.' }), '\n', (0, i.jsx)(n.p, { children: 'We spreken de taal die specialisten gewend zijn, en we gebruiken de vaktermen die het meest duidelijk zijn. We bieden aparte communicatiekanalen aan voor specialisten zodat zij hun werk kunnen doen, zonder dat het project de aandacht verliest van anderen door teveel ruis.' }), '\n', (0, i.jsx)(n.h2, { id: 'positief', children: 'Positief' }), '\n', (0, i.jsx)(n.p, { children: 'We willen mensen aanmoedigen om dingen te verbeteren, om vragen te stellen, en om samenwerking op te zoeken voordat iets af is. We willen mensen een veilige omgeving bieden met constructieve communicatie.' }), '\n', (0, i.jsx)(n.h2, { id: 'open', children: 'Open' }), '\n', (0, i.jsx)(n.p, { children: 'We geloven dat open werken leidt tot de beste resultaten, om verschillende perspectieven te hebben bij nieuwe ontwikkelingen. Daarom zijn code, ontwerp en documentatie beschikbaar onder open source licenties en zijn onze vaste bijeenkomsten voor iedereen bij te wonen.' }), '\n', (0, i.jsx)(n.p, { children: 'We zeggen liever dat we het niet weten, dan dat we gehaast met een antwoord komen dat niet onderbouwd is. We vragen actief om verbeteringen voor te stellen en bij te dragen.' }), '\n', (0, i.jsx)(n.h2, { id: 'onderbouwd', children: 'Onderbouwd' }), '\n', (0, i.jsx)(n.p, { children: 'We onderbouwen onze adviezen en oplossingen met gebruikersonderzoek, praktijkervaring en uitleg van experts.' }), '\n', (0, i.jsx)(n.h2, { id: 'voorleessoftware', children: 'Begrijpelijk met voorleessoftware' }), '\n', (0, i.jsx)(n.p, { children: 'We gebruiken zinsconstructies en tekstnotaties die begrijpelijk zijn als ze voorgelezen worden.' }), '\n', (0, i.jsx)(n.h2, { id: 'vertaalbaar', children: 'Vertaalbaar' }), '\n', (0, i.jsx)(n.p, { children: 'Veel mensen die niet Nederlandstalig zijn, willen NL Design System gebruiken of begrijpen. We passen ons taalgebruik aan zodat mensen de teksten kunnen begrijpen met automatische vertaalsoftware.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
