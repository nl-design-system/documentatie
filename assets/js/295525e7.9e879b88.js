'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95121],
 {
  18439(e, t, n) {
   n.d(t, { R: () => o, x: () => s });
   var r = n(30758);
   const i = {},
    a = r.createContext(i);
   function o(e) {
    const t = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(a.Provider, { value: t }, e.children));
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
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) ((n = a[r]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
   function a(e, t, n) {
    return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
   }
   n.d(t, { A: () => a });
  },
  54945(e, t, n) {
   (n.r(t), n.d(t, { assets: () => p, contentTitle: () => l, default: () => u, frontMatter: () => s, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"project/kwaliteitsaanpak/sprint-review","title":"Sprint review","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","source":"@site/docs/project/kwaliteitsaanpak/sprint-review.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/sprint-review","permalink":"/project/kwaliteitsaanpak/sprint-review","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/sprint-review.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Sprint review","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sprint review","sidebar_position":12,"pagination_label":"Sprint review","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","keywords":["dtap","otap","test"]},"sidebar":"project","previous":{"title":"Open Source","permalink":"/project/kwaliteitsaanpak/open-source"},"next":{"title":"Toegankelijkheid","permalink":"/project/kwaliteitsaanpak/toegankelijkheid"}}');
   var i = n(86070),
    a = n(18439),
    o = n(59292);
   const s = { title: 'Sprint review', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sprint review', sidebar_position: 12, pagination_label: 'Sprint review', description: 'Branch deployments van GitHub Pull Requests zijn de testomgevingen.', keywords: ['dtap', 'otap', 'test'] },
    l = 'Sprint review',
    p = {},
    c = [{ value: 'Community', id: 'community', level: 2 }];
   function d(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'sprint-review', children: 'Sprint review' }) }), '\n', (0, i.jsx)(o.f, { purpose: 'lead', children: (0, i.jsx)(t.p, { children: 'Presenteer de ontwikkelingen aan de product owner en andere belangrijke stakeholders, aan het eind van elke agile\nsprint. Zorg dat de product owner het resultaat accepteert en je voldoet aan de acceptatiecriteria en de Definition of\nDone.' }) }), '\n', (0, i.jsxs)(t.p, { children: ['Zet de status van een issue op de ', (0, i.jsx)(t.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'backlog' }), ' op "PO acceptance" wanneer je klaar bent. Deel in de GitHub Issue voldoende informatie om een review te doen, zoals instructies voor het testen of een video-opname.'] }), '\n', (0, i.jsxs)(t.p, { children: ['De product owner verandert de status van een issue van "PO acceptance" naar "Done", tenzij er nog meer werk nodig is in een volgende ', (0, i.jsx)(t.a, { href: '/project/kwaliteitsaanpak/agile-sprint/', children: 'sprint' }), '.'] }), '\n', (0, i.jsx)(t.h2, { id: 'community', children: 'Community' }), '\n', (0, i.jsxs)(t.p, { children: [(0, i.jsx)(t.a, { href: '/events/heartbeat/zelf-iets-vertellen/', children: 'Presenteer in de NL Design System Heartbeat' }), ' nieuwe ontwikkelingen die relevant zijn voor de Community, zodat de belangrijkste stakeholders daar op de hoogte zijn. Deel een opname van de presentatie, zodat niemand verplicht is om op een specifieke tijd aanwezig te zijn.'] }), '\n', (0, i.jsxs)(t.p, { children: ['Wanneer het resultaat te vaktechnisch is om te presenteren voor een breed publiek, of je wilt in een interactieve sessie plannen maken voor doorontwikkeling, dan is de ', (0, i.jsx)(t.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ' of de ', (0, i.jsx)(t.a, { href: '/events/design-open-hour/', children: 'Design Open Hour' }), ' mogelijk een betere bijeenkomst om te presenteren.'] })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, a.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  59292(e, t, n) {
   n.d(t, { f: () => r.f });
   var r = n(71544);
  },
  71544(e, t, n) {
   n.d(t, { f: () => d });
   var r = n(48171),
    i = n(41534),
    a = n(86070),
    o = n(13526),
    s = n(30758),
    l = ['children', 'className', 'purpose'];
   function p(e, t) {
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
   function c(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? p(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : p(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var d = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
     s = e.className,
     p = e.purpose,
     d = (0, i.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === p), s), ref: t }, d), {}, { children: 'lead' === p ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   d.displayName = 'Paragraph';
  },
 },
]);
