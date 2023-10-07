"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1746],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => b });
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
   function c(e, t) {
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
    p = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    s = function (e) {
     var t = p(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    u = {
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
      s = c(e, ["components", "mdxType", "originalType", "parentName"]),
      d = p(n),
      m = o,
      b = d["".concat(l, ".").concat(m)] || d[m] || u[m] || i;
     return n ? r.createElement(b, a(a({ ref: t }, s), {}, { components: n })) : r.createElement(b, a({ ref: t }, s));
    });
   function b(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = m;
     var c = {};
     for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
     (c.originalType = e), (c[d] = "string" == typeof e ? e : o), (a[1] = c);
     for (var p = 2; p < i; p++) a[p] = n[p];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  18612: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => c, toc: () => p });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Date Picker", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date Picker", pagination_label: "Date Picker", description: "UX richtlijnen voor Date Picker component", slug: "/date-picker", tags: ["Help Wanted"] },
    a = void 0,
    c = { unversionedId: "componenten/build/date-picker", id: "componenten/build/date-picker", title: "Date Picker", description: "UX richtlijnen voor Date Picker component", source: "@site/docs/componenten/build/date-picker.mdx", sourceDirName: "componenten/build", slug: "/date-picker", permalink: "/date-picker", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-picker.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Date Picker", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date Picker", pagination_label: "Date Picker", description: "UX richtlijnen voor Date Picker component", slug: "/date-picker", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Date input", permalink: "/date-input" }, next: { title: "Dot badge", permalink: "/dot-badge" } },
    l = {},
    p = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: p },
    d = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(d, (0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "date-picker" }, "Date Picker"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Date Picker component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/35" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
