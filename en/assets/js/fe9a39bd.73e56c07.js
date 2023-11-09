"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [35959],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => g, kt: () => u });
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
   function o(e) {
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
   function s(e, n) {
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
   var l = r.createContext({}),
    d = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    g = function (e) {
     var n = d(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    c = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      g = s(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(t),
      c = a,
      u = p["".concat(l, ".").concat(c)] || p[c] || m[c] || i;
     return t ? r.createElement(u, o(o({ ref: n }, g), {}, { components: t })) : r.createElement(u, o({ ref: n }, g));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      o = new Array(i);
     o[0] = c;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[p] = "string" == typeof e ? e : a), (o[1] = s);
     for (var d = 2; d < i; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   c.displayName = "MDXCreateElement";
  },
  22010: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => m, frontMatter: () => i, metadata: () => s, toc: () => d });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem", slug: "top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system", authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }], tags: ["update", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/08/drie-mannen-design-system.jpg", hide_table_of_contents: !1, date: new Date("2020-01-22T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/en/blog/top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system",
     source: "@site/blog/2020/20200122-top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system.md",
     title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem",
     description: "Tijdens de International Design in Government conferentie vroegen we de aanwezige deelnemers of ze een vragenlijst over design systemen wilden invullen. Omdat wij bezig zijn met de ontwikkeling van een centraal design systeem voor de Nederlandse overheid: het NL Design System, willen we gebruikmaken en leren van bestaande kennis en ervaring.",
     date: "2020-01-22T00:00:00.000Z",
     formattedDate: "January 22, 2020",
     tags: [
      { label: "update", permalink: "/en/blog/tags/update" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     readingTime: 0.56,
     hasTruncateMarker: !0,
     authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }],
     frontMatter: { title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem", slug: "top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system", authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }], tags: ["update", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/08/drie-mannen-design-system.jpg", hide_table_of_contents: !1, date: "2020-01-22T00:00:00.000Z" },
     prevItem: { title: "Innovatiebudget voor het NL Design System", permalink: "/en/blog/innovatiebudget-voor-nl-design-system" },
     nextItem: { title: "Update - NL Design System", permalink: "/en/blog/update-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [],
    g = { toc: d },
    p = "wrapper";
   function m(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(p, (0, r.Z)({}, g, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Tijdens de International Design in Government conferentie vroegen we de aanwezige deelnemers of ze een vragenlijst over design systemen wilden invullen. Omdat wij bezig zijn met de ontwikkeling van een centraal design systeem voor de Nederlandse overheid: het NL Design System, willen we gebruikmaken en leren van bestaande kennis en ervaring."), (0, a.kt)("p", null, "Uitkomsten vragenlijst design systeem"), (0, a.kt)("p", null, "Het resultaat: een top 10 aan onderwerpen die volgens de respondenten de meeste waarde toevoegen aan een design systeem. De eerste versie van het NL Design System komt in de loop van februari online beschikbaar. Bij de doorontwikkeling gaan we prioriteit geven aan de verzamelde top 10."), (0, a.kt)("p", null, (0, a.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/blog/de-top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-systeem/" }, "Lees het volledige artikel op Gebruiker Centraal"), "."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
