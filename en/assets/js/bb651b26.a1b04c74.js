"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4968],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => g });
   var a = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       o = Object.keys(e);
      for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var d = a.createContext({}),
    c = function (e) {
     var t = a.useContext(d),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    s = function (e) {
     var t = c(e.components);
     return a.createElement(d.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    u = a.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      o = e.originalType,
      d = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = c(n),
      u = r,
      g = p["".concat(d, ".").concat(u)] || p[u] || m[u] || o;
     return n ? a.createElement(g, i(i({ ref: t }, s), {}, { components: n })) : a.createElement(g, i({ ref: t }, s));
    });
   function g(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var o = n.length,
      i = new Array(o);
     i[0] = u;
     var l = {};
     for (var d in t) hasOwnProperty.call(t, d) && (l[d] = t[d]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : r), (i[1] = l);
     for (var c = 2; c < o; c++) i[c] = n[c];
     return a.createElement.apply(null, i);
    }
    return a.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  43357: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => i, default: () => m, frontMatter: () => o, metadata: () => l, toc: () => c });
   var a = n(87462),
    r = (n(67294), n(3905));
   const o = { title: "Dot badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Dot badge", pagination_label: "Dot badge", description: "UX richtlijnen voor Dot badge component", slug: "/dot-badge", tags: ["Help Wanted"] },
    i = void 0,
    l = { unversionedId: "componenten/build/dot-badge", id: "componenten/build/dot-badge", title: "Dot badge", description: "UX richtlijnen voor Dot badge component", source: "@site/docs/componenten/build/dot-badge.mdx", sourceDirName: "componenten/build", slug: "/dot-badge", permalink: "/en/dot-badge", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/dot-badge.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Dot badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Dot badge", pagination_label: "Dot badge", description: "UX richtlijnen voor Dot badge component", slug: "/dot-badge", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Date Picker", permalink: "/en/date-picker" }, next: { title: "Fieldset", permalink: "/en/fieldset" } },
    d = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    s = { toc: c },
    p = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(p, (0, a.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "dot-badge" }, "Dot badge"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "react" }, "React"), (0, r.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/DotIndicator/src" }, "Dot badge React implementatie van Gemeente Den Haag")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-dot-indicator--indicator-on-rectangle" }, "Dot badge React storybook van Gemeente Den Haag"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Dot badge component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/98" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
