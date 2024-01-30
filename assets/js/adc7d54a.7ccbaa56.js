"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [134],
 {
  60813: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => p, frontMatter: () => o, metadata: () => d, toc: () => m });
   var i = t(11527),
    s = t(47214),
    a = t(82415);
   const o = { title: "Aanmelden voor de Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden" },
    r = "Meld je aan voor het Design Open Hour",
    d = { id: "community/events/design-open-hour/aanmelden", title: "Aanmelden voor de Design Open Hour", description: "Design Open Hours zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events.", source: "@site/docs/community/events/design-open-hour/aanmelden.mdx", sourceDirName: "community/events/design-open-hour", slug: "/events/design-open-hour/aanmelden", permalink: "/events/design-open-hour/aanmelden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx", tags: [], version: "current", frontMatter: { title: "Aanmelden voor de Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden" }, sidebar: "community", previous: { title: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/events/design-open-hour" }, next: { title: "Wie doet mee?", permalink: "/community/wie-doet-mee" } },
    l = {},
    m = [];
   function u(e) {
    const n = { h1: "h1", p: "p", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: "meld-je-aan-voor-het-design-open-hour", children: "Meld je aan voor het Design Open Hour" }), "\n", (0, i.jsx)(n.p, { children: "Design Open Hours zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige events." }), "\n", (0, i.jsx)(n.p, { children: "We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting." }), "\n", (0, i.jsx)(a.Z, { listId: "iklwgql4w2", emailFieldId: "APNH2BBGKm", firstNameFieldId: "QQjRkYyXpE", thanksPage: "https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { Z: () => r });
   var i = t(83778),
    s = t(50959),
    a = t(39690),
    o = t(11527);
   const r = (e) => {
    let { listId: n = "", laPostaId: t = "", thanksPage: r = "", emailFieldId: d = "", firstNameFieldId: l = "" } = e;
    const {
      register: m,
      handleSubmit: u,
      formState: { errors: p },
     } = (0, a.cI)(),
     c = (0, s.useRef)(null);
    return (0, o.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: c,
     onSubmit: u(() => {
      c.current.submit();
     }),
     children: [(0, o.jsxs)(i.Wi, { type: "email", children: [(0, o.jsx)(i.nv, { children: (0, o.jsx)(i.lX, { htmlFor: `id-${d}`, children: "E-mailadres" }) }), p[d] && (0, o.jsx)(i.w7, { children: (0, o.jsx)(i.nv, { children: p[d].message }) }), (0, o.jsx)(i.nv, { children: (0, o.jsx)(i.fE, { id: `id-${d}`, name: d, type: "email", "aria-required": "true", autoComplete: "email", ...m(`${d}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!p[d] }) })] }), (0, o.jsxs)(i.Wi, { type: "text", children: [(0, o.jsx)(i.nv, { children: (0, o.jsx)(i.lX, { htmlFor: l, children: "Naam (niet verplicht)" }) }), (0, o.jsx)(i.nv, { children: (0, o.jsx)(i.fE, { id: l, name: l, type: "text", autoComplete: "given-name" }) })] }), (0, o.jsx)(i.hE, { children: (0, o.jsx)(i.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, o.jsx)("input", { type: "hidden", name: "next", value: r }), (0, o.jsx)("input", { type: "hidden", name: "a", value: t }), (0, o.jsx)("input", { type: "hidden", name: "l", value: n }), (0, o.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, o.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => o });
   var i = t(50959);
   const s = {},
    a = i.createContext(s);
   function o(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
