'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21630],
 {
  66968: (e, t, n) => {
   n.d(t, { ZP: () => c });
   var i = n(52676),
    r = n(40139);
   function s(e) {
    const t = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(t.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(t.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(t.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, r.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  62073: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => o, metadata: () => a, toc: () => j });
   var i = n(52676),
    r = n(40139),
    s = n(66968),
    c = n(21004);
   const o = { title: 'Introductie richtlijnen voor stijl', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie stijl', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor stijl van het NL Design System.', slug: '/richtlijnen/stijl', keywords: ['kleur', 'iconen', 'ruimte', 'typografie'] },
    l = 'Introductie richtlijnen NL Design System voor stijl',
    a = { id: 'richtlijnen/stijl/README', title: 'Introductie richtlijnen voor stijl', description: 'Introductie van de richtlijnen voor stijl van het NL Design System.', source: '@site/docs/richtlijnen/stijl/README.mdx', sourceDirName: 'richtlijnen/stijl', slug: '/richtlijnen/stijl', permalink: '/richtlijnen/stijl', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.mdx', tags: [], version: 'current', sidebarPosition: 0, frontMatter: { title: 'Introductie richtlijnen voor stijl', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie stijl', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor stijl van het NL Design System.', slug: '/richtlijnen/stijl', keywords: ['kleur', 'iconen', 'ruimte', 'typografie'] }, sidebar: 'richtlijnen', previous: { title: 'Introductie', permalink: '/richtlijnen' }, next: { title: 'Introductie', permalink: '/richtlijnen/stijl' } },
    d = {},
    j = [];
   function h(e) {
    const t = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-stijl', children: 'Introductie richtlijnen NL Design System voor stijl' }), '\n', (0, i.jsx)(t.p, { children: 'Het NL Design System geeft richtlijnen voor stijl. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, i.jsx)(t.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, i.jsx)(c.l, { excludeDocIDs: ['richtlijnen/stijl/README'] }), '\n', (0, i.jsx)(s.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, r.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  21004: (e, t, n) => {
   n.d(t, { l: () => l });
   var i = n(73436),
    r = n(4814),
    s = n(39772),
    c = n(52676);
   const o = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: o(n.items, t) }] : e), []),
    l = (e) => {
     let { excludeDocIDs: t = [], className: n, ...l } = e;
     const a = (0, i.jA)();
     return (0, c.jsx)('div', { ...l, className: (0, r.Z)('margin-top--lg', n), children: (0, c.jsx)(s.Z, { items: o(a.items, t) }) });
    };
  },
  39772: (e, t, n) => {
   n.d(t, { Z: () => u });
   var i = n(73436),
    r = n(57229),
    s = n(41115),
    c = n(4814),
    o = n(52676);
   function l(e) {
    let { href: t, icon: n = '', title: i, description: s, children: l } = e;
    return (0, o.jsxs)('div', { className: 'card', children: [t ? (0, o.jsx)(r.r, { href: t, className: (0, c.Z)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), s && (0, o.jsx)('p', { className: 'cardDescription', children: s }), l] });
   }
   function a(e) {
    let { item: t } = e;
    return (0, o.jsx)(l, { title: t.label, description: t.description, children: (0, o.jsx)(s.QI, { children: t.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, o.jsx)(s.AS, { children: 'link' === e.type ? (0, o.jsx)(r.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, t)) }) });
   }
   function d(e) {
    let { item: t } = e;
    const n = (0, i.xz)(t.docId);
    return (0, o.jsx)(l, { href: t.href, title: t.label, description: t.description ?? n?.description });
   }
   function j(e) {
    let { item: t } = e;
    switch (t.type) {
     case 'link':
      return (0, o.jsx)(d, { item: t });
     case 'category':
      return (0, o.jsx)(a, { item: t });
     default:
      throw new Error(`unknown item type ${JSON.stringify(t)}`);
    }
   }
   function h(e) {
    let { className: t } = e;
    const n = (0, i.jA)();
    return (0, o.jsx)(u, { items: n.items, className: t });
   }
   function u(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, o.jsx)(h, { ...e });
    const r = (0, i.MN)(t);
    return (0, o.jsx)('section', { className: (0, c.Z)('row', n), children: r.map((e, t) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(j, { item: e }) }, t)) });
   }
  },
  40139: (e, t, n) => {
   n.d(t, { Z: () => o, a: () => c });
   var i = n(75271);
   const r = {},
    s = i.createContext(r);
   function c(e) {
    const t = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : c(e.components)), i.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
