'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6981],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    r = t(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  67899: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => c, default: () => h, frontMatter: () => l, metadata: () => a, toc: () => u });
   var i = t(52676),
    r = t(40139),
    o = t(5547),
    s = t(21004);
   const l = { title: 'Introductie richtlijnen voor formulieren', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie formulieren', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', slug: '/richtlijnen/formulieren', keywords: ['formulier'] },
    c = 'Introductie richtlijnen NL Design System voor formulieren',
    a = { id: 'richtlijnen/formulieren/README', title: 'Introductie richtlijnen voor formulieren', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', source: '@site/docs/richtlijnen/formulieren/README.mdx', sourceDirName: 'richtlijnen/formulieren', slug: '/richtlijnen/formulieren', permalink: '/richtlijnen/formulieren', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/README.mdx', tags: [], version: 'current', sidebarPosition: 0, frontMatter: { title: 'Introductie richtlijnen voor formulieren', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie formulieren', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', slug: '/richtlijnen/formulieren', keywords: ['formulier'] }, sidebar: 'richtlijnen', previous: { title: 'Kantoorbestanden', permalink: '/richtlijnen/content/kantoorbestanden' }, next: { title: 'Introductie', permalink: '/richtlijnen/formulieren' } },
    d = {},
    u = [];
   function m(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-formulieren', children: 'Introductie richtlijnen NL Design System voor formulieren' }), '\n', (0, i.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor formulieren. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen staan gesorteerd op onderwerp en op alfabet. De aanvullende blogpost ', (0, i.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren/', children: 'Toegankelijke foutmeldingen in formulieren' }), ' vertelt in een lopend verhaal hoe foutmeldingen in formulieren op te zetten.'] }), '\n', (0, i.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/README'] }), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  57229: (e, n, t) => {
   t.d(n, { r: () => s });
   var i = t(44679),
    r = t(4814),
    o = t(52676);
   const s = (e) => {
    let { className: n, ...t } = e;
    return (0, o.jsx)(i.Z, { className: (0, r.W)('utrecht-link', 'utrecht-link--html-a', n), ...t });
   };
  },
  21004: (e, n, t) => {
   t.d(n, { l: () => c });
   var i = t(17542),
    r = t(4814),
    o = t(39772),
    s = t(52676);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: t, ...c } = e;
     const a = (0, i.jA)();
     return (0, s.jsx)('div', { ...c, className: (0, r.Z)('margin-top--lg', t), children: (0, s.jsx)(o.Z, { items: l(a.items, n) }) });
    };
  },
  39772: (e, n, t) => {
   t.d(n, { Z: () => h });
   var i = t(17542),
    r = t(57229),
    o = t(74824),
    s = t(4814),
    l = t(52676);
   function c(e) {
    let { href: n, icon: t = '', title: i, description: o, children: c } = e;
    return (0, l.jsxs)('div', { className: 'card', children: [n ? (0, l.jsx)(r.r, { href: n, className: (0, s.Z)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', i] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', i] }), o && (0, l.jsx)('p', { className: 'cardDescription', children: o }), c] });
   }
   function a(e) {
    let { item: n } = e;
    return (0, l.jsx)(c, { title: n.label, description: n.description, children: (0, l.jsx)(o.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, l.jsx)(o.AS, { children: 'link' === e.type ? (0, l.jsx)(r.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(r.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, n)) }) });
   }
   function d(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, l.jsx)(c, { href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function u(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, l.jsx)(d, { item: n });
     case 'category':
      return (0, l.jsx)(a, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function m(e) {
    let { className: n } = e;
    const t = (0, i.jA)();
    return (0, l.jsx)(h, { items: t.items, className: n });
   }
   function h(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, l.jsx)(m, { ...e });
    const r = (0, i.MN)(n);
    return (0, l.jsx)('section', { className: (0, s.Z)('row', t), children: r.map((e, n) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(u, { item: e }) }, n)) });
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var i = t(75271);
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
 },
]);
