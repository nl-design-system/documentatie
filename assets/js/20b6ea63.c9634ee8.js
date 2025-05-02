'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [79533],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    r = t(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  84993: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => a, contentTitle: () => l, default: () => m, frontMatter: () => c, metadata: () => d, toc: () => h });
   var i = t(52676),
    r = t(40139),
    o = t(66968),
    s = t(21004);
   const c = { title: 'Introductie richtlijnen voor video', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie video', sidebar_position: 2, pagination_label: 'Video', description: 'Introductie van de richtlijnen voor video van het NL Design System.', slug: '/richtlijnen/content/video', keywords: ['video', 'audiodescriptie', 'youtube', 'vimeo', 'transcript', 'ondertiteling', 'subtitles', 'captions', 'gebarentaal', 'tolk'] },
    l = 'Introductie richtlijnen NL Design System voor video',
    d = { id: 'richtlijnen/content/video/README', title: 'Introductie richtlijnen voor video', description: 'Introductie van de richtlijnen voor video van het NL Design System.', source: '@site/docs/richtlijnen/content/video/README.mdx', sourceDirName: 'richtlijnen/content/video', slug: '/richtlijnen/content/video', permalink: '/richtlijnen/content/video', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/README.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Introductie richtlijnen voor video', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie video', sidebar_position: 2, pagination_label: 'Video', description: 'Introductie van de richtlijnen voor video van het NL Design System.', slug: '/richtlijnen/content/video', keywords: ['video', 'audiodescriptie', 'youtube', 'vimeo', 'transcript', 'ondertiteling', 'subtitles', 'captions', 'gebarentaal', 'tolk'] }, sidebar: 'richtlijnen', previous: { title: 'Tabellen', permalink: '/richtlijnen/content/tekstopmaak/tabellen' }, next: { title: 'Video', permalink: '/richtlijnen/content/video' } },
    a = {},
    h = [];
   function u(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-video', children: 'Introductie richtlijnen NL Design System voor video' }), '\n', (0, i.jsx)(n.p, { children: "Het NL Design System geeft richtlijnen voor video's. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek." }), '\n', (0, i.jsx)(n.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, i.jsx)(s.l, { excludeDocIDs: ['richtlijnen/content/video/README'] }), '\n', (0, i.jsx)(o.ZP, {})] });
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
    o = t(39772),
    s = t(52676);
   const c = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: c(t.items, n) }] : e), []),
    l = (e) => {
     let { excludeDocIDs: n = [], className: t, ...l } = e;
     const d = (0, i.jA)();
     return (0, s.jsx)('div', { ...l, className: (0, r.Z)('margin-top--lg', t), children: (0, s.jsx)(o.Z, { items: c(d.items, n) }) });
    };
  },
  39772: (e, n, t) => {
   t.d(n, { Z: () => m });
   var i = t(73436),
    r = t(57229),
    o = t(41115),
    s = t(4814),
    c = t(52676);
   function l(e) {
    let { href: n, icon: t = '', title: i, description: o, children: l } = e;
    return (0, c.jsxs)('div', { className: 'card', children: [n ? (0, c.jsx)(r.r, { href: n, className: (0, s.Z)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', i] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', i] }), o && (0, c.jsx)('p', { className: 'cardDescription', children: o }), l] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, c.jsx)(l, { title: n.label, description: n.description, children: (0, c.jsx)(o.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.AS, { children: 'link' === e.type ? (0, c.jsx)(r.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function a(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, c.jsx)(l, { href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function h(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(a, { item: n });
     case 'category':
      return (0, c.jsx)(d, { item: n });
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
    return (0, c.jsx)('section', { className: (0, s.Z)('row', t), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => c, a: () => s });
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
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
