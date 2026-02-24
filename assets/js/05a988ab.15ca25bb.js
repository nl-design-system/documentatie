'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15341],
 {
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
  76648(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => u }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/status/README","title":"Status in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het omgaan met status in formulieren.","source":"@site/docs/richtlijnen/formulieren/status/README.mdx","sourceDirName":"richtlijnen/formulieren/status","slug":"/richtlijnen/formulieren/status/","permalink":"/richtlijnen/formulieren/status/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/README.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Status in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie status","sidebar_position":12,"pagination_label":"Status in formulieren","description":"Richtlijnen voor het omgaan met status in formulieren.","slug":"/richtlijnen/formulieren/status/","keywords":["informatie","status","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen vaste tekstlengte","permalink":"/richtlijnen/formulieren/vragen/geen-min-max-lengte"},"next":{"title":"Status in formulieren","permalink":"/richtlijnen/formulieren/status/"}}');
   var r = t(86070),
    s = t(18439),
    o = t(78734);
   const l = { title: 'Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie status', sidebar_position: 12, pagination_label: 'Status in formulieren', description: 'Richtlijnen voor het omgaan met status in formulieren.', slug: '/richtlijnen/formulieren/status/', keywords: ['informatie', 'status', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor statusberichten in een formulier',
    c = {},
    u = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, ...o.RM];
   function d(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components },
     { OverviewPage: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-statusberichten-in-een-formulier', children: 'Richtlijnen NL Design System voor statusberichten in een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het is belangrijk een gebruiker te informeren over veranderingen en updates.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Is een formulier succesvol verzonden?' }), '\n', (0, r.jsx)(n.li, { children: 'Zijn er fouten?' }), '\n', (0, r.jsx)(n.li, { children: 'Hoeveel zoekresultaten zijn er?' }), '\n', (0, r.jsx)(n.li, { children: 'Is de tijdslimiet bijna verstreken?' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit soort veranderingen binnen een pagina kun je met een ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#dfn-status-messages', children: 'statusbericht' }), ' aangeven.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een statusbericht moet voor iedereen beschikbaar zijn, en dus ook goed werken met ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en zoom-instellingen. Ook moet er voldoende tijd zijn om de content in je op te nemen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(t, { excludeDocIDs: ['richtlijnen/formulieren/status/README'] }), '\n', (0, r.jsx)(o.Ay, {})] })
    );
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
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
 },
]);
