'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67877],
 {
  63922: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => u, default: () => w, frontMatter: () => m, metadata: () => h, toc: () => p });
   var t = i(52676),
    r = i(40139),
    s = i(16167);
   const a = JSON.parse('[{"term":"Aanwijzer","slug":"aanwijzer","definitions":[{"paragraph":"Een vorm van invoer waarbij men iets aanwijst op het scherm. Voorbeelden hiervan zijn de muis, de touchpad, een trackball, aanraking of bediening met een pen. "}],"sources":[{"name":"De definitie van <em>enkele aanwijzer</em> in de Nederlandse vertaling van WCAG.","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-single-pointer"}]},{"term":"Audiodescriptie","slug":"Audiodescriptie","definitions":[{"paragraph":"Een hoorbare, gesproken beschrijving van belangrijke visuele informatie die niet voorkomt in de audio van de video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie/"}]},{"term":"Eenfunctieschakelaar","slug":"eenfunctieschakelaar","synonyms":[{"term":"Switch access"}],"definitions":[{"paragraph":"Een enkele knop of schakelaar die verbonden kan worden aan een apparaat. Er zijn meerdere manieren om een eenfunctieschakelaar te bedienen, zoals:  door knipperen van de ogen, in- en uitademen (Sip-and-puff) of met druk van een specifiek lichaamsdeel zoals de tong."}],"sources":[{"name":"Eenfunctieschakelaar op Wikipedia","url":"https://nl.wikipedia.org/wiki/Eenfunctieschakelaar/"}]},{"term":"Gebarentaal","slug":"Gebarentaal","definitions":[{"paragraph":"Een gebarentaal is een taal waarbij mensen met elkaar communiceren door gebaren te maken met hun handen, lichaamshouding en gezichtsuitdrukking (mimiek)."}],"sources":[{"name":"Richtlijnen voor gebarentaal bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/gebarentaal/"}]},{"term":"Tekstalternatief","slug":"tekstalternatief","definitions":[{"paragraph":"Een tekst die het alternatief kan zijn als niet-tekstuele content niet gezien kan worden."}],"sources":[{"name":"WCAG-succescriterium 1.1.1 Niet-tekstuele content","url":"https://nldesignsystem.nl/wcag/1.1.1/"}]},{"term":"Toegankelijke naam","slug":"toegankelijke-naam","definitions":[{"paragraph":"De toegankelijke naam is de werkelijke naam van een component. Dit is vaak (maar niet altijd) hetzelfde als de zichtbare naam."}],"sources":[{"name":"WCAG-succescriterium 2.5.3 Label in naam","url":"https://nldesignsystem.nl/wcag/1.1.1/"},{"name":"Formulieren - Labels - Zichtbare naam label","url":"https://nldesignsystem.nl/richtlijnen/formulieren/labels/zichtbare-naam/"},{"name":"Engelstalige uitleg over Accessible Name and Description Computation","url":"https://www.w3.org/TR/accname/"}]},{"term":"Proces","slug":"proces","definitions":[{"paragraph":"Serie handelingen van de gebruiker waarbij elke handeling vereist is om een activiteit te voltooien "}],"sources":[{"name":"Engelstalige WCAG definitie","url":"https://www.w3.org/TR/WCAG22/#dfn-processes"},{"name":"Nederlandstalige WCAG definitie","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-processes"}]},{"term":"Screenreader","slug":"screenreader","synonyms":[{"term":"screen reader"},{"term":"schermlezer"},{"term":"voorleessoftware"}],"definitions":[{"paragraph":"Zogenaamde hulpsoftware die meldt wat er op het scherm staat. De software gebruikt hiervoor de informatie die in de code aanwezig is. Dit kan voorgelezen worden, maar ook op een brailleleesregel getoond worden. De software maakt een apparaat ook te bedienen zonder het te zien."}],"sources":[{"name":"NL Design System Baseline","url":"https://nldesignsystem.nl/baseline/"}]}]'),
    o = (e) => {
     let { term: n } = e;
     return (0, t.jsx)('dt', { children: n });
    },
    l = (e) => {
     let { paragraph: n } = e;
     return (0, t.jsx)(s.nv, { children: n });
    },
    d = (e) => {
     let { name: n, url: i } = e;
     return (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: i, children: n }) });
    },
    c = (e) => {
     let { terms: n } = e;
     return (0, t.jsx)('div', {
      children: (0, t.jsx)('dl', {
       children: n.map((e, n) => {
        let { term: i, slug: r, synonyms: s, definitions: a, sources: c } = e;
        return (0, t.jsxs)('div', { className: 'terms-list__item', children: [(0, t.jsx)('dt', { id: r, children: (0, t.jsx)('h3', { children: i }) }), s && s.length && (0, t.jsx)(t.Fragment, { children: s.map((e, n) => (0, t.jsx)(o, { ...e }, n)) }), (0, t.jsxs)('dd', { className: 'terms-list__definition', children: [a.map((e, n) => (0, t.jsx)(l, { ...e }, n)), c && c.length && (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('div', { className: 'terms-list__definition__sources', children: [(0, t.jsx)('span', { children: 'Verder lezen:' }), (0, t.jsx)('ul', { role: 'list', children: c.map((e, n) => (0, t.jsx)(d, { ...e }, n)) })] }) })] })] }, n);
       }),
      }),
     });
    },
    m = { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] },
    u = 'NL Design System Woordenlijst',
    h = { id: 'woordenlijst/README', title: 'Woordenlijst', description: 'NL Design System Woordenlijst', source: '@site/docs/woordenlijst/README.mdx', sourceDirName: 'woordenlijst', slug: '/woordenlijst', permalink: '/woordenlijst', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/woordenlijst/README.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] }, sidebar: 'handboek', previous: { title: 'Baseline juli 2025', permalink: '/baseline/2025-07' } },
    g = {},
    p = [{ value: 'Woorden', id: 'woorden', level: 2 }];
   function j(e) {
    const n = { h1: 'h1', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.h1, { id: 'nl-design-system-woordenlijst', children: 'NL Design System Woordenlijst' }), '\n', (0, t.jsx)(s.nv, { lead: !0, children: (0, t.jsx)(n.p, { children: 'NL Design System streeft naar een vriendelijke gebruikerservaring. Hier en daar kunnen er toch lastige woorden en\ntermen tussen zitten. De woordenlijst legt deze woorden uit en verwijst door naar bronnen waar dat handig is.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'woorden', children: 'Woorden' }), '\n', (0, t.jsx)(c, { terms: a })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => a });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function a(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
