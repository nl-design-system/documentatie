"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [815],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => c, kt: () => u });
   var i = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i);
    }
    return t;
   }
   function o(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
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
     i,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       r = {},
       a = Object.keys(e);
      for (i = 0; i < a.length; i++) (t = a[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (i = 0; i < a.length; i++) (t = a[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var l = i.createContext({}),
    d = function (e) {
     var n = i.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    c = function (e) {
     var n = d(e.components);
     return i.createElement(l.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    g = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    k = i.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      c = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      k = r,
      u = m["".concat(l, ".").concat(k)] || m[k] || g[k] || a;
     return t ? i.createElement(u, o(o({ ref: n }, c), {}, { components: t })) : i.createElement(u, o({ ref: n }, c));
    });
   function u(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var a = t.length,
      o = new Array(a);
     o[0] = k;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : r), (o[1] = s);
     for (var d = 2; d < a; d++) o[d] = t[d];
     return i.createElement.apply(null, o);
    }
    return i.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  84811: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => g, frontMatter: () => a, metadata: () => s, toc: () => d });
   var i = t(87462),
    r = (t(67294), t(3905));
   const a = { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", slug: "uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: new Date("2020-12-04T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/en/blog/uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system",
     source: "@site/blog/2020/20201204-uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system.md",
     title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System",
     description: "In een (online) bijeenkomst op 3 november presenteerden we een aantal goede voorbeelden van contentricthtlijnen en gingen we met de deelnemers aan de slag om met elkaar te verzinnen hoe dit in het Nederlandse designsysteem zou passen. Tijdens deze bijeenkomst is er gesproken over de verschillende content-aspecten in een designsysteem. We hebben de algemene conclusies voor je op een rij gezet.",
     date: "2020-12-04T00:00:00.000Z",
     formattedDate: "December 4, 2020",
     tags: [
      { label: "contentrichtlijnen", permalink: "/en/blog/tags/contentrichtlijnen" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", slug: "uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: "2020-12-04T00:00:00.000Z" },
     prevItem: { title: "Waarom NL Design System onmisbaar is voor organisaties", permalink: "/en/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties" },
     nextItem: { title: "Innovatiebudget voor het NL Design System", permalink: "/en/blog/innovatiebudget-voor-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "1. Content in het NL Design System", id: "1-content-in-het-nl-design-system", level: 2 },
     { value: "2. Content als hoeksteen binnen het proces", id: "2-content-als-hoeksteen-binnen-het-proces", level: 2 },
     { value: "3. Soorten content", id: "3-soorten-content", level: 2 },
     { value: "4. Consistent taalgebruik", id: "4-consistent-taalgebruik", level: 2 },
     { value: "5. Bestaande kennis", id: "5-bestaande-kennis", level: 2 },
     { value: "6. Zorgen en aandachtspunten", id: "6-zorgen-en-aandachtspunten", level: 2 },
    ],
    c = { toc: d },
    m = "wrapper";
   function g(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(m, (0, i.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "In een (online) bijeenkomst op 3 november presenteerden we een aantal goede voorbeelden van contentricthtlijnen en gingen we met de deelnemers aan de slag om met elkaar te verzinnen hoe dit in het Nederlandse designsysteem zou passen. Tijdens deze bijeenkomst is er gesproken over de verschillende content-aspecten in een designsysteem. We hebben de algemene conclusies voor je op een rij gezet."), (0, r.kt)("p", null, "De Agenda Digitale Overheid stelt dat overheidsdienstverlening toegankelijk en begrijpelijk moet zijn voor iedereen. Hiervoor zijn consistent ontworpen diensten en websites nodig. Met het NL Design System wordt er gewerkt aan een open bibliotheek waar principes, interactiepatronen en code gedeeld. Dit design system draagt niet alleen bij aan gebruiksvriendelijkere diensten van een betere kwaliteit en toegankelijkheid maar het helpt ook dubbel werk te voorkomen."), (0, r.kt)("p", null, "Een aantal designs systems bevatten contentrichtlijnen, zoals de ", (0, r.kt)("a", { parentName: "p", href: "https://readabilityguidelines.co.uk/" }, "Readability Guidelines"), " van het Verenigd Koninkrijk."), (0, r.kt)("p", null, "In een (online) bijeenkomst op 3 november presenteerden we een aantal goede voorbeelden en gingen we met de deelnemers (van gemeenten, ministeries, waterschappen, Logius, CBS, NOVUM, DUO, Belastingdienst en commerci\xeble partijen) aan de slag om met elkaar te verzinnen hoe dit in het Nederlandse designsysteem zou passen. Welke richtlijnen horen er \xe9cht in? Moet er (wetenschappelijke) onderbouwing bij?"), (0, r.kt)("p", null, "Tijdens deze bijeenkomst is er gesproken over de verschillende content-aspecten in een designsysteem. In 5 \u2018break-out sessies\u2019 gingen de deelnemers met elkaar in gesprek. Deze sessies lieten een aantal algemene conclusies zien."), (0, r.kt)("h2", { id: "1-content-in-het-nl-design-system" }, "1. Content in het NL Design System"), (0, r.kt)("p", null, "Het is duidelijk dat contentrichtlijnen zorgen voor een belangrijke functie in een designsysteem. Wel is gebleken dat het lastig is om een eenduidige tone of voice aan te houden in een \u2018white label designsysteem\u2019. Dit komt omdat de richtlijnen qua branding per product verschillen. Er kunnen w\xe9l overkoepelende richtlijnen worden vastgelegd, zoals het gebruik van taalniveau-B1."), (0, r.kt)("h2", { id: "2-content-als-hoeksteen-binnen-het-proces" }, "2. Content als hoeksteen binnen het proces"), (0, r.kt)("p", null, "Goede content zorgt voor toegankelijkheid en gebruiksvriendelijkheid. Ontwerp en inhoud kunnen dan ook niet van elkaar gescheiden worden, het is aan te raden om elkaar in een vroeg stadium te informeren.\nHet testen van taalgebruik is goed te combineren met de testen voor gebruiksvriendelijkheid. Deze uitslagen zijn te gebruiken als input voor het NL Design System."), (0, r.kt)("h2", { id: "3-soorten-content" }, "3. Soorten content"), (0, r.kt)("p", null, "Content is in verschillende soorten tekst op te splitsen, zoals:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "(Lange) informerende teksten"), (0, r.kt)("li", { parentName: "ul" }, "Applicatie/interfaceteksten (zoals knopteksten en formulierelementen)"), (0, r.kt)("li", { parentName: "ul" }, "Categorie- en feedbackteksten.")), (0, r.kt)("p", null, "Onder content wordt niet alleen tekst verstaan, maar ook (informatieve) afbeeldingen, alt-tekst en extra verduidelijking voor screenreadergebruikers valt hieronder."), (0, r.kt)("h2", { id: "4-consistent-taalgebruik" }, "4. Consistent taalgebruik"), (0, r.kt)("p", null, "Het is belangrijk dat er consistent taalgebruik is tijdens alle contactmomenten. Dit geldt voor webpagina\u2019s, e-mails, sociale media en zelfs voor telefooncontact."), (0, r.kt)("h2", { id: "5-bestaande-kennis" }, "5. Bestaande kennis"), (0, r.kt)("p", null, "Veel richtlijnen zijn al beschikbaar en (direct) bruikbaar.\nDoor de overlap in deze richtlijnen is het NL Design System d\xe9 plek om alle informatie te verzamelen, zodat het een basis-set wordt met algemene contentrichtlijnen.\n(Verdieping kan plaatsvinden door te linken naar product-specifieke contentrichtlijnen en illustratieve voorbeelden van content in daadwerkelijk gebruik.)"), (0, r.kt)("h2", { id: "6-zorgen-en-aandachtspunten" }, "6. Zorgen en aandachtspunten"), (0, r.kt)("p", null, "Voor het opnemen van contentrichtlijnen in een centraal designsysteem zijn ook een aantal zorgen en aandachtspunten besproken."), (0, r.kt)("p", null, "De grootste zorgen en aandachtspunten gaan over:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "De \u2018adoptie\u2019: het systeem moet makkelijk te vinden \xe9n gebruiken zijn."), (0, r.kt)("li", { parentName: "ul" }, "Het onderhoud en mandaat van de content: wie gaat het onderhouden?")), (0, r.kt)("p", null, "Een groot deel van deze zorgen kunnen we met het NL Design System verlichten. Door content op te nemen in de \u2018definition of done\u2019 voor componenten en patronen, kan de vuistregel in acht genomen worden voor het volwassen model. (Een component of patroon krijgt pas een volwassen 1.0 status als het voldoen aan alle vuistregels)."), (0, r.kt)("p", null, "De vuistregel betreft:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Is de tekst leesbaar en begrijpelijk?"), (0, r.kt)("li", { parentName: "ul" }, "Zijn afbeeldingen voorzien van een beschrijvende alt-tekst?")), (0, r.kt)("p", null, "Het aanbieden van formulierelementen zou een deel van de buy-in zorgen kunnen wegnemen (de tekstinvoer al voorzien van de juiste content in verschillende contexten). De juiste componenten zijn immers al centraal beschikbaar, er is al een opzet gemaakt.\nVoor onderhoud is het NL Design System grotendeels afhankelijk van het enthousiasme van contentspecialisten die willen deelnemen. Het moet zo makkelijk mogelijk zijn om hieraan bij te dragen."));
   }
   g.isMDXComponent = !0;
  },
 },
]);
