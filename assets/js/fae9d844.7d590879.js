'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42962],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => c });
   var r = t(30758);
   const a = {},
    i = r.createContext(a);
   function o(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), r.createElement(i.Provider, { value: n }, e.children));
   }
  },
  34229(e, n, t) {
   (t.r(n), t.d(n, { assets: () => s, contentTitle: () => l, default: () => p, frontMatter: () => c, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/klachten","title":"Klachten","description":"Klachten melden over het project NL Design System.","source":"@site/docs/project/klachten.mdx","sourceDirName":"project","slug":"/project/klachten","permalink":"/project/klachten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/klachten.mdx","tags":[],"version":"current","frontMatter":{"title":"Klachten","hide_title":true,"hide_table_of_contents":true,"navigation_order":6,"sidebar_label":"Klachten","pagination_label":"Klachten","description":"Klachten melden over het project NL Design System.","keywords":["kernteam","klachten"]},"sidebar":"project","previous":{"title":"Op de hoogte blijven","permalink":"/project/blijf-op-de-hoogte"},"next":{"title":"Schrijfwijzer","permalink":"/project/schrijfwijzer/"}}');
   var a = t(86070),
    i = t(18439),
    o = t(66153);
   const c = { title: 'Klachten', hide_title: !0, hide_table_of_contents: !0, navigation_order: 6, sidebar_label: 'Klachten', pagination_label: 'Klachten', description: 'Klachten melden over het project NL Design System.', keywords: ['kernteam', 'klachten'] },
    l = 'Klachten',
    s = {},
    d = [{ value: 'Handhavingsprocedure', id: 'handhavingsprocedure', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'klachten', children: 'Klachten' }) }), '\n', (0, a.jsx)(o.f, { appearance: 'lead', children: (0, a.jsx)(n.p, { children: 'Vind je dat je niet goed behandeld bent, bijvoorbeeld doordat de toegankelijkheid onvoldoende is, kun je deze klacht\ndoorgeven.' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Neem dan contact op via ', (0, a.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Wat kun je van ons verwachten?' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Binnen 10 werkdagen krijg je een ontvangstbevestiging.' }), '\n', (0, a.jsx)(n.li, { children: 'We informeren je over de voortgang en de uitkomst.' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'handhavingsprocedure', children: 'Handhavingsprocedure' }), '\n', (0, a.jsx)(n.p, { children: 'Ben je niet tevreden met de manier waarop je klacht is behandeld? Of hebben we niet op tijd gereageerd?' }), '\n', (0, a.jsxs)(n.p, { children: ['Dan kun je contact opnemen met ', (0, a.jsx)(n.a, { href: '/project/kernteam/', children: 'de projectleider van dit project' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => h });
   var r = t(15540),
    a = t(69967),
    i = t(86070),
    o = t(13526),
    c = t(30758),
    l = ['children', 'className', 'purpose'];
   function s(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? s(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : s(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var h = (0, c.forwardRef)(function (e, n) {
    var t = e.children,
     c = e.className,
     s = e.purpose,
     h = (0, a.A)(e, l);
    return (0, i.jsx)('p', d(d({ className: (0, o.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === s), c), ref: n }, h), {}, { children: 'lead' === s ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   h.displayName = 'Paragraph';
  },
  66153(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(56561);
  },
 },
]);
