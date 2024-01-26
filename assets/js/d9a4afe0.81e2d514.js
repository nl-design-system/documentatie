"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2292],
 {
  51249: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => s, contentTitle: () => d, default: () => m, frontMatter: () => o, metadata: () => a, toc: () => u });
   var r = n(11527),
    t = n(47214),
    l = n(83778);
   const o = { title: "Duidelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Duidelijk", sidebar_position: 2, pagination_label: "Duidelijk", description: "Een duidelijk formulier zorgt dat gebruikers met meer vertrouwen en zelfstandiger door je formulier kunnen gaan", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "layout"] },
    d = "Duidelijk",
    a = { id: "richtlijnen/formulieren/duidelijk", title: "Duidelijk | Formulieren", description: "Een duidelijk formulier zorgt dat gebruikers met meer vertrouwen en zelfstandiger door je formulier kunnen gaan", source: "@site/docs/richtlijnen/formulieren/02-duidelijk.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/duidelijk", permalink: "/richtlijnen/formulieren/duidelijk", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/02-duidelijk.mdx", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Duidelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Duidelijk", sidebar_position: 2, pagination_label: "Duidelijk", description: "Een duidelijk formulier zorgt dat gebruikers met meer vertrouwen en zelfstandiger door je formulier kunnen gaan", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "layout"] }, sidebar: "richtlijnen", previous: { title: "Toegankelijk", permalink: "/richtlijnen/formulieren/toegankelijk" }, next: { title: "Makkelijk in te vullen", permalink: "/richtlijnen/formulieren/makkelijk-in-te-vullen" } },
    s = {},
    u = [
     { value: "Vermijd belangrijke informatie in tooltips", id: "vermijd-belangrijke-informatie-in-tooltips", level: 2 },
     { value: "Leg jargon uit", id: "leg-jargon-uit", level: 2 },
     { value: "Houd taal consistent", id: "houd-taal-consistent", level: 2 },
     { value: "Duidelijke labels", id: "duidelijke-labels", level: 2 },
     { value: "Leg uit waarom informatie nodig is", id: "leg-uit-waarom-informatie-nodig-is", level: 2 },
    ];
   function j(e) {
    const i = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(i.h1, { id: "duidelijk", children: "Duidelijk" }), "\n", (0, r.jsx)(l.nv, { lead: !0, children: (0, r.jsx)(i.p, { children: "Een duidelijk formulier zorgt dat gebruikers met meer vertrouwen en zelfstandiger door je formulier kunnen gaan." }) }), "\n", (0, r.jsx)(i.h2, { id: "vermijd-belangrijke-informatie-in-tooltips", children: "Vermijd belangrijke informatie in tooltips" }), "\n", (0, r.jsx)(i.p, { children: "Informatie die nodig is om een veld in te kunnen vullen, kan het beste worden opgenomen als onderdeel van de content, bijvoorbeeld als omschrijving onder het label. Vermijd het gebruik van tooltips (of placeholders) voor belangrijke informatie.." }), "\n", (0, r.jsx)(i.h2, { id: "leg-jargon-uit", children: "Leg jargon uit" }), "\n", (0, r.jsx)(i.p, { children: "Soms is het niet te voorkomen dat een formulier jargon bevat, bijvoorbeeld omdat termen wettelijk zijn vastgelegd. Leg in zulke gevallen duidelijk uit wat zo'n term betekent." }), "\n", (0, r.jsx)(i.h2, { id: "houd-taal-consistent", children: "Houd taal consistent" }), "\n", (0, r.jsx)(i.p, { children: "Zorg ervoor dat door het hele formulier voor dezelfde dingen dezelfde termen worden gebruikt." }), "\n", (0, r.jsx)(i.h2, { id: "duidelijke-labels", children: "Duidelijke labels" }), "\n", (0, r.jsxs)(i.p, { children: ["Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Waar nodig wordt er ook extra hulp geboden worden, zoals een omschrijving van waar een BSN-nummer te vinden is.\nLees hierover meer op de ", (0, r.jsx)(i.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over labels" }), "."] }), "\n", (0, r.jsx)(i.h2, { id: "leg-uit-waarom-informatie-nodig-is", children: "Leg uit waarom informatie nodig is" }), "\n", (0, r.jsxs)(i.p, { children: ["Soms lijkt een vraag overbodig, terwijl deze essentieel is. In zulke gevallen is het een goed idee een korte uitleg toe te vragen, om bijvoorbeeld het doel te beschrijven.\nLees hierover meer op de ", (0, r.jsx)(i.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over uit te vragen informatie" }), "."] })] });
   }
   function m(e = {}) {
    const { wrapper: i } = { ...(0, t.a)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
  47214: (e, i, n) => {
   n.d(i, { Z: () => d, a: () => o });
   var r = n(50959);
   const t = {},
    l = r.createContext(t);
   function o(e) {
    const i = r.useContext(l);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function d(e) {
    let i;
    return (i = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(l.Provider, { value: i }, e.children);
   }
  },
 },
]);
