"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7932],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => f });
   var r = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : a(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var d = r.createContext({}),
    p = function (e) {
     var n = r.useContext(d),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    s = function (e) {
     var n = p(e.components);
     return r.createElement(d.Provider, { value: n }, e.children);
    },
    c = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    b = r.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      a = e.originalType,
      d = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      c = p(t),
      b = o,
      f = c["".concat(d, ".").concat(b)] || c[b] || u[b] || a;
     return t ? r.createElement(f, i(i({ ref: n }, s), {}, { components: t })) : r.createElement(f, i({ ref: n }, s));
    });
   function f(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var a = t.length,
      i = new Array(a);
     i[0] = b;
     var l = {};
     for (var d in n) hasOwnProperty.call(n, d) && (l[d] = n[d]);
     (l.originalType = e), (l[c] = "string" == typeof e ? e : o), (i[1] = l);
     for (var p = 2; p < a; p++) i[p] = t[p];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   b.displayName = "MDXCreateElement";
  },
  80515: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => i, default: () => u, frontMatter: () => a, metadata: () => l, toc: () => p });
   var r = t(87462),
    o = (t(67294), t(3905));
   const a = { title: "Laad patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Laden", sidebar_position: 5, pagination_label: "Laden", description: "Laad patronen", keywords: ["patronen", "design system", "laden"] },
    i = "Patronen voor laden",
    l = { unversionedId: "voorbeelden/patronen/laden", id: "voorbeelden/patronen/laden", title: "Laad patronen", description: "Laad patronen", source: "@site/docs/voorbeelden/patronen/laden.md", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/laden", permalink: "/en/voorbeelden/patronen/laden", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/laden.md", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Laad patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Laden", sidebar_position: 5, pagination_label: "Laden", description: "Laad patronen", keywords: ["patronen", "design system", "laden"] }, sidebar: "voorbeelden", previous: { title: "Zoeken", permalink: "/en/voorbeelden/patronen/zoeken" }, next: { title: "Foutmeldingen", permalink: "/en/voorbeelden/patronen/formulieren/foutmeldingen" } },
    d = {},
    p = [],
    s = { toc: p },
    c = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(c, (0, r.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "patronen-voor-laden" }, "Patronen voor laden"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
