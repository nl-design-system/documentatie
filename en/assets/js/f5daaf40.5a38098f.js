"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [47587],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => d });
   var r = n(67294);
   function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
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
   function i(e) {
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
   function s(e, t) {
    if (null == e) return {};
    var n,
     r,
     a = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       a = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
   }
   var l = r.createContext({}),
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    g = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      a = e.mdxType,
      o = e.originalType,
      l = e.parentName,
      p = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = c(n),
      u = a,
      d = g["".concat(l, ".").concat(u)] || g[u] || m[u] || o;
     return n ? r.createElement(d, i(i({ ref: t }, p), {}, { components: n })) : r.createElement(d, i({ ref: t }, p));
    });
   function d(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var o = n.length,
      i = new Array(o);
     i[0] = u;
     var s = {};
     for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : a), (i[1] = s);
     for (var c = 2; c < o; c++) i[c] = n[c];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  25655: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => m, frontMatter: () => o, metadata: () => s, toc: () => c });
   var r = n(87462),
    a = (n(67294), n(3905));
   const o = { title: "Kick-off werkgroepen van het NL Design System", slug: "kick-off-werkgroepen-van-het-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["werkgroepen", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/05/binary-2450188_1920-1200x675.jpg", hide_table_of_contents: !1, date: new Date("2019-05-07T00:00:00.000Z") },
    i = void 0,
    s = {
     permalink: "/en/blog/kick-off-werkgroepen-van-het-nl-design-system",
     source: "@site/blog/2019/20190507-kick-off-werkgroepen-van-het-nl-design-system.md",
     title: "Kick-off werkgroepen van het NL Design System",
     description: "We zijn uit de startblokken met de werkgroepen van het NL Design System! Woensdag 24 april hebben twintig ontwerpers, UX experts en ontwikkelaars met elkaar nagedacht over principes, criteria en concrete componenten.",
     date: "2019-05-07T00:00:00.000Z",
     formattedDate: "May 7, 2019",
     tags: [
      { label: "werkgroepen", permalink: "/en/blog/tags/werkgroepen" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     readingTime: 6.13,
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "Kick-off werkgroepen van het NL Design System", slug: "kick-off-werkgroepen-van-het-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["werkgroepen", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/05/binary-2450188_1920-1200x675.jpg", hide_table_of_contents: !1, date: "2019-05-07T00:00:00.000Z" },
     prevItem: { title: "Update - NL Design System", permalink: "/en/blog/update-nl-design-system" },
     nextItem: { title: "E\xe9n over\xadheid - practise what you preach", permalink: "/en/blog/van-start-een-gezamelijk-design-system-voor-de-overheid" },
    },
    l = { authorsImageUrls: [void 0] },
    c = [],
    p = { toc: c },
    g = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(g, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "We zijn uit de startblokken met de werkgroepen van het NL Design System! Woensdag 24 april hebben twintig ontwerpers, UX experts en ontwikkelaars met elkaar nagedacht over principes, criteria en concrete componenten."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
