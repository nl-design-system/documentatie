"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [37923],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => g, kt: () => p });
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
    d = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    g = function (e) {
     var t = d(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    c = {
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
      g = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(n),
      u = a,
      p = m["".concat(l, ".").concat(u)] || m[u] || c[u] || o;
     return n ? r.createElement(p, i(i({ ref: t }, g), {}, { components: n })) : r.createElement(p, i({ ref: t }, g));
    });
   function p(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var o = n.length,
      i = new Array(o);
     i[0] = u;
     var s = {};
     for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : a), (i[1] = s);
     for (var d = 2; d < o; d++) i[d] = n[d];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  63869: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => c, frontMatter: () => o, metadata: () => s, toc: () => d });
   var r = n(87462),
    a = (n(67294), n(3905));
   const o = { title: "Innovatiebudget voor het NL Design System", slug: "innovatiebudget-voor-nl-design-system", authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }], tags: ["update", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/08/drie-mannen-design-system.jpg", hide_table_of_contents: !1, date: new Date("2020-08-04T00:00:00.000Z") },
    i = void 0,
    s = {
     permalink: "/blog/innovatiebudget-voor-nl-design-system",
     source: "@site/blog/2020/20200804-innovatiebudget-voor-nl-design-system.md",
     title: "Innovatiebudget voor het NL Design System",
     description: "We hebben met het NL Design System een aanvraag gedaan voor het Innovatiebudget 2020. En we kunnen met trots melden dat we 1 van de 24 projecten zijn waarvan de aanvraag is gegund! Het innovatiebudget wordt elk jaar door BZK uitgereikt aan innovatieve projecten, die bijdragen aan de verbetering van de digitale dienstverlening van de overheid.",
     date: "2020-08-04T00:00:00.000Z",
     formattedDate: "4 augustus 2020",
     tags: [
      { label: "update", permalink: "/blog/tags/update" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }],
     frontMatter: { title: "Innovatiebudget voor het NL Design System", slug: "innovatiebudget-voor-nl-design-system", authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }], tags: ["update", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/08/drie-mannen-design-system.jpg", hide_table_of_contents: !1, date: "2020-08-04T00:00:00.000Z" },
     prevItem: { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", permalink: "/blog/uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system" },
     nextItem: { title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem", permalink: "/blog/top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [],
    g = { toc: d },
    m = "wrapper";
   function c(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(m, (0, r.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "We hebben met het NL Design System een aanvraag gedaan voor het ", (0, a.kt)("a", { parentName: "p", href: "https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/" }, "Innovatiebudget 2020"), ". En we kunnen met trots melden dat we 1 van de 24 projecten zijn waarvan de aanvraag is gegund! Het innovatiebudget wordt elk jaar door BZK uitgereikt aan innovatieve projecten, die bijdragen aan de verbetering van de digitale dienstverlening van de overheid."));
   }
   c.isMDXComponent = !0;
  },
 },
]);
