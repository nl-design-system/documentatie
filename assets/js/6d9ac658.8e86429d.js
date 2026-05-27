'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14079],
 {
  8353(e, n, i) {
   (i.r(n), i.d(n, { assets: () => l, contentTitle: () => o, default: () => h, frontMatter: () => d, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/supply-chain","title":"Software supply chain","description":"Uitleg over de kwaliteitsaanpak voor de software supply chain van NL Design System.","source":"@site/docs/project/kwaliteitsaanpak/supply-chain.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/supply-chain","permalink":"/project/kwaliteitsaanpak/supply-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/supply-chain.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Software supply chain","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Software supply chain","sidebar_position":14,"pagination_label":"Software supply chain","description":"Uitleg over de kwaliteitsaanpak voor de software supply chain van NL Design System.","keywords":["dependencies","deveDependencies","peerDependencies"]},"sidebar":"project","previous":{"title":"Definition of Done","permalink":"/project/kwaliteitsaanpak/definition-of-done"},"next":{"title":"Continuous Delivery","permalink":"/project/kwaliteitsaanpak/continuous-delivery"}}');
   var t = i(86070),
    s = i(18439),
    a = i(46447);
   const d = { title: 'Software supply chain', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Software supply chain', sidebar_position: 14, pagination_label: 'Software supply chain', description: 'Uitleg over de kwaliteitsaanpak voor de software supply chain van NL Design System.', keywords: ['dependencies', 'deveDependencies', 'peerDependencies'] },
    o = 'Software supply chain',
    l = {},
    c = [
     { value: 'Veiligheid van dependencies', id: 'veiligheid-van-dependencies', level: 2 },
     { value: 'Controleer updates', id: 'controleer-updates', level: 2 },
     { value: 'Controleer wijzigingen', id: 'controleer-wijzigingen', level: 2 },
     { value: 'Beperk de rechten', id: 'beperk-de-rechten', level: 2 },
     { value: 'Bekende kwetsbaarheden vermijden en oplossen', id: 'bekende-kwetsbaarheden-vermijden-en-oplossen', level: 2 },
     { value: 'Geen runtime dependencies', id: 'geen-runtime-dependencies', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'software-supply-chain', children: 'Software supply chain' }) }), '\n', (0, t.jsx)(a.fz, { lead: !0, children: (0, t.jsx)(n.p, { children: "Beperk de risico's bij het werken met externe software en libraries, door alle wijzigingen in dependencies te\ncontroleren en in te grijpen wanneer nieuwe kwetsbaarheden bekend zijn." }) }), '\n', (0, t.jsx)(n.h2, { id: 'veiligheid-van-dependencies', children: 'Veiligheid van dependencies' }), '\n', (0, t.jsx)(n.p, { children: 'Vermijd installeren van onveilige dependencies. Wanneer kan dit gebeuren?' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Je installeert een nieuwe dependency, die onveilig is.' }), '\n', (0, t.jsx)(n.li, { children: 'Je installeert in een update die onveilig is.' }), '\n', (0, t.jsx)(n.li, { children: 'Je installeert een bepaald versienummer, waarvan de code stiekem achteraf is aangepast.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Een dependency kan op meerdere manieren een onveilig zijn, bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De dependency voert een aanval uit tijdens de installatie.' }), '\n', (0, t.jsxs)(n.li, { children: ['De dependency voert een aanval uit in de ', (0, t.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-integration/', children: 'continuous integration' }), ' of ', (0, t.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-delivery/', children: 'continuous delivery' }), ' pipeline.'] }), '\n', (0, t.jsx)(n.li, { children: 'De dependency voert een aanval uit tijdens het uitvoeren van scripts door developers.' }), '\n', (0, t.jsx)(n.li, { children: 'De dependency voert een aanval uit tijdens het uitvoeren van scripts in productie.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'controleer-updates', children: 'Controleer updates' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik exacte versienummers voor dependencies. Dus niet "versie 9 of nieuwer" of "versie 4.9.3 of hoger, zolang het maar begint met \'4.9\'":' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-json', children: '{\n  "devDependencies": {\n    "eslint": "^9.0.0",\n    "typescript": "~4.9.3"\n  }\n}\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Wel goed:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-json', children: '{\n  "devDependencies": {\n    "eslint": "9.0.0",\n    "typescript": "4.9.3"\n  }\n}\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Updates installeer je dan zelf, en wijzigingen aan dependencies gaan dan via de gebruikelijke controles.' }), '\n', (0, t.jsx)(n.h2, { id: 'controleer-wijzigingen', children: 'Controleer wijzigingen' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik package locks en accepteer alleen wijzigingen aan dependencies van vertrouwde bronnen. Je kunt ', (0, t.jsxs)(n.a, { href: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners', children: ['in GitHub ', (0, t.jsx)(n.code, { children: 'CODEOWNERS' }), ' gebruiken'] }), ' om wijzigingen aan dependencies verplicht te laten reviewen door iemand met de juiste ervaring, door bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'pnpm-lock.yaml' }), ' een code owner te geven.'] }), '\n', (0, t.jsx)(n.h2, { id: 'beperk-de-rechten', children: 'Beperk de rechten' }), '\n', (0, t.jsxs)(n.p, { children: ['Voer geen scripts ', (0, t.jsx)(n.code, { children: 'postinstall' }), ' scripts uit met npm, pnpm of yarn. Gebruik ', (0, t.jsx)(n.code, { children: 'ignore-scripts=true' }), ' in ', (0, t.jsx)(n.code, { children: '.npmrc' }), ' om standaard lifecycle scripts te negeren. Je kunt ook ', (0, t.jsx)(n.code, { children: 'npm --ignore-scripts' }), ', ', (0, t.jsx)(n.code, { children: 'pnpm --ignore-scripts' }), ' of ', (0, t.jsx)(n.code, { children: 'yarn --ignore-scripts' }), ', maar het risico is groot dat dit een keer wordt vergeten.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Stel geen secrets en environment variables beschikbaar, in CI/CD pipelines zoals GitHub Actions, wanneer het nog niet nodig is. Bijvoorbeeld: eerst ', (0, t.jsx)(n.code, { children: 'install' }), ' zonder access tokens, en pas bij ', (0, t.jsx)(n.code, { children: 'release' }), ' met access tokens met schrijfrechten naar Git, container registries en package registries.'] }), '\n', (0, t.jsx)(n.h2, { id: 'bekende-kwetsbaarheden-vermijden-en-oplossen', children: 'Bekende kwetsbaarheden vermijden en oplossen' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik ', (0, t.jsx)(n.code, { children: 'pnpm audit' }), ' in de Continuous Integration pipeline om te voorkomen dat ', (0, t.jsx)(n.code, { children: 'pnpm install' }), ' wordt uitgevoerd wanneer er critical vulnerabilities zijn.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Controleer periodiek in ', (0, t.jsx)(n.a, { href: 'https://docs.github.com/en/code-security/concepts/supply-chain-security/about-dependabot-alerts', children: 'GitHub Dependabot alerts' }), ' of er kwetsbaarheden bekend zijn waarvoor je actie moet ondernemen.'] }), '\n', (0, t.jsx)(n.h2, { id: 'geen-runtime-dependencies', children: 'Geen runtime dependencies' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Gebruik ', (0, t.jsx)(n.code, { children: 'pnpm install' }), ' alleen in de buid pipeline, niet tijdens het uitvoeren van de software.'] }), '\n', (0, t.jsx)(n.li, { children: 'Installeer dependencies via npm, in plaats van bestanden inladen via een CDN.' }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/handboek/developer/cdn/', children: 'Wanneer een CDN gebruiken nodig is' }), ', gebruik dan in elk geval "version pinning" en bij voorkeur ook Subresource Integrity (SRI).'] }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => d });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
 },
]);
