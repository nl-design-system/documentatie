"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [85959],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => k, kt: () => d });
   var a = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
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
      ? i(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function m(e, t) {
    if (null == e) return {};
    var n,
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var o = a.createContext({}),
    p = function (e) {
     var t = a.useContext(o),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    k = function (e) {
     var t = p(e.components);
     return a.createElement(o.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    s = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    w = a.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      o = e.parentName,
      k = m(e, ["components", "mdxType", "originalType", "parentName"]),
      u = p(n),
      w = r,
      d = u["".concat(o, ".").concat(w)] || u[w] || s[w] || i;
     return n ? a.createElement(d, l(l({ ref: t }, k), {}, { components: n })) : a.createElement(d, l({ ref: t }, k));
    });
   function d(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      l = new Array(i);
     l[0] = w;
     var m = {};
     for (var o in t) hasOwnProperty.call(t, o) && (m[o] = t[o]);
     (m.originalType = e), (m[u] = "string" == typeof e ? e : r), (l[1] = m);
     for (var p = 2; p < i; p++) l[p] = n[p];
     return a.createElement.apply(null, l);
    }
    return a.createElement.apply(null, n);
   }
   w.displayName = "MDXCreateElement";
  },
  76748: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => o, contentTitle: () => l, default: () => s, frontMatter: () => i, metadata: () => m, toc: () => p });
   var a = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Wie doet mee?", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Wie doet mee?", pagination_label: "Wie doet mee?", description: "Overzicht van projecten die met NL Design System werken", keywords: ["nl design system"] },
    l = void 0,
    m = { unversionedId: "project/wie-doet-mee", id: "project/wie-doet-mee", title: "Wie doet mee?", description: "Overzicht van projecten die met NL Design System werken", source: "@site/docs/project/wie-doet-mee.mdx", sourceDirName: "project", slug: "/project/wie-doet-mee", permalink: "/project/wie-doet-mee", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/wie-doet-mee.mdx", tags: [], version: "current", frontMatter: { title: "Wie doet mee?", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Wie doet mee?", pagination_label: "Wie doet mee?", description: "Overzicht van projecten die met NL Design System werken", keywords: ["nl design system"] }, sidebar: "project", previous: { title: "2 wekelijkse updates van het kernteam en community", permalink: "/events/heartbeat" }, next: { title: "Op de hoogte blijven", permalink: "/project/blijf-op-de-hoogte" } },
    o = {},
    p = [
     { value: "Sites in ontwikkeling of live", id: "sites-in-ontwikkeling-of-live", level: 2 },
     { value: "Hergebruik ontwerpen uit de community", id: "hergebruik-ontwerpen-uit-de-community", level: 2 },
     { value: "Projecten die overwegen mee te doen", id: "projecten-die-overwegen-mee-te-doen", level: 2 },
    ],
    k = { toc: p },
    u = "wrapper";
   function s(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(u, (0, a.Z)({}, k, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "NL Design System wordt gebruikt in projecten van een keur aan overheidsorganisaties door heel Nederland. Veel van deze projecten zijn in aanbouw, een enkel project staat live. Hieronder vind je een overzicht van organisaties die zelf en/of via hun leveranciers meedoen met NL Design System."), (0, r.kt)("p", null, "Ook meedoen? Neem contact op met het ", (0, r.kt)("a", { parentName: "p", href: "/project/kernteam" }, "kernteam"), "."), (0, r.kt)("h2", { id: "sites-in-ontwikkeling-of-live" }, "Sites in ontwikkeling of live"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "nieuwe website ", (0, r.kt)("a", { parentName: "li", href: "http://denhaag.nl" }, "denhaag.nl"), " (live op 31 oktober 2023)"), (0, r.kt)("li", { parentName: "ul" }, "nieuw ", (0, r.kt)("a", { parentName: "li", href: "http://pki.utrecht.nl" }, "Digitaal Loket van de gemeente Utrecht"), " (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "nieuwe formulieren van de gemeente Den Haag (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "http://opencatalogi.nl" }, "Open Catalogi"), " (voorjaar 2023)"), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.dimpact.nl/klantinteractie-servicesysteem" }, "Klantinteractie Servicesysteem (KISS)")), (0, r.kt)("li", { parentName: "ul" }, "Mijn Den Haag (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "nieuwe formulieren van de gemeente Utrecht (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "nieuwe website Utrecht Vergunningen, Toezicht en Handhaving (inontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.dimpact.nl/nieuws/mijlpaal-voor-open-formulieren-bouw-open-source-oplossing-gestart" }, "Open Formulieren van Dimpact"), (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, "gemeente Utrecht (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Den Haag (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Groningen (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Enschede (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Zwolle (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Leeuwarden (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Deventer (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Zaanstad (in ontwikkeling)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Haarlemmermeer (in ontwikkeling)"))), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://huwelijk.utrecht.eend.nl/docs/site/huwelijksplanner/index.html" }, "prototype Huwelijksplanner"), " voor de gemeente Utrecht"), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.roxanneallard.nl/casestudies/rijksoverheid/" }, "werkbezoeken applicatie voor Rijksoverheid")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.gemeenteniconen.nl" }, "Gemeenteniconen"), " worden gepubliceerd als Web Component volgens de NL Design System architectuur."), (0, r.kt)("li", { parentName: "ul" }, "Gutenberg blocks voor WordPress op basis van componenten van Den Haag en Utrecht worden ontwikkeld voor denhaag.nl (nog niet open source, het wordt in de loop van 2023 publiek)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Nijmegen", (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, "ontwikkelt het Nijmegen Design System"), (0, r.kt)("li", { parentName: "ul" }, "MijnZaken"))), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "http://rivm.nl" }, "RIVM"), ": nieuwe versie website ", (0, r.kt)("a", { parentName: "li", href: "https://rvs.rivm.nl" }, "gevaarlijke stoffen")), (0, r.kt)("li", { parentName: "ul" }, "Amsterdam", (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, "nieuwe website ", (0, r.kt)("a", { parentName: "li", href: "https://www.amsterdam.nl" }, "amsterdam.nl"), " gebaseerd op SalesForce"), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://github.com/amsterdam/design-system" }, "Amsterdam Design System")))), (0, r.kt)("li", { parentName: "ul" }, "Rotterdam", (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/ZWSC4gCrOXRUR9UX3aoZ8x/Gemeente-Rotterdam-Design-System?mode=dev" }, "Rotterdam Design System")), (0, r.kt)("li", { parentName: "ul" }, "nieuwe digitaal loket (wordt ontwikkeld in 2024 en 2025)"))), (0, r.kt)("li", { parentName: "ul" }, "Vereniging van Nederlandse Gemeenten", (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, "MijnZaken hackathon, waar deelnemers nieuwe MijnZaken toepassingen maken met NL Design System"), (0, r.kt)("li", { parentName: "ul" }, "WMEBV formulieren")))), (0, r.kt)("h2", { id: "hergebruik-ontwerpen-uit-de-community" }, "Hergebruik ontwerpen uit de community"), (0, r.kt)("p", null, "De volgende projecten hebben de ontwerpen uit de NL Design System community gebruikt:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "OpenWebConcept voor MijnOmgeving / MijnZaken / Mijn Taken:", (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, "gemeente Hoeksche Waard"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Buren")))), (0, r.kt)("h2", { id: "projecten-die-overwegen-mee-te-doen" }, "Projecten die overwegen mee te doen"), (0, r.kt)("p", null, "De volgende projecten overwegen met NL Design System te gaan werken:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "gemeente Tilburg"), (0, r.kt)("li", { parentName: "ul" }, "Innovatielab VNG"), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://openstad.org" }, "OpenStad")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://digitaleoverheid.nl/" }, "Digitale Overheid")), (0, r.kt)("li", { parentName: "ul" }, "OpenWebConcept voor GravityForms formulieren voor WordPress", (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, "gemeente Buren"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Heerenveen"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Lansingerland"), (0, r.kt)("li", { parentName: "ul" }, "gemeente S\xfadwest-Frysl\xe2n"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Stichtse Vecht"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Alkmaar"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Pijnacker-Nootdorp"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Hoeksche Waard"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Gouda"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Dronten"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Texel"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Stede Broec"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Enkhuizen"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Drechterland"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Berkelland"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Wageningen"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Rijssen-Holten"), (0, r.kt)("li", { parentName: "ul" }, "gemeente De Fryske Marren"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Leeuwarden"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Albrandswaard"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Barendrecht"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Ridderkerk"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Ommen"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Rozendaal"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Waddinxveen"), (0, r.kt)("li", { parentName: "ul" }, "gemeente \u2019s Hertogenbosch (in aanbouw)"), (0, r.kt)("li", { parentName: "ul" }, "gemeente Noordwijk (in aanbouw)"))), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.opengemeenten.nl" }, "OpenGemeenten CMS"), (0, r.kt)("ul", { parentName: "li" }, (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.barneveld.nl/" }, "gemeente Barneveld")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.bergen-nh.nl/" }, "gemeente Bergen (Noord-Holland)")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.bloemendaal.nl/" }, "gemeente Bloemendaal")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.bunnik.nl/" }, "gemeente Bunnik")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.castricum.nl/" }, "gemeente Castricum")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.debilt.nl/" }, "gemeente De Bilt")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.dijkenwaard.nl/" }, "gemeente Dijk en Waard")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.ede.nl/" }, "gemeente Ede")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "http://ermelo.nl" }, "gemeente Ermelo")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "http://harderwijk.nl" }, "gemeente Harderwijk")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "http://www.heemskerk.nl/" }, "gemeente Heemskerk")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.heiloo.nl/" }, "gemeente Heiloo")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.houten.nl/home/" }, "gemeente Houten")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.katwijk.nl/" }, "gemeente Katwijk")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.medemblik.nl/" }, "gemeente Medemblik")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.nieuwegein.nl/" }, "gemeente Nieuwegein")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.rhenen.nl/" }, "gemeente Rhenen")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.schouwen-duiveland.nl/" }, "gemeente Schouwen-Duiveland")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.soest.nl/" }, "gemeente Soest")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.tholen.nl/" }, "gemeente Tholen")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.uitgeest.nl/" }, "gemeente Uitgeest")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.veenendaal.nl/" }, "gemeente Veenendaal")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.voerendaal.nl/" }, "gemeente Voerendaal")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.wijkbijduurstede.nl/" }, "gemeente Wijk bij Duurstede")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.woudenberg.nl/" }, "gemeente Woudenberg")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.zeewolde.nl/" }, "gemeente Zeewolde")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.zeist.nl/" }, "gemeente Zeist"))))));
   }
   s.isMDXComponent = !0;
  },
 },
]);
