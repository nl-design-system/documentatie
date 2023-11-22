"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98218],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => u });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
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
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var s = r.createContext({}),
    d = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    p = function (e) {
     var t = d(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
    },
    c = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    g = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      c = d(n),
      g = o,
      u = c["".concat(s, ".").concat(g)] || c[g] || m[g] || i;
     return n ? r.createElement(u, a(a({ ref: t }, p), {}, { components: n })) : r.createElement(u, a({ ref: t }, p));
    });
   function u(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = g;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[c] = "string" == typeof e ? e : o), (a[1] = l);
     for (var d = 2; d < i; d++) a[d] = n[d];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   g.displayName = "MDXCreateElement";
  },
  40336: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => a, default: () => m, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Op de hoogte blijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Op de hoogte blijven", pagination_label: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", keywords: ["heartbeat", "blog", "slack"] },
    a = void 0,
    l = { unversionedId: "project/blijf-op-de-hoogte", id: "project/blijf-op-de-hoogte", title: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", source: "@site/docs/project/blijf-op-de-hoogte.mdx", sourceDirName: "project", slug: "/project/blijf-op-de-hoogte", permalink: "/en/project/blijf-op-de-hoogte", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx", tags: [], version: "current", frontMatter: { title: "Op de hoogte blijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Op de hoogte blijven", pagination_label: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", keywords: ["heartbeat", "blog", "slack"] }, sidebar: "project", previous: { title: "Wie doet mee?", permalink: "/en/project/wie-doet-mee" }, next: { title: "Links", permalink: "/en/project/links" } },
    s = {},
    d = [
     { value: "NL Design Systems week", id: "nl-design-systems-week", level: 2 },
     { value: "2022", id: "2022", level: 3 },
    ],
    p = { toc: d },
    c = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(c, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "op-de-hoogte-blijven" }, "Op de hoogte blijven"), (0, o.kt)("p", null, "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden."), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://www.gebruikercentraal.nl/agenda/soort/nl-design-system/" }, "Neem deel aan onze Heartbeat-sessies"), " of ", (0, o.kt)("a", { parentName: "li", href: "/events/heartbeat" }, "kijk opgenomen sessies terug")), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://designsystem.gebruikercentraal.nl/nieuwsbrieven/" }, "Meld je aan voor onze nieuwsbrief")), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://praatmee.codefor.nl" }, "Wordt lid van het #nl-design-system Slack kanaal"), " op CodeForNL"), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://designsystem.gebruikercentraal.nl/blogs-nieuws" }, "Lees ons blog voor uitgebreidere interviews en artikelen"))), (0, o.kt)("h2", { id: "nl-design-systems-week" }, "NL Design Systems week"), (0, o.kt)("p", null, "Van maandag 2 tot en met donderdag 5 oktober is de ", (0, o.kt)("a", { parentName: "p", href: "/events/design-systems-week-2023/overzicht" }, "Design Systems Week van 2023"), ".\nDit is in de week van ", (0, o.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/gebruiker-centraal-conferentie-2023-uit-het-doolhof/" }, "'Uit het doolhof!'"), ", de conferentie van Gebruiker Centraal. Je kunt dan allerlei online sessies volgen over design systems in het algemeen en NL Design System in het bijzonder. Vol met interessante praktijkvoorbeelden en inzichten. En natuurlijk kun je aan het einde van de sessies al je vragen stellen."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/design-systems-week-2023/#event-booking" }, "Schrijf je alvast in"), " om de hele week in je agenda te zetten."), (0, o.kt)("h3", { id: "2022" }, "2022"), (0, o.kt)("p", null, "We hebben alle Design Systemsp week 2022 sessies opgenomen en deze kun je op de ", (0, o.kt)("a", { parentName: "p", href: "/events/design-systems-week-2022" }, "Design Systems Week 2022 pagina"), " vinden en op je gemak terug kijken."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
