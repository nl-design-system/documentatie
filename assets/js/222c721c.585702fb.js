'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [62777],
 {
  18439(e, n, t) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => o });
   var i = t(86070),
    r = t(18439);
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
  89946(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => c, default: () => u, frontMatter: () => l, metadata: () => i, toc: () => a }));
   const i = JSON.parse('{"id":"richtlijnen/stijl/README","title":"Introductie richtlijnen voor stijl","description":"Introductie van de richtlijnen voor stijl van NL Design System.","source":"@site/docs/richtlijnen/stijl/README.mdx","sourceDirName":"richtlijnen/stijl","slug":"/richtlijnen/stijl","permalink":"/richtlijnen/stijl","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introductie richtlijnen voor stijl","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie stijl","sidebar_position":0,"pagination_label":"Introductie","description":"Introductie van de richtlijnen voor stijl van NL Design System.","slug":"/richtlijnen/stijl","keywords":["kleur","iconen","ruimte","typografie"]},"sidebar":"richtlijnen","previous":{"title":"Introductie","permalink":"/richtlijnen"},"next":{"title":"Introductie","permalink":"/richtlijnen/stijl"}}');
   var r = t(86070),
    o = t(18439),
    s = t(78734);
   const l = { title: 'Introductie richtlijnen voor stijl', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie stijl', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor stijl van NL Design System.', slug: '/richtlijnen/stijl', keywords: ['kleur', 'iconen', 'ruimte', 'typografie'] },
    c = 'Introductie richtlijnen NL Design System voor stijl',
    d = {},
    a = [...s.RM];
   function j(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components },
     { OverviewPage: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-stijl', children: 'Introductie richtlijnen NL Design System voor stijl' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System geeft richtlijnen voor stijl. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, r.jsx)(t, { excludeDocIDs: ['richtlijnen/stijl/README'] }), '\n', (0, r.jsx)(s.Ay, {})] })
    );
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
