"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13751],
 {
  26718: (t, e, s) => {
   s.r(e), s.d(e, { default: () => h });
   s(50959);
   var a = s(5341),
    l = s(44616),
    n = s(15116),
    r = s(88692),
    i = s(95290),
    c = s(78347),
    g = s(52542),
    o = s(11527);
   function u(t) {
    let { title: e } = t;
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.d, { title: e }), (0, o.jsx)(c.Z, { tag: "doc_tags_list" })] });
   }
   function d(t) {
    let { tags: e, title: s } = t;
    return (0, o.jsx)(l.FG, { className: (0, a.Z)(n.k.page.docsTagsListPage), children: (0, o.jsx)("div", { className: "container margin-vert--lg", children: (0, o.jsx)("div", { className: "row", children: (0, o.jsxs)("main", { className: "col col--8 col--offset-2", children: [(0, o.jsx)(g.Z, { as: "h1", children: s }), (0, o.jsx)(i.Z, { tags: e })] }) }) }) });
   }
   function h(t) {
    const e = (0, r.M)();
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(u, { ...t, title: e }), (0, o.jsx)(d, { ...t, title: e })] });
   }
  },
  19363: (t, e, s) => {
   s.d(e, { Z: () => i });
   s(50959);
   var a = s(5341),
    l = s(62384);
   const n = { tag: "tag_BVce", tagRegular: "tagRegular_vP1G", tagWithCount: "tagWithCount_mS1E" };
   var r = s(11527);
   function i(t) {
    let { permalink: e, label: s, count: i } = t;
    return (0, r.jsxs)(l.Z, { href: e, className: (0, a.Z)(n.tag, i ? n.tagWithCount : n.tagRegular), children: [s, i && (0, r.jsx)("span", { children: i })] });
   }
  },
  95290: (t, e, s) => {
   s.d(e, { Z: () => g });
   s(50959);
   var a = s(88692),
    l = s(19363),
    n = s(52542);
   const r = { tag: "tag_mCWS" };
   var i = s(11527);
   function c(t) {
    let { letterEntry: e } = t;
    return (0, i.jsxs)("article", { children: [(0, i.jsx)(n.Z, { as: "h2", id: e.letter, children: e.letter }), (0, i.jsx)("ul", { className: "padding--none", children: e.tags.map((t) => (0, i.jsx)("li", { className: r.tag, children: (0, i.jsx)(l.Z, { ...t }) }, t.permalink)) }), (0, i.jsx)("hr", {})] });
   }
   function g(t) {
    let { tags: e } = t;
    const s = (0, a.P)(e);
    return (0, i.jsx)("section", { className: "margin-vert--lg", children: s.map((t) => (0, i.jsx)(c, { letterEntry: t }, t.letter)) });
   }
  },
  88692: (t, e, s) => {
   s.d(e, { M: () => l, P: () => n });
   var a = s(77289);
   const l = () => (0, a.I)({ id: "theme.tags.tagsPageTitle", message: "Tags", description: "The title of the tag list page" });
   function n(t) {
    const e = {};
    return (
     Object.values(t).forEach((t) => {
      const s = (function (t) {
       return t[0].toUpperCase();
      })(t.label);
      (e[s] ??= []), e[s].push(t);
     }),
     Object.entries(e)
      .sort((t, e) => {
       let [s] = t,
        [a] = e;
       return s.localeCompare(a);
      })
      .map((t) => {
       let [e, s] = t;
       return { letter: e, tags: s.sort((t, e) => t.label.localeCompare(e.label)) };
      })
    );
   }
  },
 },
]);
