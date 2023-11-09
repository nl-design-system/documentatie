"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64013],
 {
  24524: (e, t, a) => {
   a.r(t), a.d(t, { default: () => i });
   var l = a(67294),
    r = a(86010),
    n = a(35155),
    c = a(10833),
    s = a(35281),
    m = a(31627),
    o = a(26090),
    u = a(90197);
   function i(e) {
    let { tags: t, sidebar: a } = e;
    const i = (0, n.M)();
    return l.createElement(c.FG, { className: (0, r.Z)(s.k.wrapper.blogPages, s.k.page.blogTagsListPage) }, l.createElement(c.d, { title: i }), l.createElement(u.Z, { tag: "blog_tags_list" }), l.createElement(m.Z, { sidebar: a }, l.createElement("h1", null, i), l.createElement(o.Z, { tags: t })));
   }
  },
  13008: (e, t, a) => {
   a.d(t, { Z: () => s });
   var l = a(67294),
    r = a(86010),
    n = a(39960);
   const c = { tag: "tag_zVej", tagRegular: "tagRegular_sFm0", tagWithCount: "tagWithCount_h2kH" };
   function s(e) {
    let { permalink: t, label: a, count: s } = e;
    return l.createElement(n.Z, { href: t, className: (0, r.Z)(c.tag, s ? c.tagWithCount : c.tagRegular) }, a, s && l.createElement("span", null, s));
   }
  },
  26090: (e, t, a) => {
   a.d(t, { Z: () => m });
   var l = a(67294),
    r = a(35155),
    n = a(13008);
   const c = { tag: "tag_Nnez" };
   function s(e) {
    let { letterEntry: t } = e;
    return l.createElement(
     "article",
     null,
     l.createElement("h2", null, t.letter),
     l.createElement(
      "ul",
      { className: "padding--none" },
      t.tags.map((e) => l.createElement("li", { key: e.permalink, className: c.tag }, l.createElement(n.Z, e)))
     ),
     l.createElement("hr", null)
    );
   }
   function m(e) {
    let { tags: t } = e;
    const a = (0, r.P)(t);
    return l.createElement(
     "section",
     { className: "margin-vert--lg" },
     a.map((e) => l.createElement(s, { key: e.letter, letterEntry: e }))
    );
   }
  },
  35155: (e, t, a) => {
   a.d(t, { M: () => r, P: () => n });
   var l = a(95999);
   const r = () => (0, l.I)({ id: "theme.tags.tagsPageTitle", message: "Tags", description: "The title of the tag list page" });
   function n(e) {
    const t = {};
    return (
     Object.values(e).forEach((e) => {
      const a = (function (e) {
       return e[0].toUpperCase();
      })(e.label);
      (t[a] ??= []), t[a].push(e);
     }),
     Object.entries(t)
      .sort((e, t) => {
       let [a] = e,
        [l] = t;
       return a.localeCompare(l);
      })
      .map((e) => {
       let [t, a] = e;
       return { letter: t, tags: a.sort((e, t) => e.label.localeCompare(t.label)) };
      })
    );
   }
  },
  26595: (e, t, a) => {
   a.d(t, { Q: () => E });
   var l = a(67294),
    r = a(44996);
   const n = "breadcrumbs__73z",
    c = "breadcrumbs--mobile_QwgF",
    s = "breadcrumbs--desktop_v9Xv";
   var m = a(86010),
    o = a(21209),
    u = a(65663),
    i = a(76775),
    g = a(39960);
   const E = (e) => {
    let { breadcrumbs: t, ...a } = e;
    const E = [{ href: (0, r.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: d } = (0, i.TH)(),
     h = [...E].reverse().find((e) => e.href !== d);
    return l.createElement(
     l.Fragment,
     null,
     l.createElement(
      "div",
      { className: (0, m.Z)(n, s) },
      l.createElement(
       u.Qu,
       a,
       E.map((e, t, a) => {
        let { label: r, href: n, rel: c } = e,
         { length: s } = a;
        return l.createElement(l.Fragment, { key: t }, l.createElement(u.yY, { href: n, current: t === s - 1, disabled: t === s - 1, rel: (0, m.Z)(c, { up: t === s - 2 }) }, r), t < s - 1 && l.createElement(u.sc, null, "/"));
       })
      )
     ),
     h && l.createElement("div", { className: (0, m.Z)(n, c) }, l.createElement(u.hE, null, l.createElement(g.Z, { href: h.href, rel: h.rel, className: "utrecht-link utrecht-link--html-a" }, l.createElement(u.JO, null, l.createElement(o.Z, null)), h.label)))
    );
   };
  },
  31627: (e, t, a) => {
   a.d(t, { Z: () => s });
   var l = a(67294),
    r = a(86010),
    n = a(23770),
    c = a(26595);
   function s(e) {
    const { sidebar: t, toc: a, breadcrumbs: s = [], children: m, ...o } = e,
     u = t && t.items.length > 0;
    return l.createElement(n.Z, o, l.createElement("div", { className: "container margin-vert--md" }, l.createElement("div", { className: "row" }, l.createElement("div", { className: "col col--9 col--offset-1" }, l.createElement(c.Q, { breadcrumbs: s })), l.createElement("main", { className: (0, r.Z)("utrecht-document", "utrecht-html", "col", { "col--7": u, "col--9 col--offset-1": !u }), itemScope: !0, itemType: "http://schema.org/Blog" }, m), a && l.createElement("div", { className: "col col--2" }, a))));
   }
  },
 },
]);
