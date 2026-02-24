'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94957],
 {
  18439(e, t, n) {
   n.d(t, { R: () => s, x: () => a });
   var i = n(30758);
   const o = {},
    r = i.createContext(o);
   function s(e) {
    const t = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(r.Provider, { value: t }, e.children));
   }
  },
  23238(e, t, n) {
   (n.r(t), n.d(t, { assets: () => d, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/README","title":"Introductie richtlijnen voor tekstopmaak","description":"Introductie van de richtlijnen voor tekstopmaak van het NL Design System.","source":"@site/docs/richtlijnen/content/tekstopmaak/README.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak","permalink":"/richtlijnen/content/tekstopmaak","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Introductie richtlijnen voor tekstopmaak","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie tekstopmaak","sidebar_position":2,"pagination_label":"Content","description":"Introductie van de richtlijnen voor tekstopmaak van het NL Design System.","slug":"/richtlijnen/content/tekstopmaak","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","koppen","dikgedrukt","schuingedrukt","strong","em","bold","italic","opsommingen","geordende","ongeordende","lijst","links","tabel","tabellen","tabelopmaak"]},"sidebar":"richtlijnen","previous":{"title":"Tekst in een afbeelding","permalink":"/richtlijnen/content/afbeeldingen/tekst-in-afbeelding"},"next":{"title":"Content","permalink":"/richtlijnen/content/tekstopmaak"}}');
   var o = n(86070),
    r = n(18439),
    s = n(78734);
   const a = { title: 'Introductie richtlijnen voor tekstopmaak', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie tekstopmaak', sidebar_position: 2, pagination_label: 'Content', description: 'Introductie van de richtlijnen voor tekstopmaak van het NL Design System.', slug: '/richtlijnen/content/tekstopmaak', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'koppen', 'dikgedrukt', 'schuingedrukt', 'strong', 'em', 'bold', 'italic', 'opsommingen', 'geordende', 'ongeordende', 'lijst', 'links', 'tabel', 'tabellen', 'tabelopmaak'] },
    l = 'Introductie richtlijnen NL Design System voor tekstopmaak',
    d = {},
    c = [...s.RM];
   function k(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components },
     { OverviewPage: n } = t;
    return (
     n ||
      (function (e, t) {
       throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(t.header, { children: (0, o.jsx)(t.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-tekstopmaak', children: 'Introductie richtlijnen NL Design System voor tekstopmaak' }) }), '\n', (0, o.jsxs)(t.p, { children: ['Tekst is de basis van vrijwel alle digitale content. Maar niet iedereen leest of ervaart tekst op dezelfde manier. Sommige mensen gebruiken een ', (0, o.jsx)(t.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' die tekst voorleest, anderen lezen met vergroting of hebben moeite met grote lappen tekst. Juist daarom is het belangrijk om tekst goed en duidelijk op te maken.'] }), '\n', (0, o.jsx)(t.p, { children: 'Met toegankelijke tekstopmaak zorg je dat jouw informatie voor zoveel mogelijk mensen leesbaar en bruikbaar is \u2014 ongeacht beperking, apparaat of situatie. Denk aan duidelijke koppen, goed opgemaakte lijsten, toegankelijke tabellen en begrijpelijke linkteksten.' }), '\n', (0, o.jsx)(t.p, { children: 'Het NL Design System helpt je om teksten toegankelijk en consistent op te maken. De richtlijnen zijn gebaseerd op toegankelijkheidsnormen, gebruikersonderzoek en best practices. Zo weet je zeker dat je tekst werkt voor een brede groep gebruikers.' }), '\n', (0, o.jsx)(t.p, { children: 'De richtlijnen hieronder zijn ingedeeld per onderwerp, zodat je snel vindt wat je nodig hebt.' }), '\n', (0, o.jsx)(n, { excludeDocIDs: ['richtlijnen/content/tekstopmaak/README'] }), '\n', (0, o.jsx)(s.Ay, {})] })
    );
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(k, { ...e }) }) : k(e);
   }
  },
  78734(e, t, n) {
   n.d(t, { Ay: () => a, RM: () => r });
   var i = n(86070),
    o = n(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const t = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(t.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(t.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(t.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
