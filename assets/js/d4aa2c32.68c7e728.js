'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37759],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => f });
   var t = i(63674),
    r = i(92420),
    s = i(45648),
    l = i(14537),
    o = i(13526),
    d = i(86070);
   function c({ href: e, icon: n = '', title: i, description: t, children: s }) {
    return (0, d.jsxs)('div', { className: 'card', children: [e ? (0, d.jsx)(r.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, d.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, d.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, d.jsx)('p', { className: 'cardDescription', children: t }), s] });
   }
   function a({ item: e }) {
    return (0, d.jsx)(c, { title: e.label, description: e.description, children: (0, d.jsx)(l.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, d.jsx)(l.Er, { children: 'link' === e.type ? (0, d.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, d.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, d.jsx)(d.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, d.jsx)(c, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, d.jsx)(m, { item: e });
     case 'category':
      return (0, d.jsx)(a, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, t.$S)();
    return (0, d.jsx)(f, { items: n.items, className: e });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, d.jsx)(u, { ...e });
    const r = (0, t.d1)(n);
    return (0, d.jsx)('section', { className: (0, o.A)('row', i), ...e, children: r.map((e, n) => (0, d.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, d.jsx)(h, { item: e }) }, n)) });
   }
  },
  28961: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => a, contentTitle: () => c, default: () => u, frontMatter: () => d, metadata: () => t, toc: () => m });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/README","title":"Fieldsets in een formulier \xb7 Richtlijnen","description":"Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.","source":"@site/docs/richtlijnen/formulieren/fieldset/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset","slug":"/richtlijnen/formulieren/fieldsets/","permalink":"/richtlijnen/formulieren/fieldsets/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Fieldsets in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie fieldsets","sidebar_position":5,"pagination_label":"Fieldsets","description":"Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.","slug":"/richtlijnen/formulieren/fieldsets/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Screenreaderfeedback","permalink":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback"},"next":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"}}');
   var r = i(86070),
    s = i(85248),
    l = i(78734),
    o = i(49484);
   const d = { title: 'Fieldsets in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie fieldsets', sidebar_position: 5, pagination_label: 'Fieldsets', description: 'Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.', slug: '/richtlijnen/formulieren/fieldsets/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor fieldsets in een formulier',
    a = {},
    m = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, ...l.RM];
   function h(e) {
    const n = { code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-fieldsets-in-een-formulier', children: 'Richtlijnen NL Design System voor fieldsets in een formulier' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Groepeer formuliervelden die bij elkaar horen in een ', (0, r.jsx)(n.code, { children: '<fieldset>' }), ' met een beschrijvende ', (0, r.jsx)(n.code, { children: '<legend>' }), '.\nHet voordeel hiervan is dat je zo de velden visueel, maar ook in de code aan elkaar koppelt.'] }), '\n', (0, r.jsx)(n.p, { children: 'De legend dient als de naam van de groep.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend>Kies je maat</legend>\n  <input id="size-s" name="size" type="radio" value="small" />\n  <label for="size-s">Small</label>\n  <input id="size-m" name="size" type="radio" value="medium" />\n  <label for="size-m">Medium</label>\n  <input id="size-l" name="size" type="radio" value="large" />\n  <label for="size-l">Large</label>\n</fieldset>\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(o.F, { excludeDocIDs: ['richtlijnen/formulieren/fieldset/README'] }), '\n', (0, r.jsx)(l.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => d });
   var t = i(63674),
    r = i(13526),
    s = i(7361),
    l = i(86070);
   const o = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: o(i.items, n) }] : e), []),
    d = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const d = (0, t.$S)();
     return (0, l.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, l.jsx)(s.A, { items: o(d.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => t, d1: () => r });
   i(34374);
   function t(...e) {
    return i(41863).$S(...e);
   }
   function r(...e) {
    return i(41863).d1(...e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var t = i(30758);
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
  92420: (e, n, i) => {
   i.d(n, { N: () => l });
   var t = i(71170),
    r = i(13526),
    s = i(86070);
   const l = ({ className: e, ...n }) => (0, s.jsx)(t.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
