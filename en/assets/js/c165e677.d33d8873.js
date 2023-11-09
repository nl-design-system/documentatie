"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [77996],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => g });
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
   var c = r.createContext({}),
    s = function (e) {
     var n = r.useContext(c),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    p = function (e) {
     var n = s(e.components);
     return r.createElement(c.Provider, { value: n }, e.children);
    },
    u = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    m = r.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      a = e.originalType,
      c = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      u = s(t),
      m = o,
      g = u["".concat(c, ".").concat(m)] || u[m] || d[m] || a;
     return t ? r.createElement(g, i(i({ ref: n }, p), {}, { components: t })) : r.createElement(g, i({ ref: n }, p));
    });
   function g(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var a = t.length,
      i = new Array(a);
     i[0] = m;
     var l = {};
     for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
     (l.originalType = e), (l[u] = "string" == typeof e ? e : o), (i[1] = l);
     for (var s = 2; s < a; s++) i[s] = t[s];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  89986: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => i, default: () => d, frontMatter: () => a, metadata: () => l, toc: () => s });
   var r = t(87462),
    o = (t(67294), t(3905));
   const a = { title: "Range", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Range", pagination_label: "Range", description: "UX richtlijnen voor Range component", slug: "/range", tags: ["Help Wanted"] },
    i = void 0,
    l = { unversionedId: "componenten/build/range", id: "componenten/build/range", title: "Range", description: "UX richtlijnen voor Range component", source: "@site/docs/componenten/build/range.mdx", sourceDirName: "componenten/build", slug: "/range", permalink: "/en/range", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/range.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Range", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Range", pagination_label: "Range", description: "UX richtlijnen voor Range component", slug: "/range", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Radio button", permalink: "/en/radio" }, next: { title: "Rich text content", permalink: "/en/rich-text-content" } },
    c = {},
    s = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    p = { toc: s },
    u = "wrapper";
   function d(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(u, (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "range" }, "Range"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Range component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/36" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
