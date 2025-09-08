'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [32942],
 {
  66968: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var o = i(52676),
    r = i(40139);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  71843: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => c, default: () => h, frontMatter: () => d, metadata: () => a, toc: () => m });
   var o = i(52676),
    r = i(40139),
    t = i(66968);
   function l(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zorg-voor-een-logische-volgorde-van-de-informatie', children: 'Zorg voor een logische volgorde van de informatie' }), '\n', (0, o.jsx)(n.p, { children: 'De informatie in een formulier moet logisch zijn als de gebruiker van boven naar beneden leest.' }), '\n', (0, o.jsx)(n.p, { children: 'Zet dus geen belangrijke informatie onder de submitbutton. Bezoekers verwachten dit niet en kunnen die informatie missen, zeker als deze slechtziend of blind zijn.' }), '\n', (0, o.jsx)(n.p, { children: 'Is deze constructie toch dringend gewenst: Geef aan als er meer formuliervelden of links of buttons volgen onder de submitbutton.' }), '\n', (0, o.jsxs)(n.p, { children: ['Een logische volgorde van informatie is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/1.3.2', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
   const d = { title: 'Zorg voor een logische volgorde van de informatie \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Logische volgorde', pagination_label: 'Logische volgorde', description: 'Richtlijnen om informatie in een logische volgorde te tonen.', slug: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', keywords: ['labels', 'formulier', 'design', 'code'] },
    c = void 0,
    a = { id: 'richtlijnen/formulieren/visual-design/order/README', title: 'Zorg voor een logische volgorde van de informatie \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', description: 'Richtlijnen om informatie in een logische volgorde te tonen.', source: '@site/docs/richtlijnen/formulieren/visual-design/8-order/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/8-order', slug: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', permalink: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/8-order/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg voor een logische volgorde van de informatie \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Logische volgorde', pagination_label: 'Logische volgorde', description: 'Richtlijnen om informatie in een logische volgorde te tonen.', slug: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Geen afbeelding voor buttons', permalink: '/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons' }, next: { title: 'Voorkom fouten in een formulier', permalink: '/richtlijnen/formulieren/voorkom-fouten/' } },
    u = {},
    m = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(s, {}), '\n', (0, o.jsx)(t.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => l });
   var o = i(75271);
   const r = {},
    t = o.createContext(r);
   function l(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
