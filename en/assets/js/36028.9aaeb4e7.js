(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [36028],
 {
  86092: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => s });
   const s = () => null;
  },
  77818: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => E });
   var s = n(50959),
    o = n(11527);
   function a(e) {
    const { mdxAdmonitionTitle: t, rest: n } = (function (e) {
      const t = s.Children.toArray(e),
       n = t.find((e) => s.isValidElement(e) && "mdxAdmonitionTitle" === e.type),
       a = t.filter((e) => e !== n),
       c = n?.props.children;
      return { mdxAdmonitionTitle: c, rest: a.length > 0 ? (0, o.jsx)(o.Fragment, { children: a }) : null };
     })(e.children),
     a = e.title ?? t;
    return { ...e, ...(a && { title: a }), children: n };
   }
   var c = n(86259),
    i = n(48714),
    r = n(76711);
   const l = { admonition: "admonition_WpVL", admonitionHeading: "admonitionHeading_pc6b", admonitionIcon: "admonitionIcon_dFFO", admonitionContent: "admonitionContent_LU7R" };
   function d(e) {
    let { type: t, className: n, children: s } = e;
    return (0, o.jsx)("div", { className: (0, c.Z)(r.k.common.admonition, r.k.common.admonitionType(t), l.admonition, n), children: s });
   }
   function u(e) {
    let { icon: t, title: n } = e;
    return (0, o.jsxs)("div", { className: l.admonitionHeading, children: [(0, o.jsx)("span", { className: l.admonitionIcon, children: t }), n] });
   }
   function m(e) {
    let { children: t } = e;
    return t ? (0, o.jsx)("div", { className: l.admonitionContent, children: t }) : null;
   }
   function h(e) {
    const { type: t, icon: n, title: s, children: a, className: c } = e;
    return (0, o.jsxs)(d, { type: t, className: c, children: [(0, o.jsx)(u, { title: s, icon: n }), (0, o.jsx)(m, { children: a })] });
   }
   function f(e) {
    return (0, o.jsx)("svg", { viewBox: "0 0 14 16", ...e, children: (0, o.jsx)("path", { fillRule: "evenodd", d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z" }) });
   }
   const p = { icon: (0, o.jsx)(f, {}), title: (0, o.jsx)(i.Z, { id: "theme.admonition.note", description: "The default label used for the Note admonition (:::note)", children: "note" }) };
   function g(e) {
    return (0, o.jsx)(h, { ...p, ...e, className: (0, c.Z)("alert alert--secondary", e.className), children: e.children });
   }
   function v(e) {
    return (0, o.jsx)("svg", { viewBox: "0 0 12 16", ...e, children: (0, o.jsx)("path", { fillRule: "evenodd", d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z" }) });
   }
   const x = { icon: (0, o.jsx)(v, {}), title: (0, o.jsx)(i.Z, { id: "theme.admonition.tip", description: "The default label used for the Tip admonition (:::tip)", children: "tip" }) };
   function b(e) {
    return (0, o.jsx)(h, { ...x, ...e, className: (0, c.Z)("alert alert--success", e.className), children: e.children });
   }
   function j(e) {
    return (0, o.jsx)("svg", { viewBox: "0 0 14 16", ...e, children: (0, o.jsx)("path", { fillRule: "evenodd", d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" }) });
   }
   const N = { icon: (0, o.jsx)(j, {}), title: (0, o.jsx)(i.Z, { id: "theme.admonition.info", description: "The default label used for the Info admonition (:::info)", children: "info" }) };
   function k(e) {
    return (0, o.jsx)(h, { ...N, ...e, className: (0, c.Z)("alert alert--info", e.className), children: e.children });
   }
   function C(e) {
    return (0, o.jsx)("svg", { viewBox: "0 0 16 16", ...e, children: (0, o.jsx)("path", { fillRule: "evenodd", d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" }) });
   }
   const y = { icon: (0, o.jsx)(C, {}), title: (0, o.jsx)(i.Z, { id: "theme.admonition.warning", description: "The default label used for the Warning admonition (:::warning)", children: "warning" }) };
   function L(e) {
    return (0, o.jsx)("svg", { viewBox: "0 0 12 16", ...e, children: (0, o.jsx)("path", { fillRule: "evenodd", d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z" }) });
   }
   const B = { icon: (0, o.jsx)(L, {}), title: (0, o.jsx)(i.Z, { id: "theme.admonition.danger", description: "The default label used for the Danger admonition (:::danger)", children: "danger" }) };
   const w = { icon: (0, o.jsx)(C, {}), title: (0, o.jsx)(i.Z, { id: "theme.admonition.caution", description: "The default label used for the Caution admonition (:::caution)", children: "caution" }) };
   const _ = {
    ...{
     note: g,
     tip: b,
     info: k,
     warning: function (e) {
      return (0, o.jsx)(h, { ...y, ...e, className: (0, c.Z)("alert alert--warning", e.className), children: e.children });
     },
     danger: function (e) {
      return (0, o.jsx)(h, { ...B, ...e, className: (0, c.Z)("alert alert--danger", e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, o.jsx)(g, { title: "secondary", ...e }),
     important: (e) => (0, o.jsx)(k, { title: "important", ...e }),
     success: (e) => (0, o.jsx)(b, { title: "success", ...e }),
     caution: function (e) {
      return (0, o.jsx)(h, { ...w, ...e, className: (0, c.Z)("alert alert--warning", e.className), children: e.children });
     },
    },
   };
   function E(e) {
    const t = a(e),
     n = ((s = t.type), _[s] || (console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`), _.info));
    var s;
    return (0, o.jsx)(n, { ...t });
   }
  },
  50654: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => O });
   var s = n(50959),
    o = n(98826),
    a = n(86259),
    c = n(3689),
    i = n(95974);
   function r() {
    const { prism: e } = (0, i.L)(),
     { colorMode: t } = (0, c.I)(),
     n = e.theme,
     s = e.darkTheme || n;
    return "dark" === t ? s : n;
   }
   var l = n(76711),
    d = n(77226),
    u = n.n(d);
   const m = /title=(?<quote>["'])(?<title>.*?)\1/,
    h = /\{(?<range>[\d,-]+)\}/,
    f = { js: { start: "\\/\\/", end: "" }, jsBlock: { start: "\\/\\*", end: "\\*\\/" }, jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" }, bash: { start: "#", end: "" }, html: { start: "\x3c!--", end: "--\x3e" } },
    p = { ...f, lua: { start: "--", end: "" }, wasm: { start: "\\;\\;", end: "" }, tex: { start: "%", end: "" }, vb: { start: "['\u2018\u2019]", end: "" }, rem: { start: "[Rr][Ee][Mm]\\b", end: "" }, f90: { start: "!", end: "" }, ml: { start: "\\(\\*", end: "\\*\\)" }, cobol: { start: "\\*>", end: "" } },
    g = Object.keys(f);
   function v(e, t) {
    const n = e
     .map((e) => {
      const { start: n, end: s } = p[e];
      return `(?:${n}\\s*(${t.flatMap((e) => [e.line, e.block?.start, e.block?.end].filter(Boolean)).join("|")})\\s*${s})`;
     })
     .join("|");
    return new RegExp(`^\\s*(?:${n})\\s*$`);
   }
   function x(e, t) {
    let n = e.replace(/\n$/, "");
    const { language: s, magicComments: o, metastring: a } = t;
    if (a && h.test(a)) {
     const e = a.match(h).groups.range;
     if (0 === o.length) throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
     const t = o[0].className,
      s = u()(e)
       .filter((e) => e > 0)
       .map((e) => [e - 1, [t]]);
     return { lineClassNames: Object.fromEntries(s), code: n };
    }
    if (void 0 === s) return { lineClassNames: {}, code: n };
    const c = (function (e, t) {
      switch (e) {
       case "js":
       case "javascript":
       case "ts":
       case "typescript":
        return v(["js", "jsBlock"], t);
       case "jsx":
       case "tsx":
        return v(["js", "jsBlock", "jsx"], t);
       case "html":
        return v(["js", "jsBlock", "html"], t);
       case "python":
       case "py":
       case "bash":
        return v(["bash"], t);
       case "markdown":
       case "md":
        return v(["html", "jsx", "bash"], t);
       case "tex":
       case "latex":
       case "matlab":
        return v(["tex"], t);
       case "lua":
       case "haskell":
       case "sql":
        return v(["lua"], t);
       case "wasm":
        return v(["wasm"], t);
       case "vb":
       case "vbnet":
       case "vba":
       case "visual-basic":
        return v(["vb", "rem"], t);
       case "batch":
        return v(["rem"], t);
       case "basic":
        return v(["rem", "f90"], t);
       case "fsharp":
        return v(["js", "ml"], t);
       case "ocaml":
       case "sml":
        return v(["ml"], t);
       case "fortran":
        return v(["f90"], t);
       case "cobol":
        return v(["cobol"], t);
       default:
        return v(g, t);
      }
     })(s, o),
     i = n.split("\n"),
     r = Object.fromEntries(o.map((e) => [e.className, { start: 0, range: "" }])),
     l = Object.fromEntries(
      o
       .filter((e) => e.line)
       .map((e) => {
        let { className: t, line: n } = e;
        return [n, t];
       })
     ),
     d = Object.fromEntries(
      o
       .filter((e) => e.block)
       .map((e) => {
        let { className: t, block: n } = e;
        return [n.start, t];
       })
     ),
     m = Object.fromEntries(
      o
       .filter((e) => e.block)
       .map((e) => {
        let { className: t, block: n } = e;
        return [n.end, t];
       })
     );
    for (let u = 0; u < i.length; ) {
     const e = i[u].match(c);
     if (!e) {
      u += 1;
      continue;
     }
     const t = e.slice(1).find((e) => void 0 !== e);
     l[t] ? (r[l[t]].range += `${u},`) : d[t] ? (r[d[t]].start = u) : m[t] && (r[m[t]].range += `${r[m[t]].start}-${u - 1},`), i.splice(u, 1);
    }
    n = i.join("\n");
    const f = {};
    return (
     Object.entries(r).forEach((e) => {
      let [t, { range: n }] = e;
      u()(n).forEach((e) => {
       (f[e] ??= []), f[e].push(t);
      });
     }),
     { lineClassNames: f, code: n }
    );
   }
   const b = { codeBlockContainer: "codeBlockContainer_at7R" };
   var j = n(11527);
   function N(e) {
    let { as: t, ...n } = e;
    const s = (function (e) {
     const t = { color: "--prism-color", backgroundColor: "--prism-background-color" },
      n = {};
     return (
      Object.entries(e.plain).forEach((e) => {
       let [s, o] = e;
       const a = t[s];
       a && "string" == typeof o && (n[a] = o);
      }),
      n
     );
    })(r());
    return (0, j.jsx)(t, { ...n, style: s, className: (0, a.Z)(n.className, b.codeBlockContainer, l.k.common.codeBlock) });
   }
   const k = { codeBlockContent: "codeBlockContent_gLzd", codeBlockTitle: "codeBlockTitle_YfyC", codeBlock: "codeBlock_aEQN", codeBlockStandalone: "codeBlockStandalone_EeLH", codeBlockLines: "codeBlockLines_lH8r", codeBlockLinesWithNumbering: "codeBlockLinesWithNumbering_oEtH", buttonGroup: "buttonGroup_LoTb" };
   function C(e) {
    let { children: t, className: n } = e;
    return (0, j.jsx)(N, { as: "pre", tabIndex: 0, className: (0, a.Z)(k.codeBlockStandalone, "thin-scrollbar", n), children: (0, j.jsx)("code", { className: k.codeBlockLines, children: t }) });
   }
   var y = n(27362);
   const L = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
   function B(e, t) {
    const [n, o] = (0, s.useState)(),
     a = (0, s.useCallback)(() => {
      o(e.current?.closest("[role=tabpanel][hidden]"));
     }, [e, o]);
    (0, s.useEffect)(() => {
     a();
    }, [a]),
     (function (e, t, n) {
      void 0 === n && (n = L);
      const o = (0, y.zX)(t),
       a = (0, y.Ql)(n);
      (0, s.useEffect)(() => {
       const t = new MutationObserver(o);
       return e && t.observe(e, a), () => t.disconnect();
      }, [e, o, a]);
     })(
      n,
      (e) => {
       e.forEach((e) => {
        "attributes" === e.type && "hidden" === e.attributeName && (t(), a());
       });
      },
      { attributes: !0, characterData: !1, childList: !1, subtree: !1 }
     );
   }
   var w = n(2425);
   const _ = { codeLine: "codeLine__N3h", codeLineNumber: "codeLineNumber_SoKm", codeLineContent: "codeLineContent_faB9" };
   function E(e) {
    let { line: t, classNames: n, showLineNumbers: s, getLineProps: o, getTokenProps: c } = e;
    1 === t.length && "\n" === t[0].content && (t[0].content = "");
    const i = o({ line: t, className: (0, a.Z)(n, s && _.codeLine) }),
     r = t.map((e, t) => (0, j.jsx)("span", { ...c({ token: e, key: t }) }, t));
    return (0, j.jsxs)("span", { ...i, children: [s ? (0, j.jsxs)(j.Fragment, { children: [(0, j.jsx)("span", { className: _.codeLineNumber }), (0, j.jsx)("span", { className: _.codeLineContent, children: r })] }) : r, (0, j.jsx)("br", {})] });
   }
   var Z = n(48714);
   function H(e) {
    return (0, j.jsx)("svg", { viewBox: "0 0 24 24", ...e, children: (0, j.jsx)("path", { fill: "currentColor", d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }) });
   }
   function T(e) {
    return (0, j.jsx)("svg", { viewBox: "0 0 24 24", ...e, children: (0, j.jsx)("path", { fill: "currentColor", d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }) });
   }
   const A = { copyButtonCopied: "copyButtonCopied_JqBt", copyButtonIcons: "copyButtonIcons_dS5j", copyButtonIcon: "copyButtonIcon_zvQY", copyButtonSuccessIcon: "copyButtonSuccessIcon_AYKI" };
   function I(e) {
    let { code: t, className: n } = e;
    const [o, c] = (0, s.useState)(!1),
     i = (0, s.useRef)(void 0),
     r = (0, s.useCallback)(() => {
      !(function (e, t) {
       let { target: n = document.body } = void 0 === t ? {} : t;
       if ("string" != typeof e) throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);
       const s = document.createElement("textarea"),
        o = document.activeElement;
       (s.value = e), s.setAttribute("readonly", ""), (s.style.contain = "strict"), (s.style.position = "absolute"), (s.style.left = "-9999px"), (s.style.fontSize = "12pt");
       const a = document.getSelection(),
        c = a.rangeCount > 0 && a.getRangeAt(0);
       n.append(s), s.select(), (s.selectionStart = 0), (s.selectionEnd = e.length);
       let i = !1;
       try {
        i = document.execCommand("copy");
       } catch {}
       s.remove(), c && (a.removeAllRanges(), a.addRange(c)), o && o.focus();
      })(t),
       c(!0),
       (i.current = window.setTimeout(() => {
        c(!1);
       }, 1e3));
     }, [t]);
    return (0, s.useEffect)(() => () => window.clearTimeout(i.current), []), (0, j.jsx)("button", { type: "button", "aria-label": o ? (0, Z.I)({ id: "theme.CodeBlock.copied", message: "Copied", description: "The copied button label on code blocks" }) : (0, Z.I)({ id: "theme.CodeBlock.copyButtonAriaLabel", message: "Copy code to clipboard", description: "The ARIA label for copy code blocks button" }), title: (0, Z.I)({ id: "theme.CodeBlock.copy", message: "Copy", description: "The copy button label on code blocks" }), className: (0, a.Z)("clean-btn", n, A.copyButton, o && A.copyButtonCopied), onClick: r, children: (0, j.jsxs)("span", { className: A.copyButtonIcons, "aria-hidden": "true", children: [(0, j.jsx)(H, { className: A.copyButtonIcon }), (0, j.jsx)(T, { className: A.copyButtonSuccessIcon })] }) });
   }
   function S(e) {
    return (0, j.jsx)("svg", { viewBox: "0 0 24 24", ...e, children: (0, j.jsx)("path", { fill: "currentColor", d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" }) });
   }
   const z = { wordWrapButtonIcon: "wordWrapButtonIcon_mk9A", wordWrapButtonEnabled: "wordWrapButtonEnabled_N1sc" };
   function M(e) {
    let { className: t, onClick: n, isEnabled: s } = e;
    const o = (0, Z.I)({ id: "theme.CodeBlock.wordWrapToggle", message: "Toggle word wrap", description: "The title attribute for toggle word wrapping button of code block lines" });
    return (0, j.jsx)("button", { type: "button", onClick: n, className: (0, a.Z)("clean-btn", t, s && z.wordWrapButtonEnabled), "aria-label": o, title: o, children: (0, j.jsx)(S, { className: z.wordWrapButtonIcon, "aria-hidden": "true" }) });
   }
   function R(e) {
    let { children: t, className: n = "", metastring: o, title: c, showLineNumbers: l, language: d } = e;
    const {
      prism: { defaultLanguage: u, magicComments: h },
     } = (0, i.L)(),
     f = (function (e) {
      return e?.toLowerCase();
     })(
      d ??
       (function (e) {
        const t = e.split(" ").find((e) => e.startsWith("language-"));
        return t?.replace(/language-/, "");
       })(n) ??
       u
     ),
     p = r(),
     g = (function () {
      const [e, t] = (0, s.useState)(!1),
       [n, o] = (0, s.useState)(!1),
       a = (0, s.useRef)(null),
       c = (0, s.useCallback)(() => {
        const n = a.current.querySelector("code");
        e ? n.removeAttribute("style") : ((n.style.whiteSpace = "pre-wrap"), (n.style.overflowWrap = "anywhere")), t((e) => !e);
       }, [a, e]),
       i = (0, s.useCallback)(() => {
        const { scrollWidth: e, clientWidth: t } = a.current,
         n = e > t || a.current.querySelector("code").hasAttribute("style");
        o(n);
       }, [a]);
      return (
       B(a, i),
       (0, s.useEffect)(() => {
        i();
       }, [e, i]),
       (0, s.useEffect)(
        () => (
         window.addEventListener("resize", i, { passive: !0 }),
         () => {
          window.removeEventListener("resize", i);
         }
        ),
        [i]
       ),
       { codeBlockRef: a, isEnabled: e, isCodeScrollable: n, toggle: c }
      );
     })(),
     v =
      (function (e) {
       return e?.match(m)?.groups.title ?? "";
      })(o) || c,
     { lineClassNames: b, code: C } = x(t, { metastring: o, language: f, magicComments: h }),
     y =
      l ??
      (function (e) {
       return Boolean(e?.includes("showLineNumbers"));
      })(o);
    return (0, j.jsxs)(N, {
     as: "div",
     className: (0, a.Z)(n, f && !n.includes(`language-${f}`) && `language-${f}`),
     children: [
      v && (0, j.jsx)("div", { className: k.codeBlockTitle, children: v }),
      (0, j.jsxs)("div", {
       className: k.codeBlockContent,
       children: [
        (0, j.jsx)(w.y$, {
         theme: p,
         code: C,
         language: f ?? "text",
         children: (e) => {
          let { className: t, style: n, tokens: s, getLineProps: o, getTokenProps: c } = e;
          return (0, j.jsx)("pre", { tabIndex: 0, ref: g.codeBlockRef, className: (0, a.Z)(t, k.codeBlock, "thin-scrollbar"), style: n, children: (0, j.jsx)("code", { className: (0, a.Z)(k.codeBlockLines, y && k.codeBlockLinesWithNumbering), children: s.map((e, t) => (0, j.jsx)(E, { line: e, getLineProps: o, getTokenProps: c, classNames: b[t], showLineNumbers: y }, t)) }) });
         },
        }),
        (0, j.jsxs)("div", { className: k.buttonGroup, children: [(g.isEnabled || g.isCodeScrollable) && (0, j.jsx)(M, { className: k.codeButton, onClick: () => g.toggle(), isEnabled: g.isEnabled }), (0, j.jsx)(I, { className: k.codeButton, code: C })] }),
       ],
      }),
     ],
    });
   }
   function O(e) {
    let { children: t, ...n } = e;
    const a = (0, o.Z)(),
     c = (function (e) {
      return s.Children.toArray(e).some((e) => (0, s.isValidElement)(e)) ? e : Array.isArray(e) ? e.join("") : e;
     })(t),
     i = "string" == typeof c ? R : C;
    return (0, j.jsx)(i, { ...n, children: c }, String(a));
   }
  },
  44410: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => f });
   var s = n(50959),
    o = n(86259),
    a = n(98826),
    c = n(17796);
   const i = { details: "details_OkuL", isBrowser: "isBrowser_iBqg", collapsibleContent: "collapsibleContent__A_S" };
   var r = n(11527);
   function l(e) {
    return !!e && ("SUMMARY" === e.tagName || l(e.parentElement));
   }
   function d(e, t) {
    return !!e && (e === t || d(e.parentElement, t));
   }
   function u(e) {
    let { summary: t, children: n, ...u } = e;
    const m = (0, a.Z)(),
     h = (0, s.useRef)(null),
     { collapsed: f, setCollapsed: p } = (0, c.u)({ initialState: !u.open }),
     [g, v] = (0, s.useState)(u.open),
     x = s.isValidElement(t) ? t : (0, r.jsx)("summary", { children: t ?? "Details" });
    return (0, r.jsxs)("details", {
     ...u,
     ref: h,
     open: g,
     "data-collapsed": f,
     className: (0, o.Z)(i.details, m && i.isBrowser, u.className),
     onMouseDown: (e) => {
      l(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const t = e.target;
      l(t) && d(t, h.current) && (e.preventDefault(), f ? (p(!1), v(!0)) : p(!0));
     },
     children: [
      x,
      (0, r.jsx)(c.z, {
       lazy: !1,
       collapsed: f,
       disableSSRStyle: !0,
       onCollapseTransitionEnd: (e) => {
        p(e), v(!e);
       },
       children: (0, r.jsx)("div", { className: i.collapsibleContent, children: n }),
      }),
     ],
    });
   }
   const m = { details: "details_E8sF" },
    h = "alert alert--info";
   function f(e) {
    let { ...t } = e;
    return (0, r.jsx)(u, { ...t, className: (0, o.Z)(h, m.details, t.className) });
   }
  },
  13624: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => d });
   n(50959);
   var s = n(48714),
    o = n(76711),
    a = n(58812),
    c = n(86259);
   const i = { iconEdit: "iconEdit_OQA9" };
   var r = n(11527);
   function l(e) {
    let { className: t, ...n } = e;
    return (0, r.jsx)("svg", { fill: "currentColor", height: "20", width: "20", viewBox: "0 0 40 40", className: (0, c.Z)(i.iconEdit, t), "aria-hidden": "true", ...n, children: (0, r.jsx)("g", { children: (0, r.jsx)("path", { d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" }) }) });
   }
   function d(e) {
    let { editUrl: t } = e;
    return (0, r.jsxs)(a.Z, { to: t, className: o.k.common.editThisPage, children: [(0, r.jsx)(l, {}), (0, r.jsx)(s.Z, { id: "theme.common.editThisPage", description: "The link label to edit the current page", children: "Edit this page" })] });
   }
  },
  91138: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => c });
   n(50959);
   var s = n(86259),
    o = n(58812),
    a = n(11527);
   function c(e) {
    const { permalink: t, title: n, subLabel: c, isNext: i } = e;
    return (0, a.jsxs)(o.Z, { className: (0, s.Z)("pagination-nav__link", i ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: t, children: [c && (0, a.jsx)("div", { className: "pagination-nav__sublabel", children: c }), (0, a.jsx)("div", { className: "pagination-nav__label", children: n })] });
   }
  },
  89113: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => l });
   n(50959);
   var s = n(86259),
    o = n(18740);
   const a = { tableOfContents: "tableOfContents_lgqo", docItemContainer: "docItemContainer_iAGP" };
   var c = n(11527);
   const i = "table-of-contents__link toc-highlight",
    r = "table-of-contents__link--active";
   function l(e) {
    let { className: t, ...n } = e;
    return (0, c.jsx)("div", { className: (0, s.Z)(a.tableOfContents, "thin-scrollbar", t), children: (0, c.jsx)(o.Z, { ...n, linkClassName: i, linkActiveClassName: r }) });
   }
  },
  18740: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => p });
   var s = n(50959),
    o = n(95974);
   function a(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const s = n.slice(2, e.level);
     (e.parentIndex = Math.max(...s)), (n[e.level] = t);
    });
    const s = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...o } = e;
      n >= 0 ? t[n].children.push(o) : s.push(o);
     }),
     s
    );
   }
   function c(e) {
    let { toc: t, minHeadingLevel: n, maxHeadingLevel: s } = e;
    return t.flatMap((e) => {
     const t = c({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: s });
     return (function (e) {
      return e.level >= n && e.level <= s;
     })(e)
      ? [{ ...e, children: t }]
      : t;
    });
   }
   function i(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? i(e.parentNode) : t;
   }
   function r(e, t) {
    let { anchorTopOffset: n } = t;
    const s = e.find((e) => i(e).top >= n);
    if (s) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(i(s))
      ? s
      : e[e.indexOf(s) - 1] ?? null;
    }
    return e[e.length - 1] ?? null;
   }
   function l() {
    const e = (0, s.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, o.L)();
    return (
     (0, s.useEffect)(() => {
      e.current = t ? 0 : document.querySelector(".navbar").clientHeight;
     }, [t]),
     e
    );
   }
   function d(e) {
    const t = (0, s.useRef)(void 0),
     n = l();
    (0, s.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: s, linkActiveClassName: o, minHeadingLevel: a, maxHeadingLevel: c } = e;
     function i() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       i = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: n } = e;
        const s = [];
        for (let o = t; o <= n; o += 1) s.push(`h${o}.anchor`);
        return Array.from(document.querySelectorAll(s.join()));
       })({ minHeadingLevel: a, maxHeadingLevel: c }),
       l = r(i, { anchorTopOffset: n.current }),
       d = e.find(
        (e) =>
         l &&
         l.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf("#") + 1));
          })(e)
       );
      e.forEach((e) => {
       !(function (e, n) {
        n ? (t.current && t.current !== e && t.current.classList.remove(o), e.classList.add(o), (t.current = e)) : e.classList.remove(o);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener("scroll", i),
      document.addEventListener("resize", i),
      i(),
      () => {
       document.removeEventListener("scroll", i), document.removeEventListener("resize", i);
      }
     );
    }, [e, n]);
   }
   var u = n(58812),
    m = n(11527);
   function h(e) {
    let { toc: t, className: n, linkClassName: s, isChild: o } = e;
    return t.length ? (0, m.jsx)("ul", { className: o ? void 0 : n, children: t.map((e) => (0, m.jsxs)("li", { children: [(0, m.jsx)(u.Z, { to: `#${e.id}`, className: s ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, m.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: s })] }, e.id)) }) : null;
   }
   const f = s.memo(h);
   function p(e) {
    let { toc: t, className: n = "table-of-contents table-of-contents__left-border", linkClassName: i = "table-of-contents__link", linkActiveClassName: r, minHeadingLevel: l, maxHeadingLevel: u, ...h } = e;
    const p = (0, o.L)(),
     g = l ?? p.tableOfContents.minHeadingLevel,
     v = u ?? p.tableOfContents.maxHeadingLevel,
     x = (function (e) {
      let { toc: t, minHeadingLevel: n, maxHeadingLevel: o } = e;
      return (0, s.useMemo)(() => c({ toc: a(t), minHeadingLevel: n, maxHeadingLevel: o }), [t, n, o]);
     })({ toc: t, minHeadingLevel: g, maxHeadingLevel: v });
    return (
     d(
      (0, s.useMemo)(() => {
       if (i && r) return { linkClassName: i, linkActiveClassName: r, minHeadingLevel: g, maxHeadingLevel: v };
      }, [i, r, g, v])
     ),
     (0, m.jsx)(f, { toc: x, className: n, linkClassName: i, ...h })
    );
   }
  },
  4189: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => i });
   n(50959);
   var s = n(86259),
    o = n(58812);
   const a = { tag: "tag_ltnZ", tagRegular: "tagRegular_T96X", tagWithCount: "tagWithCount_v5x5" };
   var c = n(11527);
   function i(e) {
    let { permalink: t, label: n, count: i } = e;
    return (0, c.jsxs)(o.Z, { href: t, className: (0, s.Z)(a.tag, i ? a.tagWithCount : a.tagRegular), children: [n, i && (0, c.jsx)("span", { children: i })] });
   }
  },
  3361: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => r });
   n(50959);
   var s = n(86259),
    o = n(48714),
    a = n(4189);
   const c = { tags: "tags_NaWy", tag: "tag_YYqp" };
   var i = n(11527);
   function r(e) {
    let { tags: t } = e;
    return (0, i.jsxs)(i.Fragment, {
     children: [
      (0, i.jsx)("b", { children: (0, i.jsx)(o.Z, { id: "theme.tags.tagsListLabel", description: "The label alongside a tag list", children: "Tags:" }) }),
      (0, i.jsx)("ul", {
       className: (0, s.Z)(c.tags, "padding--none", "margin-left--sm"),
       children: t.map((e) => {
        let { label: t, permalink: n } = e;
        return (0, i.jsx)("li", { className: c.tag, children: (0, i.jsx)(a.Z, { label: t, permalink: n }) }, n);
       }),
      }),
     ],
    });
   }
  },
  77226: (e, t) => {
   function n(e) {
    let t,
     n = [];
    for (let s of e.split(",").map((e) => e.trim()))
     if (/^-?\d+$/.test(s)) n.push(parseInt(s, 10));
     else if ((t = s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
      let [e, s, o, a] = t;
      if (s && a) {
       (s = parseInt(s)), (a = parseInt(a));
       const e = s < a ? 1 : -1;
       ("-" !== o && ".." !== o && "\u2025" !== o) || (a += e);
       for (let t = s; t !== a; t += e) n.push(t);
      }
     }
    return n;
   }
   (t.default = n), (e.exports = n);
  },
  47214: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => i, a: () => c });
   var s = n(50959);
   const o = {},
    a = s.createContext(o);
   function c(e) {
    const t = s.useContext(a);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function i(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : c(e.components)), s.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
