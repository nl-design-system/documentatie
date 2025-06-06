'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67877],
 {
  63922: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => u, default: () => p, frontMatter: () => c, metadata: () => m, toc: () => j });
   var t = i(52676),
    s = i(40139),
    r = i(16167);
   const o = JSON.parse('[{"term":"Aanwijzer","slug":"aanwijzer","definitions":[{"paragraph":"Een vorm van invoer waarbij men iets aanwijst op het scherm. Voorbeelden hiervan zijn de muis, de touchpad, een trackball, aanraking of bediening met een pen. "}],"sources":[{"name":"De definitie van <em>enkele aanwijzer</em> in de Nederlandse vertaling van WCAG.","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-single-pointer"}]},{"term":"Audiodescriptie","slug":"Audiodescriptie","definitions":[{"paragraph":"Een hoorbare, gesproken beschrijving van belangrijke visuele informatie die niet voorkomt in de audio van de video."}],"sources":[{"name":"Richtlijnen voor audiodescriptie bij een video","url":"https://nldesignsystem.nl/richtlijnen/content/video/audiodescriptie"}]},{"term":"Tekstalternatief","slug":"tekstalternatief","definitions":[{"paragraph":"Een tekst die het alternatief kan zijn als niet-tekstuele content niet gezien kan worden."}],"sources":[{"name":"WCAG-succescriterium 1.1.1 Niet-tekstuele content","url":"https://nldesignsystem.nl/wcag/1.1.1/"}]},{"term":"Proces","slug":"proces","definitions":[{"paragraph":"Serie handelingen van de gebruiker waarbij elke handeling vereist is om een activiteit te voltooien "}],"sources":[{"name":"Engelstalige WCAG definitie","url":"https://www.w3.org/TR/WCAG22/#dfn-processes"},{"name":"Nederlandstalige WCAG definitie","url":"https://www.w3.org/Translations/WCAG22-nl/#dfn-processes"}]}]'),
    l = (e) => {
     let { paragraph: n } = e;
     return (0, t.jsx)(r.nv, { children: n });
    },
    a = (e) => {
     let { name: n, url: i } = e;
     return (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: i, children: n }) });
    },
    d = (e) => {
     let { terms: n } = e;
     return (0, t.jsx)('div', {
      children: (0, t.jsx)('dl', {
       children: n.map((e, n) => {
        let { term: i, slug: s, definitions: r, sources: o } = e;
        return (0, t.jsxs)('div', { className: 'terms-list__item', children: [(0, t.jsx)('dt', { id: s, children: (0, t.jsx)('h3', { children: i }) }), (0, t.jsxs)('dd', { className: 'terms-list__definition', children: [r.map((e, n) => (0, t.jsx)(l, { ...e }, n)), o && o.length && (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('div', { className: 'terms-list__definition__sources', children: [(0, t.jsx)('span', { children: 'Verder lezen' }), (0, t.jsx)('ul', { role: 'list', children: o.map((e, n) => (0, t.jsx)(a, { ...e }, n)) })] }) })] })] }, n);
       }),
      }),
     });
    },
    c = { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] },
    u = 'NL Design System Woordenlijst',
    m = { id: 'woordenlijst/README', title: 'Woordenlijst', description: 'NL Design System Woordenlijst', source: '@site/docs/woordenlijst/README.mdx', sourceDirName: 'woordenlijst', slug: '/woordenlijst', permalink: '/woordenlijst', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/woordenlijst/README.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Woordenlijst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Woordenlijst', sidebar_position: 5, pagination_label: 'Woordenlijst', description: 'NL Design System Woordenlijst', slug: '/woordenlijst', keywords: ['termenlijst', 'glossary', 'glossarium', 'uitleg'] }, sidebar: 'handboek', previous: { title: 'Baseline mei 2025', permalink: '/baseline/2025-05' } },
    h = {},
    j = [{ value: 'Woorden', id: 'woorden', level: 2 }];
   function g(e) {
    const n = { h1: 'h1', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.h1, { id: 'nl-design-system-woordenlijst', children: 'NL Design System Woordenlijst' }), '\n', (0, t.jsx)(r.nv, { lead: !0, children: (0, t.jsx)(n.p, { children: 'NL Design System streeft naar een vriendelijke gebruikerservaring. Hier en daar kunnen er toch lastige woorden en\ntermen tussen zitten. De woordenlijst legt deze woorden uit en verwijst door naar bronnen waar dat handig is.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'woorden', children: 'Woorden' }), '\n', (0, t.jsx)(d, { terms: o })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
