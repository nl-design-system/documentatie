"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2746],
 {
  74985: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => m });
   var t = i(11527),
    s = i(80877),
    a = i(82415);
   const r = { title: "Sluit je aan bij onze community", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Sluit je aan", pagination_label: "Sluit je aan", description: "Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.", keywords: ["nl design system"] },
    l = void 0,
    o = { id: "community/sluit-je-aan", title: "Sluit je aan bij onze community", description: "Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.", source: "@site/docs/community/sluit-je-aan.mdx", sourceDirName: "community", slug: "/community/sluit-je-aan", permalink: "/community/sluit-je-aan", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx", tags: [], version: "current", frontMatter: { title: "Sluit je aan bij onze community", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Sluit je aan", pagination_label: "Sluit je aan", description: "Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.", keywords: ["nl design system"] }, sidebar: "community", previous: { title: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/community/events/estafettemodeldag" }, next: { title: "Wie doet mee?", permalink: "/community/wie-doet-mee" } },
    d = {},
    m = [
     { value: "Voor wie?", id: "voor-wie", level: 2 },
     { value: "Aanmelden", id: "aanmelden", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsxs)(n.p, { children: ["De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, UX researchers en toegankelijkheidsspecialisten.Samen met het ", (0, t.jsx)(n.a, { href: "/project/kernteam", children: "kernteam" }), " verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen."] }), "\n", (0, t.jsx)(n.p, { children: "Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend." }), "\n", (0, t.jsx)(n.h2, { id: "voor-wie", children: "Voor wie?" }), "\n", (0, t.jsx)(n.p, { children: "Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen." }), "\n", (0, t.jsx)(n.p, { children: "Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom." }), "\n", (0, t.jsx)(n.p, { children: "Voordelen van aanmelden:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communityborrel." }), "\n", (0, t.jsx)(n.li, { children: "Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses." }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "aanmelden", children: "Aanmelden" }), "\n", "\n", (0, t.jsx)(a.Z, { listId: "tba1xjir6z", emailFieldId: "T5JEj4xbpn", firstNameFieldId: "kBqgRi7iqw", orgId: "OmROkCnDOY", interestsId: "g1xwvlgA29", interests: ["Design", "Development", "Management", "Richtlijnen", "Componenten", "Toegankelijkheid", "Gebruikersonderzoek", "CMS"], workAreasId: "oAPGPtHrUt", thanksPage: "https://nldesignsystem.nl/community/sluit-je-aan/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => l });
   var t = i(83778),
    s = i(50959),
    a = i(6556),
    r = i(11527);
   const l = (e) => {
    let { listId: n = "", laPostaId: i = "", thanksPage: l = "", emailFieldId: o = "", firstNameFieldId: d = "", orgId: m = "", interestsId: c = "", interests: u = [], workAreasId: j = "" } = e;
    const {
      register: p,
      handleSubmit: h,
      formState: { errors: x },
     } = (0, a.cI)(),
     v = (0, s.useRef)(null);
    return (0, r.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: v,
     onSubmit: h(() => {
      v.current.submit();
     }),
     children: [(0, r.jsxs)(t.Wi, { type: "email", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: `id-${o}`, children: "E-mailadres" }) }), x[o] && (0, r.jsx)(t.w7, { children: (0, r.jsx)(t.nv, { children: x[o].message }) }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: `id-${o}`, name: o, type: "email", "aria-required": "true", autoComplete: "email", ...p(`${o}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!x[o] }) })] }), (0, r.jsxs)(t.Wi, { type: "text", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: d, children: "Naam (niet verplicht)" }) }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: d, name: d, type: "text", autoComplete: "given-name" }) })] }), m && (0, r.jsxs)(t.Wi, { type: "text", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: m, children: "Organisatie (niet verplicht)" }) }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: m, name: m, type: "text" }) })] }), c && (0, r.jsxs)(t.pg, { children: [(0, r.jsx)(t.Qv, { children: "Waar ligt je interesse? (meerdere opties mogelijk; niet verplicht)" }), u.map((e, n) => (0, r.jsx)(t.Wi, { type: "checkbox", children: (0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.XZ, { name: `${c}[]`, value: n + 1, id: `${c}-${n + 1}` }), (0, r.jsx)(t.lX, { htmlFor: `${c}-${n + 1}`, children: e })] }) }, e))] }), j && (0, r.jsxs)(t.Wi, { type: "text", children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: j, children: "Waar werk je momenteel vooral aan? Denk aan mijn-omgevingen, formulieren, kaarten. (niet verplicht)" }) }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: j, name: j, type: "text" }) })] }), (0, r.jsx)(t.hE, { children: (0, r.jsx)(t.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, r.jsx)("input", { type: "hidden", name: "next", value: l }), (0, r.jsx)("input", { type: "hidden", name: "a", value: i }), (0, r.jsx)("input", { type: "hidden", name: "l", value: n }), (0, r.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, r.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  80877: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => r });
   var t = i(50959);
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
