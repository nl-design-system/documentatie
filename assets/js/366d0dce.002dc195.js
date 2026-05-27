'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74078],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => a });
   var t = i(30758);
   const s = {},
    o = t.createContext(s);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  44933(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/continuous-delivery","title":"Continuous Delivery","description":"Uitleg over de CI/CD pipelines van NL Design System","source":"@site/docs/project/kwaliteitsaanpak/continuous-delivery.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/continuous-delivery","permalink":"/project/kwaliteitsaanpak/continuous-delivery","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/continuous-delivery.mdx","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"Continuous Delivery","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Continuous Delivery","sidebar_position":22,"pagination_label":"Continuous Delivery","description":"Uitleg over de CI/CD pipelines van NL Design System","keywords":["ci","cd"]},"sidebar":"project","previous":{"title":"Software supply chain","permalink":"/project/kwaliteitsaanpak/supply-chain"},"next":{"title":"Continuous Deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment"}}');
   var s = i(86070),
    o = i(18439),
    r = i(46447);
   const a = { title: 'Continuous Delivery', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Continuous Delivery', sidebar_position: 22, pagination_label: 'Continuous Delivery', description: 'Uitleg over de CI/CD pipelines van NL Design System', keywords: ['ci', 'cd'] },
    l = 'Continuous Delivery',
    d = {},
    c = [{ value: 'Release notes bij elke wijzigingen', id: 'release-notes-bij-elke-wijzigingen', level: 2 }];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'continuous-delivery', children: 'Continuous Delivery' }) }), '\n', (0, s.jsx)(r.fz, { lead: !0, children: (0, s.jsxs)(n.p, { children: ['Zorg dat op elk moment een software release gedaan kan worden van de laatste versie in de ', (0, s.jsx)(n.code, { children: 'main' }), ' branch, zodat\nverbeteringen snel beschikbaar worden voor gebruikers. Gebruik semantic versioning tools om automatisch het volgende\nversienummer te bepalen.'] }) }), '\n', (0, s.jsxs)(n.p, { children: ['De kwaliteit van de code in de ', (0, s.jsx)(n.code, { children: 'main' }), ' branch is in principe al voldoende om een software release te doen wanneer je code reviews doet en ', (0, s.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-integration/', children: 'continuous integration' }), ' gebruikt.'] }), '\n', (0, s.jsx)(n.h2, { id: 'release-notes-bij-elke-wijzigingen', children: 'Release notes bij elke wijzigingen' }), '\n', (0, s.jsxs)(n.p, { children: ['Schrijf ', (0, s.jsx)(n.a, { href: '/project/kwaliteitsaanpak/release-notes/', children: 'release notes' }), ' voor elke wijziging die noemenswaardige impact heeft op gebruikers van de software of de website.'] }), '\n', (0, s.jsx)(n.p, { children: 'GitHub Actions past goed bij de open source samenwerking op basis van de meestgebruikte clouddiensten. GitHub Actions past hier beter bij dan Azure DevOps, omdat het gebruikers beter in staat zijn alle functionaliteit over te nemen wanneer ze een fork maken.' }), '\n', (0, s.jsxs)(n.p, { children: ['Elke repository met software builds heeft de pipelines vastgelegd in de ', (0, s.jsx)(n.code, { children: '.github/workflows/' }), ' directory.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik een GitHub Action voor changeset voor continuous delivery. Lees meer op de NL Design System website: ', (0, s.jsx)(n.a, { href: '/handboek/developer/changesets/', children: 'Versionering: Hoe beheer je pakketversies?' })] }), '\n', (0, s.jsx)(n.p, { children: 'Elke release moet een changelog hebben, en een nieuw versienummer. Voeg deze informatie toe in changeset bestanden, als onderdeel van de pull request met wijzigingen.' }), '\n', (0, s.jsxs)(n.p, { children: ['Voeg een changeset-bestand toe bij elke pull request, die een changelog-entry bevat voor de nieuwe release. Gebruik een GitHub Action om te controleren dat elke Pull Request een changeset bevat. Zie bijvoorbeeld ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/candidate/blob/main/.github/workflows/changeset-status.yml', children: (0, s.jsx)(n.code, { children: 'changeset-status.yml' }) }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik een GitHub Action om een pull request te maken die een release aanmaakt.' }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik een GitHub Action om met changeset de stappen voor de release uit te voeren:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'bepaal nieuwe versienummers voor alle packages die een nieuwe release krijgen, op basis van de semantic versioning instellingen in de changesets.' }), '\n', (0, s.jsx)(n.li, { children: 'Maak een entry in elke changelog, met de wijzigingen die zijn beschreven in de changeset bestanden.' }), '\n', (0, s.jsx)(n.li, { children: 'maak Git tags aan met de versienummer' }), '\n', (0, s.jsx)(n.li, { children: 'publiceer npm packages in de npm registry' }), '\n', (0, s.jsx)(n.li, { children: 'maak GitHub Releases aan' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik de ', (0, s.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: ['continuous delivery workflows in ', (0, s.jsx)(n.code, { children: 'publish.yml' }), ' in de example repository'] }), ' als voorbeeld. Samen met de ', (0, s.jsx)(n.code, { children: '.changeset/' }), ' directory en de ', (0, s.jsx)(n.code, { children: '@changesets/cli' }), ' scripts in ', (0, s.jsx)(n.code, { children: 'package.json' }), ' is dit alles dat je nodig hebt om continuous delivery in te stellen.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
