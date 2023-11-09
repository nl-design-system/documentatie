"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [82920],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => g });
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
   function l(e, t) {
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
   var s = r.createContext({}),
    c = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    m = function (e) {
     var t = c(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    d = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = c(n),
      d = o,
      g = p["".concat(s, ".").concat(d)] || p[d] || u[d] || i;
     return n ? r.createElement(g, a(a({ ref: t }, m), {}, { components: n })) : r.createElement(g, a({ ref: t }, m));
    });
   function g(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = d;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : o), (a[1] = l);
     for (var c = 2; c < i; c++) a[c] = n[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  84005: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => l, toc: () => c });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Strong", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Strong", pagination_label: "Strong", description: "UX richtlijnen voor Strong component", slug: "/strong", tags: ["Community"] },
    a = void 0,
    l = { unversionedId: "componenten/build/strong", id: "componenten/build/strong", title: "Strong", description: "UX richtlijnen voor Strong component", source: "@site/docs/componenten/build/strong.mdx", sourceDirName: "componenten/build", slug: "/strong", permalink: "/strong", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/strong.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Strong", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Strong", pagination_label: "Strong", description: "UX richtlijnen voor Strong component", slug: "/strong", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Status badge", permalink: "/status-badge" }, next: { title: "Switch", permalink: "/switch" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    m = { toc: c },
    p = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(p, (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "strong" }, "Strong"), (0, o.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, o.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, o.kt)("h3", { id: "css" }, "CSS"), (0, o.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, o.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/css" }, "Strong CSS implementatie van Gemeente Utrecht")), (0, o.kt)("li", { parentName: "ul" }, "Storybook: ", (0, o.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-emphasis--strong" }, "Strong CSS storybook van Gemeente Utrecht"))), (0, o.kt)("h3", { id: "html" }, "HTML"), (0, o.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, o.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html" }, "Strong HTML implementatie van Gemeente Utrecht")), (0, o.kt)("li", { parentName: "ul" }, "Storybook: ", (0, o.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-emphasis--strong" }, "Strong HTML storybook van Gemeente Utrecht"))), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Strong component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/138" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
