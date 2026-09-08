'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [83479],
 {
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => s });
   var t = i(30758);
   const r = {},
    a = t.createContext(r);
   function o(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, i) {
   function t(e, n) {
    if (null == e) return {};
    var i,
     t,
     r = (function (e, n) {
      if (null == e) return {};
      var i = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        i[t] = e[t];
       }
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (t = 0; t < a.length; t++) ((i = a[t]), -1 === n.indexOf(i) && {}.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
    }
    return r;
   }
   i.d(n, { A: () => t });
  },
  48171(e, n, i) {
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
   function r(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var i = e[Symbol.toPrimitive];
     if (void 0 !== i) {
      var r = i.call(e, n || 'default');
      if ('object' != t(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function a(e, n, i) {
    return ((n = r(n)) in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i), e);
   }
   i.d(n, { A: () => a });
  },
  59292(e, n, i) {
   i.d(n, { f: () => t.f });
   var t = i(71544);
  },
  71544(e, n, i) {
   i.d(n, { f: () => c });
   var t = i(48171),
    r = i(41534),
    a = i(86070),
    o = i(13526),
    s = i(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, t));
    }
    return i;
   }
   function p(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, t.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var c = (0, s.forwardRef)(function (e, n) {
    var i = e.children,
     s = e.className,
     d = e.purpose,
     c = (0, r.A)(e, l);
    return (0, a.jsx)('p', p(p({ className: (0, o.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), s), ref: n }, c), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   c.displayName = 'Paragraph';
  },
  75420(e, n, i) {
   (i.r(n), i.d(n, { assets: () => l, contentTitle: () => s, default: () => c, frontMatter: () => o, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/pagina-opbouw","title":"Opbouw van een pagina","description":"Opbouw van een pagina op de NL Design System website.","source":"@site/docs/project/schrijfwijzer/pagina-opbouw.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/pagina-opbouw","permalink":"/project/schrijfwijzer/pagina-opbouw","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/pagina-opbouw.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Opbouw van een pagina","hide_title":true,"sidebar_label":"Opbouw van een pagina","sidebar_position":2,"navigation_order":2,"pagination_label":"Opbouw van een pagina","description":"Opbouw van een pagina op de NL Design System website.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Schrijfwijzer","permalink":"/project/schrijfwijzer/"},"next":{"title":"WCAG-pagina\'s","permalink":"/project/schrijfwijzer/wcag"}}');
   var r = i(86070),
    a = i(18439);
   i(59292);
   const o = { title: 'Opbouw van een pagina', hide_title: !0, sidebar_label: 'Opbouw van een pagina', sidebar_position: 2, navigation_order: 2, pagination_label: 'Opbouw van een pagina', description: 'Opbouw van een pagina op de NL Design System website.', keywords: ['kernteam'] },
    s = 'Opbouw van een pagina',
    l = {},
    d = [
     { value: 'Paginatitel en hoofdkop', id: 'paginatitel-en-hoofdkop', level: 2 },
     { value: 'Introductie-alinea', id: 'introductie-alinea', level: 2 },
     { value: 'Gebruik tussenkoppen', id: 'gebruik-tussenkoppen', level: 2 },
     { value: 'Tekst na een kop', id: 'tekst-na-een-kop', level: 2 },
     { value: 'URL', id: 'url', level: 2 },
     { value: 'Metadata', id: 'metadata', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'opbouw-van-een-pagina', children: 'Opbouw van een pagina' }) }), '\n', (0, r.jsx)(n.h2, { id: 'paginatitel-en-hoofdkop', children: 'Paginatitel en hoofdkop' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Gebruik dezelfde tekst voor de paginatitel en de hoofdkop.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik een paginatitel die uniek is in de website.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik een titel die ook als zoekresultaat duidelijk is.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik de belangrijkste zoekterm in de paginatitel, als daar geen bezwaar voor is.' }), '\n'] }), '\n', '\n', (0, r.jsx)(n.h2, { id: 'introductie-alinea', children: 'Introductie-alinea' }), '\n', (0, r.jsx)(n.p, { children: 'Begin elke pagina met een introductie-alinea met een aantrekkelijke tekst die concreet zegt waar de pagina over gaat. Deel gelijk de essentie, maak er geen teaser van.' }), '\n', (0, r.jsx)(n.p, { children: 'Een introductie-alinea moet geen links bevatten.' }), '\n', '\n', (0, r.jsx)(n.h2, { id: 'gebruik-tussenkoppen', children: 'Gebruik tussenkoppen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Maak tussenkoppen die goed overzicht geven van de inhoud van de pagina.' }), '\n', (0, r.jsx)(n.li, { children: 'Zorg ervoor dat de tussenkop kort, duidelijk en omschrijvend is.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik tussenkopjes met het juiste kopniveau.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer in de ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'richtlijnen over koppen' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'tekst-na-een-kop', children: 'Tekst na een kop' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat de betekenis van de tekst na een tussenkop niet afhankelijk is van inhoud van de kop. Bijvoorbeeld niet een kop "Onvoldoende contrast" en de tekst "Dit is een van de meestvoorkomende problemen". Maak een tekst die duidelijk is zonder kop, zonder de kop letterlijk te herhalen. Bijvoorbeeld, wel: "De meeste websites gebruiken een te laag contrast voor sommige onderdelen."' }), '\n', (0, r.jsx)(n.h2, { id: 'url', children: 'URL' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik consistente woorden in de URL en in de paginatitel.' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: 'https://www.w3.org/Provider/Style/URI', children: 'Coole URLs veranderen niet' }), '. Gebruik daarom een korte "slug" met alleen de belangrijkste woorden. Als het onwaarschijnlijk is dat een woord uit de paginatitel verdwijnt, dan is de kans groot dat het lukt om de URL in de toekomst gelijk te houden.'] }), '\n', (0, r.jsx)(n.p, { children: 'De slug is het gedeelte van de URL dat specifiek voor deze pagina komt, die komt na de domeinnaam en het path. De "path" is vergelijkbaar met de Breadcrumb Navigation, en die bestaat uit de "slugs" van die bovenliggende pagina\'s uit de hierarchie.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een pagina kan extra goed gevonden worden, als het zoekwoord in de URL en in de paginatitel staat. Houdt hier rekening mee met kiezen van het woord. Als een woord zowel een Nederlandstalige als Engelstalige zoekterm kan zijn, dan verbetert dit de vindbaarheid. Bijvoorbeeld: ', (0, r.jsx)(n.code, { children: 'cms' }), ', ', (0, r.jsx)(n.code, { children: 'prototypes' }), ' of ', (0, r.jsx)(n.code, { children: 'mailinglist' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'metadata', children: 'Metadata' }), '\n', (0, r.jsx)(n.p, { children: 'Voeg naast de paginatitel een beschrijving toe, die getoond kan worden in zoekresultaten. Gebruik maximaal 160 karakters voor de beschrijving.' }), '\n'] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
