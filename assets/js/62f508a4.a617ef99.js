"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1038],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => m });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var c = r.createContext({}),
    p = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    s = function (e) {
     var t = p(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    g = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      a = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = p(n),
      g = o,
      m = d["".concat(c, ".").concat(g)] || d[g] || u[g] || a;
     return n ? r.createElement(m, i(i({ ref: t }, s), {}, { components: n })) : r.createElement(m, i({ ref: t }, s));
    });
   function m(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var a = n.length,
      i = new Array(a);
     i[0] = g;
     var l = {};
     for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : o), (i[1] = l);
     for (var p = 2; p < a; p++) i[p] = n[p];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   g.displayName = "MDXCreateElement";
  },
  38896: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => i, default: () => u, frontMatter: () => a, metadata: () => l, toc: () => p });
   var r = n(87462),
    o = (n(67294), n(3905));
   const a = { title: "Page Footer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page Footer", pagination_label: "Page Footer", description: "UX richtlijnen voor Page Footer component", slug: "/page-footer", tags: ["Help Wanted"] },
    i = void 0,
    l = { unversionedId: "componenten/build/page-footer", id: "componenten/build/page-footer", title: "Page Footer", description: "UX richtlijnen voor Page Footer component", source: "@site/docs/componenten/build/page-footer.mdx", sourceDirName: "componenten/build", slug: "/page-footer", permalink: "/page-footer", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/page-footer.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Page Footer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page Footer", pagination_label: "Page Footer", description: "UX richtlijnen voor Page Footer component", slug: "/page-footer", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Ordered list", permalink: "/ordered-list" }, next: { title: "Page Header", permalink: "/page-header" } },
    c = {},
    p = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: p },
    d = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(d, (0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "page-footer" }, "Page Footer"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Page Footer component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/56" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
