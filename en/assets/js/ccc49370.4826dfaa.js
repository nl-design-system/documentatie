"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  9460: (e, t, a) => {
   a.d(t, { C: () => c, n: () => o });
   var l = a(67294),
    r = a(902);
   const n = l.createContext(null);
   function o(e) {
    let { children: t, content: a, isBlogPostPage: r = !1 } = e;
    const o = (function (e) {
     let { content: t, isBlogPostPage: a } = e;
     return (0, l.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: a }), [t, a]);
    })({ content: a, isBlogPostPage: r });
    return l.createElement(n.Provider, { value: o }, t);
   }
   function c() {
    const e = (0, l.useContext)(n);
    if (null === e) throw new r.i6("BlogPostProvider");
    return e;
   }
  },
  88824: (e, t, a) => {
   a.d(t, { c: () => m });
   var l = a(67294),
    r = a(52263);
   const n = ["zero", "one", "two", "few", "many", "other"];
   function o(e) {
    return n.filter((t) => e.includes(t));
   }
   const c = { locale: "en", pluralForms: o(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function s() {
    const {
     i18n: { currentLocale: e },
    } = (0, r.Z)();
    return (0, l.useMemo)(() => {
     try {
      return (function (e) {
       const t = new Intl.PluralRules(e);
       return { locale: e, pluralForms: o(t.resolvedOptions().pluralCategories), select: (e) => t.select(e) };
      })(e);
     } catch (t) {
      return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`), c;
     }
    }, [e]);
   }
   function m() {
    const e = s();
    return {
     selectMessage: (t, a) =>
      (function (e, t, a) {
       const l = e.split("|");
       if (1 === l.length) return l[0];
       l.length > a.pluralForms.length && console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);
       const r = a.select(t),
        n = a.pluralForms.indexOf(r);
       return l[Math.min(n, l.length - 1)];
      })(a, t, e),
    };
   }
  },
  26595: (e, t, a) => {
   a.d(t, { Q: () => g });
   var l = a(67294),
    r = a(44996);
   const n = "breadcrumbs__73z",
    o = "breadcrumbs--mobile_QwgF",
    c = "breadcrumbs--desktop_v9Xv";
   var s = a(86010),
    m = a(21209),
    i = a(65663),
    u = a(76775),
    d = a(39960);
   const g = (e) => {
    let { breadcrumbs: t, ...a } = e;
    const g = [{ href: (0, r.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, u.TH)(),
     h = [...g].reverse().find((e) => e.href !== p);
    return l.createElement(
     l.Fragment,
     null,
     l.createElement(
      "div",
      { className: (0, s.Z)(n, c) },
      l.createElement(
       i.Qu,
       a,
       g.map((e, t, a) => {
        let { label: r, href: n, rel: o } = e,
         { length: c } = a;
        return l.createElement(l.Fragment, { key: t }, l.createElement(i.yY, { href: n, current: t === c - 1, disabled: t === c - 1, rel: (0, s.Z)(o, { up: t === c - 2 }) }, r), t < c - 1 && l.createElement(i.sc, null, "/"));
       })
      )
     ),
     h && l.createElement("div", { className: (0, s.Z)(n, o) }, l.createElement(i.hE, null, l.createElement(d.Z, { href: h.href, rel: h.rel, className: "utrecht-link utrecht-link--html-a" }, l.createElement(i.JO, null, l.createElement(m.Z, null)), h.label)))
    );
   };
  },
  31627: (e, t, a) => {
   a.d(t, { Z: () => c });
   var l = a(67294),
    r = a(86010),
    n = a(23770),
    o = a(26595);
   function c(e) {
    const { sidebar: t, toc: a, breadcrumbs: c = [], children: s, ...m } = e,
     i = t && t.items.length > 0;
    return l.createElement(n.Z, m, l.createElement("div", { className: "container margin-vert--md" }, l.createElement("div", { className: "row" }, l.createElement("div", { className: "col col--9 col--offset-1" }, l.createElement(o.Q, { breadcrumbs: c })), l.createElement("main", { className: (0, r.Z)("col", { "col--7": i, "col--9 col--offset-1": !i }), itemScope: !0, itemType: "http://schema.org/Blog" }, s), a && l.createElement("div", { className: "col col--2" }, a))));
   }
  },
  86252: (e, t, a) => {
   a.r(t), a.d(t, { default: () => Q });
   var l = a(67294),
    r = a(86010),
    n = a(10833),
    o = a(35281),
    c = a(9460),
    s = a(31627),
    m = a(44996);
   function i(e) {
    let { children: t, className: a } = e;
    const { frontMatter: r, assets: n } = (0, c.C)(),
     { withBaseUrl: o } = (0, m.C)(),
     s = n.image ?? r.image;
    return l.createElement("article", { className: a, itemProp: "blogPost", itemScope: !0, itemType: "http://schema.org/BlogPosting" }, s && l.createElement("meta", { itemProp: "image", content: o(s, { absolute: !0 }) }), t);
   }
   var u = a(39960);
   const d = { title: "title_f1Hy" };
   function g(e) {
    let { className: t } = e;
    const { metadata: a, isBlogPostPage: n } = (0, c.C)(),
     { permalink: o, title: s } = a,
     m = n ? "h1" : "h2";
    return l.createElement(m, { className: (0, r.Z)(d.title, t), itemProp: "headline" }, n ? s : l.createElement(u.Z, { itemProp: "url", to: o }, s));
   }
   var p = a(95999),
    h = a(88824);
   const E = { container: "container_mt6G" };
   function f(e) {
    let { readingTime: t } = e;
    const a = (function () {
     const { selectMessage: e } = (0, h.c)();
     return (t) => {
      const a = Math.ceil(t);
      return e(a, (0, p.I)({ id: "theme.blog.post.readingTime.plurals", description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: "One min read|{readingTime} min read" }, { readingTime: a }));
     };
    })();
    return l.createElement(l.Fragment, null, a(t));
   }
   function b(e) {
    let { date: t, formattedDate: a } = e;
    return l.createElement("time", { dateTime: t, itemProp: "datePublished" }, a);
   }
   function v() {
    return l.createElement(l.Fragment, null, " \xb7 ");
   }
   function P(e) {
    let { className: t } = e;
    const { metadata: a } = (0, c.C)(),
     { date: n, formattedDate: o, readingTime: s } = a;
    return l.createElement("div", { className: (0, r.Z)(E.container, "margin-vert--md", t) }, l.createElement(b, { date: n, formattedDate: o }), void 0 !== s && l.createElement(l.Fragment, null, l.createElement(v, null), l.createElement(f, { readingTime: s })));
   }
   function Z(e) {
    return e.href ? l.createElement(u.Z, e) : l.createElement(l.Fragment, null, e.children);
   }
   function _(e) {
    let { author: t, className: a } = e;
    const { name: n, title: o, url: c, imageURL: s, email: m } = t,
     i = c || (m && `mailto:${m}`) || void 0;
    return l.createElement("div", { className: (0, r.Z)("avatar margin-bottom--sm", a) }, s && l.createElement(Z, { href: i, className: "avatar__photo-link" }, l.createElement("img", { className: "avatar__photo", src: s, alt: n })), n && l.createElement("div", { className: "avatar__intro", itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person" }, l.createElement("div", { className: "avatar__name" }, l.createElement(Z, { href: i, itemProp: "url" }, l.createElement("span", { itemProp: "name" }, n))), o && l.createElement("small", { className: "avatar__subtitle", itemProp: "description" }, o)));
   }
   const y = { authorCol: "authorCol_Hf19", imageOnlyAuthorRow: "imageOnlyAuthorRow_pa_O", imageOnlyAuthorCol: "imageOnlyAuthorCol_G86a" };
   function N(e) {
    let { className: t } = e;
    const {
     metadata: { authors: a },
     assets: n,
    } = (0, c.C)();
    if (0 === a.length) return null;
    const o = a.every((e) => {
     let { name: t } = e;
     return !t;
    });
    return l.createElement(
     "div",
     { className: (0, r.Z)("margin-top--md margin-bottom--sm", o ? y.imageOnlyAuthorRow : "row", t) },
     a.map((e, t) => l.createElement("div", { className: (0, r.Z)(!o && "col col--6", o ? y.imageOnlyAuthorCol : y.authorCol), key: t }, l.createElement(_, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } })))
    );
   }
   function w() {
    return l.createElement("header", null, l.createElement(g, null), l.createElement(P, null), l.createElement(N, null));
   }
   var C = a(18780),
    T = a(88059);
   function F(e) {
    let { children: t, className: a } = e;
    const { isBlogPostPage: n } = (0, c.C)();
    return l.createElement("div", { id: n ? C.blogPostContainerID : void 0, className: (0, r.Z)("markdown", a), itemProp: "articleBody" }, l.createElement(T.Z, null, t));
   }
   var k = a(84881),
    x = a(71526),
    B = a(87462);
   function I() {
    return l.createElement("b", null, l.createElement(p.Z, { id: "theme.blog.post.readMore", description: "The label used in blog post item excerpts to link to full blog posts" }, "Read More"));
   }
   function M(e) {
    const { blogPostTitle: t, ...a } = e;
    return l.createElement(u.Z, (0, B.Z)({ "aria-label": (0, p.I)({ message: "Read more about {title}", id: "theme.blog.post.readMoreLabel", description: "The ARIA label for the link to full blog posts from excerpts" }, { title: t }) }, a), l.createElement(I, null));
   }
   const A = { blogPostFooterDetailsFull: "blogPostFooterDetailsFull_mRVl" };
   function R() {
    const { metadata: e, isBlogPostPage: t } = (0, c.C)(),
     { tags: a, title: n, editUrl: o, hasTruncateMarker: s } = e,
     m = !t && s,
     i = a.length > 0;
    return i || m || o ? l.createElement("footer", { className: (0, r.Z)("row docusaurus-mt-lg", t && A.blogPostFooterDetailsFull) }, i && l.createElement("div", { className: (0, r.Z)("col", { "col--9": m }) }, l.createElement(x.Z, { tags: a })), t && o && l.createElement("div", { className: "col margin-top--sm" }, l.createElement(k.Z, { editUrl: o })), m && l.createElement("div", { className: (0, r.Z)("col text--right", { "col--3": i }) }, l.createElement(M, { blogPostTitle: n, to: e.permalink }))) : null;
   }
   function O(e) {
    let { children: t, className: a } = e;
    const n = (function () {
     const { isBlogPostPage: e } = (0, c.C)();
     return e ? void 0 : "margin-bottom--xl";
    })();
    return l.createElement(i, { className: (0, r.Z)(n, a) }, l.createElement(w, null), l.createElement(F, null, t), l.createElement(R, null));
   }
   var L = a(32244);
   function U(e) {
    const { nextItem: t, prevItem: a } = e;
    return l.createElement("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, p.I)({ id: "theme.blog.post.paginator.navAriaLabel", message: "Blog post page navigation", description: "The ARIA label for the blog posts pagination" }) }, a && l.createElement(L.Z, (0, B.Z)({}, a, { subLabel: l.createElement(p.Z, { id: "theme.blog.post.paginator.newerPost", description: "The blog post button label to navigate to the newer/previous post" }, "Newer Post") })), t && l.createElement(L.Z, (0, B.Z)({}, t, { subLabel: l.createElement(p.Z, { id: "theme.blog.post.paginator.olderPost", description: "The blog post button label to navigate to the older/next post" }, "Older Post"), isNext: !0 })));
   }
   function $() {
    const { assets: e, metadata: t } = (0, c.C)(),
     { title: a, description: r, date: o, tags: s, authors: m, frontMatter: i } = t,
     { keywords: u } = i,
     d = e.image ?? i.image;
    return l.createElement(
     n.d,
     { title: a, description: r, keywords: u, image: d },
     l.createElement("meta", { property: "og:type", content: "article" }),
     l.createElement("meta", { property: "article:published_time", content: o }),
     m.some((e) => e.url) &&
      l.createElement("meta", {
       property: "article:author",
       content: m
        .map((e) => e.url)
        .filter(Boolean)
        .join(","),
      }),
     s.length > 0 && l.createElement("meta", { property: "article:tag", content: s.map((e) => e.label).join(",") })
    );
   }
   var D = a(39407);
   function H(e) {
    let { sidebar: t, children: a } = e;
    const { metadata: r, toc: n } = (0, c.C)(),
     { nextItem: o, prevItem: m, frontMatter: i } = r,
     { hide_table_of_contents: u, toc_min_heading_level: d, toc_max_heading_level: g } = i;
    return l.createElement(s.Z, { breadcrumbs: [{ label: "Blog", href: "/blog" }, { label: r.title }], sidebar: t, toc: !u && n.length > 0 ? l.createElement(D.Z, { toc: n, minHeadingLevel: d, maxHeadingLevel: g }) : void 0 }, l.createElement(O, null, a), (o || m) && l.createElement(U, { nextItem: o, prevItem: m }));
   }
   function Q(e) {
    const t = e.content;
    return l.createElement(c.n, { content: e.content, isBlogPostPage: !0 }, l.createElement(n.FG, { className: (0, r.Z)(o.k.wrapper.blogPages, o.k.page.blogPostPage) }, l.createElement($, null), l.createElement(H, { sidebar: e.sidebar }, l.createElement(t, null))));
   }
  },
  88059: (e, t, a) => {
   a.d(t, { Z: () => h });
   var l = a(67294),
    r = a(3905),
    n = a(35742);
   function o(e) {
    const t = l.Children.map(e.children, (e) =>
     l.isValidElement(e)
      ? (function (e) {
         var t;
         if (null != (t = e.props) && t.mdxType && e.props.originalType) {
          const { mdxType: t, originalType: a, ...r } = e.props;
          return l.createElement(e.props.originalType, r);
         }
         return e;
        })(e)
      : e
    );
    return l.createElement(n.Z, e, t);
   }
   var c = a(74464);
   function s(e) {
    var t;
    return l.createElement(c.Z, (0, l.isValidElement)(e.children) && "code" === (null == (t = e.children.props) ? void 0 : t.originalType) ? e.children.props : { ...e });
   }
   var m = a(87462),
    i = a(34673);
   function u(e) {
    const t = l.Children.toArray(e.children),
     a = t.find((e) => {
      var t;
      return l.isValidElement(e) && "summary" === (null == (t = e.props) ? void 0 : t.mdxType);
     }),
     r = l.createElement(
      l.Fragment,
      null,
      t.filter((e) => e !== a)
     );
    return l.createElement(i.Z, (0, m.Z)({}, e, { summary: a }), r);
   }
   var d = a(23612),
    g = a(11875),
    p = a(65663);
   function h(e) {
    let { children: t } = e;
    return l.createElement(r.Zo, { components: { head: o, code: p.EK, a: p.rU, em: p.j$, pre: s, p: p.nv, details: u, ul: p.QI, li: p.AS, img: p.Ee, h1: p.nL, h2: p.XJ, h3: p.aC, h4: p.k8, h5: p.by, h6: p.Cd, admonition: d.Z, mermaid: g.Z } }, t);
   }
  },
 },
]);
