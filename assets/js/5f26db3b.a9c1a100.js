"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48074],
 {
  3905: (e, t, r) => {
   r.d(t, { Zo: () => c, kt: () => b });
   var n = r(67294);
   function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
   }
   function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(r), !0).forEach(function (t) {
         o(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : a(Object(r)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
   }
   function i(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       a = Object.keys(e);
      for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   var s = n.createContext({}),
    p = function (e) {
     var t = n.useContext(s),
      r = t;
     return e && (r = "function" == typeof e ? e(t) : l(l({}, t), e)), r;
    },
    c = function (e) {
     var t = p(e.components);
     return n.createElement(s.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return n.createElement(n.Fragment, {}, t);
     },
    },
    u = n.forwardRef(function (e, t) {
     var r = e.components,
      o = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      c = i(e, ["components", "mdxType", "originalType", "parentName"]),
      m = p(r),
      u = o,
      b = m["".concat(s, ".").concat(u)] || m[u] || d[u] || a;
     return r ? n.createElement(b, l(l({ ref: t }, c), {}, { components: r })) : n.createElement(b, l({ ref: t }, c));
    });
   function b(e, t) {
    var r = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var a = r.length,
      l = new Array(a);
     l[0] = u;
     var i = {};
     for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
     (i.originalType = e), (i[m] = "string" == typeof e ? e : o), (l[1] = i);
     for (var p = 2; p < a; p++) l[p] = r[p];
     return n.createElement.apply(null, l);
    }
    return n.createElement.apply(null, r);
   }
   u.displayName = "MDXCreateElement";
  },
  50335: (e, t, r) => {
   r.r(t), r.d(t, { assets: () => s, contentTitle: () => l, default: () => d, frontMatter: () => a, metadata: () => i, toc: () => p });
   var n = r(87462),
    o = (r(67294), r(3905));
   const a = { title: "Templates", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Templates", sidebar_position: 1, pagination_label: "Templates", description: "Templates", keywords: ["index", "voorbeelden", "templates"] },
    l = "Templates",
    i = { unversionedId: "voorbeelden/templates/README", id: "voorbeelden/templates/README", title: "Templates", description: "Templates", source: "@site/docs/voorbeelden/templates/README.md", sourceDirName: "voorbeelden/templates", slug: "/voorbeelden/templates/", permalink: "/voorbeelden/templates/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/templates/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Templates", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Templates", sidebar_position: 1, pagination_label: "Templates", description: "Templates", keywords: ["index", "voorbeelden", "templates"] }, sidebar: "voorbeelden", previous: { title: "Geslacht uitvragen", permalink: "/voorbeelden/patronen/formulieren/geslacht-uitvragen" } },
    s = {},
    p = [],
    c = { toc: p },
    m = "wrapper";
   function d(e) {
    let { components: t, ...r } = e;
    return (0, o.kt)(m, (0, n.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "templates" }, "Templates"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
