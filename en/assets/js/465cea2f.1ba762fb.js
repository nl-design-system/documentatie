"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16636],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => h });
   var a = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? r(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function s(e, t) {
    if (null == e) return {};
    var n,
     a,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       i = {},
       r = Object.keys(e);
      for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var p = a.createContext({}),
    o = function (e) {
     var t = a.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    m = function (e) {
     var t = o(e.components);
     return a.createElement(p.Provider, { value: t }, e.children);
    },
    k = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    u = a.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      r = e.originalType,
      p = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      k = o(n),
      u = i,
      h = k["".concat(p, ".").concat(u)] || k[u] || d[u] || r;
     return n ? a.createElement(h, l(l({ ref: t }, m), {}, { components: n })) : a.createElement(h, l({ ref: t }, m));
    });
   function h(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var r = n.length,
      l = new Array(r);
     l[0] = u;
     var s = {};
     for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
     (s.originalType = e), (s[k] = "string" == typeof e ? e : i), (l[1] = s);
     for (var o = 2; o < r; o++) l[o] = n[o];
     return a.createElement.apply(null, l);
    }
    return a.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  18864: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => l, default: () => d, frontMatter: () => r, metadata: () => s, toc: () => o });
   var a = n(87462),
    i = (n(67294), n(3905));
   const r = { title: "Links naar anderen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Links", pagination_label: "Links", description: "Links naar anderen", keywords: ["links"] },
    l = "Links naar anderen",
    s = { unversionedId: "project/links", id: "project/links", title: "Links naar anderen", description: "Links naar anderen", source: "@site/docs/project/links.mdx", sourceDirName: "project", slug: "/project/links", permalink: "/en/project/links", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/links.mdx", tags: [], version: "current", frontMatter: { title: "Links naar anderen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Links", pagination_label: "Links", description: "Links naar anderen", keywords: ["links"] }, sidebar: "project", previous: { title: "Op de hoogte blijven", permalink: "/en/project/blijf-op-de-hoogte" } },
    p = {},
    o = [
     { value: "Design Systems", id: "design-systems", level: 2 },
     { value: "Relevante links", id: "relevante-links", level: 2 },
    ],
    m = { toc: o },
    k = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(k, (0, a.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "links-naar-anderen" }, "Links naar anderen"), (0, i.kt)("h2", { id: "design-systems" }, "Design Systems"), (0, i.kt)("p", null, "Design systems bij de Rijksoverheid:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://designsystem.cibg.nl" }, "CIBG Design System"), " (Ministerie van Volksgezondheid, Welzijn en Sport)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://github.com/minvws/nl-covid19-data-dashboard/tree/develop/packages/app/src/components" }, "Coronadashboard componenten"), " (Ministerie van Volksgezondheid, Welzijn en Sport)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.dso-toolkit.nl/" }, "Digitaal Stelsel Omgevingswet"), " (Rijkswaterstaat)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://github.com/minvws/nl-rdo-manon" }, "Manon"), " (", (0, i.kt)("a", { parentName: "li", href: "https://minvws.github.io/nl-rdo-manon/" }, "Manon op GitHub"), ") van (Ministerie van Volksgezondheid, Welzijn en Sport)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://stijl.mijn.overheid.nl/" }, "Mijn Overheid Design System")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.platformrijksoverheidonline.nl/producten-en-expertise/pro-websites/functionaliteiten-websites-en-magazines" }, "Platform Rijksoverheid Online"), " heeft componenten voor ", (0, i.kt)("a", { parentName: "li", href: "https://www.bloomreach.com/" }, "Bloomreach CMS"), " die door honderden sites worden gebruikt."), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.rijkshuisstijl.nl/basiselementen/basiselementen-online/online-componenten" }, "Rijkshuisstijl: Online componenten"), " (Ministerie van Algemene Zaken)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://rijkswaterstaat-stijlgids.netlify.app" }, "Rijkswaterstaat stijlgids"), " (Rijkswaterstaat)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/NHV1JYxJ28vKZInSI9u200/" }, "ROOS Design System"), " van ", (0, i.kt)("a", { parentName: "li", href: "https://www.rvo.nl" }, "Rijksdienst voor Ondernemend Nederland (RVO)")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://uno.dfront.rijkscloud.nl/" }, "UNO Design System"), " van DUO (Ministerie van Onderwijs, Cultuur en Wetenschap)")), (0, i.kt)("p", null, "Verder:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://componenten.overheid.nl/" }, "KOOP Componentenbibliotheek"), " van ", (0, i.kt)("a", { parentName: "li", href: "https://www.koopoverheid.nl" }, "Kennis- en exploitatiecentrum offici\xeble overheidspublicaties (KOOP)")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "http://beagle.uwv.nl" }, "Beagle design system"), " van UWV (niet publiek)"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://bold.belastingdienst.nl" }, "Bold design system"), " van de Belastingdienst (niet publiek)"), (0, i.kt)("li", { parentName: "ul" }, "SVB design system (niet publiek)"), (0, i.kt)("li", { parentName: "ul" }, "Kadaster design system (niet publiek)"), (0, i.kt)("li", { parentName: "ul" }, "Trinity Design System van ", (0, i.kt)("a", { parentName: "li", href: "http://kvk.nl" }, "Kamer van Koophandel"), " (niet publiek)"), (0, i.kt)("li", { parentName: "ul" }, "design system van ", (0, i.kt)("a", { parentName: "li", href: "https://www.rechtspraak.nl" }, "rechtspraak.nl"), " (niet publiek)"), (0, i.kt)("li", { parentName: "ul" }, "Blauwdruk design system van ", (0, i.kt)("a", { parentName: "li", href: "http://politie.nl" }, "de Politie"), " (", (0, i.kt)("a", { parentName: "li", href: "https://tweakers.net/plan/3126/designsysteem-blauwdruk-helpt-development-bij-de-politie-te-stroomlijnen.html" }, "artikel over Blauwdruk bij Tweakers.net"), ")")), (0, i.kt)("p", null, "Provincie:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://wapenfeiten.zuid-holland.nl" }, "Wapenfeiten: design system van de provincie Zuid-Holland"))), (0, i.kt)("p", null, "Gemeente:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.amsterdam.nl" }, "Amsterdam Design System")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/dBzv9dd3GRFLtxzCKWq9uU/" }, "Buren")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "http://github.com/nl-design-system/denhaag" }, "Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Haarlem / Zandvoort"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://componenten.nijmegen.nl/" }, "Nijmegen")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://beta.tilburg.nl/winkel/" }, "Tilburg")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "http://github.com/nl-design-system/utrecht" }, "Utrecht"))), (0, i.kt)("p", null, "Internationaal:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://designsystem.dk" }, "Denemarken Design System")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://designers.italia.it" }, "Designers Italia: The Design System for the Italian Public Administration")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.systeme-de-design.gouv.fr" }, "Frankrijk: Syst\xe8me de Design de l'\xc9tat"), " (", (0, i.kt)("a", { parentName: "li", href: "https://www.systeme-de-design.gouv.fr" }, "Storybook"), ")"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "http://design-system.service.gov.uk/" }, "GOV.UK Design System")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.digital.go.jp/policies/servicedesign/designsystem/" }, "Japan Design System"), " (", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/community/file/1172530831489802410" }, "Japan Design System in Figma"), ")"), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://designsystem.digital.gov" }, "U.S. Web Design System")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://overheid.vlaanderen.be/webuniversum/alle-webcomponenten" }, "Vlaanderen")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.canada.ca/en/government/about/design-system.html" }, "Canada"))), (0, i.kt)("h2", { id: "relevante-links" }, "Relevante links"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.digitaleoverheid.nl/werkagenda-waardengedreven-digitaliseren/" }, "Werkagenda Waardengedreven Digitaliseren")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://appt.org/" }, "Appt"), ": gids voor het maken van toegankelijke apps."), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "https://www.digitoegankelijk.nl/aan-de-slag/kennisbank" }, "DigiToegankelijk Kennisbank"))));
   }
   d.isMDXComponent = !0;
  },
 },
]);
