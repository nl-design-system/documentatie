"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [58803],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => b });
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
   function o(e) {
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
   function s(e, t) {
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
   var l = r.createContext({}),
    m = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    g = "mdxType",
    p = {
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
      l = e.parentName,
      c = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = m(n),
      u = a,
      b = g["".concat(l, ".").concat(u)] || g[u] || p[u] || i;
     return n ? r.createElement(b, o(o({ ref: t }, c), {}, { components: n })) : r.createElement(b, o({ ref: t }, c));
    });
   function b(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var i = n.length,
      o = new Array(i);
     o[0] = u;
     var s = {};
     for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : a), (o[1] = s);
     for (var m = 2; m < i; m++) o[m] = n[m];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  90427: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => p, frontMatter: () => i, metadata: () => s, toc: () => m });
   var r = n(87462),
    a = (n(67294), n(3905));
   const i = { title: "NL Design System in 2021", slug: "nl-design-system-in-2021", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/2021.jpeg", hide_table_of_contents: !1, date: new Date("2021-12-23T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/blog/nl-design-system-in-2021",
     source: "@site/blog/2021/20211223-nl-design-system-in-2021.md",
     title: "NL Design System in 2021",
     description: "Het was weer een bijzonder jaar. Zeker ook voor NL Design System. En we zijn blij dat we zoveel hebben kunnen bereiken en trots op de mooie resultaten die we hebben geboekt. We blikken graag terug op het afgelopen jaar.",
     date: "2021-12-23T00:00:00.000Z",
     formattedDate: "23 december 2021",
     tags: [
      { label: "Figma", permalink: "/blog/tags/figma" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     readingTime: 3.88,
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "NL Design System in 2021", slug: "nl-design-system-in-2021", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/2021.jpeg", hide_table_of_contents: !1, date: "2021-12-23T00:00:00.000Z" },
     prevItem: { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", permalink: "/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system" },
     nextItem: { title: "Over Figma als keuze voor het NL Design System", permalink: "/blog/over-figma-als-keuze-voor-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    m = [],
    c = { toc: m },
    g = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(g, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Het was weer een bijzonder jaar. Zeker ook voor NL Design System. En we zijn blij dat we zoveel hebben kunnen bereiken en trots op de mooie resultaten die we hebben geboekt. We blikken graag terug op het afgelopen jaar."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
