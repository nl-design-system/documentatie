'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26263],
 {
  10473(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => h, frontMatter: () => s, metadata: () => r, toc: () => l }));
   const r = JSON.parse('{"id":"project/schrijfwijzer/reviews","title":"Reviews","description":"Reviews voor NL Design System communicatie.","source":"@site/docs/project/schrijfwijzer/reviews.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/reviews","permalink":"/project/schrijfwijzer/reviews","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/reviews.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Reviews","hide_title":true,"sidebar_label":"Reviews","sidebar_position":9,"navigation_order":9,"pagination_label":"Reviews","description":"Reviews voor NL Design System communicatie.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Code","permalink":"/project/schrijfwijzer/code"},"next":{"title":"Introductie","permalink":"/project/kwaliteitsaanpak/"}}');
   var t = i(86070),
    a = i(18439),
    o = i(66153);
   const s = { title: 'Reviews', hide_title: !0, sidebar_label: 'Reviews', sidebar_position: 9, navigation_order: 9, pagination_label: 'Reviews', description: 'Reviews voor NL Design System communicatie.', keywords: ['kernteam'] },
    c = 'Reviews',
    d = {},
    l = [
     { value: 'Website en documentatie', id: 'website-en-documentatie', level: 2 },
     { value: 'Berichten voor social media', id: 'berichten-voor-social-media', level: 2 },
     { value: 'Presentaties', id: 'presentaties', level: 2 },
     { value: 'Drukwerk en fysieke media', id: 'drukwerk-en-fysieke-media', level: 2 },
     { value: 'Aankondigingen in chatkanalen', id: 'aankondigingen-in-chatkanalen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'reviews', children: 'Reviews' }) }), '\n', (0, t.jsx)(o.f, { purpose: 'lead', children: (0, t.jsx)(n.p, { children: 'Heb je een tekst geschreven? Laat dan altijd een ander meelezen v\xf3\xf3r je de tekst publiceert. Zou houden we elkaar\nscherp.' }) }), '\n', (0, t.jsx)(n.p, { children: 'Wie je om een review vraag verschilt per soort content. Wanneer je een tekst schrijft voor specialisten, en je bent zelf geen specialist, laat de tekst dan altijd reviewen door iemand die wel specialist is op dat gebied.' }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer je een review nodig hebt, vermeld er dan bij wanneer je de feedback uiterlijk nodig hebt en attendeer eventueel de persoon die je nodig hebt door te taggen.' }), '\n', (0, t.jsx)(n.h2, { id: 'website-en-documentatie', children: 'Website en documentatie' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik de Pull Request reviews op GitHub.' }), '\n', (0, t.jsx)(n.h2, { id: 'berichten-voor-social-media', children: 'Berichten voor social media' }), '\n', (0, t.jsx)(n.p, { children: 'Communicatieadviseur maakt berichten voor social media. De productmanager geeft akkoord voor plaatsing.' }), '\n', (0, t.jsx)(n.h2, { id: 'presentaties', children: 'Presentaties' }), '\n', (0, t.jsx)(n.p, { children: 'Slides die gemaakt worden in PowerPoint of Figma moeten gecheckt worden op spelling, zinsopbouw en consistentie door een collega en geaccordeerd worden door de productmanager of projectmanager.' }), '\n', (0, t.jsx)(n.h2, { id: 'drukwerk-en-fysieke-media', children: 'Drukwerk en fysieke media' }), '\n', (0, t.jsx)(n.p, { children: 'De teksten moeten gecheckt worden op spelling, zinsopbouw en consistentie door de communicatieadviseur en akkoord bevonden worden door de productmanager of projectmanager.' }), '\n', (0, t.jsx)(n.h2, { id: 'aankondigingen-in-chatkanalen', children: 'Aankondigingen in chatkanalen' }), '\n', (0, t.jsxs)(n.p, { children: ['Vraag om een review aan de productmanager in een priv\xe9chatkanaal voordat je een algemene aankondiging doet ', (0, t.jsx)(n.a, { href: '/slack/', children: 'in Slack' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => s });
   var r = i(30758);
   const t = {},
    a = r.createContext(t);
   function o(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  56561(e, n, i) {
   i.d(n, { f: () => p });
   var r = i(15540),
    t = i(69967),
    a = i(86070),
    o = i(13526),
    s = i(30758),
    c = ['children', 'className', 'purpose'];
   function d(e, n) {
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
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, r.A)(e, n, i[n]);
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
     p = (0, t.A)(e, c);
    return (0, a.jsx)('p', l(l({ className: (0, o.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === d), s), ref: n }, p), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, n, i) {
   i.d(n, { f: () => r.f });
   var r = i(56561);
  },
 },
]);
