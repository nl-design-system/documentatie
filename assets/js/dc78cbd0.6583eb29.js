'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [80666],
 {
  15347(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => f, frontMatter: () => s, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/definition-of-ready","title":"Definition of Ready","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.","source":"@site/docs/project/kwaliteitsaanpak/definition-of-ready.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/definition-of-ready","permalink":"/project/kwaliteitsaanpak/definition-of-ready","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/definition-of-ready.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Definition of Ready","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Definition of Ready","sidebar_position":6,"pagination_label":"Definition of Ready","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken."},"sidebar":"project","previous":{"title":"Product Backlog","permalink":"/project/kwaliteitsaanpak/product-backlog"},"next":{"title":"Agile sprint","permalink":"/project/kwaliteitsaanpak/agile-sprint"}}');
   var r = i(86070),
    a = i(18439),
    o = i(59292);
   const s = { title: 'Definition of Ready', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Definition of Ready', sidebar_position: 6, pagination_label: 'Definition of Ready', description: 'Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.' },
    l = 'Definition of Ready',
    d = {},
    c = [
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Refinement', id: 'refinement', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'definition-of-ready', children: 'Definition of Ready' }) }), '\n', '\n', (0, r.jsx)(o.f, { purpose: 'lead', children: (0, r.jsx)(n.p, { children: 'Controleer met Definition of Ready of het werk klaar is om aan te werken in een agile sprint.' }) }), '\n', (0, r.jsx)(n.p, { children: 'De checklist:' }), '\n', '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['De acceptatiecriteria in de ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'backlog' }), ' zijn duidelijk voor de product owner en de personen die het werk uitvoeren.'] }), '\n', (0, r.jsx)(n.li, { children: 'Het doel is duidelijk voor de user story.' }), '\n', (0, r.jsx)(n.li, { children: 'De product owner is akkoord met de prioriteit. ' }), '\n', (0, r.jsx)(n.li, { children: 'Er is duidelijk hoe getest moet worden of het werk klaar is.' }), '\n', (0, r.jsx)(n.li, { children: 'Alle afhankelijkheden zijn gekoppeld via "Blocked by", en daarvan is de status "Done". ' }), '\n', (0, r.jsx)(n.li, { children: 'Het is mogelijk een inschatting te geven hoeveel werk het is, relatief ten opzichte van andere issues. ' }), '\n', (0, r.jsx)(n.li, { children: 'Als er een mogelijke oplossing is, dan staat die in "Beschrijving" en niet in de User Story of de acceptatiecriteria. ' }), '\n', (0, r.jsx)(n.li, { children: 'Wanneer de tijdsinschatting XL of XXL is, dan is geprobeerd om de issue op te splitsen in meerdere kleine issues.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }), '\n', (0, r.jsx)(n.p, { children: 'Let op de volgende punten voor het maken van effectieve acceptatiecriteria:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Voeg de gewenste uitkomst toe, op een manier die duidelijk genoeg is om te testen. ' }), '\n', (0, r.jsx)(n.li, { children: 'Voeg "software release is gepubliceerd" toe aan de acceptatiecriteria, wanneer dit de bedoeling is.' }), '\n', (0, r.jsx)(n.li, { children: 'Wat al in de Definition of Done staat, moet niet opnieuw genoemd worden in de acceptatiecriteria.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'refinement', children: 'Refinement' }), '\n', (0, r.jsxs)(n.p, { children: ['Organiseer sprint refinements om de product backlog steeds duidelijker te maken, zodat er voldoende informatie is om 1 of meerdere ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/agile-sprint/', children: 'agile sprints' }), ' te plannen en te starten.'] }), '\n', (0, r.jsx)(n.p, { children: 'Het ontwikkelteam en de product owner bespreken issues met de "Status: Refinement needed". Wanneer de issue aan bovenstaande Definition of Ready voldoet pas je de status aan naar "Ready".' })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => s });
   var t = i(30758);
   const r = {},
    a = t.createContext(r);
   function o(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, i) {
   function t(e, n) {
    if (null == e) return {};
    var i,
     t,
     r = (function (e, n) {
      if (null == e) return {};
      var i = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        i[t] = e[t];
       }
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (t = 0; t < a.length; t++) ((i = a[t]), -1 === n.indexOf(i) && {}.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
    }
    return r;
   }
   i.d(n, { A: () => t });
  },
  48171(e, n, i) {
   function t(e) {
    return (
     (t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     t(e)
    );
   }
   function r(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var i = e[Symbol.toPrimitive];
     if (void 0 !== i) {
      var r = i.call(e, n || 'default');
      if ('object' != t(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function a(e, n, i) {
    return ((n = r(n)) in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i), e);
   }
   i.d(n, { A: () => a });
  },
  59292(e, n, i) {
   i.d(n, { f: () => t.f });
   var t = i(71544);
  },
  71544(e, n, i) {
   i.d(n, { f: () => p });
   var t = i(48171),
    r = i(41534),
    a = i(86070),
    o = i(13526),
    s = i(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, t));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, t.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, n) {
    var i = e.children,
     s = e.className,
     d = e.purpose,
     p = (0, r.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), s), ref: n }, p), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   p.displayName = 'Paragraph';
  },
 },
]);
