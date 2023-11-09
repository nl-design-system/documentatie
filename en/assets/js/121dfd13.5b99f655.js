"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64376],
 {
  3905: (e, t, s) => {
   s.d(t, { Zo: () => u, kt: () => p });
   var a = s(67294);
   function n(e, t, s) {
    return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = s), e;
   }
   function r(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      s.push.apply(s, a);
    }
    return s;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var s = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? r(Object(s), !0).forEach(function (t) {
         n(e, t, s[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
      : r(Object(s)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
        });
    }
    return e;
   }
   function i(e, t) {
    if (null == e) return {};
    var s,
     a,
     n = (function (e, t) {
      if (null == e) return {};
      var s,
       a,
       n = {},
       r = Object.keys(e);
      for (a = 0; a < r.length; a++) (s = r[a]), t.indexOf(s) >= 0 || (n[s] = e[s]);
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) (s = r[a]), t.indexOf(s) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]));
    }
    return n;
   }
   var o = a.createContext({}),
    c = function (e) {
     var t = a.useContext(o),
      s = t;
     return e && (s = "function" == typeof e ? e(t) : l(l({}, t), e)), s;
    },
    u = function (e) {
     var t = c(e.components);
     return a.createElement(o.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    _ = a.forwardRef(function (e, t) {
     var s = e.components,
      n = e.mdxType,
      r = e.originalType,
      o = e.parentName,
      u = i(e, ["components", "mdxType", "originalType", "parentName"]),
      m = c(s),
      _ = n,
      p = m["".concat(o, ".").concat(_)] || m[_] || d[_] || r;
     return s ? a.createElement(p, l(l({ ref: t }, u), {}, { components: s })) : a.createElement(p, l({ ref: t }, u));
    });
   function p(e, t) {
    var s = arguments,
     n = t && t.mdxType;
    if ("string" == typeof e || n) {
     var r = s.length,
      l = new Array(r);
     l[0] = _;
     var i = {};
     for (var o in t) hasOwnProperty.call(t, o) && (i[o] = t[o]);
     (i.originalType = e), (i[m] = "string" == typeof e ? e : n), (l[1] = i);
     for (var c = 2; c < r; c++) l[c] = s[c];
     return a.createElement.apply(null, l);
    }
    return a.createElement.apply(null, s);
   }
   _.displayName = "MDXCreateElement";
  },
  44221: (e, t, s) => {
   s.d(t, { P: () => c });
   var a = s(67294),
    n = s(86010);
   const r = { "status-visual__status": "status-visual__status_WLZ4", "status-visual__connector": "status-visual__connector_s1s2", "status-visual__status--help-wanted": "status-visual__status--help-wanted_YObc", "status-visual__status--community": "status-visual__status--community_bL0y", "status-visual__status--unstable": "status-visual__status--unstable_ztb4", "status-visual__status--stable": "status-visual__status--stable_y8aj", "status-visual__title": "status-visual__title_JRta", "status-visual__description": "status-visual__description_tQIN" };
   var l = s(87462);
   const i = "icon_fo5I",
    o = (e) => {
     let { className: t, ...s } = e;
     return a.createElement("svg", (0, l.Z)({ width: "14", height: "16", viewBox: "0 0 14 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: (0, n.Z)(i, t) }, s), a.createElement("path", { d: "M7 0C7.55228 0 8 0.447715 8 1L7.73285 14.3196L7.73487 14.3218L8 1V12.5858L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L7.70731 15.7069L7.70498 15.7092C7.60959 15.8041 7.49984 15.8757 7.38275 15.9241C7.2675 15.9719 7.14137 15.9988 7.00911 16L7.003 16L7 16L6.997 16L6.99235 16C6.85955 15.999 6.7329 15.9721 6.61722 15.9241C6.50195 15.8764 6.3938 15.8063 6.29945 15.7136L6.29289 15.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289C0.683417 7.90237 1.31658 7.90237 1.70711 8.29289L6 12.5858V1C6 0.447715 6.44772 0 7 0Z" }));
    },
    c = () => a.createElement("dl", { className: (0, n.Z)(r["status-visual"]) }, a.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--help-wanted"]) }, a.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Help Wanted"), a.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "Klaar om van de backlog opgepakt te worden")), a.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--community"]) }, a.createElement(o, { className: (0, n.Z)(r["status-visual__connector"]) }), a.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Community"), a.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "Door de community gebouwd volgens NLDS richtlijnen")), a.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--unstable"]) }, a.createElement(o, { className: (0, n.Z)(r["status-visual__connector"]) }), a.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Candidate"), a.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "NLDS component, maar is nog in ontwikkeling")), a.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--stable"]) }, a.createElement(o, { className: (0, n.Z)(r["status-visual__connector"]) }), a.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Hall of Fame"), a.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "NLDS component volgens onze Definition of Done")));
  },
  99725: (e, t, s) => {
   s.r(t), s.d(t, { assets: () => c, contentTitle: () => i, default: () => _, frontMatter: () => l, metadata: () => o, toc: () => u });
   var a = s(87462),
    n = (s(67294), s(3905)),
    r = s(44221);
   const l = { title: "Estafettemodel voor richtlijnen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Estafettemodel", sidebar_position: 1, pagination_label: "Estafettemodel", description: "Estafettemodel voor richtlijnen", keywords: ["richtlijnen", "design system", "estafettemodel"] },
    i = "Estafettemodel",
    o = { unversionedId: "richtlijnen/estafettemodel", id: "richtlijnen/estafettemodel", title: "Estafettemodel voor richtlijnen", description: "Estafettemodel voor richtlijnen", source: "@site/docs/richtlijnen/estafettemodel.mdx", sourceDirName: "richtlijnen", slug: "/richtlijnen/estafettemodel", permalink: "/en/richtlijnen/estafettemodel", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/estafettemodel.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Estafettemodel voor richtlijnen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Estafettemodel", sidebar_position: 1, pagination_label: "Estafettemodel", description: "Estafettemodel voor richtlijnen", keywords: ["richtlijnen", "design system", "estafettemodel"] } },
    c = {},
    u = [],
    m = { toc: u },
    d = "wrapper";
   function _(e) {
    let { components: t, ...s } = e;
    return (0, n.kt)(d, (0, a.Z)({}, m, s, { components: t, mdxType: "MDXLayout" }), (0, n.kt)("h1", { id: "estafettemodel" }, "Estafettemodel"), (0, n.kt)("p", null, "De richtlijnen van NL Design System worden met een ", (0, n.kt)("a", { parentName: "p", href: "'/meedoen/estafettemodel'" }, "estafette aanpak"), " gemaakt. Daarom kan een richtlijn een van de volgende statussen hebben:"), (0, n.kt)(r.P, { mdxType: "StatusVisual" }));
   }
   _.isMDXComponent = !0;
  },
 },
]);
