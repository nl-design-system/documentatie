"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [34251],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => p });
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
    m = function (e) {
     var n = d(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    k = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = d(t),
      k = i,
      p = g["".concat(l, ".").concat(k)] || g[k] || u[k] || a;
     return t ? r.createElement(p, o(o({ ref: n }, m), {}, { components: t })) : r.createElement(p, o({ ref: n }, m));
    });
   function p(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var a = t.length,
      o = new Array(a);
     o[0] = k;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : i), (o[1] = s);
     for (var d = 2; d < a; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  76927: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => s, toc: () => d });
   var r = t(87462),
    i = (t(67294), t(3905));
   const a = { title: "Een dag uit het leven van een ontwerper bij het NL Design System", slug: "een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-07-06T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system",
     source: "@site/blog/2022/20220706-een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system.md",
     title: "Een dag uit het leven van een ontwerper bij het NL Design System",
     description: "Een dag als ontwerper bij het NL Design System ziet er heel anders uit dan bij andere design systems. Dit komt mede doordat het NL Design System geen \u2018traditioneel\u2019 design system is met slechts een enkele huisstijl. In dit artikel leg ik als ontwerper uit hoe de werkzaamheden bij het NL Design System eruit zien.",
     date: "2022-07-06T00:00:00.000Z",
     formattedDate: "6 juli 2022",
     tags: [
      { label: "Figma", permalink: "/blog/tags/figma" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     readingTime: 3.445,
     hasTruncateMarker: !0,
     authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }],
     frontMatter: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", slug: "een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-07-06T00:00:00.000Z" },
     prevItem: { title: "De mijlpalen van 2022", permalink: "/blog/de-mijlpalen-van-2022" },
     nextItem: { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", permalink: "/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Schakelen en focus verlegen", id: "schakelen-en-focus-verlegen", level: 2 },
     { value: "Strikte scheiding van visuele stijl en structuur", id: "strikte-scheiding-van-visuele-stijl-en-structuur", level: 2 },
     { value: "Het opmaken van een huisstijl naar design tokens", id: "het-opmaken-van-een-huisstijl-naar-design-tokens", level: 2 },
     { value: "Figma", id: "figma", level: 2 },
     { value: "Samenwerken", id: "samenwerken", level: 2 },
     { value: "Toegankelijkheid", id: "toegankelijkheid", level: 2 },
    ],
    m = { toc: d },
    g = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(g, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Een dag als ontwerper bij het NL Design System ziet er heel anders uit dan bij andere design systems. Dit komt mede doordat het NL Design System geen \u2018traditioneel\u2019 design system is met slechts een enkele huisstijl. In dit artikel leg ik als ontwerper uit hoe de werkzaamheden bij het NL Design System eruit zien."), (0, i.kt)("h2", { id: "schakelen-en-focus-verlegen" }, "Schakelen en focus verlegen"), (0, i.kt)("p", null, "Alhoewel we in grote lijnen weten waar we naartoe werken, is het vaak onmogelijk om te weten hoe je dag er daadwerkelijk uit zal zien. Ook verleg je meerdere malen per dag focus van super-gedetailleerd naar een heel ruim vogelperspectief. Het ene moment help je bijvoorbeeld bij het ontwerpen van een websiteknop, terwijl je 5 minuten later overlegt wat de beste manier is om een groot formulier op te delen in meerdere stappen."), (0, i.kt)("h2", { id: "strikte-scheiding-van-visuele-stijl-en-structuur" }, "Strikte scheiding van visuele stijl en structuur"), (0, i.kt)("p", null, "Waar je bij de meeste design systems slechts een enkel merk (of meerdere merken) bedient, is er geen vaste huisstijl voor het NL Design System. Componenten, patronen en documentatie moeten iedere denkbare huisstijl kunnen ondersteunen. Het is daarom belangrijk om altijd op zoek te blijven naar de kern van componenten, patronen en documentatie. Vervolgens moet je zorgen dat het aan te bieden is \xe9n bruikbaar is voor iedere huisstijl."), (0, i.kt)("p", null, "Ook werken we met een zogenaamd \u2018white-label\u2019. Dit is een visuele stijl waarmee we bijvoorbeeld toegankelijkheid kunnen waarborgen. Denk bijvoorbeeld aan alle benodigde combinaties (voor- \xe9n achtergrond) voor kleuren of een verplichte focus staat voor interactieve elementen. Vooral kleinere gemeenten hebben vaak niet het budget om zo\u2019n uitgebreide visuele stijl te bekostigen."), (0, i.kt)("h2", { id: "het-opmaken-van-een-huisstijl-naar-design-tokens" }, "Het opmaken van een huisstijl naar design tokens"), (0, i.kt)("p", null, "Om een scheiding te maken tussen een huisstijl en de interactiestructuur, gebruiken we zogenaamde design tokens. Door deze scheiding is het mogelijk om solide herbruikbare componenten te maken die door iedere organisatie door hun eigen huisstijl te voorzien zijn."), (0, i.kt)("p", null, "Daarom is het belangrijk om de intentie van een visuele stijl terug te brengen naar de betekenis die deze visuele eigenschap heeft voor de gebruiker. Iedere visuele ontwerpkeuze wordt teruggebracht naar een design token. Zo heeft bijvoorbeeld iedere organisatie een kleur gekozen voor de broodtekst. Deze kleur kan per organisatie verschillen. De intentie achter de gekozen kleur echter niet. De kleur van de broodtekst moet bijvoorbeeld voldoende contrast hebben met de achtergrondkleur(en) waarop deze getoond wordt, of er dient een minimale tekst grootte te zijn. Design tokens kunnen hierdoor voorzien worden van eisen waaraan deze minimaal moeten voldoen."), (0, i.kt)("h2", { id: "figma" }, "Figma"), (0, i.kt)("p", null, "Om ontwerpers van aangesloten organisaties goed bij te staan is het belangrijk om design tools door en door te kennen. Vragen over het maken van componenten, prototyping, naamgeving, bestand-architectuur en recente programma-updates moeten snel en duidelijk beantwoord worden."), (0, i.kt)("p", null, "Al vrij snel hebben we de keuze gemaakt voor Figma. De meeste aangesloten organisaties werken inmiddels ook met Figma, of gaan de overstap naar Figma maken. Het sluit ook bijzonder goed aan bij de belevingswereld van ontwikkelaars, waardoor het makkelijk is om eenzelfde taal met elkaar te praten. Omdat je samenwerkt met andere ontwerpers dien je zorgvuldig om te gaan met je ontwerp. Zorg altijd voor een naam die een semantische betekenis heeft en door iedereen (ontwerper \xe9n ontwikkelaar) begrepen wordt."), (0, i.kt)("p", null, "Het is belangrijk om bij alles wat je ontwerpt de vraag te stellen: \u201cKan dit hergebruikt worden en in welke context(en)?\u201d. Dit geldt zeker voor componenten, maar meer nog voor patronen."), (0, i.kt)("h2", { id: "samenwerken" }, "Samenwerken"), (0, i.kt)("p", null, "Buiten het dagelijks communiceren via diverse kanalen zoals e-mail en Slack, organiseren we 1 keer per week een vast moment om centraal te overleggen met ontwerpers van diverse organisaties. Tijdens deze bijeenkomsten kan alles besproken worden waar je als ontwerper mee zit. Bij deze sessies worden niet alleen ontwerpers betrokken, maar ook tekstschrijvers, toegankelijkheidexperts en ontwikkelaars."), (0, i.kt)("h2", { id: "toegankelijkheid" }, "Toegankelijkheid"), (0, i.kt)("p", null, "Heel veel toegankelijkheidsproblemen zijn in de eerste ontwerpfase al op te lossen. Niet iedere ontwerper is echter onderricht in alle toegankelijkheidsrichtlijnen. Door nauw met elkaar samen te werken en kennis over te dragen, merk je dat je elkaar als het ware naar een hoger niveau tilt; we onderwijzen elkaar."), (0, i.kt)("p", null, (0, i.kt)("em", { parentName: "p" }, "Dit artikel is geschreven door Rogier Barendregt \u2013 ontwerper en voormalig kernteamlid bij het NL Design System.")));
   }
   u.isMDXComponent = !0;
  },
 },
]);
