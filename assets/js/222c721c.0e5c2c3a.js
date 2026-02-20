'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [62777],
 {
  3227(e, n, t) {
   t.d(n, { A: () => m });
   var i = t(60316),
    r = t(45282),
    s = t(2264),
    c = t(29181),
    o = t(13526),
    l = t(86070);
   function a({ href: e, icon: n = '', title: t, description: i, children: s }) {
    return (0, l.jsxs)('div', { className: 'card', children: [e ? (0, l.jsx)(r.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, l.jsx)('p', { className: 'cardDescription', children: i }), s] });
   }
   function d({ item: e }) {
    return (0, l.jsx)(a, { title: e.label, description: e.description, children: (0, l.jsx)(c.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, l.jsx)(c.Er, { children: 'link' === e.type ? (0, l.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, l.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function j({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, l.jsx)(h, { item: e });
     case 'category':
      return (0, l.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, i.$S)();
    return (0, l.jsx)(m, { items: n.items, className: e });
   }
   function m(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, l.jsx)(u, { ...e });
    const r = (0, i.d1)(n);
    return (0, l.jsx)('section', { className: (0, o.A)('row', t), ...e, children: r.map((e, n) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(j, { item: e }) }, n)) });
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => c, x: () => o });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function c(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : c(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  45282(e, n, t) {
   t.d(n, { F: () => s, N: () => c });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, ...n }) => {
     const { to: t, href: i, ...s } = n;
     let c = t || i;
     const o = new URL(c, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? ((o.pathname = o.pathname.endsWith('/') ? o.pathname : `${o.pathname}/`), (c = o.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: c, ...s, children: e }));
    },
    c = ({ className: e, ...n }) => (0, r.jsx)(s, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
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
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function c(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  89874(e, n, t) {
   t.d(n, { F: () => l });
   var i = t(60316),
    r = t(13526),
    s = t(3227),
    c = t(86070);
   const o = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: o(t.items, n) }] : e), []),
    l = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const l = (0, i.$S)();
     return (0, c.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, c.jsx)(s.A, { items: o(l.items, e) }) });
    };
  },
  89946(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => l, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"richtlijnen/stijl/README","title":"Introductie richtlijnen voor stijl","description":"Introductie van de richtlijnen voor stijl van NL Design System.","source":"@site/docs/richtlijnen/stijl/README.mdx","sourceDirName":"richtlijnen/stijl","slug":"/richtlijnen/stijl","permalink":"/richtlijnen/stijl","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introductie richtlijnen voor stijl","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie stijl","sidebar_position":0,"pagination_label":"Introductie","description":"Introductie van de richtlijnen voor stijl van NL Design System.","slug":"/richtlijnen/stijl","keywords":["kleur","iconen","ruimte","typografie"]},"sidebar":"richtlijnen","previous":{"title":"Introductie","permalink":"/richtlijnen"},"next":{"title":"Introductie","permalink":"/richtlijnen/stijl"}}');
   var r = t(86070),
    s = t(18439),
    c = t(78734),
    o = t(89874);
   const l = { title: 'Introductie richtlijnen voor stijl', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie stijl', sidebar_position: 0, pagination_label: 'Introductie', description: 'Introductie van de richtlijnen voor stijl van NL Design System.', slug: '/richtlijnen/stijl', keywords: ['kleur', 'iconen', 'ruimte', 'typografie'] },
    a = 'Introductie richtlijnen NL Design System voor stijl',
    d = {},
    h = [...c.RM];
   function j(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-stijl', children: 'Introductie richtlijnen NL Design System voor stijl' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System geeft richtlijnen voor stijl. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, r.jsx)(o.F, { excludeDocIDs: ['richtlijnen/stijl/README'] }), '\n', (0, r.jsx)(c.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
