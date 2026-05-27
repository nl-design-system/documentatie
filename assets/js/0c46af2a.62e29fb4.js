'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [64652],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => r });
   var o = t(30758);
   const i = {},
    s = o.createContext(i);
   function a(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  35697(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"project/kwaliteitsaanpak/continuous-deployment","title":"Continuous Deployment","description":"Uitleg over de CI/CD pipelines van NL Design System","source":"@site/docs/project/kwaliteitsaanpak/continuous-deployment.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/continuous-deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/continuous-deployment.mdx","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"Continuous Deployment","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Continuous Deployment","sidebar_position":22,"pagination_label":"Continuous Deployment","description":"Uitleg over de CI/CD pipelines van NL Design System","keywords":["ci","cd"]},"sidebar":"project","previous":{"title":"Continuous Delivery","permalink":"/project/kwaliteitsaanpak/continuous-delivery"},"next":{"title":"Release notes","permalink":"/project/kwaliteitsaanpak/release-notes"}}');
   var i = t(86070),
    s = t(18439),
    a = t(46447);
   const r = { title: 'Continuous Deployment', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Continuous Deployment', sidebar_position: 22, pagination_label: 'Continuous Deployment', description: 'Uitleg over de CI/CD pipelines van NL Design System', keywords: ['ci', 'cd'] },
    l = 'Continuous Deployment',
    d = {},
    c = [];
   function p(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'continuous-deployment', children: 'Continuous Deployment' }) }), '\n', (0, i.jsx)(a.fz, { lead: !0, children: (0, i.jsx)(n.p, { children: 'Gebruik continous deployment voor websites, zodat wijzigingen die goedgekeurd zijn direct beschikbaar worden. Door\ncontinuous integration zijn de wijzigingen aan de website altijd van voldoende kwaliteit om direct een release te\ndoen.' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsxs)(n.a, { href: 'http://github.com/actions/deploy-pages', children: [(0, i.jsx)(n.code, { children: 'actions/deploy-pages' }), ' GitHub Action'] }), ' voor de Continuous Deployment pipeline, wanneer je in de ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system', children: 'github.com/nl-design-system' }), ' organisatie werkt.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: ['continuous deployment workflows in ', (0, i.jsx)(n.code, { children: 'publish.yml' }), ' in de example repository'] }), ' als voorbeeld.'] }), '\n', (0, i.jsx)(n.admonition, { title: 'bestaande infrastructuur', type: 'tip', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks#creating-a-repository-webhook', children: 'Koppel de GitHub repository aan een WebHook' }), ' van de Plesk-omgeving van ICTU, voor automatische deployments naar de productieomgeving van ', (0, i.jsx)(n.code, { children: 'nldesignsystem.nl' }), ' en ', (0, i.jsx)(n.code, { children: 'gebruikersonderzoeken.nl' }), '.'] }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
