"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97323],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => p });
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
    m = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    g = {
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
      c = o(e, ["components", "mdxType", "originalType", "parentName"]),
      u = m(n),
      d = i,
      p = u["".concat(l, ".").concat(d)] || u[d] || g[d] || a;
     return n ? r.createElement(p, s(s({ ref: t }, c), {}, { components: n })) : r.createElement(p, s({ ref: t }, c));
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
     for (var m = 2; m < a; m++) s[m] = n[m];
     return r.createElement.apply(null, s);
    }
    return r.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  24176: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => s, default: () => g, frontMatter: () => a, metadata: () => o, toc: () => m });
   var r = n(87462),
    i = (n(67294), n(3905));
   const a = { title: "Waarom NL Design System onmisbaar is voor organisaties", slug: "waarom-nl-design-system-onmisbaar-is-voor-organisaties", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: new Date("2020-12-16T00:00:00.000Z") },
    s = void 0,
    o = {
     permalink: "/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties",
     source: "@site/blog/2020/20201216-waarom-nl-design-system-onmisbaar-is-voor-organisaties.md",
     title: "Waarom NL Design System onmisbaar is voor organisaties",
     description: "Samenwerken naar \xe9\xe9n overheidsbeleving voor de burger, dat is waar het NL Design System om draait. Carina Palumbo en Sjef van Leeuwen van Wigo4it draaien er niet omheen; in de toekomst hoor je er als overheidsinstantie niet meer bij zonder een gezamenlijke implementatie van het NL Design System! In deze blog vertellen zij vanuit hun technische en UX-ervaring over de realisatie van het designsysteem.",
     date: "2020-12-16T00:00:00.000Z",
     formattedDate: "16 december 2020",
     tags: [
      { label: "contentrichtlijnen", permalink: "/blog/tags/contentrichtlijnen" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "Waarom NL Design System onmisbaar is voor organisaties", slug: "waarom-nl-design-system-onmisbaar-is-voor-organisaties", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: "2020-12-16T00:00:00.000Z" },
     prevItem: { title: "Jouw project inrichten op de NL Design System-architectuur", permalink: "/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur" },
     nextItem: { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", permalink: "/blog/uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    m = [],
    c = { toc: m },
    u = "wrapper";
   function g(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(u, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Samenwerken naar \xe9\xe9n overheidsbeleving voor de burger, dat is waar het NL Design System om draait. Carina Palumbo en Sjef van Leeuwen van Wigo4it draaien er niet omheen; in de toekomst hoor je er als overheidsinstantie niet meer bij zonder een gezamenlijke implementatie van het NL Design System! In deze blog vertellen zij vanuit hun technische en UX-ervaring over de realisatie van het designsysteem."));
   }
   g.isMDXComponent = !0;
  },
 },
]);
