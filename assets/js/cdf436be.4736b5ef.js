"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7961],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => f });
   var r = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
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
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function a(e, n) {
    if (null == e) return {};
    var t,
     r,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       o = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var u = r.createContext({}),
    d = function (e) {
     var n = r.useContext(u),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return r.createElement(u.Provider, { value: n }, e.children);
    },
    s = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    p = r.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      i = e.originalType,
      u = e.parentName,
      m = a(e, ["components", "mdxType", "originalType", "parentName"]),
      s = d(t),
      p = o,
      f = s["".concat(u, ".").concat(p)] || s[p] || c[p] || i;
     return t ? r.createElement(f, l(l({ ref: n }, m), {}, { components: t })) : r.createElement(f, l({ ref: n }, m));
    });
   function f(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var i = t.length,
      l = new Array(i);
     l[0] = p;
     var a = {};
     for (var u in n) hasOwnProperty.call(n, u) && (a[u] = n[u]);
     (a.originalType = e), (a[s] = "string" == typeof e ? e : o), (l[1] = a);
     for (var d = 2; d < i; d++) l[d] = t[d];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  52156: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => l, default: () => c, frontMatter: () => i, metadata: () => a, toc: () => d });
   var r = t(87462),
    o = (t(67294), t(3905));
   const i = { title: "Foutmeldingen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Foutmeldingen", sidebar_position: 1, pagination_label: "Foutmeldingen", description: "Foutmeldingen in formulieren", keywords: ["patronen", "design system", "foutmeldinge", "formulieren"] },
    l = "Foutmeldingen in formulieren",
    a = { unversionedId: "voorbeelden/patronen/formulieren/foutmeldingen", id: "voorbeelden/patronen/formulieren/foutmeldingen", title: "Foutmeldingen", description: "Foutmeldingen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/foutmeldingen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/foutmeldingen", permalink: "/voorbeelden/patronen/formulieren/foutmeldingen", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/foutmeldingen.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Foutmeldingen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Foutmeldingen", sidebar_position: 1, pagination_label: "Foutmeldingen", description: "Foutmeldingen in formulieren", keywords: ["patronen", "design system", "foutmeldinge", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Laden", permalink: "/voorbeelden/patronen/laden" }, next: { title: "Adres uitvragen", permalink: "/voorbeelden/patronen/formulieren/adres-uitvragen" } },
    u = {},
    d = [],
    m = { toc: d },
    s = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(s, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "foutmeldingen-in-formulieren" }, "Foutmeldingen in formulieren"));
   }
   c.isMDXComponent = !0;
  },
 },
]);
