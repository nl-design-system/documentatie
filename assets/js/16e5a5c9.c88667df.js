"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [99105],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => g });
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
   function l(e, t) {
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
   var s = r.createContext({}),
    c = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
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
      a = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(n),
      u = a,
      g = d["".concat(s, ".").concat(u)] || d[u] || m[u] || o;
     return n ? r.createElement(g, i(i({ ref: t }, p), {}, { components: n })) : r.createElement(g, i({ ref: t }, p));
    });
   function g(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var o = n.length,
      i = new Array(o);
     i[0] = u;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : a), (i[1] = l);
     for (var c = 2; c < o; c++) i[c] = n[c];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  36983: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => i, default: () => m, frontMatter: () => o, metadata: () => l, toc: () => c });
   var r = n(87462),
    a = (n(67294), n(3905));
   const o = { title: "E\xe9n over\xadheid - practise what you preach", slug: "van-start-een-gezamelijk-design-system-voor-de-overheid", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["een overheid", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png", hide_table_of_contents: !1, date: new Date("2019-03-25T00:00:00.000Z") },
    i = void 0,
    l = {
     permalink: "/blog/van-start-een-gezamelijk-design-system-voor-de-overheid",
     source: "@site/blog/2019/20190325-een-overheid-practice-what-you-preach.md",
     title: "E\xe9n over\xadheid - practise what you preach",
     description: "E\xe9n overheid - Practise what you preach. Een gezamenlijk design system voor de overheid.",
     date: "2019-03-25T00:00:00.000Z",
     formattedDate: "25 maart 2019",
     tags: [
      { label: "een overheid", permalink: "/blog/tags/een-overheid" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     readingTime: 2.25,
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "E\xe9n over\xadheid - practise what you preach", slug: "van-start-een-gezamelijk-design-system-voor-de-overheid", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["een overheid", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png", hide_table_of_contents: !1, date: "2019-03-25T00:00:00.000Z" },
     prevItem: { title: "Kick-off werkgroepen van het NL Design System", permalink: "/blog/kick-off-werkgroepen-van-het-nl-design-system" },
     nextItem: { title: "Van start! Een gezamelijk design system voor de overheid", permalink: "/blog/een-overheid-practice-what-you-preach" },
    },
    s = { authorsImageUrls: [void 0] },
    c = [],
    p = { toc: c },
    d = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(d, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "E\xe9n overheid - Practise what you preach. Een gezamenlijk design system voor de overheid."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
