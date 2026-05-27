'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [72134],
 {
  18439(e, t, n) {
   n.d(t, { R: () => o, x: () => s });
   var i = n(30758);
   const a = {},
    r = i.createContext(a);
   function o(e) {
    const t = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), i.createElement(r.Provider, { value: t }, e.children));
   }
  },
  53111(e, t, n) {
   (n.r(t), n.d(t, { assets: () => u, contentTitle: () => c, default: () => l, frontMatter: () => s, metadata: () => i, toc: () => p }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/backup","title":"Backup","description":"Zorg voor voor infrastructuur om een backup te maken en terug te zetten.","source":"@site/docs/project/kwaliteitsaanpak/backup.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/backup","permalink":"/project/kwaliteitsaanpak/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/backup.mdx","tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"title":"Backup","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Backup","pagination_label":"Backup","sidebar_position":32,"description":"Zorg voor voor infrastructuur om een backup te maken en terug te zetten.","keywords":["backup"]},"sidebar":"project","previous":{"title":"Productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving"}}');
   var a = n(86070),
    r = n(18439),
    o = n(46447);
   const s = { title: 'Backup', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Backup', pagination_label: 'Backup', sidebar_position: 32, description: 'Zorg voor voor infrastructuur om een backup te maken en terug te zetten.', keywords: ['backup'] },
    c = 'Backup',
    u = {},
    p = [];
   function d(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'backup', children: 'Backup' }) }), '\n', (0, a.jsx)(o.fz, { lead: !0, children: (0, a.jsx)(t.p, { children: 'Wanneer je open source code aanbiedt op publieke infrastructuur, dan is het belangrijk dat je backups hebt waarvan de\nintegriteit in orde is.' }) }), '\n', (0, a.jsx)(t.p, { children: 'Gebruikers investeren tijd en energie in je open source project, en mensen kunnen afhankelijk zijn doorontwikkeling en veiligheidsupdates. Doe iedereen een plezier, en zorg dat er backups zijn die makkelijk teruggezet kunnen worden.' }), '\n', (0, a.jsxs)(t.p, { children: ['Er zijn goede manieren niet afhankelijk te zijn van een backup op je eigen computer. Lees meer hoe dit voor ', (0, a.jsx)(t.a, { href: 'https://github.com/nl-design-system', children: 'github.com/nl-design-system' }), ' werkt: ', (0, a.jsx)(t.a, { href: '/github/#backup', children: 'GitHub Backups' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
