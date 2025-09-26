'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [49408],
 {
  65241: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => l, default: () => d, frontMatter: () => o, metadata: () => s, toc: () => k });
   var a = t(52676),
    i = t(40139);
   const o = { title: 'De toegankelijke naam van een link op een logo in de header', slug: 'toegankelijke-naam-link-logo-header', authors: [{ name: 'Rian Rietveld', title: 'Specialist webtoegankelijkheid', url: 'https://www.linkedin.com/in/rianrietveld/' }], tags: ['link', 'logo', 'toegankelijke naam'], image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog-toegankelijke-naam-link-logo.png', hide_table_of_contents: !1, date: new Date('2025-02-11T00:00:00.000Z') },
    l = void 0,
    s = {
     permalink: '/blog/toegankelijke-naam-link-logo-header',
     source: '@site/blog/2025/20250211-a11y-name-link-logo-header.md',
     title: 'De toegankelijke naam van een link op een logo in de header',
     description: 'Hoe geef je een link op een logo in de header een goede toegankelijke naam? We geven twee opties voor het toevoegen van de toegankelijke naam: via het alt-attribuut van een afbeelding of via een aria-label op de link. Welke optie je kiest is afhankelijk van het framework, CMS, of Design System dat je gebruikt.',
     date: '2025-02-11T00:00:00.000Z',
     formattedDate: '11 februari 2025',
     tags: [
      { label: 'link', permalink: '/blog/tags/link' },
      { label: 'logo', permalink: '/blog/tags/logo' },
      { label: 'toegankelijke naam', permalink: '/blog/tags/toegankelijke-naam' },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: 'Rian Rietveld', title: 'Specialist webtoegankelijkheid', url: 'https://www.linkedin.com/in/rianrietveld/' }],
     frontMatter: { title: 'De toegankelijke naam van een link op een logo in de header', slug: 'toegankelijke-naam-link-logo-header', authors: [{ name: 'Rian Rietveld', title: 'Specialist webtoegankelijkheid', url: 'https://www.linkedin.com/in/rianrietveld/' }], tags: ['link', 'logo', 'toegankelijke naam'], image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog-toegankelijke-naam-link-logo.png', hide_table_of_contents: !1, date: '2025-02-11T00:00:00.000Z' },
     unlisted: !1,
     nextItem: { title: 'Tips om in 9 stappen je A-status te halen', permalink: '/blog/tips-9-stappen-A-status-website' },
    },
    r = { authorsImageUrls: [void 0] },
    k = [];
   function g(e) {
    const n = { p: 'p', strong: 'strong', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Hoe geef je een link op een logo in de header een goede toegankelijke naam? We geven twee opties voor het toevoegen van de toegankelijke naam: via het ', (0, a.jsx)(n.strong, { children: 'alt-attribuut' }), ' van een afbeelding of via een ', (0, a.jsx)(n.strong, { children: 'aria-label' }), ' op de link. Welke optie je kiest is afhankelijk van het framework, CMS, of Design System dat je gebruikt.'] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var a = t(75271);
   const i = {},
    o = a.createContext(i);
   function l(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
