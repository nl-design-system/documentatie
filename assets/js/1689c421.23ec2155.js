'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19525],
 {
  47028: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => a, default: () => m, frontMatter: () => c, metadata: () => o, toc: () => h });
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/order/README","title":"Zorg voor een logische volgorde van de informatie \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen","description":"Richtlijnen om informatie in een logische volgorde te tonen.","source":"@site/docs/richtlijnen/formulieren/visual-design/8-order/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/8-order","slug":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde","permalink":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/8-order/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een logische volgorde van de informatie \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Logische volgorde","pagination_label":"Logische volgorde","description":"Richtlijnen om informatie in een logische volgorde te tonen.","slug":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen afbeelding voor buttons","permalink":"/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons"},"next":{"title":"Voorkom fouten in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/"}}');
   var r = i(86070),
    t = i(85248),
    l = i(78734);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zorg-voor-een-logische-volgorde-van-de-informatie', children: 'Zorg voor een logische volgorde van de informatie' }) }), '\n', (0, r.jsx)(n.p, { children: 'De informatie in een formulier moet logisch zijn als de gebruiker van boven naar beneden leest.' }), '\n', (0, r.jsx)(n.p, { children: 'Zet dus geen belangrijke informatie onder de submitbutton. Bezoekers verwachten dit niet en kunnen die informatie missen, zeker als deze slechtziend of blind zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Is deze constructie toch dringend gewenst: Geef aan als er meer formuliervelden of links of buttons volgen onder de submitbutton.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een logische volgorde van informatie is nodig om te voldoen aan het ', (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   const c = { title: 'Zorg voor een logische volgorde van de informatie \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Logische volgorde', pagination_label: 'Logische volgorde', description: 'Richtlijnen om informatie in een logische volgorde te tonen.', slug: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', keywords: ['labels', 'formulier', 'design', 'code'] },
    a = void 0,
    u = {},
    h = [...l.RM];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(l.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => s, RM: () => t });
   var o = i(86070),
    r = i(85248);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => s });
   var o = i(30758);
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
