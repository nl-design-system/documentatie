"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97177],
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
   function s(e) {
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
   function l(e, n) {
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
   var o = r.createContext({}),
    c = function (e) {
     var n = r.useContext(o),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : s(s({}, n), e)), t;
    },
    m = function (e) {
     var n = c(e.components);
     return r.createElement(o.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    u = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      o = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = c(t),
      u = a,
      g = p["".concat(o, ".").concat(u)] || p[u] || d[u] || i;
     return t ? r.createElement(g, s(s({ ref: n }, m), {}, { components: t })) : r.createElement(g, s({ ref: n }, m));
    });
   function g(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      s = new Array(i);
     s[0] = u;
     var l = {};
     for (var o in n) hasOwnProperty.call(n, o) && (l[o] = n[o]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : a), (s[1] = l);
     for (var c = 2; c < i; c++) s[c] = t[c];
     return r.createElement.apply(null, s);
    }
    return r.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  93867: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => s, default: () => d, frontMatter: () => i, metadata: () => l, toc: () => c });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "Design systems in het buitenland - 6 lessen", slug: "design-systems-in-het-buitenland-6-lessen", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["buitenland", "design systems"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2018/04/RAL_DESIGN_System_D2_Farbf\xe4cher-1200x675.jpg", hide_table_of_contents: !1, date: new Date("2018-04-26T00:00:00.000Z") },
    s = void 0,
    l = {
     permalink: "/en/blog/design-systems-in-het-buitenland-6-lessen",
     source: "@site/blog/2018/20180426-design-systems-in-het-buitenland.md",
     title: "Design systems in het buitenland - 6 lessen",
     description: "De mensen achter GOV.UK zijn in 2017 gestart met een internationale community van designers en ontwikkelaars. Op 23 april 2018 organiseerden ze een call over design systems, waaraan 42 deelnemers uit alle hoeken van de wereld deelnamen.",
     date: "2018-04-26T00:00:00.000Z",
     formattedDate: "April 26, 2018",
     tags: [
      { label: "buitenland", permalink: "/en/blog/tags/buitenland" },
      { label: "design systems", permalink: "/en/blog/tags/design-systems" },
     ],
     readingTime: 3.96,
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "Design systems in het buitenland - 6 lessen", slug: "design-systems-in-het-buitenland-6-lessen", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["buitenland", "design systems"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2018/04/RAL_DESIGN_System_D2_Farbf\xe4cher-1200x675.jpg", hide_table_of_contents: !1, date: "2018-04-26T00:00:00.000Z" },
     prevItem: { title: "Van start! Een gezamelijk design system voor de overheid", permalink: "/en/blog/een-overheid-practice-what-you-preach" },
    },
    o = { authorsImageUrls: [void 0] },
    c = [],
    m = { toc: c },
    p = "wrapper";
   function d(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(p, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "De mensen achter ", (0, a.kt)("a", { parentName: "p", href: "https://www.gov.uk/" }, "GOV.UK"), " zijn in 2017 gestart met een internationale community van designers en ontwikkelaars. Op 23 april 2018 organiseerden ze een call over ", (0, a.kt)("a", { parentName: "p", href: "http://danellebailey.com/design-blog/2016/9/15/what-is-a-design-system" }, "design systems"), ", waaraan 42 deelnemers uit alle hoeken van de wereld deelnamen."));
   }
   d.isMDXComponent = !0;
  },
 },
]);
