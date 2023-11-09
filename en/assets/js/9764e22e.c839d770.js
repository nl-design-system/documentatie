"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9336],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => g });
   var r = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
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
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function o(e, n) {
    if (null == e) return {};
    var t,
     r,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var s = r.createContext({}),
    u = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
    },
    m = function (e) {
     var n = u(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    c = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    d = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      m = o(e, ["components", "mdxType", "originalType", "parentName"]),
      c = u(t),
      d = a,
      g = c["".concat(s, ".").concat(d)] || c[d] || p[d] || i;
     return t ? r.createElement(g, l(l({ ref: n }, m), {}, { components: t })) : r.createElement(g, l({ ref: n }, m));
    });
   function g(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      l = new Array(i);
     l[0] = d;
     var o = {};
     for (var s in n) hasOwnProperty.call(n, s) && (o[s] = n[s]);
     (o.originalType = e), (o[c] = "string" == typeof e ? e : a), (l[1] = o);
     for (var u = 2; u < i; u++) l[u] = t[u];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, t);
   }
   d.displayName = "MDXCreateElement";
  },
  80423: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => l, default: () => p, frontMatter: () => i, metadata: () => o, toc: () => u });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "De mijlpalen van 2022", slug: "de-mijlpalen-van-2022", authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }], tags: ["mijlpalen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-12-22T00:00:00.000Z") },
    l = void 0,
    o = {
     permalink: "/en/blog/de-mijlpalen-van-2022",
     source: "@site/blog/2022/20221222-de-mijlpalen-van-2022.md",
     title: "De mijlpalen van 2022",
     description: "Eind vorig jaar hebben we samen met de community stilgestaan bij de plannen en werkzaamheden voor 2022. Nu het jaar er bijna op zit, is het dan ook tijd om terug te blikken en te kijken naar wat er allemaal gedaan is. E\xe9n ding is zeker; 2022 was een druk jaar.",
     date: "2022-12-22T00:00:00.000Z",
     formattedDate: "December 22, 2022",
     tags: [
      { label: "mijlpalen", permalink: "/en/blog/tags/mijlpalen" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     readingTime: 1.48,
     hasTruncateMarker: !0,
     authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }],
     frontMatter: { title: "De mijlpalen van 2022", slug: "de-mijlpalen-van-2022", authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }], tags: ["mijlpalen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-12-22T00:00:00.000Z" },
     prevItem: { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", permalink: "/en/blog/nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype" },
     nextItem: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", permalink: "/en/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system" },
    },
    s = { authorsImageUrls: [void 0] },
    u = [],
    m = { toc: u },
    c = "wrapper";
   function p(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(c, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Eind vorig jaar hebben we samen met de community stilgestaan bij de plannen en werkzaamheden voor 2022. Nu het jaar er bijna op zit, is het dan ook tijd om terug te blikken en te kijken naar wat er allemaal gedaan is. E\xe9n ding is zeker; 2022 was een druk jaar."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
