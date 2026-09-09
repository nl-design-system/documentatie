'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46463],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => s });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function a(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  38058(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => s, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/productieomgeving","title":"Productieomgeving","description":"Uitleg over de versiebeheer van code in NL Design System","source":"@site/docs/project/kwaliteitsaanpak/productieomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/productieomgeving.mdx","tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"Productieomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Productieomgeving","sidebar_position":31,"pagination_label":"Productieomgeving","description":"Uitleg over de versiebeheer van code in NL Design System","keywords":["prod","production","productie"]},"sidebar":"project","previous":{"title":"Release notes","permalink":"/project/kwaliteitsaanpak/release-notes"},"next":{"title":"Backup","permalink":"/project/kwaliteitsaanpak/backup"}}');
   var r = i(86070),
    o = i(18439),
    a = i(66153);
   const s = { title: 'Productieomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Productieomgeving', sidebar_position: 31, pagination_label: 'Productieomgeving', description: 'Uitleg over de versiebeheer van code in NL Design System', keywords: ['prod', 'production', 'productie'] },
    d = 'Productieomgeving',
    c = {},
    l = [
     { value: 'Veiligheid', id: 'veiligheid', level: 2 },
     { value: 'Performance', id: 'performance', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'productieomgeving', children: 'Productieomgeving' }) }), '\n', (0, r.jsx)(a.f, { purpose: 'lead', children: (0, r.jsx)(n.p, { children: 'Begin nieuwe website-projecten met een minimum viable product in productie krijgen, bij voorkeur al in de eerste\nsprint. Gebruik daarna continuous deployment om vaak en snel deployments te doen naar productie-omgeving.' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Doe ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-deployment/', children: 'continuous deployment' }), ' op basis van de laatste versie in de ', (0, r.jsx)(n.code, { children: 'main' }), ' branch: wanneer de wijziging akkoord is met de reviewers die verplicht zijn voor de ', (0, r.jsx)(n.code, { children: 'main' }), ' branch, dan kan daarna automatisch een deployment gestart worden.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.github/workflows/publish.yml', children: [(0, r.jsx)(n.code, { children: '.github/workflows/publish.yml' }), ' in de example repository'] }), ' als voorbeeld van continuous deployment.'] }), '\n', (0, r.jsx)(n.h2, { id: 'veiligheid', children: 'Veiligheid' }), '\n', (0, r.jsxs)(n.p, { children: ['De website moet op ', (0, r.jsx)(n.a, { href: 'https://internet.nl/', children: 'internet.nl' }), ' een 100% score halen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'performance', children: 'Performance' }), '\n', (0, r.jsxs)(n.p, { children: ["Voor webpagina's is het het doel voor ", (0, r.jsx)(n.a, { href: 'https://web.dev/articles/fcp', children: 'first contentful paint (FCP)' }), ' performance is 1.8 seconde of sneller.'] }), '\n', (0, r.jsxs)(n.admonition, { title: 'bestaande infrastructuur', type: 'tip', children: [(0, r.jsx)(n.p, { children: 'Gebruik GitHub Pages voor de productieomgeving van developer-documentatie van teams in de community (zoals Storybook of Docusaurus), tenzij de teams een eigen productieomgeving hebben.' }), (0, r.jsxs)(n.p, { children: ['Gebruik hosting van ICTU voor de productieomgeving van websites zoals ', (0, r.jsx)(n.code, { children: 'nldesignsystem.nl' }), ' en ', (0, r.jsx)(n.code, { children: 'gebruikersonderzoeken.nl' }), ', zodat ze voldoen aan de veiligheidseisen.'] })] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  56561(e, n, i) {
   i.d(n, { f: () => p });
   var t = i(15540),
    r = i(69967),
    o = i(86070),
    a = i(13526),
    s = i(30758),
    d = ['children', 'className', 'purpose'];
   function c(e, n) {
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
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(i), !0).forEach(function (n) {
         (0, t.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : c(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, n) {
    var i = e.children,
     s = e.className,
     c = e.purpose,
     p = (0, r.A)(e, d);
    return (0, o.jsx)('p', l(l({ className: (0, a.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: n }, p), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, n, i) {
   i.d(n, { f: () => t.f });
   var t = i(56561);
  },
 },
]);
