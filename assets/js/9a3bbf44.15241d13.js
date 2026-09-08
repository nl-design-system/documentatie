'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [72134],
 {
  18439(e, t, r) {
   r.d(t, { R: () => o, x: () => c });
   var n = r(30758);
   const i = {},
    a = n.createContext(i);
   function o(e) {
    const t = n.useContext(a);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), n.createElement(a.Provider, { value: t }, e.children));
   }
  },
  41534(e, t, r) {
   function n(e, t) {
    if (null == e) return {};
    var r,
     n,
     i = (function (e, t) {
      if (null == e) return {};
      var r = {};
      for (var n in e)
       if ({}.hasOwnProperty.call(e, n)) {
        if (-1 !== t.indexOf(n)) continue;
        r[n] = e[n];
       }
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (n = 0; n < a.length; n++) ((r = a[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
    }
    return i;
   }
   r.d(t, { A: () => n });
  },
  48171(e, t, r) {
   function n(e) {
    return (
     (n =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     n(e)
    );
   }
   function i(e) {
    var t = (function (e, t) {
     if ('object' != n(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var i = r.call(e, t || 'default');
      if ('object' != n(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == n(t) ? t : t + '';
   }
   function a(e, t, r) {
    return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
   }
   r.d(t, { A: () => a });
  },
  59292(e, t, r) {
   r.d(t, { f: () => n.f });
   var n = r(71544);
  },
  71544(e, t, r) {
   r.d(t, { f: () => l });
   var n = r(48171),
    i = r(41534),
    a = r(86070),
    o = r(13526),
    c = r(30758),
    s = ['children', 'className', 'purpose'];
   function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     (t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n));
    }
    return r;
   }
   function p(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? u(Object(r), !0).forEach(function (t) {
         (0, n.A)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : u(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   var l = (0, c.forwardRef)(function (e, t) {
    var r = e.children,
     c = e.className,
     u = e.purpose,
     l = (0, i.A)(e, s);
    return (0, a.jsx)('p', p(p({ className: (0, o.$)('nl-paragraph', (0, n.A)({}, 'nl-paragraph--lead', 'lead' === u), c), ref: t }, l), {}, { children: 'lead' === u ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   l.displayName = 'Paragraph';
  },
  78580(e, t, r) {
   (r.r(t), r.d(t, { assets: () => u, contentTitle: () => s, default: () => d, frontMatter: () => c, metadata: () => n, toc: () => p }));
   const n = JSON.parse('{"id":"project/kwaliteitsaanpak/backup","title":"Backup","description":"Zorg voor voor infrastructuur om een backup te maken en terug te zetten.","source":"@site/docs/project/kwaliteitsaanpak/backup.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/backup","permalink":"/project/kwaliteitsaanpak/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/backup.mdx","tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"title":"Backup","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Backup","pagination_label":"Backup","sidebar_position":32,"description":"Zorg voor voor infrastructuur om een backup te maken en terug te zetten.","keywords":["backup"]},"sidebar":"project","previous":{"title":"Productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving"}}');
   var i = r(86070),
    a = r(18439),
    o = r(59292);
   const c = { title: 'Backup', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Backup', pagination_label: 'Backup', sidebar_position: 32, description: 'Zorg voor voor infrastructuur om een backup te maken en terug te zetten.', keywords: ['backup'] },
    s = 'Backup',
    u = {},
    p = [];
   function l(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'backup', children: 'Backup' }) }), '\n', (0, i.jsx)(o.f, { purpose: 'lead', children: (0, i.jsx)(t.p, { children: 'Wanneer je open source code aanbiedt op publieke infrastructuur, dan is het belangrijk dat je backups hebt waarvan de\nintegriteit in orde is.' }) }), '\n', (0, i.jsx)(t.p, { children: 'Gebruikers investeren tijd en energie in je open source project, en mensen kunnen afhankelijk zijn doorontwikkeling en veiligheidsupdates. Doe iedereen een plezier, en zorg dat er backups zijn die makkelijk teruggezet kunnen worden.' }), '\n', (0, i.jsxs)(t.p, { children: ['Er zijn goede manieren niet afhankelijk te zijn van een backup op je eigen computer. Lees meer hoe dit voor ', (0, i.jsx)(t.a, { href: 'https://github.com/nl-design-system', children: 'github.com/nl-design-system' }), ' werkt: ', (0, i.jsx)(t.a, { href: '/github/#backup', children: 'GitHub Backups' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, a.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
