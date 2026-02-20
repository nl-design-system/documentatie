'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54053],
 {
  3227(e, n, t) {
   t.d(n, { A: () => j });
   var i = t(60316),
    r = t(45282),
    s = t(2264),
    o = t(29181),
    l = t(13526),
    c = t(86070);
   function a({ href: e, icon: n = '', title: t, description: i, children: s }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), s] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(a, { title: e.label, description: e.description, children: (0, c.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function u({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function m({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(u, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const n = (0, i.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(h, { ...e });
    const r = (0, i.d1)(n);
    return (0, c.jsx)('section', { className: (0, l.A)('row', t), ...e, children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var i = t(30758);
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
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  25369(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => h, frontMatter: () => c, metadata: () => i, toc: () => u }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/README","title":"Introductie richtlijnen voor formulieren","description":"Introductie van de richtlijnen voor formulieren van het NL Design System.","source":"@site/docs/richtlijnen/formulieren/README.mdx","sourceDirName":"richtlijnen/formulieren","slug":"/richtlijnen/formulieren","permalink":"/richtlijnen/formulieren","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/README.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introductie richtlijnen voor formulieren","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie formulieren","sidebar_position":0,"pagination_label":"Introductie","description":"Introductie van de richtlijnen voor formulieren van het NL Design System.","slug":"/richtlijnen/formulieren","keywords":["formulier"]},"sidebar":"richtlijnen","previous":{"title":"Kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden"},"next":{"title":"Introductie","permalink":"/richtlijnen/formulieren"}}');
   var r = t(86070),
    s = t(18439),
    o = t(78734),
    l = t(89874);
   const c = { title: 'Introductie richtlijnen voor formulieren', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie formulieren', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor formulieren van het NL Design System.', slug: '/richtlijnen/formulieren', keywords: ['formulier'] },
    a = 'Introductie richtlijnen NL Design System voor formulieren',
    d = {},
    u = [...o.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-formulieren', children: 'Introductie richtlijnen NL Design System voor formulieren' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor formulieren. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen staan gesorteerd op onderwerp en op alfabet. De aanvullende blogpost ', (0, r.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren/', children: 'Toegankelijke foutmeldingen in formulieren' }), ' vertelt in een lopend verhaal hoe foutmeldingen in formulieren op te zetten.'] }), '\n', (0, r.jsx)(l.F, { excludeDocIDs: ['richtlijnen/formulieren/README'] }), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  45282(e, n, t) {
   t.d(n, { F: () => s, N: () => o });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, ...n }) => {
     const { to: t, href: i, ...s } = n;
     let o = t || i;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...s, children: e }));
    },
    o = ({ className: e, ...n }) => (0, r.jsx)(s, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  60316(e, n, t) {
   t.d(n, { $S: () => i, d1: () => r });
   t(74147);
   function i(...e) {
    return t(97819).$S(...e);
   }
   function r(...e) {
    return t(97819).d1(...e);
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  89874(e, n, t) {
   t.d(n, { F: () => c });
   var i = t(60316),
    r = t(13526),
    s = t(3227),
    o = t(86070);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const c = (0, i.$S)();
     return (0, o.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, o.jsx)(s.A, { items: l(c.items, e) }) });
    };
  },
 },
]);
