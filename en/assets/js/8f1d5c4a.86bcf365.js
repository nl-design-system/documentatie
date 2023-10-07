"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5201],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => m });
   var r = n(67294);
   function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
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
      ? o(Object(n), !0).forEach(function (t) {
         s(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     s = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       s = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
      return s;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
    }
    return s;
   }
   var p = r.createContext({}),
    l = function (e) {
     var t = r.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    c = function (e) {
     var t = l(e.components);
     return r.createElement(p.Provider, { value: t }, e.children);
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
      s = e.mdxType,
      o = e.originalType,
      p = e.parentName,
      c = a(e, ["components", "mdxType", "originalType", "parentName"]),
      u = l(n),
      g = s,
      m = u["".concat(p, ".").concat(g)] || u[g] || d[g] || o;
     return n ? r.createElement(m, i(i({ ref: t }, c), {}, { components: n })) : r.createElement(m, i({ ref: t }, c));
    });
   function m(e, t) {
    var n = arguments,
     s = t && t.mdxType;
    if ("string" == typeof e || s) {
     var o = n.length,
      i = new Array(o);
     i[0] = g;
     var a = {};
     for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
     (a.originalType = e), (a[u] = "string" == typeof e ? e : s), (i[1] = a);
     for (var l = 2; l < o; l++) i[l] = n[l];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   g.displayName = "MDXCreateElement";
  },
  59358: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => i, default: () => d, frontMatter: () => o, metadata: () => a, toc: () => l });
   var r = n(87462),
    s = (n(67294), n(3905));
   const o = { title: "Progress steps", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress steps", pagination_label: "Progress steps", description: "UX richtlijnen voor Progress steps component", slug: "/progress-steps", tags: ["Help Wanted"] },
    i = void 0,
    a = { unversionedId: "componenten/build/progress-steps", id: "componenten/build/progress-steps", title: "Progress steps", description: "UX richtlijnen voor Progress steps component", source: "@site/docs/componenten/build/progress-steps.mdx", sourceDirName: "componenten/build", slug: "/progress-steps", permalink: "/en/progress-steps", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/progress-steps.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Progress steps", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress steps", pagination_label: "Progress steps", description: "UX richtlijnen voor Progress steps component", slug: "/progress-steps", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Password input", permalink: "/en/password-input" }, next: { title: "Progress", permalink: "/en/progress" } },
    p = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    c = { toc: l },
    u = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, s.kt)(u, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, s.kt)("h1", { id: "progress-steps" }, "Progress steps"), (0, s.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, s.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, s.kt)("p", null, "De Progress steps component staat bij NL Design System in de ", (0, s.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/150" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
