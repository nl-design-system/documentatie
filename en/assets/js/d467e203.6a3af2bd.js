"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [76902],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => g });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function s(e, t) {
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
      ? s(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : s(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       s = Object.keys(e);
      for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var l = r.createContext({}),
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      s = e.originalType,
      l = e.parentName,
      p = a(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(n),
      u = i,
      g = d["".concat(l, ".").concat(u)] || d[u] || m[u] || s;
     return n ? r.createElement(g, o(o({ ref: t }, p), {}, { components: n })) : r.createElement(g, o({ ref: t }, p));
    });
   function g(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var s = n.length,
      o = new Array(s);
     o[0] = u;
     var a = {};
     for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
     (a.originalType = e), (a[d] = "string" == typeof e ? e : i), (o[1] = a);
     for (var c = 2; c < s; c++) o[c] = n[c];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  64833: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => m, frontMatter: () => s, metadata: () => a, toc: () => c });
   var r = n(87462),
    i = (n(67294), n(3905));
   const s = { title: "Spacing tokens als systeem voor verticale ruimte", slug: "spacing-tokens", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design tokens"], hide_table_of_contents: !1, date: new Date("2023-11-09T00:00:00.000Z") },
    o = void 0,
    a = {
     permalink: "/en/blog/spacing-tokens",
     source: "@site/blog/2023/20231109-spacing-tokens.md",
     title: "Spacing tokens als systeem voor verticale ruimte",
     description: "Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in het Design Open Hour.",
     date: "2023-11-09T00:00:00.000Z",
     formattedDate: "November 9, 2023",
     tags: [
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
      { label: "design tokens", permalink: "/en/blog/tags/design-tokens" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }],
     frontMatter: { title: "Spacing tokens als systeem voor verticale ruimte", slug: "spacing-tokens", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design tokens"], hide_table_of_contents: !1, date: "2023-11-09T00:00:00.000Z" },
     nextItem: { title: "Design Systems Week 2023 komt eraan!", permalink: "/en/blog/design-systems-week-2023-komt-eraan" },
    },
    l = { authorsImageUrls: [void 0] },
    c = [],
    p = { toc: c },
    d = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(d, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in het Design Open Hour."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
