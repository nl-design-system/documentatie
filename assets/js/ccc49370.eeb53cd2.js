"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46103],
 {
  9460: (e, t, a) => {
   a.d(t, { C: () => c, n: () => o });
   var r = a(67294),
    l = a(902);
   const n = r.createContext(null);
   function o(e) {
    let { children: t, content: a, isBlogPostPage: l = !1 } = e;
    const o = (function (e) {
     let { content: t, isBlogPostPage: a } = e;
     return (0, r.useMemo)(() => ({ metadata: t.metadata, frontMatter: t.frontMatter, assets: t.assets, toc: t.toc, isBlogPostPage: a }), [t, a]);
    })({ content: a, isBlogPostPage: l });
    return r.createElement(n.Provider, { value: o }, t);
   }
   function c() {
    const e = (0, r.useContext)(n);
    if (null === e) throw new l.i6("BlogPostProvider");
    return e;
   }
  },
  88824: (e, t, a) => {
   a.d(t, { c: () => m });
   var r = a(67294),
    l = a(52263);
   const n = ["zero", "one", "two", "few", "many", "other"];
   function o(e) {
    return n.filter((t) => e.includes(t));
   }
   const c = { locale: "en", pluralForms: o(["one", "other"]), select: (e) => (1 === e ? "one" : "other") };
   function s() {
    const {
     i18n: { currentLocale: e },
    } = (0, l.Z)();
    return (0, r.useMemo)(() => {
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
    o = "breadcrumbs--mobile_QwgF",
    c = "breadcrumbs--desktop_v9Xv";
   var s = a(86010),
    m = a(21209),
    i = a(65663),
    u = a(76775),
    d = a(39960);
   const g = (e) => {
    let { breadcrumbs: t, ...a } = e;
    const g = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: p } = (0, u.TH)(),
     h = [...g].reverse().find((e) => e.href !== p);
    return r.createElement(
     r.Fragment,
     null,
     r.createElement(
      "div",
      { className: (0, s.Z)(n, c) },
      r.createElement(
       i.Qu,
       a,
       g.map((e, t, a) => {
        let { label: l, href: n, rel: o } = e,
         { length: c } = a;
        return r.createElement(r.Fragment, { key: t }, r.createElement(i.yY, { href: n, current: t === c - 1, disabled: t === c - 1, rel: (0, s.Z)(o, { up: t === c - 2 }) }, l), t < c - 1 && r.createElement(i.sc, null, "/"));
       })
      )
     ),
     h && r.createElement("div", { className: (0, s.Z)(n, o) }, r.createElement(i.hE, null, r.createElement(d.Z, { href: h.href, rel: h.rel, className: "utrecht-link utrecht-link--html-a" }, r.createElement(i.JO, null, r.createElement(m.Z, null)), h.label)))
    );
   };
  },
  31627: (e, t, a) => {
   a.d(t, { Z: () => c });
   var r = a(67294),
    l = a(86010),
    n = a(23770),
    o = a(26595);
   function c(e) {
    const { sidebar: t, toc: a, breadcrumbs: c = [], children: s, ...m } = e,
     i = t && t.items.length > 0;
    return r.createElement(n.Z, m, r.createElement("div", { className: "container margin-vert--md" }, r.createElement("div", { className: "row" }, r.createElement("div", { className: "col col--9 col--offset-1" }, r.createElement(o.Q, { breadcrumbs: c })), r.createElement("main", { className: (0, l.Z)("utrecht-document", "utrecht-html", "col", { "col--7": i, "col--9 col--offset-1": !i }), itemScope: !0, itemType: "http://schema.org/Blog" }, s), a && r.createElement("div", { className: "col col--2" }, a))));
   }
  },
  86252: (e, t, a) => {
   a.r(t), a.d(t, { default: () => Q });
   var r = a(67294),
    l = a(86010),
    n = a(10833),
    o = a(35281),
    c = a(9460),
    s = a(31627),
    m = a(44996);
   function i(e) {
    let { children: t, className: a } = e;
    const { frontMatter: l, assets: n } = (0, c.C)(),
     { withBaseUrl: o } = (0, m.C)(),
     s = n.image ?? l.image;
    return r.createElement("article", { className: a, itemProp: "blogPost", itemScope: !0, itemType: "http://schema.org/BlogPosting" }, s && r.createElement("meta", { itemProp: "image", content: o(s, { absolute: !0 }) }), t);
   }
   var u = a(39960);
   const d = { title: "title_f1Hy" };
   function g(e) {
    let { className: t } = e;
    const { metadata: a, isBlogPostPage: n } = (0, c.C)(),
     { permalink: o, title: s } = a,
     m = n ? "h1" : "h2";
    return r.createElement(m, { className: (0, l.Z)(d.title, t), itemProp: "headline" }, n ? s : r.createElement(u.Z, { itemProp: "url", to: o }, s));
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
    return r.createElement(r.Fragment, null, a(t));
   }
   function b(e) {
    let { date: t, formattedDate: a } = e;
    return r.createElement("time", { dateTime: t, itemProp: "datePublished" }, a);
   }
   function v() {
    return r.createElement(r.Fragment, null, " \xb7 ");
   }
   function P(e) {
    let { className: t } = e;
    const { metadata: a } = (0, c.C)(),
     { date: n, formattedDate: o, readingTime: s } = a;
    return r.createElement("div", { className: (0, l.Z)(E.container, "margin-vert--md", t) }, r.createElement(b, { date: n, formattedDate: o }), void 0 !== s && r.createElement(r.Fragment, null, r.createElement(v, null), r.createElement(f, { readingTime: s })));
   }
   function Z(e) {
    return e.href ? r.createElement(u.Z, e) : r.createElement(r.Fragment, null, e.children);
   }
   function _(e) {
    let { author: t, className: a } = e;
    const { name: n, title: o, url: c, imageURL: s, email: m } = t,
     i = c || (m && `mailto:${m}`) || void 0;
    return r.createElement("div", { className: (0, l.Z)("avatar margin-bottom--sm", a) }, s && r.createElement(Z, { href: i, className: "avatar__photo-link" }, r.createElement("img", { className: "avatar__photo", src: s, alt: n })), n && r.createElement("div", { className: "avatar__intro", itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person" }, r.createElement("div", { className: "avatar__name" }, r.createElement(Z, { href: i, itemProp: "url" }, r.createElement("span", { itemProp: "name" }, n))), o && r.createElement("small", { className: "avatar__subtitle", itemProp: "description" }, o)));
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
    return r.createElement(
     "div",
     { className: (0, l.Z)("margin-top--md margin-bottom--sm", o ? y.imageOnlyAuthorRow : "row", t) },
     a.map((e, t) => r.createElement("div", { className: (0, l.Z)(!o && "col col--6", o ? y.imageOnlyAuthorCol : y.authorCol), key: t }, r.createElement(_, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } })))
    );
   }
   function w() {
    return r.createElement("header", null, r.createElement(g, null), r.createElement(P, null), r.createElement(N, null));
   }
   var C = a(18780),
    T = a(88059);
   function F(e) {
    let { children: t, className: a } = e;
    const { isBlogPostPage: n } = (0, c.C)();
    return r.createElement("div", { id: n ? C.blogPostContainerID : void 0, className: (0, l.Z)("markdown", a), itemProp: "articleBody" }, r.createElement(T.Z, null, t));
   }
   var k = a(84881),
    x = a(71526),
    B = a(87462);
   function I() {
    return r.createElement("b", null, r.createElement(p.Z, { id: "theme.blog.post.readMore", description: "The label used in blog post item excerpts to link to full blog posts" }, "Read More"));
   }
   function M(e) {
    const { blogPostTitle: t, ...a } = e;
    return r.createElement(u.Z, (0, B.Z)({ "aria-label": (0, p.I)({ message: "Read more about {title}", id: "theme.blog.post.readMoreLabel", description: "The ARIA label for the link to full blog posts from excerpts" }, { title: t }) }, a), r.createElement(I, null));
   }
   const A = { blogPostFooterDetailsFull: "blogPostFooterDetailsFull_mRVl" };
   function R() {
    const { metadata: e, isBlogPostPage: t } = (0, c.C)(),
     { tags: a, title: n, editUrl: o, hasTruncateMarker: s } = e,
     m = !t && s,
     i = a.length > 0;
    return i || m || o ? r.createElement("footer", { className: (0, l.Z)("row docusaurus-mt-lg", t && A.blogPostFooterDetailsFull) }, i && r.createElement("div", { className: (0, l.Z)("col", { "col--9": m }) }, r.createElement(x.Z, { tags: a })), t && o && r.createElement("div", { className: "col margin-top--sm" }, r.createElement(k.Z, { editUrl: o })), m && r.createElement("div", { className: (0, l.Z)("col text--right", { "col--3": i }) }, r.createElement(M, { blogPostTitle: n, to: e.permalink }))) : null;
   }
   function O(e) {
    let { children: t, className: a } = e;
    const n = (function () {
     const { isBlogPostPage: e } = (0, c.C)();
     return e ? void 0 : "margin-bottom--xl";
    })();
    return r.createElement(i, { className: (0, l.Z)(n, a) }, r.createElement(w, null), r.createElement(F, null, t), r.createElement(R, null));
   }
   var L = a(32244);
   function U(e) {
    const { nextItem: t, prevItem: a } = e;
    return r.createElement("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, p.I)({ id: "theme.blog.post.paginator.navAriaLabel", message: "Blog post page navigation", description: "The ARIA label for the blog posts pagination" }) }, a && r.createElement(L.Z, (0, B.Z)({}, a, { subLabel: r.createElement(p.Z, { id: "theme.blog.post.paginator.newerPost", description: "The blog post button label to navigate to the newer/previous post" }, "Newer Post") })), t && r.createElement(L.Z, (0, B.Z)({}, t, { subLabel: r.createElement(p.Z, { id: "theme.blog.post.paginator.olderPost", description: "The blog post button label to navigate to the older/next post" }, "Older Post"), isNext: !0 })));
   }
   function $() {
    const { assets: e, metadata: t } = (0, c.C)(),
     { title: a, description: l, date: o, tags: s, authors: m, frontMatter: i } = t,
     { keywords: u } = i,
     d = e.image ?? i.image;
    return r.createElement(
     n.d,
     { title: a, description: l, keywords: u, image: d },
     r.createElement("meta", { property: "og:type", content: "article" }),
     r.createElement("meta", { property: "article:published_time", content: o }),
     m.some((e) => e.url) &&
      r.createElement("meta", {
       property: "article:author",
       content: m
        .map((e) => e.url)
        .filter(Boolean)
        .join(","),
      }),
     s.length > 0 && r.createElement("meta", { property: "article:tag", content: s.map((e) => e.label).join(",") })
    );
   }
   var D = a(39407);
   function H(e) {
    let { sidebar: t, children: a } = e;
    const { metadata: l, toc: n } = (0, c.C)(),
     { nextItem: o, prevItem: m, frontMatter: i } = l,
     { hide_table_of_contents: u, toc_min_heading_level: d, toc_max_heading_level: g } = i;
    return r.createElement(s.Z, { breadcrumbs: [{ label: "Blog", href: "/blog" }, { label: l.title }], sidebar: t, toc: !u && n.length > 0 ? r.createElement(D.Z, { toc: n, minHeadingLevel: d, maxHeadingLevel: g }) : void 0 }, r.createElement(O, null, a), (o || m) && r.createElement(U, { nextItem: o, prevItem: m }));
   }
   function Q(e) {
    const t = e.content;
    return r.createElement(c.n, { content: e.content, isBlogPostPage: !0 }, r.createElement(n.FG, { className: (0, l.Z)(o.k.wrapper.blogPages, o.k.page.blogPostPage) }, r.createElement($, null), r.createElement(H, { sidebar: e.sidebar }, r.createElement(t, null))));
   }
  },
  88059: (e, t, a) => {
   a.d(t, { Z: () => h });
   var r = a(67294),
    l = a(3905),
    n = a(35742);
   function o(e) {
    const t = r.Children.map(e.children, (e) =>
     r.isValidElement(e)
      ? (function (e) {
         var t;
         if (null != (t = e.props) && t.mdxType && e.props.originalType) {
          const { mdxType: t, originalType: a, ...l } = e.props;
          return r.createElement(e.props.originalType, l);
         }
         return e;
        })(e)
      : e
    );
    return r.createElement(n.Z, e, t);
   }
   var c = a(74464);
   function s(e) {
    var t;
    return r.createElement(c.Z, (0, r.isValidElement)(e.children) && "code" === (null == (t = e.children.props) ? void 0 : t.originalType) ? e.children.props : { ...e });
   }
   var m = a(87462),
    i = a(34673);
   function u(e) {
    const t = r.Children.toArray(e.children),
     a = t.find((e) => {
      var t;
      return r.isValidElement(e) && "summary" === (null == (t = e.props) ? void 0 : t.mdxType);
     }),
     l = r.createElement(
      r.Fragment,
      null,
      t.filter((e) => e !== a)
     );
    return r.createElement(i.Z, (0, m.Z)({}, e, { summary: a }), l);
   }
   var d = a(23612),
    g = a(11875),
    p = a(65663);
   function h(e) {
    let { children: t } = e;
    return r.createElement(l.Zo, { components: { head: o, code: p.EK, a: p.rU, em: p.j$, pre: s, p: p.nv, details: u, ul: p.QI, li: p.AS, img: p.Ee, h1: p.nL, h2: p.XJ, h3: p.aC, h4: p.k8, h5: p.by, h6: p.Cd, admonition: d.Z, mermaid: g.Z } }, t);
   }
  },
 },
]);
