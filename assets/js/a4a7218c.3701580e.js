"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69633],
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
   function p(e) {
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
   function a(e, t) {
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
     return e && (n = "function" == typeof e ? e(t) : p(p({}, t), e)), n;
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
      c = a(e, ["components", "mdxType", "originalType", "parentName"]),
      s = l(n),
      m = o,
      g = s["".concat(u, ".").concat(m)] || s[m] || d[m] || i;
     return n ? r.createElement(g, p(p({ ref: t }, c), {}, { components: n })) : r.createElement(g, p({ ref: t }, c));
    });
   function g(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      p = new Array(i);
     p[0] = m;
     var a = {};
     for (var u in t) hasOwnProperty.call(t, u) && (a[u] = t[u]);
     (a.originalType = e), (a[s] = "string" == typeof e ? e : o), (p[1] = a);
     for (var l = 2; l < i; l++) p[l] = n[l];
     return r.createElement.apply(null, p);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  12673: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => p, default: () => d, frontMatter: () => i, metadata: () => a, toc: () => l });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Text input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input group", pagination_label: "Text input group", description: "UX richtlijnen voor Text input group component", slug: "/text-input-group", tags: ["Help Wanted"] },
    p = void 0,
    a = { unversionedId: "componenten/build/text-input-group", id: "componenten/build/text-input-group", title: "Text input group", description: "UX richtlijnen voor Text input group component", source: "@site/docs/componenten/build/text-input-group.mdx", sourceDirName: "componenten/build", slug: "/text-input-group", permalink: "/text-input-group", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/text-input-group.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Text input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input group", pagination_label: "Text input group", description: "UX richtlijnen voor Text input group component", slug: "/text-input-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Tabs", permalink: "/tabs" }, next: { title: "Text input", permalink: "/text-input" } },
    u = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    c = { toc: l },
    s = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(s, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "text-input-group" }, "Text input group"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Text input group component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/178" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
