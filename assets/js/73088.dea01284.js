(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [73088],
 {
  3905: (e, t, n) => {
   "use strict";
   n.d(t, { Zo: () => u, kt: () => f });
   var o = n(67294);
   function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function r(e, t) {
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
      ? r(Object(n), !0).forEach(function (t) {
         a(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function c(e, t) {
    if (null == e) return {};
    var n,
     o,
     a = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       a = {},
       r = Object.keys(e);
      for (o = 0; o < r.length; o++) (n = r[o]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (o = 0; o < r.length; o++) (n = r[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
   }
   var i = o.createContext({}),
    s = function (e) {
     var t = o.useContext(i),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    u = function (e) {
     var t = s(e.components);
     return o.createElement(i.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    p = o.forwardRef(function (e, t) {
     var n = e.components,
      a = e.mdxType,
      r = e.originalType,
      i = e.parentName,
      u = c(e, ["components", "mdxType", "originalType", "parentName"]),
      m = s(n),
      p = a,
      f = m["".concat(i, ".").concat(p)] || m[p] || d[p] || r;
     return n ? o.createElement(f, l(l({ ref: t }, u), {}, { components: n })) : o.createElement(f, l({ ref: t }, u));
    });
   function f(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var r = n.length,
      l = new Array(r);
     l[0] = p;
     var c = {};
     for (var i in t) hasOwnProperty.call(t, i) && (c[i] = t[i]);
     (c.originalType = e), (c[m] = "string" == typeof e ? e : a), (l[1] = c);
     for (var s = 2; s < r; s++) l[s] = n[s];
     return o.createElement.apply(null, l);
    }
    return o.createElement.apply(null, n);
   }
   p.displayName = "MDXCreateElement";
  },
  11875: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => o });
   const o = () => null;
  },
  23612: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => m });
   var o = n(67294),
    a = n(86010),
    r = n(35281),
    l = n(95999);
   const c = { admonition: "admonition_LlT9", admonitionHeading: "admonitionHeading_tbUL", admonitionIcon: "admonitionIcon_kALy", admonitionContent: "admonitionContent_S0QG" };
   const i = {
     note: {
      infimaClassName: "secondary",
      iconComponent: function () {
       return o.createElement("svg", { viewBox: "0 0 14 16" }, o.createElement("path", { fillRule: "evenodd", d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z" }));
      },
      label: o.createElement(l.Z, { id: "theme.admonition.note", description: "The default label used for the Note admonition (:::note)" }, "note"),
     },
     tip: {
      infimaClassName: "success",
      iconComponent: function () {
       return o.createElement("svg", { viewBox: "0 0 12 16" }, o.createElement("path", { fillRule: "evenodd", d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z" }));
      },
      label: o.createElement(l.Z, { id: "theme.admonition.tip", description: "The default label used for the Tip admonition (:::tip)" }, "tip"),
     },
     danger: {
      infimaClassName: "danger",
      iconComponent: function () {
       return o.createElement("svg", { viewBox: "0 0 12 16" }, o.createElement("path", { fillRule: "evenodd", d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z" }));
      },
      label: o.createElement(l.Z, { id: "theme.admonition.danger", description: "The default label used for the Danger admonition (:::danger)" }, "danger"),
     },
     info: {
      infimaClassName: "info",
      iconComponent: function () {
       return o.createElement("svg", { viewBox: "0 0 14 16" }, o.createElement("path", { fillRule: "evenodd", d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" }));
      },
      label: o.createElement(l.Z, { id: "theme.admonition.info", description: "The default label used for the Info admonition (:::info)" }, "info"),
     },
     caution: {
      infimaClassName: "warning",
      iconComponent: function () {
       return o.createElement("svg", { viewBox: "0 0 16 16" }, o.createElement("path", { fillRule: "evenodd", d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" }));
      },
      label: o.createElement(l.Z, { id: "theme.admonition.caution", description: "The default label used for the Caution admonition (:::caution)" }, "caution"),
     },
    },
    s = { secondary: "note", important: "info", success: "tip", warning: "danger" };
   function u(e) {
    const { mdxAdmonitionTitle: t, rest: n } = (function (e) {
     const t = o.Children.toArray(e),
      n = t.find((e) => {
       var t;
       return o.isValidElement(e) && "mdxAdmonitionTitle" === (null == (t = e.props) ? void 0 : t.mdxType);
      }),
      a = o.createElement(
       o.Fragment,
       null,
       t.filter((e) => e !== n)
      );
     return { mdxAdmonitionTitle: n, rest: a };
    })(e.children);
    return { ...e, title: e.title ?? t, children: n };
   }
   function m(e) {
    const { children: t, type: n, title: l, icon: m } = u(e),
     d = (function (e) {
      const t = s[e] ?? e,
       n = i[t];
      return n || (console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`), i.info);
     })(n),
     p = l ?? d.label,
     { iconComponent: f } = d,
     g = m ?? o.createElement(f, null);
    return o.createElement("div", { className: (0, a.Z)(r.k.common.admonition, r.k.common.admonitionType(e.type), "alert", `alert--${d.infimaClassName}`, c.admonition) }, o.createElement("div", { className: c.admonitionHeading }, o.createElement("span", { className: c.admonitionIcon }, g), p), o.createElement("div", { className: c.admonitionContent }, t));
   }
  },
  74464: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => F });
   var o = n(87462),
    a = n(67294),
    r = n(72389),
    l = n(86010),
    c = n(92949),
    i = n(86668);
   function s() {
    const { prism: e } = (0, i.L)(),
     { colorMode: t } = (0, c.I)(),
     n = e.theme,
     o = e.darkTheme || n;
    return "dark" === t ? o : n;
   }
   var u = n(35281),
    m = n(87594),
    d = n.n(m);
   const p = /title=(?<quote>["'])(?<title>.*?)\1/,
    f = /\{(?<range>[\d,-]+)\}/,
    g = { js: { start: "\\/\\/", end: "" }, jsBlock: { start: "\\/\\*", end: "\\*\\/" }, jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" }, bash: { start: "#", end: "" }, html: { start: "\x3c!--", end: "--\x3e" } };
   function h(e, t) {
    const n = e
     .map((e) => {
      const { start: n, end: o } = g[e];
      return `(?:${n}\\s*(${t
       .flatMap((e) => {
        var t, n;
        return [e.line, null == (t = e.block) ? void 0 : t.start, null == (n = e.block) ? void 0 : n.end].filter(Boolean);
       })
       .join("|")})\\s*${o})`;
     })
     .join("|");
    return new RegExp(`^\\s*(?:${n})\\s*$`);
   }
   function v(e, t) {
    let n = e.replace(/\n$/, "");
    const { language: o, magicComments: a, metastring: r } = t;
    if (r && f.test(r)) {
     const e = r.match(f).groups.range;
     if (0 === a.length) throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
     const t = a[0].className,
      o = d()(e)
       .filter((e) => e > 0)
       .map((e) => [e - 1, [t]]);
     return { lineClassNames: Object.fromEntries(o), code: n };
    }
    if (void 0 === o) return { lineClassNames: {}, code: n };
    const l = (function (e, t) {
      switch (e) {
       case "js":
       case "javascript":
       case "ts":
       case "typescript":
        return h(["js", "jsBlock"], t);
       case "jsx":
       case "tsx":
        return h(["js", "jsBlock", "jsx"], t);
       case "html":
        return h(["js", "jsBlock", "html"], t);
       case "python":
       case "py":
       case "bash":
        return h(["bash"], t);
       case "markdown":
       case "md":
        return h(["html", "jsx", "bash"], t);
       default:
        return h(Object.keys(g), t);
      }
     })(o, a),
     c = n.split("\n"),
     i = Object.fromEntries(a.map((e) => [e.className, { start: 0, range: "" }])),
     s = Object.fromEntries(
      a
       .filter((e) => e.line)
       .map((e) => {
        let { className: t, line: n } = e;
        return [n, t];
       })
     ),
     u = Object.fromEntries(
      a
       .filter((e) => e.block)
       .map((e) => {
        let { className: t, block: n } = e;
        return [n.start, t];
       })
     ),
     m = Object.fromEntries(
      a
       .filter((e) => e.block)
       .map((e) => {
        let { className: t, block: n } = e;
        return [n.end, t];
       })
     );
    for (let d = 0; d < c.length; ) {
     const e = c[d].match(l);
     if (!e) {
      d += 1;
      continue;
     }
     const t = e.slice(1).find((e) => void 0 !== e);
     s[t] ? (i[s[t]].range += `${d},`) : u[t] ? (i[u[t]].start = d) : m[t] && (i[m[t]].range += `${i[m[t]].start}-${d - 1},`), c.splice(d, 1);
    }
    n = c.join("\n");
    const p = {};
    return (
     Object.entries(i).forEach((e) => {
      let [t, { range: n }] = e;
      d()(n).forEach((e) => {
       (p[e] ??= []), p[e].push(t);
      });
     }),
     { lineClassNames: p, code: n }
    );
   }
   const b = { codeBlockContainer: "codeBlockContainer_Ckt0" };
   function y(e) {
    let { as: t, ...n } = e;
    const r = (function (e) {
     const t = { color: "--prism-color", backgroundColor: "--prism-background-color" },
      n = {};
     return (
      Object.entries(e.plain).forEach((e) => {
       let [o, a] = e;
       const r = t[o];
       r && "string" == typeof a && (n[r] = a);
      }),
      n
     );
    })(s());
    return a.createElement(t, (0, o.Z)({}, n, { style: r, className: (0, l.Z)(n.className, b.codeBlockContainer, u.k.common.codeBlock) }));
   }
   const E = { codeBlockContent: "codeBlockContent_biex", codeBlockTitle: "codeBlockTitle_Ktv7", codeBlock: "codeBlock_bY9V", codeBlockStandalone: "codeBlockStandalone_MEMb", codeBlockLines: "codeBlockLines_e6Vv", codeBlockLinesWithNumbering: "codeBlockLinesWithNumbering_o6Pm", buttonGroup: "buttonGroup__atx" };
   function k(e) {
    let { children: t, className: n } = e;
    return a.createElement(y, { as: "pre", tabIndex: 0, className: (0, l.Z)(E.codeBlockStandalone, "thin-scrollbar", n) }, a.createElement("code", { className: E.codeBlockLines }, t));
   }
   var N = n(902);
   const C = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
   function L(e, t) {
    const [n, o] = (0, a.useState)(),
     r = (0, a.useCallback)(() => {
      var t;
      o(null == (t = e.current) ? void 0 : t.closest("[role=tabpanel][hidden]"));
     }, [e, o]);
    (0, a.useEffect)(() => {
     r();
    }, [r]),
     (function (e, t, n) {
      void 0 === n && (n = C);
      const o = (0, N.zX)(t),
       r = (0, N.Ql)(n);
      (0, a.useEffect)(() => {
       const t = new MutationObserver(o);
       return e && t.observe(e, r), () => t.disconnect();
      }, [e, o, r]);
     })(
      n,
      (e) => {
       e.forEach((e) => {
        "attributes" === e.type && "hidden" === e.attributeName && (t(), r());
       });
      },
      { attributes: !0, characterData: !1, childList: !1, subtree: !1 }
     );
   }
   const w = {
    plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
    styles: [
     { types: ["comment", "prolog", "doctype", "cdata", "punctuation"], style: { color: "#6c6783" } },
     { types: ["namespace"], style: { opacity: 0.7 } },
     { types: ["tag", "operator", "number"], style: { color: "#e09142" } },
     { types: ["property", "function"], style: { color: "#9a86fd" } },
     { types: ["tag-id", "selector", "atrule-id"], style: { color: "#eeebff" } },
     { types: ["attr-name"], style: { color: "#c4b9fe" } },
     { types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"], style: { color: "#ffcc99" } },
     { types: ["deleted"], style: { textDecorationLine: "line-through" } },
     { types: ["inserted"], style: { textDecorationLine: "underline" } },
     { types: ["italic"], style: { fontStyle: "italic" } },
     { types: ["important", "bold"], style: { fontWeight: "bold" } },
     { types: ["important"], style: { color: "#c4b9fe" } },
    ],
   };
   var B = { Prism: n(11205).Z, theme: w };
   function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function x() {
    return (
     (x =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
       }
       return e;
      }),
     x.apply(this, arguments)
    );
   }
   var O = /\r\n|\r|\n/,
    T = function (e) {
     0 === e.length ? e.push({ types: ["plain"], content: "\n", empty: !0 }) : 1 === e.length && "" === e[0].content && ((e[0].content = "\n"), (e[0].empty = !0));
    },
    Z = function (e, t) {
     var n = e.length;
     return n > 0 && e[n - 1] === t ? e : e.concat(t);
    };
   function j(e, t) {
    var n = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && -1 === t.indexOf(o) && (n[o] = e[o]);
    return n;
   }
   var H = (function (e) {
    function t() {
     for (var t = this, n = [], o = arguments.length; o--; ) n[o] = arguments[o];
     e.apply(this, n),
      _(this, "getThemeDict", function (e) {
       if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage) return t.themeDict;
       (t.prevTheme = e.theme), (t.prevLanguage = e.language);
       var n = e.theme
        ? (function (e, t) {
           var n = e.plain,
            o = Object.create(null),
            a = e.styles.reduce(function (e, n) {
             var o = n.languages,
              a = n.style;
             return (
              (o && !o.includes(t)) ||
               n.types.forEach(function (t) {
                var n = x({}, e[t], a);
                e[t] = n;
               }),
              e
             );
            }, o);
           return (a.root = n), (a.plain = x({}, n, { backgroundColor: null })), a;
          })(e.theme, e.language)
        : void 0;
       return (t.themeDict = n);
      }),
      _(this, "getLineProps", function (e) {
       var n = e.key,
        o = e.className,
        a = e.style,
        r = x({}, j(e, ["key", "className", "style", "line"]), { className: "token-line", style: void 0, key: void 0 }),
        l = t.getThemeDict(t.props);
       return void 0 !== l && (r.style = l.plain), void 0 !== a && (r.style = void 0 !== r.style ? x({}, r.style, a) : a), void 0 !== n && (r.key = n), o && (r.className += " " + o), r;
      }),
      _(this, "getStyleForToken", function (e) {
       var n = e.types,
        o = e.empty,
        a = n.length,
        r = t.getThemeDict(t.props);
       if (void 0 !== r) {
        if (1 === a && "plain" === n[0]) return o ? { display: "inline-block" } : void 0;
        if (1 === a && !o) return r[n[0]];
        var l = o ? { display: "inline-block" } : {},
         c = n.map(function (e) {
          return r[e];
         });
        return Object.assign.apply(Object, [l].concat(c));
       }
      }),
      _(this, "getTokenProps", function (e) {
       var n = e.key,
        o = e.className,
        a = e.style,
        r = e.token,
        l = x({}, j(e, ["key", "className", "style", "token"]), { className: "token " + r.types.join(" "), children: r.content, style: t.getStyleForToken(r), key: void 0 });
       return void 0 !== a && (l.style = void 0 !== l.style ? x({}, l.style, a) : a), void 0 !== n && (l.key = n), o && (l.className += " " + o), l;
      }),
      _(this, "tokenize", function (e, t, n, o) {
       var a = { code: t, grammar: n, language: o, tokens: [] };
       e.hooks.run("before-tokenize", a);
       var r = (a.tokens = e.tokenize(a.code, a.grammar, a.language));
       return e.hooks.run("after-tokenize", a), r;
      });
    }
    return (
     e && (t.__proto__ = e),
     (t.prototype = Object.create(e && e.prototype)),
     (t.prototype.constructor = t),
     (t.prototype.render = function () {
      var e = this.props,
       t = e.Prism,
       n = e.language,
       o = e.code,
       a = e.children,
       r = this.getThemeDict(this.props),
       l = t.languages[n];
      return a({
       tokens: (function (e) {
        for (var t = [[]], n = [e], o = [0], a = [e.length], r = 0, l = 0, c = [], i = [c]; l > -1; ) {
         for (; (r = o[l]++) < a[l]; ) {
          var s = void 0,
           u = t[l],
           m = n[l][r];
          if (("string" == typeof m ? ((u = l > 0 ? u : ["plain"]), (s = m)) : ((u = Z(u, m.type)), m.alias && (u = Z(u, m.alias)), (s = m.content)), "string" == typeof s)) {
           var d = s.split(O),
            p = d.length;
           c.push({ types: u, content: d[0] });
           for (var f = 1; f < p; f++) T(c), i.push((c = [])), c.push({ types: u, content: d[f] });
          } else l++, t.push(u), n.push(s), o.push(0), a.push(s.length);
         }
         l--, t.pop(), n.pop(), o.pop(), a.pop();
        }
        return T(c), i;
       })(void 0 !== l ? this.tokenize(t, o, l, n) : [o]),
       className: "prism-code language-" + n,
       style: void 0 !== r ? r.root : {},
       getLineProps: this.getLineProps,
       getTokenProps: this.getTokenProps,
      });
     }),
     t
    );
   })(a.Component);
   const S = H,
    I = { codeLine: "codeLine_lJS_", codeLineNumber: "codeLineNumber_Tfdd", codeLineContent: "codeLineContent_feaV" };
   function P(e) {
    let { line: t, classNames: n, showLineNumbers: r, getLineProps: c, getTokenProps: i } = e;
    1 === t.length && "\n" === t[0].content && (t[0].content = "");
    const s = c({ line: t, className: (0, l.Z)(n, r && I.codeLine) }),
     u = t.map((e, t) => a.createElement("span", (0, o.Z)({ key: t }, i({ token: e, key: t }))));
    return a.createElement("span", s, r ? a.createElement(a.Fragment, null, a.createElement("span", { className: I.codeLineNumber }), a.createElement("span", { className: I.codeLineContent }, u)) : u, a.createElement("br", null));
   }
   var z = n(95999);
   function A(e) {
    return a.createElement("svg", (0, o.Z)({ viewBox: "0 0 24 24" }, e), a.createElement("path", { fill: "currentColor", d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }));
   }
   function M(e) {
    return a.createElement("svg", (0, o.Z)({ viewBox: "0 0 24 24" }, e), a.createElement("path", { fill: "currentColor", d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }));
   }
   const R = { copyButtonCopied: "copyButtonCopied_obH4", copyButtonIcons: "copyButtonIcons_eSgA", copyButtonIcon: "copyButtonIcon_y97N", copyButtonSuccessIcon: "copyButtonSuccessIcon_LjdS" };
   function D(e) {
    let { code: t, className: n } = e;
    const [o, r] = (0, a.useState)(!1),
     c = (0, a.useRef)(void 0),
     i = (0, a.useCallback)(() => {
      !(function (e, t) {
       let { target: n = document.body } = void 0 === t ? {} : t;
       if ("string" != typeof e) throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);
       const o = document.createElement("textarea"),
        a = document.activeElement;
       (o.value = e), o.setAttribute("readonly", ""), (o.style.contain = "strict"), (o.style.position = "absolute"), (o.style.left = "-9999px"), (o.style.fontSize = "12pt");
       const r = document.getSelection(),
        l = r.rangeCount > 0 && r.getRangeAt(0);
       n.append(o), o.select(), (o.selectionStart = 0), (o.selectionEnd = e.length);
       let c = !1;
       try {
        c = document.execCommand("copy");
       } catch {}
       o.remove(), l && (r.removeAllRanges(), r.addRange(l)), a && a.focus();
      })(t),
       r(!0),
       (c.current = window.setTimeout(() => {
        r(!1);
       }, 1e3));
     }, [t]);
    return (0, a.useEffect)(() => () => window.clearTimeout(c.current), []), a.createElement("button", { type: "button", "aria-label": o ? (0, z.I)({ id: "theme.CodeBlock.copied", message: "Copied", description: "The copied button label on code blocks" }) : (0, z.I)({ id: "theme.CodeBlock.copyButtonAriaLabel", message: "Copy code to clipboard", description: "The ARIA label for copy code blocks button" }), title: (0, z.I)({ id: "theme.CodeBlock.copy", message: "Copy", description: "The copy button label on code blocks" }), className: (0, l.Z)("clean-btn", n, R.copyButton, o && R.copyButtonCopied), onClick: i }, a.createElement("span", { className: R.copyButtonIcons, "aria-hidden": "true" }, a.createElement(A, { className: R.copyButtonIcon }), a.createElement(M, { className: R.copyButtonSuccessIcon })));
   }
   function $(e) {
    return a.createElement("svg", (0, o.Z)({ viewBox: "0 0 24 24" }, e), a.createElement("path", { fill: "currentColor", d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" }));
   }
   const V = { wordWrapButtonIcon: "wordWrapButtonIcon_Bwma", wordWrapButtonEnabled: "wordWrapButtonEnabled_EoeP" };
   function W(e) {
    let { className: t, onClick: n, isEnabled: o } = e;
    const r = (0, z.I)({ id: "theme.CodeBlock.wordWrapToggle", message: "Toggle word wrap", description: "The title attribute for toggle word wrapping button of code block lines" });
    return a.createElement("button", { type: "button", onClick: n, className: (0, l.Z)("clean-btn", t, o && V.wordWrapButtonEnabled), "aria-label": r, title: r }, a.createElement($, { className: V.wordWrapButtonIcon, "aria-hidden": "true" }));
   }
   function q(e) {
    let { children: t, className: n = "", metastring: r, title: c, showLineNumbers: u, language: m } = e;
    const {
      prism: { defaultLanguage: d, magicComments: f },
     } = (0, i.L)(),
     g =
      m ??
      (function (e) {
       const t = e.split(" ").find((e) => e.startsWith("language-"));
       return null == t ? void 0 : t.replace(/language-/, "");
      })(n) ??
      d,
     h = s(),
     b = (function () {
      const [e, t] = (0, a.useState)(!1),
       [n, o] = (0, a.useState)(!1),
       r = (0, a.useRef)(null),
       l = (0, a.useCallback)(() => {
        const n = r.current.querySelector("code");
        e ? n.removeAttribute("style") : ((n.style.whiteSpace = "pre-wrap"), (n.style.overflowWrap = "anywhere")), t((e) => !e);
       }, [r, e]),
       c = (0, a.useCallback)(() => {
        const { scrollWidth: e, clientWidth: t } = r.current,
         n = e > t || r.current.querySelector("code").hasAttribute("style");
        o(n);
       }, [r]);
      return (
       L(r, c),
       (0, a.useEffect)(() => {
        c();
       }, [e, c]),
       (0, a.useEffect)(
        () => (
         window.addEventListener("resize", c, { passive: !0 }),
         () => {
          window.removeEventListener("resize", c);
         }
        ),
        [c]
       ),
       { codeBlockRef: r, isEnabled: e, isCodeScrollable: n, toggle: l }
      );
     })(),
     k =
      (function (e) {
       var t;
       return (null == e || null == (t = e.match(p)) ? void 0 : t.groups.title) ?? "";
      })(r) || c,
     { lineClassNames: N, code: C } = v(t, { metastring: r, language: g, magicComments: f }),
     w =
      u ??
      (function (e) {
       return Boolean(null == e ? void 0 : e.includes("showLineNumbers"));
      })(r);
    return a.createElement(
     y,
     { as: "div", className: (0, l.Z)(n, g && !n.includes(`language-${g}`) && `language-${g}`) },
     k && a.createElement("div", { className: E.codeBlockTitle }, k),
     a.createElement(
      "div",
      { className: E.codeBlockContent },
      a.createElement(S, (0, o.Z)({}, B, { theme: h, code: C, language: g ?? "text" }), (e) => {
       let { className: t, tokens: n, getLineProps: o, getTokenProps: r } = e;
       return a.createElement(
        "pre",
        { tabIndex: 0, ref: b.codeBlockRef, className: (0, l.Z)(t, E.codeBlock, "thin-scrollbar") },
        a.createElement(
         "code",
         { className: (0, l.Z)(E.codeBlockLines, w && E.codeBlockLinesWithNumbering) },
         n.map((e, t) => a.createElement(P, { key: t, line: e, getLineProps: o, getTokenProps: r, classNames: N[t], showLineNumbers: w }))
        )
       );
      }),
      a.createElement("div", { className: E.buttonGroup }, (b.isEnabled || b.isCodeScrollable) && a.createElement(W, { className: E.codeButton, onClick: () => b.toggle(), isEnabled: b.isEnabled }), a.createElement(D, { className: E.codeButton, code: C }))
     )
    );
   }
   function F(e) {
    let { children: t, ...n } = e;
    const l = (0, r.Z)(),
     c = (function (e) {
      return a.Children.toArray(e).some((e) => (0, a.isValidElement)(e)) ? e : Array.isArray(e) ? e.join("") : e;
     })(t),
     i = "string" == typeof c ? q : k;
    return a.createElement(i, (0, o.Z)({ key: String(l) }, n), c);
   }
  },
  34673: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => f });
   var o = n(87462),
    a = n(67294),
    r = n(86010),
    l = n(72389),
    c = n(47186);
   const i = { details: "details_lb9f", isBrowser: "isBrowser_bmU9", collapsibleContent: "collapsibleContent_i85q" };
   function s(e) {
    return !!e && ("SUMMARY" === e.tagName || s(e.parentElement));
   }
   function u(e, t) {
    return !!e && (e === t || u(e.parentElement, t));
   }
   function m(e) {
    let { summary: t, children: n, ...m } = e;
    const d = (0, l.Z)(),
     p = (0, a.useRef)(null),
     { collapsed: f, setCollapsed: g } = (0, c.u)({ initialState: !m.open }),
     [h, v] = (0, a.useState)(m.open),
     b = a.isValidElement(t) ? t : a.createElement("summary", null, t ?? "Details");
    return a.createElement(
     "details",
     (0, o.Z)({}, m, {
      ref: p,
      open: h,
      "data-collapsed": f,
      className: (0, r.Z)(i.details, d && i.isBrowser, m.className),
      onMouseDown: (e) => {
       s(e.target) && e.detail > 1 && e.preventDefault();
      },
      onClick: (e) => {
       e.stopPropagation();
       const t = e.target;
       s(t) && u(t, p.current) && (e.preventDefault(), f ? (g(!1), v(!0)) : g(!0));
      },
     }),
     b,
     a.createElement(
      c.z,
      {
       lazy: !1,
       collapsed: f,
       disableSSRStyle: !0,
       onCollapseTransitionEnd: (e) => {
        g(e), v(!e);
       },
      },
      a.createElement("div", { className: i.collapsibleContent }, n)
     )
    );
   }
   const d = { details: "details_b_Ee" },
    p = "alert alert--info";
   function f(e) {
    let { ...t } = e;
    return a.createElement(m, (0, o.Z)({}, t, { className: (0, r.Z)(p, d.details, t.className) }));
   }
  },
  84881: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => u });
   var o = n(67294),
    a = n(95999),
    r = n(35281),
    l = n(87462),
    c = n(86010);
   const i = { iconEdit: "iconEdit_Z9Sw" };
   function s(e) {
    let { className: t, ...n } = e;
    return o.createElement("svg", (0, l.Z)({ fill: "currentColor", height: "20", width: "20", viewBox: "0 0 40 40", className: (0, c.Z)(i.iconEdit, t), "aria-hidden": "true" }, n), o.createElement("g", null, o.createElement("path", { d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" })));
   }
   function u(e) {
    let { editUrl: t } = e;
    return o.createElement("a", { href: t, target: "_blank", rel: "noreferrer noopener", className: r.k.common.editThisPage }, o.createElement(s, null), o.createElement(a.Z, { id: "theme.common.editThisPage", description: "The link label to edit the current page" }, "Edit this page"));
   }
  },
  32244: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => l });
   var o = n(67294),
    a = n(86010),
    r = n(39960);
   function l(e) {
    const { permalink: t, title: n, subLabel: l, isNext: c } = e;
    return o.createElement(r.Z, { className: (0, a.Z)("pagination-nav__link", c ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: t }, l && o.createElement("div", { className: "pagination-nav__sublabel" }, l), o.createElement("div", { className: "pagination-nav__label" }, n));
   }
  },
  39407: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => u });
   var o = n(87462),
    a = n(67294),
    r = n(86010),
    l = n(93743);
   const c = { tableOfContents: "tableOfContents_bqdL", docItemContainer: "docItemContainer_F8PC" },
    i = "table-of-contents__link toc-highlight",
    s = "table-of-contents__link--active";
   function u(e) {
    let { className: t, ...n } = e;
    return a.createElement("div", { className: (0, r.Z)(c.tableOfContents, "thin-scrollbar", t) }, a.createElement(l.Z, (0, o.Z)({}, n, { linkClassName: i, linkActiveClassName: s })));
   }
  },
  93743: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => f });
   var o = n(87462),
    a = n(67294),
    r = n(86668);
   function l(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const o = n.slice(2, e.level);
     (e.parentIndex = Math.max(...o)), (n[e.level] = t);
    });
    const o = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...a } = e;
      n >= 0 ? t[n].children.push(a) : o.push(a);
     }),
     o
    );
   }
   function c(e) {
    let { toc: t, minHeadingLevel: n, maxHeadingLevel: o } = e;
    return t.flatMap((e) => {
     const t = c({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: o });
     return (function (e) {
      return e.level >= n && e.level <= o;
     })(e)
      ? [{ ...e, children: t }]
      : t;
    });
   }
   function i(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? i(e.parentNode) : t;
   }
   function s(e, t) {
    let { anchorTopOffset: n } = t;
    const o = e.find((e) => i(e).top >= n);
    if (o) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(i(o))
      ? o
      : e[e.indexOf(o) - 1] ?? null;
    }
    return e[e.length - 1] ?? null;
   }
   function u() {
    const e = (0, a.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, r.L)();
    return (
     (0, a.useEffect)(() => {
      e.current = t ? 0 : document.querySelector(".navbar").clientHeight;
     }, [t]),
     e
    );
   }
   function m(e) {
    const t = (0, a.useRef)(void 0),
     n = u();
    (0, a.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: o, linkActiveClassName: a, minHeadingLevel: r, maxHeadingLevel: l } = e;
     function c() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(o),
       c = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: n } = e;
        const o = [];
        for (let a = t; a <= n; a += 1) o.push(`h${a}.anchor`);
        return Array.from(document.querySelectorAll(o.join()));
       })({ minHeadingLevel: r, maxHeadingLevel: l }),
       i = s(c, { anchorTopOffset: n.current }),
       u = e.find(
        (e) =>
         i &&
         i.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf("#") + 1));
          })(e)
       );
      e.forEach((e) => {
       !(function (e, n) {
        n ? (t.current && t.current !== e && t.current.classList.remove(a), e.classList.add(a), (t.current = e)) : e.classList.remove(a);
       })(e, e === u);
      });
     }
     return (
      document.addEventListener("scroll", c),
      document.addEventListener("resize", c),
      c(),
      () => {
       document.removeEventListener("scroll", c), document.removeEventListener("resize", c);
      }
     );
    }, [e, n]);
   }
   function d(e) {
    let { toc: t, className: n, linkClassName: o, isChild: r } = e;
    return t.length
     ? a.createElement(
        "ul",
        { className: r ? void 0 : n },
        t.map((e) => a.createElement("li", { key: e.id }, a.createElement("a", { href: `#${e.id}`, className: o ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), a.createElement(d, { isChild: !0, toc: e.children, className: n, linkClassName: o })))
       )
     : null;
   }
   const p = a.memo(d);
   function f(e) {
    let { toc: t, className: n = "table-of-contents table-of-contents__left-border", linkClassName: i = "table-of-contents__link", linkActiveClassName: s, minHeadingLevel: u, maxHeadingLevel: d, ...f } = e;
    const g = (0, r.L)(),
     h = u ?? g.tableOfContents.minHeadingLevel,
     v = d ?? g.tableOfContents.maxHeadingLevel,
     b = (function (e) {
      let { toc: t, minHeadingLevel: n, maxHeadingLevel: o } = e;
      return (0, a.useMemo)(() => c({ toc: l(t), minHeadingLevel: n, maxHeadingLevel: o }), [t, n, o]);
     })({ toc: t, minHeadingLevel: h, maxHeadingLevel: v });
    return (
     m(
      (0, a.useMemo)(() => {
       if (i && s) return { linkClassName: i, linkActiveClassName: s, minHeadingLevel: h, maxHeadingLevel: v };
      }, [i, s, h, v])
     ),
     a.createElement(p, (0, o.Z)({ toc: b, className: n, linkClassName: i }, f))
    );
   }
  },
  13008: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => c });
   var o = n(67294),
    a = n(86010),
    r = n(39960);
   const l = { tag: "tag_zVej", tagRegular: "tagRegular_sFm0", tagWithCount: "tagWithCount_h2kH" };
   function c(e) {
    let { permalink: t, label: n, count: c } = e;
    return o.createElement(r.Z, { href: t, className: (0, a.Z)(l.tag, c ? l.tagWithCount : l.tagRegular) }, n, c && o.createElement("span", null, c));
   }
  },
  71526: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => i });
   var o = n(67294),
    a = n(86010),
    r = n(95999),
    l = n(13008);
   const c = { tags: "tags_jXut", tag: "tag_QGVx" };
   function i(e) {
    let { tags: t } = e;
    return o.createElement(
     o.Fragment,
     null,
     o.createElement("b", null, o.createElement(r.Z, { id: "theme.tags.tagsListLabel", description: "The label alongside a tag list" }, "Tags:")),
     o.createElement(
      "ul",
      { className: (0, a.Z)(c.tags, "padding--none", "margin-left--sm") },
      t.map((e) => {
       let { label: t, permalink: n } = e;
       return o.createElement("li", { key: n, className: c.tag }, o.createElement(l.Z, { label: t, permalink: n }));
      })
     )
    );
   }
  },
  87594: (e, t) => {
   function n(e) {
    let t,
     n = [];
    for (let o of e.split(",").map((e) => e.trim()))
     if (/^-?\d+$/.test(o)) n.push(parseInt(o, 10));
     else if ((t = o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
      let [e, o, a, r] = t;
      if (o && r) {
       (o = parseInt(o)), (r = parseInt(r));
       const e = o < r ? 1 : -1;
       ("-" !== a && ".." !== a && "\u2025" !== a) || (r += e);
       for (let t = o; t !== r; t += e) n.push(t);
      }
     }
    return n;
   }
   (t.default = n), (e.exports = n);
  },
 },
]);
