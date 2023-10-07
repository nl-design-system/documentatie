"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6896],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => b });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var c = r.createContext({}),
    d = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    s = function (e) {
     var t = d(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    m = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(n),
      m = o,
      b = p["".concat(c, ".").concat(m)] || p[m] || u[m] || i;
     return n ? r.createElement(b, a(a({ ref: t }, s), {}, { components: n })) : r.createElement(b, a({ ref: t }, s));
    });
   function b(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = m;
     var l = {};
     for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : o), (a[1] = l);
     for (var d = 2; d < i; d++) a[d] = n[d];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  22508: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Video", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Video", pagination_label: "Video", description: "UX richtlijnen voor Video component", slug: "/video", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/video", id: "componenten/build/video", title: "Video", description: "UX richtlijnen voor Video component", source: "@site/docs/componenten/build/video.mdx", sourceDirName: "componenten/build", slug: "/video", permalink: "/en/video", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/video.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Video", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Video", pagination_label: "Video", description: "UX richtlijnen voor Video component", slug: "/video", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Variable Heading", permalink: "/en/variable-heading" } },
    c = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: d },
    p = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(p, (0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "video" }, "Video"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Video component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/69" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
