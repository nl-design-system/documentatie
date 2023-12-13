"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93089],
 {
  26373: (e, a, r) => {
   r.d(a, { Z: () => t });
   var t = (0, r(349).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  73613: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(50959);
   var t = r(77289),
    s = r(24550),
    n = r(11527);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: r, nextPage: l } = a;
    return (0, n.jsxs)("nav", { className: "pagination-nav", "aria-label": (0, t.I)({ id: "theme.blog.paginator.navAriaLabel", message: "Blog list page navigation", description: "The ARIA label for the blog pagination" }), children: [r && (0, n.jsx)(s.Z, { permalink: r, title: (0, n.jsx)(t.Z, { id: "theme.blog.paginator.newerEntries", description: "The label used to navigate to the newer blog posts page (previous page)", children: "Newer Entries" }) }), l && (0, n.jsx)(s.Z, { permalink: l, title: (0, n.jsx)(t.Z, { id: "theme.blog.paginator.olderEntries", description: "The label used to navigate to the older blog posts page (next page)", children: "Older Entries" }), isNext: !0 })] });
   }
  },
  24550: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(50959);
   var t = r(5341),
    s = r(62384),
    n = r(11527);
   function l(e) {
    const { permalink: a, title: r, subLabel: l, isNext: c } = e;
    return (0, n.jsxs)(s.Z, { className: (0, t.Z)("pagination-nav__link", c ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: a, children: [l && (0, n.jsx)("div", { className: "pagination-nav__sublabel", children: l }), (0, n.jsx)("div", { className: "pagination-nav__label", children: r })] });
   }
  },
  21042: (e, a, r) => {
   r.d(a, { C: () => d, n: () => c });
   var t = r(50959),
    s = r(90248),
    n = r(11527);
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
  46820: (e, a, r) => {
   r.d(a, { Q: () => m });
   var t = r(50959),
    s = r(3426);
   const n = "breadcrumbs__73z",
    l = "breadcrumbs--mobile_QwgF",
    c = "breadcrumbs--desktop_v9Xv";
   var d = r(5341),
    i = r(38456),
    o = r(16532),
    g = r(28903),
    u = r(62384),
    h = r(11527);
   const m = (e) => {
    let { breadcrumbs: a, ...r } = e;
    const m = [{ href: (0, s.Z)("/"), label: "Home", rel: "home" }, ...a],
     { pathname: _ } = (0, g.TH)(),
     p = [...m].reverse().find((e) => e.href !== _);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, d.Z)(n, c),
       children: (0, h.jsx)(o.Qu, {
        ...r,
        children: m.map((e, a, r) => {
         let { label: s, href: n, rel: l } = e,
          { length: c } = r;
         return (0, h.jsxs)(t.Fragment, { children: [(0, h.jsx)(o.yY, { href: n, current: a === c - 1, disabled: a === c - 1, rel: (0, d.Z)(l, { up: a === c - 2 }), children: s }), a < c - 1 && (0, h.jsx)(o.sc, { children: "/" })] }, a);
        }),
       }),
      }),
      p && (0, h.jsx)("div", { className: (0, d.Z)(n, l), children: (0, h.jsx)(o.hE, { children: (0, h.jsxs)(u.Z, { href: p.href, rel: p.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(o.JO, { children: (0, h.jsx)(i.Z, {}) }), p.label] }) }) }),
     ],
    });
   };
  },
  85845: (e, a, r) => {
   r.d(a, { Zb: () => i, aY: () => d, um: () => o, wu: () => c });
   r(50959);
   var t = r(5341),
    s = r(16532);
   const n = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" };
   var l = r(11527);
   const c = (e) => {
     let { background: a, children: r, className: s, ...c } = e;
     return (0, l.jsx)("div", { className: (0, t.Z)(n.card__illustration, a && n["card__illustration--background"], s), ...c, children: r });
    },
    d = (e) => (0, l.jsx)("div", { className: (0, t.Z)(n.card__content), ...e }),
    i = (e) => {
     let { href: a, appearance: r, className: c, component: d = "div", children: i } = e;
     const o = (e) => ("article" === d ? (0, l.jsx)("article", { ...e }) : "section" === d ? (0, l.jsx)("section", { ...e }) : (0, l.jsx)("div", { ...e })),
      g = (0, l.jsx)(o, { className: (0, t.Z)(n.cardgroup__card, n[`cardgroup__card--${r}`], c), children: i });
     return a ? (0, l.jsx)(s.rU, { href: a, boxContent: !0, className: n.cardgroup__link, children: g }) : g;
    },
    o = (e) => {
     let { appearance: a = "medium", children: r } = e;
     return (0, l.jsx)("div", { className: (0, t.Z)(n.cardgroup, n[`cardgroup--${a}`]), children: r });
    };
  },
  29450: (e, a, r) => {
   r.d(a, { Z: () => c });
   r(50959);
   var t = r(5341),
    s = r(7993),
    n = r(46820),
    l = r(11527);
   function c(e) {
    const { sidebar: a, toc: r, breadcrumbs: c = [], children: d, ...i } = e,
     o = a && a.items.length > 0;
    return (0, l.jsx)(s.Z, { ...i, children: (0, l.jsx)("div", { className: "container margin-vert--md", children: (0, l.jsxs)("div", { className: "row", children: [(0, l.jsx)("div", { className: "col col--9 col--offset-1", children: (0, l.jsx)(n.Q, { breadcrumbs: c }) }), (0, l.jsx)("main", { className: (0, t.Z)("utrecht-document", "utrecht-html", "col", { "col--7": o, "col--9 col--offset-1": !o }), itemScope: !0, itemType: "http://schema.org/Blog", children: d }), r && (0, l.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  62987: (e, a, r) => {
   r.r(a), r.d(a, { default: () => _ });
   r(50959);
   var t = r(5341),
    s = r(1050),
    n = r(44616),
    l = r(15116),
    c = r(29450),
    d = r(73613),
    i = r(78347),
    o = r(87364),
    g = r(83778),
    u = r(11527);
   function h(e) {
    const { metadata: a } = e,
     {
      siteConfig: { title: r },
     } = (0, s.Z)(),
     { blogDescription: t, blogTitle: l, permalink: c } = a,
     d = "/" === c ? r : l;
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(n.d, { title: d, description: t }), (0, u.jsx)(i.Z, { tag: "blog_posts_list" })] });
   }
   function m(e) {
    const { metadata: a, items: r, sidebar: t } = e;
    return (0, u.jsxs)(c.Z, { sidebar: t, breadcrumbs: [{ label: a.blogTitle }], children: [(0, u.jsx)(g.nL, { children: a.blogTitle }), (0, u.jsx)(o.Z, { items: r }), (0, u.jsx)(d.Z, { metadata: a })] });
   }
   function _(e) {
    return (0, u.jsxs)(n.FG, { className: (0, t.Z)(l.k.wrapper.blogPages, l.k.page.blogListPage), children: [(0, u.jsx)(h, { ...e }), (0, u.jsx)(m, { ...e })] });
   }
  },
  87364: (e, a, r) => {
   r.d(a, { Z: () => u });
   r(50959);
   var t = r(21042),
    s = r(85845),
    n = r(83778);
   const l = { "blog-card": "blog-card_ZodC", "blog-card__header-link": "blog-card__header-link_rMVL", "blog-card__badge": "blog-card__badge_bQ4F" };
   var c = r(5341),
    d = r(62384),
    i = r(26373),
    o = (0, r(349).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]),
    g = r(11527);
   function u(e) {
    let { items: a } = e;
    return (0, g.jsx)(s.um, {
     appearance: "large",
     children: a.map((e) => {
      let { content: a } = e;
      return (0, g.jsx)(t.n, { content: a, children: (0, g.jsx)(s.Zb, { appearance: "large", className: l["blog-card"], children: (0, g.jsxs)(s.aY, { children: [(0, g.jsx)(n.XJ, { children: (0, g.jsx)(d.Z, { to: a.metadata.permalink, className: (0, c.Z)("utrecht-link", l["blog-card__header-link"]), children: a.metadata.title }) }), (0, g.jsx)("div", { children: a.metadata.description }), (0, g.jsxs)(n.k, { children: [a.metadata.authors.map((e) => (0, g.jsxs)(n.Ou, { className: (0, c.Z)(l["blog-card__badge"], l["blog-card__badge--author"]), children: [(0, g.jsx)(n.JO, { role: "presentational", children: (0, g.jsx)(i.Z, {}) }), (0, g.jsx)("span", { className: "visually-hidden", children: "auteur:" }), " ", e.name] }, e.name)), (0, g.jsxs)(n.Ou, { className: (0, c.Z)(l["blog-card__badge"], l["blog-card__badge--date"]), children: [(0, g.jsx)(n.JO, { role: "presentational", children: (0, g.jsx)(o, {}) }), (0, g.jsx)("span", { className: "visually-hidden", children: "publicatie datum:" }), " ", (0, g.jsx)("time", { dateTime: a.metadata.date, children: a.metadata.formattedDate })] })] })] }) }) }, a.metadata.permalink);
     }),
    });
   }
  },
 },
]);
