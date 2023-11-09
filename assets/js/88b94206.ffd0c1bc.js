"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [19325],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => u, kt: () => f });
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
   var p = i.createContext({}),
    c = function (e) {
     var t = i.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    u = function (e) {
     var t = c(e.components);
     return i.createElement(p.Provider, { value: t }, e.children);
    },
    s = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return i.createElement(i.Fragment, {}, t);
     },
    },
    d = i.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      o = e.originalType,
      p = e.parentName,
      u = a(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(n),
      d = r,
      f = s["".concat(p, ".").concat(d)] || s[d] || m[d] || o;
     return n ? i.createElement(f, l(l({ ref: t }, u), {}, { components: n })) : i.createElement(f, l({ ref: t }, u));
    });
   function f(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var o = n.length,
      l = new Array(o);
     l[0] = d;
     var a = {};
     for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
     (a.originalType = e), (a[s] = "string" == typeof e ? e : r), (l[1] = a);
     for (var c = 2; c < o; c++) l[c] = n[c];
     return i.createElement.apply(null, l);
    }
    return i.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  12632: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => l, default: () => m, frontMatter: () => o, metadata: () => a, toc: () => c });
   var i = n(87462),
    r = (n(67294), n(3905));
   const o = { title: "File input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "File input", pagination_label: "File input", description: "UX richtlijnen voor File input component", slug: "/file-input", tags: ["Help Wanted"] },
    l = void 0,
    a = { unversionedId: "componenten/build/file-input", id: "componenten/build/file-input", title: "File input", description: "UX richtlijnen voor File input component", source: "@site/docs/componenten/build/file-input.mdx", sourceDirName: "componenten/build", slug: "/file-input", permalink: "/file-input", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/file-input.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "File input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "File input", pagination_label: "File input", description: "UX richtlijnen voor File input component", slug: "/file-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Figure", permalink: "/figure" }, next: { title: "Form field checkbox option", permalink: "/form-field-checkbox-option" } },
    p = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    u = { toc: c },
    s = "wrapper";
   function m(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(s, (0, i.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "file-input" }, "File input"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=10817%3A61351" }, "File input Figma implementatie van Gemeente Den Haag"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De File input component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/72" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
