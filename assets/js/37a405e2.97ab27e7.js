'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67877],
 {
  63922: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => u, default: () => p, frontMatter: () => c, metadata: () => m, toc: () => h });
   var s = t(52676),
    i = t(40139),
    r = t(16167);
   const o = JSON.parse('[{"term":"Tekstalternatief","slug":"tekstalternatief","definitions":[{"paragraph":"Een tekst die het alternatief kan zijn als niet-tekstuele content niet gezien kan worden."}],"sources":[{"name":"WCAG-succescriterium 1.1.1 Niet-tekstuele content","url":"https://nldesignsystem.nl/wcag/1.1.1/"}]},{"term":"Proces","slug":"proces","definitions":[{"paragraph":"Serie handelingen van de gebruiker waarbij elke handeling vereist is om een activiteit te voltooien "}],"sources":[{"name":"Engelstalige WCAG definitie","url":"https://www.w3.org/TR/WCAG22/#dfn-processes"},{"name":"Nederlandstalige WCAG definitie","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-processes"}]}]'),
    l = (e) => {
     let { paragraph: n } = e;
     return (0, s.jsx)(r.nv, { children: n });
    },
    d = (e) => {
     let { name: n, url: t } = e;
     return (0, s.jsx)('li', { children: (0, s.jsx)('a', { href: t, children: n }) });
    },
    a = (e) => {
     let { terms: n } = e;
     return (0, s.jsx)('div', {
      children: (0, s.jsx)('dl', {
       children: n.map((e, n) => {
        let { term: t, slug: i, definitions: r, sources: o } = e;
        return (0, s.jsxs)('div', { className: 'terms-list__item', children: [(0, s.jsx)('dt', { id: i, children: (0, s.jsx)('h3', { children: t }) }), (0, s.jsxs)('dd', { className: 'terms-list__definition', children: [r.map((e, n) => (0, s.jsx)(l, { ...e }, n)), o && o.length && (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('div', { className: 'terms-list__definition__sources', children: [(0, s.jsx)('span', { children: 'Verder lezen' }), (0, s.jsx)('ul', { role: 'list', children: o.map((e, n) => (0, s.jsx)(d, { ...e }, n)) })] }) })] })] }, n);
       }),
      }),
     });
    },
    c = { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] },
    u = 'NL Design System Woordenlijst',
    m = { id: 'woordenlijst/README', title: 'Woordenlijst', description: 'NL Design System Woordenlijst', source: '@site/docs/woordenlijst/README.mdx', sourceDirName: 'woordenlijst', slug: '/woordenlijst', permalink: '/woordenlijst', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/woordenlijst/README.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] }, sidebar: 'handboek', previous: { title: 'Baseline mei 2025', permalink: '/baseline/2025-05' } },
    j = {},
    h = [{ value: 'Woorden', id: 'woorden', level: 2 }];
   function g(e) {
    const n = { h1: 'h1', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.h1, { id: 'nl-design-system-woordenlijst', children: 'NL Design System Woordenlijst' }), '\n', (0, s.jsx)(r.nv, { lead: !0, children: (0, s.jsx)(n.p, { children: 'NL Design System streeft naar een vriendelijke gebruikerservaring. Hier en daar kunnen er toch lastige woorden en\ntermen tussen zitten. De woordenlijst legt deze woorden uit en verwijst door naar bronnen waar dat handig is.' }) }), '\n', (0, s.jsx)(n.h2, { id: 'woorden', children: 'Woorden' }), '\n', (0, s.jsx)(a, { terms: o })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var s = t(75271);
   const i = {},
    r = s.createContext(i);
   function o(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
