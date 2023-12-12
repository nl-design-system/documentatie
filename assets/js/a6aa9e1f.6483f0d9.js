"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93089],
 {
  8861: (e, a, r) => {
   r.d(a, { Z: () => t });
   var t = (0, r(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  99703: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(67294);
   var t = r(95999),
    s = r(32244),
    n = r(85893);
   function l(e) {
    const { metadata: a } = e,
     { previousPage: r, nextPage: l } = a;
    return (0, n.jsxs)("nav", { className: "pagination-nav", "aria-label": (0, t.I)({ id: "theme.blog.paginator.navAriaLabel", message: "Blog list page navigation", description: "The ARIA label for the blog pagination" }), children: [r && (0, n.jsx)(s.Z, { permalink: r, title: (0, n.jsx)(t.Z, { id: "theme.blog.paginator.newerEntries", description: "The label used to navigate to the newer blog posts page (previous page)", children: "Newer Entries" }) }), l && (0, n.jsx)(s.Z, { permalink: l, title: (0, n.jsx)(t.Z, { id: "theme.blog.paginator.olderEntries", description: "The label used to navigate to the older blog posts page (next page)", children: "Older Entries" }), isNext: !0 })] });
   }
  },
  32244: (e, a, r) => {
   r.d(a, { Z: () => l });
   r(67294);
   var t = r(36905),
    s = r(39960),
    n = r(85893);
   function l(e) {
    const { permalink: a, title: r, subLabel: l, isNext: c } = e;
    return (0, n.jsxs)(s.Z, { className: (0, t.Z)("pagination-nav__link", c ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: a, children: [l && (0, n.jsx)("div", { className: "pagination-nav__sublabel", children: l }), (0, n.jsx)("div", { className: "pagination-nav__label", children: r })] });
   }
  },
  9460: (e, a, r) => {
   r.d(a, { C: () => d, n: () => c });
   var t = r(67294),
    s = r(902),
    n = r(85893);
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
  26595: (e, a, r) => {
   r.d(a, { Q: () => m });
   var t = r(67294),
    s = r(44996);
   const n = "breadcrumbs__73z",
    l = "breadcrumbs--mobile_QwgF",
    c = "breadcrumbs--desktop_v9Xv";
   var d = r(86010),
    i = r(21209),
    o = r(65663),
    g = r(16550),
    u = r(39960),
    h = r(85893);
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
  31817: (e, a, r) => {
   r.d(a, { Zb: () => i, aY: () => d, um: () => o, wu: () => c });
   r(67294);
   var t = r(86010),
    s = r(65663);
   const n = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" };
   var l = r(85893);
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
  31627: (e, a, r) => {
   r.d(a, { Z: () => c });
   r(67294);
   var t = r(86010),
    s = r(23770),
    n = r(26595),
    l = r(85893);
   function c(e) {
    const { sidebar: a, toc: r, breadcrumbs: c = [], children: d, ...i } = e,
     o = a && a.items.length > 0;
    return (0, l.jsx)(s.Z, { ...i, children: (0, l.jsx)("div", { className: "container margin-vert--md", children: (0, l.jsxs)("div", { className: "row", children: [(0, l.jsx)("div", { className: "col col--9 col--offset-1", children: (0, l.jsx)(n.Q, { breadcrumbs: c }) }), (0, l.jsx)("main", { className: (0, t.Z)("utrecht-document", "utrecht-html", "col", { "col--7": o, "col--9 col--offset-1": !o }), itemScope: !0, itemType: "http://schema.org/Blog", children: d }), r && (0, l.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  36200: (e, a, r) => {
   r.r(a), r.d(a, { default: () => _ });
   r(67294);
   var t = r(86010),
    s = r(52263),
    n = r(10833),
    l = r(35281),
    c = r(31627),
    d = r(99703),
    i = r(90197),
    o = r(1799),
    g = r(53579),
    u = r(85893);
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
  1799: (e, a, r) => {
   r.d(a, { Z: () => u });
   r(67294);
   var t = r(9460),
    s = r(31817),
    n = r(53579);
   const l = { "blog-card": "blog-card_ZodC", "blog-card__header-link": "blog-card__header-link_rMVL", "blog-card__badge": "blog-card__badge_bQ4F" };
   var c = r(86010),
    d = r(39960),
    i = r(8861),
    o = (0, r(30853).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]),
    g = r(85893);
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
