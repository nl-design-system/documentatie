"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [92233],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => b });
   var r = n(67294);
   function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
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
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function i(e, t) {
    if (null == e) return {};
    var n,
     r,
     l = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       l = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
   }
   var p = r.createContext({}),
    c = function (e) {
     var t = r.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    d = function (e) {
     var t = c(e.components);
     return r.createElement(p.Provider, { value: t }, e.children);
    },
    s = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    f = r.forwardRef(function (e, t) {
     var n = e.components,
      l = e.mdxType,
      a = e.originalType,
      p = e.parentName,
      d = i(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(n),
      f = l,
      b = s["".concat(p, ".").concat(f)] || s[f] || m[f] || a;
     return n ? r.createElement(b, o(o({ ref: t }, d), {}, { components: n })) : r.createElement(b, o({ ref: t }, d));
    });
   function b(e, t) {
    var n = arguments,
     l = t && t.mdxType;
    if ("string" == typeof e || l) {
     var a = n.length,
      o = new Array(a);
     o[0] = f;
     var i = {};
     for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
     (i.originalType = e), (i[s] = "string" == typeof e ? e : l), (o[1] = i);
     for (var c = 2; c < a; c++) o[c] = n[c];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  13871: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => o, default: () => m, frontMatter: () => a, metadata: () => i, toc: () => c });
   var r = n(87462),
    l = (n(67294), n(3905));
   const a = { title: "Form field partial label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial label", pagination_label: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", slug: "/form-field-partial-label", tags: ["Help Wanted"] },
    o = void 0,
    i = { unversionedId: "componenten/build/form-field-partial-label", id: "componenten/build/form-field-partial-label", title: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", source: "@site/docs/componenten/build/form-field-partial-label.mdx", sourceDirName: "componenten/build", slug: "/form-field-partial-label", permalink: "/en/form-field-partial-label", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-partial-label.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field partial label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial label", pagination_label: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", slug: "/form-field-partial-label", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field option label", permalink: "/en/form-field-option-label" }, next: { title: "Form field partial", permalink: "/en/form-field-partial" } },
    p = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    d = { toc: c },
    s = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, l.kt)(s, (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, l.kt)("h1", { id: "form-field-partial-label" }, "Form field partial label"), (0, l.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, l.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, l.kt)("p", null, "De Form field partial label component staat bij NL Design System in de ", (0, l.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/180" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
