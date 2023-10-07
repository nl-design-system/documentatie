"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [374],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => m });
   var o = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
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
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
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
     o,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       r = {},
       i = Object.keys(e);
      for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var c = o.createContext({}),
    s = function (e) {
     var n = o.useContext(c),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    p = function (e) {
     var n = s(e.components);
     return o.createElement(c.Provider, { value: n }, e.children);
    },
    f = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      i = e.originalType,
      c = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      f = s(t),
      u = r,
      m = f["".concat(c, ".").concat(u)] || f[u] || d[u] || i;
     return t ? o.createElement(m, a(a({ ref: n }, p), {}, { components: t })) : o.createElement(m, a({ ref: n }, p));
    });
   function m(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var i = t.length,
      a = new Array(i);
     a[0] = u;
     var l = {};
     for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
     (l.originalType = e), (l[f] = "string" == typeof e ? e : r), (a[1] = l);
     for (var s = 2; s < i; s++) a[s] = t[s];
     return o.createElement.apply(null, a);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  40704: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => d, frontMatter: () => i, metadata: () => l, toc: () => s });
   var o = t(87462),
    r = (t(67294), t(3905));
   const i = { title: "Colofon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Colofon", pagination_label: "Colofon", description: "Colofon - opsomming van de manier waarop deze website tot stand is gekomen", slug: "/colofon" },
    a = "Colofon",
    l = { unversionedId: "footer/colofon", id: "footer/colofon", title: "Colofon", description: "Colofon - opsomming van de manier waarop deze website tot stand is gekomen", source: "@site/docs/footer/colofon.mdx", sourceDirName: "footer", slug: "/colofon", permalink: "/colofon", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/footer/colofon.mdx", tags: [], version: "current", frontMatter: { title: "Colofon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Colofon", pagination_label: "Colofon", description: "Colofon - opsomming van de manier waarop deze website tot stand is gekomen", slug: "/colofon" } },
    c = {},
    s = [
     { value: "Over deze website", id: "over-deze-website", level: 2 },
     { value: "Iconen", id: "iconen", level: 2 },
    ],
    p = { toc: s },
    f = "wrapper";
   function d(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(f, (0, o.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "colofon" }, "Colofon"), (0, r.kt)("h2", { id: "over-deze-website" }, "Over deze website"), (0, r.kt)("p", null, "De website wordt gemaakt en onderhouden door het kernteam en is nog volop in ontwikkeling. Mocht u vragen of opmerkingen hebben dan kunt u contact met ons opnemen op ons centrale e-mailadres: ", (0, r.kt)("a", { href: "mailto:NLDesignSystem@gebruikercentraal.nl" }, (0, r.kt)("a", { parentName: "p", href: "mailto:NLDesignSystem@gebruikercentraal.nl" }, "NLDesignSystem@gebruikercentraal.nl")), "."), (0, r.kt)("h2", { id: "iconen" }, "Iconen"), (0, r.kt)("p", null, "De toptaak iconen op onze homepage zijn gemaakt door ", (0, r.kt)("a", { href: "https://www.opengemeenten.nl/producten/iconenset", target: "_top" }, "OpenGemeenten"), ". Deze iconenset is vrij te gebruiken en valt onder de CC BY-SA 4.0-licentie."));
   }
   d.isMDXComponent = !0;
  },
 },
]);
