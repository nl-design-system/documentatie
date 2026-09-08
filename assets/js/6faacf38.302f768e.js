'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46463],
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
  55444(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => c, default: () => u, frontMatter: () => s, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/productieomgeving","title":"Productieomgeving","description":"Uitleg over de versiebeheer van code in NL Design System","source":"@site/docs/project/kwaliteitsaanpak/productieomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/productieomgeving.mdx","tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"Productieomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Productieomgeving","sidebar_position":31,"pagination_label":"Productieomgeving","description":"Uitleg over de versiebeheer van code in NL Design System","keywords":["prod","production","productie"]},"sidebar":"project","previous":{"title":"Release notes","permalink":"/project/kwaliteitsaanpak/release-notes"},"next":{"title":"Backup","permalink":"/project/kwaliteitsaanpak/backup"}}');
   var i = t(86070),
    o = t(18439),
    a = t(59292);
   const s = { title: 'Productieomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Productieomgeving', sidebar_position: 31, pagination_label: 'Productieomgeving', description: 'Uitleg over de versiebeheer van code in NL Design System', keywords: ['prod', 'production', 'productie'] },
    c = 'Productieomgeving',
    l = {},
    d = [
     { value: 'Veiligheid', id: 'veiligheid', level: 2 },
     { value: 'Performance', id: 'performance', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'productieomgeving', children: 'Productieomgeving' }) }), '\n', (0, i.jsx)(a.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'Begin nieuwe website-projecten met een minimum viable product in productie krijgen, bij voorkeur al in de eerste\nsprint. Gebruik daarna continuous deployment om vaak en snel deployments te doen naar productie-omgeving.' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Doe ', (0, i.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-deployment/', children: 'continuous deployment' }), ' op basis van de laatste versie in de ', (0, i.jsx)(n.code, { children: 'main' }), ' branch: wanneer de wijziging akkoord is met de reviewers die verplicht zijn voor de ', (0, i.jsx)(n.code, { children: 'main' }), ' branch, dan kan daarna automatisch een deployment gestart worden.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/.github/workflows/publish.yml', children: [(0, i.jsx)(n.code, { children: '.github/workflows/publish.yml' }), ' in de example repository'] }), ' als voorbeeld van continuous deployment.'] }), '\n', (0, i.jsx)(n.h2, { id: 'veiligheid', children: 'Veiligheid' }), '\n', (0, i.jsxs)(n.p, { children: ['De website moet op ', (0, i.jsx)(n.a, { href: 'https://internet.nl/', children: 'internet.nl' }), ' een 100% score halen.'] }), '\n', (0, i.jsx)(n.h2, { id: 'performance', children: 'Performance' }), '\n', (0, i.jsxs)(n.p, { children: ["Voor webpagina's is het het doel voor ", (0, i.jsx)(n.a, { href: 'https://web.dev/articles/fcp', children: 'first contentful paint (FCP)' }), ' performance is 1.8 seconde of sneller.'] }), '\n', (0, i.jsxs)(n.admonition, { title: 'bestaande infrastructuur', type: 'tip', children: [(0, i.jsx)(n.p, { children: 'Gebruik GitHub Pages voor de productieomgeving van developer-documentatie van teams in de community (zoals Storybook of Docusaurus), tenzij de teams een eigen productieomgeving hebben.' }), (0, i.jsxs)(n.p, { children: ['Gebruik hosting van ICTU voor de productieomgeving van websites zoals ', (0, i.jsx)(n.code, { children: 'nldesignsystem.nl' }), ' en ', (0, i.jsx)(n.code, { children: 'gebruikersonderzoeken.nl' }), ', zodat ze voldoen aan de veiligheidseisen.'] })] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  59292(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(71544);
  },
  71544(e, n, t) {
   t.d(n, { f: () => p });
   var r = t(48171),
    i = t(41534),
    o = t(86070),
    a = t(13526),
    s = t(30758),
    c = ['children', 'className', 'purpose'];
   function l(e, n) {
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
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? l(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : l(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, n) {
    var t = e.children,
     s = e.className,
     l = e.purpose,
     p = (0, i.A)(e, c);
    return (0, o.jsx)('p', d(d({ className: (0, a.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === l), s), ref: n }, p), {}, { children: 'lead' === l ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   p.displayName = 'Paragraph';
  },
 },
]);
