'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6516],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
   var i = t(30758);
   const o = {},
    s = i.createContext(o);
   function r(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  86689(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/continuous-integration","title":"Continuous Integration","description":"Uitleg over Continuous Integration voor NL Design System","source":"@site/docs/project/kwaliteitsaanpak/continuous-integration.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/continuous-integration","permalink":"/project/kwaliteitsaanpak/continuous-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/continuous-integration.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Continuous Integration","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Continuous Integration","sidebar_position":10,"pagination_label":"Continuous Integration","description":"Uitleg over Continuous Integration voor NL Design System","keywords":["ci"]},"sidebar":"project","previous":{"title":"Broncodekwaliteit","permalink":"/project/kwaliteitsaanpak/broncodekwaliteit"},"next":{"title":"Versiebeheer","permalink":"/project/kwaliteitsaanpak/versiebeheer"}}');
   var o = t(86070),
    s = t(18439),
    r = t(46447);
   const a = { title: 'Continuous Integration', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Continuous Integration', sidebar_position: 10, pagination_label: 'Continuous Integration', description: 'Uitleg over Continuous Integration voor NL Design System', keywords: ['ci'] },
    l = 'Continuous Integration',
    c = {},
    d = [];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'continuous-integration', children: 'Continuous Integration' }) }), '\n', (0, o.jsx)(r.fz, { appearance: 'lead', children: (0, o.jsxs)(n.p, { children: ['Met infrastructuur voor continuous integration zorgen we dat code vaak en snel gemerged kan worden naar de ', (0, o.jsx)(n.code, { children: 'main' }), '\nbranch. Gebruik voor projecten in GitHub de CI/CD pipeline op basis van GitHub Actions.'] }) }), '\n', (0, o.jsxs)(n.p, { children: ['Elke repository met software builds heeft de pipelines vastgelegd in de ', (0, o.jsx)(n.code, { children: '.github/workflows/' }), ' directory.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Voor deze infrastructuur is een template repository beschikbaar, met een voorbeeld van GitHub Actions. Zie daarvoor de ', (0, o.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: [(0, o.jsx)(n.code, { children: '.github/workflows/' }), ' directory van de example repository'] }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik een GitHub Action voor changeset voor continuous delivery. Lees meer op de NL Design System website: ', (0, o.jsx)(n.a, { href: '/handboek/developer/changeset-conventie/', children: 'Versionering: Hoe beheer je pakketversies?' })] }), '\n', (0, o.jsx)(n.p, { children: 'Elke release moet een changelog hebben, en een nieuw versienummer. Voeg deze informatie toe in changeset bestanden, als onderdeel van de pull request met wijzigingen.' }), '\n', (0, o.jsxs)(n.p, { children: ['Voeg een changeset-bestand toe bij elke pull request, die een changelog-entry bevat voor de nieuwe release. Gebruik een GitHub Action om te controleren dat elke Pull Request een changeset bevat. Zie bijvoorbeeld ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/candidate/blob/main/.github/workflows/changeset-status.yml', children: (0, o.jsx)(n.code, { children: 'changeset-status.yml' }) }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik een GitHub Action om een pull request te maken die een release aanmaakt.' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik een GitHub Action om met changeset de stappen voor de release uit te voeren:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'bepaal nieuwe versienummers voor alle packages die een nieuwe release krijgen, op basis van de semantic versioning instellingen in de changesets.' }), '\n', (0, o.jsx)(n.li, { children: 'Maak een entry in elke changelog, met de wijzigingen die zijn beschreven in de changeset bestanden.' }), '\n', (0, o.jsx)(n.li, { children: 'maak Git tags aan met de versienummer' }), '\n', (0, o.jsx)(n.li, { children: 'publiceer npm packages in de npm registry' }), '\n', (0, o.jsx)(n.li, { children: 'maak GitHub Releases aan' }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
