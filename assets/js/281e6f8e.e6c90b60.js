"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8218],
 {
  84550: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => m, frontMatter: () => l, metadata: () => o, toc: () => h });
   var i = t(11527),
    r = t(80877),
    s = t(82415);
   const l = { title: "Op de hoogte blijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Op de hoogte blijven", pagination_label: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", keywords: ["heartbeat", "blog", "slack"] },
    a = "Op de hoogte blijven",
    o = { id: "project/blijf-op-de-hoogte", title: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", source: "@site/docs/project/blijf-op-de-hoogte.mdx", sourceDirName: "project", slug: "/project/blijf-op-de-hoogte", permalink: "/project/blijf-op-de-hoogte", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx", tags: [], version: "current", frontMatter: { title: "Op de hoogte blijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Op de hoogte blijven", pagination_label: "Op de hoogte blijven", description: "De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.", keywords: ["heartbeat", "blog", "slack"] }, sidebar: "project", previous: { title: "Kernteam", permalink: "/project/kernteam" }, next: { title: "Links", permalink: "/project/links" } },
    d = {},
    h = [{ value: "Nieuwsbrief", id: "nieuwsbrief", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "op-de-hoogte-blijven", children: "Op de hoogte blijven" }), "\n", (0, i.jsx)(n.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "/events/heartbeat/aanmelden", children: "Neem deel aan onze Heartbeat-sessies" }), " of ", (0, i.jsx)(n.a, { href: "/events/heartbeat", children: "kijk opgenomen sessies terug" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#nieuwsbrief", children: "Meld je aan voor onze nieuwsbrief" }), " (hieronder)."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "/blog", children: "Lees ons blog voor uitgebreidere interviews en artikelen" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://praatmee.codefor.nl", children: "Word lid van het #nl-design-system Slack kanaal" }), " op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen."] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "nieuwsbrief", children: "Nieuwsbrief" }), "\n", (0, i.jsx)(n.p, { children: "We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven." }), "\n", (0, i.jsx)(s.Z, { listId: "ceamfdjtu3", emailFieldId: "2x8bD6GMu5", firstNameFieldId: "40GfQGdmHU", thanksPage: "https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt", laPostaId: "iyihtuzpiq" })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { Z: () => a });
   var i = t(83778),
    r = t(50959),
    s = t(6556),
    l = t(11527);
   const a = (e) => {
    let { listId: n = "", laPostaId: t = "", thanksPage: a = "", emailFieldId: o = "", firstNameFieldId: d = "", orgId: h = "", interestsId: c = "", interests: m = [], workAreasId: p = "" } = e;
    const {
      register: j,
      handleSubmit: u,
      formState: { errors: v },
     } = (0, s.cI)(),
     g = (0, r.useRef)(null);
    return (0, l.jsxs)("form", {
     method: "post",
     action: "https://nl-design-system.email-provider.eu/subscribe/post/index.php",
     noValidate: !0,
     acceptCharset: "utf-8",
     ref: g,
     onSubmit: u(() => {
      g.current.submit();
     }),
     children: [(0, l.jsxs)(i.Wi, { type: "email", children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: `id-${o}`, children: "E-mailadres" }) }), v[o] && (0, l.jsx)(i.w7, { children: v[o].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: `id-${o}`, name: o, type: "email", autoComplete: "email", "aria-required": "true", ...j(`${o}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." }, pattern: { value: /\S+@\S+\.\S+/, message: "Dit is geen correct emailadres." } }), invalid: !!v[o] }) })] }), (0, l.jsxs)(i.Wi, { type: "text", children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: d, children: "Naam" }) }), v[d] && (0, l.jsx)(i.w7, { children: v[d].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: d, name: d, type: "text", autoComplete: "given-name", "aria-required": "true", ...j(`${d}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." } }), invalid: !!v[d] }) })] }), h && (0, l.jsxs)(i.Wi, { type: "text", children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: h, children: "Organisatie" }) }), v[h] && (0, l.jsx)(i.w7, { children: v[h].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: h, name: h, type: "text", "aria-required": "true", ...j(`${h}`, { required: { value: !0, message: "Dit veld is verplicht, maar het is niet ingevuld." } }), invalid: !!v[h] }) })] }), c && (0, l.jsxs)(i.pg, { children: [(0, l.jsx)(i.Qv, { children: "Waar wil je NL Design System voor gebruiken? (niet verplicht)" }), (0, l.jsx)(i.ue, { children: "Meerdere antwoorden mogelijk." }), m.map((e, n) => (0, l.jsx)(i.Wi, { type: "checkbox", children: (0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.XZ, { name: `${c}[]`, value: n + 1, id: `${c}-${n + 1}` }), (0, l.jsx)(i.lX, { htmlFor: `${c}-${n + 1}`, children: e })] }) }, e))] }), p && (0, l.jsxs)(i.Wi, { type: "text", children: [(0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.lX, { htmlFor: p, children: "Aan wat voor projecten werk je? (niet verplicht)" }), (0, l.jsx)(i.ue, { children: "Denk aan mijn-omgevingen, formulieren en/of kaarten." })] }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.gx, { id: p, name: p }) })] }), (0, l.jsx)(i.hE, { children: (0, l.jsx)(i.zx, { type: "submit", appearance: "primary-action-button", children: "Aanmelden" }) }), (0, l.jsx)("input", { type: "hidden", name: "next", value: a }), (0, l.jsx)("input", { type: "hidden", name: "a", value: t }), (0, l.jsx)("input", { type: "hidden", name: "l", value: n }), (0, l.jsx)("input", { name: "osnD9cWRI3", autoComplete: "on", id: "id-osnD9cWRI3", type: "hidden", value: "NLDS website" }), (0, l.jsx)("input", { autoComplete: "new-password", type: "email", id: "email", name: "email", placeholder: "Your e-mail here", className: "sr-only", "aria-hidden": "true" })],
    });
   };
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => l });
   var i = t(50959);
   const r = {},
    s = i.createContext(r);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
