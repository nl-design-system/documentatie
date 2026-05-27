'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46463],
 {
  18439(e, i, n) {
   n.d(i, { R: () => s, x: () => a });
   var t = n(30758);
   const o = {},
    r = t.createContext(o);
   function s(e) {
    const i = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function a(e) {
    let i;
    return ((i = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: i }, e.children));
   }
  },
  33680(e, i, n) {
   (n.r(i), n.d(i, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => a, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/productieomgeving","title":"Productieomgeving","description":"Uitleg over de versiebeheer van code in NL Design System","source":"@site/docs/project/kwaliteitsaanpak/productieomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/productieomgeving.mdx","tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"Productieomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Productieomgeving","sidebar_position":31,"pagination_label":"Productieomgeving","description":"Uitleg over de versiebeheer van code in NL Design System","keywords":["prod","production","productie"]},"sidebar":"project","previous":{"title":"Release notes","permalink":"/project/kwaliteitsaanpak/release-notes"},"next":{"title":"Backup","permalink":"/project/kwaliteitsaanpak/backup"}}');
   var o = n(86070),
    r = n(18439),
    s = n(46447);
   const a = { title: 'Productieomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Productieomgeving', sidebar_position: 31, pagination_label: 'Productieomgeving', description: 'Uitleg over de versiebeheer van code in NL Design System', keywords: ['prod', 'production', 'productie'] },
    d = 'Productieomgeving',
    c = {},
    l = [
     { value: 'Veiligheid', id: 'veiligheid', level: 2 },
     { value: 'Performance', id: 'performance', level: 2 },
    ];
   function p(e) {
    const i = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(i.header, { children: (0, o.jsx)(i.h1, { id: 'productieomgeving', children: 'Productieomgeving' }) }), '\n', (0, o.jsx)(s.fz, { lead: !0, children: (0, o.jsx)(i.p, { children: 'Begin nieuwe website-projecten met een minimum viable product in productie krijgen, bij voorkeur al in de eerste\nsprint. Gebruik daarna continuous deployment om vaak en snel deployments te doen naar productie-omgeving.' }) }), '\n', (0, o.jsxs)(i.p, { children: ['Doe ', (0, o.jsx)(i.a, { href: '/project/kwaliteitsaanpak/continuous-deployment/', children: 'continuous deployment' }), ' op basis van de laatste versie in de ', (0, o.jsx)(i.code, { children: 'main' }), ' branch: wanneer de wijziging akkoord is met de reviewers die verplicht zijn voor de ', (0, o.jsx)(i.code, { children: 'main' }), ' branch, dan kan daarna automatisch een deployment gestart worden.'] }), '\n', (0, o.jsxs)(i.p, { children: ['Gebruik de ', (0, o.jsxs)(i.a, { href: 'https://github.com/nl-design-system/example/blob/main/.github/workflows/publish.yml', children: [(0, o.jsx)(i.code, { children: '.github/workflows/publish.yml' }), ' in de example repository'] }), ' als voorbeeld van continuous deployment.'] }), '\n', (0, o.jsx)(i.h2, { id: 'veiligheid', children: 'Veiligheid' }), '\n', (0, o.jsxs)(i.p, { children: ['De website moet op ', (0, o.jsx)(i.a, { href: 'https://internet.nl/', children: 'internet.nl' }), ' een 100% score halen.'] }), '\n', (0, o.jsx)(i.h2, { id: 'performance', children: 'Performance' }), '\n', (0, o.jsxs)(i.p, { children: ["Voor webpagina's is het het doel voor ", (0, o.jsx)(i.a, { href: 'https://web.dev/articles/fcp', children: 'first contentful paint (FCP)' }), ' performance is 1.8 seconde of sneller.'] }), '\n', (0, o.jsxs)(i.admonition, { title: 'bestaande infrastructuur', type: 'tip', children: [(0, o.jsx)(i.p, { children: 'Gebruik GitHub Pages voor de productieomgeving van developer-documentatie van teams in de community (zoals Storybook of Docusaurus), tenzij de teams een eigen productieomgeving hebben.' }), (0, o.jsxs)(i.p, { children: ['Gebruik hosting van ICTU voor de productieomgeving van websites zoals ', (0, o.jsx)(i.code, { children: 'nldesignsystem.nl' }), ' en ', (0, o.jsx)(i.code, { children: 'gebruikersonderzoeken.nl' }), ', zodat ze voldoen aan de veiligheidseisen.'] })] })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, o.jsx)(i, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
