"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9572, 4972],
 {
  4972: (e, t, r) => {
   r.r(t), r.d(t, { default: () => o });
   var a = r(67294),
    n = r(95999),
    l = r(10833),
    c = r(23770);
   function o() {
    return a.createElement(a.Fragment, null, a.createElement(l.d, { title: (0, n.I)({ id: "theme.NotFound.title", message: "Page Not Found" }) }), a.createElement(c.Z, null, a.createElement("main", { className: "container margin-vert--xl" }, a.createElement("div", { className: "row" }, a.createElement("div", { className: "col col--6 col--offset-3" }, a.createElement("h1", { className: "hero__title" }, a.createElement(n.Z, { id: "theme.NotFound.title", description: "The title of the 404 page" }, "Page Not Found")), a.createElement("p", null, a.createElement(n.Z, { id: "theme.NotFound.p1", description: "The first paragraph of the 404 page" }, "We could not find what you were looking for.")), a.createElement("p", null, a.createElement(n.Z, { id: "theme.NotFound.p2", description: "The 2nd paragraph of the 404 page" }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));
   }
  },
  78341: (e, t, r) => {
   r.r(t), r.d(t, { BlogPost: () => f, default: () => b });
   var a = r(67294),
    n = r(28084),
    l = r(65663),
    c = r(25935),
    o = r(4972),
    m = r(23770),
    d = r(26595),
    u = r(76775),
    i = r(25934);
   const s = "blog-post_XaDW",
    p = "blog-post__html-content_ebBu",
    _ = "blog-post__footer_zxY3";
   var g = r(86010),
    h = r(31817);
   const E = (e) => ((e) => e.replace(/\/$/, ""))(e),
    f = () => {
     const e = (0, n.ZP)(),
      { pathname: t } = (0, u.TH)(),
      r = e["rss-blog"].default.blogItems.find((e) => E(e.path) === E(t)),
      f = (0, i.Z)();
     return r ? a.createElement(m.Z, null, a.createElement("div", { className: (0, g.Z)(s, "container", "container--narrow padding-top--md", "padding-bottom--lg") }, a.createElement(d.Q, { breadcrumbs: [{ href: "/project", label: "Project" }, { href: "/project/blog", label: "Blog" }, { label: r.title }] }), a.createElement(l.nL, { id: f }, r.title), a.createElement(l.pu, { className: (0, g.Z)(p) }, (0, c.ZP)(r["content:encoded"])), a.createElement("footer", { "aria-labelledby": f, className: _ }, a.createElement(h.Zb, { component: "section" }, a.createElement(h.aY, null, a.createElement(l.XJ, null, "Over dit artikel"), a.createElement(l.FR, null, a.createElement(l.LC, null, a.createElement(l.rt, null, "Auteur"), a.createElement(l.JL, null, r.creator)), a.createElement(l.LC, null, a.createElement(l.rt, null, "Datum"), a.createElement(l.JL, null, a.createElement("time", { dateTime: r.isoDate }, new Intl.DateTimeFormat("nl-NL", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(new Date(r.isoDate))))), r.link && a.createElement(l.LC, null, a.createElement(l.rt, null, "Oorspronkelijke publicatie"), a.createElement(l.JL, null, a.createElement(l.rU, { href: r.link }, new URL(r.link).hostname))))))))) : a.createElement(o.default, null);
    },
    b = f;
  },
  26595: (e, t, r) => {
   r.d(t, { Q: () => p });
   var a = r(67294),
    n = r(44996);
   const l = "breadcrumbs__73z",
    c = "breadcrumbs--mobile_QwgF",
    o = "breadcrumbs--desktop_v9Xv";
   var m = r(86010),
    d = r(21209),
    u = r(65663),
    i = r(76775),
    s = r(39960);
   const p = (e) => {
    let { breadcrumbs: t, ...r } = e;
    const p = [{ href: (0, n.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: _ } = (0, i.TH)(),
     g = [...p].reverse().find((e) => e.href !== _);
    return a.createElement(
     a.Fragment,
     null,
     a.createElement(
      "div",
      { className: (0, m.Z)(l, o) },
      a.createElement(
       u.Qu,
       r,
       p.map((e, t, r) => {
        let { label: n, href: l, rel: c } = e,
         { length: o } = r;
        return a.createElement(a.Fragment, { key: t }, a.createElement(u.yY, { href: l, current: t === o - 1, disabled: t === o - 1, rel: (0, m.Z)(c, { up: t === o - 2 }) }, n), t < o - 1 && a.createElement(u.sc, null, "/"));
       })
      )
     ),
     g && a.createElement("div", { className: (0, m.Z)(l, c) }, a.createElement(u.hE, null, a.createElement(s.Z, { href: g.href, rel: g.rel, className: "utrecht-link utrecht-link--html-a" }, a.createElement(u.JO, null, a.createElement(d.Z, null)), g.label)))
    );
   };
  },
  31817: (e, t, r) => {
   r.d(t, { Zb: () => u, aY: () => d, um: () => i, wu: () => m });
   var a = r(87462),
    n = r(67294),
    l = r(86010),
    c = r(65663);
   const o = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" },
    m = (e) => {
     let { background: t, children: r, className: c, ...m } = e;
     return n.createElement("div", (0, a.Z)({ className: (0, l.Z)(o.card__illustration, t && o["card__illustration--background"], c) }, m), r);
    },
    d = (e) => n.createElement("div", (0, a.Z)({ className: (0, l.Z)(o.card__content) }, e)),
    u = (e) => {
     let { href: t, appearance: r, className: a, component: m = "div", children: d } = e;
     const u = (e) => ("article" === m ? n.createElement("article", e) : "section" === m ? n.createElement("section", e) : n.createElement("div", e)),
      i = n.createElement(u, { className: (0, l.Z)(o.cardgroup__card, o[`cardgroup__card--${r}`], a) }, d);
     return t ? n.createElement(c.rU, { href: t, boxContent: !0, className: o.cardgroup__link }, i) : i;
    },
    i = (e) => {
     let { appearance: t = "medium", children: r } = e;
     return n.createElement("div", { className: (0, l.Z)(o.cardgroup, o[`cardgroup--${t}`]) }, r);
    };
  },
  25934: (e, t, r) => {
   var a;
   r.d(t, { Z: () => i });
   var n = new Uint8Array(16);
   function l() {
    if (!a && !(a = ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) || ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return a(n);
   }
   const c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
   const o = function (e) {
    return "string" == typeof e && c.test(e);
   };
   for (var m = [], d = 0; d < 256; ++d) m.push((d + 256).toString(16).substr(1));
   const u = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
     r = (m[e[t + 0]] + m[e[t + 1]] + m[e[t + 2]] + m[e[t + 3]] + "-" + m[e[t + 4]] + m[e[t + 5]] + "-" + m[e[t + 6]] + m[e[t + 7]] + "-" + m[e[t + 8]] + m[e[t + 9]] + "-" + m[e[t + 10]] + m[e[t + 11]] + m[e[t + 12]] + m[e[t + 13]] + m[e[t + 14]] + m[e[t + 15]]).toLowerCase();
    if (!o(r)) throw TypeError("Stringified UUID is invalid");
    return r;
   };
   const i = function (e, t, r) {
    var a = (e = e || {}).random || (e.rng || l)();
    if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
     r = r || 0;
     for (var n = 0; n < 16; ++n) t[r + n] = a[n];
     return t;
    }
    return u(a);
   };
  },
 },
]);
