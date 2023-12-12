"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  9460: (e, t, r) => {
   r.d(t, { C: () => i, n: () => o });
   var n = r(67294),
    s = r(902),
    l = r(85893);
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
  88824: (e, t, r) => {
   r.d(t, { c: () => c });
   var n = r(67294),
    s = r(52263);
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
  26595: (e, t, r) => {
   r.d(t, { Q: () => g });
   var n = r(67294),
    s = r(44996);
   const l = "breadcrumbs__73z",
    a = "breadcrumbs--mobile_QwgF",
    o = "breadcrumbs--desktop_v9Xv";
   var i = r(86010),
    c = r(21209),
    m = r(65663),
    d = r(16550),
    u = r(39960),
    h = r(85893);
   const g = (e) => {
    let { breadcrumbs: t, ...r } = e;
    const g = [{ href: (0, s.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, d.TH)(),
     x = [...g].reverse().find((e) => e.href !== p);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, i.Z)(l, o),
       children: (0, h.jsx)(m.Qu, {
        ...r,
        children: g.map((e, t, r) => {
         let { label: s, href: l, rel: a } = e,
          { length: o } = r;
         return (0, h.jsxs)(n.Fragment, { children: [(0, h.jsx)(m.yY, { href: l, current: t === o - 1, disabled: t === o - 1, rel: (0, i.Z)(a, { up: t === o - 2 }), children: s }), t < o - 1 && (0, h.jsx)(m.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      x && (0, h.jsx)("div", { className: (0, i.Z)(l, a), children: (0, h.jsx)(m.hE, { children: (0, h.jsxs)(u.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(m.JO, { children: (0, h.jsx)(c.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  31627: (e, t, r) => {
   r.d(t, { Z: () => o });
   r(67294);
   var n = r(86010),
    s = r(23770),
    l = r(26595),
    a = r(85893);
   function o(e) {
    const { sidebar: t, toc: r, breadcrumbs: o = [], children: i, ...c } = e,
     m = t && t.items.length > 0;
    return (0, a.jsx)(s.Z, { ...c, children: (0, a.jsx)("div", { className: "container margin-vert--md", children: (0, a.jsxs)("div", { className: "row", children: [(0, a.jsx)("div", { className: "col col--9 col--offset-1", children: (0, a.jsx)(l.Q, { breadcrumbs: o }) }), (0, a.jsx)("main", { className: (0, n.Z)("utrecht-document", "utrecht-html", "col", { "col--7": m, "col--9 col--offset-1": !m }), itemScope: !0, itemType: "http://schema.org/Blog", children: i }), r && (0, a.jsx)("div", { className: "col col--2", children: r })] }) }) });
   }
  },
  86252: (e, t, r) => {
   r.r(t), r.d(t, { default: () => H });
   r(67294);
   var n = r(86010),
    s = r(10833),
    l = r(35281),
    a = r(9460),
    o = r(31627),
    i = r(36905),
    c = r(44996),
    m = r(85893);
   function d(e) {
    let { children: t, className: r } = e;
    const {
      frontMatter: n,
      assets: s,
      metadata: { description: l },
     } = (0, a.C)(),
     { withBaseUrl: o } = (0, c.C)(),
     i = s.image ?? n.image,
     d = n.keywords ?? [];
    return (0, m.jsxs)("article", { className: r, itemProp: "blogPost", itemScope: !0, itemType: "https://schema.org/BlogPosting", children: [l && (0, m.jsx)("meta", { itemProp: "description", content: l }), i && (0, m.jsx)("link", { itemProp: "image", href: o(i, { absolute: !0 }) }), d.length > 0 && (0, m.jsx)("meta", { itemProp: "keywords", content: d.join(",") }), t] });
   }
   var u = r(39960);
   const h = { title: "title_f1Hy" };
   function g(e) {
    let { className: t } = e;
    const { metadata: r, isBlogPostPage: n } = (0, a.C)(),
     { permalink: s, title: l } = r,
     o = n ? "h1" : "h2";
    return (0, m.jsx)(o, { className: (0, i.Z)(h.title, t), itemProp: "headline", children: n ? l : (0, m.jsx)(u.Z, { itemProp: "url", to: s, children: l }) });
   }
   var p = r(95999),
    x = r(88824);
   const j = { container: "container_mt6G" };
   function f(e) {
    let { readingTime: t } = e;
    const r = (function () {
     const { selectMessage: e } = (0, x.c)();
     return (t) => {
      const r = Math.ceil(t);
      return e(r, (0, p.I)({ id: "theme.blog.post.readingTime.plurals", description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One min read|{readingTime} min read" }, { readingTime: r }));
     };
    })();
    return (0, m.jsx)(m.Fragment, { children: r(t) });
   }
   function b(e) {
    let { date: t, formattedDate: r } = e;
    return (0, m.jsx)("time", { dateTime: t, itemProp: "datePublished", children: r });
   }
   function v() {
    return (0, m.jsx)(m.Fragment, { children: " \xb7 " });
   }
   function P(e) {
    let { className: t } = e;
    const { metadata: r } = (0, a.C)(),
     { date: n, formattedDate: s, readingTime: l } = r;
    return (0, m.jsxs)("div", { className: (0, i.Z)(j.container, "margin-vert--md", t), children: [(0, m.jsx)(b, { date: n, formattedDate: s }), void 0 !== l && (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(v, {}), (0, m.jsx)(f, { readingTime: l })] })] });
   }
   function Z(e) {
    return e.href ? (0, m.jsx)(u.Z, { ...e }) : (0, m.jsx)(m.Fragment, { children: e.children });
   }
   function _(e) {
    let { author: t, className: r } = e;
    const { name: n, title: s, url: l, imageURL: a, email: o } = t,
     c = l || (o && `mailto:${o}`) || void 0;
    return (0, m.jsxs)("div", { className: (0, i.Z)("avatar margin-bottom--sm", r), children: [a && (0, m.jsx)(Z, { href: c, className: "avatar__photo-link", children: (0, m.jsx)("img", { className: "avatar__photo", src: a, alt: n, itemProp: "image" }) }), n && (0, m.jsxs)("div", { className: "avatar__intro", itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", children: [(0, m.jsx)("div", { className: "avatar__name", children: (0, m.jsx)(Z, { href: c, itemProp: "url", children: (0, m.jsx)("span", { itemProp: "name", children: n }) }) }), s && (0, m.jsx)("small", { className: "avatar__subtitle", itemProp: "description", children: s })] })] });
   }
   const y = { authorCol: "authorCol_Hf19", imageOnlyAuthorRow: "imageOnlyAuthorRow_pa_O", imageOnlyAuthorCol: "imageOnlyAuthorCol_G86a" };
   function N(e) {
    let { className: t } = e;
    const {
     metadata: { authors: r },
     assets: n,
    } = (0, a.C)();
    if (0 === r.length) return null;
    const s = r.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return (0, m.jsx)("div", { className: (0, i.Z)("margin-top--md margin-bottom--sm", s ? y.imageOnlyAuthorRow : "row", t), children: r.map((e, t) => (0, m.jsx)("div", { className: (0, i.Z)(!s && "col col--6", s ? y.imageOnlyAuthorCol : y.authorCol), children: (0, m.jsx)(_, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function w() {
    return (0, m.jsxs)("header", { children: [(0, m.jsx)(g, {}), (0, m.jsx)(P, {}), (0, m.jsx)(N, {})] });
   }
   var C = r(18780),
    T = r(88059);
   function k(e) {
    let { children: t, className: r } = e;
    const { isBlogPostPage: n } = (0, a.C)();
    return (0, m.jsx)("div", { id: n ? C.blogPostContainerID : void 0, className: (0, i.Z)("markdown", r), itemProp: "articleBody", children: (0, m.jsx)(T.Z, { children: t }) });
   }
   var F = r(84881),
    B = r(71526);
   function I() {
    return (0, m.jsx)("b", { children: (0, m.jsx)(p.Z, { id: "theme.blog.post.readMore", description: "The label used in blog post item excerpts to link to full blog posts", children: "Read More" }) });
   }
   function M(e) {
    const { blogPostTitle: t, ...r } = e;
    return (0, m.jsx)(u.Z, { "aria-label": (0, p.I)({ message: "Read more about {title}", id: "theme.blog.post.readMoreLabel", description: "The ARIA label for the link to full blog posts from excerpts" }, { title: t }), ...r, children: (0, m.jsx)(I, {}) });
   }
   const A = { blogPostFooterDetailsFull: "blogPostFooterDetailsFull_mRVl" };
   function R() {
    const { metadata: e, isBlogPostPage: t } = (0, a.C)(),
     { tags: r, title: n, editUrl: s, hasTruncateMarker: l } = e,
     o = !t && l,
     c = r.length > 0;
    return c || o || s ? (0, m.jsxs)("footer", { className: (0, i.Z)("row docusaurus-mt-lg", t && A.blogPostFooterDetailsFull), children: [c && (0, m.jsx)("div", { className: (0, i.Z)("col", { "col--9": o }), children: (0, m.jsx)(B.Z, { tags: r }) }), t && s && (0, m.jsx)("div", { className: "col margin-top--sm", children: (0, m.jsx)(F.Z, { editUrl: s }) }), o && (0, m.jsx)("div", { className: (0, i.Z)("col text--right", { "col--3": c }), children: (0, m.jsx)(M, { blogPostTitle: n, to: e.permalink }) })] }) : null;
   }
   function O(e) {
    let { children: t, className: r } = e;
    const n = (function () {
     const { isBlogPostPage: e } = (0, a.C)();
     return e ? void 0 : "margin-bottom--xl";
    })();
    return (0, m.jsxs)(d, { className: (0, i.Z)(n, r), children: [(0, m.jsx)(w, {}), (0, m.jsx)(k, { children: t }), (0, m.jsx)(R, {})] });
   }
   var L = r(32244);
   function E(e) {
    const { nextItem: t, prevItem: r } = e;
    return (0, m.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, p.I)({ id: "theme.blog.post.paginator.navAriaLabel", message: "Blog post page navigation", description: "The ARIA label for the blog posts pagination" }), children: [r && (0, m.jsx)(L.Z, { ...r, subLabel: (0, m.jsx)(p.Z, { id: "theme.blog.post.paginator.newerPost", description: "The blog post button label to navigate to the newer/previous post", children: "Newer Post" }) }), t && (0, m.jsx)(L.Z, { ...t, subLabel: (0, m.jsx)(p.Z, { id: "theme.blog.post.paginator.olderPost", description: "The blog post button label to navigate to the older/next post", children: "Older Post" }), isNext: !0 })] });
   }
   function U() {
    const { assets: e, metadata: t } = (0, a.C)(),
     { title: r, description: n, date: l, tags: o, authors: i, frontMatter: c } = t,
     { keywords: d } = c,
     u = e.image ?? c.image;
    return (0, m.jsxs)(s.d, {
     title: r,
     description: n,
     keywords: d,
     image: u,
     children: [
      (0, m.jsx)("meta", { property: "og:type", content: "article" }),
      (0, m.jsx)("meta", { property: "article:published_time", content: l }),
      i.some((e) => e.url) &&
       (0, m.jsx)("meta", {
        property: "article:author",
        content: i
         .map((e) => e.url)
         .filter(Boolean)
         .join(","),
       }),
      o.length > 0 && (0, m.jsx)("meta", { property: "article:tag", content: o.map((e) => e.label).join(",") }),
     ],
    });
   }
   var $ = r(39407);
   function D(e) {
    let { sidebar: t, children: r } = e;
    const { metadata: n, toc: s } = (0, a.C)(),
     { nextItem: l, prevItem: i, frontMatter: c } = n,
     { hide_table_of_contents: d, toc_min_heading_level: u, toc_max_heading_level: h } = c;
    return (0, m.jsxs)(o.Z, { breadcrumbs: [{ label: "Blog", href: "/blog" }, { label: n.title }], sidebar: t, toc: !d && s.length > 0 ? (0, m.jsx)($.Z, { toc: s, minHeadingLevel: u, maxHeadingLevel: h }) : void 0, children: [(0, m.jsx)(O, { children: r }), (l || i) && (0, m.jsx)(E, { nextItem: l, prevItem: i })] });
   }
   function H(e) {
    const t = e.content;
    return (0, m.jsx)(a.n, { content: e.content, isBlogPostPage: !0, children: (0, m.jsxs)(s.FG, { className: (0, n.Z)(l.k.wrapper.blogPages, l.k.page.blogPostPage), children: [(0, m.jsx)(U, {}), (0, m.jsx)(D, { sidebar: e.sidebar, children: (0, m.jsx)(t, {}) })] }) });
   }
  },
  88059: (e, t, r) => {
   r.d(t, { Z: () => p });
   var n = r(67294),
    s = r(11151),
    l = r(35742),
    a = r(85893);
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
   var i = r(9286);
   function c(e) {
    return (0, a.jsx)(i.Z, { ...((0, n.isValidElement)(e.children) && "code" === e.children.props?.originalType ? e.children.props : { ...e }) });
   }
   var m = r(34673);
   function d(e) {
    const t = n.Children.toArray(e.children),
     r = t.find((e) => n.isValidElement(e) && "summary" === e.props?.mdxType),
     s = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== r) });
    return (0, a.jsx)(m.Z, { ...e, summary: r, children: s });
   }
   var u = r(59047),
    h = r(11875),
    g = r(65663);
   function p(e) {
    let { children: t } = e;
    return (0, a.jsx)(s.Z, { components: { head: o, code: g.EK, a: g.rU, em: g.j$, pre: c, details: d, ul: g.QI, li: g.AS, img: g.Ee, h1: g.nL, h2: g.XJ, h3: g.aC, h4: g.k8, h5: g.by, h6: g.Cd, admonition: u.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
