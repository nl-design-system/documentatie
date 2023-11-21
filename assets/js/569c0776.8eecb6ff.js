"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [44307],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => p });
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
   function o(e) {
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
   function s(e, t) {
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
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    d = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    g = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      d = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = c(n),
      u = i,
      p = m["".concat(l, ".").concat(u)] || m[u] || g[u] || a;
     return n ? r.createElement(p, o(o({ ref: t }, d), {}, { components: n })) : r.createElement(p, o({ ref: t }, d));
    });
   function p(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var a = n.length,
      o = new Array(a);
     o[0] = u;
     var s = {};
     for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : i), (o[1] = s);
     for (var c = 2; c < a; c++) o[c] = n[c];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  30082: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => g, frontMatter: () => a, metadata: () => s, toc: () => c });
   var r = n(87462),
    i = (n(67294), n(3905));
   const a = { title: "Innovatiebudget voor de werkwijze van het NL Design System", slug: "innovatiebudget-voor-de-werkwijze-van-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: new Date("2021-07-29T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system",
     source: "@site/blog/2021/20210729-innovatiebudget-voor-de-werkwijze-van-het-nl-design-system copy.md",
     title: "Innovatiebudget voor de werkwijze van het NL Design System",
     description: "NL Design System is 1 van 20 projecten die een bijdrage uit het Innovatiebudget Digitale Overheid 2021 ontving. We kregen dat voor de pilot \u2018Samenwerkingsmodel herbruikbare basisonderdelen voor overheidsbrede dienstverlening\u2019 waarmee we de inrichting van samenwerking over overheidsorganisaties heen binnen 1 centraal (design) systeem beproeven.",
     date: "2021-07-29T00:00:00.000Z",
     formattedDate: "29 juli 2021",
     tags: [
      { label: "contentrichtlijnen", permalink: "/blog/tags/contentrichtlijnen" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "Innovatiebudget voor de werkwijze van het NL Design System", slug: "innovatiebudget-voor-de-werkwijze-van-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: "2021-07-29T00:00:00.000Z" },
     prevItem: { title: "Over Figma als keuze voor het NL Design System", permalink: "/blog/over-figma-als-keuze-voor-het-nl-design-system" },
     nextItem: { title: "Jouw project inrichten op de NL Design System-architectuur", permalink: "/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur" },
    },
    l = { authorsImageUrls: [void 0] },
    c = [],
    d = { toc: c },
    m = "wrapper";
   function g(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(m, (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "NL Design System is 1 van 20 projecten die een bijdrage uit het Innovatiebudget Digitale Overheid 2021 ontving. We kregen dat voor de pilot \u2018Samenwerkingsmodel herbruikbare basisonderdelen voor overheidsbrede dienstverlening\u2019 waarmee we de inrichting van samenwerking over overheidsorganisaties heen binnen 1 centraal (design) systeem beproeven."));
   }
   g.isMDXComponent = !0;
  },
 },
]);
