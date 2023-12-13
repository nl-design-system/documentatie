"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  24524: (e, s, t) => {
   t.r(s), t.d(s, { default: () => g });
   t(67294);
   var r = t(90512),
    l = t(35155),
    a = t(10833),
    n = t(35281),
    c = t(31627),
    i = t(26090),
    d = t(90197),
    h = t(92503),
    o = t(85893);
   function g(e) {
    let { tags: s, sidebar: t } = e;
    const g = (0, l.M)();
    return (0, o.jsxs)(a.FG, { className: (0, r.Z)(n.k.wrapper.blogPages, n.k.page.blogTagsListPage), children: [(0, o.jsx)(a.d, { title: g }), (0, o.jsx)(d.Z, { tag: "blog_tags_list" }), (0, o.jsxs)(c.Z, { sidebar: t, children: [(0, o.jsx)(h.Z, { as: "h1", children: g }), (0, o.jsx)(i.Z, { tags: s })] })] });
   }
  },
  13008: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(67294);
   var r = t(90512),
    l = t(39960);
   const a = { tag: "tag_zVej", tagRegular: "tagRegular_sFm0", tagWithCount: "tagWithCount_h2kH" };
   var n = t(85893);
   function c(e) {
    let { permalink: s, label: t, count: c } = e;
    return (0, n.jsxs)(l.Z, { href: s, className: (0, r.Z)(a.tag, c ? a.tagWithCount : a.tagRegular), children: [t, c && (0, n.jsx)("span", { children: c })] });
   }
  },
  26090: (e, s, t) => {
   t.d(s, { Z: () => d });
   t(67294);
   var r = t(35155),
    l = t(13008),
    a = t(92503);
   const n = { tag: "tag_Nnez" };
   var c = t(85893);
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
  35155: (e, s, t) => {
   t.d(s, { M: () => l, P: () => a });
   var r = t(95999);
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
  26595: (e, s, t) => {
   t.d(s, { Q: () => u });
   var r = t(67294),
    l = t(44996);
   const a = "breadcrumbs__73z",
    n = "breadcrumbs--mobile_QwgF",
    c = "breadcrumbs--desktop_v9Xv";
   var i = t(90512),
    d = t(21209),
    h = t(65663),
    o = t(16550),
    g = t(39960),
    m = t(85893);
   const u = (e) => {
    let { breadcrumbs: s, ...t } = e;
    const u = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...s],
     { pathname: j } = (0, o.TH)(),
     x = [...u].reverse().find((e) => e.href !== j);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)("div", {
       className: (0, i.Z)(a, c),
       children: (0, m.jsx)(h.Qu, {
        ...t,
        children: u.map((e, s, t) => {
         let { label: l, href: a, rel: n } = e,
          { length: c } = t;
         return (0, m.jsxs)(r.Fragment, { children: [(0, m.jsx)(h.yY, { href: a, current: s === c - 1, disabled: s === c - 1, rel: (0, i.Z)(n, { up: s === c - 2 }), children: l }), s < c - 1 && (0, m.jsx)(h.sc, { children: "/" })] }, s);
        }),
       }),
      }),
      x && (0, m.jsx)("div", { className: (0, i.Z)(a, n), children: (0, m.jsx)(h.hE, { children: (0, m.jsxs)(g.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, m.jsx)(h.JO, { children: (0, m.jsx)(d.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  31627: (e, s, t) => {
   t.d(s, { Z: () => c });
   t(67294);
   var r = t(90512),
    l = t(23770),
    a = t(26595),
    n = t(85893);
   function c(e) {
    const { sidebar: s, toc: t, breadcrumbs: c = [], children: i, ...d } = e,
     h = s && s.items.length > 0;
    return (0, n.jsx)(l.Z, { ...d, children: (0, n.jsx)("div", { className: "container margin-vert--md", children: (0, n.jsxs)("div", { className: "row", children: [(0, n.jsx)("div", { className: "col col--9 col--offset-1", children: (0, n.jsx)(a.Q, { breadcrumbs: c }) }), (0, n.jsx)("main", { className: (0, r.Z)("utrecht-document", "utrecht-html", "col", { "col--7": h, "col--9 col--offset-1": !h }), itemScope: !0, itemType: "http://schema.org/Blog", children: i }), t && (0, n.jsx)("div", { className: "col col--2", children: t })] }) }) });
   }
  },
 },
]);
