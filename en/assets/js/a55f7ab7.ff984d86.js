"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [82714],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => p });
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
   function s(e) {
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
   function o(e, t) {
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
    g = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
    },
    m = function (e) {
     var t = g(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    d = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      m = o(e, ["components", "mdxType", "originalType", "parentName"]),
      u = g(n),
      d = i,
      p = u["".concat(l, ".").concat(d)] || u[d] || c[d] || a;
     return n ? r.createElement(p, s(s({ ref: t }, m), {}, { components: n })) : r.createElement(p, s({ ref: t }, m));
    });
   function p(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var a = n.length,
      s = new Array(a);
     s[0] = d;
     var o = {};
     for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
     (o.originalType = e), (o[u] = "string" == typeof e ? e : i), (s[1] = o);
     for (var g = 2; g < a; g++) s[g] = n[g];
     return r.createElement.apply(null, s);
    }
    return r.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  7902: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => s, default: () => c, frontMatter: () => a, metadata: () => o, toc: () => g });
   var r = n(87462),
    i = (n(67294), n(3905));
   const a = { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", slug: "bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-06-20T00:00:00.000Z") },
    s = void 0,
    o = {
     permalink: "/en/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system",
     source: "@site/blog/2022/20220620-bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system.md",
     title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System",
     description: "Front-end developer Bryan de Jong werkte mee aan het ontwikkelen van een nieuw design system voor de gemeente Den Haag, met behulp van het NL Design System. Inmiddels gaat hij zijn vleugels uitspreiden in het buitenland en blikt terug op de samenwerking met het team van het NL Design System.",
     date: "2022-06-20T00:00:00.000Z",
     formattedDate: "June 20, 2022",
     tags: [
      { label: "Figma", permalink: "/en/blog/tags/figma" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }],
     frontMatter: { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", slug: "bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-06-20T00:00:00.000Z" },
     prevItem: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", permalink: "/en/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system" },
     nextItem: { title: "NL Design System in 2021", permalink: "/en/blog/nl-design-system-in-2021" },
    },
    l = { authorsImageUrls: [void 0] },
    g = [],
    m = { toc: g },
    u = "wrapper";
   function c(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(u, (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Front-end developer Bryan de Jong werkte mee aan het ontwikkelen van een nieuw design system voor de gemeente Den Haag, met behulp van het NL Design System. Inmiddels gaat hij zijn vleugels uitspreiden in het buitenland en blikt terug op de samenwerking met het team van het NL Design System."));
   }
   c.isMDXComponent = !0;
  },
 },
]);
