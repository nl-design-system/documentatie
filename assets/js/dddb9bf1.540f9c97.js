'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [27439],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => a });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  96880(e, n, i) {
   (i.r(n), i.d(n, { assets: () => l, contentTitle: () => c, default: () => u, frontMatter: () => a, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/open-source","title":"Open Source","description":"Uitleg over hoe NL Design System open source werkt.","source":"@site/docs/project/kwaliteitsaanpak/open-source.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/open-source","permalink":"/project/kwaliteitsaanpak/open-source","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/open-source.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Open Source","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Open Source","sidebar_position":12,"pagination_label":"Open Source","description":"Uitleg over hoe NL Design System open source werkt.","keywords":["open source"]},"sidebar":"project","previous":{"title":"Testomgeving","permalink":"/project/kwaliteitsaanpak/testomgeving"},"next":{"title":"Sprint review","permalink":"/project/kwaliteitsaanpak/sprint-review"}}');
   var o = i(86070),
    r = i(18439),
    s = i(46447);
   const a = { title: 'Open Source', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Open Source', sidebar_position: 12, pagination_label: 'Open Source', description: 'Uitleg over hoe NL Design System open source werkt.', keywords: ['open source'] },
    c = 'Open Source',
    l = {},
    d = [
     { value: 'Code', id: 'code', level: 2 },
     { value: 'Documentatie', id: 'documentatie', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'open-source', children: 'Open Source' }) }), '\n', (0, o.jsx)(s.fz, { lead: !0, children: (0, o.jsx)(n.p, { children: 'Publiceer alle code en documentatie onder een open source licentie, zodat het mogelijk is samen te werken voorbij\norganisatiegrenzen.' }) }), '\n', (0, o.jsx)(n.h2, { id: 'code', children: 'Code' }), '\n', (0, o.jsxs)(n.p, { children: ['Publiceer alle code onder de ', (0, o.jsx)(n.a, { href: '/open-source/eupl/', children: 'EUPL-1.2 licentie' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Publiceer de Engelstalige licentie in ', (0, o.jsx)(n.code, { children: 'LICENSE.md' }), ', een gebruikelijke bestandsnaam. De licentie wordt op deze manier automatisch getoond in de user interface van bijvoorbeeld GitHub en npm. Publiceer de Nederlandstalige licentie in ', (0, o.jsx)(n.code, { children: 'LICENSE.nl.md' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik een geldige ', (0, o.jsx)(n.a, { href: 'https://spdx.dev/learn/handling-license-info/', children: 'SPDX license identifier' }), ' voor de open source licentie. Bijvoorbeeld in een ', (0, o.jsx)(n.code, { children: 'package.json' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-json', children: '{\n  "license": "EUPL-1.2"\n}\n' }) }), '\n', (0, o.jsx)(n.h2, { id: 'documentatie', children: 'Documentatie' }), '\n', (0, o.jsxs)(n.p, { children: ['Publiceer alle documentatie onder de ', (0, o.jsx)(n.a, { href: '/open-source/cc0/', children: 'Creative Commons 0 licentie (CC0)' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'Op deze manier ben je nooit tijd kwijt bijhouden van een potentieel lange lijst van copyrighthouders. Je kunt zo ook makkelijk documentatie-teksten opsplitsen, samenvoegen, herschrijven. Je kan delen van de documentatie hergebruiken in situaties waar een copyrightvermelding niet handig is.' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik een ', (0, o.jsx)(n.a, { href: 'https://spdx.dev/learn/handling-license-info/', children: 'SPDX license identifier' }), ' in een comment aan het begin van documentatie. Bijvoorbeeld in Markdown:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-md', children: '\x3c!-- @license CC0-1.0 --\x3e\n' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
