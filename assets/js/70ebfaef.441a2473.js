'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56601],
 {
  43499: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => m, frontMatter: () => l, metadata: () => i, toc: () => g });
   var i = t(71690),
    o = t(86070),
    r = t(85248);
   const l = { title: 'Toegankelijke foutmeldingen in formulieren', slug: 'toegankelijke-foutmeldingen-formulieren', authors: 'Rian Rietveld', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog_toegankelijker-foutmeldingen.png', tags: ['formulieren', 'toegankelijkheid', 'richtlijnen', 'NL Design System'], hide_table_of_contents: !1, date: new Date('2024-06-24T00:00:00.000Z') },
    a = void 0,
    s = { authorsImageUrls: [void 0] },
    g = [];
   function u(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Hoe geef je een gebruiker nuttige informatie over wat er niet goed gaat bij het invullen van een formulier? Wanneer je zorg besteedt aan het voorkomen en aangeven van fouten, is de kans dat een gebruiker het formulier verzendt veel groter.' }), '\n', (0, o.jsx)(n.p, { children: 'In dit artikel ga ik stap voor stap in op het voorkomen, aanduiden en het geven van hulp bij foutmeldingen in een formulier voor verschillende soorten gebruikers.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
  },
  71690: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/toegankelijke-foutmeldingen-formulieren","source":"@site/blog/2024/20240624-toegankelijke-foutmeldingen.md","title":"Toegankelijke foutmeldingen in formulieren","description":"Hoe geef je een gebruiker nuttige informatie over wat er niet goed gaat bij het invullen van een formulier? Wanneer je zorg besteedt aan het voorkomen en aangeven van fouten, is de kans dat een gebruiker het formulier verzendt veel groter.","date":"2024-06-24T00:00:00.000Z","tags":[{"inline":false,"label":"Formulieren","permalink":"/blog/tags/formulieren"},{"inline":false,"label":"Toegankelijkheid","permalink":"/blog/tags/toegankelijkheid"},{"inline":false,"label":"Richtlijnen","permalink":"/blog/tags/richtlijnen"},{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"}],"hasTruncateMarker":true,"authors":[{"name":"Rian Rietveld","title":"Specialist webtoegankelijkheid NL Design System","url":"https://www.linkedin.com/in/rianrietveld/","key":"Rian Rietveld","page":null}],"frontMatter":{"title":"Toegankelijke foutmeldingen in formulieren","slug":"toegankelijke-foutmeldingen-formulieren","authors":"Rian Rietveld","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog_toegankelijker-foutmeldingen.png","tags":["formulieren","toegankelijkheid","richtlijnen","NL Design System"],"hide_table_of_contents":false,"date":"2024-06-24T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Design systems bij Logius: hoe \xe9\xe9n design system meerdere producten ondersteunt","permalink":"/blog/een-design-system-meerdere-producten"},"nextItem":{"title":"Van eigen componenten naar open source \u201cblocks\u201d voor WordPress","permalink":"/blog/community-blocks"}}');
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => a });
   var i = t(30758);
   const o = {},
    r = i.createContext(o);
   function l(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
