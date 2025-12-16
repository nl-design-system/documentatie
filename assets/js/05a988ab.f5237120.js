'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15341],
 {
  7361: (e, n, t) => {
   t.d(n, { A: () => j });
   var i = t(63674),
    r = t(92420),
    s = t(45648),
    l = t(14537),
    o = t(13526),
    c = t(86070);
   function a({ href: e, icon: n = '', title: t, description: i, children: s }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), s] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(a, { title: e.label, description: e.description, children: (0, c.jsx)(l.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(l.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function u({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(u, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, i.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(m, { ...e });
    const r = (0, i.d1)(n);
    return (0, c.jsx)('section', { className: (0, o.A)('row', t), ...e, children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  49484: (e, n, t) => {
   t.d(n, { F: () => c });
   var i = t(63674),
    r = t(13526),
    s = t(7361),
    l = t(86070);
   const o = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: o(t.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const c = (0, i.$S)();
     return (0, l.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, l.jsx)(s.A, { items: o(c.items, e) }) });
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
  76648: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => m, frontMatter: () => c, metadata: () => i, toc: () => u });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/status/README","title":"Status in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het omgaan met status in formulieren.","source":"@site/docs/richtlijnen/formulieren/status/README.mdx","sourceDirName":"richtlijnen/formulieren/status","slug":"/richtlijnen/formulieren/status/","permalink":"/richtlijnen/formulieren/status/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/README.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Status in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie status","sidebar_position":12,"pagination_label":"Status in formulieren","description":"Richtlijnen voor het omgaan met status in formulieren.","slug":"/richtlijnen/formulieren/status/","keywords":["informatie","status","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen vaste tekstlengte","permalink":"/richtlijnen/formulieren/vragen/geen-min-max-lengte"},"next":{"title":"Status in formulieren","permalink":"/richtlijnen/formulieren/status/"}}');
   var r = t(86070),
    s = t(85248),
    l = t(78734),
    o = t(49484);
   const c = { title: 'Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie status', sidebar_position: 12, pagination_label: 'Status in formulieren', description: 'Richtlijnen voor het omgaan met status in formulieren.', slug: '/richtlijnen/formulieren/status/', keywords: ['informatie', 'status', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor statusberichten in een formulier',
    d = {},
    u = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, ...l.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-statusberichten-in-een-formulier', children: 'Richtlijnen NL Design System voor statusberichten in een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het is belangrijk een gebruiker te informeren over veranderingen en updates.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Is een formulier succesvol verzonden?' }), '\n', (0, r.jsx)(n.li, { children: 'Zijn er fouten?' }), '\n', (0, r.jsx)(n.li, { children: 'Hoeveel zoekresultaten zijn er?' }), '\n', (0, r.jsx)(n.li, { children: 'Is de tijdslimiet bijna verstreken?' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit soort veranderingen binnen een pagina kun je met een ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#dfn-status-messages', children: 'statusbericht' }), ' aangeven.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een statusbericht moet voor iedereen beschikbaar zijn, en dus ook goed werken met ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en zoom-instellingen. Ook moet er voldoende tijd zijn om de content in je op te nemen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(o.F, { excludeDocIDs: ['richtlijnen/formulieren/status/README'] }), '\n', (0, r.jsx)(l.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => o });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function l(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, t) => {
   t.d(n, { N: () => l });
   var i = t(71170),
    r = t(13526),
    s = t(86070);
   const l = ({ className: e, ...n }) => (0, s.jsx)(i.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
