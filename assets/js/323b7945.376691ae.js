"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1875],
 {
  61777: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => m });
   var a = n(52676),
    i = n(24785),
    s = n(82415);
   const r = { title: "Aanmelden voor de Heartbeat", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden" },
    l = "Meld je aan voor de Heartbeat",
    d = { id: "community/events/heartbeat/aanmelden", title: "Aanmelden voor de Heartbeat", description: "Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.", source: "@site/docs/community/events/heartbeat/aanmelden.mdx", sourceDirName: "community/events/heartbeat", slug: "/events/heartbeat/aanmelden", permalink: "/events/heartbeat/aanmelden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx", tags: [], version: "current", frontMatter: { title: "Aanmelden voor de Heartbeat", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden" }, sidebar: "community", previous: { title: "Video's van de afgelopen Heartbeats", permalink: "/events/heartbeat/videos" }, next: { title: "Design Open Hour", permalink: "/events/design-open-hour/overzicht" } },
    o = {},
    m = [];
   function c(e) {
    const t = { h1: "h1", p: "p", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "meld-je-aan-voor-de-heartbeat", children: "Meld je aan voor de Heartbeat" }), "\n", (0, a.jsx)(t.p, { children: "Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events." }), "\n", (0, a.jsx)(t.p, { children: "We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting." }), "\n", (0, a.jsx)(s.Z, { listId: "601sv3rzai", emailFieldId: "GivkPnqc1o", firstNameFieldId: "p8ZNN4fpMI", thanksPage: "https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, t, n) => {
   n.d(t, { Z: () => l });
   var a = n(52858),
    i = n(75271),
    s = n(96297),
    r = n(52676);
   const l = (e) => {
    let { listId: t = "", laPostaId: n = "", thanksPage: l = "", emailFieldId: d = "", firstNameFieldId: o = "", orgId: m = "", interestsId: c = "", interests: h = [], workAreasId: u = "" } = e;
    const {
      register: p,
      handleSubmit: v,
      formState: { errors: j },
     } = (0, s.cI)(),
     x = (0, i.useRef)(null);
    return (0, r.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: x,
     onSubmit: v(() => {
      x.current.submit();
     }),
     children: [(0, r.jsxs)(a.Wi, { type: "email", children: [(0, r.jsx)(a.nv, { children: (0, r.jsx)(a.lX, { htmlFor: `id-${d}`, children: "E-mailadres" }) }), j[d] && (0, r.jsx)(a.w7, { children: j[d].message }), (0, r.jsx)(a.nv, { children: (0, r.jsx)(a.fE, { id: `id-${d}`, name: d, type: "email", autoComplete: "email", "aria-required": "true", ...p(`${d}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!j[d] }) })] }), (0, r.jsxs)(a.Wi, { type: "text", children: [(0, r.jsx)(a.nv, { children: (0, r.jsx)(a.lX, { htmlFor: o, children: "Naam" }) }), j[o] && (0, r.jsx)(a.w7, { children: j[o].message }), (0, r.jsx)(a.nv, { children: (0, r.jsx)(a.fE, { id: o, name: o, type: "text", autoComplete: "given-name", "aria-required": "true", ...p(`${o}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." } }), invalid: !!j[o] }) })] }), m && (0, r.jsxs)(a.Wi, { type: "text", children: [(0, r.jsx)(a.nv, { children: (0, r.jsx)(a.lX, { htmlFor: m, children: "Organisatie" }) }), j[m] && (0, r.jsx)(a.w7, { children: j[m].message }), (0, r.jsx)(a.nv, { children: (0, r.jsx)(a.fE, { id: m, name: m, type: "text", "aria-required": "true", ...p(`${m}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." } }), invalid: !!j[m] }) })] }), c && (0, r.jsxs)(a.pg, { children: [(0, r.jsx)(a.Qv, { children: "Waar wil je NL Design System voor gebruiken? (niet verplicht)" }), (0, r.jsx)(a.ue, { children: "Meerdere antwoorden mogelijk." }), h.map((e, t) => (0, r.jsx)(a.Wi, { type: "checkbox", children: (0, r.jsxs)(a.nv, { children: [(0, r.jsx)(a.XZ, { name: `${c}[]`, value: t + 1, id: `${c}-${t + 1}` }), (0, r.jsx)(a.lX, { htmlFor: `${c}-${t + 1}`, children: e })] }) }, e))] }), u && (0, r.jsxs)(a.Wi, { type: "text", children: [(0, r.jsxs)(a.nv, { children: [(0, r.jsx)(a.lX, { htmlFor: u, children: "Aan wat voor projecten werk je? (niet verplicht)" }), (0, r.jsx)(a.ue, { children: "Denk aan mijn-omgevingen, formulieren en/of kaarten." })] }), (0, r.jsx)(a.nv, { children: (0, r.jsx)(a.gx, { id: u, name: u }) })] }), (0, r.jsx)(a.hE, { children: (0, r.jsx)(a.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, r.jsx)("input", { type: "hidden", name: "next", value: l }), (0, r.jsx)("input", { type: "hidden", name: "a", value: n }), (0, r.jsx)("input", { type: "hidden", name: "l", value: t }), (0, r.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, r.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => l, a: () => r });
   var a = n(75271);
   const i = {},
    s = a.createContext(i);
   function r(e) {
    const t = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), a.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
