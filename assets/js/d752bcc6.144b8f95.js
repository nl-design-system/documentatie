'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41407],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var r = t(30758);
   const i = {},
    s = r.createContext(i);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  53196(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => h, frontMatter: () => l, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/schrijfwijzer/engels","title":"Engels","description":"Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/engels.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/engels","permalink":"/project/schrijfwijzer/engels","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/engels.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Engels","hide_title":true,"sidebar_label":"Engels","sidebar_position":6,"navigation_order":6,"pagination_label":"Engels","description":"Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Nederlands","permalink":"/project/schrijfwijzer/nederlands"},"next":{"title":"Afbeeldingen","permalink":"/project/schrijfwijzer/afbeeldingen"}}');
   var i = t(86070),
    s = t(18439),
    o = t(66153);
   const l = { title: 'Engels', hide_title: !0, sidebar_label: 'Engels', sidebar_position: 6, navigation_order: 6, pagination_label: 'Engels', description: 'Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    a = 'Richtlijnen voor Engelse teksten',
    c = {},
    d = [
     { value: 'Consistent met API&#39;s', id: 'consistent-met-apis', level: 2 },
     { value: 'Telefoonnummers', id: 'telefoonnummers', level: 2 },
    ];
   function p(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'richtlijnen-voor-engelse-teksten', children: 'Richtlijnen voor Engelse teksten' }) }), '\n', (0, i.jsx)(o.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: "Sommige pagina's op de website zijn Engelstalig, omdat ze bedoeld zijn voor een internationaal publiek. Veel\nsoftwaredocumentatie is ook alleen in het Engels beschikbaar, vanwege de Standard for Public Code." }) }), '\n', (0, i.jsx)(n.h2, { id: 'consistent-met-apis', children: "Consistent met API's" }), '\n', (0, i.jsx)(n.p, { children: 'Schrijf teksten in Amerikaans-Engels, zodat de teksten consistent zijn met code van het design system. Bijvoorbeeld: "color" in plaats van "colour".' }), '\n', (0, i.jsx)(n.h2, { id: 'telefoonnummers', children: 'Telefoonnummers' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de internationale notatie voor telefoonnummers in Engelse teksten, zodat ze ook werken buiten Nederland.' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '+31 234 56 78 90' }), '\n', (0, i.jsx)(n.li, { children: '+31 20 623 45 67' }), '\n', (0, i.jsx)(n.li, { children: '+31 6 53 45 67 89' }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => p });
   var r = t(15540),
    i = t(69967),
    s = t(86070),
    o = t(13526),
    l = t(30758),
    a = ['children', 'className', 'purpose'];
   function c(e, n) {
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
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, l.forwardRef)(function (e, n) {
    var t = e.children,
     l = e.className,
     c = e.purpose,
     p = (0, i.A)(e, a);
    return (0, s.jsx)('p', d(d({ className: (0, o.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: n }, p), {}, { children: 'lead' === c ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(56561);
  },
 },
]);
