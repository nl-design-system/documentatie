'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [23692],
 {
  78734: (e, n, t) => {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => s });
   var r = t(30758);
   const i = {},
    o = r.createContext(i);
   function l(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
  90750: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => p, default: () => u, frontMatter: () => d, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"richtlijnen/stijl/typography/line-length/README","title":"Zorg voor een comfortabele regellengte \xb7 Typografie \xb7 Richtlijnen","description":"Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.","source":"@site/docs/richtlijnen/stijl/typography/3-line-length/README.mdx","sourceDirName":"richtlijnen/stijl/typography/3-line-length","slug":"/richtlijnen/stijl/typografie/regellengte","permalink":"/richtlijnen/stijl/typografie/regellengte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/3-line-length/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een comfortabele regellengte \xb7 Typografie \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Comfortabele regellengte","pagination_label":"Zorg voor een comfortabele regellengte","description":"Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.","slug":"/richtlijnen/stijl/typografie/regellengte","keywords":["regellengte"]},"sidebar":"richtlijnen","previous":{"title":"Zorg voor een comfortabele regelafstand","permalink":"/richtlijnen/stijl/typografie/regelafstand"},"next":{"title":"Kies een goed lettertype","permalink":"/richtlijnen/stijl/typografie/lettertype"}}');
   var i = t(86070),
    o = t(85248),
    l = t(78734);
   function s(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s();
   }
   function c(e) {
    const n = { code: 'code', img: 'img', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren. Regellengte wordt ook wel \u2018Line-length\u2019 of \u2018Measure\u2019 genoemd.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regellengte.png', alt: 'Paragrafen met verschillende regellengtes. De eerste te lang, de tweede te kort, de derde goed. Bij de eerste twee paragrafen staat een rood kruis.' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Een waarde die binnen CSS vaak over het hoofd wordt gezien is ', (0, i.jsx)(n.code, { children: 'ch' }), '. Door je paragrafen een ', (0, i.jsx)(n.code, { children: 'max-width' }), ' van ', (0, i.jsx)(n.code, { children: '75ch' }), ' mee te geven zorg je ervoor dat regels nooit te lang worden.'] }), '\n', (0, i.jsx)(n.p, { children: 'Om te checken of je regellengte tussen de 45 en 75 karakters valt, kun je de onderstaande Lorem ipsum tekst gebruiken. De eerste asterisk (*) bevindt zich op positie 45 en de tweede op positie 75.' }), '\n', (0, i.jsx)(n.p, { children: 'Lorem ipsum dolor sit amet, consectetur adi * isicing elit, sed do eiusmo * tempor incididunt ut labore et dolore magna aliqua.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   const d = { title: 'Zorg voor een comfortabele regellengte \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Comfortabele regellengte', pagination_label: 'Zorg voor een comfortabele regellengte', description: 'Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.', slug: '/richtlijnen/stijl/typografie/regellengte', keywords: ['regellengte'] },
    p = 'Zorg voor een comfortabele regellengte',
    h = {},
    m = [...l.RM];
   function j(e) {
    const n = { h1: 'h1', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'zorg-voor-een-comfortabele-regellengte', children: 'Zorg voor een comfortabele regellengte' }) }), '\n', (0, i.jsx)(g, {}), '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(l.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
