"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66627],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => u });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
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
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var m = r.createContext({}),
    s = function (e) {
     var t = r.useContext(m),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    d = function (e) {
     var t = s(e.components);
     return r.createElement(m.Provider, { value: t }, e.children);
    },
    c = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    f = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      o = e.originalType,
      m = e.parentName,
      d = a(e, ["components", "mdxType", "originalType", "parentName"]),
      c = s(n),
      f = i,
      u = c["".concat(m, ".").concat(f)] || c[f] || p[f] || o;
     return n ? r.createElement(u, l(l({ ref: t }, d), {}, { components: n })) : r.createElement(u, l({ ref: t }, d));
    });
   function u(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var o = n.length,
      l = new Array(o);
     l[0] = f;
     var a = {};
     for (var m in t) hasOwnProperty.call(t, m) && (a[m] = t[m]);
     (a.originalType = e), (a[c] = "string" == typeof e ? e : i), (l[1] = a);
     for (var s = 2; s < o; s++) l[s] = n[s];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  69892: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => m, contentTitle: () => l, default: () => p, frontMatter: () => o, metadata: () => a, toc: () => s });
   var r = n(87462),
    i = (n(67294), n(3905));
   const o = { title: "Form field", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field", pagination_label: "Form field", description: "UX richtlijnen voor Form field component", slug: "/form-field", tags: ["Help Wanted"] },
    l = void 0,
    a = { unversionedId: "componenten/build/form-field", id: "componenten/build/form-field", title: "Form field", description: "UX richtlijnen voor Form field component", source: "@site/docs/componenten/build/form-field.mdx", sourceDirName: "componenten/build", slug: "/form-field", permalink: "/form-field", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field", pagination_label: "Form field", description: "UX richtlijnen voor Form field component", slug: "/form-field", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field radio option", permalink: "/form-field-radio-option" }, next: { title: "Heading 1", permalink: "/heading-1" } },
    m = {},
    s = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    d = { toc: s },
    c = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(c, (0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "form-field" }, "Form field"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=958-1925" }, "Form field Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Form field component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/176" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
