"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  68817: (e, t, r) => {
   r.d(t, { C: () => i, n: () => o });
   var n = r(50959),
    s = r(63277),
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
  51567: (e, t, r) => {
   r.d(t, { c: () => c });
   var n = r(50959),
    s = r(88413);
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
   var n = r(49576),
    s = r(28903),
    l = r(1800),
    a = r(38456),
    o = r(16532),
    i = r(5341),
    c = r(50959);
   const m = "breadcrumbs__73z",
    d = "breadcrumbs--mobile_QwgF",
    u = "breadcrumbs--desktop_v9Xv";
   var h = r(11527);
   const g = (e) => {
    let { breadcrumbs: t, ...r } = e;
    const g = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, s.TH)(),
     x = [...g].reverse().find((e) => e.href !== p);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, i.Z)(m, u),
       children: (0, h.jsx)(o.Qu, {
        ...r,
        children: g.map((e, t, r) => {
         let { label: n, href: s, rel: l } = e,
          { length: a } = r;
         return (0, h.jsxs)(c.Fragment, { children: [(0, h.jsx)(o.yY, { href: s, current: t === a - 1, disabled: t === a - 1, rel: (0, i.Z)(l, { up: t === a - 2 }), children: n }), t < a - 1 && (0, h.jsx)(o.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      x && (0, h.jsx)("div", { className: (0, i.Z)(m, d), children: (0, h.jsx)(o.hE, { children: (0, h.jsxs)(n.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(o.JO, { children: (0, h.jsx)(a.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, t, r) => {
   r.d(t, { Z: () => o });
   var n = r(46820),
    s = r(30914),
    l = r(5341),
    a = (r(50959), r(11527));
   function o(e) {
    const { sidebar: t, toc: r, breadcrumbs: o = [], children: i, ...c } = e,
     m = t && t.items.length > 0;
    return (0, a.jsx)(s.Z, { ...c, children: (0, a.jsx)("div", { className: "container margin-vert--md", children: (0, a.jsxs)("div", { className: "row", children: [(0, a.jsx)("div", { className: "col col--9 col--offset-1", children: (0, a.jsx)(n.Q, { breadcrumbs: o }) }), (0, a.jsx)("main", { className: (0, l.Z)("utrecht-document", "utrecht-html", "col", { "col--7": m, "col--9 col--offset-1": !m }), itemScope: !0, itemType: "http://schema.org/Blog", children: i }), r && (0, a.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  4864: (e, t, r) => {
   r.r(t), r.d(t, { default: () => D });
   var n = r(59671),
    s = r(75881),
    l = r(68817),
    a = (r(50959), r(5341)),
    o = r(1800),
    i = r(11527);
   function c(e) {
    let { children: t, className: r } = e;
    const {
      frontMatter: n,
      assets: s,
      metadata: { description: a },
     } = (0, l.C)(),
     { withBaseUrl: c } = (0, o.C)(),
     m = s.image ?? n.image,
     d = n.keywords ?? [];
    return (0, i.jsxs)("article", { className: r, itemProp: "blogPost", itemScope: !0, itemType: "https://schema.org/BlogPosting", children: [a && (0, i.jsx)("meta", { itemProp: "description", content: a }), m && (0, i.jsx)("link", { itemProp: "image", href: c(m, { absolute: !0 }) }), d.length > 0 && (0, i.jsx)("meta", { itemProp: "keywords", content: d.join(",") }), t] });
   }
   var m = r(49576);
   const d = { title: "title_vy4V" };
   function u(e) {
    let { className: t } = e;
    const { metadata: r, isBlogPostPage: n } = (0, l.C)(),
     { permalink: s, title: o } = r,
     c = n ? "h1" : "h2";
    return (0, i.jsx)(c, { className: (0, a.Z)(d.title, t), itemProp: "headline", children: n ? o : (0, i.jsx)(m.Z, { itemProp: "url", to: s, children: o }) });
   }
   var h = r(93684),
    g = r(51567);
   const p = { container: "container_lSCs" };
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
     { date: n, formattedDate: s, readingTime: o } = r;
    return (0, i.jsxs)("div", { className: (0, a.Z)(p.container, "margin-vert--md", t), children: [(0, i.jsx)(j, { date: n, formattedDate: s }), void 0 !== o && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(f, {}), (0, i.jsx)(x, { readingTime: o })] })] });
   }
   function v(e) {
    return e.href ? (0, i.jsx)(m.Z, { ...e }) : (0, i.jsx)(i.Fragment, { children: e.children });
   }
   function P(e) {
    let { author: t, className: r } = e;
    const { name: n, title: s, url: l, imageURL: o, email: c } = t,
     m = l || (c && `mailto:${c}`) || void 0;
    return (0, i.jsxs)("div", { className: (0, a.Z)("avatar margin-bottom--sm", r), children: [o && (0, i.jsx)(v, { href: m, className: "avatar__photo-link", children: (0, i.jsx)("img", { className: "avatar__photo", src: o, alt: n, itemProp: "image" }) }), n && (0, i.jsxs)("div", { className: "avatar__intro", itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", children: [(0, i.jsx)("div", { className: "avatar__name", children: (0, i.jsx)(v, { href: m, itemProp: "url", children: (0, i.jsx)("span", { itemProp: "name", children: n }) }) }), s && (0, i.jsx)("small", { className: "avatar__subtitle", itemProp: "description", children: s })] })] });
   }
   const Z = { authorCol: "authorCol_x_w6", imageOnlyAuthorRow: "imageOnlyAuthorRow_jHmn", imageOnlyAuthorCol: "imageOnlyAuthorCol_pMgg" };
   function _(e) {
    let { className: t } = e;
    const {
     metadata: { authors: r },
     assets: n,
    } = (0, l.C)();
    if (0 === r.length) return null;
    const s = r.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, i.jsx)("div", { className: (0, a.Z)("margin-top--md margin-bottom--sm", s ? Z.imageOnlyAuthorRow : "row", t), children: r.map((e, t) => (0, i.jsx)("div", { className: (0, a.Z)(!s && "col col--6", s ? Z.imageOnlyAuthorCol : Z.authorCol), children: (0, i.jsx)(P, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function y() {
    return (0, i.jsxs)("header", { children: [(0, i.jsx)(u, {}), (0, i.jsx)(b, {}), (0, i.jsx)(_, {})] });
   }
   var N = r(56771),
    w = r(21581);
   function C(e) {
    let { children: t, className: r } = e;
    const { isBlogPostPage: n } = (0, l.C)();
    return (0, i.jsx)("div", { id: n ? N.blogPostContainerID : void 0, className: (0, a.Z)("markdown", r), itemProp: "articleBody", children: (0, i.jsx)(w.Z, { children: t }) });
   }
   var T = r(126),
    k = r(63961);
   function F() {
    return (0, i.jsx)("b", { children: (0, i.jsx)(h.Z, { id: "theme.blog.post.readMore", description: "The label used in blog post item excerpts to link to full blog posts", children: "Read More" }) });
   }
   function B(e) {
    const { blogPostTitle: t, ...r } = e;
    return (0, i.jsx)(m.Z, { "aria-label": (0, h.I)({ message: "Read more about {title}", id: "theme.blog.post.readMoreLabel", description: "The ARIA label for the link to full blog posts from excerpts" }, { title: t }), ...r, children: (0, i.jsx)(F, {}) });
   }
   const I = { blogPostFooterDetailsFull: "blogPostFooterDetailsFull_mfRj" };
   function M() {
    const { metadata: e, isBlogPostPage: t } = (0, l.C)(),
     { tags: r, title: n, editUrl: s, hasTruncateMarker: o } = e,
     c = !t && o,
     m = r.length > 0;
    return m || c || s ? (0, i.jsxs)("footer", { className: (0, a.Z)("row docusaurus-mt-lg", t && I.blogPostFooterDetailsFull), children: [m && (0, i.jsx)("div", { className: (0, a.Z)("col", { "col--9": c }), children: (0, i.jsx)(k.Z, { tags: r }) }), t && s && (0, i.jsx)("div", { className: "col margin-top--sm", children: (0, i.jsx)(T.Z, { editUrl: s }) }), c && (0, i.jsx)("div", { className: (0, a.Z)("col text--right", { "col--3": m }), children: (0, i.jsx)(B, { blogPostTitle: n, to: e.permalink }) })] }) : null;
   }
   function A(e) {
    let { children: t, className: r } = e;
    const n = (function () {
     const { isBlogPostPage: e } = (0, l.C)();
     return e ? void 0 : "margin-bottom--xl";
    })();
    return (0, i.jsxs)(c, { className: (0, a.Z)(n, r), children: [(0, i.jsx)(y, {}), (0, i.jsx)(C, { children: t }), (0, i.jsx)(M, {})] });
   }
   function R() {
    const { assets: e, metadata: t } = (0, l.C)(),
     { title: r, description: s, date: a, tags: o, authors: c, frontMatter: m } = t,
     { keywords: d } = m,
     u = e.image ?? m.image;
    return (0, i.jsxs)(n.d, {
     title: r,
     description: s,
     keywords: d,
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
   var L = r(84119);
   function O(e) {
    const { nextItem: t, prevItem: r } = e;
    return (0, i.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, h.I)({ id: "theme.blog.post.paginator.navAriaLabel", message: "Blog post page navigation", description: "The ARIA label for the blog posts pagination" }), children: [r && (0, i.jsx)(L.Z, { ...r, subLabel: (0, i.jsx)(h.Z, { id: "theme.blog.post.paginator.newerPost", description: "The blog post button label to navigate to the newer/previous post", children: "Newer Post" }) }), t && (0, i.jsx)(L.Z, { ...t, subLabel: (0, i.jsx)(h.Z, { id: "theme.blog.post.paginator.olderPost", description: "The blog post button label to navigate to the older/next post", children: "Older Post" }), isNext: !0 })] });
   }
   var E = r(21845),
    U = r(29450);
   function $(e) {
    let { sidebar: t, children: r } = e;
    const { metadata: n, toc: s } = (0, l.C)(),
     { nextItem: a, prevItem: o, frontMatter: c } = n,
     { hide_table_of_contents: m, toc_min_heading_level: d, toc_max_heading_level: u } = c;
    return (0, i.jsxs)(U.Z, { breadcrumbs: [{ label: "Blog", href: "/blog" }, { label: n.title }], sidebar: t, toc: !m && s.length > 0 ? (0, i.jsx)(E.Z, { toc: s, minHeadingLevel: d, maxHeadingLevel: u }) : void 0, children: [(0, i.jsx)(A, { children: r }), (a || o) && (0, i.jsx)(O, { nextItem: a, prevItem: o })] });
   }
   function D(e) {
    const t = e.content;
    return (0, i.jsx)(l.n, { content: e.content, isBlogPostPage: !0, children: (0, i.jsxs)(n.FG, { className: (0, a.Z)(s.k.wrapper.blogPages, s.k.page.blogPostPage), children: [(0, i.jsx)(R, {}), (0, i.jsx)($, { sidebar: e.sidebar, children: (0, i.jsx)(t, {}) })] }) });
   }
  },
  21581: (e, t, r) => {
   r.d(t, { Z: () => p });
   var n = r(47214),
    s = r(68813),
    l = r(30335),
    a = r(50959),
    o = r(11527);
   function i(e) {
    const t = a.Children.toArray(e.children),
     r = t.find((e) => a.isValidElement(e) && "summary" === e.props?.mdxType),
     n = (0, o.jsx)(o.Fragment, { children: t.filter((e) => e !== r) });
    return (0, o.jsx)(l.Z, { ...e, summary: r, children: n });
   }
   var c = r(51693);
   function m(e) {
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
   var d = r(39969);
   function u(e) {
    return (0, o.jsx)(d.Z, { ...((0, a.isValidElement)(e.children) && "code" === e.children.props?.originalType ? e.children.props : { ...e }) });
   }
   var h = r(86447),
    g = r(16532);
   function p(e) {
    let { children: t } = e;
    return (0, o.jsx)(n.Z, { components: { head: m, code: g.EK, a: g.rU, em: g.j$, pre: u, details: i, ul: g.QI, li: g.AS, img: g.Ee, h1: g.nL, h2: g.XJ, h3: g.aC, h4: g.k8, h5: g.by, h6: g.Cd, admonition: s.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
