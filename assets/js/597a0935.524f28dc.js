'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89720],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => o });
   var r = i(30758);
   const t = {},
    a = r.createContext(t);
   function s(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  26159(e, n, i) {
   (i.r(n), i.d(n, { assets: () => g, contentTitle: () => h, default: () => b, frontMatter: () => u, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"woordenlijst/index","title":"Woordenlijst","description":"NL Design System Woordenlijst","source":"@site/docs/woordenlijst/index.mdx","sourceDirName":"woordenlijst","slug":"/woordenlijst","permalink":"/woordenlijst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/woordenlijst/index.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Woordenlijst","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Woordenlijst","sidebar_position":5,"navigation_order":5,"pagination_label":"Woordenlijst","description":"NL Design System Woordenlijst","slug":"/woordenlijst","keywords":["termenlijst","glossary","glossarium","uitleg"]},"sidebar":"handboek","previous":{"title":"Baseline december 2024","permalink":"/baseline/2024-12"}}');
   var t = i(86070),
    a = i(18439),
    s = i(66153);
   const o = JSON.parse('[{"term":"Aanwijzer","slug":"aanwijzer","definitions":[{"paragraph":"Een vorm van invoer waarbij men iets aanwijst op het scherm. Voorbeelden hiervan zijn de muis, de touchpad, een trackball, aanraking of bediening met een pen. "}],"sources":[{"name":"De definitie van <em>enkele aanwijzer</em> in de Nederlandse vertaling van WCAG.","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-single-pointer"}]},{"term":"Audiodescriptie","slug":"audiodescriptie","definitions":[{"paragraph":"Een hoorbare, gesproken beschrijving van visuele informatie die niet voorkomt in de audio van de video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Eenfunctieschakelaar","slug":"eenfunctieschakelaar","synonyms":[{"term":"Switch access"}],"definitions":[{"paragraph":"Een enkele knop of schakelaar die verbonden kan worden aan een apparaat. Er zijn meerdere manieren om een eenfunctieschakelaar te bedienen, zoals:  door knipperen van de ogen, in- en uitademen (Sip-and-puff) of met druk van een specifiek lichaamsdeel zoals de tong."}],"sources":[{"name":"Eenfunctieschakelaar op Wikipedia","url":"https://nl.wikipedia.org/wiki/Eenfunctieschakelaar/"}]},{"term":"Gebarentaal","slug":"Gebarentaal","definitions":[{"paragraph":"Een gebarentaal is een taal waarbij mensen met elkaar communiceren door gebaren te maken met hun handen, lichaamshouding en gezichtsuitdrukking (mimiek)."}],"sources":[{"name":"Richtlijnen voor gebarentaal bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/gebarentaal/"}]},{"term":"Tekstalternatief","slug":"tekstalternatief","definitions":[{"paragraph":"Een tekst die het alternatief kan zijn als niet-tekstuele content niet gezien kan worden."}],"sources":[{"name":"WCAG-succescriterium 1.1.1 Niet-tekstuele content","url":"https://nldesignsystem.nl/wcag/1.1.1/"}]},{"term":"Toegankelijke naam","slug":"toegankelijke-naam","definitions":[{"paragraph":"De toegankelijke naam is de werkelijke naam van een component. Dit is vaak (maar niet altijd) hetzelfde als de zichtbare naam."}],"sources":[{"name":"WCAG-succescriterium 2.5.3 Label in naam","url":"https://nldesignsystem.nl/wcag/1.1.1/"},{"name":"Formulieren - Labels - Zichtbare naam label","url":"https://nldesignsystem.nl/richtlijnen/formulieren/labels/zichtbare-naam/"},{"name":"Engelstalige uitleg over Accessible Name and Description Computation","url":"https://www.w3.org/TR/accname/"}]},{"term":"Transcript","slug":"transcript","definitions":[{"paragraph":"Een geschreven beschrijving van de informatie in een audiofragment of de audio van een video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Proces","slug":"proces","definitions":[{"paragraph":"Serie handelingen van de gebruiker waarbij elke handeling vereist is om een activiteit te voltooien "}],"sources":[{"name":"Engelstalige WCAG definitie","url":"https://www.w3.org/TR/WCAG22/#dfn-processes"},{"name":"Nederlandstalige WCAG definitie","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-processes"}]},{"term":"Screenreader","slug":"screenreader","synonyms":[{"term":"screen reader"},{"term":"schermlezer"},{"term":"voorleessoftware"}],"definitions":[{"paragraph":"Zogenaamde hulpsoftware die meldt wat er op het scherm staat. De software gebruikt hiervoor de informatie die in de code aanwezig is. Dit kan voorgelezen worden, maar ook op een brailleleesregel getoond worden. De software maakt een apparaat ook te bedienen zonder het te zien."}],"sources":[{"name":"NL Design System Baseline","url":"https://nldesignsystem.nl/baseline/"}]}]');
   var l = i(46447);
   const d = ({ term: e }) => (0, t.jsx)('dt', { children: e }),
    c = ({ paragraph: e }) => (0, t.jsx)(l.fz, { children: e }),
    m = ({ name: e, url: n }) => (0, t.jsx)('li', { children: (0, t.jsx)('a', { className: 'nl-link', href: n, children: e }) }),
    p = ({ terms: e }) => (0, t.jsx)('div', { children: (0, t.jsx)('dl', { children: e.map(({ term: e, slug: n, synonyms: i, definitions: r, sources: a }, s) => (0, t.jsxs)('div', { className: 'ma-terms-list__item', children: [(0, t.jsx)('dt', { id: n, children: (0, t.jsx)('h3', { children: e }) }), i && i.length && (0, t.jsx)(t.Fragment, { children: i.map((e, n) => (0, t.jsx)(d, { ...e }, n)) }), (0, t.jsxs)('dd', { className: 'ma-terms-list__definition', children: [r.map((e, n) => (0, t.jsx)(c, { ...e }, n)), a && a.length && (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('div', { className: 'ma-terms-list__definition__sources', children: [(0, t.jsx)('span', { children: 'Verder lezen:' }), (0, t.jsx)('ul', { role: 'list', children: a.map((e, n) => (0, t.jsx)(m, { ...e }, n)) })] }) })] })] }, s)) }) }),
    u = { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, navigation_order: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] },
    h = 'NL Design System Woordenlijst',
    g = {},
    j = [{ value: 'Woorden', id: 'woorden', level: 2 }];
   function f(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'nl-design-system-woordenlijst', children: 'NL Design System Woordenlijst' }) }), '\n', (0, t.jsx)(s.f, { purpose: 'lead', children: (0, t.jsx)(n.p, { children: 'NL Design System streeft naar een vriendelijke gebruikerservaring. Hier en daar kunnen er toch lastige woorden en\ntermen tussen zitten. De woordenlijst legt deze woorden uit en verwijst door naar bronnen waar dat handig is.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'woorden', children: 'Woorden' }), '\n', (0, t.jsx)(p, { terms: o })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
  56561(e, n, i) {
   i.d(n, { f: () => m });
   var r = i(15540),
    t = i(69967),
    a = i(86070),
    s = i(13526),
    o = i(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, r));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, r.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var m = (0, o.forwardRef)(function (e, n) {
    var i = e.children,
     o = e.className,
     d = e.purpose,
     m = (0, t.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, m), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   m.displayName = 'Paragraph';
  },
  66153(e, n, i) {
   i.d(n, { f: () => r.f });
   var r = i(56561);
  },
 },
]);
