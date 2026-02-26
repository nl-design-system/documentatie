'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [75404],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => d });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => d, RM: () => o });
   var t = i(86070),
    r = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82892(e, n, i) {
   (i.r(n), i.d(n, { assets: () => a, contentTitle: () => l, default: () => u, frontMatter: () => d, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"richtlijnen/README","title":"Introductie","description":"Introductie richtlijnen NL Design System","source":"@site/docs/richtlijnen/README.mdx","sourceDirName":"richtlijnen","slug":"/richtlijnen","permalink":"/richtlijnen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie","sidebar_position":1,"pagination_label":"Introductie","description":"Introductie richtlijnen NL Design System","slug":"/richtlijnen","keywords":["richtlijnen","design system","documentatie"]},"sidebar":"richtlijnen","next":{"title":"Introductie","permalink":"/richtlijnen"}}');
   var r = i(86070),
    o = i(18439),
    s = i(78734);
   const d = { title: 'Introductie', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Introductie richtlijnen NL Design System', slug: '/richtlijnen', keywords: ['richtlijnen', 'design system', 'documentatie'] },
    l = 'Richtlijnen NL Design System',
    a = {},
    c = [{ value: 'Onderbouwing', id: 'onderbouwing', level: 2 }, { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 3 }, { value: 'Gebruikersvriendelijkheid', id: 'gebruikersvriendelijkheid', level: 3 }, ...s.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, o.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system', children: 'Richtlijnen NL Design System' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor het ontwikkelen van digitale diensten. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsx)(n.h2, { id: 'onderbouwing', children: 'Onderbouwing' }), '\n', (0, r.jsx)(n.h3, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen zijn gebaseerd op de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/', children: (0, r.jsx)('span', { children: 'Web Content Accessibility Guidelines' }) }), ', versie 2.2 niveau AA (WCAG 2.2 AA).'] }), '\n', (0, r.jsxs)(n.p, { children: ['Bij enkele richtlijnen is WCAG-niveau AAA aangehouden: ', (0, r.jsx)(n.a, { href: '/wcag/2.4.13/', children: '2.4.13 Focusweergave' }), ' en ', (0, r.jsx)(n.a, { href: '/wcag/2.5.5/', children: '2.5.5 Grootte van het aanwijsgebied uitgebreid' }), '. Dit zijn goede criteria om een betere gebruikerservaring te garanderen voor de zichtbaarheid en de minimale grootte van het aanklikbare gedeelte van links en formulierelementen.'] }), '\n', (0, r.jsx)(n.h3, { id: 'gebruikersvriendelijkheid', children: 'Gebruikersvriendelijkheid' }), '\n', (0, r.jsx)(n.p, { children: 'Om de gebruikersvriendelijkheid te garanderen zijn er ook richtlijnen toegevoegd naar aanleiding van gebruikersonderzoek. Bijvoorbeeld door een formulierlabel altijd zichtbaar boven het invoerveld te plaatsen.' }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/README', 'richtlijnen/CHANGELOG'] }), '\n', (0, r.jsx)(s.Ay, {})] })
    );
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
