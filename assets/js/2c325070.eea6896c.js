"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2693],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => c, kt: () => f });
   var o = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     n &&
      (o = o.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, o);
    }
    return t;
   }
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : a(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function m(e, n) {
    if (null == e) return {};
    var t,
     o,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       r = {},
       a = Object.keys(e);
      for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var l = o.createContext({}),
    p = function (e) {
     var n = o.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    c = function (e) {
     var n = p(e.components);
     return o.createElement(l.Provider, { value: n }, e.children);
    },
    s = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      c = m(e, ["components", "mdxType", "originalType", "parentName"]),
      s = p(t),
      u = r,
      f = s["".concat(l, ".").concat(u)] || s[u] || d[u] || a;
     return t ? o.createElement(f, i(i({ ref: n }, c), {}, { components: t })) : o.createElement(f, i({ ref: n }, c));
    });
   function f(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var a = t.length,
      i = new Array(a);
     i[0] = u;
     var m = {};
     for (var l in n) hasOwnProperty.call(n, l) && (m[l] = n[l]);
     (m.originalType = e), (m[s] = "string" == typeof e ? e : r), (i[1] = m);
     for (var p = 2; p < a; p++) i[p] = t[p];
     return o.createElement.apply(null, i);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  43921: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => d, frontMatter: () => a, metadata: () => m, toc: () => p });
   var o = t(87462),
    r = (t(67294), t(3905));
   const a = { title: "Componenten maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Componenten maken", pagination_label: "Componenten maken", description: "Eigen componenten maken voor NL Design System", keywords: ["developer", "bijdragen", "componenten maken"] },
    i = "Eigen componenten maken voor NL Design System",
    m = { unversionedId: "meedoen/als-developer/componenten-maken", id: "meedoen/als-developer/componenten-maken", title: "Componenten maken", description: "Eigen componenten maken voor NL Design System", source: "@site/docs/meedoen/als-developer/07-componenten-maken.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/componenten-maken", permalink: "/meedoen/als-developer/componenten-maken", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/07-componenten-maken.md", tags: [], version: "current", sidebarPosition: 7, frontMatter: { title: "Componenten maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Componenten maken", pagination_label: "Componenten maken", description: "Eigen componenten maken voor NL Design System", keywords: ["developer", "bijdragen", "componenten maken"] }, sidebar: "meedoen", previous: { title: "Component uitbreiden", permalink: "/meedoen/als-developer/component-uitbreiden" }, next: { title: "Meewerken", permalink: "/meedoen/als-developer/meewerken-als-developer" } },
    l = {},
    p = [],
    c = { toc: p },
    s = "wrapper";
   function d(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(s, (0, o.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "eigen-componenten-maken-voor-nl-design-system" }, "Eigen componenten maken voor NL Design System"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
