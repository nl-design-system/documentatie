"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7918],
 {
  26595: (e, r, t) => {
   t.d(r, { Q: () => h });
   var n = t(67294),
    l = t(44996);
   const a = "breadcrumbs__73z",
    c = "breadcrumbs--mobile_QwgF",
    i = "breadcrumbs--desktop_v9Xv";
   var m = t(86010),
    s = t(21209),
    d = t(65663),
    o = t(76775),
    u = t(39960);
   const h = (e) => {
    let { breadcrumbs: r, ...t } = e;
    const h = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...r],
     { pathname: p } = (0, o.TH)(),
     E = [...h].reverse().find((e) => e.href !== p);
    return n.createElement(
     n.Fragment,
     null,
     n.createElement(
      "div",
      { className: (0, m.Z)(a, i) },
      n.createElement(
       d.Qu,
       t,
       h.map((e, r, t) => {
        let { label: l, href: a, rel: c } = e,
         { length: i } = t;
        return n.createElement(n.Fragment, { key: r }, n.createElement(d.yY, { href: a, current: r === i - 1, disabled: r === i - 1, rel: (0, m.Z)(c, { up: r === i - 2 }) }, l), r < i - 1 && n.createElement(d.sc, null, "/"));
       })
      )
     ),
     E && n.createElement("div", { className: (0, m.Z)(a, c) }, n.createElement(d.hE, null, n.createElement(u.Z, { href: E.href, rel: E.rel, className: "utrecht-link utrecht-link--html-a" }, n.createElement(d.JO, null, n.createElement(s.Z, null)), E.label)))
    );
   };
  },
  1832: (e, r, t) => {
   t.d(r, { Z: () => i });
   var n = t(67294),
    l = t(35281),
    a = t(52802),
    c = t(26595);
   function i() {
    var e;
    const r = (null == (e = (0, a.s1)()) ? void 0 : e.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label }))) || [];
    return n.createElement(c.Q, { breadcrumbs: r, className: l.k.docs.docBreadcrumbs });
   }
  },
  33507: (e, r, t) => {
   t.d(r, { Z: () => Z });
   var n = t(67294),
    l = t(86010),
    a = t(35281),
    c = t(65130),
    i = t(92503),
    m = t(3905),
    s = t(35742);
   function d(e) {
    const r = n.Children.map(e.children, (e) =>
     n.isValidElement(e)
      ? (function (e) {
         var r;
         if (null != (r = e.props) && r.mdxType && e.props.originalType) {
          const { mdxType: r, originalType: t, ...l } = e.props;
          return n.createElement(e.props.originalType, l);
         }
         return e;
        })(e)
      : e
    );
    return n.createElement(s.Z, e, r);
   }
   var o = t(74464);
   function u(e) {
    var r;
    return n.createElement(o.Z, (0, n.isValidElement)(e.children) && "code" === (null == (r = e.children.props) ? void 0 : r.originalType) ? e.children.props : { ...e });
   }
   var h = t(87462),
    p = t(34673);
   function E(e) {
    const r = n.Children.toArray(e.children),
     t = r.find((e) => {
      var r;
      return n.isValidElement(e) && "summary" === (null == (r = e.props) ? void 0 : r.mdxType);
     }),
     l = n.createElement(
      n.Fragment,
      null,
      r.filter((e) => e !== t)
     );
    return n.createElement(p.Z, (0, h.Z)({}, e, { summary: t }), l);
   }
   var b = t(23612),
    f = t(11875),
    v = t(65663);
   function y(e) {
    let { children: r } = e;
    return n.createElement(m.Zo, { components: { head: d, code: v.EK, a: v.rU, em: v.j$, pre: u, p: v.nv, details: E, ul: v.QI, li: v.AS, img: v.Ee, h1: v.nL, h2: v.XJ, h3: v.aC, h4: v.k8, h5: v.by, h6: v.Cd, admonition: b.Z, mermaid: f.Z } }, r);
   }
   function Z(e) {
    let { children: r } = e;
    const t = (function () {
     const { metadata: e, frontMatter: r, contentTitle: t } = (0, c.k)();
     return r.hide_title || void 0 !== t ? null : e.title;
    })();
    return n.createElement("div", { className: (0, l.Z)(a.k.docs.docMarkdown) }, t && n.createElement("header", null, n.createElement(i.Z, { as: "h1" }, t)), n.createElement(y, null, r));
   }
  },
 },
]);
