"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51528],
 {
  67497: (e, n, t) => {
   t.d(n, { Y: () => l });
   var a = t(87462),
    s = t(67294),
    i = t(22004),
    o = t(86010);
   const m = { "video-player": "video-player__6fg" },
    l = (e) => {
     let { videoId: n, className: t, ...l } = e;
     return s.createElement(i.Z, (0, a.Z)({ url: `https://youtube.com/watch?v=${n}`, className: `${(0, o.Z)(m["video-player"])} ${t}`, width: "100%", height: "100%", controls: !0 }, l, { config: { youtube: { playerVars: { disablekb: 1 } } } }));
    };
  },
  92439: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => m, default: () => p, frontMatter: () => o, metadata: () => l, toc: () => r });
   var a = t(87462),
    s = (t(67294), t(3905)),
    i = t(67497);
   const o = { title: "Thema maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Thema maken", pagination_label: "Thema maken", description: "NL Design System thema maken" },
    m = "NL Design System thema maken",
    l = { unversionedId: "meedoen/als-developer/thema-maken", id: "meedoen/als-developer/thema-maken", title: "Thema maken", description: "NL Design System thema maken", source: "@site/docs/meedoen/als-developer/03-thema-maken.mdx", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/thema-maken", permalink: "/en/meedoen/als-developer/thema-maken", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/03-thema-maken.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Thema maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Thema maken", pagination_label: "Thema maken", description: "NL Design System thema maken" }, sidebar: "meedoen", previous: { title: "Architectuur", permalink: "/en/meedoen/als-developer/architectuur" }, next: { title: "Component kiezen", permalink: "/en/meedoen/als-developer/samenwerken-aan-componenten" } },
    d = {},
    r = [
     { value: "Design tokens vastleggen", id: "design-tokens-vastleggen", level: 2 },
     { value: "Design tokens inzetten", id: "design-tokens-inzetten", level: 2 },
    ],
    k = { toc: r },
    h = "wrapper";
   function p(e) {
    let { components: n, ...t } = e;
    return (0, s.kt)(h, (0, a.Z)({}, k, t, { components: n, mdxType: "MDXLayout" }), (0, s.kt)("h1", { id: "nl-design-system-thema-maken" }, "NL Design System thema maken"), (0, s.kt)("p", null, "We hebben twee opnames van de onboarding-week 2021 waarin we vertellen over design tokens en thema's:"), (0, s.kt)("h2", { id: "design-tokens-vastleggen" }, "Design tokens vastleggen"), (0, s.kt)(i.Y, { videoId: "jSvjnU7oY5Y", mdxType: "VideoPlayer" }), (0, s.kt)("h2", { id: "design-tokens-inzetten" }, "Design tokens inzetten"), (0, s.kt)(i.Y, { videoId: "-guAi7Lvl6g", mdxType: "VideoPlayer" }));
   }
   p.isMDXComponent = !0;
  },
 },
]);
