"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21021],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => u });
   var l = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     t &&
      (l = l.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, l);
    }
    return n;
   }
   function o(e) {
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
     l,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       l,
       r = {},
       i = Object.keys(e);
      for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var m = l.createContext({}),
    s = function (e) {
     var t = l.useContext(m),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    c = function (e) {
     var t = s(e.components);
     return l.createElement(m.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return l.createElement(l.Fragment, {}, t);
     },
    },
    f = l.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      m = e.parentName,
      c = a(e, ["components", "mdxType", "originalType", "parentName"]),
      d = s(n),
      f = r,
      u = d["".concat(m, ".").concat(f)] || d[f] || p[f] || i;
     return n ? l.createElement(u, o(o({ ref: t }, c), {}, { components: n })) : l.createElement(u, o({ ref: t }, c));
    });
   function u(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      o = new Array(i);
     o[0] = f;
     var a = {};
     for (var m in t) hasOwnProperty.call(t, m) && (a[m] = t[m]);
     (a.originalType = e), (a[d] = "string" == typeof e ? e : r), (o[1] = a);
     for (var s = 2; s < i; s++) o[s] = n[s];
     return l.createElement.apply(null, o);
    }
    return l.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  73942: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => m, contentTitle: () => o, default: () => p, frontMatter: () => i, metadata: () => a, toc: () => s });
   var l = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Form field label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field label", pagination_label: "Form field label", description: "UX richtlijnen voor Form field label component", slug: "/form-field-label", tags: ["Help Wanted"] },
    o = void 0,
    a = { unversionedId: "componenten/build/form-field-label", id: "componenten/build/form-field-label", title: "Form field label", description: "UX richtlijnen voor Form field label component", source: "@site/docs/componenten/build/form-field-label.mdx", sourceDirName: "componenten/build", slug: "/form-field-label", permalink: "/en/form-field-label", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-label.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field label", pagination_label: "Form field label", description: "UX richtlijnen voor Form field label component", slug: "/form-field-label", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field error message", permalink: "/en/form-field-error-message" }, next: { title: "Form field option label", permalink: "/en/form-field-option-label" } },
    m = {},
    s = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: s },
    d = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(d, (0, l.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "form-field-label" }, "Form field label"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-898" }, "Form field label Figma implementatie van NL Design System"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Form field label component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/177" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
