'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [24870],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var r = t(52676),
    i = t(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  70382: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => g, metadata: () => p, toc: () => m });
   var r = t(52676),
    i = t(24785);
   function o(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o();
   }
   function s(e) {
    const n = { code: 'code', img: 'img', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren. Regellengte wordt ook wel \u2018Line-length\u2019 of \u2018Measure\u2019 genoemd.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regellengte.png', alt: 'Paragrafen met verschillende regellengtes. De eerste te lang, de tweede te kort, de derde goed. Bij de eerste twee paragrafen staat een rood kruis.' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Een waarde die binnen CSS vaak over het hoofd wordt gezien is ', (0, r.jsx)(n.code, { children: 'ch' }), '. Door je paragrafen een ', (0, r.jsx)(n.code, { children: 'max-width' }), ' van ', (0, r.jsx)(n.code, { children: '75ch' }), ' mee te geven zorg je ervoor dat regels nooit te lang worden.'] }), '\n', (0, r.jsx)(n.p, { children: 'Om te checken of je regellengte tussen de 45 en 75 karakters valt, kun je de onderstaande Lorem ipsum tekst gebruiken. De eerste asterisk (*) bevindt zich op positie 45 en de tweede op positie 75.' }), '\n', (0, r.jsx)(n.p, { children: 'Lorem ipsum dolor sit amet, consectetur adi * isicing elit, sed do eiusmo * tempor incididunt ut labore et dolore magna aliqua.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   var c = t(55400);
   const g = { title: 'Zorg voor een comfortabele regellengte \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Comfortabele regellengte', pagination_label: 'Zorg voor een comfortabele regellengte', description: 'Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.', slug: '/richtlijnen/stijl/typografie/regellengte', keywords: ['regellengte'] },
    d = 'Zorg voor een comfortabele regellengte',
    p = { id: 'richtlijnen/stijl/typography/line-length/README', title: 'Zorg voor een comfortabele regellengte \xb7 Typografie \xb7 Richtlijnen', description: 'Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.', source: '@site/docs/richtlijnen/stijl/typography/3-line-length/README.mdx', sourceDirName: 'richtlijnen/stijl/typography/3-line-length', slug: '/richtlijnen/stijl/typografie/regellengte', permalink: '/en/richtlijnen/stijl/typografie/regellengte', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/3-line-length/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg voor een comfortabele regellengte \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Comfortabele regellengte', pagination_label: 'Zorg voor een comfortabele regellengte', description: 'Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.', slug: '/richtlijnen/stijl/typografie/regellengte', keywords: ['regellengte'] }, sidebar: 'richtlijnen', previous: { title: 'Zorg voor een comfortabele regelafstand', permalink: '/en/richtlijnen/stijl/typografie/regelafstand' }, next: { title: 'Kies een goed lettertype', permalink: '/en/richtlijnen/stijl/typografie/lettertype' } },
    h = {},
    m = [];
   function j(e) {
    const n = { h1: 'h1', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'zorg-voor-een-comfortabele-regellengte', children: 'Zorg voor een comfortabele regellengte' }), '\n', (0, r.jsx)(a, {}), '\n', (0, r.jsx)(l, {}), '\n', (0, r.jsx)(c.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var r = t(75271);
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
 },
]);
