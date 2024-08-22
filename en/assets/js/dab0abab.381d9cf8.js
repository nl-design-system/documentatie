'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2937],
 {
  33984: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  74135: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => d, default: () => b, frontMatter: () => a, metadata: () => c, toc: () => u });
   var r = t(52676),
    i = t(24785),
    o = t(2334),
    s = t(21004),
    l = t(33984);
   const a = { title: 'Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie toetsenbordnavigatie', sidebar_position: 10, pagination_label: 'Zorg dat het formulier werkt met een toetsenbord', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', slug: '/richtlijnen/formulieren/toetsenbord/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Zorg dat het formulier werkt met een toetsenbord',
    c = { id: 'richtlijnen/formulieren/keyboard-behaviour/README', title: 'Toetsenbordnavigatie in een formulier | Richtlijnen', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', source: '@site/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx', sourceDirName: 'richtlijnen/formulieren/keyboard-behaviour', slug: '/richtlijnen/formulieren/toetsenbord/', permalink: '/en/richtlijnen/formulieren/toetsenbord/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx', tags: [], version: 'current', sidebarPosition: 10, frontMatter: { title: 'Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie toetsenbordnavigatie', sidebar_position: 10, pagination_label: 'Zorg dat het formulier werkt met een toetsenbord', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', slug: '/richtlijnen/formulieren/toetsenbord/', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder kleurcontrast', permalink: '/en/richtlijnen/formulieren/placeholders/kleurcontrast' }, next: { title: 'Zorg dat het formulier werkt met een toetsenbord', permalink: '/en/richtlijnen/formulieren/toetsenbord/' } },
    m = {},
    u = [
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
     { value: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:', id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'zorg-dat-het-formulier-werkt-met-een-toetsenbord', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '\n', (0, r.jsx)(n.p, { children: 'Een formulier moet goed werken en goed te begrijpen zijn voor een toetsenbordgebruiker.' }), '\n', (0, r.jsxs)(n.p, { children: ['Sommige gebruikers navigeren door een formulier met hun ', (0, r.jsx)(n.code, { children: 'Tab' }), '-toets. Zorg dat alle onderdelen van het formulier bereikbaar zijn en gebruikt kunnen worden met alleen een toetsenbord (inclusief bijvoorbeeld kalenders). Dit ondersteunt toetsenbordgebruikers, maar ook gebruikers met andere randapparatuur die zich als toetsenbord presenteert, zoals een ', (0, r.jsx)(n.em, { children: 'switch control' }), '. ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', children: 'Maak de toetsenbordfocus goed zichtbaar' }), ' en en geef het voldoende kleurcontrast.'] }), '\n', (0, r.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/keyboard-behaviour/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(o._, { id: 'gebruik-geen-positieve-tabindex', children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex', children: 'Gebruik geen positieve tabindex' }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', children: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/', children: 'Keyboard Accessibility' }), ' van WebAIM.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n'] }), '\n', (0, r.jsx)(l.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  2334: (e, n, t) => {
   t.d(n, { _: () => o });
   var r = t(4814),
    i = (t(75271), t(52676));
   const o = (e) => {
    let { children: n, className: t, ...o } = e;
    return (0, i.jsx)('div', { ...o, className: (0, r.Z)('nlds-fragment-redirect', t), children: n });
   };
  },
  21004: (e, n, t) => {
   t.d(n, { l: () => a });
   var r = t(62567),
    i = t(4814),
    o = (t(75271), t(32074)),
    s = t(52676);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    a = (e) => {
     let { excludeDocIDs: n = [], className: t, ...a } = e;
     const d = (0, r.jA)();
     return (0, s.jsx)('div', { ...a, className: (0, i.Z)('margin-top--lg', t), children: (0, s.jsx)(o.Z, { items: l(d.items, n) }) });
    };
  },
  32074: (e, n, t) => {
   t.d(n, { Z: () => b });
   var r = t(62567),
    i = t(53450),
    o = t(56150),
    s = t(4814);
   t(75271);
   const l = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var a = t(52676);
   function d(e) {
    let { href: n, icon: t = '', title: r, description: o, children: d } = e;
    return (0, a.jsxs)('div', { className: (0, s.Z)('card', l.card), children: [n ? (0, a.jsx)(i.Z, { href: n, className: (0, s.Z)(l.cardLink, 'utrecht-link'), children: (0, a.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [t, ' ', r] }) }) : (0, a.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [t, ' ', r] }), o && (0, a.jsx)('p', { className: (0, s.Z)(l.cardDescription), children: o }), d] });
   }
   function c(e) {
    let { item: n } = e;
    return (0, a.jsx)(d, { title: n.label, description: n.description, children: (0, a.jsx)(o.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, a.jsx)(o.AS, { children: 'link' === e.type ? (0, a.jsx)(i.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(i.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, n)) }) });
   }
   function m(e) {
    let { item: n } = e;
    const t = (0, r.xz)(n.docId);
    return (0, a.jsx)(d, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function u(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, a.jsx)(m, { item: n });
     case 'category':
      return (0, a.jsx)(c, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function h(e) {
    let { className: n } = e;
    const t = (0, r.jA)();
    return (0, a.jsx)(b, { items: t.items, className: n });
   }
   function b(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, a.jsx)(h, { ...e });
    const i = (0, r.MN)(n);
    return (0, a.jsx)('section', { className: (0, s.Z)('row', t), children: i.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(u, { item: e }) }, n)) });
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var r = t(75271);
   const i = {},
    o = r.createContext(i);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
