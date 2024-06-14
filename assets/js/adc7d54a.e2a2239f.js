"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [134],
 {
  85843: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => d, default: () => c, frontMatter: () => r, metadata: () => o, toc: () => m });
   var t = i(52676),
    s = i(24785),
    a = i(82415);
   const r = { title: "Aanmelden voor de Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden" },
    d = "Meld je aan voor het Design Open Hour",
    o = { id: "community/events/design-open-hour/aanmelden", title: "Aanmelden voor de Design Open Hour", description: "Design Open Hours zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.", source: "@site/docs/community/events/design-open-hour/aanmelden.mdx", sourceDirName: "community/events/design-open-hour", slug: "/events/design-open-hour/aanmelden", permalink: "/events/design-open-hour/aanmelden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx", tags: [], version: "current", frontMatter: { title: "Aanmelden voor de Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden" }, sidebar: "community", previous: { title: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/events/design-open-hour" }, next: { title: "Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.", permalink: "/events/design-open-dag" } },
    l = {},
    m = [];
   function u(e) {
    const n = { h1: "h1", p: "p", ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "meld-je-aan-voor-het-design-open-hour", children: "Meld je aan voor het Design Open Hour" }), "\n", (0, t.jsx)(n.p, { children: "Design Open Hours zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events." }), "\n", (0, t.jsx)(n.p, { children: "We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting." }), "\n", (0, t.jsx)(a.Z, { listId: "iklwgql4w2", emailFieldId: "APNH2BBGKm", firstNameFieldId: "QQjRkYyXpE", thanksPage: "https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => d });
   var t = i(40168),
    s = i(75271),
    a = i(16953),
    r = i(52676);
   const d = (e) => {
    let { listId: n = "", laPostaId: i = "", thanksPage: d = "", emailFieldId: o = "", firstNameFieldId: l = "", orgId: m = "", interestsId: u = "", interests: c = [], workAreasId: h = "" } = e;
    const {
      register: p,
      handleSubmit: g,
      formState: { errors: v },
     } = (0, a.cI)(),
     j = (0, s.useRef)(null);
    return (0, r.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: j,
     onSubmit: g(() => {
      j.current.submit();
     }),
     children: [(0, r.jsxs)(t.Wi, { type: "email", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: `id-${o}`, children: "E-mailadres" }) }), v[o] && (0, r.jsx)(t.w7, { children: v[o].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: `id-${o}`, name: o, type: "email", autoComplete: "email", "aria-required": "true", ...p(`${o}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!v[o] }) })] }), (0, r.jsxs)(t.Wi, { type: "text", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: l, children: "Naam" }) }), v[l] && (0, r.jsx)(t.w7, { children: v[l].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: l, name: l, type: "text", autoComplete: "given-name", "aria-required": "true", ...p(`${l}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." } }), invalid: !!v[l] }) })] }), m && (0, r.jsxs)(t.Wi, { type: "text", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: m, children: "Organisatie" }) }), v[m] && (0, r.jsx)(t.w7, { children: v[m].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: m, name: m, type: "text", "aria-required": "true", ...p(`${m}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." } }), invalid: !!v[m] }) })] }), u && (0, r.jsxs)(t.pg, { children: [(0, r.jsx)(t.Qv, { children: "Waar wil je NL Design System voor gebruiken? (niet verplicht)" }), (0, r.jsx)(t.ue, { children: "Meerdere antwoorden mogelijk." }), c.map((e, n) => (0, r.jsx)(t.Wi, { type: "checkbox", children: (0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.XZ, { name: `${u}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${u}-${n + 1}` }), (0, r.jsx)(t.lX, { htmlFor: `${u}-${n + 1}`, children: e })] }) }, e))] }), h && (0, r.jsxs)(t.Wi, { type: "text", children: [(0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.lX, { htmlFor: h, children: "Aan wat voor projecten werk je? (niet verplicht)" }), (0, r.jsx)(t.ue, { children: "Denk aan mijn-omgevingen, formulieren en/of kaarten." })] }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.gx, { id: h, name: h }) })] }), (0, r.jsx)(t.hE, { children: (0, r.jsx)(t.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, r.jsx)("input", { type: "hidden", name: "next", value: d }), (0, r.jsx)("input", { type: "hidden", name: "a", value: i }), (0, r.jsx)("input", { type: "hidden", name: "l", value: n }), (0, r.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, r.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => d, a: () => r });
   var t = i(75271);
   const s = {},
    a = t.createContext(s);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
