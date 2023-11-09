"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [30217],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => g, kt: () => c });
   var r = t(67294);
   function i(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
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
      ? a(Object(t), !0).forEach(function (n) {
         i(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : a(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     r,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       i = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
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
    m = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    v = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      g = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      v = i,
      c = m["".concat(l, ".").concat(v)] || m[v] || u[v] || a;
     return t ? r.createElement(c, o(o({ ref: n }, g), {}, { components: t })) : r.createElement(c, o({ ref: n }, g));
    });
   function c(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var a = t.length,
      o = new Array(a);
     o[0] = v;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : i), (o[1] = s);
     for (var d = 2; d < a; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   v.displayName = "MDXCreateElement";
  },
  76981: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => s, toc: () => d });
   var r = t(87462),
    i = (t(67294), t(3905));
   const a = { title: "Innovatiebudget voor de werkwijze van het NL Design System", slug: "innovatiebudget-voor-de-werkwijze-van-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: new Date("2021-07-29T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/en/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system",
     source: "@site/blog/2021/20210729-innovatiebudget-voor-de-werkwijze-van-het-nl-design-system copy.md",
     title: "Innovatiebudget voor de werkwijze van het NL Design System",
     description: "NL Design System is 1 van 20 projecten die een bijdrage uit het Innovatiebudget Digitale Overheid 2021 ontving. We kregen dat voor de pilot \u2018Samenwerkingsmodel herbruikbare basisonderdelen voor overheidsbrede dienstverlening\u2019 waarmee we de inrichting van samenwerking over overheidsorganisaties heen binnen 1 centraal (design) systeem beproeven.",
     date: "2021-07-29T00:00:00.000Z",
     formattedDate: "July 29, 2021",
     tags: [
      { label: "contentrichtlijnen", permalink: "/en/blog/tags/contentrichtlijnen" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     readingTime: 2.69,
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "Innovatiebudget voor de werkwijze van het NL Design System", slug: "innovatiebudget-voor-de-werkwijze-van-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: "2021-07-29T00:00:00.000Z" },
     prevItem: { title: "Over Figma als keuze voor het NL Design System", permalink: "/en/blog/over-figma-als-keuze-voor-het-nl-design-system" },
     nextItem: { title: "Jouw project inrichten op de NL Design System-architectuur", permalink: "/en/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Nieuwe werkwijze en aanvraag Innovatiebudget", id: "nieuwe-werkwijze-en-aanvraag-innovatiebudget", level: 2 },
     { value: "Het samenwerkingsmodel", id: "het-samenwerkingsmodel", level: 2 },
     { value: "Resultaat", id: "resultaat", level: 2 },
    ],
    g = { toc: d },
    m = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(m, (0, r.Z)({}, g, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "NL Design System is 1 van 20 projecten die een bijdrage uit het Innovatiebudget Digitale Overheid 2021 ontving. We kregen dat voor de pilot \u2018Samenwerkingsmodel herbruikbare basisonderdelen voor overheidsbrede dienstverlening\u2019 waarmee we de inrichting van samenwerking over overheidsorganisaties heen binnen 1 centraal (design) systeem beproeven."), (0, i.kt)("h2", { id: "nieuwe-werkwijze-en-aanvraag-innovatiebudget" }, "Nieuwe werkwijze en aanvraag Innovatiebudget"), (0, i.kt)("p", null, "Nadat we vorig jaar met een enthousiast en ervaren kernteam van start gingen met een grondige inventarisatie van de nodige voorwaarden voor een overheidsbrede samenwerking, zijn we tot de conclusie gekomen dat wanneer we een dergelijk project echt willen laten slagen, we een stapje terug moesten nemen en het over een andere boeg moesten gaan gooien. Daarom zijn we met een plan gekomen voor een ", (0, i.kt)("a", { parentName: "p", href: "https://designsystem.gebruikercentraal.nl/nieuwe-werkwijze/" }, "nieuwe \u2013 toekomstgerichtere \u2013 werkwijze"), "."), (0, i.kt)("p", null, "Om hier het komende jaar aan door te blijven werken, hebben we ook dit jaar een aanvraag gedaan voor ", (0, i.kt)("a", { parentName: "p", href: "https://www.digitaleoverheid.nl/dossiers/innovatiebudget/" }, "het\u202fInnovatiebudget"), ". Dit budget wordt elk jaar door het ministerie BZK uitgereikt aan innovatieve projecten die bijdragen aan de verbetering van de digitale dienstverlening van de overheid. En met trots kunnen we melden dat we 1 van de 20 projecten zijn waarvan de aanvraag is gegund. Dit houdt in dat we het komende half jaar van start kunnen met onze \u2018pilot\u2019 voor een samenwerkingsmodel voor herbruikbare basisonderdelen voor overheidsbrede dienstverlening."), (0, i.kt)("h2", { id: "het-samenwerkingsmodel" }, "Het samenwerkingsmodel"), (0, i.kt)("p", null, "Alhoewel er al een aantal overheidsorganisaties is dat (open source) design systeem-elementen aanbieden, zijn deze nu alleen nog maar inzetbaar bij andere teams voor dezelfde organisatie en huisstijl. Organisaties met een andere huisstijl moeten zoveel maatwerkaanpassingen doorvoeren, dat de indruk ontstaat dat kosten voor open source-samenwerking niet opwegen tegen de baten. De investering die is gedaan in toegankelijkheid en gebruiksvriendelijkheid blijft hierdoor helaas \u2018opgesloten\u2019 binnen 1 organisatie. Met de NL Design System-architectuur willen we het mogelijk maken dat juist wel toegankelijke elementen hergebruikt worden bij andere huisstijlen. Hierdoor wordt samenwerking en kennisdeling gestimuleerd en kennis en kunde vanuit andere organisaties optimaal benut en gedeeld. Ons kernteam neemt hierbij een cruciale spilfunctie in."), (0, i.kt)("p", null, "We zijn inmiddels al volop bezig met de gemeente Den Haag en Utrecht en er haken steeds meer organisaties aan. Er wordt daarbij door al deze verschillende organisaties gewerkt aan eigen open source elementen waarbij ze zo veel als mogelijk elkaars werk hergebruiken en aanpassen. Wanneer dit leidt tot succesvolle toepassing bij ten minste 2 organisaties, kan het element uiteindelijk worden opgenomen in het centrale NL Design System. Deze manier van samenwerken heet \u2018distributed ontwikkeling\u2019 en is een innovatieve manier van samenwerken binnen de overheid."), (0, i.kt)("h2", { id: "resultaat" }, "Resultaat"), (0, i.kt)("p", null, "Als resultaat van de pilot kunnen we lessen opstellen over de NL Design System-architectuur. En daarnaast krijgen we inzicht in hoeverre distributed ontwikkeling werkt en wat dat voor consequenties heeft voor de werkzaamheden en inzet van een centraal (ontwikkel)team op de langere termijn. Want alle resultaten en lessen uit de pilot op het gebied van de architectuur en werkwijze vormen de basis voor de inrichting en vormgeving van het verdere NL Design System-project."), (0, i.kt)("p", null, "Op basis van de uitkomsten en evaluatie wordt de volgende fase (realisatiefase / implementatiefase in 2022) verder ingericht. Hierin werken we toe naar een naar volwassenheid van het instrument en verdere adoptie van het systeem. Met als ambitie om een operationeel, breed inzetbaar en veelgebruikt NL Design System neer te zetten."));
   }
   u.isMDXComponent = !0;
  },
 },
]);
