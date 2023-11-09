"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [58173],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => b });
   var a = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
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
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
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
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var s = a.createContext({}),
    m = function (e) {
     var t = a.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return a.createElement(s.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    d = a.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = m(n),
      d = r,
      b = p["".concat(s, ".").concat(d)] || p[d] || u[d] || i;
     return n ? a.createElement(b, o(o({ ref: t }, c), {}, { components: n })) : a.createElement(b, o({ ref: t }, c));
    });
   function b(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      o = new Array(i);
     o[0] = d;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : r), (o[1] = l);
     for (var m = 2; m < i; m++) o[m] = n[m];
     return a.createElement.apply(null, o);
    }
    return a.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  41008: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => o, default: () => u, frontMatter: () => i, metadata: () => l, toc: () => m });
   var a = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Tabs", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tabs", pagination_label: "Tabs", description: "UX richtlijnen voor Tabs component", slug: "/tabs", tags: ["Community"] },
    o = void 0,
    l = { unversionedId: "componenten/build/tabs", id: "componenten/build/tabs", title: "Tabs", description: "UX richtlijnen voor Tabs component", source: "@site/docs/componenten/build/tabs.mdx", sourceDirName: "componenten/build", slug: "/tabs", permalink: "/en/tabs", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/tabs.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Tabs", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tabs", pagination_label: "Tabs", description: "UX richtlijnen voor Tabs component", slug: "/tabs", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Table", permalink: "/en/table" }, next: { title: "Text input group", permalink: "/en/text-input-group" } },
    s = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: m },
    p = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(p, (0, a.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "tabs" }, "Tabs"), (0, r.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "react" }, "React"), (0, r.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Tab/src/Tabs.tsx" }, "Tabs React implementatie van Gemeente Den Haag")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-tab--default" }, "Tabs React storybook van Gemeente Den Haag"))), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=5020%3A18454" }, "Tabs Figma implementatie van Gemeente Den Haag"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Tabs component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/51" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
