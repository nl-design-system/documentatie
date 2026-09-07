'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [27439],
 {
  1124(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => c, default: () => u, frontMatter: () => a, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/open-source","title":"Open Source","description":"Uitleg over hoe NL Design System open source werkt.","source":"@site/docs/project/kwaliteitsaanpak/open-source.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/open-source","permalink":"/project/kwaliteitsaanpak/open-source","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/open-source.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Open Source","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Open Source","sidebar_position":12,"pagination_label":"Open Source","description":"Uitleg over hoe NL Design System open source werkt.","keywords":["open source"]},"sidebar":"project","previous":{"title":"Testomgeving","permalink":"/project/kwaliteitsaanpak/testomgeving"},"next":{"title":"Sprint review","permalink":"/project/kwaliteitsaanpak/sprint-review"}}');
   var i = t(86070),
    o = t(18439),
    s = t(59292);
   const a = { title: 'Open Source', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Open Source', sidebar_position: 12, pagination_label: 'Open Source', description: 'Uitleg over hoe NL Design System open source werkt.', keywords: ['open source'] },
    c = 'Open Source',
    l = {},
    d = [
     { value: 'Code', id: 'code', level: 2 },
     { value: 'Documentatie', id: 'documentatie', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'open-source', children: 'Open Source' }) }), '\n', (0, i.jsx)(s.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'Publiceer alle code en documentatie onder een open source licentie, zodat het mogelijk is samen te werken voorbij\norganisatiegrenzen.' }) }), '\n', (0, i.jsx)(n.h2, { id: 'code', children: 'Code' }), '\n', (0, i.jsxs)(n.p, { children: ['Publiceer alle code onder de ', (0, i.jsx)(n.a, { href: '/open-source/eupl/', children: 'EUPL-1.2 licentie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Publiceer de Engelstalige licentie in ', (0, i.jsx)(n.code, { children: 'LICENSE.md' }), ', een gebruikelijke bestandsnaam. De licentie wordt op deze manier automatisch getoond in de user interface van bijvoorbeeld GitHub en npm. Publiceer de Nederlandstalige licentie in ', (0, i.jsx)(n.code, { children: 'LICENSE.nl.md' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik een geldige ', (0, i.jsx)(n.a, { href: 'https://spdx.dev/learn/handling-license-info/', children: 'SPDX license identifier' }), ' voor de open source licentie. Bijvoorbeeld in een ', (0, i.jsx)(n.code, { children: 'package.json' }), ':'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-json', children: '{\n  "license": "EUPL-1.2"\n}\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'documentatie', children: 'Documentatie' }), '\n', (0, i.jsxs)(n.p, { children: ['Publiceer alle documentatie onder de ', (0, i.jsx)(n.a, { href: '/open-source/cc0/', children: 'Creative Commons 0 licentie (CC0)' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Op deze manier ben je nooit tijd kwijt bijhouden van een potentieel lange lijst van copyrighthouders. Je kunt zo ook makkelijk documentatie-teksten opsplitsen, samenvoegen, herschrijven. Je kan delen van de documentatie hergebruiken in situaties waar een copyrightvermelding niet handig is.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik een ', (0, i.jsx)(n.a, { href: 'https://spdx.dev/learn/handling-license-info/', children: 'SPDX license identifier' }), ' in een comment aan het begin van documentatie. Bijvoorbeeld in Markdown:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-md', children: '\x3c!-- @license CC0-1.0 --\x3e\n' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => a });
   var r = t(30758);
   const i = {},
    o = r.createContext(i);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => p });
   var r = t(15540),
    i = t(69967),
    o = t(86070),
    s = t(13526),
    a = t(30758),
    c = ['children', 'className', 'purpose'];
   function l(e, n) {
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
      ? l(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : l(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     l = e.purpose,
     p = (0, i.A)(e, c);
    return (0, o.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === l), a), ref: n }, p), {}, { children: 'lead' === l ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   p.displayName = 'Paragraph';
  },
  59292(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(56561);
  },
 },
]);
