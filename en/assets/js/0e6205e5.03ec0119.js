"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [80951],
 {
  67497: (e, n, t) => {
   t.d(n, { Y: () => l });
   var o = t(87462),
    a = t(67294),
    d = t(22004),
    i = t(86010);
   const m = { "video-player": "video-player__6fg" },
    l = (e) => {
     let { videoId: n, className: t, ...l } = e;
     return a.createElement(d.Z, (0, o.Z)({ url: `https://youtube.com/watch?v=${n}`, className: `${(0, i.Z)(m["video-player"])} ${t}`, width: "100%", height: "100%", controls: !0 }, l, { config: { youtube: { playerVars: { disablekb: 1 } } } }));
    };
  },
  31067: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => m, default: () => k, frontMatter: () => i, metadata: () => l, toc: () => s });
   var o = t(87462),
    a = (t(67294), t(3905)),
    d = t(67497);
   const i = { title: "Zelf componenten maken", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zelf componenten maken", sidebar_position: 4, pagination_label: "Zelf componenten maken", description: "Uitleg hoe je zelf componenten kan maken in Figma met design tokens.", keywords: ["index", "designer", "meedoen", "componenten", "figma"] },
    m = "Zelf componenten maken",
    l = { unversionedId: "meedoen/als-designer/zelf-componenten-maken", id: "meedoen/als-designer/zelf-componenten-maken", title: "Zelf componenten maken", description: "Uitleg hoe je zelf componenten kan maken in Figma met design tokens.", source: "@site/docs/meedoen/als-designer/zelf-componenten-maken.mdx", sourceDirName: "meedoen/als-designer", slug: "/meedoen/als-designer/zelf-componenten-maken", permalink: "/en/meedoen/als-designer/zelf-componenten-maken", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-designer/zelf-componenten-maken.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Zelf componenten maken", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zelf componenten maken", sidebar_position: 4, pagination_label: "Zelf componenten maken", description: "Uitleg hoe je zelf componenten kan maken in Figma met design tokens.", keywords: ["index", "designer", "meedoen", "componenten", "figma"] }, sidebar: "meedoen", previous: { title: "Stappenplan", permalink: "/en/meedoen/als-designer/stappenplan" }, next: { title: "Voorbeeld thema", permalink: "/en/meedoen/als-designer/voorbeeld-thema" } },
    r = {},
    s = [
     { value: "Demo sticker maken", id: "demo-sticker-maken", level: 2 },
     { value: "Demo sticker documenteren", id: "demo-sticker-documenteren", level: 2 },
     { value: "Demo card maken", id: "demo-card-maken", level: 2 },
     { value: "Demo card documenteren", id: "demo-card-documenteren", level: 2 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ],
    c = { toc: s },
    p = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(p, (0, o.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "zelf-componenten-maken" }, "Zelf componenten maken"), (0, a.kt)("p", null, "De Figma bibliotheek van het NL Design System bevat vast (nog) niet alle componenten die nodig zijn voor jouw organisatie. Je kunt zelf componenten gaan opbouwen of de bestaande componenten van jouw organisatie aanpassen. Hoe dan ook, het is het fijn als je dit doet op basis van de NL Design System structuur. Open-source en met design tokens, inclusief de juiste naamgeving. Zo kunnen componenten binnen de community met elkaar worden uitgewisseld."), (0, a.kt)("p", null, "In onderstaande video's laten we zien hoe twee lokale componenten (Demo sticker en Demo card) worden opgebouwd op basis van de NL Design System structuur."), (0, a.kt)("p", null, "Voordat je begint is het verstandig dat je het ", (0, a.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/stappenplan" }, "stappenplan"), " hebt doorlopen. Heb je een vraag? Twijfel niet en ", (0, a.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "neem contact op met het kernteam"), "."), (0, a.kt)("h2", { id: "demo-sticker-maken" }, "Demo sticker maken"), (0, a.kt)("p", null, "In deze video laten we zien hoe je de 'Demo sticker' kan opbouwen met design tokens."), (0, a.kt)(d.Y, { videoId: "cN37hd7KWMY", mdxType: "VideoPlayer" }), (0, a.kt)("h2", { id: "demo-sticker-documenteren" }, "Demo sticker documenteren"), (0, a.kt)("p", null, "In deze video laten we zien hoe je de design tokens van de 'Demo sticker' kan documenteren."), (0, a.kt)(d.Y, { videoId: "2_SzboMo15c", mdxType: "VideoPlayer" }), (0, a.kt)("h2", { id: "demo-card-maken" }, "Demo card maken"), (0, a.kt)("p", null, "In deze video laten we zien hoe je de 'Demo card' kan opbouwen met design tokens."), (0, a.kt)(d.Y, { videoId: "UbrN67pU0dk", mdxType: "VideoPlayer" }), (0, a.kt)("h2", { id: "demo-card-documenteren" }, "Demo card documenteren"), (0, a.kt)("p", null, "In deze video laten we zien hoe je de design tokens van de 'Demo card' kan documenteren."), (0, a.kt)(d.Y, { videoId: "w_5ITXBx8kE", mdxType: "VideoPlayer" }), (0, a.kt)("hr", null), (0, a.kt)("h2", { id: "help-deze-documentatie-te-verbeteren" }, "Help deze documentatie te verbeteren"), (0, a.kt)("p", null, "Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/documentatie" }, "Github"), "."), (0, a.kt)("h2", { id: "vragen" }, "Vragen"), (0, a.kt)("p", null, "Heb je een vraag? Twijfel niet en ", (0, a.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "neem contact op met het kernteam"), "."));
   }
   k.isMDXComponent = !0;
  },
 },
]);
