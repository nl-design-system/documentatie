"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [14418],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => g });
   var r = n(67294);
   function s(e, t, n) {
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
         s(e, t, n[t]);
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
     s = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       s = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
      return s;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
    }
    return s;
   }
   var l = r.createContext({}),
    m = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
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
      s = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      c = o(e, ["components", "mdxType", "originalType", "parentName"]),
      p = m(n),
      u = s,
      g = p["".concat(l, ".").concat(u)] || p[u] || d[u] || i;
     return n ? r.createElement(g, a(a({ ref: t }, c), {}, { components: n })) : r.createElement(g, a({ ref: t }, c));
    });
   function g(e, t) {
    var n = arguments,
     s = t && t.mdxType;
    if ("string" == typeof e || s) {
     var i = n.length,
      a = new Array(i);
     a[0] = u;
     var o = {};
     for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
     (o.originalType = e), (o[p] = "string" == typeof e ? e : s), (a[1] = o);
     for (var m = 2; m < i; m++) a[m] = n[m];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  77965: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => d, frontMatter: () => i, metadata: () => o, toc: () => m });
   var r = n(87462),
    s = (n(67294), n(3905));
   const i = { title: "Design Systems Week 2023 komt eraan!", slug: "design-systems-week-2023-komt-eraan", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design systems week"], hide_table_of_contents: !1, date: new Date("2023-09-18T00:00:00.000Z") },
    a = void 0,
    o = {
     permalink: "/blog/design-systems-week-2023-komt-eraan",
     source: "@site/blog/2023/20230918-design-systems-week-2023-komt-eraan.md",
     title: "Design Systems Week 2023 komt eraan!",
     description: "In zo\u2019n 20-25 minuten leren over design systems van experts van bijvoorbeeld GOV.UK, GitHub en Kamer van Koophandel? Net als vorig jaar organiseert het NL Design System-kernteam een Design Systems Week.",
     date: "2023-09-18T00:00:00.000Z",
     formattedDate: "18 september 2023",
     tags: [
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
      { label: "design systems week", permalink: "/blog/tags/design-systems-week" },
     ],
     readingTime: 2.34,
     hasTruncateMarker: !0,
     authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }],
     frontMatter: { title: "Design Systems Week 2023 komt eraan!", slug: "design-systems-week-2023-komt-eraan", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design systems week"], hide_table_of_contents: !1, date: "2023-09-18T00:00:00.000Z" },
     prevItem: { title: "Spacing tokens als systeem voor verticale ruimte", permalink: "/blog/spacing-tokens" },
     nextItem: { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", permalink: "/blog/nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype" },
    },
    l = { authorsImageUrls: [void 0] },
    m = [],
    c = { toc: m },
    p = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, s.kt)(p, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, s.kt)("p", null, "In zo\u2019n 20-25 minuten leren over design systems van experts van bijvoorbeeld GOV.UK, GitHub en Kamer van Koophandel? Net als vorig jaar organiseert het NL Design System-kernteam een Design Systems Week."));
   }
   d.isMDXComponent = !0;
  },
 },
]);
