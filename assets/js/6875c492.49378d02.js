"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8610],
 {
  94716: (e, n, t) => {
   t.d(n, { Z: () => a });
   var a = (0, t(68199).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  77818: (e, n, t) => {
   t.d(n, { Z: () => P });
   var a = t(50959),
    r = t(11527);
   function s(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = a.Children.toArray(e),
       t = n.find((e) => a.isValidElement(e) && "mdxAdmonitionTitle" === e.type),
       s = n.filter((e) => e !== t),
       i = t?.props.children;
      return { mdxAdmonitionTitle: i, rest: s.length > 0 ? (0, r.jsx)(r.Fragment, { children: s }) : null };
     })(e.children),
     s = e.title ?? n;
    return { ...e, ...(s && { title: s }), children: t };
   }
   var i = t(86259),
    l = t(48714),
    o = t(76711);
   const c = { admonition: "admonition_WpVL", admonitionHeading: "admonitionHeading_pc6b", admonitionIcon: "admonitionIcon_dFFO", admonitionContent: "admonitionContent_LU7R" };
   function d(e) {
    let { type: n, className: t, children: a } = e;
    return (0, r.jsx)("div", { className: (0, i.Z)(o.k.common.admonition, o.k.common.admonitionType(n), c.admonition, t), children: a });
   }
   function u(e) {
    let { icon: n, title: t } = e;
    return (0, r.jsxs)("div", { className: c.admonitionHeading, children: [(0, r.jsx)("span", { className: c.admonitionIcon, children: n }), t] });
   }
   function h(e) {
    let { children: n } = e;
    return n ? (0, r.jsx)("div", { className: c.admonitionContent, children: n }) : null;
   }
   function m(e) {
    const { type: n, icon: t, title: a, children: s, className: i } = e;
    return (0, r.jsxs)(d, { type: n, className: i, children: [(0, r.jsx)(u, { title: a, icon: t }), (0, r.jsx)(h, { children: s })] });
   }
   function g(e) {
    return (0, r.jsx)("svg", { viewBox: "0 0 14 16", ...e, children: (0, r.jsx)("path", { fillRule: "evenodd", d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z" }) });
   }
   const p = { icon: (0, r.jsx)(g, {}), title: (0, r.jsx)(l.Z, { id: "theme.admonition.note", description: "The default label used for the Note admonition (:::note)", children: "note" }) };
   function x(e) {
    return (0, r.jsx)(m, { ...p, ...e, className: (0, i.Z)("alert alert--secondary", e.className), children: e.children });
   }
   function j(e) {
    return (0, r.jsx)("svg", { viewBox: "0 0 12 16", ...e, children: (0, r.jsx)("path", { fillRule: "evenodd", d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z" }) });
   }
   const f = { icon: (0, r.jsx)(j, {}), title: (0, r.jsx)(l.Z, { id: "theme.admonition.tip", description: "The default label used for the Tip admonition (:::tip)", children: "tip" }) };
   function _(e) {
    return (0, r.jsx)(m, { ...f, ...e, className: (0, i.Z)("alert alert--success", e.className), children: e.children });
   }
   function v(e) {
    return (0, r.jsx)("svg", { viewBox: "0 0 14 16", ...e, children: (0, r.jsx)("path", { fillRule: "evenodd", d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" }) });
   }
   const b = { icon: (0, r.jsx)(v, {}), title: (0, r.jsx)(l.Z, { id: "theme.admonition.info", description: "The default label used for the Info admonition (:::info)", children: "info" }) };
   function Z(e) {
    return (0, r.jsx)(m, { ...b, ...e, className: (0, i.Z)("alert alert--info", e.className), children: e.children });
   }
   function N(e) {
    return (0, r.jsx)("svg", { viewBox: "0 0 16 16", ...e, children: (0, r.jsx)("path", { fillRule: "evenodd", d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" }) });
   }
   const k = { icon: (0, r.jsx)(N, {}), title: (0, r.jsx)(l.Z, { id: "theme.admonition.warning", description: "The default label used for the Warning admonition (:::warning)", children: "warning" }) };
   function w(e) {
    return (0, r.jsx)("svg", { viewBox: "0 0 12 16", ...e, children: (0, r.jsx)("path", { fillRule: "evenodd", d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z" }) });
   }
   const y = { icon: (0, r.jsx)(w, {}), title: (0, r.jsx)(l.Z, { id: "theme.admonition.danger", description: "The default label used for the Danger admonition (:::danger)", children: "danger" }) };
   const M = { icon: (0, r.jsx)(N, {}), title: (0, r.jsx)(l.Z, { id: "theme.admonition.caution", description: "The default label used for the Caution admonition (:::caution)", children: "caution" }) };
   const T = {
    ...{
     note: x,
     tip: _,
     info: Z,
     warning: function (e) {
      return (0, r.jsx)(m, { ...k, ...e, className: (0, i.Z)("alert alert--warning", e.className), children: e.children });
     },
     danger: function (e) {
      return (0, r.jsx)(m, { ...y, ...e, className: (0, i.Z)("alert alert--danger", e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, r.jsx)(x, { title: "secondary", ...e }),
     important: (e) => (0, r.jsx)(Z, { title: "important", ...e }),
     success: (e) => (0, r.jsx)(_, { title: "success", ...e }),
     caution: function (e) {
      return (0, r.jsx)(m, { ...M, ...e, className: (0, i.Z)("alert alert--warning", e.className), children: e.children });
     },
    },
   };
   function P(e) {
    const n = s(e),
     t = ((a = n.type), T[a] || (console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`), T.info));
    var a;
    return (0, r.jsx)(t, { ...n });
   }
  },
  13673: (e, n, t) => {
   t.d(n, { Z: () => i });
   t(50959);
   var a = t(48714),
    r = t(91138),
    s = t(11527);
   function i(e) {
    const { metadata: n } = e,
     { previousPage: t, nextPage: i } = n;
    return (0, s.jsxs)("nav", { className: "pagination-nav", "aria-label": (0, a.I)({ id: "theme.blog.paginator.navAriaLabel", message: "Blog list page navigation", description: "The ARIA label for the blog pagination" }), children: [t && (0, s.jsx)(r.Z, { permalink: t, title: (0, s.jsx)(a.Z, { id: "theme.blog.paginator.newerEntries", description: "The label used to navigate to the newer blog posts page (previous page)", children: "Newer Entries" }) }), i && (0, s.jsx)(r.Z, { permalink: i, title: (0, s.jsx)(a.Z, { id: "theme.blog.paginator.olderEntries", description: "The label used to navigate to the older blog posts page (next page)", children: "Older Entries" }), isNext: !0 })] });
   }
  },
  82104: (e, n, t) => {
   t.r(n), t.d(n, { default: () => _ });
   t(50959);
   var a = t(86259),
    r = t(48714),
    s = t(17196),
    i = t(48270),
    l = t(76711),
    o = t(58812),
    c = t(29450),
    d = t(13673),
    u = t(8351),
    h = t(24557),
    m = t(63968),
    g = t(9024),
    p = t(11527);
   function x(e) {
    const n = (function () {
     const { selectMessage: e } = (0, s.c)();
     return (n) => e(n, (0, r.I)({ id: "theme.blog.post.plurals", description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One post|{count} posts" }, { count: n }));
    })();
    return (0, r.I)({ id: "theme.blog.tagTitle", description: "The title of the page for a blog tag", message: '{nPosts} tagged with "{tagName}"' }, { nPosts: n(e.count), tagName: e.label });
   }
   function j(e) {
    let { tag: n } = e;
    const t = x(n);
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(i.d, { title: t }), (0, p.jsx)(u.Z, { tag: "blog_tags_posts" })] });
   }
   function f(e) {
    let { tag: n, items: t, sidebar: a, listMetadata: s } = e;
    const i = x(n);
    return (0, p.jsxs)(c.Z, { sidebar: a, children: [n.unlisted && (0, p.jsx)(m.Z, {}), (0, p.jsxs)("header", { className: "margin-bottom--xl", children: [(0, p.jsx)(g.Z, { as: "h1", children: i }), (0, p.jsx)(o.Z, { href: n.allTagsPath, children: (0, p.jsx)(r.Z, { id: "theme.tags.tagsPageLink", description: "The label of the link targeting the tag list page", children: "View All Tags" }) })] }), (0, p.jsx)(h.Z, { items: t }), (0, p.jsx)(d.Z, { metadata: s })] });
   }
   function _(e) {
    return (0, p.jsxs)(i.FG, { className: (0, a.Z)(l.k.wrapper.blogPages, l.k.page.blogTagPostListPage), children: [(0, p.jsx)(j, { ...e }), (0, p.jsx)(f, { ...e })] });
   }
  },
  91138: (e, n, t) => {
   t.d(n, { Z: () => i });
   t(50959);
   var a = t(86259),
    r = t(58812),
    s = t(11527);
   function i(e) {
    const { permalink: n, title: t, subLabel: i, isNext: l } = e;
    return (0, s.jsxs)(r.Z, { className: (0, a.Z)("pagination-nav__link", l ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: n, children: [i && (0, s.jsx)("div", { className: "pagination-nav__sublabel", children: i }), (0, s.jsx)("div", { className: "pagination-nav__label", children: t })] });
   }
  },
  63968: (e, n, t) => {
   t.d(n, { Z: () => m });
   t(50959);
   var a = t(86259),
    r = t(48714),
    s = t(81911),
    i = t(11527);
   function l() {
    return (0, i.jsx)(r.Z, { id: "theme.unlistedContent.title", description: "The unlisted content banner title", children: "Unlisted page" });
   }
   function o() {
    return (0, i.jsx)(r.Z, { id: "theme.unlistedContent.message", description: "The unlisted content banner message", children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it." });
   }
   function c() {
    return (0, i.jsx)(s.Z, { children: (0, i.jsx)("meta", { name: "robots", content: "noindex, nofollow" }) });
   }
   var d = t(76711),
    u = t(77818);
   function h(e) {
    let { className: n } = e;
    return (0, i.jsx)(u.Z, { type: "caution", title: (0, i.jsx)(l, {}), className: (0, a.Z)(n, d.k.common.unlistedBanner), children: (0, i.jsx)(o, {}) });
   }
   function m(e) {
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(c, {}), (0, i.jsx)(h, { ...e })] });
   }
  },
  46438: (e, n, t) => {
   t.d(n, { C: () => o, n: () => l });
   var a = t(50959),
    r = t(27362),
    s = t(11527);
   const i = a.createContext(null);
   function l(e) {
    let { children: n, content: t, isBlogPostPage: r = !1 } = e;
    const l = (function (e) {
     let { content: n, isBlogPostPage: t } = e;
     return (0, a.useMemo)(() => ({ metadata: n.metadata, frontMatter: n.frontMatter, assets: n.assets, toc: n.toc, isBlogPostPage: t }), [n, t]);
    })({ content: t, isBlogPostPage: r });
    return (0, s.jsx)(i.Provider, { value: l, children: n });
   }
   function o() {
    const e = (0, a.useContext)(i);
    if (null === e) throw new r.i6("BlogPostProvider");
    return e;
   }
  },
  17196: (e, n, t) => {
   t.d(n, { c: () => c });
   var a = t(50959),
    r = t(45090);
   const s = ["zero", "one", "two", "few", "many", "other"];
   function i(e) {
    return s.filter((n) => e.includes(n));
   }
   const l = { locale: "en", pluralForms: i(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function o() {
    const {
     i18n: { currentLocale: e },
    } = (0, r.Z)();
    return (0, a.useMemo)(() => {
     try {
      return (function (e) {
       const n = new Intl.PluralRules(e);
       return { locale: e, pluralForms: i(n.resolvedOptions().pluralCategories), select: (e) => n.select(e) };
      })(e);
     } catch (n) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`), l;
     }
    }, [e]);
   }
   function c() {
    const e = o();
    return {
     selectMessage: (n, t) =>
      (function (e, n, t) {
       const a = e.split("|");
       if (1 === a.length) return a[0];
       a.length > t.pluralForms.length && console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);
       const r = t.select(n),
        s = t.pluralForms.indexOf(r);
       return a[Math.min(s, a.length - 1)];
      })(t, n, e),
    };
   }
  },
  46820: (e, n, t) => {
   t.d(n, { Q: () => g });
   var a = t(58812),
    r = t(28903),
    s = t(90772),
    i = t(35932),
    l = t(16532),
    o = t(86259),
    c = t(50959);
   const d = "breadcrumbs__73z",
    u = "breadcrumbs--mobile_QwgF",
    h = "breadcrumbs--desktop_v9Xv";
   var m = t(11527);
   const g = (e) => {
    let { breadcrumbs: n, ...t } = e;
    const g = [{ href: (0, s.Z)("/"), label: "Home", rel: "home" }, ...n],
     { pathname: p } = (0, r.TH)(),
     x = [...g].reverse().find((e) => e.href !== p);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)("div", {
       className: (0, o.Z)(d, h),
       children: (0, m.jsx)(l.Qu, {
        ...t,
        children: g.map((e, n, t) => {
         let { label: a, href: r, rel: s } = e,
          { length: i } = t;
         return (0, m.jsxs)(c.Fragment, { children: [(0, m.jsx)(l.yY, { href: r, current: n === i - 1, disabled: n === i - 1, rel: (0, o.Z)(s, { up: n === i - 2 }), children: a }), n < i - 1 && (0, m.jsx)(l.sc, { children: "/" })] }, n);
        }),
       }),
      }),
      x && (0, m.jsx)("div", { className: (0, o.Z)(d, u), children: (0, m.jsx)(l.hE, { children: (0, m.jsxs)(a.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, m.jsx)(l.JO, { children: (0, m.jsx)(i.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  85845: (e, n, t) => {
   t.d(n, { Zb: () => c, aY: () => o, um: () => d, wu: () => l });
   var a = t(16532),
    r = t(86259);
   t(50959);
   const s = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" };
   var i = t(11527);
   const l = (e) => {
     let { background: n, children: t, className: a, ...l } = e;
     return (0, i.jsx)("div", { className: (0, r.Z)(s.card__illustration, n && s["card__illustration--background"], a), ...l, children: t });
    },
    o = (e) => (0, i.jsx)("div", { className: (0, r.Z)(s.card__content), ...e }),
    c = (e) => {
     let { href: n, appearance: t, className: l, component: o = "div", children: c } = e;
     const d = (e) => ("article" === o ? (0, i.jsx)("article", { ...e }) : "section" === o ? (0, i.jsx)("section", { ...e }) : (0, i.jsx)("div", { ...e })),
      u = (0, i.jsx)(d, { className: (0, r.Z)(s.cardgroup__card, s[`cardgroup__card--${t}`], l), children: c });
     return n ? (0, i.jsx)(a.rU, { href: n, boxContent: !0, className: s.cardgroup__link, children: u }) : u;
    },
    d = (e) => {
     let { appearance: n = "medium", children: t } = e;
     return (0, i.jsx)("div", { className: (0, r.Z)(s.cardgroup, s[`cardgroup--${n}`]), children: t });
    };
  },
  29450: (e, n, t) => {
   t.d(n, { Z: () => l });
   var a = t(46820),
    r = t(54561),
    s = t(86259),
    i = (t(50959), t(11527));
   function l(e) {
    const { sidebar: n, toc: t, breadcrumbs: l = [], children: o, ...c } = e,
     d = n && n.items.length > 0;
    return (0, i.jsx)(r.Z, { ...c, children: (0, i.jsx)("div", { className: "container margin-vert--md", children: (0, i.jsxs)("div", { className: "row", children: [(0, i.jsx)("div", { className: "col col--9 col--offset-1", children: (0, i.jsx)(a.Q, { breadcrumbs: l }) }), (0, i.jsx)("main", { className: (0, s.Z)("utrecht-document", "utrecht-html", "col", { "col--7": d, "col--9 col--offset-1": !d }), itemScope: !0, itemType: "http://schema.org/Blog", children: o }), t && (0, i.jsx)("div", { className: "col col--2", children: t })] }) }) });
   }
  },
  24557: (e, n, t) => {
   t.d(n, { Z: () => h });
   var a = t(58812),
    r = t(46438),
    s = t(85845),
    i = t(94716),
    l = (0, t(68199).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]),
    o = t(83778),
    c = t(86259);
   t(50959);
   const d = { "blog-card": "blog-card_ZodC", "blog-card__header-link": "blog-card__header-link_rMVL", "blog-card__badge": "blog-card__badge_bQ4F" };
   var u = t(11527);
   function h(e) {
    let { items: n } = e;
    return (0, u.jsx)(s.um, {
     appearance: "large",
     children: n.map((e) => {
      let { content: n } = e;
      return (0, u.jsx)(r.n, { content: n, children: (0, u.jsx)(s.Zb, { appearance: "large", className: d["blog-card"], children: (0, u.jsxs)(s.aY, { children: [(0, u.jsx)(o.XJ, { children: (0, u.jsx)(a.Z, { to: n.metadata.permalink, className: (0, c.Z)("utrecht-link", d["blog-card__header-link"]), children: n.metadata.title }) }), (0, u.jsx)("div", { children: n.metadata.description }), (0, u.jsxs)(o.k, { children: [n.metadata.authors.map((e) => (0, u.jsxs)(o.Ou, { className: (0, c.Z)(d["blog-card__badge"], d["blog-card__badge--author"]), children: [(0, u.jsx)(o.JO, { role: "presentational", children: (0, u.jsx)(i.Z, {}) }), (0, u.jsx)("span", { className: "visually-hidden", children: "auteur:" }), " ", e.name] }, e.name)), (0, u.jsxs)(o.Ou, { className: (0, c.Z)(d["blog-card__badge"], d["blog-card__badge--date"]), children: [(0, u.jsx)(o.JO, { role: "presentational", children: (0, u.jsx)(l, {}) }), (0, u.jsx)("span", { className: "visually-hidden", children: "publicatie datum:" }), " ", (0, u.jsx)("time", { dateTime: n.metadata.date, children: n.metadata.formattedDate })] })] })] }) }) }, n.metadata.permalink);
     }),
    });
   }
  },
 },
]);
