"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [909],
 {
  4547: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => a, default: () => c, frontMatter: () => o, metadata: () => s, toc: () => v });
   var t = i(1527),
    r = i(7214);
   const o = { title: "Privacyverklaring", hide_title: !0, hide_table_of_contents: !0, pagination_label: "Privacyverklaring", slug: "/privacyverklaring" },
    a = "Privacyverklaring",
    s = { id: "footer/privacyverklaring", title: "Privacyverklaring", description: "Voor verschillende activiteiten van NL Design System geef je persoonlijke gegevens op. Hieronder vind je wat we met deze gegevens doen.", source: "@site/docs/footer/privacyverklaring.md", sourceDirName: "footer", slug: "/privacyverklaring", permalink: "/privacyverklaring", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/footer/privacyverklaring.md", tags: [], version: "current", frontMatter: { title: "Privacyverklaring", hide_title: !0, hide_table_of_contents: !0, pagination_label: "Privacyverklaring", slug: "/privacyverklaring" } },
    l = {},
    v = [
     { value: "Wat doen we met je persoonlijke informatie?", id: "wat-doen-we-met-je-persoonlijke-informatie", level: 2 },
     { value: "Wat doen we met de bezoekersgegevens?", id: "wat-doen-we-met-de-bezoekersgegevens", level: 2 },
     { value: "Inschrijvingen", id: "inschrijvingen", level: 2 },
    ];
   function d(e) {
    const n = { h1: "h1", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "privacyverklaring", children: "Privacyverklaring" }), "\n", (0, t.jsx)(n.p, { children: "Voor verschillende activiteiten van NL Design System geef je persoonlijke gegevens op. Hieronder vind je wat we met deze gegevens doen." }), "\n", (0, t.jsx)(n.h2, { id: "wat-doen-we-met-je-persoonlijke-informatie", children: "Wat doen we met je persoonlijke informatie?" }), "\n", (0, t.jsx)(n.p, { children: "We geven je persoonlijke gegevens niet aan derden door, tenzij we hiertoe wettelijk verplicht zijn of dit nodig is voor het organiseren van activiteiten.\nAls je je opgeeft voor de nieuwsbrief, dan gebruiken we je mailadres alleen voor het sturen van nieuwsbrieven en het informeren over komende activiteiten (en nergens anders voor)." }), "\n", (0, t.jsx)(n.h2, { id: "wat-doen-we-met-de-bezoekersgegevens", children: "Wat doen we met de bezoekersgegevens?" }), "\n", (0, t.jsx)(n.p, { children: "Op dit moment analyseren wij geen bezoekersgegevens." }), "\n", (0, t.jsx)(n.h2, { id: "inschrijvingen", children: "Inschrijvingen" }), "\n", (0, t.jsx)(n.p, { children: "De activiteiten die we organiseren zijn bedoeld om samenwerken tussen leden van de community te stimuleren.\nJe gegevens die je invult bij een inschrijving, gebruiken we om met je te communiceren over dat evenement en je na het evenement te attenderen op vergelijkbare evenementen. Voor de logistiek van het evenement zullen we de aanmeldgegevens gebruiken, bijvoorbeeld om batches te maken.\nGegevens die je invult bij aanmelding voor de nieuwsbrief gebruiken we alleen om onze nieuwsbrieven te versturen." })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  7214: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => a });
   var t = i(959);
   const r = {},
    o = t.createContext(r);
   function a(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
