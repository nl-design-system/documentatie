'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [51022],
 {
  69253: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => u, default: () => f, frontMatter: () => h, metadata: () => t, toc: () => p });
   const t = JSON.parse('{"id":"woordenlijst/README","title":"Woordenlijst","description":"NL Design System Woordenlijst","source":"@site/docs/woordenlijst/README.mdx","sourceDirName":"woordenlijst","slug":"/woordenlijst","permalink":"/woordenlijst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/woordenlijst/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Woordenlijst","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Woordenlijst","sidebar_position":5,"pagination_label":"Woordenlijst","description":"NL Design System Woordenlijst","slug":"/woordenlijst","keywords":["termenlijst","glossary","glossarium","uitleg"]},"sidebar":"handboek","previous":{"title":"Baseline november 2025","permalink":"/baseline/2025-11"}}');
   var s = i(86070),
    r = i(85248),
    a = i(68873);
   const o = JSON.parse('[{"term":"Aanwijzer","slug":"aanwijzer","definitions":[{"paragraph":"Een vorm van invoer waarbij men iets aanwijst op het scherm. Voorbeelden hiervan zijn de muis, de touchpad, een trackball, aanraking of bediening met een pen. "}],"sources":[{"name":"De definitie van <em>enkele aanwijzer</em> in de Nederlandse vertaling van WCAG.","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-single-pointer"}]},{"term":"Audiodescriptie","slug":"audiodescriptie","definitions":[{"paragraph":"Een hoorbare, gesproken beschrijving van visuele informatie die niet voorkomt in de audio van de video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Eenfunctieschakelaar","slug":"eenfunctieschakelaar","synonyms":[{"term":"Switch access"}],"definitions":[{"paragraph":"Een enkele knop of schakelaar die verbonden kan worden aan een apparaat. Er zijn meerdere manieren om een eenfunctieschakelaar te bedienen, zoals:  door knipperen van de ogen, in- en uitademen (Sip-and-puff) of met druk van een specifiek lichaamsdeel zoals de tong."}],"sources":[{"name":"Eenfunctieschakelaar op Wikipedia","url":"https://nl.wikipedia.org/wiki/Eenfunctieschakelaar/"}]},{"term":"Gebarentaal","slug":"Gebarentaal","definitions":[{"paragraph":"Een gebarentaal is een taal waarbij mensen met elkaar communiceren door gebaren te maken met hun handen, lichaamshouding en gezichtsuitdrukking (mimiek)."}],"sources":[{"name":"Richtlijnen voor gebarentaal bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/gebarentaal/"}]},{"term":"Tekstalternatief","slug":"tekstalternatief","definitions":[{"paragraph":"Een tekst die het alternatief kan zijn als niet-tekstuele content niet gezien kan worden."}],"sources":[{"name":"WCAG-succescriterium 1.1.1 Niet-tekstuele content","url":"https://nldesignsystem.nl/wcag/1.1.1/"}]},{"term":"Toegankelijke naam","slug":"toegankelijke-naam","definitions":[{"paragraph":"De toegankelijke naam is de werkelijke naam van een component. Dit is vaak (maar niet altijd) hetzelfde als de zichtbare naam."}],"sources":[{"name":"WCAG-succescriterium 2.5.3 Label in naam","url":"https://nldesignsystem.nl/wcag/1.1.1/"},{"name":"Formulieren - Labels - Zichtbare naam label","url":"https://nldesignsystem.nl/richtlijnen/formulieren/labels/zichtbare-naam/"},{"name":"Engelstalige uitleg over Accessible Name and Description Computation","url":"https://www.w3.org/TR/accname/"}]},{"term":"Transcript","slug":"transcript","definitions":[{"paragraph":"Een geschreven beschrijving van de informatie in een audiofragment of de audio van een video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Proces","slug":"proces","definitions":[{"paragraph":"Serie handelingen van de gebruiker waarbij elke handeling vereist is om een activiteit te voltooien "}],"sources":[{"name":"Engelstalige WCAG definitie","url":"https://www.w3.org/TR/WCAG22/#dfn-processes"},{"name":"Nederlandstalige WCAG definitie","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-processes"}]},{"term":"Screenreader","slug":"screenreader","synonyms":[{"term":"screen reader"},{"term":"schermlezer"},{"term":"voorleessoftware"}],"definitions":[{"paragraph":"Zogenaamde hulpsoftware die meldt wat er op het scherm staat. De software gebruikt hiervoor de informatie die in de code aanwezig is. Dit kan voorgelezen worden, maar ook op een brailleleesregel getoond worden. De software maakt een apparaat ook te bedienen zonder het te zien."}],"sources":[{"name":"NL Design System Baseline","url":"https://nldesignsystem.nl/baseline/"}]}]'),
    l = ({ term: e }) => (0, s.jsx)('dt', { children: e }),
    d = ({ paragraph: e }) => (0, s.jsx)(a.fz, { children: e }),
    c = ({ name: e, url: n }) => (0, s.jsx)('li', { children: (0, s.jsx)('a', { href: n, children: e }) }),
    m = ({ terms: e }) => (0, s.jsx)('div', { children: (0, s.jsx)('dl', { children: e.map(({ term: e, slug: n, synonyms: i, definitions: t, sources: r }, a) => (0, s.jsxs)('div', { className: 'terms-list__item', children: [(0, s.jsx)('dt', { id: n, children: (0, s.jsx)('h3', { children: e }) }), i && i.length && (0, s.jsx)(s.Fragment, { children: i.map((e, n) => (0, s.jsx)(l, { ...e }, n)) }), (0, s.jsxs)('dd', { className: 'terms-list__definition', children: [t.map((e, n) => (0, s.jsx)(d, { ...e }, n)), r && r.length && (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('div', { className: 'terms-list__definition__sources', children: [(0, s.jsx)('span', { children: 'Verder lezen:' }), (0, s.jsx)('ul', { role: 'list', children: r.map((e, n) => (0, s.jsx)(c, { ...e }, n)) })] }) })] })] }, a)) }) }),
    h = { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] },
    u = 'NL Design System Woordenlijst',
    g = {},
    p = [{ value: 'Woorden', id: 'woorden', level: 2 }];
   function j(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'nl-design-system-woordenlijst', children: 'NL Design System Woordenlijst' }) }), '\n', (0, s.jsx)(a.fz, { lead: !0, children: (0, s.jsx)(n.p, { children: 'NL Design System streeft naar een vriendelijke gebruikerservaring. Hier en daar kunnen er toch lastige woorden en\ntermen tussen zitten. De woordenlijst legt deze woorden uit en verwijst door naar bronnen waar dat handig is.' }) }), '\n', (0, s.jsx)(n.h2, { id: 'woorden', children: 'Woorden' }), '\n', (0, s.jsx)(m, { terms: o })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => o });
   var t = i(30758);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
