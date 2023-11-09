"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [71752],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => h });
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
    g = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = g(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    d = "mdxType",
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
      d = g(t),
      k = i,
      h = d["".concat(l, ".").concat(k)] || d[k] || u[k] || a;
     return t ? r.createElement(h, o(o({ ref: n }, m), {}, { components: t })) : r.createElement(h, o({ ref: n }, m));
    });
   function h(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var a = t.length,
      o = new Array(a);
     o[0] = k;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[d] = "string" == typeof e ? e : i), (o[1] = s);
     for (var g = 2; g < a; g++) o[g] = t[g];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  13511: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => s, toc: () => g });
   var r = t(87462),
    i = (t(67294), t(3905));
   const a = { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", slug: "bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: new Date("2022-06-20T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system",
     source: "@site/blog/2022/20220620-bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system.md",
     title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System",
     description: "Front-end developer Bryan de Jong werkte mee aan het ontwikkelen van een nieuw design system voor de gemeente Den Haag, met behulp van het NL Design System. Inmiddels gaat hij zijn vleugels uitspreiden in het buitenland en blikt terug op de samenwerking met het team van het NL Design System.",
     date: "2022-06-20T00:00:00.000Z",
     formattedDate: "20 juni 2022",
     tags: [
      { label: "Figma", permalink: "/blog/tags/figma" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     readingTime: 2.875,
     hasTruncateMarker: !0,
     authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }],
     frontMatter: { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", slug: "bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system", authors: [{ name: "Renate Bruinenberg", title: "Communicatieadviseur en Tekstschrijver ICTU | Gebruiker Centraal", url: "https://www.linkedin.com/in/renate-bruinenberg-886019163/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Bryan-de-Jong.jpeg", hide_table_of_contents: !1, date: "2022-06-20T00:00:00.000Z" },
     prevItem: { title: "Een dag uit het leven van een ontwerper bij het NL Design System", permalink: "/blog/een-dag-uit-het-leven-van-een-ontwerper-bij-het-nl-design-system" },
     nextItem: { title: "NL Design System in 2021", permalink: "/blog/nl-design-system-in-2021" },
    },
    l = { authorsImageUrls: [void 0] },
    g = [
     { value: "Een volledig herbruikbare omgeving inrichten met het NL Design System", id: "een-volledig-herbruikbare-omgeving-inrichten-met-het-nl-design-system", level: 2 },
     { value: "Ontwikkelingen tijdens hackaton", id: "ontwikkelingen-tijdens-hackaton", level: 2 },
     { value: "De samenwerking met het NL Design System", id: "de-samenwerking-met-het-nl-design-system", level: 2 },
    ],
    m = { toc: g },
    d = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(d, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Front-end developer Bryan de Jong werkte mee aan het ontwikkelen van een nieuw design system voor de gemeente Den Haag, met behulp van het NL Design System. Inmiddels gaat hij zijn vleugels uitspreiden in het buitenland en blikt terug op de samenwerking met het team van het NL Design System."), (0, i.kt)("p", null, "Wat voor Bryan begon als student met een bijbaan bij Rent Your Student Scrum Team (RYST), eindigde met een resultaat om trots op te zijn. Front-end developer Bryan de Jong werkte namelijk mee aan het ontwikkelen van een nieuw design system voor de gemeente Den Haag, met behulp van het NL Design System. Inmiddels gaat hij zijn vleugels uitspreiden in het buitenland en blikt terug op de samenwerking met het team van het NL Design System."), (0, i.kt)("h2", { id: "een-volledig-herbruikbare-omgeving-inrichten-met-het-nl-design-system" }, "Een volledig herbruikbare omgeving inrichten met het NL Design System"), (0, i.kt)("p", null, "Het studententeam waar Bryan onderdeel van was, had de taak om de designs die aangeleverd werden om te bouwen naar herbruikbare componenten. Bryan vertelt: \u201cWe waren met de gemeente Den Haag 1 van de eersten die open source gingen werken in Github. Zo kon het team van het NL Design System meekijken, maar natuurlijk was dit ook te volgen door andere partijen. In het begin was het ook echt wel zoeken naar een goede manier om een bibliotheek van herbruikbare componenten te ontwikkelen. Maar door de nauwe samenwerking met het kernteam van het NL Design System is dit zeker gelukt.\u201d"), (0, i.kt)("p", null, "Bryan is trots dat de componenten inmiddels ook echt in de praktijk worden gebruikt: \u201cWat wij hebben ontwikkeld wordt nu bijvoorbeeld gebruikt in de nieuwe \u2018mijn-omgeving\u2019", "*", " van de gemeente Den Haag. De omgeving is volledig herbruikbaar ingericht, zodat andere organisaties dit ook kunnen gebruiken. Hierdoor zou bijvoorbeeld de gemeente Amsterdam dit compleet kunnen overnemen en alleen nog maar te hoeven voorzien van hun eigen rode huisstijl.\u201d"), (0, i.kt)("p", null, (0, i.kt)("em", { parentName: "p" }, "Met de \u2018mijn-omgeving\u2019 wordt de online omgeving bedoeld waar mensen terechtkomen zodra ze inloggen bij hun gemeente.")), (0, i.kt)("p", null, (0, i.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2022/06/Voorbeeld-mijn-omgeving-NLDS-1-2048x1354.png", alt: "Voorbeeld van de \u2018mijn-omgeving\u2019 die wordt gebruikt voor de gemeente Amsterdam" })), (0, i.kt)("h2", { id: "ontwikkelingen-tijdens-hackaton" }, "Ontwikkelingen tijdens hackaton"), (0, i.kt)("p", null, "Op de vraag welke mijlpalen Bryan het meest zijn bijgebleven, moet hij even nadenken. Want hij heeft aan zoveel mooie dingen meegewerkt zegt hij. Toch is de hackaton die onlangs plaatsvond hem zeker bijgebleven: \u201cPas geleden hebben we tijdens een hackaton een \u2018product-dienst-status component\u2019 ontwikkeld met behulp van componenten van het NL Design System. Hierdoor krijgen inwoners direct te zien wat de status is van hun productaanvraag, zodra ze inloggen in de \u2018Mijn-omgeving\u2019. Dit was zo\u2019n succes dat de gemeente Buren het gelijk in gebruik kon nemen.\u201d"), (0, i.kt)("h2", { id: "de-samenwerking-met-het-nl-design-system" }, "De samenwerking met het NL Design System"), (0, i.kt)("p", null, "Bryan zegt dat hij met zijn studententeam destijds in het diepe werd gegooid. \u201cWij kregen de opdracht om een heel design system op te zetten volgens de architectuur van het NL Design System. Het was daarom heel belangrijk om vaak te sparren met het kernteam, om te zorgen dat alles goed klopte, ook qua toegankelijkheid. Robbert en Yolijn hebben vaak meegekeken, wat makkelijk ging omdat we alles open source hebben ontwikkeld. Ondertussen werkte Rogier nauw samen met onze ontwerper Rozerin.\u201d"), (0, i.kt)("p", null, "Als laatste geeft Bryan aan dat hij trots is dat er daadwerkelijk iets is neergezet \xe9n in gebruik is genomen. \u201cIk denk dat we nu op een punt staan waar we echt naar centrale NL Design System-componenten gaan. Mede door de \u2018Mijn-omgeving\u2019 kunnen we laten zien dat het om herbruikbare componenten zijn die makkelijk aan te passen zijn naar de eigen huisstijl.\u201d"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
