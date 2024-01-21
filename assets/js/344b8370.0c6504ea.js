"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5987],
 {
  2517: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => d, default: () => c, frontMatter: () => s, metadata: () => r, toc: () => p });
   var o = t(1527),
    i = t(7214),
    a = t(2685);
   const s = { title: "Component inzetten", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component inzetten", pagination_label: "Component inzetten", description: "Bestaand component inzetten", keywords: ["developer", "bijdragen", "component gebruiken"] },
    d = "Bestaand component inzetten",
    r = { id: "meedoen/als-developer/component-inzetten", title: "Component inzetten", description: "Bestaand component inzetten", source: "@site/docs/meedoen/als-developer/05-component-inzetten.mdx", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/component-inzetten", permalink: "/meedoen/als-developer/component-inzetten", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/05-component-inzetten.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Component inzetten", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component inzetten", pagination_label: "Component inzetten", description: "Bestaand component inzetten", keywords: ["developer", "bijdragen", "component gebruiken"] }, sidebar: "meedoen", previous: { title: "Component kiezen", permalink: "/meedoen/als-developer/samenwerken-aan-componenten" }, next: { title: "Component uitbreiden", permalink: "/meedoen/als-developer/component-uitbreiden" } },
    l = {},
    p = [];
   function m(e) {
    const n = { h1: "h1", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "bestaand-component-inzetten", children: "Bestaand component inzetten" }), "\n", (0, o.jsx)(n.p, { children: "We hebben een opname van de onboarding-week 2021 waarin we vertellen over het gebruiken van bestaande componenten uit de community:" }), "\n", (0, o.jsx)(a.Y, { videoId: "7P6YUT3pmi8" })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  2685: (e, n, t) => {
   t.d(n, { Y: () => r });
   var o = t(6259),
    i = (t(959), t(7049)),
    a = t.n(i);
   const s = { "video-player": "video-player__6fg" };
   var d = t(1527);
   const r = (e) => {
    let { videoId: n, className: t, ...i } = e;
    return (0, d.jsx)(a(), { url: `https://youtube.com/watch?v=${n}`, className: `${(0, o.Z)(s["video-player"])} ${t}`, width: "100%", height: "100%", controls: !0, ...i, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
