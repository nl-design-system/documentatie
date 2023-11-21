"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9336],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => g });
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
    u = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    m = function (e) {
     var t = u(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
    },
    c = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    d = r.forwardRef(function (e, t) {
     var n = e.components,
      a = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      m = o(e, ["components", "mdxType", "originalType", "parentName"]),
      c = u(n),
      d = a,
      g = c["".concat(s, ".").concat(d)] || c[d] || p[d] || i;
     return n ? r.createElement(g, l(l({ ref: t }, m), {}, { components: n })) : r.createElement(g, l({ ref: t }, m));
    });
   function g(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var i = n.length,
      l = new Array(i);
     l[0] = d;
     var o = {};
     for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
     (o.originalType = e), (o[c] = "string" == typeof e ? e : a), (l[1] = o);
     for (var u = 2; u < i; u++) l[u] = n[u];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  80423: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => p, frontMatter: () => i, metadata: () => o, toc: () => u });
   var r = n(87462),
    a = (n(67294), n(3905));
   const i = { title: "De mijlpalen van 2022", slug: "de-mijlpalen-van-2022", authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }], tags: ["mijlpalen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-12-22T00:00:00.000Z") },
    l = void 0,
    o = {
     permalink: "/blog/de-mijlpalen-van-2022",
     source: "@site/blog/2022/20221222-de-mijlpalen-van-2022.md",
     title: "De mijlpalen van 2022",
     description: "Eind vorig jaar hebben we samen met de community stilgestaan bij de plannen en werkzaamheden voor 2022. Nu het jaar er bijna op zit, is het dan ook tijd om terug te blikken en te kijken naar wat er allemaal gedaan is. E\xe9n ding is zeker; 2022 was een druk jaar.",
     date: "2022-12-22T00:00:00.000Z",
     formattedDate: "22 december 2022",
     tags: [
      { label: "mijlpalen", permalink: "/blog/tags/mijlpalen" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }],
     frontMatter: { title: "De mijlpalen van 2022", slug: "de-mijlpalen-van-2022", authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }], tags: ["mijlpalen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-12-22T00:00:00.000Z" },
     prevItem: { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", permalink: "/blog/nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype" },
     nextItem: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", permalink: "/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system" },
    },
    s = { authorsImageUrls: [void 0] },
    u = [],
    m = { toc: u },
    c = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(c, (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Eind vorig jaar hebben we samen met de community stilgestaan bij de plannen en werkzaamheden voor 2022. Nu het jaar er bijna op zit, is het dan ook tijd om terug te blikken en te kijken naar wat er allemaal gedaan is. E\xe9n ding is zeker; 2022 was een druk jaar."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
