'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84773],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const t = {},
    a = r.createContext(t);
   function s(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  42389(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => o, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/index","title":"Kwaliteitsaanpak","description":"Kwaliteitsaanpak NL Design System","source":"@site/docs/project/kwaliteitsaanpak/index.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/","permalink":"/project/kwaliteitsaanpak/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Kwaliteitsaanpak","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie","sidebar_position":1,"pagination_label":"Introductie","description":"Kwaliteitsaanpak NL Design System","keywords":["kwaliteitsaanpak"]},"sidebar":"project","previous":{"title":"Reviews","permalink":"/project/schrijfwijzer/reviews"},"next":{"title":"Introductie","permalink":"/project/kwaliteitsaanpak/"}}');
   var t = i(86070),
    a = i(18439),
    s = i(59292);
   const l = { title: 'Kwaliteitsaanpak', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Kwaliteitsaanpak NL Design System', keywords: ['kwaliteitsaanpak'] },
    o = 'Kwaliteitsaanpak',
    c = {},
    d = [{ value: 'Overzicht', id: 'overzicht', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'kwaliteitsaanpak', children: 'Kwaliteitsaanpak' }) }), '\n', (0, t.jsx)(s.f, { purpose: 'lead', children: (0, t.jsx)(n.p, { children: 'Werk je in opdracht van NL Design System? Gebruik dan deze aanpak om veilige software van hoge kwaliteit te maken.\nWanneer je in de community werkt, dan heb je misschien ook veel aan deze aanpak.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht', children: 'Overzicht' }), '\n', (0, t.jsx)(n.p, { children: 'Voor je aan de slag gaat, is het belangrijk om te weten hoe je veilig je werk kunt doen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'veilige-werkomgeving/', children: 'Veilige werkomgeving' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'veilig-werken/', children: 'Veilig werken' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Alle taken, idee\xebn en processen worden vastgelegd in de Product Backlog. De product owner bepaalt de prioriteiten, en die werkzaamheden worden uitgevoerd in Agile Sprints. Lees de details:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'product-backlog/', children: 'Product Backlog' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'definition-of-ready/', children: 'Definition of Ready' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'agile-sprint/', children: 'Agile sprint' }) }), '\n'] }), '\n', '\n', (0, t.jsx)(n.p, { children: 'Wanneer code wordt ontwikkeld, is het doel om toegankelijke software te maken van hoge kwaliteit die goed onderhoudbaar is. De software moet open source herbruikbaar zijn in andere websites en in andere talen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'broncodekwaliteit/', children: 'Broncodekwaliteit' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'open-source/', children: 'Open source' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'toegankelijkheid/', children: 'Toegankelijkheid' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'supply-chain/', children: 'Software supply chain' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/baseline/', children: 'Baseline' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'We werken samen via Git om de software te reviewen, te testen en later te releasen.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'versiebeheer/', children: 'Versiebeheer' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'testomgeving/', children: 'Testomgeving' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Controleren van de kwaliteit:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'continuous-integration/', children: 'Continuous Integration' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/kwaliteitsaanpak/code-review/', children: 'Code reviews' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'definition-of-done/', children: 'Definition of Done' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'sprint-review/', children: 'Sprint review' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Software releases doen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'continuous-delivery/', children: 'Continuous Delivery' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'continuous-deployment/', children: 'Continuous Deployment' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'release-notes/', children: 'Release notes' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'productieomgeving/', children: 'Productieomgeving' }) }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Beheer:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'backup/', children: 'Backups' }), ': van de broncode moet een backup zijn.'] }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  56561(e, n, i) {
   i.d(n, { f: () => h });
   var r = i(15540),
    t = i(69967),
    a = i(86070),
    s = i(13526),
    l = i(30758),
    o = ['children', 'className', 'purpose'];
   function c(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, r));
    }
    return i;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(i), !0).forEach(function (n) {
         (0, r.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : c(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var h = (0, l.forwardRef)(function (e, n) {
    var i = e.children,
     l = e.className,
     c = e.purpose,
     h = (0, t.A)(e, o);
    return (0, a.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: n }, h), {}, { children: 'lead' === c ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   h.displayName = 'Paragraph';
  },
  59292(e, n, i) {
   i.d(n, { f: () => r.f });
   var r = i(56561);
  },
 },
]);
