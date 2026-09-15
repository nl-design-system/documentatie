'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92447],
 {
  18439(e, t, n) {
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
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: t }, e.children));
   }
  },
  56561(e, t, n) {
   n.d(t, { f: () => p });
   var i = n(15540),
    r = n(69967),
    s = n(86070),
    o = n(13526),
    a = n(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (t &&
      (i = i.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, i));
    }
    return n;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, i.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var p = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
     a = e.className,
     c = e.purpose,
     p = (0, r.A)(e, l);
    return (0, s.jsx)('p', d(d({ className: (0, o.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: t }, p), {}, { children: 'lead' === c ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, t, n) {
   n.d(t, { f: () => i.f });
   var i = n(56561);
  },
  92013(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/testomgeving","title":"Testomgeving","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","source":"@site/docs/project/kwaliteitsaanpak/testomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/testomgeving","permalink":"/project/kwaliteitsaanpak/testomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/testomgeving.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Testomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Testomgeving","sidebar_position":11,"pagination_label":"Testomgeving","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","keywords":["dtap","otap","test"]},"sidebar":"project","previous":{"title":"Internationalisatie en localisatie","permalink":"/project/kwaliteitsaanpak/i18n"},"next":{"title":"Open Source","permalink":"/project/kwaliteitsaanpak/open-source"}}');
   var r = n(86070),
    s = n(18439),
    o = n(66153);
   const a = { title: 'Testomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Testomgeving', sidebar_position: 11, pagination_label: 'Testomgeving', description: 'Branch deployments van GitHub Pull Requests zijn de testomgevingen.', keywords: ['dtap', 'otap', 'test'] },
    l = 'Testomgeving',
    c = {},
    d = [
     { value: 'Branch deployments', id: 'branch-deployments', level: 2 },
     { value: 'Lokale testomgeving', id: 'lokale-testomgeving', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(t.header, { children: (0, r.jsx)(t.h1, { id: 'testomgeving', children: 'Testomgeving' }) }), '\n', (0, r.jsx)(o.f, { purpose: 'lead', children: (0, r.jsx)(t.p, { children: 'Biedt een testomgeving aan voor elke wijziging, zodat het laagdrempelig is om een review te doen van een wijziging.\nLaat ook weten waar in testomgeving je moet zijn, en hoe je de wijzigingen kan testen. Zo maak je samen een beter\nproduct.' }) }), '\n', (0, r.jsx)(t.p, { children: 'De aanbevolen manier is "branch deployments" als testomgeving.' }), '\n', (0, r.jsx)(t.h2, { id: 'branch-deployments', children: 'Branch deployments' }), '\n', (0, r.jsxs)(t.p, { children: ['Gebruik de bestaande ', (0, r.jsx)(t.a, { href: '/vercel/', children: 'Vercel infrastructuur voor NL Design System' }), ' voor het maken van branch deployments voor GitHub Pull Requests, voor projecten waarvan de build een statische website of een Node.js server is.'] }), '\n', (0, r.jsx)(t.p, { children: 'Wanneer iemand een Pull Request maakt, wordt automatisch een testomgeving aangemaakt. De Pull Request ontvangt na enkele minuten automatisch een comment met een linkje naar de testomgeving.' }), '\n', (0, r.jsxs)(t.p, { children: ['Gebruik waar mogelijk infrastructure-as-code om Vercel te configureren, via de ', (0, r.jsx)(t.a, { href: 'https://registry.terraform.io/providers/vercel/vercel/latest/docs', children: 'vercel terraform provider' }), ' in de ', (0, r.jsx)(t.a, { href: 'http://github.com/nl-design-system/terraform', children: 'nl-design-system/terraform repository' }), '.'] }), '\n', (0, r.jsx)(t.h2, { id: 'lokale-testomgeving', children: 'Lokale testomgeving' }), '\n', (0, r.jsxs)(t.p, { children: ['Gebruik de ', (0, r.jsx)(t.code, { children: 'README.md' }), ' om instructies te delen om de testomgeving lokaal op te starten. Dit is handig wanneer branch deployments niet beschikbaar zijn. Documenteer in elk geval:'] }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsxs)(t.li, { children: ['Vereisten. Bijvoorbeeld installeer Node.js en pmpm of Docker, en gebruik ', (0, r.jsx)(t.code, { children: 'pnpm install' }), '.'] }), '\n', (0, r.jsx)(t.li, { children: 'Configuratie. Bijvoorbeeld welke environment variables nodig zijn voor de testomgeving.' }), '\n', (0, r.jsxs)(t.li, { children: ['Hoe je de testomgeving start. Bijvoorbeeld: ', (0, r.jsx)(t.code, { children: 'pnpm run build' }), ' en ', (0, r.jsx)(t.code, { children: 'pnpm run start' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Let op: de ontwikkelomgeving die je start met ', (0, r.jsx)(t.code, { children: 'pnpm run dev' }), ' is niet hetzelfde een testomgeving. De testomgeving moet zoveel mogelijk lijken op de productieomgeving.'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
