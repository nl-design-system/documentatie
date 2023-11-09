"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [54171],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => g, kt: () => k });
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
   var d = a.createContext({}),
    l = function (e) {
     var n = a.useContext(d),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    g = function (e) {
     var n = l(e.components);
     return a.createElement(d.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    v = {
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
      d = e.parentName,
      g = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = l(t),
      u = r,
      k = m["".concat(d, ".").concat(u)] || m[u] || v[u] || i;
     return t ? a.createElement(k, o(o({ ref: n }, g), {}, { components: t })) : a.createElement(k, o({ ref: n }, g));
    });
   function k(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var i = t.length,
      o = new Array(i);
     o[0] = u;
     var s = {};
     for (var d in n) hasOwnProperty.call(n, d) && (s[d] = n[d]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : r), (o[1] = s);
     for (var l = 2; l < i; l++) o[l] = t[l];
     return a.createElement.apply(null, o);
    }
    return a.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  88324: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => o, default: () => v, frontMatter: () => i, metadata: () => s, toc: () => l });
   var a = t(87462),
    r = (t(67294), t(3905));
   const i = { title: "Innovatiebudget voor het NL Design System", slug: "innovatiebudget-voor-nl-design-system", authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }], tags: ["update", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/08/drie-mannen-design-system.jpg", hide_table_of_contents: !1, date: new Date("2020-08-04T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/blog/innovatiebudget-voor-nl-design-system",
     source: "@site/blog/2020/20200804-innovatiebudget-voor-nl-design-system.md",
     title: "Innovatiebudget voor het NL Design System",
     description: "We hebben met het NL Design System een aanvraag gedaan voor het Innovatiebudget 2020. En we kunnen met trots melden dat we 1 van de 24 projecten zijn waarvan de aanvraag is gegund! Het innovatiebudget wordt elk jaar door BZK uitgereikt aan innovatieve projecten, die bijdragen aan de verbetering van de digitale dienstverlening van de overheid.",
     date: "2020-08-04T00:00:00.000Z",
     formattedDate: "4 augustus 2020",
     tags: [
      { label: "update", permalink: "/blog/tags/update" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     readingTime: 2.945,
     hasTruncateMarker: !0,
     authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }],
     frontMatter: { title: "Innovatiebudget voor het NL Design System", slug: "innovatiebudget-voor-nl-design-system", authors: [{ name: "Angela Imhof", title: "Projectmanager", url: "https://www.linkedin.com/in/angelaimhof" }], tags: ["update", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2020/08/drie-mannen-design-system.jpg", hide_table_of_contents: !1, date: "2020-08-04T00:00:00.000Z" },
     prevItem: { title: "Uitkomsten bijeenkomst contentrichtlijnen en het NL Design System", permalink: "/blog/uitkomsten-bijeenkomst-contentrichtlijnen-en-het-nl-design-system" },
     nextItem: { title: "De top-10 aan onderwerpen die waarde toevoegen aan een design systeem", permalink: "/blog/top-10-aan-onderwerpen-die-waarde-toevoegen-aan-een-design-system" },
    },
    d = { authorsImageUrls: [void 0] },
    l = [
     { value: "Doorontwikkeling", id: "doorontwikkeling", level: 2 },
     { value: "Even wat achtergrond over het NL Design System", id: "even-wat-achtergrond-over-het-nl-design-system", level: 2 },
     { value: "En wat gaan we nu doen?", id: "en-wat-gaan-we-nu-doen", level: 2 },
     { value: "Doe mee", id: "doe-mee", level: 2 },
     { value: "Links", id: "links", level: 2 },
    ],
    g = { toc: l },
    m = "wrapper";
   function v(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(m, (0, a.Z)({}, g, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "We hebben met het NL Design System een aanvraag gedaan voor het ", (0, r.kt)("a", { parentName: "p", href: "https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/" }, "Innovatiebudget 2020"), ". En we kunnen met trots melden dat we 1 van de 24 projecten zijn waarvan de aanvraag is gegund! Het innovatiebudget wordt elk jaar door BZK uitgereikt aan innovatieve projecten, die bijdragen aan de verbetering van de digitale dienstverlening van de overheid."), (0, r.kt)("h2", { id: "doorontwikkeling" }, "Doorontwikkeling"), (0, r.kt)("p", null, "Het innovatiebudget gebruiken we voor de doorontwikkeling van het NL Design System zodat we een volwassen \xe9n binnen de overheid breed gedragen versie kunnen neerzetten. We werken daarbij nauw samen met o.a. de gemeenten Den Haag en Eindhoven."), (0, r.kt)("h2", { id: "even-wat-achtergrond-over-het-nl-design-system" }, "Even wat achtergrond over het NL Design System"), (0, r.kt)("p", null, "Door binnen de hele overheid te werken op basis van een gezamenlijk design system, werken overheidsdiensten veel meer op dezelfde manier. Een consistente beleving bij gebruik van overheidsdiensten zorgt onder andere voor gebruiksvriendelijkheid, helemaal bij levensgebeurtenissen waarbij je als burger met meerdere overheden te maken hebt. Bovendien zijn componenten in het design system straks grondig getest met gebruikers, waardoor ook de kwaliteit en toegankelijkheid toeneemt. Op die manier kunnen we als Nederlandse overheid burgers en bedrijven steeds beter van dienst zijn. Daarnaast zijn er ook voor de overheid zelf voordelen want doordat we niet elke keer over hetzelfde na hoeven te denken wordt dubbel werk voorkomen en daarmee ook dubbele kosten. Heel praktisch: projecten komen sneller uit de startblokken en kunnen sneller resultaat laten zien, als gebruik wordt gemaakt van componenten van een hoog niveau. Waarom nog een keer dezelfde problemen oplossen als die al tientallen keren door anderen zijn opgelost? Zo is er veel meer tijd om na te denken over die uitdagingen die uniek zijn voor de de eigen overheidsdienst."), (0, r.kt)("p", null, "Begin dit jaar hebben we getest met een proof of concept. Met als basis hiervoor UNO, het design systeem van DUO. Dit was een geslaagde test met veel enthousiasme vanuit de toekomstige gebruikers. Reinout Tiekstra, digitaal strateeg bij DUO , vertelt in een ", (0, r.kt)("a", { parentName: "p", href: "https://designsystem.gebruikercentraal.nl/op-weg-naar-een-betere-overheidsdienstverlening-met-het-nl-design-system/" }, "interview over de standkoming van UNO"), "."), (0, r.kt)("h2", { id: "en-wat-gaan-we-nu-doen" }, "En wat gaan we nu doen?"), (0, r.kt)("p", null, "De volgende stap in het project is de doorontwikkeling van het NL Design System naar een solide versie, geschikt voor breed gebruik. Een kernteam, dat bekostigd wordt vanuit het innovatiebudget gaat hier open en agil aan werken. De bedoeling is om elke maand bij elkaar te komen en regelmatig presentaties te geven aan alle stakeholders. Op die manier blijft de community nauw betrokken en kunnen ook partijen die niet zelf voldoende ontwikkelcapaciteit wel aanhaken op het proces."), (0, r.kt)("p", null, "Het uiteindelijke doel is dat het NL Design System op een niveau komt dat het systeem bruikbaar wordt voor alle ge\xefnteresseerde partijen. En dat het systeem ook \xe9cht gebruikt gaat worden! We willen graag stimuleren dat alle overheidspartijen en \u2013 leveranciers gebruik gaan maken van het NL Design System, maar er ook aan gaan bijdragen. Bijvoorbeeld door bevindingen en verbeterde onderdelen terug te leveren."), (0, r.kt)("p", null, "Parallel aan de bouwsessies starten we ook met sessies voor het gebruik en de interactie-patronen. Die pakken we met de (werk)groep UX-ers op."), (0, r.kt)("h2", { id: "doe-mee" }, "Doe mee"), (0, r.kt)("p", null, "Benieuwd naar de ", (0, r.kt)("a", { parentName: "p", href: "https://designsystem.gebruikercentraal.nl/" }, "huidige versie"), " van het NL Design system? Kijk op onze website. Laat ons weten wat je ervan vindt. We kunnen je hulp goed gebruiken voor zowel de doorontwikkeling als de UX-sessies!"), (0, r.kt)("p", null, "Je kunt ons ook vinden op Slack. Meld je aan bij onze ", (0, r.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl/" }, "Slackgroep \u2018NL Design system (praatmee.codefor.nl)\u2019"), " en blijf op de hoogte van de laatste ontwikkelingen."), (0, r.kt)("h2", { id: "links" }, "Links"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://designsystem.gebruikercentraal.nl/op-weg-naar-een-betere-overheidsdienstverlening-met-het-nl-design-system/" }, "Interview Reinout Tiekstra, Digitaal strateeg bij DUO: Op weg naar een betere overheidsdienstverlening met het NL Design System")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/" }, "Meer over het Innovatiebudget"))));
   }
   v.isMDXComponent = !0;
  },
 },
]);
