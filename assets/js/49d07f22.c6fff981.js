"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [75524],
 {
  70486: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => s, contentTitle: () => a, default: () => c, frontMatter: () => t, metadata: () => d, toc: () => k });
   var r = n(11527),
    l = n(47214),
    o = n(83778);
   const t = { title: "Makkelijk in te vullen | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Makkelijk in te vullen", sidebar_position: 3, pagination_label: "Makkelijk in te vullen", description: "Maak het de gebruiker makkelijker door bijvoorbeeld informatie vooraf in te vullen", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    a = "Makkelijk in te vullen",
    d = { id: "richtlijnen/formulieren/makkelijk-in-te-vullen", title: "Makkelijk in te vullen | Formulieren", description: "Maak het de gebruiker makkelijker door bijvoorbeeld informatie vooraf in te vullen", source: "@site/docs/richtlijnen/formulieren/03-makkelijk-in-te-vullen.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/makkelijk-in-te-vullen", permalink: "/richtlijnen/formulieren/makkelijk-in-te-vullen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/03-makkelijk-in-te-vullen.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Makkelijk in te vullen | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Makkelijk in te vullen", sidebar_position: 3, pagination_label: "Makkelijk in te vullen", description: "Maak het de gebruiker makkelijker door bijvoorbeeld informatie vooraf in te vullen", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Duidelijk", permalink: "/richtlijnen/formulieren/duidelijk" }, next: { title: "Goed gecontroleerd", permalink: "/richtlijnen/formulieren/goed-gecontroleerd" } },
    s = {},
    k = [
     { value: "Vul bekende informatie in waar mogelijk", id: "vul-bekende-informatie-in-waar-mogelijk", level: 2 },
     { value: "Bereid velden voor op autocomplete", id: "bereid-velden-voor-op-autocomplete", level: 2 },
     { value: "Check of informatie \xe8cht nodig is", id: "check-of-informatie-\xe8cht-nodig-is", level: 2 },
     { value: "Voorkom herhaling", id: "voorkom-herhaling", level: 2 },
    ];
   function u(e) {
    const i = { a: "a", code: "code", h1: "h1", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(i.h1, { id: "makkelijk-in-te-vullen", children: "Makkelijk in te vullen" }), "\n", (0, r.jsx)(o.nv, { lead: !0, children: "Maak het de gebruiker makkelijker door bijvoorbeeld informatie vooraf in te vullen." }), "\n", (0, r.jsx)(i.h2, { id: "vul-bekende-informatie-in-waar-mogelijk", children: "Vul bekende informatie in waar mogelijk" }), "\n", (0, r.jsx)(i.p, { children: "Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld een hoop informatie beschikbaar, die zou kunnen worden geburikt om velden vooraf in te vullen." }), "\n", (0, r.jsx)(i.h2, { id: "bereid-velden-voor-op-autocomplete", children: "Bereid velden voor op autocomplete" }), "\n", (0, r.jsxs)(i.p, { children: ["Met het ", (0, r.jsx)(i.code, { children: "autocomplete" }), " attribuut in HTML kun je per veld aangeven wat voor soort invoer er verwacht wordt, zodat de browser bekende informatie kan voorstellen als autosuggest-opties. Gebruik je bijvoorbeeld ", (0, r.jsx)(i.code, { children: 'autocomplete="street-address"' }), ", dan kan de browser suggesties doen. Dit kan gebruikers een hoop typewerk schelen."] }), "\n", (0, r.jsx)(i.h2, { id: "check-of-informatie-\xe8cht-nodig-is", children: "Check of informatie \xe8cht nodig is" }), "\n", (0, r.jsxs)(i.p, { children: ["Kortere formulieren kunnen sneller worden ingevuld. Ga dus per vraag na of deze echt nodig is.\nLees ook de ", (0, r.jsx)(i.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/vragen", children: "richtlijnen over uit te vragen informatie" }), "."] }), "\n", (0, r.jsx)(i.h2, { id: "voorkom-herhaling", children: "Voorkom herhaling" }), "\n", (0, r.jsxs)(i.p, { children: ["Om zeker te weten dat iemand het juiste e-mailadres heeft ingevuld, wordt in sommige formulieren de vraag twee keer gesteld en dan vergeleken. Dit kan gebruikersvriendelijker!\nLees verder bij de ", (0, r.jsx)(i.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/vragen", children: "richtlijnen over uit te vragen informatie" }), "."] })] });
   }
   function c(e = {}) {
    const { wrapper: i } = { ...(0, l.a)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  47214: (e, i, n) => {
   n.d(i, { Z: () => a, a: () => t });
   var r = n(50959);
   const l = {},
    o = r.createContext(l);
   function t(e) {
    const i = r.useContext(o);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e]
    );
   }
   function a(e) {
    let i;
    return (i = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : t(e.components)), r.createElement(o.Provider, { value: i }, e.children);
   }
  },
 },
]);
