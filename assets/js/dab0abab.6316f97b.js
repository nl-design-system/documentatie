'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91488],
 {
  7361: (e, n, t) => {
   t.d(n, { A: () => j });
   var i = t(63674),
    r = t(92420),
    o = t(45648),
    s = t(14537),
    l = t(13526),
    c = t(86070);
   function d({ href: e, icon: n = '', title: t, description: i, children: o }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), o] });
   }
   function a({ item: e }) {
    return (0, c.jsx)(d, { title: e.label, description: e.description, children: (0, c.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(s.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, o.cC)(e.docId);
    return (0, c.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function m({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(a, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, i.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const r = (0, i.d1)(n);
    return (0, c.jsx)('section', { className: (0, l.A)('row', t), ...e, children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  14996: (e, n, t) => {
   t.d(n, { T: () => o });
   var i = t(13526),
    r = t(86070);
   const o = ({ children: e, className: n, ...t }) => (0, r.jsx)('div', { ...t, className: (0, i.A)('nlds-fragment-redirect', n), children: e });
  },
  18368: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => a, default: () => j, frontMatter: () => d, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/README","title":"Toetsenbordnavigatie in een formulier \xb7 Richtlijnen","description":"Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour","slug":"/richtlijnen/formulieren/toetsenbord/","permalink":"/richtlijnen/formulieren/toetsenbord/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Toetsenbordnavigatie in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie toetsenbordnavigatie","sidebar_position":10,"pagination_label":"Toetsenbord","description":"Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.","slug":"/richtlijnen/formulieren/toetsenbord/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var r = t(86070),
    o = t(85248),
    s = t(78734),
    l = t(14996),
    c = t(49484);
   const d = { title: 'Toetsenbordnavigatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie toetsenbordnavigatie', sidebar_position: 10, pagination_label: 'Toetsenbord', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', slug: '/richtlijnen/formulieren/toetsenbord/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor toetsenbordtoegankelijkheid',
    h = {},
    m = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, { value: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:', id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', level: 2 }, ...s.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-toetsenbordtoegankelijkheid', children: 'Richtlijnen NL Design System voor toetsenbordtoegankelijkheid' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een formulier moet goed werken en goed te begrijpen zijn voor een toetsenbordgebruiker.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/keyboard-behaviour/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(l.T, { id: 'zorg-dat-het-formulier-werkt-met-een-toetsenbord', children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie/', children: 'Zorg dat het formulier werkt met een toetsenbord' }) }) }), '\n', (0, r.jsx)(l.T, { id: 'gebruik-geen-positieve-tabindex', children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', children: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/', children: 'Keyboard Accessibility' }), ' van WebAIM.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n'] }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  49484: (e, n, t) => {
   t.d(n, { F: () => c });
   var i = t(63674),
    r = t(13526),
    o = t(7361),
    s = t(86070);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const c = (0, i.$S)();
     return (0, s.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(o.A, { items: l(c.items, e) }) });
    };
  },
  63674: (e, n, t) => {
   t.d(n, { $S: () => i, d1: () => r });
   t(34374);
   function i(...e) {
    return t(41863).$S(...e);
   }
   function r(...e) {
    return t(41863).d1(...e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => o });
   var i = t(86070),
    r = t(85248);
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
  85248: (e, n, t) => {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, t) => {
   t.d(n, { N: () => s });
   var i = t(71170),
    r = t(13526),
    o = t(86070);
   const s = ({ className: e, ...n }) => (0, o.jsx)(i.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
