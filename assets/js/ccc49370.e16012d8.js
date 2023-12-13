"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  21042: (e, t, r) => {
   r.d(t, { C: () => i, n: () => o });
   var n = r(50959),
    s = r(90248),
    l = r(11527);
   const a = n.createContext(null);
   function o(e) {
    let { children: t, content: r, isBlogPostPage: s = !1 } = e;
    const o = (function (e) {
     let { content: t, isBlogPostPage: r } = e;
     return (0, n.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: r }), [t, r]);
    })({ content: r, isBlogPostPage: s });
    return (0, l.jsx)(a.Provider, { value: o, children: t });
   }
   function i() {
    const e = (0, n.useContext)(a);
    if (null === e) throw new s.i6("BlogPostProvider");
    return e;
   }
  },
  9509: (e, t, r) => {
   r.d(t, { c: () => c });
   var n = r(50959),
    s = r(1050);
   const l = ["zero", "one", "two", "few", "many", "other"];
   function a(e) {
    return l.filter((t) => e.includes(t));
   }
   const o = { locale: "en", pluralForms: a(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function i() {
    const {
     i18n: { currentLocale: e },
    } = (0, s.Z)();
    return (0, n.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: a(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), o;
     }
    }, [e]);
   }
   function c() {
    const e = i();
    return {
     selectMessage: (t, r) =>
      (function (e, t, r) {
       const n = e.split("|");
       if (1 === n.length) return n[0];
       n.length > r.pluralForms.length && console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);
       const s = r.select(t),
        l = r.pluralForms.indexOf(s);
       return n[Math.min(l, n.length - 1)];
      })(r, t, e),
    };
   }
  },
  46820: (e, t, r) => {
   r.d(t, { Q: () => g });
   var n = r(50959),
    s = r(3426);
   const l = "breadcrumbs__73z",
    a = "breadcrumbs--mobile_QwgF",
    o = "breadcrumbs--desktop_v9Xv";
   var i = r(5341),
    c = r(38456),
    d = r(16532),
    m = r(28903),
    u = r(62384),
    h = r(11527);
   const g = (e) => {
    let { breadcrumbs: t, ...r } = e;
    const g = [{ href: (0, s.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, m.TH)(),
     x = [...g].reverse().find((e) => e.href !== p);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, i.Z)(l, o),
       children: (0, h.jsx)(d.Qu, {
        ...r,
        children: g.map((e, t, r) => {
         let { label: s, href: l, rel: a } = e,
          { length: o } = r;
         return (0, h.jsxs)(n.Fragment, { children: [(0, h.jsx)(d.yY, { href: l, current: t === o - 1, disabled: t === o - 1, rel: (0, i.Z)(a, { up: t === o - 2 }), children: s }), t < o - 1 && (0, h.jsx)(d.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      x && (0, h.jsx)("div", { className: (0, i.Z)(l, a), children: (0, h.jsx)(d.hE, { children: (0, h.jsxs)(u.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(d.JO, { children: (0, h.jsx)(c.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, t, r) => {
   r.d(t, { Z: () => o });
   r(50959);
   var n = r(5341),
    s = r(7993),
    l = r(46820),
    a = r(11527);
   function o(e) {
    const { sidebar: t, toc: r, breadcrumbs: o = [], children: i, ...c } = e,
     d = t && t.items.length > 0;
    return (0, a.jsx)(s.Z, { ...c, children: (0, a.jsx)("div", { className: "container margin-vert--md", children: (0, a.jsxs)("div", { className: "row", children: [(0, a.jsx)("div", { className: "col col--9 col--offset-1", children: (0, a.jsx)(l.Q, { breadcrumbs: o }) }), (0, a.jsx)("main", { className: (0, n.Z)("utrecht-document", "utrecht-html", "col", { "col--7": d, "col--9 col--offset-1": !d }), itemScope: !0, itemType: "http://schema.org/Blog", children: i }), r && (0, a.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  31816: (e, t, r) => {
   r.r(t), r.d(t, { default: () => D });
   r(50959);
   var n = r(5341),
    s = r(44616),
    l = r(15116),
    a = r(21042),
    o = r(29450),
    i = r(3426),
    c = r(11527);
   function d(e) {
    let { children: t, className: r } = e;
    const {
      frontMatter: n,
      assets: s,
      metadata: { description: l },
     } = (0, a.C)(),
     { withBaseUrl: o } = (0, i.C)(),
     d = s.image ?? n.image,
     m = n.keywords ?? [];
    return (0, c.jsxs)("article", { className: r, itemProp: "blogPost", itemScope: !0, itemType: "https://schema.org/BlogPosting", children: [l && (0, c.jsx)("meta", { itemProp: "description", content: l }), d && (0, c.jsx)("link", { itemProp: "image", href: o(d, { absolute: !0 }) }), m.length > 0 && (0, c.jsx)("meta", { itemProp: "keywords", content: m.join(",") }), t] });
   }
   var m = r(62384);
   const u = { title: "title_HZIQ" };
   function h(e) {
    let { className: t } = e;
    const { metadata: r, isBlogPostPage: s } = (0, a.C)(),
     { permalink: l, title: o } = r,
     i = s ? "h1" : "h2";
    return (0, c.jsx)(i, { className: (0, n.Z)(u.title, t), itemProp: "headline", children: s ? o : (0, c.jsx)(m.Z, { itemProp: "url", to: l, children: o }) });
   }
   var g = r(77289),
    p = r(9509);
   const x = { container: "container_HXg8" };
   function j(e) {
    let { readingTime: t } = e;
    const r = (function () {
     const { selectMessage: e } = (0, p.c)();
     return (t) => {
      const r = Math.ceil(t);
      return e(r, (0, g.I)({ id: "theme.blog.post.readingTime.plurals", description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One min read|{readingTime} min read" }, { readingTime: r }));
     };
    })();
    return (0, c.jsx)(c.Fragment, { children: r(t) });
   }
   function f(e) {
    let { date: t, formattedDate: r } = e;
    return (0, c.jsx)("time", { dateTime: t, itemProp: "datePublished", children: r });
   }
   function b() {
    return (0, c.jsx)(c.Fragment, { children: " \xb7 " });
   }
   function v(e) {
    let { className: t } = e;
    const { metadata: r } = (0, a.C)(),
     { date: s, formattedDate: l, readingTime: o } = r;
    return (0, c.jsxs)("div", { className: (0, n.Z)(x.container, "margin-vert--md", t), children: [(0, c.jsx)(f, { date: s, formattedDate: l }), void 0 !== o && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(b, {}), (0, c.jsx)(j, { readingTime: o })] })] });
   }
   function P(e) {
    return e.href ? (0, c.jsx)(m.Z, { ...e }) : (0, c.jsx)(c.Fragment, { children: e.children });
   }
   function Z(e) {
    let { author: t, className: r } = e;
    const { name: s, title: l, url: a, imageURL: o, email: i } = t,
     d = a || (i && `mailto:${i}`) || void 0;
    return (0, c.jsxs)("div", { className: (0, n.Z)("avatar margin-bottom--sm", r), children: [o && (0, c.jsx)(P, { href: d, className: "avatar__photo-link", children: (0, c.jsx)("img", { className: "avatar__photo", src: o, alt: s, itemProp: "image" }) }), s && (0, c.jsxs)("div", { className: "avatar__intro", itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", children: [(0, c.jsx)("div", { className: "avatar__name", children: (0, c.jsx)(P, { href: d, itemProp: "url", children: (0, c.jsx)("span", { itemProp: "name", children: s }) }) }), l && (0, c.jsx)("small", { className: "avatar__subtitle", itemProp: "description", children: l })] })] });
   }
   const _ = { authorCol: "authorCol_ef2M", imageOnlyAuthorRow: "imageOnlyAuthorRow_lzuZ", imageOnlyAuthorCol: "imageOnlyAuthorCol_zoZr" };
   function y(e) {
    let { className: t } = e;
    const {
     metadata: { authors: r },
     assets: s,
    } = (0, a.C)();
    if (0 === r.length) return null;
    const l = r.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, c.jsx)("div", { className: (0, n.Z)("margin-top--md margin-bottom--sm", l ? _.imageOnlyAuthorRow : "row", t), children: r.map((e, t) => (0, c.jsx)("div", { className: (0, n.Z)(!l && "col col--6", l ? _.imageOnlyAuthorCol : _.authorCol), children: (0, c.jsx)(Z, { author: { ...e, imageURL: s.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function N() {
    return (0, c.jsxs)("header", { children: [(0, c.jsx)(h, {}), (0, c.jsx)(v, {}), (0, c.jsx)(y, {})] });
   }
   var w = r(56771),
    C = r(21581);
   function T(e) {
    let { children: t, className: r } = e;
    const { isBlogPostPage: s } = (0, a.C)();
    return (0, c.jsx)("div", { id: s ? w.blogPostContainerID : void 0, className: (0, n.Z)("markdown", r), itemProp: "articleBody", children: (0, c.jsx)(C.Z, { children: t }) });
   }
   var k = r(48876),
    F = r(76135);
   function B() {
    return (0, c.jsx)("b", { children: (0, c.jsx)(g.Z, { id: "theme.blog.post.readMore", description: "The label used in blog post item excerpts to link to full blog posts", children: "Read More" }) });
   }
   function I(e) {
    const { blogPostTitle: t, ...r } = e;
    return (0, c.jsx)(m.Z, { "aria-label": (0, g.I)({ message: "Read more about {title}", id: "theme.blog.post.readMoreLabel", description: "The ARIA label for the link to full blog posts from excerpts" }, { title: t }), ...r, children: (0, c.jsx)(B, {}) });
   }
   const M = { blogPostFooterDetailsFull: "blogPostFooterDetailsFull_Atmh" };
   function A() {
    const { metadata: e, isBlogPostPage: t } = (0, a.C)(),
     { tags: r, title: s, editUrl: l, hasTruncateMarker: o } = e,
     i = !t && o,
     d = r.length > 0;
    return d || i || l ? (0, c.jsxs)("footer", { className: (0, n.Z)("row docusaurus-mt-lg", t && M.blogPostFooterDetailsFull), children: [d && (0, c.jsx)("div", { className: (0, n.Z)("col", { "col--9": i }), children: (0, c.jsx)(F.Z, { tags: r }) }), t && l && (0, c.jsx)("div", { className: "col margin-top--sm", children: (0, c.jsx)(k.Z, { editUrl: l }) }), i && (0, c.jsx)("div", { className: (0, n.Z)("col text--right", { "col--3": d }), children: (0, c.jsx)(I, { blogPostTitle: s, to: e.permalink }) })] }) : null;
   }
   function R(e) {
    let { children: t, className: r } = e;
    const s = (function () {
     const { isBlogPostPage: e } = (0, a.C)();
     return e ? void 0 : "margin-bottom--xl";
    })();
    return (0, c.jsxs)(d, { className: (0, n.Z)(s, r), children: [(0, c.jsx)(N, {}), (0, c.jsx)(T, { children: t }), (0, c.jsx)(A, {})] });
   }
   var L = r(24550);
   function O(e) {
    const { nextItem: t, prevItem: r } = e;
    return (0, c.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, g.I)({ id: "theme.blog.post.paginator.navAriaLabel", message: "Blog post page navigation", description: "The ARIA label for the blog posts pagination" }), children: [r && (0, c.jsx)(L.Z, { ...r, subLabel: (0, c.jsx)(g.Z, { id: "theme.blog.post.paginator.newerPost", description: "The blog post button label to navigate to the newer/previous post", children: "Newer Post" }) }), t && (0, c.jsx)(L.Z, { ...t, subLabel: (0, c.jsx)(g.Z, { id: "theme.blog.post.paginator.olderPost", description: "The blog post button label to navigate to the older/next post", children: "Older Post" }), isNext: !0 })] });
   }
   function E() {
    const { assets: e, metadata: t } = (0, a.C)(),
     { title: r, description: n, date: l, tags: o, authors: i, frontMatter: d } = t,
     { keywords: m } = d,
     u = e.image ?? d.image;
    return (0, c.jsxs)(s.d, {
     title: r,
     description: n,
     keywords: m,
     image: u,
     children: [
      (0, c.jsx)("meta", { property: "og:type", content: "article" }),
      (0, c.jsx)("meta", { property: "article:published_time", content: l }),
      i.some((e) => e.url) &&
       (0, c.jsx)("meta", {
        property: "article:author",
        content: i
         .map((e) => e.url)
         .filter(Boolean)
         .join(","),
       }),
      o.length > 0 && (0, c.jsx)("meta", { property: "article:tag", content: o.map((e) => e.label).join(",") }),
     ],
    });
   }
   var U = r(1253);
   function $(e) {
    let { sidebar: t, children: r } = e;
    const { metadata: n, toc: s } = (0, a.C)(),
     { nextItem: l, prevItem: i, frontMatter: d } = n,
     { hide_table_of_contents: m, toc_min_heading_level: u, toc_max_heading_level: h } = d;
    return (0, c.jsxs)(o.Z, { breadcrumbs: [{ label: "Blog", href: "/blog" }, { label: n.title }], sidebar: t, toc: !m && s.length > 0 ? (0, c.jsx)(U.Z, { toc: s, minHeadingLevel: u, maxHeadingLevel: h }) : void 0, children: [(0, c.jsx)(R, { children: r }), (l || i) && (0, c.jsx)(O, { nextItem: l, prevItem: i })] });
   }
   function D(e) {
    const t = e.content;
    return (0, c.jsx)(a.n, { content: e.content, isBlogPostPage: !0, children: (0, c.jsxs)(s.FG, { className: (0, n.Z)(l.k.wrapper.blogPages, l.k.page.blogPostPage), children: [(0, c.jsx)(E, {}), (0, c.jsx)($, { sidebar: e.sidebar, children: (0, c.jsx)(t, {}) })] }) });
   }
  },
  21581: (e, t, r) => {
   r.d(t, { Z: () => p });
   var n = r(50959),
    s = r(47214),
    l = r(46789),
    a = r(11527);
   function o(e) {
    const t = n.Children.map(e.children, (e) =>
     n.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { mdxType: t, originalType: r, ...s } = e.props;
          return n.createElement(e.props.originalType, s);
         }
         return e;
        })(e)
      : e
    );
    return (0, a.jsx)(l.Z, { ...e, children: t });
   }
   var i = r(28099);
   function c(e) {
    return (0, a.jsx)(i.Z, { ...((0, n.isValidElement)(e.children) && "code" === e.children.props?.originalType ? e.children.props : { ...e }) });
   }
   var d = r(5221);
   function m(e) {
    const t = n.Children.toArray(e.children),
     r = t.find((e) => n.isValidElement(e) && "summary" === e.props?.mdxType),
     s = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== r) });
    return (0, a.jsx)(d.Z, { ...e, summary: r, children: s });
   }
   var u = r(66280),
    h = r(35290),
    g = r(16532);
   function p(e) {
    let { children: t } = e;
    return (0, a.jsx)(s.Z, { components: { head: o, code: g.EK, a: g.rU, em: g.j$, pre: c, details: m, ul: g.QI, li: g.AS, img: g.Ee, h1: g.nL, h2: g.XJ, h3: g.aC, h4: g.k8, h5: g.by, h6: g.Cd, admonition: u.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
