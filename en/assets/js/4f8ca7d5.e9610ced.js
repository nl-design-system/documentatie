'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [56505],
 {
  23680: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    o = i(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  53534: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => a, default: () => f, frontMatter: () => c, metadata: () => d, toc: () => u });
   var r = i(52676),
    o = i(24785),
    t = i(2334),
    l = i(21004),
    s = i(23680);
   const c = { title: 'Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie voorkom fouten', sidebar_position: 13, pagination_label: 'Voorkom fouten in een formulier', description: 'Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    a = 'Voorkom fouten, help de gebruiker',
    d = { id: 'richtlijnen/formulieren/help/README', title: 'Voorkom fouten in een formulier | Richtlijnen', description: 'Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.', source: '@site/docs/richtlijnen/formulieren/help/README.mdx', sourceDirName: 'richtlijnen/formulieren/help', slug: '/richtlijnen/formulieren/voorkom-fouten/', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/README.mdx', tags: [], version: 'current', sidebarPosition: 13, frontMatter: { title: 'Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie voorkom fouten', sidebar_position: 13, pagination_label: 'Voorkom fouten in een formulier', description: 'Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Logische volgorde', permalink: '/en/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde' }, next: { title: 'Voorkom fouten in een formulier', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/' } },
    m = {},
    u = [{ value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }];
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'voorkom-fouten-help-de-gebruiker', children: 'Voorkom fouten, help de gebruiker' }), '\n', (0, r.jsx)(n.p, { children: 'Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?' }), '\n', (0, r.jsx)(l.l, { excludeDocIDs: ['richtlijnen/formulieren/help/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(t._, { id: 'vermeld-duidelijk-of-een-veld-verplicht-is', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden', children: 'Vermeld duidelijk of een veld verplicht is' }), '.'] }) }), '\n', (0, r.jsx)(t._, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken', children: 'Sta knippen en plakken van gegevens (zoals een wachtwoord)\ntoe' }), '.'] }) }), '\n', (0, r.jsx)(t._, { id: 'keur-niet-te-snel-af', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af', children: 'Keur niet te snel af' }), '.'] }) }), '\n', (0, r.jsx)(t._, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', children: 'Geef geldige waardes aan voor een invoerveld' }), '.'] }) }), '\n', (0, r.jsx)(t._, { id: 'autocomplete', children: (0, r.jsxs)(n.p, { children: [(0, r.jsxs)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', children: ['Vertel aan de browser met ', (0, r.jsx)(n.code, { children: 'autocomplete' }), ' welke waarde verwacht wordt bij het invullen van een\nformulierveld'] }), '.'] }) }), '\n', (0, r.jsx)(t._, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', children: 'Vul bekende informatie in waar mogelijk' }), '.'] }) }), '\n', (0, r.jsx)(t._, { id: 'maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen', children: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te\nmaken' }), '.'] }) }), '\n', (0, r.jsx)(s.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  2334: (e, n, i) => {
   i.d(n, { _: () => t });
   var r = i(4814),
    o = (i(75271), i(52676));
   const t = (e) => {
    let { children: n, className: i, ...t } = e;
    return (0, o.jsx)('div', { ...t, className: (0, r.Z)('nlds-fragment-redirect', i), children: n });
   };
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => c });
   var r = i(34221),
    o = i(4814),
    t = (i(75271), i(20537)),
    l = i(52676);
   const s = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: s(i.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: i, ...c } = e;
     const a = (0, r.jA)();
     return (0, l.jsx)('div', { ...c, className: (0, o.Z)('margin-top--lg', i), children: (0, l.jsx)(t.Z, { items: s(a.items, n) }) });
    };
  },
  20537: (e, n, i) => {
   i.d(n, { Z: () => f });
   var r = i(34221),
    o = i(90441),
    t = i(56150),
    l = i(4814);
   i(75271);
   const s = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = i(52676);
   function a(e) {
    let { href: n, icon: i = '', title: r, description: t, children: a } = e;
    return (0, c.jsxs)('div', { className: (0, l.Z)('card', s.card), children: [n ? (0, c.jsx)(o.Z, { href: n, className: (0, l.Z)(s.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, l.Z)(s.cardTitle), children: [i, ' ', r] }) }) : (0, c.jsxs)('h2', { className: (0, l.Z)(s.cardTitle), children: [i, ' ', r] }), t && (0, c.jsx)('p', { className: (0, l.Z)(s.cardDescription), children: t }), a] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, c.jsx)(a, { title: n.label, description: n.description, children: (0, c.jsx)(t.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(t.AS, { children: 'link' === e.type ? (0, c.jsx)(o.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(o.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function m(e) {
    let { item: n } = e;
    const i = (0, r.xz)(n.docId);
    return (0, c.jsx)(a, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function u(e) {
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
   function h(e) {
    let { className: n } = e;
    const i = (0, r.jA)();
    return (0, c.jsx)(f, { items: i.items, className: n });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(h, { ...e });
    const o = (0, r.MN)(n);
    return (0, c.jsx)('section', { className: (0, l.Z)('row', i), children: o.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(u, { item: e }) }, n)) });
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => l });
   var r = i(75271);
   const o = {},
    t = r.createContext(o);
   function l(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
