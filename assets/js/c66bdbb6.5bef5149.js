"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4636],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
   var r = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function o(e, n) {
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
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : o(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var s = r.createContext({}),
    d = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    p = function (e) {
     var n = d(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    c = "mdxType",
    v = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    m = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      c = d(t),
      m = a,
      u = c["".concat(s, ".").concat(m)] || c[m] || v[m] || o;
     return t ? r.createElement(u, i(i({ ref: n }, p), {}, { components: t })) : r.createElement(u, i({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var o = t.length,
      i = new Array(o);
     i[0] = m;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[c] = "string" == typeof e ? e : a), (i[1] = l);
     for (var d = 2; d < o; d++) i[d] = t[d];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  38324: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => s, default: () => f, frontMatter: () => l, metadata: () => d, toc: () => c });
   var r = t(87462),
    a = t(67294),
    o = t(3905),
    i = t(53579);
   const l = { title: "Voorspelbaar | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorspelbaar", sidebar_position: 5, pagination_label: "Voorspelbaar", description: "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    s = void 0,
    d = { unversionedId: "richtlijnen/formulieren/voorspelbaar", id: "richtlijnen/formulieren/voorspelbaar", title: "Voorspelbaar | Formulieren", description: "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen", source: "@site/docs/richtlijnen/formulieren/05-voorspelbaar.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/voorspelbaar", permalink: "/richtlijnen/formulieren/voorspelbaar", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/05-voorspelbaar.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Voorspelbaar | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorspelbaar", sidebar_position: 5, pagination_label: "Voorspelbaar", description: "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Goed gecontroleerd", permalink: "/richtlijnen/formulieren/goed-gecontroleerd" } },
    p = {},
    c = [
     { value: "Test met vertaaldiensten", id: "test-met-vertaaldiensten", level: 2 },
     { value: "Zorg voor complete paginatitels", id: "zorg-voor-complete-paginatitels", level: 2 },
     { value: "Velden onder elkaar", id: "velden-onder-elkaar", level: 2 },
     { value: "Plaats knoppen aan het begin van de regel", id: "plaats-knoppen-aan-het-begin-van-de-regel", level: 2 },
     { value: "Positie van tekstlabels", id: "positie-van-tekstlabels", level: 2 },
    ],
    v = (e) =>
     function (n) {
      return console.warn("Component " + e + " was not imported, exported, or provided by MDXProvider as global scope"), (0, o.kt)("div", n);
     },
    m = v("Guideline"),
    u = v("Canvas"),
    b = { toc: c },
    g = "wrapper";
   function f(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(g, (0, r.Z)({}, b, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "voorspelbaar" }, "Voorspelbaar"), (0, o.kt)(i.nv, { lead: !0, mdxType: "Paragraph" }, "Vergroot de voorspelbaarheid van je formulier door bijvoorbeeld consistent te zijn in de plaatsing van velden en knoppen."), (0, o.kt)("h2", { id: "test-met-vertaaldiensten" }, "Test met vertaaldiensten"), (0, o.kt)("p", null, "Sommige gebruikers maken gebruik van vertaaldiensten als Google Translate om formulieren te bekijken, bijvoorbeeld inwoners die het Nederlands niet machtig zijn. Optimaliseer voor compatibiliteit met dit soort diensten: zorg bijvoorbeeld dat het vervangen van woorden of zinnen door langere of kortere teksten de lay-out ongedeerd laat."), (0, o.kt)("h2", { id: "zorg-voor-complete-paginatitels" }, "Zorg voor complete paginatitels"), (0, o.kt)("p", null, "Zorg ervoor dat de titel van het formulier (of stap) ook is opgenomen in de paginatitel. Deze wordt bijvoorbeeld gebruikt voor de naam van het tabblad of wanneer een pagina gedeeld of opgeslagen wordt."), (0, o.kt)("p", null, (0, o.kt)("em", { parentName: "p" }, "Dit is verplicht om te voldoen aan WCAG 2.1, criterium ", (0, o.kt)("a", { parentName: "em", href: "https://www.w3.org/Translations/WCAG21-nl/#paginatitel" }, "2.4.2 Paginatitel"), ".")), (0, o.kt)(m, { appearance: "do", title: "Stap in paginatitel", description: (0, o.kt)(i.nv, { mdxType: "Paragraph" }, "Met het ", (0, o.kt)("code", null, "<title>"), " element wordt de titel van de pagina gedefinieerd. Zorg dat deze zo specifiek mogelijk is."), mdxType: "Guideline" }, (0, o.kt)(u, { language: "html", code: (0, o.kt)(a.Fragment, null, (0, o.kt)("title", null, "Uw gegevens - Afspraak maken - Voorbeeldinstantie")), mdxType: "Canvas" })), (0, o.kt)(m, { appearance: "dont", title: "Te algemene paginatitel", description: (0, o.kt)(i.nv, { mdxType: "Paragraph" }, "Zorg dat de informatie in de titel specifiek genoeg is."), mdxType: "Guideline" }, (0, o.kt)(u, { language: "html", code: (0, o.kt)(a.Fragment, null, (0, o.kt)("title", null, "Voorbeeldinstantie")), mdxType: "Canvas" })), (0, o.kt)("h2", { id: "velden-onder-elkaar" }, "Velden onder elkaar"), (0, o.kt)("p", null, "Om iemand comfortabel een formulier te laten scannen, is de aanbeveling meerdere kolommen te vermijden. Plaats velden bij voorkeur onder elkaar.\nLees ook de ", (0, o.kt)("a", { parentName: "p", href: "/richtlijnen/formulieren/alle-richtlijnen/labels" }, "richtlijnen over labels"), "."), (0, o.kt)("h2", { id: "plaats-knoppen-aan-het-begin-van-de-regel" }, "Plaats knoppen aan het begin van de regel"), (0, o.kt)("p", null, "Wanneer knoppen aan het begin van de regel staan, zijn ze het makkelijkst te vinden, omdat daar ook de invoervelden staat.\nLees hierover meer bij de richtlijnen over ", (0, o.kt)("a", { parentName: "p", href: "/richtlijnen/formulieren/voorspelbaar/" }, "buttons in een formulier"), "."), (0, o.kt)("h2", { id: "positie-van-tekstlabels" }, "Positie van tekstlabels"), (0, o.kt)("p", null, "Plaats labels buiten het invoerveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoont."), (0, o.kt)("p", null, "Lees hierover meer op de ", (0, o.kt)("a", { parentName: "p", href: "/richtlijnen/formulieren/alle-richtlijnen/labels" }, "richtlijnen over labels"), "."));
   }
   f.isMDXComponent = !0;
  },
 },
]);
