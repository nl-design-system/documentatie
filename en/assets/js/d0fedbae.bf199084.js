"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16919],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => c, kt: () => f });
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
   var p = r.createContext({}),
    s = function (e) {
     var n = r.useContext(p),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    c = function (e) {
     var n = s(e.components);
     return r.createElement(p.Provider, { value: n }, e.children);
    },
    d = "mdxType",
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
      p = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = s(t),
      b = o,
      f = d["".concat(p, ".").concat(b)] || d[b] || u[b] || a;
     return t ? r.createElement(f, i(i({ ref: n }, c), {}, { components: t })) : r.createElement(f, i({ ref: n }, c));
    });
   function f(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var a = t.length,
      i = new Array(a);
     i[0] = b;
     var l = {};
     for (var p in n) hasOwnProperty.call(n, p) && (l[p] = n[p]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : o), (i[1] = l);
     for (var s = 2; s < a; s++) i[s] = t[s];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   b.displayName = "MDXCreateElement";
  },
  74912: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => i, default: () => u, frontMatter: () => a, metadata: () => l, toc: () => s });
   var r = t(87462),
    o = (t(67294), t(3905));
   const a = { title: "Zoek patroon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zoeken", sidebar_position: 4, pagination_label: "Zoeken", description: "Zoek patroon", keywords: ["patronen", "design system", "zoeken"] },
    i = "Zoeken",
    l = { unversionedId: "voorbeelden/patronen/zoeken", id: "voorbeelden/patronen/zoeken", title: "Zoek patroon", description: "Zoek patroon", source: "@site/docs/voorbeelden/patronen/zoeken.md", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/zoeken", permalink: "/en/voorbeelden/patronen/zoeken", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/zoeken.md", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Zoek patroon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zoeken", sidebar_position: 4, pagination_label: "Zoeken", description: "Zoek patroon", keywords: ["patronen", "design system", "zoeken"] }, sidebar: "voorbeelden", previous: { title: "Estafettemodel", permalink: "/en/voorbeelden/patronen/estafettemodel" }, next: { title: "Laden", permalink: "/en/voorbeelden/patronen/laden" } },
    p = {},
    s = [],
    c = { toc: s },
    d = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(d, (0, r.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "zoeken" }, "Zoeken"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
