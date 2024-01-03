"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [88169],
 {
  48415: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => o, contentTitle: () => d, default: () => p, frontMatter: () => r, metadata: () => l, toc: () => m });
   var a = n(11527),
    i = n(47214),
    s = n(82415);
   const r = { title: "Aanmelden voor de Heartbeat", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden" },
    d = "Meld je aan voor de Heartbeat",
    l = { id: "project/events/heartbeat/aanmelden", title: "Aanmelden voor de Heartbeat", description: "Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.", source: "@site/docs/project/events/heartbeat/aanmelden.mdx", sourceDirName: "project/events/heartbeat", slug: "/events/heartbeat/aanmelden", permalink: "/events/heartbeat/aanmelden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/events/heartbeat/aanmelden.mdx", tags: [], version: "current", frontMatter: { title: "Aanmelden voor de Heartbeat", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden" }, sidebar: "project", previous: { title: "Video's van de afgelopen Heartbeats", permalink: "/events/heartbeat/videos" }, next: { title: "Wie doet mee?", permalink: "/project/wie-doet-mee" } },
    o = {},
    m = [];
   function c(e) {
    const t = { h1: "h1", p: "p", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "meld-je-aan-voor-de-heartbeat", children: "Meld je aan voor de Heartbeat" }), "\n", (0, a.jsx)(t.p, { children: "Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events." }), "\n", (0, a.jsx)(t.p, { children: "We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting." }), "\n", (0, a.jsx)(s.Z, { listId: "601sv3rzai", emailFieldId: "GivkPnqc1o", firstNameFieldId: "p8ZNN4fpMI", thanksPage: "https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, t, n) => {
   n.d(t, { Z: () => d });
   var a = n(83778),
    i = n(50959),
    s = n(48433),
    r = n(11527);
   const d = (e) => {
    let { listId: t = "", laPostaId: n = "", thanksPage: d = "", emailFieldId: l = "", firstNameFieldId: o = "" } = e;
    const {
      register: m,
      handleSubmit: c,
      formState: { errors: p },
     } = (0, s.cI)(),
     u = (0, i.useRef)(null);
    return (0, r.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: u,
     onSubmit: c(() => {
      u.current.submit();
     }),
     children: [(0, r.jsxs)(a.Wi, { type: "email", children: [(0, r.jsx)(a.nv, { children: (0, r.jsx)(a.lX, { htmlFor: `id-${l}`, children: "E-mailadres" }) }), p[l] && (0, r.jsx)(a.w7, { children: (0, r.jsx)(a.nv, { children: p[l].message }) }), (0, r.jsx)(a.nv, { children: (0, r.jsx)(a.fE, { id: `id-${l}`, name: l, type: "email", "aria-required": "true", autoComplete: "email", ...m(`${l}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!p[l] }) })] }), (0, r.jsxs)(a.Wi, { type: "text", children: [(0, r.jsx)(a.nv, { children: (0, r.jsx)(a.lX, { htmlFor: o, children: "Naam (niet verplicht)" }) }), (0, r.jsx)(a.nv, { children: (0, r.jsx)(a.fE, { id: o, name: o, type: "text", autoComplete: "given-name" }) })] }), (0, r.jsx)(a.hE, { children: (0, r.jsx)(a.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, r.jsx)("input", { type: "hidden", name: "next", value: d }), (0, r.jsx)("input", { type: "hidden", name: "a", value: n }), (0, r.jsx)("input", { type: "hidden", name: "l", value: t }), (0, r.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, r.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => d, a: () => r });
   var a = n(50959);
   const i = {},
    s = a.createContext(i);
   function r(e) {
    const t = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function d(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), a.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
