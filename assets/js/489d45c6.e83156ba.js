"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3900],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => u, kt: () => c });
   var a = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a);
    }
    return t;
   }
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function o(e, n) {
    if (null == e) return {};
    var t,
     a,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       a,
       r = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var s = a.createContext({}),
    m = function (e) {
     var n = a.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
    },
    u = function (e) {
     var n = m(e.components);
     return a.createElement(s.Provider, { value: n }, e.children);
    },
    d = "mdxType",
    g = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    p = a.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      u = o(e, ["components", "mdxType", "originalType", "parentName"]),
      d = m(t),
      p = r,
      c = d["".concat(s, ".").concat(p)] || d[p] || g[p] || i;
     return t ? a.createElement(c, l(l({ ref: n }, u), {}, { components: t })) : a.createElement(c, l({ ref: n }, u));
    });
   function c(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var i = t.length,
      l = new Array(i);
     l[0] = p;
     var o = {};
     for (var s in n) hasOwnProperty.call(n, s) && (o[s] = n[s]);
     (o.originalType = e), (o[d] = "string" == typeof e ? e : r), (l[1] = o);
     for (var m = 2; m < i; m++) l[m] = t[m];
     return a.createElement.apply(null, l);
    }
    return a.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  26327: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => l, default: () => g, frontMatter: () => i, metadata: () => o, toc: () => m });
   var a = t(87462),
    r = (t(67294), t(3905));
   const i = { title: "De mijlpalen van 2022", slug: "de-mijlpalen-van-2022", authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }], tags: ["mijlpalen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-12-22T00:00:00.000Z") },
    l = void 0,
    o = {
     permalink: "/blog/de-mijlpalen-van-2022",
     source: "@site/blog/2022/20221222-de-mijlpalen-van-2022.md",
     title: "De mijlpalen van 2022",
     description: "Eind vorig jaar hebben we samen met de community stilgestaan bij de plannen en werkzaamheden voor 2022. Nu het jaar er bijna op zit, is het dan ook tijd om terug te blikken en te kijken naar wat er allemaal gedaan is. E\xe9n ding is zeker; 2022 was een druk jaar.",
     date: "2022-12-22T00:00:00.000Z",
     formattedDate: "22 december 2022",
     tags: [
      { label: "mijlpalen", permalink: "/blog/tags/mijlpalen" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }],
     frontMatter: { title: "De mijlpalen van 2022", slug: "de-mijlpalen-van-2022", authors: [{ name: "Laura van Swigchum", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/lauravanswigchum/" }], tags: ["mijlpalen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-12-22T00:00:00.000Z" },
     prevItem: { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", permalink: "/blog/nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype" },
     nextItem: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", permalink: "/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system" },
    },
    s = { authorsImageUrls: [void 0] },
    m = [],
    u = { toc: m },
    d = "wrapper";
   function g(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(d, (0, a.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "Eind vorig jaar hebben we samen met de community stilgestaan bij de plannen en werkzaamheden voor 2022. Nu het jaar er bijna op zit, is het dan ook tijd om terug te blikken en te kijken naar wat er allemaal gedaan is. E\xe9n ding is zeker; 2022 was een druk jaar."), (0, r.kt)("p", null, "We kijken er vanuit het kernteam met een grote glimlach op terug! Er zijn namelijk weer meer teams aangesloten en meer mensen enthousiast over het NL Design System."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl" }, "Op Slack"), " heeft Yolijn beschreven wat we hebben gedaan met de doelen die we hadden gesteld voor 2022."), (0, r.kt)("p", null, "Een aantal hoogtepunten:"), (0, r.kt)("p", null, "RVO die NL Design System voor een groter publiek bij de Rijksoverheid beschikbaar heeft gemaakt;\nOnze nieuwe documentatie-website;\nDe drukbezochte Design Systems Week. Gemist? Geen nood: ", (0, r.kt)("a", { parentName: "p", href: "https://nldesignsystem.nl/events/design-systems-week-2022" }, "de sessies zijn terug te kijken"), "."), (0, r.kt)("p", null, "Samenwerken in Figma"), (0, r.kt)("p", null, "We zijn ook heel blij met onze nieuwe collega en UX-designer Jeffrey Lauwers die bij heeft gedragen aan een betere samenwerking tussen designers. Jeffrey zegt daar zelf het volgende over:"), (0, r.kt)("p", null, "Vanaf oktober ben ik als designer onderdeel gaan uitmaken van het kernteam. Na een leuke kennismaking en het nodige inlezen ben ik gesprekken gaan voeren met andere designers uit de community."), (0, r.kt)("p", null, "Al snel werd duidelijk dat het in ontwerpprogramma Figma een behoorlijke uitdaging was om samen te werken. Inmiddels hebben we daar een mooie oplossing voor gevonden. Nu kunnen designers gebruik maken van een Figma-bibliotheek met NL Design System-componenten \xe9n daar de huisstijl van hun eigen organisatie eenvoudig op toepassen. Vooralsnog staan hier 5 componenten, maar ons doel is om daar in 2023 een behoorlijke set aan toe te voegen. Dit alles uiteraard ondersteund met de nodige documentatie."), (0, r.kt)("p", null, "Uiteraard kunnen we dit niet zonder input van de community dus blijf ons vooral volgen en laat van je horen!"));
   }
   g.isMDXComponent = !0;
  },
 },
]);
