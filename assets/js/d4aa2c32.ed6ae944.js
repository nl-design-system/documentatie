'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [62358],
 {
  66968: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  34006: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => a, contentTitle: () => d, default: () => u, frontMatter: () => o, metadata: () => c, toc: () => m });
   var t = i(52676),
    r = i(40139),
    s = i(66968),
    l = i(21004);
   const o = { title: 'Fieldsets in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie fieldsets', sidebar_position: 5, pagination_label: 'Fieldsets', description: 'Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.', slug: '/richtlijnen/formulieren/fieldsets/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor fieldsets in een formulier',
    c = { id: 'richtlijnen/formulieren/fieldset/README', title: 'Fieldsets in een formulier \xb7 Richtlijnen', description: 'Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.', source: '@site/docs/richtlijnen/formulieren/fieldset/README.mdx', sourceDirName: 'richtlijnen/formulieren/fieldset', slug: '/richtlijnen/formulieren/fieldsets/', permalink: '/richtlijnen/formulieren/fieldsets/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/README.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Fieldsets in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie fieldsets', sidebar_position: 5, pagination_label: 'Fieldsets', description: 'Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.', slug: '/richtlijnen/formulieren/fieldsets/', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Screenreaderfeedback', permalink: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback' }, next: { title: 'Fieldsets', permalink: '/richtlijnen/formulieren/fieldsets/' } },
    a = {},
    m = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }];
   function h(e) {
    const n = { code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-fieldsets-in-een-formulier', children: 'Richtlijnen NL Design System voor fieldsets in een formulier' }), '\n', (0, t.jsxs)(n.p, { children: ['Groepeer formuliervelden die bij elkaar horen in een ', (0, t.jsx)(n.code, { children: '<fieldset>' }), ' met een beschrijvende ', (0, t.jsx)(n.code, { children: '<legend>' }), '.\nHet voordeel hiervan is dat je zo de velden visueel, maar ook in de code aan elkaar koppelt.'] }), '\n', (0, t.jsx)(n.p, { children: 'De legend dient als de naam van de groep.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend>Kies je maat</legend>\n  <input id="size-s" name="size" type="radio" value="small" />\n  <label for="size-s">Small</label>\n  <input id="size-m" name="size" type="radio" value="medium" />\n  <label for="size-m">Medium</label>\n  <input id="size-l" name="size" type="radio" value="large" />\n  <label for="size-l">Large</label>\n</fieldset>\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(l.l, { excludeDocIDs: ['richtlijnen/formulieren/fieldset/README'] }), '\n', (0, t.jsx)(s.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => d });
   var t = i(73436),
    r = i(4814),
    s = i(39772),
    l = i(52676);
   const o = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: o(i.items, n) }] : e), []),
    d = (e) => {
     let { excludeDocIDs: n = [], className: i, ...d } = e;
     const c = (0, t.jA)();
     return (0, l.jsx)('div', { ...d, className: (0, r.Z)('margin-top--lg', i), children: (0, l.jsx)(s.Z, { items: o(c.items, n) }) });
    };
  },
  39772: (e, n, i) => {
   i.d(n, { Z: () => u });
   var t = i(73436),
    r = i(57229),
    s = i(41115),
    l = i(4814),
    o = i(52676);
   function d(e) {
    let { href: n, icon: i = '', title: t, description: s, children: d } = e;
    return (0, o.jsxs)('div', { className: 'card', children: [n ? (0, o.jsx)(r.r, { href: n, className: (0, l.Z)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [i, ' ', t] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [i, ' ', t] }), s && (0, o.jsx)('p', { className: 'cardDescription', children: s }), d] });
   }
   function c(e) {
    let { item: n } = e;
    return (0, o.jsx)(d, { title: n.label, description: n.description, children: (0, o.jsx)(s.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(s.AS, { children: 'link' === e.type ? (0, o.jsx)(r.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function a(e) {
    let { item: n } = e;
    const i = (0, t.xz)(n.docId);
    return (0, o.jsx)(d, { href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function m(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, o.jsx)(a, { item: n });
     case 'category':
      return (0, o.jsx)(c, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function h(e) {
    let { className: n } = e;
    const i = (0, t.jA)();
    return (0, o.jsx)(u, { items: i.items, className: n });
   }
   function u(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(h, { ...e });
    const r = (0, t.MN)(n);
    return (0, o.jsx)('section', { className: (0, l.Z)('row', i), children: r.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(m, { item: e }) }, n)) });
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
