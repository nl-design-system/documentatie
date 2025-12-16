'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [75404],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => m });
   var t = i(63674),
    r = i(92420),
    s = i(45648),
    c = i(14537),
    l = i(13526),
    o = i(86070);
   function d({ href: e, icon: n = '', title: i, description: t, children: s }) {
    return (0, o.jsxs)('div', { className: 'card', children: [e ? (0, o.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, o.jsx)('p', { className: 'cardDescription', children: t }), s] });
   }
   function a({ item: e }) {
    return (0, o.jsx)(d, { title: e.label, description: e.description, children: (0, o.jsx)(c.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(c.Er, { children: 'link' === e.type ? (0, o.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, o.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, o.jsx)(h, { item: e });
     case 'category':
      return (0, o.jsx)(a, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function j({ className: e }) {
    const n = (0, t.$S)();
    return (0, o.jsx)(m, { items: n.items, className: e });
   }
   function m(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(j, { ...e });
    const r = (0, t.d1)(n);
    return (0, o.jsx)('section', { className: (0, l.A)('row', i), ...e, children: r.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(u, { item: e }) }, n)) });
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => o });
   var t = i(63674),
    r = i(13526),
    s = i(7361),
    c = i(86070);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    o = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const o = (0, t.$S)();
     return (0, c.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, c.jsx)(s.A, { items: l(o.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => t, d1: () => r });
   i(34374);
   function t(...e) {
    return i(41863).$S(...e);
   }
   function r(...e) {
    return i(41863).d1(...e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function c(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82892: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => a, contentTitle: () => d, default: () => j, frontMatter: () => o, metadata: () => t, toc: () => h });
   const t = JSON.parse('{"id":"richtlijnen/README","title":"Introductie \xb7 Richtlijnen","description":"Introductie richtlijnen NL Design System","source":"@site/docs/richtlijnen/README.mdx","sourceDirName":"richtlijnen","slug":"/richtlijnen","permalink":"/richtlijnen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie","sidebar_position":1,"pagination_label":"Introductie","description":"Introductie richtlijnen NL Design System","slug":"/richtlijnen","keywords":["richtlijnen","design system","documentatie"]},"sidebar":"richtlijnen","next":{"title":"Introductie","permalink":"/richtlijnen"}}');
   var r = i(86070),
    s = i(85248),
    c = i(78734),
    l = i(49484);
   const o = { title: 'Introductie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Introductie richtlijnen NL Design System', slug: '/richtlijnen', keywords: ['richtlijnen', 'design system', 'documentatie'] },
    d = 'Richtlijnen NL Design System',
    a = {},
    h = [{ value: 'Onderbouwing', id: 'onderbouwing', level: 2 }, { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 3 }, { value: 'Gebruikersvriendelijkheid', id: 'gebruikersvriendelijkheid', level: 3 }, ...c.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system', children: 'Richtlijnen NL Design System' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor het ontwikkelen van digitale diensten. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsx)(n.h2, { id: 'onderbouwing', children: 'Onderbouwing' }), '\n', (0, r.jsx)(n.h3, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen zijn gebaseerd op de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/', children: (0, r.jsx)('span', { children: 'Web Content Accessibility Guidelines' }) }), ', versie 2.2 niveau AA (WCAG 2.2 AA).'] }), '\n', (0, r.jsxs)(n.p, { children: ['Bij enkele richtlijnen is WCAG-niveau AAA aangehouden: ', (0, r.jsx)(n.a, { href: '/wcag/2.4.13/', children: '2.4.13 Focusweergave' }), ' en ', (0, r.jsx)(n.a, { href: '/wcag/2.5.5/', children: '2.5.5 Grootte van het aanwijsgebied uitgebreid' }), '. Dit zijn goede criteria om een betere gebruikerservaring te garanderen voor de zichtbaarheid en de minimale grootte van het aanklikbare gedeelte van links en formulierelementen.'] }), '\n', (0, r.jsx)(n.h3, { id: 'gebruikersvriendelijkheid', children: 'Gebruikersvriendelijkheid' }), '\n', (0, r.jsx)(n.p, { children: 'Om de gebruikersvriendelijkheid te garanderen zijn er ook richtlijnen toegevoegd naar aanleiding van gebruikersonderzoek. Bijvoorbeeld door een formulierlabel altijd zichtbaar boven het invoerveld te plaatsen.' }), '\n', (0, r.jsx)(l.F, { excludeDocIDs: ['richtlijnen/README', 'richtlijnen/CHANGELOG'] }), '\n', (0, r.jsx)(c.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => c, x: () => l });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function c(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : c(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => c });
   var t = i(71170),
    r = i(13526),
    s = i(86070);
   const c = ({ className: e, ...n }) => (0, s.jsx)(t.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
