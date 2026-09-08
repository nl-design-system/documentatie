'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92447],
 {
  18439(e, t, n) {
   n.d(t, { R: () => s, x: () => a });
   var r = n(30758);
   const i = {},
    o = r.createContext(i);
   function s(e) {
    const t = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), r.createElement(o.Provider, { value: t }, e.children));
   }
  },
  20500(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/testomgeving","title":"Testomgeving","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","source":"@site/docs/project/kwaliteitsaanpak/testomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/testomgeving","permalink":"/project/kwaliteitsaanpak/testomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/testomgeving.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Testomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Testomgeving","sidebar_position":11,"pagination_label":"Testomgeving","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","keywords":["dtap","otap","test"]},"sidebar":"project","previous":{"title":"Internationalisatie en localisatie","permalink":"/project/kwaliteitsaanpak/i18n"},"next":{"title":"Open Source","permalink":"/project/kwaliteitsaanpak/open-source"}}');
   var i = n(86070),
    o = n(18439),
    s = n(59292);
   const a = { title: 'Testomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Testomgeving', sidebar_position: 11, pagination_label: 'Testomgeving', description: 'Branch deployments van GitHub Pull Requests zijn de testomgevingen.', keywords: ['dtap', 'otap', 'test'] },
    l = 'Testomgeving',
    c = {},
    d = [
     { value: 'Branch deployments', id: 'branch-deployments', level: 2 },
     { value: 'Lokale testomgeving', id: 'lokale-testomgeving', level: 2 },
    ];
   function p(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'testomgeving', children: 'Testomgeving' }) }), '\n', (0, i.jsx)(s.f, { purpose: 'lead', children: (0, i.jsx)(t.p, { children: 'Biedt een testomgeving aan voor elke wijziging, zodat het laagdrempelig is om een review te doen van een wijziging.\nLaat ook weten waar in testomgeving je moet zijn, en hoe je de wijzigingen kan testen. Zo maak je samen een beter\nproduct.' }) }), '\n', (0, i.jsx)(t.p, { children: 'De aanbevolen manier is "branch deployments" als testomgeving.' }), '\n', (0, i.jsx)(t.h2, { id: 'branch-deployments', children: 'Branch deployments' }), '\n', (0, i.jsxs)(t.p, { children: ['Gebruik de bestaande ', (0, i.jsx)(t.a, { href: '/vercel/', children: 'Vercel infrastructuur voor NL Design System' }), ' voor het maken van branch deployments voor GitHub Pull Requests, voor projecten waarvan de build een statische website of een Node.js server is.'] }), '\n', (0, i.jsx)(t.p, { children: 'Wanneer iemand een Pull Request maakt, wordt automatisch een testomgeving aangemaakt. De Pull Request ontvangt na enkele minuten automatisch een comment met een linkje naar de testomgeving.' }), '\n', (0, i.jsxs)(t.p, { children: ['Gebruik waar mogelijk infrastructure-as-code om Vercel te configureren, via de ', (0, i.jsx)(t.a, { href: 'https://registry.terraform.io/providers/vercel/vercel/latest/docs', children: 'vercel terraform provider' }), ' in de ', (0, i.jsx)(t.a, { href: 'http://github.com/nl-design-system/terraform', children: 'nl-design-system/terraform repository' }), '.'] }), '\n', (0, i.jsx)(t.h2, { id: 'lokale-testomgeving', children: 'Lokale testomgeving' }), '\n', (0, i.jsxs)(t.p, { children: ['Gebruik de ', (0, i.jsx)(t.code, { children: 'README.md' }), ' om instructies te delen om de testomgeving lokaal op te starten. Dit is handig wanneer branch deployments niet beschikbaar zijn. Documenteer in elk geval:'] }), '\n', (0, i.jsxs)(t.ul, { children: ['\n', (0, i.jsxs)(t.li, { children: ['Vereisten. Bijvoorbeeld installeer Node.js en pmpm of Docker, en gebruik ', (0, i.jsx)(t.code, { children: 'pnpm install' }), '.'] }), '\n', (0, i.jsx)(t.li, { children: 'Configuratie. Bijvoorbeeld welke environment variables nodig zijn voor de testomgeving.' }), '\n', (0, i.jsxs)(t.li, { children: ['Hoe je de testomgeving start. Bijvoorbeeld: ', (0, i.jsx)(t.code, { children: 'pnpm run build' }), ' en ', (0, i.jsx)(t.code, { children: 'pnpm run start' }), '.'] }), '\n'] }), '\n', (0, i.jsxs)(t.p, { children: ['Let op: de ontwikkelomgeving die je start met ', (0, i.jsx)(t.code, { children: 'pnpm run dev' }), ' is niet hetzelfde een testomgeving. De testomgeving moet zoveel mogelijk lijken op de productieomgeving.'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  41534(e, t, n) {
   function r(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r in e)
       if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== t.indexOf(r)) continue;
        n[r] = e[r];
       }
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) ((n = o[r]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   n.d(t, { A: () => r });
  },
  48171(e, t, n) {
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
    var t = (function (e, t) {
     if ('object' != r(e) || !e) return e;
     var n = e[Symbol.toPrimitive];
     if (void 0 !== n) {
      var i = n.call(e, t || 'default');
      if ('object' != r(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == r(t) ? t : t + '';
   }
   function o(e, t, n) {
    return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
   }
   n.d(t, { A: () => o });
  },
  59292(e, t, n) {
   n.d(t, { f: () => r.f });
   var r = n(71544);
  },
  71544(e, t, n) {
   n.d(t, { f: () => p });
   var r = n(48171),
    i = n(41534),
    o = n(86070),
    s = n(13526),
    a = n(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
    }
    return n;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var p = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
     a = e.className,
     c = e.purpose,
     p = (0, i.A)(e, l);
    return (0, o.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: t }, p), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
 },
]);
