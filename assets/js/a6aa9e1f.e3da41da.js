/*! For license information please see a6aa9e1f.e3da41da.js.LICENSE.txt */
"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3089],
 {
  57016: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(75271);
   var t = r(8143),
    s = r(97444),
    n = r(52676);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: r, nextPage: l } = a;
    return (0, n.jsxs)("nav", { className: "pagination-nav", "aria-label": (0, t.I)({ id: "theme.blog.paginator.navAriaLabel", message: "Blog list page navigation", description: "The ARIA label for the blog pagination" }), children: [r && (0, n.jsx)(s.Z, { permalink: r, title: (0, n.jsx)(t.Z, { id: "theme.blog.paginator.newerEntries", description: "The label used to navigate to the newer blog posts page (previous page)", children: "Newer Entries" }) }), l && (0, n.jsx)(s.Z, { permalink: l, title: (0, n.jsx)(t.Z, { id: "theme.blog.paginator.olderEntries", description: "The label used to navigate to the older blog posts page (next page)", children: "Older Entries" }), isNext: !0 })] });
   }
  },
  97444: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(75271);
   var t = r(4814),
    s = r(15854),
    n = r(52676);
   function l(e) {
    const { permalink: a, title: r, subLabel: l, isNext: c } = e;
    return (0, n.jsxs)(s.Z, { className: (0, t.Z)("pagination-nav__link", c ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: a, children: [l && (0, n.jsx)("div", { className: "pagination-nav__sublabel", children: l }), (0, n.jsx)("div", { className: "pagination-nav__label", children: r })] });
   }
  },
  23519: (e, a, r) => {
   r.d(a, { C: () => d, n: () => c });
   var t = r(75271),
    s = r(61454),
    n = r(52676);
   const l = t.createContext(null);
   function c(e) {
    let { children: a, content: r, isBlogPostPage: s = !1 } = e;
    const c = (function (e) {
     let { content: a, isBlogPostPage: r } = e;
     return (0, t.useMemo)(() => ({ metadata: a.metadata, frontMatter: a.frontMatter, assets: a.assets, toc: a.toc, isBlogPostPage: r }), [a, r]);
    })({ content: r, isBlogPostPage: s });
    return (0, n.jsx)(l.Provider, { value: c, children: a });
   }
   function d() {
    const e = (0, t.useContext)(l);
    if (null === e) throw new s.i6("BlogPostProvider");
    return e;
   }
  },
  21524: (e, a, r) => {
   r.d(a, { Q: () => m });
   var t = r(15854),
    s = r(3225),
    n = r(70155),
    l = r(16192),
    c = r(51256),
    d = r(4814),
    i = r(75271);
   const o = "breadcrumbs__73z",
    g = "breadcrumbs--mobile_QwgF",
    u = "breadcrumbs--desktop_v9Xv";
   var h = r(52676);
   const m = (e) => {
    let { breadcrumbs: a, ...r } = e;
    const m = [{ href: (0, n.Z)("/"), label: "Home", rel: "home" }, ...a],
     { pathname: _ } = (0, s.TH)(),
     p = [...m].reverse().find((e) => e.href !== _);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, d.Z)(o, u),
       children: (0, h.jsx)(c.Qu, {
        ...r,
        children: m.map((e, a, r) => {
         let { label: t, href: s, rel: n } = e,
          { length: l } = r;
         return (0, h.jsxs)(i.Fragment, { children: [(0, h.jsx)(c.yY, { href: s, current: a === l - 1, disabled: a === l - 1, rel: (0, d.Z)(n, { up: a === l - 2 }), children: t }), a < l - 1 && (0, h.jsx)(c.sc, { children: "/" })] }, a);
        }),
       }),
      }),
      p && (0, h.jsx)("div", { className: (0, d.Z)(o, g), children: (0, h.jsx)(c.hE, { children: (0, h.jsxs)(t.Z, { href: p.href, rel: p.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(c.JO, { children: (0, h.jsx)(l.Z, {}) }), p.label] }) }) }),
     ],
    });
   };
  },
  48459: (e, a, r) => {
   r.d(a, { Zb: () => i, aY: () => d, um: () => o, wu: () => c });
   var t = r(51256),
    s = r(4814);
   r(75271);
   const n = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" };
   var l = r(52676);
   const c = (e) => {
     let { background: a, children: r, className: t, ...c } = e;
     return (0, l.jsx)("div", { className: (0, s.Z)(n.card__illustration, a && n["card__illustration--background"], t), ...c, children: r });
    },
    d = (e) => (0, l.jsx)("div", { className: (0, s.Z)(n.card__content), ...e }),
    i = (e) => {
     let { href: a, appearance: r, className: c, component: d = "div", children: i } = e;
     const o = (e) => ("article" === d ? (0, l.jsx)("article", { ...e }) : "section" === d ? (0, l.jsx)("section", { ...e }) : (0, l.jsx)("div", { ...e })),
      g = (0, l.jsx)(o, { className: (0, s.Z)(n.cardgroup__card, n[`cardgroup__card--${r}`], c), children: i });
     return a ? (0, l.jsx)(t.rU, { href: a, boxContent: !0, className: n.cardgroup__link, children: g }) : g;
    },
    o = (e) => {
     let { appearance: a = "medium", children: r } = e;
     return (0, l.jsx)("div", { className: (0, s.Z)(n.cardgroup, n[`cardgroup--${a}`]), children: r });
    };
  },
  29450: (e, a, r) => {
   r.d(a, { Z: () => c });
   var t = r(21524),
    s = r(92440),
    n = r(4814),
    l = (r(75271), r(52676));
   function c(e) {
    const { sidebar: a, toc: r, breadcrumbs: c = [], children: d, ...i } = e,
     o = a && a.items.length > 0;
    return (0, l.jsx)(s.Z, { ...i, children: (0, l.jsx)("div", { className: "container margin-vert--md", children: (0, l.jsxs)("div", { className: "row", children: [(0, l.jsx)("div", { className: "col col--9 col--offset-1", children: (0, l.jsx)(t.Q, { breadcrumbs: c }) }), (0, l.jsx)("main", { className: (0, n.Z)("utrecht-document", "utrecht-html", "col", { "col--7": o, "col--9 col--offset-1": !o }), itemScope: !0, itemType: "http://schema.org/Blog", children: d }), r && (0, l.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  62987: (e, a, r) => {
   r.r(a), r.d(a, { default: () => _ });
   var t = r(21296),
    s = r(76373),
    n = r(73200),
    l = r(57016),
    c = r(70147),
    d = r(89710),
    i = r(52858),
    o = r(4814),
    g = (r(75271), r(29450)),
    u = r(52676);
   function h(e) {
    const { metadata: a } = e,
     {
      siteConfig: { title: r },
     } = (0, n.Z)(),
     { blogDescription: s, blogTitle: l, permalink: c } = a,
     i = "/" === c ? r : l;
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(t.d, { title: i, description: s }), (0, u.jsx)(d.Z, { tag: "blog_posts_list" })] });
   }
   function m(e) {
    const { metadata: a, items: r, sidebar: t } = e;
    return (0, u.jsxs)(g.Z, { sidebar: t, breadcrumbs: [{ label: a.blogTitle }], children: [(0, u.jsx)(i.nL, { children: a.blogTitle }), (0, u.jsx)(c.Z, { items: r }), (0, u.jsx)(l.Z, { metadata: a })] });
   }
   function _(e) {
    return (0, u.jsxs)(t.FG, { className: (0, o.Z)(s.k.wrapper.blogPages, s.k.page.blogListPage), children: [(0, u.jsx)(h, { ...e }), (0, u.jsx)(m, { ...e })] });
   }
  },
  70147: (e, a, r) => {
   r.d(a, { Z: () => u });
   var t = r(15854),
    s = r(23519),
    n = r(48459),
    l = r(90210),
    c = (0, r(47451).Z)("outline", "calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]),
    d = r(52858),
    i = r(4814);
   r(75271);
   const o = { "blog-card": "blog-card_ZodC", "blog-card__header-link": "blog-card__header-link_rMVL", "blog-card__badge": "blog-card__badge_bQ4F" };
   var g = r(52676);
   function u(e) {
    let { items: a } = e;
    return (0, g.jsx)(n.um, {
     appearance: "large",
     children: a.map((e) => {
      let { content: a } = e;
      return (0, g.jsx)(s.n, { content: a, children: (0, g.jsx)(n.Zb, { appearance: "large", className: o["blog-card"], children: (0, g.jsxs)(n.aY, { children: [(0, g.jsx)(d.XJ, { children: (0, g.jsx)(t.Z, { to: a.metadata.permalink, className: (0, i.Z)("utrecht-link", o["blog-card__header-link"]), children: a.metadata.title }) }), (0, g.jsx)("div", { children: a.metadata.description }), (0, g.jsxs)(d.k, { children: [a.metadata.authors.map((e) => (0, g.jsxs)(d.Ou, { className: (0, i.Z)(o["blog-card__badge"], o["blog-card__badge--author"]), children: [(0, g.jsx)(d.JO, { children: (0, g.jsx)(l.Z, {}) }), (0, g.jsx)("span", { className: "visually-hidden", children: "auteur:" }), " ", e.name] }, e.name)), (0, g.jsxs)(d.Ou, { className: (0, i.Z)(o["blog-card__badge"], o["blog-card__badge--date"]), children: [(0, g.jsx)(d.JO, { children: (0, g.jsx)(c, {}) }), (0, g.jsx)("span", { className: "visually-hidden", children: "publicatie datum:" }), " ", (0, g.jsx)("time", { dateTime: a.metadata.date, children: a.metadata.formattedDate })] })] })] }) }) }, a.metadata.permalink);
     }),
    });
   }
  },
  90210: (e, a, r) => {
   r.d(a, { Z: () => t });
   var t = (0, r(47451).Z)("outline", "user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
 },
]);
