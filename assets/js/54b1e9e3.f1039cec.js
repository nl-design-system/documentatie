'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54053],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => s });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function l(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  25369(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => h, frontMatter: () => s, metadata: () => t, toc: () => u }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/README","title":"Introductie richtlijnen voor formulieren","description":"Introductie van de richtlijnen voor formulieren van het NL Design System.","source":"@site/docs/richtlijnen/formulieren/README.mdx","sourceDirName":"richtlijnen/formulieren","slug":"/richtlijnen/formulieren","permalink":"/richtlijnen/formulieren","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/README.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introductie richtlijnen voor formulieren","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie formulieren","sidebar_position":0,"pagination_label":"Introductie","description":"Introductie van de richtlijnen voor formulieren van het NL Design System.","slug":"/richtlijnen/formulieren","keywords":["formulier"]},"sidebar":"richtlijnen","previous":{"title":"Kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden"},"next":{"title":"Introductie","permalink":"/richtlijnen/formulieren"}}');
   var r = i(86070),
    o = i(18439),
    l = i(78734);
   const s = { title: 'Introductie richtlijnen voor formulieren', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie formulieren', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', slug: '/richtlijnen/formulieren', keywords: ['formulier'] },
    c = 'Introductie richtlijnen NL Design System voor formulieren',
    d = {},
    u = [...l.RM];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-formulieren', children: 'Introductie richtlijnen NL Design System voor formulieren' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor formulieren. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen staan gesorteerd op onderwerp en op alfabet. De aanvullende blogpost ', (0, r.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren/', children: 'Toegankelijke foutmeldingen in formulieren' }), ' vertelt in een lopend verhaal hoe foutmeldingen in formulieren op te zetten.'] }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/README'] }), '\n', (0, r.jsx)(l.Ay, {})] })
    );
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => o });
   var t = i(86070),
    r = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
