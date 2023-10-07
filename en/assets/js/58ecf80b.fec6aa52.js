"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2652],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => b });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
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
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function u(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var l = r.createContext({}),
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    s = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    m = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      p = u(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(n),
      m = o,
      b = s["".concat(l, ".").concat(m)] || s[m] || d[m] || i;
     return n ? r.createElement(b, a(a({ ref: t }, p), {}, { components: n })) : r.createElement(b, a({ ref: t }, p));
    });
   function b(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = m;
     var u = {};
     for (var l in t) hasOwnProperty.call(t, l) && (u[l] = t[l]);
     (u.originalType = e), (u[s] = "string" == typeof e ? e : o), (a[1] = u);
     for (var c = 2; c < i; c++) a[c] = n[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  98640: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => d, frontMatter: () => i, metadata: () => u, toc: () => c });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Button group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Button group", pagination_label: "Button group", description: "UX richtlijnen voor Button group component", slug: "/button-group", tags: ["Help Wanted"] },
    a = void 0,
    u = { unversionedId: "componenten/build/button-group", id: "componenten/build/button-group", title: "Button group", description: "UX richtlijnen voor Button group component", source: "@site/docs/componenten/build/button-group.mdx", sourceDirName: "componenten/build", slug: "/button-group", permalink: "/en/button-group", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/button-group.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Button group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Button group", pagination_label: "Button group", description: "UX richtlijnen voor Button group component", slug: "/button-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Breadcrumb navigation", permalink: "/en/breadcrumb" }, next: { title: "Button", permalink: "/en/button" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    p = { toc: c },
    s = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(s, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "button-group" }, "Button group"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Button group component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/153" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
