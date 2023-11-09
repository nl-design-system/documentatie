"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22758],
 {
  3905: (e, r, n) => {
   n.d(r, { Zo: () => d, kt: () => m });
   var t = n(67294);
   function o(e, r, n) {
    return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = n), e;
   }
   function i(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     r &&
      (t = t.filter(function (r) {
       return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, t);
    }
    return n;
   }
   function a(e) {
    for (var r = 1; r < arguments.length; r++) {
     var n = null != arguments[r] ? arguments[r] : {};
     r % 2
      ? i(Object(n), !0).forEach(function (r) {
         o(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (r) {
         Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
    }
    return e;
   }
   function l(e, r) {
    if (null == e) return {};
    var n,
     t,
     o = (function (e, r) {
      if (null == e) return {};
      var n,
       t,
       o = {},
       i = Object.keys(e);
      for (t = 0; t < i.length; t++) (n = i[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, r);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (t = 0; t < i.length; t++) (n = i[t]), r.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var s = t.createContext({}),
    u = function (e) {
     var r = t.useContext(s),
      n = r;
     return e && (n = "function" == typeof e ? e(r) : a(a({}, r), e)), n;
    },
    d = function (e) {
     var r = u(e.components);
     return t.createElement(s.Provider, { value: r }, e.children);
    },
    c = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var r = e.children;
      return t.createElement(t.Fragment, {}, r);
     },
    },
    f = t.forwardRef(function (e, r) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      d = l(e, ["components", "mdxType", "originalType", "parentName"]),
      c = u(n),
      f = o,
      m = c["".concat(s, ".").concat(f)] || c[f] || p[f] || i;
     return n ? t.createElement(m, a(a({ ref: r }, d), {}, { components: n })) : t.createElement(m, a({ ref: r }, d));
    });
   function m(e, r) {
    var n = arguments,
     o = r && r.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = f;
     var l = {};
     for (var s in r) hasOwnProperty.call(r, s) && (l[s] = r[s]);
     (l.originalType = e), (l[c] = "string" == typeof e ? e : o), (a[1] = l);
     for (var u = 2; u < i; u++) a[u] = n[u];
     return t.createElement.apply(null, a);
    }
    return t.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  88438: (e, r, n) => {
   n.r(r), n.d(r, { assets: () => s, contentTitle: () => a, default: () => p, frontMatter: () => i, metadata: () => l, toc: () => u });
   var t = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Adres uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Adres uitvragen", sidebar_position: 2, pagination_label: "Adres uitvragen", description: "Adres uitvragen in formulieren", keywords: ["patronen", "design system", "adres uitvragen", "formulieren"] },
    a = "Adres uitvragen in formulieren",
    l = { unversionedId: "voorbeelden/patronen/formulieren/adres-uitvragen", id: "voorbeelden/patronen/formulieren/adres-uitvragen", title: "Adres uitvragen", description: "Adres uitvragen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/adres-uitvragen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/adres-uitvragen", permalink: "/voorbeelden/patronen/formulieren/adres-uitvragen", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/adres-uitvragen.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Adres uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Adres uitvragen", sidebar_position: 2, pagination_label: "Adres uitvragen", description: "Adres uitvragen in formulieren", keywords: ["patronen", "design system", "adres uitvragen", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Foutmeldingen", permalink: "/voorbeelden/patronen/formulieren/foutmeldingen" }, next: { title: "Geslacht uitvragen", permalink: "/voorbeelden/patronen/formulieren/geslacht-uitvragen" } },
    s = {},
    u = [],
    d = { toc: u },
    c = "wrapper";
   function p(e) {
    let { components: r, ...n } = e;
    return (0, o.kt)(c, (0, t.Z)({}, d, n, { components: r, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "adres-uitvragen-in-formulieren" }, "Adres uitvragen in formulieren"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
