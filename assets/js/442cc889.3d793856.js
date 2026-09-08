'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39458],
 {
  18439(e, n, r) {
   r.d(n, { R: () => l, x: () => o });
   var t = r(30758);
   const i = {},
    a = t.createContext(i);
   function l(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), t.createElement(a.Provider, { value: n }, e.children));
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
     var a = Object.getOwnPropertySymbols(e);
     for (t = 0; t < a.length; t++) ((r = a[t]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
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
   function a(e, n, r) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => a });
  },
  51083(e, n, r) {
   (r.r(n), r.d(n, { assets: () => d, contentTitle: () => s, default: () => j, frontMatter: () => o, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/nederlands","title":"Nederlands","description":"Richtlijnen voor Nederlandstalige communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/nederlands.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/nederlands","permalink":"/project/schrijfwijzer/nederlands","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/nederlands.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Nederlands","hide_title":true,"sidebar_label":"Nederlands","sidebar_position":5,"navigation_order":5,"pagination_label":"Nederlands","description":"Richtlijnen voor Nederlandstalige communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Doelgroepen","permalink":"/project/schrijfwijzer/doelgroepen"},"next":{"title":"Engels","permalink":"/project/schrijfwijzer/engels"}}');
   var i = r(86070),
    a = r(18439),
    l = r(59292);
   const o = { title: 'Nederlands', hide_title: !0, sidebar_label: 'Nederlands', sidebar_position: 5, navigation_order: 5, pagination_label: 'Nederlands', description: 'Richtlijnen voor Nederlandstalige communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    s = 'Richtlijnen voor Nederlandse teksten',
    d = {},
    c = [
     { value: 'Duidelijke taal', id: 'duidelijke-taal', level: 2 },
     { value: 'Afkortingen', id: 'afkortingen', level: 2 },
     { value: 'Telefoonnummers', id: 'telefoonnummers', level: 2 },
     { value: 'Getallen schrijven', id: 'getallen-schrijven', level: 2 },
     { value: 'Percentages', id: 'percentages', level: 2 },
     { value: 'Duizendtallen', id: 'duizendtallen', level: 2 },
     { value: 'Citaten', id: 'citaten', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'richtlijnen-voor-nederlandse-teksten', children: 'Richtlijnen voor Nederlandse teksten' }) }), '\n', (0, i.jsx)(l.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'De overige richtlijnen gelden voor teksten in alle talen die we gebruiken, zoals Nederlands en Engels. De volgende\nrichtlijnen zijn specifiek voor Nederlandse teksten.' }) }), '\n', (0, i.jsx)(n.h2, { id: 'duidelijke-taal', children: 'Duidelijke taal' }), '\n', (0, i.jsx)(n.p, { children: 'Vermijd samengestelde woorden die bij de doelgroep niet gebruikelijk zijn in spreektaal. Dus niet: productspecificaties, wel: specificaties van het product. Dus wel wanneer het gebruikelijk is: acceptatiecriteria, en niet: criteria voor acceptatie.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik geen \u201cvoorzetseluitdrukkingen\u201d:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '\u201cAan de hand van\u201d kun je vervangen door \u201cdoor\u201d' }), '\n', (0, i.jsx)(n.li, { children: '\u201cIn verband met\u201d kun je vervangen door \u201cvanwege\u201d' }), '\n', (0, i.jsx)(n.li, { children: '\u201cMet betrekking tot\u201d kun je vervangen door \u201cover\u201d' }), '\n', (0, i.jsx)(n.li, { children: '\u201cOp grond van\u201d kun je vervangen door \u201cvanwege\u201d' }), '\n', (0, i.jsx)(n.li, { children: '\u201cTen aanzien van\u201d is vervangbaar door \u201cover\u201d' }), '\n', (0, i.jsx)(n.li, { children: '\u201cTen opzichte van\u201d is vervangbaar door \u201ctegenover\u201d' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'afkortingen', children: 'Afkortingen' }), '\n', (0, i.jsx)(n.p, { children: 'Vermijd afkortingen in plaats van lopende tekst. Schrijf dit soort afkortingen voluit:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '"in verband met" in plaats van "ivm.".' }), '\n', (0, i.jsx)(n.li, { children: '"bijvoorbeeld" in plaats van "bijv."' }), '\n', (0, i.jsx)(n.li, { children: '"enzovoort" in plaats van "enz."' }), '\n', (0, i.jsx)(n.li, { children: '"etcetera" in plaats van "etc."' }), '\n', (0, i.jsx)(n.li, { children: '"circa" in plaats van "ca."' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'telefoonnummers', children: 'Telefoonnummers' }), '\n', (0, i.jsx)(n.p, { children: 'Nederlandse telefoonnummers:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '070-333 44 44' }), '\n', (0, i.jsx)(n.li, { children: '0180-11 11 11' }), '\n', (0, i.jsx)(n.li, { children: '06-11 11 11 11' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'getallen-schrijven', children: 'Getallen schrijven' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik je een getal als telwoord? Dan schrijf je het getal als een cijfer.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld: \u201cSlechts 1 persoon kwam niet opdagen\u201d, en: \u201cEr zijn 3 conferenties in 1 jaar\u201d.' }), '\n', (0, i.jsx)(n.p, { children: 'Een getal als cijfer moet geen verwarring oproepen. Daarom schrijf je een getal niet als cijfer in woorden als \u2019tweemaandelijks\u2019, \u2018half uur\u2019 en \u2018een derde\u2019.' }), '\n', (0, i.jsx)(n.h2, { id: 'percentages', children: 'Percentages' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik voor percentages % (en niet \u2018procent\u2019)' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik je een percentage in een tekst? Gebruik dan het symbool voor procenten (ofwel: %), en schrijf niet \u2018procent\u2019 voluit. Zet tussen het cijfer en het percentage geen spatie.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld: 70%.' }), '\n', (0, i.jsx)(n.p, { children: 'Euroteken (\u20ac)\nGebruik het euroteken (\u20ac) in teksten en plaats een spatie na het euroteken. Dus \u20ac 10.' }), '\n', (0, i.jsx)(n.p, { children: 'Vermijd dus het woord \u2018euro\u2019 bij bedragen. Het euroteken verhoogt de herkenbaarheid van bedragen in de tekst en verbetert de scanbaarheid.' }), '\n', (0, i.jsx)(n.h2, { id: 'duizendtallen', children: 'Duizendtallen' }), '\n', (0, i.jsx)(n.p, { children: 'Zet een punt voor de laatste 3 cijfers. Gebruik je een getal dat groter is dan duizend, zet dan altijd een punt voor de laatste 3 cijfers.\nBijvoorbeeld: 1.000 of 18.500.' }), '\n', (0, i.jsx)(n.h2, { id: 'citaten', children: 'Citaten' }), '\n', (0, i.jsx)(n.p, { children: 'Citaten staan tussen dubbele aanhalingstekens. Een citaat binnen een citaat staat tussen enkele aanhalingstekens. Een citaat als titel staat tussen enkele aanhalingstekens.' }), '\n', (0, i.jsxs)(n.p, { children: ['Lees meer in de richtlijnen voor content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/citaten/', children: 'Citaten op een webpagina' })] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  59292(e, n, r) {
   r.d(n, { f: () => t.f });
   var t = r(71544);
  },
  71544(e, n, r) {
   r.d(n, { f: () => u });
   var t = r(48171),
    i = r(41534),
    a = r(86070),
    l = r(13526),
    o = r(30758),
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
   var u = (0, o.forwardRef)(function (e, n) {
    var r = e.children,
     o = e.className,
     d = e.purpose,
     u = (0, i.A)(e, s);
    return (0, a.jsx)('p', c(c({ className: (0, l.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, u), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   u.displayName = 'Paragraph';
  },
 },
]);
