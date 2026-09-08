'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41407],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => l });
   var r = t(30758);
   const i = {},
    o = r.createContext(i);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
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
  70157(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"project/schrijfwijzer/engels","title":"Engels","description":"Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/engels.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/engels","permalink":"/project/schrijfwijzer/engels","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/engels.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Engels","hide_title":true,"sidebar_label":"Engels","sidebar_position":6,"navigation_order":6,"pagination_label":"Engels","description":"Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Nederlands","permalink":"/project/schrijfwijzer/nederlands"},"next":{"title":"Afbeeldingen","permalink":"/project/schrijfwijzer/afbeeldingen"}}');
   var i = t(86070),
    o = t(18439),
    s = t(59292);
   const l = { title: 'Engels', hide_title: !0, sidebar_label: 'Engels', sidebar_position: 6, navigation_order: 6, pagination_label: 'Engels', description: 'Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    a = 'Richtlijnen voor Engelse teksten',
    c = {},
    d = [
     { value: 'Consistent met API&#39;s', id: 'consistent-met-apis', level: 2 },
     { value: 'Telefoonnummers', id: 'telefoonnummers', level: 2 },
    ];
   function u(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'richtlijnen-voor-engelse-teksten', children: 'Richtlijnen voor Engelse teksten' }) }), '\n', (0, i.jsx)(s.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: "Sommige pagina's op de website zijn Engelstalig, omdat ze bedoeld zijn voor een internationaal publiek. Veel\nsoftwaredocumentatie is ook alleen in het Engels beschikbaar, vanwege de Standard for Public Code." }) }), '\n', (0, i.jsx)(n.h2, { id: 'consistent-met-apis', children: "Consistent met API's" }), '\n', (0, i.jsx)(n.p, { children: 'Schrijf teksten in Amerikaans-Engels, zodat de teksten consistent zijn met code van het design system. Bijvoorbeeld: "color" in plaats van "colour".' }), '\n', (0, i.jsx)(n.h2, { id: 'telefoonnummers', children: 'Telefoonnummers' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de internationale notatie voor telefoonnummers in Engelse teksten, zodat ze ook werken buiten Nederland.' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '+31 234 56 78 90' }), '\n', (0, i.jsx)(n.li, { children: '+31 20 623 45 67' }), '\n', (0, i.jsx)(n.li, { children: '+31 6 53 45 67 89' }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  71544(e, n, t) {
   t.d(n, { f: () => u });
   var r = t(48171),
    i = t(41534),
    o = t(86070),
    s = t(13526),
    l = t(30758),
    a = ['children', 'className', 'purpose'];
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
   function d(e) {
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
   var u = (0, l.forwardRef)(function (e, n) {
    var t = e.children,
     l = e.className,
     c = e.purpose,
     u = (0, i.A)(e, a);
    return (0, o.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), l), ref: n }, u), {}, { children: 'lead' === c ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   u.displayName = 'Paragraph';
  },
 },
]);
