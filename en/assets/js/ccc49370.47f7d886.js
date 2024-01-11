"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  46438: (e, t, r) => {
   r.d(t, { C: () => i, n: () => o });
   var s = r(50959),
    n = r(27362),
    l = r(11527);
   const a = s.createContext(null);
   function o(e) {
    let { children: t, content: r, isBlogPostPage: n = !1 } = e;
    const o = (function (e) {
     let { content: t, isBlogPostPage: r } = e;
     return (0, s.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: r }), [t, r]);
    })({ content: r, isBlogPostPage: n });
    return (0, l.jsx)(a.Provider, { value: o, children: t });
   }
   function i() {
    const e = (0, s.useContext)(a);
    if (null === e) throw new n.i6("BlogPostProvider");
    return e;
   }
  },
  17196: (e, t, r) => {
   r.d(t, { c: () => c });
   var s = r(50959),
    n = r(45090);
   const l = ["zero", "one", "two", "few", "many", "other"];
   function a(e) {
    return l.filter((t) => e.includes(t));
   }
   const o = { locale: "en", pluralForms: a(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function i() {
    const {
     i18n: { currentLocale: e },
    } = (0, n.Z)();
    return (0, s.useMemo)(() => {
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
       const s = e.split("|");
       if (1 === s.length) return s[0];
       s.length > r.pluralForms.length && console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);
       const n = r.select(t),
        l = r.pluralForms.indexOf(n);
       return s[Math.min(l, s.length - 1)];
      })(r, t, e),
    };
   }
  },
  46820: (e, t, r) => {
   r.d(t, { Q: () => g });
   var s = r(58812),
    n = r(28903),
    l = r(90772),
    a = r(71895),
    o = r(16532),
    i = r(86259),
    c = r(50959);
   const d = "breadcrumbs__73z",
    m = "breadcrumbs--mobile_QwgF",
    u = "breadcrumbs--desktop_v9Xv";
   var h = r(11527);
   const g = (e) => {
    let { breadcrumbs: t, ...r } = e;
    const g = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, n.TH)(),
     x = [...g].reverse().find((e) => e.href !== p);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, i.Z)(d, u),
       children: (0, h.jsx)(o.Qu, {
        ...r,
        children: g.map((e, t, r) => {
         let { label: s, href: n, rel: l } = e,
          { length: a } = r;
         return (0, h.jsxs)(c.Fragment, { children: [(0, h.jsx)(o.yY, { href: n, current: t === a - 1, disabled: t === a - 1, rel: (0, i.Z)(l, { up: t === a - 2 }), children: s }), t < a - 1 && (0, h.jsx)(o.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      x && (0, h.jsx)("div", { className: (0, i.Z)(d, m), children: (0, h.jsx)(o.hE, { children: (0, h.jsxs)(s.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(o.JO, { children: (0, h.jsx)(a.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, t, r) => {
   r.d(t, { Z: () => o });
   var s = r(46820),
    n = r(19923),
    l = r(86259),
    a = (r(50959), r(11527));
   function o(e) {
    const { sidebar: t, toc: r, breadcrumbs: o = [], children: i, ...c } = e,
     d = t && t.items.length > 0;
    return (0, a.jsx)(n.Z, { ...c, children: (0, a.jsx)("div", { className: "container margin-vert--md", children: (0, a.jsxs)("div", { className: "row", children: [(0, a.jsx)("div", { className: "col col--9 col--offset-1", children: (0, a.jsx)(s.Q, { breadcrumbs: o }) }), (0, a.jsx)("main", { className: (0, l.Z)("utrecht-document", "utrecht-html", "col", { "col--7": d, "col--9 col--offset-1": !d }), itemScope: !0, itemType: "http://schema.org/Blog", children: i }), r && (0, a.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  52314: (e, t, r) => {
   r.r(t), r.d(t, { default: () => D });
   var s = r(48270),
    n = r(76711),
    l = r(46438),
    a = (r(50959), r(86259)),
    o = r(90772),
    i = r(11527);
   function c(e) {
    let { children: t, className: r } = e;
    const {
      frontMatter: s,
      assets: n,
      metadata: { description: a },
     } = (0, l.C)(),
     { withBaseUrl: c } = (0, o.C)(),
     d = n.image ?? s.image,
     m = s.keywords ?? [];
    return (0, i.jsxs)("article", { className: r, itemProp: "blogPost", itemScope: !0, itemType: "https://schema.org/BlogPosting", children: [a && (0, i.jsx)("meta", { itemProp: "description", content: a }), d && (0, i.jsx)("link", { itemProp: "image", href: c(d, { absolute: !0 }) }), m.length > 0 && (0, i.jsx)("meta", { itemProp: "keywords", content: m.join(",") }), t] });
   }
   var d = r(58812);
   const m = { title: "title_FsJc" };
   function u(e) {
    let { className: t } = e;
    const { metadata: r, isBlogPostPage: s } = (0, l.C)(),
     { permalink: n, title: o } = r,
     c = s ? "h1" : "h2";
    return (0, i.jsx)(c, { className: (0, a.Z)(m.title, t), itemProp: "headline", children: s ? o : (0, i.jsx)(d.Z, { itemProp: "url", to: n, children: o }) });
   }
   var h = r(48714),
    g = r(17196);
   const p = { container: "container_NzsS" };
   function x(e) {
    let { readingTime: t } = e;
    const r = (function () {
     const { selectMessage: e } = (0, g.c)();
     return (t) => {
      const r = Math.ceil(t);
      return e(r, (0, h.I)({ id: "theme.blog.post.readingTime.plurals", description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One min read|{readingTime} min read" }, { readingTime: r }));
     };
    })();
    return (0, i.jsx)(i.Fragment, { children: r(t) });
   }
   function j(e) {
    let { date: t, formattedDate: r } = e;
    return (0, i.jsx)("time", { dateTime: t, itemProp: "datePublished", children: r });
   }
   function f() {
    return (0, i.jsx)(i.Fragment, { children: " \xb7 " });
   }
   function b(e) {
    let { className: t } = e;
    const { metadata: r } = (0, l.C)(),
     { date: s, formattedDate: n, readingTime: o } = r;
    return (0, i.jsxs)("div", { className: (0, a.Z)(p.container, "margin-vert--md", t), children: [(0, i.jsx)(j, { date: s, formattedDate: n }), void 0 !== o && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(f, {}), (0, i.jsx)(x, { readingTime: o })] })] });
   }
   function v(e) {
    return e.href ? (0, i.jsx)(d.Z, { ...e }) : (0, i.jsx)(i.Fragment, { children: e.children });
   }
   function P(e) {
    let { author: t, className: r } = e;
    const { name: s, title: n, url: l, imageURL: o, email: c } = t,
     d = l || (c && `mailto:${c}`) || void 0;
    return (0, i.jsxs)("div", { className: (0, a.Z)("avatar margin-bottom--sm", r), children: [o && (0, i.jsx)(v, { href: d, className: "avatar__photo-link", children: (0, i.jsx)("img", { className: "avatar__photo", src: o, alt: s, itemProp: "image" }) }), s && (0, i.jsxs)("div", { className: "avatar__intro", itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", children: [(0, i.jsx)("div", { className: "avatar__name", children: (0, i.jsx)(v, { href: d, itemProp: "url", children: (0, i.jsx)("span", { itemProp: "name", children: s }) }) }), n && (0, i.jsx)("small", { className: "avatar__subtitle", itemProp: "description", children: n })] })] });
   }
   const Z = { authorCol: "authorCol_HIZe", imageOnlyAuthorRow: "imageOnlyAuthorRow_k20w", imageOnlyAuthorCol: "imageOnlyAuthorCol_N9_f" };
   function _(e) {
    let { className: t } = e;
    const {
     metadata: { authors: r },
     assets: s,
    } = (0, l.C)();
    if (0 === r.length) return null;
    const n = r.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, i.jsx)("div", { className: (0, a.Z)("margin-top--md margin-bottom--sm", n ? Z.imageOnlyAuthorRow : "row", t), children: r.map((e, t) => (0, i.jsx)("div", { className: (0, a.Z)(!n && "col col--6", n ? Z.imageOnlyAuthorCol : Z.authorCol), children: (0, i.jsx)(P, { author: { ...e, imageURL: s.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function N() {
    return (0, i.jsxs)("header", { children: [(0, i.jsx)(u, {}), (0, i.jsx)(b, {}), (0, i.jsx)(_, {})] });
   }
   var y = r(63488),
    w = r(21581);
   function C(e) {
    let { children: t, className: r } = e;
    const { isBlogPostPage: s } = (0, l.C)();
    return (0, i.jsx)("div", { id: s ? y.blogPostContainerID : void 0, className: (0, a.Z)("markdown", r), itemProp: "articleBody", children: (0, i.jsx)(w.Z, { children: t }) });
   }
   var T = r(13624),
    k = r(3361);
   function F() {
    return (0, i.jsx)("b", { children: (0, i.jsx)(h.Z, { id: "theme.blog.post.readMore", description: "The label used in blog post item excerpts to link to full blog posts", children: "Read More" }) });
   }
   function B(e) {
    const { blogPostTitle: t, ...r } = e;
    return (0, i.jsx)(d.Z, { "aria-label": (0, h.I)({ message: "Read more about {title}", id: "theme.blog.post.readMoreLabel", description: "The ARIA label for the link to full blog posts from excerpts" }, { title: t }), ...r, children: (0, i.jsx)(F, {}) });
   }
   const I = { blogPostFooterDetailsFull: "blogPostFooterDetailsFull_rcgB" };
   function M() {
    const { metadata: e, isBlogPostPage: t } = (0, l.C)(),
     { tags: r, title: s, editUrl: n, hasTruncateMarker: o } = e,
     c = !t && o,
     d = r.length > 0;
    return d || c || n ? (0, i.jsxs)("footer", { className: (0, a.Z)("row docusaurus-mt-lg", t && I.blogPostFooterDetailsFull), children: [d && (0, i.jsx)("div", { className: (0, a.Z)("col", { "col--9": c }), children: (0, i.jsx)(k.Z, { tags: r }) }), t && n && (0, i.jsx)("div", { className: "col margin-top--sm", children: (0, i.jsx)(T.Z, { editUrl: n }) }), c && (0, i.jsx)("div", { className: (0, a.Z)("col text--right", { "col--3": d }), children: (0, i.jsx)(B, { blogPostTitle: s, to: e.permalink }) })] }) : null;
   }
   function A(e) {
    let { children: t, className: r } = e;
    const s = (function () {
     const { isBlogPostPage: e } = (0, l.C)();
     return e ? void 0 : "margin-bottom--xl";
    })();
    return (0, i.jsxs)(c, { className: (0, a.Z)(s, r), children: [(0, i.jsx)(N, {}), (0, i.jsx)(C, { children: t }), (0, i.jsx)(M, {})] });
   }
   function R() {
    const { assets: e, metadata: t } = (0, l.C)(),
     { title: r, description: n, date: a, tags: o, authors: c, frontMatter: d } = t,
     { keywords: m } = d,
     u = e.image ?? d.image;
    return (0, i.jsxs)(s.d, {
     title: r,
     description: n,
     keywords: m,
     image: u,
     children: [
      (0, i.jsx)("meta", { property: "og:type", content: "article" }),
      (0, i.jsx)("meta", { property: "article:published_time", content: a }),
      c.some((e) => e.url) &&
       (0, i.jsx)("meta", {
        property: "article:author",
        content: c
         .map((e) => e.url)
         .filter(Boolean)
         .join(","),
       }),
      o.length > 0 && (0, i.jsx)("meta", { property: "article:tag", content: o.map((e) => e.label).join(",") }),
     ],
    });
   }
   var L = r(91138);
   function O(e) {
    const { nextItem: t, prevItem: r } = e;
    return (0, i.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, h.I)({ id: "theme.blog.post.paginator.navAriaLabel", message: "Blog post page navigation", description: "The ARIA label for the blog posts pagination" }), children: [r && (0, i.jsx)(L.Z, { ...r, subLabel: (0, i.jsx)(h.Z, { id: "theme.blog.post.paginator.newerPost", description: "The blog post button label to navigate to the newer/previous post", children: "Newer Post" }) }), t && (0, i.jsx)(L.Z, { ...t, subLabel: (0, i.jsx)(h.Z, { id: "theme.blog.post.paginator.olderPost", description: "The blog post button label to navigate to the older/next post", children: "Older Post" }), isNext: !0 })] });
   }
   var E = r(89113),
    U = r(29450);
   function $(e) {
    let { sidebar: t, children: r } = e;
    const { metadata: s, toc: n } = (0, l.C)(),
     { nextItem: a, prevItem: o, frontMatter: c } = s,
     { hide_table_of_contents: d, toc_min_heading_level: m, toc_max_heading_level: u } = c;
    return (0, i.jsxs)(U.Z, { breadcrumbs: [{ label: "Blog", href: "/blog" }, { label: s.title }], sidebar: t, toc: !d && n.length > 0 ? (0, i.jsx)(E.Z, { toc: n, minHeadingLevel: m, maxHeadingLevel: u }) : void 0, children: [(0, i.jsx)(A, { children: r }), (a || o) && (0, i.jsx)(O, { nextItem: a, prevItem: o })] });
   }
   function D(e) {
    const t = e.content;
    return (0, i.jsx)(l.n, { content: e.content, isBlogPostPage: !0, children: (0, i.jsxs)(s.FG, { className: (0, a.Z)(n.k.wrapper.blogPages, n.k.page.blogPostPage), children: [(0, i.jsx)(R, {}), (0, i.jsx)($, { sidebar: e.sidebar, children: (0, i.jsx)(t, {}) })] }) });
   }
  },
  21581: (e, t, r) => {
   r.d(t, { Z: () => p });
   var s = r(47214),
    n = r(77818),
    l = r(44410),
    a = r(50959),
    o = r(11527);
   function i(e) {
    const t = a.Children.toArray(e.children),
     r = t.find((e) => a.isValidElement(e) && "summary" === e.props?.mdxType),
     s = (0, o.jsx)(o.Fragment, { children: t.filter((e) => e !== r) });
    return (0, o.jsx)(l.Z, { ...e, summary: r, children: s });
   }
   var c = r(81911);
   function d(e) {
    const t = a.Children.map(e.children, (e) =>
     a.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { ...t } = e.props;
          return a.createElement(e.props.originalType, t);
         }
         return e;
        })(e)
      : e
    );
    return (0, o.jsx)(c.Z, { ...e, children: t });
   }
   var m = r(50654);
   function u(e) {
    return (0, o.jsx)(m.Z, { ...((0, a.isValidElement)(e.children) && "code" === e.children.props?.originalType ? e.children.props : { ...e }) });
   }
   var h = r(86092),
    g = r(16532);
   function p(e) {
    let { children: t } = e;
    return (0, o.jsx)(s.Z, { components: { head: d, code: g.EK, a: g.rU, em: g.j$, pre: u, details: i, ul: g.QI, li: g.AS, img: g.Ee, h1: g.nL, h2: g.XJ, h3: g.aC, h4: g.k8, h5: g.by, h6: g.Cd, admonition: n.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
