"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48610],
 {
  8861: (e, t, a) => {
   a.d(t, { Z: () => r });
   var r = (0, a(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  99703: (e, t, a) => {
   a.d(t, { Z: () => c });
   var r = a(67294),
    l = a(95999),
    n = a(32244);
   function c(e) {
    const { metadata: t } = e,
     { previousPage: a, nextPage: c } = t;
    return r.createElement("nav", { className: "pagination-nav", "aria-label": (0, l.I)({ id: "theme.blog.paginator.navAriaLabel", message: "Blog list page navigation", description: "The ARIA label for the blog pagination" }) }, a && r.createElement(n.Z, { permalink: a, title: r.createElement(l.Z, { id: "theme.blog.paginator.newerEntries", description: "The label used to navigate to the newer blog posts page (previous page)" }, "Newer Entries") }), c && r.createElement(n.Z, { permalink: c, title: r.createElement(l.Z, { id: "theme.blog.paginator.olderEntries", description: "The label used to navigate to the older blog posts page (next page)" }, "Older Entries"), isNext: !0 }));
   }
  },
  41714: (e, t, a) => {
   a.r(t), a.d(t, { default: () => b });
   var r = a(67294),
    l = a(86010),
    n = a(95999),
    c = a(88824),
    o = a(10833),
    s = a(35281),
    i = a(39960),
    m = a(31627),
    d = a(99703),
    u = a(90197),
    g = a(1799);
   function p(e) {
    const t = (function () {
     const { selectMessage: e } = (0, c.c)();
     return (t) => e(t, (0, n.I)({ id: "theme.blog.post.plurals", description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One post|{count} posts" }, { count: t }));
    })();
    return (0, n.I)({ id: "theme.blog.tagTitle", description: "The title of the page for a blog tag", message: '{nPosts} tagged with "{tagName}"' }, { nPosts: t(e.count), tagName: e.label });
   }
   function _(e) {
    let { tag: t } = e;
    const a = p(t);
    return r.createElement(r.Fragment, null, r.createElement(o.d, { title: a }), r.createElement(u.Z, { tag: "blog_tags_posts" }));
   }
   function h(e) {
    let { tag: t, items: a, sidebar: l, listMetadata: c } = e;
    const o = p(t);
    return r.createElement(m.Z, { sidebar: l }, r.createElement("header", { className: "margin-bottom--xl" }, r.createElement("h1", null, o), r.createElement(i.Z, { href: t.allTagsPath }, r.createElement(n.Z, { id: "theme.tags.tagsPageLink", description: "The label of the link targeting the tag list page" }, "View All Tags"))), r.createElement(g.Z, { items: a }), r.createElement(d.Z, { metadata: c }));
   }
   function b(e) {
    return r.createElement(o.FG, { className: (0, l.Z)(s.k.wrapper.blogPages, s.k.page.blogTagPostListPage) }, r.createElement(_, e), r.createElement(h, e));
   }
  },
  32244: (e, t, a) => {
   a.d(t, { Z: () => c });
   var r = a(67294),
    l = a(86010),
    n = a(39960);
   function c(e) {
    const { permalink: t, title: a, subLabel: c, isNext: o } = e;
    return r.createElement(n.Z, { className: (0, l.Z)("pagination-nav__link", o ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: t }, c && r.createElement("div", { className: "pagination-nav__sublabel" }, c), r.createElement("div", { className: "pagination-nav__label" }, a));
   }
  },
  9460: (e, t, a) => {
   a.d(t, { C: () => o, n: () => c });
   var r = a(67294),
    l = a(902);
   const n = r.createContext(null);
   function c(e) {
    let { children: t, content: a, isBlogPostPage: l = !1 } = e;
    const c = (function (e) {
     let { content: t, isBlogPostPage: a } = e;
     return (0, r.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: a }), [t, a]);
    })({ content: a, isBlogPostPage: l });
    return r.createElement(n.Provider, { value: c }, t);
   }
   function o() {
    const e = (0, r.useContext)(n);
    if (null === e) throw new l.i6("BlogPostProvider");
    return e;
   }
  },
  88824: (e, t, a) => {
   a.d(t, { c: () => i });
   var r = a(67294),
    l = a(52263);
   const n = ["zero", "one", "two", "few", "many", "other"];
   function c(e) {
    return n.filter((t) => e.includes(t));
   }
   const o = { locale: "en", pluralForms: c(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function s() {
    const {
     i18n: { currentLocale: e },
    } = (0, l.Z)();
    return (0, r.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: c(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), o;
     }
    }, [e]);
   }
   function i() {
    const e = s();
    return {
     selectMessage: (t, a) =>
      (function (e, t, a) {
       const r = e.split("|");
       if (1 === r.length) return r[0];
       r.length > a.pluralForms.length && console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);
       const l = a.select(t),
        n = a.pluralForms.indexOf(l);
       return r[Math.min(n, r.length - 1)];
      })(a, t, e),
    };
   }
  },
  26595: (e, t, a) => {
   a.d(t, { Q: () => g });
   var r = a(67294),
    l = a(44996);
   const n = "breadcrumbs__73z",
    c = "breadcrumbs--mobile_QwgF",
    o = "breadcrumbs--desktop_v9Xv";
   var s = a(86010),
    i = a(21209),
    m = a(65663),
    d = a(76775),
    u = a(39960);
   const g = (e) => {
    let { breadcrumbs: t, ...a } = e;
    const g = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, d.TH)(),
     _ = [...g].reverse().find((e) => e.href !== p);
    return r.createElement(
     r.Fragment,
     null,
     r.createElement(
      "div",
      { className: (0, s.Z)(n, o) },
      r.createElement(
       m.Qu,
       a,
       g.map((e, t, a) => {
        let { label: l, href: n, rel: c } = e,
         { length: o } = a;
        return r.createElement(r.Fragment, { key: t }, r.createElement(m.yY, { href: n, current: t === o - 1, disabled: t === o - 1, rel: (0, s.Z)(c, { up: t === o - 2 }) }, l), t < o - 1 && r.createElement(m.sc, null, "/"));
       })
      )
     ),
     _ && r.createElement("div", { className: (0, s.Z)(n, c) }, r.createElement(m.hE, null, r.createElement(u.Z, { href: _.href, rel: _.rel, className: "utrecht-link utrecht-link--html-a" }, r.createElement(m.JO, null, r.createElement(i.Z, null)), _.label)))
    );
   };
  },
  31817: (e, t, a) => {
   a.d(t, { Zb: () => m, aY: () => i, um: () => d, wu: () => s });
   var r = a(87462),
    l = a(67294),
    n = a(86010),
    c = a(65663);
   const o = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" },
    s = (e) => {
     let { background: t, children: a, className: c, ...s } = e;
     return l.createElement("div", (0, r.Z)({ className: (0, n.Z)(o.card__illustration, t && o["card__illustration--background"], c) }, s), a);
    },
    i = (e) => l.createElement("div", (0, r.Z)({ className: (0, n.Z)(o.card__content) }, e)),
    m = (e) => {
     let { href: t, appearance: a, className: r, component: s = "div", children: i } = e;
     const m = (e) => ("article" === s ? l.createElement("article", e) : "section" === s ? l.createElement("section", e) : l.createElement("div", e)),
      d = l.createElement(m, { className: (0, n.Z)(o.cardgroup__card, o[`cardgroup__card--${a}`], r) }, i);
     return t ? l.createElement(c.rU, { href: t, boxContent: !0, className: o.cardgroup__link }, d) : d;
    },
    d = (e) => {
     let { appearance: t = "medium", children: a } = e;
     return l.createElement("div", { className: (0, n.Z)(o.cardgroup, o[`cardgroup--${t}`]) }, a);
    };
  },
  31627: (e, t, a) => {
   a.d(t, { Z: () => o });
   var r = a(67294),
    l = a(86010),
    n = a(23770),
    c = a(26595);
   function o(e) {
    const { sidebar: t, toc: a, breadcrumbs: o = [], children: s, ...i } = e,
     m = t && t.items.length > 0;
    return r.createElement(n.Z, i, r.createElement("div", { className: "container margin-vert--md" }, r.createElement("div", { className: "row" }, r.createElement("div", { className: "col col--9 col--offset-1" }, r.createElement(c.Q, { breadcrumbs: o })), r.createElement("main", { className: (0, l.Z)("utrecht-document", "utrecht-html", "col", { "col--7": m, "col--9 col--offset-1": !m }), itemScope: !0, itemType: "http://schema.org/Blog" }, s), a && r.createElement("div", { className: "col col--2" }, a))));
   }
  },
  1799: (e, t, a) => {
   a.d(t, { Z: () => u });
   var r = a(67294),
    l = a(9460),
    n = a(31817),
    c = a(53579);
   const o = { "blog-card": "blog-card_ZodC", "blog-card__header-link": "blog-card__header-link_rMVL", "blog-card__badge": "blog-card__badge_bQ4F" };
   var s = a(86010),
    i = a(39960),
    m = a(8861),
    d = (0, a(30853).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]);
   function u(e) {
    let { items: t } = e;
    return r.createElement(
     n.um,
     { appearance: "large" },
     t.map((e) => {
      let { content: t } = e;
      return r.createElement(
       l.n,
       { key: t.metadata.permalink, content: t },
       r.createElement(
        n.Zb,
        { appearance: "large", className: o["blog-card"] },
        r.createElement(
         n.aY,
         null,
         r.createElement(c.XJ, null, r.createElement(i.Z, { to: t.metadata.permalink, className: (0, s.Z)("utrecht-link", o["blog-card__header-link"]) }, t.metadata.title)),
         r.createElement("div", null, t.metadata.description),
         r.createElement(
          c.k,
          null,
          t.metadata.authors.map((e) => r.createElement(c.Ou, { key: e.name, className: (0, s.Z)(o["blog-card__badge"], o["blog-card__badge--author"]) }, r.createElement(c.JO, { role: "presentational" }, r.createElement(m.Z, null)), r.createElement("span", { className: "visually-hidden" }, "auteur:"), " ", e.name)),
          r.createElement(c.Ou, { className: (0, s.Z)(o["blog-card__badge"], o["blog-card__badge--date"]) }, r.createElement(c.JO, { role: "presentational" }, r.createElement(d, null)), r.createElement("span", { className: "visually-hidden" }, "publicatie datum:"), " ", r.createElement("time", { dateTime: t.metadata.date }, t.metadata.formattedDate))
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
