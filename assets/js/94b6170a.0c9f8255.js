"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [95250],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
   var a = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function s(e, n) {
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
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? s(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : s(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function o(e, n) {
    if (null == e) return {};
    var t,
     a,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       a,
       r = {},
       s = Object.keys(e);
      for (a = 0; a < s.length; a++) (t = s[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (a = 0; a < s.length; a++) (t = s[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var l = a.createContext({}),
    d = function (e) {
     var n = a.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    p = function (e) {
     var n = d(e.components);
     return a.createElement(l.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    g = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    k = a.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      s = e.originalType,
      l = e.parentName,
      p = o(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      k = r,
      u = m["".concat(l, ".").concat(k)] || m[k] || g[k] || s;
     return t ? a.createElement(u, i(i({ ref: n }, p), {}, { components: t })) : a.createElement(u, i({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var s = t.length,
      i = new Array(s);
     i[0] = k;
     var o = {};
     for (var l in n) hasOwnProperty.call(n, l) && (o[l] = n[l]);
     (o.originalType = e), (o[m] = "string" == typeof e ? e : r), (i[1] = o);
     for (var d = 2; d < s; d++) i[d] = t[d];
     return a.createElement.apply(null, i);
    }
    return a.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  91618: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => g, frontMatter: () => s, metadata: () => o, toc: () => d });
   var a = t(87462),
    r = (t(67294), t(3905));
   const s = { title: "Design Systems Week 2023 komt eraan!", slug: "design-systems-week-2023-komt-eraan", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design systems week"], hide_table_of_contents: !1, date: new Date("2023-09-18T00:00:00.000Z") },
    i = void 0,
    o = {
     permalink: "/blog/design-systems-week-2023-komt-eraan",
     source: "@site/blog/2023/20230918-design-systems-week-2023-komt-eraan.md",
     title: "Design Systems Week 2023 komt eraan!",
     description: "In zo\u2019n 20-25 minuten leren over design systems van experts van bijvoorbeeld GOV.UK, GitHub en Kamer van Koophandel? Net als vorig jaar organiseert het NL Design System-kernteam een Design Systems Week.",
     date: "2023-09-18T00:00:00.000Z",
     formattedDate: "18 september 2023",
     tags: [
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
      { label: "design systems week", permalink: "/blog/tags/design-systems-week" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }],
     frontMatter: { title: "Design Systems Week 2023 komt eraan!", slug: "design-systems-week-2023-komt-eraan", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design systems week"], hide_table_of_contents: !1, date: "2023-09-18T00:00:00.000Z" },
     prevItem: { title: "Spacing tokens als systeem voor verticale ruimte", permalink: "/blog/spacing-tokens" },
     nextItem: { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", permalink: "/blog/nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Het programma", id: "het-programma", level: 2 },
     { value: "Overheden: Verenigd Koninkrijk, Taiwan en Estland", id: "overheden-verenigd-koninkrijk-taiwan-en-estland", level: 2 },
     { value: "DesignOps", id: "designops", level: 2 },
     { value: "Web Components", id: "web-components", level: 2 },
     { value: "Aanmelden", id: "aanmelden", level: 2 },
    ],
    p = { toc: d },
    m = "wrapper";
   function g(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(m, (0, a.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("p", null, "In zo\u2019n 20-25 minuten leren over design systems van experts van bijvoorbeeld GOV.UK, GitHub en Kamer van Koophandel? Net als vorig jaar organiseert het NL Design System-kernteam een Design Systems Week."), (0, r.kt)("p", null, "Tijdens Design Systems Week bieden we dagelijks 3 tot 4 presentaties, die kort genoeg zijn (20-25 minuten) om gedurende dag mee te pikken. Er zijn sessies voor managers, designers, developers en iedereen daar tussenin. In deze post gaan we bij wijze van voorpret vast wat dieper in op een aantal onderwerpen."), (0, r.kt)("h2", { id: "het-programma" }, "Het programma"), (0, r.kt)("p", null, "Qua onderwerpen is er voor elk wat wils: van hoe design systems politiek werken tot een technische sessie over real-life ervaringen met Web Components. ", (0, r.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/design-systems-week-2023/#event-booking" }, "Meld je aan"), " of lees in dit bericht meer over wat we voor je in petto hebben."), (0, r.kt)("h2", { id: "overheden-verenigd-koninkrijk-taiwan-en-estland" }, "Overheden: Verenigd Koninkrijk, Taiwan en Estland"), (0, r.kt)("p", null, "Ten eerste hebben we maar liefst drie overheden te gast:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Bij GOV.UK hebben ze al een hoop front-endcomponenten. Maar componenten zijn pas waardevol als je ze samen op 1 pagina zet, dus hebben ze een manier gemaakt waarop ontwikkelaars makkelijk voorbeelden kunnen maken van pagina\u2019s en realistische prototypes: ", (0, r.kt)("a", { parentName: "li", href: "https://prototype-kit.service.gov.uk/docs/" }, "de GOV.UK Prototype Kit"), ". We hebben hun ontwerper ", (0, r.kt)("a", { parentName: "li", href: "https://joelanman.com/" }, "Joe Lanman"), " gevraagd om daar eens iets meer over te vertellen."), (0, r.kt)("li", { parentName: "ul" }, "In Taiwan is het bouwen van een design system onderdeel van een groter project rondom digital resilience. Hoe werkt dat, en hoe denken ze in Taiwan over het bouwen van digitale diensten? Head of design systems Mu-An Chiou vertelt erover in ", (0, r.kt)("a", { parentName: "li", href: "https://www.gebruikercentraal.nl/agenda/design-systems-as-public-infrastructure/" }, "Design Systems as Public Infrastructure"), "."), (0, r.kt)("li", { parentName: "ul" }, "Estland noemt zich met trots de eerste digitale samenleving. Hun design system wordt al door een aantal overheidsorganisaties gebruikt. Van UI Development Lead Aleksandr Beliaev krijgen we ", (0, r.kt)("a", { parentName: "li", href: "https://www.gebruikercentraal.nl/agenda/estland-design-system/" }, "een kijkje in de keuken"), ".")), (0, r.kt)("h2", { id: "designops" }, "DesignOps"), (0, r.kt)("p", null, "Hoe kunnen ontwerpers het best samenwerken met elkaar en anderen, zoals ontwikkelaars, om te zorgen dat de kwaliteit van ontwerp in brede zin beter wordt? Die vraag wordt beantwoord door wat Design Operations (Design Ops) wordt genoemd. ", (0, r.kt)("a", { parentName: "p", href: "https://yaili.com/" }, "Inayaili Le\xf3n"), " van GitHub gaat in haar sessie in op hoe DesignOps de ontwerpdiscipline beter in de organisatie verankert, en specifiek hoe GitHub het aanpakt, in haar presentatie ", (0, r.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/designops-designing-the-api-of-design-teams/" }, "DesignOps: designing the API of design teams"), "."), (0, r.kt)("h2", { id: "web-components" }, "Web Components"), (0, r.kt)("p", null, "Verschillende overheidsorganisaties (zoals Logius, Belastingdienst) werken met Web Components of zijn van plan dat te gaan doen. Het ", (0, r.kt)("a", { parentName: "p", href: "https://nordhealth.design/" }, "Nord Design System"), " heeft Web Components al een paar jaar als basis, en hebben in die tijd veel geleerd over wat er wel en niet werkt. Design system team lead ", (0, r.kt)("a", { parentName: "p", href: "https://darn.es/" }, "David Darnes"), " vertelt ons meer over hun praktijk in ", (0, r.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/design-systems-web-components-what-works-what-doesnt/" }, "Design Systems & Web Components: what works & what doesn\u2019t"), "."), (0, r.kt)("h2", { id: "aanmelden" }, "Aanmelden"), (0, r.kt)("p", null, "Je kunt deze sessies en meer gratis bijwonen. Als je je aanmeld krijg je de link in je mailbox. Dit kan zowel per sessie als voor de hele week tegelijk.\n", (0, r.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/design-systems-week-2023#event-booking" }, "Aanmelden voor de hele week"), "\n", (0, r.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/design-systems-week/" }, "Aanmelden per sessie")));
   }
   g.isMDXComponent = !0;
  },
 },
]);
