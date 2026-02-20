'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15342],
 {
  3227(e, n, r) {
   r.d(n, { A: () => p });
   var i = r(60316),
    t = r(45282),
    l = r(2264),
    o = r(29181),
    s = r(13526),
    c = r(86070);
   function a({ href: e, icon: n = '', title: r, description: i, children: l }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(t.N, { href: e, className: (0, s.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', r] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', r] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), l] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(a, { title: e.label, description: e.description, children: (0, c.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.Er, { children: 'link' === e.type ? (0, c.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function m({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, i.$S)();
    return (0, c.jsx)(p, { items: n.items, className: e });
   }
   function p(e) {
    const { items: n, className: r } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const t = (0, i.d1)(n);
    return (0, c.jsx)('section', { className: (0, s.A)('row', r), ...e, children: t.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  18439(e, n, r) {
   r.d(n, { R: () => o, x: () => s });
   var i = r(30758);
   const t = {},
    l = i.createContext(t);
   function o(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(l.Provider, { value: n }, e.children));
   }
  },
  44325(e, n, r) {
   (r.r(n), r.d(n, { assets: () => h, contentTitle: () => d, default: () => p, frontMatter: () => a, metadata: () => i, toc: () => m }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/README","title":"Placeholders in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het ontwerp en de code van placeholders in een formulier.","source":"@site/docs/richtlijnen/formulieren/placeholder/README.mdx","sourceDirName":"richtlijnen/formulieren/placeholder","slug":"/richtlijnen/formulieren/placeholders/","permalink":"/richtlijnen/formulieren/placeholders/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/README.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Placeholders in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie placeholders","sidebar_position":9,"pagination_label":"Placeholders in een formulier","description":"Richtlijnen voor het ontwerp en de code van placeholders in een formulier.","slug":"/richtlijnen/formulieren/placeholders/","keywords":["placeholders","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijk aangeven verzenden","permalink":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven"},"next":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"}}');
   var t = r(86070),
    l = r(18439),
    o = r(78734),
    s = r(67414),
    c = r(89874);
   const a = { title: 'Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie placeholders', sidebar_position: 9, pagination_label: 'Placeholders in een formulier', description: 'Richtlijnen voor het ontwerp en de code van placeholders in een formulier.', slug: '/richtlijnen/formulieren/placeholders/', keywords: ['placeholders', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor placeholders in een formulier',
    h = {},
    m = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-placeholders-in-een-formulier', children: 'Richtlijnen NL Design System voor placeholders in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een placeholder geeft de gebruiker een korte hint over het verwachte type gegevens dat in het formulierveld moet worden.' }), '\n', (0, t.jsxs)(n.p, { children: ['Een ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'label' }), ' vertelt ', (0, t.jsx)(n.strong, { children: 'wat' }), ' je moet invullen en een ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder', children: 'placeholder' }), ' vertelt wat voor ', (0, t.jsx)(n.strong, { children: 'soort gegevens' }), ' in een veld wordt verwacht. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, t.jsx)(n.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/placeholder/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(s.T, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/niet-als-label/', children: 'Een placeholder is geen vervanger van een label' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'placeholders-en-de-zoekfunctie', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/zoekfunctie/', children: 'Placeholders en de zoekfunctie' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'voorkom-verwarring-bij-de-gebruiker', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen/', children: 'Voorkom verwarring bij de gebruiker' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast/', children: 'Zorg voor een voldoende kleurcontract voor de placeholdertekst' }), '.'] }) }), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  45282(e, n, r) {
   r.d(n, { F: () => l, N: () => o });
   var i = r(13526),
    t = r(86070);
   const l = ({ children: e, ...n }) => {
     const { to: r, href: i, ...l } = n;
     let o = r || i;
     const s = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === s.origin ? ((s.pathname = s.pathname.endsWith('/') ? s.pathname : `${s.pathname}/`), (o = s.toString().replace('https://nldesignsystem.nl', ''))) : ((l.target = '_blank'), (l.rel = 'noopener noreferrer')), (0, t.jsx)('a', { href: o, ...l, children: e }));
    },
    o = ({ className: e, ...n }) => (0, t.jsx)(l, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  60316(e, n, r) {
   r.d(n, { $S: () => i, d1: () => t });
   r(74147);
   function i(...e) {
    return r(97819).$S(...e);
   }
   function t(...e) {
    return r(97819).d1(...e);
   }
  },
  67414(e, n, r) {
   r.d(n, { T: () => l });
   var i = r(13526),
    t = r(86070);
   const l = ({ children: e, className: n, ...r }) => (0, t.jsx)('div', { ...r, className: (0, i.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => s, RM: () => l });
   var i = r(86070),
    t = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  89874(e, n, r) {
   r.d(n, { F: () => c });
   var i = r(60316),
    t = r(13526),
    l = r(3227),
    o = r(86070);
   const s = (e, n) => e.reduce((e, r) => ('link' === r.type ? (n.includes(r.docId) ? e : [...e, r]) : 'category' === r.type ? [...e, { ...r, items: s(r.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...r }) => {
     const c = (0, i.$S)();
     return (0, o.jsx)('div', { ...r, className: (0, t.A)('margin-top--lg', n), children: (0, o.jsx)(l.A, { items: s(c.items, e) }) });
    };
  },
 },
]);
