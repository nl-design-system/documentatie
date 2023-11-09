"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [99605],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => u });
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
   function o(e) {
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
   function s(e, n) {
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
   var l = a.createContext({}),
    d = function (e) {
     var n = a.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return a.createElement(l.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    k = {
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
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = d(t),
      p = r,
      u = g["".concat(l, ".").concat(p)] || g[p] || k[p] || i;
     return t ? a.createElement(u, o(o({ ref: n }, m), {}, { components: t })) : a.createElement(u, o({ ref: n }, m));
    });
   function u(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var i = t.length,
      o = new Array(i);
     o[0] = p;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : r), (o[1] = s);
     for (var d = 2; d < i; d++) o[d] = t[d];
     return a.createElement.apply(null, o);
    }
    return a.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  6692: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => k, frontMatter: () => i, metadata: () => s, toc: () => d });
   var a = t(87462),
    r = (t(67294), t(3905));
   const i = { title: "Van start! Een gezamelijk design system voor de overheid", slug: "een-overheid-practice-what-you-preach", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png", hide_table_of_contents: !1, date: new Date("2019-01-25T00:00:00.000Z") },
    o = void 0,
    s = { permalink: "/en/blog/een-overheid-practice-what-you-preach", source: "@site/blog/2019/20190125-van-start-een-gezamelijk-design-system-voor-de-overheid.md", title: "Van start! Een gezamelijk design system voor de overheid", description: "Doe mee! Samen werken aan \xe9\xe9n design system voor Nederland. Sluit je aan, doe mee via bijeenkomsten, praat mee via Slack.", date: "2019-01-25T00:00:00.000Z", formattedDate: "January 25, 2019", tags: [{ label: "NL design system", permalink: "/en/blog/tags/nl-design-system" }], readingTime: 5.5, hasTruncateMarker: !0, authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], frontMatter: { title: "Van start! Een gezamelijk design system voor de overheid", slug: "een-overheid-practice-what-you-preach", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["NL design system"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png", hide_table_of_contents: !1, date: "2019-01-25T00:00:00.000Z" }, prevItem: { title: "E\xe9n over\xadheid - practise what you preach", permalink: "/en/blog/van-start-een-gezamelijk-design-system-voor-de-overheid" }, nextItem: { title: "Design systems in het buitenland - 6 lessen", permalink: "/en/blog/design-systems-in-het-buitenland-6-lessen" } },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Wat is een design system", id: "wat-is-een-design-system", level: 2 },
     { value: "De voordelen van een gezamenlijk design system", id: "de-voordelen-van-een-gezamenlijk-design-system", level: 2 },
     { value: "Hoe we gaan werken", id: "hoe-we-gaan-werken", level: 2 },
     { value: "Projectaanpak", id: "projectaanpak", level: 2 },
     { value: "Doe mee! en kom naar de meetup", id: "doe-mee-en-kom-naar-de-meetup", level: 2 },
    ],
    m = { toc: d },
    g = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(g, (0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "Doe mee! Samen werken aan \xe9\xe9n design system voor Nederland. Sluit je aan, doe mee via bijeenkomsten, praat mee via Slack."), (0, r.kt)("p", null, "De Agenda Digitale Overheid stelt dat de overheid ", (0, r.kt)("a", { parentName: "p", href: "https://www.digitaleoverheid.nl/nldigibeter/toegankelijk-begrijpelijk-en-voor-iedereen/" }, "toegankelijk en begrijpelijk"), " voor iedereen moet zijn. Consistentie van online diensten, apps en websites draagt bij aan begrijpelijkheid voor burgers en ondernemers. Om die consistentie beter te bereiken, gaan we meer code en ontwerpen tussen overheidsorganisaties delen via een gezamenlijk design system."), (0, r.kt)("h2", { id: "wat-is-een-design-system" }, "Wat is een design system"), (0, r.kt)("p", null, "Een design system is simpel gezegd een verzameling van herbruikbare componenten waarmee je als ontwerper of ontwikkelaar op een eenvoudige, consistente en hoogwaardige manier digitale diensten kunt ontwikkelen. In plaats van iedere keer opnieuw na te moeten denken over dezelfde ontwerpvraagstukken, kun je voortbouwen op een stevige basis. Zie het als Lego-stenen voor digitale dienstverlening. Veel overheidsorganisaties hebben al een eigen design system, maar een gemeenschappelijk systeem ontbreekt nog."), (0, r.kt)("h2", { id: "de-voordelen-van-een-gezamenlijk-design-system" }, "De voordelen van een gezamenlijk design system"), (0, r.kt)("p", null, "Naast het verbeteren van consistentie zijn er meer voordelen. Omdat er meer tijd is om componenten te testen, neemt de kwaliteit toe. Denk bijvoorbeeld aan toegankelijkheid voor mensen met een visuele of andere beperking: door uitgebreid te testen met deze doelgroep, is de kans groter dat je diensten voor deze doelgroep ook goed werkt. Zo kunnen we burgers beter van dienst zijn."), (0, r.kt)("p", null, "Daarnaast zijn er ook voor de overheid zelf zijn voordelen. Doordat we niet elke keer over dezelfde hoeven na te denken, scheelt het veel dubbel werk. Je kunt veel sneller voortgang maken in een project, want je hoeft geen tijd meer te spenderen aan het oplossen van problemen die al tientallen keren door anderen zijn opgelost. Daarmee heb je de tijd hebt om na te denken over die uitdagingen die uniek zijn voor jouw dienst.\nMeer weten? Bekijk deze ", (0, r.kt)("a", { parentName: "p", href: "https://docs.google.com/presentation/d/1sKeidP51rcJ1aGcp9RzcCTn5vu1JuaHz9JjqguuIil8/edit#slide=id.g424cc2a189_2_39" }, "presentatie over het gezamenlijke design system"), "."), (0, r.kt)("h2", { id: "hoe-we-gaan-werken" }, "Hoe we gaan werken"), (0, r.kt)("p", null, "Nu we net van start gaan, willen we als eerste de uitgangspunten delen van hoe we willen gaan werken om zo snel mogelijk een goed bruikbaar \xe9n breed gebruikt design systeem te bouwen."), (0, r.kt)("ol", null, (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "Samenwerken"), " Uit ", (0, r.kt)("a", { parentName: "li", href: "http://www.gebruikercentraal.nl/blog/design-systems/" }, "ervaringen bij andere design systems van buitenlandse overheden"), ", kwam sterk naar voren dat de betrokkenheid van de community rondom een design system van groot belang is. We stimuleren daarom bijdragen van individuele developers en designers. We werken vanuit het projectteam samen met partners binnen en buiten de overheid."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "Adoptie voor perfectie"), " Het gebruik van het design system is de belangrijkste graadmeter voor succes, vooral voor de beginfase. Als een design system niet gebruikt wordt, dan heeft het geen waarde. In de eerste fase zullen we op zoek gaan naar wat er minimaal nodig is om de eerste conceptversie bruikbaar te maken voor ontwikkelaars en ontwerpers (een ", (0, r.kt)("a", { parentName: "li", href: "https://en.wikipedia.org/wiki/Minimum_viable_product" }, "Minimum Viable Product"), ", in startup-termen)."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "De gebruiker centraal"), " De digitale diensten gebaseerd op het design system zijn voor burgers en ondernemers. Zij zullen merken dat de diensten toegankelijker en makkelijker in gebruik worden. Om dat te bereiken, testen we de componenten met eindgebruikers met diverse achtergronden. We committeren ons daarbij aan de ", (0, r.kt)("a", { parentName: "li", href: "http://www.gebruikercentraal.nl/instrumenten/ontwerpprincipes/" }, "Gebruiker Centraal Ontwerpprincipes"), "."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "De gebruiker centraal"), " Het design systeem z\xe9lf wordt gebruikt door met ontwikkelaars, designers, communicatieprofessionals en anderen die voor de overheid werken. Om aan te sluiten bij hun behoeften en werkwijzen, starten met deze te onderzoeken. En dat blijven we doen."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "Open en transparant"), " We kondigen snel de plannen aan en we zijn open over onze afwegingen, ook als we nog niet 100% zeker van onze zaak zijn. Bij voorkeur maken we gebruik van open source software en geven we verbeteringen terug aan de gemeenschap."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "Niet lullen, maar poetsen"), " Een design system moet vooral bruikbaar zijn en waarde opleveren voor de gebruikers. Daar ligt dus de focus. Natuurlijk zullen we het design system ook moeten \u201cverkopen\u201d en er aandacht voor vragen, maar we willen vooral waarde toevoegen. Dit balanceren we met het tweede punt."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "Hergebruik wat er al is"), " We maken dankbaar gebruik van bestaande design systemen binnen en buiten de overheid, open source software en internationale design systemen. We sluiten aan bij gangbare standaarden en conventies."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "Het design system is nooit af"), " Front-end technieken, best practises en verwachtingen van gebruikers veranderen snel. Het design system moet hierop flexibel op in blijven spelen. We blijven daarom bijleren. Ook deze uitgangspunten zijn aan verandering onderhevig: het zijn niet meer dan hypotheses op een bepaald moment. We zullen ze aanpassen waar nodig."), (0, r.kt)("li", { parentName: "ol" }, (0, r.kt)("strong", { parentName: "li" }, "We houden ons aan ", (0, r.kt)("a", { parentName: "strong", href: "https://www.ensie.nl/paul-lammerts/rule-number-six" }, "rule number 6"), "."), " En het design system is helemaal klaar voor de smart blockchain.")), (0, r.kt)("h2", { id: "projectaanpak" }, "Projectaanpak"), (0, r.kt)("p", null, "In de eerste fase zullen we toewerken naar een ", (0, r.kt)("em", { parentName: "p" }, "proof of concept"), ", ofwel een eenvoudig design systeem dat in de praktijk gebruikt wordt. Dit begint met een onderzoek naar de behoeften en naar de criteria waaraan zo\u2019n proof of concept zou moeten voldoen. Er zijn in Nederland al meerdere design systems binnen de overheid. We zullen onderzoeken of daar \xe9\xe9n of meer kandidaten tussen zitten die geschikt zijn als basis voor een proof of concept. In deze eerste fase kijken we ook vast naar bij welke organisatie(s) het design system uiteindelijk beheerd kan worden."), (0, r.kt)("p", null, "In de volgende fase gaan we dit proof of concept doorontwikkelen (indien het voldoende is gebleken voor opschaling), met een wisselend team vanuit de organisaties die gebruik maken van het design system. Na deze fase wordt het design systeem overgebracht naar de definitieve beheerorganisatie."), (0, r.kt)("p", null, "Een project als dit kent altijd risico\u2019s. Op dit moment is de grootste onzekerheid die we voorzien in onze aanpak of er in de praktijk voldoende bereidwilligheid en behoefte is om van een gezamenlijk design system gebruik te maken. Uiteraard hangt dit samen met de kwaliteit van de eerste versie die we lanceren. Daarnaast zal de eerste ondersteuning van vragen over het proof of concept een uitdaging vormen. Ook voorzien we uitdagingen om het team voor de doorontwikkelfase bijeen te krijgen."), (0, r.kt)("p", null, "Mocht je tot in meer detail willen meedenken over de risico\u2019s, kansen en projectaanpak, dan delen we graag het projectplan met je. Vraag het projectplan aan via ", (0, r.kt)("a", { parentName: "p", href: "mailto:info@gebruikercentraal.nl" }, "info@gebruikercentraal.nl"), "."), (0, r.kt)("h2", { id: "doe-mee-en-kom-naar-de-meetup" }, "Doe mee! en kom naar de meetup"), (0, r.kt)("p", null, "Het gezamenlijke design system is een project dat de dienstverlening van de overheid naar een hoger niveau kan tillen, dat samenwerking over overheden heen stimuleert en dat daarnaast een flink aantal technische en inhoudelijke uitdagingen kent. Dat wil je meemaken, toch? Je bent van harte welkom!"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Kom naar de ", (0, r.kt)("a", { parentName: "li", href: "http://www.gebruikercentraal.nl/agenda/meetup-gezamenlijk-design-system-van-start/" }, "meetup op 12 februari"), ". Voor iedereen die (mogelijk) wil bijdragen aan het gezamenlijke design system."), (0, r.kt)("li", { parentName: "ul" }, "Praat mee in het ", (0, r.kt)("a", { parentName: "li", href: "https://praatmee.codefor.nl/" }, "Slack kanaal van Code for NL"), ", waar we de belangrijkste gesprekken voeren."), (0, r.kt)("li", { parentName: "ul" }, "Heb je specifieke vragen? Contacteer Edo Plantinga op ", (0, r.kt)("a", { parentName: "li", href: "mailto:Edo.Plantinga@ictu.nl" }, "Edo.Plantinga@ictu.nl"), ".")));
   }
   k.isMDXComponent = !0;
  },
 },
]);
