'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90176],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => o });
   var t = i(30758);
   const s = {},
    a = t.createContext(s);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  98781(e, n, i) {
   (i.r(n), i.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => r, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"handboek/kwaliteitsaanpak/ci-cd","title":"CI/CD","description":"Uitleg over de CI/CD pipelines van NL Design System","source":"@site/docs/handboek/kwaliteitsaanpak/ci-cd.md","sourceDirName":"handboek/kwaliteitsaanpak","slug":"/handboek/kwaliteitsaanpak/ci-cd","permalink":"/handboek/kwaliteitsaanpak/ci-cd","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/kwaliteitsaanpak/ci-cd.md","tags":[],"version":"current","frontMatter":{"title":"CI/CD","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"CI/CD","pagination_label":"CI/CD","description":"Uitleg over de CI/CD pipelines van NL Design System","keywords":["ci","cd"]}}');
   var s = i(86070),
    a = i(18439);
   const r = { title: 'CI/CD', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'CI/CD', pagination_label: 'CI/CD', description: 'Uitleg over de CI/CD pipelines van NL Design System', keywords: ['ci', 'cd'] },
    o = 'Continuous Integration en Continuous Delivery (CI/CD)',
    l = {},
    d = [];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'continuous-integration-en-continuous-delivery-cicd', children: 'Continuous Integration en Continuous Delivery (CI/CD)' }) }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik voor de CI/CD pipeline GitHub Actions.' }), '\n', (0, s.jsx)(n.p, { children: 'GitHub Actions past goed bij de open source samenwerking op basis van de meestgebruikte clouddiensten. GitHub Actions past hier beter bij dan Azure DevOps, omdat het gebruikers beter in staat zijn alle functionaliteit over te nemen wanneer ze een fork maken.' }), '\n', (0, s.jsxs)(n.p, { children: ['Elke repository met software builds heeft de pipelines vastgelegd in de ', (0, s.jsx)(n.code, { children: '.github/workflows/' }), ' directory.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Voor deze infrastructuur is een template repository beschikbaar, met een voorbeeld van GitHub Actions. Zie daarvoor de ', (0, s.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: [(0, s.jsx)(n.code, { children: '.github/workflows/' }), ' directory van de example repository'] }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik een GitHub Action voor changeset voor continuous delivery. Lees meer over: ', (0, s.jsx)(n.a, { href: '/handboek/developer/changesets/', children: 'Versionering: Hoe beheer je pakketversies?' })] }), '\n', (0, s.jsx)(n.p, { children: 'Elke release moet een changelog hebben, en een nieuw versienummer. Voeg deze informatie toe in changeset bestanden, als onderdeel van de pull request met wijzigingen.' }), '\n', (0, s.jsxs)(n.p, { children: ['Voeg een changeset-bestand toe bij elke pull request, die een changelog-entry bevat voor de nieuwe release. Gebruik een GitHub Action om te controleren dat elke Pull Request een changeset bevat. Zie bijvoorbeeld ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/candidate/blob/main/.github/workflows/changeset-status.yml', children: (0, s.jsx)(n.code, { children: 'changeset-status.yml' }) }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik een GitHub Action om een pull request te maken die een release aanmaakt.' }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik een GitHub Action om met changeset de stappen voor de release uit te voeren:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'bepaal nieuwe versienummers voor alle packages die een nieuwe release krijgen, op basis van de semantic versioning instellingen in de changesets.' }), '\n', (0, s.jsx)(n.li, { children: 'Maak een entry in elke changelog, met de wijzigingen die zijn beschreven in de changeset bestanden.' }), '\n', (0, s.jsx)(n.li, { children: 'maak Git tags aan met de versienummer' }), '\n', (0, s.jsx)(n.li, { children: 'publiceer npm packages in de npm registry' }), '\n', (0, s.jsx)(n.li, { children: 'maak GitHub Releases aan' }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
