'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [80894],
 {
  55325: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => g, frontMatter: () => a, metadata: () => s, toc: () => m });
   var s = n(59488),
    i = n(86070),
    r = n(85248);
   const a = { title: 'Testen met Wmebv-formulieren: eerste lessen', slug: 'wmebv-gebruikerstesten', authors: 'Hidde de Vries', tags: ['NL Design System', 'gebruikerstesten', 'formulieren'], hide_table_of_contents: !1, date: new Date('2023-11-21T00:00:00.000Z'), image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/postits.png' },
    o = void 0,
    l = { authorsImageUrls: [void 0] },
    m = [];
   function u(e) {
    const t = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(t.p, { children: 'In de afgelopen maanden werkte het NL Design System kernteam samen met VNG aan generieke formulieren. Vorige week testten we ze met gebruikers bij Stichting Accessibility in Utrecht.' });
   }
   function g(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  59488: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/wmebv-gebruikerstesten","source":"@site/blog/2023/20231121-wmebv-gebruikerstesten.md","title":"Testen met Wmebv-formulieren: eerste lessen","description":"In de afgelopen maanden werkte het NL Design System kernteam samen met VNG aan generieke formulieren. Vorige week testten we ze met gebruikers bij Stichting Accessibility in Utrecht.","date":"2023-11-21T00:00:00.000Z","tags":[{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"},{"inline":false,"label":"Gebruikerstesten","permalink":"/blog/tags/gebruikerstesten"},{"inline":false,"label":"Formulieren","permalink":"/blog/tags/formulieren"}],"hasTruncateMarker":true,"authors":[{"name":"Hidde de Vries","title":"Public relations lead & Toegankelijkheidsspecialist NL Design System","url":"https://www.linkedin.com/in/hiddedevries/","key":"Hidde de Vries","page":null}],"frontMatter":{"title":"Testen met Wmebv-formulieren: eerste lessen","slug":"wmebv-gebruikerstesten","authors":"Hidde de Vries","tags":["NL Design System","gebruikerstesten","formulieren"],"hide_table_of_contents":false,"date":"2023-11-21T00:00:00.000Z","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/postits.png"},"unlisted":false,"prevItem":{"title":"Rian en Francesca aanwezig bij Community Online Formulieren ","permalink":"/blog/community-online-formulieren"},"nextItem":{"title":"Spacing tokens als systeem voor verticale ruimte","permalink":"/blog/spacing-tokens"}}');
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => a, x: () => o });
   var s = n(30758);
   const i = {},
    r = s.createContext(i);
   function a(e) {
    const t = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), s.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
