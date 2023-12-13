"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51528],
 {
  93533: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => c, frontMatter: () => o, metadata: () => m, toc: () => r });
   var s = t(85893),
    a = t(11151),
    i = t(67497);
   const o = { title: "Thema maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Thema maken", pagination_label: "Thema maken", description: "NL Design System thema maken" },
    l = "NL Design System thema maken",
    m = { id: "meedoen/als-developer/thema-maken", title: "Thema maken", description: "NL Design System thema maken", source: "@site/docs/meedoen/als-developer/03-thema-maken.mdx", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/thema-maken", permalink: "/en/meedoen/als-developer/thema-maken", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/03-thema-maken.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Thema maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Thema maken", pagination_label: "Thema maken", description: "NL Design System thema maken" }, sidebar: "meedoen", previous: { title: "Architectuur", permalink: "/en/meedoen/als-developer/architectuur" }, next: { title: "Component kiezen", permalink: "/en/meedoen/als-developer/samenwerken-aan-componenten" } },
    d = {},
    r = [
     { value: "Design tokens vastleggen", id: "design-tokens-vastleggen", level: 2 },
     { value: "Design tokens inzetten", id: "design-tokens-inzetten", level: 2 },
    ];
   function h(e) {
    const n = { h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "nl-design-system-thema-maken", children: "NL Design System thema maken" }), "\n", (0, s.jsx)(n.p, { children: "We hebben twee opnames van de onboarding-week 2021 waarin we vertellen over design tokens en thema's:" }), "\n", (0, s.jsx)(n.h2, { id: "design-tokens-vastleggen", children: "Design tokens vastleggen" }), "\n", (0, s.jsx)(i.Y, { videoId: "jSvjnU7oY5Y" }), "\n", (0, s.jsx)(n.h2, { id: "design-tokens-inzetten", children: "Design tokens inzetten" }), "\n", (0, s.jsx)(i.Y, { videoId: "-guAi7Lvl6g" })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  67497: (e, n, t) => {
   t.d(n, { Y: () => l });
   t(67294);
   var s = t(22004),
    a = t(90512);
   const i = { "video-player": "video-player__6fg" };
   var o = t(85893);
   const l = (e) => {
    let { videoId: n, className: t, ...l } = e;
    return (0, o.jsx)(s.Z, { url: `https://youtube.com/watch?v=${n}`, className: `${(0, a.Z)(i["video-player"])} ${t}`, width: "100%", height: "100%", controls: !0, ...l, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
