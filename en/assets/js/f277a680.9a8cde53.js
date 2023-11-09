"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [47426],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => u });
   var r = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function o(e, n) {
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
      ? o(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : o(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function c(e, n) {
    if (null == e) return {};
    var t,
     r,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var s = r.createContext({}),
    l = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    m = function (e) {
     var n = l(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    d = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      m = c(e, ["components", "mdxType", "originalType", "parentName"]),
      g = l(t),
      d = a,
      u = g["".concat(s, ".").concat(d)] || g[d] || p[d] || o;
     return t ? r.createElement(u, i(i({ ref: n }, m), {}, { components: t })) : r.createElement(u, i({ ref: n }, m));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var o = t.length,
      i = new Array(o);
     i[0] = d;
     var c = {};
     for (var s in n) hasOwnProperty.call(n, s) && (c[s] = n[s]);
     (c.originalType = e), (c[g] = "string" == typeof e ? e : a), (i[1] = c);
     for (var l = 2; l < o; l++) i[l] = t[l];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   d.displayName = "MDXCreateElement";
  },
  61441: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => i, default: () => p, frontMatter: () => o, metadata: () => c, toc: () => l });
   var r = t(87462),
    a = (t(67294), t(3905));
   const o = { title: "Naamgeving", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Naamgeving", sidebar_position: 2, pagination_label: "Naamgeving", description: "Naamgeving voor componenten, attributen en variaties", keywords: ["design token", "design tokens", "naamgeving"] },
    i = void 0,
    c = { unversionedId: "meedoen/naamgeving", id: "meedoen/naamgeving", title: "Naamgeving", description: "Naamgeving voor componenten, attributen en variaties", source: "@site/docs/meedoen/naamgeving.mdx", sourceDirName: "meedoen", slug: "/meedoen/naamgeving", permalink: "/en/meedoen/naamgeving", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/naamgeving.mdx", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Naamgeving", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Naamgeving", sidebar_position: 2, pagination_label: "Naamgeving", description: "Naamgeving voor componenten, attributen en variaties", keywords: ["design token", "design tokens", "naamgeving"] } },
    s = {},
    l = [],
    m = { toc: l },
    g = "wrapper";
   function p(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(g, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "naamgeving-voor-componenten-attributen-en-variaties" }, "Naamgeving voor componenten, attributen en variaties"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
