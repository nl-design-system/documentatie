"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4636],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => b });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var s = r.createContext({}),
    d = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    p = function (e) {
     var t = d(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    v = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(n),
      u = o,
      b = m["".concat(s, ".").concat(u)] || m[u] || v[u] || a;
     return n ? r.createElement(b, i(i({ ref: t }, p), {}, { components: n })) : r.createElement(b, i({ ref: t }, p));
    });
   function b(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var a = n.length,
      i = new Array(a);
     i[0] = u;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : o), (i[1] = l);
     for (var d = 2; d < a; d++) i[d] = n[d];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  38324: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => s, default: () => k, frontMatter: () => l, metadata: () => d, toc: () => m });
   var r = n(87462),
    o = n(67294),
    a = n(3905),
    i = n(53579);
   const l = { title: "Voorspelbaar | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorspelbaar", sidebar_position: 5, pagination_label: "Voorspelbaar", description: "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    s = void 0,
    d = { unversionedId: "richtlijnen/formulieren/voorspelbaar", id: "richtlijnen/formulieren/voorspelbaar", title: "Voorspelbaar | Formulieren", description: "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen", source: "@site/docs/richtlijnen/formulieren/05-voorspelbaar.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/voorspelbaar", permalink: "/richtlijnen/formulieren/voorspelbaar", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/05-voorspelbaar.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Voorspelbaar | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorspelbaar", sidebar_position: 5, pagination_label: "Voorspelbaar", description: "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Goed gecontroleerd", permalink: "/richtlijnen/formulieren/goed-gecontroleerd" } },
    p = {},
    m = [
     { value: "Test met vertaaldiensten", id: "test-met-vertaaldiensten", level: 2 },
     { value: "Zorg voor complete paginatitels", id: "zorg-voor-complete-paginatitels", level: 2 },
     { value: "Velden onder elkaar", id: "velden-onder-elkaar", level: 2 },
     { value: "Plaats knoppen aan het begin van de regel", id: "plaats-knoppen-aan-het-begin-van-de-regel", level: 2 },
     { value: "Positie van tekstlabels", id: "positie-van-tekstlabels", level: 2 },
    ],
    v = (e) =>
     function (t) {
      return console.warn("Component " + e + " was not imported, exported, or provided by MDXProvider as global scope"), (0, a.kt)("div", t);
     },
    u = v("Guideline"),
    b = v("Canvas"),
    c = { toc: m },
    g = "wrapper";
   function k(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(g, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "voorspelbaar" }, "Voorspelbaar"), (0, a.kt)(i.nv, { lead: !0, mdxType: "Paragraph" }, "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen."), (0, a.kt)("h2", { id: "test-met-vertaaldiensten" }, "Test met vertaaldiensten"), (0, a.kt)("p", null, "Sommige gebruikers maken gebruik van vertaaldiensten als Google Translate om formulieren te bekijken, bijvoorbeeld inwoners die het Nederlands niet machtig zijn. Optimaliseer voor compatibiliteit met dit soort diensten: zorg bijvoorbeeld dat het vervangen van woorden of zinnen door langere of kortere teksten de lay-out ongedeerd laat."), (0, a.kt)("h2", { id: "zorg-voor-complete-paginatitels" }, "Zorg voor complete paginatitels"), (0, a.kt)("p", null, "Zorg ervoor dat de titel van het formulier (of stap) ook is opgenomen in de paginatitel. Deze wordt bijvoorbeeld gebruikt voor de naam van het tabblad of wanneer een pagina gedeeld of opgeslagen wordt."), (0, a.kt)("p", null, (0, a.kt)("em", { parentName: "p" }, "Dit is verplicht om te voldoen aan WCAG 2.1, criterium ", (0, a.kt)("a", { parentName: "em", href: "https://www.w3.org/Translations/WCAG21-nl/#paginatitel" }, "2.4.2 Paginatitel"), ".")), (0, a.kt)(u, { appearance: "do", title: "Stap in paginatitel", description: (0, a.kt)(i.nv, { mdxType: "Paragraph" }, "Met het ", (0, a.kt)("code", null, "<title>"), " element wordt de titel van de pagina gedefinieerd. Zorg dat deze zo specifiek mogelijk is."), mdxType: "Guideline" }, (0, a.kt)(b, { language: "html", code: (0, a.kt)(o.Fragment, null, (0, a.kt)("title", null, "Uw gegevens - Afspraak maken - Voorbeeldinstantie")), mdxType: "Canvas" })), (0, a.kt)(u, { appearance: "dont", title: "Te algemene paginatitel", description: (0, a.kt)(i.nv, { mdxType: "Paragraph" }, "Zorg dat de informatie in de titel specifiek genoeg is."), mdxType: "Guideline" }, (0, a.kt)(b, { language: "html", code: (0, a.kt)(o.Fragment, null, (0, a.kt)("title", null, "Voorbeeldinstantie")), mdxType: "Canvas" })), (0, a.kt)("h2", { id: "velden-onder-elkaar" }, "Velden onder elkaar"), (0, a.kt)("p", null, "Om iemand comfortabel een formulier te laten scannen, is de aanbeveling meerdere kolommen te vermijden. Plaats velden bij voorkeur onder elkaar."), (0, a.kt)("h2", { id: "plaats-knoppen-aan-het-begin-van-de-regel" }, "Plaats knoppen aan het begin van de regel"), (0, a.kt)("p", null, "Wanneer knoppen aan het begin van de regel staan, zijn ze het makkelijkst te vinden, omdat daar ook de invoervelden staat. Ze vormen zo \xe9\xe9n lijn. Ook is het zo voor gebruikers die inzoomen (bijvoorbeeld gebruikers met een visuele beperking) makkelijker om de knop te vinden."), (0, a.kt)("p", null, "Meer informatie:"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("a", { parentName: "li", href: "https://www.lukew.com/ff/entry.asp?571" }, "Primary & Secondary Actions in Web Forms - Luke Wroblewski")), (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("a", { parentName: "li", href: "https://adamsilver.io/blog/where-to-put-buttons-on-forms/" }, "Where to put buttons on forms"))), (0, a.kt)("h2", { id: "positie-van-tekstlabels" }, "Positie van tekstlabels"), (0, a.kt)("p", null, "Plaats labels buiten het invoerveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoont."), (0, a.kt)("p", null, "Overweeg labels op de regel boven het invoerveld te plaatsen. Voor left-to-right talen is deze links uitgelijnd. Deze plaatsing heeft meerdere voordelen:"), (0, a.kt)("ol", null, (0, a.kt)("li", { parentName: "ol" }, "Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht."), (0, a.kt)("li", { parentName: "ol" }, "Dit werkt beter voor gebruikers die de tekst inzoomen"), (0, a.kt)("li", { parentName: "ol" }, "Het biedt een natuurlijke \u2018scan-lijn\u2019")));
   }
   k.isMDXComponent = !0;
  },
 },
]);
