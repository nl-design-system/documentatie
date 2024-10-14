'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2937],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    r = t(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  15370: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => a, default: () => j, frontMatter: () => c, metadata: () => d, toc: () => h });
   var i = t(52676),
    r = t(24785),
    o = t(2334),
    s = t(21004),
    l = t(55400);
   const c = { title: 'Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie toetsenbordnavigatie', sidebar_position: 10, pagination_label: 'Toetsenbord', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', slug: '/richtlijnen/formulieren/toetsenbord/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor toetsenbordtoegankelijkheid',
    d = { id: 'richtlijnen/formulieren/keyboard-behaviour/README', title: 'Toetsenbordnavigatie in een formulier | Richtlijnen', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', source: '@site/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx', sourceDirName: 'richtlijnen/formulieren/keyboard-behaviour', slug: '/richtlijnen/formulieren/toetsenbord/', permalink: '/en/richtlijnen/formulieren/toetsenbord/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx', tags: [], version: 'current', sidebarPosition: 10, frontMatter: { title: 'Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie toetsenbordnavigatie', sidebar_position: 10, pagination_label: 'Toetsenbord', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', slug: '/richtlijnen/formulieren/toetsenbord/', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder kleurcontrast', permalink: '/en/richtlijnen/formulieren/placeholders/kleurcontrast' }, next: { title: 'Toetsenbord', permalink: '/en/richtlijnen/formulieren/toetsenbord/' } },
    m = {},
    h = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
     { value: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:', id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-toetsenbordtoegankelijkheid', children: 'Richtlijnen NL Design System voor toetsenbordtoegankelijkheid' }), '\n', (0, i.jsx)(n.p, { children: 'Een formulier moet goed werken en goed te begrijpen zijn voor een toetsenbordgebruiker.' }), '\n', (0, i.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, i.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/keyboard-behaviour/README'] }), '\n', (0, i.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, i.jsx)(o._, { id: 'zorg-dat-het-formulier-werkt-met-een-toetsenbord', children: (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie', children: 'Zorg dat het formulier werkt met een toetsenbord' }) }) }), '\n', (0, i.jsx)(o._, { id: 'gebruik-geen-positieve-tabindex', children: (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex', children: 'Gebruik geen positieve tabindex' }) }) }), '\n', (0, i.jsx)(n.h2, { id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', children: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/', children: 'Keyboard Accessibility' }), ' van WebAIM.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n'] }), '\n', (0, i.jsx)(l.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  2334: (e, n, t) => {
   t.d(n, { _: () => o });
   var i = t(4814),
    r = (t(75271), t(52676));
   const o = (e) => {
    let { children: n, className: t, ...o } = e;
    return (0, r.jsx)('div', { ...o, className: (0, i.Z)('nlds-fragment-redirect', t), children: n });
   };
  },
  21004: (e, n, t) => {
   t.d(n, { l: () => c });
   var i = t(34221),
    r = t(4814),
    o = (t(75271), t(20537)),
    s = t(52676);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: t, ...c } = e;
     const a = (0, i.jA)();
     return (0, s.jsx)('div', { ...c, className: (0, r.Z)('margin-top--lg', t), children: (0, s.jsx)(o.Z, { items: l(a.items, n) }) });
    };
  },
  20537: (e, n, t) => {
   t.d(n, { Z: () => j });
   var i = t(34221),
    r = t(90441),
    o = t(56150),
    s = t(4814);
   t(75271);
   const l = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = t(52676);
   function a(e) {
    let { href: n, icon: t = '', title: i, description: o, children: a } = e;
    return (0, c.jsxs)('div', { className: (0, s.Z)('card', l.card), children: [n ? (0, c.jsx)(r.Z, { href: n, className: (0, s.Z)(l.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [t, ' ', i] }) }) : (0, c.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [t, ' ', i] }), o && (0, c.jsx)('p', { className: (0, s.Z)(l.cardDescription), children: o }), a] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, c.jsx)(a, { title: n.label, description: n.description, children: (0, c.jsx)(o.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.AS, { children: 'link' === e.type ? (0, c.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function m(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, c.jsx)(a, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function h(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(m, { item: n });
     case 'category':
      return (0, c.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function u(e) {
    let { className: n } = e;
    const t = (0, i.jA)();
    return (0, c.jsx)(j, { items: t.items, className: n });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const r = (0, i.MN)(n);
    return (0, c.jsx)('section', { className: (0, s.Z)('row', t), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  24785: (e, n, t) => {
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
