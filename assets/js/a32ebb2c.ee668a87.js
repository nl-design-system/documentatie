"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2138],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => m });
   var i = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function o(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i);
    }
    return t;
   }
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : o(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function a(e, n) {
    if (null == e) return {};
    var t,
     i,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       r = {},
       o = Object.keys(e);
      for (i = 0; i < o.length; i++) (t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (i = 0; i < o.length; i++) (t = o[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var p = i.createContext({}),
    c = function (e) {
     var n = i.useContext(p),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
    },
    s = function (e) {
     var n = c(e.components);
     return i.createElement(p.Provider, { value: n }, e.children);
    },
    d = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    k = i.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      o = e.originalType,
      p = e.parentName,
      s = a(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(t),
      k = r,
      m = d["".concat(p, ".").concat(k)] || d[k] || u[k] || o;
     return t ? i.createElement(m, l(l({ ref: n }, s), {}, { components: t })) : i.createElement(m, l({ ref: n }, s));
    });
   function m(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var o = t.length,
      l = new Array(o);
     l[0] = k;
     var a = {};
     for (var p in n) hasOwnProperty.call(n, p) && (a[p] = n[p]);
     (a.originalType = e), (a[d] = "string" == typeof e ? e : r), (l[1] = a);
     for (var c = 2; c < o; c++) l[c] = t[c];
     return i.createElement.apply(null, l);
    }
    return i.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  44010: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => l, default: () => u, frontMatter: () => o, metadata: () => a, toc: () => c });
   var i = t(87462),
    r = (t(67294), t(3905));
   const o = { title: "Skip link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Skip link", pagination_label: "Skip link", description: "UX richtlijnen voor Skip link component", slug: "/skip-link", tags: ["Help Wanted"] },
    l = void 0,
    a = { unversionedId: "componenten/build/skip-link", id: "componenten/build/skip-link", title: "Skip link", description: "UX richtlijnen voor Skip link component", source: "@site/docs/componenten/build/skip-link.mdx", sourceDirName: "componenten/build", slug: "/skip-link", permalink: "/skip-link", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/skip-link.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Skip link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Skip link", pagination_label: "Skip link", description: "UX richtlijnen voor Skip link component", slug: "/skip-link", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Side navigation", permalink: "/side-navigation" }, next: { title: "Spinner", permalink: "/spinner" } },
    p = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: c },
    d = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(d, (0, i.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "skip-link" }, "Skip link"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Skip link component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/74" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
