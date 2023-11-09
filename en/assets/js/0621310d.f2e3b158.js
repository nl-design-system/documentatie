"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [34306],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => g });
   var r = n(67294);
   function a(e, t, n) {
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
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         a(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     r,
     a = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       a = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
   }
   var s = r.createContext({}),
    m = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      a = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      c = o(e, ["components", "mdxType", "originalType", "parentName"]),
      p = m(n),
      u = a,
      g = p["".concat(s, ".").concat(u)] || p[u] || d[u] || i;
     return n ? r.createElement(g, l(l({ ref: t }, c), {}, { components: n })) : r.createElement(g, l({ ref: t }, c));
    });
   function g(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var i = n.length,
      l = new Array(i);
     l[0] = u;
     var o = {};
     for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
     (o.originalType = e), (o[p] = "string" == typeof e ? e : a), (l[1] = o);
     for (var m = 2; m < i; m++) l[m] = n[m];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  59564: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => d, frontMatter: () => i, metadata: () => o, toc: () => m });
   var r = n(87462),
    a = (n(67294), n(3905));
   const i = { title: "Alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert", pagination_label: "Alert", description: "UX richtlijnen voor Alert component", slug: "/alert", tags: ["Community"] },
    l = void 0,
    o = { unversionedId: "componenten/build/alert", id: "componenten/build/alert", title: "Alert", description: "UX richtlijnen voor Alert component", source: "@site/docs/componenten/build/alert.mdx", sourceDirName: "componenten/build", slug: "/alert", permalink: "/en/alert", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/alert.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert", pagination_label: "Alert", description: "UX richtlijnen voor Alert component", slug: "/alert", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Alert dialog", permalink: "/en/alert-dialog" }, next: { title: "Avatar", permalink: "/en/avatar" } },
    s = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: m },
    p = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(p, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "alert" }, "Alert"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss" }, "Alert CSS implementatie van Gemeente Den Haag")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error" }, "Alert CSS storybook van Gemeente Den Haag"))), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1179-3892" }, "Alert Figma implementatie van NL Design System"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Alert component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/9" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
