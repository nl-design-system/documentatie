"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1328],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => b });
   var o = n(67294);
   function l(e, t, n) {
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
   function r(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         l(e, t, n[t]);
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
     l = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       l = {},
       i = Object.keys(e);
      for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
   }
   var p = o.createContext({}),
    m = function (e) {
     var t = o.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
    },
    s = function (e) {
     var t = m(e.components);
     return o.createElement(p.Provider, { value: t }, e.children);
    },
    c = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    f = o.forwardRef(function (e, t) {
     var n = e.components,
      l = e.mdxType,
      i = e.originalType,
      p = e.parentName,
      s = a(e, ["components", "mdxType", "originalType", "parentName"]),
      c = m(n),
      f = l,
      b = c["".concat(p, ".").concat(f)] || c[f] || d[f] || i;
     return n ? o.createElement(b, r(r({ ref: t }, s), {}, { components: n })) : o.createElement(b, r({ ref: t }, s));
    });
   function b(e, t) {
    var n = arguments,
     l = t && t.mdxType;
    if ("string" == typeof e || l) {
     var i = n.length,
      r = new Array(i);
     r[0] = f;
     var a = {};
     for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
     (a.originalType = e), (a[c] = "string" == typeof e ? e : l), (r[1] = a);
     for (var m = 2; m < i; m++) r[m] = n[m];
     return o.createElement.apply(null, r);
    }
    return o.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  12108: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => r, default: () => d, frontMatter: () => i, metadata: () => a, toc: () => m });
   var o = n(87462),
    l = (n(67294), n(3905));
   const i = { title: "Form field option label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field option label", pagination_label: "Form field option label", description: "UX richtlijnen voor Form field option label component", slug: "/form-field-option-label", tags: ["Help Wanted"] },
    r = void 0,
    a = { unversionedId: "componenten/build/form-field-option-label", id: "componenten/build/form-field-option-label", title: "Form field option label", description: "UX richtlijnen voor Form field option label component", source: "@site/docs/componenten/build/form-field-option-label.mdx", sourceDirName: "componenten/build", slug: "/form-field-option-label", permalink: "/en/form-field-option-label", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-option-label.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field option label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field option label", pagination_label: "Form field option label", description: "UX richtlijnen voor Form field option label component", slug: "/form-field-option-label", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field label", permalink: "/en/form-field-label" }, next: { title: "Form field partial label", permalink: "/en/form-field-partial-label" } },
    p = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    s = { toc: m },
    c = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, l.kt)(c, (0, o.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, l.kt)("h1", { id: "form-field-option-label" }, "Form field option label"), (0, l.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, l.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, l.kt)("h3", { id: "figma" }, "Figma"), (0, l.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-3472" }, "Form field option label Figma implementatie van NL Design System"))), (0, l.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, l.kt)("p", null, "De Form field option label component staat bij NL Design System in de ", (0, l.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/171" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
