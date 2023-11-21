"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31906],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => u, kt: () => d });
   var r = n(67294);
   function o(e, t, n) {
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
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
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
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var c = r.createContext({}),
    l = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    u = function (e) {
     var t = l(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    g = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      a = e.originalType,
      c = e.parentName,
      u = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = l(n),
      g = o,
      d = m["".concat(c, ".").concat(g)] || m[g] || p[g] || a;
     return n ? r.createElement(d, i(i({ ref: t }, u), {}, { components: n })) : r.createElement(d, i({ ref: t }, u));
    });
   function d(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var a = n.length,
      i = new Array(a);
     i[0] = g;
     var s = {};
     for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : o), (i[1] = s);
     for (var l = 2; l < a; l++) i[l] = n[l];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   g.displayName = "MDXCreateElement";
  },
  83343: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => i, default: () => p, frontMatter: () => a, metadata: () => s, toc: () => l });
   var r = n(87462),
    o = (n(67294), n(3905));
   const a = { title: "Jouw project inrichten op de NL Design System-architectuur", slug: "jouw-project-inrichten-op-de-nl-design-system-architectuur", authors: [{ name: "Robbert Broersma", title: "Design System Lead NL Design System", url: "http://robbertbroersma.nl" }], tags: ["architectuur", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/05/MicrosoftTeams-image.png", hide_table_of_contents: !1, date: new Date("2021-05-21T00:00:00.000Z") },
    i = void 0,
    s = {
     permalink: "/en/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur",
     source: "@site/blog/2021/20210521-jouw-project-inrichten-op-de-nl-design-system-architectuur.md",
     title: "Jouw project inrichten op de NL Design System-architectuur",
     description: "2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan.",
     date: "2021-05-21T00:00:00.000Z",
     formattedDate: "May 21, 2021",
     tags: [
      { label: "architectuur", permalink: "/en/blog/tags/architectuur" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Robbert Broersma", title: "Design System Lead NL Design System", url: "http://robbertbroersma.nl" }],
     frontMatter: { title: "Jouw project inrichten op de NL Design System-architectuur", slug: "jouw-project-inrichten-op-de-nl-design-system-architectuur", authors: [{ name: "Robbert Broersma", title: "Design System Lead NL Design System", url: "http://robbertbroersma.nl" }], tags: ["architectuur", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/05/MicrosoftTeams-image.png", hide_table_of_contents: !1, date: "2021-05-21T00:00:00.000Z" },
     prevItem: { title: "Innovatiebudget voor de werkwijze van het NL Design System", permalink: "/en/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system" },
     nextItem: { title: "Waarom NL Design System onmisbaar is voor organisaties", permalink: "/en/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties" },
    },
    c = { authorsImageUrls: [void 0] },
    l = [],
    u = { toc: l },
    m = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(m, (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("p", null, "2 teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System-componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende 2 weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
