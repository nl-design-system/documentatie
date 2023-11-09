"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94499],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => b });
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
   function l(e, n) {
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
   var p = r.createContext({}),
    c = function (e) {
     var n = r.useContext(p),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    s = function (e) {
     var n = c(e.components);
     return r.createElement(p.Provider, { value: n }, e.children);
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
      i = e.mdxType,
      o = e.originalType,
      p = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      u = c(t),
      m = i,
      b = u["".concat(p, ".").concat(m)] || u[m] || d[m] || o;
     return t ? r.createElement(b, a(a({ ref: n }, s), {}, { components: t })) : r.createElement(b, a({ ref: n }, s));
    });
   function b(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var o = t.length,
      a = new Array(o);
     a[0] = m;
     var l = {};
     for (var p in n) hasOwnProperty.call(n, p) && (l[p] = n[p]);
     (l.originalType = e), (l[u] = "string" == typeof e ? e : i), (a[1] = l);
     for (var c = 2; c < o; c++) a[c] = t[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  95322: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => a, default: () => d, frontMatter: () => o, metadata: () => l, toc: () => c });
   var r = t(87462),
    i = (t(67294), t(3905));
   const o = { title: "Spinner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Spinner", pagination_label: "Spinner", description: "UX richtlijnen voor Spinner component", slug: "/spinner", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/spinner", id: "componenten/build/spinner", title: "Spinner", description: "UX richtlijnen voor Spinner component", source: "@site/docs/componenten/build/spinner.mdx", sourceDirName: "componenten/build", slug: "/spinner", permalink: "/spinner", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/spinner.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Spinner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Spinner", pagination_label: "Spinner", description: "UX richtlijnen voor Spinner component", slug: "/spinner", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Skip link", permalink: "/skip-link" }, next: { title: "Status badge", permalink: "/status-badge" } },
    p = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: c },
    u = "wrapper";
   function d(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(u, (0, r.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "spinner" }, "Spinner"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Spinner component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/75" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
