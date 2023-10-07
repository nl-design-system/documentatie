"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8148],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => v });
   var r = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
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
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       o = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var c = r.createContext({}),
    d = function (e) {
     var n = r.useContext(c),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    s = function (e) {
     var n = d(e.components);
     return r.createElement(c.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    b = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    u = r.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      i = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(t),
      u = o,
      v = p["".concat(c, ".").concat(u)] || p[u] || b[u] || i;
     return t ? r.createElement(v, a(a({ ref: n }, s), {}, { components: t })) : r.createElement(v, a({ ref: n }, s));
    });
   function v(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var i = t.length,
      a = new Array(i);
     a[0] = u;
     var l = {};
     for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : o), (a[1] = l);
     for (var d = 2; d < i; d++) a[d] = t[d];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  93534: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => b, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = t(87462),
    o = (t(67294), t(3905));
   const i = { title: "Voorbeelden - Overzicht", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Voorbeelden Overzicht", keywords: ["index", "voorbeelden"] },
    a = "Voorbeelden",
    l = { unversionedId: "voorbeelden/README", id: "voorbeelden/README", title: "Voorbeelden - Overzicht", description: "Voorbeelden Overzicht", source: "@site/docs/voorbeelden/README.md", sourceDirName: "voorbeelden", slug: "/voorbeelden/", permalink: "/en/voorbeelden/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Voorbeelden - Overzicht", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Voorbeelden Overzicht", keywords: ["index", "voorbeelden"] }, sidebar: "voorbeelden", previous: { title: "Voorbeelden", permalink: "/en/voorbeelden" }, next: { title: "Patronen", permalink: "/en/voorbeelden/patronen/" } },
    c = {},
    d = [],
    s = { toc: d },
    p = "wrapper";
   function b(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(p, (0, r.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "voorbeelden" }, "Voorbeelden"), (0, o.kt)("p", null, "Hier tonen we voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit het NL Design System. Deze voorbeelden zijn door diverse organisaties gemaakt op basis van documentatie, patronen en componenten van het NL Design System."), (0, o.kt)("p", null, "Op dit moment werken we hard om voorbeelden te delen. Hou deze pagina in de gaten!"));
   }
   b.isMDXComponent = !0;
  },
 },
]);
