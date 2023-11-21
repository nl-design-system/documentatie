"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [32697],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => u });
   var i = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
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
      ? r(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : r(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     i,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       a = {},
       r = Object.keys(e);
      for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var l = i.createContext({}),
    d = function (e) {
     var n = i.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return i.createElement(l.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    v = i.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      r = e.originalType,
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = d(t),
      v = a,
      u = g["".concat(l, ".").concat(v)] || g[v] || k[v] || r;
     return t ? i.createElement(u, o(o({ ref: n }, m), {}, { components: t })) : i.createElement(u, o({ ref: n }, m));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var r = t.length,
      o = new Array(r);
     o[0] = v;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : a), (o[1] = s);
     for (var d = 2; d < r; d++) o[d] = t[d];
     return i.createElement.apply(null, o);
    }
    return i.createElement.apply(null, t);
   }
   v.displayName = "MDXCreateElement";
  },
  84515: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => k, frontMatter: () => r, metadata: () => s, toc: () => d });
   var i = t(87462),
    a = (t(67294), t(3905));
   const r = { title: "Waarom NL Design System onmisbaar is voor organisaties", slug: "waarom-nl-design-system-onmisbaar-is-voor-organisaties", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: new Date("2020-12-16T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/en/blog/waarom-nl-design-system-onmisbaar-is-voor-organisaties",
     source: "@site/blog/2020/20201216-waarom-nl-design-system-onmisbaar-is-voor-organisaties.md",
     title: "Waarom NL Design System onmisbaar is voor organisaties",
     description: "Samenwerken naar \xe9\xe9n overheidsbeleving voor de burger, dat is waar het NL Design System om draait. Carina Palumbo en Sjef van Leeuwen van Wigo4it draaien er niet omheen; in de toekomst hoor je er als overheidsinstantie niet meer bij zonder een gezamenlijke implementatie van het NL Design System! In deze blog vertellen zij vanuit hun technische en UX-ervaring over de realisatie van het designsysteem.",
     date: "2020-12-16T00:00:00.000Z",
     formattedDate: "December 16, 2020",
     tags: [
      { label: "contentrichtlijnen", permalink: "/en/blog/tags/contentrichtlijnen" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "Waarom NL Design System onmisbaar is voor organisaties", slug: "waarom-nl-design-system-onmisbaar-is-voor-organisaties", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["contentrichtlijnen", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/06/gc-nlds-beeldmerk.png", hide_table_of_contents: !1, date: "2020-12-16T00:00:00.000Z" },
     prevItem: { title: "Jouw project inrichten op de NL Design System-architectuur", permalink: "/en/blog/jouw-project-inrichten-op-de-nl-design-system-architectuur" },
     nextItem: { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", permalink: "/en/blog/uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Wigo4it en de betrokkenheid bij NL Design System", id: "wigo4it-en-de-betrokkenheid-bij-nl-design-system", level: 2 },
     { value: "Samenwerken aan \xe9\xe9n overheidsbeleving voor de burger", id: "samenwerken-aan-\xe9\xe9n-overheidsbeleving-voor-de-burger", level: 2 },
     { value: "Waarom het NL Design System onmisbaar is voor organisaties", id: "waarom-het-nl-design-system-onmisbaar-is-voor-organisaties", level: 2 },
     { value: "UX en tech komen samen in het NL Design System", id: "ux-en-tech-komen-samen-in-het-nl-design-system", level: 2 },
     { value: "\u201cNiet meedoen is straks geen optie meer\u201d", id: "niet-meedoen-is-straks-geen-optie-meer", level: 2 },
     { value: "Tips voor andere organisaties", id: "tips-voor-andere-organisaties", level: 2 },
     { value: "Doorontwikkelen van het NL Design System", id: "doorontwikkelen-van-het-nl-design-system", level: 2 },
     { value: "Meedoen?", id: "meedoen", level: 2 },
    ],
    m = { toc: d },
    g = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(g, (0, i.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Samenwerken naar \xe9\xe9n overheidsbeleving voor de burger, dat is waar het NL Design System om draait. Carina Palumbo en Sjef van Leeuwen van Wigo4it draaien er niet omheen; in de toekomst hoor je er als overheidsinstantie niet meer bij zonder een gezamenlijke implementatie van het NL Design System! In deze blog vertellen zij vanuit hun technische en UX-ervaring over de realisatie van het designsysteem."), (0, a.kt)("h2", { id: "wigo4it-en-de-betrokkenheid-bij-nl-design-system" }, "Wigo4it en de betrokkenheid bij NL Design System"), (0, a.kt)("p", null, "Samen met gemeenten bouwt ", (0, a.kt)("a", { parentName: "p", href: "https://www.wigo4it.nl/" }, "Wigo4it"), " aan een moderne en betrouwbare informatievoorziening. Deze samenwerking kenmerkt zich door innovaties in het sociaal domein vanuit een gemeenschappelijk doel; namelijk het zo goed mogelijk informeren van burgers. Directeur Larissa Zegveld is dan ook niet voor niets al jaren ", (0, a.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/ambassadeurs/" }, "ambassadeur van Gebruiker Centraal"), "."), (0, a.kt)("p", null, "Sjef van Leeuwen (adviseur strategie en innovatie) en Carina Palumbo (innovatie en UX-team co\xf6rdinator) zijn vanaf de start van het NL Design System betrokken bij de ontwikkeling. Zonder al te grote \u2018discussies\u2019 weten zij keer op keer het tech-gedeelte te combineren met de \u2018user experience\u2019 (UX), de gebruikerservaring, iets wat bij menige organisatie nog wel eens voor uitdagingen zorgt!"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/12/Schermafbeelding-2020-12-16-om-17.00.45.png", alt: "Voor de burger: gebruiksgemak, toegankelijk en herkenbaar" })), (0, a.kt)("h2", { id: "samenwerken-aan-\xe9\xe9n-overheidsbeleving-voor-de-burger" }, "Samenwerken aan \xe9\xe9n overheidsbeleving voor de burger"), (0, a.kt)("p", null, "Zowel Sjef als Carina vinden het belangrijk om te benadrukken dat de eensgezindheid en het uiteindelijke doel (de beleving voor de burger) de grote verbindende factor is binnen het NL Design System.\nSjef licht toe: \u201cWe werken samen aan innoverende projecten. Vanuit het UX-gedeelte neem ik het design over om te vertalen naar de technische schermen die je uiteindelijk in de apps ziet. We geloven in een designsysteem over de hele breedte: voor alle instanties \xe9\xe9n geheel. Vervolgens hebben wij een aantal prototypes gebouwd met dit designsysteem.\u201d"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/12/NLDS-community.png", alt: "NL Design System werkt met een community" })), (0, a.kt)("p", null, "\u201cJe kunt NL Design System zien als een community, we werken allemaal samen om het beste resultaat te realiseren. Vanuit Wigo4it hadden wij al ervaring met het maken van designsystemen. Toen de basis van het DUO-designsysteem gekozen werd om door te ontwikkelen voor het NL Design System, kwam dit voor ons op het juiste moment. Voor toekomstige projecten was er al een sterke behoefte aan zoiets als dit, vandaar dat wij besloten om betrokken te blijven bij de verdere ontwikkeling.\u201d \u2013 vult Carina aan."), (0, a.kt)("h2", { id: "waarom-het-nl-design-system-onmisbaar-is-voor-organisaties" }, "Waarom het NL Design System onmisbaar is voor organisaties"), (0, a.kt)("p", null, "Zowel Carina als Sjef lichten op als er gevraagd wordt welke voordelen het NL Design System biedt. Het enthousiasme voor dit project is aan alles af te lezen."), (0, a.kt)("p", null, "\u201cVanuit de tech-kant is het verloop van personeel op softwaregebied best hoog. Je ziet vaak dat mensen binnen overheden verschuiven van baan. Iedereen kan wel beamen dat het veel tijd kost om een nieuw systeem eigen te maken. Hoe fijn is het dan als je in een nieuw team komt en merkt dat hetzelfde designsysteem wordt gebruikt? Niet alleen om deze reden, maar ook wat betreft het bevorderen van de mobiliteit van werknemers. Als professional kun je bij een andere overheidsinstantie vaak redelijk snel aan de slag. Je bent veel meer uitwisselbaar als je ontwerpervaring hebt met een gezamenlijk designsysteem."), (0, a.kt)("p", null, "Carina voegt hieraan toe: \u201cHet is begonnen vanuit de overheid voor alle overheidsinstanties. Je kunt je eigen waarde eruit pakken en gebruiken wat voor jouw organisatie relevant is. Ik zie alleen maar positieve kanten! Het lost een deel van de problemen op \xe9n er ontstaat meer tijd om waardevolle applicaties te bouwen voor de burger.\u201d"), (0, a.kt)("p", null, "Over de voordelen zijn zowel Sjef als Carina het eens:"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "E\xe9n duidelijke beleving voor alle burgers;"), (0, a.kt)("li", { parentName: "ul" }, "De duur van het programmeren wordt aanzienlijk verkort, het designsysteem is er al;"), (0, a.kt)("li", { parentName: "ul" }, "Daardoor is er meer focus om de juiste vragen voor de burger te beantwoorden;"), (0, a.kt)("li", { parentName: "ul" }, "Gemak voor mensen die verschuiven qua banen binnen de overheid;"), (0, a.kt)("li", { parentName: "ul" }, "Vergelijk het met LEGO of een blokkendoos; je krijgt de losse blokjes en richt het designsysteem vervolgens naar eigen wens in.")), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "\u201cHet NL Design System lost een deel van de problemen op, zodat er meer tijd ontstaat om waardevolle applicaties voor de burger te bouwen\u201d")), (0, a.kt)("h2", { id: "ux-en-tech-komen-samen-in-het-nl-design-system" }, "UX en tech komen samen in het NL Design System"), (0, a.kt)("p", null, "Op de vraag of het samenwerken tussen de UX- en technische afdelingen wel eens voor \u2018discussies\u2019 zorgt vertelt Carina glimlachend: \u201cNatuurlijk zie ik de waarde in van de samenwerking tussen UX en tech. Door samen te werken kunnen we ons \xe9cht focussen op het gebruikersgemak voor de burger. Dit is uiteindelijk veel fijner dan ons druk te moeten maken over de kleur of positie van een bepaalde knop.\u201d"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/12/NL-Design-System.png", alt: "NL Design System: elementen, patronen, richtlijnen en stijlen" })), (0, a.kt)("p", null, "Sjef voegt toe: \u201cBij projecten waar nog geen designsysteem is zie je vaak dat de UX-afdeling vooruitloopt en inventarisaties doet bij de doelgroep. Vervolgens gaat hiervan een samenvatting naar de tech-afdeling, die vaak al een opzet heeft gemaakt. Wat er dan gebeurt is dat er concessies gedaan moeten worden in de lay-out, om de gebruikerservaring te optimaliseren. Dit kan voor spanning zorgen in het ontwerpproces.\u201d"), (0, a.kt)("p", null, "\u201cJa, wat dat betreft helpt het NL Design System hierbij. Er zijn geen problemen tijdens de ontwikkelingsfase geweest, omdat we allemaal met een andere \u2018bril\u2019 kijken en van elkaar leren.\u201d\u2013 vertelt Carina."), (0, a.kt)("h2", { id: "niet-meedoen-is-straks-geen-optie-meer" }, "\u201cNiet meedoen is straks geen optie meer\u201d"), (0, a.kt)("p", null, "\u201cVroeger was het een optie om een website te hebben die gevonden werd in Google, nu kan je als bedrijf niet meer zonder. Zo zie ik het gebruik van het NL Design System ook. In mijn ogen wordt het een must om gebruik te maken van het designsysteem. Samen met andere organisaties zijn wij van Wigo4it de \u2018early adopters\u2019 ervan. In de toekomst hoor je er als overheidsinstantie niet meer bij als je dit niet gebruikt.\u201d- legt Carina uit."), (0, a.kt)("p", null, "Sjef is het met Carina eens en voegt toe: \u201cVoor burgers is het belangrijk dat er \xe9\xe9n overheidsbeleving is, dat is nu namelijk niet het geval, want iedere website werkt anders. Het is geen geheim of verrassing dat dit voor gebruikers heel onhandig is. Het NL Design System biedt zelfs de mogelijkheid om de eigen \u2018look en feel\u2019 van een gemeente of stad door te voeren. Denk aan een afbeelding van de Erasmusbrug die helemaal past bij de uitstraling van Rotterdam\u201d."), (0, a.kt)("h2", { id: "tips-voor-andere-organisaties" }, "Tips voor andere organisaties"), (0, a.kt)("p", null, "Dat het NL Design System de toekomst heeft, is duidelijk volgens Carina en Sjef. Zij willen andere organisaties vooral aanmoedigen om te participeren aan het project."), (0, a.kt)("p", null, "\u201cJuist n\xfa heb je als organisatie de kans om mee te denken in het proces. Zo misten wij als Wigo4it bepaalde tabellen in de schermen. Deze tabellen tonen gerateerde gegevens aan de gebruiker, die onmisbaar zijn. Omdat wij meedenken in het proces, konden wij ervoor zorgen dat dit ge\xefmplementeerd wordt. Dit is voor toekomstige projecten alleen maar een voordeel.\u201d \u2013 zegt Carina."), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/12/OverheidME.png", alt: "Schermafdrukken van Overheid Me, een van de experimentele prototypes door Wigo4it gemaakt met de NL Design System" })), (0, a.kt)("p", null, "Momenteel helpt Wigo4it met het realiseren van een aantal prototypen voor de gemeente Utrecht binnen Common Ground, samen met ICTU en VNG/GBI waarbij zij gebruik maken van het NL Design System: Overheid ME. In een aanzienlijk korte tijd werd dit project opgezet, omdat er al een opzet is vanuit het designsysteem.\nTegen organisaties die twijfelen of meedoen aan het NL Design System nuttig is, wil Carina zeggen: \u201c. Het is een open source initiatief en voelt nu misschien nog optioneel. Toch is het juist deze fase waar organisaties veel profijt van hebben. Daarom denk ik dat dit het beste moment is om in te stappen."), (0, a.kt)("p", null, "Sjef voegt toe: \u201cHoe mooi is het om door \u2018kruisbestuiving\u2019 van elkaar te leren? Zo\u2019n designsysteem wordt veel meer verrijkt door verschillende partijen dan door slechts \xe9\xe9n team. In de community zie je steeds meer eenheid ontstaan. In mijn ogen heb je dit nodig om je eigen core business uit te diepen. De mogelijkheden binnen de dienstverlening zijn nagenoeg eindeloos herbruikbaar. Dit is echt wel de toekomst van het ontwikkelen!\u201d"), (0, a.kt)("h2", { id: "doorontwikkelen-van-het-nl-design-system" }, "Doorontwikkelen van het NL Design System"), (0, a.kt)("p", null, "De komende tijd wordt het NL Design System doorontwikkeld om er een stabiele, volwassen en breed in te zetten versie van te maken. Projectleider Angela Imhof licht toe: \u2018Er zijn verschillende werksessies waarin we onder meer de wensen en eisen van gebruikers in kaart brengen en criteria vaststellen voor het gebruik en beheer ervan. Verder pakken we voor de herkenbaarheid ook het ontwerp van het NL Design System aan.\u2019"), (0, a.kt)("h2", { id: "meedoen" }, "Meedoen?"), (0, a.kt)("p", null, "Wil je meer weten of graag meedoen? Neem dan contact op met Angela Imhof. Voor meer informatie kun je je ook aanmelden op ", (0, a.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl/" }, "ons Slackkanaal"), "."), (0, a.kt)("p", null, "We nodigen je tevens van harte uit voor een ", (0, a.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/online-bijeenkomst-met-het-kernteam-van-nl-design-system/" }, "online bijeenkomst met het kernteam van NL Design System"), " op 5 januari (13.00-14.30 uur). Deze sessie is meteen een aftrap voor de \u2018heartbeat\u2019 van het project. Want daarna zullen we elke 2 weken een sessie organiseren waarin we ge\xefnteresseerden en betrokkenen meenemen in wat is er gedaan en wat gaan we doen."), (0, a.kt)("p", null, "Sjef van Leeuwen is adviseur Strategie & Innovatie bij Wigo4it met name werkzaam binnen de transitie van de digitale overheid. Hij heeft 25 jaar ervaring in het cre\xebren van digitale waardeproposities binnen meerdere marktsegmenten. Deze proposities liggen op het snijvlak van mensgerichtheid en data science. Zijn doel: het ontwikkelen van een intu\xeftieve digitale dienstverlening naar de burger in co-creatie, daarbij technologie als hulpmiddel effici\xebnt en kostenbesparend in te zetten."), (0, a.kt)("p", null, "Carina PalumboCarina Palumbo is Innovatie en UX co\xf6rdinator bij Wigo4it. Na haar studies op het gebied van Information Studies en Experience Design begon ze haar carri\xe8re in het versterken van overheids-, commerci\xeble en financi\xeble IT-organisaties door het gebruik van Design Thinking, User Experience en Innovatie methodes. In haar huidige rol bij Wigo4it helpt ze de vier grote steden in Nederland met het realiseren van een mensgerichte overheid in het sociaal domein. Haar doel: relevante en waardevol digitale dienstverlening voor een soepele interactie overheid-burger."));
   }
   k.isMDXComponent = !0;
  },
 },
]);
