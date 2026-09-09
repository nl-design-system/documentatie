'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [80666],
 {
  15780(e, i, n) {
   (n.r(i), n.d(i, { assets: () => l, contentTitle: () => d, default: () => f, frontMatter: () => s, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/definition-of-ready","title":"Definition of Ready","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.","source":"@site/docs/project/kwaliteitsaanpak/definition-of-ready.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/definition-of-ready","permalink":"/project/kwaliteitsaanpak/definition-of-ready","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/definition-of-ready.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Definition of Ready","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Definition of Ready","sidebar_position":6,"pagination_label":"Definition of Ready","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken."},"sidebar":"project","previous":{"title":"Product Backlog","permalink":"/project/kwaliteitsaanpak/product-backlog"},"next":{"title":"Agile sprint","permalink":"/project/kwaliteitsaanpak/agile-sprint"}}');
   var a = n(86070),
    r = n(18439),
    o = n(66153);
   const s = { title: 'Definition of Ready', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Definition of Ready', sidebar_position: 6, pagination_label: 'Definition of Ready', description: 'Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.' },
    d = 'Definition of Ready',
    l = {},
    c = [
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Refinement', id: 'refinement', level: 2 },
    ];
   function p(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(i.header, { children: (0, a.jsx)(i.h1, { id: 'definition-of-ready', children: 'Definition of Ready' }) }), '\n', '\n', (0, a.jsx)(o.f, { purpose: 'lead', children: (0, a.jsx)(i.p, { children: 'Controleer met Definition of Ready of het werk klaar is om aan te werken in een agile sprint.' }) }), '\n', (0, a.jsx)(i.p, { children: 'De checklist:' }), '\n', '\n', (0, a.jsxs)(i.ul, { children: ['\n', (0, a.jsxs)(i.li, { children: ['De acceptatiecriteria in de ', (0, a.jsx)(i.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'backlog' }), ' zijn duidelijk voor de product owner en de personen die het werk uitvoeren.'] }), '\n', (0, a.jsx)(i.li, { children: 'Het doel is duidelijk voor de user story.' }), '\n', (0, a.jsx)(i.li, { children: 'De product owner is akkoord met de prioriteit. ' }), '\n', (0, a.jsx)(i.li, { children: 'Er is duidelijk hoe getest moet worden of het werk klaar is.' }), '\n', (0, a.jsx)(i.li, { children: 'Alle afhankelijkheden zijn gekoppeld via "Blocked by", en daarvan is de status "Done". ' }), '\n', (0, a.jsx)(i.li, { children: 'Het is mogelijk een inschatting te geven hoeveel werk het is, relatief ten opzichte van andere issues. ' }), '\n', (0, a.jsx)(i.li, { children: 'Als er een mogelijke oplossing is, dan staat die in "Beschrijving" en niet in de User Story of de acceptatiecriteria. ' }), '\n', (0, a.jsx)(i.li, { children: 'Wanneer de tijdsinschatting XL of XXL is, dan is geprobeerd om de issue op te splitsen in meerdere kleine issues.' }), '\n'] }), '\n', (0, a.jsx)(i.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }), '\n', (0, a.jsx)(i.p, { children: 'Let op de volgende punten voor het maken van effectieve acceptatiecriteria:' }), '\n', (0, a.jsxs)(i.ul, { children: ['\n', (0, a.jsx)(i.li, { children: 'Voeg de gewenste uitkomst toe, op een manier die duidelijk genoeg is om te testen. ' }), '\n', (0, a.jsx)(i.li, { children: 'Voeg "software release is gepubliceerd" toe aan de acceptatiecriteria, wanneer dit de bedoeling is.' }), '\n', (0, a.jsx)(i.li, { children: 'Wat al in de Definition of Done staat, moet niet opnieuw genoemd worden in de acceptatiecriteria.' }), '\n'] }), '\n', (0, a.jsx)(i.h2, { id: 'refinement', children: 'Refinement' }), '\n', (0, a.jsxs)(i.p, { children: ['Organiseer sprint refinements om de product backlog steeds duidelijker te maken, zodat er voldoende informatie is om 1 of meerdere ', (0, a.jsx)(i.a, { href: '/project/kwaliteitsaanpak/agile-sprint/', children: 'agile sprints' }), ' te plannen en te starten.'] }), '\n', (0, a.jsx)(i.p, { children: 'Het ontwikkelteam en de product owner bespreken issues met de "Status: Refinement needed". Wanneer de issue aan bovenstaande Definition of Ready voldoet pas je de status aan naar "Ready".' })] });
   }
   function f(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, a.jsx)(i, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, i, n) {
   n.d(i, { R: () => o, x: () => s });
   var t = n(30758);
   const a = {},
    r = t.createContext(a);
   function o(e) {
    const i = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function s(e) {
    let i;
    return ((i = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), t.createElement(r.Provider, { value: i }, e.children));
   }
  },
  56561(e, i, n) {
   n.d(i, { f: () => p });
   var t = n(15540),
    a = n(69967),
    r = n(86070),
    o = n(13526),
    s = n(30758),
    d = ['children', 'className', 'purpose'];
   function l(e, i) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (i &&
      (t = t.filter(function (i) {
       return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, t));
    }
    return n;
   }
   function c(e) {
    for (var i = 1; i < arguments.length; i++) {
     var n = null != arguments[i] ? arguments[i] : {};
     i % 2
      ? l(Object(n), !0).forEach(function (i) {
         (0, t.A)(e, i, n[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : l(Object(n)).forEach(function (i) {
           Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, i) {
    var n = e.children,
     s = e.className,
     l = e.purpose,
     p = (0, a.A)(e, d);
    return (0, r.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === l), s), ref: i }, p), {}, { children: 'lead' === l ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, i, n) {
   n.d(i, { f: () => t.f });
   var t = n(56561);
  },
 },
]);
