'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6516],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => s });
   var r = t(30758);
   const i = {},
    o = r.createContext(i);
   function a(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, t) {
   function r(e, n) {
    if (null == e) return {};
    var t,
     r,
     i = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var r in e)
       if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== n.indexOf(r)) continue;
        t[r] = e[r];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) ((t = o[r]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   t.d(n, { A: () => r });
  },
  48171(e, n, t) {
   function r(e) {
    return (
     (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     r(e)
    );
   }
   function i(e) {
    var n = (function (e, n) {
     if ('object' != r(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var i = t.call(e, n || 'default');
      if ('object' != r(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == r(n) ? n : n + '';
   }
   function o(e, n, t) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => o });
  },
  59292(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(71544);
  },
  71544(e, n, t) {
   t.d(n, { f: () => d });
   var r = t(48171),
    i = t(41534),
    o = t(86070),
    a = t(13526),
    s = t(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function u(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var d = (0, s.forwardRef)(function (e, n) {
    var t = e.children,
     s = e.className,
     c = e.purpose,
     d = (0, i.A)(e, l);
    return (0, o.jsx)('p', u(u({ className: (0, a.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: n }, d), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   d.displayName = 'Paragraph';
  },
  87836(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => p, frontMatter: () => s, metadata: () => r, toc: () => u }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/continuous-integration","title":"Continuous Integration","description":"Uitleg over Continuous Integration voor NL Design System","source":"@site/docs/project/kwaliteitsaanpak/continuous-integration.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/continuous-integration","permalink":"/project/kwaliteitsaanpak/continuous-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/continuous-integration.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Continuous Integration","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Continuous Integration","sidebar_position":10,"pagination_label":"Continuous Integration","description":"Uitleg over Continuous Integration voor NL Design System","keywords":["ci"]},"sidebar":"project","previous":{"title":"Broncodekwaliteit","permalink":"/project/kwaliteitsaanpak/broncodekwaliteit"},"next":{"title":"Versiebeheer","permalink":"/project/kwaliteitsaanpak/versiebeheer"}}');
   var i = t(86070),
    o = t(18439),
    a = t(59292);
   const s = { title: 'Continuous Integration', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Continuous Integration', sidebar_position: 10, pagination_label: 'Continuous Integration', description: 'Uitleg over Continuous Integration voor NL Design System', keywords: ['ci'] },
    l = 'Continuous Integration',
    c = {},
    u = [];
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'continuous-integration', children: 'Continuous Integration' }) }), '\n', (0, i.jsx)(a.f, { appearance: 'lead', children: (0, i.jsxs)(n.p, { children: ['Met infrastructuur voor continuous integration zorgen we dat code vaak en snel gemerged kan worden naar de ', (0, i.jsx)(n.code, { children: 'main' }), '\nbranch. Gebruik voor projecten in GitHub de CI/CD pipeline op basis van GitHub Actions.'] }) }), '\n', (0, i.jsxs)(n.p, { children: ['Elke repository met software builds heeft de pipelines vastgelegd in de ', (0, i.jsx)(n.code, { children: '.github/workflows/' }), ' directory.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Voor deze infrastructuur is een template repository beschikbaar, met een voorbeeld van GitHub Actions. Zie daarvoor de ', (0, i.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/.github/workflows', children: [(0, i.jsx)(n.code, { children: '.github/workflows/' }), ' directory van de example repository'] }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik een GitHub Action voor changeset voor continuous delivery. Lees meer op de NL Design System website: ', (0, i.jsx)(n.a, { href: '/handboek/developer/changeset-conventie/', children: 'Versionering: Hoe beheer je pakketversies?' })] }), '\n', (0, i.jsx)(n.p, { children: 'Elke release moet een changelog hebben, en een nieuw versienummer. Voeg deze informatie toe in changeset bestanden, als onderdeel van de pull request met wijzigingen.' }), '\n', (0, i.jsxs)(n.p, { children: ['Voeg een changeset-bestand toe bij elke pull request, die een changelog-entry bevat voor de nieuwe release. Gebruik een GitHub Action om te controleren dat elke Pull Request een changeset bevat. Zie bijvoorbeeld ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/candidate/blob/main/.github/workflows/changeset-status.yml', children: (0, i.jsx)(n.code, { children: 'changeset-status.yml' }) }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik een GitHub Action om een pull request te maken die een release aanmaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik een GitHub Action om met changeset de stappen voor de release uit te voeren:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'bepaal nieuwe versienummers voor alle packages die een nieuwe release krijgen, op basis van de semantic versioning instellingen in de changesets.' }), '\n', (0, i.jsx)(n.li, { children: 'Maak een entry in elke changelog, met de wijzigingen die zijn beschreven in de changeset bestanden.' }), '\n', (0, i.jsx)(n.li, { children: 'maak Git tags aan met de versienummer' }), '\n', (0, i.jsx)(n.li, { children: 'publiceer npm packages in de npm registry' }), '\n', (0, i.jsx)(n.li, { children: 'maak GitHub Releases aan' }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
