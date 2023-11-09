"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10539],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => g });
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
   function p(e, t) {
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
   var u = r.createContext({}),
    l = function (e) {
     var t = r.useContext(u),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    c = function (e) {
     var t = l(e.components);
     return r.createElement(u.Provider, { value: t }, e.children);
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
      u = e.parentName,
      c = p(e, ["components", "mdxType", "originalType", "parentName"]),
      s = l(n),
      m = o,
      g = s["".concat(u, ".").concat(m)] || s[m] || d[m] || i;
     return n ? r.createElement(g, a(a({ ref: t }, c), {}, { components: n })) : r.createElement(g, a({ ref: t }, c));
    });
   function g(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = m;
     var p = {};
     for (var u in t) hasOwnProperty.call(t, u) && (p[u] = t[u]);
     (p.originalType = e), (p[s] = "string" == typeof e ? e : o), (a[1] = p);
     for (var l = 2; l < i; l++) a[l] = n[l];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  85228: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => a, default: () => d, frontMatter: () => i, metadata: () => p, toc: () => l });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Date input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input group", pagination_label: "Date input group", description: "UX richtlijnen voor Date input group component", slug: "/date-input-group", tags: ["Help Wanted"] },
    a = void 0,
    p = { unversionedId: "componenten/build/date-input-group", id: "componenten/build/date-input-group", title: "Date input group", description: "UX richtlijnen voor Date input group component", source: "@site/docs/componenten/build/date-input-group.mdx", sourceDirName: "componenten/build", slug: "/date-input-group", permalink: "/en/date-input-group", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input-group.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Date input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input group", pagination_label: "Date input group", description: "UX richtlijnen voor Date input group component", slug: "/date-input-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Data list", permalink: "/en/data-list" }, next: { title: "Date input", permalink: "/en/date-input" } },
    u = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    c = { toc: l },
    s = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(s, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "date-input-group" }, "Date input group"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Date input group component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/189" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
