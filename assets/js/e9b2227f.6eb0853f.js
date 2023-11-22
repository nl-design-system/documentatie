"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [71639],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => c });
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
    d = function (e) {
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
    p = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      d = o(e, ["components", "mdxType", "originalType", "parentName"]),
      u = m(n),
      p = i,
      c = u["".concat(l, ".").concat(p)] || u[p] || g[p] || a;
     return n ? r.createElement(c, s(s({ ref: t }, d), {}, { components: n })) : r.createElement(c, s({ ref: t }, d));
    });
   function c(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var a = n.length,
      s = new Array(a);
     s[0] = p;
     var o = {};
     for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
     (o.originalType = e), (o[u] = "string" == typeof e ? e : i), (s[1] = o);
     for (var m = 2; m < a; m++) s[m] = n[m];
     return r.createElement.apply(null, s);
    }
    return r.createElement.apply(null, n);
   }
   p.displayName = "MDXCreateElement";
  },
  7624: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => s, default: () => g, frontMatter: () => a, metadata: () => o, toc: () => m });
   var r = n(87462),
    i = (n(67294), n(3905));
   const a = { title: "Gebruikerstesten met Wmebv-formulieren: eerste lessen", slug: "wmebv-gebruikerstesten", authors: [{ name: "Hidde de Vries", title: "Public relations lead & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "gebruikerstesten", "formulieren"], hide_table_of_contents: !1, date: new Date("2023-11-21T00:00:00.000Z"), image: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/postits.png" },
    s = void 0,
    o = {
     permalink: "/blog/wmebv-gebruikerstesten",
     source: "@site/blog/2023/20231121-wmebv-gebruikerstesten.md",
     title: "Gebruikerstesten met Wmebv-formulieren: eerste lessen",
     description: "In de afgelopen maanden werkte het NL Design System kernteam samen met VNG aan generieke formulieren. Vorige week testten we ze met gebruikers bij Stichting Accessibility in Utrecht.",
     date: "2023-11-21T00:00:00.000Z",
     formattedDate: "21 november 2023",
     tags: [
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
      { label: "gebruikerstesten", permalink: "/blog/tags/gebruikerstesten" },
      { label: "formulieren", permalink: "/blog/tags/formulieren" },
     ],
     hasTruncateMarker: !1,
     authors: [{ name: "Hidde de Vries", title: "Public relations lead & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }],
     frontMatter: { title: "Gebruikerstesten met Wmebv-formulieren: eerste lessen", slug: "wmebv-gebruikerstesten", authors: [{ name: "Hidde de Vries", title: "Public relations lead & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "gebruikerstesten", "formulieren"], hide_table_of_contents: !1, date: "2023-11-21T00:00:00.000Z", image: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/postits.png" },
     nextItem: { title: "Spacing tokens als systeem voor verticale ruimte", permalink: "/blog/spacing-tokens" },
    },
    l = { authorsImageUrls: [void 0] },
    m = [
     { value: "Waarom Wmebv-formulieren?", id: "waarom-wmebv-formulieren", level: 2 },
     { value: "De test", id: "de-test", level: 2 },
     { value: "Eerste lessen", id: "eerste-lessen", level: 2 },
     { value: "Het vervolg", id: "het-vervolg", level: 2 },
    ],
    d = { toc: m },
    u = "wrapper";
   function g(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(u, (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "In de afgelopen maanden werkte het NL Design System kernteam samen met VNG aan generieke formulieren. Vorige week testten we ze met gebruikers bij Stichting Accessibility in Utrecht."), (0, i.kt)("h2", { id: "waarom-wmebv-formulieren" }, "Waarom Wmebv-formulieren?"), (0, i.kt)("p", null, "Om wat context te geven: we maakten deze formulieren specifiek vanwege de ", (0, i.kt)("a", { parentName: "p", href: "https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/wetgeving/wet-modernisering-elektronisch-bestuurlijk-verkeer/" }, "Wet modernisering elektronisch bestuurlijk verkeer"), " (Wembv). Deze wet treedt volgend jaar in werking en geeft burgers en bedrijven het recht overheidszaken digitaal te regelen. Veel organisaties zijn hierdoor met hun formulieren bezig. Inclusief organisaties in de NL Design System community."), (0, i.kt)("p", null, (0, i.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/generiek-formulier-heartbeat.png", alt: "videogesprek waarin scherm gedeeld wordt, miro.com is open en er staan voorbeelden van schermen in met formulieren" }), "\n", (0, i.kt)("em", { parentName: "p" }, "Francesca legt het generieke formulier uit tijdens de ", (0, i.kt)("a", { parentName: "em", href: "https://www.youtube.com/watch?v=lcG9DFG4NgQ" }, "NL Design System Heartbeat van 31 oktober"))), (0, i.kt)("p", null, "In het kader van Wembv, werkte UX designer Francesca Vonk de afgelopen maanden aan een generiek formulier. Dit deed ze namens ", (0, i.kt)("a", { parentName: "p", href: "https://vng.nl/artikelen/vng-realisatie" }, "VNG Realisatie"), ", en samen met het NL Design System kernteam, community-leden (in het bijzonder UX-collega Rozerin Ayerdem van de gemeente Den Haag), front-end stagiairs van Frameless en een jurist van VNG. Uiteindelijk zal ze voor VNG een handreiking schrijven met haar bevindingen."), (0, i.kt)("h2", { id: "de-test" }, "De test"), (0, i.kt)("p", null, "In Francesca's voorbeeldscenario's zoekt Jeroen van Drouwen, een (fictief) persoon, contact met zijn gemeente over de status van zijn aanvraag bijstandsuitkering. Hij had al iets moeten horen, en wil weten hoe het zit. Er waren twee scenario's: met en zonder DigiD. Deze situaties zijn grotendeels in front-end code gebouwd (uiteraard met NL Design System componenten). Er waren ook enkele schermen in Figma, en er was een heuse Gmail-omgeving opgezet met een tijdelijke nep-accounts, zodat het extra realistisch was."), (0, i.kt)("p", null, "In totaal deden met deze test 7 participanten mee, met uiteenlopende beperkingen (waaronder visueel, fysiek en cognitief). In een kantoorsituatie hebben ze op een laptop beide testscenario's uitgebreid doorlopen. Ons team keek via Teams mee."), (0, i.kt)("h2", { id: "eerste-lessen" }, "Eerste lessen"), (0, i.kt)("p", null, "Gebruikerstesten blijken altijd weer ontzettend leerzaam te zijn. De ene gebruiker is de ander niet, en er is veel verschil tussen hoe mensen hun computers willen en kunnen gebruiken. Dat bleek ook vorige week weer."), (0, i.kt)("p", null, "We zijn de punten nog uitgebreid aan het verwerken, maar hier zijn vast zes punten die ons opvielen:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Voor ons was het formulier min of meer een gegeven, maar eigenlijk iedereen gaf aan liever te bellen met de vraag."), (0, i.kt)("li", { parentName: "ul" }, "De participanten waren vaak wel bekend met DigiD, maar waren er ook huiverig voor."), (0, i.kt)("li", { parentName: "ul" }, "Taalgebruik was vaak een barri\xe8re, uitdrukkingen als \u201cmelding openbare ruimte\u201d leidden tot verwarring."), (0, i.kt)("li", { parentName: "ul" }, "De foutmeldingen werden heel goed begrepen."), (0, i.kt)("li", { parentName: "ul" }, "Meerdere participanten zeiden normaliter liever een telefoon of tablet te gebruiken dan de testlaptop (dit kunnen we in vervolgtesten beter faciliteren)."), (0, i.kt)("li", { parentName: "ul" }, "De snelheid waarmee participanten door een formulier gingen verschilde enorm, en op de \u201c5 minuten\u201d die op de eerste pagina werden aangekondigd werd verschillend gereageerd (van \u201cwat lang!\u201c tot \u201cwat kort!\u201d).")), (0, i.kt)("p", null, (0, i.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/postits.png", alt: "mirobord vol met postits in heel veel kleuren" })), (0, i.kt)("p", null, (0, i.kt)("em", { parentName: "p" }, "Er was veel feedback. Met post-it's op Miro verzamelden we wat ons opviel.")), (0, i.kt)("h2", { id: "het-vervolg" }, "Het vervolg"), (0, i.kt)("p", null, "We vonden het erg waardevol om te zien hoe dit formulier werkte voor mensen buiten ons eigen team. Met de bevindingen gaan we alvast aan de slag, en we zijn van plan ze te publiceren op ", (0, i.kt)("a", { parentName: "p", href: "http://gebruikersonderzoeken.nl/" }, "gebruikersonderzoeken.nl"), ". Alleen door gebruikersonderzoek te herhalen kunnen we onze aannames valideren, dus op termijn willen we zeker opnieuw gaan testen."));
   }
   g.isMDXComponent = !0;
  },
 },
]);
