'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [72134],
 {
  18439(e, t, n) {
   n.d(t, { R: () => o, x: () => s });
   var r = n(30758);
   const a = {},
    i = r.createContext(a);
   function o(e) {
    const t = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), r.createElement(i.Provider, { value: t }, e.children));
   }
  },
  26397(e, t, n) {
   (n.r(t), n.d(t, { assets: () => p, contentTitle: () => c, default: () => d, frontMatter: () => s, metadata: () => r, toc: () => u }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/backup","title":"Backup","description":"Zorg voor voor infrastructuur om een backup te maken en terug te zetten.","source":"@site/docs/project/kwaliteitsaanpak/backup.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/backup","permalink":"/project/kwaliteitsaanpak/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/backup.mdx","tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"title":"Backup","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Backup","pagination_label":"Backup","sidebar_position":32,"description":"Zorg voor voor infrastructuur om een backup te maken en terug te zetten.","keywords":["backup"]},"sidebar":"project","previous":{"title":"Productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving"}}');
   var a = n(86070),
    i = n(18439),
    o = n(66153);
   const s = { title: 'Backup', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Backup', pagination_label: 'Backup', sidebar_position: 32, description: 'Zorg voor voor infrastructuur om een backup te maken en terug te zetten.', keywords: ['backup'] },
    c = 'Backup',
    p = {},
    u = [];
   function l(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'backup', children: 'Backup' }) }), '\n', (0, a.jsx)(o.f, { purpose: 'lead', children: (0, a.jsx)(t.p, { children: 'Wanneer je open source code aanbiedt op publieke infrastructuur, dan is het belangrijk dat je backups hebt waarvan de\nintegriteit in orde is.' }) }), '\n', (0, a.jsx)(t.p, { children: 'Gebruikers investeren tijd en energie in je open source project, en mensen kunnen afhankelijk zijn doorontwikkeling en veiligheidsupdates. Doe iedereen een plezier, en zorg dat er backups zijn die makkelijk teruggezet kunnen worden.' }), '\n', (0, a.jsxs)(t.p, { children: ['Er zijn goede manieren niet afhankelijk te zijn van een backup op je eigen computer. Lees meer hoe dit voor ', (0, a.jsx)(t.a, { href: 'https://github.com/nl-design-system', children: 'github.com/nl-design-system' }), ' werkt: ', (0, a.jsx)(t.a, { href: '/github/#backup', children: 'GitHub Backups' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  56561(e, t, n) {
   n.d(t, { f: () => l });
   var r = n(15540),
    a = n(69967),
    i = n(86070),
    o = n(13526),
    s = n(30758),
    c = ['children', 'className', 'purpose'];
   function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
    }
    return n;
   }
   function u(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? p(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : p(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var l = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
     s = e.className,
     p = e.purpose,
     l = (0, a.A)(e, c);
    return (0, i.jsx)('p', u(u({ className: (0, o.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === p), s), ref: t }, l), {}, { children: 'lead' === p ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   l.displayName = 'Paragraph';
  },
  66153(e, t, n) {
   n.d(t, { f: () => r.f });
   var r = n(56561);
  },
 },
]);
