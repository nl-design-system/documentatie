"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94210],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => g });
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
    p = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    d = function (e) {
     var t = p(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    c = "mdxType",
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
      d = s(e, ["components", "mdxType", "originalType", "parentName"]),
      c = p(n),
      u = a,
      g = c["".concat(l, ".").concat(u)] || c[u] || m[u] || o;
     return n ? r.createElement(g, i(i({ ref: t }, d), {}, { components: n })) : r.createElement(g, i({ ref: t }, d));
    });
   function g(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var o = n.length,
      i = new Array(o);
     i[0] = u;
     var s = {};
     for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
     (s.originalType = e), (s[c] = "string" == typeof e ? e : a), (i[1] = s);
     for (var p = 2; p < o; p++) i[p] = n[p];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  50018: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => m, frontMatter: () => o, metadata: () => s, toc: () => p });
   var r = n(87462),
    a = (n(67294), n(3905));
   const o = { title: "Update - NL Design System", slug: "update-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["update", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/rijkshuisstijl-knoppen-e1548707321947.png", hide_table_of_contents: !1, date: new Date("2019-06-06T00:00:00.000Z") },
    i = void 0,
    s = {
     permalink: "/blog/update-nl-design-system",
     source: "@site/blog/2019/20190606-update-nl-design-system.md",
     title: "Update - NL Design System",
     description: "Update over de stand van zaken rondom het traject NL Design System, ge\xefnitieerd door Gebruiker Centraal. In samenwerking met medewerkers van diverse overheidsorganisaties.",
     date: "2019-06-06T00:00:00.000Z",
     formattedDate: "6 juni 2019",
     tags: [
      { label: "update", permalink: "/blog/tags/update" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "Update - NL Design System", slug: "update-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["update", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/rijkshuisstijl-knoppen-e1548707321947.png", hide_table_of_contents: !1, date: "2019-06-06T00:00:00.000Z" },
     prevItem: { title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem", permalink: "/blog/top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system" },
     nextItem: { title: "Kick-off werkgroepen van het NL Design System", permalink: "/blog/kick-off-werkgroepen-van-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    p = [],
    d = { toc: p },
    c = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(c, (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Update over de stand van zaken rondom het traject NL Design System, ge\xefnitieerd door Gebruiker Centraal. In samenwerking met medewerkers van diverse overheidsorganisaties."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
