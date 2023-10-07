"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8939],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => f });
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
   function l(e) {
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
   function a(e, t) {
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
   var c = o.createContext({}),
    p = function (e) {
     var t = o.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    s = function (e) {
     var t = p(e.components);
     return o.createElement(c.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    m = o.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      c = e.parentName,
      s = a(e, ["components", "mdxType", "originalType", "parentName"]),
      d = p(n),
      m = r,
      f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || i;
     return n ? o.createElement(f, l(l({ ref: t }, s), {}, { components: n })) : o.createElement(f, l({ ref: t }, s));
    });
   function f(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      l = new Array(i);
     l[0] = m;
     var a = {};
     for (var c in t) hasOwnProperty.call(t, c) && (a[c] = t[c]);
     (a.originalType = e), (a[d] = "string" == typeof e ? e : r), (l[1] = a);
     for (var p = 2; p < i; p++) l[p] = n[p];
     return o.createElement.apply(null, l);
    }
    return o.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  5972: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => l, default: () => u, frontMatter: () => i, metadata: () => a, toc: () => p });
   var o = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Tooltip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tooltip", pagination_label: "Tooltip", description: "UX richtlijnen voor Tooltip component", slug: "/tooltip", tags: ["Discouraged"] },
    l = void 0,
    a = { unversionedId: "componenten/build/tooltip", id: "componenten/build/tooltip", title: "Tooltip", description: "UX richtlijnen voor Tooltip component", source: "@site/docs/componenten/build/tooltip.mdx", sourceDirName: "componenten/build", slug: "/tooltip", permalink: "/tooltip", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/tooltip.mdx", tags: [{ label: "Discouraged", permalink: "/tags/discouraged" }], version: "current", frontMatter: { title: "Tooltip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tooltip", pagination_label: "Tooltip", description: "UX richtlijnen voor Tooltip component", slug: "/tooltip", tags: ["Discouraged"] }, sidebar: "componenten", previous: { title: "Toggletip", permalink: "/toggletip" }, next: { title: "Unordered list", permalink: "/unordered-list" } },
    c = {},
    p = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: p },
    d = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(d, (0, o.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "tooltip" }, "Tooltip"), (0, r.kt)("p", null, 'Dit component heeft de "Discouraged" status: Dit component is onderdeel van de NL Design System Hall of fame en wordt al door anderen succesvol in productie ingezet'), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Tooltip component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/50" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
