"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15987],
 {
  67497: (e, n, t) => {
   t.d(n, { Y: () => r });
   var o = t(87462),
    i = t(67294),
    a = t(22004),
    d = t(86010);
   const s = { "video-player": "video-player__6fg" },
    r = (e) => {
     let { videoId: n, className: t, ...r } = e;
     return i.createElement(a.Z, (0, o.Z)({ url: `https://youtube.com/watch?v=${n}`, className: `${(0, d.Z)(s["video-player"])} ${t}`, width: "100%", height: "100%", controls: !0 }, r, { config: { youtube: { playerVars: { disablekb: 1 } } } }));
    };
  },
  64412: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => s, default: () => b, frontMatter: () => d, metadata: () => r, toc: () => p });
   var o = t(87462),
    i = (t(67294), t(3905)),
    a = t(67497);
   const d = { title: "Component inzetten", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component inzetten", pagination_label: "Component inzetten", description: "Bestaand component inzetten", keywords: ["developer", "bijdragen", "component gebruiken"] },
    s = "Bestaand component inzetten",
    r = { unversionedId: "meedoen/als-developer/component-inzetten", id: "meedoen/als-developer/component-inzetten", title: "Component inzetten", description: "Bestaand component inzetten", source: "@site/docs/meedoen/als-developer/05-component-inzetten.mdx", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/component-inzetten", permalink: "/en/meedoen/als-developer/component-inzetten", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/05-component-inzetten.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Component inzetten", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component inzetten", pagination_label: "Component inzetten", description: "Bestaand component inzetten", keywords: ["developer", "bijdragen", "component gebruiken"] }, sidebar: "meedoen", previous: { title: "Component kiezen", permalink: "/en/meedoen/als-developer/samenwerken-aan-componenten" }, next: { title: "Component uitbreiden", permalink: "/en/meedoen/als-developer/component-uitbreiden" } },
    l = {},
    p = [],
    m = { toc: p },
    c = "wrapper";
   function b(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(c, (0, o.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "bestaand-component-inzetten" }, "Bestaand component inzetten"), (0, i.kt)("p", null, "We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:"), (0, i.kt)(a.Y, { videoId: "7P6YUT3pmi8", mdxType: "VideoPlayer" }));
   }
   b.isMDXComponent = !0;
  },
 },
]);
