"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [29514, 4972],
 {
  94059: (e, t, n) => {
   n.r(t), n.d(t, { default: () => pe });
   var a = n(67294),
    l = n(86010),
    r = n(10833),
    o = n(35281),
    c = n(43320),
    i = n(52802),
    s = n(74477),
    d = n(1116),
    m = n(23770),
    u = n(95999),
    b = n(12466),
    p = n(85936);
   const h = { backToTopButton: "backToTopButton_sjWU", backToTopButtonShow: "backToTopButtonShow_xfvO" };
   function E() {
    const { shown: e, scrollToTop: t } = (function (e) {
     let { threshold: t } = e;
     const [n, l] = (0, a.useState)(!1),
      r = (0, a.useRef)(!1),
      { startScroll: o, cancelScroll: c } = (0, b.Ct)();
     return (
      (0, b.RF)((e, n) => {
       let { scrollY: a } = e;
       const o = null == n ? void 0 : n.scrollY;
       o && (r.current ? (r.current = !1) : a >= o ? (c(), l(!1)) : a < t ? l(!1) : a + window.innerHeight < document.documentElement.scrollHeight && l(!0));
      }),
      (0, p.S)((e) => {
       e.location.hash && ((r.current = !0), l(!1));
      }),
      { shown: n, scrollToTop: () => o(0) }
     );
    })({ threshold: 300 });
    return a.createElement("button", { "aria-label": (0, u.I)({ id: "theme.BackToTopButton.buttonAriaLabel", message: "Scroll back to top", description: "The ARIA label for the back to top button" }), className: (0, l.Z)("clean-btn", o.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: "button", onClick: t });
   }
   var _ = n(76775),
    g = n(87524),
    v = n(86668),
    k = n(99445),
    f = n(59689),
    C = n(87462),
    y = n(902);
   const N = Symbol("EmptyContext"),
    I = a.createContext(N);
   function Z(e) {
    let { children: t } = e;
    const [n, l] = (0, a.useState)(null),
     r = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: l }), [n]);
    return a.createElement(I.Provider, { value: r }, t);
   }
   var S = n(47186),
    T = n(39960),
    w = n(72389),
    M = n(65663),
    x = n(30853),
    L = (0, x.Z)("chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]),
    F = (0, x.Z)("chevron-up", "IconChevronUp", [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]]);
   function A(e) {
    let { categoryLabel: t, collapsed: n, onClick: l } = e;
    return a.createElement(M.zx, { appearance: "subtle-button", "aria-label": (0, u.I)({ id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel", message: "Toggle the collapsible sidebar category '{label}'", description: "The ARIA label to toggle the collapsible sidebar category" }, { label: t }), type: "button", className: "clean-btn", onClick: l }, a.createElement(M.JO, null, n ? a.createElement(L, null) : a.createElement(F, null)));
   }
   function H(e) {
    let { item: t, onItemClick: n, activePath: r, level: c, index: s, ...d } = e;
    const { items: m, label: u, collapsible: b, className: p, href: h } = t,
     E = "sidebar__main-category" === p,
     {
      docs: {
       sidebar: { autoCollapseCategories: _ },
      },
     } = (0, v.L)(),
     g = (function (e) {
      const t = (0, w.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, i.Wl)(e) : void 0), [e, t]);
     })(t),
     k = (0, i._F)(t, r),
     { collapsed: f, setCollapsed: Z } = (0, S.u)({ initialState: () => !!b && !k && t.collapsed }),
     { expandedItem: M, setExpandedItem: x } = (function () {
      const e = (0, a.useContext)(I);
      if (e === N) throw new y.i6("DocSidebarItemsExpandedStateProvider");
      return e;
     })(),
     L = function (e) {
      void 0 === e && (e = !f), x(e ? null : s), Z(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: l } = e;
      const r = (0, y.D9)(t);
      (0, a.useEffect)(() => {
       t && !r && n && l(!1);
      }, [t, r, n, l]);
     })({ isActive: k, collapsed: f, updateCollapsed: L }),
     (0, a.useEffect)(() => {
      b && null != M && M !== s && _ && Z(!0);
     }, [b, M, s, Z, _]),
     a.createElement(
      "li",
      { className: (0, l.Z)(o.k.docs.docSidebarItemCategory, o.k.docs.docSidebarItemCategoryLevel(c), "menu__list-item", { "menu__list-item--collapsed": f }) },
      a.createElement(
       "div",
       { className: (0, l.Z)("menu__list-item-collapsible", { "sidebar__main-category": E }) },
       E ? u : a.createElement(T.Z, (0, C.Z)({ className: (0, l.Z)("menu__link", "utrecht-link", { "menu__link--sublist": b, "menu__link--sublist-caret": !h && b }), href: b ? g ?? "#" : g }, d), u),
       h &&
        b &&
        a.createElement(A, {
         categoryLabel: u,
         onClick: (e) => {
          e.preventDefault(), L();
         },
         collapsed: f,
        })
      ),
      a.createElement(S.z, { lazy: !0, as: "ul", className: "menu__list", collapsed: f }, a.createElement(Y, { items: m, tabIndex: f ? -1 : 0, onItemClick: n, activePath: r, level: c + 1 }))
     )
    );
   }
   var P = n(13919),
    B = n(39471);
   const W = { menuExternalLink: "menuExternalLink_NnFM" };
   function V(e) {
    let { item: t, onItemClick: n, activePath: r, level: c, index: s, ...d } = e;
    const { href: m, label: u, className: b, autoAddBaseUrl: p } = t,
     h = (0, i._F)(t, r),
     E = (0, P.Z)(m);
    return a.createElement("li", { className: (0, l.Z)(o.k.docs.docSidebarItemLink, o.k.docs.docSidebarItemLinkLevel(c), "menu__list-item", b), key: u }, a.createElement(T.Z, (0, C.Z)({ className: (0, l.Z)("menu__link", !E && W.menuExternalLink, { "menu__link--active": h }, "utrecht-link"), autoAddBaseUrl: p, "aria-current": h ? "page" : void 0, to: m }, E && { onClick: n ? () => n(t) : void 0 }, d), u, !E && a.createElement(B.Z, null)));
   }
   const R = { menuHtmlItem: "menuHtmlItem_PEWV" };
   function D(e) {
    let { item: t, level: n, index: r } = e;
    const { value: c, defaultStyle: i, className: s } = t;
    return a.createElement("li", { className: (0, l.Z)(o.k.docs.docSidebarItemLink, o.k.docs.docSidebarItemLinkLevel(n), i && [R.menuHtmlItem, "menu__list-item"], s), key: r, dangerouslySetInnerHTML: { __html: c } });
   }
   function U(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case "category":
      return a.createElement(H, (0, C.Z)({ item: t }, n));
     case "html":
      return a.createElement(D, (0, C.Z)({ item: t }, n));
     default:
      return a.createElement(V, (0, C.Z)({ item: t }, n));
    }
   }
   function z(e) {
    let { items: t, ...n } = e;
    return a.createElement(
     Z,
     null,
     t.map((e, t) => a.createElement(U, (0, C.Z)({ key: t, item: e, index: t }, n)))
    );
   }
   const Y = (0, a.memo)(z),
    J = { menu: "menu_Y1UP", menuWithAnnouncementBar: "menuWithAnnouncementBar_fPny" };
   function O(e) {
    let { path: t, sidebar: n, className: r } = e;
    const c = (function () {
     const { isActive: e } = (0, f.nT)(),
      [t, n] = (0, a.useState)(e);
     return (
      (0, b.RF)(
       (t) => {
        let { scrollY: a } = t;
        e && n(0 === a);
       },
       [e]
      ),
      e && t
     );
    })();
    return a.createElement("nav", { "aria-label": (0, u.I)({ id: "theme.docs.sidebar.navAriaLabel", message: "Docs sidebar", description: "The ARIA label for the sidebar navigation" }), className: (0, l.Z)("menu thin-scrollbar", J.menu, c && J.menuWithAnnouncementBar, r) }, a.createElement("ul", { className: (0, l.Z)(o.k.docs.docSidebarMenu, "menu__list") }, a.createElement(Y, { items: n, activePath: t, level: 1 })));
   }
   const q = { sidebar: "sidebar_mhZE", sidebarWithHideableNavbar: "sidebarWithHideableNavbar__6UL", sidebarHidden: "sidebarHidden__LRd", sidebar__content: "sidebar__content_LJMP", "sidebar__content--hidden": "sidebar__content--hidden_JLGr", "sidebar__toggle-button": "sidebar__toggle-button_CFx3", "sidebar__toggle-button--icon-only": "sidebar__toggle-button--icon-only_hRXq" };
   var G = (0, x.Z)("arrow-bar-to-left", "IconArrowBarToLeft", [
     ["path", { d: "M10 12l10 0", key: "svg-0" }],
     ["path", { d: "M10 12l4 4", key: "svg-1" }],
     ["path", { d: "M10 12l4 -4", key: "svg-2" }],
     ["path", { d: "M4 4l0 16", key: "svg-3" }],
    ]),
    X = (0, x.Z)("arrow-bar-to-right", "IconArrowBarToRight", [
     ["path", { d: "M14 12l-10 0", key: "svg-0" }],
     ["path", { d: "M14 12l-4 4", key: "svg-1" }],
     ["path", { d: "M14 12l-4 -4", key: "svg-2" }],
     ["path", { d: "M20 4l0 16", key: "svg-3" }],
    ]);
   function j(e) {
    let { path: t, sidebar: n, onCollapse: r, isHidden: o } = e;
    const {
      navbar: { hideOnScroll: c },
     } = (0, v.L)(),
     { isNavbarVisible: i } = (0, k.c)(c),
     s = (0, a.useId)();
    return a.createElement("div", { className: (0, l.Z)(q.sidebar, c && q.sidebarWithHideableNavbar, o && q.sidebarHidden, i && q.sidebarWithNavbar) }, a.createElement(M.zx, { appearance: "subtle-button", onClick: r, className: (0, l.Z)(q["sidebar__toggle-button"], o && q["sidebar__toggle-button--icon-only"]), "aria-controls": s, "aria-label": o ? "Toon sidebar" : "Verberg sidebar", "aria-expanded": !o }, o ? a.createElement(a.Fragment, null, a.createElement(X, null)) : a.createElement(a.Fragment, null, a.createElement(G, null), " Verberg")), a.createElement("div", { id: s, "aria-expanded": !o, className: (0, l.Z)(q.sidebar__content, o && q["sidebar__content--hidden"]) }, a.createElement(O, { path: t, sidebar: n })));
   }
   const K = a.memo(j);
   var Q = n(13102),
    $ = n(93163);
   const ee = (e) => {
    let { sidebar: t, path: n } = e;
    const r = (0, $.e)();
    return a.createElement(
     "ul",
     { className: (0, l.Z)(o.k.docs.docSidebarMenu, "menu__list") },
     a.createElement(Y, {
      items: t,
      activePath: n,
      onItemClick: (e) => {
       "category" === e.type && e.href && r.toggle(), "link" === e.type && r.toggle();
      },
      level: 1,
     })
    );
   };
   function te(e) {
    return a.createElement(Q.Zo, { component: ee, props: e });
   }
   const ne = a.memo(te);
   function ae(e) {
    const t = (0, g.i)(),
     n = "desktop" === t || "ssr" === t,
     l = "mobile" === t;
    return a.createElement(a.Fragment, null, n && a.createElement(K, e), l && a.createElement(ne, e));
   }
   const le = { docSidebarContainer: "docSidebarContainer_rpaz", sidebarViewport: "sidebarViewport_YVHi" };
   function re(e) {
    let { children: t } = e;
    const n = (0, d.V)();
    return a.createElement(a.Fragment, { key: (null == n ? void 0 : n.name) ?? "noSidebar" }, t);
   }
   function oe(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: r } = e;
    const { pathname: c } = (0, _.TH)(),
     [i, s] = (0, a.useState)(!1),
     d = (0, a.useCallback)(() => {
      s((e) => !e);
     }, [r, i]);
    return a.createElement(
     "aside",
     {
      className: (0, l.Z)(o.k.docs.docSidebarContainer, le.docSidebarContainer),
      onTransitionEnd: (e) => {
       n && s(!0);
      },
     },
     a.createElement(re, null, a.createElement("div", { className: (0, l.Z)(le.sidebarViewport, i && le.sidebarViewportHidden) }, a.createElement(ae, { sidebar: t, path: c, onCollapse: d, isHidden: i })))
    );
   }
   const ce = { docMainContainer: "docMainContainer_gTbr", docMainContainerEnhanced: "docMainContainerEnhanced_Uz_u", docItemWrapperEnhanced: "docItemWrapperEnhanced_czyv" };
   function ie(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const r = (0, d.V)();
    return a.createElement("main", { className: (0, l.Z)(ce.docMainContainer, (t || !r) && ce.docMainContainerEnhanced) }, a.createElement("div", { className: (0, l.Z)("container padding-top--md padding-bottom--lg", ce.docItemWrapper, t && ce.docItemWrapperEnhanced) }, n));
   }
   const se = { docPage: "docPage__5DB", docsWrapper: "docsWrapper_BCFX" };
   function de(e) {
    let { children: t } = e;
    const n = (0, d.V)(),
     [l, r] = (0, a.useState)(!1);
    return a.createElement(m.Z, { wrapperClassName: se.docsWrapper }, a.createElement(E, null), a.createElement("div", { className: se.docPage }, n && a.createElement(oe, { sidebar: n.items, hiddenSidebarContainer: l, setHiddenSidebarContainer: r }), a.createElement(ie, { hiddenSidebarContainer: l }, t)));
   }
   var me = n(4972),
    ue = n(90197);
   function be(e) {
    const { versionMetadata: t } = e;
    return a.createElement(a.Fragment, null, a.createElement(ue.Z, { version: t.version, tag: (0, c.os)(t.pluginId, t.version) }), a.createElement(r.d, null, t.noIndex && a.createElement("meta", { name: "robots", content: "noindex, nofollow" })));
   }
   function pe(e) {
    const { versionMetadata: t } = e,
     n = (0, i.hI)(e);
    if (!n) return a.createElement(me.default, null);
    const { docElement: c, sidebarName: m, sidebarItems: u } = n;
    return a.createElement(a.Fragment, null, a.createElement(be, e), a.createElement(r.FG, { className: (0, l.Z)(o.k.wrapper.docsPages, o.k.page.docsDocPage, e.versionMetadata.className) }, a.createElement(s.q, { version: t }, a.createElement(d.b, { name: m, items: u }, a.createElement(de, null, c)))));
   }
  },
  4972: (e, t, n) => {
   n.r(t), n.d(t, { default: () => c });
   var a = n(67294),
    l = n(95999),
    r = n(10833),
    o = n(23770);
   function c() {
    return a.createElement(a.Fragment, null, a.createElement(r.d, { title: (0, l.I)({ id: "theme.NotFound.title", message: "Page Not Found" }) }), a.createElement(o.Z, null, a.createElement("main", { className: "container margin-vert--xl" }, a.createElement("div", { className: "row" }, a.createElement("div", { className: "col col--6 col--offset-3" }, a.createElement("h1", { className: "hero__title" }, a.createElement(l.Z, { id: "theme.NotFound.title", description: "The title of the 404 page" }, "Page Not Found")), a.createElement("p", null, a.createElement(l.Z, { id: "theme.NotFound.p1", description: "The first paragraph of the 404 page" }, "We could not find what you were looking for.")), a.createElement("p", null, a.createElement(l.Z, { id: "theme.NotFound.p2", description: "The 2nd paragraph of the 404 page" }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));
   }
  },
 },
]);
