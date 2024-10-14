'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6981],
 {
  55400: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var t = i(52676),
    r = i(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  31506: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => h, frontMatter: () => l, metadata: () => a, toc: () => u });
   var t = i(52676),
    r = i(24785),
    o = i(21004),
    s = i(55400);
   const l = { title: 'Introductie richtlijnen voor formulieren', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie formulieren', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', slug: '/richtlijnen/formulieren', keywords: ['formulier'] },
    c = 'Introductie richtlijnen NL Design System voor formulieren',
    a = { id: 'richtlijnen/formulieren/README', title: 'Introductie richtlijnen voor formulieren', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', source: '@site/docs/richtlijnen/formulieren/README.mdx', sourceDirName: 'richtlijnen/formulieren', slug: '/richtlijnen/formulieren', permalink: '/richtlijnen/formulieren', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/README.mdx', tags: [], version: 'current', sidebarPosition: 0, frontMatter: { title: 'Introductie richtlijnen voor formulieren', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie formulieren', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', slug: '/richtlijnen/formulieren', keywords: ['formulier'] }, sidebar: 'richtlijnen', previous: { title: 'Gebruik SVG voor iconen en geen font', permalink: '/richtlijnen/stijl/iconen/gebruik-svg' }, next: { title: 'Introductie', permalink: '/richtlijnen/formulieren' } },
    d = {},
    u = [];
   function m(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-formulieren', children: 'Introductie richtlijnen NL Design System voor formulieren' }), '\n', (0, t.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor formulieren. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen staan gesorteerd op onderwerp en op alfabet. De aanvullende blogpost ', (0, t.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren', children: 'Toegankelijke foutmeldingen in formulieren' }), ' vertelt in een lopend verhaal hoe foutmeldingen in formulieren op te zetten.'] }), '\n', (0, t.jsx)(o.l, { excludeDocIDs: ['richtlijnen/formulieren/README'] }), '\n', (0, t.jsx)(s.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => c });
   var t = i(34221),
    r = i(4814),
    o = (i(75271), i(20537)),
    s = i(52676);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: i, ...c } = e;
     const a = (0, t.jA)();
     return (0, s.jsx)('div', { ...c, className: (0, r.Z)('margin-top--lg', i), children: (0, s.jsx)(o.Z, { items: l(a.items, n) }) });
    };
  },
  20537: (e, n, i) => {
   i.d(n, { Z: () => j });
   var t = i(34221),
    r = i(90441),
    o = i(56150),
    s = i(4814);
   i(75271);
   const l = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = i(52676);
   function a(e) {
    let { href: n, icon: i = '', title: t, description: o, children: a } = e;
    return (0, c.jsxs)('div', { className: (0, s.Z)('card', l.card), children: [n ? (0, c.jsx)(r.Z, { href: n, className: (0, s.Z)(l.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [i, ' ', t] }) }) : (0, c.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [i, ' ', t] }), o && (0, c.jsx)('p', { className: (0, s.Z)(l.cardDescription), children: o }), a] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, c.jsx)(a, { title: n.label, description: n.description, children: (0, c.jsx)(o.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.AS, { children: 'link' === e.type ? (0, c.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function u(e) {
    let { item: n } = e;
    const i = (0, t.xz)(n.docId);
    return (0, c.jsx)(a, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function m(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(u, { item: n });
     case 'category':
      return (0, c.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function h(e) {
    let { className: n } = e;
    const i = (0, t.jA)();
    return (0, c.jsx)(j, { items: i.items, className: n });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(h, { ...e });
    const r = (0, t.MN)(n);
    return (0, c.jsx)('section', { className: (0, s.Z)('row', i), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => s });
   var t = i(75271);
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
