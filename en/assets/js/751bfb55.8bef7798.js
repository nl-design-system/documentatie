"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6526],
 {
  49972: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => d, default: () => k, frontMatter: () => o, metadata: () => l, toc: () => m });
   var a = t(11527),
    s = t(47214),
    i = t(82685);
   const o = { title: "Thema maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Thema maken", pagination_label: "Thema maken", description: "NL Design System thema maken" },
    d = "NL Design System thema maken",
    l = { id: "handboek/developer/thema-maken", title: "Thema maken", description: "NL Design System thema maken", source: "@site/docs/handboek/developer/03-thema-maken.mdx", sourceDirName: "handboek/developer", slug: "/handboek/developer/thema-maken", permalink: "/en/handboek/developer/thema-maken", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-thema-maken.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Thema maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Thema maken", pagination_label: "Thema maken", description: "NL Design System thema maken" }, sidebar: "handboek", previous: { title: "Architectuur", permalink: "/en/handboek/developer/architectuur" }, next: { title: "Component kiezen", permalink: "/en/handboek/developer/samenwerken-aan-componenten" } },
    r = {},
    m = [
     { value: "Design tokens vastleggen", id: "design-tokens-vastleggen", level: 2 },
     { value: "Design tokens inzetten", id: "design-tokens-inzetten", level: 2 },
    ];
   function h(e) {
    const n = { h1: "h1", h2: "h2", p: "p", ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: "nl-design-system-thema-maken", children: "NL Design System thema maken" }), "\n", (0, a.jsx)(n.p, { children: "We hebben twee opnames van de onboarding-week 2021 waarin we vertellen over design tokens en thema's:" }), "\n", (0, a.jsx)(n.h2, { id: "design-tokens-vastleggen", children: "Design tokens vastleggen" }), "\n", (0, a.jsx)(i.Y, { videoId: "jSvjnU7oY5Y" }), "\n", (0, a.jsx)(n.h2, { id: "design-tokens-inzetten", children: "Design tokens inzetten" }), "\n", (0, a.jsx)(i.Y, { videoId: "-guAi7Lvl6g" })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  82685: (e, n, t) => {
   t.d(n, { Y: () => l });
   var a = t(86259),
    s = (t(50959), t(97049)),
    i = t.n(s);
   const o = { "video-player": "video-player__6fg" };
   var d = t(11527);
   const l = (e) => {
    let { videoId: n, className: t, ...s } = e;
    return (0, d.jsx)(i(), { url: `https://youtube.com/watch?v=${n}`, className: `${(0, a.Z)(o["video-player"])} ${t}`, width: "100%", height: "100%", controls: !0, ...s, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
