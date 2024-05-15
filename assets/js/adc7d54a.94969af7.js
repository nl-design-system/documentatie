"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [134],
 {
  8858: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => r, metadata: () => l, toc: () => m });
   var i = t(11527),
    s = t(80877),
    a = t(82415);
   const r = { title: "Aanmelden voor de Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden" },
    o = "Meld je aan voor het Design Open Hour",
    l = { id: "community/events/design-open-hour/aanmelden", title: "Aanmelden voor de Design Open Hour", description: "Design Open Hours zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.", source: "@site/docs/community/events/design-open-hour/aanmelden.mdx", sourceDirName: "community/events/design-open-hour", slug: "/events/design-open-hour/aanmelden", permalink: "/events/design-open-hour/aanmelden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx", tags: [], version: "current", frontMatter: { title: "Aanmelden voor de Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden" }, sidebar: "community", previous: { title: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/events/design-open-hour" }, next: { title: "Design Open Dag is een samenwerkdag waar designers met elkaar werken aan ontwerpproblemen.", permalink: "/events/design-open-dag" } },
    d = {},
    m = [];
   function p(e) {
    const n = { h1: "h1", p: "p", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: "meld-je-aan-voor-het-design-open-hour", children: "Meld je aan voor het Design Open Hour" }), "\n", (0, i.jsx)(n.p, { children: "Design Open Hours zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events." }), "\n", (0, i.jsx)(n.p, { children: "We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting." }), "\n", (0, i.jsx)(a.Z, { listId: "iklwgql4w2", emailFieldId: "APNH2BBGKm", firstNameFieldId: "QQjRkYyXpE", thanksPage: "https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { Z: () => o });
   var i = t(83778),
    s = t(50959),
    a = t(6556),
    r = t(11527);
   const o = (e) => {
    let { listId: n = "", laPostaId: t = "", thanksPage: o = "", emailFieldId: l = "", firstNameFieldId: d = "", orgId: m = "", interestsId: p = "", interests: c = [], workAreasId: u = "" } = e;
    const {
      register: h,
      handleSubmit: g,
      formState: { errors: j },
     } = (0, a.cI)(),
     v = (0, s.useRef)(null);
    return (0, r.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: v,
     onSubmit: g(() => {
      v.current.submit();
     }),
     children: [(0, r.jsxs)(i.Wi, { type: "email", children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: `id-${l}`, children: "E-mailadres" }) }), j[l] && (0, r.jsx)(i.w7, { children: (0, r.jsx)(i.nv, { children: j[l].message }) }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: `id-${l}`, name: l, type: "email", "aria-required": "true", autoComplete: "email", ...h(`${l}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!j[l] }) })] }), (0, r.jsxs)(i.Wi, { type: "text", children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: d, children: "Naam (niet verplicht)" }) }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: d, name: d, type: "text", autoComplete: "given-name" }) })] }), m && (0, r.jsxs)(i.Wi, { type: "text", children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: m, children: "Organisatie (niet verplicht)" }) }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: m, name: m, type: "text" }) })] }), p && (0, r.jsxs)(i.pg, { children: [(0, r.jsx)(i.Qv, { children: "Waar ligt je interesse? (meerdere opties mogelijk; niet verplicht)" }), c.map((e, n) => (0, r.jsx)(i.Wi, { type: "checkbox", children: (0, r.jsxs)(i.nv, { children: [(0, r.jsx)(i.XZ, { name: `${p}[]`, value: n + 1, id: `${p}-${n + 1}` }), (0, r.jsx)(i.lX, { htmlFor: `${p}-${n + 1}`, children: e })] }) }, e))] }), u && (0, r.jsxs)(i.Wi, { type: "text", children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: u, children: "Waar werk je momenteel vooral aan? Denk aan mijn-omgevingen, formulieren, kaarten. (niet verplicht)" }) }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: u, name: u, type: "text" }) })] }), (0, r.jsx)(i.hE, { children: (0, r.jsx)(i.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, r.jsx)("input", { type: "hidden", name: "next", value: o }), (0, r.jsx)("input", { type: "hidden", name: "a", value: t }), (0, r.jsx)("input", { type: "hidden", name: "l", value: n }), (0, r.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, r.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => r });
   var i = t(50959);
   const s = {},
    a = i.createContext(s);
   function r(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
