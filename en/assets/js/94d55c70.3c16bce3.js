"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [78508],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => p });
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
   function s(e) {
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
   function l(e, n) {
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
   var o = a.createContext({}),
    d = function (e) {
     var n = a.useContext(o),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : s(s({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return a.createElement(o.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    u = a.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      i = e.originalType,
      o = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      g = d(t),
      u = r,
      p = g["".concat(o, ".").concat(u)] || g[u] || k[u] || i;
     return t ? a.createElement(p, s(s({ ref: n }, m), {}, { components: t })) : a.createElement(p, s({ ref: n }, m));
    });
   function p(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var i = t.length,
      s = new Array(i);
     s[0] = u;
     var l = {};
     for (var o in n) hasOwnProperty.call(n, o) && (l[o] = n[o]);
     (l.originalType = e), (l[g] = "string" == typeof e ? e : r), (s[1] = l);
     for (var d = 2; d < i; d++) s[d] = t[d];
     return a.createElement.apply(null, s);
    }
    return a.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  61719: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => s, default: () => k, frontMatter: () => i, metadata: () => l, toc: () => d });
   var a = t(87462),
    r = (t(67294), t(3905));
   const i = { title: "Design systems in het buitenland - 6 lessen", slug: "design-systems-in-het-buitenland-6-lessen", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["buitenland", "design systems"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2018/04/RAL_DESIGN_System_D2_Farbf\xe4cher-1200x675.jpg", hide_table_of_contents: !1, date: new Date("2018-04-26T00:00:00.000Z") },
    s = void 0,
    l = {
     permalink: "/en/blog/design-systems-in-het-buitenland-6-lessen",
     source: "@site/blog/2018/20180426-design-systems-in-het-buitenland.md",
     title: "Design systems in het buitenland - 6 lessen",
     description: "De mensen achter GOV.UK zijn in 2017 gestart met een internationale community van designers en ontwikkelaars. Op 23 april 2018 organiseerden ze een call over design systems, waaraan 42 deelnemers uit alle hoeken van de wereld deelnamen.",
     date: "2018-04-26T00:00:00.000Z",
     formattedDate: "April 26, 2018",
     tags: [
      { label: "buitenland", permalink: "/en/blog/tags/buitenland" },
      { label: "design systems", permalink: "/en/blog/tags/design-systems" },
     ],
     readingTime: 3.96,
     hasTruncateMarker: !0,
     authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }],
     frontMatter: { title: "Design systems in het buitenland - 6 lessen", slug: "design-systems-in-het-buitenland-6-lessen", authors: [{ name: "Edo Plantinga", title: "Freelance projectleider en communitymanager", url: "https://www.linkedin.com/in/edoplantinga" }], tags: ["buitenland", "design systems"], image: "https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2018/04/RAL_DESIGN_System_D2_Farbf\xe4cher-1200x675.jpg", hide_table_of_contents: !1, date: "2018-04-26T00:00:00.000Z" },
     prevItem: { title: "Van start! Een gezamelijk design system voor de overheid", permalink: "/en/blog/een-overheid-practice-what-you-preach" },
    },
    o = { authorsImageUrls: [void 0] },
    d = [
     { value: "Australisch design system", id: "australisch-design-system", level: 2 },
     { value: "Italiaanse kits", id: "italiaanse-kits", level: 2 },
     { value: "Government Digital Services", id: "government-digital-services", level: 2 },
     { value: "Belangrijkste lessen", id: "belangrijkste-lessen", level: 2 },
     { value: "Meer weten?", id: "meer-weten", level: 2 },
    ],
    m = { toc: d },
    g = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(g, (0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "De mensen achter ", (0, r.kt)("a", { parentName: "p", href: "https://www.gov.uk/" }, "GOV.UK"), " zijn in 2017 gestart met een internationale community van designers en ontwikkelaars. Op 23 april 2018 organiseerden ze een call over ", (0, r.kt)("a", { parentName: "p", href: "http://danellebailey.com/design-blog/2016/9/15/what-is-a-design-system" }, "design systems"), ", waaraan 42 deelnemers uit alle hoeken van de wereld deelnamen."), (0, r.kt)("p", null, "Komt mooi uit, want ook in Nederland gebeurt er veel bij diverse overheden veel op dit vlak. Momenteel verkennen we samen met ", (0, r.kt)("a", { parentName: "p", href: "https://www.codefor.nl/" }, "Code for NL"), " en het programma Mens Centraal of we kunnen toewerken naar een overheidsbrede, gezamenlijke interactiebibliotheek. Dit zijn de belangrijkste dingen die we geleerd hebben: ", (0, r.kt)("a", { parentName: "p", href: "https://youtu.be/DCeslUdkTKo" }, "https://youtu.be/DCeslUdkTKo"), "."), (0, r.kt)("h2", { id: "australisch-design-system" }, "Australisch design system"), (0, r.kt)("p", null, "De Australi\xebrs beten het spits af. Daar werkt een team van drie mensen aan een design system voor de Australische overheid, waarbij ze ook het bedrijfsleven betrekken om snel slagen te maken. Om hun design system goed bruikbaar te maken voor diverse organisaties, hebben ze een tool ontwikkeld om kleurenschema\u2019s te genereren, die automatisch worden bijgesteld om aan de accessibility guidelines te voldoen. Vervolgens controleren ze geautomatiseerd de sites die gebruik maken van hun design system via visuele regressietests."), (0, r.kt)("p", null, "Ze benadrukken dat onderbouwing van ontwerpkeuzes, op basis van theorie en gebruikerstests, belangrijk is om designers bij andere overheden (en hun management) te overtuigen."), (0, r.kt)("h2", { id: "italiaanse-kits" }, "Italiaanse kits"), (0, r.kt)("p", null, "Met (uiteraard) een kop koffie in de hand, namen de Italianen ons mee in hun inspanningen. Ook daar leggen ze de nadruk op de bijdragen vanuit de community. Ze gebruiken daarvoor onder andere ", (0, r.kt)("a", { parentName: "p", href: "https://www.sketchapp.com/" }, "Sketch bibliotheken"), ". Ze ontwikkelen een breed palet aan \u2018kits\u2019, met componenten, instructies, UX tests en meer. Ze begeleiden zelf ook diverse workshops, zoals co-design workshops."), (0, r.kt)("p", null, "Wat opvalt aan de Italiaanse aanpak is dat er goed is nagedacht over de samenhang tussen verschillende processtappen en de materialen voor presentatie van hun design system. Dat geeft het geheel een professionele uitstraling."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://speakerdeck.com/teamdigitale/designers-italia-the-design-system-of-the-italian-public-administration" }, "Bekijk de presentatie uit Itali\xeb"), "."), (0, r.kt)("h2", { id: "government-digital-services" }, "Government Digital Services"), (0, r.kt)("p", null, "Tot slot deelden de mensen van de Government Digital Services (GDS) / GOV.UK vanuit het Verenigd Koninkrijk hun ervaringen. Ze werken (nu nog achter de schermen) aan ", (0, r.kt)("a", { parentName: "p", href: "https://gds.blog.gov.uk/2017/10/30/building-the-gov-uk-design-system/" }, "hun design system"), " dat de informatie die nu nog op verschillende plekken staat bij elkaar moet brengen. Ze hebben het gebruik van dit design system uitgebreid getest op de gebruikers, in dit geval dus de UX-ers en ontwikkelaars. Uiteraard worden de componenten zelf ook getest op eindgebruikers (burgers, ondernemers, etc.). Ze gaven een indrukwekkend voorbeeld van een usability test van hun open source karakter-tel module, die ook toegankelijk is voor blinden en slechtzienden. Zo te kopi\xebren voor in Nederland."), (0, r.kt)("p", null, "Ook GDS werkt volgens het community model, waarbij ze een open backlog bijhouden en zo veel mogelijk mensen betrekken. Ze benadrukken dat de adoptie van hun design system heel belangrijk is: in hoeverre gaan andere organisaties het echt toepassen in hun werk? De professionals willen over het algemeen graag samenwerken, de uitdaging zit vaak meer in de managementlaag die een andere agenda heeft."), (0, r.kt)("p", null, "Ze werken met een deels roterend team uit andere overheden, om de adoptie te vergroten en goed aan te sluiten bij werkwijzen binnen verschillende organisaties. Ze zijn begonnen met de centrale overheid en voeren nu gesprekken met decentrale overheden."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://docs.google.com/presentation/d/1MTxzlbsx1Ozvwv1ln8lpW77FiBEjgMnHU-WeCJxVT3w/edit?usp=sharing" }, "Bekijk de presentatie van GOV.UK"), "."), (0, r.kt)("h2", { id: "belangrijkste-lessen" }, "Belangrijkste lessen"), (0, r.kt)("p", null, "Het was een waardevolle sessie waar we in Nederland veel van kunnen leren. De belangrijkst lessen voor onze situatie:"), (0, r.kt)("ol", null, (0, r.kt)("li", { parentName: "ol" }, "Alle drie de initiatieven werken zeer sterk volgens het community model. Het is essentieel om anderen makkelijk bij te kunnen laten dragen, zodat nooit iemand hoeft te wachten totdat een centrale organisatie een component gebouwd heeft."), (0, r.kt)("li", { parentName: "ol" }, "Hieruit volgt dat ze open en inclusief te werk gaan. Alles wordt dus ook open source gepubliceerd. Dit maakt het extra interessant voor Nederland, omdat we code kunnen hergebruiken."), (0, r.kt)("li", { parentName: "ol" }, "De teamgrootte varieert sterk: van 3 mensen in Australi\xeb tot tientallen in het Verenigd Koninkrijk."), (0, r.kt)("li", { parentName: "ol" }, "De nadruk ligt zowel op de samenwerking en manier van organiseren, als op de techniek."), (0, r.kt)("li", { parentName: "ol" }, "Door componenten te delen kun je fijnmaziger testen op specifieke use cases (zoals de input component voor blinden en slechthorenden)."), (0, r.kt)("li", { parentName: "ol" }, "De adoptie is essentieel, maar tegelijkertijd leek dit relatief makkelijk te gaan voor professionals: die zien de waarde er al snel van in. Het duurde wel lang om de geldschieters zo ver te krijgen om de financiering hiervoor beschikbaar te krijgen.")), (0, r.kt)("h2", { id: "meer-weten" }, "Meer weten?"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "http://praatmee.codefor.nl/" }, "Praat mee"), " over dit onderwerp in het Slack kanaal van Code for NL. Er is een levendig gesprek gaande daar."), (0, r.kt)("li", { parentName: "ul" }, "De links naar de video van de conference call en de presentatie van de Australi\xebrs zullen hier volgen zodra we deze hebben ontvangen."), (0, r.kt)("li", { parentName: "ul" }, "Ook in ons kikkerlandje streven we naar een centraal design system / interactiebibliotheek. Kom daarom op 30 mei 2018 naar deze ", (0, r.kt)("a", { parentName: "li", href: "http://www.gebruikercentraal.nl/agenda/interactiebibliotheek/" }, "meetup over interactiebibliotheken"), ".")), (0, r.kt)("p", null, (0, r.kt)("em", { parentName: "p" }, "Dit artikel is geschreven door Edo Plantinga van Gebruiker Centraal m.m.v. Johan Groenen van Code for NL en Harrie Kuipers van Osage.")));
   }
   k.isMDXComponent = !0;
  },
 },
]);
