"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3464],
 {
  3905: (e, n, r) => {
   r.d(n, { Zo: () => u, kt: () => b });
   var t = r(67294);
   function o(e, n, r) {
    return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
   }
   function i(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, t);
    }
    return r;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(r), !0).forEach(function (n) {
         o(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : i(Object(r)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
    }
    return e;
   }
   function d(e, n) {
    if (null == e) return {};
    var r,
     t,
     o = (function (e, n) {
      if (null == e) return {};
      var r,
       t,
       o = {},
       i = Object.keys(e);
      for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   var s = t.createContext({}),
    l = function (e) {
     var n = t.useContext(s),
      r = n;
     return e && (r = "function" == typeof e ? e(n) : a(a({}, n), e)), r;
    },
    u = function (e) {
     var n = l(e.components);
     return t.createElement(s.Provider, { value: n }, e.children);
    },
    c = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return t.createElement(t.Fragment, {}, n);
     },
    },
    k = t.forwardRef(function (e, n) {
     var r = e.components,
      o = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      u = d(e, ["components", "mdxType", "originalType", "parentName"]),
      c = l(r),
      k = o,
      b = c["".concat(s, ".").concat(k)] || c[k] || p[k] || i;
     return r ? t.createElement(b, a(a({ ref: n }, u), {}, { components: r })) : t.createElement(b, a({ ref: n }, u));
    });
   function b(e, n) {
    var r = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var i = r.length,
      a = new Array(i);
     a[0] = k;
     var d = {};
     for (var s in n) hasOwnProperty.call(n, s) && (d[s] = n[s]);
     (d.originalType = e), (d[c] = "string" == typeof e ? e : o), (a[1] = d);
     for (var l = 2; l < i; l++) a[l] = r[l];
     return t.createElement.apply(null, a);
    }
    return t.createElement.apply(null, r);
   }
   k.displayName = "MDXCreateElement";
  },
  56667: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => s, contentTitle: () => a, default: () => p, frontMatter: () => i, metadata: () => d, toc: () => l });
   var t = r(87462),
    o = (r(67294), r(3905));
   const i = { title: "Gebruikersonderzoek", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Gebruikersonderzoek", sidebar_position: 1, pagination_label: "Overzicht", description: "Gebruikersonderzoek", keywords: ["index", "onderzoek"] },
    a = "Gebruikersonderzoek",
    d = { unversionedId: "onderzoek/README", id: "onderzoek/README", title: "Gebruikersonderzoek", description: "Gebruikersonderzoek", source: "@site/docs/onderzoek/README.md", sourceDirName: "onderzoek", slug: "/onderzoek/", permalink: "/en/onderzoek/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/onderzoek/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Gebruikersonderzoek", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Gebruikersonderzoek", sidebar_position: 1, pagination_label: "Overzicht", description: "Gebruikersonderzoek", keywords: ["index", "onderzoek"] }, sidebar: "onderzoek" },
    s = {},
    l = [{ value: "Lopend onderzoek", id: "lopend-onderzoek", level: 2 }],
    u = { toc: l },
    c = "wrapper";
   function p(e) {
    let { components: n, ...r } = e;
    return (0, o.kt)(c, (0, t.Z)({}, u, r, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "gebruikersonderzoek" }, "Gebruikersonderzoek"), (0, o.kt)("p", null, "In de community wordt veel gebruikersonderzoek gedaan. Omdat je veel van elkaars onderzoeksresultaten kan leren en onderzoeken over hetzelfde onderwerp kan vergelijken is de NL Design System community begonnen met het verzamelen en publiceren op een toegankelijke manier."), (0, o.kt)("p", null, "De onderzoeken die al gedeeld zijn kan je vinden op ", (0, o.kt)("a", { parentName: "p", href: "http://gebruikersonderzoeken.nl" }, "gebruikersonderzoeken.nl")), (0, o.kt)("p", null, "Heb jij ook gebruikersonderzoek gedaan en wil je de uitkomsten delen? Dat kan via een issue op ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/gebruikersonderzoeken" }, "gebruikersonderzoeken op GitHub"), "."), (0, o.kt)("h2", { id: "lopend-onderzoek" }, "Lopend onderzoek"), (0, o.kt)("p", null, "Ga je onderzoek doen, ben je bezig van het uitwerken van resultaten of heb je een design waarvan je je afvraagt of iemand daar al onderzoek naar heeft gedaan? Dan kun je hiervoor de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/discussions" }, "discussies op GitHub"), " gebruiken."));
   }
   p.isMDXComponent = !0;
  },
 },
]);
