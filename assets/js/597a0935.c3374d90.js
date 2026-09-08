'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89720],
 {
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => o });
   var t = r(30758);
   const i = {},
    a = t.createContext(i);
   function s(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children));
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
  59292(e, n, r) {
   r.d(n, { f: () => t.f });
   var t = r(71544);
  },
  71544(e, n, r) {
   r.d(n, { f: () => m });
   var t = r(48171),
    i = r(41534),
    a = r(86070),
    s = r(13526),
    o = r(30758),
    l = ['children', 'className', 'purpose'];
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
   var m = (0, o.forwardRef)(function (e, n) {
    var r = e.children,
     o = e.className,
     d = e.purpose,
     m = (0, i.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, s.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, m), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   m.displayName = 'Paragraph';
  },
  94487(e, n, r) {
   (r.r(n), r.d(n, { assets: () => g, contentTitle: () => h, default: () => b, frontMatter: () => p, metadata: () => t, toc: () => f }));
   const t = JSON.parse('{"id":"woordenlijst/index","title":"Woordenlijst","description":"NL Design System Woordenlijst","source":"@site/docs/woordenlijst/index.mdx","sourceDirName":"woordenlijst","slug":"/woordenlijst","permalink":"/woordenlijst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/woordenlijst/index.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Woordenlijst","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Woordenlijst","sidebar_position":5,"navigation_order":5,"pagination_label":"Woordenlijst","description":"NL Design System Woordenlijst","slug":"/woordenlijst","keywords":["termenlijst","glossary","glossarium","uitleg"]},"sidebar":"handboek","previous":{"title":"Baseline december 2024","permalink":"/baseline/2024-12"}}');
   var i = r(86070),
    a = r(18439),
    s = r(59292);
   const o = JSON.parse('[{"term":"Aanwijzer","slug":"aanwijzer","definitions":[{"paragraph":"Een vorm van invoer waarbij men iets aanwijst op het scherm. Voorbeelden hiervan zijn de muis, de touchpad, een trackball, aanraking of bediening met een pen. "}],"sources":[{"name":"De definitie van <em>enkele aanwijzer</em> in de Nederlandse vertaling van WCAG.","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-single-pointer"}]},{"term":"Audiodescriptie","slug":"audiodescriptie","definitions":[{"paragraph":"Een hoorbare, gesproken beschrijving van visuele informatie die niet voorkomt in de audio van de video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Eenfunctieschakelaar","slug":"eenfunctieschakelaar","synonyms":[{"term":"Switch access"}],"definitions":[{"paragraph":"Een enkele knop of schakelaar die verbonden kan worden aan een apparaat. Er zijn meerdere manieren om een eenfunctieschakelaar te bedienen, zoals:  door knipperen van de ogen, in- en uitademen (Sip-and-puff) of met druk van een specifiek lichaamsdeel zoals de tong."}],"sources":[{"name":"Eenfunctieschakelaar op Wikipedia","url":"https://nl.wikipedia.org/wiki/Eenfunctieschakelaar/"}]},{"term":"Gebarentaal","slug":"Gebarentaal","definitions":[{"paragraph":"Een gebarentaal is een taal waarbij mensen met elkaar communiceren door gebaren te maken met hun handen, lichaamshouding en gezichtsuitdrukking (mimiek)."}],"sources":[{"name":"Richtlijnen voor gebarentaal bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/gebarentaal/"}]},{"term":"Tekstalternatief","slug":"tekstalternatief","definitions":[{"paragraph":"Een tekst die het alternatief kan zijn als niet-tekstuele content niet gezien kan worden."}],"sources":[{"name":"WCAG-succescriterium 1.1.1 Niet-tekstuele content","url":"https://nldesignsystem.nl/wcag/1.1.1/"}]},{"term":"Toegankelijke naam","slug":"toegankelijke-naam","definitions":[{"paragraph":"De toegankelijke naam is de werkelijke naam van een component. Dit is vaak (maar niet altijd) hetzelfde als de zichtbare naam."}],"sources":[{"name":"WCAG-succescriterium 2.5.3 Label in naam","url":"https://nldesignsystem.nl/wcag/1.1.1/"},{"name":"Formulieren - Labels - Zichtbare naam label","url":"https://nldesignsystem.nl/richtlijnen/formulieren/labels/zichtbare-naam/"},{"name":"Engelstalige uitleg over Accessible Name and Description Computation","url":"https://www.w3.org/TR/accname/"}]},{"term":"Transcript","slug":"transcript","definitions":[{"paragraph":"Een geschreven beschrijving van de informatie in een audiofragment of de audio van een video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Proces","slug":"proces","definitions":[{"paragraph":"Serie handelingen van de gebruiker waarbij elke handeling vereist is om een activiteit te voltooien "}],"sources":[{"name":"Engelstalige WCAG definitie","url":"https://www.w3.org/TR/WCAG22/#dfn-processes"},{"name":"Nederlandstalige WCAG definitie","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-processes"}]},{"term":"Screenreader","slug":"screenreader","synonyms":[{"term":"screen reader"},{"term":"schermlezer"},{"term":"voorleessoftware"}],"definitions":[{"paragraph":"Zogenaamde hulpsoftware die meldt wat er op het scherm staat. De software gebruikt hiervoor de informatie die in de code aanwezig is. Dit kan voorgelezen worden, maar ook op een brailleleesregel getoond worden. De software maakt een apparaat ook te bedienen zonder het te zien."}],"sources":[{"name":"NL Design System Baseline","url":"https://nldesignsystem.nl/baseline/"}]}]');
   var l = r(46447);
   const d = ({ term: e }) => (0, i.jsx)('dt', { children: e }),
    c = ({ paragraph: e }) => (0, i.jsx)(l.fz, { children: e }),
    m = ({ name: e, url: n }) => (0, i.jsx)('li', { children: (0, i.jsx)('a', { className: 'nl-link', href: n, children: e }) }),
    u = ({ terms: e }) => (0, i.jsx)('div', { children: (0, i.jsx)('dl', { children: e.map(({ term: e, slug: n, synonyms: r, definitions: t, sources: a }, s) => (0, i.jsxs)('div', { className: 'ma-terms-list__item', children: [(0, i.jsx)('dt', { id: n, children: (0, i.jsx)('h3', { children: e }) }), r && r.length && (0, i.jsx)(i.Fragment, { children: r.map((e, n) => (0, i.jsx)(d, { ...e }, n)) }), (0, i.jsxs)('dd', { className: 'ma-terms-list__definition', children: [t.map((e, n) => (0, i.jsx)(c, { ...e }, n)), a && a.length && (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)('div', { className: 'ma-terms-list__definition__sources', children: [(0, i.jsx)('span', { children: 'Verder lezen:' }), (0, i.jsx)('ul', { role: 'list', children: a.map((e, n) => (0, i.jsx)(m, { ...e }, n)) })] }) })] })] }, s)) }) }),
    p = { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, navigation_order: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] },
    h = 'NL Design System Woordenlijst',
    g = {},
    f = [{ value: 'Woorden', id: 'woorden', level: 2 }];
   function j(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'nl-design-system-woordenlijst', children: 'NL Design System Woordenlijst' }) }), '\n', (0, i.jsx)(s.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'NL Design System streeft naar een vriendelijke gebruikerservaring. Hier en daar kunnen er toch lastige woorden en\ntermen tussen zitten. De woordenlijst legt deze woorden uit en verwijst door naar bronnen waar dat handig is.' }) }), '\n', (0, i.jsx)(n.h2, { id: 'woorden', children: 'Woorden' }), '\n', (0, i.jsx)(u, { terms: o })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
