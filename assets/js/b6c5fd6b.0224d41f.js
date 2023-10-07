"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1381],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => g });
   var o = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
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
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? r(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : r(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function i(e, n) {
    if (null == e) return {};
    var t,
     o,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       a = {},
       r = Object.keys(e);
      for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var d = o.createContext({}),
    c = function (e) {
     var n = o.useContext(d),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
    },
    s = function (e) {
     var n = c(e.components);
     return o.createElement(d.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      r = e.originalType,
      d = e.parentName,
      s = i(e, ["components", "mdxType", "originalType", "parentName"]),
      p = c(t),
      u = a,
      g = p["".concat(d, ".").concat(u)] || p[u] || m[u] || r;
     return t ? o.createElement(g, l(l({ ref: n }, s), {}, { components: t })) : o.createElement(g, l({ ref: n }, s));
    });
   function g(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var r = t.length,
      l = new Array(r);
     l[0] = u;
     var i = {};
     for (var d in n) hasOwnProperty.call(n, d) && (i[d] = n[d]);
     (i.originalType = e), (i[p] = "string" == typeof e ? e : a), (l[1] = i);
     for (var c = 2; c < r; c++) l[c] = t[c];
     return o.createElement.apply(null, l);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  19264: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => i, toc: () => c });
   var o = t(87462),
    a = (t(67294), t(3905));
   const r = { title: "Non modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Non modal dialog", pagination_label: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", slug: "/non-modal-dialog", tags: ["Help Wanted"] },
    l = void 0,
    i = { unversionedId: "componenten/build/non-modal-dialog", id: "componenten/build/non-modal-dialog", title: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", source: "@site/docs/componenten/build/non-modal-dialog.mdx", sourceDirName: "componenten/build", slug: "/non-modal-dialog", permalink: "/non-modal-dialog", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/non-modal-dialog.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Non modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Non modal dialog", pagination_label: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", slug: "/non-modal-dialog", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Modal dialog", permalink: "/modal-dialog" }, next: { title: "Notification banner", permalink: "/notification-banner" } },
    d = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: c },
    p = "wrapper";
   function m(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(p, (0, o.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "non-modal-dialog" }, "Non modal dialog"), (0, a.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Non modal dialog component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/181" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
