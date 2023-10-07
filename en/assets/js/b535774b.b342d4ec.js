"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4740],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => d, kt: () => b });
   var r = t(67294);
   function a(e, n, t) {
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
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
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
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var c = r.createContext({}),
    s = function (e) {
     var n = r.useContext(c),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    d = function (e) {
     var n = s(e.components);
     return r.createElement(c.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    m = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      o = e.originalType,
      c = e.parentName,
      d = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = s(t),
      m = a,
      b = p["".concat(c, ".").concat(m)] || p[m] || u[m] || o;
     return t ? r.createElement(b, i(i({ ref: n }, d), {}, { components: t })) : r.createElement(b, i({ ref: n }, d));
    });
   function b(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var o = t.length,
      i = new Array(o);
     i[0] = m;
     var l = {};
     for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : a), (i[1] = l);
     for (var s = 2; s < o; s++) i[s] = t[s];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  25916: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => i, default: () => u, frontMatter: () => o, metadata: () => l, toc: () => s });
   var r = t(87462),
    a = (t(67294), t(3905));
   const o = { title: "Card as link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Card as link", pagination_label: "Card as link", description: "UX richtlijnen voor Card as link component", slug: "/card-as-link", tags: ["Help Wanted"] },
    i = void 0,
    l = { unversionedId: "componenten/build/card-as-link", id: "componenten/build/card-as-link", title: "Card as link", description: "UX richtlijnen voor Card as link component", source: "@site/docs/componenten/build/card-as-link.mdx", sourceDirName: "componenten/build", slug: "/card-as-link", permalink: "/en/card-as-link", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/card-as-link.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Card as link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Card as link", pagination_label: "Card as link", description: "UX richtlijnen voor Card as link component", slug: "/card-as-link", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Button", permalink: "/en/button" }, next: { title: "Checkbox group", permalink: "/en/checkbox-group" } },
    c = {},
    s = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    d = { toc: s },
    p = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(p, (0, r.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "card-as-link" }, "Card as link"), (0, a.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Card as link component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/101" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
