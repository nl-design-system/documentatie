"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [23050],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
   var r = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
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
      ? i(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     r,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var d = r.createContext({}),
    l = function (e) {
     var n = r.useContext(d),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    p = function (e) {
     var n = l(e.components);
     return r.createElement(d.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    k = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      d = e.parentName,
      p = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = l(t),
      k = a,
      u = g["".concat(d, ".").concat(k)] || g[k] || m[k] || i;
     return t ? r.createElement(u, o(o({ ref: n }, p), {}, { components: t })) : r.createElement(u, o({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      o = new Array(i);
     o[0] = k;
     var s = {};
     for (var d in n) hasOwnProperty.call(n, d) && (s[d] = n[d]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : a), (o[1] = s);
     for (var l = 2; l < i; l++) o[l] = t[l];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  92093: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => i, metadata: () => s, toc: () => l });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "Update - NL Design System", slug: "update-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["update", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/rijkshuisstijl-knoppen-e1548707321947.png", hide_table_of_contents: !1, date: new Date("2019-06-06T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/en/blog/update-nl-design-system",
     source: "@site/blog/2019/20190606-update-nl-design-system.md",
     title: "Update - NL Design System",
     description: "Update over de stand van zaken rondom het traject NL Design System, ge\xefnitieerd door Gebruiker Centraal. In samenwerking met medewerkers van diverse overheidsorganisaties.",
     date: "2019-06-06T00:00:00.000Z",
     formattedDate: "June 6, 2019",
     tags: [
      { label: "update", permalink: "/en/blog/tags/update" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     readingTime: 4.815,
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "Update - NL Design System", slug: "update-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["update", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/rijkshuisstijl-knoppen-e1548707321947.png", hide_table_of_contents: !1, date: "2019-06-06T00:00:00.000Z" },
     prevItem: { title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem", permalink: "/en/blog/top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system" },
     nextItem: { title: "Kick-off werkgroepen van het NL Design System", permalink: "/en/blog/kick-off-werkgroepen-van-het-nl-design-system" },
    },
    d = { authorsImageUrls: [void 0] },
    l = [
     { value: "De voordelen van een gezamenlijk design system", id: "de-voordelen-van-een-gezamenlijk-design-system", level: 2 },
     { value: "Meetups 2018 en 2019: Design System voor en door professionals", id: "meetups-2018-en-2019-design-system-voor-en-door-professionals", level: 2 },
     { value: "Januari-april: wensen &amp; criteria", id: "januari-april-wensen--criteria", level: 2 },
     { value: "Maart-april: Top-down ondersteuning en commitment", id: "maart-april-top-down-ondersteuning-en-commitment", level: 2 },
     { value: "April 2019: Start van de werkgroepen", id: "april-2019-start-van-de-werkgroepen", level: 2 },
     { value: "Vervolgstappen: Bouwen maar! Proof of Concept en pilot", id: "vervolgstappen-bouwen-maar-proof-of-concept-en-pilot", level: 2 },
     { value: "Voor de zomervakantie kun je deze bijeenkomsten nog verwachten:", id: "voor-de-zomervakantie-kun-je-deze-bijeenkomsten-nog-verwachten", level: 2 },
    ],
    p = { toc: l },
    g = "wrapper";
   function m(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(g, (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Update over de stand van zaken rondom het traject NL Design System, ge\xefnitieerd door Gebruiker Centraal. In samenwerking met medewerkers van diverse overheidsorganisaties."), (0, a.kt)("p", null, "Begin dit jaar zijn we gestart met de ontwikkeling van een gezamenlijk design system voor de Nederlandse overheid. Professionals van diverse overheidsorganisaties bundelen hun kennis en ontwikkelen een design system waarin ontwerpprincipes, interactiepatronen, componenten (zoals formulierelementen en knoppen) en code gedeeld worden."), (0, a.kt)("p", null, "Lees in dit blog een korte samenvatting van wat we tot nu toe hebben gedaan en geleerd rondom het NL Design System en wat de vervolgstappen zijn."), (0, a.kt)("h2", { id: "de-voordelen-van-een-gezamenlijk-design-system" }, "De voordelen van een gezamenlijk design system"), (0, a.kt)("p", null, "Ter herinnering: dit is waarom we gestart zijn met het NL Design System:"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Het NL Design System verbetert de gebruiksvriendelijkheid van online overheidsdiensten en websites. Consistente digitale diensten zorgen ervoor dat burgers en makkelijker zaken kunnen doen met de overheid."), (0, a.kt)("li", { parentName: "ul" }, "De onderdelen in het design system worden grondig getest met gebruikers. Ook met gebruikers met een visuele of andere beperking. Hierdoor neemt de zowel de kwaliteit als de toegankelijkheid toe."), (0, a.kt)("li", { parentName: "ul" }, "Doordat we niet elke keer over hetzelfde na hoeven te denken wordt dubbel werk voorkomen. Projecten komen daardoor sneller uit de startblokken en kunnen sneller resultaat laten zien. Als ontwerper of ontwikkelaar kun je je richten op dingen die echt uniek zijn voor je dienst.")), (0, a.kt)("h2", { id: "meetups-2018-en-2019-design-system-voor-en-door-professionals" }, "Meetups 2018 en 2019: Design System voor en door professionals"), (0, a.kt)("p", null, "Met name ontwikkelaars en interactie-ontwerpers maken dagelijks gebruik van het design system. In onze ", (0, a.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/blog/van-start-een-gezamenlijk-design-system-voor-de-overheid/#hoe-we-gaan-werken" }, "werkwijze"), " sluiten we daarom zo goed mogelijk aan bij hun wensen."), (0, a.kt)("p", null, "In 2018 hebben we in een tweetal meetups de interesse \xe9n de behoeftes gepeild onder deze professionals. Nadat het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties het project besloot te financieren, hebben we in februari en maart van 2019 nog een tweetal meetups gehouden. Dit om de ontwikkelaars en ontwerpers bij het project te betrekken en inzicht te krijgen in wat zij in hun werk nodig hebben."), (0, a.kt)("h2", { id: "januari-april-wensen--criteria" }, "Januari-april: wensen & criteria"), (0, a.kt)("p", null, "Zoveel mensen, zoveel wensen. Om snel te kunnen lanceren met een proof of concept, moeten we eerst bepalen wat \xe9cht belangrijk is. We hebben de wensen en criteria uit de workshops daarom gezamenlijk gewogen en verwerkt in een ", (0, a.kt)("a", { parentName: "p", href: "https://docs.google.com/presentation/d/1QHWUh8zQH-3BA6EEdzO1nkIvGMuzYbSFbGnXG5eE_0w/edit#slide=id.g52957a68be_1_12" }, "multicriteria analyse"), ". Die hebben we vervolgens gebruikt om te kijken naar bestaande design systems binnen de overheid, om te zien welke delen goed herbruikbaar zijn. Maar belangrijker nog: de analyse geeft structuur aan de levendige gesprekken en discussies tussen ontwikkelaars en ontwerpers.\nBekijk de ", (0, a.kt)("a", { parentName: "p", href: "https://docs.google.com/document/d/1i4msTX1rX7aRjeOMi2jLu3Cg8RldtlIXx4oLyGsFCsI/edit#heading=h.i2ykj4cvndw4" }, "belangrijkste conclusies"), "."), (0, a.kt)("p", null, "Naast de meetups hebben we meer dan 20 mensen in de overheid ", (0, a.kt)("a", { parentName: "p", href: "https://docs.google.com/document/d/1i4msTX1rX7aRjeOMi2jLu3Cg8RldtlIXx4oLyGsFCsI/edit#heading=h.vbw0pb3lkt7m" }, "ge\xefnterviewd"), " over hun design systems."), (0, a.kt)("h2", { id: "maart-april-top-down-ondersteuning-en-commitment" }, "Maart-april: Top-down ondersteuning en commitment"), (0, a.kt)("p", null, "Een design system dat de dagelijkse gebruikers goed ondersteunt, is belangrijk voor de adoptie. Maar het is niet afdoende. Op tijd support en commitment krijgen van beslissers bij de belangrijkste dienstverleners in de overheid is essentieel. Zo voorkomen we dat bij de eerste technische of organisatorische hobbel organisaties afhaken omdat het voor d\xe9ze organisatie n\xe9t even anders werkt."), (0, a.kt)("p", null, "We overtuigen organisaties om hun ondersteuning zichtbaar te maken via citaten die we op de projectwebsite publiceren. Dit geeft gelijk een zwaan-kleef-aan effect. Als je het ", (0, a.kt)("a", { parentName: "p", href: "https://accept.designsystem.gebruikercentraal.nl/betrokken-partijen/" }, "lijstje met betrokken organisaties"), " ziet, dan kun je toch niet achterblijven?"), (0, a.kt)("h2", { id: "april-2019-start-van-de-werkgroepen" }, "April 2019: Start van de werkgroepen"), (0, a.kt)("p", null, "Na de bredere analyse zijn we met twee werkgroepen van start gegaan om echt aan de slag te gaan met het in de lucht krijgen van een design system."), (0, a.kt)("p", null, "De Werkgroep Componenten houdt zich vooral bezig met het de kwaliteit van de componenten in het design system. Zijn ze breed bruikbaar? Getest op gebruikers? We verwachten dat grote delen van bestaande design systems in de overheid hergebruikt kunnen worden."), (0, a.kt)("p", null, "De Werkgroep Tools en Technieken kijkt naar meer technische zaken en leunt meer op de input van ontwikkelaars. Hoe is het versiebeheer geregeld? Hoe is de onafhankelijkheid van frameworks? Etcetera."), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/06/Plaatje-werkgroepen.png", alt: "Illustratie over hoe de werkgroepen en interviews bijdragen aan de wensen en criteria voor het design system. " })), (0, a.kt)("p", null, "\u201cEn de burger dan, hoe is die betrokken?\u201d horen we je denken. Uiteraard heeft een design system pas meerwaarde voor burgers en ondernemers als de bouwstenen goed zijn getest bij de gebruikers van de diverse doelgroepen. Dat gaan we doen in de volgende fase van het project."), (0, a.kt)("h2", { id: "vervolgstappen-bouwen-maar-proof-of-concept-en-pilot" }, "Vervolgstappen: Bouwen maar! Proof of Concept en pilot"), (0, a.kt)("p", null, "Op basis van de meetups, de multi-criteria analyse en de interviews, hebben we onze conclusies opgesteld als ", (0, a.kt)("a", { parentName: "p", href: "https://docs.google.com/document/d/1i4msTX1rX7aRjeOMi2jLu3Cg8RldtlIXx4oLyGsFCsI/edit" }, "onderbouwing voor de keuze van het Proof of Concept"), ". Je feedback op dit document is nog altijd welkom."), (0, a.kt)("p", null, "Het moment is nu aangebroken om een eerste design system te gaan bouwen! Voor het Proof of Concept hergebruiken we de tool van het ", (0, a.kt)("a", { parentName: "p", href: "https://design-system.service.gov.uk/" }, "design system van GOV.UK"), ", aangevuld met die elementen die nodig zijn voor het maken van een contactformulier (meer details vind je in het hiervoor gelinkte document). Als basis voor die elementen nemen we het design system van DUO."), (0, a.kt)("p", null, "Na het Proof of Concept, en na goedkeuring van de stuurgroep, zullen we (ergens na de zomervakantie) starten met een pilotfase. Daarin gaan we met een beperkt aantal organisaties gezamenlijk het NL Design System ontwikkelen, met een projectteam van professionals uit die organisaties. Zo veel mogelijk op een open en transparante manier, maar nog zonder support voor gebruikers buiten de pilotorganisaties."), (0, a.kt)("h2", { id: "voor-de-zomervakantie-kun-je-deze-bijeenkomsten-nog-verwachten" }, "Voor de zomervakantie kun je deze bijeenkomsten nog verwachten:"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "3 juli 13.00-17.00 bij ICTU, Den Haag: Werksessie voor de werkgroepen."), (0, a.kt)("li", { parentName: "ul" }, "9 of 11 juli 13.00-17.30 bij de Gemeente Utrecht (voorlopig; definitieve datum volgt): open kennisbijeenkomst voor iedereen die meer wil weten over design systems bij de overheid. Houd deze website in de gaten voor meer informatie (of schrijf je in voor de nieuwsbrief).")), (0, a.kt)("p", null, "Meer weten? Word dan lid van de ", (0, a.kt)("a", { parentName: "p", href: "http://praatmee.codefor.nl/" }, "Slack groep"), " van Code for NL en zoek het NL Design System kanaal op. Meer details kun je lezen op de projectwebsite."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
