"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8218],
 {
  35306: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => s, toc: () => h });
   var i = t(11527),
    o = t(47214),
    r = t(82415);
   const a = { title: "Op de hoogte blijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Op de hoogte blijven", pagination_label: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", keywords: ["heartbeat", "blog", "slack"] },
    l = "Op de hoogte blijven",
    s = { id: "project/blijf-op-de-hoogte", title: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", source: "@site/docs/project/blijf-op-de-hoogte.mdx", sourceDirName: "project", slug: "/project/blijf-op-de-hoogte", permalink: "/en/project/blijf-op-de-hoogte", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx", tags: [], version: "current", frontMatter: { title: "Op de hoogte blijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Op de hoogte blijven", pagination_label: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", keywords: ["heartbeat", "blog", "slack"] }, sidebar: "project", previous: { title: "Wie doet mee?", permalink: "/en/project/wie-doet-mee" }, next: { title: "Links", permalink: "/en/project/links" } },
    d = {},
    h = [{ value: "Nieuwsbrief", id: "nieuwsbrief", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "op-de-hoogte-blijven", children: "Op de hoogte blijven" }), "\n", (0, i.jsx)(n.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "/events/heartbeat/aanmelden", children: "Neem deel aan onze Heartbeat-sessies" }), " of ", (0, i.jsx)(n.a, { href: "/events/heartbeat", children: "kijk opgenomen sessies terug" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#nieuwsbrief", children: "Meld je aan voor onze nieuwsbrief" }), " (hieronder)."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "/blog", children: "Lees ons blog voor uitgebreidere interviews en artikelen" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://praatmee.codefor.nl", children: "Word lid van het #nl-design-system Slack kanaal" }), " op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen."] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "nieuwsbrief", children: "Nieuwsbrief" }), "\n", (0, i.jsx)(n.p, { children: "We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven." }), "\n", (0, i.jsx)(r.Z, { listId: "ceamfdjtu3", emailFieldId: "2x8bD6GMu5", firstNameFieldId: "40GfQGdmHU", thanksPage: "https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { Z: () => l });
   var i = t(83778),
    o = t(50959),
    r = t(39690),
    a = t(11527);
   const l = (e) => {
    let { listId: n = "", laPostaId: t = "", thanksPage: l = "", emailFieldId: s = "", firstNameFieldId: d = "" } = e;
    const {
      register: h,
      handleSubmit: c,
      formState: { errors: m },
     } = (0, r.cI)(),
     p = (0, o.useRef)(null);
    return (0, a.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: p,
     onSubmit: c(() => {
      p.current.submit();
     }),
     children: [(0, a.jsxs)(i.Wi, { type: "email", children: [(0, a.jsx)(i.nv, { children: (0, a.jsx)(i.lX, { htmlFor: `id-${s}`, children: "E-mailadres" }) }), m[s] && (0, a.jsx)(i.w7, { children: (0, a.jsx)(i.nv, { children: m[s].message }) }), (0, a.jsx)(i.nv, { children: (0, a.jsx)(i.fE, { id: `id-${s}`, name: s, type: "email", "aria-required": "true", autoComplete: "email", ...h(`${s}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!m[s] }) })] }), (0, a.jsxs)(i.Wi, { type: "text", children: [(0, a.jsx)(i.nv, { children: (0, a.jsx)(i.lX, { htmlFor: d, children: "Naam (niet verplicht)" }) }), (0, a.jsx)(i.nv, { children: (0, a.jsx)(i.fE, { id: d, name: d, type: "text", autoComplete: "given-name" }) })] }), (0, a.jsx)(i.hE, { children: (0, a.jsx)(i.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, a.jsx)("input", { type: "hidden", name: "next", value: l }), (0, a.jsx)("input", { type: "hidden", name: "a", value: t }), (0, a.jsx)("input", { type: "hidden", name: "l", value: n }), (0, a.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, a.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => a });
   var i = t(50959);
   const o = {},
    r = i.createContext(o);
   function a(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
