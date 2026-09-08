'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74078],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => a });
   var i = t(30758);
   const r = {},
    o = i.createContext(r);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, t) {
   function i(e, n) {
    if (null == e) return {};
    var t,
     i,
     r = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var i in e)
       if ({}.hasOwnProperty.call(e, i)) {
        if (-1 !== n.indexOf(i)) continue;
        t[i] = e[i];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (i = 0; i < o.length; i++) ((t = o[i]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   t.d(n, { A: () => i });
  },
  48171(e, n, t) {
   function i(e) {
    return (
     (i =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     i(e)
    );
   }
   function r(e) {
    var n = (function (e, n) {
     if ('object' != i(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var r = t.call(e, n || 'default');
      if ('object' != i(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == i(n) ? n : n + '';
   }
   function o(e, n, t) {
    return ((n = r(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => o });
  },
  59292(e, n, t) {
   t.d(n, { f: () => i.f });
   var i = t(71544);
  },
  71544(e, n, t) {
   t.d(n, { f: () => u });
   var i = t(48171),
    r = t(41534),
    o = t(86070),
    s = t(13526),
    a = t(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i));
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var u = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     c = e.purpose,
     u = (0, r.A)(e, l);
    return (0, o.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: n }, u), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   u.displayName = 'Paragraph';
  },
  88024(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/continuous-delivery","title":"Continuous Delivery","description":"Uitleg over de CI/CD pipelines van NL Design System","source":"@site/docs/project/kwaliteitsaanpak/continuous-delivery.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/continuous-delivery","permalink":"/project/kwaliteitsaanpak/continuous-delivery","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/continuous-delivery.mdx","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"Continuous Delivery","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Continuous Delivery","sidebar_position":22,"pagination_label":"Continuous Delivery","description":"Uitleg over de CI/CD pipelines van NL Design System","keywords":["ci","cd"]},"sidebar":"project","previous":{"title":"Software supply chain","permalink":"/project/kwaliteitsaanpak/supply-chain"},"next":{"title":"Continuous Deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment"}}');
   var r = t(86070),
    o = t(18439),
    s = t(59292);
   const a = { title: 'Continuous Delivery', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Continuous Delivery', sidebar_position: 22, pagination_label: 'Continuous Delivery', description: 'Uitleg over de CI/CD pipelines van NL Design System', keywords: ['ci', 'cd'] },
    l = 'Continuous Delivery',
    c = {},
    d = [{ value: 'Release notes bij elke wijzigingen', id: 'release-notes-bij-elke-wijzigingen', level: 2 }];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'continuous-delivery', children: 'Continuous Delivery' }) }), '\n', (0, r.jsx)(s.f, { purpose: 'lead', children: (0, r.jsxs)(n.p, { children: ['Zorg dat op elk moment een software release gedaan kan worden van de laatste versie in de ', (0, r.jsx)(n.code, { children: 'main' }), ' branch, zodat\nverbeteringen snel beschikbaar worden voor gebruikers. Gebruik semantic versioning tools om automatisch het volgende\nversienummer te bepalen.'] }) }), '\n', (0, r.jsxs)(n.p, { children: ['De kwaliteit van de code in de ', (0, r.jsx)(n.code, { children: 'main' }), ' branch is in principe al voldoende om een software release te doen wanneer je code reviews doet en ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-integration/', children: 'continuous integration' }), ' gebruikt.'] }), '\n', (0, r.jsx)(n.h2, { id: 'release-notes-bij-elke-wijzigingen', children: 'Release notes bij elke wijzigingen' }), '\n', (0, r.jsxs)(n.p, { children: ['Schrijf ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/release-notes/', children: 'release notes' }), ' voor elke wijziging die noemenswaardige impact heeft op gebruikers van de software of de website.'] }), '\n', (0, r.jsx)(n.p, { children: 'GitHub Actions past goed bij de open source samenwerking op basis van de meestgebruikte clouddiensten. GitHub Actions past hier beter bij dan Azure DevOps, omdat het gebruikers beter in staat zijn alle functionaliteit over te nemen wanneer ze een fork maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Elke repository met software builds heeft de pipelines vastgelegd in de ', (0, r.jsx)(n.code, { children: '.github/workflows/' }), ' directory.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik een GitHub Action voor changeset voor continuous delivery. Lees meer op de NL Design System website: ', (0, r.jsx)(n.a, { href: '/handboek/developer/changeset-conventie/', children: 'Versionering: Hoe beheer je pakketversies?' })] }), '\n', (0, r.jsx)(n.p, { children: 'Elke release moet een changelog hebben, en een nieuw versienummer. Voeg deze informatie toe in changeset bestanden, als onderdeel van de pull request met wijzigingen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voeg een changeset-bestand toe bij elke pull request, die een changelog-entry bevat voor de nieuwe release. Gebruik een GitHub Action om te controleren dat elke Pull Request een changeset bevat. Zie bijvoorbeeld ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/candidate/blob/main/.github/workflows/changeset-status.yml', children: (0, r.jsx)(n.code, { children: 'changeset-status.yml' }) }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik een GitHub Action om een pull request te maken die een release aanmaakt.' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik een GitHub Action om met changeset de stappen voor de release uit te voeren:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'bepaal nieuwe versienummers voor alle packages die een nieuwe release krijgen, op basis van de semantic versioning instellingen in de changesets.' }), '\n', (0, r.jsx)(n.li, { children: 'Maak een entry in elke changelog, met de wijzigingen die zijn beschreven in de changeset bestanden.' }), '\n', (0, r.jsx)(n.li, { children: 'maak Git tags aan met de versienummer' }), '\n', (0, r.jsx)(n.li, { children: 'publiceer npm packages in de npm registry' }), '\n', (0, r.jsx)(n.li, { children: 'maak GitHub Releases aan' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: ['continuous delivery workflows in ', (0, r.jsx)(n.code, { children: 'publish.yml' }), ' in de example repository'] }), ' als voorbeeld. Samen met de ', (0, r.jsx)(n.code, { children: '.changeset/' }), ' directory en de ', (0, r.jsx)(n.code, { children: '@changesets/cli' }), ' scripts in ', (0, r.jsx)(n.code, { children: 'package.json' }), ' is dit alles dat je nodig hebt om continuous delivery in te stellen.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
