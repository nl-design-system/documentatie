"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4654],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => j });
   var r = t(67294);
   function i(e, n, t) {
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
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         i(e, n, t[n]);
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
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       i = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   var l = r.createContext({}),
    d = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    s = function (e) {
     var n = d(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    f = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      o = e.originalType,
      l = e.parentName,
      s = c(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(t),
      f = i,
      j = p["".concat(l, ".").concat(f)] || p[f] || u[f] || o;
     return t ? r.createElement(j, a(a({ ref: n }, s), {}, { components: t })) : r.createElement(j, a({ ref: n }, s));
    });
   function j(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var o = t.length,
      a = new Array(o);
     a[0] = f;
     var c = {};
     for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
     (c.originalType = e), (c[p] = "string" == typeof e ? e : i), (a[1] = c);
     for (var d = 2; d < o; d++) a[d] = t[d];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, t);
   }
   f.displayName = "MDXCreateElement";
  },
  29173: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => u, frontMatter: () => o, metadata: () => c, toc: () => d });
   var r = t(87462),
    i = (t(67294), t(3905));
   const o = { title: "Richtlijnen bijdragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Bijdragen", sidebar_position: 1, pagination_label: "Bijdragen", description: "Richtlijnen bijdragen", keywords: ["richtlijnen", "design system", "estafettemodel", "bijdragen"] },
    a = "Richtlijnen bijdragen",
    c = { unversionedId: "richtlijnen/bijdragen", id: "richtlijnen/bijdragen", title: "Richtlijnen bijdragen", description: "Richtlijnen bijdragen", source: "@site/docs/richtlijnen/bijdragen.mdx", sourceDirName: "richtlijnen", slug: "/richtlijnen/bijdragen", permalink: "/en/richtlijnen/bijdragen", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/bijdragen.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Richtlijnen bijdragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Bijdragen", sidebar_position: 1, pagination_label: "Bijdragen", description: "Richtlijnen bijdragen", keywords: ["richtlijnen", "design system", "estafettemodel", "bijdragen"] } },
    l = {},
    d = [{ value: "Definition of Done voor community richtlijnen", id: "definition-of-done-voor-community-richtlijnen", level: 2 }],
    s = { toc: d },
    p = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(p, (0, r.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "richtlijnen-bijdragen" }, "Richtlijnen bijdragen"), (0, i.kt)("h2", { id: "definition-of-done-voor-community-richtlijnen" }, "Definition of Done voor community richtlijnen"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
