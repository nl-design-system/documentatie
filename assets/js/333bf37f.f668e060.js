"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [79479],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => d });
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
   function s(e, t) {
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
    g = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    m = function (e) {
     var t = g(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    c = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      c = g(n),
      u = o,
      d = c["".concat(l, ".").concat(u)] || c[u] || p[u] || i;
     return n ? r.createElement(d, a(a({ ref: t }, m), {}, { components: n })) : r.createElement(d, a({ ref: t }, m));
    });
   function d(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = u;
     var s = {};
     for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
     (s.originalType = e), (s[c] = "string" == typeof e ? e : o), (a[1] = s);
     for (var g = 2; g < i; g++) a[g] = n[g];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  81449: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => p, frontMatter: () => i, metadata: () => s, toc: () => g });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Over Figma als keuze voor het NL Design System", slug: "over-figma-als-keuze-voor-het-nl-design-system", authors: [{ name: "Rogier Barendregt", title: "Designer kernteam NL Design System", url: "https://www.linkedin.com/in/rogierdesign/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png", hide_table_of_contents: !1, date: new Date("2021-12-15T00:00:00.000Z") },
    a = void 0,
    s = {
     permalink: "/blog/over-figma-als-keuze-voor-het-nl-design-system",
     source: "@site/blog/2021/20211215-over-figma-als-keuze-voor-het-nl-design-system.md",
     title: "Over Figma als keuze voor het NL Design System",
     description: "Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken.",
     date: "2021-12-15T00:00:00.000Z",
     formattedDate: "15 december 2021",
     tags: [
      { label: "Figma", permalink: "/blog/tags/figma" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     readingTime: 3.865,
     hasTruncateMarker: !0,
     authors: [{ name: "Rogier Barendregt", title: "Designer kernteam NL Design System", url: "https://www.linkedin.com/in/rogierdesign/" }],
     frontMatter: { title: "Over Figma als keuze voor het NL Design System", slug: "over-figma-als-keuze-voor-het-nl-design-system", authors: [{ name: "Rogier Barendregt", title: "Designer kernteam NL Design System", url: "https://www.linkedin.com/in/rogierdesign/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png", hide_table_of_contents: !1, date: "2021-12-15T00:00:00.000Z" },
     prevItem: { title: "NL Design System in 2021", permalink: "/blog/nl-design-system-in-2021" },
     nextItem: { title: "Innovatiebudget voor de werkwijze van het NL Design System", permalink: "/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    g = [],
    m = { toc: g },
    c = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(c, (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("p", null, "Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
