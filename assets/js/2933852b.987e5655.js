"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6752],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => k, kt: () => g });
   var i = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function o(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i);
    }
    return t;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
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
     i,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       r = {},
       o = Object.keys(e);
      for (i = 0; i < o.length; i++) (t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (i = 0; i < o.length; i++) (t = o[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var s = i.createContext({}),
    d = function (e) {
     var n = i.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    k = function (e) {
     var n = d(e.components);
     return i.createElement(s.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    p = i.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      k = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      p = r,
      g = m["".concat(s, ".").concat(p)] || m[p] || c[p] || o;
     return t ? i.createElement(g, a(a({ ref: n }, k), {}, { components: t })) : i.createElement(g, a({ ref: n }, k));
    });
   function g(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var o = t.length,
      a = new Array(o);
     a[0] = p;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : r), (a[1] = l);
     for (var d = 2; d < o; d++) a[d] = t[d];
     return i.createElement.apply(null, a);
    }
    return i.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  11848: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => c, frontMatter: () => o, metadata: () => l, toc: () => d });
   var i = t(87462),
    r = (t(67294), t(3905));
   const o = { title: "Toegankelijkheid", hide_title: !0, hide_table_of_contents: !1, pagination_label: "Toegankelijkheid", slug: "/toegankelijkheidsverklaring" },
    a = "Toegankelijkheid",
    l = { unversionedId: "footer/toegankelijkheidsverklaring", id: "footer/toegankelijkheidsverklaring", title: "Toegankelijkheid", description: "Componenten uit de community", source: "@site/docs/footer/toegankelijkheidsverklaring.md", sourceDirName: "footer", slug: "/toegankelijkheidsverklaring", permalink: "/toegankelijkheidsverklaring", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/footer/toegankelijkheidsverklaring.md", tags: [], version: "current", frontMatter: { title: "Toegankelijkheid", hide_title: !0, hide_table_of_contents: !1, pagination_label: "Toegankelijkheid", slug: "/toegankelijkheidsverklaring" } },
    s = {},
    d = [
     { value: "Componenten uit de community", id: "componenten-uit-de-community", level: 2 },
     { value: "Verzameling offici\xeble componenten van NL Design System", id: "verzameling-offici\xeble-componenten-van-nl-design-system", level: 2 },
     { value: "Website NL Design System", id: "website-nl-design-system", level: 2 },
    ],
    k = { toc: d },
    m = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(m, (0, i.Z)({}, k, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "toegankelijkheid" }, "Toegankelijkheid"), (0, r.kt)("h2", { id: "componenten-uit-de-community" }, "Componenten uit de community"), (0, r.kt)("p", null, 'De componenten die de NL Design System community ontwikkelt worden direct open source gedeeld.\nComponenten zijn vaak beschikbaar zodra teams beginnen met de ontwikkeling, wanneer toegankelijkheid nog niet onafhankelijk is getest.\nLet op welk label het component heeft in het componenten-overzicht van Storybook: "work in progress", "alpha", "beta" of "production".'), (0, r.kt)("p", null, 'De bedoeling is dat componenten het label "production" krijgen wanneer het team de component heeft ingezet, de website vervolgens is gecontroleerd en een toegankelijkheidsverklaring heeft, en geconstateerde toegankelijkheidsproblemen zijn verholpen.'), (0, r.kt)("p", null, 'Alle componenten die nu op de website staan zijn nog de "community" componenten. Controleer daarom zelf naar beste kunnen de toegankelijkheid wanneer je de component inzet, deel resultaten uit een onafhankelijke toegankelijkheidsverklaring, en werk samen met de community om de kwaliteit te verbeteren.'), (0, r.kt)("h2", { id: "verzameling-offici\xeble-componenten-van-nl-design-system" }, "Verzameling offici\xeble componenten van NL Design System"), (0, r.kt)("p", null, "Het kernteam van NL Design System zal de komende periode veelgebruikte componenten uit de community in beheer nemen, en helpen bij het controleren van toegankelijkheid. We werken met het estafettemodel, waarbij het kernteam het stokje overneemt wanneer een component succesvol werkt in de praktijk."), (0, r.kt)("p", null, 'Wanneer tenminste tw\xe9\xe9 organisaties in de community een component van elkaar hergebruiken "in productie", en de component beide keren een positieve toegankelijkheidsverklaring krijgt of alle geconstateerde problemen nadien zijn verholpen, wordt het een kandidaat om op te nemen in de offici\xeble verzameling.'), (0, r.kt)("h2", { id: "website-nl-design-system" }, "Website NL Design System"), (0, r.kt)("p", null, "We streven ernaar voor de website nldesignsystem.nl te voldoen aan de ", (0, r.kt)("a", { parentName: "p", href: "https://www.w3.org/TR/WCAG22/" }, "WCAG 2.2 AA richtlijnen"), ", zoals opgesteld door het W3C."), (0, r.kt)("p", null, "Op 20 november 2023 is de website nldesignsystem.nl geaudit (", (0, r.kt)("a", { parentName: "p", href: "/toegankelijkheidsverklaring/rapport-2023" }, "Auditrapport 2023"), ").\nDe problemen die uit deze audit kwamen worden nu aangepakt. Het streven is om uiterlijk eind 2024 (liefst eerder) alle problemen opgelost te hebben."), (0, r.kt)("p", null, "Ondervind je een probleem bij het gebruik van deze website of heb je hier een vraag over?\nNeem dan ", (0, r.kt)("a", { parentName: "p", href: "https://nldesignsystem.nl/project/kernteam" }, "contact"), " met ons op."), (0, r.kt)("p", null, (0, r.kt)("a", { href: "https://www.toegankelijkheidsverklaring.nl/register/12250" }, (0, r.kt)("img", { src: "https://www.toegankelijkheidsverklaring.nl/files/verklaring/label/c35c932f9287cfbe2ced503c9d3fa04d.12250.svg?1700559665", alt: "Status toegankelijkheidslabel van NL Design System. Volg de link voor de volledige toegankelijkheidsverklaring.", width: "692", height: "251" }))));
   }
   c.isMDXComponent = !0;
  },
 },
]);
