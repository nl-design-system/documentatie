"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [60689],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => g });
   var i = n(67294);
   function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     t &&
      (i = i.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, i);
    }
    return n;
   }
   function r(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(n), !0).forEach(function (t) {
         a(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     i,
     a = (function (e, t) {
      if (null == e) return {};
      var n,
       i,
       a = {},
       o = Object.keys(e);
      for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
   }
   var s = i.createContext({}),
    c = function (e) {
     var t = i.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
    },
    m = function (e) {
     var t = c(e.components);
     return i.createElement(s.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return i.createElement(i.Fragment, {}, t);
     },
    },
    u = i.forwardRef(function (e, t) {
     var n = e.components,
      a = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(n),
      u = a,
      g = d["".concat(s, ".").concat(u)] || d[u] || p[u] || o;
     return n ? i.createElement(g, r(r({ ref: t }, m), {}, { components: n })) : i.createElement(g, r({ ref: t }, m));
    });
   function g(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var o = n.length,
      r = new Array(o);
     r[0] = u;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : a), (r[1] = l);
     for (var c = 2; c < o; c++) r[c] = n[c];
     return i.createElement.apply(null, r);
    }
    return i.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  64990: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => r, default: () => p, frontMatter: () => o, metadata: () => l, toc: () => c });
   var i = n(87462),
    a = (n(67294), n(3905));
   const o = { title: "Side navigation", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Side navigation", pagination_label: "Side navigation", description: "UX richtlijnen voor Side navigation component", slug: "/side-navigation", tags: ["Community"] },
    r = void 0,
    l = { unversionedId: "componenten/build/side-navigation", id: "componenten/build/side-navigation", title: "Side navigation", description: "UX richtlijnen voor Side navigation component", source: "@site/docs/componenten/build/side-navigation.mdx", sourceDirName: "componenten/build", slug: "/side-navigation", permalink: "/side-navigation", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/side-navigation.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Side navigation", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Side navigation", pagination_label: "Side navigation", description: "UX richtlijnen voor Side navigation component", slug: "/side-navigation", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Separator", permalink: "/separator" }, next: { title: "Skip link", permalink: "/skip-link" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    m = { toc: c },
    d = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(d, (0, i.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "side-navigation" }, "Side navigation"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20sidenav/css" }, "Side navigation CSS implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-sidenav--default-story" }, "Side navigation CSS storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1670-10258" }, "Side navigation Figma implementatie van NL Design System"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Side navigation component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/53" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
