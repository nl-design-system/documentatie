"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  85405: (e, s, t) => {
   t.r(s), t.d(s, { default: () => m });
   t(50959);
   var r = t(5341),
    l = t(88692),
    a = t(44616),
    n = t(15116),
    c = t(29450),
    i = t(95290),
    d = t(78347),
    h = t(52542),
    o = t(11527);
   function m(e) {
    let { tags: s, sidebar: t } = e;
    const m = (0, l.M)();
    return (0, o.jsxs)(a.FG, { className: (0, r.Z)(n.k.wrapper.blogPages, n.k.page.blogTagsListPage), children: [(0, o.jsx)(a.d, { title: m }), (0, o.jsx)(d.Z, { tag: "blog_tags_list" }), (0, o.jsxs)(c.Z, { sidebar: t, children: [(0, o.jsx)(h.Z, { as: "h1", children: m }), (0, o.jsx)(i.Z, { tags: s })] })] });
   }
  },
  19363: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(50959);
   var r = t(5341),
    l = t(62384);
   const a = { tag: "tag_BVce", tagRegular: "tagRegular_vP1G", tagWithCount: "tagWithCount_mS1E" };
   var n = t(11527);
   function c(e) {
    let { permalink: s, label: t, count: c } = e;
    return (0, n.jsxs)(l.Z, { href: s, className: (0, r.Z)(a.tag, c ? a.tagWithCount : a.tagRegular), children: [t, c && (0, n.jsx)("span", { children: c })] });
   }
  },
  95290: (e, s, t) => {
   t.d(s, { Z: () => d });
   t(50959);
   var r = t(88692),
    l = t(19363),
    a = t(52542);
   const n = { tag: "tag_mCWS" };
   var c = t(11527);
   function i(e) {
    let { letterEntry: s } = e;
    return (0, c.jsxs)("article", { children: [(0, c.jsx)(a.Z, { as: "h2", id: s.letter, children: s.letter }), (0, c.jsx)("ul", { className: "padding--none", children: s.tags.map((e) => (0, c.jsx)("li", { className: n.tag, children: (0, c.jsx)(l.Z, { ...e }) }, e.permalink)) }), (0, c.jsx)("hr", {})] });
   }
   function d(e) {
    let { tags: s } = e;
    const t = (0, r.P)(s);
    return (0, c.jsx)("section", { className: "margin-vert--lg", children: t.map((e) => (0, c.jsx)(i, { letterEntry: e }, e.letter)) });
   }
  },
  88692: (e, s, t) => {
   t.d(s, { M: () => l, P: () => a });
   var r = t(77289);
   const l = () => (0, r.I)({ id: "theme.tags.tagsPageTitle", message: "Tags", description: "The title of the tag list page" });
   function a(e) {
    const s = {};
    return (
     Object.values(e).forEach((e) => {
      const t = (function (e) {
       return e[0].toUpperCase();
      })(e.label);
      (s[t] ??= []), s[t].push(e);
     }),
     Object.entries(s)
      .sort((e, s) => {
       let [t] = e,
        [r] = s;
       return t.localeCompare(r);
      })
      .map((e) => {
       let [s, t] = e;
       return { letter: s, tags: t.sort((e, s) => e.label.localeCompare(s.label)) };
      })
    );
   }
  },
  46820: (e, s, t) => {
   t.d(s, { Q: () => u });
   var r = t(50959),
    l = t(3426);
   const a = "breadcrumbs__73z",
    n = "breadcrumbs--mobile_QwgF",
    c = "breadcrumbs--desktop_v9Xv";
   var i = t(5341),
    d = t(38456),
    h = t(16532),
    o = t(28903),
    m = t(62384),
    g = t(11527);
   const u = (e) => {
    let { breadcrumbs: s, ...t } = e;
    const u = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...s],
     { pathname: j } = (0, o.TH)(),
     x = [...u].reverse().find((e) => e.href !== j);
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsx)("div", {
       className: (0, i.Z)(a, c),
       children: (0, g.jsx)(h.Qu, {
        ...t,
        children: u.map((e, s, t) => {
         let { label: l, href: a, rel: n } = e,
          { length: c } = t;
         return (0, g.jsxs)(r.Fragment, { children: [(0, g.jsx)(h.yY, { href: a, current: s === c - 1, disabled: s === c - 1, rel: (0, i.Z)(n, { up: s === c - 2 }), children: l }), s < c - 1 && (0, g.jsx)(h.sc, { children: "/" })] }, s);
        }),
       }),
      }),
      x && (0, g.jsx)("div", { className: (0, i.Z)(a, n), children: (0, g.jsx)(h.hE, { children: (0, g.jsxs)(m.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, g.jsx)(h.JO, { children: (0, g.jsx)(d.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  29450: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(50959);
   var r = t(5341),
    l = t(7993),
    a = t(46820),
    n = t(11527);
   function c(e) {
    const { sidebar: s, toc: t, breadcrumbs: c = [], children: i, ...d } = e,
     h = s && s.items.length > 0;
    return (0, n.jsx)(l.Z, { ...d, children: (0, n.jsx)("div", { className: "container margin-vert--md", children: (0, n.jsxs)("div", { className: "row", children: [(0, n.jsx)("div", { className: "col col--9 col--offset-1", children: (0, n.jsx)(a.Q, { breadcrumbs: c }) }), (0, n.jsx)("main", { className: (0, r.Z)("utrecht-document", "utrecht-html", "col", { "col--7": h, "col--9 col--offset-1": !h }), itemScope: !0, itemType: "http://schema.org/Blog", children: i }), t && (0, n.jsx)("div", { className: "col col--2", children: t })] }) }) });
   }
  },
 },
]);
