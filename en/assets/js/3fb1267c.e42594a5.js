"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2840],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => m });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function s(e, t) {
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
      ? s(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : s(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       s = Object.keys(e);
      for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var l = r.createContext({}),
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    g = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      s = e.originalType,
      l = e.parentName,
      p = a(e, ["components", "mdxType", "originalType", "parentName"]),
      u = c(n),
      g = o,
      m = u["".concat(l, ".").concat(g)] || u[g] || d[g] || s;
     return n ? r.createElement(m, i(i({ ref: t }, p), {}, { components: n })) : r.createElement(m, i({ ref: t }, p));
    });
   function m(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var s = n.length,
      i = new Array(s);
     i[0] = g;
     var a = {};
     for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
     (a.originalType = e), (a[u] = "string" == typeof e ? e : o), (i[1] = a);
     for (var c = 2; c < s; c++) i[c] = n[c];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   g.displayName = "MDXCreateElement";
  },
  71309: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => d, frontMatter: () => s, metadata: () => a, toc: () => c });
   var r = n(87462),
    o = (n(67294), n(3905));
   const s = { title: "Progress", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress", pagination_label: "Progress", description: "UX richtlijnen voor Progress component", slug: "/progress", tags: ["Help Wanted"] },
    i = void 0,
    a = { unversionedId: "componenten/build/progress", id: "componenten/build/progress", title: "Progress", description: "UX richtlijnen voor Progress component", source: "@site/docs/componenten/build/progress.mdx", sourceDirName: "componenten/build", slug: "/progress", permalink: "/en/progress", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/progress.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Progress", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress", pagination_label: "Progress", description: "UX richtlijnen voor Progress component", slug: "/progress", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Progress steps", permalink: "/en/progress-steps" }, next: { title: "Radio group", permalink: "/en/radio-group" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    p = { toc: c },
    u = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(u, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "progress" }, "Progress"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Progress component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/42" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
