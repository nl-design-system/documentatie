"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94368],
 {
  33993: (e, t, n) => {
   n.r(t), n.d(t, { default: () => be });
   var a = n(67294),
    i = n(36905),
    o = n(10833),
    s = n(35281),
    r = n(52802),
    l = n(1116),
    d = n(95999),
    c = n(12466),
    u = n(85936);
   const h = { backToTopButton: "backToTopButton_sjWU", backToTopButtonShow: "backToTopButtonShow_xfvO" };
   var m = n(85893);
   function b() {
    const { shown: e, scrollToTop: t } = (function (e) {
     let { threshold: t } = e;
     const [n, i] = (0, a.useState)(!1),
      o = (0, a.useRef)(!1),
      { startScroll: s, cancelScroll: r } = (0, c.Ct)();
     return (
      (0, c.RF)((e, n) => {
       let { scrollY: a } = e;
       const s = n?.scrollY;
       s && (o.current ? (o.current = !1) : a >= s ? (r(), i(!1)) : a < t ? i(!1) : a + window.innerHeight < document.documentElement.scrollHeight && i(!0));
      }),
      (0, u.S)((e) => {
       e.location.hash && ((o.current = !0), i(!1));
      }),
      { shown: n, scrollToTop: () => s(0) }
     );
    })({ threshold: 300 });
    return (0, m.jsx)("button", { "aria-label": (0, d.I)({ id: "theme.BackToTopButton.buttonAriaLabel", message: "Scroll back to top", description: "The ARIA label for the back to top button" }), className: (0, i.Z)("clean-btn", s.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow), type: "button", onClick: t });
   }
   var p = n(91442),
    x = n(16550),
    _ = n(87524),
    g = n(86010),
    j = n(86668),
    v = n(99445),
    k = n(59689),
    f = n(902);
   const C = Symbol("EmptyContext"),
    S = a.createContext(C);
   function I(e) {
    let { children: t } = e;
    const [n, i] = (0, a.useState)(null),
     o = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: i }), [n]);
    return (0, m.jsx)(S.Provider, { value: o, children: t });
   }
   var N = n(86043),
    y = n(39960),
    T = n(72389),
    Z = n(65663),
    w = n(30853),
    L = (0, w.Z)("chevron-down", "IconChevronDown", [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]]),
    B = (0, w.Z)("chevron-up", "IconChevronUp", [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]]);
   function A(e) {
    let { categoryLabel: t, collapsed: n, onClick: a } = e;
    return (0, m.jsx)(Z.zx, { appearance: "subtle-button", "aria-label": (0, d.I)({ id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel", message: "Toggle the collapsible sidebar category '{label}'", description: "The ARIA label to toggle the collapsible sidebar category" }, { label: t }), type: "button", className: "clean-btn", onClick: a, children: (0, m.jsx)(Z.JO, { children: n ? (0, m.jsx)(L, {}) : (0, m.jsx)(B, {}) }) });
   }
   function M(e) {
    let { item: t, onItemClick: n, activePath: i, level: o, index: l, ...d } = e;
    const { items: c, label: u, collapsible: h, className: b, href: p } = t,
     x = "sidebar__main-category" === b,
     {
      docs: {
       sidebar: { autoCollapseCategories: _ },
      },
     } = (0, j.L)(),
     v = (function (e) {
      const t = (0, T.Z)();
      return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, r.LM)(e) : void 0), [e, t]);
     })(t),
     k = (0, r._F)(t, i),
     { collapsed: I, setCollapsed: Z } = (0, N.u)({ initialState: () => !!h && !k && t.collapsed }),
     { expandedItem: w, setExpandedItem: L } = (function () {
      const e = (0, a.useContext)(S);
      if (e === C) throw new f.i6("DocSidebarItemsExpandedStateProvider");
      return e;
     })(),
     B = function (e) {
      void 0 === e && (e = !I), L(e ? null : l), Z(e);
     };
    return (
     (function (e) {
      let { isActive: t, collapsed: n, updateCollapsed: i } = e;
      const o = (0, f.D9)(t);
      (0, a.useEffect)(() => {
       t && !o && n && i(!1);
      }, [t, o, n, i]);
     })({ isActive: k, collapsed: I, updateCollapsed: B }),
     (0, a.useEffect)(() => {
      h && null != w && w !== l && _ && Z(!0);
     }, [h, w, l, Z, _]),
     (0, m.jsxs)("li", {
      className: (0, g.Z)(s.k.docs.docSidebarItemCategory, s.k.docs.docSidebarItemCategoryLevel(o), "menu__list-item", { "menu__list-item--collapsed": I }),
      children: [
       (0, m.jsxs)("div", {
        className: (0, g.Z)("menu__list-item-collapsible", { "sidebar__main-category": x }),
        children: [
         x ? u : (0, m.jsx)(y.Z, { className: (0, g.Z)("menu__link", "utrecht-link", { "menu__link--sublist": h, "menu__link--sublist-caret": !p && h }), href: h ? v ?? "#" : v, ...d, children: u }),
         p &&
          h &&
          (0, m.jsx)(A, {
           categoryLabel: u,
           onClick: (e) => {
            e.preventDefault(), B();
           },
           collapsed: I,
          }),
        ],
       }),
       (0, m.jsx)(N.z, { lazy: !0, as: "ul", className: "menu__list", collapsed: I, children: (0, m.jsx)(U, { items: c, tabIndex: I ? -1 : 0, onItemClick: n, activePath: i, level: o + 1 }) }),
      ],
     })
    );
   }
   var H = n(13919),
    E = n(39471);
   const W = { menuExternalLink: "menuExternalLink_NnFM" };
   function R(e) {
    let { item: t, onItemClick: n, activePath: a, level: i, index: o, ...l } = e;
    const { href: d, label: c, className: u, autoAddBaseUrl: h } = t,
     b = (0, r._F)(t, a),
     p = (0, H.Z)(d);
    return (0, m.jsx)("li", { className: (0, g.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(i), "menu__list-item", u), children: (0, m.jsxs)(y.Z, { className: (0, g.Z)("menu__link", !p && W.menuExternalLink, { "menu__link--active": b }, "utrecht-link"), autoAddBaseUrl: h, "aria-current": b ? "page" : void 0, to: d, ...(p && { onClick: n ? () => n(t) : void 0 }), ...l, children: [c, !p && (0, m.jsx)(E.Z, {})] }) }, c);
   }
   const F = { menuHtmlItem: "menuHtmlItem_PEWV" };
   function P(e) {
    let { item: t, level: n, index: a } = e;
    const { value: i, defaultStyle: o, className: r } = t;
    return (0, m.jsx)("li", { className: (0, g.Z)(s.k.docs.docSidebarItemLink, s.k.docs.docSidebarItemLinkLevel(n), o && [F.menuHtmlItem, "menu__list-item"], r), dangerouslySetInnerHTML: { __html: i } }, a);
   }
   function V(e) {
    let { item: t, ...n } = e;
    switch (t.type) {
     case "category":
      return (0, m.jsx)(M, { item: t, ...n });
     case "html":
      return (0, m.jsx)(P, { item: t, ...n });
     default:
      return (0, m.jsx)(R, { item: t, ...n });
    }
   }
   function D(e) {
    let { items: t, ...n } = e;
    return (0, m.jsx)(I, { children: t.map((e, t) => (0, m.jsx)(V, { item: e, index: t, ...n }, t)) });
   }
   const U = (0, a.memo)(D),
    z = { menu: "menu_Y1UP", menuWithAnnouncementBar: "menuWithAnnouncementBar_fPny" };
   function Y(e) {
    let { path: t, sidebar: n, className: i } = e;
    const o = (function () {
     const { isActive: e } = (0, k.nT)(),
      [t, n] = (0, a.useState)(e);
     return (
      (0, c.RF)(
       (t) => {
        let { scrollY: a } = t;
        e && n(0 === a);
       },
       [e]
      ),
      e && t
     );
    })();
    return (0, m.jsx)("nav", { "aria-label": (0, d.I)({ id: "theme.docs.sidebar.navAriaLabel", message: "Docs sidebar", description: "The ARIA label for the sidebar navigation" }), className: (0, g.Z)("menu thin-scrollbar", z.menu, o && z.menuWithAnnouncementBar, i), children: (0, m.jsx)("ul", { className: (0, g.Z)(s.k.docs.docSidebarMenu, "menu__list"), children: (0, m.jsx)(U, { items: n, activePath: t, level: 1 }) }) });
   }
   const J = { sidebar: "sidebar_mhZE", sidebarWithHideableNavbar: "sidebarWithHideableNavbar__6UL", sidebarHidden: "sidebarHidden__LRd", sidebar__content: "sidebar__content_LJMP", "sidebar__content--hidden": "sidebar__content--hidden_JLGr", "sidebar__toggle-button": "sidebar__toggle-button_CFx3", "sidebar__toggle-button--icon-only": "sidebar__toggle-button--icon-only_hRXq" };
   var G = (0, w.Z)("arrow-bar-to-left", "IconArrowBarToLeft", [
     ["path", { d: "M10 12l10 0", key: "svg-0" }],
     ["path", { d: "M10 12l4 4", key: "svg-1" }],
     ["path", { d: "M10 12l4 -4", key: "svg-2" }],
     ["path", { d: "M4 4l0 16", key: "svg-3" }],
    ]),
    O = (0, w.Z)("arrow-bar-to-right", "IconArrowBarToRight", [
     ["path", { d: "M14 12l-10 0", key: "svg-0" }],
     ["path", { d: "M14 12l-4 4", key: "svg-1" }],
     ["path", { d: "M14 12l-4 -4", key: "svg-2" }],
     ["path", { d: "M20 4l0 16", key: "svg-3" }],
    ]);
   function K(e) {
    let { path: t, sidebar: n, onCollapse: i, isHidden: o } = e;
    const {
      navbar: { hideOnScroll: s },
     } = (0, j.L)(),
     { isNavbarVisible: r } = (0, v.c)(s),
     l = (0, a.useId)();
    return (0, m.jsxs)("div", { className: (0, g.Z)(J.sidebar, s && J.sidebarWithHideableNavbar, o && J.sidebarHidden, r && J.sidebarWithNavbar), children: [(0, m.jsx)(Z.zx, { appearance: "subtle-button", onClick: i, className: (0, g.Z)(J["sidebar__toggle-button"], o && J["sidebar__toggle-button--icon-only"]), "aria-controls": l, "aria-label": o ? "Toon sidebar" : "Verberg sidebar", "aria-expanded": !o, children: o ? (0, m.jsx)(m.Fragment, { children: (0, m.jsx)(O, {}) }) : (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(G, {}), " Verberg"] }) }), (0, m.jsx)("div", { id: l, "aria-expanded": !o, className: (0, g.Z)(J.sidebar__content, o && J["sidebar__content--hidden"]), children: (0, m.jsx)(Y, { path: t, sidebar: n }) })] });
   }
   const q = a.memo(K);
   var Q = n(13102),
    X = n(93163);
   const $ = (e) => {
    let { sidebar: t, path: n } = e;
    const a = (0, X.e)();
    return (0, m.jsx)("ul", {
     className: (0, g.Z)(s.k.docs.docSidebarMenu, "menu__list"),
     children: (0, m.jsx)(U, {
      items: t,
      activePath: n,
      onItemClick: (e) => {
       "category" === e.type && e.href && a.toggle(), "link" === e.type && a.toggle();
      },
      level: 1,
     }),
    });
   };
   function ee(e) {
    return (0, m.jsx)(Q.Zo, { component: $, props: e });
   }
   const te = a.memo(ee);
   function ne(e) {
    const t = (0, _.i)(),
     n = "desktop" === t || "ssr" === t,
     a = "mobile" === t;
    return (0, m.jsxs)(m.Fragment, { children: [n && (0, m.jsx)(q, { ...e }), a && (0, m.jsx)(te, { ...e })] });
   }
   function ae(e) {
    return (0, m.jsx)("svg", { width: "20", height: "20", "aria-hidden": "true", ...e, children: (0, m.jsxs)("g", { fill: "#7a7a7a", children: [(0, m.jsx)("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), (0, m.jsx)("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })] }) });
   }
   const ie = { expandButton: "expandButton_TmdG", expandButtonIcon: "expandButtonIcon_i1dp" };
   function oe(e) {
    let { toggleSidebar: t } = e;
    return (0, m.jsx)("div", { className: ie.expandButton, title: (0, d.I)({ id: "theme.docs.sidebar.expandButtonTitle", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), "aria-label": (0, d.I)({ id: "theme.docs.sidebar.expandButtonAriaLabel", message: "Expand sidebar", description: "The ARIA label and title attribute for expand button of doc sidebar" }), tabIndex: 0, role: "button", onKeyDown: t, onClick: t, children: (0, m.jsx)(ae, { className: ie.expandButtonIcon }) });
   }
   const se = { docSidebarContainer: "docSidebarContainer_YfHR", docSidebarContainerHidden: "docSidebarContainerHidden_DPk8", sidebarViewport: "sidebarViewport_aRkj" };
   function re(e) {
    let { children: t } = e;
    const n = (0, l.V)();
    return (0, m.jsx)(a.Fragment, { children: t }, n?.name ?? "noSidebar");
   }
   function le(e) {
    let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: o } = e;
    const { pathname: r } = (0, x.TH)(),
     [l, d] = (0, a.useState)(!1),
     c = (0, a.useCallback)(() => {
      l && d(!1), !l && (0, p.n)() && d(!0), o((e) => !e);
     }, [o, l]);
    return (0, m.jsx)("aside", {
     className: (0, i.Z)(s.k.docs.docSidebarContainer, se.docSidebarContainer, n && se.docSidebarContainerHidden),
     onTransitionEnd: (e) => {
      e.currentTarget.classList.contains(se.docSidebarContainer) && n && d(!0);
     },
     children: (0, m.jsx)(re, { children: (0, m.jsxs)("div", { className: (0, i.Z)(se.sidebarViewport, l && se.sidebarViewportHidden), children: [(0, m.jsx)(ne, { sidebar: t, path: r, onCollapse: c, isHidden: l }), l && (0, m.jsx)(oe, { toggleSidebar: c })] }) }),
    });
   }
   const de = { docMainContainer: "docMainContainer_TBSr", docMainContainerEnhanced: "docMainContainerEnhanced_lQrH", docItemWrapperEnhanced: "docItemWrapperEnhanced_JWYK" };
   function ce(e) {
    let { hiddenSidebarContainer: t, children: n } = e;
    const a = (0, l.V)();
    return (0, m.jsx)("main", { className: (0, i.Z)(de.docMainContainer, (t || !a) && de.docMainContainerEnhanced), children: (0, m.jsx)("div", { className: (0, i.Z)("container padding-top--md padding-bottom--lg", de.docItemWrapper, t && de.docItemWrapperEnhanced), children: n }) });
   }
   const ue = { docRoot: "docRoot_UBD9", docsWrapper: "docsWrapper_hBAB" };
   function he(e) {
    let { children: t } = e;
    const n = (0, l.V)(),
     [i, o] = (0, a.useState)(!1);
    return (0, m.jsxs)("div", { className: ue.docsWrapper, children: [(0, m.jsx)(b, {}), (0, m.jsxs)("div", { className: ue.docRoot, children: [n && (0, m.jsx)(le, { sidebar: n.items, hiddenSidebarContainer: i, setHiddenSidebarContainer: o }), (0, m.jsx)(ce, { hiddenSidebarContainer: i, children: t })] })] });
   }
   var me = n(5658);
   function be(e) {
    const t = (0, r.SN)(e);
    if (!t) return (0, m.jsx)(me.Z, {});
    const { docElement: n, sidebarName: a, sidebarItems: d } = t;
    return (0, m.jsx)(o.FG, { className: (0, i.Z)(s.k.page.docsDocPage), children: (0, m.jsx)(l.b, { name: a, items: d, children: (0, m.jsx)(he, { children: n }) }) });
   }
  },
  5658: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(67294);
   var a = n(36905),
    i = n(95999),
    o = n(92503),
    s = n(85893);
   function r(e) {
    let { className: t } = e;
    return (0, s.jsx)("main", { className: (0, a.Z)("container margin-vert--xl", t), children: (0, s.jsx)("div", { className: "row", children: (0, s.jsxs)("div", { className: "col col--6 col--offset-3", children: [(0, s.jsx)(o.Z, { as: "h1", className: "hero__title", children: (0, s.jsx)(i.Z, { id: "theme.NotFound.title", description: "The title of the 404 page", children: "Page Not Found" }) }), (0, s.jsx)("p", { children: (0, s.jsx)(i.Z, { id: "theme.NotFound.p1", description: "The first paragraph of the 404 page", children: "We could not find what you were looking for." }) }), (0, s.jsx)("p", { children: (0, s.jsx)(i.Z, { id: "theme.NotFound.p2", description: "The 2nd paragraph of the 404 page", children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken." }) })] }) }) });
   }
  },
 },
]);
