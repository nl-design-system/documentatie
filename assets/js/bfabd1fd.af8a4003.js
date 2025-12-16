'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [17197],
 {
  30261: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => m, contentTitle: () => u, default: () => g, frontMatter: () => d, metadata: () => i, toc: () => c });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/status/zoomed-in/README","title":"Informeer ingezoomde gebruikers \xb7 Status in een formulier \xb7 Richtlijnen","description":"Richtlijnen over het informeren van ingezoomde gebruikers.","source":"@site/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx","sourceDirName":"richtlijnen/formulieren/status/2-zoomed-in","slug":"/richtlijnen/formulieren/status/zoom","permalink":"/richtlijnen/formulieren/status/zoom","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Informeer ingezoomde gebruikers \xb7 Status in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Informeer ingezoomde gebruikers","pagination_label":"Informeer ingezoomde gebruikers","description":"Richtlijnen over het informeren van ingezoomde gebruikers.","slug":"/richtlijnen/formulieren/status/zoom","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Informeer screenreaders","permalink":"/richtlijnen/formulieren/status/screenreaders"},"next":{"title":"Geef gebruikers voldoende tijd","permalink":"/richtlijnen/formulieren/status/enough-time"}}');
   var t = r(86070),
    o = r(85248),
    s = r(78734);
   function a(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'informeer-ingezoomde-gebruikers-over-het-statusbericht', children: 'Informeer ingezoomde gebruikers over het statusbericht' }) }), '\n', (0, t.jsx)(n.p, { children: 'Als een statusbericht visueel niet in de buurt staat van het element waar de melding bij hoort, kan deze worden gemist door gebruikers die zijn ingezoomd.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet bij elkaar wat bij elkaar hoort. Is er een statusbericht, zet deze dan vlak bij waar de gebruiker op dat moment aan het werk is. Zodat het bericht in beeld is voor ingezoomde gebruikers.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet dynamisch gegenereerde meldingen voor een formulier altijd vlak bij het formulierveld of bijvoorbeeld bovenaan de pagina, afhankelijk van waar en wanneer de foutmelding getoond wordt. Zoals de melding over het totaal aantal ingevoerde karakters voor een tekstveld of de totaalprijs in een berekening.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   const d = { title: 'Informeer ingezoomde gebruikers \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer ingezoomde gebruikers', pagination_label: 'Informeer ingezoomde gebruikers', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', slug: '/richtlijnen/formulieren/status/zoom', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    m = {},
    c = [...s.RM];
   function h(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h();
   }
  },
  78734: (e, n, r) => {
   r.d(n, { Ay: () => a, RM: () => o });
   var i = r(86070),
    t = r(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => s, x: () => a });
   var i = r(30758);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
