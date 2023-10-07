"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [503],
 {
  8861: (e, a, r) => {
   r.d(a, { Z: () => t });
   var t = (0, r(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  11215: (e, a, r) => {
   r.r(a), r.d(a, { Blog: () => N, BlogCard: () => Z, default: () => f });
   var t = r(87462),
    l = r(67294),
    c = r(28084),
    n = r(65663),
    d = r(25935),
    m = r(23770),
    s = r(52263),
    o = r(39960),
    u = r(26595),
    _ = r(31817),
    i = r(86010);
   const g = "blog-card_awL1",
    p = "blog-card__header-link_ApDH",
    h = "blog-card__badge_XSMo",
    b = "blog-card__badge--author_Jsks",
    E = "blog-card__badge--date_qW95";
   var v = r(8861),
    k = (0, r(30853).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]);
   const Z = (e) => {
     let { uuid: a, creator: r, title: t, path: c, content: m, headingLevel: s, isoDate: u } = e;
     return l.createElement(_.Zb, { key: a, appearance: "large", className: g }, l.createElement(_.aY, null, l.createElement(n.X6, { level: s }, l.createElement(o.Z, { to: c, className: (0, i.Z)("utrecht-link", p) }, t)), l.createElement(n.pu, null, (0, d.ZP)(m)), l.createElement(n.k, null, l.createElement(n.Ou, { className: (0, i.Z)(h, b) }, l.createElement(n.JO, { role: "presentational" }, l.createElement(v.Z, null)), l.createElement("span", { className: "visually-hidden" }, "auteur:"), r), l.createElement(n.Ou, { className: (0, i.Z)(h, E) }, l.createElement(n.JO, { role: "presentational" }, l.createElement(k, null)), l.createElement("span", { className: "visually-hidden" }, "publicatie datum:"), l.createElement("time", { dateTime: u }, new Intl.DateTimeFormat("nl-NL").format(new Date(u)))))));
    },
    N = () => {
     const e = (0, c.ZP)()["rss-blog"].default.blogItems,
      { siteConfig: a } = (0, s.Z)();
     return l.createElement(
      m.Z,
      { title: `${a.title} - blog overzicht` },
      l.createElement(
       "div",
       { className: (0, i.Z)("container container--narrow padding-top--md padding-bottom--lg") },
       l.createElement(u.Q, { breadcrumbs: [{ label: "Project", href: "/project" }, { label: "Blog" }] }),
       l.createElement(
        _.um,
        { appearance: "large" },
        e.map((e) => l.createElement(Z, (0, t.Z)({}, e, { key: e.uuid, headingLevel: 2 })))
       )
      )
     );
    },
    f = N;
  },
  26595: (e, a, r) => {
   r.d(a, { Q: () => i });
   var t = r(67294),
    l = r(44996);
   const c = "breadcrumbs__73z",
    n = "breadcrumbs--mobile_QwgF",
    d = "breadcrumbs--desktop_v9Xv";
   var m = r(86010),
    s = r(21209),
    o = r(65663),
    u = r(76775),
    _ = r(39960);
   const i = (e) => {
    let { breadcrumbs: a, ...r } = e;
    const i = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...a],
     { pathname: g } = (0, u.TH)(),
     p = [...i].reverse().find((e) => e.href !== g);
    return t.createElement(
     t.Fragment,
     null,
     t.createElement(
      "div",
      { className: (0, m.Z)(c, d) },
      t.createElement(
       o.Qu,
       r,
       i.map((e, a, r) => {
        let { label: l, href: c, rel: n } = e,
         { length: d } = r;
        return t.createElement(t.Fragment, { key: a }, t.createElement(o.yY, { href: c, current: a === d - 1, disabled: a === d - 1, rel: (0, m.Z)(n, { up: a === d - 2 }) }, l), a < d - 1 && t.createElement(o.sc, null, "/"));
       })
      )
     ),
     p && t.createElement("div", { className: (0, m.Z)(c, n) }, t.createElement(o.hE, null, t.createElement(_.Z, { href: p.href, rel: p.rel, className: "utrecht-link utrecht-link--html-a" }, t.createElement(o.JO, null, t.createElement(s.Z, null)), p.label)))
    );
   };
  },
  31817: (e, a, r) => {
   r.d(a, { Zb: () => o, aY: () => s, um: () => u, wu: () => m });
   var t = r(87462),
    l = r(67294),
    c = r(86010),
    n = r(65663);
   const d = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" },
    m = (e) => {
     let { background: a, children: r, className: n, ...m } = e;
     return l.createElement("div", (0, t.Z)({ className: (0, c.Z)(d.card__illustration, a && d["card__illustration--background"], n) }, m), r);
    },
    s = (e) => l.createElement("div", (0, t.Z)({ className: (0, c.Z)(d.card__content) }, e)),
    o = (e) => {
     let { href: a, appearance: r, className: t, component: m = "div", children: s } = e;
     const o = (e) => ("article" === m ? l.createElement("article", e) : "section" === m ? l.createElement("section", e) : l.createElement("div", e)),
      u = l.createElement(o, { className: (0, c.Z)(d.cardgroup__card, d[`cardgroup__card--${r}`], t) }, s);
     return a ? l.createElement(n.rU, { href: a, boxContent: !0, className: d.cardgroup__link }, u) : u;
    },
    u = (e) => {
     let { appearance: a = "medium", children: r } = e;
     return l.createElement("div", { className: (0, c.Z)(d.cardgroup, d[`cardgroup--${a}`]) }, r);
    };
  },
 },
]);
