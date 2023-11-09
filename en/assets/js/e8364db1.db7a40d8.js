"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [65607],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => u });
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
   var p = r.createContext({}),
    c = function (e) {
     var t = r.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
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
      o = e.mdxType,
      i = e.originalType,
      p = e.parentName,
      d = l(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(n),
      f = o,
      u = s["".concat(p, ".").concat(f)] || s[f] || m[f] || i;
     return n ? r.createElement(u, a(a({ ref: t }, d), {}, { components: n })) : r.createElement(u, a({ ref: t }, d));
    });
   function u(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = f;
     var l = {};
     for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
     (l.originalType = e), (l[s] = "string" == typeof e ? e : o), (a[1] = l);
     for (var c = 2; c < i; c++) a[c] = n[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  60109: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => a, default: () => m, frontMatter: () => i, metadata: () => l, toc: () => c });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Form field partial", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial", pagination_label: "Form field partial", description: "UX richtlijnen voor Form field partial component", slug: "/form-field-partial", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/form-field-partial", id: "componenten/build/form-field-partial", title: "Form field partial", description: "UX richtlijnen voor Form field partial component", source: "@site/docs/componenten/build/form-field-partial.mdx", sourceDirName: "componenten/build", slug: "/form-field-partial", permalink: "/en/form-field-partial", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-partial.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field partial", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial", pagination_label: "Form field partial", description: "UX richtlijnen voor Form field partial component", slug: "/form-field-partial", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field partial label", permalink: "/en/form-field-partial-label" }, next: { title: "Form field radio option", permalink: "/en/form-field-radio-option" } },
    p = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    d = { toc: c },
    s = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(s, (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "form-field-partial" }, "Form field partial"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Form field partial component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/179" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
