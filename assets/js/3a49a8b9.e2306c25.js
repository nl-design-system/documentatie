"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3407],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => g });
   var o = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     t &&
      (o = o.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, o);
    }
    return n;
   }
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function c(e, t) {
    if (null == e) return {};
    var n,
     o,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       r = {},
       i = Object.keys(e);
      for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var l = o.createContext({}),
    p = function (e) {
     var t = o.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    s = function (e) {
     var t = p(e.components);
     return o.createElement(l.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    d = o.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      s = c(e, ["components", "mdxType", "originalType", "parentName"]),
      u = p(n),
      d = r,
      g = u["".concat(l, ".").concat(d)] || u[d] || m[d] || i;
     return n ? o.createElement(g, a(a({ ref: t }, s), {}, { components: n })) : o.createElement(g, a({ ref: t }, s));
    });
   function g(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      a = new Array(i);
     a[0] = d;
     var c = {};
     for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
     (c.originalType = e), (c[u] = "string" == typeof e ? e : r), (a[1] = c);
     for (var p = 2; p < i; p++) a[p] = n[p];
     return o.createElement.apply(null, a);
    }
    return o.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  41512: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => i, metadata: () => c, toc: () => p });
   var o = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Checkbox group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox group", pagination_label: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", slug: "/checkbox-group", tags: ["Help Wanted"] },
    a = void 0,
    c = { unversionedId: "componenten/build/checkbox-group", id: "componenten/build/checkbox-group", title: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", source: "@site/docs/componenten/build/checkbox-group.mdx", sourceDirName: "componenten/build", slug: "/checkbox-group", permalink: "/checkbox-group", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/checkbox-group.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Checkbox group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox group", pagination_label: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", slug: "/checkbox-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Card as link", permalink: "/card-as-link" }, next: { title: "Checkbox", permalink: "/checkbox" } },
    l = {},
    p = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    s = { toc: p },
    u = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(u, (0, o.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "checkbox-group" }, "Checkbox group"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=954-2226" }, "Checkbox group Figma implementatie van NL Design System"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Checkbox group component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/128" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
