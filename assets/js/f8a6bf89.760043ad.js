"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66574],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => m });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function l(e, t) {
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
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       l = Object.keys(e);
      for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var c = r.createContext({}),
    s = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    p = function (e) {
     var t = s(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    j = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    f = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      l = e.originalType,
      c = e.parentName,
      p = a(e, ["components", "mdxType", "originalType", "parentName"]),
      u = s(n),
      f = i,
      m = u["".concat(c, ".").concat(f)] || u[f] || j[f] || l;
     return n ? r.createElement(m, o(o({ ref: t }, p), {}, { components: n })) : r.createElement(m, o({ ref: t }, p));
    });
   function m(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var l = n.length,
      o = new Array(l);
     o[0] = f;
     var a = {};
     for (var c in t) hasOwnProperty.call(t, c) && (a[c] = t[c]);
     (a.originalType = e), (a[u] = "string" == typeof e ? e : i), (o[1] = a);
     for (var s = 2; s < l; s++) o[s] = n[s];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  23286: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => o, default: () => j, frontMatter: () => l, metadata: () => a, toc: () => s });
   var r = n(87462),
    i = (n(67294), n(3905));
   const l = { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Richtlijnen voor stijl" },
    o = void 0,
    a = { unversionedId: "richtlijnen/stijl/README", id: "richtlijnen/stijl/README", title: "Richtlijnen voor stijl", description: "Richtlijnen voor stijl", source: "@site/docs/richtlijnen/stijl/README.md", sourceDirName: "richtlijnen/stijl", slug: "/richtlijnen/stijl/", permalink: "/richtlijnen/stijl/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Richtlijnen voor stijl" }, sidebar: "richtlijnen", previous: { title: "Stijl", permalink: "/richtlijnen/stijl/overzicht" }, next: { title: "Typografie", permalink: "/richtlijnen/stijl/typografie" } },
    c = {},
    s = [],
    p = { toc: s },
    u = "wrapper";
   function j(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(u, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "richtlijnen-voor-stijl" }, "Richtlijnen voor stijl"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "/richtlijnen/stijl/iconen" }, "Iconen")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "/richtlijnen/stijl/kleuren" }, "Kleuren")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "/richtlijnen/stijl/ruimte" }, "Ruimte")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "/richtlijnen/stijl/typografie" }, "Typografie"))));
   }
   j.isMDXComponent = !0;
  },
 },
]);
