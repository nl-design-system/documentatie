'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [97765],
 {
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => o });
   var i = t(86070),
    r = t(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => l });
   var i = t(30758);
   const r = {},
    o = i.createContext(r);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
  94119: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => h, frontMatter: () => u, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/no-image-buttons/README","title":"Gebruik geen afbeelding voor buttons maar stijl tekst met CSS | Visueel ontwerp van een formulier | Richtlijnen","description":"Richtlijnen om stijl van buttons met CSS te bepalen.","source":"@site/docs/richtlijnen/formulieren/visual-design/7-no-image-buttons/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/7-no-image-buttons","slug":"/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons","permalink":"/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/7-no-image-buttons/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik geen afbeelding voor buttons maar stijl tekst met CSS | Visueel ontwerp van een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen afbeelding voor buttons","pagination_label":"Geen afbeelding voor buttons","description":"Richtlijnen om stijl van buttons met CSS te bepalen.","slug":"/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten niet kleurafhankelijk","permalink":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur"},"next":{"title":"Logische volgorde","permalink":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde"}}');
   var r = t(86070),
    o = t(85248),
    s = t(78734);
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'gebruik-geen-afbeelding-voor-buttons-maar-stijl-tekst-met-css', children: 'Gebruik geen afbeelding voor buttons maar stijl tekst met CSS' }) }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat tekst in buttons goed meeschaalt als de gebruiker inzoomt. Een gebruiker die inzoomt moet de tekst kunnen blijven lezen.' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik daarom liever geen jpg-, gif- of png-bestanden voor buttontekst maar stijl tekst met CSS.' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijn is verder beschreven bij ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   const u = { title: 'Gebruik geen afbeelding voor buttons maar stijl tekst met CSS | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen afbeelding voor buttons', pagination_label: 'Geen afbeelding voor buttons', description: 'Richtlijnen om stijl van buttons met CSS te bepalen.', slug: '/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = void 0,
    c = {},
    m = [...s.RM];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(a, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
 },
]);
