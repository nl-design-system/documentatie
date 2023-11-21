"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [20932],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => u });
   var r = t(67294);
   function i(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function s(e, n) {
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
   function o(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? s(Object(t), !0).forEach(function (n) {
         i(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : s(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function a(e, n) {
    if (null == e) return {};
    var t,
     r,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       i = {},
       s = Object.keys(e);
      for (r = 0; r < s.length; r++) (t = s[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (r = 0; r < s.length; r++) (t = s[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   var l = r.createContext({}),
    c = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = c(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    g = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      s = e.originalType,
      l = e.parentName,
      m = a(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(t),
      g = i,
      u = d["".concat(l, ".").concat(g)] || d[g] || p[g] || s;
     return t ? r.createElement(u, o(o({ ref: n }, m), {}, { components: t })) : r.createElement(u, o({ ref: n }, m));
    });
   function u(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var s = t.length,
      o = new Array(s);
     o[0] = g;
     var a = {};
     for (var l in n) hasOwnProperty.call(n, l) && (a[l] = n[l]);
     (a.originalType = e), (a[d] = "string" == typeof e ? e : i), (o[1] = a);
     for (var c = 2; c < s; c++) o[c] = t[c];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   g.displayName = "MDXCreateElement";
  },
  63842: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => p, frontMatter: () => s, metadata: () => a, toc: () => c });
   var r = t(87462),
    i = (t(67294), t(3905));
   const s = { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", slug: "uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: new Date("2020-12-04T00:00:00.000Z") },
    o = void 0,
    a = {
     permalink: "/blog/uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system",
     source: "@site/blog/2020/20201204-uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system.md",
     title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System",
     description: "In een (online) bijeenkomst op 3 november presenteerden we een aantal goede voorbeelden van contentricthtlijnen en gingen we met de deelnemers aan de slag om met elkaar te verzinnen hoe dit in het Nederlandse designsysteem zou passen. Tijdens deze bijeenkomst is er gesproken over de verschillende content-aspecten in een designsysteem. We hebben de algemene conclusies voor je op een rij gezet.",
     date: "2020-12-04T00:00:00.000Z",
     formattedDate: "4 december 2020",
     tags: [
      { label: "contentrichtlijnen", permalink: "/blog/tags/contentrichtlijnen" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", slug: "uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: "2020-12-04T00:00:00.000Z" },
     prevItem: { title: "Waarom NL Design System onmisbaar is voor organisaties", permalink: "/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties" },
     nextItem: { title: "Innovatiebudget voor het NL Design System", permalink: "/blog/innovatiebudget-voor-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    c = [],
    m = { toc: c },
    d = "wrapper";
   function p(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(d, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "In een (online) bijeenkomst op 3 november presenteerden we een aantal goede voorbeelden van contentricthtlijnen en gingen we met de deelnemers aan de slag om met elkaar te verzinnen hoe dit in het Nederlandse designsysteem zou passen. Tijdens deze bijeenkomst is er gesproken over de verschillende content-aspecten in een designsysteem. We hebben de algemene conclusies voor je op een rij gezet."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
