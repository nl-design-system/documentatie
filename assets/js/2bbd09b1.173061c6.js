"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [74337],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => g });
   var o = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
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
      ? a(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
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
     o,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       r = {},
       a = Object.keys(e);
      for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var d = o.createContext({}),
    s = function (e) {
     var n = o.useContext(d),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    m = function (e) {
     var n = s(e.components);
     return o.createElement(d.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      a = e.originalType,
      d = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = s(t),
      u = r,
      g = p["".concat(d, ".").concat(u)] || p[u] || c[u] || a;
     return t ? o.createElement(g, i(i({ ref: n }, m), {}, { components: t })) : o.createElement(g, i({ ref: n }, m));
    });
   function g(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var a = t.length,
      i = new Array(a);
     i[0] = u;
     var l = {};
     for (var d in n) hasOwnProperty.call(n, d) && (l[d] = n[d]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : r), (i[1] = l);
     for (var s = 2; s < a; s++) i[s] = t[s];
     return o.createElement.apply(null, i);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  2871: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => i, default: () => c, frontMatter: () => a, metadata: () => l, toc: () => s });
   var o = t(87462),
    r = (t(67294), t(3905));
   const a = { title: "Voorbeeld thema", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Voorbeeld thema", sidebar_position: 5, pagination_label: "Voorbeeld thema", description: "Toelichting op design keuzes voor het Voorbeeld thema.", keywords: ["index", "designer", "meedoen", "Voorbeeld thema", "figma"] },
    i = "Voorbeeld thema",
    l = { unversionedId: "meedoen/als-designer/voorbeeld-thema", id: "meedoen/als-designer/voorbeeld-thema", title: "Voorbeeld thema", description: "Toelichting op design keuzes voor het Voorbeeld thema.", source: "@site/docs/meedoen/als-designer/voorbeeld-thema.md", sourceDirName: "meedoen/als-designer", slug: "/meedoen/als-designer/voorbeeld-thema", permalink: "/meedoen/als-designer/voorbeeld-thema", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-designer/voorbeeld-thema.md", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Voorbeeld thema", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Voorbeeld thema", sidebar_position: 5, pagination_label: "Voorbeeld thema", description: "Toelichting op design keuzes voor het Voorbeeld thema.", keywords: ["index", "designer", "meedoen", "Voorbeeld thema", "figma"] }, sidebar: "meedoen", previous: { title: "Zelf componenten maken", permalink: "/meedoen/als-designer/zelf-componenten-maken" }, next: { title: "Voorbeeld thema", permalink: "/meedoen/als-designer/community" } },
    d = {},
    s = [
     { value: "Typografie", id: "typografie", level: 2 },
     { value: "Kleuren", id: "kleuren", level: 2 },
     { value: "Iconen", id: "iconen", level: 2 },
     { value: "Functionele iconen", id: "functionele-iconen", level: 3 },
     { value: "Toptaak iconen", id: "toptaak-iconen", level: 3 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ],
    m = { toc: s },
    p = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(p, (0, o.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "voorbeeld-thema" }, "Voorbeeld thema"), (0, r.kt)("p", null, "Het NL Design System heeft van zichzelf geen huisstijl. Maar om de werking en kracht van Design Tokens aan te tonen maken we wel gebruik van een \u2018Voorbeeld\u2019 thema."), (0, r.kt)("p", null, (0, r.kt)("strong", { parentName: "p" }, "Dit thema mag je helemaal aanpassen naar de huisstijl van jouw organsatie.")), (0, r.kt)("p", null, "Hieronder leggen we uit welke keuzes we gemaakt hebben voor het Voorbeeld thema."), (0, r.kt)("h2", { id: "typografie" }, "Typografie"), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_typografie.png", alt: "Visuale weergave van het lettertypes Source Serif Pro en Fira Sans." })), (0, r.kt)("p", null, "In het Voorbeeld thema maken we gebruik van de lettertypes \u2018Source Serif Pro\u2019 en \u2018Fira Sans\u2019. Beide lettertypes zijn Open Source te gebruiken en voldoen aan de richtlijnen die we voor ", (0, r.kt)("a", { parentName: "p", href: "/richtlijnen/stijl/" }, "Typografie"), " hebben beschreven. Daarnaast zijn beide lettertypes standaard onderdeel van Figma. Hierdoor hoef je ze niet apart te installeren om te starten met de NL Design System bibliotheek."), (0, r.kt)("h2", { id: "kleuren" }, "Kleuren"), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_kleuren.png", alt: "Visuale weergave van het kleurenpalet." })), (0, r.kt)("p", null, "In het Voorbeeld thema hebben we op ", (0, r.kt)("a", { parentName: "p", href: "/meedoen/design-tokens/" }, "\u2018Brand token\u2019 niveau"), " een zeer uitgebreid kleurenpalet opgenomen. Dit kleurenpalet bestaat uit 9 hoofdkleuren: Violet, Grijs, Roze, Rood, Oranje, Geel, Groen, Zee-groen en Blauw. En is aangevuld met zwart, wit en een aantal transparante opties. Het biedt ons veel opties met betrekking tot feedback componenten en bijvoorbeeld een dark-mode thema."), (0, r.kt)("h2", { id: "iconen" }, "Iconen"), (0, r.kt)("h3", { id: "functionele-iconen" }, "Functionele iconen"), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_functionele-iconen.png", alt: "Tabler logo met op de achtergrond allerlei verschillende iconen uit deze set." })), (0, r.kt)("p", null, "Voor functionele iconen maken we gebruik van een selectie uit de ", (0, r.kt)("a", { parentName: "p", href: "https://tabler-icons.io/" }, "Tabler iconenset"), ". Deze set bestaat uit meer dan 3100 outline iconen die Open Source worden aangeboden. Je mag deze iconenset dus ook gebruiken voor jouw organisatie."), (0, r.kt)("p", null, "Vanuit het NL Design System onderhouden we deze iconenset niet. Het gebruik ervan is daarom je eigen verantwoordelijkheid. Mis je een icoon? Dan kun je deze zelf toevoegen."), (0, r.kt)("p", null, (0, r.kt)("strong", { parentName: "p" }, "Let op!"), " De iconen van de Tablet iconenset zijn opgebouwd uit lijnen (stroke) met een lijndikte van 2px. Hierdoor blijft de lijndikte 2px ongeacht hoe groot het icoon is. Zoals aangegeven in de ", (0, r.kt)("a", { parentName: "p", href: "/richtlijnen/stijl/iconen" }, "richtlijnen rondom iconen"), " is dit niet het gewenste gedrag. Daarom hebben we de iconen in het Voorbeeld thema omgezet van lijn naar vorm (outline stroke)."), (0, r.kt)("p", null, "De Tabler iconenset is ontworpen op een 24\xd724 grid. Dit formaat nemen we dan ook als uitgangspunt bij het ontwerpen van componenten. Vandaar dat de waarde van common token ", (0, r.kt)("inlineCode", { parentName: "p" }, "nl.icon.functional.size"), " 24\xd724 betreft."), (0, r.kt)("h3", { id: "toptaak-iconen" }, "Toptaak iconen"), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_toptaak-iconen.png", alt: "Gemeente iconen logo met op de achtergrond allerlei verschillende iconen uit deze set." })), (0, r.kt)("p", null, "Voor toptaak iconen maken we gebruik van de outline versie van ", (0, r.kt)("a", { parentName: "p", href: "https://www.gemeenteniconen.nl/" }, "OpenGemeenten iconenset"), ". Deze set bestaat uit meer dan 200 iconen die Open Source worden aangeboden. Je mag deze iconenset dus ook gebruiken voor jouw organisatie."), (0, r.kt)("p", null, "Vanuit het NL Design System onderhouden we deze iconenset niet. Het gebruik ervan is daarom je eigen verantwoordelijkheid. Mis je een icoon? Neem dan contact op met ", (0, r.kt)("a", { parentName: "p", href: "https://www.gemeenteniconen.nl/doe-mee" }, "OpenGemeenten"), "."), (0, r.kt)("p", null, "De OpenGemeenten iconenset is ontworpen op een 48\xd748 grid. Dit formaat nemen we dan ook als uitgangspunt bij het ontwerpen van componenten. Vandaar dat de waarde van common token ", (0, r.kt)("inlineCode", { parentName: "p" }, "nl.icon.toptask.size"), " 48\xd748 betreft."), (0, r.kt)("hr", null), (0, r.kt)("h2", { id: "help-deze-documentatie-te-verbeteren" }, "Help deze documentatie te verbeteren"), (0, r.kt)("p", null, "Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/documentatie" }, "Github"), "."), (0, r.kt)("h2", { id: "vragen" }, "Vragen"), (0, r.kt)("p", null, "Heb je een vraag? Twijfel niet en ", (0, r.kt)("a", { parentName: "p", href: "/project/kernteam" }, "neem contact op met het kernteam"), "."));
   }
   c.isMDXComponent = !0;
  },
 },
]);
