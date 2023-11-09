"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93089],
 {
  8861: (e, a, t) => {
   t.d(a, { Z: () => r });
   var r = (0, t(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  99703: (e, a, t) => {
   t.d(a, { Z: () => c });
   var r = t(67294),
    l = t(95999),
    n = t(32244);
   function c(e) {
    const { metadata: a } = e,
     { previousPage: t, nextPage: c } = a;
    return r.createElement("nav", { className: "pagination-nav", "aria-label": (0, l.I)({ id: "theme.blog.paginator.navAriaLabel", message: "Blog list page navigation", description: "The ARIA label for the blog pagination" }) }, t && r.createElement(n.Z, { permalink: t, title: r.createElement(l.Z, { id: "theme.blog.paginator.newerEntries", description: "The label used to navigate to the newer blog posts page (previous page)" }, "Newer Entries") }), c && r.createElement(n.Z, { permalink: c, title: r.createElement(l.Z, { id: "theme.blog.paginator.olderEntries", description: "The label used to navigate to the older blog posts page (next page)" }, "Older Entries"), isNext: !0 }));
   }
  },
  32244: (e, a, t) => {
   t.d(a, { Z: () => c });
   var r = t(67294),
    l = t(86010),
    n = t(39960);
   function c(e) {
    const { permalink: a, title: t, subLabel: c, isNext: o } = e;
    return r.createElement(n.Z, { className: (0, l.Z)("pagination-nav__link", o ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: a }, c && r.createElement("div", { className: "pagination-nav__sublabel" }, c), r.createElement("div", { className: "pagination-nav__label" }, t));
   }
  },
  9460: (e, a, t) => {
   t.d(a, { C: () => o, n: () => c });
   var r = t(67294),
    l = t(902);
   const n = r.createContext(null);
   function c(e) {
    let { children: a, content: t, isBlogPostPage: l = !1 } = e;
    const c = (function (e) {
     let { content: a, isBlogPostPage: t } = e;
     return (0, r.useMemo)(() => ({ metadata: a.metadata, frontMatter: a.frontMatter, assets: a.assets, toc: a.toc, isBlogPostPage: t }), [a, t]);
    })({ content: t, isBlogPostPage: l });
    return r.createElement(n.Provider, { value: c }, a);
   }
   function o() {
    const e = (0, r.useContext)(n);
    if (null === e) throw new l.i6("BlogPostProvider");
    return e;
   }
  },
  26595: (e, a, t) => {
   t.d(a, { Q: () => g });
   var r = t(67294),
    l = t(44996);
   const n = "breadcrumbs__73z",
    c = "breadcrumbs--mobile_QwgF",
    o = "breadcrumbs--desktop_v9Xv";
   var s = t(86010),
    d = t(21209),
    m = t(65663),
    i = t(76775),
    u = t(39960);
   const g = (e) => {
    let { breadcrumbs: a, ...t } = e;
    const g = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...a],
     { pathname: _ } = (0, i.TH)(),
     p = [...g].reverse().find((e) => e.href !== _);
    return r.createElement(
     r.Fragment,
     null,
     r.createElement(
      "div",
      { className: (0, s.Z)(n, o) },
      r.createElement(
       m.Qu,
       t,
       g.map((e, a, t) => {
        let { label: l, href: n, rel: c } = e,
         { length: o } = t;
        return r.createElement(r.Fragment, { key: a }, r.createElement(m.yY, { href: n, current: a === o - 1, disabled: a === o - 1, rel: (0, s.Z)(c, { up: a === o - 2 }) }, l), a < o - 1 && r.createElement(m.sc, null, "/"));
       })
      )
     ),
     p && r.createElement("div", { className: (0, s.Z)(n, c) }, r.createElement(m.hE, null, r.createElement(u.Z, { href: p.href, rel: p.rel, className: "utrecht-link utrecht-link--html-a" }, r.createElement(m.JO, null, r.createElement(d.Z, null)), p.label)))
    );
   };
  },
  31817: (e, a, t) => {
   t.d(a, { Zb: () => m, aY: () => d, um: () => i, wu: () => s });
   var r = t(87462),
    l = t(67294),
    n = t(86010),
    c = t(65663);
   const o = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" },
    s = (e) => {
     let { background: a, children: t, className: c, ...s } = e;
     return l.createElement("div", (0, r.Z)({ className: (0, n.Z)(o.card__illustration, a && o["card__illustration--background"], c) }, s), t);
    },
    d = (e) => l.createElement("div", (0, r.Z)({ className: (0, n.Z)(o.card__content) }, e)),
    m = (e) => {
     let { href: a, appearance: t, className: r, component: s = "div", children: d } = e;
     const m = (e) => ("article" === s ? l.createElement("article", e) : "section" === s ? l.createElement("section", e) : l.createElement("div", e)),
      i = l.createElement(m, { className: (0, n.Z)(o.cardgroup__card, o[`cardgroup__card--${t}`], r) }, d);
     return a ? l.createElement(c.rU, { href: a, boxContent: !0, className: o.cardgroup__link }, i) : i;
    },
    i = (e) => {
     let { appearance: a = "medium", children: t } = e;
     return l.createElement("div", { className: (0, n.Z)(o.cardgroup, o[`cardgroup--${a}`]) }, t);
    };
  },
  31627: (e, a, t) => {
   t.d(a, { Z: () => o });
   var r = t(67294),
    l = t(86010),
    n = t(23770),
    c = t(26595);
   function o(e) {
    const { sidebar: a, toc: t, breadcrumbs: o = [], children: s, ...d } = e,
     m = a && a.items.length > 0;
    return r.createElement(n.Z, d, r.createElement("div", { className: "container margin-vert--md" }, r.createElement("div", { className: "row" }, r.createElement("div", { className: "col col--9 col--offset-1" }, r.createElement(c.Q, { breadcrumbs: o })), r.createElement("main", { className: (0, l.Z)("utrecht-document", "utrecht-html", "col", { "col--7": m, "col--9 col--offset-1": !m }), itemScope: !0, itemType: "http://schema.org/Blog" }, s), t && r.createElement("div", { className: "col col--2" }, t))));
   }
  },
  36200: (e, a, t) => {
   t.r(a), t.d(a, { default: () => p });
   var r = t(67294),
    l = t(86010),
    n = t(52263),
    c = t(10833),
    o = t(35281),
    s = t(31627),
    d = t(99703),
    m = t(90197),
    i = t(1799),
    u = t(53579);
   function g(e) {
    const { metadata: a } = e,
     {
      siteConfig: { title: t },
     } = (0, n.Z)(),
     { blogDescription: l, blogTitle: o, permalink: s } = a,
     d = "/" === s ? t : o;
    return r.createElement(r.Fragment, null, r.createElement(c.d, { title: d, description: l }), r.createElement(m.Z, { tag: "blog_posts_list" }));
   }
   function _(e) {
    const { metadata: a, items: t, sidebar: l } = e;
    return r.createElement(s.Z, { sidebar: l, breadcrumbs: [{ label: a.blogTitle }] }, r.createElement(u.nL, null, a.blogTitle), r.createElement(i.Z, { items: t }), r.createElement(d.Z, { metadata: a }));
   }
   function p(e) {
    return r.createElement(c.FG, { className: (0, l.Z)(o.k.wrapper.blogPages, o.k.page.blogListPage) }, r.createElement(g, e), r.createElement(_, e));
   }
  },
  1799: (e, a, t) => {
   t.d(a, { Z: () => u });
   var r = t(67294),
    l = t(9460),
    n = t(31817),
    c = t(53579);
   const o = { "blog-card": "blog-card_ZodC", "blog-card__header-link": "blog-card__header-link_rMVL", "blog-card__badge": "blog-card__badge_bQ4F" };
   var s = t(86010),
    d = t(39960),
    m = t(8861),
    i = (0, t(30853).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]);
   function u(e) {
    let { items: a } = e;
    return r.createElement(
     n.um,
     { appearance: "large" },
     a.map((e) => {
      let { content: a } = e;
      return r.createElement(
       l.n,
       { key: a.metadata.permalink, content: a },
       r.createElement(
        n.Zb,
        { appearance: "large", className: o["blog-card"] },
        r.createElement(
         n.aY,
         null,
         r.createElement(c.XJ, null, r.createElement(d.Z, { to: a.metadata.permalink, className: (0, s.Z)("utrecht-link", o["blog-card__header-link"]) }, a.metadata.title)),
         r.createElement("div", null, a.metadata.description),
         r.createElement(
          c.k,
          null,
          a.metadata.authors.map((e) => r.createElement(c.Ou, { key: e.name, className: (0, s.Z)(o["blog-card__badge"], o["blog-card__badge--author"]) }, r.createElement(c.JO, { role: "presentational" }, r.createElement(m.Z, null)), r.createElement("span", { className: "visually-hidden" }, "auteur:"), " ", e.name)),
          r.createElement(c.Ou, { className: (0, s.Z)(o["blog-card__badge"], o["blog-card__badge--date"]) }, r.createElement(c.JO, { role: "presentational" }, r.createElement(i, null)), r.createElement("span", { className: "visually-hidden" }, "publicatie datum:"), " ", r.createElement("time", { dateTime: a.metadata.date }, a.metadata.formattedDate))
         )
        )
       )
      );
     })
    );
   }
  },
 },
]);
