"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [37275],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => c, kt: () => b });
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
   function l(e) {
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
   function o(e, n) {
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
   var s = r.createContext({}),
    p = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
    },
    c = function (e) {
     var n = p(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    d = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    m = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      c = o(e, ["components", "mdxType", "originalType", "parentName"]),
      d = p(t),
      m = i,
      b = d["".concat(s, ".").concat(m)] || d[m] || u[m] || a;
     return t ? r.createElement(b, l(l({ ref: n }, c), {}, { components: t })) : r.createElement(b, l({ ref: n }, c));
    });
   function b(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var a = t.length,
      l = new Array(a);
     l[0] = m;
     var o = {};
     for (var s in n) hasOwnProperty.call(n, s) && (o[s] = n[s]);
     (o.originalType = e), (o[d] = "string" == typeof e ? e : i), (l[1] = o);
     for (var p = 2; p < a; p++) l[p] = t[p];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  18713: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => o, toc: () => p });
   var r = t(87462),
    i = (t(67294), t(3905));
   const a = { title: "Richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Richtlijnen", pagination_label: "Richtlijnen", description: "NL Design System richtlijnen", keywords: ["wat", "design system", "documentatie"] },
    l = "Richtlijnen",
    o = { unversionedId: "richtlijnen/README", id: "richtlijnen/README", title: "Richtlijnen NL Design System", description: "NL Design System richtlijnen", source: "@site/docs/richtlijnen/README.md", sourceDirName: "richtlijnen", slug: "/richtlijnen/", permalink: "/en/richtlijnen/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/README.md", tags: [], version: "current", frontMatter: { title: "Richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Richtlijnen", pagination_label: "Richtlijnen", description: "NL Design System richtlijnen", keywords: ["wat", "design system", "documentatie"] } },
    s = {},
    p = [
     { value: "Hier vind je onder andere:", id: "hier-vind-je-onder-andere", level: 2 },
     { value: "Gebruik van partials", id: "gebruik-van-partials", level: 2 },
     { value: "Namen voor partials", id: "namen-voor-partials", level: 3 },
    ],
    c = { toc: p },
    d = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(d, (0, r.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "richtlijnen" }, "Richtlijnen"), (0, i.kt)("p", null, "In het NL Design System verzamelen we documentatie vanuit de community. Dit kan gebruikt worden om een project te starten of een bestaand product te optimaliseren."), (0, i.kt)("h2", { id: "hier-vind-je-onder-andere" }, "Hier vind je onder andere:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "stijl/kleuren" }, "Richtlijnen voor stijl")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "tekst-en-taalgebruik" }, "Richtlijnen voor taalgebruik")), (0, i.kt)("li", { parentName: "ul" }, "Richtlijnen voor toegankelijkheid en inclusie"), (0, i.kt)("li", { parentName: "ul" }, "Onderzoeksresultaten van geteste ontwerpen")), (0, i.kt)("p", null, "Deze documentatie wordt regelmatig bijgewerkt."), (0, i.kt)("h2", { id: "gebruik-van-partials" }, "Gebruik van partials"), (0, i.kt)("p", null, "We gebruiken zoveel mogelijk \u2018partials\u2019: stukjes content die los zouden kunnen gebruikt, bijvoorbeeld in een ander design system, worden als partial opgeslagen (bij ons een Markdown-bestand dat met ", (0, i.kt)("inlineCode", { parentName: "p" }, "_"), " begint) en dan ge\xefmporteerd."), (0, i.kt)("p", null, "Voorbeeld, waarin op een pagina over fruit de informatie over appels, peren en bananen in aparte bestanden staat en ge\xefmporteerd wordt:"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-mdx" }, 'import Apple from "./_apple.md";\nimport Pear from "./_pear.md";\nimport Banana from "./_banana.md";\n\n# Fruits\n\n<Apple />\n<Pear />\n<Banana />\n')), (0, i.kt)("h3", { id: "namen-voor-partials" }, "Namen voor partials"), (0, i.kt)("p", null, "We willen de namen liefst niet meer veranderen, en dus toekomstbestendig maken (vanuit de \u2018cool URI's don't change\u2019 gedachte)."), (0, i.kt)("p", null, "Enkele richtlijnen:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "gebruik enkelvoud tenzij meervoud noodzakelijk is"), (0, i.kt)("li", { parentName: "ul" }, "gebruik keywords uit HTML/CSS/SVG voor IDs/slugs/filenames"), (0, i.kt)("li", { parentName: "ul" }, "gebruik prefixes en hi\xebrarchie in prefixes zodat door sorteren automatisch groepjes ontstaan")), (0, i.kt)("p", null, "Voorbeelden van namen voor label-gerelateerde partials:"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre" }, "_label-position.md\n_label-text.md\n_label-visibility.md\n_label-no-activate.md\n_label-text-visibility.md\n")));
   }
   u.isMDXComponent = !0;
  },
 },
]);
