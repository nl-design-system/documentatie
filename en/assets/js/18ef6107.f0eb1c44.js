"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2007],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => g });
   var a = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? r(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     a,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       i = {},
       r = Object.keys(e);
      for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var s = a.createContext({}),
    c = function (e) {
     var t = a.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return a.createElement(s.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    u = a.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      r = e.originalType,
      s = e.parentName,
      p = o(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(n),
      u = i,
      g = d["".concat(s, ".").concat(u)] || d[u] || m[u] || r;
     return n ? a.createElement(g, l(l({ ref: t }, p), {}, { components: n })) : a.createElement(g, l({ ref: t }, p));
    });
   function g(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var r = n.length,
      l = new Array(r);
     l[0] = u;
     var o = {};
     for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
     (o.originalType = e), (o[d] = "string" == typeof e ? e : i), (l[1] = o);
     for (var c = 2; c < r; c++) l[c] = n[c];
     return a.createElement.apply(null, l);
    }
    return a.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  475: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => o, toc: () => c });
   var a = n(87462),
    i = (n(67294), n(3905));
   const r = { title: "Data list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data list", pagination_label: "Data list", description: "UX richtlijnen voor Data list component", slug: "/data-list", tags: ["Help Wanted"] },
    l = void 0,
    o = { unversionedId: "componenten/build/data-list", id: "componenten/build/data-list", title: "Data list", description: "UX richtlijnen voor Data list component", source: "@site/docs/componenten/build/data-list.mdx", sourceDirName: "componenten/build", slug: "/data-list", permalink: "/en/data-list", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/data-list.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Data list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data list", pagination_label: "Data list", description: "UX richtlijnen voor Data list component", slug: "/data-list", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Data badge", permalink: "/en/data-badge" }, next: { title: "Date input group", permalink: "/en/date-input-group" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    p = { toc: c },
    d = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(d, (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "data-list" }, "Data list"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1238-4478" }, "Data list Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Data list component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/185" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
