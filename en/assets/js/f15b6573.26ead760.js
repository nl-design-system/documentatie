"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [74605],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => p });
   var o = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     n &&
      (o = o.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, o);
    }
    return t;
   }
   function i(e) {
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
     o,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       a = {},
       r = Object.keys(e);
      for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var l = o.createContext({}),
    d = function (e) {
     var n = o.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return o.createElement(l.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      r = e.originalType,
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = d(t),
      u = a,
      p = g["".concat(l, ".").concat(u)] || g[u] || k[u] || r;
     return t ? o.createElement(p, i(i({ ref: n }, m), {}, { components: t })) : o.createElement(p, i({ ref: n }, m));
    });
   function p(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var r = t.length,
      i = new Array(r);
     i[0] = u;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : a), (i[1] = s);
     for (var d = 2; d < r; d++) i[d] = t[d];
     return o.createElement.apply(null, i);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  18754: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => k, frontMatter: () => r, metadata: () => s, toc: () => d });
   var o = t(87462),
    a = (t(67294), t(3905));
   const r = { title: "Over Figma als keuze voor het NL Design System", slug: "over-figma-als-keuze-voor-het-nl-design-system", authors: [{ name: "Rogier Barendregt", title: "Designer kernteam NL Design System", url: "https://www.linkedin.com/in/rogierdesign/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png", hide_table_of_contents: !1, date: new Date("2021-12-15T00:00:00.000Z") },
    i = void 0,
    s = {
     permalink: "/en/blog/over-figma-als-keuze-voor-het-nl-design-system",
     source: "@site/blog/2021/20211215-over-figma-als-keuze-voor-het-nl-design-system.md",
     title: "Over Figma als keuze voor het NL Design System",
     description: "Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken.",
     date: "2021-12-15T00:00:00.000Z",
     formattedDate: "December 15, 2021",
     tags: [
      { label: "Figma", permalink: "/en/blog/tags/figma" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Rogier Barendregt", title: "Designer kernteam NL Design System", url: "https://www.linkedin.com/in/rogierdesign/" }],
     frontMatter: { title: "Over Figma als keuze voor het NL Design System", slug: "over-figma-als-keuze-voor-het-nl-design-system", authors: [{ name: "Rogier Barendregt", title: "Designer kernteam NL Design System", url: "https://www.linkedin.com/in/rogierdesign/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png", hide_table_of_contents: !1, date: "2021-12-15T00:00:00.000Z" },
     prevItem: { title: "NL Design System in 2021", permalink: "/en/blog/nl-design-system-in-2021" },
     nextItem: { title: "Innovatiebudget voor de werkwijze van het NL Design System", permalink: "/en/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Waarom Figma?", id: "waarom-figma", level: 2 },
     { value: "Samenwerking met ontwikkelaars", id: "samenwerking-met-ontwikkelaars", level: 2 },
     { value: "Design tokens in Figma", id: "design-tokens-in-figma", level: 2 },
     { value: "\u2018Single source of truth\u2019 voor zowel ontwikkelaars als ontwerpers", id: "single-source-of-truth-voor-zowel-ontwikkelaars-als-ontwerpers", level: 2 },
     { value: "Schakelen van visuele stijl", id: "schakelen-van-visuele-stijl", level: 2 },
     { value: "Design token niveaus", id: "design-token-niveaus", level: 2 },
     { value: "Brand tokens", id: "brand-tokens", level: 3 },
     { value: "Common tokens", id: "common-tokens", level: 3 },
     { value: "Component tokens", id: "component-tokens", level: 3 },
    ],
    m = { toc: d },
    g = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(g, (0, o.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken."), (0, a.kt)("p", null, "Tijdens de ontwikkeling van het NL Design System was het al snel duidelijk dat wij als kernteam met Figma (de tool voor het ontwerpen van de componenten en patronen) wilden werken. Het doel is dat we beproefde componenten en patronen aanbieden als een \u2018white-label\u2019 variant. Organisaties kunnen componenten aanleveren waar we vervolgens een white-label variant voor het NL Design System van maken. Andere organisaties kunnen deze variant gebruiken en voorzien van hun eigen huisstijl en merkbeleving. Inmiddels werken we door middel van Figma samen en delen we kennis met ontwerpers van de gemeente Utrecht, Den Haag, Haarlem en ook met de ontwerpers van Logius."), (0, a.kt)("h2", { id: "waarom-figma" }, "Waarom Figma?"), (0, a.kt)("p", null, "Figma is een programma waarmee digitale producten zoals websites en interactieve prototypes ontworpen kunnen worden. Alhoewel het (Nederlandse) Sketch ook goed aansluit bij het ontwerpen, kwam Figma beter uit de verf bij de overdracht en communicatie met ontwikkelaars."), (0, a.kt)("p", null, "Bovendien was Figma destijds het enige volwassen ontwerpprogramma die het mogelijk maakte om direct samen te werken in dezelfde bestanden. De standaard beschikbare versie-geschiedenis bleek in de praktijk een aantal maal een echte \u2018life-saver\u2019. Ontwikkelaars kunnen bovendien met een (gratis) account de ontwerpbestanden bekijken en ontleden."), (0, a.kt)("p", null, "Onze voorkeur ging uit naar een open-source product. Toch bleek er nog geen geschikte versie beschikbaar die \u2018volwassen\u2019 genoeg was om samen te werken aan een designsysteem."), (0, a.kt)("h2", { id: "samenwerking-met-ontwikkelaars" }, "Samenwerking met ontwikkelaars"), (0, a.kt)("p", null, "In Figma benaderen we (zoveel mogelijk) dezelfde naamgeving zoals we die ook op codeniveau aanhouden. Hierdoor verloopt de overdracht en communicatie naar ontwikkelaars heel gestroomlijnd. Door het gebruik van \u2018design tokens\u2019 praten beide disciplines dezelfde taal en kunnen we ontwerpeigenschappen, componenten en dergelijke bij dezelfde naam noemen."), (0, a.kt)("p", null, "Ook kijken we voor de naamgeving van lagen, frames en pagina\u2019s naar benamingen zoals die binnen HTML, ARIA, BEM en SVG wordt aangehouden."), (0, a.kt)("h2", { id: "design-tokens-in-figma" }, "Design tokens in Figma"), (0, a.kt)("p", null, "Om binnen Figma met design tokens te werken, hebben we meerdere tools uitgeprobeerd. Uiteindelijk hebben we gekozen voor de open source ", (0, a.kt)("a", { parentName: "p", href: "https://docs.tokens.studio/" }, "Figma Tokens plug-in"), " van ontwikkelaar Jan Six. Niet alleen wordt deze plug-in continu onderhouden, ook is de ontwikkelaar makkelijk te benaderen en staat open voor suggesties en verbeteringen aan de plug-in."), (0, a.kt)("h2", { id: "single-source-of-truth-voor-zowel-ontwikkelaars-als-ontwerpers" }, "\u2018Single source of truth\u2019 voor zowel ontwikkelaars als ontwerpers"), (0, a.kt)("p", null, "Met behulp van de design tokens kunnen we uit een \u2018single source of truth\u2019 putten. Bij een eerste proof of concept bleek ruim 90% al direct te werken! Hierbij vertaalden we design tokens uit de code van de gemeente Utrecht door middel van ", (0, a.kt)("a", { parentName: "p", href: "https://amzn.github.io/style-dictionary/#/" }, "Style Dictionary"), " naar het (JSON) formaat dat we in Figma gebruiken."), (0, a.kt)("p", null, "Zoals altijd zijn er ook enkele zaken die nog niet helemaal soepel verlopen, omdat ontwerpprogrammatuur nog niet helemaal voor het medium web is geschikt. Zo zijn relatieve afmetingen niet in een omgeving als Figma toe te passen en moeten we \u2018flexibele\u2019 eenheden zoals EM\u2019s, REM\u2019s, ", (0, a.kt)("a", { parentName: "p", href: "https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/" }, "CH\u2019s"), " en EX\u2019s (X-hoogte van het gekozen lettertype) converteren naar exacte eenheden."), (0, a.kt)("p", null, "Andere beproefde webconcepten (zoals het maken van een ", (0, a.kt)("a", { parentName: "p", href: "https://www.modularscale.com/" }, "\u2018modulaire\u2018 typografische schaal)"), " zijn daarentegen goed voorzien in de plug-in. Een modulaire schaal op basis van \xe9\xe9n standaard lettergrootte (de broodtekst) definieert alle andere lettergroottes (kopteksten en secundaire teksten), zodat een flexibel typografisch systeem ontstaat."), (0, a.kt)("p", null, "Stel dat jij binnen jouw website al gebruikt maakt van een modulaire schaal binnen de stijl van jouw organisatie, kan deze een-op-een worden overgenomen in Figma."), (0, a.kt)("h2", { id: "schakelen-van-visuele-stijl" }, "Schakelen van visuele stijl"), (0, a.kt)("p", null, "In de Figma-omgeving kunnen we meerdere token sets laden. Dit stelt ons in staat om op basis van een white-label ontwerp deze om te zetten in de stijl van andere organisaties. Het is hierbij belangrijk om wel goed op de naamgeving te letten. Ook hierbij komen design tokens weer om de hoek kijken."), (0, a.kt)("h2", { id: "design-token-niveaus" }, "Design token niveaus"), (0, a.kt)("p", null, "We gebruiken voor onze design tokens een gelaagde benadering. Zo hebben we op het hoogste niveau \u2018brand tokens\u2019. Een organisatie is vrij om binnen deze merktokens invulling te geven aan hun eigen visuele stijl en merkbeleving."), (0, a.kt)("h3", { id: "brand-tokens" }, "Brand tokens"), (0, a.kt)("p", null, "Een brand token is bijvoorbeeld: utrecht-kleur-blauw-500 of denhaag-kleur-primaire-actie. E\xe9n niveau daaronder vind je de \u2018common tokens\u2019. In deze tokens krijgen visuele eigenschappen een eigen betekenis toegewezen. Hierbij refereren deze tokens altijd aan de brand tokens."), (0, a.kt)("h3", { id: "common-tokens" }, "Common tokens"), (0, a.kt)("p", null, "Common token zien er bijvoorbeeld zo uit: document-color: utrecht-kleur-zwart."), (0, a.kt)("p", null, "Hierbij is de eerste documentkleur de standaard (tekst-) voorgrondkleur, en utrecht-kleur-zwart is de kleur die de gemeente Utrecht als merkkleur heeft gedefinieerd (de standaardkleur). Common tokens worden gebruikt voor veel voorkomende visuele stijlen die een semantische betekenis hebben."), (0, a.kt)("h3", { id: "component-tokens" }, "Component tokens"), (0, a.kt)("p", null, "Component tokens zijn tokens die voor specifieke componenten gebruikt worden. Een voorbeeld van een component token is bijvoorbeeld: button-primary-action-background-color: denhaag-kleur-primaire-actie."));
   }
   k.isMDXComponent = !0;
  },
 },
]);
