"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13751],
 {
  10727: (e, t, s) => {
   s.r(t), s.d(t, { default: () => h });
   s(67294);
   var a = s(36905),
    n = s(10833),
    l = s(35281),
    r = s(35155),
    i = s(26090),
    c = s(90197),
    g = s(92503),
    o = s(85893);
   function u(e) {
    let { title: t } = e;
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.d, { title: t }), (0, o.jsx)(c.Z, { tag: "doc_tags_list" })] });
   }
   function d(e) {
    let { tags: t, title: s } = e;
    return (0, o.jsx)(n.FG, { className: (0, a.Z)(l.k.page.docsTagsListPage), children: (0, o.jsx)("div", { className: "container margin-vert--lg", children: (0, o.jsx)("div", { className: "row", children: (0, o.jsxs)("main", { className: "col col--8 col--offset-2", children: [(0, o.jsx)(g.Z, { as: "h1", children: s }), (0, o.jsx)(i.Z, { tags: t })] }) }) }) });
   }
   function h(e) {
    const t = (0, r.M)();
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(u, { ...e, title: t }), (0, o.jsx)(d, { ...e, title: t })] });
   }
  },
  13008: (e, t, s) => {
   s.d(t, { Z: () => i });
   s(67294);
   var a = s(36905),
    n = s(39960);
   const l = { tag: "tag_zVej", tagRegular: "tagRegular_sFm0", tagWithCount: "tagWithCount_h2kH" };
   var r = s(85893);
   function i(e) {
    let { permalink: t, label: s, count: i } = e;
    return (0, r.jsxs)(n.Z, { href: t, className: (0, a.Z)(l.tag, i ? l.tagWithCount : l.tagRegular), children: [s, i && (0, r.jsx)("span", { children: i })] });
   }
  },
  26090: (e, t, s) => {
   s.d(t, { Z: () => g });
   s(67294);
   var a = s(35155),
    n = s(13008),
    l = s(92503);
   const r = { tag: "tag_Nnez" };
   var i = s(85893);
   function c(e) {
    let { letterEntry: t } = e;
    return (0, i.jsxs)("article", { children: [(0, i.jsx)(l.Z, { as: "h2", id: t.letter, children: t.letter }), (0, i.jsx)("ul", { className: "padding--none", children: t.tags.map((e) => (0, i.jsx)("li", { className: r.tag, children: (0, i.jsx)(n.Z, { ...e }) }, e.permalink)) }), (0, i.jsx)("hr", {})] });
   }
   function g(e) {
    let { tags: t } = e;
    const s = (0, a.P)(t);
    return (0, i.jsx)("section", { className: "margin-vert--lg", children: s.map((e) => (0, i.jsx)(c, { letterEntry: e }, e.letter)) });
   }
  },
  35155: (e, t, s) => {
   s.d(t, { M: () => n, P: () => l });
   var a = s(95999);
   const n = () => (0, a.I)({ id: "theme.tags.tagsPageTitle", message: "Tags", description: "The title of the tag list page" });
   function l(e) {
    const t = {};
    return (
     Object.values(e).forEach((e) => {
      const s = (function (e) {
       return e[0].toUpperCase();
      })(e.label);
      (t[s] ??= []), t[s].push(e);
     }),
     Object.entries(t)
      .sort((e, t) => {
       let [s] = e,
        [a] = t;
       return s.localeCompare(a);
      })
      .map((e) => {
       let [t, s] = e;
       return { letter: t, tags: s.sort((e, t) => e.label.localeCompare(t.label)) };
      })
    );
   }
  },
 },
]);
