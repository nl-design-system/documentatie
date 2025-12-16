'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94957],
 {
  7361: (e, t, n) => {
   n.d(t, { A: () => h });
   var i = n(63674),
    r = n(92420),
    s = n(45648),
    o = n(14537),
    a = n(13526),
    c = n(86070);
   function l({ href: e, icon: t = '', title: n, description: i, children: s }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, a.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), s] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(l, { title: e.label, description: e.description, children: (0, c.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, c.jsx)(o.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, s.cC)(e.docId);
    return (0, c.jsx)(l, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function k({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(m, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function p({ className: e }) {
    const t = (0, i.$S)();
    return (0, c.jsx)(h, { items: t.items, className: e });
   }
   function h(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, c.jsx)(p, { ...e });
    const r = (0, i.d1)(t);
    return (0, c.jsx)('section', { className: (0, a.A)('row', n), ...e, children: r.map((e, t) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(k, { item: e }) }, t)) });
   }
  },
  23238: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => l, default: () => p, frontMatter: () => c, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/README","title":"Introductie richtlijnen voor tekstopmaak","description":"Introductie van de richtlijnen voor tekstopmaak van het NL Design System.","source":"@site/docs/richtlijnen/content/tekstopmaak/README.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak","permalink":"/richtlijnen/content/tekstopmaak","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Introductie richtlijnen voor tekstopmaak","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie tekstopmaak","sidebar_position":2,"pagination_label":"Content","description":"Introductie van de richtlijnen voor tekstopmaak van het NL Design System.","slug":"/richtlijnen/content/tekstopmaak","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","koppen","dikgedrukt","schuingedrukt","strong","em","bold","italic","opsommingen","geordende","ongeordende","lijst","links","tabel","tabellen","tabelopmaak"]},"sidebar":"richtlijnen","previous":{"title":"Tekst in een afbeelding","permalink":"/richtlijnen/content/afbeeldingen/tekst-in-afbeelding"},"next":{"title":"Content","permalink":"/richtlijnen/content/tekstopmaak"}}');
   var r = n(86070),
    s = n(85248),
    o = n(78734),
    a = n(49484);
   const c = { title: 'Introductie richtlijnen voor tekstopmaak', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie tekstopmaak', sidebar_position: 2, pagination_label: 'Content', description: 'Introductie van de richtlijnen voor tekstopmaak van het NL Design System.', slug: '/richtlijnen/content/tekstopmaak', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'koppen', 'dikgedrukt', 'schuingedrukt', 'strong', 'em', 'bold', 'italic', 'opsommingen', 'geordende', 'ongeordende', 'lijst', 'links', 'tabel', 'tabellen', 'tabelopmaak'] },
    l = 'Introductie richtlijnen NL Design System voor tekstopmaak',
    d = {},
    m = [...o.RM];
   function k(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(t.header, { children: (0, r.jsx)(t.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-tekstopmaak', children: 'Introductie richtlijnen NL Design System voor tekstopmaak' }) }), '\n', (0, r.jsxs)(t.p, { children: ['Tekst is de basis van vrijwel alle digitale content. Maar niet iedereen leest of ervaart tekst op dezelfde manier. Sommige mensen gebruiken een ', (0, r.jsx)(t.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' die tekst voorleest, anderen lezen met vergroting of hebben moeite met grote lappen tekst. Juist daarom is het belangrijk om tekst goed en duidelijk op te maken.'] }), '\n', (0, r.jsx)(t.p, { children: 'Met toegankelijke tekstopmaak zorg je dat jouw informatie voor zoveel mogelijk mensen leesbaar en bruikbaar is \u2014 ongeacht beperking, apparaat of situatie. Denk aan duidelijke koppen, goed opgemaakte lijsten, toegankelijke tabellen en begrijpelijke linkteksten.' }), '\n', (0, r.jsx)(t.p, { children: 'Het NL Design System helpt je om teksten toegankelijk en consistent op te maken. De richtlijnen zijn gebaseerd op toegankelijkheidsnormen, gebruikersonderzoek en best practices. Zo weet je zeker dat je tekst werkt voor een brede groep gebruikers.' }), '\n', (0, r.jsx)(t.p, { children: 'De richtlijnen hieronder zijn ingedeeld per onderwerp, zodat je snel vindt wat je nodig hebt.' }), '\n', (0, r.jsx)(a.F, { excludeDocIDs: ['richtlijnen/content/tekstopmaak/README'] }), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  49484: (e, t, n) => {
   n.d(t, { F: () => c });
   var i = n(63674),
    r = n(13526),
    s = n(7361),
    o = n(86070);
   const a = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: a(n.items, t) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: t, ...n }) => {
     const c = (0, i.$S)();
     return (0, o.jsx)('div', { ...n, className: (0, r.A)('margin-top--lg', t), children: (0, o.jsx)(s.A, { items: a(c.items, e) }) });
    };
  },
  63674: (e, t, n) => {
   n.d(t, { $S: () => i, d1: () => r });
   n(34374);
   function i(...e) {
    return n(41863).$S(...e);
   }
   function r(...e) {
    return n(41863).d1(...e);
   }
  },
  78734: (e, t, n) => {
   n.d(t, { Ay: () => a, RM: () => s });
   var i = n(86070),
    r = n(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const t = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(t.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(t.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(t.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => o, x: () => a });
   var i = n(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const t = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: t }, e.children);
   }
  },
  92420: (e, t, n) => {
   n.d(t, { N: () => o });
   var i = n(71170),
    r = n(13526),
    s = n(86070);
   const o = ({ className: e, ...t }) => (0, s.jsx)(i.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
 },
]);
