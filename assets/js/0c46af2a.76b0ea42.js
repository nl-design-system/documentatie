'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [64652],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
   var o = t(30758);
   const i = {},
    s = o.createContext(i);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => p });
   var o = t(15540),
    i = t(69967),
    s = t(86070),
    r = t(13526),
    a = t(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     (n &&
      (o = o.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, o));
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, o.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     c = e.purpose,
     p = (0, i.A)(e, l);
    return (0, s.jsx)('p', d(d({ className: (0, r.$)('nl-paragraph', (0, o.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: n }, p), {}, { children: 'lead' === c ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   p.displayName = 'Paragraph';
  },
  59292(e, n, t) {
   t.d(n, { f: () => o.f });
   var o = t(56561);
  },
  70994(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => o, toc: () => d }));
   const o = JSON.parse('{"id":"project/kwaliteitsaanpak/continuous-deployment","title":"Continuous Deployment","description":"Uitleg over de CI/CD pipelines van NL Design System","source":"@site/docs/project/kwaliteitsaanpak/continuous-deployment.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/continuous-deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/continuous-deployment.mdx","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"Continuous Deployment","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Continuous Deployment","sidebar_position":22,"pagination_label":"Continuous Deployment","description":"Uitleg over de CI/CD pipelines van NL Design System","keywords":["ci","cd"]},"sidebar":"project","previous":{"title":"Continuous Delivery","permalink":"/project/kwaliteitsaanpak/continuous-delivery"},"next":{"title":"Release notes","permalink":"/project/kwaliteitsaanpak/release-notes"}}');
   var i = t(86070),
    s = t(18439),
    r = t(59292);
   const a = { title: 'Continuous Deployment', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Continuous Deployment', sidebar_position: 22, pagination_label: 'Continuous Deployment', description: 'Uitleg over de CI/CD pipelines van NL Design System', keywords: ['ci', 'cd'] },
    l = 'Continuous Deployment',
    c = {},
    d = [];
   function p(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'continuous-deployment', children: 'Continuous Deployment' }) }), '\n', (0, i.jsx)(r.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'Gebruik continous deployment voor websites, zodat wijzigingen die goedgekeurd zijn direct beschikbaar worden. Door\ncontinuous integration zijn de wijzigingen aan de website altijd van voldoende kwaliteit om direct een release te\ndoen.' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsxs)(n.a, { href: 'http://github.com/actions/deploy-pages', children: [(0, i.jsx)(n.code, { children: 'actions/deploy-pages' }), ' GitHub Action'] }), ' voor de Continuous Deployment pipeline, wanneer je in de ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system', children: 'github.com/nl-design-system' }), ' organisatie werkt.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: ['continuous deployment workflows in ', (0, i.jsx)(n.code, { children: 'publish.yml' }), ' in de example repository'] }), ' als voorbeeld.'] }), '\n', (0, i.jsx)(n.admonition, { title: 'bestaande infrastructuur', type: 'tip', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks#creating-a-repository-webhook', children: 'Koppel de GitHub repository aan een WebHook' }), ' van de Plesk-omgeving van ICTU, voor automatische deployments naar de productieomgeving van ', (0, i.jsx)(n.code, { children: 'nldesignsystem.nl' }), ' en ', (0, i.jsx)(n.code, { children: 'gebruikersonderzoeken.nl' }), '.'] }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
