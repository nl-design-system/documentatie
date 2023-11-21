"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [68536],
 {
  3905: (e, t, r) => {
   r.d(t, { Zo: () => p, kt: () => m });
   var n = r(67294);
   function a(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
   }
   function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(r), !0).forEach(function (t) {
         a(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : i(Object(r)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
   }
   function s(e, t) {
    if (null == e) return {};
    var r,
     n,
     a = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       a = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
    }
    return a;
   }
   var o = n.createContext({}),
    u = function (e) {
     var t = n.useContext(o),
      r = t;
     return e && (r = "function" == typeof e ? e(t) : l(l({}, t), e)), r;
    },
    p = function (e) {
     var t = u(e.components);
     return n.createElement(o.Provider, { value: t }, e.children);
    },
    g = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return n.createElement(n.Fragment, {}, t);
     },
    },
    b = n.forwardRef(function (e, t) {
     var r = e.components,
      a = e.mdxType,
      i = e.originalType,
      o = e.parentName,
      p = s(e, ["components", "mdxType", "originalType", "parentName"]),
      g = u(r),
      b = a,
      m = g["".concat(o, ".").concat(b)] || g[b] || c[b] || i;
     return r ? n.createElement(m, l(l({ ref: t }, p), {}, { components: r })) : n.createElement(m, l({ ref: t }, p));
    });
   function m(e, t) {
    var r = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var i = r.length,
      l = new Array(i);
     l[0] = b;
     var s = {};
     for (var o in t) hasOwnProperty.call(t, o) && (s[o] = t[o]);
     (s.originalType = e), (s[g] = "string" == typeof e ? e : a), (l[1] = s);
     for (var u = 2; u < i; u++) l[u] = r[u];
     return n.createElement.apply(null, l);
    }
    return n.createElement.apply(null, r);
   }
   b.displayName = "MDXCreateElement";
  },
  74469: (e, t, r) => {
   r.r(t), r.d(t, { assets: () => o, contentTitle: () => l, default: () => c, frontMatter: () => i, metadata: () => s, toc: () => u });
   var n = r(87462),
    a = (r(67294), r(3905));
   const i = { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", slug: "nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype", authors: [{ name: "Jeroen Schalk", title: "Webredacteur en communicatieadviseur", url: "https://linkedin.com/in/ietsvanjeroen/" }], tags: ["lettertype", "NL design system", "Gebruiker Centraal"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2023/05/0412_Uitgelichte-afbeeldingen_NLDS-1024x576.jpg", hide_table_of_contents: !1, date: new Date("2023-04-11T00:00:00.000Z") },
    l = void 0,
    s = {
     permalink: "/en/blog/nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype",
     source: "@site/blog/2023/20230411-nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype.md",
     title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype",
     description: "Al vanaf het begin gebruikt Gebruiker Centraal de lettertypes Montserrat en League Gothic. Dat gaat veranderen, te beginnen bij NL Design System. We leggen je graag uit waarom.",
     date: "2023-04-11T00:00:00.000Z",
     formattedDate: "April 11, 2023",
     tags: [
      { label: "lettertype", permalink: "/en/blog/tags/lettertype" },
      { label: "NL design system", permalink: "/en/blog/tags/nl-design-system" },
      { label: "Gebruiker Centraal", permalink: "/en/blog/tags/gebruiker-centraal" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jeroen Schalk", title: "Webredacteur en communicatieadviseur", url: "https://linkedin.com/in/ietsvanjeroen/" }],
     frontMatter: { title: "NL Design System gebruikt als eerste nieuwe Gebruiker Centraal-lettertype", slug: "nl-design-system-gebruikt-als-eerste-nieuwe-gebruiker-centraal-lettertype", authors: [{ name: "Jeroen Schalk", title: "Webredacteur en communicatieadviseur", url: "https://linkedin.com/in/ietsvanjeroen/" }], tags: ["lettertype", "NL design system", "Gebruiker Centraal"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2023/05/0412_Uitgelichte-afbeeldingen_NLDS-1024x576.jpg", hide_table_of_contents: !1, date: "2023-04-11T00:00:00.000Z" },
     prevItem: { title: "Design Systems Week 2023 komt eraan!", permalink: "/en/blog/design-systems-week-2023-komt-eraan" },
     nextItem: { title: "De mijlpalen van 2022", permalink: "/en/blog/de-mijlpalen-van-2022" },
    },
    o = { authorsImageUrls: [void 0] },
    u = [],
    p = { toc: u },
    g = "wrapper";
   function c(e) {
    let { components: t, ...r } = e;
    return (0, a.kt)(g, (0, n.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Al vanaf het begin gebruikt Gebruiker Centraal de lettertypes Montserrat en League Gothic. Dat gaat veranderen, te beginnen bij NL Design System. We leggen je graag uit waarom."), (0, a.kt)("p", null, "Al vanaf het begin gebruikt Gebruiker Centraal de lettertypes Montserrat en League Gothic. Dat gaat veranderen. De website van NL Design System is al over op de nieuwe lettertypes. De website van Gebruiker Centraal nu ook."), (0, a.kt)("p", null, "Goed om te weten: de tekst op deze pagina heeft nog de oude lettertypes. Op de projectwebsite van NL Design System kun je al wel de nieuwe lettertypes bewonderen. En sinds kort dus ook op de website van Gebruiker Centraal."), (0, a.kt)("p", null, (0, a.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/blog/waarom-we-kiezen-voor-nieuwe-lettertypes/" }, "Lees waarom Gebruiker Centraal kiest voor nieuwe lettertypes")));
   }
   c.isMDXComponent = !0;
  },
 },
]);
