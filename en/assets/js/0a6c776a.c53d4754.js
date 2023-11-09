"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90418],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
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
    p = function (e) {
     var n = d(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    g = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      a = e.originalType,
      l = e.parentName,
      p = s(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      g = i,
      u = m["".concat(l, ".").concat(g)] || m[g] || k[g] || a;
     return t ? r.createElement(u, o(o({ ref: n }, p), {}, { components: t })) : r.createElement(u, o({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var a = t.length,
      o = new Array(a);
     o[0] = g;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[m] = "string" == typeof e ? e : i), (o[1] = s);
     for (var d = 2; d < a; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   g.displayName = "MDXCreateElement";
  },
  39030: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => k, frontMatter: () => a, metadata: () => s, toc: () => d });
   var r = t(87462),
    i = (t(67294), t(3905));
   const a = { title: "Spacing tokens als systeem voor verticale ruimte", slug: "spacing-tokens", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design tokens"], hide_table_of_contents: !1, date: new Date("2023-11-09T00:00:00.000Z") },
    o = void 0,
    s = {
     permalink: "/en/blog/spacing-tokens",
     source: "@site/blog/2023/20231109-spacing-tokens.md",
     title: "Spacing tokens als systeem voor verticale ruimte",
     description: "Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in het Design Open Hour.",
     date: "2023-11-09T00:00:00.000Z",
     formattedDate: "November 9, 2023",
     tags: [
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
      { label: "design tokens", permalink: "/en/blog/tags/design-tokens" },
     ],
     readingTime: 2.695,
     hasTruncateMarker: !0,
     authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }],
     frontMatter: { title: "Spacing tokens als systeem voor verticale ruimte", slug: "spacing-tokens", authors: [{ name: "Hidde de Vries", title: "Public relations & Toegankelijkheidsspecialist NL Design System", url: "https://www.linkedin.com/in/hiddedevries/" }], tags: ["NL design system", "design tokens"], hide_table_of_contents: !1, date: "2023-11-09T00:00:00.000Z" },
     nextItem: { title: "Design Systems Week 2023 komt eraan!", permalink: "/en/blog/design-systems-week-2023-komt-eraan" },
    },
    l = { authorsImageUrls: [void 0] },
    d = [
     { value: "Relaties versus afstanden", id: "relaties-versus-afstanden", level: 2 },
     { value: "Open vragen", id: "open-vragen", level: 2 },
     { value: "Vervolg", id: "vervolg", level: 2 },
    ],
    p = { toc: d },
    m = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(m, (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in het Design Open Hour."), (0, i.kt)("p", null, "De belangrijkste reden voor deze samenkomst: op dit moment zijn er nog geen afspraken over de verticale ruimte tussen componenten. Dat zit gebruikersvriendelijkheid in de weg, doordat er onvoldoende relatie en hi\xebrarchie tussen componenten bestaat."), (0, i.kt)("p", null, "De designers + enkele leden uit het kernteam (Rozerin, Ren\xe9, Martijn, Jeroen, Jeffrey, Yolijn en Robbert) kwamen bij elkaar om samen te werken aan twee doelen:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "een systeem voor verticale paddings en/of margins dat intu\xeftief en logisch is (met design tokens voor implementatie en documentatie)"), (0, i.kt)("li", { parentName: "ul" }, "richtlijnen voor het gebruik van paddings en margins (waarin redeneringen en werking worden uitgelegd)")), (0, i.kt)("h2", { id: "relaties-versus-afstanden" }, "Relaties versus afstanden"), (0, i.kt)("p", null, "Tijdens de workshop werden verschillende relaties tussen componenten bedacht: \u201cvrienden\u201d staan dicht bij elkaar, \u201cbesties\u201d heel dicht en \u201ckennissen\u201d nemen wat meer afstand. Elk van deze relaties krijgt een bepaalde waarde, bijvoorbeeld:"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-yaml" }, "onbekenden: 32px\nkennissen: 24px\nvrienden: 16px\nbesties: 8px\n")), (0, i.kt)("p", null, "Natuurlijk hoeven de waarden niet in pixels te worden uitgedrukt. Het kunnen bijvoorbeeld ook relatieve waarden zijn, en die kunnen ook nog eens per viewport verschillen."), (0, i.kt)("p", null, "Het idee is dat de waarden instelbaar zijn met design tokens. Design systems kunnen hierin dus zelf een keuze maken. Of meerdere keuzes. Misschien is de afstand tussen \u201cvrienden\u201d bijvoorbeeld net anders in een Mijn Zaken-systeem dan in een contentwebsite. Het ene scherm is \u201cinformation-dense\u201d, met bijvoorbeeld veel tabellen, terwijl bij het andere leesbaarheid van tekst belangrijk is. Waarden van de design tokens kunnen per geval anders worden ingesteld."), (0, i.kt)("h2", { id: "open-vragen" }, "Open vragen"), (0, i.kt)("p", null, "In deze eerste sessie is al veel denkwerk verricht, liet Jeroen zien. In een spreadsheet had de groep al relaties uitgewerkt tussen een groot aantal componenten."), (0, i.kt)("p", null, "Er zijn ook nog wel wat open vragen:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Hoeveel relaties is voldoende om de meeste scenario's af te dekken? Is er nog een relatie nodig na 'Onbekenden'?"), (0, i.kt)("li", { parentName: "ul" }, "Hoe kan dit worden uitgewerkt in de front-end? (Er waren al wat eerste idee\xebn, door aanwezigheid van developers Yolijn en Robbert)"), (0, i.kt)("li", { parentName: "ul" }, "Hoe zit het met verticale ruimte binnen componenten?"), (0, i.kt)("li", { parentName: "ul" }, "Er zijn allerlei componenten waar de waarden op elkaar lijken, zoals buttons en links; kunnen we hier een groepering in aanbrengen?"), (0, i.kt)("li", { parentName: "ul" }, "Hoe zou je deze spacing als designer willen toepassen in een ontwerptool als Figma? Als \u201cspacer-blokje\u201d? Met behulp van variabele? Wil je dit \xfcberhaupt wel allemaal in Figma doorvoeren?")), (0, i.kt)("p", null, "Nog een hoop om over na te denken! Mocht je dit lezen en voor je eigen design system ook bezig zijn met spacing tokens, laat het ons weten! Bijvoorbeeld in het ", (0, i.kt)("inlineCode", { parentName: "p" }, "#nl-design-system-designers"), "-kanaal in de ", (0, i.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl/" }, "Code for NL Slack community"), "."), (0, i.kt)("h2", { id: "vervolg" }, "Vervolg"), (0, i.kt)("p", null, "We zijn bovenstaand systeem aan het uittesten in Figma, om te kijken hoe het in de praktijk werkt. Dat willen we ook gaan doen voor bijvoorbeeld formulier- en contentpagina's: ", (0, i.kt)("em", { parentName: "p" }, "the proof of the pudding is in the eating"), "."), (0, i.kt)("p", null, "Ook gaan we verder met bijvoorbeeld bovenstaande vragen. Heb je vragen of idee\xebn, de designers zitten op ", (0, i.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl/" }, "Slack"), " (kanaal: ", (0, i.kt)("inlineCode", { parentName: "p" }, "#nl-design-system-designers"), "), daar kun je je ook melden voor de tweewekelijkse Design Open Hour, voor ontwerpers bij de overheid."));
   }
   k.isMDXComponent = !0;
  },
 },
]);
