'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3322],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  77927: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => c, metadata: () => a, toc: () => h });
   var i = t(52676),
    r = t(40139),
    s = t(66968),
    o = t(21004);
   const c = { title: 'Introductie richtlijnen voor content', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie content', sidebar_position: 0, pagination_label: 'Content', description: 'Introductie van de richtlijnen voor content van het NL Design System.', slug: '/richtlijnen/content', keywords: ['tekstopmaak'] },
    l = 'Introductie richtlijnen NL Design System voor content',
    a = { id: 'richtlijnen/content/README', title: 'Introductie richtlijnen voor content', description: 'Introductie van de richtlijnen voor content van het NL Design System.', source: '@site/docs/richtlijnen/content/README.mdx', sourceDirName: 'richtlijnen/content', slug: '/richtlijnen/content', permalink: '/richtlijnen/content', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/README.mdx', tags: [], version: 'current', sidebarPosition: 0, frontMatter: { title: 'Introductie richtlijnen voor content', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie content', sidebar_position: 0, pagination_label: 'Content', description: 'Introductie van de richtlijnen voor content van het NL Design System.', slug: '/richtlijnen/content', keywords: ['tekstopmaak'] }, sidebar: 'richtlijnen', previous: { title: 'Gebruik SVG voor iconen en geen font', permalink: '/richtlijnen/stijl/iconen/gebruik-svg' }, next: { title: 'Content', permalink: '/richtlijnen/content' } },
    d = {},
    h = [];
   function u(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-content', children: 'Introductie richtlijnen NL Design System voor content' }), '\n', (0, i.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor content. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, i.jsx)(n.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, i.jsx)(o.l, { excludeDocIDs: ['richtlijnen/content/README'] }), '\n', (0, i.jsx)(s.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  21004: (e, n, t) => {
   t.d(n, { l: () => l });
   var i = t(73436),
    r = t(4814),
    s = t(39772),
    o = t(52676);
   const c = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: c(t.items, n) }] : e), []),
    l = (e) => {
     let { excludeDocIDs: n = [], className: t, ...l } = e;
     const a = (0, i.jA)();
     return (0, o.jsx)('div', { ...l, className: (0, r.Z)('margin-top--lg', t), children: (0, o.jsx)(s.Z, { items: c(a.items, n) }) });
    };
  },
  39772: (e, n, t) => {
   t.d(n, { Z: () => m });
   var i = t(73436),
    r = t(57229),
    s = t(41115),
    o = t(4814),
    c = t(52676);
   function l(e) {
    let { href: n, icon: t = '', title: i, description: s, children: l } = e;
    return (0, c.jsxs)('div', { className: 'card', children: [n ? (0, c.jsx)(r.r, { href: n, className: (0, o.Z)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', i] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', i] }), s && (0, c.jsx)('p', { className: 'cardDescription', children: s }), l] });
   }
   function a(e) {
    let { item: n } = e;
    return (0, c.jsx)(l, { title: n.label, description: n.description, children: (0, c.jsx)(s.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(s.AS, { children: 'link' === e.type ? (0, c.jsx)(r.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function d(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, c.jsx)(l, { href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function h(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(d, { item: n });
     case 'category':
      return (0, c.jsx)(a, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function u(e) {
    let { className: n } = e;
    const t = (0, i.jA)();
    return (0, c.jsx)(m, { items: t.items, className: n });
   }
   function m(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const r = (0, i.MN)(n);
    return (0, c.jsx)('section', { className: (0, o.Z)('row', t), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => c, a: () => o });
   var i = t(75271);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
