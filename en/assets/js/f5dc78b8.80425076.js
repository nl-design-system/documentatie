"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98625],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => g, kt: () => p });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
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
   function s(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var l = r.createContext({}),
    m = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
    },
    g = function (e) {
     var t = m(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    c = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      g = o(e, ["components", "mdxType", "originalType", "parentName"]),
      u = m(n),
      c = i,
      p = u["".concat(l, ".").concat(c)] || u[c] || d[c] || a;
     return n ? r.createElement(p, s(s({ ref: t }, g), {}, { components: n })) : r.createElement(p, s({ ref: t }, g));
    });
   function p(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var a = n.length,
      s = new Array(a);
     s[0] = c;
     var o = {};
     for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
     (o.originalType = e), (o[u] = "string" == typeof e ? e : i), (s[1] = o);
     for (var m = 2; m < a; m++) s[m] = n[m];
     return r.createElement.apply(null, s);
    }
    return r.createElement.apply(null, n);
   }
   c.displayName = "MDXCreateElement";
  },
  14357: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => s, default: () => d, frontMatter: () => a, metadata: () => o, toc: () => m });
   var r = n(87462),
    i = (n(67294), n(3905));
   const a = { title: "Een dag uit het leven van een ontwerper bij het NL Design System", slug: "een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-07-06T00:00:00.000Z") },
    s = void 0,
    o = {
     permalink: "/en/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system",
     source: "@site/blog/2022/20220706-een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system.md",
     title: "Een dag uit het leven van een ontwerper bij het NL Design System",
     description: "Een dag als ontwerper bij het NL Design System ziet er heel anders uit dan bij andere design systems. Dit komt mede doordat het NL Design System geen \u2018traditioneel\u2019 design system is met slechts een enkele huisstijl. In dit artikel leg ik als ontwerper uit hoe de werkzaamheden bij het NL Design System eruit zien.",
     date: "2022-07-06T00:00:00.000Z",
     formattedDate: "July 6, 2022",
     tags: [
      { label: "Figma", permalink: "/en/blog/tags/figma" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     readingTime: 3.445,
     hasTruncateMarker: !0,
     authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }],
     frontMatter: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", slug: "een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-07-06T00:00:00.000Z" },
     prevItem: { title: "De mijlpalen van 2022", permalink: "/en/blog/de-mijlpalen-van-2022" },
     nextItem: { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", permalink: "/en/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    m = [],
    g = { toc: m },
    u = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(u, (0, r.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Een dag als ontwerper bij het NL Design System ziet er heel anders uit dan bij andere design systems. Dit komt mede doordat het NL Design System geen \u2018traditioneel\u2019 design system is met slechts een enkele huisstijl. In dit artikel leg ik als ontwerper uit hoe de werkzaamheden bij het NL Design System eruit zien."));
   }
   d.isMDXComponent = !0;
  },
 },
]);
