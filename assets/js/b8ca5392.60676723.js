'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [36960],
 {
  77617: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => s, default: () => d, frontMatter: () => l, metadata: () => a, toc: () => k });
   var a = t(84041),
    o = t(86070),
    i = t(85248);
   const l = { title: 'De toegankelijke naam van een link op een logo in de header', slug: 'toegankelijke-naam-link-logo-header', authors: [{ key: 'Rian Rietveld', title: 'Specialist webtoegankelijkheid' }], tags: ['link', 'logo', 'toegankelijke naam'], image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog-toegankelijke-naam-link-logo.png', hide_table_of_contents: !1, date: new Date('2025-02-11T00:00:00.000Z') },
    s = void 0,
    g = { authorsImageUrls: [void 0] },
    k = [];
   function r(e) {
    const n = { p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(n.p, { children: ['Hoe geef je een link op een logo in de header een goede toegankelijke naam? We geven twee opties voor het toevoegen van de toegankelijke naam: via het ', (0, o.jsx)(n.strong, { children: 'alt-attribuut' }), ' van een afbeelding of via een ', (0, o.jsx)(n.strong, { children: 'aria-label' }), ' op de link. Welke optie je kiest is afhankelijk van het framework, CMS, of Design System dat je gebruikt.'] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  84041: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/toegankelijke-naam-link-logo-header","source":"@site/blog/2025/20250211-a11y-name-link-logo-header.md","title":"De toegankelijke naam van een link op een logo in de header","description":"Hoe geef je een link op een logo in de header een goede toegankelijke naam? We geven twee opties voor het toevoegen van de toegankelijke naam: via het alt-attribuut van een afbeelding of via een aria-label op de link. Welke optie je kiest is afhankelijk van het framework, CMS, of Design System dat je gebruikt.","date":"2025-02-11T00:00:00.000Z","tags":[{"inline":false,"label":"Link","permalink":"/blog/tags/link"},{"inline":false,"label":"Logo","permalink":"/blog/tags/logo"},{"inline":false,"label":"Toegankelijke naam","permalink":"/blog/tags/toegankelijke-naam"}],"hasTruncateMarker":true,"authors":[{"name":"Rian Rietveld","title":"Specialist webtoegankelijkheid","url":"https://www.linkedin.com/in/rianrietveld/","key":"Rian Rietveld","page":null,"socials":{}}],"frontMatter":{"title":"De toegankelijke naam van een link op een logo in de header","slug":"toegankelijke-naam-link-logo-header","authors":[{"key":"Rian Rietveld","title":"Specialist webtoegankelijkheid"}],"tags":["link","logo","toegankelijke naam"],"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog-toegankelijke-naam-link-logo.png","hide_table_of_contents":false,"date":"2025-02-11T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Tips om in 9 stappen je A-status te halen","permalink":"/blog/tips-9-stappen-A-status-website"}}');
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => s });
   var a = t(30758);
   const o = {},
    i = a.createContext(o);
   function l(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
