"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98477],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => d, kt: () => c });
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
   function l(e, n) {
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
   var s = r.createContext({}),
    p = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    d = function (e) {
     var n = p(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    k = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    u = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      d = l(e, ["components", "mdxType", "originalType", "parentName"]),
      k = p(t),
      u = i,
      c = k["".concat(s, ".").concat(u)] || k[u] || m[u] || a;
     return t ? r.createElement(c, o(o({ ref: n }, d), {}, { components: t })) : r.createElement(c, o({ ref: n }, d));
    });
   function c(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var a = t.length,
      o = new Array(a);
     o[0] = u;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[k] = "string" == typeof e ? e : i), (o[1] = l);
     for (var p = 2; p < a; p++) o[p] = t[p];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  85102: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => o, default: () => m, frontMatter: () => a, metadata: () => l, toc: () => p });
   var r = t(87462),
    i = (t(67294), t(3905));
   const a = { title: "Kick-off werkgroepen van het NL Design System", slug: "kick-off-werkgroepen-van-het-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["werkgroepen", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/05/binary-2450188_1920-1200x675.jpg", hide_table_of_contents: !1, date: new Date("2019-05-07T00:00:00.000Z") },
    o = void 0,
    l = {
     permalink: "/blog/kick-off-werkgroepen-van-het-nl-design-system",
     source: "@site/blog/2019/20190507-kick-off-werkgroepen-van-het-nl-design-system.md",
     title: "Kick-off werkgroepen van het NL Design System",
     description: "We zijn uit de startblokken met de werkgroepen van het NL Design System! Woensdag 24 april hebben twintig ontwerpers, UX experts en ontwikkelaars met elkaar nagedacht over principes, criteria en concrete componenten.",
     date: "2019-05-07T00:00:00.000Z",
     formattedDate: "7 mei 2019",
     tags: [
      { label: "werkgroepen", permalink: "/blog/tags/werkgroepen" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "Kick-off werkgroepen van het NL Design System", slug: "kick-off-werkgroepen-van-het-nl-design-system", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["werkgroepen", "NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/05/binary-2450188_1920-1200x675.jpg", hide_table_of_contents: !1, date: "2019-05-07T00:00:00.000Z" },
     prevItem: { title: "Update - NL Design System", permalink: "/blog/update-nl-design-system" },
     nextItem: { title: "E\xe9n over\xadheid - practise what you preach", permalink: "/blog/van-start-een-gezamelijk-design-system-voor-de-overheid" },
    },
    s = { authorsImageUrls: [void 0] },
    p = [
     { value: "Werkgroep componenten", id: "werkgroep-componenten", level: 2 },
     { value: "Ontwerpprincipes", id: "ontwerpprincipes", level: 3 },
     { value: "Criteria ter beoordeling componenten", id: "criteria-ter-beoordeling-componenten", level: 3 },
     { value: "Selectie urgente componenten", id: "selectie-urgente-componenten", level: 3 },
     { value: "Uitwerken componentbeschrijving", id: "uitwerken-componentbeschrijving", level: 3 },
     { value: "Werkgroep Tools en Technieken", id: "werkgroep-tools-en-technieken", level: 2 },
     { value: "Tot slot", id: "tot-slot", level: 2 },
    ],
    d = { toc: p },
    k = "wrapper";
   function m(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(k, (0, r.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "We zijn uit de startblokken met de werkgroepen van het NL Design System! Woensdag 24 april hebben twintig ontwerpers, UX experts en ontwikkelaars met elkaar nagedacht over principes, criteria en concrete componenten."), (0, i.kt)("p", null, "We zijn uit de startblokken met de werkgroepen van het NL Design System!"), (0, i.kt)("p", null, "(Voor wie er niet eerder over hoorde: dat is een verzameling van herbruikbare componenten, waarmee je als ontwerper of ontwikkelaar eenvoudig digitale diensten kunt ontwikkelen. Denk aan knoppen, formulierelementen en paginatemplates. Meer achtergrond lees je op de ", (0, i.kt)("a", { parentName: "p", href: "http://designsystem.gebruikercentraal.nl/" }, "projectwebsite"), ".)"), (0, i.kt)("p", null, "Woensdag 24 april hebben de Werkgroep Componenten en de Werkgroep Tools en Technieken (voorheen: Expertgroep Design System), uitgerust na het Paasweekend, de eerste eieren gelegd. Twintig ontwerpers, UX-experts en ontwikkelaars hebben met elkaar nagedacht over principes, criteria en concrete componenten. En dat met heel veel enthousiasme en energie.\nDoel van de bijeenkomst was om op een aantal onderwerpen een vliegende start te maken en op de dag zelf al tot een zichtbare opbrengst te komen. En dat is gelukt! Tot aan en tijdens de volgende werksessie op 23 mei (in het Stadskantoor van de Gemeente Utrecht, 13.00-17.00) worden de resultaten verder uitgebreid en aangevuld."), (0, i.kt)("p", null, (0, i.kt)("img", { parentName: "p", src: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/05/IMG_20190424_104-1024x768.jpg", alt: "Tafel met 6 mannen, laptops en lego" }), "\nDe eerste samenwerking, met een Lego-opdracht als opwarmer"), (0, i.kt)("h2", { id: "werkgroep-componenten" }, "Werkgroep componenten"), (0, i.kt)("h3", { id: "ontwerpprincipes" }, "Ontwerpprincipes"), (0, i.kt)("p", null, "Bij het uitwerken van klantreizen, user experiences en concrete ontwerpen helpt het om vanuit en visie of gedachte op ontwerp en interactie te werken. Veel organisaties werken daarom met zogenaamde \u2018Design Principles\u2019, ofwel ontwerpprincipes. De werkgroep heeft een aantal van de ", (0, i.kt)("a", { parentName: "p", href: "https://docs.google.com/presentation/d/1JWocs6fW8hH0avI-RRT5U-ftSts7Z1ncPX_wR2GMfk8/edit#slide=id.g58bbbffe90_0_0" }, "bestaande en bekende lijstjes"), " kritisch bekeken en een eigen selectie gemaakt. Uitgangspunt daarbij was dat de principes aansluiten op de resultaten uit het rapport \u2018Informatie op Maat\u2019 (over wat burgers verwachten van de overheid) en vooral helpen bij het selecteren en beoordelen van componenten. Een subgroep heeft de geselecteerde principes een slag verder gebracht."), (0, i.kt)("p", null, "Ontwerpprincipes versie 0.1:"), (0, i.kt)("ol", null, (0, i.kt)("li", { parentName: "ol" }, "De gebruikersbehoefte staat voorop"), (0, i.kt)("li", { parentName: "ol" }, "Ontwerp en werking is voor iedereen, niemand wordt buiten gesloten"), (0, i.kt)("li", { parentName: "ol" }, "Ontwerp en werking is voorspelbaar/consistent (niet per se uniform)"), (0, i.kt)("li", { parentName: "ol" }, "Ontwerp en werking hebben focus, zonder overbodige elementen of handelingen"), (0, i.kt)("li", { parentName: "ol" }, "Behoefte, ontwerp en werking is onderbouwd met onderzoek")), (0, i.kt)("p", null, "De subgroep zal de principes voor de volgende bijeenkomst verder beschrijven en zo nodig aanvullen. Per principe zal worden uitgeschreven wat we eronder verstaan. Zo is voor principe I al benoemd dat \u2018aandacht voor de context\u2019 en \u2018ontwerpen voor mensen\u2019 hier onderdeel van uitmaken. \u2018Ontwerpen voor toegankelijkheid\u2019 op zijn beurt hoort bij principe II."), (0, i.kt)("h3", { id: "criteria-ter-beoordeling-componenten" }, "Criteria ter beoordeling componenten"), (0, i.kt)("p", null, "Onderstaande criteria zijn door de groep geselecteerd (op basis van ", (0, i.kt)("a", { parentName: "p", href: "https://docs.google.com/presentation/d/1JWocs6fW8hH0avI-RRT5U-ftSts7Z1ncPX_wR2GMfk8/edit#slide=id.g58bbbffe90_0_10" }, "resultaten uit eerdere meetups"), ") om als eerste uit te werken en in meer of mindere mate uitgeschreven."), (0, i.kt)("p", null, "Criteria versie 0.1:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Component is uniek en/of generiek toepasbaar"), (0, i.kt)("li", { parentName: "ul" }, "Component is getest op gebruikers"), (0, i.kt)("li", { parentName: "ul" }, "Component is toegankelijk"), (0, i.kt)("li", { parentName: "ul" }, "Component is stijlonafhankelijk"), (0, i.kt)("li", { parentName: "ul" }, "Component voldoet aan gedefinieerde eisen en standaarden"), (0, i.kt)("li", { parentName: "ul" }, "Component is gedocumenteerd")), (0, i.kt)("p", null, "De subgroepen die aan de verschillende criteria hebben gewerkt maken voor de volgende bijeenkomst een verdiepingsslag op de eerste lijst en doen suggesties voor relevante uitbreiding."), (0, i.kt)("h3", { id: "selectie-urgente-componenten" }, "Selectie urgente componenten"), (0, i.kt)("p", null, "Op onderbuik is een eerste lijstje van componenten samengesteld. Aan dit lijstje is de meeste behoefte, dan wel er is snel winst te behalen."), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Formulierelementen (in zijn algemeen)"), (0, i.kt)("li", { parentName: "ul" }, "Navigatie"), (0, i.kt)("li", { parentName: "ul" }, "Zoeken"), (0, i.kt)("li", { parentName: "ul" }, "Meldingen"), (0, i.kt)("li", { parentName: "ul" }, "Links"), (0, i.kt)("li", { parentName: "ul" }, "Skiplink"), (0, i.kt)("li", { parentName: "ul" }, "Buttons"), (0, i.kt)("li", { parentName: "ul" }, "Logo"), (0, i.kt)("li", { parentName: "ul" }, "Cards")), (0, i.kt)("p", null, "Uit het lijstje zijn twee componenten gekozen: navigatie en meldingen. Met deze componenten in het achterhoofd is gekeken of de eerder opgestelde principes en criteria werkbaar zijn. In beide gevallen bleek dit het geval."), (0, i.kt)("p", null, "Een belangrijke constatering tijdens het werken met componenten en criteria is dat een component zelden op zichzelf te beoordelen is. Vrijwel altijd zal dit in de context van een gebruikerservaring of klantreis zijn. Daarom is besloten om als eerste een contactformulier uit te werken naar componenten. Dit geeft context, iedereen heeft een contactformulier, formulierelementen hebben urgentie en het levert bovendien meteen een flinke lijst componenten op."), (0, i.kt)("h3", { id: "uitwerken-componentbeschrijving" }, "Uitwerken componentbeschrijving"), (0, i.kt)("p", null, "Tot slot is een start gemaakt met het visualiseren en beschrijven van de weergave van componenten in de tool. Twee groepen hebben onafhankelijk van elkaar een beschrijving uitgewerkt. Hiervoor was uiteindelijk minder tijd beschikbaar dan beoogd. Desondanks; de kop is er af."), (0, i.kt)("h2", { id: "werkgroep-tools-en-technieken" }, "Werkgroep Tools en Technieken"), (0, i.kt)("p", null, "Deze richt zich in het kader van de componentenbibliotheek op het ophalen van welke tools en technieken (formaten, informatie) er nodig zijn voor ontwerpers en ontwikkelaars in verschillende fases van het ontwerp- en implementatieproces.\nHet doel van deze kick-off sessie was de selectie van de basis (formaten, informatie) die we vanuit NL Design System willen ondersteunen.\nWe hebben discussies gehad over de principes die we daarvoor hanteren:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "de componenten richten zich op:", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "mobiel gebruik en desktopgebruik"), (0, i.kt)("li", { parentName: "ul" }, "van websites en webapplicaties"), (0, i.kt)("li", { parentName: "ul" }, "door middel van responsive design"))), (0, i.kt)("li", { parentName: "ul" }, "de basisstijl van componenten laat voldoende ruimte voor huisstijl"), (0, i.kt)("li", { parentName: "ul" }, "het is eenvoudig om te beginnen met het gebruiken van de componenten:", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "bruikbaar op basis van online documentatie"), (0, i.kt)("li", { parentName: "ul" }, "gebruik van gangbare (open web) standaarden"), (0, i.kt)("li", { parentName: "ul" }, "geen installatie(s) vereist"), (0, i.kt)("li", { parentName: "ul" }, "geen framework(s) vereist"))), (0, i.kt)("li", { parentName: "ul" }, "de componenten zijn los te gebruiken:", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "stijlen interfereren niet met bestaande stijlen"), (0, i.kt)("li", { parentName: "ul" }, "component-code los te selecteren (dus niet: honderden regels code terwijl je alleen de ", (0, i.kt)("inlineCode", { parentName: "li" }, "<h1>"), " nodig hebt)"), (0, i.kt)("li", { parentName: "ul" }, "maar ook: het is mogelijk om alles in \xe9\xe9n keer te includeren als basis"))), (0, i.kt)("li", { parentName: "ul" }, "geteste, robuuste code; snel, klein, valide, WCAG2.1, veilig, etc."), (0, i.kt)("li", { parentName: "ul" }, "beheerste uitrol van nieuwe versies"), (0, i.kt)("li", { parentName: "ul" }, "duidelijk wat de status van een component is (voorstel, productie, verouderd, etc.)", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "gezamenlijk beeld voor designers en developers"), (0, i.kt)("li", { parentName: "ul" }, "gezamenlijke taal/labeling/id\u2019s van componenten"))), (0, i.kt)("li", { parentName: "ul" }, "tools moeten bruikbaar zijn voor beide doelgroepen"), (0, i.kt)("li", { parentName: "ul" }, "we voorzien in de basis, zelf uit te breiden op basis van duidelijke ontwerpprincipes"), (0, i.kt)("li", { parentName: "ul" }, "rationale achter componenten duidelijk:", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "wanneer gebruik je iets wel, wanneer niet?"), (0, i.kt)("li", { parentName: "ul" }, "waarom zijn beslissingen genomen (op basis van welke observaties of best practises)?")))), (0, i.kt)("p", null, "We hebben gezocht naar een lijst van noodzakelijke tools en technieken, die is verwerkt in de multicriteria-analyse:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "op componentniveau:", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "unieke identifier"), (0, i.kt)("li", { parentName: "ul" }, "functionele beschrijving"), (0, i.kt)("li", { parentName: "ul" }, "Figma"), (0, i.kt)("li", { parentName: "ul" }, "Sketch"), (0, i.kt)("li", { parentName: "ul" }, "SVG (preview)"), (0, i.kt)("li", { parentName: "ul" }, "CSS"), (0, i.kt)("li", { parentName: "ul" }, "SASS"), (0, i.kt)("li", { parentName: "ul" }, "SASS design tokens"), (0, i.kt)("li", { parentName: "ul" }, "HTML snippet"), (0, i.kt)("li", { parentName: "ul" }, "\u201cVanilla\u201d JS"), (0, i.kt)("li", { parentName: "ul" }, "gebruikershandleiding"), (0, i.kt)("li", { parentName: "ul" }, "test documentatie (WCAG2.1)"))), (0, i.kt)("li", { parentName: "ul" }, "op bibliotheekniveau:", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "versiebeheer (semver.org)"), (0, i.kt)("li", { parentName: "ul" }, "Figma"), (0, i.kt)("li", { parentName: "ul" }, "Sketch"), (0, i.kt)("li", { parentName: "ul" }, "CSS"), (0, i.kt)("li", { parentName: "ul" }, "SASS"), (0, i.kt)("li", { parentName: "ul" }, "SASS design tokens"), (0, i.kt)("li", { parentName: "ul" }, "\u201cVanilla\u201d JS"), (0, i.kt)("li", { parentName: "ul" }, "Gebruikershandleiding"))), (0, i.kt)("li", { parentName: "ul" }, "standaarden", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "layout: Prettier defaults (prettier.io)"), (0, i.kt)("li", { parentName: "ul" }, "CSS naming: BEM (getbem.com/introduction)"))), (0, i.kt)("li", { parentName: "ul" }, "Tools", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "issues: Github"))), (0, i.kt)("li", { parentName: "ul" }, "nog niet besproken/besloten", (0, i.kt)("ul", { parentName: "li" }, (0, i.kt)("li", { parentName: "ul" }, "licentie(s)"), (0, i.kt)("li", { parentName: "ul" }, "cdn (edited)")))), (0, i.kt)("p", null, "Volgende stap is dat we op basis van deze lijst kijken naar de manier waarop enkele bestaande design systems ge\xefmplementeerd zijn (DUO, Belastingdienst, SVB, GOV.UK, \u2026), om te kijken wat we kunnen hergebruiken en met wie we kunnen samenwerken."), (0, i.kt)("p", null, "We doen dit op basis van twee aspecten:"), (0, i.kt)("ol", null, (0, i.kt)("li", { parentName: "ol" }, "De bereidheid tot samenwerken van het projectteam van het design system."), (0, i.kt)("li", { parentName: "ol" }, "De geschiktheid van het design system zelf, gebaseerd op de multicriteria-analyse.")), (0, i.kt)("h2", { id: "tot-slot" }, "Tot slot"), (0, i.kt)("p", null, "Hartelijk dank aan de Belastingdienst voor het beschikbaar stellen van de locatie!"), (0, i.kt)("p", null, "De werkgroepen blijven de komende maanden eens per maand bij elkaar komen. In de tussenliggende maand wordt door leden van de groep verder gewerkt aan de resultaten uit deze eerst sessie."), (0, i.kt)("p", null, "De volgende werksessie is op 23 mei (bij de Gemeente Utrecht, 13.00-17.00). De leden van de werkgroepen hebben hiervoor inmiddels een uitnodiging gehad. We streven ernaar om in juni weer een breder toegankelijke sessie te organiseren."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
