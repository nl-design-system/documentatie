"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9418],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => u });
   var i = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     t &&
      (i = i.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, i);
    }
    return n;
   }
   function l(e) {
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
   function a(e, t) {
    if (null == e) return {};
    var n,
     i,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       i,
       r = {},
       o = Object.keys(e);
      for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var s = i.createContext({}),
    c = function (e) {
     var t = i.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    d = function (e) {
     var t = c(e.components);
     return i.createElement(s.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return i.createElement(i.Fragment, {}, t);
     },
    },
    f = i.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      d = a(e, ["components", "mdxType", "originalType", "parentName"]),
      p = c(n),
      f = r,
      u = p["".concat(s, ".").concat(f)] || p[f] || m[f] || o;
     return n ? i.createElement(u, l(l({ ref: t }, d), {}, { components: n })) : i.createElement(u, l({ ref: t }, d));
    });
   function u(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var o = n.length,
      l = new Array(o);
     l[0] = f;
     var a = {};
     for (var s in t) hasOwnProperty.call(t, s) && (a[s] = t[s]);
     (a.originalType = e), (a[p] = "string" == typeof e ? e : r), (l[1] = a);
     for (var c = 2; c < o; c++) l[c] = n[c];
     return i.createElement.apply(null, l);
    }
    return i.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  86031: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => o, metadata: () => a, toc: () => c });
   var i = n(87462),
    r = (n(67294), n(3905));
   const o = { title: "Form field description", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field description", pagination_label: "Form field description", description: "UX richtlijnen voor Form field description component", slug: "/form-field-description", tags: ["Help Wanted"] },
    l = void 0,
    a = { unversionedId: "componenten/build/form-field-description", id: "componenten/build/form-field-description", title: "Form field description", description: "UX richtlijnen voor Form field description component", source: "@site/docs/componenten/build/form-field-description.mdx", sourceDirName: "componenten/build", slug: "/form-field-description", permalink: "/form-field-description", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-description.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field description", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field description", pagination_label: "Form field description", description: "UX richtlijnen voor Form field description component", slug: "/form-field-description", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field checkbox option", permalink: "/form-field-checkbox-option" }, next: { title: "Form field error message", permalink: "/form-field-error-message" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    d = { toc: c },
    p = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(p, (0, i.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "form-field-description" }, "Form field description"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-924" }, "Form field description Figma implementatie van NL Design System"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Form field description component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/174" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
