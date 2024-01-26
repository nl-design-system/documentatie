"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7275],
 {
  71853: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => o, contentTitle: () => a, default: () => h, frontMatter: () => l, metadata: () => s, toc: () => d });
   var t = i(11527),
    r = i(47214);
   const l = { title: "Richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Richtlijnen", pagination_label: "Richtlijnen", description: "NL Design System richtlijnen", keywords: ["wat", "design system", "documentatie"] },
    a = "Richtlijnen",
    s = { id: "richtlijnen/README", title: "Richtlijnen NL Design System", description: "NL Design System richtlijnen", source: "@site/docs/richtlijnen/README.md", sourceDirName: "richtlijnen", slug: "/richtlijnen/", permalink: "/richtlijnen/", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/README.md", tags: [], version: "current", frontMatter: { title: "Richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Richtlijnen", pagination_label: "Richtlijnen", description: "NL Design System richtlijnen", keywords: ["wat", "design system", "documentatie"] } },
    o = {},
    d = [
     { value: "Hier vind je onder andere:", id: "hier-vind-je-onder-andere", level: 2 },
     { value: "Gebruik van partials", id: "gebruik-van-partials", level: 2 },
     { value: "Namen voor partials", id: "namen-voor-partials", level: 3 },
     { value: "Namen voor partials", id: "namen-voor-partials-1", level: 3 },
    ];
   function c(e) {
    const n = { a: "a", code: "code", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "richtlijnen", children: "Richtlijnen" }), "\n", (0, t.jsx)(n.p, { children: "In het NL Design System verzamelen we documentatie vanuit de community. Dit kan gebruikt worden om een project te starten of een bestaand product te optimaliseren." }), "\n", (0, t.jsx)(n.h2, { id: "hier-vind-je-onder-andere", children: "Hier vind je onder andere:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "stijl/kleuren", children: "Richtlijnen voor stijl" }) }), "\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "tekst-en-taalgebruik", children: "Richtlijnen voor taalgebruik" }) }), "\n", (0, t.jsx)(n.li, { children: "Richtlijnen voor toegankelijkheid en inclusie" }), "\n", (0, t.jsx)(n.li, { children: "Onderzoeksresultaten van geteste ontwerpen" }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Deze documentatie wordt regelmatig bijgewerkt." }), "\n", (0, t.jsx)(n.h2, { id: "gebruik-van-partials", children: "Gebruik van partials" }), "\n", (0, t.jsxs)(n.p, { children: ["We gebruiken zoveel mogelijk \u2018partials\u2019: stukjes content die los zouden kunnen gebruikt, bijvoorbeeld in een ander design system, worden als partial opgeslagen (bij ons een Markdown-bestand dat met ", (0, t.jsx)(n.code, { children: "_" }), " begint) en dan ge\xefmporteerd."] }), "\n", (0, t.jsx)(n.p, { children: "Voorbeeld, waarin op een pagina over fruit de informatie over appels, peren en bananen in aparte bestanden staat en ge\xefmporteerd wordt:" }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-mdx", children: 'import Apple from "./_apple.md";\nimport Pear from "./_pear.md";\nimport Banana from "./_banana.md";\n\n# Fruits\n\n<Apple />\n<Pear />\n<Banana />\n' }) }), "\n", (0, t.jsx)(n.h3, { id: "namen-voor-partials", children: "Namen voor partials" }), "\n", (0, t.jsx)(n.p, { children: "We willen de namen liefst niet meer veranderen, en dus toekomstbestendig maken (vanuit de \u2018cool URI's don't change\u2019 gedachte)." }), "\n", (0, t.jsx)(n.p, { children: "Enkele richtlijnen:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "gebruik enkelvoud tenzij meervoud noodzakelijk is" }), "\n", (0, t.jsx)(n.li, { children: "gebruik keywords uit HTML/CSS/SVG voor IDs/slugs/filenames" }), "\n", (0, t.jsx)(n.li, { children: "gebruik prefixes en hi\xebrarchie in prefixes zodat door sorteren automatisch groepjes ontstaan" }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Voorbeelden van namen voor label-gerelateerde partials:" }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { children: "_label-position.md\n_label-text.md\n_label-visibility.md\n_label-no-activate.md\n_label-text-visibility.md\n" }) }), "\n", (0, t.jsx)(n.h3, { id: "namen-voor-partials-1", children: "Namen voor partials" }), "\n", (0, t.jsx)(n.p, { children: "We willen de namen liefst niet meer veranderen, en dus toekomstbestendig maken (vanuit de \u2018cool URI's don't change\u2019 gedachte)." }), "\n", (0, t.jsx)(n.p, { children: "Enkele richtlijnen:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "gebruik enkelvoud tenzij meervoud noodzakelijk is" }), "\n", (0, t.jsx)(n.li, { children: "gebruik keywords uit HTML/CSS/SVG voor IDs/slugs/filenames" }), "\n", (0, t.jsx)(n.li, { children: "gebruik prefixes en hi\xebrarchie in prefixes zodat door sorteren automatisch groepjes ontstaan" }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Voorbeelden van namen voor label-gerelateerde partials:" }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { children: "_label-position.md\n_label-text.md\n_label-visibility.md\n_label-no-activate.md\n_label-text-visibility.md\n" }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => a });
   var t = i(50959);
   const r = {},
    l = t.createContext(r);
   function a(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
